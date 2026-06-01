"use client";

import { useEffect, type RefObject } from "react";

const DESKTOP_MQ = "(min-width: 1024px)";
const VIEWPORT_BOTTOM_MARGIN = 24;

function getVerticalWheelDelta(event: WheelEvent): number {
  let delta = event.deltaY;
  if (event.deltaMode === WheelEvent.DOM_DELTA_LINE) delta *= 16;
  else if (event.deltaMode === WheelEvent.DOM_DELTA_PAGE) delta *= window.innerHeight;
  return delta;
}

function getHeaderOffset(): number {
  const header = document.querySelector("header.fixed");
  if (header) {
    return header.getBoundingClientRect().height + 16;
  }
  return 148;
}

/** Section owns scroll while it overlaps the viewport — cursor position does not matter. */
function isSectionActive(section: HTMLElement): boolean {
  const rect = section.getBoundingClientRect();
  const vh = window.innerHeight;
  return rect.top < vh * 0.72 && rect.bottom > vh * 0.18;
}

function isCarouselReadyForHorizontal(carousel: HTMLElement): boolean {
  const rect = carousel.getBoundingClientRect();
  const vh = window.innerHeight;
  const headerOffset = getHeaderOffset();
  const maxBottom = vh - VIEWPORT_BOTTOM_MARGIN;
  const availableHeight = maxBottom - headerOffset;

  if (rect.height <= availableHeight) {
    return rect.top >= headerOffset - 4 && rect.bottom <= maxBottom + 4;
  }

  return rect.top >= headerOffset - 4 && rect.top <= headerOffset + 16;
}

/** One-time micro-adjust so cards are not clipped under the header. */
function snapCarouselIntoView(carousel: HTMLElement): boolean {
  const rect = carousel.getBoundingClientRect();
  const vh = window.innerHeight;
  const headerOffset = getHeaderOffset();
  const maxBottom = vh - VIEWPORT_BOTTOM_MARGIN;
  const availableHeight = maxBottom - headerOffset;

  let scrollDelta = 0;

  if (rect.height <= availableHeight) {
    if (rect.top < headerOffset) scrollDelta = rect.top - headerOffset;
    else if (rect.bottom > maxBottom) scrollDelta = rect.bottom - maxBottom;
  } else if (rect.top < headerOffset) {
    scrollDelta = rect.top - headerOffset;
  }

  if (Math.abs(scrollDelta) < 2) return false;

  window.scrollBy({ top: scrollDelta, behavior: "auto" });
  return true;
}

/**
 * Maps vertical wheel to horizontal carousel scroll while this section is active.
 * Works for wheel events anywhere on the page (window capture). Desktop only.
 */
export function useHorizontalCarouselWheel(
  sectionRef: RefObject<HTMLElement | null>,
  carouselRef: RefObject<HTMLElement | null>,
) {
  useEffect(() => {
    const section = sectionRef.current;
    const carousel = carouselRef.current;
    if (!section || !carousel) return;

    const mq = window.matchMedia(DESKTOP_MQ);
    let desktop = mq.matches;
    let pendingDelta = 0;
    let rafId: number | null = null;
    let didSnapThisPass = false;

    const flushHorizontalScroll = () => {
      if (pendingDelta !== 0) {
        carousel.scrollLeft += pendingDelta;
        pendingDelta = 0;
      }
      rafId = null;
    };

    const onWheel = (event: WheelEvent) => {
      if (!desktop || !isSectionActive(section)) {
        didSnapThisPass = false;
        return;
      }

      const maxScroll = carousel.scrollWidth - carousel.clientWidth;
      if (maxScroll <= 1) return;

      const delta = getVerticalWheelDelta(event);
      if (Math.abs(delta) <= Math.abs(event.deltaX)) return;

      const atStart = carousel.scrollLeft <= 1;
      const atEnd = carousel.scrollLeft >= maxScroll - 1;

      if ((delta > 0 && atEnd) || (delta < 0 && atStart)) {
        didSnapThisPass = false;
        return;
      }

      const ready = isCarouselReadyForHorizontal(carousel);

      // Not aligned yet: let the page scroll normally (no preventDefault — avoids lag)
      if (!ready) {
        didSnapThisPass = false;
        return;
      }

      if (!didSnapThisPass) {
        snapCarouselIntoView(carousel);
        didSnapThisPass = true;
      }

      event.preventDefault();
      pendingDelta += delta;
      if (rafId === null) {
        rafId = requestAnimationFrame(flushHorizontalScroll);
      }
    };

    const onMqChange = () => {
      desktop = mq.matches;
    };

    mq.addEventListener("change", onMqChange);
    window.addEventListener("wheel", onWheel, { passive: false, capture: true });

    return () => {
      mq.removeEventListener("change", onMqChange);
      window.removeEventListener("wheel", onWheel, { capture: true });
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, [sectionRef, carouselRef]);
}
