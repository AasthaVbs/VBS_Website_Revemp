import "server-only";

import { isNewsCatalogItem, NEWS_CATEGORY_TITLE } from "@/constants/news-page-content";
import { buildNewsHref } from "@/lib/resource-listing";
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

function toNewsListingItem<T extends Record<string, unknown>>(item: T) {
  const slug = String(item.id || "").replace(/^\/+|\/+$/g, "");
  return {
    ...item,
    type: "News",
    badgeLabel: NEWS_CATEGORY_TITLE,
    category: NEWS_CATEGORY_TITLE,
    href: slug ? buildNewsHref(slug) : "/news",
  };
}

/** Snapshot-backed catalog (sync). Prefer `buildResourceCatalogLive` on listing pages. */
export function buildResourceCatalog(
  referenceDate?: Date,
  listing?: ResourceCatalogListingInput,
): ResourceCatalog {
  const posts = listing?.posts ?? getSanityResourcePosts();
  const webinars = listing?.webinars ?? getSanityResourceWebinars();
  const mappedBlogItems = mapBlogListingToCatalog(posts);
  const newsItems = mappedBlogItems
    .filter(isNewsCatalogItem)
    .map(toNewsListingItem) as unknown as CatalogListingItem[];
  const blogItems = mappedBlogItems.filter((item) => !isNewsCatalogItem(item));
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
  const whitepaperItems = extendedWhitepaperListingItems as CatalogListingItem[];
  const caseStudyItems = caseStudyListingItems as CatalogListingItem[];
  const portfolioItems = portfolioListingItems as CatalogListingItem[];
  const testimonialItems = testimonialListingItems as CatalogListingItem[];

  const allItems = [
    ...blogItems,
    ...newsItems,
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
