import Image from "next/image";

import { PageContainer } from "@/components/layout/page-container";
import { BlogDetailAside } from "@/components/sections/blog/blog-detail-aside";
import { SanityPortableText } from "@/components/sections/blog/sanity-portable-text";
import { BlogDetailContent } from "@/components/sections/blog/blog-detail-content";
import { BlogDetailSidebar } from "@/components/sections/blog/blog-detail-sidebar";
import type { BlogPostDetail } from "@/constants/blog-posts/types";

type BlogDetailHeroSectionProps = {
  post: BlogPostDetail;
  previewMode?: boolean;
};

export function BlogDetailHeroSection({ post, previewMode }: BlogDetailHeroSectionProps) {
  return (
    <section className="bg-white py-12 lg:py-[100px]">
      <PageContainer>
        <div className="flex flex-col gap-8 xl:flex-row xl:items-start xl:gap-[30px]">
          <BlogDetailSidebar tableOfContents={post.tableOfContents} />

          <div className="flex min-w-0 flex-1 flex-col gap-[30px]">
            <div className="relative h-[280px] w-full overflow-hidden rounded-[11.93px] sm:h-[360px] lg:h-[490px]">
              <Image
                src={post.heroImage}
                alt=""
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1280px) 100vw, 776px"
              />
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="text-[28px] font-medium capitalize leading-tight text-[#111111] sm:text-[36px]">
                {post.title}
              </h1>
            </div>
            {post.source !== "sanity" ? <BlogDetailContent blocks={post.sections} /> : null}
            {post.source === "sanity" && post.portableBody?.length ? (
              <SanityPortableText value={post.portableBody as unknown[]} previewMode={previewMode} />
            ) : null}
          </div>

          <BlogDetailAside author={post.author} meta={post.meta} />
        </div>
      </PageContainer>
    </section>
  );
}
