export type StatItem = {
  value: string;
  color: string;
  label: string;
};

/** Architecture service pages — ACS blogs, webinars, white papers, case studies only */
export const ACS_RESOURCES_SERVICE_FILTER = "Architecture Firms";

export const acsServicePagesResourcesSection = {
  tag: "Resources",
  titleLine1: "Latest Insights on ",
  titleLine2: "Production, Governance, and Scale",
  description:
    "Explore technical thought leadership and actionable strategies designed to optimize your production workflows and scale without compromising standards.",
  viewAllHref: "/resources",
  serviceFilter: ACS_RESOURCES_SERVICE_FILTER,
};

/** Home + Reality Capture / Survey pages — latest across all services */
export const allServicesResourcesSection = {
  tag: "Resources",
  titleLine1: "Latest Insights on ",
  titleLine2: "Production, Governance, and Scale",
  description:
    "Explore technical thought leadership and actionable strategies designed to optimize your production workflows and scale without compromising standards.",
  viewAllHref: "/resources",
};

export const defaultStatsStrip: StatItem[] = [
  { value: "11+", color: "text-vbs-red", label: "Years Embedded Inside U.S. AEC Delivery" },
  { value: "2000+", color: "text-vbs-green", label: "Production professionals across delivery centers" },
  { value: "5+", color: "text-vbs-blue", label: "Years Average Engagement Length" },
  { value: "6+", color: "text-vbs-yellow", label: "Disciplines Covered" },
];

export const aboutStatsStrip: StatItem[] = [
  { value: "11+", color: "text-vbs-red", label: "Years Embedded Inside U.S. AEC Delivery" },
  { value: "2000+", color: "text-vbs-green", label: "Concurrent Project Environments" },
  { value: "5+", color: "text-vbs-blue", label: "Years Average Engagement Length" },
  { value: "6+", color: "text-vbs-yellow", label: "Disciplines Covered" },
];

export const testimonials = [
  {
    name: "Marvin McKinney",
    role: "CEO at Oceanmtech",
    avatar: "/images/figma/testimonial-1.png",
    cover: "/images/figma/resource-1.png",
  },
  {
    name: "Cody Fisher",
    role: "CEO at Oceanmtech",
    avatar: "/images/figma/testimonial-2.png",
    cover: "/images/figma/resource-2.png",
  },
  {
    name: "Darlene Robertson",
    role: "CEO at Oceanmtech",
    avatar: "/images/figma/testimonial-1.png",
    cover: "/images/figma/resource-3.png",
  },
  {
    name: "Savannah Nguyen",
    role: "CEO at Oceanmtech",
    avatar: "/images/figma/testimonial-2.png",
    cover: "/images/figma/resource-1.png",
  },
] as const;

export const testimonialQuote =
  "Whether you're launching a new product or entering a new segment, we design the GTM motion that lands and scales. Whether you're launching a new product or entering a new segment, we design the GTM motion that lands and scales.";
