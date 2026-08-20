"use client";

import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Search,
} from "lucide-react";
import type { ButtonHTMLAttributes, CSSProperties, ReactNode } from "react";
import { useEffect, useMemo, useRef, useState } from "react";

import { PageContainer } from "@/components/layout/page-container";
import { ResourceFeedPhoto } from "@/components/ui/resource-feed-photo";
import { bimResourceHubItems } from "@/constants/bim-resources-content";
import {
  resourceAllServicesLabel,
  resourceAllTypesLabel,
  resourceServiceFilterOptions,
  resourceSortFilters,
  resourceTypeFilterOptions,
  type ResourceSort,
} from "@/constants/resources-page-content";
import {
  webinarAllTypesLabel,
  webinarTypeFilterOptions,
  type WebinarDelivery,
} from "@/constants/webinar-page-content";
import {
  EMPTY_RESOURCE_CATALOG,
  type ResourceCatalog,
  type ResourceCatalogItem,
} from "@/lib/resource-catalog-types";
import {
  isAllResourceServicesFilter,
  matchesResourceServiceFilter,
  type ResourceServiceFilterInput,
} from "@/lib/resource-listing";
import { cn } from "@/lib/utils";

export type ResourcesBrowseVariant =
  | "resources"
  | "blogs"
  | "news"
  | "webinars"
  | "whitepapers"
  | "case-studies"
  | "bim-resources";

const ITEMS_PER_PAGE = 8;
const FILTER_STICKY_MIN_WIDTH = 800;

function useDesktopStickyFilter() {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const asideRef = useRef<HTMLElement>(null);
  const [stickyStyle, setStickyStyle] = useState<CSSProperties | null>(null);
  const [placeholderHeight, setPlaceholderHeight] = useState<number | undefined>(undefined);

  useEffect(() => {
    const update = () => {
      const sentinel = sentinelRef.current;
      const aside = asideRef.current;
      if (!sentinel || !aside) return;

      if (window.innerWidth < FILTER_STICKY_MIN_WIDTH) {
        setStickyStyle(null);
        setPlaceholderHeight(undefined);
        return;
      }

      const headerRaw = getComputedStyle(document.documentElement)
        .getPropertyValue("--vbs-header-offset")
        .trim();
      const headerOffset = Number.parseFloat(headerRaw) || 132;
      const topGap = headerOffset + 16;
      const layout = sentinel.closest(".resource-browse-anchor__layout") as HTMLElement | null;
      const sentinelRect = sentinel.getBoundingClientRect();
      const layoutRect = layout?.getBoundingClientRect();
      const asideHeight = aside.offsetHeight;
      const width = sentinel.offsetWidth;
      const left = sentinelRect.left;

      if (!layoutRect) {
        setStickyStyle(null);
        setPlaceholderHeight(undefined);
        return;
      }

      const layoutBottomLimit = layoutRect.bottom - 16;
      const shouldStick = sentinelRect.top <= topGap;
      const fitsInLayout = topGap + asideHeight <= layoutBottomLimit;

      if (shouldStick && fitsInLayout) {
        setStickyStyle({
          position: "fixed",
          top: topGap,
          left,
          width,
          zIndex: 20,
        });
        setPlaceholderHeight(asideHeight);
        return;
      }

      if (shouldStick && !fitsInLayout) {
        const pinnedTop = Math.max(layoutBottomLimit - asideHeight, layoutRect.top);
        setStickyStyle({
          position: "fixed",
          top: pinnedTop,
          left,
          width,
          zIndex: 20,
        });
        setPlaceholderHeight(asideHeight);
        return;
      }

      setStickyStyle(null);
      setPlaceholderHeight(undefined);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    const resizeObserver = new ResizeObserver(update);
    if (asideRef.current) resizeObserver.observe(asideRef.current);
    if (sentinelRef.current) resizeObserver.observe(sentinelRef.current);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      resizeObserver.disconnect();
    };
  }, []);

  return { sentinelRef, asideRef, stickyStyle, placeholderHeight };
}

type CatalogItem = ResourceCatalogItem;

function bimResourceCatalogItems(): CatalogItem[] {
  return bimResourceHubItems.map((item) => ({
    id: item.id,
    title: item.title,
    excerpt: item.excerpt,
    type: "News",
    service: item.service,
    href: item.href,
    image: item.image,
    sortOrder: item.sortOrder,
    publishedTimestamp: item.sortOrder,
    badgeLabel: "Resource",
    category: "Resource",
  }));
}

function toServiceFilterItem(item: CatalogItem): ResourceServiceFilterInput {
  const type =
    item.type === "Whitepapers"
      ? "White Paper"
      : item.type === "Case Studies"
        ? "Case Study"
        : item.type;

  return {
    ...item,
    type,
  };
}

function FilterOption({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label className="flex cursor-pointer items-center gap-1.5">
      <input type="checkbox" checked={checked} onChange={onChange} className="sr-only" />
      <span
        className={cn(
          "flex h-5 w-5 shrink-0 items-center justify-center rounded-[2px] border",
          checked ? "border-[#D70416] bg-[#D70416]" : "border-[#808080] bg-white",
        )}
        aria-hidden
      >
        {checked ? (
          <svg width="10" height="7" viewBox="0 0 10 7" fill="none" className="text-white">
            <path
              d="M1 3.5L3.5 6L9 1"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : null}
      </span>
      <span className={cn("text-[16px] leading-6", checked ? "text-[#111111]" : "text-[#808080]")}>
        {label}
      </span>
    </label>
  );
}

function ResourceCard({
  item,
  hideBadge = false,
  hideMeta = false,
  mediaSize = "default",
  ctaLabel = "Learn More",
}: {
  item: CatalogItem;
  hideBadge?: boolean;
  hideMeta?: boolean;
  /** Taller image containers so cover art is not cropped */
  mediaSize?: "default" | "blog" | "whitepaper" | "news";
  ctaLabel?: string;
}) {
  const metaPrimary =
    item.publishedAt ||
    ("location" in item ? item.location : null) ||
    ("delivery" in item ? item.delivery : null) ||
    null;
  const metaSecondary = item.category || item.badgeLabel || item.type || null;
  const showMeta = !hideMeta && Boolean(metaPrimary || metaSecondary);
  const mediaClassName =
    mediaSize === "news"
      ? "resources-browse-card__media relative h-[240px] w-full overflow-hidden rounded-[10px] min-[800px]:h-[280px] min-[1440px]:h-[320px]"
      : mediaSize === "blog"
      ? "resources-browse-card__media relative h-[240px] w-full overflow-hidden rounded-[10px] min-[800px]:h-[280px] min-[1280px]:h-[320px]"
      : mediaSize === "whitepaper"
        ? "resources-browse-card__media relative h-[220px] w-full overflow-hidden rounded-[10px] min-[800px]:h-[255px] min-[1280px]:h-[290px]"
        : "resources-browse-card__media relative h-[198px] w-full overflow-hidden rounded-[10px] min-[800px]:h-[225px] min-[1280px]:h-[260px]";
  const photoClassName =
    mediaSize === "default"
      ? "absolute inset-0 h-full w-full object-cover"
      : "absolute inset-0 h-full w-full object-cover object-top";

  return (
    <Link
      href={item.href}
      className="resources-browse-card flex h-full flex-col items-center gap-[10px] overflow-hidden rounded-[10px] bg-white p-2.5 shadow-[0_4px_10px_rgba(0,0,0,0.15)] no-underline transition-[box-shadow,transform] duration-250 hover:-translate-y-1 hover:shadow-[0_10px_24px_rgba(0,0,0,0.12)]"
      aria-label={`Learn more about ${item.title}`}
    >
      <div className={mediaClassName}>
        <ResourceFeedPhoto src={item.image} className={photoClassName} />
        {!hideBadge ? (
          <span
            className={cn(
              "absolute bottom-3 right-3 rounded-[10px] px-2.5 py-1 text-[13px] text-white",
              item.type === "News"
                ? "bg-[#000004] outline outline-1 outline-[#000004]"
                : "bg-[#D70416] px-3.5",
            )}
          >
            {item.badgeLabel || item.type || "Resource"}
          </span>
        ) : null}
      </div>
      <div className="flex w-full flex-col gap-[15px] px-2.5 pb-2.5">
        <div className="flex flex-col gap-[19px]">
          {showMeta ? (
            <div className="flex flex-wrap items-center justify-between gap-2 text-[14px] text-[#808080]">
              <span>{metaPrimary || ""}</span>
              {metaSecondary ? <span>{metaSecondary}</span> : null}
            </div>
          ) : null}
          <h3 className="text-[20px] font-normal leading-[1.35] text-[#111111] sm:text-[24px]">
            {item.title}
          </h3>
          <p className="text-[16px] leading-6 text-[#808080]">{item.excerpt}</p>
        </div>
        <span className="inline-flex items-center gap-1.5 text-[16px] text-[#2299D6]">
          {ctaLabel}
          <ChevronRight className="h-5 w-5" strokeWidth={1.5} />
        </span>
      </div>
    </Link>
  );
}

function chunkItems<T>(items: T[], size: number): T[][] {
  const rows: T[][] = [];
  for (let i = 0; i < items.length; i += size) {
    rows.push(items.slice(i, i + size));
  }
  return rows;
}

type PaginationItem = number | "ellipsis";

/** Figma pagination — 01, 02, 03, …, 09, 10 with ellipsis for large page counts */
function getPaginationItems(currentPage: number, totalPages: number): PaginationItem[] {
  if (totalPages <= 6) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  const pageSet = new Set<number>([1, totalPages, currentPage]);

  if (currentPage <= 3) {
    pageSet.add(2);
    pageSet.add(3);
    pageSet.add(totalPages - 1);
  } else if (currentPage >= totalPages - 2) {
    pageSet.add(2);
    pageSet.add(totalPages - 2);
    pageSet.add(totalPages - 1);
  } else {
    pageSet.add(currentPage - 1);
    pageSet.add(currentPage + 1);
  }

  const sortedPages = [...pageSet]
    .filter((page) => page >= 1 && page <= totalPages)
    .sort((left, right) => left - right);

  const result: PaginationItem[] = [];
  let previousPage = 0;

  for (const page of sortedPages) {
    if (previousPage && page - previousPage > 1) {
      result.push("ellipsis");
    }
    result.push(page);
    previousPage = page;
  }

  return result;
}

/** Figma 337:37659 (resources) / 405:73063 (blogs) / 405:74005 (webinars) — filters + grid */
export function ResourcesBrowseSection({
  variant = "resources",
  initialCatalog,
}: {
  variant?: ResourcesBrowseVariant;
  /** Server-built catalog — keeps browse filled before the client API round-trip. */
  initialCatalog?: ResourceCatalog | null;
}) {
  const isBlogsPage = variant === "blogs";
  const isNewsPage = variant === "news";
  const isWebinarsPage = variant === "webinars";
  const isWhitepapersPage = variant === "whitepapers";
  const isCaseStudiesPage = variant === "case-studies";
  const isBimResourcesPage = variant === "bim-resources";
  const hasPageHero =
    isBlogsPage ||
    isNewsPage ||
    isWebinarsPage ||
    isWhitepapersPage ||
    isCaseStudiesPage ||
    isBimResourcesPage ||
    variant === "resources";

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<string>(resourceAllTypesLabel);
  const [selectedWebinarType, setSelectedWebinarType] = useState<string>(webinarAllTypesLabel);
  const [selectedSort, setSelectedSort] = useState<ResourceSort>("New to Old");
  const [selectedService, setSelectedService] = useState<string>(resourceAllServicesLabel);
  const [currentPage, setCurrentPage] = useState(1);
  const [resourceCatalog, setResourceCatalog] = useState<ResourceCatalog>(
    () => initialCatalog ?? EMPTY_RESOURCE_CATALOG,
  );
  const [catalogReady, setCatalogReady] = useState(
    () => isBimResourcesPage || Boolean(initialCatalog?.byType),
  );

  useEffect(() => {
    if (isBimResourcesPage) return undefined;

    let cancelled = false;

    fetch("/api/resources-catalog")
      .then((response) => (response.ok ? response.json() : null))
      .then((data: ResourceCatalog | null) => {
        if (cancelled || !data?.byType) {
          if (!cancelled) setCatalogReady(true);
          return;
        }
        setResourceCatalog(data);
        setCatalogReady(true);
      })
      .catch(() => {
        if (!cancelled) setCatalogReady(true);
      });

    return () => {
      cancelled = true;
    };
  }, [isBimResourcesPage]);

  const filteredItems = useMemo(() => {
    if (!catalogReady) return [];
    const query = searchQuery.trim().toLowerCase();

    let baseItems: CatalogItem[] = [];

    if (isWebinarsPage) {
      baseItems =
        selectedWebinarType === webinarAllTypesLabel
          ? resourceCatalog.byType.Webinar
          : resourceCatalog.byType.Webinar.filter((item) => item.delivery === selectedWebinarType);
    } else if (isBimResourcesPage) {
      baseItems = bimResourceCatalogItems();
    } else if (isBlogsPage) {
      baseItems = resourceCatalog.byType.Blog;
    } else if (isNewsPage) {
      baseItems = resourceCatalog.byType.News;
    } else if (isWhitepapersPage) {
      baseItems = resourceCatalog.byType.Whitepapers;
    } else if (isCaseStudiesPage) {
      baseItems = resourceCatalog.byType["Case Studies"];
    } else if (selectedType === resourceAllTypesLabel) {
      baseItems = resourceCatalog.allItems;
    } else {
      baseItems = resourceCatalog.byType[selectedType as keyof typeof resourceCatalog.byType] || [];
    }

    let items = [...baseItems];

    if (!isAllResourceServicesFilter(selectedService)) {
      items = items.filter((item) =>
        matchesResourceServiceFilter(toServiceFilterItem(item), selectedService),
      );
    }

    if (query) {
      items = items.filter((item) => {
        const searchable = [
          item.title,
          item.excerpt,
          item.category,
          item.type,
          "location" in item ? item.location : null,
          item.badgeLabel,
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();

        return searchable.includes(query);
      });
    }

    items.sort((a, b) => {
      const left = a.publishedTimestamp ?? a.sortOrder ?? 0;
      const right = b.publishedTimestamp ?? b.sortOrder ?? 0;
      return selectedSort === "New to Old" ? right - left : left - right;
    });

    return items;
  }, [
    catalogReady,
    isBlogsPage,
    isNewsPage,
    isWebinarsPage,
    isWhitepapersPage,
    isCaseStudiesPage,
    isBimResourcesPage,
    searchQuery,
    selectedType,
    selectedSort,
    selectedService,
    selectedWebinarType,
    resourceCatalog,
  ]);

  const totalPages = Math.max(1, Math.ceil(filteredItems.length / ITEMS_PER_PAGE));
  const safeCurrentPage = Math.min(currentPage, totalPages);

  useEffect(() => {
    if (currentPage !== safeCurrentPage) {
      setCurrentPage(safeCurrentPage);
    }
  }, [currentPage, safeCurrentPage]);

  const pageItems = filteredItems.slice(
    (safeCurrentPage - 1) * ITEMS_PER_PAGE,
    safeCurrentPage * ITEMS_PER_PAGE,
  );
  const cardRows = chunkItems(pageItems, 2);
  const paginationItems = getPaginationItems(safeCurrentPage, totalPages);
  const { sentinelRef, asideRef, stickyStyle, placeholderHeight } = useDesktopStickyFilter();

  const handleTypeChange = (type: string) => {
    setSelectedType(type);
    setSelectedService(resourceAllServicesLabel);
    setCurrentPage(1);
  };

  return (
    <section
      className={cn(
        "resource-browse-anchor bg-white",
        hasPageHero ? "pb-5 pt-0 lg:pb-[100px]" : "py-5 lg:py-[100px]",
      )}
    >
      <PageContainer className="flex flex-col items-start gap-5 min-[800px]:gap-10">
        <div className="resource-browse-anchor__layout flex w-full flex-col gap-3 min-[800px]:flex-row min-[800px]:items-start min-[800px]:gap-5">
          <div
            ref={sentinelRef}
            className="resource-browse-anchor__aside-shell w-full shrink-0 min-[800px]:w-[344px] min-[800px]:max-w-[344px]"
            style={placeholderHeight ? { minHeight: placeholderHeight } : undefined}
          >
            <aside
              ref={asideRef}
              className="resource-browse-anchor__aside w-full rounded-[10px] bg-white p-3 shadow-[0_4px_10px_rgba(0,0,0,0.15)] min-[800px]:p-5"
              style={stickyStyle ?? undefined}
            >
            <div className="flex flex-col gap-3 min-[800px]:gap-5">
              <label className="flex h-[44px] items-center justify-between gap-3 rounded-[10px] border border-[#CBCCCD] bg-[#FAFAFA] px-4 py-2.5 backdrop-blur-[50px] min-[800px]:h-[50px] min-[800px]:px-5 min-[800px]:py-3">
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                  placeholder="Search Here ..."
                  className="min-w-0 flex-1 bg-transparent text-[16px] capitalize text-[#111111] placeholder:text-[#808080] focus:outline-none"
                />
                <Search className="h-5 w-5 shrink-0 text-[#808080]" strokeWidth={1.2} aria-hidden />
              </label>

              <div className="flex flex-col gap-2 min-[800px]:gap-[15px]">
                <h3 className="text-[20px] font-normal text-[#111111] min-[800px]:text-[24px]">
                  Refine results
                </h3>
              </div>

              {isWebinarsPage ? (
                <FilterGroup title="Type of Webinars">
                  {webinarTypeFilterOptions.map((type) => (
                    <FilterOption
                      key={type}
                      label={type}
                      checked={selectedWebinarType === type}
                      onChange={() => {
                        setSelectedWebinarType(type);
                        setCurrentPage(1);
                      }}
                    />
                  ))}
                </FilterGroup>
              ) : !isBlogsPage && !isNewsPage && !isWhitepapersPage && !isCaseStudiesPage && !isBimResourcesPage ? (
                <FilterGroup title="Type of Resources">
                  {resourceTypeFilterOptions.map((type) => (
                    <FilterOption
                      key={type}
                      label={type}
                      checked={selectedType === type}
                      onChange={() => handleTypeChange(type)}
                    />
                  ))}
                </FilterGroup>
              ) : null}

              <FilterGroup title="Sort By">
                {resourceSortFilters.map((sort) => (
                  <FilterOption
                    key={sort}
                    label={sort}
                    checked={selectedSort === sort}
                    onChange={() => {
                      setSelectedSort(sort);
                      setCurrentPage(1);
                    }}
                  />
                ))}
              </FilterGroup>

              {isBlogsPage || isCaseStudiesPage || !isWebinarsPage ? (
                <FilterGroup title="Service">
                  {resourceServiceFilterOptions.map((service) => (
                    <FilterOption
                      key={service}
                      label={service}
                      checked={selectedService === service}
                      onChange={() => {
                        setSelectedService(service);
                        setCurrentPage(1);
                      }}
                    />
                  ))}
                </FilterGroup>
              ) : null}
            </div>
            </aside>
          </div>

          <div
            className={cn(
              "flex min-w-0 flex-1 flex-col",
              isNewsPage ? "gap-3" : "gap-5",
            )}
          >
            {cardRows.length > 0 ? (
              cardRows.map((row, rowIndex) => (
                <div
                  key={rowIndex}
                  className={cn(
                    "grid grid-cols-1 min-[800px]:grid-cols-2",
                    isNewsPage ? "gap-3" : "gap-5",
                  )}
                >
                  {row.map((item) => (
                    <ResourceCard
                      key={`${item.type}-${item.id}`}
                      item={item}
                      hideBadge={isCaseStudiesPage}
                      hideMeta={isCaseStudiesPage || isBimResourcesPage}
                      ctaLabel={isNewsPage ? "Read More" : "Learn More"}
                      mediaSize={
                        isNewsPage
                          ? "news"
                          : isBlogsPage || isBimResourcesPage
                          ? "blog"
                          : isWhitepapersPage
                            ? "whitepaper"
                            : "default"
                      }
                    />
                  ))}
                </div>
              ))
            ) : (
              <p className="rounded-[10px] border border-[#CBCCCD] bg-[#FAFAFA] p-8 text-center text-[16px] text-[#808080]">
                {!catalogReady
                  ? "Loading resources…"
                  : isWebinarsPage
                    ? resourceCatalog.byType.Webinar.length === 0
                      ? "No webinars are available yet. Check back soon."
                      : "No webinars match your filters. Try another type or search term."
                    : isBlogsPage
                      ? resourceCatalog.byType.Blog.length === 0
                        ? "No blog posts are available yet. Check back soon."
                        : "No blogs match your filters. Try another service or search term."
                      : isNewsPage
                        ? resourceCatalog.byType.News.length === 0
                          ? "No news posts are available yet. Check back soon."
                          : "No news items match your filters. Try another service or search term."
                      : isWhitepapersPage
                        ? resourceCatalog.byType.Whitepapers.length === 0
                          ? "No white papers are available yet. Check back soon."
                          : "No white papers match your filters. Try another search term."
                        : isCaseStudiesPage
                          ? resourceCatalog.byType["Case Studies"].length === 0
                            ? "No case studies are available yet. Check back soon."
                            : "No case studies match your filters. Try another service or search term."
                    : isBimResourcesPage
                      ? "No resources match your filters. Try another service or search term."
                      : `No ${selectedType === resourceAllTypesLabel ? "resources" : selectedType.toLowerCase()} match your filters. Try another type or search term.`}
              </p>
            )}
          </div>
        </div>

        {filteredItems.length > 0 ? (
          <nav
            className="flex w-full flex-nowrap items-center justify-between gap-2 sm:justify-end sm:gap-5"
            aria-label={
              isWebinarsPage
                ? "Webinars pagination"
                : isBlogsPage
                  ? "Blogs pagination"
                  : isNewsPage
                    ? "News pagination"
                  : isWhitepapersPage
                    ? "White papers pagination"
                    : isCaseStudiesPage
                      ? "Case studies pagination"
                      : "Resources pagination"
            }
          >
            <div className="flex shrink-0 items-center gap-1.5 sm:gap-5">
              <PaginationButton
                aria-label="First page"
                disabled={safeCurrentPage === 1}
                onClick={() => setCurrentPage(1)}
              >
                <ChevronsLeft className="h-4 w-4 text-[#808080] sm:h-5 sm:w-5" strokeWidth={1.5} />
              </PaginationButton>
              <PaginationButton
                aria-label="Previous page"
                disabled={safeCurrentPage === 1}
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              >
                <ChevronLeft className="h-4 w-4 text-[#808080] sm:h-5 sm:w-5" strokeWidth={1.5} />
              </PaginationButton>
            </div>

            <div className="flex min-w-0 flex-1 items-center justify-center gap-0.5 overflow-x-auto [scrollbar-width:none] sm:flex-none sm:justify-start sm:gap-2.5 sm:overflow-visible [&::-webkit-scrollbar]:hidden">
              {paginationItems.map((item, index) =>
                item === "ellipsis" ? (
                  <span
                    key={`ellipsis-${index}`}
                    className="shrink-0 rounded-[10px] px-1.5 py-2 text-[14px] text-[#808080] backdrop-blur-[50px] sm:px-[18px] sm:py-2.5 sm:text-[16px]"
                    aria-hidden
                  >
                    ...
                  </span>
                ) : (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setCurrentPage(item)}
                    aria-current={item === safeCurrentPage ? "page" : undefined}
                    className={cn(
                      "shrink-0 rounded-[10px] px-1.5 py-2 text-[14px] capitalize backdrop-blur-[50px] transition-colors sm:px-[18px] sm:py-2.5 sm:text-[16px]",
                      item === safeCurrentPage
                        ? "font-normal text-[#111111]"
                        : "text-[#808080] hover:text-[#111111]",
                    )}
                  >
                    {String(item).padStart(2, "0")}
                  </button>
                ),
              )}
            </div>

            <div className="flex shrink-0 items-center gap-1.5 sm:gap-5">
              <PaginationButton
                aria-label="Next page"
                disabled={safeCurrentPage >= totalPages}
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              >
                <ChevronRight className="h-4 w-4 text-[#808080] sm:h-5 sm:w-5" strokeWidth={1.5} />
              </PaginationButton>
              <PaginationButton
                aria-label="Last page"
                disabled={safeCurrentPage >= totalPages}
                onClick={() => setCurrentPage(totalPages)}
              >
                <ChevronsRight className="h-4 w-4 text-[#808080] sm:h-5 sm:w-5" strokeWidth={1.5} />
              </PaginationButton>
            </div>
          </nav>
        ) : null}
      </PageContainer>
    </section>
  );
}

function FilterGroup({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-2 min-[800px]:gap-3.5">
      <p className="text-[16px] font-medium text-[#111111]">{title}</p>
      <div className="flex flex-col gap-2 pl-2.5 min-[800px]:gap-3.5">{children}</div>
    </div>
  );
}

function PaginationButton({
  children,
  disabled,
  onClick,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "flex items-center justify-center rounded-[10px] border border-[#CBCCCD] p-1.5 backdrop-blur-[50px] transition-opacity sm:p-2.5",
        disabled ? "cursor-not-allowed opacity-40" : "hover:bg-[#FAFAFA]",
      )}
      {...props}
    >
      {children}
    </button>
  );
}
