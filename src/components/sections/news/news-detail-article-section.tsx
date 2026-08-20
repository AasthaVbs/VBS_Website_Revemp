import Image from "next/image";

import { PageContainer } from "@/components/layout/page-container";
import { SanityPortableText } from "@/components/sections/blog/sanity-portable-text";
import { NewsDetailSidebar } from "@/components/sections/news/news-detail-sidebar";
import type { BlogPostDetail } from "@/constants/blog-posts/types";
import type { CatalogListingItem } from "@/lib/resource-catalog-types";

type NewsDetailArticleSectionProps = {
  post: BlogPostDetail;
  searchableNews: CatalogListingItem[];
};

export function NewsDetailArticleSection({
  post,
  searchableNews,
}: NewsDetailArticleSectionProps) {
  return (
    <section className="vbs-news-detail">
      <PageContainer>
        <div className="vbs-news-detail__layout">
          <article className="vbs-news-detail__main">
            <div className="vbs-news-detail__hero">
              <Image
                src={post.heroImage}
                alt=""
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1280px) 100vw, 969px"
              />
            </div>

            <div className="vbs-news-detail__intro">
              <h1 className="vbs-news-detail__title">{post.title}</h1>
            </div>

            {post.source === "sanity" && post.portableBody?.length ? (
              <SanityPortableText
                value={post.portableBody as unknown[]}
                variant="news"
              />
            ) : (
              <p className="vbs-news-detail__paragraph">{post.excerpt}</p>
            )}
          </article>

          <NewsDetailSidebar searchableNews={searchableNews} />
        </div>
      </PageContainer>
    </section>
  );
}
