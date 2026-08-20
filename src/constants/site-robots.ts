/** Shared noindex / nofollow / robots.txt policy for ACS, MEP, and listed campaign URLs. */

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

/** Exact paths requested for No Index / No Follow / Disallow. */
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

const LEGACY_ROBOTS_DISALLOW = [
  "/*?*",
  "/preview",
  "/download",
  "/image/signature",
  "/tag/",
  "/category/",
  "/portfolio-category/",
  "/training/",
  "/webinar-challenges-in-design-development-and-how-to-overcome-them",
  "/webinar-common-mistakes-to-avoid-when-creating-permit-sets",
  "/secure-construction-documents-accuracy-compliance-webinar",
  "/talent-vs-tech-the-secret-boosting-your-architecture",
  "/gis-services",
  "/leadership-redesign",
  "/landing",
  "/awareness",
  "/bim-resources",
  "/whitepaper",
] as const;

export const ROBOTS_DISALLOW = withSlashVariants([
  ...LEGACY_ROBOTS_DISALLOW.filter((path) => path !== "/*?*"),
  ...ACS_NOINDEX_PATHS,
]).concat("/*?*");

export const SITEMAP_EXCLUDE_PREFIXES = [
  "/preview",
  "/download",
  "/landing",
  "/pipeline-health-diagnostic",
  "/revit-documentation-support-for-architecture-firms",
  "/architecture-bim-construction-documentation-project",
  "/practice",
  "/architectural-drafting-services-usa",
  "/architectural-bim-services-usa",
  "/cad-drafting-services-usa",
  "/cad-to-bim-conversion-services",
  "/bim-modeling-services-usa",
  "/revit-architectural-drafting-services",
  "/revit-architectural-drafting-sevices",
  "/3d-rendering-services-usa",
  "/mep-bim-services-USA",
  "/mep-bim-services-usa",
  "/drm-solution",
  "/60-minutes-team",
  "/roi-calculator",
  "/aia-conference-events",
  "/talent-vs-tech-the-secret-boosting-your-architecture",
  "/webinar-challenges-in-design-development-and-how-to-overcome-them",
  "/webinar-common-mistakes-to-avoid-when-creating-permit-sets",
  "/secure-construction-documents-accuracy-compliance-webinar",
  "/bim-resources",
  "/whitepaper",
  "/thank-you",
];

/** next.config headers() sources so X-Robots-Tag applies with and without a trailing slash. */
export function noIndexHeaderSources() {
  const prefixes = new Set<string>(["/landing", ...ACS_NOINDEX_PATHS]);
  const sources = new Set<string>();

  for (const prefix of prefixes) {
    const base = prefix.replace(/\/+$/, "") || "/";
    sources.add(base);
    sources.add(`${base}/`);
    sources.add(`${base}/:path*`);
  }

  return [...sources];
}
