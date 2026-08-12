import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Ported Gatsby project pages are untyped legacy JSX.
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Expose gated-PDF / pipeline-diag / contact EmailJS ids to the browser (Gatsby used GATSBY_*).
  env: {
    NEXT_PUBLIC_GATED_PDF_SERVICE_ID:
      process.env.NEXT_PUBLIC_GATED_PDF_SERVICE_ID || process.env.GATSBY_GATED_PDF_SERVICE_ID || "",
    NEXT_PUBLIC_GATED_PDF_TEMPLATE_ID:
      process.env.NEXT_PUBLIC_GATED_PDF_TEMPLATE_ID || process.env.GATSBY_GATED_PDF_TEMPLATE_ID || "",
    NEXT_PUBLIC_GATED_PDF_PUBLIC_KEY:
      process.env.NEXT_PUBLIC_GATED_PDF_PUBLIC_KEY || process.env.GATSBY_GATED_PDF_PUBLIC_KEY || "",
    NEXT_PUBLIC_PIPELINE_DIAG_SERVICE_ID:
      process.env.NEXT_PUBLIC_PIPELINE_DIAG_SERVICE_ID ||
      process.env.GATSBY_PIPELINE_DIAG_SERVICE_ID ||
      "",
    NEXT_PUBLIC_PIPELINE_DIAG_TEMPLATE_ID:
      process.env.NEXT_PUBLIC_PIPELINE_DIAG_TEMPLATE_ID ||
      process.env.GATSBY_PIPELINE_DIAG_TEMPLATE_ID ||
      "",
    NEXT_PUBLIC_PIPELINE_DIAG_PUBLIC_KEY:
      process.env.NEXT_PUBLIC_PIPELINE_DIAG_PUBLIC_KEY ||
      process.env.GATSBY_PIPELINE_DIAG_PUBLIC_KEY ||
      "",
    NEXT_PUBLIC_SERVICE_ID:
      process.env.NEXT_PUBLIC_SERVICE_ID ||
      process.env.GATSBY_SERVICE_ID ||
      process.env.SERVICE_ID ||
      "",
    NEXT_PUBLIC_TEMPLATE_ID:
      process.env.NEXT_PUBLIC_TEMPLATE_ID ||
      process.env.GATSBY_TEMPLATE_ID ||
      process.env.TEMPLATE_ID ||
      "",
    NEXT_PUBLIC_PUBLIC_KEY:
      process.env.NEXT_PUBLIC_PUBLIC_KEY ||
      process.env.GATSBY_PUBLIC_KEY ||
      process.env.PUBLIC_KEY ||
      "",
    NEXT_PUBLIC_SIXTY_MINUTES_QUICK_SUBMIT_SERVICE_ID:
      process.env.NEXT_PUBLIC_SIXTY_MINUTES_QUICK_SUBMIT_SERVICE_ID ||
      process.env.GATSBY_SIXTY_MINUTES_QUICK_SUBMIT_SERVICE_ID ||
      process.env.GATSBY_SIXTY_MINUTES_TEAM_SERVICE_ID ||
      "",
    NEXT_PUBLIC_SIXTY_MINUTES_QUICK_SUBMIT_TEMPLATE_ID:
      process.env.NEXT_PUBLIC_SIXTY_MINUTES_QUICK_SUBMIT_TEMPLATE_ID ||
      process.env.GATSBY_SIXTY_MINUTES_QUICK_SUBMIT_TEMPLATE_ID ||
      process.env.GATSBY_SIXTY_MINUTES_TEAM_TEMPLATE_ID ||
      "",
    NEXT_PUBLIC_SIXTY_MINUTES_QUICK_SUBMIT_PUBLIC_KEY:
      process.env.NEXT_PUBLIC_SIXTY_MINUTES_QUICK_SUBMIT_PUBLIC_KEY ||
      process.env.GATSBY_SIXTY_MINUTES_QUICK_SUBMIT_PUBLIC_KEY ||
      process.env.GATSBY_SIXTY_MINUTES_TEAM_PUBLIC_KEY ||
      "",
    NEXT_PUBLIC_SIXTY_MINUTES_USER_SUMMARY_SERVICE_ID:
      process.env.NEXT_PUBLIC_SIXTY_MINUTES_USER_SUMMARY_SERVICE_ID ||
      process.env.GATSBY_SIXTY_MINUTES_USER_SUMMARY_SERVICE_ID ||
      "",
    NEXT_PUBLIC_SIXTY_MINUTES_USER_SUMMARY_TEMPLATE_ID:
      process.env.NEXT_PUBLIC_SIXTY_MINUTES_USER_SUMMARY_TEMPLATE_ID ||
      process.env.GATSBY_SIXTY_MINUTES_USER_SUMMARY_TEMPLATE_ID ||
      "",
    NEXT_PUBLIC_SIXTY_MINUTES_USER_SUMMARY_PUBLIC_KEY:
      process.env.NEXT_PUBLIC_SIXTY_MINUTES_USER_SUMMARY_PUBLIC_KEY ||
      process.env.GATSBY_SIXTY_MINUTES_USER_SUMMARY_PUBLIC_KEY ||
      "",
    NEXT_PUBLIC_SIXTY_MINUTES_IMAGE_UPLOAD_URL:
      process.env.NEXT_PUBLIC_SIXTY_MINUTES_IMAGE_UPLOAD_URL ||
      process.env.GATSBY_SIXTY_MINUTES_IMAGE_UPLOAD_URL ||
      "",
    NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN:
      process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN ||
      process.env.GATSBY_MAPBOX_ACCESS_TOKEN ||
      "",
    NEXT_PUBLIC_GOOGLE_STATIC_MAPS_API_KEY:
      process.env.NEXT_PUBLIC_GOOGLE_STATIC_MAPS_API_KEY ||
      process.env.GATSBY_GOOGLE_STATIC_MAPS_API_KEY ||
      process.env.GATSBY_GOOGLE_MAPS_API_KEY ||
      "",
    NEXT_PUBLIC_SERVICE_ID_WEBINAR:
      process.env.NEXT_PUBLIC_SERVICE_ID_WEBINAR || process.env.SERVICE_ID_WEBINAR || "",
    NEXT_PUBLIC_TEMPLATE_ID_WEBINAR:
      process.env.NEXT_PUBLIC_TEMPLATE_ID_WEBINAR || process.env.TEMPLATE_ID_WEBINAR || "",
    NEXT_PUBLIC_PUBLIC_KEY_WEBINAR:
      process.env.NEXT_PUBLIC_PUBLIC_KEY_WEBINAR || process.env.PUBLIC_KEY_WEBINAR || "",
  },
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  images: {
    formats: ["image/avif", "image/webp"],
    unoptimized: process.env.NODE_ENV === "development",
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io", pathname: "/**" },
    ],
  },
  async redirects() {
    const staticRedirects = [
      { source: "/about", destination: "/about-us", permanent: true },
      { source: "/about/:path*", destination: "/about-us", permanent: true },
      { source: "/blogs", destination: "/blog", permanent: true },
      { source: "/blogs/:path*", destination: "/blog/:path*", permanent: true },
      { source: "/contact", destination: "/contact-us", permanent: true },
      { source: "/contact/:path*", destination: "/contact-us", permanent: true },
      { source: "/engagement-model", destination: "/engagement-models", permanent: true },
      { source: "/engagement-model/:path*", destination: "/engagement-models", permanent: true },
      { source: "/mep-engineers", destination: "/mep-bim-services", permanent: true },
      { source: "/mep-engineers/:path*", destination: "/mep-bim-services", permanent: true },
      { source: "/leadership-team", destination: "/leadership", permanent: true },
      { source: "/leadership-team/:path*", destination: "/leadership", permanent: true },
      {
        source: "/mep-bim-modelling",
        destination: "/mep-bim-services/mep-bim-modeling-services",
        permanent: true,
      },
      {
        source: "/revit-architectural-drafting-sevices",
        destination: "/revit-architectural-drafting-services",
        permanent: true,
      },
      {
        source: "/revit-architectural-drafting-sevices/:path*",
        destination: "/revit-architectural-drafting-services",
        permanent: true,
      },
      {
        source: "/mep-bim-modelling/:path*",
        destination: "/mep-bim-services/mep-bim-modeling-services",
        permanent: true,
      },
      {
        source: "/bim-modeling-services/coordination-clash-detection-services",
        destination: "/mep-bim-services/mep-coordination-services",
        permanent: true,
      },
      {
        source: "/bim-modeling-services/coordination-clash-detection-services/:path*",
        destination: "/mep-bim-services/mep-coordination-services",
        permanent: true,
      },
      {
        source: "/bim-services/coordination-clash-detection-services",
        destination: "/mep-bim-services/mep-coordination-services",
        permanent: true,
      },
      {
        source: "/bim-services/coordination-clash-detection-services/:path*",
        destination: "/mep-bim-services/mep-coordination-services",
        permanent: true,
      },
      {
        source: "/mep-bim-services/mep-calsh-detection-services",
        destination: "/mep-bim-services/mep-clash-detection-services",
        permanent: true,
      },
      {
        source: "/mep-bim-services/mep-calsh-detection-services/:path*",
        destination: "/mep-bim-services/mep-clash-detection-services",
        permanent: true,
      },
      {
        source: "/aia-conference-event",
        destination: "/aia-conference-events",
        permanent: true,
      },
      {
        source: "/aia-conference-event/:path*",
        destination: "/aia-conference-events",
        permanent: true,
      },
      {
        source: "/aia-conference",
        destination: "/aia-conference-events",
        permanent: true,
      },
      {
        source: "/aia-conference/:path*",
        destination: "/aia-conference-events",
        permanent: true,
      },
      {
        source: "/landing/cad-drafting-services-usa",
        destination: "/cad-drafting-services-usa",
        permanent: true,
      },
      {
        source: "/landing/cad-drafting-services-usa/:path*",
        destination: "/cad-drafting-services-usa",
        permanent: true,
      },
      {
        source: "/landing/bim-modeling-services-usa",
        destination: "/bim-modeling-services-usa",
        permanent: true,
      },
      {
        source: "/landing/bim-modeling-services-usa/:path*",
        destination: "/bim-modeling-services-usa",
        permanent: true,
      },
      { source: "/portfolio", destination: "/projects", permanent: true },
      { source: "/portfolio/:path*", destination: "/projects/:path*", permanent: true },
      { source: "/success-stories", destination: "/projects", permanent: true },
      { source: "/case-study", destination: "/projects", permanent: true },
      { source: "/case-study/:path*", destination: "/projects/:path*", permanent: true },
      { source: "/dedicated-resource", destination: "/engagement-models", permanent: true },
      { source: "/dedicated-resource/:path*", destination: "/engagement-models", permanent: true },
      { source: "/dedicated-team", destination: "/engagement-models", permanent: true },
      { source: "/dedicated-team/:path*", destination: "/engagement-models", permanent: true },
      { source: "/top-1-a-e-resources", destination: "/engagement-models", permanent: true },
      { source: "/top-1-a-e-resources/:path*", destination: "/engagement-models", permanent: true },
      {
        source: "/hire-architects-and-engineers",
        destination: "/engagement-models",
        permanent: true,
      },
      {
        source: "/hire-architects-and-engineers/:path*",
        destination: "/engagement-models",
        permanent: true,
      },
      {
        source: "/terms-and-conditions",
        destination: "/terms-of-use",
        permanent: true,
      },
      {
        source: "/webinar/webinar-common-mistakes-to-avoid-when-creating-permit-sets",
        destination: "/webinar-common-mistakes-to-avoid-when-creating-permit-sets",
        permanent: true,
      },
      {
        source: "/webinar/webinar-common-mistakes-to-avoid-when-creating-permit-sets/:path*",
        destination: "/webinar-common-mistakes-to-avoid-when-creating-permit-sets",
        permanent: true,
      },
      {
        source: "/terms-and-conditions/:path*",
        destination: "/terms-of-use",
        permanent: true,
      },
      {
        source: "/hiring-vs-dedicated-remote-architect",
        destination: "/landing/hiring-vs-dedicated-remote-architect",
        permanent: true,
      },
      {
        source: "/hiring-vs-dedicated-remote-architect/",
        destination: "/landing/hiring-vs-dedicated-remote-architect",
        permanent: true,
      },
      {
        source: "/why-growing-architecture-firms-hit-documentation-wall",
        destination: "/landing/why-growing-architecture-firms-hit-documentation-wall",
        permanent: true,
      },
      {
        source: "/why-growing-architecture-firms-hit-documentation-wall/",
        destination: "/landing/why-growing-architecture-firms-hit-documentation-wall",
        permanent: true,
      },
      {
        source: "/delivery-capacity-in-architecture-firms",
        destination: "/landing/delivery-capacity-in-architecture-firms",
        permanent: true,
      },
      {
        source: "/delivery-capacity-in-architecture-firms/",
        destination: "/landing/delivery-capacity-in-architecture-firms",
        permanent: true,
      },
      // Resource hub short URLs from Gatsby delivery-capacity LP → working Main pages
      {
        source: "/capacity-model-comparison",
        destination: "/landing/dedicated-remote-architect-vs-freelancer-vs-full-time",
        permanent: true,
      },
      {
        source: "/capacity-model-comparison/",
        destination: "/landing/dedicated-remote-architect-vs-freelancer-vs-full-time",
        permanent: true,
      },
      {
        source: "/case-study-stabilizing-documentation",
        destination: "/landing/why-growing-architecture-firms-hit-documentation-wall",
        permanent: true,
      },
      {
        source: "/case-study-stabilizing-documentation/",
        destination: "/landing/why-growing-architecture-firms-hit-documentation-wall",
        permanent: true,
      },
      {
        source: "/senior-architect-bottlenecks-webinar",
        destination: "/landing/documentation-system-that-scale",
        permanent: true,
      },
      {
        source: "/senior-architect-bottlenecks-webinar/",
        destination: "/landing/documentation-system-that-scale",
        permanent: true,
      },
      {
        source: "/capacity-diagnostic-worksheet",
        destination: "/pipeline-health-diagnostic",
        permanent: true,
      },
      {
        source: "/capacity-diagnostic-worksheet/",
        destination: "/pipeline-health-diagnostic",
        permanent: true,
      },
    ];

    let sanityRedirects: { source: string; destination: string; permanent: boolean }[] = [];
    try {
      const { fetchSanityRedirects } = await import("./src/lib/sanity-fetch");
      const rows = await fetchSanityRedirects();
      if (rows?.length) {
        sanityRedirects = rows
          .filter((row) => row.oldUrl && row.newUrl)
          .map((row) => ({
            source: row.oldUrl.replace(/\/$/, "") || "/",
            destination: row.newUrl,
            permanent: true,
          }));
      }
    } catch {
      // Sanity credentials may be unavailable during local setup.
    }

    return [...staticRedirects, ...sanityRedirects];
  },
};

export default nextConfig;
