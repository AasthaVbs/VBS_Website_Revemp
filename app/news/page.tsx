import type { Metadata } from "next";

import { SiteHeader } from "@/components/layout/site-header";
import { NewsBrowseSection } from "@/components/sections/news/news-browse-section";
import { NewsHeroSection } from "@/components/sections/news/news-hero-section";
import { newsPageSchema, newsPageSeo } from "@/constants/news-page-content";
import {
  DeferredGetInTouchSection,
  DeferredSiteFooter,
} from "@/lib/lazy-page-sections";
import { buildResourceCatalogLive } from "@/lib/resource-catalog";

export const metadata: Metadata = {
  title: newsPageSeo.title,
  description: newsPageSeo.description,
  alternates: {
    canonical: "/news",
  },
  openGraph: {
    title: newsPageSeo.title,
    description: newsPageSeo.description,
    type: "website",
    url: "/news",
  },
  twitter: {
    title: newsPageSeo.title,
    description: newsPageSeo.description,
  },
};

export default async function NewsPage() {
  const initialCatalog = await buildResourceCatalogLive(new Date());

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(newsPageSchema) }}
      />
      <div className="vbs-redesign-page resources-listing-page vbs-news-listing-page min-h-screen bg-white">
        <SiteHeader />
        <main>
          <NewsHeroSection />
          <NewsBrowseSection initialCatalog={initialCatalog} />
          <DeferredGetInTouchSection />
        </main>
        <DeferredSiteFooter />
      </div>
    </>
  );
}
