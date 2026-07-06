import type { ResourceService } from "@/constants/resources-page-content";
import { mapSanityPostsToListing } from "@/lib/sanity-listing";

export type BlogCatalogItem = {
  id: string;
  title: string;
  excerpt: string;
  type: "Blog";
  service: ResourceService | string | null;
  href: string;
  image: string;
  sortOrder: number;
  publishedTimestamp: number;
  publishedAt: string | null;
  categoryTitles: string[];
  badgeLabel: string;
  category: string;
  author?: string | null;
  tags?: string[];
};

export function mapBlogListingToCatalog() {
  return mapSanityPostsToListing().map((item, index) => ({
    id: item.id,
    title: item.title,
    excerpt: item.excerpt,
    type: "Blog" as const,
    service: item.service,
    href: item.href,
    image: item.image,
    sortOrder: item.sortOrder,
    publishedTimestamp: item.publishedTimestamp ?? item.sortOrder ?? index,
    publishedAt: item.publishedAt,
    categoryTitles: item.categoryTitles,
    badgeLabel: item.badgeLabel ?? "Blog",
    category: item.category ?? "Blog",
    tags: item.tags ?? [],
  })) satisfies BlogCatalogItem[];
}
