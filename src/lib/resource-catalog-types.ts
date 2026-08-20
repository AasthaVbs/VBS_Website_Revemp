/** Client-safe catalog types (no Sanity snapshot). */
export type BlogCatalogItem = {
  id: string;
  title: string;
  excerpt: string;
  type: "Blog";
  service: string | null;
  href: string;
  image: string;
  sortOrder: number;
  publishedTimestamp: number;
  publishedAt: string | null;
  categoryTitles: string[];
  categorySlugs?: string[];
  badgeLabel: string;
  category: string;
  author?: string | null;
  tags?: string[];
};

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
  categorySlugs?: string[];
  tags?: string[];
};

export type ResourceCatalogItem = BlogCatalogItem | CatalogListingItem;

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

export const EMPTY_RESOURCE_CATALOG: ResourceCatalog = {
  allItems: [],
  byType: {
    Blog: [],
    Webinar: [],
    Whitepapers: [],
    "Case Studies": [],
    Portfolio: [],
    Testimonials: [],
    News: [],
  },
};
