export const resourcesPageHero = {
  tag: "Resources",
  titleLead: "About ",
  titleAccent: "Virtual Building Studio (VBS) Resource",
  description:
    "Since 2015, we've been the trusted partner for Architecture and Engineering firms, helping them rapidly scale their BIM teams and deliver award-winning projects every time.",
  ctaLabel: "Contact Us",
  imageAlt: "Virtual Building Studio resources and industry insights",
} as const;

export const resourceTypeFilters = [
  "Case Studies",
  "Portfolio",
  "Testimonials",
  "Blog",
  "Webinar",
  "Whitepapers",
  "News",
] as const;

export const resourceAllTypesLabel = "All Resources";
export const resourceAllServicesLabel = "All Services";

export const resourceTypeFilterOptions = [resourceAllTypesLabel, ...resourceTypeFilters] as const;

export const resourceServiceFilters = [
  "Architecture Firms",
  "MEP Engineering Firms",
  "Reality Capture & Survey Companies",
] as const;

export const resourceServiceFilterOptions = [
  resourceAllServicesLabel,
  ...resourceServiceFilters,
] as const;

export const resourceSortFilters = ["New to Old", "Old to New"] as const;

export const resourceSubServiceFilters = [
  "MEP BIM Modeling",
  "MEP CAD Drafting",
  "MEP Shop Drawings",
  "MEP Spool Drawings",
  "Clash Detection & Coordination",
  "BIM Coordination",
  "Bill of Materials (BOM)",
  "Pre-Bid Estimation",
  "MEP As-Built Modeling",
  "Scan to BIM for MEP",
  "4D BIM Scheduling",
  "5D BIM Cost Estimation",
] as const;

import { FIGMA_RESOURCE_EXCERPT, FIGMA_RESOURCE_IMAGES } from "@/constants/resource-figma-assets";

export { FIGMA_RESOURCE_EXCERPT, FIGMA_RESOURCE_IMAGES };

export type ResourceType = (typeof resourceTypeFilters)[number];
export type ResourceSort = (typeof resourceSortFilters)[number];
export type ResourceService = (typeof resourceServiceFilters)[number];

export type ResourceListingItem = {
  id: string;
  title: string;
  excerpt: string;
  type: ResourceType;
  service: ResourceService;
  href: string;
  image: string;
  sortOrder: number;
  badgeLabel?: string;
};

/** Figma 337:37659 — default blog grid (8 cards) */
function blogDetailHref(id: string) {
  return `/blog/${id}`;
}

export const figmaBlogListingItems: ResourceListingItem[] = [
  {
    id: "revit-family",
    title: "Why Revit Family Creation Services Are Essential for Modern AEC Firms",
    excerpt: FIGMA_RESOURCE_EXCERPT,
    type: "Blog",
    service: "MEP Engineering Firms",
    href: blogDetailHref("revit-family"),
    image: FIGMA_RESOURCE_IMAGES[0],
    sortOrder: 1,
    badgeLabel: "Blog",
  },
  {
    id: "architectural-bim",
    title: "Why Architectural BIM Modeling Is Essential for Construction Projects",
    excerpt: FIGMA_RESOURCE_EXCERPT,
    type: "Blog",
    service: "Architecture Firms",
    href: blogDetailHref("architectural-bim"),
    image: FIGMA_RESOURCE_IMAGES[1],
    sortOrder: 2,
    badgeLabel: "Blog",
  },
  {
    id: "autocad-bim",
    title: "Why AutoCAD to BIM Conversion is Essential for Modern Construction",
    excerpt: FIGMA_RESOURCE_EXCERPT,
    type: "Blog",
    service: "MEP Engineering Firms",
    href: blogDetailHref("autocad-bim"),
    image: FIGMA_RESOURCE_IMAGES[2],
    sortOrder: 3,
    badgeLabel: "Blog",
  },
  {
    id: "residential-drafting",
    title: "Architectural Drafting Services for Residential Projects: A Complete Guide",
    excerpt: FIGMA_RESOURCE_EXCERPT,
    type: "Blog",
    service: "Architecture Firms",
    href: blogDetailHref("residential-drafting"),
    image: FIGMA_RESOURCE_IMAGES[0],
    sortOrder: 4,
    badgeLabel: "Blog",
  },
  {
    id: "in-house-vs-outsource",
    title: "In-House vs Outsourced Architectural Drafting: Cost, Speed, and Quality Comparison",
    excerpt: FIGMA_RESOURCE_EXCERPT,
    type: "Blog",
    service: "Architecture Firms",
    href: blogDetailHref("in-house-vs-outsource"),
    image: FIGMA_RESOURCE_IMAGES[1],
    sortOrder: 5,
    badgeLabel: "Blog",
  },
  {
    id: "outsourced-drafting",
    title: "How Outsourced Architectural Drafting Helps Growing U.S. Firms Deliver Projects Faster",
    excerpt: FIGMA_RESOURCE_EXCERPT,
    type: "Blog",
    service: "Architecture Firms",
    href: blogDetailHref("outsourced-drafting"),
    image: FIGMA_RESOURCE_IMAGES[2],
    sortOrder: 6,
    badgeLabel: "Blog",
  },
  {
    id: "bim-maturity",
    title: "BIM Maturity Levels Explained – Level 0, Level 1, Level 2, Level 3",
    excerpt: FIGMA_RESOURCE_EXCERPT,
    type: "Blog",
    service: "MEP Engineering Firms",
    href: blogDetailHref("bim-maturity"),
    image: FIGMA_RESOURCE_IMAGES[0],
    sortOrder: 7,
    badgeLabel: "Blog",
  },
  {
    id: "bim-infrastructure",
    title: "How BIM Is Transforming Infrastructure Projects in the USA",
    excerpt: FIGMA_RESOURCE_EXCERPT,
    type: "Blog",
    service: "MEP Engineering Firms",
    href: blogDetailHref("bim-infrastructure"),
    image: FIGMA_RESOURCE_IMAGES[1],
    sortOrder: 8,
    badgeLabel: "Blog",
  },
];

import {
  extendedWhitepaperListingItems,
  caseStudyListingItems,
  portfolioListingItems,
  testimonialListingItems,
} from "@/constants/resource-catalog-content";

export type ExtendedWhitepaperListingItem = ResourceListingItem & {
  services?: ResourceService[];
  publishedTimestamp?: number;
  category?: string;
};

export {
  extendedWhitepaperListingItems,
  caseStudyListingItems,
  portfolioListingItems,
  testimonialListingItems,
};

export const whitepaperListingItems =
  extendedWhitepaperListingItems as unknown as ResourceListingItem[];

export const resourceListingItems: ResourceListingItem[] = [
  ...figmaBlogListingItems,
  ...whitepaperListingItems,
];

export const resourcePaginationPages = ["01", "02", "03", "...", "09", "10"] as const;
