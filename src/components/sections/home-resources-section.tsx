"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { PageContainer } from "@/components/layout/page-container";
import { ResourceFeedPhoto } from "@/components/ui/resource-feed-photo";
import {
  homeResourceBadgeStyles,
  homeResourcesFilters,
} from "@/constants/home-content";
import { useHomeResourcesAllItems } from "@/hooks/useMepResourcesAllItems";
import { buildResourcesSectionView } from "@/lib/resources-section-view";
import { cn } from "@/lib/utils";

type HomeResourcesSectionCopy = {
  tag: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  viewAllHref: string;
};

type HomeResourcesSectionProps = {
  section: HomeResourcesSectionCopy;
  sectionId?: string;
};

function ResourceBadge({
  type,
  badgeStyles,
}: {
  type: string;
  badgeStyles: typeof homeResourceBadgeStyles;
}) {
  const style = badgeStyles[type] || badgeStyles.Blog;
  return (
    <span
      className="mep-figma-resources__badge"
      style={{
        background: style.bg,
        color: style.color,
        borderColor: style.border,
      }}
    >
      {type}
    </span>
  );
}

function FeaturedCard({
  item,
  badgeStyles,
}: {
  item: NonNullable<ReturnType<typeof buildResourcesSectionView>["featuredItem"]>;
  badgeStyles: typeof homeResourceBadgeStyles;
}) {
  return (
    <Link href={item.href} className="mep-figma-resources__featured" aria-label={`Read ${item.title}`}>
      <div className="mep-figma-resources__featured-media">
        <ResourceFeedPhoto src={item.image} className="mep-figma-resources__featured-photo" />
        <ResourceBadge type={item.type} badgeStyles={badgeStyles} />
      </div>
      <div className="mep-figma-resources__featured-body">
        <div className="mep-figma-resources__featured-copy">
          <p className="mep-figma-resources__featured-title">{item.title}</p>
          <p className="mep-figma-resources__featured-excerpt">{item.excerpt}</p>
        </div>
        <span className="mep-figma-resources__link">
          Learn More
          <svg className="mep-figma-resources__link-icon" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M9 6l6 6-6 6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </Link>
  );
}

function CompactResourceRow({
  item,
  badgeStyles,
}: {
  item: { type: string; title: string; date?: string; image: string; href: string };
  badgeStyles: typeof homeResourceBadgeStyles;
}) {
  return (
    <Link href={item.href} className="mep-figma-resources__compact-row" aria-label={`Read ${item.title}`}>
      <div className="mep-figma-resources__compact-media">
        <ResourceFeedPhoto src={item.image} className="mep-figma-resources__compact-photo" />
        <ResourceBadge type={item.type} badgeStyles={badgeStyles} />
      </div>
      <div className="mep-figma-resources__compact-body">
        <p className="mep-figma-resources__compact-title">{item.title}</p>
        {item.date ? <p className="mep-figma-resources__compact-date">{item.date}</p> : null}
      </div>
    </Link>
  );
}

export function HomeResourcesSection({
  section,
  sectionId = "resources",
}: HomeResourcesSectionProps) {
  const [activeFilter, setActiveFilter] = useState("All");
  const resourceItems = useHomeResourcesAllItems();
  const { featuredItem, listRows } = useMemo(
    () => buildResourcesSectionView(resourceItems, activeFilter),
    [activeFilter, resourceItems],
  );

  return (
    <section id={sectionId} className="mep-figma-resources vbs-home-resources">
      <PageContainer className="mep-figma-resources__container">
        <header className="vbs-home-resources__intro">
          <div className="mep-figma-resources__head-top">
            <span className="mep-figma-resources__tag">{section.tag}</span>
            <p className="mep-figma-resources__title">
              <span className="mep-figma-resources__title-dark">{section.titleLine1}</span>
              <span className="mep-figma-resources__title-accent">{section.titleLine2}</span>
            </p>
          </div>
          <p className="mep-figma-resources__section-desc">{section.description}</p>
        </header>

        <div className="mep-figma-resources__body">
          <div className="vbs-home-resources__toolbar">
            <div className="mep-figma-resources__filters">
              {homeResourcesFilters.map((filter) => {
                const isActive = filter === activeFilter;
                return (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setActiveFilter(filter)}
                    className={cn(
                      "mep-figma-resources__filter",
                      isActive && "mep-figma-resources__filter--active",
                      filter === "White Paper" && "mep-figma-resources__filter--white-paper",
                    )}
                  >
                    {filter}
                  </button>
                );
              })}
            </div>
            <Link
              href={section.viewAllHref}
              className="mep-figma-resources__view-all mep-figma-resources__link"
            >
              View All
              <svg className="mep-figma-resources__link-icon" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M9 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>

          {(featuredItem || listRows.length > 0) && (
            <div
              className={cn(
                "mep-figma-resources__content",
                featuredItem && listRows.length === 0 && "mep-figma-resources__content--single",
                activeFilter !== "All" && "vbs-home-resources__content--filtered",
              )}
            >
              {featuredItem ? (
                <FeaturedCard
                  key={`${featuredItem.type}-${featuredItem.href}`}
                  item={featuredItem}
                  badgeStyles={homeResourceBadgeStyles}
                />
              ) : null}
              {listRows.length > 0 ? (
                <div className="mep-figma-resources__list">
                  {listRows.map((item) => (
                    <CompactResourceRow
                      key={`${item.type}-${item.href}-${item.title}`}
                      item={item}
                      badgeStyles={homeResourceBadgeStyles}
                    />
                  ))}
                </div>
              ) : null}
            </div>
          )}
        </div>
      </PageContainer>
    </section>
  );
}
