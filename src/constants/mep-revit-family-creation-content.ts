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

const accurateSchedulingDocumentationIcon = "/image/mep-revit-family/accurate-scheduling-documentation-icon.png";
const catalogsOfTypesScalableDeploymentIcon = "/image/mep-revit-family/catalogs-of-types-scalable-deployment-icon.png";
const codeComplianceDataIntegrationIcon = "/image/mep-revit-family/code-compliance-data-integration-icon.png";
const establishingRobustBimStandardsIcon = "/image/mep-revit-family/establishing-robust-bim-standards-icon.png";
const fullyParametricRevitFamilyIcon = "/image/mep-revit-family/fully-parametric-revit-family-icon.png";
const improvedModelPerformanceIcon = "/image/mep-revit-family/improved-model-performance-icon.png";
const lodAndBepComplianceIcon = "/image/mep-revit-family/lod-and-bep-compliance-icon.png";
const optimizingModelingVelocityIcon = "/image/mep-revit-family/optimizing-modeling-velocity-icon.png";
const professionalRevitLibrariesScaleIcon = "/image/mep-revit-family/professional-revit-libraries-scale-icon.png";
const standardComponentsForMepIcon = "/image/mep-revit-family/standard-components-for-mep-icon.png";
const unifyingDistributedTeamWorkflowsIcon = "/image/mep-revit-family/unifying-distributed-team-workflows-icon.png";

export const MEP_REVIT_FAMILY_CREATION_CONTACT_ID = "mep-revit-family-creation-page-contact";
export const MEP_REVIT_FAMILY_CREATION_CONTACT_HASH = `#${MEP_REVIT_FAMILY_CREATION_CONTACT_ID}`;

export const mepRevitFamilyCreationHero = {
  tag: "MEP Revit Family Creation",
  titleLead: "Scalable MEP Revit Family Creation Services for\n",
  titleAccent: "Growing BIM Projects",
  description:
    "Our pre-vetted Revit expert provide custom Revit families and helping project teams maintain parametric accuracy, faster coordination and consistent BIM workflows.",
  ctaLabel: "Get a Free Quote",
  ctaHref: MEP_REVIT_FAMILY_CREATION_CONTACT_HASH,
  imageSrc: "/image/mep-revit-family-creation-banner.jpg",
  imageAlt: "mep-revit-family-creation-banner",
  copyMaxWidth: 703,
  descriptionMaxWidth: 699,
} as const;

export const mepRevitFamilyCreationTrustedBy: MepTrustedByContent = {
  titleAccent: "Trusted",
  titleLead: " By",
  items: [
    { dashColor: "#42AA32", label: "Specialty Subcontractors" },
    { dashColor: "#D70416", label: "General Contractors" },
    { dashColor: "#2299D6", label: "MEP Engineering Firms" },
    { dashColor: "#F0B300", label: "Building Consultants" },
  ],
};

export const mepRevitFamilyCreationIntro: MepOverviewIntroContent = {
  tag: "Overview",
  titleLead: "Advanced MEP Family Creation Services for ",
  titleAccent: "Parametric Efficiency",
  paragraph1: "Every ",
  paragraph1Bold: "BIM model performs better",
  paragraph1Tail:
    " when project teams use consistent Revit families. Generic or poorly structured content creates parameter mismatches, scheduling issues and coordination problems as the project develops.",
  paragraph2Lead: "As an experienced ",
  paragraph2Bold: "MEP Revit family creation",
  paragraph2Tail:
    " company in the USA, we build MEP Family that match your project standards and modeling requirements. Our Revit experts create structured parameters, optimized geometry and reusable content that enable accurate scheduling, reliable coordination and stable model performance.",
  mainImage: "/image/mep-revit-family-creation-overview.jpg",
  imageAlt: "mep-revit-family-creation-overview",
};

export const mepRevitFamilyCreationServiceFeaturesSection = {
  tag: "What you get",
  titleLead: "What You Get with Our\n",
  titleAccent: "MEP Family Creation Services",
  description:
    "Your reliable MEP family creation services provider offering high-performance parametric BIM content.",
  ctaLabel: "Get a Free Quote",
  ctaHref: MEP_REVIT_FAMILY_CREATION_CONTACT_HASH,
} as const;

export const mepRevitFamilyCreationServiceFeatureCards: MepBimFeatureCard[] = [
  {
    title: "Standard components for MEP",
    description:
      "Design reusable families to your company standards. The same components are used in different BIM projects by each project team.",
    icon: standardComponentsForMepIcon,
  },
  {
    title: "Fully Parametric Revit Family",
    description:
      "Flexible family with adjustable sizes and controlled parameters. It allows designers to switch configurations without having to rebuild components.",
    icon: fullyParametricRevitFamilyIcon,
  },
  {
    title: "Improved Model Performance",
    description:
      "Lightweight geometry and controlled detail keep Revit models responsive. Smaller families mean less loading time and better collaboration.",
    icon: improvedModelPerformanceIcon,
  },
  {
    title: "Accurate Scheduling & Documentation",
    description:
      "Use structured parameters that support reliable schedules, quantity takeoffs and construction documentation for the whole project.",
    icon: accurateSchedulingDocumentationIcon,
  },
  {
    title: "Connectivity of Intelligent Systems",
    description:
      "Set up connectors for coordinated MEP systems. All families utilize established engineering practices to ensure consistent system behavior.",
    icon: "/images/mep/service-features/icon-fully-coordinated-mepf.svg",
  },
  {
    title: "Scalable Deployment Catalogs",
    description:
      "Create different sizes and specifications of type catalogs. Families do not need to be duplicated as project teams can select the configuration they require.",
    icon: catalogsOfTypesScalableDeploymentIcon,
  },
  {
    title: "LOD and BEP Compliance",
    description:
      "Develop families that comply with the BIM Execution Plans and comply with LOD 300 or LOD 400 Revit families requirements and support NBIMS-US standards.",
    icon: lodAndBepComplianceIcon,
  },
  {
    title: "Code-Compliance Data Integration",
    description:
      "Embed structured metadata to help meet NFPA, NEC and IPC requirements so project teams can complete reviews with accurate project data.",
    icon: codeComplianceDataIntegrationIcon,
  },
];

export const mepRevitFamilyCreationServicesSection = {
  tag: "Our Comprehensive",
  titleLine1: "Complete Range of Custom ",
  titleLine2: "Revit Families for MEP",
  description:
    "Scalable Revit Mechanical, Plumbing, HVAC and Firefighting Family Creation built for consistent project data and reliable BIM coordination.",
  ctaLabel: "Start New Project",
  ctaHref: ROUTES.contact,
  wideCards: true,
  titleMaxWidth: 774,
} as const;

export const mepRevitFamilyCreationServiceCards = [
  {
    title: "Revit HVAC Family Creation",
    text: "We develop Revit HVAC Family Creation content with AHUs, VAV boxes and terminal units using correctly configured mechanical connectors for dependable airflow calculations and system coordination.",
    image: "/image/revit-hvac-family-creation.jpg",
  },
  {
    title: "Revit Mechanical Family Creation",
    text: "Our Revit Mechanical Family Creation services include pumps, valves, chillers, and related equipment with structured parameters, nested components and reusable metadata.",
    image: "/image/revit-mechanical-family-creation.jpg",
  },
  {
    title: "Revit Plumbing Family Creation",
    text: "Our Revit plumbing family creation includes fixtures, specialty valves and piping accessories with correctly positioned connectors that support slope calculations and fixture unit analysis.",
    image: "/image/revit-plumbing-family-creation.jpg",
  },
  {
    title: "Revit Electrical Family Creation",
    text: "We build distribution panels, switchgear, lighting fixtures and electrical equipment with voltage, phase and load parameters that support circuiting and scheduling.",
    image: "/image/revit-electrical-family-creation.jpg",
  },
  {
    title: "Firefighting Family Creation in Revit",
    text: "Our Revit firefighting family creation services include sprinklers, fire pumps, valves and alarm devices. The BIM contents are set up to meet system connectivity and design requirements of NFPA.",
    image: "/image/revit-firefighting-family-creation.jpg",
  },
  {
    title: "Parametric Equipment Supports",
    text: "We develop custom hanger families and seismic bracing families with common parameters and configurable options suitable for coordination and material schedules.",
    image: "/image/parametric-equipment-supports.jpg",
  },
];

export const mepRevitFamilyCreationDeliverablesSection = {
  tag: "What We Deliver",
  titleLine1: "What We Deliver with Our ",
  titleLine2: "MEP Family Creation Services",
  titleMaxWidth: 833,
  description:
    "High-performance Revit Family Creation for MEP developed to improve project consistency, modeling efficiency and documentation accuracy.",
  descriptionMaxWidth: 593,
  ctaLabel: "Get A Free Quote",
  ctaHref: "/contact-us",
} as const;

export const mepRevitFamilyCreationDeliverablesCards = [
  {
    title: "Ready to Use Parametric Revit Families",
    text: "Flexible and smart families that get updated to design changes, results in less rework and more efficient overall modeling.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Scalable Type Catalogs",
    text: "Simplify managing multiple sizes and configurations with no complex models, for faster selection and better project workflows.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Standardized Common Parameters Files",
    text: "Make sure you have consistent data across projects to improve schedule accuracy, coordination and downstream decision making.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Documentation Ready Components",
    text: "Families ready for use in drawings and schedules, without manual adjustment and faster construction documentation.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
];

export const mepRevitFamilyCreationTechnologyStackSection = {
  tag: "Tools & Platforms",
  titleLine1: "We Use to Deliver ",
  titleAccent: "MEP Revit Family Creation Services",
  description:
    "We use industry leading BIM software for accurate, coordinated and construction ready MEP families for complex projects.",
} as const;

export const mepRevitFamilyCreationTechnologyStackToolsRowOne: MepBimTechnologyTool[] = [
  { name: "Autodesk Revit", icon: "/icon/revit.png", iconWidth: 84, iconHeight: 84 },
  { name: "Lumion", icon: "/icon/lumion.png", iconWidth: 74, iconHeight: 74 },
  { name: "AutoCAD", icon: "/icon/autocad.png", iconWidth: 84, iconHeight: 84 },
  {
    name: "ReCap Pro",
    icon: "/image/ReCap-Pro-2023-lockup-Blk-OL-ADSK-No-Year-Stacked-1.jpg",
    iconWidth: 71,
    iconHeight: 66,
  },
  { name: "BIM 360", icon: "/image/bim-360.png", iconWidth: 66, iconHeight: 79 },
];

export const mepRevitFamilyCreationTechnologyStackToolsRowTwo: MepBimTechnologyTool[] = [
  { name: "Navis works", icon: "/icon/navisworks.png", iconWidth: 55, iconHeight: 85 },
  { name: "Revizto", icon: "/icon/revizto.png", iconWidth: 75, iconHeight: 75 },
  {
    name: "Bluebeam",
    icon: "/image/bluebeam-inc-vector-logo-1.jpg",
    iconWidth: 85,
    iconHeight: 91,
  },
];

export const mepRevitFamilyCreationWorkflowSection = {
  tag: "Our Workflow",
  titleLine1: "Our workflow for Revit ",
  titleLine2: "MEP Family Creation",
  description:
    "A systematic approach for developing parametric MEP families for design, coordination, and documentation.",
};

export const mepRevitFamilyCreationWorkflowSteps = [
  {
    number: "01",
    title: "Standards Review & Requirement Analysis",
    text: "Before we create any family we review manufacturer information, project standards and LOD requirements. This process ensures that every deliverable is in line with your BIM Execution Plan.",
  },
  {
    number: "02",
    title: "Family Structure and Parameter Setting",
    text: "We begin the modeling with our specialists defining the family categories, the hosting methods and the shared parameters. This is the basis for consistent scheduling and project data.",
  },
  {
    number: "03",
    title: "Geometry Generation & Constraints",
    text: "We use parametric constraints and nested components to generate accurate geometry. All families support flexible sizing and stable Revit performance.",
  },
  {
    number: "04",
    title: "Intelligent Connector Engineering",
    text: "Our team configures mechanical, electrical and plumbing connectors with the required system data. Engineers can use the families for coordinated design and engineering calculations.",
  },
  {
    number: "05",
    title: "Performance & flexibility testing",
    text: "Every family is tested for parameters before delivery. We also look at file size, constraints, and overall Revit performance to ensure that it is working reliably.",
  },
  {
    number: "06",
    title: "Final Delivery & Library Integration",
    text: "We provide verified .RFA files and type catalogs in a structured library format. Your project teams can add them directly to existing templates and BIM libraries.",
  },
];

export const mepRevitFamilyCreationOutsourcingGuideSection = {
  tag: "Outsourcing Guide",
  titleLead: "When You Need to Partner with ",
  titleAccent: "MEP Family Creation Services Provider",
  description:
    "Bring in a specialized MEP Family Creation Services Provider when project demands exceed your team's capacity, library standards, or delivery schedule.",
  ctaLabel: "Let's Talk",
  ctaHref: MEP_REVIT_FAMILY_CREATION_CONTACT_HASH,
} as const;

export const mepRevitFamilyCreationOutsourcingGuideCards: MepBimUseCaseCard[] = [
  {
    title: "Establishing Robust BIM Standards",
    description:
      "A new BIM standard needs more than a naming convention. We develop standardized families, parameters, and templates that give every project team a consistent starting point.",
    icon: establishingRobustBimStandardsIcon,
  },
  {
    title: "Professional Revit Libraries on a Larger Scale",
    description:
      "Revit libraries age and outdated content can slow down project delivery. We create manufacturer specific families that are consistent with current product data and your internal BIM standards.",
    icon: professionalRevitLibrariesScaleIcon,
  },
  {
    title: "Optimizing Modeling Velocity",
    description:
      "Project deadlines leave little time for repetitive family creation. Our team develops ready to use parametric content, allowing your modelers to focus on design and coordination.",
    icon: optimizingModelingVelocityIcon,
  },
  {
    title: "Unifying Distributed Team Workflows",
    description:
      "Multiple offices need the same family standards to maintain consistency. We build centralized Revit libraries that support common naming conventions, parameters and modeling practices.",
    icon: unifyingDistributedTeamWorkflowsIcon,
  },
];

export const mepRevitFamilyCreationMeasurableOutcomesSection = {
  tag: "Measurable Outcomes",
  titleLead: "Impact on Your ",
  titleAccent: "BIM Workflow",
  description: "High quality custom Revit families for MEP for measurable outcomes.",
} as const;

export const mepRevitFamilyCreationMeasurableOutcomeCards: MepBimMeasurableResultCard[] = [
  {
    value: "25%",
    valueColor: "#42AA32",
    title: "Faster Model Speed",
    description:
      "Standardized parametric families do not necessitate repeated modeling. Project teams complete modeling tasks more quickly.",
  },
  {
    value: "90%",
    valueColor: "#42AA32",
    title: "Standardization of Deliverables",
    description:
      "Typical families keep drawings, schedules and BIM models in sync across the phases of the project.",
  },
  {
    value: "40%",
    valueColor: "#42AA32",
    title: "Fewer Errors in Documentation",
    description:
      "Eliminates manual data entry via structured parameters. Teams generate schedules and documentation more consistently.",
  },
  {
    value: "30%",
    valueColor: "#42AA32",
    title: "Better Cross-Team Coordination",
    description:
      "Standardized families enable architects, engineers and contractors to work from the same project data through the design.",
  },
];

export const mepRevitFamilyCreationResourcesSection = {
  tag: "Resources",
  titleLine1: "Resources on ",
  titleLine2: "Revit Family Creation",
  description:
    "Explore technical thought leadership and actionable strategies designed to optimize your production workflows and scale without compromising standards.",
  viewAllHref: "/bim-resources/",
  serviceFilter: "MEP Engineering Firms",
} as const;

export const mepRevitFamilyCreationProjectCta = {
  titleLine1: "Your Reliable MEP Revit Experts Are Ready to ",
  titleLine2: "Support Your Next Project",
  description:
    "Our MEP Revit Family Creation Services provide parametric families that fit your BIM standards, support project coordination, and reduce repetitive modeling work.",
  cta: "Book a Quick Call",
  ctaHref: ROUTES.contact,
} as const;

export const mepRevitFamilyCreationFaqSection = {
  tag: "FAQs",
  description:
    "Get the answers to frequently asked questions about our MEP Revit family creation services, workflows, deliverables, timelines and project collaboration.",
} as const;

export const mepRevitFamilyCreationFaqs = [
  {
    q: "What inputs do you need to start the family creation process?",
    a: "Before modeling starts, we review manufacturer datasheets, CAD drawings, PDFs, dimensions and your BIM standards. We use those inputs to create families that are in line with your shared parameters and internal standards.",
  },
  {
    q: "Can you match our specific company standards and templates?",
    a: "Yes. We build every family around your naming conventions, shared parameters and LOD or LOI requirements. Our MEP Revit family experts use your existing templates and reduce the need for manual adjustments during project execution.",
  },
  {
    q: "How do you maintain high performance without bloating file sizes?",
    a: "We keep every component efficient, since large families lead to lower project performance. Our specialists use optimized geometry, nested families and controlled parameters to keep it flexible without making the file size unnecessarily large.",
  },
  {
    q: "How is the service priced, and what is the typical turnaround?",
    a: "Pricing depends on family complexity, required parameters and project volume. Standard MEP Family Creation Services are typically delivered within 48 to 72 hours. More complex parametric equipment may require further review and testing.",
  },
  {
    q: "Who owns the families and what about data security?",
    a: "You get full ownership of all .RFA files and type catalogs upon project delivery. We work under signed NDAs and keep your project information protected throughout the engagement. We also share library updates when software versions or manufacturer specifications change.",
  },
] as const;

export const mepRevitFamilyCreationFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: mepRevitFamilyCreationFaqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};
