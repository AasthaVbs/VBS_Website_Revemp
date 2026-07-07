import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SiteHeader } from "@/components/layout/site-header";
import { GetInTouchSection } from "@/components/sections/get-in-touch-section";
import { SiteFooter } from "@/components/sections/site-footer";
import { WebinarDetailView } from "@/components/sections/webinar/webinar-detail-view";
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
    title: `${seo.title} | Virtual Building Studio`,
    description: seo.description,
    openGraph: seo.image ? { images: [{ url: seo.image }] } : undefined,
  };
}

export default async function WebinarDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const webinar = await resolveWebinarDetailBySlug(normalizeWebinarSlug(slug));

  if (!webinar) {
    notFound();
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <SiteHeader />
      <WebinarDetailView webinar={webinar} />
      <GetInTouchSection />
      <SiteFooter />
    </div>
  );
}
