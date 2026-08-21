"use client";

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";

function scrollDocumentToTop() {
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

/**
 * Next.js App Router can keep the previous page’s scroll position,
 * especially when html/body use overflow-x: hidden.
 * New routes always start at the top; in-page hashes are left alone.
 */
export function ScrollToTopOnNavigate() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    if (window.location.hash) return;

    scrollDocumentToTop();
    const frame = window.requestAnimationFrame(scrollDocumentToTop);
    const later = window.setTimeout(scrollDocumentToTop, 50);

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(later);
    };
  }, [pathname]);

  return null;
}
