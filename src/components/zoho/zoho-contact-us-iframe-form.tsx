"use client";

import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";
import { useRouter } from "next/navigation";

import {
  ZOHO_CONTACT_FORM_IFRAME_ID,
  ZOHO_CONTACT_FORM_IFRAME_SRC,
  ZOHO_CONTACT_THANK_YOU_PATH,
  ZOHO_IFRAME_INITIAL_HEIGHT_PX,
  applyZohoFormReferrer,
  applyZohoFormUtmToIframes,
  ensureGoogleRecaptchaForZoho,
  getZohoIframeHeaderCropPx,
  getZohoIframeVisibleHeight,
  isZohoFormSubmissionMessage,
  parseZohoIframeResizeHeight,
  shouldRedirectAfterZohoSubmit,
} from "@/utils/zoho-contact-form-embed";

type ZohoContactUsIframeFormProps = {
  /** Pass `null` to show the full iframe height (no desktop/mobile cap). */
  visibleHeightCap?: number | null;
};

export function ZohoContactUsIframeForm({
  visibleHeightCap,
}: ZohoContactUsIframeFormProps = {}) {
  const router = useRouter();
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const iframeHeightRef = useRef(ZOHO_IFRAME_INITIAL_HEIGHT_PX);
  const initialLoadRef = useRef(false);
  const redirectedRef = useRef(false);
  const [iframeHeight, setIframeHeight] = useState(ZOHO_IFRAME_INITIAL_HEIGHT_PX);
  const [visibleHeight, setVisibleHeight] = useState(
    getZohoIframeVisibleHeight(ZOHO_IFRAME_INITIAL_HEIGHT_PX, {
      cap: visibleHeightCap,
    }),
  );
  const [headerCrop, setHeaderCrop] = useState(() => getZohoIframeHeaderCropPx());
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (typeof document === "undefined") return undefined;

    const preconnects = [
      { href: "https://www.google.com" },
      { href: "https://www.gstatic.com", crossOrigin: "anonymous" as const },
      { href: "https://www.recaptcha.net" },
      { href: "https://recaptcha.googleapis.com" },
    ];

    const added = preconnects
      .map(({ href, crossOrigin }) => {
        if (document.querySelector(`link[rel="preconnect"][href="${href}"]`)) return null;
        const link = document.createElement("link");
        link.rel = "preconnect";
        link.href = href;
        if (crossOrigin) link.crossOrigin = crossOrigin;
        document.head.appendChild(link);
        return link;
      })
      .filter(Boolean);

    return () => {
      added.forEach((link) => link?.remove());
    };
  }, []);

  useEffect(() => {
    ensureGoogleRecaptchaForZoho();
  }, []);

  const refreshIframeLayout = useCallback(
    (reportedHeight = iframeHeightRef.current) => {
      setHeaderCrop(getZohoIframeHeaderCropPx());
      setVisibleHeight(
        getZohoIframeVisibleHeight(reportedHeight, { cap: visibleHeightCap }),
      );
    },
    [visibleHeightCap],
  );

  const applyReportedHeight = useCallback(
    (reportedHeight: number) => {
      iframeHeightRef.current = reportedHeight;
      setIframeHeight(reportedHeight);
      refreshIframeLayout(reportedHeight);
    },
    [refreshIframeLayout],
  );

  const handleSubmissionSuccess = useCallback(() => {
    if (redirectedRef.current) return;
    redirectedRef.current = true;
    router.push(ZOHO_CONTACT_THANK_YOU_PATH);
  }, [router]);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return undefined;

    applyZohoFormReferrer(iframe);
    applyZohoFormUtmToIframes();

    const onLoad = () => {
      if (!initialLoadRef.current) {
        initialLoadRef.current = true;
        return;
      }

      if (shouldRedirectAfterZohoSubmit(iframe)) {
        setIsSubmitting(true);
        handleSubmissionSuccess();
      }
    };

    const onMessage = (event: MessageEvent) => {
      if (!event.origin || !/zoho/i.test(event.origin)) return;

      const newHeight = parseZohoIframeResizeHeight(event.data, iframe.src);
      if (newHeight) {
        applyReportedHeight(newHeight);
        iframe.style.height = `${newHeight}px`;
        return;
      }

      if (isZohoFormSubmissionMessage(event.data)) {
        setIsSubmitting(true);
        handleSubmissionSuccess();
      }
    };

    const onResize = () => {
      refreshIframeLayout(iframeHeightRef.current);
    };

    iframe.addEventListener("load", onLoad);
    window.addEventListener("message", onMessage);
    window.addEventListener("resize", onResize);

    return () => {
      iframe.removeEventListener("load", onLoad);
      window.removeEventListener("message", onMessage);
      window.removeEventListener("resize", onResize);
    };
  }, [applyReportedHeight, handleSubmissionSuccess, refreshIframeLayout]);

  return (
    <div
      className={`vbs-zoho-iframe-form w-full${isSubmitting ? " is-submitting" : ""}`}
      style={
        {
          "--vbs-zoho-iframe-full-height": `${iframeHeight}px`,
          "--vbs-zoho-iframe-visible-height": `${visibleHeight}px`,
          "--vbs-zoho-iframe-header-crop": `${headerCrop}px`,
        } as CSSProperties
      }
    >
      <div className="vbs-zoho-iframe-form__shift">
        <iframe
          ref={iframeRef}
          id={ZOHO_CONTACT_FORM_IFRAME_ID}
          title="Contact Us form"
          aria-label="Contact Us form"
          frameBorder={0}
          scrolling="no"
          src={ZOHO_CONTACT_FORM_IFRAME_SRC}
          className="vbs-zoho-iframe-form__frame"
          style={{ height: `${iframeHeight}px` }}
          allow="fullscreen; clipboard-read; clipboard-write"
          loading="eager"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
      {isSubmitting ? (
        <p className="vbs-zoho-iframe-form__status" role="status" aria-live="polite">
          Submitting...
        </p>
      ) : null}
    </div>
  );
}
