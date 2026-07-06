import type { Metadata } from "next";

import { SiteHeader } from "@/components/layout/site-header";
import { BlogsHeroSection } from "@/components/sections/blogs/blogs-hero-section";
import {
  DeferredBlogsBrowseSection,
  DeferredGetInTouchSection,
  DeferredSiteFooter,
} from "@/lib/lazy-page-sections";

export const metadata: Metadata = {
  title: "Blogs | Virtual Building Studio",
  description:
    "Read Virtual Building Studio blogs on BIM, MEP engineering, architectural drafting, and delivery for architecture and engineering firms.",
};

export default function BlogsPage() {
  return (
    <div className="vbs-redesign-page min-h-screen overflow-x-hidden bg-white">
      <SiteHeader />
      <main>
        <BlogsHeroSection />
        <DeferredBlogsBrowseSection />
        <DeferredGetInTouchSection />
      </main>
      <DeferredSiteFooter />
    </div>
  );
}
