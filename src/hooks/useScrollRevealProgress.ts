// @ts-nocheck
import { useEffect, useState } from "react";

/**
 * Returns the highest index whose element has crossed the viewport trigger line.
 * Used for scroll-driven step/card highlights (workflow badges, benefit icons, etc.).
 */
export function useScrollRevealProgress(
  containerRef,
  itemCount,
  itemSelector = "[data-scroll-reveal]",
  triggerRatio = 0.5,
) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || itemCount < 1) return undefined;

    const items = () => Array.from(container.querySelectorAll(itemSelector));

    const update = () => {
      const triggerY = window.innerHeight * triggerRatio;
      let next = 0;

      items().forEach((el, index) => {
        const { top } = el.getBoundingClientRect();
        if (top <= triggerY) {
          next = index;
        }
      });

      setActiveIndex((prev) => {
        const clamped = Math.max(0, Math.min(itemCount - 1, next));
        return prev === clamped ? prev : clamped;
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [containerRef, itemCount, itemSelector, triggerRatio]);

  return activeIndex;
}
