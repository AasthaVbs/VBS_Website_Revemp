// @ts-nocheck
import { useLayoutEffect, useState } from "react";

const ACTIVE_CLASS = "mep-figma-services__card--active";

function readHeaderOffset() {
  const header = document.querySelector(".vbs-site-header");
  return header ? Math.ceil(header.getBoundingClientRect().height) : 72;
}

function getTrackPad(section) {
  const raw = getComputedStyle(section).getPropertyValue("--services-track-pad");
  const px = parseFloat(raw);
  return Number.isFinite(px) ? px : 32;
}

const COMPACT_VIEWPORT_MAX = 820;
const CARD_HEIGHT_MAX = 560;
const CARD_HEIGHT_MIN = 300;
/** More horizontal travel per vertical scroll — shorter pin runway */
const HOVER_SCROLL_RATIO = 1.25;
/**
 * Cards-only pin: denser mapping (less vertical travel per card).
 * Runway must stay maxScroll / ratio — never cap below that, or the pin
 * releases and the page scrolls down before the last card is shown.
 */
const CARDS_ONLY_SCROLL_RATIO = 2.6;
const CARDS_ONLY_SMOOTHING = 0.42;
const HOVER_SCROLL_SMOOTHING = 0.28;

function measureTrackCardHeight(track) {
  if (!track) return CARD_HEIGHT_MIN;

  let measured = CARD_HEIGHT_MIN;
  track.querySelectorAll(".mep-figma-services__card").forEach((card) => {
    measured = Math.max(measured, Math.ceil(card.getBoundingClientRect().height));
  });
  return measured;
}

function updateStickyCardSizing(section, sticky, headerOffset, track) {
  const isDesktop = window.matchMedia("(min-width: 768px)").matches;
  const isWideHScroll =
    section.classList.contains("mep-figma-services--wide-cards") &&
    (section.classList.contains("mep-figma-services--h-scroll") ||
      section.classList.contains("mep-figma-services--hover-scroll"));

  if (!isDesktop || !isWideHScroll) {
    section.classList.remove("mep-figma-services--compact-sticky");
    section.style.removeProperty("--services-card-h");
    section.style.removeProperty("--services-header-offset");
    return;
  }

  const isCardsOnlySticky = sticky.classList.contains("mep-figma-services__sticky--cards-only");
  const available = window.innerHeight - headerOffset;
  const isCompact = window.innerHeight <= COMPACT_VIEWPORT_MAX;

  section.style.setProperty("--services-header-offset", `${headerOffset}px`);

  section.classList.toggle("mep-figma-services--compact-sticky", isCompact && !isCardsOnlySticky);

  const cta = sticky.querySelector(".mep-figma-services__cta-wrap");
  const ctaH = cta?.offsetHeight ?? 52;
  const stickyPadding = isCompact ? 16 : isCardsOnlySticky ? 0 : 48;
  const headerEl = sticky.querySelector(".mep-figma-services__header");
  // Wide-card ACS keeps title+description in the sticky pin — always measure them.
  const headerH = isCardsOnlySticky ? 0 : (headerEl?.offsetHeight ?? 0);
  const gap = isCompact ? 8 : isCardsOnlySticky ? 16 : 24;
  const chrome = stickyPadding + headerH + gap + ctaH + (isCardsOnlySticky ? 0 : gap);

  section.style.removeProperty("--services-card-h");
  const measuredCardH = measureTrackCardHeight(track);
  const viewportMax = Math.max(CARD_HEIGHT_MIN, available - chrome);

  let maxCardH = Math.max(measuredCardH, CARD_HEIGHT_MIN);
  if (isCardsOnlySticky) {
    maxCardH = measuredCardH;
  } else if (isCompact) {
    maxCardH = Math.min(maxCardH, viewportMax);
  }

  section.style.setProperty("--services-card-h", `${maxCardH}px`);
}

/**
 * Scroll-pinned horizontal services track â€” vertical scroll drives card carousel.
 */
export function useStickyServicesCarousel(
  sectionRef,
  stickyRef,
  trackRef,
  spacerRef,
  {
    enabled = true,
    pinZoneRef = null,
    touchScrollViewportRef = null,
    carouselViewportRef = null,
    cardsOnlyPin = false,
  } = {},
) {
  const [activeIndex, setActiveIndex] = useState(0);

  useLayoutEffect(() => {
    if (!enabled) return undefined;

    const section = sectionRef.current;
    const sticky = stickyRef.current;
    const track = trackRef.current;
    const spacer = spacerRef.current;
    if (!section || !sticky || !track || !spacer) return undefined;

    let maxScroll = 0;
    let stableStickyH = 0;
    let measureRaf = 0;
    let scrollRaf = 0;
    let smoothRaf = 0;
    let lastActiveIdx = -1;
    let pinMode = null;
    let headerOffset = readHeaderOffset();
    let cardStride = 0;
    let cardCount = 0;
    let cardElements = [];
    let displayScrolled = 0;
    let targetScrolled = 0;
    const useSmoothScroll =
      cardsOnlyPin || section.classList.contains("mep-figma-services--hover-scroll");
    const scrollSmoothing = cardsOnlyPin ? CARDS_ONLY_SMOOTHING : HOVER_SCROLL_SMOOTHING;

    const getPinTarget = () => pinZoneRef?.current ?? section;

    const getScrollRatio = () => {
      if (cardsOnlyPin) return CARDS_ONLY_SCROLL_RATIO;
      if (section.classList.contains("mep-figma-services--hover-scroll")) {
        return HOVER_SCROLL_RATIO;
      }
      return 1;
    };

    const getRunway = () => {
      if (maxScroll <= 0) return 0;
      // Pin duration must map 1:1 to full horizontal travel so the last card
      // is fully visible before the sticky releases and the page scrolls on.
      return maxScroll / getScrollRatio();
    };

    const getScrolledFromPin = (pinTop) => {
      const vertical = Math.max(0, headerOffset - pinTop);
      return Math.min(maxScroll, vertical * getScrollRatio());
    };

    const refreshCardMetrics = () => {
      cardElements = Array.from(track.querySelectorAll(".mep-figma-services__card"));
      cardCount = cardElements.length;
      if (cardCount >= 2) {
        cardStride = cardElements[1].offsetLeft - cardElements[0].offsetLeft;
      } else if (cardCount === 1) {
        cardStride = cardElements[0].offsetWidth;
      } else {
        cardStride = 0;
      }
    };

    const getActiveIndex = (scrolled) => {
      if (cardStride <= 0 || cardCount === 0) return 0;
      return Math.min(cardCount - 1, Math.max(0, Math.round(scrolled / cardStride)));
    };

    const setActiveCard = (index) => {
      if (index === lastActiveIdx) return;
      cardElements.forEach((card, i) => {
        card.classList.toggle(ACTIVE_CLASS, i === index);
      });
      lastActiveIdx = index;
      setActiveIndex(index);
    };

    const isInActiveCardsPin = (pinTarget) => {
      if (!cardsOnlyPin || maxScroll <= 0) return false;
      const scrolled = getScrolledFromPin(pinTarget.getBoundingClientRect().top);
      return scrolled > 2 && scrolled < maxScroll - 2;
    };

    const setPinTargetHeight = (pinTarget, stickyH) => {
      pinTarget.style.height = `${stickyH + getRunway()}px`;
    };

    const renderTrack = (value) => {
      track.style.transform = `translate3d(${-value}px, 0, 0)`;
      setActiveCard(getActiveIndex(value));
    };

    const tickSmooth = () => {
      const diff = targetScrolled - displayScrolled;
      if (Math.abs(diff) < 0.75) {
        displayScrolled = targetScrolled;
        smoothRaf = 0;
        renderTrack(displayScrolled);
        return;
      }
      displayScrolled += diff * scrollSmoothing;
      renderTrack(displayScrolled);
      smoothRaf = requestAnimationFrame(tickSmooth);
    };

    const setTargetScroll = (target, { immediate = false } = {}) => {
      targetScrolled = target;
      if (!useSmoothScroll || immediate) {
        if (smoothRaf) {
          cancelAnimationFrame(smoothRaf);
          smoothRaf = 0;
        }
        displayScrolled = target;
        renderTrack(target);
        return;
      }
      if (!smoothRaf) {
        smoothRaf = requestAnimationFrame(tickSmooth);
      }
    };

    const applyScrollPin = (pinTop, stickyH) => {
      const runway = getRunway();
      let nextMode = "before";
      if (pinTop <= headerOffset && pinTop > headerOffset - runway) {
        nextMode = "fixed";
      } else if (pinTop <= headerOffset - runway) {
        nextMode = "after";
      }

      if (nextMode === "fixed") {
        if (pinMode !== "fixed") {
          sticky.style.position = "fixed";
          sticky.style.left = "0";
          sticky.style.right = "0";
          sticky.style.width = "100%";
          sticky.style.zIndex = "5";
          spacer.style.height = `${stickyH}px`;
        }
        sticky.style.top = `${headerOffset}px`;
        pinMode = "fixed";
        return;
      }

      if (nextMode === pinMode) return;
      pinMode = nextMode;

      if (nextMode === "before") {
        clearPinStyles(sticky, spacer);
        return;
      }

      sticky.style.position = "absolute";
      sticky.style.top = `${runway}px`;
      sticky.style.left = "0";
      sticky.style.right = "0";
      sticky.style.width = "100%";
      sticky.style.zIndex = "";
      spacer.style.height = "0px";
    };

    const runScrollUpdate = () => {
      scrollRaf = 0;
      headerOffset = readHeaderOffset();
      const pinTarget = getPinTarget();
      const pinTop = pinTarget.getBoundingClientRect().top;
      const scrolled = getScrolledFromPin(pinTop);
      const stickyH = stableStickyH > 0 ? stableStickyH : getStickyHeight(sticky);

      // Page scroll maps to carousel position; smooth interpolation on hover-scroll layouts.
      setTargetScroll(scrolled, { immediate: !useSmoothScroll });
      applyScrollPin(pinTop, stickyH);
    };

    const onScroll = () => {
      if (!scrollRaf) {
        scrollRaf = requestAnimationFrame(runScrollUpdate);
      }
    };

    const getViewportWidth = () => {
      const viewport =
        carouselViewportRef?.current ??
        touchScrollViewportRef?.current ??
        track.parentElement;
      if (viewport) {
        return viewport.getBoundingClientRect().width;
      }
      return window.innerWidth;
    };

    const measure = () => {
      headerOffset = readHeaderOffset();
      refreshCardMetrics();
      pinMode = null;
      cancelAnimationFrame(smoothRaf);
      smoothRaf = 0;

      const pinTarget = getPinTarget();
      const inActivePin = isInActiveCardsPin(pinTarget);

      if (!inActivePin) {
        updateStickyCardSizing(section, sticky, headerOffset, track);
      }

      const viewportWidth = getViewportWidth();
      const nextMaxScroll = Math.max(0, track.scrollWidth - viewportWidth);

      if (inActivePin) {
        maxScroll = Math.max(maxScroll, nextMaxScroll);
      } else {
        maxScroll = nextMaxScroll;
      }

      const stickyH = inActivePin && stableStickyH > 0
        ? stableStickyH
        : getStickyHeight(sticky);

      if (!inActivePin) {
        stableStickyH = stickyH;
      }

      pinTarget.style.position = "relative";
      pinTarget.dataset.servicesMaxScroll = String(maxScroll);
      pinTarget.dataset.servicesRunway = String(getRunway());
      pinTarget.dataset.servicesScrollRatio = String(getScrollRatio());
      setPinTargetHeight(pinTarget, stickyH);
      section.style.position = "relative";
      if (!pinZoneRef?.current) {
        section.style.height = `${stickyH + getRunway()}px`;
      } else {
        section.style.height = "";
      }

      const pinTop = pinTarget.getBoundingClientRect().top;
      targetScrolled = getScrolledFromPin(pinTop);
      displayScrolled = targetScrolled;
      runScrollUpdate();
    };

    const scheduleMeasure = () => {
      cancelAnimationFrame(measureRaf);
      measureRaf = requestAnimationFrame(measure);
    };

    measure();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", scheduleMeasure, { passive: true });

    const resizeObserver = new ResizeObserver(scheduleMeasure);
    resizeObserver.observe(track);
    if (!cardsOnlyPin) {
      resizeObserver.observe(sticky);
    }
    const pinZone = pinZoneRef?.current;
    if (pinZone && !cardsOnlyPin) resizeObserver.observe(pinZone);

    const viewportEl = carouselViewportRef?.current ?? touchScrollViewportRef?.current;
    if (viewportEl) resizeObserver.observe(viewportEl);

    track.querySelectorAll("img").forEach((img) => {
      if (!img.complete) img.addEventListener("load", scheduleMeasure, { once: true });
    });

    const touchViewport = touchScrollViewportRef?.current ?? null;
    const onTouchViewportScroll = () => {
      if (!touchViewport) return;
      const scrolled = touchViewport.scrollLeft;
      displayScrolled = scrolled;
      targetScrolled = scrolled;
      track.style.transform = `translate3d(${-scrolled}px, 0, 0)`;
      setActiveCard(getActiveIndex(scrolled));
    };

    touchViewport?.addEventListener("scroll", onTouchViewportScroll, { passive: true });

    return () => {
      touchViewport?.removeEventListener("scroll", onTouchViewportScroll);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(measureRaf);
      cancelAnimationFrame(scrollRaf);
      cancelAnimationFrame(smoothRaf);
      window.removeEventListener("resize", scheduleMeasure);
      resizeObserver.disconnect();
      section.style.position = "";
      section.style.height = "";
      const pinTarget = getPinTarget();
      if (pinTarget) {
        pinTarget.style.position = "";
        pinTarget.style.height = "";
      }
      section.classList.remove("mep-figma-services--compact-sticky");
      section.style.removeProperty("--services-card-h");
      section.style.removeProperty("--services-header-offset");
      clearPinStyles(sticky, spacer);
      track.style.transform = "";
      cardElements.forEach((card) => card.classList.remove(ACTIVE_CLASS));
    };
  }, [
    enabled,
    cardsOnlyPin,
    sectionRef,
    stickyRef,
    trackRef,
    spacerRef,
    pinZoneRef,
    touchScrollViewportRef,
    carouselViewportRef,
  ]);

  return activeIndex;
}

function clearPinStyles(sticky, spacer) {
  sticky.style.position = "";
  sticky.style.top = "";
  sticky.style.left = "";
  sticky.style.right = "";
  sticky.style.width = "";
  sticky.style.zIndex = "";
  spacer.style.height = "0px";
}

function getStickyHeight(sticky) {
  // Include carousel + CTA (cards-only puts CTA inside sticky). Using only the
  // viewport height made the pin zone shorter than the fixed sticky, so the
  // next section scrolled up while cards were still moving.
  return Math.max(sticky.offsetHeight, 1);
}
