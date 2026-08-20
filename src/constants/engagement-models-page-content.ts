import {
  engagementModelCards,
  type EngagementModelCard,
} from "@/constants/engagement-models-content";
import { ROUTES } from "@/constants/navigation";

export const ENGAGEMENT_MODELS_PAGE_CONTACT_ID = "engagement-models-page-contact";
export const ENGAGEMENT_MODELS_PAGE_CONTACT_HASH = `#${ENGAGEMENT_MODELS_PAGE_CONTACT_ID}`;

export const engagementModelsPageCards = [
  {
    ...engagementModelCards[0],
    ctaHref: ENGAGEMENT_MODELS_PAGE_CONTACT_HASH,
  },
  {
    ...engagementModelCards[1],
    ctaHref: ENGAGEMENT_MODELS_PAGE_CONTACT_HASH,
  },
  {
    ...engagementModelCards[2],
    ctaHref: ROUTES.contact,
  },
] as unknown as EngagementModelCard[];

export const engagementModelFinderSection = {
  tag: "Engagement Guide",
  titleLead: "Which Engagement ",
  titleAccent: "Model Fits You?",
  description: "Quickly identify the right delivery structure based on your current needs.",
  tableHeaders: {
    need: "If You Need",
    recommended: "Recommended Model",
  },
} as const;

export type EngagementModelFinderRow = {
  need: string;
  recommended: string;
};

export const engagementModelFinderRows: EngagementModelFinderRow[] = [
  {
    need: "One-time BIM support",
    recommended: "Project-Based Support",
  },
  {
    need: "Ongoing production support",
    recommended: "Dedicated Resource Model",
  },
  {
    need: "Offshore delivery operation",
    recommended: "Global Delivery Center",
  },
];

export const engagementModelsCompareSection = {
  tag: "Comparison",
  titleLead: "Compatibility ",
  titleAccent: "Engagement Models",
  description: "Understand which structure aligns best with your operational goals.",
  tableHeaders: {
    feature: "Feature",
    projectBased: "Project-Based",
    dedicatedResources: "Dedicated Resources",
    gdc: "GDC",
  },
} as const;

export type EngagementModelsCompareRow = {
  feature: string;
  projectBased: string;
  dedicatedResources: string;
  gdc: string;
};

export const engagementModelsCompareRows: EngagementModelsCompareRow[] = [
  {
    feature: "Flexibility",
    projectBased: "High",
    dedicatedResources: "Medium",
    gdc: "Medium",
  },
  {
    feature: "Dedicated Team",
    projectBased: "No",
    dedicatedResources: "Yes",
    gdc: "Yes",
  },
  {
    feature: "Long-Term Partnership",
    projectBased: "Optional",
    dedicatedResources: "Yes",
    gdc: "Strategic",
  },
  {
    feature: "Scalability",
    projectBased: "Medium",
    dedicatedResources: "High",
    gdc: "Very High",
  },
  {
    feature: "Best For",
    projectBased: "Small Firms",
    dedicatedResources: "Growing Firms",
    gdc: "Enterprise",
  },
];

export const engagementStartsSection = {
  tag: "Onboarding",
  titleLead: "How Engagement ",
  titleAccent: "Starts",
  description: "A streamlined onboarding process designed for fast project alignment.",
} as const;

export type EngagementStartStep = {
  number: string;
  label: string;
};

export const engagementStartSteps: EngagementStartStep[] = [
  { number: "01", label: "Discovery Call" },
  { number: "02", label: "Scope Review" },
  { number: "03", label: "Team Alignment" },
  { number: "04", label: "Project Kickoff" },
];

export const engagementPageEvaluateCta = {
  titleLead: "Evaluate Your ",
  titleAccent: "Delivery Capacity",
  description: "A structured conversation about scale, standards, and fit.",
  ctaLabel: "Contact Us",
} as const;

export const engagementModelAdvisorCta = {
  titleLead: "Not Sure Which Engagement Model ",
  titleAccent: "Fits Your Business?",
  description:
    "Our team can help you identify the right delivery structure based on your project volume, timelines, and operational goals.",
  ctaLabel: "Talk to BIM Experts",
  ctaHref: ROUTES.contact,
} as const;

export const engagementPageTestimonialsDescription =
  "Partners across the U.S. rely on our engagement models to scale BIM delivery with confidence.";
