import {
  caseStudyListingItems,
  extendedWhitepaperListingItems,
  portfolioListingItems,
  testimonialListingItems,
} from "@/constants/resource-catalog-content";
import { mapBlogListingToCatalog, type BlogCatalogItem } from "@/lib/map-blog-listing";
import { buildAllWebinarListingItems } from "@/lib/resource-listing";

export type ResourceCatalogItem = BlogCatalogItem | CatalogListingItem;

export type CatalogListingItem = {
  id: string;
  title: string;
  excerpt: string;
  type:
    | "Webinar"
    | "Whitepapers"
    | "Case Studies"
    | "Portfolio"
    | "Testimonials"
    | "News";
  service?: string | null;
  services?: string[] | null;
  href: string;
  image: string;
  sortOrder: number;
  publishedTimestamp: number;
  publishedAt?: string | null;
  category?: string | null;
  location?: string | null;
  badgeLabel?: string;
  delivery?: string | null;
  categoryTitles?: string[];
  tags?: string[];
};

export type ResourceCatalog = {
  allItems: ResourceCatalogItem[];
  byType: {
    Blog: BlogCatalogItem[];
    Webinar: CatalogListingItem[];
    Whitepapers: CatalogListingItem[];
    "Case Studies": CatalogListingItem[];
    Portfolio: CatalogListingItem[];
    Testimonials: CatalogListingItem[];
    News: CatalogListingItem[];
  };
};

function isNewsItem(item: { tags?: string[]; categoryTitles?: string[] }) {
  const tags = (item.tags || []).map((tag) => String(tag).toLowerCase());
  const categories = (item.categoryTitles || []).map((title) => String(title).toLowerCase());

  return (
    tags.some((tag) => tag.includes("news")) ||
    categories.some((category) => category.includes("news"))
  );
}

function toNewsListingItem<T extends Record<string, unknown>>(item: T) {
  return {
    ...item,
    type: "News",
    badgeLabel: "News",
    category: "News",
  };
}

export function buildResourceCatalog(referenceDate?: Date): ResourceCatalog {
  const blogItems = mapBlogListingToCatalog();
  const webinarItems = buildAllWebinarListingItems(referenceDate).map((item) => ({
    ...item,
    type: "Webinar" as const,
    badgeLabel: "Webinar",
    category: item.delivery ?? "Webinar",
    publishedTimestamp: item.publishedTimestamp ?? item.sortOrder ?? 0,
  })) as CatalogListingItem[];
  const newsItems = blogItems
    .filter(isNewsItem)
    .map(toNewsListingItem) as unknown as CatalogListingItem[];
  const whitepaperItems = extendedWhitepaperListingItems as CatalogListingItem[];
  const caseStudyItems = caseStudyListingItems as CatalogListingItem[];
  const portfolioItems = portfolioListingItems as CatalogListingItem[];
  const testimonialItems = testimonialListingItems as CatalogListingItem[];

  const allItems = [
    ...blogItems,
    ...webinarItems,
    ...whitepaperItems,
    ...portfolioItems,
    ...testimonialItems,
  ];

  return {
    allItems,
    byType: {
      Blog: blogItems,
      Webinar: webinarItems,
      Whitepapers: whitepaperItems,
      "Case Studies": caseStudyItems,
      Portfolio: portfolioItems,
      Testimonials: testimonialItems,
      News: newsItems,
    },
  };
}
