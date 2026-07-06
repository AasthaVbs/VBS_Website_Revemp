import type { ResourceFeedItem } from "@/lib/resource-listing";

const RESOURCE_FILTER_TYPES = ["Blog", "Webinar", "Case Study", "White Paper"] as const;

export function matchesResourceFilter(type: string, filter: string) {
  if (filter === "All") return true;
  if (filter === "Blogs") return type === "Blog";
  if (filter === "Webinar") return type === "Webinar";
  if (filter === "Case Study") return type === "Case Study";
  if (filter === "White Paper") return type === "White Paper";
  return true;
}

/** Upcoming webinars first, then newest by sortKey. */
export function compareResourceItems(a: ResourceFeedItem, b: ResourceFeedItem) {
  const aUpcoming = a.delivery === "Upcoming" ? 1 : 0;
  const bUpcoming = b.delivery === "Upcoming" ? 1 : 0;
  if (aUpcoming !== bUpcoming) return bUpcoming - aUpcoming;
  return (b.sortKey ?? 0) - (a.sortKey ?? 0);
}

function getLatestItemByType(allItems: ResourceFeedItem[], type: string) {
  const items = allItems.filter((item) => item.type === type);
  if (!items.length) return null;
  return items.reduce<ResourceFeedItem>((latest, item) =>
    compareResourceItems(item, latest) < 0 ? item : latest,
  items[0]);
}

export function getSortedResourceItems(allItems: ResourceFeedItem[], activeFilter: string) {
  if (activeFilter === "All") {
    return RESOURCE_FILTER_TYPES.map((type) => getLatestItemByType(allItems, type))
      .filter((item): item is ResourceFeedItem => item != null)
      .sort(compareResourceItems);
  }

  return allItems
    .filter((item) => matchesResourceFilter(item.type, activeFilter))
    .sort(compareResourceItems);
}

export type ResourcesSectionCard = {
  type: string;
  title: string;
  excerpt?: string;
  date?: string;
  image: string;
  href: string;
};

/** Match Gatsby MepResourcesSection — 1 featured + up to 3 compact rows (4 cards max). */
export function buildResourcesSectionView(allItems: ResourceFeedItem[], activeFilter: string) {
  const sorted = getSortedResourceItems(allItems, activeFilter);

  if (activeFilter !== "All" && sorted.length === 1) {
    return {
      featuredItem: null,
      listRows: [],
      soloItem: toSoloCard(sorted[0]),
    };
  }

  return {
    featuredItem: sorted[0] ? toFeaturedCard(sorted[0]) : null,
    listRows: sorted.slice(1, 4).map(toListRow),
    soloItem: null,
  };
}

function toSoloCard(item: ResourceFeedItem): ResourcesSectionCard {
  return {
    type: item.type,
    title: item.title,
    excerpt: item.excerpt || "",
    image: item.image,
    href: item.href,
  };
}

function toFeaturedCard(item: ResourceFeedItem): ResourcesSectionCard {
  return {
    type: item.type,
    title: item.title,
    excerpt: item.excerpt || "",
    image: item.image,
    href: item.href,
  };
}

function toListRow(item: ResourceFeedItem): ResourcesSectionCard {
  return {
    type: item.type,
    title: item.title,
    date: item.date || "",
    image: item.image,
    href: item.href,
  };
}
