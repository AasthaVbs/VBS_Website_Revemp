import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SiteHeader } from "@/components/layout/site-header";
import { GetInTouchSection } from "@/components/sections/get-in-touch-section";
import { RelatedArticlesSection } from "@/components/sections/shared/related-articles-section";
import { SiteFooter } from "@/components/sections/site-footer";
import { WebinarDetailView } from "@/components/sections/webinar/webinar-detail-view";
import { getRelatedWebinarListingItems } from "@/lib/related-webinars";
import {
  getAllWebinarSlugsForBuild,
  resolveWebinarDetailBySlug,
  webinarSeo,
} from "@/lib/sanity-webinar";
import { normalizeWebinarSlug } from "@/lib/resource-listing";

export const revalidate = 60;

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await getAllWebinarSlugsForBuild();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const webinar = await resolveWebinarDetailBySlug(normalizeWebinarSlug(slug));
  if (!webinar) {
    return { title: "Webinar | Virtual Building Studio" };
  }

  const seo = webinarSeo(webinar);
  return {
    title: seo.title,
    description: seo.description,
    openGraph: seo.image ? { images: [{ url: seo.image }] } : undefined,
  };
}

export default async function WebinarDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const cleanSlug = normalizeWebinarSlug(slug);
  const webinar = await resolveWebinarDetailBySlug(cleanSlug);

  if (!webinar) {
    notFound();
  }

  const relatedWebinars = getRelatedWebinarListingItems(cleanSlug, 4);
  const searchableWebinars = getRelatedWebinarListingItems(cleanSlug, 20);

  return (
    <div className="vbs-redesign-page vbs-webinar-detail-page min-h-screen bg-white">
      <SiteHeader />
      <main>
        <WebinarDetailView webinar={webinar} searchableWebinars={searchableWebinars} />
        <RelatedArticlesSection
          tag="Resources"
          titleLead="Latest Insights on "
          titleAccent="Production, Governance, and Scale"
          description="Explore technical thought leadership and actionable strategies designed to optimize your production workflows and scale without compromising standards."
          items={relatedWebinars}
          viewAllHref={null}
          sideMeta="date"
          descriptionMaxWidth={628}
          titleMaxWidth={674}
        />
        <GetInTouchSection />
      </main>
      <SiteFooter />
    </div>
  );
}
