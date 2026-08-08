const COOKIE_HIDE_FRAGMENTS = [
  "this website uses cookies",
  "tracking technologies to improve your browsing experience",
  "our website uses cookies to give you the best and most relevant experience",
];

const COOKIE_HIDE_SELECTORS = [
  "#onetrust-banner-sdk",
  "#onetrust-consent-sdk",
  ".cky-consent-container",
  ".osano-cm-window",
  "[id*='cookie-consent' i]",
  "[class*='cookie-consent' i]",
  "[id*='clarity-consent' i]",
  "[class*='clarity-consent' i]",
  "[id*='ClarityConsent' i]",
  "[class*='ClarityConsent' i]",
  "#clarity-cb",
  "#clarity-consent-banner",
];

const isOurCookieConsentBanner = (node: Element) => {
  const className = (node.className || "").toString();
  return /\bCookieConsent\b/.test(className) && !className.includes("cookie-consent--hidden");
};

const isCookieBannerNode = (node: Element | null) => {
  if (!node || node.nodeType !== 1) return false;
  if (isOurCookieConsentBanner(node)) return false;

  const id = (node.id || "").toLowerCase();
  const className = (node.className || "").toString().toLowerCase();
  const role = (node.getAttribute?.("role") || "").toLowerCase();

  if (
    id.includes("cookie") ||
    className.includes("cookie-consent") ||
    className.includes("clarity-consent") ||
    (role === "dialog" && className.includes("consent"))
  ) {
    return true;
  }

  const text = (node.textContent || "").toLowerCase();
  if (!COOKIE_HIDE_FRAGMENTS.some((fragment) => text.includes(fragment))) {
    return false;
  }

  if (node.closest?.(".CookieConsent:not(.cookie-consent--hidden)")) {
    return false;
  }

  return true;
};

const hideCookieBannerNode = (node: Element) => {
  if (!isCookieBannerNode(node)) return;
  const el = node as HTMLElement;

  el.style.setProperty("display", "none", "important");
  el.style.setProperty("visibility", "hidden", "important");
  el.style.setProperty("opacity", "0", "important");
  el.style.setProperty("pointer-events", "none", "important");
  el.setAttribute("aria-hidden", "true");
  el.hidden = true;
};

const hideCookieBanners = () => {
  if (typeof document === "undefined") return;

  COOKIE_HIDE_SELECTORS.forEach((selector) => {
    document.querySelectorAll(selector).forEach(hideCookieBannerNode);
  });

  document
    .querySelectorAll(
      "div,section,aside,[role='dialog'],[class*='cookie'],[class*='consent'],[id*='cookie'],[id*='consent']",
    )
    .forEach((node) => {
      if (isCookieBannerNode(node)) hideCookieBannerNode(node);
    });
};

let observerStarted = false;

export const initCookieBannerHider = () => {
  if (typeof window === "undefined" || typeof document === "undefined") return;

  hideCookieBanners();

  if (observerStarted) return;
  observerStarted = true;

  const observer = new MutationObserver(() => hideCookieBanners());
  observer.observe(document.documentElement, {
    childList: true,
    subtree: true,
  });

  window.setInterval(hideCookieBanners, 1000);
};

export const grantClarityConsent = () => {
  if (typeof window === "undefined") return;

  window.clarity =
    window.clarity ||
    function clarityStub(...args: unknown[]) {
      (window.clarity!.q = window.clarity!.q || []).push(args);
    };

  window.clarity("consentv2", {
    ad_storage: "granted",
    analytics_storage: "granted",
  });
};
