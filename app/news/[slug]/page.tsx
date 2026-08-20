import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SiteHeader } from "@/components/layout/site-header";
import { NewsDetailArticleSection } from "@/components/sections/news/news-detail-article-section";
import { RelatedArticlesSection } from "@/components/sections/shared/related-articles-section";
import { newsDetailRelated, newsPageSeo } from "@/constants/news-page-content";
import type { ResourceListingItem } from "@/constants/resources-page-content";
import { SITE_URL } from "@/constants/site-tracking";
import {
  DeferredGetInTouchSection,
  DeferredSiteFooter,
} from "@/lib/lazy-page-sections";
import {
  getAllNewsSlugs,
  getNewsPostBySlug,
  getRelatedNewsPosts,
  getSearchableNewsPosts,
} from "@/lib/news-posts";
import { sanityPostSeo } from "@/lib/sanity-blog";
import { fetchSanityPostBySlug } from "@/lib/sanity-fetch";

export const revalidate = 60;

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await getAllNewsSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const sanityPost = await fetchSanityPostBySlug(slug);
  if (sanityPost) {
    const seo = sanityPostSeo(sanityPost);
    return {
      title: seo.title,
      description: seo.description,
      alternates: { canonical: `/news/${slug}` },
      openGraph: {
        title: seo.title,
        description: seo.description,
        type: "article",
        url: `/news/${slug}`,
        images: seo.image ? [{ url: seo.image }] : undefined,
      },
      twitter: {
        title: seo.title,
        description: seo.description,
      },
    };
  }

  return {
    title: newsPageSeo.title,
    description: newsPageSeo.description,
  };
}

export default async function NewsDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getNewsPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const [relatedItems, searchableNews] = await Promise.all([
    getRelatedNewsPosts(slug, 4),
    getSearchableNewsPosts(slug),
  ]);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: post.title,
    description: post.excerpt,
    image: post.heroImage || undefined,
    datePublished: post.meta.lastUpdated !== "—" ? post.meta.lastUpdated : undefined,
    dateModified: post.meta.lastUpdated !== "—" ? post.meta.lastUpdated : undefined,
    mainEntityOfPage: `${SITE_URL}/news/${post.slug}`,
    author: {
      "@type": "Organization",
      name: "Virtual Building Studio Inc.",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Virtual Building Studio Inc.",
      url: SITE_URL,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div className="vbs-redesign-page vbs-news-detail-page min-h-screen bg-white">
        <SiteHeader />
        <main>
          <NewsDetailArticleSection post={post} searchableNews={searchableNews} />
          <RelatedArticlesSection
            tag={newsDetailRelated.tag}
            titleLead={newsDetailRelated.titleLead}
            titleAccent={newsDetailRelated.titleAccent}
            description={newsDetailRelated.description}
            items={relatedItems as ResourceListingItem[]}
            viewAllHref={null}
            sideMeta="date"
            descriptionMaxWidth={674}
            titleMaxWidth={680}
          />
          <DeferredGetInTouchSection />
        </main>
        <DeferredSiteFooter />
      </div>
    </>
  );
}
