// @ts-nocheck
import { useEffect } from "react";

function getHeaderOffset() {
  const header = document.querySelector(".vbs-site-header");
  return header ? Math.ceil(header.getBoundingClientRect().height) : 72;
}

function getStickyPinHeight(sticky) {
  if (!sticky) return 0;
  const isCardsOnly = sticky.classList.contains("mep-figma-services__sticky--cards-only");
  if (isCardsOnly) {
    const viewport = sticky.querySelector(".mep-figma-services__carousel-viewport");
    return viewport?.offsetHeight ?? sticky.offsetHeight;
  }
  return sticky.offsetHeight;
}

function getScrollRatio(pinTarget) {
  const ratio = parseFloat(pinTarget.dataset.servicesScrollRatio);
  return Number.isFinite(ratio) && ratio > 0 ? ratio : 1;
}

function getRunway(pinTarget, maxScroll) {
  const stored = parseFloat(pinTarget.dataset.servicesRunway);
  if (Number.isFinite(stored) && stored > 0) return stored;
  return maxScroll / getScrollRatio(pinTarget);
}

function getPinState(pinTarget, sticky) {
  const cardsPinTop = getHeaderOffset();
  const pinTop = pinTarget.getBoundingClientRect().top;
  const stickyHeight = getStickyPinHeight(sticky);
  const storedMax = parseFloat(pinTarget.dataset.servicesMaxScroll);
  const maxScroll = Number.isFinite(storedMax)
    ? storedMax
    : Math.max(0, pinTarget.offsetHeight - stickyHeight);
  const runway = getRunway(pinTarget, maxScroll);
  const ratio = getScrollRatio(pinTarget);
  const inPinZone =
    maxScroll > 0 && pinTop <= cardsPinTop && pinTop > cardsPinTop - runway;

  return { inPinZone, maxScroll, runway, ratio, pinTop, cardsPinTop };
}

/** Amplify wheel deltas so one scroll gesture advances the carousel further. */
const WHEEL_SCROLL_MULTIPLIER = 1.15;

function canScrollPage(delta) {
  const pageMax = document.documentElement.scrollHeight - window.innerHeight;
  if (delta > 0) return window.scrollY < pageMax - 1;
  if (delta < 0) return window.scrollY > 1;
  return false;
}

/**
 * Scroll-pinned sections use position:fixed â€” the browser won't scroll the page on wheel.
 * Convert vertical wheel input into window.scrollBy so the sticky carousel advances.
 */
export function useStickyHoverWheelBridge(sectionRef, pinZoneRef, { enabled = true } = {}) {
  useEffect(() => {
    if (!enabled) return undefined;

    const section = sectionRef.current;
    if (!section) return undefined;

    const onWheel = (event) => {
      const pinTarget = pinZoneRef?.current ?? section;
      const sticky = pinTarget.querySelector(".mep-figma-services__sticky");
      const { inPinZone, maxScroll, ratio, pinTop, cardsPinTop } = getPinState(
        pinTarget,
        sticky,
      );
      if (!inPinZone) return;

      const delta =
        Math.abs(event.deltaY) >= Math.abs(event.deltaX) ? event.deltaY : event.deltaX;
      if (delta === 0) return;

      const vertical = Math.max(0, cardsPinTop - pinTop);
      const scrolled = Math.min(maxScroll, vertical * ratio);
      const atStart = scrolled <= 0;
      const atEnd = scrolled >= maxScroll - 1;

      // Same ratio + multiplier for scroll down and scroll up inside the pin zone.
      if (delta > 0 && atEnd) return;
      if (delta < 0 && atStart) return;
      if (!canScrollPage(delta)) return;

      event.preventDefault();
      event.stopPropagation();
      window.scrollBy({
        top: delta * WHEEL_SCROLL_MULTIPLIER,
        left: 0,
        behavior: "auto",
      });
    };

    section.addEventListener("wheel", onWheel, { passive: false, capture: true });

    return () => {
      section.removeEventListener("wheel", onWheel, { capture: true });
    };
  }, [enabled, sectionRef, pinZoneRef]);
}
