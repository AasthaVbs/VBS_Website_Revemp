// @ts-nocheck
import { useEffect, useState } from "react";

/**
 * Scroll-driven workflow highlights: active step index + continuous line fill (0â€“1).
 */
export function useWorkflowScrollProgress(timelineRef, stepCount) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lineProgress, setLineProgress] = useState(0);
  const [axisLayout, setAxisLayout] = useState(null);

  useEffect(() => {
    const timeline = timelineRef.current;
    if (!timeline || stepCount < 1) return undefined;

    const getBadges = () =>
      Array.from(timeline.querySelectorAll("[data-workflow-step]"))
        .map((step) => step.querySelector(".mep-figma-workflow__badge"))
        .filter(Boolean);

    const update = () => {
      const badges = getBadges();
      if (!badges.length) return;

      const timelineRect = timeline.getBoundingClientRect();
      const triggerY = window.innerHeight * 0.5;

      const firstRect = badges[0].getBoundingClientRect();
      const lastRect = badges[badges.length - 1].getBoundingClientRect();

      const axisStart = firstRect.top + firstRect.height / 2 - timelineRect.top;
      const axisEnd = lastRect.top + lastRect.height / 2 - timelineRect.top;
      const axisHeight = Math.max(0, axisEnd - axisStart);

      let next = 0;
      badges.forEach((badge, index) => {
        const rect = badge.getBoundingClientRect();
        const centerY = rect.top + rect.height / 2;
        if (centerY <= triggerY) {
          next = index;
        }
      });

      const clampedIndex = Math.max(0, Math.min(stepCount - 1, next));

      let progress = 0;
      if (axisHeight > 0) {
        progress = (triggerY - timelineRect.top - axisStart) / axisHeight;
        progress = Math.max(0, Math.min(1, progress));
      }

      setActiveIndex((prev) => (prev === clampedIndex ? prev : clampedIndex));
      setLineProgress((prev) => (Math.abs(prev - progress) < 0.002 ? prev : progress));
      setAxisLayout((prev) => {
        if (prev?.top === axisStart && prev?.height === axisHeight) return prev;
        return { top: axisStart, height: axisHeight };
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });

    const resizeObserver =
      typeof ResizeObserver !== "undefined" ? new ResizeObserver(update) : null;
    resizeObserver?.observe(timeline);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      resizeObserver?.disconnect();
    };
  }, [timelineRef, stepCount]);

  return { activeIndex, lineProgress, axisLayout };
}
