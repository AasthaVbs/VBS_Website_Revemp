// @ts-nocheck
import { useLayoutEffect, useState } from "react";

export const MOBILE_LAYOUT_MEDIA = "(max-width: 767px)";

/**
 * Client layout breakpoint â€” `ready` is false until after first useLayoutEffect
 * so carousel pin logic does not run during SSR/hydration.
 */
export function useMobileLayout() {
  const [state, setState] = useState({ isMobile: false, ready: false });

  useLayoutEffect(() => {
    const mq = window.matchMedia(MOBILE_LAYOUT_MEDIA);
    const update = () => setState({ isMobile: mq.matches, ready: true });

    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return state;
}
