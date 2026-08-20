import "server-only";

import { isNewsSanityPost } from "@/constants/news-page-content";
import { mapSanityPostToBlogDetail } from "@/lib/sanity-blog";
import { fetchSanityPostBySlug } from "@/lib/sanity-fetch";
import { buildResourceCatalogLive } from "@/lib/resource-catalog";
import type { CatalogListingItem } from "@/lib/resource-catalog-types";

export async function getNewsPostBySlug(slug: string) {
  const sanityPost = await fetchSanityPostBySlug(slug);
  if (!sanityPost || !isNewsSanityPost(sanityPost)) return undefined;
  return mapSanityPostToBlogDetail(sanityPost);
}

export async function getAllNewsSlugs(): Promise<string[]> {
  const catalog = await buildResourceCatalogLive();
  return catalog.byType.News.map((item) => item.id).filter(Boolean);
}

export async function getRelatedNewsPosts(
  currentSlug: string,
  limit = 4,
): Promise<CatalogListingItem[]> {
  const catalog = await buildResourceCatalogLive();
  return catalog.byType.News.filter((item) => item.id !== currentSlug).slice(0, limit);
}

export async function getSearchableNewsPosts(currentSlug: string): Promise<CatalogListingItem[]> {
  const catalog = await buildResourceCatalogLive();
  return catalog.byType.News.filter((item) => item.id !== currentSlug);
}

export { isNewsSanityPost };
