import type { MetadataRoute } from "next";

const DISALLOW = [
  "/aia-conference-events",
  "/landing/",
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
  "/drm-solution",
  "/60-minutes-team",
  "/roi-calculator",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: DISALLOW,
    },
  };
}
