import { ROUTES } from "@/constants/navigation";

export const blogsPageHero = {
  tag: "Blogs",
  titleLead: "Insights That Build ",
  titleAccent: "Better Projects",
  description:
    "Explore in-depth articles, practical guidance, and innovative solutions shaping the future of BIM, Scan to BIM, and digital construction.",
  ctaLabel: "Contact Us",
  ctaHref: ROUTES.contact,
  imageAlt: "Architect workspace with BIM plans and building model",
} as const;

/** Maps blog sidebar service filters to Sanity category titles. */
export const blogServiceCategoryMap = {
  "Architecture Firms": ["AEC Industry", "AEC Industtry", "BIM Modeling", "BIM Modelling"],
  "MEP Engineering Firms": ["MEP"],
  "Reality Capture & Survey Companies": ["AEC Industry", "BIM Modeling", "BIM Modelling"],
} as const;

/** Blogs excluded from Architecture / Scan-to-BIM feeds; shown on MEP page. */
export const blogMepSlugs = new Set([
  "benefits-of-navisworks-for-bim-clash-detection",
  "bim-clash-detection-process-advantages-and-practices",
  "benefits-of-mep-bim-services-for-contractors",
  "bim-outsourcing-services-a-boon-for-general-contractors",
  "efficient-mep-coordination-with-bim-drawings",
  "mep-bim-coordination-for-contractors",
  "mep-plans-in-construction",
  "mep-bim-for-modular-construction",
  "mep-projects-critical-milestones-checklist",
  "mep-firms-win-more-work-without-burnout",
  "revit-mep-drafting-services-outsourcing",
  "mep-coordination-bim-benefits-process-outsourcing",
  "cloud-based-mep-bim-remote-collaboration",
  "mep-bim-modeling-mistakes-how-to-fix-them",
  "mechanical-bim-modeling-workflow-mep-coordination",
  "mep-shop-drawing-checklist-contractors-subcontractors",
  "top-mep-modeling-mistakes-coordination-failures",
  "bim-mep-cost-estimation-for-contractors",
  "how-to-ensure-accuracy-mep-bim-models-checklist",
  "clash-detection-in-bim-process-tools-best-practices",
  "bim-mep-as-builts-facility-management",
  "mep-pre-bid-estimation-with-bim",
  "high-density-cable-routing-data-center-bim-solutions",
  "mep-coordination-challenges-in-data-centers",
  "data-center-construction-bim-reduces-delays",
  "mep-bim-coordination-team-roles-benefits",
]);
