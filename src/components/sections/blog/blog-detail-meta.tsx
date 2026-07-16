import Image from "next/image";
import Link from "next/link";

import type { BlogPostDetail } from "@/constants/blog-posts/types";

type BlogDetailMetaProps = {
  author: BlogPostDetail["author"];
  meta: BlogPostDetail["meta"];
};

/** Figma 1438:21509 — author row above article title */
export function BlogDetailMeta({ author, meta }: BlogDetailMetaProps) {
  return (
    <div className="vbs-blog-detail__meta">
      <Link
        href="/blog"
        className="vbs-blog-detail__back-link vbs-blog-detail__back-link--mobile"
      >
        Go back To Blogs
      </Link>

      <div className="vbs-blog-detail__meta-author">
        <div className="vbs-blog-detail__meta-avatar">
          <Image
            src={author.image}
            alt={author.name}
            fill
            className="object-cover"
            sizes="50px"
          />
        </div>
        <div className="vbs-blog-detail__meta-name-block">
          <p className="vbs-blog-detail__meta-name">{author.name}</p>
          <p className="vbs-blog-detail__meta-role">{author.role}</p>
        </div>
      </div>

      <div className="vbs-blog-detail__meta-details">
        <div className="vbs-blog-detail__meta-pair">
          <span className="vbs-blog-detail__meta-label">Type:</span>
          <span className="vbs-blog-detail__meta-value">{meta.category}</span>
        </div>
        <div className="vbs-blog-detail__meta-pair">
          <span className="vbs-blog-detail__meta-label">Last Updated:</span>
          <span className="vbs-blog-detail__meta-value">{meta.lastUpdated}</span>
        </div>
      </div>
    </div>
  );
}
