"use client";

import { GOOGLE_ADS_ID, LINKEDIN_CONVERSION_ID } from "@/constants/site-tracking";

function currentPagePath(pathname: string, search = "") {
  return `${pathname || "/"}${search || ""}`;
}

/** LinkedIn Insight conversion — same ID as Gatsby landing PDF / webinar CTAs. */
export function trackLinkedInConversion(conversionId: number = LINKEDIN_CONVERSION_ID) {
  if (typeof window === "undefined") return;
  try {
    if (typeof window.lintrk === "function") {
      window.lintrk("track", { conversion_id: conversionId });
    }
  } catch {
    /* ignore */
  }
}

/**
 * SPA virtual pageviews (Gatsby gatsby-plugin-google-gtag + pixel parity).
 * Call on client navigations only — skip the first load so GTM/gtag/FB don't double-count.
 */
export function trackSpaPageview(pathname: string, search = "") {
  if (typeof window === "undefined") return;

  try {
    const pagePath = currentPagePath(pathname, search);
    const pageLocation = `${window.location.origin}${pagePath}`;
    const pageTitle = document.title;

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "pageview",
      page: pagePath,
      page_path: pagePath,
      page_location: pageLocation,
      page_title: pageTitle,
    });

    if (typeof window.gtag === "function") {
      window.gtag("event", "page_view", {
        page_path: pagePath,
        page_location: pageLocation,
        page_title: pageTitle,
      });
      window.gtag("config", GOOGLE_ADS_ID, { page_path: pagePath, page_title: pageTitle });
    }

    if (typeof window.fbq === "function") {
      window.fbq("track", "PageView");
    }

    window._mfq = window._mfq || [];
    window._mfq.push(["newPageView", pagePath]);

    if (typeof window.clarity === "function") {
      window.clarity("set", "page", pagePath);
    }
  } catch {
    /* never block navigation if a tracker throws */
  }
}
