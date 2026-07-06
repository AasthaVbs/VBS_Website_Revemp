// @ts-nocheck
import { useEffect, useState } from "react";

/** Short laptop viewports e.g. 1289Ã—650â€“800 â€” cards-only pin layout */
export const SHORT_LAPTOP_MEDIA = "(min-width: 768px) and (max-height: 800px)";

export function useShortLaptopLayout() {
  const [matches, setMatches] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia(SHORT_LAPTOP_MEDIA).matches;
  });

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const mq = window.matchMedia(SHORT_LAPTOP_MEDIA);
    const update = () => setMatches(mq.matches);

    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return matches;
}
