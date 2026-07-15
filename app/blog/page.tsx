import type { Metadata } from "next";

import { SiteHeader } from "@/components/layout/site-header";
import { BlogsHeroSection } from "@/components/sections/blogs/blogs-hero-section";
import {
  DeferredBlogsBrowseSection,
  DeferredGetInTouchSection,
  DeferredSiteFooter,
} from "@/lib/lazy-page-sections";
import { buildResourceCatalog } from "@/lib/resource-catalog";

export const metadata: Metadata = {
  title: "Blogs | Virtual Building Studio",
  description:
    "Read Virtual Building Studio blogs on BIM, MEP engineering, architectural drafting, and delivery for architecture and engineering firms.",
};

export default function BlogPage() {
  const initialCatalog = buildResourceCatalog(new Date());

  return (
    <div className="vbs-redesign-page min-h-screen overflow-x-hidden bg-white">
      <SiteHeader />
      <main>
        <BlogsHeroSection />
        <DeferredBlogsBrowseSection initialCatalog={initialCatalog} />
        <DeferredGetInTouchSection />
      </main>
      <DeferredSiteFooter />
    </div>
  );
}
