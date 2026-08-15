import codeCompliantFireSeparationIcon from "@/assets/images/code-compliant-fire-separation-icon.png";
import complexMultiTenantProjectsIcon from "@/assets/images/complex-multi-tenant-projects-icon.png";
import gravityFeedValidationIcon from "@/assets/images/gravity-feed-validation-icon.png";
import highRfiVolumeOnActiveProjectsIcon from "@/assets/images/high-rfi-volume-on-active-projects-icon.png";
import inHouseBimCapacityOverloadedIcon from "@/assets/images/in-house-bim-capacity-overloaded-icon.png";
import maintenanceAccessibilityIcon from "@/assets/images/maintenance-accessibility-icon.png";
import majorDesignChangeOrdersIcon from "@/assets/images/major-design-change-orders-icon.png";
import optimizedInstallationSequencingIcon from "@/assets/images/optimized-installation-sequencing-icon.png";
import preConstructionCoordinationPhaseIcon from "@/assets/images/pre-construction-coordination-phase-icon.png";
import preFabricationModelReleaseIcon from "@/assets/images/pre-fabrication-model-release-icon.png";
import precisionSeismicBracingIcon from "@/assets/images/precision-seismic-bracing-icon.png";
import zeroInterferenceRoutingIcon from "@/assets/images/zero-interference-routing-icon.png";
import { benefitIconColored, benefitIconMuted } from "@/constants/benefit-icons";
import type {
  MepBimFeatureCard,
  MepBimMeasurableResultCard,
  MepBimTechnologyTool,
  MepBimUseCaseCard,
  MepOverviewIntroContent,
  MepTrustedByContent,
} from "@/constants/mep-bim-modelling-content";

export const mepClashDetectionHero = {
  tag: "MEP Clash Detection",
  titleLead: "MEP Clash Detection Services\n",
  titleAccent: "Prevent Costly Rework",
  description:
    "Our BIM Experts provide MEP Clash Detection Services in USA. They help teams coordinate mechanical, electrical, plumbing and fire protection systems early.",
  ctaLabel: "Get a Free Quote",
  imageSrc: "/image/mep-clash-detection-banner.jpg",
  imageAlt: "mep-clash-detection-banner",
  copyMaxWidth: 730,
  descriptionMaxWidth: 699,
} as const;

export const mepClashDetectionTrustedBy: MepTrustedByContent = {
  titleAccent: "Trusted",
  titleLead: " By",
  items: [
    { dashColor: "#D70416", label: "MEP Engineers" },
    { dashColor: "#42AA32", label: "GCs & Subcontractors" },
    { dashColor: "#2299D6", label: "BIM Consultants" },
    { dashColor: "#F0B300", label: "Fabricators" },
  ],
};

export const mepClashDetectionIntro: MepOverviewIntroContent = {
  tag: "Overview",
  titleLead: "Better Coordination with ",
  titleAccent: "MEP BIM Clash Detection Services",
  paragraph1:
    "Proper coordination makes sure ductwork, conduits, piping and structural elements don't compete for space. Otherwise, projects suffer rework, delays and cost.",
  paragraph2Lead: "Many firms choose Outsourcing ",
  paragraph2Bold: "MEP clash detection services",
  paragraph2Tail:
    " when internal teams are stretched. As an experienced MEP Clash Detection Services Provider, Virtual Building Studio assigns US trained BIM specialists to review federated models before installation.",
  paragraph3Lead:
    "We provide structured Hard and Soft Clash Detection on mechanical, electrical, plumbing, fire protection, structural, and architectural systems and then ",
  paragraph3Bold: "prioritize issues",
  paragraph3Tail:
    " by severity to enable faster coordination and construction decisions.",
  mainImage: "/image/mep-clash-detection-overview.jpg",
  imageAlt: "mep-clash-detection-overview",
};

export const mepClashDetectionServiceFeaturesSection = {
  tag: "What you get",
  titleLead: "What You Get with\n",
  titleAccent: "BIM Clash Detection Services",
  description:
    "Bridge the gap between coordinated BIM models and field-ready construction execution with accurate Hard and Soft Clash Detection workflows.",
  ctaLabel: "Get A Free Quote",
} as const;

export const mepClashDetectionServiceFeatureCards: MepBimFeatureCard[] = [
  {
    title: "Routing Without Interference",
    description:
      "Our Mechanical Clash Detection process checks HVAC ductwork and hydronic piping for SMACNA standards. The review removes physical intersections before the install reaches the site.",
    icon: zeroInterferenceRoutingIcon.src,
  },
  {
    title: "Maintenance Accessibility",
    description:
      "Electrical equipment shall have adequate working space for inspection and maintenance. Our specialists will check NEC clearance requirements to help contractors avoid accessibility issues after installation.",
    icon: maintenanceAccessibilityIcon.src,
  },
  {
    title: "Gravity Feed Validation",
    description:
      "Proper pipe slopes are the key to successful plumbing clash detection. We review the sanitary and domestic piping so that it follows IPC requirements. We verify the adjacent structural and electrical systems.",
    icon: gravityFeedValidationIcon.src,
  },
  {
    title: "Code Compliance with Fire Separation",
    description:
      "We take care that the MEP penetrations shall maintain the integrity of fire rated assemblies. We check that routing decisions continue to follow NFPA 101 life safety requirements during coordination.",
    icon: codeCompliantFireSeparationIcon.src,
  },
  {
    title: "Precision Seismic Bracing",
    description:
      "Seismic support locations compete with MEP systems in dense service zones. We review ASCE 7 bracing requirements and identify conflicts before fabrication begins.",
    icon: precisionSeismicBracingIcon.src,
  },
  {
    title: "Optimized Installation Sequencing",
    description:
      "Physical clashes are only one coordination challenge. We also identify workflow conflicts between trades so construction teams can complete installations with fewer site interruptions.",
    icon: optimizedInstallationSequencingIcon.src,
  },
];

export const mepClashDetectionTypesSection = {
  tag: "Types of Clashes",
  titleLine1: "Types of Clashes We Detect in Our ",
  titleLine2: "MEPF Clash Detection Services",
  titleMaxWidth: 833,
  description:
    "Achieve total project harmony through multi-disciplinary technical depth that transforms complex 3D models into highly functional, field-ready installation guides.",
  descriptionMaxWidth: 683,
} as const;

export const mepClashDetectionTypesSteps = [
  {
    prefix: "0",
    number: "1",
    prefixColor: "text-[#42AA32]",
    title: "Hard Clashes-Physical Overlaps",
    description:
      "Physical clashes stop construction teams from installing building systems as planned. Our MEPF Clash Detection Services identify direct overlaps between ducts, pipes, conduits, cable trays, structural members and architectural components within federated BIM models. Project teams receive clear clash locations before work reaches the site.",
    descriptionMaxWidth: 447,
  },
  {
    prefix: "0",
    number: "2",
    prefixColor: "text-[#2299D6]",
    title: "Soft Clashes-Clearance Issues",
    description:
      "Components may fit within the available space but still fail clearance requirements. Our team identifies maintenance access issues, code required spacing conflicts and equipment servicing limitations. We also check Hard and Soft Clash Detection issues before construction begins. Early reviews help project teams avoid field modifications.",
    descriptionMaxWidth: 446,
  },
  {
    prefix: "0",
    number: "3",
    prefixColor: "text-[#F0B300]",
    title: "Workflow Clashes-Sequence Conflicts",
    description:
      "Installation activities depend on the right trade working at the right time. We review construction sequences, installation dependencies and trade workflows to identify conflicts that could delay fabrication, site coordination or project delivery.",
    descriptionMaxWidth: 447,
  },
];

export const mepClashDetectionDeliverablesSection = {
  tag: "What We Deliver",
  titleLine1: "What we offer with our\n",
  titleLine2: "MEP clash detection services",
  titleMaxWidth: 833,
  description:
    "Accurate, construction-ready deliverables improve coordination clarity, reduce unresolved conflicts, and support faster decision-making across project stakeholders.",
  descriptionMaxWidth: 683,
} as const;

export const mepClashDetectionDeliverablesCards = [
  {
    title: "Mechanical Clash Detection",
    text: "Our Mechanical Clash Detection deliverables are HVAC and piping models coordinated and verified against SMACNA standards. Layouts with fewer conflicts in installation and clearer routing paths are provided to contractors.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Electrical Clash Detection",
    text: "Our clash detection services for electrical systems include coordinated conduit and cable tray layouts to follow NEC clearance requirements. The clash report also points out interference with structural and architectural elements before installation.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Plumbing Clash Detection",
    text: "Our Plumbing Clash Detection deliverables include coordinated domestic and sanitary piping models that adhere to IPC slope requirements. Each review considers the adjacent mechanical, electrical and structural systems to minimize routing conflicts.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Clash Reports & Tracking Logs",
    text: "All coordination cycles include Navisworks clash reports, viewpoints and tracking logs. The project teams can see each issue during the coordination process, assign ownership, track progress and verify resolution.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
];

export const mepClashDetectionTechnologyStackSection = {
  tag: "Tools & Platforms",
  titleLine1: "We Use to Deliver ",
  titleAccent: "MEP Clash Detection",
  description:
    "Leveraging industry-leading BIM software to create accurate, coordinated, and constructible MEP models for complex projects.",
} as const;

export const mepClashDetectionTechnologyStackToolsRowOne: MepBimTechnologyTool[] = [
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

export const mepClashDetectionTechnologyStackToolsRowTwo: MepBimTechnologyTool[] = [
  { name: "Navis works", icon: "/icon/navisworks.png", iconWidth: 55, iconHeight: 85 },
  { name: "Revizto", icon: "/icon/revizto.png", iconWidth: 75, iconHeight: 75 },
  {
    name: "Bluebeam",
    icon: "/image/bluebeam-inc-vector-logo-1.jpg",
    iconWidth: 85,
    iconHeight: 91,
  },
];

export const mepClashDetectionWorkflowSection = {
  tag: "Our Workflow",
  titleLine1: "Our Workflow for ",
  titleLine2: "MEP Clash Detection Services",
  description:
    "A structured six-step process that detects and resolves MEP clashes early, improving coordination, constructability, and project efficiency.",
};

export const mepClashDetectionWorkflowSteps = [
  {
    number: "01",
    title: "Model Collection and Validation",
    text: "Our specialists check Revit and IFC models to confirm file integrity and that the right project coordinates are applied to each discipline.",
  },
  {
    number: "02",
    title: "Automated Detection",
    text: "We use Navisworks and Solibri to run systematic hard, soft and clearance clash detection for all project disciplines.",
  },
  {
    number: "03",
    title: "Clash Grouping",
    text: "Our team then removes duplicate results and false positives, and clusters related clashes into manageable coordination issues.",
  },
  {
    number: "04",
    title: "Coordination Meetings",
    text: "Project leads meet on a regular basis to coordinate responsibilities, discuss solutions and resolve high-priority conflicts.",
  },
  {
    number: "05",
    title: "Tracking Resolution",
    text: "Our experts review the updated models and run the clash tests again to make sure the problems have been solved. And then again check later for any new conflicts introduced.",
  },
  {
    number: "06",
    title: "Final Co-ordination Outputs",
    text: "We develop coordinated BIM models, clash reports, viewpoints and tracking documentation for construction, fabrication and project execution.",
  },
];

export const mepClashDetectionOutsourcingGuideSection = {
  tag: "Outsourcing Guide",
  titleLead: "When You Need to Outsource ",
  titleAccent: "MEP clash detection services",
  description:
    "Work with dedicated coordination experts when project complexity, deadlines or internal resource constraints begin to affect model quality.",
  ctaLabel: "Let's Talk",
} as const;

export const mepClashDetectionOutsourcingGuideCards: MepBimUseCaseCard[] = [
  {
    title: "Pre-Construction Coordination Phase",
    description:
      "Construction documents need coordinated models before they reach the field. Outsourcing MEP clash detection services gives your team an independent review before issuing construction drawings.",
    icon: preConstructionCoordinationPhaseIcon.src,
  },
  {
    title: "Pre-Fabrication Model Release",
    description:
      "Fabrication starts with coordinated models. We review MEP systems before release so fabricators get models with fewer unresolved clashes and routing conflicts.",
    icon: preFabricationModelReleaseIcon.src,
  },
  {
    title: "Major Design Change Orders",
    description:
      "Design changes involving many disciplines can create new coordination problems. We take a look at the revised routing, new conflicts and then move on with updated models.",
    icon: majorDesignChangeOrdersIcon.src,
  },
  {
    title: "High RFI Volume on Active Projects",
    description:
      "A growing number of installation RFIs usually points to coordination gaps. We review the latest models to identify root causes and reduce repeated field conflicts.",
    icon: highRfiVolumeOnActiveProjectsIcon.src,
  },
  {
    title: "Complex Multi-Tenant",
    description:
      "Building services become harder to coordinate as project density increases. Our specialists review high-congestion areas to help project teams maintain constructability across every discipline.",
    icon: complexMultiTenantProjectsIcon.src,
  },
  {
    title: "In-House BIM Capacity Overloaded",
    description:
      "Project workloads change throughout the year. As an experienced MEP clash detection services provider, we work as an extension to your BIM team when additional coordination support is needed.",
    icon: inHouseBimCapacityOverloadedIcon.src,
  },
];

export const mepClashDetectionMeasurableOutcomesSection = {
  tag: "Measurable Outcomes",
  titleLead: "Measurable Impact of\n",
  titleAccent: "MEPF Clash Detection Services",
  description:
    "Maximize your project ROI and operational efficiency through a rigorous BIM coordination process that eliminates field waste and schedule delays.",
} as const;

export const mepClashDetectionMeasurableOutcomeCards: MepBimMeasurableResultCard[] = [
  {
    value: "65%",
    valueColor: "#42AA32",
    title: "Reduction in Rework",
    description:
      "During preconstruction stage identification of coordination issues reduces time spent by field crews on resolving installation conflicts. That cuts down on change orders, material waste and rework.",
  },
  {
    value: "40%",
    valueColor: "#42AA32",
    title: "Faster Coordination Cycles",
    description:
      "Well structured clash reviews allow project teams to discuss issues earlier and make decisions with less coordination meetings.",
  },
  {
    value: "50%",
    valueColor: "#42AA32",
    title: "RFIs Reduced",
    description:
      "Accurate hard and soft clash detection solves many coordination problems before construction starts. Project teams spend less time solving installation related RFIs.",
  },
  {
    value: "35%",
    valueColor: "#42AA32",
    title: "Less Installation Cost",
    description:
      "Coordinated routing makes installation activities smoother. Trade teams can get work done with less interruption from competing building systems.",
  },
  {
    value: "30%",
    valueColor: "#42AA32",
    title: "Faster Fabrication Readiness",
    description:
      "Fabricators need coordinated models prior to starting production. Early conflict resolution minimizes model revision during fabrication planning.",
  },
  {
    value: "45%",
    valueColor: "#42AA32",
    title: "Improved Space utilization",
    description:
      "Good MEP layout designs can maximize the use of ceiling space and still provide access and clearance for equipment maintenance throughout the building.",
  },
];

export const mepClashDetectionResourcesSection = {
  tag: "Resources",
  titleLine1: "Resources on ",
  titleLine2: "MEP Clash Detection",
  description:
    "Explore technical thought leadership and actionable strategies designed to optimize your production workflows and scale without compromising standards.",
  viewAllHref: "/bim-resources/",
  serviceFilter: "MEP Engineering Firms",
} as const;

export const mepClashDetectionProjectCta = {
  titleLine1: "Work with the best ",
  titleLine2: "MEP Clash Detection Services Provider",
  description:
    "Our BIM team follows US standards and follows structured workflows, transparent reporting, and disciplined coordination practices that support all project stages.",
  cta: "Book a Quick Call",
  ctaHref: "/contact-us",
} as const;

export const mepClashDetectionFaqSection = {
  tag: "FAQs",
  description:
    "Explore answers to common questions about our services, workflows, deliverables, timelines, and project collaboration.",
} as const;

export const mepClashDetectionFaqs = [
  {
    q: "What model formats do you support, and when should clash detection begin?",
    a: "We work with Revit, IFC, CAD, Naviswork and BIM 360 models. BIM Clash Detection Services begin at design development or preconstruction stage to ensure better coordination of projects.",
  },
  {
    q: "What BIM tools do you use for MEP clash detection?",
    a: "We use Autodesk Revit, Navisworks, Solibri, BIM 360, Bluebeam, and related collaboration platforms to run hard, soft, and clearance clash detection across mechanical, electrical, plumbing, and fire protection systems.",
  },
  {
    q: "How do you minimize false conflicts and give preference to the important ones?",
    a: "After automated detection, our team removes duplicate results and false positives, then clusters related clashes into manageable coordination issues prioritized by severity so project teams can focus on the conflicts that matter most.",
  },
  {
    q: "How do you manage clash resolution after detection?",
    a: "We run structured coordination meetings to assign ownership, discuss solutions, and resolve high-priority conflicts. Updated models are re-tested to confirm issues are closed and no new conflicts were introduced.",
  },
  {
    q: "What are your deliverables during coordination?",
    a: "Deliverables include coordinated MEP models, Navisworks clash reports, viewpoints, and tracking logs so stakeholders can review issues, assign ownership, track progress, and verify resolution throughout the coordination cycle.",
  },
] as const;
