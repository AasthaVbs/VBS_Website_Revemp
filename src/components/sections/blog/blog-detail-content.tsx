import Image from "next/image";
import Link from "next/link";

import { EvaluateDeliveryCtaCard } from "@/components/ui/evaluate-delivery-cta-card";
import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";
import type {
  BlogContentBlock,
  BlogPostDetail,
  BlogTextSpan,
} from "@/constants/blog-posts/types";
import { cn } from "@/lib/utils";

function RichText({ spans }: { spans: BlogTextSpan[] }) {
  return (
    <p className="vbs-blog-detail__rich">
      {spans.map((span, index) => {
        const className = cn(
          span.underline && "vbs-blog-detail__link",
          span.italic && "vbs-blog-detail__em",
        );
        if (span.href) {
          return (
            <Link key={`${span.text}-${index}`} href={span.href} className={className}>
              {span.text}
            </Link>
          );
        }
        return (
          <span key={`${span.text}-${index}`} className={className}>
            {span.text}
          </span>
        );
      })}
    </p>
  );
}

function BlogTable({
  headers,
  rows,
}: {
  headers: [string, string, string];
  rows: { cells: [string, string, string]; highlight?: boolean }[];
}) {
  return (
    <div className="vbs-blog-detail__table">
      <div className="vbs-blog-detail__table-head">
        {headers.map((header, index) => (
          <div
            key={header}
            className={cn(
              "vbs-blog-detail__table-head-cell",
              index === 1 && "vbs-blog-detail__table-head-cell--bordered",
            )}
          >
            {header}
          </div>
        ))}
      </div>
      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className={cn(
            "vbs-blog-detail__table-row",
            row.highlight && "vbs-blog-detail__table-row--alt",
          )}
        >
          {row.cells.map((cell, cellIndex) => (
            <div
              key={cellIndex}
              className={cn(
                "vbs-blog-detail__table-cell",
                cellIndex === 0 && "vbs-blog-detail__table-cell--label",
                cellIndex === 1 && "vbs-blog-detail__table-cell--bordered",
              )}
            >
              {cell}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

type BlockSection = {
  blocks: BlogContentBlock[];
};

function groupBlogBlocks(blocks: BlogContentBlock[]): BlockSection[] {
  const sections: BlockSection[] = [];
  let current: BlogContentBlock[] = [];

  const pushCurrent = () => {
    if (current.length) {
      sections.push({ blocks: current });
      current = [];
    }
  };

  for (const block of blocks) {
    if (block.type === "ctaBanner" || block.type === "authorBio") {
      pushCurrent();
      sections.push({ blocks: [block] });
      continue;
    }

    if (block.type === "h2") {
      pushCurrent();
      current = [block];
      continue;
    }

    current.push(block);
  }

  pushCurrent();
  return sections;
}

function renderBlock(
  block: BlogContentBlock,
  index: number,
  author: BlogPostDetail["author"],
) {
  switch (block.type) {
    case "paragraph":
      return (
        <p key={index} className="vbs-blog-detail__paragraph">
          {block.text}
        </p>
      );
    case "rich":
      return <RichText key={index} spans={block.spans} />;
    case "h2":
      return (
        <h2
          key={index}
          id={block.id}
          className={cn(
            "vbs-blog-detail__h2",
            block.accent && "vbs-blog-detail__h2--accent",
          )}
        >
          {block.text}
        </h2>
      );
    case "bulletList":
      return (
        <div key={index} className="vbs-blog-detail__bullet-list">
          {block.items.map((item) => (
            <div key={item.title} className="vbs-blog-detail__bullet-item">
              <p className="vbs-blog-detail__bullet-title">{item.title}</p>
              <p className="vbs-blog-detail__bullet-body">{item.body}</p>
            </div>
          ))}
        </div>
      );
    case "table":
      return <BlogTable key={index} headers={block.headers} rows={block.rows} />;
    case "image":
      return (
        <div key={index} className="vbs-blog-detail__content-image">
          <Image
            src={block.src}
            alt={block.alt ?? ""}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 845px"
          />
        </div>
      );
    case "callout":
      return (
        <div key={index} className="vbs-blog-detail__callout">
          <span className="vbs-blog-detail__callout-label">{block.label}</span>
          <Link
            href={block.href ?? "/contact-us"}
            className="vbs-blog-detail__callout-link"
          >
            {block.linkLabel}
          </Link>
        </div>
      );
    case "ctaBanner":
      return (
        <EvaluateDeliveryCtaCard
          key={index}
          className="vbs-blog-detail__cta-card"
          title={block.title}
          description={block.description}
          ctaLabel={block.ctaLabel}
          ctaHref={block.href ?? "/contact-us"}
        />
      );
    case "authorBio":
      return (
        <div key={index} className="vbs-blog-detail__author-bio">
          <div className="vbs-blog-detail__author-bio-image">
            <Image
              src={block.image}
              alt=""
              fill
              className="object-cover"
              sizes="100px"
            />
          </div>
          <div className="vbs-blog-detail__author-bio-text">
            <p className="vbs-blog-detail__author-bio-name">{author.name}</p>
            <p className="vbs-blog-detail__author-bio-desc">{block.bio}</p>
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
      );
    default:
      return null;
  }
}

type BlogDetailContentProps = {
  blocks: BlogContentBlock[];
  author: BlogPostDetail["author"];
};

export function BlogDetailContent({ blocks, author }: BlogDetailContentProps) {
  const sections = groupBlogBlocks(blocks);

  return (
    <div className="vbs-blog-detail__body">
      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="vbs-blog-detail__section">
          {section.blocks.map((block, blockIndex) =>
            renderBlock(block, blockIndex, author),
          )}
        </div>
      ))}
    </div>
  );
}
