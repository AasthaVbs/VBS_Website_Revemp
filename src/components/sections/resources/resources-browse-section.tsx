"use client";

import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Search,
} from "lucide-react";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { useEffect, useMemo, useState } from "react";

import { PageContainer } from "@/components/layout/page-container";
import { ResourceFeedPhoto } from "@/components/ui/resource-feed-photo";
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
import { buildResourceCatalog, type ResourceCatalogItem } from "@/lib/resource-catalog";
import {
  isAllResourceServicesFilter,
  matchesResourceServiceFilter,
  type ResourceServiceFilterInput,
} from "@/lib/resource-listing";
import { cn } from "@/lib/utils";

export type ResourcesBrowseVariant = "resources" | "blogs" | "webinars" | "whitepapers";

const ITEMS_PER_PAGE = 8;

type CatalogItem = ResourceCatalogItem;

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

function ResourceCard({ item }: { item: CatalogItem }) {
  const metaPrimary =
    item.publishedAt ||
    ("location" in item ? item.location : null) ||
    ("delivery" in item ? item.delivery : null) ||
    null;
  const metaSecondary = item.category || item.badgeLabel || item.type || null;

  return (
    <Link
      href={item.href}
      className="resources-browse-card flex h-full flex-col items-center gap-[10px] overflow-hidden rounded-[10px] bg-white p-2.5 shadow-[0_4px_10px_rgba(0,0,0,0.15)] no-underline transition-[box-shadow,transform] duration-250 hover:-translate-y-1 hover:shadow-[0_10px_24px_rgba(0,0,0,0.12)]"
      aria-label={`Learn more about ${item.title}`}
    >
      <div className="resources-browse-card__media relative h-[170px] w-full overflow-hidden rounded-[10px] min-[800px]:h-[200px] min-[1280px]:h-[240px]">
        <ResourceFeedPhoto
          src={item.image}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <span className="absolute bottom-3 right-3 rounded-[10px]  bg-[#D70416] px-3.5 py-1 text-[13px] text-white">
          {item.badgeLabel || item.type || "Resource"}
        </span>
      </div>
      <div className="flex w-full flex-col gap-[15px] px-2.5 pb-2.5">
        <div className="flex flex-col gap-[19px]">
          {metaPrimary || metaSecondary ? (
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
          Learn More
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
}: {
  variant?: ResourcesBrowseVariant;
}) {
  const isBlogsPage = variant === "blogs";
  const isWebinarsPage = variant === "webinars";
  const isWhitepapersPage = variant === "whitepapers";
  const hasPageHero = isBlogsPage || isWebinarsPage || isWhitepapersPage || variant === "resources";

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<string>(resourceAllTypesLabel);
  const [selectedWebinarType, setSelectedWebinarType] = useState<string>(webinarAllTypesLabel);
  const [selectedSort, setSelectedSort] = useState<ResourceSort>("New to Old");
  const [selectedService, setSelectedService] = useState<string>(resourceAllServicesLabel);
  const [currentPage, setCurrentPage] = useState(1);

  const resourceCatalog = useMemo(() => buildResourceCatalog(), []);

  const filteredItems = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    let baseItems: CatalogItem[] = [];

    if (isWebinarsPage) {
      baseItems =
        selectedWebinarType === webinarAllTypesLabel
          ? resourceCatalog.byType.Webinar
          : resourceCatalog.byType.Webinar.filter((item) => item.delivery === selectedWebinarType);
    } else if (isBlogsPage) {
      baseItems = resourceCatalog.byType.Blog;
    } else if (isWhitepapersPage) {
      baseItems = resourceCatalog.byType.Whitepapers;
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
    isBlogsPage,
    isWebinarsPage,
    isWhitepapersPage,
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

  const handleTypeChange = (type: string) => {
    setSelectedType(type);
    setSelectedService(resourceAllServicesLabel);
    setCurrentPage(1);
  };

  return (
    <section
      className={cn(
        "resource-browse-anchor bg-white",
        hasPageHero ? "pb-12 pt-0 lg:pb-[100px]" : "py-12 lg:py-[100px]",
      )}
    >
      <PageContainer className="flex flex-col items-start gap-10">
        <div className="resource-browse-anchor__layout flex w-full flex-col gap-5 min-[800px]:flex-row min-[800px]:items-start">
          <aside className="resource-browse-anchor__aside w-full shrink-0 rounded-[10px] bg-white p-5 shadow-[0_4px_10px_rgba(0,0,0,0.15)] min-[800px]:w-[344px] min-[800px]:max-w-[344px]">
            <div className="flex flex-col gap-5">
              <label className="flex h-[50px] items-center justify-between gap-3 rounded-[10px] border border-[#CBCCCD] bg-[#FAFAFA] px-5 py-3 backdrop-blur-[50px]">
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

              <div className="flex flex-col gap-[15px]">
                <h3 className="text-[24px] font-normal text-[#111111]">Refine results</h3>
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
              ) : !isBlogsPage && !isWhitepapersPage ? (
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

              {isBlogsPage || !isWebinarsPage ? (
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

          <div className="flex min-w-0 flex-1 flex-col gap-5">
            {cardRows.length > 0 ? (
              cardRows.map((row, rowIndex) => (
                <div key={rowIndex} className="grid grid-cols-1 gap-5 min-[800px]:grid-cols-2">
                  {row.map((item) => (
                    <ResourceCard key={`${item.type}-${item.id}`} item={item} />
                  ))}
                </div>
              ))
            ) : (
              <p className="rounded-[10px] border border-[#CBCCCD] bg-[#FAFAFA] p-8 text-center text-[16px] text-[#808080]">
                {isWebinarsPage
                  ? resourceCatalog.byType.Webinar.length === 0
                    ? "No webinars are available yet. Check back soon."
                    : "No webinars match your filters. Try another type or search term."
                  : isBlogsPage
                    ? resourceCatalog.byType.Blog.length === 0
                      ? "No blog posts are available yet. Check back soon."
                      : "No blogs match your filters. Try another service or search term."
                    : isWhitepapersPage
                      ? resourceCatalog.byType.Whitepapers.length === 0
                        ? "No white papers are available yet. Check back soon."
                        : "No white papers match your filters. Try another search term."
                      : `No ${selectedType === resourceAllTypesLabel ? "resources" : selectedType.toLowerCase()} match your filters. Try another type or search term.`}
              </p>
            )}
          </div>
        </div>

        {filteredItems.length > 0 ? (
          <nav
            className="flex w-full flex-wrap items-center justify-end gap-5"
            aria-label={
              isWebinarsPage
                ? "Webinars pagination"
                : isBlogsPage
                  ? "Blogs pagination"
                  : isWhitepapersPage
                    ? "White papers pagination"
                    : "Resources pagination"
            }
          >
            <PaginationButton
              aria-label="First page"
              disabled={safeCurrentPage === 1}
              onClick={() => setCurrentPage(1)}
            >
              <ChevronsLeft className="h-5 w-5 text-[#808080]" strokeWidth={1.5} />
            </PaginationButton>
            <PaginationButton
              aria-label="Previous page"
              disabled={safeCurrentPage === 1}
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            >
              <ChevronLeft className="h-5 w-5 text-[#808080]" strokeWidth={1.5} />
            </PaginationButton>

            <div className="flex flex-wrap items-center gap-2.5">
              {paginationItems.map((item, index) =>
                item === "ellipsis" ? (
                  <span
                    key={`ellipsis-${index}`}
                    className="rounded-[10px] px-[18px] py-2.5 text-[16px] text-[#808080] backdrop-blur-[50px]"
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
                      "rounded-[10px] px-[18px] py-2.5 text-[16px] capitalize backdrop-blur-[50px] transition-colors",
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

            <PaginationButton
              aria-label="Next page"
              disabled={safeCurrentPage >= totalPages}
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            >
              <ChevronRight className="h-5 w-5 text-[#808080]" strokeWidth={1.5} />
            </PaginationButton>
            <PaginationButton
              aria-label="Last page"
              disabled={safeCurrentPage >= totalPages}
              onClick={() => setCurrentPage(totalPages)}
            >
              <ChevronsRight className="h-5 w-5 text-[#808080]" strokeWidth={1.5} />
            </PaginationButton>
          </nav>
        ) : null}
      </PageContainer>
    </section>
  );
}

function FilterGroup({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-3.5">
      <p className="text-[16px] font-medium text-[#111111]">{title}</p>
      <div className="flex flex-col gap-3.5 pl-2.5">{children}</div>
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
        "flex items-center justify-center rounded-[10px] border border-[#CBCCCD] p-2.5 backdrop-blur-[50px] transition-opacity",
        disabled ? "cursor-not-allowed opacity-40" : "hover:bg-[#FAFAFA]",
      )}
      {...props}
    >
      {children}
    </button>
  );
}
