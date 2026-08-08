import "server-only";

import {
  caseStudyListingItems,
  extendedWhitepaperListingItems,
  portfolioListingItems,
  testimonialListingItems,
} from "@/constants/resource-catalog-content";
import { mapBlogListingToCatalog } from "@/lib/map-blog-listing";
import type {
  BlogCatalogItem,
  CatalogListingItem,
  ResourceCatalog,
  ResourceCatalogItem,
} from "@/lib/resource-catalog-types";
import { fetchSanityResourceListing } from "@/lib/sanity-fetch";
import {
  buildSanityWebinarListingItems,
  type SanityPostNode,
  type SanityWebinarNode,
} from "@/lib/sanity-listing";
import { getSanityResourcePosts, getSanityResourceWebinars } from "@/lib/sanity-snapshot";

export type {
  BlogCatalogItem,
  CatalogListingItem,
  ResourceCatalog,
  ResourceCatalogItem,
} from "@/lib/resource-catalog-types";

export type ResourceCatalogListingInput = {
  posts?: SanityPostNode[];
  webinars?: SanityWebinarNode[];
};

function isNewsItem(item: { tags?: string[]; categoryTitles?: string[] }) {
  const tags = (item.tags || []).map((tag) => String(tag).toLowerCase());
  const categories = (item.categoryTitles || []).map((title) => String(title).toLowerCase());

  return (
    tags.some((tag) => tag.includes("news")) ||
    categories.some((category) => category.includes("news"))
  );
}

function toNewsListingItem<T extends Record<string, unknown>>(item: T) {
  return {
    ...item,
    type: "News",
    badgeLabel: "News",
    category: "News",
  };
}

/** Snapshot-backed catalog (sync). Prefer `buildResourceCatalogLive` on listing pages. */
export function buildResourceCatalog(
  referenceDate?: Date,
  listing?: ResourceCatalogListingInput,
): ResourceCatalog {
  const posts = listing?.posts ?? getSanityResourcePosts();
  const webinars = listing?.webinars ?? getSanityResourceWebinars();
  const blogItems = mapBlogListingToCatalog(posts);
  const webinarItems = buildSanityWebinarListingItems(
    webinars,
    referenceDate ?? new Date(),
  ).map((item) => ({
    ...item,
    type: "Webinar" as const,
    badgeLabel: "Webinar",
    category: item.delivery ?? "Webinar",
    publishedTimestamp: item.publishedTimestamp ?? item.sortOrder ?? 0,
  })) as CatalogListingItem[];
  const newsItems = blogItems
    .filter(isNewsItem)
    .map(toNewsListingItem) as unknown as CatalogListingItem[];
  const whitepaperItems = extendedWhitepaperListingItems as CatalogListingItem[];
  const caseStudyItems = caseStudyListingItems as CatalogListingItem[];
  const portfolioItems = portfolioListingItems as CatalogListingItem[];
  const testimonialItems = testimonialListingItems as CatalogListingItem[];

  const allItems = [
    ...blogItems,
    ...webinarItems,
    ...whitepaperItems,
    ...portfolioItems,
    ...testimonialItems,
  ];

  return {
    allItems,
    byType: {
      Blog: blogItems,
      Webinar: webinarItems,
      Whitepapers: whitepaperItems,
      "Case Studies": caseStudyItems,
      Portfolio: portfolioItems,
      Testimonials: testimonialItems,
      News: newsItems,
    },
  };
}

/** Live Sanity posts + webinars (snapshot fallback when credentials/API fail). */
export async function buildResourceCatalogLive(referenceDate?: Date): Promise<ResourceCatalog> {
  const listing = await fetchSanityResourceListing();
  return buildResourceCatalog(referenceDate ?? new Date(), listing);
}
