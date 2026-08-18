import { benefitIconColored, benefitIconMuted } from "@/constants/benefit-icons";
import type {
  MepBimFeatureCard,
  MepBimMeasurableResultCard,
  MepBimTechnologyTool,
  MepBimUseCaseCard,
  MepOverviewIntroContent,
  MepTrustedByContent,
} from "@/constants/mep-bim-modelling-content";

const accurateDimensionsAndLayoutsIcon = "/image/mep-shop-drawing/accurate-dimensions-and-layouts-icon.png";
const acceleratedConstructionTimelinesIcon = "/image/mep-shop-drawing/accelerated-construction-timelines-icon.png";
const contractorAndTradeSynchronizationIcon = "/image/mep-shop-drawing/contractor-and-trade-synchronization-icon.png";
const detailedInstallationDrawingsIcon = "/image/mep-shop-drawing/detailed-installation-drawings-icon.png";
const fabricationReadyDocumentationIcon = "/image/mep-shop-drawing/fabrication-ready-documentation-icon.png";
const offsiteFabricationAndSpoolingIcon = "/image/mep-shop-drawing/offsite-fabrication-and-spooling-icon.png";
const preInstallationFieldCoordinationIcon = "/image/mep-shop-drawing/pre-installation-field-coordination-icon.png";
const reducedSiteErrorsIcon = "/image/mep-shop-drawing/reduced-site-errors-icon.png";

export const mepShopDrawingHero = {
  tag: "MEP Shop Drawing",
  titleLead: "High-Quality MEP Shop Drawing Services to ",
  titleAccent: "Minimize Field Rework",
  description:
    "Our pre-vetted MEP specialists develop Revit shop drawings for MEP that help field teams reduce rework, improve installation accuracy and remain on schedule.",
  ctaLabel: "Get a Free Quote",
  imageSrc: "/image/mep-shop-drawing-banner.jpg",
  imageAlt: "mep-shop-drawing-banner",
  copyMaxWidth: 638,
  descriptionMaxWidth: 638,
} as const;

export const mepShopDrawingTrustedBy: MepTrustedByContent = {
  titleAccent: "Trusted",
  titleLead: " By",
  items: [
    { dashColor: "#D70416", label: "Specialty Subcontractors" },
    { dashColor: "#42AA32", label: "General Contractors" },
    { dashColor: "#F0B300", label: "MEP Engineering Firms" },
    { dashColor: "#2299D6", label: "Building Consultants" },
  ],
};

export const mepShopDrawingIntro: MepOverviewIntroContent = {
  tag: "Overview",
  titleLead: "MEP Shop Drawings Ready for ",
  titleAccent: "Seamless Building Fabrication",
  paragraph1:
    "Construction crews need accurate shop drawings to install building systems without losing any time. Uncoordinated drawings create clashes, revisions and costly site changes for the lead crews and affect project schedules. We are a leading MEP shop drawing company, providing ",
  paragraph1Bold:
    "MEP shop drawing services for mechanical, electrical, plumbing and HVAC shop drawings for USA and other global projects",
  paragraph2:
    "Our MEP engineers prepare coordinated shop drawings with detailed routing, dimensions and installation details. Each drawing helps in fabrication, enhances coordination between trades and assures contractors to install with confidence.",
  mainImage: "/image/fabrication-ready-mep-shop-drawings-overview.jpg",
  imageAlt: "fabrication-ready-mep-shop-drawings-overview",
};

export const mepShopDrawingServiceFeaturesSection = {
  tag: "What you get",
  titleLead: "What You Get with ",
  titleAccent: "Our Revit MEP Shop Drawings Services",
  description:
    "Bridge the gap between design and construction with our accurate, constructible MEP shop drawing services.",
  ctaLabel: "Get A Free Quote",
} as const;

export const mepShopDrawingServiceFeatureCards: MepBimFeatureCard[] = [
  {
    title: "Detailed Installation Drawings",
    description:
      "Receive trade-specific Revit shop drawings for MEP developed to SMACNA, NFPA and ASHRAE standards. Clear sections, elevations, hanger layouts and support details help your field teams install systems without rework.",
    icon: detailedInstallationDrawingsIcon,
  },
  {
    title: "Exact Measurements & Layouts",
    description:
      "Get dimensionally accurate layouts meeting NEC, IPC and IMC requirements. Proper clearances, routing and coordinated system placement minimize installation conflicts across all trades.",
    icon: accurateDimensionsAndLayoutsIcon,
  },
  {
    title: "Fabrication Documentation Ready",
    description:
      "Get full Revit MEP shop drawings including spool drawings, component tagging and bill of materials. You have all the documentation in place and ready to start production with your fabrication teams.",
    icon: fabricationReadyDocumentationIcon,
  },
  {
    title: "Less Site Errors",
    description:
      "Coordinated shop drawings for MEP systems to prevent construction installation problems. Early resolution of clashes leads to reduced field changes, reduced rework and your project keeps moving.",
    icon: reducedSiteErrorsIcon,
  },
];

export const mepShopDrawingServicesSection = {
  tag: "Our Comprehensive",
  titleLine1: "Complete Range for ",
  titleLine2: "Revit\nShop Drawings for MEP",
  description:
    "Comprehensive MEP shop drawing services covering every discipline with coordinated, field-ready documentation for construction and fabrication.",
  ctaLabel: "Start New Project",
  ctaHref: "/contact-us",
  wideCards: true,
  titleMaxWidth: 774,
} as const;

export const mepShopDrawingServiceCards = [
  {
    title: "Shop Drawing for HVAC Ductwork",
    text: "Correct HVAC Duct Shop Drawings enable duct routing according to the approved design. Installation support through flange details, damper locations and fabrication information that is consistent with SMACNA standards.",
    image: "/image/hvac-duct-shop-drawings.jpg",
  },
  {
    title: "Mechanical Shop Drawings",
    text: "Mechanical Shop Drawings are well coordinated for easy installation of piping systems, chiller and boiler rooms. Proper location and routing of equipment will reduce field adjustments and will assist in future maintenance.",
    image: "/image/mechanical-shop-drawings.jpg",
  },
  {
    title: "Electrical Shop Drawings",
    text: "Clear Electrical Shop Drawings help contractors install conduits, cable trays and panels without any confusion. Every layout follows NEC requirements and supports safe power distribution.",
    image: "/image/electrical-shop-drawings.jpg",
  },
  {
    title: "Plumbing Shop Drawings",
    text: "Plumbing shop drawings, drainage, waste and vent systems complying with IPC and UPC requirements including slope, pipe sizing, vent routing and coordinated installation details.",
    image: "/image/plumbing-shop-drawings.jpg",
  },
  {
    title: "Integrated Layout Diagrams",
    text: "Master plans that bring together all trades into one coordinated view, giving field teams a clear roadmap for where to allocate space and install.",
    image: "/image/integrated-layout-drawings.jpg",
  },
  {
    title: "Detailed Section and Elevation Views",
    text: "Vertical cut-throughs at a high resolution to clarify system stacking, clearances, and interface conditions for complex building zones.",
    image: "/image/detailed-section-elevation-views.jpg",
  },
  {
    title: "Sleeve & Hanger Information",
    text: "Code-compliant sleeve locations and engineered hanger or support systems designed per load requirements and installation standards.",
    image: "/image/sleeve-hanger-details.jpg",
  },
  {
    title: "Complex Assembly Drawing",
    text: "Fabrication drawings with tagged components, spool breakdowns and connection details to facilitate off site manufacture and on site assembly.",
    image: "/image/complex-assembly-drawings.jpg",
  },
];

export const mepShopDrawingDeliverablesSection = {
  tag: "What We Deliver",
  titleLine1: "What We Deliver with Our\n",
  titleLine2: "MEP Shop Drawing Services",
  titleMaxWidth: 833,
  description:
    "Highly accurate MEP shop drawings engineered to reduce on site reworks and fasten project success.",
  descriptionMaxWidth: 600,
  ctaLabel: "Get A Free Quote",
  ctaHref: "/contact-us",
} as const;

export const mepShopDrawingDeliverablesCards = [
  {
    title: "Comprehensive Shop Drawing Sets",
    text: "Discipline-specific drawing sets including complete annotations and following industry standards like SMACNA, NEC, IPC, ASHRAE, etc. Every submission is organized for further review and construction.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Plans & Sections",
    text: "Accurate dimensions, routing and clearances are added in plans, sections and elevations. Field teams can install with more confidence and fewer questions.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Coordinated MEP Drawings",
    text: "Coordinated MEP Shop Drawings make sure all trade teams are using the same installation plan, minimizing RFIs and reducing rework.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Precision Fabrication & Spool Sheets",
    text: "Revit MEP Shop Drawings includes spool sheets, component tags and bill of materials. Fabrication teams get organized documentation for easy production.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
];

export const mepShopDrawingTechnologyStackSection = {
  tag: "Tools & Platforms",
  titleLine1: "We Use to Deliver ",
  titleAccent: "MEP Shop Drawing Services",
  description:
    "Leveraging industry-leading BIM software to create accurate, coordinated, and constructible MEP models for complex projects.",
} as const;

export const mepShopDrawingTechnologyStackToolsRowOne: MepBimTechnologyTool[] = [
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

export const mepShopDrawingTechnologyStackToolsRowTwo: MepBimTechnologyTool[] = [
  { name: "Navis works", icon: "/icon/navisworks.png", iconWidth: 55, iconHeight: 85 },
  { name: "Revizto", icon: "/icon/revizto.png", iconWidth: 75, iconHeight: 75 },
  {
    name: "Bluebeam",
    icon: "/image/bluebeam-inc-vector-logo-1.jpg",
    iconWidth: 85,
    iconHeight: 91,
  },
];

export const mepShopDrawingWorkflowSection = {
  tag: "Our Workflow",
  titleLine1: "Our MEP Shop Drawing ",
  titleLine2: "Services Workflow",
  description:
    "From model review to drawing handover, a six-step workflow is followed, considering quality and coordination standards",
};

export const mepShopDrawingWorkflowSteps = [
  {
    number: "01",
    title: "Model & Revit Geometry Creation",
    text: "The process begins with a thorough review of your design documents and project requirements. MEP Revit models are then created to LOD 400, providing a solid basis for coordinated MEP Shop Drawings.",
  },
  {
    number: "02",
    title: "Technical Detailing & Markup",
    text: "Once the model is finished, each system is turned into detailed plans, sections, isometric views and annotated layouts. Clear dimensions, tags and installation notes enable field crews to work with confidence.",
  },
  {
    number: "03",
    title: "Clash Detection & Validation",
    text: "Every discipline goes through detailed coordination prior to drawings going to fabrication. Mechanical, electrical, plumbing, structural and architectural systems are reviewed as a team to avoid installation conflicts.",
  },
  {
    number: "04",
    title: "Fabrication & Spooling Integration",
    text: "After coordination, fabrication-ready documentation is prepared, including spool drawings, component tagging, and bill of materials. Well-organized outputs let fabrication shops to start production without delay.",
  },
  {
    number: "05",
    title: "Quality Audit & Compliance Check",
    text: "Before final delivery, all drawings undergo a comprehensive QC review. Layouts are cross-verified with project specifications, building codes and SMACNA standards to finalize output.",
  },
  {
    number: "06",
    title: "Final Delivery & Project Turnover",
    text: "The final set of shop drawings is approved Revit MEP drawings, arranged for fabrication and construction. Coordinated files are delivered to your project team to assist in the field execution immediately.",
  },
];

export const mepShopDrawingOutsourcingGuideSection = {
  tag: "Outsourcing Guide",
  titleLead: "When You Need to Partner with ",
  titleAccent: "MEP Shop Drawing Service Provider",
  description:
    "Outsource shop drawing production to accelerate delivery while maintaining accuracy, constructability, and code compliance.",
  ctaLabel: "Let's Talk",
} as const;

export const mepShopDrawingOutsourcingGuideCards: MepBimUseCaseCard[] = [
  {
    title: "Site Coordination Before Installation",
    description:
      "Installation problems solved before construction starts makes construction go more quickly. Coordinated layouts reduce spatial conflicts and allow crews to install systems without rework.",
    icon: preInstallationFieldCoordinationIcon,
  },
  {
    title: "Offsite Fabrication and Spooling",
    description:
      "Clear and error-free documentation is much needed for fabrication to avoid delays in production. Fabrication-ready MEP Shop Drawings and spool sheets enable shops to construct components confidently.",
    icon: offsiteFabricationAndSpoolingIcon,
  },
  {
    title: "Contractor and Trade Synchronization",
    description:
      "Multiple trades need a common reference throughout construction. Coordinated Revit shop drawings for MEP help mechanical, electrical and plumbing contractors work from the same information.",
    icon: contractorAndTradeSynchronizationIcon,
  },
  {
    title: "Fast Track Construction Scheduling",
    description:
      "There is little chance for design changes during construction because the schedule is very tight. Stringent production support continues to keep delivery in line with project milestones and installation activities.",
    icon: acceleratedConstructionTimelinesIcon,
  },
];

export const mepShopDrawingMeasurableOutcomesSection = {
  tag: "Measurable Outcomes",
  titleLead: "Impact of our MEP Shop Drawings Services on ",
  titleAccent: "Your BIM Workflow",
  description:
    "Maximize your Return on Investment with detailed MEP shop drawings built for better installation and reduced onsite rework",
} as const;

export const mepShopDrawingMeasurableOutcomeCards: MepBimMeasurableResultCard[] = [
  {
    value: "35%",
    valueColor: "#42AA32",
    title: "Faster Onsite Installation Time",
    description:
      "Coordinated layouts give the installation teams a clear construction guide before they start work. More time spent solving field issues means projects stay on schedule.",
  },
  {
    value: "52%",
    valueColor: "#42AA32",
    title: "Field Rework Reduction",
    description:
      "Conflicts are identified and resolved at the coordination level and not at the site. Mechanical, electrical and plumbing systems integrate with fewer installation changes.",
  },
  {
    value: "45%",
    valueColor: "#42AA32",
    title: "Better Material Utilization",
    description:
      "Ready-to-fabricate documentation allows for accurate material planning and off-site fabrication. Planning things better means less unnecessary cutting, waste and over buying of material.",
  },
  {
    value: "50%",
    valueColor: "#42AA32",
    title: "Lower Construction RFIs",
    description:
      "MEP Shop Drawings are well coordinated to answer critical installation questions before construction begins. Project teams are spending less time on RFIs and more time on moving the work forward.",
  },
];

export const mepShopDrawingResourcesSection = {
  tag: "Resources",
  titleLine1: "Resources on ",
  titleLine2: "MEP Shop Drawing",
  description:
    "Explore technical thought leadership and actionable strategies designed to optimize your production workflows and scale without compromising standards.",
  viewAllHref: "/bim-resources/",
  serviceFilter: "MEP Engineering Firms",
} as const;

export const mepShopDrawingProjectCta = {
  titleLine1: "Your Strategic ",
  titleLine2: "MEP Shop Drawing Partner for Complex Projects",
  description:
    "Accurate MEP Shop Drawings keep fabrication, coordination and installation aligned from start to finish. Every drawing package supports faster construction, fewer RFIs and better project control.",
  cta: "Book a Quick Call",
  ctaHref: "/contact-us",
} as const;

export const mepShopDrawingFaqSection = {
  tag: "FAQs",
  description:
    "Explore answers to common questions about our services, workflows, deliverables, timelines, and project collaboration.",
} as const;

export const mepShopDrawingFaqs = [
  {
    q: "When should we engage an MEP Shop Drawing Service Provider and what inputs are needed?",
    a: "The best time to hire an MEP Shop Drawing Service Provider is after the construction documentation phase. Coordinated shop drawing production can start with the information found in architectural and structural drawings, MEP design documents, equipment submittals and project-specific BIM standards.",
  },
  {
    q: "How does an MEP Shop Drawing Company support interdisciplinary coordination and clash resolution?",
    a: "The experienced MEP Shop drawing Company coordinates architectural, structural, and MEP disciplines in a shared BIM environment. Catching clashes early, project teams can solve conflicts before fabrication which leads to fewer field changes and installation delays.",
  },
  {
    q: "How do you guarantee that Revit MEP Shop Drawings are accurate and code-compliant?",
    a: "All Revit MEP Shop Drawings go through a formal QA/QC review process before delivery.  Our specialists review layouts to SMACNA, NFPA and NEC and project requirements and check constructability for fabrication and installation.",
  },
  {
    q: "How does outsourcing MEP Shop Drawing Services impact project costs and construction schedules?",
    a: "Outsourcing MEP Shop Drawing Services expands the production capacity of your team without increasing the in-house workload. Coordinated drawings reduce RFIs, limit field rework and help contractors maintain project schedules. Many firms also reduce production overhead by 30% to 50%.",
  },
  {
    q: "What is your typical turnaround time and process for handling revisions?",
    a: "Turnaround depends on project size, drawing complexity and coordination requirements. All revisions go through a proven review process to make sure the updated MEP Shop Drawings are coordinated and aligned with the most current project information prior to final handover.",
  },
] as const;

export const mepShopDrawingFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: mepShopDrawingFaqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};
