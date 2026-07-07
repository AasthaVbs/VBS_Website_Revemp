"use client";

import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";
import { useRouter } from "next/navigation";

import {
  ZOHO_CONTACT_FORM_IFRAME_ID,
  ZOHO_CONTACT_FORM_IFRAME_SRC,
  ZOHO_CONTACT_THANK_YOU_PATH,
  ZOHO_IFRAME_INITIAL_HEIGHT_PX,
  GET_IN_TOUCH_ZOHO_HEADER_CROP_DESKTOP_PX,
  GET_IN_TOUCH_ZOHO_MOBILE_MIN_VISIBLE_HEIGHT_PX,
  ZOHO_IFRAME_HEADER_CROP_PX,
  applyZohoFormReferrer,
  applyZohoFormUtmToIframes,
  ensureGoogleRecaptchaForZoho,
  getZohoIframeHeaderCropPx,
  getGetInTouchZohoHeaderCropPx,
  getGetInTouchZohoMobileBottomBufferPx,
  getZohoIframeVisibleHeight,
  isZohoFormSubmissionMessage,
  parseZohoIframeResizeHeight,
  shouldRedirectAfterZohoSubmit,
} from "@/utils/zoho-contact-form-embed";

type ZohoContactUsIframeFormProps = {
  /** Pass `null` to show the full iframe height (no desktop/mobile cap). */
  visibleHeightCap?: number | null;
  /** Override top crop in px. */
  headerCropPx?: number;
  /** Get in Touch footer uses a slightly larger top crop (+3px). */
  headerCropPreset?: "default" | "get-in-touch";
  loadPriority?: "auto" | "high";
};

function getInitialHeaderCrop(
  headerCropPx: number | undefined,
  headerCropPreset: "default" | "get-in-touch",
) {
  if (typeof headerCropPx === "number") return headerCropPx;
  if (headerCropPreset === "get-in-touch") return GET_IN_TOUCH_ZOHO_HEADER_CROP_DESKTOP_PX;
  return ZOHO_IFRAME_HEADER_CROP_PX;
}

function getInitialVisibleHeight(
  visibleHeightCap: number | null | undefined,
  headerCropPreset: "default" | "get-in-touch",
) {
  return getZohoIframeVisibleHeight(ZOHO_IFRAME_INITIAL_HEIGHT_PX, {
    cap: visibleHeightCap,
    headerCropPx:
      headerCropPreset === "get-in-touch"
        ? GET_IN_TOUCH_ZOHO_HEADER_CROP_DESKTOP_PX
        : undefined,
  });
}

export function ZohoContactUsIframeForm({
  visibleHeightCap,
  headerCropPx,
  headerCropPreset = "default",
  loadPriority = "auto",
}: ZohoContactUsIframeFormProps = {}) {
  const router = useRouter();
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const iframeHeightRef = useRef(ZOHO_IFRAME_INITIAL_HEIGHT_PX);
  const reportedHeightRef = useRef(ZOHO_IFRAME_INITIAL_HEIGHT_PX);
  const initialLoadRef = useRef(false);
  const redirectedRef = useRef(false);

  const [iframeHeight, setIframeHeight] = useState(ZOHO_IFRAME_INITIAL_HEIGHT_PX);
  const [visibleHeight, setVisibleHeight] = useState(() =>
    getInitialVisibleHeight(visibleHeightCap, headerCropPreset),
  );
  const [headerCrop, setHeaderCrop] = useState(() =>
    getInitialHeaderCrop(headerCropPx, headerCropPreset),
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  const resolveHeaderCrop = useCallback(() => {
    if (typeof headerCropPx === "number") return headerCropPx;
    if (headerCropPreset === "get-in-touch") return getGetInTouchZohoHeaderCropPx();
    return getZohoIframeHeaderCropPx();
  }, [headerCropPx, headerCropPreset]);

  const resolveBottomBuffer = useCallback(() => {
    if (headerCropPreset === "get-in-touch") {
      return getGetInTouchZohoMobileBottomBufferPx();
    }
    return 0;
  }, [headerCropPreset]);

  const resolveVisibleHeight = useCallback(
    (reportedHeight: number) => {
      const calculated = getZohoIframeVisibleHeight(reportedHeight, {
        cap: visibleHeightCap,
        headerCropPx: resolveHeaderCrop(),
        bottomBufferPx: resolveBottomBuffer(),
      });

      const isMobileGetInTouch =
        headerCropPreset === "get-in-touch" &&
        typeof window !== "undefined" &&
        window.matchMedia("(max-width: 767px)").matches;

      // Enforce minimum only before Zoho posts its resize height.
      if (isMobileGetInTouch && reportedHeight <= ZOHO_IFRAME_INITIAL_HEIGHT_PX) {
        return Math.max(calculated, GET_IN_TOUCH_ZOHO_MOBILE_MIN_VISIBLE_HEIGHT_PX);
      }

      return calculated;
    },
    [headerCropPreset, resolveBottomBuffer, resolveHeaderCrop, visibleHeightCap],
  );

  const refreshIframeLayout = useCallback(
    (reportedHeight = reportedHeightRef.current) => {
      const crop = resolveHeaderCrop();
      const visible = resolveVisibleHeight(reportedHeight);
      const layoutHeight = visible + crop;

      setHeaderCrop(crop);
      setVisibleHeight(visible);
      iframeHeightRef.current = layoutHeight;
      setIframeHeight(layoutHeight);

      const iframe = iframeRef.current;
      if (iframe) {
        iframe.style.height = `${layoutHeight}px`;
      }
    },
    [resolveHeaderCrop, resolveVisibleHeight],
  );

  const applyReportedHeight = useCallback(
    (reportedHeight: number) => {
      reportedHeightRef.current = reportedHeight;
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
    if (typeof document === "undefined") return undefined;

    const preconnects = [
      { href: "https://www.google.com" },
      { href: "https://www.gstatic.com", crossOrigin: "anonymous" as const },
      { href: "https://www.recaptcha.net" },
      { href: "https://recaptcha.googleapis.com" },
      ...(loadPriority === "high"
        ? [
            { href: "https://forms.zohopublic.com", crossOrigin: "anonymous" as const },
            { href: "https://zohopublic.com", crossOrigin: "anonymous" as const },
          ]
        : []),
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
  }, [loadPriority]);

  useEffect(() => {
    ensureGoogleRecaptchaForZoho();
  }, []);

  useEffect(() => {
    refreshIframeLayout(reportedHeightRef.current);
  }, [refreshIframeLayout]);

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
        return;
      }

      if (isZohoFormSubmissionMessage(event.data)) {
        setIsSubmitting(true);
        handleSubmissionSuccess();
      }
    };

    const onResize = () => {
      refreshIframeLayout(reportedHeightRef.current);
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
          fetchPriority={loadPriority === "high" ? "high" : undefined}
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
