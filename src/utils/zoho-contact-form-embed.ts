/** Google reCAPTCHA v2 domains required when this iframe form uses Google captcha in Zoho. */
export const ZOHO_RECAPTCHA_REQUIRED_DOMAINS = [
  "www.virtualbuildingstudio.com",
  "virtualbuildingstudio.com",
  "forms.zohopublic.com",
  "zohopublic.com",
  "localhost",
  "127.0.0.1",
  "virtual-building-studio-testing.pages.dev",
];

const ZOHO_RECAPTCHA_SCRIPT_ID = "vbs-zoho-recaptcha-api";
const ZOHO_RECAPTCHA_SCRIPT_SRC = "https://www.google.com/recaptcha/api.js?render=explicit";

/** Load reCAPTCHA v2 on the parent page so Zoho iframe captcha can reach Google. */
export function ensureGoogleRecaptchaForZoho() {
  if (typeof document === "undefined") return;

  const existing = document.getElementById(ZOHO_RECAPTCHA_SCRIPT_ID);
  if (existing || window.grecaptcha) return;

  const script = document.createElement("script");
  script.id = ZOHO_RECAPTCHA_SCRIPT_ID;
  script.src = ZOHO_RECAPTCHA_SCRIPT_SRC;
  script.async = true;
  script.defer = true;
  document.head.appendChild(script);
}

export const ZOHO_CONTACT_FORM_IFRAME_ID = "ziframe_505831";

export const ZOHO_CONTACT_FORM_IFRAME_SRC =
  "https://forms.zohopublic.com/virtualbuildingstudio1/form/ContactUs/formperma/tHzNIE4tXm9gc_8x0Bnn74Ri6Ot1J0kVLF1_RTIq1jM";

export const ZOHO_CONTACT_FORM_PERMA =
  "tHzNIE4tXm9gc_8x0Bnn74Ri6Ot1J0kVLF1_RTIq1jM";

export const ZOHO_CONTACT_THANK_YOU_PATH = "/thank-you/";
export const ZOHO_CONTACT_THANK_YOU_URL =
  "https://www.virtualbuildingstudio.com/thank-you/";

/** Crop Zoho formHeaderDiv (duplicate title + description inside iframe). */
export const ZOHO_IFRAME_HEADER_CROP_PX = 142;

/** Mobile Zoho header stack is taller in narrow layout. */
export const ZOHO_IFRAME_HEADER_CROP_MOBILE_PX = 180;

export function getZohoIframeHeaderCropPx() {
  if (typeof window === "undefined") {
    return ZOHO_IFRAME_HEADER_CROP_PX;
  }

  return window.matchMedia("(max-width: 767px)").matches
    ? ZOHO_IFRAME_HEADER_CROP_MOBILE_PX
    : ZOHO_IFRAME_HEADER_CROP_PX;
}

/** Fallback until Zoho posts its auto-resize message. */
export const ZOHO_IFRAME_INITIAL_HEIGHT_PX = 680;

/** Visible viewport caps — Zoho reports full doc height incl. hidden fields. */
export const ZOHO_IFRAME_VISIBLE_CAP_DESKTOP_PX = 720;
export const ZOHO_IFRAME_VISIBLE_CAP_MOBILE_PX = 920;

/** Zoho iframe resize messages: "perma|height|..." */
export function parseZohoIframeResizeHeight(data: unknown, iframeSrc: string) {
  if (typeof data !== "string" || data.indexOf("|") === -1) return null;

  const parts = data.split("|");
  const perma = parts[0];
  const height = parseInt(parts[1], 10);

  if (!perma || !height || Number.isNaN(height)) return null;
  if (!iframeSrc || iframeSrc.indexOf("formperma") <= 0) return null;
  if (iframeSrc.indexOf(perma) <= 0) return null;

  return height + 15;
}

export function isZohoThankYouUrl(url: string) {
  if (!url || typeof url !== "string") return false;
  return /\/thank-you\/?(\?|#|$)/i.test(url) || url.includes("/thank-you");
}

export function isZohoFormSubmissionMessage(data: unknown) {
  if (!data) return false;

  if (typeof data === "string") {
    if (data.indexOf("|") !== -1) return false;
    return /zf_submit|submitform|formsubmit|submission|submitted|success/i.test(data);
  }

  if (typeof data === "object") {
    const record = data as Record<string, unknown>;
    const eventName = String(record.event || record.type || record.action || record.status || "");
    return /zf_submit|submitform|formsubmit|submission|submitted|success/i.test(eventName);
  }

  return false;
}

/** Detect iframe navigation that indicates a successful Zoho form submission. */
export function shouldRedirectAfterZohoSubmit(iframe: HTMLIFrameElement | null) {
  if (!iframe || typeof window === "undefined") return false;

  try {
    const href = iframe.contentWindow?.location?.href || "";
    if (isZohoThankYouUrl(href)) return true;

    if (href && href.startsWith(window.location.origin)) {
      return isZohoThankYouUrl(href);
    }
  } catch {
    // Cross-origin while still on the Zoho form — not a submission redirect yet.
  }

  const src = iframe.getAttribute("src") || iframe.src || "";
  if (isZohoThankYouUrl(src)) return true;

  if (/zohopublic\.com/i.test(src) && src.indexOf("formperma") === -1) {
    return true;
  }

  return false;
}

export function getZohoIframeVisibleHeight(
  reportedFullHeight: number,
  options?: { cap?: number | null },
) {
  const crop = getZohoIframeHeaderCropPx();
  const uncapped = Math.max(320, reportedFullHeight - crop);

  if (options?.cap === null) {
    return uncapped;
  }

  if (typeof window === "undefined") {
    const fallbackCap = options?.cap ?? ZOHO_IFRAME_VISIBLE_CAP_DESKTOP_PX;
    return Math.min(uncapped, fallbackCap);
  }

  const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
  const cap =
    options?.cap ??
    (isDesktop ? ZOHO_IFRAME_VISIBLE_CAP_DESKTOP_PX : ZOHO_IFRAME_VISIBLE_CAP_MOBILE_PX);

  return Math.min(uncapped, cap);
}

/** Append referrername to Zoho iframe src (Zoho embed snippet). */
export function applyZohoFormReferrer(iframe: HTMLIFrameElement | null) {
  if (!iframe || typeof window === "undefined") return;

  try {
    let ifrmSrc = iframe.getAttribute("src") || ZOHO_CONTACT_FORM_IFRAME_SRC;

    if (!new RegExp("[?&]referrername=").test(ifrmSrc)) {
      let rfr = window.location.href;
      try {
        rfr =
          window.self !== window.top
            ? window.top!.location.href
            : /^https?:\/\/[\w.-]+\.[a-zA-Z]{2,}/i.test(rfr)
              ? rfr
              : "";
      } catch {
        // cross-origin parent
      }

      if (rfr && rfr !== "") {
        if (rfr.length > 1800) {
          const queryIndex = rfr.indexOf("?");
          if (queryIndex > -1) {
            rfr = rfr.substring(0, queryIndex);
          }
          if (rfr.length > 1800) {
            rfr = rfr.substring(0, 1800);
          }
        }
        ifrmSrc += `${ifrmSrc.indexOf("?") > 0 ? "&" : "?"}referrername=${encodeURIComponent(rfr)}`;
      }
    }

    if (iframe.src !== ifrmSrc) {
      iframe.src = ifrmSrc;
    }
  } catch {
    // noop
  }
}

/** Re-run Zoho UTM pass after iframe mounts (global script runs on initial load). */
export function applyZohoFormUtmToIframes() {
  if (typeof window === "undefined") return;

  try {
    const lead = window.zfutm_zfLead;
    if (!lead) return;

    if (typeof lead.zfutm_ini === "function") {
      lead.zfutm_ini();
    }
    if (typeof lead.zfutm_iframeSprt === "function") {
      lead.zfutm_iframeSprt();
    }
    if (typeof lead.zfutm_DHtmlSprt === "function") {
      lead.zfutm_DHtmlSprt();
    }
  } catch {
    // noop
  }
}
