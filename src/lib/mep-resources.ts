import { buildMepResourcesFeedItems } from "@/lib/mep-resources-feed";
import { matchesResourceServiceFilter, type ResourceFeedItem } from "@/lib/resource-listing";
import { fetchSanityResourceListing } from "@/lib/sanity-fetch";

export type { ResourceFeedItem };

export function getMepResourcesFeedItems(serviceFilter?: string | null): ResourceFeedItem[] {
  const allItems = buildMepResourcesFeedItems();
  if (!serviceFilter) return allItems;
  return allItems.filter((item) => matchesResourceServiceFilter(item, serviceFilter));
}

/** Live Sanity posts + snapshot fallback — prefer this on server components. */
export async function getMepResourcesFeedItemsLive(
  serviceFilter?: string | null,
): Promise<ResourceFeedItem[]> {
  const { posts } = await fetchSanityResourceListing();
  const allItems = buildMepResourcesFeedItems({ posts });
  if (!serviceFilter) return allItems;
  return allItems.filter((item) => matchesResourceServiceFilter(item, serviceFilter));
}
