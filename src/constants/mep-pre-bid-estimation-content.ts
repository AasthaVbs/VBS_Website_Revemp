import { benefitIconColored, benefitIconMuted } from "@/constants/benefit-icons";
import { ROUTES } from "@/constants/navigation";
import type {
  MepBimFeatureCard,
  MepBimMeasurableResultCard,
  MepBimTechnologyTool,
  MepBimUseCaseCard,
  MepOverviewIntroContent,
  MepTrustedByContent,
} from "@/constants/mep-bim-modelling-content";
import {
  mepBimTechnologyStackToolsRowOne,
  mepBimTechnologyStackToolsRowTwo,
} from "@/constants/mep-bim-modelling-content";

const budgetValidationIcon = "/image/budget-validation-icon.png";
const complexMepProjectsIcon = "/image/complex-mep-projects-icon.png";
const resourceConstraintsIcon = "/image/resource-constraints-icon.png";
const tenderStageIcon = "/image/tender-stage-icon.png";

export const MEP_PRE_BID_CONTACT_ID = "mep-pre-bid-page-contact";
export const MEP_PRE_BID_CONTACT_HASH = `#${MEP_PRE_BID_CONTACT_ID}`;

export const mepPreBidHero = {
  tag: "Pre-Bid Estimation",
  titleLead: "Pre-Bid Estimation Service to ",
  titleAccent: "Reduce Bid Uncertainty",
  description:
    "Get bid-ready cost estimates from experienced estimators using accurate quantity takeoffs, current pricing and trade-specific expertise.",
  ctaLabel: "Get a Free Quote",
  ctaHref: MEP_PRE_BID_CONTACT_HASH,
  imageSrc: "/image/pre-bid-estimation-service-banner.png",
  imageAlt: "Pre-Bid Estimation Services",
  copyMaxWidth: 608,
  descriptionMaxWidth: 558,
} as const;

export const mepPreBidTrustedBy: MepTrustedByContent = {
  titleAccent: "Trusted",
  titleLead: " By",
  items: [
    { dashColor: "#D70416", label: "MEP Subcontractors" },
    { dashColor: "#42AA32", label: "General Contractors" },
    { dashColor: "#2299D6", label: "Real Estate Developers" },
    { dashColor: "#F0B300", label: "Government Agencies" },
  ],
};

export const mepPreBidIntro: MepOverviewIntroContent = {
  tag: "Overview",
  titleLead: "Preconstruction Estimating Services to ",
  titleAccent: "Help You Land More Projects",
  paragraph1:
    "Winning a bid is about getting the quantities right and pricing them correctly. Even slight mistakes in estimating can cut into profit or cost you the job. As a Top Pre-bid Estimation Company based in Houston, TX, we deliver Pre-Construction Estimating Services across the ",
  paragraph1Bold: "USA, UK, Australia, GCC, EU, and South Asia.",
  paragraph2Lead: "Our on-demand estimators prepare ",
  paragraph2Bold: "MEP Estimating Services",
  paragraph2Tail:
    " in USA using BIM-supported workflows and SMACNA, NEC and CSI standards. All our pre-bid estimations for MEP and HVAC systems include local labor rates, material pricing and project scope for reliable bid submissions.",
  mainImage: "/image/pre-construction-bid-estimation-overview.png",
  imageAlt: "Pre-Construction Bid Estimation overview",
};

export const mepPreBidServiceFeaturesSection = {
  tag: "Service Features",
  titleLead: "Complete Range of Construction\n",
  titleAccent: "Pre-Bid Cost Estimation Services",
  description:
    "Every construction bid depends on exact quantities and reliable pricing. Our cost estimation for contractors covers the major disciplines needed to complete bid preparation.",
  ctaLabel: "Get a Free Quote",
  ctaHref: MEP_PRE_BID_CONTACT_HASH,
} as const;

export const mepPreBidServiceFeatureCards: MepBimFeatureCard[] = [
  {
    title: "MEP Systems Quantification",
    description:
      "Detailed Pre-bid estimation for MEP and HVAC systems prepared according to SMACNA and NEC standards for HVAC, electrical and plumbing trades.",
    icon: "/images/mep/service-features/icon-fully-coordinated-mepf.svg",
  },
  {
    title: "Detailed Quantity Takeoffs",
    description:
      "Accurate Pre-Bid Quantity Takeoff from 2D drawings, PDF plans and BIM models to cover architectural, structural and MEP scopes.",
    icon: "/images/mep/service-features/icon-scheduling-boq.svg",
  },
  {
    title: "Bid-Ready Cost Reports",
    description:
      "Professional pre-bid estimates for MEP & HVAC systems with trade summaries, pricing breakdowns, inclusions, exclusions & submission ready documents.",
    icon: "/images/mep/service-features/icon-constructability-review.svg",
  },
  {
    title: "Cost Mapping",
    description:
      "Project quantities were compared to current price databases and trade-specific cost libraries for reliable construction pre-bid cost estimating.",
    icon: "/images/mep/service-features/icon-code-compliant-validation.svg",
  },
];

export const mepPreBidWhatYouGetSection = {
  tag: "What You Get",
  titleLine1: "What You Get with Our\n",
  titleLine2: "Pre-Bid Estimation Services",
  titleMaxWidth: 647,
  description:
    "Our construction pre-bid cost estimation provides you with the clarity of cost and quantity that is required to prepare competitive bidding proposals.",
  descriptionMaxWidth: 622,
  ctaLabel: "Let's Talk",
  ctaHref: ROUTES.contact,
} as const;

export const mepPreBidWhatYouGetCards = [
  {
    title: "Cost Estimates in Detail",
    text: "Receive line-by-line estimates for materials, equipment and labor that close pricing gaps and improve bid accuracy.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Material & Labor Detail",
    text: "Our estimators create accurate project cost estimates using current market pricing and regional labor rates.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Faster Bid Preparation",
    text: "Cut down on how much time your team spends looking through drawings and figuring out quantities, so they can reply to more bid.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Lower Cost Overruns",
    text: "Spot mismatched drawing details, along with gaps in the scope, before you submit the bid to lower risk of unexpected project budget.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
];

export const mepPreBidTechnologyStackSection = {
  tag: "Tools & Platforms",
  titleLine1: "We Use to Deliver ",
  titleAccent: "Pre-Bid Estimation Services",
  description:
    "Leveraging industry-leading BIM software to create accurate, coordinated, and constructible MEP models for complex projects.",
} as const;

export const mepPreBidTechnologyStackToolsRowOne: MepBimTechnologyTool[] =
  mepBimTechnologyStackToolsRowOne;
export const mepPreBidTechnologyStackToolsRowTwo: MepBimTechnologyTool[] =
  mepBimTechnologyStackToolsRowTwo;

export const mepPreBidDeliverablesSection = {
  tag: "What We Deliver",
  titleLead: "What We Offer With Our\n",
  titleAccent: "MEP Estimating Services",
  description:
    "Partner with a reliable Pre-bid Estimation Services Company for standardized, bid-ready documents that allow for quicker reviews and self-assured bid submissions.",
} as const;

export const mepPreBidDeliverablesCards: MepBimMeasurableResultCard[] = [
  {
    valuePrefix: "0",
    value: "1",
    valueColor: "#D70416",
    title: "Reports on Cost Estimates",
    description:
      "In-depth reports containing pricing, project assumptions and scope notes for each trade to assist you in placing an educated bid.",
  },
  {
    valuePrefix: "0",
    value: "2",
    valueColor: "#42AA32",
    title: "Bill of Quantities",
    description:
      "Detailed BOQ's with quantities, units and material specifications as per project drawings and scope.",
  },
  {
    valuePrefix: "0",
    value: "3",
    valueColor: "#2299D6",
    title: "Bidding Documents",
    description:
      "Bid documents are well organized and include cost estimates, pricing summaries and scope of contractor submissions.",
  },
  {
    valuePrefix: "0",
    value: "4",
    valueColor: "#F0B300",
    title: "MEP Cost Breakdown Sheets",
    description:
      "Our MEP Estimating Services include accurate quantities, labor factors and cost allocations for breakdowns such as HVAC, electrical and plumbing systems.",
  },
];

export const mepPreBidWorkflowSection = {
  tag: "Our BIM Workflow",
  titleLine1: "Our Workflow for ",
  titleLine2: "Pre-bid Estimation",
  description:
    "All estimates are based on a proven 6 step workflow that aligns quantities, pricing and documentation along with your scope of work.",
};

export const mepPreBidWorkflowSteps = [
  {
    number: "01",
    title: "Project Document Analysis",
    text: "Our estimators interpret architectural, structural and MEP drawings to get a complete understanding of the scope of the project.",
  },
  {
    number: "02",
    title: "LOD Modeling",
    text: "Quantities are obtained from the correct Level of Development by creating or modifying Revit models as required.",
  },
  {
    number: "03",
    title: "Digital Take Off",
    text: "Bluebeam and Revit help our team to create an reliable Pre-Bid Quantity Takeoff from project drawings and BIM models.",
  },
  {
    number: "04",
    title: "Local Market Pricing",
    text: "The Realistic Construction Prebid Cost Estimation is prepared keeping in mind the local material prices and the regional labor rates.",
  },
  {
    number: "05",
    title: "Risk & Gap Assessment",
    text: "Before submitting a bid, our MEP engineers review the scope to look for missing information, overlaps and possible pricing risks.",
  },
  {
    number: "06",
    title: "Quality Audit & Delivery",
    text: "Each estimate is reviewed by a senior estimator before providing full bid ready reports.",
  },
];

export const mepPreBidWhyChooseSection = {
  tag: "Why Choose Us",
  titleLead: "When to Collaborate with ",
  titleAccent: "Pre-bid Estimation Services Provider",
  description:
    "Certain projects demand more estimating accuracy. These are the stages where a reliable pre-bid estimation services provider adds the most value.",
  ctaLabel: "Contact Now",
  ctaHref: MEP_PRE_BID_CONTACT_HASH,
} as const;

export const mepPreBidWhyChooseCards: MepBimUseCaseCard[] = [
  {
    title: "Stage Tender",
    description:
      "Reliable cost estimating to prepare competitive bids for government and private sector projects.",
    icon: tenderStageIcon,
  },
  {
    title: "Resource Constraints",
    description:
      "Bid deadlines are tight and your in-house estimating team is stretched thin.",
    icon: resourceConstraintsIcon,
  },
  {
    title: "Complex MEP Projects",
    description:
      "Support detailed estimating by trade for HVAC, electrical and plumbing bids.",
    icon: complexMepProjectsIcon,
  },
  {
    title: "Validation of the budget",
    description:
      "Have internal estimates checked by an independent review before submitting the final bid.",
    icon: budgetValidationIcon,
  },
];

export const mepPreBidImpactSection = {
  tag: "Impact Workflow",
  titleLead: "MEP and HVAC Systems in ",
  titleAccent: "Your BIM Workflow",
  description:
    "Our Pre-Construction Estimating Services will fit into your bid process and help predict costs to improve project results.",
} as const;

export const mepPreBidImpactCards: MepBimMeasurableResultCard[] = [
  {
    value: "25%",
    valueColor: "#42AA32",
    title: "more accurate bids",
    description: "Bid on actual volumes and current prices, not on assumptions.",
  },
  {
    value: "40%",
    valueColor: "#42AA32",
    title: "Win Rate",
    description: "Give clear and well-structured estimates to give confidence to clients.",
  },
  {
    value: "15%",
    valueColor: "#42AA32",
    title: "Higher Profit Margins",
    description: "Understand scope gaps and pricing risks before you submit a bid.",
  },
  {
    value: "35%",
    valueColor: "#42AA32",
    title: "Less Risk of Rework",
    description:
      "Build estimates from quantities proven to avoid costly post-award revisions.",
  },
];

export const mepPreBidResourcesSection = {
  tag: "Resources",
  titleLine1: "Resources on ",
  titleLine2: "Pre-Bid Estimation",
  description:
    "Explore technical thought leadership and actionable strategies designed to optimize your production workflows and scale without compromising standards.",
  viewAllHref: "/bim-resources/",
  serviceFilter: "MEP Engineering Firms",
} as const;

export const mepPreBidProjectCta = {
  titleLine1: "Data-Driven MEP Estimating Services for ",
  titleLine2: "Winning More Bids",
  description:
    "Choose a trusted Pre-bid Estimation Services Provider to receive precise, bid-ready estimates to enable contractors and MEP companies to develop winning bids.",
  cta: "Contact Us",
  ctaHref: ROUTES.contact,
} as const;

export const mepPreBidFaqSection = {
  tag: "FAQs",
  description:
    "Find answers to common questions about our services, workflows, deliverables, timelines, and project collaboration.",
} as const;

export const mepPreBidFaqs = [
  {
    q: "What information do you need to prepare a pre-bid estimate?",
    a: "Normally, we require project drawings, specifications, scope documents and available BIM models. Having the full project information allows our estimators to provide a more accurate bid.",
  },
  {
    q: "How accurate is a pre-bid estimate?",
    a: "Accuracy is determined by the design stage and quality of project documentation. As the details of the project get more complete, the estimate can be further refined.",
  },
  {
    q: "How long does it take to complete a pre-bid estimate?",
    a: "The turnaround depends on project size, complexity and document quality. Most estimates are delivered within a few business days after receiving the required information.",
  },
  {
    q: "What does your pre-bid estimation service include?",
    a: "Our Pre-Bid Estimation Services include scope review, pre-bid quantity takeoff, pricing analysis and bid-ready cost reports. We also help with sub-contractor bid comparison and cost planning as needed.",
  },
  {
    q: "How much do pre-bid estimation services cost?",
    a: "Costs depend on the size of the project the scope of work, estimate complexity and delivery timeframe. We will provide pricing once we have reviewed your project requirements.",
  },
];

export const mepPreBidFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: mepPreBidFaqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};
