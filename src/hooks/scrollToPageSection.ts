type ScrollToPageSectionOptions = {
  behavior?: ScrollBehavior;
  updateHash?: boolean;
  /** Retry while deferred sections mount (default 40 × 100ms). */
  retries?: number;
  retryDelayMs?: number;
};

function normalizePath(pathname: string) {
  if (!pathname) return "/";
  const trimmed = pathname.replace(/\/$/, "");
  return trimmed || "/";
}

function resolveSectionId(hash: string) {
  return hash.startsWith("#") ? hash.slice(1) : hash;
}

function findScrollTarget(id: string): HTMLElement | null {
  const byId = document.getElementById(id);
  if (byId) return byId;

  const escaped =
    typeof CSS !== "undefined" && typeof CSS.escape === "function"
      ? CSS.escape(id)
      : id.replace(/"/g, '\\"');

  return document.querySelector<HTMLElement>(`[data-deferred-section-id="${escaped}"]`);
}

function scrollElementIntoView(el: HTMLElement, behavior: ScrollBehavior) {
  el.scrollIntoView({ behavior, block: "start" });
}

function isDeferredHost(el: HTMLElement) {
  return el.classList.contains("deferred-section-host");
}

/**
 * Smooth-scroll to an in-page section.
 * Retries so viewport-deferred sections can mount before scrolling.
 */
export function scrollToPageSection(
  hash: string,
  {
    behavior = "smooth",
    updateHash = false,
    retries = 40,
    retryDelayMs = 100,
  }: ScrollToPageSectionOptions = {},
) {
  if (typeof window === "undefined" || !hash) return false;

  const id = resolveSectionId(hash);
  if (!id) return false;

  if (updateHash) {
    const baseUrl = `${window.location.pathname}${window.location.search}`;
    window.history.replaceState(null, "", `${baseUrl}#${id}`);
  }

  // Force matching deferred hosts to mount even when replaceState skips hashchange.
  window.dispatchEvent(
    new CustomEvent("vbs:force-deferred-load", { detail: { id } }),
  );

  const attempt = (remaining: number): boolean => {
    const el = findScrollTarget(id);
    if (el) {
      scrollElementIntoView(el, remaining === retries ? behavior : "auto");

      const settled = !isDeferredHost(el) && el.id === id;
      if (settled || remaining <= 0) {
        if (behavior === "smooth" && remaining !== retries) {
          scrollElementIntoView(el, "smooth");
        }
        return true;
      }
    }

    if (remaining <= 0) return Boolean(el);

    window.setTimeout(() => {
      attempt(remaining - 1);
    }, retryDelayMs);

    return true;
  };

  return attempt(retries);
}

export function isSamePageHashLink(target: string) {
  if (typeof window === "undefined" || typeof target !== "string" || !target.includes("#")) {
    return false;
  }

  const hashIndex = target.indexOf("#");
  const pathPart = target.slice(0, hashIndex);
  const hash = target.slice(hashIndex + 1);

  if (!hash) return false;

  const currentPath = normalizePath(window.location.pathname);
  const targetPath = pathPart ? normalizePath(pathPart) : currentPath;

  return targetPath === currentPath;
}

export function handleInPageHashClick(
  event: { preventDefault: () => void },
  target: string,
  onClick?: (event: { preventDefault: () => void }) => void,
  { updateHash = false }: { updateHash?: boolean } = {},
) {
  if (!isSamePageHashLink(target)) {
    onClick?.(event);
    return;
  }

  const hash = target.slice(target.indexOf("#"));
  const scrolled = scrollToPageSection(hash, { updateHash });

  if (scrolled) {
    event.preventDefault();
  }

  onClick?.(event);
}

export function isBookMeetingCtaLabel(label: string) {
  return /book\s*a\s*meeting/i.test(label.trim());
}

export function isBookMeetingCtaHref(href?: string | null) {
  if (!href) return false;
  const normalized = href.trim().toLowerCase();
  return (
    normalized === "#book-meeting" ||
    normalized === "#meeting" ||
    normalized === "meeting" ||
    normalized.endsWith("#book-meeting")
  );
}
