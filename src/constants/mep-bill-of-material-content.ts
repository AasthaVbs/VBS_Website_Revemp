import billMateriaServicesBanner from "@/assets/images/bill-materia-services-banner.png";
import billMateriaServicesOverview from "@/assets/images/bill-materia-services-overview.png";
import costEstimationDuringPreConstructionIcon from "@/assets/images/cost-estimation-during-pre-construction-icon.png";
import largeScaleProcurementIcon from "@/assets/images/large-scale-procurement-icon.png";
import mepCoordinationComplexIcon from "@/assets/images/mep-coordination-complex-icon.png";
import modelingForFabricationIcon from "@/assets/images/modeling-for-fabrication-icon.png";
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

const BOM_COVERAGE_IMAGE = "/image/Bill-of-Material-(BOM)-Services.jpg";

export const mepBomHero = {
  tag: "Bill of Material (BOM)",
  titleLead: "Accurate Bill of Material Services to ",
  titleAccent: "Eliminate Procurement Delays",
  description:
    "Our pre-vetted MEP experts provide accurate material takeoffs by using coordinated BIM models and helping procurement teams order correctly and keep projects on schedule.",
  ctaLabel: "Get a Free Quote",
  imageSrc: billMateriaServicesBanner,
  imageAlt: "Bill of Material Services",
  copyMaxWidth: 692,
  descriptionMaxWidth: 680,
} as const;

export const mepBomTrustedBy: MepTrustedByContent = {
  titleAccent: "Trusted",
  titleLead: " By",
  items: [
    { dashColor: "#D70416", label: "MEP Consultants" },
    { dashColor: "#42AA32", label: "General Contractors" },
    { dashColor: "#F0B300", label: "Fabricators" },
    { dashColor: "#2299D6", label: "Developers" },
  ],
};

export const mepBomIntro: MepOverviewIntroContent = {
  tag: "Overview",
  titleLead: "Remove Cost Ambiguity with Precise ",
  titleAccent: "Bill of Quantities (BOQ) Services",
  paragraph1:
    "The inaccurate figures related to quantity can cause cost overruns, delays in procurement and inefficiencies on site. ",
  paragraph1Bold: "Material miscalculations",
  paragraph1Tail:
    " using traditional quantity takeoff methods are time consuming and error-prone. Especially for complex multidisciplinary projects.",
  paragraph2Bold: "Our BOM services",
  paragraph2Tail:
    " are built on US standards like CSI Master Format and Uniformat, which allow a systematic and standardized classification of materials. We use BIM-based takeoff and Revit automation to extract and validate quantities. These takeoff quantities are consistent with the design intent. They provide reliable procurement, costing and construction planning.",
  mainImage: billMateriaServicesOverview.src,
  imageAlt: "Bill of Material Services overview",
};

export const mepBomServiceFeaturesSection = {
  tag: "What you get",
  titleLead: "What You Get with Our ",
  titleAccent: "Bill of Materials (BOM) Services",
  description:
    "Our MEP experts excel at transforming your raw design data into BIM enabled, structured and actionable material intelligence to improve your construction cost estimating.",
  ctaLabel: "Get A Free Quote",
} as const;

export const mepBomServiceFeatureCards: MepBimFeatureCard[] = [
  {
    title: "Parametric Quantity Take Off",
    description:
      "Using Work Breakdown Structures, we develop detailed QTO schedules, so that procurement teams can confidently account for every component.",
    icon: "/images/mep/service-features/icon-scheduling-boq.svg",
  },
  {
    title: "Dynamic BIM Data Extraction",
    description:
      "Our engineers retrieve material data directly from the coordinated BIM models using Revit and Navisworks APIs. Realtime model updates keep BOM data up to date with the latest design.",
    icon: "/images/mep/service-features/icon-fully-coordinated-mepf.svg",
  },
  {
    title: "Automation of Parameter Validation",
    description:
      "Our quality team uses rule based validation to compare BIM parameters with project specifications before procurement, that minimizes quantity discrepancies and enhances reporting data.",
    icon: "/images/mep/service-features/icon-constructability-review.svg",
  },
  {
    title: "High fidelity interoperability",
    description:
      "IFC or XML outputs that support 5D BIM workflows are available. These structured files replace the geometry-based material information of manual 2D quantity estimation.",
    icon: "/images/mep/service-features/icon-code-compliant-validation.svg",
  },
];

export const mepBomServicesSection = {
  tag: "Our Comprehensive",
  titleLine1: "Complete Coverage for ",
  titleLine2: "Bill of Materials (BOM) Services",
  description:
    "Multidisciplinary material quantification tailored for real-world construction and procurement needs.",
  ctaLabel: "Start New Project",
  ctaHref: "/contact-us",
  wideCards: true,
  titleMaxWidth: 875,
} as const;

export const mepBomServiceCards = [
  {
    title: "Pipes and Duct Systems",
    text: "Detailed quantity extraction for HVAC ducts, chilled water, drainage, and piping networks to support accurate fabrication, installation sequencing, and coordination.",
    image: BOM_COVERAGE_IMAGE,
  },
  {
    title: "Fixtures and Fittings",
    text: "Valves, joints, hangers, supports and connectors are quantified from project specifications, results in reduced procurement errors and site discrepancies during installation.",
    image: BOM_COVERAGE_IMAGE,
  },
  {
    title: "MEP Equipment Takeoff",
    text: "BIM-based quantity takeoffs of AHUs, pumps, chillers, electrical panels and other mechanical equipment help in coordinated planning and procurement.",
    image: BOM_COVERAGE_IMAGE,
  },
  {
    title: "Parts of Electrical Systems",
    text: "Conduits, cable trays, wiring, switch gear, fixtures, etc., are pulled out to help in procurement, installation planning and accurate load calculations.",
    image: BOM_COVERAGE_IMAGE,
  },
  {
    title: "Materials in Plumbing System",
    text: "Where required, sanitary, domestic water and storm water components are quantified according to approved designs and maintained consistently throughout onsite installation activities.",
    image: BOM_COVERAGE_IMAGE,
  },
  {
    title: "Components of HVAC systems",
    text: "Diffusers, dampers, insulation and duct accessories for efficient system installation and performance enhancement quantities.",
    image: BOM_COVERAGE_IMAGE,
  },
  {
    title: "Custom MEP Material Segmentation",
    text: "Materials are categorized by CSI MasterFormat or project specific standards that improve traceability and management of procurement during handover and stakeholder review.",
    image: BOM_COVERAGE_IMAGE,
  },
  {
    title: "MEP Data Output In a Concerted Manner",
    text: "Integrated BOM data that is aligned with the coordinated BIM models reduces coordination issues and helps achieve smoother construction execution for clients.",
    image: BOM_COVERAGE_IMAGE,
  },
];

export const mepBomDeliverablesSection = {
  tag: "What We Deliver",
  titleLine1: "What We Provide in ",
  titleLine2: "Quantity Take-Off Services",
  titleMaxWidth: 682,
  description:
    "Outputs optimized for 5D BIM integration, providing high fidelity data for accurate cost estimation and streamlined construction procurement workflows.",
  descriptionMaxWidth: 694,
  ctaLabel: "Get A Free Quote",
  ctaHref: "/contact-us",
} as const;

export const mepBomDeliverablesCards = [
  {
    title: "BIM Quantity Take-off",
    text: "Get better quantity information from coordinated MEP models and you'll be able to budget faster, avoid surprises and make more confident pre-construction decisions.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Complete List of Components",
    text: "Streamline fabrication, avoid costly delays and ensure accurate ordering from procurement teams with clear metadata for MEP inventories.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Bill of Quantities Certified",
    text: "Get standardized BOQ documentation that offers more clarity in bidding, better cost control and more reliable estimates across MEP discipline.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Cut Lists & Material Schedules",
    text: "Receive fabrication-ready cut-lists and schedules that minimize waste, optimize installation planning and keep the projects flowing efficiently at the job site overall.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
];

export const mepBomTechnologyStackSection = {
  tag: "Tools & Platforms",
  titleLine1: "We Use to Deliver ",
  titleAccent: "Bill of Material (BOM) Services",
  description:
    "Leveraging industry-leading BIM software to create accurate, coordinated, and constructible MEP models for complex projects.",
} as const;

export const mepBomTechnologyStackToolsRowOne: MepBimTechnologyTool[] =
  mepBimTechnologyStackToolsRowOne;
export const mepBomTechnologyStackToolsRowTwo: MepBimTechnologyTool[] =
  mepBimTechnologyStackToolsRowTwo;

export const mepBomWorkflowSection = {
  tag: "Our Workflow",
  titleLine1: "Our Bill of Material (BOM) ",
  titleLine2: "Workflow",
  description:
    "A structured workflow that extracts, validates, and organizes material quantities for accurate procurement and project planning.",
};

export const mepBomWorkflowSteps = [
  {
    number: "01",
    title: "Data Collection and Scope Definition",
    text: "Gather BIM models, design drawings and the specifications, then analyze them to sort out what's in scope and how it conforms to the project requirements, also to the documentation standards.",
  },
  {
    number: "02",
    title: "BIM-Driven Quantity Take-Off",
    text: "Use BIM tools for model-based QTO, so we can pull material quantities across MEP systems, which then feeds the next step processing workflows in a more accurate way.",
  },
  {
    number: "03",
    title: "Cross-Check & Data Validation",
    text: "Re-check the quantities against design intent, the specifications and the coordinated BIM model. The goal is that everything stays accurate, complete, and consistent across all disciplines.",
  },
  {
    number: "04",
    title: "Classification and Standardization",
    text: "Arrange the structure material information by CSI Master format and Uniformat, and end up with standardized BOQ outputs. This helps for 5D BIM, and also for cost estimation workflows, without a lot of manual rework.",
  },
  {
    number: "05",
    title: "Quality Control and Compliance Verification",
    text: "Perform multilevel QC to produce material data that are code compliant, buildable, and dependable. Tie it back to NEC, SMACNA, ASHRAE, and IPC standards as needed.",
  },
  {
    number: "06",
    title: "BOQ Compilation & Final Submission",
    text: "Bring the validated quantities together into structured Bill of Quantities reports, using Excel based outputs. Then we use those results for cost estimation, procurement, and planning, all in one submission.",
  },
];

export const mepBomOutsourcingGuideSection = {
  tag: "Outsourcing Guide",
  titleLead: "When You Should Work With a ",
  titleAccent: "Bill of Material Services Provider",
  description:
    "Outsource your BOM creation to improve quantity accuracy, reduce manual effort and speed up project decision making.",
  ctaLabel: "Let's Talk",
} as const;

export const mepBomOutsourcingGuideCards: MepBimUseCaseCard[] = [
  {
    title: "Cost Estimation During Pre-construction",
    description:
      "Collaborate when true and accurate 5D cost baseline is needed for high fidelity Quantity Takeoff and to minimize cost risk in competitive bidding.",
    icon: costEstimationDuringPreConstructionIcon.src,
  },
  {
    title: "Complex MEP Coordination",
    description:
      "Engage when complex MEP systems require micro level tracking of subcomponents to make sure spatial coordination aligns with actual procurement and installation.",
    icon: mepCoordinationComplexIcon.src,
  },
  {
    title: "Large Scale Procurement",
    description:
      "Use BOM services to source long-lead equipment and bulk material orders with validated parametric data to help avoid costly logistical delays and overages.",
    icon: largeScaleProcurementIcon.src,
  },
  {
    title: "Modeling for Fabrication",
    description:
      "Work together when moving to LOD 400 to create accurate cut-lists and assembly schedules, increasing off-site assembly and reducing waste on the job site.",
    icon: modelingForFabricationIcon.src,
  },
];

export const mepBomMeasurableOutcomesSection = {
  tag: "Measurable Outcomes",
  titleLead: "How It Helps Your ",
  titleAccent: "BIM Workflow",
  description:
    "Apply 5D BIM integrated BOM outputs for data driven decision making to improve estimation accuracy, procurement efficiency and cost control in complex construction workflows.",
} as const;

export const mepBomMeasurableOutcomeCards: MepBimMeasurableResultCard[] = [
  {
    value: "30%",
    valueColor: "#42AA32",
    title: "Improved Cost Management",
    description:
      "Reliable quantities based on BIM are the basis for reliable budgeting minimizing variations in costs and improving the financial planning during the project.",
  },
  {
    value: "40%",
    valueColor: "#42AA32",
    title: "Less Material Waste",
    description:
      "The validated BOM and BOQ outputs help procurement teams order the right quantities, which reduces excess inventory and material waste.",
  },
  {
    value: "50%",
    valueColor: "#42AA32",
    title: "Faster Quantity extraction",
    description:
      "BIM based Quantity TakeOff speeds up the extraction of quantities, reduces manual effort and improves project turnaround time.",
  },
  {
    value: "35%",
    valueColor: "#42AA32",
    title: "Improved Estimation Accuracy",
    description:
      "Standardized BOQ data and coordinated BIM models provide estimators with reliable quantity data resulting in improved project forecasting accuracy.",
  },
];

export const mepBomResourcesSection = {
  tag: "Resources",
  titleLine1: "Resources on ",
  titleLine2: "Bill of Material (BOM) Services",
  description:
    "Explore technical thought leadership and actionable strategies designed to optimize your production workflows and scale without compromising standards.",
  viewAllHref: "/bim-resources/",
  serviceFilter: "MEP Engineering Firms",
} as const;

export const mepBomProjectCta = {
  titleLine1: "Don't Let Manual Errors ",
  titleLine2: "Ruin Schedules or Squeeze Project Margins",
  description:
    "Use our Bill of Material (BOM) Services for faster procurement, enhanced accuracy and timely project execution.",
  cta: "Book a Quick Call",
  ctaHref: "/contact-us",
} as const;

export const mepBomFaqSection = {
  tag: "FAQs",
  description:
    "Explore answers to common questions about our services, workflows, deliverables, timelines, and project collaboration.",
} as const;

export const mepBomFaqs = [
  {
    q: "How do you update the BOM to the latest design?",
    a: "We have live sync tools inside Revit. Every time the BIM model is changed in the design our extraction process updates the quantities so the BOM is always reflective of the current design iteration.",
  },
  {
    q: "How accurate is the BOM and how do you validate?",
    a: "Quantities are extracted from coordinated BIM models and validated against project specifications, CSI MasterFormat / Uniformat classifications, and multilevel QC checks before delivery.",
  },
  {
    q: "In what form will the BOM be handed over?",
    a: "Deliverables typically include structured Bill of Quantities reports, Excel-based schedules, cut lists, and optional IFC or XML outputs that support 5D BIM and procurement workflows.",
  },
  {
    q: "How much do you charge for your MEP BOM services?",
    a: "Pricing depends on project scope, disciplines covered, LOD, and deliverable format. Share your drawings or models and we will provide a clear quote for your Bill of Material requirements.",
  },
  {
    q: "Do you have discipline specific BOMs?",
    a: "Yes. We produce discipline-specific and multidisciplinary BOM / BOQ packages covering HVAC, piping, plumbing, electrical, fixtures, equipment, and custom CSI-based material segmentation.",
  },
];
