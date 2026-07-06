import { buildMepResourcesFeedItems } from "@/lib/mep-resources-feed";
import { matchesResourceServiceFilter, type ResourceFeedItem } from "@/lib/resource-listing";

export type { ResourceFeedItem };

export function getMepResourcesFeedItems(serviceFilter?: string | null): ResourceFeedItem[] {
  const allItems = buildMepResourcesFeedItems();
  if (!serviceFilter) return allItems;
  return allItems.filter((item) => matchesResourceServiceFilter(item, serviceFilter));
}
