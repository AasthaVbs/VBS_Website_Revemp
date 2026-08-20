import { ROUTES } from "@/constants/navigation";
import {
  figmaBlogListingItems,
  type ResourceListingItem,
  type ResourceService,
} from "@/constants/resources-page-content";

export const webinarPageHero = {
  tag: "Webinar",
  titleLead: "Expert-Led BIM & ",
  titleAccent: "Construction Webinars",
  description:
    "Join industry experts as they share insights, best practices, and emerging trends in BIM, Scan to BIM, MEP engineering, and digital construction.",
  ctaLabel: "Contact Us",
  ctaHref: ROUTES.contact,
  imageAlt: "Virtual Building Studio webinar session",
} as const;

export const webinarTypeFilters = ["On Demand", "Upcoming"] as const;

export const webinarAllTypesLabel = "All Webinars";

export const webinarTypeFilterOptions = [webinarAllTypesLabel, ...webinarTypeFilters] as const;

export type WebinarDelivery = (typeof webinarTypeFilters)[number];

export const WEBINAR_SERVICE_ARCHITECTURE = "Architecture Firms";
export const WEBINAR_SERVICE_MEP = "MEP Engineering Firms";

export const webinarMepSlugs = new Set(["productized-mepf-design-for-scalable-ai-data-centers"]);

/** Fallback YouTube URLs when snapshot data is incomplete (live Sanity is preferred). */
export const webinarYoutubeVideoUrlBySlug: Record<string, string> = {
  "productized-mepf-design-for-scalable-ai-data-centers": "https://www.youtube.com/watch?v=0tLjNCh-uOc",
};

export const webinarArchitectureSlugs = new Set([
  "architects-delegate-for-success",
  "impact-noise-in-residential-construction-by-design",
  "ai-bim-spec-coordination",
  "faster-model-checks-for-aec-teams",
  "ai-powered-visualization",
  "ai-automation-for-bim-workflows",
  "data-to-decisions-technology-adoption-construction",
  "ai-feasibility-modular-data-center-design",
  "construction-documentation-ai-workflow",
  "why-architecture-firms-struggle-with-profit",
  "webinar-common-mistakes-to-avoid-when-creating-permit-sets",
  "webinar-challenges-in-design-development-and-how-to-overcome-them",
  "secure-construction-documents-accuracy-compliance-webinar",
  "talent-vs-tech-the-secret-boosting-your-architecture",
]);

export const webinarHrefBySlug: Record<string, string> = {
  "webinar-common-mistakes-to-avoid-when-creating-permit-sets":
    "/webinar-common-mistakes-to-avoid-when-creating-permit-sets",
  "webinar-challenges-in-design-development-and-how-to-overcome-them":
    "/webinar-challenges-in-design-development-and-how-to-overcome-them",
  "secure-construction-documents-accuracy-compliance-webinar":
    "/secure-construction-documents-accuracy-compliance-webinar",
  "talent-vs-tech-the-secret-boosting-your-architecture":
    "/talent-vs-tech-the-secret-boosting-your-architecture",
};

export type WebinarListingItem = ResourceListingItem & {
  delivery: WebinarDelivery;
  publishedAt?: string;
  eventTimestamp?: number;
  publishedTimestamp?: number;
};

export const supplementalWebinarListingItems: WebinarListingItem[] = [
  {
    id: "productized-mepf-design-for-scalable-ai-data-centers",
    title: "Construction Documentation: What Would You Let AI Do for You?",
    excerpt:
      "A practical session on how to approach AI in construction documentation — reduce workflow waste while preserving expertise and improving project quality.",
    type: "Webinar",
    service: WEBINAR_SERVICE_MEP,
    href: "/webinar/productized-mepf-design-for-scalable-ai-data-centers",
    image: "/image/construction-documentation-img.jpg",
    badgeLabel: "Webinar",
    delivery: "Upcoming",
    publishedAt: "May 20, 2026",
    eventTimestamp: new Date("2026-05-20T18:00:00Z").getTime(),
    publishedTimestamp: new Date("2026-05-20T18:00:00Z").getTime(),
    sortOrder: 1,
  },
  {
    id: "webinar-common-mistakes-to-avoid-when-creating-permit-sets",
    title: "5 Common Mistakes to Avoid When Creating Permit Sets",
    excerpt:
      "Discover how to streamline the permit process, reduce delays, and improve project efficiency in this exclusive live webinar.",
    type: "Webinar",
    service: WEBINAR_SERVICE_ARCHITECTURE,
    href: "/webinar-common-mistakes-to-avoid-when-creating-permit-sets",
    image: "/image/webinar-with-rory-gabriel.jpg",
    badgeLabel: "Webinar",
    delivery: "On Demand",
    publishedTimestamp: 9500,
    sortOrder: 2,
  },
  {
    id: "webinar-challenges-in-design-development-and-how-to-overcome-them",
    title: "Top 5 Challenges in Design Development (DD) and How to Overcome Them",
    excerpt:
      "Cover the top five hurdles faced during the DD phase and expert strategies to keep design development moving smoothly.",
    type: "Webinar",
    service: WEBINAR_SERVICE_ARCHITECTURE,
    href: "/webinar-challenges-in-design-development-and-how-to-overcome-them",
    image: "/image/webinar-banner.jpg",
    badgeLabel: "Webinar",
    delivery: "On Demand",
    publishedTimestamp: 9400,
    sortOrder: 3,
  },
  {
    id: "secure-construction-documents-accuracy-compliance-webinar",
    title: "3 Key Steps to Secure Construction Documents with Accuracy and Compliance",
    excerpt:
      "Learn three essential steps to improve documentation quality, minimize risks, and enhance project success.",
    type: "Webinar",
    service: WEBINAR_SERVICE_ARCHITECTURE,
    href: "/secure-construction-documents-accuracy-compliance-webinar",
    image: "/image/webinar-banner.jpg",
    badgeLabel: "Webinar",
    delivery: "On Demand",
    publishedTimestamp: 9300,
    sortOrder: 4,
  },
  {
    id: "talent-vs-tech-the-secret-boosting-your-architecture",
    title: "Talent vs. Tech—What’s the Secret to Boosting Your Architecture Practice?",
    excerpt:
      "Explore how top talent and technology like VBS Virtual Studio and BidLight BIM automation can boost firm efficiency.",
    type: "Webinar",
    service: WEBINAR_SERVICE_ARCHITECTURE,
    href: "/talent-vs-tech-the-secret-boosting-your-architecture",
    image: "/image/talent-vs-tech-the-secret-boosting-your-architecture.jpg",
    badgeLabel: "Webinar",
    delivery: "On Demand",
    publishedTimestamp: 9200,
    sortOrder: 5,
  },
];

/** Figma webinar grid — deduped with supplemental static webinars in feed builder. */
export const figmaWebinarListingItems: WebinarListingItem[] = figmaBlogListingItems.map(
  (item, index) => ({
    ...item,
    type: "Webinar" as const,
    badgeLabel: "Webinar",
    delivery: (index < 4 ? "On Demand" : "Upcoming") as WebinarDelivery,
    service: item.service as ResourceService,
    href: `/webinar/${item.id}`,
    publishedTimestamp: 9000 - index,
  }),
);
