import accurateShopDrawingsIcon from "@/assets/images/accurate-shop-drawings-icon 1.png";
import clashDetectionResolution from "@/assets/images/clash-detection-resolution.jpg";
import complexHighRiseProjectsIcon from "@/assets/images/complex-high-rise-projects-icon 1.png";
import coordinatedMultiDisciplineModelsIcon from "@/assets/images/coordinated-multi-discipline-models-icon 1.png";
import coordinationDrawingProduction from "@/assets/images/coordination-drawing-production.jpg";
import designChangeIntegration from "@/assets/images/design-change-integration.jpg";
import fastTrackConstructionSchedulesIcon from "@/assets/images/fast-track-construction-schedules-icon 1.png";
import fasterCoordinationCyclesIcon from "@/assets/images/faster-coordination-cycles-icon 1.png";
import improvedConstructabilityReviewIcon from "@/assets/images/improved-constructability-review-icon 1.png";
import inHouseCapacityConstraintsIcon from "@/assets/images/in-house capacity-constraints-icon 1.png";
import interdisciplinaryMepCoordination from "@/assets/images/interdisciplinary-mep-coordination.jpg";
import mepCoordinationsBanner from "@/assets/images/mep-coordinations-banner.jpg";
import mepCoordinationsOverview from "@/assets/images/mep-coordinations-overview.jpg";
import mepVsArchitecturalCoordination from "@/assets/images/mep-vs-architectural-coordination.jpg";
import mepVsStructuralCoordination from "@/assets/images/mep-vs-structural-coordination .jpg";
import preFabricationModularGoalsIcon from "@/assets/images/pre-fabrication-&-modular-goals-icon 1.png";
import prefabricationFabricationSupport from "@/assets/images/prefabrication-fabrication-support.jpg";
import reducedReworkChangeOrdersIcon from "@/assets/images/reduced-rework-&-change-orders-icon 1.png";
import systemsPrioritizationRoutingStrategy from "@/assets/images/systems-prioritization-routing-strategy.jpg";
import transparentIssueTrackingIcon from "@/assets/images/transparent-issue-tracking-icon 1.png";
import { benefitIconColored, benefitIconMuted } from "@/constants/benefit-icons";
import type {
  MepBimFeatureCard,
  MepBimMeasurableResultCard,
  MepBimTechnologyTool,
  MepOverviewIntroContent,
  MepTrustedByContent,
} from "@/constants/mep-bim-modelling-content";

export const mepCoordinationHero = {
  tag: "MEP Coordination",
  titleLead: "MEP Coordination Services\nfor ",
  titleAccent: "Clash-Free Construction",
  description:
    "Our BIM experts offer MEP Coordination Services to coordinate all the disciplines ahead of construction to help your team reduce rework, avoid delays, and keep projects on schedule.",
  ctaLabel: "Get a Free Quote",
  imageSrc: mepCoordinationsBanner,
  copyMaxWidth: 920,
  descriptionMaxWidth: 820,
} as const;

export const mepCoordinationTrustedBy: MepTrustedByContent = {
  titleAccent: "Trusted",
  titleLead: " By",
  items: [
    { dashColor: "#D70416", label: "Engineering Consultants" },
    { dashColor: "#42AA32", label: "GCs & Subcontractors" },
    { dashColor: "#2299D6", label: "BIM Consultants" },
    { dashColor: "#F0B300", label: "Fabricators" },
  ],
};

export const mepCoordinationIntro: MepOverviewIntroContent = {
  tag: "Overview",
  titleLead: "Mitigate Onsite Reworks with ",
  titleAccent: "MEP BIM Coordination Services",
  paragraph1:
    "In construction projects, the coordination of MEP systems is necessary to avoid costly installation problems. Design changes, uncoordinated drawings, and unresolved conflicts cause rework, delays, and increased construction costs. Virtual Building Studio is a trusted MEP Coordination Service Provider, providing MEPF Coordination Services in ",
  paragraph1Bold: "USA, UK, European countries, Australia and Middle east.",
  paragraph2Lead: "Our BIM specialists create synchronized models from ",
  paragraph2Bold: "LOD 200 to LOD 400",
  paragraph2Tail:
    " according to SMACNA, NEC, ASHRAE, and project specifications. We offer services that allow accurate fabrication, easier installation and successful field coordination.",
  mainImage: mepCoordinationsOverview.src,
  imageAlt: "MEP BIM coordination overview showing integrated building systems",
};

export const mepCoordinationServiceFeaturesSection = {
  tag: "What you get",
  titleLead: "What You Get with Our ",
  titleAccent: "BIM Coordination Services",
  description:
    "Our BIM Coordination Services transform design-intent models into construction-ready coordination deliverables through fully coordinated MEPF Coordination Services built for field execution.",
  ctaLabel: "Get A Free Quote",
} as const;

export const mepCoordinationServiceFeatureCards: MepBimFeatureCard[] = [
  {
    title: "Fully Integrated Multi Discipline Models",
    description:
      "All trade patterns must fit within the building envelope. Our BIM team creates Revit models from LOD 350 to LOD 400 with resolved clashes on MEP (mechanical, electrical, plumbing and fire protection) systems.",
    icon: coordinatedMultiDisciplineModelsIcon.src,
  },
  {
    title: "Enhanced Constructability Review",
    description:
      "Coordination is not just for clash detection. Our specialists review installation sequences, maintenance access and code requirements prior to construction, minimizing RFIs and approval delays.",
    icon: improvedConstructabilityReviewIcon.src,
  },
  {
    title: "Rapid Coordination Cycles",
    description:
      "Big projects produce hundreds of coordination problems. Our team leverages structured Navisworks clash detection workflows to minimize the number of coordination cycles and eliminate unnecessary review meetings between trades.",
    icon: fasterCoordinationCyclesIcon.src,
  },
  {
    title: "Lower Field Rework and Change Orders",
    description:
      "It costs more to resolve conflicts in the field than in the design office. Our coordination experts locate spatial problems in the BIM model prior to installation, minimizing field changes, change orders, and schedule disruptions.",
    icon: reducedReworkChangeOrdersIcon.src,
  },
  {
    title: "Accurate Shop Drawings at Fabrication Level",
    description:
      "The fabrication relies on good coordination data. We extract hanger layouts, spool and equipment clearance drawings directly from coordinated BIM models for accurate offsite production.",
    icon: accurateShopDrawingsIcon.src,
  },
  {
    title: "Transparent Documentation and Issue Tracking",
    description:
      "Successful coordination requires total transparency. All clashes, resolutions and design decisions are logged by our coordinators in structured issue logs with markup, providing all stakeholders with a clear record of coordination.",
    icon: transparentIssueTrackingIcon.src,
  },
];

export const mepCoordinationServicesSection = {
  tag: "Our Comprehensive",
  titleLine1: "Range of Our Complete ",
  titleLine2: "MEP BIM Coordination Services",
  description:
    "Our multi-disciplinary coordination workflows improve constructability, sequencing of installation and field level usability for complex commercial and infrastructure projects.",
  ctaLabel: "Start New Project",
  ctaHref: "/contact",
  wideCards: true,
  titleMaxWidth: 747,
} as const;

export const mepCoordinationServiceCards = [
  {
    title: "MEP vs. Architectural Coordination",
    text: "Our team coordinates mechanical, electrical, plumbing and fire protection routing with architectural ceilings, walls, floors and finish clearances according to project specifications.",
    image: mepVsArchitecturalCoordination.src,
  },
  {
    title: "MEP vs. Structural Coordination",
    text: "We validate duct runs, pipe sleeves, conduit paths and equipment locations relative to structural beams, columns and slabs with full penetration and sleeve coordination.",
    image: mepVsStructuralCoordination.src,
  },
  {
    title: "Interdisciplinary MEP Coordination",
    text: "Our coordinators spatially resolve mechanical ductwork, plumbing lines, electrical conduit, and fire suppression piping against one another while maintaining all required clearances.",
    image: interdisciplinaryMepCoordination.src,
  },
  {
    title: "Clash Detection & Resolution",
    text: "Our team runs Navisworks-based hard, soft, and clearance clash detection per trade, categorizing and tracking every clash to full resolution through structured coordination logs.",
    image: clashDetectionResolution.src,
  },
  {
    title: "Systems Routing & Prioritization Approach",
    text: "For the routing hierarchy, we established trade prioritization matrices early to efficiently use space and meet installation sequences and maintenance access requirements.",
    image: systemsPrioritizationRoutingStrategy.src,
  },
  {
    title: "Coordination Drawing Production",
    text: "Our experts develop construction-ready drawings from section cuts, plan views and enlarged details extracted from coordinated models for use in the field and by subcontractors.",
    image: coordinationDrawingProduction.src,
  },
  {
    title: "Design Integration Change",
    text: "We systematically reintroduce revised architectural, structural, and MEP design inputs into the live coordination model to ensure full integrity throughout the coordination cycle.",
    image: designChangeIntegration.src,
  },
  {
    title: "Fabrication & Prefabrication Assistance",
    text: "We obtain data from coordinated models on spooling, hanger layouts and offsets in support of off-site prefabrication programs and reduction of on-site assembly time.",
    image: prefabricationFabricationSupport.src,
  },
];

export const mepCoordinationDeliverablesSection = {
  tag: "What We Deliver",
  titleLine1: "What We Deliver with Our ",
  titleLine2: "MEP Coordination Services",
  titleMaxWidth: 833,
  description:
    "Our deliverables are accuracy-verified, construction-ready, and built to reduce field conflicts, support fabrication, and accelerate project approvals without rework.",
  descriptionMaxWidth: 683,
} as const;

export const mepCoordinationDeliverablesCards = [
  {
    title: "Clash-Free Federated Models",
    text: "Our team develops Navisworks-based integrated models that provide your trades a definitive single source of truth, eliminating onsite spatial conflicts.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Detailed Coordination Reports",
    text: "Full issue logs and resolution documentation to monitor all clashes from initial detection through to sign off, ensuring full project accountability",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "BIM-Driven Shop Drawings",
    text: "Our experts extract high-fidelity 2D drawings from the coordinated model, featuring precise dimensions and professional annotations for immediate, error-free field use.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Bill of Materials (BOM)",
    text: "We deliver accurate quantity extracts for all MEP components, empowering your team with better cost control and synchronized construction procurement schedules.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
];

export const mepCoordinationTechnologyStackSection = {
  tag: "Tools & Platforms",
  titleLine1: "We Use to Deliver ",
  titleAccent: "MEP Coordination Services",
  description:
    "Leveraging industry-leading BIM software to create accurate, coordinated, and constructible MEP models for complex projects.",
} as const;

export const mepCoordinationTechnologyStackToolsRowOne: MepBimTechnologyTool[] = [
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

export const mepCoordinationTechnologyStackToolsRowTwo: MepBimTechnologyTool[] = [
  { name: "Navis works", icon: "/icon/navisworks.png", iconWidth: 55, iconHeight: 85 },
  { name: "Revizto", icon: "/icon/revizto.png", iconWidth: 75, iconHeight: 75 },
  {
    name: "Bluebeam",
    icon: "/image/bluebeam-inc-vector-logo-1.jpg",
    iconWidth: 85,
    iconHeight: 91,
  },
];

export const mepCoordinationWorkflowSection = {
  tag: "Our Workflow",
  titleLine1: "Our Process Flow for ",
  titleLine2: "MEP BIM Coordination Services",
  description:
    "A structured coordination workflow that aligns architectural, structural, and MEP systems to provide accurate BIM models, ready for construction.",
};

export const mepCoordinationWorkflowSteps = [
  {
    number: "01",
    title: "Kickoff and Intake for New Models",
    text: "Our team reviews design documents, sets trade priorities, defines coordination zones and sets up the Navisworks clash detection environment.",
  },
  {
    number: "02",
    title: "Development of Individual Trade Model",
    text: "We model each discipline in Revit to LOD 350 which includes system routing, equipment placement and sleeve locations based on project requirements.",
  },
  {
    number: "03",
    title: "Assembly of Federated Model and Conflict Detection",
    text: "Our coordinators federate all trade models, identify hard, soft and clearance clashes and assign each clash to the responsible teams for resolution.",
  },
  {
    number: "04",
    title: "Coordination and Problem Resolution Meetings",
    text: "We have structured weekly meetings with trade stakeholders to review open clashes and agree on resolutions and assignments for model updates with defined turnaround times.",
  },
  {
    number: "05",
    title: "Model Updates and Re-Clash Check",
    text: "Our team updates trade models based on agreed resolutions and re-runs clash detection to ensure all clashes are resolved and no new clashes are introduced.",
  },
  {
    number: "06",
    title: "Final Deliverables' Production and Delivery",
    text: "We deliver clash-free coordinated models, coordination drawings and full issue logs to the GC, sub-contractors and fabrication team.",
  },
];

export const mepCoordinationOutsourcingGuideSection = {
  tag: "Outsourcing Guide",
  titleLead: "When You Need to Outsource ",
  titleAccent: "MEP clash detection services",
  description:
    "Get expert coordination support when multidisciplinary projects require faster issue resolution and reliable model accuracy.",
  ctaLabel: "Let's Talk",
} as const;

export const mepCoordinationOutsourcingGuideCards = [
  {
    title: "Complex High-Rise Projects",
    description:
      "Engage with our expert team to navigate tight plenum spaces and dense MEP requirements, preventing impossible manual detection and structural interferences.",
    icon: complexHighRiseProjectsIcon.src,
  },
  {
    title: "Fast-Track Construction Schedules",
    description:
      "When it's time to parallel track design and fabrication, our specialists can be a reliable partner for fast, clash-free shop drawing outputs.",
    icon: fastTrackConstructionSchedulesIcon.src,
  },
  {
    title: "Goals for Modular and Pre-Fabrication",
    description:
      "Our BIM consultants work with off-site manufacturing projects that require LOD 400 precision to ensure the modules fit perfectly when they arrive.",
    icon: preFabricationModularGoalsIcon.src,
  },
  {
    title: "In-House Capacity Limitations",
    description:
      "When your own staff is stretched too thin and you need specialized expertise to efficiently coordinate across disciplines, turn to our seasoned engineers.",
    icon: inHouseCapacityConstraintsIcon.src,
  },
];

export const mepCoordinationMeasurableOutcomesSection = {
  tag: "Measurable Outcomes",
  titleLead: "Measurable Impact of\n",
  titleAccent: "MEP Coordination Services",
  description:
    "Systematic BIM coordination and clash resolution processes lead to improved efficiency, reduced field level conflicts, and accelerated construction workflows.",
} as const;

export const mepCoordinationMeasurableOutcomeCards: MepBimMeasurableResultCard[] = [
  {
    value: "40%",
    valueColor: "#42AA32",
    title: "Reduction in Rework",
    description:
      "Early clash detection and coordinated BIM reviews reduces significantly the field changes, materials wastage and repetitive installation corrections on site.",
  },
  {
    value: "50%",
    valueColor: "#42AA32",
    title: "Faster Coordination Cycles",
    description:
      "Structured issue tracking and centralized coordination workflows can be effective in speeding up review meetings, approvals and multidisciplinary clash resolution activities.",
  },
  {
    value: "40%",
    valueColor: "#42AA32",
    title: "More Efficient Building",
    description:
      "Installable coordinated BIM models support installation sequencing, reduce site disturbance and facilitate smoother delivery of the project across multiple trades.",
  },
  {
    value: "60%",
    valueColor: "#42AA32",
    title: "Less RFIs",
    description:
      "Accurate BIM coordination reduces unresolved installation conflicts and reduces coordination of RFIs in the construction and field execution phases.",
  },
  {
    value: "35%",
    valueColor: "#42AA32",
    title: "More Accurate Fabrication",
    description:
      "LOD based coordination workflows greatly improve the accuracy of spools, prefabrication readiness, and alignment between BIM models and fabrication deliverables.",
  },
  {
    value: "45%",
    valueColor: "#42AA32",
    title: "Faster Problem Solving",
    description:
      "Centralized clash reporting and revision tracking improve communication between stakeholders and speed up coordination decision making between project teams.",
  },
];

export const mepCoordinationResourcesSection = {
  tag: "Resources",
  titleLine1: "Resources on ",
  titleLine2: "MEP Coordination",
  description:
    "Explore technical thought leadership and actionable strategies designed to optimize your production workflows and scale without compromising standards.",
  viewAllHref: "/bim-resources/",
  serviceFilter: "MEP Engineering Firms",
} as const;

export const mepCoordinationProjectCta = {
  titleLine1: "Work with An Expert ",
  titleLine2: "MEP Coordination Services Provider ",
  description:
    "Our US-certified MEP engineers deliver coordinated, fabrication-ready BIM models through precise coordination, clash resolution, and installation-focused workflows.",
  cta: "Book a Quick Call",
  ctaHref: "/contact",
} as const;

export const mepCoordinationFaqDescription =
  "Find answers to common questions about our services, our workflow, what we deliver, how long it takes and how we work together on your project.";

export const mepCoordinationFaqSection = {
  tag: "FAQs",
  description: mepCoordinationFaqDescription,
} as const;

export const mepCoordinationFaqs = [
  {
    q: "What info/models do we need to give you to get off to a good start?",
    a: "Current architectural, structural and MEP models in CAD, Revit or IFC format. We also accept PDF drawings. The BIM Execution Plan, equipment submittals and trade prioritization guidelines allow us to get off to a faster start.",
  },
  {
    q: "How do you organize the MEP coordination workflow and assign responsibilities to each trade?",
    a: "We assign a dedicated BIM coordinator who manages trade sequencing, zone-based reviews, and clash ownership. Each discipline is mapped to clear responsibilities in Navisworks and Revit, with escalation paths defined during kickoff so architectural, structural, and MEP teams know who resolves what.",
  },
  {
    q: "What MEP coordination software platforms do you use, and how will we be able to access models, markups and issue logs?",
    a: "We work in Revit, Navisworks Manage, BIM 360/ACC, and Bluebeam for clash detection, markup, and issue tracking. Clients access federated models, markups, and live issue logs through your preferred cloud collaboration hub with role-based permissions.",
  },
  {
    q: "How do you coordinate day-to-day? What meetings are there, who is there, and how do you track open issues?",
    a: "We run scheduled coordination meetings with defined agendas, maintain a centralized clash matrix, and track open issues with assigned owners and due dates. Progress is reviewed in weekly or bi-weekly sessions depending on project phase, with same-day updates shared via Slack, Teams, or ACC.",
  },
  {
    q: "How do you deal with design changes and late inputs during coordination to keep model and drawings in sync?",
    a: "When new inputs arrive, we version-control trade models, re-run clash detection on affected zones, and update coordination drawings and issue logs in the same cycle. This keeps federated models, shop drawings, and resolution records synchronized so field teams always work from the latest coordinated deliverables.",
  },
] as const;
