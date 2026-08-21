import type { Metadata } from "next";

import { SiteHeader } from "@/components/layout/site-header";
import { BlogsBrowseSection } from "@/components/sections/blogs/blogs-browse-section";
import { BlogsHeroSection } from "@/components/sections/blogs/blogs-hero-section";
import {
  DeferredGetInTouchSection,
  DeferredSiteFooter,
} from "@/lib/lazy-page-sections";
import { buildResourceCatalogLive } from "@/lib/resource-catalog";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "BIM Central | Virtual Building Studio (VBS)",
  description:
    "Welcome to BIM Central, your source for BIM news, events, insights, and tips. Stay updated on the latest trends in virtual construction and BIM technology.",
};

export default async function BlogPage() {
  const initialCatalog = await buildResourceCatalogLive(new Date());

  return (
    <div className="vbs-redesign-page vbs-blogs-listing-page min-h-screen bg-white">
      <SiteHeader />
      <main>
        <BlogsHeroSection />
        <BlogsBrowseSection initialCatalog={initialCatalog} />
        <DeferredGetInTouchSection />
      </main>
      <DeferredSiteFooter />
    </div>
  );
}