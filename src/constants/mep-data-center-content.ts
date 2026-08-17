import { benefitIconColored, benefitIconMuted } from "@/constants/benefit-icons";
import type {
  MepBimFeatureCard,
  MepBimTechnologyTool,
  MepBimUseCaseCard,
  MepOverviewIntroContent,
  MepTrustedByContent,
} from "@/constants/mep-bim-modelling-content";

const bimForFacilityManagementIcon = "/image/Label/bim-for-facility-managementicon-icon.png";
const cableTrayRoutingOptimizationIcon = "/image/Label/cable-tray-routing-optimization-icon.png";
const clashDetectionAndCoordinationIcon = encodeURI("/image/Label/clash-detection and coordination-icon.png");
const fabricationSpoolDrawingsIcon = "/image/Label/fabrication-spool-drawings-icon.png";
const fabricationModelingApproachIcon = "/image/fabrication-modeling-approach-icons.png";
const globalBimStandardsComplianceIcon = "/image/global-bim-standards-compliance-icons.png";
const multiTimeZoneAvailabilityIcon = "/image/multi-time-zone-availability-icon.png";
const prefabricationModularBimIcon = "/image/Label/prefabrication-modular-bim-icon.png";
const scanToBimAsBuiltModelingIcon = "/image/Label/scan-to-bim-as-built-modeling-icon.png";
const scalableTeamsForAnyProjectSizeIcon = "/image/scalable-teams-for-any-project-size-icons.png";
const upscaleImageIcon = encodeURI("/image/source/upscale_image [Upscaled].png");
const topMepBimExpertsIcon = "/image/top-mep-bim-experts-icons.png";

export const mepDataCenterHero = {
  tag: "MEP BIM for data Canters",
  titleLead: "Fabrication-Ready\n",
  titleAccent: "MEP BIM Services for Data Centers",
  description:
    "Our pre-vetted BIM team helps contractors, consultants, and developers deliver mission-critical facilities with coordinated MEP models built for construction, fabrication, and long-term operations.",
  ctaLabel: "Get a Free Quote",
  imageSrc: "/image/mep-bim-data-canter-banner.png",
  imageAlt: "mep-bim-data-canter-banner",
  copyMaxWidth: 550,
  descriptionMaxWidth: 580,
} as const;

export const mepDataCenterTrustedBy: MepTrustedByContent = {
  titleAccent: "Trusted",
  titleLead: " By",
  items: [
    { dashColor: "#D70416", label: "Data Center Developers & Operators" },
    { dashColor: "#42AA32", label: "MEP Consultants & Engineers" },
    { dashColor: "#F0B300", label: "MEP Contractors" },
    { dashColor: "#2299D6", label: "General Contractors (GCs)" },
  ],
};

export const mepDataCenterIntro: MepOverviewIntroContent = {
  tag: "Overview",
  titleLead: "Data Center MEP BIM Services for ",
  titleAccent: "Mission-Critical Facilities",
  paragraph1:
    "Data centers involve complex MEP and fire protection systems within dense construction environments. Tight clearances, heavy cable routing, and fast-track schedules increase coordination challenges, often leading to clashes, delays, and rework. Our team delivers specialized Data Center MEP Engineering and BIM Coordination services to improve constructability, installation accuracy, and coordination efficiency for mission-critical projects.",
  paragraph2Lead: "What Our Data Center MEP BIM Services Deliver: ",
  paragraph2Tail:
    "Clash-free coordination across MEP, structural, and architectural systems; fabrication-ready BIM models developed to LOD 300 and LOD 400; optimized layouts for high-density equipment environments; faster project execution with reduced site rework and coordination delays.",
  mainImage: "/image/data-center-mep-bim-overview.png",
  imageAlt: "data-center-mep-bim-overview",
};

export const mepDataCenterServiceFeaturesSection = {
  tag: "Service Features",
  titleLead: "What We Deliver With Our ",
  titleAccent: "MEP BIM Services for Data Centers",
  description:
    "Specialized Data Center MEP BIM Services that improve coordination, prefabrication, constructability, and installation efficiency for mission-critical facilities.",
  ctaLabel: "Get A Free Quote",
} as const;

export const mepDataCenterServiceFeatureCards: MepBimFeatureCard[] = [
  {
    title: "MEP BIM Modeling (LOD 300–400)",
    description:
      "Our dedicated MEP BIM engineers deliver detailed data center HVAC BIM modeling along with electrical infrastructure, precision cooling, mechanical piping, and support system modeling at LOD 300-400.",
    icon: upscaleImageIcon,
  },
  {
    title: "Clash Detection and Coordination",
    description:
      "Our US-trained MEP BIM coordinators run iterative clash detection across MEP systems, structural elements, and architecture, including rack-level clearance validation and overhead cable tray verification.",
    icon: clashDetectionAndCoordinationIcon,
  },
  {
    title: "Fabrication and Spool Drawings",
    description:
      "Our team of BIM experts produces piping spool drawings, electrical shop drawings, and hanger and support detailing so prefabrication and installation teams can work from fabrication-ready outputs directly.",
    icon: fabricationSpoolDrawingsIcon,
  },
  {
    title: "Prefabrication and Modular BIM",
    description:
      "Our MEP BIM team models skid-based assemblies, modular rack systems, and prefabricated pipe spools while producing detailed documentation that off-site fabrication teams use for accurate on-site installation.",
    icon: prefabricationModularBimIcon,
  },
  {
    title: "Cable Tray & Routing Optimization",
    description:
      "Cable tray congestion is a major coordination challenge, but our teams optimize layouts for better constructability and access, keeping installation electrical standards compliant.",
    icon: cableTrayRoutingOptimizationIcon,
  },
  {
    title: "Scan to BIM As-Built Modeling",
    description:
      "For existing facilities, retrofits, and phased upgrades, our team processes point cloud data into high-accuracy BIM models that give operators and engineers a reliable foundation to plan renovations.",
    icon: scanToBimAsBuiltModelingIcon,
  },
  {
    title: "BIM for Facility Management and Digital Twin",
    description:
      "Our engineers structure models with asset tagging and system attribute data so facility management teams can support CMMS integration, digital twin programs, and lifecycle operations.",
    icon: bimForFacilityManagementIcon,
  },
];

export const mepDataCenterWhoWeHelpSection = {
  tag: "Who We Help",
  titleLead: "Who We Help with ",
  titleAccent: "Data\nCenter BIM Coordination",
  description:
    "We Work with the Engineers, Contractors, Consultants, and Developers Who Plan, Build, and Operate Data Centers.",
  ctaLabel: "Let's Talk",
} as const;

export type MepDataCenterWhoWeHelpCard = {
  title: string;
  description: string;
  icon: string;
  iconHover: string;
  supportTitle: string;
  supportPoints: string[];
};

export const mepDataCenterWhoWeHelpCards: MepDataCenterWhoWeHelpCard[] = [
  {
    title: "Data Center Developers & Operators",
    description:
      "Developers and operators need scalable infrastructure that delivers BIM Modeling for Data Centers and supports future growth, maintenance access, and operational continuity.",
    supportTitle: "We Support Developers and Operators With",
    supportPoints: [
      "High-performance MEP infrastructure modeling",
      "Expansion and retrofit planning",
      "Space utilization validation",
      "Equipment access coordination",
      "Accurate as-built documentation",
    ],
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "MEP Contractors",
    description:
      "Our BIM specialists help MEP contractors coordinate complex systems in congested ceiling spaces, utility corridors, plant rooms, and white spaces.",
    supportTitle: "We Support MEP Contractors With",
    supportPoints: [
      "Detailed trade coordination",
      "Spool-ready piping models",
      "Installation planning",
      "Reduced field clashes and rework",
      "Better visibility into constructability constraints",
    ],
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "MEP Consultants",
    description:
      "MEP consultants use our MEP BIM services for data centers to validate design intent across complex data center environments.",
    supportTitle: "We Support Consultants With",
    supportPoints: [
      "BIM support for design coordination",
      "Constructability reviews during preconstruction",
      "Clash detection and issue tracking",
      "Coordination between architectural, structural, and MEP systems",
      "Improved design validation workflows",
    ],
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "General Contractors (GCs)",
    description:
      "GC teams use our Data Center MEP Coordination workflows to manage multiple trades within fast-track construction programs.",
    supportTitle: "We Support GCs With",
    supportPoints: [
      "Centralized BIM coordination",
      "Multi-trade clash management",
      "Construction sequencing support",
      "Better schedule reliability",
      "Improved coordination visibility across stakeholders",
    ],
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "MEP Engineers",
    description:
      "Our BIM specialists work closely with MEP engineering teams to develop accurate models aligned with project specifications and installation requirements.",
    supportTitle: "We Support Engineering Teams With",
    supportPoints: [
      "Discipline-specific BIM modeling",
      "Detailed equipment and routing coordination",
      "Fabrication-level model development",
      "Construction documentation support",
      "Coordination reviews for high-density MEP systems",
    ],
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
];

export const mepDataCenterTechnologyStackSection = {
  tag: "Tools & Platforms",
  titleLine1: "We Use to Deliver ",
  titleAccent: "MEP Data Center Services",
  description:
    "Leveraging industry-leading BIM software to create accurate, coordinated, and constructible MEP models for complex projects.",
} as const;

export const mepDataCenterTechnologyStackToolsRowOne: MepBimTechnologyTool[] = [
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

export const mepDataCenterTechnologyStackToolsRowTwo: MepBimTechnologyTool[] = [
  { name: "Navis works", icon: "/icon/navisworks.png", iconWidth: 55, iconHeight: 85 },
  { name: "Revizto", icon: "/icon/revizto.png", iconWidth: 75, iconHeight: 75 },
  {
    name: "Bluebeam",
    icon: "/image/bluebeam-inc-vector-logo-1.jpg",
    iconWidth: 85,
    iconHeight: 91,
  },
];

export const mepDataCenterWorkflowSection = {
  tag: "Our BIM Workflow",
  titleLine1: "How We Deliver Data Center\n",
  titleLine2: "MEP BIM Services",
  description:
    "A structured Data Center MEP BIM workflow designed to improve coordination accuracy, support fabrication readiness, and streamline execution across mission-critical construction projects.",
} as const;

export const mepDataCenterWorkflowSteps = [
  {
    number: "01",
    title: "Project Understanding and Setup",
    text: "Before modeling begins, our teams review project requirements, standards, and coordination expectations.",
  },
  {
    number: "02",
    title: "High-Detail Modeling",
    text: "Our BIM modelers develop trade-wise models based on approved project standards and design documentation.",
  },
  {
    number: "03",
    title: "Coordination and Clash Resolution",
    text: "Coordination teams run iterative clash detection processes to identify and resolve conflicts across trades.",
  },
  {
    number: "04",
    title: "Fabrication Detailing",
    text: "Once coordination activities are complete, our teams prepare fabrication-ready deliverables.",
  },
  {
    number: "05",
    title: "Delivery & Support",
    text: "We continue supporting project teams during construction through coordinated model updates and issue resolution workflows.",
  },
] as const;

export const mepDataCenterWhyChooseSection = {
  tag: "Why Choose Us",
  titleAccent: "Why AEC Firms Choose",
  titleLead: " Our MEP BIM Services for Data Centers",
  description:
    "Proven expertise, global standards compliance, and scalable teams that deliver MEP BIM Services for Data Centers on your schedule.",
  ctaLabel: "Let's Talk",
} as const;

export const mepDataCenterWhyChooseCards = [
  {
    title: "Top-tier MEP BIM Experts",
    description:
      "Our engineers are selected from over 20,000 applicants annually and trained specifically for high-density MEP coordination projects.",
    icon: topMepBimExpertsIcon,
  },
  {
    title: "Fabrication-First Modeling Approach",
    description:
      "Every model our team produces is structured to support shop floor production and field installation, not just spatial coordination.",
    icon: fabricationModelingApproachIcon,
  },
  {
    title: "Multi-Time-Zone Availability",
    description:
      "Comprehensive interference audits and resolution logs providing a verified clash-free environment before site mobilization.",
    icon: multiTimeZoneAvailabilityIcon,
  },
  {
    title: "Scalable Teams for Any Project Size",
    description:
      "Whether you need a single-hall coordination team or a full hyperscale campus crew, we scale resources to match project demand.",
    icon: scalableTeamsForAnyProjectSizeIcon,
  },
  {
    title: "Global BIM Standards Compliance",
    description:
      "Our engineers have delivered projects to US, UK, Australian, and Singapore BIM standards, adapting to your environment from day one.",
    icon: globalBimStandardsComplianceIcon,
  },
] as const;

export const mepDataCenterResourcesSection = {
  tag: "Resources",
  titleLine1: "Resources on ",
  titleLine2: "MEP BIM data Canters",
  description:
    "Explore technical thought leadership and actionable strategies designed to optimize your production workflows and scale without compromising standards.",
  viewAllHref: "/bim-resources/",
  serviceFilter: "MEP Engineering Firms",
} as const;

export const mepDataCenterProjectCta = {
  titleLine1: "Let’s Build Your ",
  titleLine2: "Data Center\nwith Precision",
  description:
    "Virtual Building Studio provides the BIM engineering expertise your contractors and project managers need to take a mission-critical facility from coordinated model to commissioned operation on schedule.",
  cta: "Book a Quick Call",
  ctaHref: "/contact-us",
} as const;

export const mepDataCenterFaqSection = {
  tag: "FAQs",
  description:
    "Explore answers to common questions about our services, workflows, deliverables, timelines, and project collaboration.",
} as const;

export const mepDataCenterFaqs = [
  {
    q: "What is BIM for data centers?",
    a: "BIM for data center construction involves developing coordinated digital models for mechanical, electrical, plumbing, and fire protection systems. Project teams use these models to improve coordination, reduce clashes, and support construction planning.",
  },
  {
    q: "Why is BIM important for data center construction?",
    a: "BIM enables teams to detect conflicts early, align disciplines before site work, and reduce field rework. For mission-critical environments, this improves schedule confidence and reduces commissioning risk.",
  },
  {
    q: "What LOD is required for data center BIM?",
    a: "Most projects use LOD 300 for design coordination and LOD 400 for fabrication and installation planning. The required LOD depends on project scope, contract requirements, and execution phase.",
  },
  {
    q: "Do BIM models support fabrication for MEP systems?",
    a: "Yes. Fabrication-ready BIM models support spool generation, hanger layouts, and coordinated installation details that teams can use directly for off-site fabrication and field execution.",
  },
  {
    q: "How does BIM reduce risks in data centers?",
    a: "BIM reduces risk by improving visibility into dense MEP systems, resolving clashes before installation, and creating coordinated deliverables that reduce delays, RFIs, and costly rework.",
  },
] as const;
