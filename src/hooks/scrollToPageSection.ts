// @ts-nocheck
function normalizePath(pathname) {
  if (!pathname) return "/";
  const trimmed = pathname.replace(/\/$/, "");
  return trimmed || "/";
}

/**
 * Smooth-scroll to an in-page section.
 * @param {{ behavior?: ScrollBehavior, updateHash?: boolean }} options
 *   When updateHash is true, the URL hash is set (e.g. #services). Otherwise it is cleared.
 */
export function scrollToPageSection(hash, { behavior = "smooth", updateHash = false } = {}) {
  if (typeof window === "undefined" || !hash) return false;

  const id = hash.startsWith("#") ? hash.slice(1) : hash;
  if (!id) return false;

  const el = document.getElementById(id);
  if (!el) return false;

  el.scrollIntoView({ behavior, block: "start" });

  const baseUrl = `${window.location.pathname}${window.location.search}`;
  const nextUrl = updateHash ? `${baseUrl}#${id}` : baseUrl;
  window.history.replaceState(null, "", nextUrl);

  return true;
}

export function isSamePageHashLink(target) {
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

export function handleInPageHashClick(event, target, onClick, { updateHash = false } = {}) {
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
