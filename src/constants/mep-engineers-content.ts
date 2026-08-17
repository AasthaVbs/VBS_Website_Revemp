import type { StatItem } from "@/constants/shared-sections";
import { benefitIconColored, benefitIconMuted } from "@/constants/benefit-icons";
import { ROUTES } from "@/constants/navigation";
import {
  WHY_CHOOSE_ICON_TOP_BIM_EXPERTS,
} from "@/constants/service-why-choose-icons";

const threeDayOnboardingIcon = "/image/3-day-onboarding.svg";
const endToEndBimSupportIcon = "/image/end-to=end-bim-support-icon.svg";
const fastTurnaroundCycleIcon = "/image/fast-turnaround-cycle-icon.svg";
const fastTurnaroundIcon = "/image/fast-turnaround.svg";
const flexibleEngagementModelsIcon = "/image/flexible-engagement-models-icon.svg";
const usCodeCompliantDeliveryIcon = "/image/us-code-complinat-delivery-icon.svg";
const usCodeCompliantModelsIcon = "/image/us-code-complaints-models.svg";

export const mepStatsStrip: StatItem[] = [
  { value: "2000+", color: "text-vbs-red", label: "Projects Delivered" },
  { value: "300+", color: "text-vbs-green", label: "Global Clients" },
  { value: "11+", color: "text-vbs-blue", label: "Years of Experience" },
  { value: "200+", color: "text-vbs-yellow", label: "Licensed Engineers" },
];

export const mepEngineersHero = {
  tag: "MEP Engineering Firms",
  titleLead: "MEP BIM Services That Reduce Rework & ",
  titleAccent: "Improve Project Coordination",
  description:
    "From pre-bid estimation to clash-free coordination and as-built models we help contractors and AEC firms deliver projects faster and more efficiently.",
  ctaLabel: "View All Service",
  imageSrc: "/image/mep-bim-service-banner.jpg",
};

export const mepIntroPoints = [
  "Top 1% Vetted MEP Experts",
  "US Code-Compliant Models",
  "Fast Turnaround",
  "3-Day Onboarding",
];

export const mepIntroFeatures = [
  { label: "US Code-Compliant Models", icon: usCodeCompliantModelsIcon },
  { label: "Top 1% Vetted MEP Experts", icon: WHY_CHOOSE_ICON_TOP_BIM_EXPERTS },
  { label: "Fast Turnaround", icon: fastTurnaroundIcon },
  { label: "3-Day Onboarding", icon: threeDayOnboardingIcon },
];

export const mepIntroCopy = {
  tag: "Overview",
  titleLead: "Construction-Ready MEP BIM Services for ",
  titleAccent: "Seamless Project Execution",
  titleParts: [
    {
      text: "Construction-Ready MEP BIM Services ",
      className: "text-section font-medium text-[#111111]",
    },
    {
      text: "f",
      className: "text-section font-medium lowercase text-[#111111]",
    },
    {
      text: "or ",
      className: "text-section font-medium text-[#111111]",
    },
    {
      text: "Seamless Project Execution",
      className: "text-section text-accent font-light",
    },
  ],
  description:
    "We are a USA-focused MEP BIM service provider supporting AEC firms and contractors across the project lifecycle. From MEP BIM modeling and pre-bid estimation to clash-free coordination, shop drawings, and as-built documentation, we deliver accurate, code-compliant Revit and Navisworks models that keep projects moving efficiently.",
  mainImage: "/image/mep-bim-services-for-project.jpg",
};

export const mepWhatYouGetSection = {
  tag: "What You Get",
  titleLine1: "What You Get with",
  titleLine2: "Our MEP Services",
  titleParts: [
    { text: "What ", className: "text-section font-medium text-[#111111]" },
    { text: "Y", className: "text-section font-medium lowercase text-[#111111]" },
    { text: "ou Get ", className: "text-section font-medium text-[#111111]" },
    { text: "w", className: "text-section font-medium lowercase text-[#111111]" },
    { text: "ith ", className: "text-section font-medium text-[#111111]" },
    { text: "Our MEP Services", className: "text-section text-accent font-light" },
  ],
  description:
    "Our MEP BIM services support accurate modeling, clash coordination, and construction-ready documentation to improve project efficiency and reduce site conflicts across all MEPF trades.",
  resultLabel: "Result",
  resultText:
    "Faster coordination, fewer site conflicts, and improved project delivery timelines across all MEPF trades.",
};

export const mepWhatYouGetCards = [
  {
    title: "BIM Modeling & Design",
    icon: "/images/mep/what-you-get/icon-bim-modeling.svg",
    elevated: true,
    lines: [
      "Detailed Coordinated MEPF Modeling Solutions",
      "LOD 200-500 BIM models in Autodesk Revit",
      "Custom high-quality Revit family creation",
      "Code-compliant parametric MEP families",
    ],
  },
  {
    title: "Clash-detection & Coordination",
    icon: "/images/mep/what-you-get/icon-clash-detection.svg",
    elevated: false,
    lines: [
      "Clash detection and coordination using Navisworks and BIM 360",
      "Coordinated MEP shop drawings and spool drawings",
      "Construction Code modeling",
      "Clash reports with resolution tracking",
    ],
  },
  {
    title: "Project Support & Delivery",
    icon: "/images/mep/what-you-get/icon-project-support.svg",
    elevated: false,
    lines: [
      "Quantity take-offs and BOQ extraction",
      "As-built modeling and FM ready LOD 500 documentation",
      "Full support across design, construction, and handover stages",
      "4D scheduling and 5D cost estimation",
    ],
  },
];

export const mepFullSpectrumSection = {
  tag: "Services",
  titleLine1: "Our Full-Spectrum ",
  titleLine2: "MEP Services",
  description:
    "We deliver accurate 3D MEPF models (LOD 200–500) that ensure seamless clash detection, coordinated shop drawings, and constructible BIM models across every stage from pre-bid to as-built handover.",
  ctaLabel: "Let's Talk",
  ctaHref: "#mep-page-contact",
  wideCards: true,
};

/** Figma 5-12911 — horizontal service cards with image crop offsets. */
export const mepFullSpectrumCards = [
  {
    title: "MEP BIM Modeling Services",
    text: "We deliver data-rich 3D MEPF models (LOD 300–500) that ensure seamless integration with architectural and structural systems. Our models comply with ASHRAE, NEC, IPC, and NFPA standards to enhance coordination, reduce rework, and support design validation and facility management.",
    image: "/image/MEP BIM Modeling-1.jpeg",
    imageCrop: { width: 522, height: 292, left: -31, top: -4.88 },
    href: "/mep-bim-services/mep-bim-modeling-services",
  },
  {
    title: "MEP Revit Family Creation Services",
    text: "We Deliver custom, parametric Revit families for MEP components like valves, fixtures, and panels, built to project standards. Each family is performance-tested for accuracy, flexibility, and interoperability within the Revit platform, ensuring consistent documentation and scheduling.",
    image: "/image/MEP Revit Family Creation-2.jpeg",
    imageCrop: { width: 502, height: 280, left: -21, top: 0 },
    elevated: false,
    href: "/mep-bim-services/mep-revit-family-creation-services",
  },
  {
    title: "MEP Shop Drawing Services",
    text: "Our installation-ready MEP shop drawings include detailed plans, sections, and assemblies for HVAC, piping, and electrical systems. We also provide sleeve layouts, hanger details, and dimensioned drawings that align with contractor and fabrication requirements.",
    image: "/image/MEP-BIM-Modeling-Services-2.jpg",
    imageCrop: { width: 532, height: 280, left: -36, top: 0 },
    elevated: false,
    href: "/mep-bim-services/mep-shop-drawing-services",
  },
  {
    title: "Bill of Material (BOM) Services",
    text: "Using BIM models, we extract accurate quantities and generate detailed BOQs for all MEP systems. Our automated QTO services reduce manual errors and offer reliable cost estimation for budgeting, resource planning, and project control.",
    image: "/image/Bill-of-Material-(BOM)-Services.jpg",
    imageCrop: { width: 532, height: 280, left: -30, top: 0 },
    elevated: false,
    href: "/mep-bim-services/bill-of-material-services",
  },
  {
    title: "Pre-Bid Estimation Services",
    text: "We deliver accurate pre-bid estimates using advanced BIM tools and industry-standard software, covering material takeoffs, labor costs, and equipment pricing. Our fast turnarounds and precise reports help contractors bid confidently, reduce cost overruns, and win more profitable projects.",
    image: "/image/Pre-Bid-Estimation-Services-1.jpg",
    imageCrop: { width: 532, height: 280, left: -25, top: 0 },
    elevated: false,
    href: "/mep-bim-services/pre-bid-estimation-services",
  },
  {
    title: "MEP Spool Drawing Services",
    text: "We create fabrication-ready spool drawings for MEP systems, complete with dimensions, IDs, joint locations, and material specifications. These detailed drawings streamline off-site prefabrication, reduce site installation errors, and support efficient construction sequencing.",
    image: "/image/MEP-Spool-Drawing-Services-1.jpg",
    imageCrop: { width: 532, height: 280, left: -36, top: 0 },
    elevated: false,
    href: "#",
  },
  {
    title: "MEP Clash Detection & Coordination Services",
    text: "Our expert BIM team performs clash detection using Navisworks and BIM 360 to identify and resolve conflicts between MEP, architectural, and structural systems. Our coordination process ensures constructability through issue tracking, clash reports, and collaborative resolution sessions with project stakeholders.",
    image: "/image/MEP Clash Detection & Coordination-2.png",
    imageCrop: { width: 501, height: 280, left: -21, top: 0 },
    elevated: false,
    titleMinHeight: 30,
    href: "/mep-bim-services/mep-coordination-services",
  },
  {
    title: "Scan to BIM Services for MEP Systems",
    text: "We convert point cloud data into detailed MEP as-built models for renovation and facility management projects. These models represent real-world conditions and help with accurate planning, coordination, advanced clash detection, improved decision-making, and lifecycle documentation, ensuring higher efficiency across all project stages.",
    image: "/image/Scan to BIM Services for MEP Systems.jpeg",
    imageCrop: { width: 502, height: 280, left: -21, top: 0 },
    elevated: false,
    titleMinHeight: 30,
    href: "#",
  },
];

export const mepDisciplinesSection = {
  tag: "MEP Disciplines",
  titleLine1: "Core ",
  titleLine2: "MEP Disciplines ",
  titleLine3: "Modeled with BIM Expertise",
  titleMaxWidth: 800,
  descriptionMaxWidth: 800,
  description:
    "Each discipline in MEP BIM Services demands a distinct technical approach. Virtual Building Studio models every system with code-accurate detail and full coordination across trades.",
};

/** Figma 5-13018 — tabbed discipline panels. */
export const mepDisciplinePanels = [
  {
    id: "mech",
    tabLabel: "Mechanical BIM",
    title: "Mechanical BIM Services",
    description:
      "Our Mechanical BIM Services deliver full 3D models of ductwork, AHU placements, piping systems, and plant rooms, sized to SMACNA standards with precise coordination across structure and services. Models support design validation, fabrication, and site installation, with coordinated schedules ready for contractor review and shop drawing generation.",
    meta: [
      { label: "Standards Applied", value: "SMACNA Ductwork, ASHRAE 90.1, ASHRAE 62.1" },
      {
        label: "Key Systems Modeled",
        value: "Supply/Return Ductwork, AHUs, VAV Boxes, ERUs, FCUs, Plant Rooms",
      },
      {
        label: "LOD Capability",
        value: "LOD 300 Design → LOD 400 Fabrication → LOD 500 As-Built",
      },
    ],
    deliverablesTitle: "Mechanical BIM Deliverables",
    deliverables: [
      "Coordinated duct routing models with SMACNA sheet metal gauges and fittings",
      "AHU and equipment placement with factory-clearance zones modeled",
      "Plant room layouts with structural interface coordination",
      "Duct pressure class schedules and volume control damper locations",
      "Chilled water and condenser water piping at LOD 350+",
      "Mechanical shop drawings and hanger/support details",
      "Duct and equipment quantity take-off schedules",
    ],
  },
  {
    id: "elec",
    tabLabel: "Electrical BIM",
    title: "Electrical BIM Services",
    description:
      "Electrical BIM models cover power distribution, lighting layouts, panel schedules, and conduit routing with NEC-compliant parameters. We coordinate cable trays and equipment clearances with structural and MEP trades for clash-free installation paths.",
    meta: [
      { label: "Standards Applied", value: "NEC, NFPA 70, IEEE, IES Lighting Standards" },
      {
        label: "Key Systems Modeled",
        value: "Panelboards, Transformers, Cable Trays, Conduit, Lighting Fixtures",
      },
      {
        label: "LOD Capability",
        value: "LOD 300 Design → LOD 400 Fabrication → LOD 500 As-Built",
      },
    ],
    deliverablesTitle: "Electrical BIM Deliverables",
    deliverables: [
      "Coordinated power and lighting models with NEC-compliant routing",
      "Panel schedules, circuiting, and feeder routing documentation",
      "Cable tray and conduit layouts with clearance coordination",
      "One-line diagrams and equipment connection details",
      "Lighting layout models with fixture schedules",
      "Electrical shop drawings and panel board layouts",
      "Quantity take-offs for conduit, wire, and equipment",
    ],
  },
  {
    id: "plmb",
    tabLabel: "Plumbing BIM",
    title: "Plumbing BIM Services",
    description:
      "Plumbing BIM includes domestic water, sanitary waste, vent systems, and storm drainage modeled to IPC standards. We produce coordinated layouts with slope verification, pipe sizing, and fixture connections ready for submittal and fabrication.",
    meta: [
      { label: "Standards Applied", value: "IPC, UPC, ASPE, Local AHJ Requirements" },
      {
        label: "Key Systems Modeled",
        value: "Domestic Water, Sanitary Waste, Vent Systems, Storm Drainage",
      },
      {
        label: "LOD Capability",
        value: "LOD 300 Design → LOD 400 Fabrication → LOD 500 As-Built",
      },
    ],
    deliverablesTitle: "Plumbing BIM Deliverables",
    deliverables: [
      "Coordinated plumbing layouts with verified slopes and pipe sizing",
      "Riser diagrams, isometrics, and fixture schedules",
      "Domestic water and sanitary waste routing models",
      "Storm drainage and vent system coordination",
      "Plumbing shop drawings and sleeve penetration layouts",
      "Equipment and fixture connection details",
      "BOQ and material schedules for plumbing systems",
    ],
  },
  {
    id: "fire",
    tabLabel: "Fire Protection BIM",
    title: "Fire Protection BIM Services",
    description:
      "Fire protection BIM covers sprinkler systems, standpipes, and fire alarm device placement per NFPA standards. Models integrate with architectural ceilings and structural framing for accurate hydraulic calculations and installation planning.",
    meta: [
      { label: "Standards Applied", value: "NFPA 13, NFPA 72, NFPA 101, Local Fire Codes" },
      {
        label: "Key Systems Modeled",
        value: "Sprinkler Systems, Standpipes, Fire Alarm Devices, Fire Pumps",
      },
      {
        label: "LOD Capability",
        value: "LOD 300 Design → LOD 400 Fabrication → LOD 500 As-Built",
      },
    ],
    deliverablesTitle: "Fire Protection BIM Deliverables",
    deliverables: [
      "Sprinkler layout models coordinated with ceiling and structure",
      "Hydraulic calculation support and pipe sizing documentation",
      "Fire alarm device placement and routing models",
      "Standpipe and fire pump room coordination drawings",
      "Clash-free coordination with MEP and architectural trades",
      "Fire protection shop drawings and spool details",
      "As-built fire protection models for facility handover",
    ],
  },
];

export const mepWorkflowSection = {
  tag: "Service Workflow",
  titleLine1: "Our Revit MEP BIM ",
  titleLine2: "Services\u00a0Workflow",
  description:
    "Comprehensive MEP Modeling Services Integrating HVAC, Electrical, Mechanical Piping, Plumbing, and Fire Protection Workflows",
};

/** Figma 5-13078 — zigzag workflow steps. */
export const mepWorkflowSteps = [
  {
    number: "01",
    title: "Project Initiation & BEP Setup",
    text: "We receive architectural models, MEP design drawings, and project specifications from your team. We establish the BEP, define LOD requirements, and configure file-sharing protocols in Autodesk BIM 360. Coordinate references and shared parameters get verified before modeling starts.",
  },
  {
    number: "02",
    title: "Discipline MEP BIM Modeling",
    text: "We model each MEPF discipline separately like mechanical, electrical, plumbing, and fire protection in Revit MEP. System families, connector parameters, and LOD-appropriate content populate each discipline model. Modeling follows project-specific drafting standards and code requirements for each trade.",
  },
  {
    number: "03",
    title: "Clash Detection & Coordination",
    text: "We link discipline models and run hard, soft, and clearance clash tests in Navisworks Manage. Clash reports document conflicts with annotated screenshots and location references. Coordination meetings address clashes with trade representatives, and model updates reflect resolved items.",
  },
  {
    number: "04",
    title: "Construction Documentation",
    text: "We extract MEP shop drawings, spool drawings, reflected ceiling plans, and section views from the coordinated model. All documentation meets contractor, fabricator, and AHJ submission standards for each project jurisdiction. Installation Details accompany every shop drawing package.",
  },
  {
    number: "05",
    title: "QTO & BOQ Extraction",
    text: "We generate automated material take-offs directly from the coordinated Revit MEP model. Accurate BOQs cover ductwork, piping, conduit, fittings, and equipment for each MEPF trade. These schedules support procurement, cost estimation, and change order documentation with model-verified quantities.",
  },
  {
    number: "06",
    title: "As-Built & FM Handover",
    text: "We update models to reflect site conditions and issued-for-construction revisions throughout the build phase. LOD 500 as-built models and COBie-compliant data exports support facility management and owner operations. Final deliverables cover RVT, IFC, DWG, and NWD formats for complete project compatibility.",
  },
];

export const mepQualityAssuranceSection = {
  tag: "Quality Assurance",
  titleLine1: "Our Technical Methods for ",
  titleLine2: "Inter-Disciplinary Conflict Resolution",
  description:
    "MEP BIM Services at Virtual Building Studio apply a two-stage clash detection process that catches conflicts early and resolves them before construction begins - reducing RFIs and cutting change order volume at the project site.",
  quote:
    '"Prevention costs less than correction. Our two-stage process catches conflicts at the design phase - eliminating costly site modifications and delivering clash-free models that construction teams can trust."',
  quoteAttribution: "-VBS BIM Coordination Approach",
};

/** Figma 5-13130 — two-stage clash resolution cards. */
export const mepQualityAssuranceStages = [
  {
    prefix: "0",
    suffix: "1",
    prefixColor: "#42AA32",
    title: "In-Model Coordination",
    text: "Each trade model receives internal coordination checks using Revit's interference checking tools. Our BIM engineers review spatial conflicts between ducts, pipes, conduits, and structural elements within the linked model environment catching issues at the design stage",
    elevated: true,
  },
  {
    prefix: "0",
    suffix: "2",
    prefixColor: "#2299D6",
    title: "Navisworks Federation",
    text: "We federate all trade models architectural, structural, mechanical, electrical, plumbing, and fire protection within Navisworks. We run rule-based clash tests for hard clashes, soft clashes (clearance violations), and workflow clashes (sequencing conflicts). Clash reports categorize each conflict by severity, trade, and grid reference.",
    elevated: false,
  },
];

/** Figma 5-13130 — QA stats strip. */
export const mepQualityAssuranceStats = [
  { value: "2x", valueColor: "#D70416", label: "Clash detection stages on every project" },
  { value: "LOD 400", valueColor: "#42AA32", label: "Fabrication-level resolution for shop drawings" },
  { value: "6 Trades", valueColor: "#2299D6", label: "Arch + Struct + MEP + FP federated coordination" },
  { value: "Weekly", valueColor: "#F0B300", label: "Coordination meetings with all stakeholders" },
];

export const mepServiceBenefitsSection = {
  tag: "Service benefits",
  titleLine1: "Key Benefits of Adopting ",
  titleLine2: "MEP BIM Services",
  titleMaxWidth: 700,
  description:
    "MEP BIM Services transform every phase of your project from design to facility management. Virtual Building Studio delivers measurable outcomes across coordination, cost, and construction efficiency.",
  ctaLabel: "Let's Talk",
  ctaHref: "#mep-page-contact",
};

const MEP_BENEFIT_ICON_COLORED = benefitIconColored;
const MEP_BENEFIT_ICON_DEFAULT = benefitIconMuted;

/** Figma — 3×2 service benefits grid. */
export const mepServiceBenefitsCards = [
  {
    title: "Improved Design Accuracy",
    text: "MEP BIM Services produce precise MEPF layouts that meet spatial and project requirements with fewer revisions. Accurate parametric models reduce design errors and cut coordination cycles across all trades.",
    icon: MEP_BENEFIT_ICON_DEFAULT,
    iconHover: MEP_BENEFIT_ICON_COLORED,
    textMaxWidth: 433,
  },
  {
    title: "Smarter Facility Management",
    text: "BIM models enriched with COBie and asset data act as digital twins for long-term building operations. Facility managers efficiently track maintenance schedules, assets, and system upgrades directly from the model data.",
    icon: MEP_BENEFIT_ICON_DEFAULT,
    iconHover: MEP_BENEFIT_ICON_COLORED,
  },
  {
    title: "Enhanced Visualization & Planning",
    text: "High-resolution 3D MEPF models give all project stakeholders complete visibility into system layouts and design intent. Teams assess constructability, identify conflicts, and make informed decisions before construction begins.",
    icon: MEP_BENEFIT_ICON_DEFAULT,
    iconHover: MEP_BENEFIT_ICON_COLORED,
  },
  {
    title: "Optimized Project Scheduling & Costing",
    text: "4D and 5D BIM dimensions allow accurate construction sequencing and reliable cost forecasting. Quantity take-offs and cost estimates come directly from the coordinated model, improving planning and financial control.",
    icon: MEP_BENEFIT_ICON_DEFAULT,
    iconHover: MEP_BENEFIT_ICON_COLORED,
    textMaxWidth: 433,
  },
  {
    title: "Faster Prefabrication & Modular Construction",
    text: "Clash-free MEPF models support generation of accurate spool and shop drawings for off-site fabrication. Coordinated models accelerate installation timelines, reduce material waste, and improve quality through construction.",
    icon: MEP_BENEFIT_ICON_DEFAULT,
    iconHover: MEP_BENEFIT_ICON_COLORED,
  },
  {
    title: "Seamless Multidisciplinary Coordination",
    text: "Integrated BIM workflows foster seamless, real-time collaboration among all project disciplines. Early-stage coordination catches design clashes before construction, eliminating costly change orders and project delays.",
    icon: MEP_BENEFIT_ICON_DEFAULT,
    iconHover: MEP_BENEFIT_ICON_COLORED,
  },
];

export const mepWhyChooseSection = {
  tag: "Why Choose Us",
  titleLine1: "Why Leading Firms Choose ",
  titleAccentLead: "Our",
  titleAccentRest: "MEP BIM Services",
  description:
    "Work with a BIM partner that delivers accuracy, speed, and results across every stage of your project from pre-bid to as-built handover.",
  ctaLabel: "Build Your Team",
  ctaHref: ROUTES.contact,
};

/** Figma 5-13264 — 3 + 2 why choose grid. */
export const mepWhyChooseItems = [
  {
    title: "Top 1% BIM Experts",
    description:
      "Highly experienced MEP BIM professionals trained on global standards and complex US projects worldwide.",
    icon: WHY_CHOOSE_ICON_TOP_BIM_EXPERTS,
  },
  {
    title: "US Code-Compliant Delivery",
    description:
      "Models align with ASHRAE, NFPA, IPC, SMACNA, NEC, and regional AHJ compliance requirements.",
    icon: usCodeCompliantDeliveryIcon,
  },
  {
    title: "Fast Turnaround Cycles",
    description:
      "Accelerate project timelines with efficient BIM workflows and quick delivery cycles tuned for US contractor schedules.",
    icon: fastTurnaroundCycleIcon,
  },
  {
    title: "Flexible Engagement Models",
    description:
      "Scale your BIM team with dedicated resources, task support, or full project teams with zero long-term lock-in.",
    icon: flexibleEngagementModelsIcon,
  },
  {
    title: "End-to-End BIM Support",
    description:
      "From pre-bid modeling to as-built documentation complete MEP project lifecycle support under one roof.",
    icon: endToEndBimSupportIcon,
  },
];

export const mepProjectCta = {
  titleLine1: "Start Your Next Project with ",
  titleLine2: "MEP BIM Services That Deliver",
  description:
    "From pre-bid modeling to as-built documentation Virtual Building Studio delivers end-to-end BIM MEP Services that drive accuracy, coordination, and efficiency across every project phase.",
  cta: "Book a call",
  ctaHref: ROUTES.contact,
};

export const mepTestimonialsDescription =
  "Hear how architects and firm owners scaled production, reclaimed time, and grew revenue with dedicated BIM support.";

export const mepEngagementProcessSection = {
  tag: "Engagement Model",
  titleLine1: "Get Started with the Right",
  titleLine2: "MEP BIM Engagement Model",
  description:
    "Whether you need a dedicated MEP BIM expert or a full project team, our flexible engagement models adapt to your scope, timeline, and project requirements.",
  cta: "Inquire Now",
  ctaHref: "#mep-page-contact",
};

export const mepEngagementProcessSteps = [
  {
    prefix: "0",
    number: "1",
    prefixColor: "text-[#42AA32]",
    title: "Share Your Requirements",
    description:
      "Tell us about your project scope, timelines, and MEP BIM needs. We carefully align the right MEP expertise to your goals and project milestones.",
  },
  {
    prefix: "0",
    number: "2",
    prefixColor: "text-[#2299D6]",
    title: "Get the Right BIM Experts",
    description:
      "We match you with experienced MEP BIM professionals tailored to your project within a fast turnaround. Your team is vetted, trained on US standards, and ready to deliver.",
  },
  {
    prefix: "0",
    number: "3",
    prefixColor: "text-[#F0B300]",
    title: "Execute & Scale Seamlessly",
    description:
      "Start quickly, collaborate efficiently, and scale your BIM team as your project grows. Our engagement model carries zero commitments and a one-month risk-free trial.",
  },
];

/** @deprecated use mepEngagementProcessSection */
export const mepEngagementBenefitsSection = {
  tag: mepEngagementProcessSection.tag,
  titleLine1: `${mepEngagementProcessSection.titleLine1} `,
  titleLine2: mepEngagementProcessSection.titleLine2,
  description: mepEngagementProcessSection.description,
  ctaLabel: mepEngagementProcessSection.cta,
  ctaHref: mepEngagementProcessSection.ctaHref,
};

/** @deprecated use mepEngagementProcessSteps */
export const mepEngagementBenefitsItems = [
  {
    id: "01",
    color: "text-vbs-green",
    title: mepEngagementProcessSteps[0].title,
    description: mepEngagementProcessSteps[0].description,
  },
  {
    id: "02",
    color: "text-vbs-blue",
    title: mepEngagementProcessSteps[1].title,
    description: mepEngagementProcessSteps[1].description,
  },
  {
    id: "03",
    color: "text-vbs-yellow",
    title: mepEngagementProcessSteps[2].title,
    description: mepEngagementProcessSteps[2].description,
  },
];

export const mepFaqDescription =
  "Everything you need to know before getting started.";

export const mepFaqSection = {
  tag: "FAQs",
  description: mepFaqDescription,
};

export const mepFaqs = [
  {
    q: "How do you ensure compliance with US building codes and standards?",
    a: "We use your company templates and work exclusively in Imperial units. Our modelers are trained in NFPA, NEC, and IPC standards, ensuring all 3D production meets local US regulatory requirements and project-specific BEP guidelines.",
  },
  {
    q: "What is the difference between your LOD 300 and LOD 400 MEP models?",
    a: "LOD 300 focuses on design intent and high-level spatial validation. LOD 400 adds fabrication-level detail, including hangers, supports, and manufacturer-specific metadata. We can scale the model's complexity as your project moves from design to the field.",
  },
  {
    q: "How do we handle communication and time zone differences?",
    a: "We turn time zones into a 24-hour production cycle. While your US team finishes the day, our dedicated modelers handle the 3D authoring overnight, providing updated Revit files for your morning review via Slack, Teams, or BIM 360.",
  },
  {
    q: "Can your dedicated modelers work directly within our BIM 360 / ACC environment?",
    a: "Yes. We function as a virtual extension of your office. By working directly in your Autodesk Construction Cloud (ACC) hub, we enable real-time collaboration on central models, ensuring data security and eliminating file-transfer delays.",
  },
  {
    q: "Can you help with Point Cloud to BIM for renovation projects?",
    a: "Absolutely. We specialize in Post-Construction As-Built Capture. We transform raw laser scan data into precise, field-verified Revit models, providing a true-to-site digital foundation when original 2D drawings are missing or inaccurate.",
  },
];

export const mepFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: mepFaqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export const mepResourcesSection = {
  tag: "Resources",
  titleLine1: "Explore Our MEP BIM ",
  titleLine2: "Insights & Resources",
  description:
    "Browse our latest guides, case studies, and articles on MEP BIM workflows, coordination strategies, and US code compliance to help you plan and deliver smarter projects.",
  viewAllHref: "/bim-resources/",
  serviceFilter: "MEP Engineering Firms",
};

export const mepResourcesFilters = [
  "All",
  "Blogs",
  "Webinar",
  "Case Study",
  "White Paper",
];

export const mepResourceBadgeStyles = {
  Webinar: { bg: "#F0B300", color: "#FBF9F9", border: "#F0B300" },
  Blog: { bg: "#D70416", color: "#FFFFFF", border: "#D70416" },
  "Case Study": { bg: "#42AA32", color: "#FFFFFF", border: "#42AA32" },
  "White Paper": { bg: "#2299D6", color: "#FFFFFF", border: "#2299D6" },
};

const MEP_RESOURCE_TITLE =
  "Why AutoCAD to BIM Conversion is Essential for Modern Construction";

const MEP_RESOURCE_EXCERPT =
  "Whether you're launching a new product or entering a new segment, we design the GTM motion that lands and scales.";

export const mepResourcesFeatured = {
  type: "Webinar",
  title: MEP_RESOURCE_TITLE,
  excerpt: MEP_RESOURCE_EXCERPT,
  image: "/image/webinar-with-lance-img.jpg",
  // imageCrop: { width: 710, height: 450, left: 0, top: 0 },
  href: "/webinar/",
};

export const mepResourcesListItems = [
  {
    type: "Blog",
    title: MEP_RESOURCE_TITLE,
    date: "12 Jan 2026",
    image: "/images/figma/resource-1.png",
    imageCrop: { width: 345, height: 219, left: 0, top: 0 },
    href: "/blog/autocad-bim/",
  },
  {
    type: "Case Study",
    title: MEP_RESOURCE_TITLE,
    date: "12 Jan 2026",
    image: "/images/figma/resource-2.png",
    imageCrop: { width: 345, height: 219, left: 0, top: 0 },
    href: "/projects/",
  },
  {
    type: "White Paper",
    title: MEP_RESOURCE_TITLE,
    date: "12 Jan 2026",
    image: "/images/figma/resource-3.png",
    imageCrop: { width: 345, height: 219, left: 0, top: 0 },
    href: "/whitepaper/hidden-cost-of-late-stage-mep-coordination-failures/",
  },
];

export const mepIndustriesSection = {
  tag: "Industries",
  titleLine1: "Industries We Support With",
  titleBeforeAccent: "Our ",
  titleLine2: "MEP BIM Expertise",
  breakTitle: true,
  titleMaxWidth: 850,
  description:
    "Delivering precision-driven MEP BIM solutions tailored to the unique requirements of every construction sector.",
};

const mepIndustryImg = (file: string) => encodeURI(`/image/${file}`);

export const mepIndustriesCards = [
  {
    img: mepIndustryImg("Commercial & MIxed Use.png"),
    title: "Commercial & Mixed-Use",
    imageCrop: { width: 330, height: 330, left: 0, top: 0 },
    titleWidth: 210,
  },
  {
    img: mepIndustryImg("Healthcare.png"),
    title: "Healthcare",
    imageCrop: { width: 330, height: 330, left: 0, top: 0 },
  },
  {
    img: mepIndustryImg("Educational.png"),
    title: "Educational",
    imageCrop: { width: 330, height: 330, left: 0, top: 0 },
  },
  {
    img: mepIndustryImg("Mission Critical.png"),
    title: "Mission Critical",
    imageCrop: { width: 330, height: 330, left: 0, top: 0 },
  },
  {
    img: mepIndustryImg("Hospitality & Residential.png"),
    title: "Hospitality & Residential",
    imageCrop: { width: 330, height: 330, left: 0, top: 0 },
  },
  {
    img: mepIndustryImg("Industrial & Manufacturing.png"),
    title: "Industrial & Manufacturing",
    imageCrop: { width: 330, height: 330, left: 0, top: 0 },
    titleWidth: 184,
  },
  {
    img: mepIndustryImg("Civic & Government Infrastructure.png"),
    title: "Civic & Government Infrastructure",
    imageCrop: { width: 330, height: 330, left: 0, top: 0 },
    titleWidth: 228,
  },
  {
    img: mepIndustryImg("Heritage, Religious & Cultural Spaces.png"),
    title: "Heritage, Religious & Cultural Spaces",
    imageCrop: { width: 330, height: 330, left: 0, top: 0 },
    titleWidth: 228,
  },
];

export const resourcesPageHero = {
  tag: "Resources",
  titleLead: "BIM ",
  titleAccent: "Resource Hub",
  description:
    "Since 2015, we've been the trusted partner for Architecture and Engineering firms, helping them rapidly scale their BIM teams and deliver award-winning projects every time.",
  ctaLabel: "Contact Us",
  image: "/image/blog-banner.png",
  imageAlt: "Virtual Building Studio resources",
};
