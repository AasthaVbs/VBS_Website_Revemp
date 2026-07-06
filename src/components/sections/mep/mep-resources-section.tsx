// @ts-nocheck
"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { PageContainer } from "@/components/layout/page-container";
import { ResourceFeedPhoto } from "@/components/ui/resource-feed-photo";
import {
  homeResourceBadgeStyles,
  homeResourcesFilters,
} from "@/constants/home-content";
import { mepResourcesSection } from "@/constants/mep-engineers-content";
import { useMepResourcesAllItems } from "@/hooks/useMepResourcesAllItems";
import { matchesResourceServiceFilter } from "@/lib/resource-listing";
import { buildResourcesSectionView } from "@/lib/resources-section-view";
import { cn } from "@/lib/utils";

function ResourcePageLink({ href, className, children, ariaLabel }) {
  if (!href) return null;

  if (
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("http://") ||
    href.startsWith("https://")
  ) {
    return (
      <a href={href} className={className} aria-label={ariaLabel}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}

function ChevronLink({ href, label, className }) {
  return (
    <ResourcePageLink href={href} className={cn("mep-figma-resources__link", className)}>
      {label}
      <svg className="mep-figma-resources__link-icon" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M9 6l6 6-6 6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </ResourcePageLink>
  );
}

function ResourceBadge({ type, badgeStyles }) {
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

function FeaturedCard({ item, badgeStyles }) {
  return (
    <ResourcePageLink
      href={item.href}
      className="mep-figma-resources__featured"
      ariaLabel={`Read ${item.title}`}
    >
      <div className="mep-figma-resources__featured-media">
        <ResourceFeedPhoto
          src={item.image}
          className="mep-figma-resources__featured-photo"
        />
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
    </ResourcePageLink>
  );
}

function CompactResourceRow({ item, badgeStyles }) {
  return (
    <ResourcePageLink
      href={item.href}
      className="mep-figma-resources__compact-row"
      ariaLabel={`Read ${item.title}`}
    >
      <div className="mep-figma-resources__compact-media">
        <ResourceFeedPhoto
          src={item.image}
          className="mep-figma-resources__compact-photo"
        />
        <ResourceBadge type={item.type} badgeStyles={badgeStyles} />
      </div>
      <div className="mep-figma-resources__compact-body">
        <p className="mep-figma-resources__compact-title">{item.title}</p>
        {item.date ? <p className="mep-figma-resources__compact-date">{item.date}</p> : null}
      </div>
    </ResourcePageLink>
  );
}

function SoloResourceCard({ item, badgeStyles }) {
  return (
    <article className="mep-figma-resources__solo-card">
      <ResourcePageLink
        href={item.href}
        className="mep-figma-resources__solo-row"
        ariaLabel={`Read ${item.title}`}
      >
        <div className="mep-figma-resources__solo-media">
          <ResourceFeedPhoto src={item.image} className="mep-figma-resources__solo-photo" />
          <ResourceBadge type={item.type} badgeStyles={badgeStyles} />
        </div>
        <div className="mep-figma-resources__solo-body">
          <p className="mep-figma-resources__solo-title">{item.title}</p>
          {item.excerpt ? <p className="mep-figma-resources__solo-excerpt">{item.excerpt}</p> : null}
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
      </ResourcePageLink>
    </article>
  );
}

export function MepResourcesSection({
  section = mepResourcesSection,
  filters = homeResourcesFilters,
  allItems: allItemsProp,
  serviceFilter: serviceFilterProp,
  badgeStyles = homeResourceBadgeStyles,
  sectionId = "resources",
  sectionClassName = "mep-figma-resources",
}: {
  section?: {
    tag: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    viewAllHref: string;
    serviceFilter?: string;
  };
  filters?: typeof homeResourcesFilters;
  allItems?: unknown[];
  serviceFilter?: string;
  badgeStyles?: typeof homeResourceBadgeStyles;
  sectionId?: string;
  sectionClassName?: string;
} = {}) {
  const [activeFilter, setActiveFilter] = useState("All");
  const queriedAllItems = useMepResourcesAllItems();
  const serviceFilter = serviceFilterProp ?? section.serviceFilter;

  const allItems = useMemo(() => {
    const source = allItemsProp ?? queriedAllItems;
    if (!serviceFilter) return source;
    return source.filter((item) => matchesResourceServiceFilter(item, serviceFilter));
  }, [allItemsProp, queriedAllItems, serviceFilter]);

  const { featuredItem, listRows, soloItem } = useMemo(
    () => buildResourcesSectionView(allItems, activeFilter),
    [activeFilter, allItems],
  );

  return (
    <section id={sectionId} className={sectionClassName}>
      <PageContainer className="mep-figma-resources__container">
        <div className="mep-figma-resources__header-row">
          <div className="mep-figma-resources__head-copy">
            <div className="mep-figma-resources__head-top">
              <span className="mep-figma-resources__tag">{section.tag}</span>
              <p className="mep-figma-resources__title">
                <span className="mep-figma-resources__title-dark">{section.titleLine1}</span>
                <span className="mep-figma-resources__title-accent">{section.titleLine2}</span>
              </p>
            </div>
            <p className="mep-figma-resources__section-desc">{section.description}</p>
          </div>
          <ChevronLink href={section.viewAllHref} label="View All" className="mep-figma-resources__view-all" />
        </div>

        <div className="mep-figma-resources__body">
          <div className="mep-figma-resources__filters">
            {filters.map((filter) => {
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

          {(featuredItem || listRows.length > 0 || soloItem) && (
            <div
              className={cn(
                "mep-figma-resources__content",
                featuredItem && listRows.length === 0 && !soloItem && "mep-figma-resources__content--single",
                soloItem && "mep-figma-resources__content--solo",
                activeFilter !== "All" && sectionClassName.includes("vbs-home-resources") && "vbs-home-resources__content--filtered",
              )}
            >
              {soloItem ? (
                <SoloResourceCard
                  key={`${soloItem.type}-${soloItem.href}`}
                  item={soloItem}
                  badgeStyles={badgeStyles}
                />
              ) : null}
              {featuredItem ? (
                <FeaturedCard
                  key={`${featuredItem.type}-${featuredItem.href}`}
                  item={featuredItem}
                  badgeStyles={badgeStyles}
                />
              ) : null}
              {listRows.length > 0 ? (
                <div className="mep-figma-resources__list">
                  {listRows.map((item) => (
                    <CompactResourceRow
                      key={`${item.type}-${item.href}-${item.title}`}
                      item={item}
                      badgeStyles={badgeStyles}
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
