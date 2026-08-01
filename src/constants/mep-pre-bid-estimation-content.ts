import budgetValidationIcon from "@/assets/images/budget-validation-icon.png";
import complexMepProjectsIcon from "@/assets/images/complex-mep-projects-icon.png";
import preBidEstimationBanner from "@/assets/images/pre-bid-estimation-service-banner.png";
import preConstructionBidEstimationOverview from "@/assets/images/pre-construction-bid-estimation-overview.png";
import resourceConstraintsIcon from "@/assets/images/resource-constraints-icon.png";
import tenderStageIcon from "@/assets/images/tender-stage-icon.png";
import { benefitIconColored, benefitIconMuted } from "@/constants/benefit-icons";
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

export const mepPreBidHero = {
  tag: "Pre-Bid Estimation",
  titleLead: "Pre-Bid Estimation Service to ",
  titleAccent: "Reduce Bid Uncertainty",
  description:
    "Get bid-ready cost estimates from experienced estimators using accurate quantity takeoffs, current pricing and trade-specific expertise.",
  ctaLabel: "Get a Free Quote",
  imageSrc: preBidEstimationBanner,
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
  mainImage: preConstructionBidEstimationOverview.src,
  imageAlt: "Pre-Construction Bid Estimation overview",
};

export const mepPreBidServiceFeaturesSection = {
  tag: "Service Features",
  titleLead: "Complete Range of Construction\n",
  titleAccent: "Pre-Bid Cost Estimation Services",
  description:
    "Every construction bid depends on exact quantities and reliable pricing. Our cost estimation for contractors covers the major disciplines needed to complete bid preparation.",
  ctaLabel: "Get A Free Quote",
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
  ctaHref: "/contact-us",
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
} as const;

export const mepPreBidWhyChooseCards: MepBimUseCaseCard[] = [
  {
    title: "Stage Tender",
    description:
      "Reliable cost estimating to prepare competitive bids for government and private sector projects.",
    icon: tenderStageIcon.src,
  },
  {
    title: "Resource Constraints",
    description:
      "Bid deadlines are tight and your in-house estimating team is stretched thin.",
    icon: resourceConstraintsIcon.src,
  },
  {
    title: "Complex MEP Projects",
    description:
      "Support detailed estimating by trade for HVAC, electrical and plumbing bids.",
    icon: complexMepProjectsIcon.src,
  },
  {
    title: "Validation of the budget",
    description:
      "Have internal estimates checked by an independent review before submitting the final bid.",
    icon: budgetValidationIcon.src,
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
  ctaHref: "/contact-us",
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
    a: "Accuracy depends on drawing completeness and scope clarity. Our estimators use BIM-supported takeoffs, current pricing libraries, and senior QC review to deliver bid-ready estimates aligned with SMACNA, NEC, and CSI standards.",
  },
  {
    q: "How long does it take to complete a pre-bid estimate?",
    a: "Turnaround depends on project size, disciplines, and document quality. Share your drawings and deadline and we will confirm a delivery schedule that fits your bid submission window.",
  },
  {
    q: "What does your pre-bid estimation service include?",
    a: "Typical deliverables include detailed cost estimate reports, bill of quantities, bidding documents, and MEP cost breakdown sheets for HVAC, electrical, and plumbing scopes.",
  },
  {
    q: "How much do pre-bid estimation services cost?",
    a: "Pricing is based on project scope, trades covered, and document complexity. Send your package for a clear quote tailored to your bid requirements.",
  },
];
