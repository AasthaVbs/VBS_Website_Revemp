import {
  CAPABILITY_CATEGORIES,
  type NavDropdownLink,
} from "@/constants/navigation";

export function normalizePath(pathname: string) {
  if (!pathname) return "/";
  const withoutHash = pathname.split("#")[0] ?? pathname;
  const trimmed = withoutHash.replace(/\/$/, "");
  return trimmed || "/";
}

export function isNavPathExact(currentPath: string, href?: string) {
  if (!href || href.startsWith("#") || href.startsWith("http")) return false;
  const target = normalizePath(href.split("#")[0] ?? href);
  if (target === "/") return currentPath === "/";
  return currentPath === target;
}

export function isNavPathActive(currentPath: string, href?: string) {
  if (!href || href.startsWith("#") || href.startsWith("http")) return false;
  const target = normalizePath(href.split("#")[0] ?? href);
  if (target === "/") return currentPath === "/";
  return currentPath === target || currentPath.startsWith(`${target}/`);
}

export function getCanonicalActiveServiceLabel(path: string) {
  for (const category of CAPABILITY_CATEGORIES) {
    for (const column of category.services) {
      for (const service of column) {
        if (isNavPathExact(path, service.href)) {
          return service.label;
        }
      }
    }
  }
  return null;
}

export function isServiceLinkActive(path: string, service: NavDropdownLink) {
  const activeLabel = getCanonicalActiveServiceLabel(path);
  return activeLabel !== null && service.label === activeLabel;
}

export function isCapabilitiesPage(path: string) {
  for (const category of CAPABILITY_CATEGORIES) {
    if (category.href && isNavPathExact(path, category.href)) {
      return true;
    }
    for (const column of category.services) {
      for (const service of column) {
        if (isNavPathExact(path, service.href)) {
          return true;
        }
      }
    }
  }
  return false;
}

export function getCapabilityCategoryIdFromPath(path: string) {
  for (const category of CAPABILITY_CATEGORIES) {
    for (const column of category.services) {
      for (const service of column) {
        if (isNavPathExact(path, service.href)) {
          return category.id;
        }
      }
    }
  }

  for (const category of CAPABILITY_CATEGORIES) {
    if (category.href && isNavPathExact(path, category.href)) {
      return category.id;
    }
  }

  return CAPABILITY_CATEGORIES[0].id;
}

export function capabilityLinkProps(service: NavDropdownLink) {
  const isExternal =
    service.external ||
    (typeof service.href === "string" &&
      (service.href.startsWith("http://") || service.href.startsWith("https://")));

  return isExternal ? { target: "_blank" as const, rel: "noopener noreferrer" } : {};
}

export function isAboutSectionPath(path: string) {
  return (
    path === "/about-us" ||
    path === "/about" ||
    path === "/leadership" ||
    path === "/careers" ||
    path.startsWith("/careers/") ||
    path === "/life-at-vbs" ||
    path.startsWith("/life-at-vbs")
  );
}

export function isResourcesSectionPath(path: string) {
  return (
    path === "/blog" ||
    path.startsWith("/blog/") ||
    path === "/blogs" ||
    path === "/webinar" ||
    path === "/portfolio" ||
    path.startsWith("/portfolio/") ||
    path === "/projects" ||
    path.startsWith("/projects/") ||
    path === "/whitepaper" ||
    path.startsWith("/whitepaper/") ||
    path === "/testimonials" ||
    path === "/resources"
  );
}

export function isEngagementSectionPath(path: string) {
  return path === "/engagement-models" || path.startsWith("/engagement-models/");
}

export function isContactSectionPath(path: string) {
  return (
    path === "/contact-us" ||
    path.startsWith("/contact-us/") ||
    path === "/contact" ||
    path.startsWith("/contact/")
  );
}
