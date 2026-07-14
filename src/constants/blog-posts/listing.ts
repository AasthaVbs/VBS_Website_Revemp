import {
  FIGMA_RESOURCE_EXCERPT,
  FIGMA_RESOURCE_IMAGES,
  type ResourceListingItem,
} from "@/constants/resources-page-content";
import { mapSanityPostsToListing } from "@/lib/sanity-listing";

export function blogPostHref(slug: string) {
  return `/blogs/${slug}`;
}

/** Listing cards for blogs browse — pass mapped Sanity posts from the server (never load snapshot here). */
export function buildBlogListingItemsFromSanity(
  posts: ReturnType<typeof mapSanityPostsToListing>,
): ResourceListingItem[] {
  return posts.map((item) => ({
    id: item.id,
    title: item.title,
    excerpt: item.excerpt || FIGMA_RESOURCE_EXCERPT,
    type: "Blog" as const,
    service: item.service,
    href: blogPostHref(item.id),
    image: item.image || FIGMA_RESOURCE_IMAGES[0],
    sortOrder: item.sortOrder,
    publishedTimestamp: item.publishedTimestamp ?? item.sortOrder,
    publishedAt: item.publishedAt,
    categoryTitles: item.categoryTitles,
    badgeLabel: item.badgeLabel ?? "Blog",
    category: item.category ?? "Blog",
    tags: item.tags ?? [],
  }));
}

/** Empty placeholder — do not evaluate snapshot at module load (kills client bundles). */
export const blogListingItems: ResourceListingItem[] = [];
