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
import { sanityPostSeo } from "@/lib/sanity-blog";
import { fetchSanityPostBySlug } from "@/lib/sanity-fetch";

export const revalidate = 60;

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const sanityPost = await fetchSanityPostBySlug(slug);
  if (sanityPost) {
    const seo = sanityPostSeo(sanityPost);
    return {
      title: `${seo.title} | Virtual Building Studio`,
      description: seo.description,
      openGraph: seo.image ? { images: [{ url: seo.image }] } : undefined,
    };
  }

  const post = await getBlogPostBySlug(slug);
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
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedItems = await getRelatedBlogPosts(slug, 4);

  return (
    <div className="vbs-redesign-page vbs-blog-detail-page min-h-screen bg-white">
      <SiteHeader />
      <main>
        <BlogDetailHeroSection post={post} />
        {post.faqs.length > 0 ? <BlogDetailFaqSection items={post.faqs} /> : null}
        <RelatedArticlesSection
          titleLead="Related "
          titleAccent="Articles"
          description="Recent Insights and Research on AEC Industry"
          items={relatedItems}
          viewAllHref="/blog"
        />
        <GetInTouchSection />
      </main>
      <SiteFooter />
    </div>
  );
}
