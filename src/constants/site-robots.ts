/** Shared noindex / nofollow / robots.txt policy. */

export const NOINDEX_NOFOLLOW_ROBOTS = {
  index: false,
  follow: false,
  googleBot: { index: false, follow: false },
} as const;

export const X_ROBOTS_NOINDEX_NOFOLLOW = {
  key: "X-Robots-Tag",
  value: "noindex, nofollow",
} as const;

function withSlashVariants(paths: readonly string[]) {
  const out = new Set<string>();
  for (const path of paths) {
    const trimmed = path.replace(/\/+$/, "") || "/";
    out.add(trimmed);
    if (trimmed !== "/") {
      out.add(`${trimmed}/`);
    }
  }
  return [...out];
}

function uniquePaths(paths: readonly string[]) {
  const out = new Set<string>();
  for (const path of paths) {
    const trimmed = path.replace(/\/+$/, "") || "/";
    if (trimmed !== "/*?*") {
      out.add(trimmed);
    }
  }
  return [...out];
}

/**
 * Exact Disallow list from On Page/robots.txt.
 * Every path here is also noindex, nofollow (meta + X-Robots-Tag) and sitemap-excluded.
 */
export const SOURCE_ROBOTS_PATHS = [
  "/preview",
  "/download",
  "/image/signature",
  "/tag",
  "/wp-content",
  "/category",
  "/portfolio-category",
  "/training",
  "/webinar-challenges-in-design-development-and-how-to-overcome-them",
  "/architectural-drafting-services-usa",
  "/architectural-bim-services-usa",
  "/cad-drafting-services-usa",
  "/cad-to-bim-conversion-services",
  "/bim-modeling-services-usa",
  "/talent-vs-tech-the-secret-boosting-your-architecture",
  "/revit-architectural-drafting-sevices",
  "/3d-rendering-services-usa",
  "/revit-documentation-support-for-architecture-firms",
  "/gis-services",
  "/drm-solution",
  "/leadership-redesign",
  "/landing",
  "/awareness",
  "/roi-calculator",
  "/60-minutes-team",
  "/pipeline-health-diagnostic",
] as const;

/** Extra campaign / ACS URLs already noindexed on this site (keep). */
export const ACS_NOINDEX_PATHS = [
  "/landing/calculator-cost-of-one-more-project",
  "/landing/dedicated-remote-architect-vs-freelancer-vs-full-time",
  "/landing/delivery-inside-architecture-firms",
  "/landing/documentation-system-that-scale",
  "/landing/growing-architecture-firms-add-capacity-without-chaos",
  "/landing/hiring-vs-dedicated-remote-architect",
  "/landing/why-growing-architecture-firms-hit-documentation-wall",
  "/pipeline-health-diagnostic",
  "/landing/delivery-capacity-in-architecture-firms",
  "/revit-documentation-support-for-architecture-firms",
  "/architecture-bim-construction-documentation-project",
  "/practice",
  "/landing/professional-architectural-drafting-services",
  "/landing/cad-drafting-services-usa",
  "/landing/bim-modeling-services-usa",
  "/architectural-drafting-services-usa",
  "/architectural-bim-services-usa",
  "/cad-drafting-services-usa",
  "/cad-to-bim-conversion-services",
  "/bim-modeling-services-usa",
  "/revit-architectural-drafting-sevices",
  "/revit-architectural-drafting-services",
  "/3d-rendering-services-usa",
  "/mep-bim-services-USA",
  "/mep-bim-services-usa",
  "/drm-solution",
  "/60-minutes-team",
  "/roi-calculator",
  "/aia-conference-events",
] as const;

const EXTRA_NOINDEX_PATHS = [
  "/webinar-common-mistakes-to-avoid-when-creating-permit-sets",
  "/secure-construction-documents-accuracy-compliance-webinar",
  "/bim-resources",
  "/whitepaper",
  "/thank-you",
] as const;

export const ALL_NOINDEX_PATHS = uniquePaths([
  ...SOURCE_ROBOTS_PATHS,
  ...ACS_NOINDEX_PATHS,
  ...EXTRA_NOINDEX_PATHS,
]);

export const ROBOTS_DISALLOW = withSlashVariants(ALL_NOINDEX_PATHS).concat("/*?*");

export const SITEMAP_EXCLUDE_PREFIXES = ALL_NOINDEX_PATHS;

/** next.config headers() sources so X-Robots-Tag applies with and without a trailing slash. */
export function noIndexHeaderSources() {
  const sources = new Set<string>();

  for (const prefix of ALL_NOINDEX_PATHS) {
    const base = prefix.replace(/\/+$/, "") || "/";
    sources.add(base);
    sources.add(`${base}/`);
    sources.add(`${base}/:path*`);
  }

  return [...sources];
}
