import Script from "next/script";
import { Suspense } from "react";

import {
  AHREFS_ANALYTICS_KEY,
  AHREFS_ANALYTICS_SRC,
  CLARITY_SCRIPT,
  FACEBOOK_PIXEL_ID,
  FACEBOOK_PIXEL_SCRIPT,
  GOOGLE_ADS_GTAG_INLINE,
  GOOGLE_ADS_ID,
  GTM_HEAD_SCRIPT,
  GTM_ID,
  LEADFEEDER_SCRIPT,
  LINKEDIN_INSIGHT_PARTNER_ID,
  LOCAL_BUSINESS_SCHEMA,
  MOUSEFLOW_SCRIPT,
  PAGESENSE_SCRIPT_SRC,
  WEBSITE_SCHEMA,
  ZOHO_SALESIQ_BOOTSTRAP,
  ZOHO_SALESIQ_WIDGET_SRC,
} from "@/constants/site-tracking";
import { ZOHO_UTM_LEAD_TRACKING_SCRIPT } from "@/scripts/zoho-utm-lead-tracking";

import { SiteTrackingBootstrap } from "./site-tracking-bootstrap";

/** Head + body tracking scripts matching Gatsby gatsby-ssr.js */
export function SiteTrackingScripts() {
  return (
    <>
      {/* Google Tag Manager */}
      <Script id="gtm-head" strategy="afterInteractive">
        {GTM_HEAD_SCRIPT}
      </Script>

      {/* Google Ads (gatsby-plugin-google-gtag AW-…) */}
      <Script
        id="google-ads-gtag-src"
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-ads-gtag-config" strategy="afterInteractive">
        {GOOGLE_ADS_GTAG_INLINE}
      </Script>

      {/* Zoho PageSense */}
      <Script id="pagesense-script" src={PAGESENSE_SCRIPT_SRC} strategy="afterInteractive" />

      {/* Ahrefs Analytics */}
      <Script
        id="ahrefs-analytics"
        src={AHREFS_ANALYTICS_SRC}
        data-key={AHREFS_ANALYTICS_KEY}
        strategy="afterInteractive"
      />

      {/* Mouseflow */}
      <Script id="mouseflow" strategy="afterInteractive">
        {MOUSEFLOW_SCRIPT}
      </Script>

      {/* Microsoft Clarity */}
      <Script id="microsoft-clarity" strategy="afterInteractive">
        {CLARITY_SCRIPT}
      </Script>

      {/* Zoho SalesIQ bootstrap (must run before widget) */}
      <Script id="zoho-salesiq-bootstrap" strategy="afterInteractive">
        {ZOHO_SALESIQ_BOOTSTRAP}
      </Script>
      <Script
        id="zsiqscript"
        src={ZOHO_SALESIQ_WIDGET_SRC}
        strategy="afterInteractive"
      />

      {/* Zoho Forms UTM lead tracking */}
      <Script id="zoho-utm-lead-tracking" strategy="afterInteractive">
        {ZOHO_UTM_LEAD_TRACKING_SCRIPT}
      </Script>

      {/* Leadfeeder */}
      <Script id="leadfeeder-lftracker" strategy="lazyOnload">
        {LEADFEEDER_SCRIPT}
      </Script>

      {/* Meta / Facebook Pixel */}
      <Script id="facebook-pixel" strategy="lazyOnload">
        {FACEBOOK_PIXEL_SCRIPT}
      </Script>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_SCHEMA) }}
      />

      <Suspense fallback={null}>
        <SiteTrackingBootstrap />
      </Suspense>
    </>
  );
}

export function SiteTrackingNoscript() {
  return (
    <>
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
          title="Google Tag Manager"
        />
      </noscript>
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${FACEBOOK_PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          alt=""
          src={`https://px.ads.linkedin.com/collect/?pid=${LINKEDIN_INSIGHT_PARTNER_ID}&fmt=gif`}
        />
      </noscript>
    </>
  );
}
