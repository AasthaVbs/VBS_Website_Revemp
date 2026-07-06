export const blogsPageHero = {
  tag: "Blogs",
  titleLead: "Blogs ",
  titleAccent: "Virtual Building Studio (VBS) Resource",
  description:
    "Since 2015, we've been the trusted partner for Architecture and Engineering firms, helping them rapidly scale their BIM teams and deliver award-winning projects every time.",
  ctaLabel: "Contact Us",
  image: "/images/figma/resource-2.png",
  imageAlt: "Virtual Building Studio blogs",
} as const;

export const blogsBrowseIntro = {
  tag: "Blogs",
  titleLead: "Blogs ",
  titleAccent: "Virtual Building Studio (VBS) Resource",
  description: blogsPageHero.description,
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
]);
