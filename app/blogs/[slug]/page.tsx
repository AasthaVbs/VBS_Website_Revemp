import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SiteHeader } from "@/components/layout/site-header";
import { BlogDetailFaqSection } from "@/components/sections/blog/blog-detail-faq-section";
import { BlogDetailHeroSection } from "@/components/sections/blog/blog-detail-hero-section";
import { GetInTouchSection } from "@/components/sections/get-in-touch-section";
import { RelatedArticlesSection } from "@/components/sections/shared/related-articles-section";
import { SiteFooter } from "@/components/sections/site-footer";
import {
  getAllBlogSlugs,
  getBlogPostBySlug,
  getRelatedBlogPosts,
} from "@/constants/blog-posts";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) {
    return { title: "Blog | Virtual Building Studio" };
  }
  return {
    title: `${post.title} | Virtual Building Studio`,
    description: post.excerpt,
  };
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedItems = getRelatedBlogPosts(slug, 4);

  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <SiteHeader />
      <main>
        <BlogDetailHeroSection post={post} />
        <BlogDetailFaqSection items={post.faqs} />
        <RelatedArticlesSection
          titleLead="Related "
          titleAccent="Articles"
          description="Recent Insights and Research on AEC Industry"
          items={relatedItems}
          viewAllHref="/blogs"
        />
        <GetInTouchSection />
      </main>
      <SiteFooter />
    </div>
  );
}
