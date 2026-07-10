import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Ported Gatsby project pages are untyped legacy JSX.
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: process.env.NODE_ENV === "development",
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io", pathname: "/**" },
    ],
  },
  async redirects() {
    const staticRedirects = [
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/about-us/:path*", destination: "/about", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/contact-us/:path*", destination: "/contact", permanent: true },
      { source: "/bim-resources", destination: "/resources", permanent: true },
      { source: "/bim-resources/:path*", destination: "/resources", permanent: true },
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
        source: "/mep-bim-modelling/:path*",
        destination: "/mep-bim-services/mep-bim-modeling-services",
        permanent: true,
      },
      { source: "/projects", destination: "/portfolio", permanent: true },
      { source: "/projects/:path*", destination: "/portfolio/:path*", permanent: true },
      { source: "/success-stories", destination: "/portfolio", permanent: true },
      { source: "/case-study", destination: "/portfolio", permanent: true },
      { source: "/case-study/:path*", destination: "/portfolio/:path*", permanent: true },
      { source: "/dedicated-team", destination: "/build-your-team", permanent: true },
      { source: "/dedicated-resource", destination: "/build-your-team", permanent: true },
      {
        source: "/webinar-common-mistakes-to-avoid-when-creating-permit-sets",
        destination: "/webinar/webinar-common-mistakes-to-avoid-when-creating-permit-sets",
        permanent: true,
      },
      {
        source: "/webinar-common-mistakes-to-avoid-when-creating-permit-sets/:path*",
        destination: "/webinar/webinar-common-mistakes-to-avoid-when-creating-permit-sets",
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
