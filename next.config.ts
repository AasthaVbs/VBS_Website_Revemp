import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Large Figma PNGs (5MB+ hero) — skip on-the-fly optimization in dev to avoid long hangs
  images: {
    unoptimized: process.env.NODE_ENV === "development",
  },
};

export default nextConfig;
