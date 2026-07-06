// @ts-nocheck
import { allPortfolioProjects } from "@/constants/projects-catalog-content";
import { clientSuccessStories } from "@/constants/client-success-stories-content";
import { mapPortfolioProjectsAsCaseStudies } from "@/lib/portfolio-catalog";

function toListingItem({
  id,
  title,
  excerpt,
  type,
  href,
  image,
  service = null,
  services = null,
  badgeLabel,
  sortOrder,
  publishedTimestamp = sortOrder,
  publishedAt = null,
  category = null,
  location = null,
  delivery = null,
}) {
  return {
    id,
    title,
    excerpt,
    type,
    service,
    services,
    href,
    image,
    sortOrder,
    publishedTimestamp,
    publishedAt,
    category: category || badgeLabel || type,
    location,
    badgeLabel: badgeLabel || type,
    delivery,
  };
}

export const caseStudyListingItems = mapPortfolioProjectsAsCaseStudies(allPortfolioProjects);

export const portfolioListingItems = allPortfolioProjects;

export const testimonialListingItems = clientSuccessStories.map((story, index) =>
  toListingItem({
    id: story.id,
    title: `${story.name}, ${story.role}`,
    excerpt: story.quote.length > 160 ? `${story.quote.slice(0, 160)}…` : story.quote,
    type: "Testimonials",
    href: "/testimonials",
    image: story.thumbnail || story.avatar,
    service: "Architecture Firms",
    badgeLabel: "Testimonial",
    category: "Testimonial",
    sortOrder: index + 1,
    publishedTimestamp: 3000 - index,
  }),
);

export const extendedWhitepaperListingItems = [
  {
    id: "hidden-cost-mep-coordination",
    title: "The Hidden Cost of Late-Stage MEP Coordination Failures",
    excerpt:
      "Understand the real cost impact of late-stage MEP coordination and how early BIM workflows deliver 5:1 to 10:1 ROI.",
    href: "/whitepaper/hidden-cost-of-late-stage-mep-coordination-failures",
    image: encodeURI("/images/image 57.png"),
    service: "MEP Engineering Firms",
    services: [
      "MEP Engineering Firms",
      "Architecture Firms",
      "Reality Capture & Survey Companies",
    ],
  },
].map((item, index) =>
  toListingItem({
    ...item,
    type: "Whitepapers",
    badgeLabel: "Whitepaper",
    category: "Whitepaper",
    sortOrder: index + 1,
    publishedTimestamp: 4000 - index,
  }),
);
