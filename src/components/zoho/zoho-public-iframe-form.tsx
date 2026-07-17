"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { useRouter } from "next/navigation";

import {
  ZOHO_CONTACT_THANK_YOU_PATH,
  ZOHO_IFRAME_INITIAL_HEIGHT_PX,
  ZOHO_IFRAME_VISIBLE_CAP_DESKTOP_PX,
  ZOHO_IFRAME_VISIBLE_CAP_MOBILE_PX,
  applyZohoFormReferrer,
  applyZohoFormUtmToIframes,
  ensureGoogleRecaptchaForZoho,
  getZohoHiddenCostWpHeaderCropPx,
  getZohoIframeHeaderCropPx,
  getZohoMepDcWpFooterCropPx,
  getZohoMepDcWpHeaderCropPx,
  getZohoMepDcWpMinVisibleHeightPx,
  ZOHO_HIDDEN_COST_WP_VISIBLE_HEIGHT_MOBILE_PX,
  ZOHO_HIDDEN_COST_WP_VISIBLE_HEIGHT_PX,
  isZohoFormSubmissionMessage,
  parseZohoIframeResizeHeight,
  shouldRedirectAfterZohoSubmit,
} from "@/utils/zoho-contact-form-embed";

type HeaderCropPreset = "contact" | "mep-dc-wp" | "hidden-cost-wp";
type FooterCropPreset = "mep-dc-wp";

type ZohoPublicIframeFormProps = {
  iframeId: string;
  iframeSrc: string;
  title?: string;
  initialHeight?: number;
  cropHeader?: "contact" | "";
  headerCropPx?: number;
  headerCropPreset?: HeaderCropPreset;
  minVisibleHeightPreset?: "mep-dc-wp";
  footerCropPreset?: FooterCropPreset;
  footerCropPx?: number;
  visibleCapDesktop?: number;
  visibleCapMobile?: number;
  thankYouPath?: string;
  redirectOnSubmit?: boolean;
  onSubmitSuccess?: () => void;
  className?: string;
  frameClassName?: string;
  lockHeight?: boolean;
  fitContent?: boolean;
  transparentBackground?: boolean;
  loadPriority?: "auto" | "high";
};

function resolveVisibleHeight(
  reportedFullHeight: number,
  headerCropPx: number,
  footerCropPx: number,
  visibleCapDesktop: number,
  visibleCapMobile: number,
  fitContent = false,
  minVisibleHeightPx = 320,
) {
  const totalCrop = headerCropPx + footerCropPx;
  const uncropped = reportedFullHeight - totalCrop;

  if (fitContent) {
    return Math.max(minVisibleHeightPx, uncropped);
  }

  if (typeof window === "undefined") {
    return Math.max(minVisibleHeightPx, uncropped);
  }

  const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
  const cap = isDesktop ? visibleCapDesktop : visibleCapMobile;
  const uncapped = Math.max(minVisibleHeightPx, uncropped);

  return Math.min(uncapped, cap);
}

export function ZohoPublicIframeForm({
  iframeId,
  iframeSrc,
  title = "Contact form",
  initialHeight = ZOHO_IFRAME_INITIAL_HEIGHT_PX,
  cropHeader = "contact",
  headerCropPx: headerCropPxProp,
  headerCropPreset,
  minVisibleHeightPreset,
  footerCropPreset,
  footerCropPx: footerCropPxProp = 0,
  visibleCapDesktop = ZOHO_IFRAME_VISIBLE_CAP_DESKTOP_PX,
  visibleCapMobile = ZOHO_IFRAME_VISIBLE_CAP_MOBILE_PX,
  thankYouPath = ZOHO_CONTACT_THANK_YOU_PATH,
  redirectOnSubmit = true,
  onSubmitSuccess,
  className = "",
  frameClassName = "vbs-zoho-iframe-form__frame",
  lockHeight = false,
  fitContent = false,
  transparentBackground = false,
  loadPriority = "auto",
}: ZohoPublicIframeFormProps) {
  const router = useRouter();
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const iframeHeightRef = useRef(initialHeight);
  const initialLoadRef = useRef(false);
  const redirectedRef = useRef(false);

  const getHeaderCropPx = () => {
    if (headerCropPreset === "mep-dc-wp") {
      return getZohoMepDcWpHeaderCropPx();
    }
    if (headerCropPreset === "hidden-cost-wp") {
      return getZohoHiddenCostWpHeaderCropPx();
    }
    if (typeof headerCropPxProp === "number" && headerCropPxProp > 0) {
      return headerCropPxProp;
    }
    return cropHeader === "contact" ? getZohoIframeHeaderCropPx() : 0;
  };

  const getMinVisibleHeightPx = () => {
    if (minVisibleHeightPreset === "mep-dc-wp") {
      return getZohoMepDcWpMinVisibleHeightPx();
    }
    return 320;
  };

  const getLockBaseHeightPx = () => {
    if (headerCropPreset === "hidden-cost-wp") {
      if (typeof window === "undefined") {
        return Math.max(initialHeight, ZOHO_HIDDEN_COST_WP_VISIBLE_HEIGHT_PX);
      }
      const mobile = window.matchMedia("(max-width: 767px)").matches;
      return Math.max(
        initialHeight,
        mobile ? ZOHO_HIDDEN_COST_WP_VISIBLE_HEIGHT_MOBILE_PX : ZOHO_HIDDEN_COST_WP_VISIBLE_HEIGHT_PX,
      );
    }
    if (minVisibleHeightPreset === "mep-dc-wp" || headerCropPreset === "mep-dc-wp") {
      return Math.max(initialHeight, getZohoMepDcWpMinVisibleHeightPx());
    }
    return initialHeight;
  };

  const getFooterCropPx = () => {
    if (footerCropPreset === "mep-dc-wp") {
      return getZohoMepDcWpFooterCropPx();
    }
    return typeof footerCropPxProp === "number" && footerCropPxProp > 0 ? footerCropPxProp : 0;
  };

  const resolvedHeaderCrop = getHeaderCropPx();
  const resolvedFooterCrop = getFooterCropPx();

  const [iframeHeight, setIframeHeight] = useState(initialHeight);
  const [visibleHeight, setVisibleHeight] = useState(() =>
    lockHeight
      ? Math.max(280, getLockBaseHeightPx() - resolvedFooterCrop)
      : resolveVisibleHeight(
          initialHeight,
          resolvedHeaderCrop,
          resolvedFooterCrop,
          visibleCapDesktop,
          visibleCapMobile,
          fitContent,
          getMinVisibleHeightPx(),
        ),
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const refreshIframeLayout = (reportedHeight = iframeHeightRef.current) => {
    const cropPx = getHeaderCropPx();
    const footerCropPx = getFooterCropPx();
    if (lockHeight) {
      setVisibleHeight(Math.max(280, getLockBaseHeightPx() - footerCropPx));
      return;
    }
    setVisibleHeight(
      resolveVisibleHeight(
        reportedHeight,
        cropPx,
        footerCropPx,
        visibleCapDesktop,
        visibleCapMobile,
        fitContent,
        getMinVisibleHeightPx(),
      ),
    );
  };

  const applyReportedHeight = (reportedHeight: number) => {
    if (lockHeight) return;
    iframeHeightRef.current = reportedHeight;
    setIframeHeight(reportedHeight);
    refreshIframeLayout(reportedHeight);
  };

  const handleSubmissionSuccess = () => {
    if (redirectedRef.current) return;
    redirectedRef.current = true;
    if (typeof onSubmitSuccess === "function") {
      onSubmitSuccess();
      return;
    }
    if (redirectOnSubmit) {
      router.push(thankYouPath || ZOHO_CONTACT_THANK_YOU_PATH);
    }
  };

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
        if (!lockHeight) {
          iframe.style.height = `${newHeight}px`;
        }
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    thankYouPath,
    redirectOnSubmit,
    onSubmitSuccess,
    visibleCapDesktop,
    visibleCapMobile,
    cropHeader,
    headerCropPxProp,
    headerCropPreset,
    minVisibleHeightPreset,
    footerCropPreset,
    footerCropPxProp,
    lockHeight,
    initialHeight,
    fitContent,
  ]);

  const cropPx = getHeaderCropPx();
  const footerCropForLayout = getFooterCropPx();
  const useHeaderShift = cropPx > 0;
  const lockBaseHeight = getLockBaseHeightPx();
  const lockedIframeHeight = lockHeight ? lockBaseHeight + cropPx : iframeHeight;
  const lockedVisibleHeight = lockHeight
    ? Math.max(280, lockBaseHeight - footerCropForLayout)
    : visibleHeight;
  const fitContentContainerStyle: CSSProperties =
    fitContent && !useHeaderShift ? { minHeight: `${lockedVisibleHeight}px` } : {};
  const transparentFrameStyle: CSSProperties = transparentBackground
    ? { background: "transparent", backgroundColor: "transparent" }
    : {};

  return (
    <div
      className={`vbs-zoho-iframe-form w-full${isSubmitting ? " is-submitting" : ""}${className ? ` ${className}` : ""}`}
      style={
        useHeaderShift
          ? {
              "--vbs-zoho-iframe-full-height": `${lockedIframeHeight}px`,
              "--vbs-zoho-iframe-visible-height": `${lockedVisibleHeight}px`,
              "--vbs-zoho-iframe-header-crop": `${cropPx}px`,
              ...fitContentContainerStyle,
              ...(transparentBackground ? { background: "transparent" } : {}),
            }
          : {
              "--vbs-zoho-iframe-visible-height": `${lockedVisibleHeight}px`,
              ...fitContentContainerStyle,
              ...(transparentBackground ? { background: "transparent" } : {}),
            }
      }
    >
      {useHeaderShift ? (
        <div className="vbs-zoho-iframe-form__shift">
          <iframe
            ref={iframeRef}
            id={iframeId}
            title={title}
            aria-label={title}
            frameBorder={0}
            src={iframeSrc}
            className={frameClassName}
            style={{ height: `${lockedIframeHeight}px`, ...transparentFrameStyle }}
            allow="fullscreen; clipboard-read; clipboard-write"
            loading="eager"
            fetchPriority={loadPriority === "high" ? "high" : undefined}
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      ) : (
        <iframe
          ref={iframeRef}
          id={iframeId}
          title={title}
          aria-label={title}
          frameBorder={0}
          src={iframeSrc}
          className={frameClassName}
          style={{
            height: `${lockedVisibleHeight}px`,
            width: "100%",
            border: "none",
            ...transparentFrameStyle,
          }}
          allow="fullscreen; clipboard-read; clipboard-write"
          loading="eager"
          fetchPriority={loadPriority === "high" ? "high" : undefined}
          referrerPolicy="strict-origin-when-cross-origin"
        />
      )}
      {isSubmitting ? (
        <p className="vbs-zoho-iframe-form__status" role="status" aria-live="polite">
          Submitting...
        </p>
      ) : null}
    </div>
  );
}
