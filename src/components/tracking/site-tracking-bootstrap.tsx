"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";

import {
  LINKEDIN_INSIGHT_PARTNER_ID,
  LINKEDIN_INSIGHT_SCRIPT_SRC,
} from "@/constants/site-tracking";
import { grantClarityConsent, initCookieBannerHider } from "@/utils/hide-cookie-banners";
import { trackSpaPageview } from "@/utils/site-tracking-events";

import { SiteCookieConsent } from "./site-cookie-consent";

function isPreviewHost(hostname: string) {
  return (
    hostname === "localhost" ||
    hostname === "127.0.0.1" ||
    hostname.endsWith(".pages.dev") ||
    hostname.endsWith(".vercel.app") ||
    hostname.endsWith(".netlify.app")
  );
}

function initLinkedInInsightTag() {
  if (typeof window === "undefined" || typeof document === "undefined") return;
  if (isPreviewHost(window.location.hostname)) return;

  try {
    window._linkedin_partner_id = LINKEDIN_INSIGHT_PARTNER_ID;
    window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
    if (!window._linkedin_data_partner_ids.includes(LINKEDIN_INSIGHT_PARTNER_ID)) {
      window._linkedin_data_partner_ids.push(LINKEDIN_INSIGHT_PARTNER_ID);
    }
    if (!window.lintrk) {
      window.lintrk = function lintrkStub(a: string, b?: { conversion_id: number }) {
        window.lintrk!.q = window.lintrk!.q || [];
        window.lintrk!.q.push([a, b]);
      };
      window.lintrk.q = window.lintrk.q || [];
    }

    const alreadyLoaded = Array.from(document.getElementsByTagName("script")).some((s) =>
      (s.src || "").includes("snap.licdn.com/li.lms-analytics/insight.min.js"),
    );
    if (alreadyLoaded) return;

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = LINKEDIN_INSIGHT_SCRIPT_SRC;
    const firstScript = document.getElementsByTagName("script")[0];
    if (firstScript?.parentNode) {
      firstScript.parentNode.insertBefore(script, firstScript);
    } else {
      document.head.appendChild(script);
    }
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.warn("LinkedIn Insight tag init failed:", error);
    }
  }
}

function refreshZohoUtmTracking() {
  try {
    const lead = window.zfutm_zfLead;
    if (!lead) return;
    if (typeof lead.zfutm_ini === "function") lead.zfutm_ini();
    if (typeof lead.zfutm_iframeSprt === "function") lead.zfutm_iframeSprt();
    if (typeof lead.zfutm_DHtmlSprt === "function") lead.zfutm_DHtmlSprt();
  } catch {
    /* noop */
  }
}

/**
 * Client-side tracking bootstrap (Gatsby gatsby-browser parity):
 * LinkedIn Insight, Clarity consent, cookie banner hider, Zoho UTM refresh on route change.
 */
export function SiteTrackingBootstrap() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isFirstPageview = useRef(true);

  useEffect(() => {
    grantClarityConsent();
    initCookieBannerHider();
    initLinkedInInsightTag();
  }, []);

  useEffect(() => {
    const search = searchParams?.toString() ? `?${searchParams.toString()}` : "";
    refreshZohoUtmTracking();

    if (isFirstPageview.current) {
      isFirstPageview.current = false;
      return;
    }

    trackSpaPageview(pathname || "/", search);
  }, [pathname, searchParams]);

  return <SiteCookieConsent />;
}
