import Image from "next/image";

import { PageContainer } from "@/components/layout/page-container";
import { BlogDetailContent } from "@/components/sections/blog/blog-detail-content";
import { BlogDetailMeta } from "@/components/sections/blog/blog-detail-meta";
import { BlogDetailSidebar } from "@/components/sections/blog/blog-detail-sidebar";
import { SanityPortableText } from "@/components/sections/blog/sanity-portable-text";
import type { BlogPostDetail } from "@/constants/blog-posts/types";

type BlogDetailHeroSectionProps = {
  post: BlogPostDetail;
  previewMode?: boolean;
};

/** Figma 1438:21509 — blog article shell */
export function BlogDetailHeroSection({ post, previewMode }: BlogDetailHeroSectionProps) {
  return (
    <section className="vbs-blog-detail">
      <PageContainer>
        <div className="vbs-blog-detail__layout">
          <article className="vbs-blog-detail__main">
            <div className="vbs-blog-detail__intro">
              <BlogDetailMeta author={post.author} meta={post.meta} />

              <h1 className="vbs-blog-detail__title">{post.title}</h1>

              <div className="vbs-blog-detail__hero">
                <Image
                  src={post.heroImage}
                  alt=""
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1280px) 100vw, 830px"
                />
              </div>
            </div>

            {post.source !== "sanity" ? (
              <BlogDetailContent blocks={post.sections} author={post.author} />
            ) : null}
            {post.source === "sanity" && post.portableBody?.length ? (
              <SanityPortableText
                value={post.portableBody as unknown[]}
                previewMode={previewMode}
                author={post.author}
              />
            ) : null}
          </article>

          <BlogDetailSidebar tableOfContents={post.tableOfContents} />
        </div>
      </PageContainer>
    </section>
  );
}
