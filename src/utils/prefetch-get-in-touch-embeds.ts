import { HEADER_BOOK_MEETING_URL } from "@/utils/nimbus-booking";
import {
  ZOHO_CONTACT_FORM_IFRAME_SRC,
  ensureGoogleRecaptchaForZoho,
} from "@/utils/zoho-contact-form-embed";

function addLink(rel: string, href: string, crossOrigin?: boolean) {
  if (typeof document === "undefined") return;
  if (document.querySelector(`link[rel="${rel}"][href="${href}"]`)) return;

  const link = document.createElement("link");
  link.rel = rel;
  link.href = href;
  if (crossOrigin) link.crossOrigin = "anonymous";
  document.head.appendChild(link);
}

/** Warm connections and prefetch Get in Touch tab embeds (Zoho + Nimbus). */
export function prefetchGetInTouchEmbeds() {
  if (typeof document === "undefined") return;

  const preconnectOrigins = [
    "https://forms.zohopublic.com",
    "https://zohopublic.com",
    "https://booknow.virtualbuildingstudio.com",
    "https://bookings.nimbuspop.com",
    "https://www.google.com",
    "https://www.gstatic.com",
    "https://www.recaptcha.net",
    "https://recaptcha.googleapis.com",
  ];

  preconnectOrigins.forEach((href) => {
    addLink("preconnect", href, href.includes("zoho") || href.includes("gstatic"));
  });

  addLink("dns-prefetch", "https://forms.zohopublic.com");
  addLink("dns-prefetch", "https://booknow.virtualbuildingstudio.com");

  [ZOHO_CONTACT_FORM_IFRAME_SRC, HEADER_BOOK_MEETING_URL].forEach((href) => {
    addLink("prefetch", href);
  });

  ensureGoogleRecaptchaForZoho();
}
