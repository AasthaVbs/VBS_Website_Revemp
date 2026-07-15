import Image from "next/image";
import Link from "next/link";

import { EvaluateDeliveryCtaCard } from "@/components/ui/evaluate-delivery-cta-card";
import type { BlogContentBlock, BlogTextSpan } from "@/constants/blog-posts/types";
import { cn } from "@/lib/utils";

function RichText({ spans }: { spans: BlogTextSpan[] }) {
  return (
    <p className="text-[16px] leading-6 text-[#808080]">
      {spans.map((span, index) => {
        const className = cn(
          span.underline && "text-[#111111] underline",
          span.italic && "font-medium italic text-[#111111]",
          !span.underline && !span.italic && "text-[#808080]",
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
    <div className="overflow-hidden rounded-[10px] border border-[#CBCCCD]">
      <div className="grid grid-cols-1 bg-[#111111] sm:grid-cols-3">
        {headers.map((header, index) => (
          <div
            key={header}
            className={cn(
              "p-5 text-[16px] text-white",
              index === 1 && "sm:border-x sm:border-[#808080]",
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
            "grid grid-cols-1 sm:grid-cols-3",
            row.highlight ? "bg-[#FAFAFA]" : "bg-white",
          )}
        >
          {row.cells.map((cell, cellIndex) => (
            <div
              key={cellIndex}
              className={cn(
                "p-5 text-[16px] leading-6",
                cellIndex === 0 ? "text-[#111111]" : "text-[#808080]",
                cellIndex === 1 && "sm:border-x sm:border-[#CBCCCD]",
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

export function BlogDetailContent({ blocks }: { blocks: BlogContentBlock[] }) {
  return (
    <div className="flex w-full flex-col gap-[30px]">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "paragraph":
            return (
              <p
                key={index}
                className="text-[16px] leading-6 text-[#808080]"
              >
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
                className="scroll-mt-28 text-[24px] font-medium capitalize text-[#111111]"
              >
                {block.text}
              </h2>
            );
          case "bulletList":
            return (
              <div key={index} className="flex flex-col gap-4 px-0 sm:px-[30px]">
                {block.items.map((item) => (
                  <div key={item.title} className="flex flex-col gap-2.5">
                    <p className="text-[16px] leading-6 text-[#111111]">
                      {item.title}
                    </p>
                    <p className="text-[16px] leading-6 text-[#808080]">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            );
          case "table":
            return (
              <BlogTable
                key={index}
                headers={block.headers}
                rows={block.rows}
              />
            );
          case "image":
            return (
              <div
                key={index}
                className="relative aspect-[754/446] w-full overflow-hidden rounded-[10px]"
              >
                <Image
                  src={block.src}
                  alt={block.alt ?? ""}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 754px"
                />
              </div>
            );
          case "callout":
            return (
              <div
                key={index}
                className="flex flex-wrap items-center justify-center gap-2.5 rounded-[10px] border border-[#D70416] bg-[#FFF8F8] p-5"
              >
                <span className="text-[16px] leading-6 text-[#111111]">
                  {block.label}
                </span>
                <Link
                  href={block.href ?? "/contact-us"}
                  className="text-[16px] font-medium capitalize leading-6 text-[#D70416] underline"
                >
                  {block.linkLabel}
                </Link>
              </div>
            );
          case "ctaBanner":
            return (
              <EvaluateDeliveryCtaCard
                key={index}
                compact
                title={block.title}
                ctaLabel={block.ctaLabel}
                ctaHref={block.href ?? "/contact-us"}
              />
            );
          case "authorBio":
            return (
              <div
                key={index}
                className="flex flex-col gap-4 rounded-[10px] border border-[#CBCCCD] bg-white p-5 shadow-[0_4px_10px_rgba(0,0,0,0.15)] sm:flex-row sm:items-start sm:gap-4"
              >
                <div className="relative h-[126px] w-[126px] shrink-0 overflow-hidden">
                  <Image
                    src={block.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="126px"
                  />
                </div>
                <p className="text-[16px] leading-6 text-[#808080]">{block.bio}</p>
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
