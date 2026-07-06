import { buildMepResourcesFeedItems } from "@/lib/mep-resources-feed";
import type { ResourceFeedItem } from "@/lib/resource-listing";

export type HomeResourceItem = ResourceFeedItem;

/** Latest blog, webinar, case study, and white paper for the home resources section. */
export function getHomeResourceItems(): HomeResourceItem[] {
  return buildMepResourcesFeedItems();
}
