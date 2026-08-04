import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { PageContainer } from "@/components/layout/page-container";
import { SectionTag } from "@/components/sections/section-primitives";
import type { ResourceListingItem } from "@/constants/resources-page-content";

type RelatedArticlesSectionProps = {
  tag?: string;
  titleLead: string;
  titleAccent: string;
  description: string;
  items: Array<ResourceListingItem & { publishedAt?: string | null }>;
  viewAllHref?: string | null;
  /** Side cards show date instead of Learn More (webinar detail Figma). */
  sideMeta?: "learnMore" | "date";
  descriptionMaxWidth?: number;
  titleMaxWidth?: number;
};

/** Home “Latest thoughts” layout — configurable title/description (Figma 1438:19806) */
export function RelatedArticlesSection({
  tag = "Resources",
  titleLead,
  titleAccent,
  description,
  items,
  viewAllHref = "/blog",
  sideMeta = "learnMore",
  descriptionMaxWidth = 413,
  titleMaxWidth,
}: RelatedArticlesSectionProps) {
  const featured = items[0];
  const sideCards = items.slice(1, 4);

  if (!featured) {
    return null;
  }

  const badgeClass = (type: string) => {
    switch (type) {
      case "Blog":
        return "border-vbs-red bg-vbs-red text-white";
      case "Webinar":
        return "border-[#42AA32] bg-[#42AA32] text-white";
      case "Case Study":
        return "border-vbs-green bg-vbs-green text-white";
      case "Whitepapers":
      case "White Paper":
        return "border-vbs-blue bg-vbs-blue text-white";
      default:
        return "border-vbs-yellow bg-vbs-yellow text-[#FBF9F9]";
    }
  };

  return (
    <section className="vbs-related-articles bg-white py-8 sm:py-12 lg:py-20">
      <PageContainer className="space-y-6 sm:space-y-10 lg:space-y-[60px]">
        <div className="flex w-full flex-col items-start gap-3 sm:gap-5">
          <div
            className="flex flex-col items-start gap-3"
            style={titleMaxWidth ? { maxWidth: `${titleMaxWidth}px` } : undefined}
          >
            <SectionTag label={tag} />
            <h2 className="text-section">
              <span className="font-medium text-[#111111]">{titleLead}</span>
              <span className="font-light text-[#D70416]">{titleAccent}</span>
            </h2>
          </div>
          <p
            className="text-[16px] leading-6 text-[#808080] normal-case"
            style={{ maxWidth: `${descriptionMaxWidth}px` }}
          >
            {description}
          </p>
        </div>

        <div className="space-y-4 sm:space-y-5">
          {viewAllHref ? (
            <div className="flex flex-wrap items-center justify-end gap-4">
              <Link
                href={viewAllHref}
                className="inline-flex items-center gap-1.5 text-[16px] text-vbs-blue transition-opacity hover:opacity-80"
              >
                View All
                <ChevronRight className="h-5 w-5" />
              </Link>
            </div>
          ) : null}

          <div className="grid items-start gap-6 sm:gap-5 lg:grid-cols-2">
            <article className="inline-flex flex-col gap-4 overflow-hidden sm:gap-[30px]">
              <div className="relative h-[200px] overflow-hidden rounded-[10px] sm:h-[360px]">
                <Image
                  src={featured.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <span
                  className={`absolute bottom-4 right-4 inline-flex rounded-[10px] border px-2.5 py-1 text-[13px] ${badgeClass(featured.type)}`}
                >
                  {featured.badgeLabel ?? featured.type}
                </span>
              </div>
              <div className="flex flex-col items-start gap-3 sm:gap-[15px]">
                <div className="flex flex-col items-start gap-3 sm:gap-4">
                  <h3 className="text-[20px] font-normal leading-[1.25] text-[#111111] sm:text-[30px] sm:leading-[1.2]">
                    {featured.title}
                  </h3>
                  <p className="text-[15px] leading-6 text-[#808080] normal-case sm:text-[16px]">
                    {featured.excerpt}
                  </p>
                </div>
                <Link
                  href={featured.href}
                  className="inline-flex items-center gap-1.5 text-[16px] text-vbs-blue transition-opacity hover:opacity-80"
                >
                  Learn More
                  <ChevronRight className="h-5 w-5" />
                </Link>
              </div>
            </article>

            <div className="inline-flex w-full flex-col gap-5 sm:gap-5">
              {sideCards.map((item) => (
                <article
                  key={item.id}
                  className="grid gap-3 sm:grid-cols-2 sm:gap-5"
                >
                  <Link
                    href={item.href}
                    className="relative h-[180px] overflow-hidden rounded-[10px] sm:h-[193px]"
                  >
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 240px"
                    />
                    <span
                      className={`absolute bottom-4 right-4 inline-flex rounded-[10px] border px-2.5 py-1 text-[13px] ${badgeClass(item.type)}`}
                    >
                      {item.badgeLabel ?? item.type}
                    </span>
                  </Link>
                  <div className="flex flex-col justify-between gap-3 sm:min-h-[193px] sm:gap-4">
                    <Link href={item.href}>
                      <h3 className="text-[18px] font-normal leading-[1.3] text-[#111111] sm:text-[24px]">
                        {item.title}
                      </h3>
                    </Link>
                    {sideMeta === "date" ? (
                      <p className="text-[16px] font-normal text-[#808080]">
                        {item.publishedAt || ""}
                      </p>
                    ) : (
                      <Link
                        href={item.href}
                        className="inline-flex items-center gap-1.5 text-[16px] text-vbs-blue"
                      >
                        Learn More
                        <ChevronRight className="h-4 w-4" />
                      </Link>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
