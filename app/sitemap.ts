import type { MetadataRoute } from "next";

import { SITEMAP_EXCLUDE_PREFIXES } from "@/constants/site-robots";
import { SITE_URL } from "@/constants/site-tracking";
import { fetchSanityResourceListing } from "@/lib/sanity-fetch";
import { projectPageSlugs } from "@/lib/project-pages-registry";

const STATIC_PATHS = [
  "/",
  "/about-us",
  "/contact-us",
  "/privacy-policy",
  "/cookie-policy",
  "/terms-of-use",
  "/careers",
  "/leadership",
  "/life-at-vbs",
  "/testimonials",
  "/engagement-models",
  "/our-expertise",
  "/locations",
  "/locations/architectural-bim-services-california",
  "/locations/architectural-bim-services-new-york",
  "/locations/architectural-bim-services-texas",
  "/locations/cad-drafting-services-california",
  "/locations/cad-drafting-services-new-york",
  "/locations/cad-drafting-services-texas",
  "/locations/mep-bim-services-california",
  "/locations/mep-bim-services-new-york",
  "/locations/mep-bim-services-texas",
  "/blog",
  "/webinar",
  "/resources",
  "/projects",
  "/projects/all-projects",
  "/architecture-services",
  "/architectural-drafting-services",
  "/architectural-scan-to-bim-services",
  "/as-built-drafting-services",
  "/as-built-modeling-services",
  "/bim-for-data-center",
  "/bim-modeling-services",
  "/bim-modeling-services/architectural-bim-services",
  "/bim-modeling-services/cad-to-bim",
  "/bim-modeling-services/laser-scan-to-bim",
  "/bim-modeling-services/revit-family-creation",
  "/cad-drafting-services",
  "/cad-drafting-services/2d-drafting-services",
  "/cad-drafting-services/pdf-to-cad-conversion-services",
  "/construction-documentation-services",
  "/design-development-services",
  "/floor-plan-services",
  "/mep-bim-services",
  "/mep-bim-services/bill-of-material-services",
  "/mep-bim-services/mep-bim-modeling-services",
  "/mep-bim-services/mep-clash-detection-services",
  "/mep-bim-services/mep-coordination-services",
  "/mep-bim-services/mep-data-center-services",
  "/mep-bim-services/mep-revit-family-creation-services",
  "/mep-bim-services/mep-shop-drawing-services",
  "/mep-bim-services/mep-spool-drawing-services",
  "/mep-bim-services/pre-bid-estimation-services",
  "/permit-drawing-services",
  "/point-cloud-to-bim-services",
  "/scan-to-bim-services",
  "/scan-to-cad-services",
  "/schematic-design-services",
  "/structural-bim-services",
  "/zoning-analysis-services",
  "/3d-rendering-services",
  "/3d-visualization-services",
  "/4d-bim-scheduling-simulation-services",
];

function withTrailingSlash(path: string) {
  if (path === "/") return path;
  return path.endsWith("/") ? path : `${path}/`;
}

function isExcluded(path: string) {
  return SITEMAP_EXCLUDE_PREFIXES.some(
    (prefix) => path === prefix || path.startsWith(`${prefix}/`),
  );
}

function entry(path: string, lastModified?: string, changefreq?: MetadataRoute.Sitemap[number]["changeFrequency"], priority?: number): MetadataRoute.Sitemap[number] {
  const normalized = withTrailingSlash(path);
  const isHome = normalized === "/";
  const isBlog = normalized.startsWith("/blog/");
  return {
    url: `${SITE_URL}${normalized === "/" ? "/" : normalized}`,
    lastModified: lastModified ? new Date(lastModified) : new Date(),
    changeFrequency: changefreq || (isHome ? "daily" : isBlog ? "weekly" : "daily"),
    priority: priority ?? (isHome ? 1 : isBlog ? 0.8 : 0.7),
  };
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticEntries = STATIC_PATHS.filter((path) => !isExcluded(path)).map((path) => entry(path));

  const projectEntries = projectPageSlugs.map((slug) => entry(`/projects/${slug}`));

  let blogEntries: MetadataRoute.Sitemap = [];
  let webinarEntries: MetadataRoute.Sitemap = [];

  try {
    const listing = await fetchSanityResourceListing();
    blogEntries = listing.posts
      .filter((post) => post.slug)
      .map((post) =>
        entry(`/blog/${post.slug}`, "publishedAt" in post ? post.publishedAt || undefined : undefined, "weekly", 0.8),
      );
    webinarEntries = listing.webinars
      .filter((webinar) => webinar.slug)
      .map((webinar) =>
        entry(
          `/webinar/${webinar.slug}`,
          "eventDate" in webinar ? webinar.eventDate || undefined : undefined,
          "weekly",
          0.7,
        ),
      );
  } catch {
    blogEntries = [];
    webinarEntries = [];
  }

  return [...staticEntries, ...projectEntries, ...blogEntries, ...webinarEntries];
}
