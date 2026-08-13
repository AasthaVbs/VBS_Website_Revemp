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

/** MEP landing contact form — /mep-bim-services-USA/ hero only. */
export const ZOHO_MEP_LANDING_IFRAME_ID = "ziframe_704247";

export const ZOHO_MEP_LANDING_IFRAME_SRC =
  "https://forms.zohopublic.com/virtualbuildingstudio1/form/MEPLandingpageContactusForm/formperma/1dcuzVdlEFiwXN9jUPDVr8LIW0UL-AQcMSQtw7wqbCE";

export const ZOHO_MEP_LANDING_IFRAME_INITIAL_HEIGHT_PX = 500;

/** Hide duplicate Zoho title inside the MEP landing embed — /mep-bim-services-usa/ hero only. */
export const ZOHO_MEP_LANDING_HEADER_CROP_PX = 150;

/** Fixed visible iframe container height on the MEP landing hero form. */
export const ZOHO_MEP_LANDING_VISIBLE_HEIGHT_PX = 583;

/** ACS horizontal contact form — BIM / architectural drafting landing pages. */
export const ZOHO_ACS_BIM_LANDING_IFRAME_ID = "ziframe_30612";

export const ZOHO_ACS_BIM_LANDING_IFRAME_SRC =
  "https://forms.zohopublic.com/virtualbuildingstudio1/form/ACSLandingpageHoriContactusForm/formperma/JZfvlXwJQ3PLAkUyiVRbTHDkipbLtLyRL_bGmOOgr5w";

export const ZOHO_ACS_BIM_LANDING_IFRAME_INITIAL_HEIGHT_PX = 700;

/** Fixed visible iframe container height on the ACS landing contact section. */
export const ZOHO_ACS_BIM_LANDING_VISIBLE_HEIGHT_PX = 700;

export const ZOHO_ACS_BIM_LANDING_FORM_MAX_WIDTH_PX = 1200;

/** Background image behind the ACS horizontal form. */
export const ZOHO_ACS_BIM_LANDING_FORM_BG_IMAGE = "/image/OUTPUT%202.png";

/** Hide duplicate Zoho form title inside the ACS horizontal embed. */
export const ZOHO_ACS_BIM_LANDING_HEADER_CROP_PX = 179;

/** Taller Zoho header stack on narrow viewports. */
export const ZOHO_ACS_BIM_LANDING_HEADER_CROP_MOBILE_PX = 155;

/** Trim excess empty space below the ACS horizontal form embed. */
export const ZOHO_ACS_BIM_LANDING_FOOTER_CROP_PX = 72;

export const ZOHO_ACS_BIM_LANDING_FOOTER_CROP_MOBILE_PX = 64;

/** Extra visible height so fields are not clipped after crops. */
export const ZOHO_ACS_BIM_LANDING_VISIBLE_HEIGHT_BUFFER_PX = 0;

/** High cap so Zoho auto-resize can show the full form without internal scroll. */
export const ZOHO_ACS_BIM_LANDING_VISIBLE_CAP_PX = 2400;

/**
 * VBS Inquiry form ACS — hero forms on:
 * /architectural-drafting-services-usa/
 * /architectural-bim-services-usa/
 * /revit-architectural-drafting-services/
 */
export const ZOHO_ACS_INQUIRY_IFRAME_ID = "ziframe_877581";

export const ZOHO_ACS_INQUIRY_IFRAME_SRC =
  "https://forms.zohopublic.com/virtualbuildingstudio1/form/VBSInquiryformACS/formperma/zslwbRb-AN-pxe6rThGRaPvgaup9TYleoufQOA5Tv_g";

export const ZOHO_ACS_INQUIRY_IFRAME_INITIAL_HEIGHT_PX = 660;

/** Visible height for ACS inquiry hero embeds — tall enough to avoid scrollbar. */
export const ZOHO_ACS_INQUIRY_VISIBLE_HEIGHT_PX = 660;

/** Crop Zoho title / divider chrome above the first field. */
export const ZOHO_ACS_INQUIRY_HEADER_CROP_PX = 130;

/** Crop Zoho footer / bottom padding from the ACS inquiry hero embed. */
export const ZOHO_ACS_INQUIRY_FOOTER_CROP_PX = 165;

export const ZOHO_ACS_INQUIRY_HEADER_CROP_MOBILE_PX = 120;

/**
 * VBS Resource Download Form — /bim-resources and all resource download pages.
 * Trailing %27 from Zoho paste is invalid (404); use the clean formperma.
 */
export const ZOHO_BIM_RESOURCE_DOWNLOAD_IFRAME_ID = "ziframe_975275";

export const ZOHO_BIM_RESOURCE_DOWNLOAD_IFRAME_SRC =
  "https://forms.zohopublic.com/virtualbuildingstudio1/form/VBSResourceDownloadForm/formperma/H77B13_VAH7CgAlCDGKbl38664ewIPtdIpvoYRMKvKI";

export const ZOHO_BIM_RESOURCE_DOWNLOAD_IFRAME_INITIAL_HEIGHT_PX = 500;

/** Lock base height; visible window = this minus footer crop. */
export const ZOHO_BIM_RESOURCE_DOWNLOAD_VISIBLE_HEIGHT_PX = 500;

/** Hide "VBS Resource Download Form" title + divider above the first field. */
export const ZOHO_BIM_RESOURCE_DOWNLOAD_HEADER_CROP_PX = 140;

/** Trim Zoho footer / empty space below the submit button. */
export const ZOHO_BIM_RESOURCE_DOWNLOAD_FOOTER_CROP_PX = 145;

export function getZohoAcsInquiryHeaderCropPx() {
  if (typeof window === "undefined") {
    return ZOHO_ACS_INQUIRY_HEADER_CROP_PX;
  }

  return window.matchMedia("(max-width: 767px)").matches
    ? ZOHO_ACS_INQUIRY_HEADER_CROP_MOBILE_PX
    : ZOHO_ACS_INQUIRY_HEADER_CROP_PX;
}

export function getZohoAcsBimLandingHeaderCropPx() {
  if (typeof window === "undefined") {
    return ZOHO_ACS_BIM_LANDING_HEADER_CROP_PX;
  }

  return window.matchMedia("(max-width: 767px)").matches
    ? ZOHO_ACS_BIM_LANDING_HEADER_CROP_MOBILE_PX
    : ZOHO_ACS_BIM_LANDING_HEADER_CROP_PX;
}

export function getZohoAcsBimLandingFooterCropPx() {
  if (typeof window === "undefined") {
    return ZOHO_ACS_BIM_LANDING_FOOTER_CROP_PX;
  }

  return window.matchMedia("(max-width: 767px)").matches
    ? ZOHO_ACS_BIM_LANDING_FOOTER_CROP_MOBILE_PX
    : ZOHO_ACS_BIM_LANDING_FOOTER_CROP_PX;
}

/** Floor when using dynamic resize — fixed height uses ZOHO_ACS_BIM_LANDING_VISIBLE_HEIGHT_PX. */
export function getZohoAcsBimLandingMinVisibleHeightPx() {
  return ZOHO_ACS_BIM_LANDING_VISIBLE_HEIGHT_PX;
}

/** MEP data center whitepaper download form — /whitepaper/mep-coordination-data-centers-bim-workflows/ */
export const ZOHO_MEP_DC_WP_IFRAME_ID = "ziframe_629176";

export const ZOHO_MEP_DC_WP_IFRAME_SRC =
  "https://forms.zohopublic.com/virtualbuildingstudio1/form/MEPWPDownloadFormMEPCoordinationinDataCentersSolvi/formperma/MDYUvaMw1OhjWWasp6DdDQhy7Bz_uoeu0MkTjeOVIqc";

/** Hidden cost MEP whitepaper download form — /whitepaper/hidden-cost-of-late-stage-mep-coordination-failures/ */
export const ZOHO_HIDDEN_COST_WP_IFRAME_ID = "ziframe_578736";

export const ZOHO_HIDDEN_COST_WP_IFRAME_SRC =
  "https://forms.zohopublic.com/virtualbuildingstudio1/form/MEPWhitepaperDownloadForm1/formperma/CyS7nBbqlnBzivGQrHsMAlorWr8G_LkvmtV4JY-Zlas";

/** Fixed visible iframe area for hidden-cost whitepaper — taller than data center form. */
export const ZOHO_HIDDEN_COST_WP_VISIBLE_HEIGHT_PX = 500;

/** Taller locked viewport on mobile for the hidden-cost whitepaper form. */
export const ZOHO_HIDDEN_COST_WP_VISIBLE_HEIGHT_MOBILE_PX = 740;

/** Hide duplicate Zoho title — hidden-cost whitepaper only. */
export const ZOHO_HIDDEN_COST_WP_HEADER_CROP_PX = 210;

export const ZOHO_HIDDEN_COST_WP_HEADER_CROP_MOBILE_PX = 300;

export function getZohoHiddenCostWpHeaderCropPx() {
  if (typeof window === "undefined") {
    return ZOHO_HIDDEN_COST_WP_HEADER_CROP_PX;
  }

  return window.matchMedia("(max-width: 767px)").matches
    ? ZOHO_HIDDEN_COST_WP_HEADER_CROP_MOBILE_PX
    : ZOHO_HIDDEN_COST_WP_HEADER_CROP_PX;
}

/** Shared Zoho whitepaper embed crops — data center whitepaper only. */
export const ZOHO_MEP_DC_WP_HEADER_CROP_PX = 265;

/** Taller Zoho header stack on narrow viewports. */
export const ZOHO_MEP_DC_WP_HEADER_CROP_MOBILE_PX = 338;

/** Fallback full iframe height until Zoho posts its auto-resize message. */
export const ZOHO_MEP_DC_WP_IFRAME_INITIAL_HEIGHT_PX = 720;

/** Fixed visible iframe area — lockHeight uses this as the viewport height. */
export const ZOHO_MEP_DC_WP_VISIBLE_HEIGHT_PX = 480;

/**
 * Mobile locked base height — keep close to field stack + button so the
 * outer clip window doesn’t leave empty Zoho page space below the form.
 */
export const ZOHO_MEP_DC_WP_VISIBLE_HEIGHT_MOBILE_PX = 580;

/** Trim empty space below the MEP DC whitepaper form fields. */
export const ZOHO_MEP_DC_WP_FOOTER_CROP_PX = 148;

export const ZOHO_MEP_DC_WP_FOOTER_CROP_MOBILE_PX = 190;

export function getZohoMepDcWpMinVisibleHeightPx() {
  if (typeof window === "undefined") {
    return ZOHO_MEP_DC_WP_VISIBLE_HEIGHT_PX;
  }

  return window.matchMedia("(max-width: 767px)").matches
    ? ZOHO_MEP_DC_WP_VISIBLE_HEIGHT_MOBILE_PX
    : ZOHO_MEP_DC_WP_VISIBLE_HEIGHT_PX;
}

export function getZohoMepDcWpFooterCropPx() {
  if (typeof window === "undefined") {
    return ZOHO_MEP_DC_WP_FOOTER_CROP_PX;
  }

  return window.matchMedia("(max-width: 767px)").matches
    ? ZOHO_MEP_DC_WP_FOOTER_CROP_MOBILE_PX
    : ZOHO_MEP_DC_WP_FOOTER_CROP_PX;
}

export function getZohoMepDcWpHeaderCropPx() {
  if (typeof window === "undefined") {
    return ZOHO_MEP_DC_WP_HEADER_CROP_PX;
  }

  return window.matchMedia("(max-width: 767px)").matches
    ? ZOHO_MEP_DC_WP_HEADER_CROP_MOBILE_PX
    : ZOHO_MEP_DC_WP_HEADER_CROP_PX;
}

/** MEP webinar video gate form — on-demand MEP webinar recordings only. */
export const ZOHO_MEP_WEBINAR_VIDEO_FORM_IFRAME_ID = "ziframe_777506";

export const ZOHO_MEP_WEBINAR_VIDEO_FORM_IFRAME_SRC =
  "https://forms.zohopublic.com/virtualbuildingstudio1/form/MEPWebinarcontactusForm/formperma/lAPhPSILiNvMOJ2NV54JJ0UX0FD6uwY45UPFBz38a58";

/** Full iframe render height — wrapper clips the bottom empty area. */
export const ZOHO_MEP_WEBINAR_VIDEO_FORM_IFRAME_HEIGHT_PX = 530;

/** Visible clipped height of the form popup (no bottom gap / scrollbar). */
export const ZOHO_MEP_WEBINAR_VIDEO_FORM_VISIBLE_HEIGHT_PX = 455;

/** Trim Zoho embed padding from the top of the iframe. */
export const ZOHO_MEP_WEBINAR_VIDEO_FORM_TOP_CROP_PX = 20;

/** Trim Zoho embed padding from each side of the iframe. */
export const ZOHO_MEP_WEBINAR_VIDEO_FORM_SIDE_CROP_PX = 14;

/** Trim Zoho embed padding from the bottom of the iframe. */
export const ZOHO_MEP_WEBINAR_VIDEO_FORM_BOTTOM_CROP_PX = 16;

/** Popup dialog width for the MEP webinar video gate form. */
export const ZOHO_MEP_WEBINAR_VIDEO_FORM_MODAL_MAX_WIDTH_PX = 680;

export const ZOHO_MEP_WEBINAR_VIDEO_FORM_SUBMITTED_KEY = "vbs_mep_webinar_video_zoho_form_submitted";

/** Crop Zoho formHeaderDiv (duplicate title + description inside iframe). */
export const ZOHO_IFRAME_HEADER_CROP_PX = 195;

/** Mobile Zoho header stack is taller in narrow layout. */
export const ZOHO_IFRAME_HEADER_CROP_MOBILE_PX = 183;

export function getZohoIframeHeaderCropPx() {
  if (typeof window === "undefined") {
    return ZOHO_IFRAME_HEADER_CROP_PX;
  }

  return window.matchMedia("(max-width: 767px)").matches
    ? ZOHO_IFRAME_HEADER_CROP_MOBILE_PX
    : ZOHO_IFRAME_HEADER_CROP_PX;
}

/** Get in Touch embed — tuned top crop for footer/contact form iframe. */
export const GET_IN_TOUCH_ZOHO_HEADER_CROP_DESKTOP_PX = 143;
export const GET_IN_TOUCH_ZOHO_HEADER_CROP_MOBILE_PX = 194;

/** Extra space below the form on mobile — captcha, submit, and Zoho resize lag. */
export const GET_IN_TOUCH_ZOHO_MOBILE_BOTTOM_BUFFER_PX = 120;

/** Minimum clipped viewport on mobile — Zoho often under-reports stacked field height. */
export const GET_IN_TOUCH_ZOHO_MOBILE_MIN_VISIBLE_HEIGHT_PX = 800;

export function getGetInTouchZohoMobileBottomBufferPx() {
  if (typeof window === "undefined") {
    return 0;
  }

  return window.matchMedia("(max-width: 767px)").matches
    ? GET_IN_TOUCH_ZOHO_MOBILE_BOTTOM_BUFFER_PX
    : 0;
}

export function getGetInTouchZohoHeaderCropPx() {
  if (typeof window === "undefined") {
    return GET_IN_TOUCH_ZOHO_HEADER_CROP_DESKTOP_PX;
  }

  return window.matchMedia("(max-width: 767px)").matches
    ? GET_IN_TOUCH_ZOHO_HEADER_CROP_MOBILE_PX
    : GET_IN_TOUCH_ZOHO_HEADER_CROP_DESKTOP_PX;
}

/** Fallback until Zoho posts its auto-resize message. */
export const ZOHO_IFRAME_INITIAL_HEIGHT_PX = 680;

/** Get in Touch embed — Figma 2573:28324 fixed panel size (all pages). */
export const GET_IN_TOUCH_FORM_WIDTH_PX = 880;
export const GET_IN_TOUCH_EMBED_HEIGHT_DESKTOP_PX = 520;
export const GET_IN_TOUCH_EMBED_HEIGHT_MOBILE_PX = 980;
export const GET_IN_TOUCH_ZOHO_VISIBLE_HEIGHT_CAP_PX = GET_IN_TOUCH_EMBED_HEIGHT_DESKTOP_PX;

export function getGetInTouchZohoVisibleHeightCapPx(): number | null {
  if (typeof window === "undefined") {
    return GET_IN_TOUCH_ZOHO_VISIBLE_HEIGHT_CAP_PX;
  }

  return window.matchMedia("(max-width: 767px)").matches
    ? null
    : GET_IN_TOUCH_ZOHO_VISIBLE_HEIGHT_CAP_PX;
}

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
  options?: {
    cap?: number | null;
    headerCropPx?: number;
    bottomBufferPx?: number;
  },
) {
  const crop = options?.headerCropPx ?? getZohoIframeHeaderCropPx();
  const bottomBuffer = options?.bottomBufferPx ?? 0;
  const uncapped = Math.max(320, reportedFullHeight - crop + bottomBuffer);

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
