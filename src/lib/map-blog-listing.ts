import "server-only";

import type { BlogCatalogItem } from "@/lib/resource-catalog-types";
import { mapSanityPostsToListing, type SanityPostNode } from "@/lib/sanity-listing";
import { getSanityResourcePosts } from "@/lib/sanity-snapshot";

export type { BlogCatalogItem };

/** Server-safe blog catalog — uses live posts when provided, otherwise committed snapshot. */
export function mapBlogListingToCatalog(posts?: SanityPostNode[]): BlogCatalogItem[] {
  return mapSanityPostsToListing(posts ?? getSanityResourcePosts())
    .filter((item): item is typeof item & { id: string } => Boolean(item.id))
    .map((item, index) => ({
      id: item.id,
      title: item.title,
      excerpt: item.excerpt,
      type: "Blog" as const,
      service: item.service ?? null,
      href: item.href,
      image: item.image ?? "",
      sortOrder: item.sortOrder,
      publishedTimestamp: item.publishedTimestamp ?? item.sortOrder ?? index,
      publishedAt: item.publishedAt,
      categoryTitles: item.categoryTitles,
      badgeLabel: item.badgeLabel ?? "Blog",
      category: item.category ?? "Blog",
      tags: item.tags ?? [],
    }));
}

