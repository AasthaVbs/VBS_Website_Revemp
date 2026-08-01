// @ts-nocheck
import { useEffect, useState } from "react";

/**
 * Desktop below 1400px — services section pins cards only;
 * title + description scroll away above the card track.
 */
export const SERVICES_CARDS_ONLY_PIN_MEDIA =
  "(min-width: 768px) and (max-width: 1399px)";

/** @deprecated Use SERVICES_CARDS_ONLY_PIN_MEDIA */
export const SHORT_LAPTOP_MEDIA = SERVICES_CARDS_ONLY_PIN_MEDIA;

export function useShortLaptopLayout() {
  const [matches, setMatches] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia(SERVICES_CARDS_ONLY_PIN_MEDIA).matches;
  });

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const mq = window.matchMedia(SERVICES_CARDS_ONLY_PIN_MEDIA);
    const update = () => setMatches(mq.matches);

    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return matches;
}
