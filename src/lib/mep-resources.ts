import { matchesResourceServiceFilter, type ResourceFeedItem } from "@/lib/resource-listing";
import { buildMepResourcesFeedItems } from "@/lib/mep-resources-feed";
import { fetchSanityResourceListing } from "@/lib/sanity-fetch";

export type { ResourceFeedItem };

export function getMepResourcesFeedItems(serviceFilter?: string | null): ResourceFeedItem[] {
  const allItems = buildMepResourcesFeedItems({ posts: [], webinars: [] });
  if (!serviceFilter) return allItems;
  return allItems.filter((item) => matchesResourceServiceFilter(item, serviceFilter));
}

/** Live Sanity posts + snapshot fallback — prefer this on server components. */
export async function getMepResourcesFeedItemsLive(
  serviceFilter?: string | null,
): Promise<ResourceFeedItem[]> {
  const { posts, webinars } = await fetchSanityResourceListing();
  const allItems = buildMepResourcesFeedItems({ posts, webinars });
  if (!serviceFilter) return allItems;
  return allItems.filter((item) => matchesResourceServiceFilter(item, serviceFilter));
}
