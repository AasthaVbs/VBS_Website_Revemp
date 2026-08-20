"use client";

import { PortableText, type PortableTextComponents, type PortableTextBlock } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

import { EvaluateDeliveryCtaCard } from "@/components/ui/evaluate-delivery-cta-card";
import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";
import type { BlogPostDetail } from "@/constants/blog-posts/types";
import { sanityDataset, sanityProjectId } from "@/lib/sanity-env";
import { cn } from "@/lib/utils";

type SanityPortableTextProps = {
  value: unknown[];
  previewMode?: boolean;
  author?: BlogPostDetail["author"];
  variant?: "blog" | "news";
};

function getSanityFileUrl(assetRef?: string) {
  if (!assetRef) return null;
  const parts = assetRef.split("-");
  if (parts.length < 3) return null;
  const id = parts[1];
  const format = parts[parts.length - 1];
  return `https://cdn.sanity.io/files/${sanityProjectId}/${sanityDataset}/${id}.${format}?dl=`;
}

function buildPortableTextComponents(
  previewMode?: boolean,
  author?: BlogPostDetail["author"],
  variant: "blog" | "news" = "blog",
): PortableTextComponents {
  const isNews = variant === "news";

  return {
    types: {
      image: () => null,
      table: ({ value }) => {
        const rows = value?.rows || [];
        if (!rows.length) return null;
        const [head, ...bodyRows] = rows;
        const colCount = head?.cells?.length || 0;

        return (
          <div className="overflow-hidden rounded-[10px] border border-[#CBCCCD]">
            {head ? (
              <div
                className="grid bg-[#111111] text-white"
                style={{ gridTemplateColumns: `minmax(180px, 272px) repeat(${Math.max(colCount - 1, 1)}, 1fr)` }}
              >
                {(head.cells || []).map((cell: { content?: string; _key?: string }, index: number) => (
                  <div
                    key={cell._key || index}
                    className={cn(
                      "p-5 text-[16px] leading-7",
                      index > 0 && index < colCount - 1 && "border-x border-[#808080]",
                    )}
                  >
                    {cell.content}
                  </div>
                ))}
              </div>
            ) : null}
            {bodyRows.map(
              (
                row: { _key?: string; cells?: Array<{ content?: string; _key?: string }> },
                rowIndex: number,
              ) => (
                <div
                  key={row._key}
                  className={cn(
                    "grid",
                    rowIndex % 2 === 1 ? "bg-[#FAFAFA]" : "bg-white",
                  )}
                  style={{ gridTemplateColumns: `minmax(180px, 272px) repeat(${Math.max(colCount - 1, 1)}, 1fr)` }}
                >
                  {(row.cells || []).map((cell, index) => (
                    <div
                      key={cell._key || index}
                      className={cn(
                        "p-5 text-[16px] leading-7",
                        index === 0 ? "text-[#111111]" : "text-[#808080]",
                        index > 0 && index < colCount - 1 && "border-x border-[#CBCCCD]",
                      )}
                    >
                      {cell.content}
                    </div>
                  ))}
                </div>
              ),
            )}
          </div>
        );
      },
      downloadBlock: ({ value }) => {
        const assetId = value?.fileUpload?.asset?._ref || value?.fileUpload?.asset?._id;
        const fileUrl =
          value?.downloadUrl ||
          (assetId ? getSanityFileUrl(assetId) : null);

        if (!fileUrl) return null;

        return (
          <div className="vbs-blog-detail__callout">
            <span className="vbs-blog-detail__callout-label">
              {value.modalHeading || "Download"}
            </span>
            <Link
              href={fileUrl}
              className="vbs-blog-detail__callout-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {value.buttonText || "Download"}
            </Link>
          </div>
        );
      },
      rawHtml: ({ value }) => {
        const html = value?.code?.code;
        if (!html) return null;
        return <div dangerouslySetInnerHTML={{ __html: html }} />;
      },
      cta: ({ value }) => (
        <EvaluateDeliveryCtaCard
          className="vbs-blog-detail__cta-card"
          title={value.title}
          description={value.description}
          ctaLabel={value.buttonText || "Contact Us"}
          ctaHref={value.buttonUrl || "/contact-us"}
        />
      ),
      readMore: ({ value }) =>
        value?.url ? (
          <div className="vbs-blog-detail__callout">
            <span className="vbs-blog-detail__callout-label">{value.label}</span>
            <Link href={value.url} className="vbs-blog-detail__callout-link">
              {value.linkText}
            </Link>
          </div>
        ) : null,
    },
    block: {
      h2: ({ children, value }) => (
        <h2
          id={value?._key ? `toc-${value._key}` : undefined}
          className="vbs-blog-detail__h2"
        >
          {children}
        </h2>
      ),
      h3: ({ children }) => (
        <h3 className="vbs-blog-detail__h2 text-[20px]">{children}</h3>
      ),
      blockquote: ({ children }) => (
        <blockquote className={isNews ? "vbs-news-detail__quote" : "vbs-blog-detail__paragraph vbs-blog-detail__em"}>
          {children}
        </blockquote>
      ),
      normal: ({ children }) => (
        <p className={isNews ? "vbs-news-detail__paragraph" : "vbs-blog-detail__paragraph"}>
          {children}
        </p>
      ),
    },
    marks: {
      link: ({ children, value }) => {
        const href = value?.href || "#";
        const isExternal = href.startsWith("http");
        return (
          <Link
            href={href}
            className="vbs-blog-detail__link"
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
          >
            {children}
          </Link>
        );
      },
      strong: ({ children }) => (
        <strong className={isNews ? "vbs-news-detail__strong" : "vbs-blog-detail__em"}>
          {children}
        </strong>
      ),
      em: ({ children }) => (
        <em className={isNews ? "vbs-news-detail__quote" : "vbs-blog-detail__em"}>{children}</em>
      ),
    },
    list: {
      bullet: ({ children }) => (
        <ul
          className={
            isNews
              ? "list-disc space-y-2 pl-6 text-[16px] leading-6 text-[#808080]"
              : "list-disc space-y-2 pl-6 text-[16px] leading-7 text-[#808080]"
          }
        >
          {children}
        </ul>
      ),
      number: ({ children }) => (
        <ol
          className={
            isNews
              ? "list-decimal space-y-2 pl-6 text-[16px] leading-6 text-[#808080]"
              : "list-decimal space-y-2 pl-6 text-[16px] leading-7 text-[#808080]"
          }
        >
          {children}
        </ol>
      ),
    },
    listItem: {
      bullet: ({ children }) => (
        <li className={isNews ? "leading-6" : "leading-7"}>{children}</li>
      ),
      number: ({ children }) => (
        <li className={isNews ? "leading-6" : "leading-7"}>{children}</li>
      ),
    },
  };
}

export function SanityPortableText({
  value,
  previewMode,
  author,
  variant = "blog",
}: SanityPortableTextProps) {
  const components = useMemo(
    () => buildPortableTextComponents(previewMode, author, variant),
    [previewMode, author, variant],
  );

  if (!Array.isArray(value) || !value.length) return null;

  const showAuthor = variant !== "news" && Boolean(author?.bio);

  return (
    <div className={variant === "news" ? "vbs-news-detail__body" : "vbs-blog-detail__body"}>
      <div className="vbs-blog-detail__section vbs-blog-detail__prose">
        <PortableText value={value as PortableTextBlock[]} components={components} />
      </div>
      {showAuthor && author ? (
        <div className="vbs-blog-detail__author-bio">
          <div className="vbs-blog-detail__author-bio-image">
            <Image
              src={author.image}
              alt={author.name}
              fill
              className="object-cover"
              sizes="100px"
            />
          </div>
          <div className="vbs-blog-detail__author-bio-text">
            <p className="vbs-blog-detail__author-bio-name">{author.name}</p>
            <p className="vbs-blog-detail__author-bio-desc">{author.bio}</p>
          </div>
          {author.linkedinUrl ? (
            <div className="vbs-blog-detail__author-bio-cta">
              <PrimaryCtaButton
                fullWidth={false}
                href={author.linkedinUrl}
                className="h-auto min-h-[52px] w-full whitespace-nowrap px-5 sm:w-auto"
              >
                Linkedin
              </PrimaryCtaButton>
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
