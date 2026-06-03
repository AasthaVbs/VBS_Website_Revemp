export const resourcesPageHero = {
  tag: "Resources",
  titleLead: "About ",
  titleAccent: "Virtual Building Studio (VBS) Resource",
  description:
    "Since 2015, we've been the trusted partner for Architecture and Engineering firms, helping them rapidly scale their BIM teams and deliver award-winning projects every time.",
  ctaLabel: "Contact Us",
  image: "/images/figma/resource-1.png",
  imageAlt: "Virtual Building Studio resources",
} as const;

export const resourcesBrowseIntro = {
  tag: "Resources",
  titleLead: "About ",
  titleAccent: "Virtual Building Studio (VBS) Resource",
  description: resourcesPageHero.description,
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

export const resourceSortFilters = ["New to Old", "Old to New"] as const;

export const resourceServiceFilters = [
  "Architecture Firms",
  "MEP Engineering Firms",
  "Reality Capture & Survey Companies",
] as const;

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

export const FIGMA_RESOURCE_IMAGES = [
  "/images/figma/resource-1.png",
  "/images/figma/resource-2.png",
  "/images/figma/resource-3.png",
] as const;

export const FIGMA_RESOURCE_EXCERPT =
  "Whether you're launching a new product or entering a new segment, we design the GTM motion that lands and scales.";

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
  return `/blogs/${id}`;
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

export const whitepaperListingItems: ResourceListingItem[] = [
  {
    id: "mep-data-center-whitepaper",
    title: "MEP Coordination for Data Centers: BIM Workflows for Mission-Critical Facilities",
    excerpt:
      "Specialized data center MEP BIM coordination strategies that improve constructability, fabrication readiness, and installation efficiency.",
    type: "Whitepapers",
    service: "MEP Engineering Firms",
    href: "/whitepaper/mep-coordination-data-centers-bim-workflows",
    image: FIGMA_RESOURCE_IMAGES[2],
    sortOrder: 1,
    badgeLabel: "Whitepaper",
  },
];

export const resourceListingItems: ResourceListingItem[] = [
  ...figmaBlogListingItems,
  ...whitepaperListingItems,
];

export const resourcePaginationPages = ["01", "02", "03", "...", "09", "10"] as const;
