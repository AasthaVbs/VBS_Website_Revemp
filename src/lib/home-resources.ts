import { buildMepResourcesFeedItems } from "@/lib/mep-resources-feed";
import type { ResourceFeedItem } from "@/lib/resource-listing";
import { fetchSanityResourceListing } from "@/lib/sanity-fetch";

export type HomeResourceItem = ResourceFeedItem;

/** Static fallback without Sanity snapshot (safe for client). Prefer getHomeResourceItemsLive on server. */
export function getHomeResourceItems(): HomeResourceItem[] {
  return buildMepResourcesFeedItems({ posts: [], webinars: [] });
}

/** Server/live resources feed — posts + webinars from Sanity with snapshot fallback. */
export async function getHomeResourceItemsLive(): Promise<HomeResourceItem[]> {
  const { posts, webinars } = await fetchSanityResourceListing();
  return buildMepResourcesFeedItems({ posts, webinars });
}
