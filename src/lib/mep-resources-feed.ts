import { allPortfolioProjects } from "@/constants/projects-catalog-content";
import { extendedWhitepaperListingItems } from "@/constants/resource-catalog-content";
import {
  supplementalWebinarListingItems,
  webinarMepSlugs,
} from "@/constants/webinar-page-content";
import {
  buildAllWebinarListingItems,
  buildBlogHref,
  buildWebinarHref,
  normalizeWebinarSlug,
  type ResourceFeedItem,
} from "@/lib/resource-listing";
import { mapSanityPostsToListing } from "@/lib/sanity-listing";

const UPCOMING_WEBINAR_SORT_BOOST = 5_000_000_000_000;

function normalizeCatalogHref(href: string) {
  if (!href || href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) {
    return href || "/";
  }
  const [path, hash = ""] = href.split("#");
  const portfolioPath = path.replace(/^\/projects\//, "/portfolio/");
  const withSlash = portfolioPath.endsWith("/") ? portfolioPath : portfolioPath;
  return hash ? `${withSlash}#${hash}` : withSlash;
}

function toFeedItem(
  item: {
    id?: string;
    title: string;
    excerpt?: string;
    image: string;
    href?: string;
    service?: string | null;
    services?: string[] | null;
    categoryTitles?: string[];
    publishedAt?: string | null;
    date?: string | null;
    delivery?: string | null;
    location?: string | null;
    publishedTimestamp?: number | null;
    sortOrder?: number;
  },
  type: ResourceFeedItem["type"],
  sortKey: number,
): ResourceFeedItem {
  let href = item.href;

  if (type === "Blog" && item.id) {
    href = buildBlogHref(item.id);
  } else if (type === "Webinar" && item.id) {
    href = item.href || buildWebinarHref(item.id);
  } else {
    href = normalizeCatalogHref(href || "/");
  }

  const delivery = item.delivery ?? null;

  return {
    id: item.id ?? null,
    type,
    title: item.title,
    excerpt: item.excerpt || "",
    image: item.image || "",
    href,
    date: item.publishedAt || item.date || delivery || item.location || "",
    sortKey: item.publishedTimestamp ?? sortKey,
    service: item.service ?? null,
    services: item.services ?? null,
    categoryTitles: item.categoryTitles ?? [],
    delivery,
  };
}

function applyUpcomingWebinarSortBoost(item: ResourceFeedItem) {
  if (item.type !== "Webinar") return item;
  const isUpcoming = item.delivery === "Upcoming" || item.date === "Upcoming";
  if (!isUpcoming) return item;
  return { ...item, sortKey: (item.sortKey ?? 0) + UPCOMING_WEBINAR_SORT_BOOST };
}

function getMepPinnedWebinars() {
  return supplementalWebinarListingItems.filter((entry) =>
    webinarMepSlugs.has(normalizeWebinarSlug(entry.id)),
  );
}

function getFeedItemSlug(item: ResourceFeedItem) {
  const fromId = normalizeWebinarSlug(item.id);
  if (fromId) return fromId;
  const match = String(item.href || "").match(/\/webinar\/([^/]+)/i);
  return match ? normalizeWebinarSlug(match[1]) : "";
}

function tagKnownMepWebinars(items: ResourceFeedItem[]) {
  const pinnedBySlug = new Map(
    getMepPinnedWebinars().map((entry) => [normalizeWebinarSlug(entry.id), entry]),
  );

  return items.map((item) => {
    if (item.type !== "Webinar") return item;
    const slug = getFeedItemSlug(item);
    const pinned = slug ? pinnedBySlug.get(slug) : null;
    if (!pinned) return item;

    return applyUpcomingWebinarSortBoost({
      ...item,
      service: "MEP Engineering Firms",
      delivery: item.delivery || pinned.delivery,
      date: item.date || pinned.publishedAt || item.delivery || "",
      sortKey: Math.max(item.sortKey ?? 0, pinned.publishedTimestamp ?? 0),
      title: item.title || pinned.title,
      excerpt: item.excerpt || pinned.excerpt,
      image: item.image || pinned.image,
      href: item.href || pinned.href,
    });
  });
}

function ensureMepPinnedWebinars(items: ResourceFeedItem[], referenceDate?: Date) {
  const pinnedWebinars = getMepPinnedWebinars();
  if (!pinnedWebinars.length) return items;

  const catalogWebinars = buildAllWebinarListingItems(referenceDate);
  const bySlug = new Map<string, ResourceFeedItem>();

  for (const item of items) {
    const slug = getFeedItemSlug(item);
    if (slug && item.type === "Webinar") {
      bySlug.set(slug, item);
    }
  }

  const next = [...items];

  for (const pinned of pinnedWebinars) {
    const slug = normalizeWebinarSlug(pinned.id);
    const catalogItem = catalogWebinars.find((entry) => normalizeWebinarSlug(entry.id) === slug);
    const source = catalogItem || pinned;

    const feedItem = applyUpcomingWebinarSortBoost(
      toFeedItem(
        {
          ...source,
          service: "MEP Engineering Firms",
          publishedTimestamp: Math.max(
            source.publishedTimestamp ?? 0,
            pinned.publishedTimestamp ?? 0,
          ),
        },
        "Webinar",
        source.publishedTimestamp ?? pinned.publishedTimestamp ?? Date.now(),
      ),
    );

    const existing = bySlug.get(slug);
    if (!existing) {
      next.push(feedItem);
      bySlug.set(slug, feedItem);
      continue;
    }

    const index = next.indexOf(existing);
    if (index === -1) continue;

    next[index] = applyUpcomingWebinarSortBoost({
      ...existing,
      service: "MEP Engineering Firms",
      delivery: feedItem.delivery,
      date: existing.date || feedItem.date || feedItem.delivery || "",
      title: existing.title || feedItem.title,
      excerpt: existing.excerpt || feedItem.excerpt,
      image: existing.image || feedItem.image,
      href: existing.href || feedItem.href,
      sortKey: Math.max(existing.sortKey ?? 0, feedItem.sortKey ?? 0),
    });
    bySlug.set(slug, next[index]);
  }

  return next;
}

/** Latest blogs, webinars, portfolio case studies, and white papers for MepResourcesSection. */
export function buildMepResourcesFeedItems({
  referenceDate,
}: {
  referenceDate?: Date;
} = {}): ResourceFeedItem[] {
  const listingReference = referenceDate ?? new Date();
  const blogSource = mapSanityPostsToListing();

  const blogItems = blogSource.map((item, index) =>
    toFeedItem(
      {
        ...item,
        publishedTimestamp: item.publishedTimestamp ?? 10000 - index,
      },
      "Blog",
      item.publishedTimestamp ?? 10000 - index,
    ),
  );

  const webinarSource = buildAllWebinarListingItems(listingReference);

  const webinarItems = webinarSource.map((item, index) =>
    toFeedItem(
      {
        ...item,
        publishedAt: item.publishedAt,
        publishedTimestamp: item.publishedTimestamp ?? 9000 - index,
        delivery: item.delivery,
      },
      "Webinar",
      item.publishedTimestamp ?? 9000 - index,
    ),
  );

  const caseStudyItems = allPortfolioProjects.map((project, index) =>
    toFeedItem(
      {
        id: project.id,
        title: project.title,
        excerpt: project.excerpt,
        href: project.href,
        image: project.image,
        service: project.service,
        date: project.location || "",
        publishedTimestamp: project.publishedTimestamp ?? 8000 - index,
      },
      "Case Study",
      8000 - index,
    ),
  );

  const whitepaperItems = extendedWhitepaperListingItems.map((item, index) =>
    toFeedItem(
      {
        ...item,
        publishedTimestamp: 7000 - index,
      },
      "White Paper",
      7000 - index,
    ),
  );

  return ensureMepPinnedWebinars(
    tagKnownMepWebinars([...blogItems, ...webinarItems, ...caseStudyItems, ...whitepaperItems]),
    listingReference,
  );
}
