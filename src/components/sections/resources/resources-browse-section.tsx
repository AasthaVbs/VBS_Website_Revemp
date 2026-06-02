"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Search,
} from "lucide-react";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { useMemo, useState } from "react";

import { PageContainer } from "@/components/layout/page-container";
import { SectionTag } from "@/components/sections/section-primitives";
import {
  figmaBlogListingItems,
  resourcePaginationPages,
  resourceServiceFilters,
  resourcesBrowseIntro,
  resourceSortFilters,
  resourceSubServiceFilters,
  resourceTypeFilters,
  whitepaperListingItems,
  type ResourceListingItem,
  type ResourceService,
  type ResourceSort,
  type ResourceType,
} from "@/constants/resources-page-content";
import { cn } from "@/lib/utils";

const ITEMS_PER_PAGE = 8;

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

function ResourceCard({ item }: { item: ResourceListingItem }) {
  return (
    <article className="flex h-full flex-col items-center gap-[30px] overflow-hidden rounded-[10px] bg-white p-2.5 shadow-[0_4px_10px_rgba(0,0,0,0.15)]">
      <div className="relative h-[220px] w-full overflow-hidden rounded-[10px] sm:h-[280px] lg:h-[322px]">
        <Image
          src={item.image}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 508px"
        />
        <span className="absolute bottom-3 right-3 rounded-[10px] border border-[#D70416] bg-[#D70416] px-2.5 py-1 text-[13px] text-white">
          {item.badgeLabel ?? "Blog"}
        </span>
      </div>
      <div className="flex w-full flex-col gap-[15px] px-2.5 pb-2.5">
        <div className="flex flex-col gap-[19px]">
          <h3 className="text-[20px] font-normal leading-[1.35] text-[#111111] sm:text-[24px]">
            {item.title}
          </h3>
          <p className="text-[16px] leading-6 text-[#808080]">{item.excerpt}</p>
        </div>
        <Link
          href={item.href}
          className="inline-flex items-center gap-1.5 text-[16px] text-[#2299D6] transition-opacity hover:opacity-80"
        >
          Learn More
          <ChevronRight className="h-5 w-5" strokeWidth={1.5} />
        </Link>
      </div>
    </article>
  );
}

function chunkItems<T>(items: T[], size: number): T[][] {
  const rows: T[][] = [];
  for (let i = 0; i < items.length; i += size) {
    rows.push(items.slice(i, i + size));
  }
  return rows;
}

/** Figma node 337:37659 — Resources filters + grid */
export function ResourcesBrowseSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<ResourceType>("Blog");
  const [selectedSort, setSelectedSort] = useState<ResourceSort>("New to Old");
  const [selectedService, setSelectedService] = useState<ResourceService>("MEP Engineering Firms");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredItems = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    const baseItems =
      selectedType === "Blog"
        ? figmaBlogListingItems
        : selectedType === "Whitepapers"
          ? whitepaperListingItems
          : [];

    let items = [...baseItems];

    if (query) {
      items = items.filter(
        (item) =>
          item.title.toLowerCase().includes(query) ||
          item.excerpt.toLowerCase().includes(query),
      );
    }

    items.sort((a, b) =>
      selectedSort === "New to Old" ? a.sortOrder - b.sortOrder : b.sortOrder - a.sortOrder,
    );

    return items;
  }, [searchQuery, selectedType, selectedSort]);

  const totalPages = Math.max(1, Math.ceil(filteredItems.length / ITEMS_PER_PAGE));
  const pageItems = filteredItems.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );
  const cardRows = chunkItems(pageItems, 2);

  const handleTypeChange = (type: ResourceType) => {
    setSelectedType(type);
    setCurrentPage(1);
  };

  return (
    <section className="bg-white py-12 lg:py-[100px]">
      <PageContainer className="flex flex-col items-start gap-10 lg:gap-[60px]">
        <div className="flex w-full flex-col gap-5">
          <div className="flex flex-col gap-3">
            <SectionTag label={resourcesBrowseIntro.tag} />
            <h2 className="text-section max-w-[672px] capitalize">
              <span className="font-medium text-[#111111]">{resourcesBrowseIntro.titleLead}</span>
              <span className="font-light text-[#D70416]">{resourcesBrowseIntro.titleAccent}</span>
            </h2>
          </div>
          <p className="max-w-[751px] text-[16px] capitalize leading-6 text-[#808080]">
            {resourcesBrowseIntro.description}
          </p>
        </div>

        <div className="flex w-full flex-col gap-5 xl:flex-row xl:items-start">
          <aside className="w-full shrink-0 rounded-[10px] bg-white p-5 shadow-[0_4px_10px_rgba(0,0,0,0.15)] xl:w-[344px]">
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

              <FilterGroup title="Type of Resources">
                {resourceTypeFilters.map((type) => (
                  <FilterOption
                    key={type}
                    label={type}
                    checked={selectedType === type}
                    onChange={() => handleTypeChange(type)}
                  />
                ))}
              </FilterGroup>

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

              <FilterGroup title="Service">
                {resourceServiceFilters.map((service) => (
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

              <FilterGroup title="Sub Service (Selected Service)">
                {resourceSubServiceFilters.map((sub) => (
                  <FilterOption key={sub} label={sub} checked={false} onChange={() => undefined} />
                ))}
              </FilterGroup>
            </div>
          </aside>

          <div className="flex min-w-0 flex-1 flex-col gap-5">
            {cardRows.length > 0 ? (
              cardRows.map((row, rowIndex) => (
                <div key={rowIndex} className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  {row.map((item) => (
                    <ResourceCard key={item.id} item={item} />
                  ))}
                </div>
              ))
            ) : (
              <p className="rounded-[10px] border border-[#CBCCCD] bg-[#FAFAFA] p-8 text-center text-[16px] text-[#808080]">
                No resources match your filters. Try another type or search term.
              </p>
            )}
          </div>
        </div>

        <nav
          className="flex w-full flex-wrap items-center justify-end gap-5"
          aria-label="Resources pagination"
        >
          <PaginationButton
            aria-label="First page"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(1)}
          >
            <ChevronsLeft className="h-5 w-5 text-[#808080]" strokeWidth={1.5} />
          </PaginationButton>
          <PaginationButton
            aria-label="Previous page"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
          >
            <ChevronLeft className="h-5 w-5 text-[#808080]" strokeWidth={1.5} />
          </PaginationButton>

          <div className="flex flex-wrap items-center gap-2.5">
            {resourcePaginationPages.map((page) => (
              <button
                key={page}
                type="button"
                disabled={page === "..."}
                onClick={() => {
                  if (page !== "...") setCurrentPage(Number(page));
                }}
                className={cn(
                  "rounded-[10px] px-[18px] py-2.5 text-[16px] capitalize backdrop-blur-[50px] transition-colors",
                  page === "..."
                    ? "cursor-default text-[#808080]"
                    : page === String(currentPage).padStart(2, "0")
                      ? "font-normal text-[#111111]"
                      : "text-[#808080] hover:text-[#111111]",
                )}
              >
                {page}
              </button>
            ))}
          </div>

          <PaginationButton
            aria-label="Next page"
            disabled={currentPage >= totalPages}
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
          >
            <ChevronRight className="h-5 w-5 text-[#808080]" strokeWidth={1.5} />
          </PaginationButton>
          <PaginationButton
            aria-label="Last page"
            disabled={currentPage >= totalPages}
            onClick={() => setCurrentPage(totalPages)}
          >
            <ChevronsRight className="h-5 w-5 text-[#808080]" strokeWidth={1.5} />
          </PaginationButton>
        </nav>
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
