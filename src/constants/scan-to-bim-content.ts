// @ts-nocheck
import aiPoweredScanIcon from "@/assets/images/ai-owered-scan.svg";
import fasterProjectKickoffIcon from "@/assets/images/faster-project-kickoff-icon.png";
import fasterStakeholderIcon from "@/assets/images/faster-stakeholder-icon.png";
import lod200To500Icon from "@/assets/images/lod200-500.svg";
import lowerOperationalIcon from "@/assets/images/lower-operational-icon.png";
import reductionInFieldReworkIcon from "@/assets/images/reduction-in-field-rework-icon.png";
import { benefitIconColored, benefitIconMuted } from "@/constants/benefit-icons";
import { mepStatsStrip } from "@/constants/mep-engineers-content";
import { ROUTES } from "@/constants/navigation";
import { allServicesResourcesSection } from "@/constants/shared-sections";

export { mepStatsStrip as scanToBimStatsStrip };

export const scanToBimHero = {
  tag: "Reality Capture & Survey",
  titleLead: "AI-powered Reality Capture to ",
  titleAccent: "BIM Services for Precise As-Built Modeling",
  description:
    "We convert point cloud data into construction-ready scan-to-BIM models in Revit for renovation, coordination, and facility management, be it heritage restoration or complex MEP retrofits.",
  ctaLabel: "Claim Your Free Pilot",
  imageSrc: "/image/scan-to-bim-banner-2.png",
  copyMaxWidth: 660,
  descriptionMaxWidth: 620,
};

export const scanToBimIntroPoints = [
  "10,000 Sq.Ft. Modeling Per Day",
  "AI-powered Scan to BIM Workflow",
  "100+ Automated QA Checks Per Model",
  "LOD 200 – 500 Modeling Capability",
];

export const scanToBimIntroFeatures = [
  { label: "AI-powered Scan to BIM Workflow", icon: aiPoweredScanIcon },
  { label: "10,000 Sq.Ft. Modeling Per Day", icon: fasterStakeholderIcon },
  { label: "100+ Automated QA Checks Per Model", icon: reductionInFieldReworkIcon },
  { label: "LOD 200 – 500 Modeling Capability", icon: lod200To500Icon },
];

export const scanToBimIntroCopy = {
  tag: "Overview",
  titleLead: "Construction-Ready Scan to As-built Services for ",
  titleAccent: "Seamless Project Execution",
  titleParts: [
    { text: "Construction-Ready Scan ", className: "text-section font-medium text-[#111111]" },
    { text: "t", className: "text-section font-medium lowercase text-[#111111]" },
    { text: "o As-built Services", className: "text-section font-medium text-[#111111]" },
    { text: " f", className: "text-section font-medium lowercase text-[#111111]" },
    { text: "or ", className: "text-section font-medium text-[#111111]" },
    { text: "Seamless Project Execution", className: "text-section text-accent font-light" },
  ],
  description:
    "Laser scanning technologies give highly detailed point cloud data. Converting that data into actionable project information requires specialized BIM expertise. Our scan to BIM team converts point cloud data into coordinated BIM models. We serve architects, surveyors, and contractors in the USA, UK, and European countries. From as-built documentation to renovation planning, we deliver 3D scan to Revit models faster. We provide accurate, project-ready deliverables for scan-to-BIM projects in the USA.",
  mainImage: "/image/scan-to-as-built-services-overview.jpg",
};

export const scanToBimWhatYouGetSection = {
  tag: "What You Get",
  titleLine1: "What You Get with Our ",
  titleLine2: "laser scan to BIM Services",
  titleParts: [
    { text: "What You Get with Our ", className: "text-section font-medium text-[#111111] block" },
    { text: "laser scan to BIM Services", className: "text-section text-accent font-light block" },
  ],
  titleMaxWidth: 650,
  description:
    "Maximize project predictability with high-precision scan to BIM services in Revit that deliver data-rich, clash-free, and compliance-verified as-built models.",
  resultLabel: "Result",
  resultText:
    "Uncompromisingly accurate as-built models slash site rework by up to 25% and drive a 50% faster decision-making lifecycle for multi-trade project teams.",
};

export const scanToBimWhatYouGetCards = [
  {
    title: "Reality Capture & Point Cloud Processing",
    icon: "/images/mep/what-you-get/icon-bim-modeling.svg",
    elevated: false,
    lines: [
      "Multi-format file ingestion",
      "Target-based point cloud alignment",
      "Automated artifact cleaning",
      "Precision deviation analysis",
    ],
  },
  {
    title: "Multidisciplinary Model Creation",
    icon: "/images/mep/what-you-get/icon-clash-detection.svg",
    elevated: false,
    lines: [
      "Parametric architectural geometry",
      "Multi-disciplinary BIM modeling",
      "Clash detection and BIM coordination",
      "Tailored LOD parameters",
    ],
  },
  {
    title: "Quality Assurance & Delivery",
    icon: "/images/mep/what-you-get/icon-project-support.svg",
    elevated: false,
    lines: [
      "Automated QA checkpoints",
      "Rigorous tolerance auditing",
      "Complete parameter verification",
      "Absolute IFC schema compliance",
    ],
  },
];

export const scanToBimFullSpectrumSection = {
  tag: "Services",
  titleLine1: "Comprehensive Reality capture to ",
  titleLine2: "BIM Conversion Services",
  titleMaxWidth: 850,
  description:
    "We provide precise 3D as-built models for single-floor retrofits to multi-building renovations, keeping your projects on schedule and within tolerance.",
  ctaLabel: "Let's Talk",
  ctaHref: "#scan-page-contact",
  wideCards: true,
};

export const scanToBimFullSpectrumCards = [
  {
    title: "3D Laser Scanning Services",
    text: "Stop relying on outdated drawings and incomplete site data. We scan your building or site with high-definition LiDAR equipment, giving your team verified, millimeter-accurate point cloud data. Every project starts with a reliable foundation.",
    image: "/image/3d-laser-scanning-services.jpg",
    elevated: true,
    href: "#",
  },
  {
    title: "Scan to 3D Modeling Services",
    text: "Turn your scan data into models your team can actually use. We convert point clouds into accurate, construction-ready 3D models across architectural, structural, and MEP disciplines. Every model is QA-checked before it reaches you.",
    image: "/image/scan-to-3d-modeling-services.jpg",
    href: "https://www.scantobim.online/3d-modeling-services/",
  },
  {
    title: "As-built Drawing Services",
    text: "Our scan to BIM specialists convert your scan data into an accurate as-built Revit model. Floor plans, sections, and elevations are then extracted directly from that model. Your team gets dimensioned, annotated drawings ready for design, permits, and contractor coordination.",
    image: "/image/as-built-drawing-services.jpg",
    href: "/as-built-modeling-services",
  },
  {
    title: "Point Cloud to BIM",
    text: "When standard BIM models are not enough, we deliver high-resolution BIM that preserves every surface, texture, and geometric detail from your scan. Ideal for heritage projects, facade assessments, and visual condition reporting.",
    image: "/image/point-cloud-to-3d-meshes.jpg",
    href: "https://www.scantobim.online/point-cloud-to-bim-services/",
  },
  {
    title: "Scan to 3D Visualization",
    text: "Help your clients and stakeholders see exactly what exists before design decisions are made. We take your scan data and convert it into photorealistic visualization outputs. That 3D walkthrough makes existing conditions easy to understand and communicate.",
    image: "/image/scan-to-visualization-2.jpg",
    href: "https://www.scantobim.online/resource/scan-to-bim-videos/",
  },
  {
    title: "Scan to Revit Family Creation",
    text: "Legacy equipment and non-standard building components should not slow your BIM workflow. We build custom parametric Revit families from your scan geometry, so every unique element is accurately represented and ready for coordination.",
    image: "/image/scan-to-revit-family-2.jpg",
    href: "https://www.scantobim.online/ai-tool/",
  },
  {
    title: "Scan to CAD Conversion",
    text: "Your team needs accurate site data in the format they already work with. We convert your point cloud data into layered DWG files that are ready for design renovation and documentation workflows. Your team gets reliable CAD deliverables that fit straight into your existing process.",
    image: "/image/scan-to-cad-conversion.jpg",
    href: "https://www.scantobim.online/portfolio/scan-to-cad-conversion-for-metro-station/",
  },
  {
    title: "Scan to Archicad",
    text: "ArchiCAD teams get the same scan accuracy without leaving their preferred platform. We convert your point cloud data directly into accurate ArchiCAD models that fit your existing workflow. Every model is ready for renovation design and as-built documentation from day one.",
    image: "/image/scab-to-archicad.jpg",
    href: "#",
  },
];

export const scanToBimQualityAssuranceSection = {
  tag: "Quality Assurance",
  titleLine1: "Our Technical Methods for ",
  titleLine2: "Scan to BIM Model Validation",
  description:
    "Every scan-to-BIM deliverable passes through a rigorous multi-stage QA workflow with 100+ automated validation checks — ensuring survey-grade accuracy, coordination readiness, and compliance before models reach your CDE.",
  quote:
    '"Accuracy starts with validation, not correction. Our automated QA pipeline catches geometric deviations, missing parameters, and schema violations before delivery — giving your team models they can trust from day one."',
  quoteAttribution: "-VBS Scan to BIM Quality Approach",
};

export const scanToBimQualityAssuranceStages = [
  {
    prefix: "0",
    suffix: "1",
    prefixColor: "#42AA32",
    title: "Point Cloud Intake & Deviation Analysis",
    text: "Raw scan data is reviewed for registration quality, coverage gaps, and noise artifacts. Chromatic deviation analysis compares point cloud geometry against design intent, documenting floor unevenness, wall misalignments, and structural deviations before modeling begins.",
    elevated: true,
  },
  {
    prefix: "0",
    suffix: "2",
    prefixColor: "#2299D6",
    title: "Automated Model Validation & Handover",
    text: "Completed Revit models pass through 100+ custom validation scripts checking tolerance compliance, parameter completeness, and IFC schema adherence. A senior BIM lead performs final visual inspection before models are pushed to your Common Data Environment.",
    elevated: false,
  },
];

export const scanToBimQualityAssuranceStats = [
  { value: "100+", valueColor: "#D70416", label: "Automated QA checks per model" },
  { value: "LOD 500", valueColor: "#42AA32", label: "As-built modeling capability" },
  { value: "4 Disciplines", valueColor: "#2299D6", label: "Arch + Struct + MEPF + Site coordinated" },
  { value: "10K Sq.Ft.", valueColor: "#F0B300", label: "Daily modeling throughput capacity" },
];

export const scanToBimDisciplinesSection = {
  tag: "Core Pointes",
  titleLine1: "Core Disciplines Covered in Our ",
  titleLine2: "Scan to BIM Revit Services",
  titleLine3: "",
  titleMaxWidth: 800,
  descriptionMaxWidth: 800,
  description:
    "Multi-disciplinary scan to Revit workflows designed to convert complex spatial data into precision-engineered, coordination-ready models.",
};

export const scanToBimDisciplinePanels = [
  {
    id: "arch",
    tabLabel: "Architecture",
    title: "Architectural Scan to BIM Services",
    description:
      "We convert dense laser scans into highly detailed, parametric architectural elements that meet design intent and as-built condition. Our team captures complex interior and exterior sections. They ensure building envelopes and space configurations are fully documented for renovation, space planning or tenant improvement projects.",
    meta: [
      {
        label: "Standards Applied",
        value: "ISO 19650, AIA BIM Protocol, US AHJ Requirements, USIBD LOA 10-50",
      },
      {
        label: "Key Elements Modeled",
        value: "Walls, Floors, Ceilings, Roofs, Doors, Windows, Stairs, Ramps, Interiors",
      },
      {
        label: "LOD Capability",
        value: "LOD 200 Survey → LOD 300 Design → LOD 400 As-Built",
      },
    ],
    deliverablesTitle: "Deliverables:",
    deliverables: [
      "Floor plan, section, and elevation drawings from Revit",
      "Reflected ceiling plans with existing conditions documented",
      "Wall types with thickness and material data from scan geometry",
      "Door and window schedules extracted from modeled families",
      "Spatial area calculations and room data sheets",
      "IFC and DWG exports for architect review",
    ],
  },
  {
    id: "struct",
    tabLabel: "Structure",
    title: "Structural Scan to BIM Services",
    description:
      "We transform point cloud data into parametric structural models that capture beams, columns, slabs, and framing with survey-grade accuracy. Our team documents existing structural systems for renovation, seismic retrofit, and expansion projects with models ready for engineering analysis and coordination.",
    meta: [
      {
        label: "Standards Applied",
        value: "AISC, ACI 318, Eurocode, Local Structural Codes",
      },
      {
        label: "Key Elements Modeled",
        value: "Columns, Beams, Slabs, Foundations, Steel Framing, Load-Bearing Walls",
      },
      {
        label: "LOD Capability",
        value: "LOD 200 Survey → LOD 300 Design → LOD 400 As-Built",
      },
    ],
    deliverablesTitle: "Deliverables:",
    deliverables: [
      "Structural framing models with member sizes from scan geometry",
      "Foundation and slab models with elevation and thickness data",
      "Structural sections and details extracted from Revit",
      "Steel connection and bearing point documentation",
      "IFC and DWG exports for structural engineer review",
      "Deviation reports comparing scan data to design intent",
    ],
  },
  {
    id: "mepf",
    tabLabel: "MEPF",
    title: "MEPF Scan to BIM Services",
    description:
      "We model mechanical, electrical, plumbing, and fire protection systems from reality capture data for retrofit and facility upgrade projects. Our MEPF scan to BIM models support coordination, renovation planning, and as-built documentation with trade-accurate routing and equipment placement.",
    meta: [
      {
        label: "Standards Applied",
        value: "ASHRAE, NEC, IPC, NFPA, SMACNA",
      },
      {
        label: "Key Systems Modeled",
        value: "HVAC, Electrical, Plumbing, Fire Protection, Cable Trays, Conduit",
      },
      {
        label: "LOD Capability",
        value: "LOD 200 Survey → LOD 300 Design → LOD 400 As-Built",
      },
    ],
    deliverablesTitle: "Deliverables:",
    deliverables: [
      "Coordinated MEPF models with existing system routing",
      "Equipment schedules and panel documentation from scan data",
      "Clash detection reports for renovation coordination",
      "Reflected ceiling plans with MEP systems documented",
      "Shop drawing support for retrofit installations",
      "IFC and DWG exports for MEP contractor review",
    ],
  },
  {
    id: "site",
    tabLabel: "Site Utility",
    title: "Site & Utility Scan to BIM Services",
    description:
      "We capture site topography, underground utilities, and exterior infrastructure from laser scan data for campus, industrial, and civil coordination projects. Our models document grading, paving, utilities, and site features for accurate planning and design integration.",
    meta: [
      {
        label: "Standards Applied",
        value: "Local Utility Codes, USIBD LOA, Civil BIM Standards",
      },
      {
        label: "Key Elements Modeled",
        value: "Topography, Utilities, Paving, Landscaping, Site Structures",
      },
      {
        label: "LOD Capability",
        value: "LOD 200 Survey → LOD 300 Design → LOD 400 As-Built",
      },
    ],
    deliverablesTitle: "Deliverables:",
    deliverables: [
      "Site topography models with contour and grading data",
      "Underground utility routing from scan and survey data",
      "Paving, curbing, and hardscape documentation",
      "Site plan drawings extracted from coordinated models",
      "Utility conflict analysis for renovation projects",
      "IFC and DWG exports for civil and site engineer review",
    ],
  },
];

export const scanToBimWorkflowSection = {
  tag: "Service Workflow",
  titleLine1: "Our Step-by-Step 3D Laser Scan to ",
  titleLine2: "BIM Conversion Process",
  description:
    "A rigorous, data-driven workflow designed to convert reality-captured data into high-precision, deployment-ready scan to Revit based BIM assets.",
};

export const scanToBimWorkflowSteps = [
  {
    number: "01",
    title: "3D Laser Scanning & Field Capture",
    text: "The lifecycle begins on-site with high-density 3D laser scanning to capture the exact physical geometry of the asset. We ensure effective fieldwork protocols to establish high-resolution spatial data, complete site coverage and accurate control points in the target environment.",
  },
  {
    number: "02",
    title: "Data Intake and Validation",
    text: "Point cloud files such as E57, RCP, LAS and PTX are securely uploaded through Autodesk Construction Cloud or BIM 360. Our team reviews the data to verify coverage, registration quality and overall scan completeness before modeling begins.",
  },
  {
    number: "03",
    title: "Registration & Noise Removal",
    text: "Multiple scans are aligned and registered to a common coordinate system. We filter out unwanted noise from moving objects on site activity and reflective surfaces to generate a clean and reliable point cloud dataset.",
  },
  {
    number: "04",
    title: "Chromatic Deviation Analysis",
    text: "Before starting the modeling process, we analyze the point cloud to detect discrepancies between design intent and the actual site conditions. We document issues like floor unevenness, wall misalignments, and structural deviations and distribute this information to the project team.",
  },
  {
    number: "05",
    title: "Intelligent BIM Modeling",
    text: "Using AI-enabled workflows and experienced BIM pros, we convert point cloud data into accurate Revit models Architectural, structural and MEP features are modeled to the required level of detail for design, renovation and construction workflows.",
  },
  {
    number: "06",
    title: "Automated Quality Assurance & Handover",
    text: "The draft model passes through 100+ custom validation scripts and a rigorous internal visual inspection to ensure absolute tolerance compliance. Once verified, the finalized, coordination-ready native Revit models, IFC assets, and 2D documentation are pushed straight to your Common Data Environment (CDE).",
  },
];

export const scanToBimServiceBenefitsSection = {
  tag: "Service benefits",
  titleLine1: "Benefits of Choosing ",
  titleLine2: "Reality Capture to BIM Services",
  titleParts: [
    { text: "Benefits ", className: "text-section font-medium text-[#111111]" },
    { text: "o", className: "text-section font-medium lowercase text-[#111111]" },
    { text: "f Choosing Reality ", className: "text-section font-medium text-[#111111]" },
    { text: "Capture", className: "text-section text-accent font-light" },
    { text: " t", className: "text-section text-accent font-light lowercase" },
    { text: "o BIM Services", className: "text-section text-accent font-light" },
  ],
  titleMaxWidth: 659,
  descriptionMaxWidth: 700,
  description:
    "Point cloud to BIM conversion helps project teams to work with accurate digital representations of existing conditions that reduce uncertainty and improve project outcomes.",
  ctaLabel: "Let's Talk Reality Capture",
  ctaHref: "#scan-page-contact",
};

const SCAN_BENEFIT_ICON_COLORED = benefitIconColored;
const SCAN_BENEFIT_ICON_DEFAULT = benefitIconMuted;

export const scanToBimServiceBenefitsCards = [
  {
    title: "Improved Decision-Making",
    text: "Accurate BIM models provide architects, engineers and contractors with real picture of existing conditions. With good information from the outset, teams can analyze design choices, recognize constraints and improve project decisions.",
    icon: SCAN_BENEFIT_ICON_DEFAULT,
    iconHover: SCAN_BENEFIT_ICON_COLORED,
  },
  {
    title: "Reduced Rework",
    text: "Reality capture data provides design and construction teams with the actual condition of the site before they begin work. This reduces assumptions, prevents unnecessary design changes and minimizes costly modifications during later project phases.",
    icon: SCAN_BENEFIT_ICON_DEFAULT,
    iconHover: SCAN_BENEFIT_ICON_COLORED,
  },
  {
    title: "Faster Project Planning",
    text: "Having verified as-built BIM models available up front reduces the number of site visits and measurements needed. Design development, coordination and documentation are more efficient.",
    icon: SCAN_BENEFIT_ICON_DEFAULT,
    iconHover: SCAN_BENEFIT_ICON_COLORED,
  },
  {
    title: "Better Renovation & Retrofit Outcomes",
    text: "Detailed BIM models accurately represent existing building geometry and system layouts. Teams can assess existing conditions more effectively and develop renovation strategies with fewer unforeseen challenges.",
    icon: SCAN_BENEFIT_ICON_DEFAULT,
    iconHover: SCAN_BENEFIT_ICON_COLORED,
    textMaxWidth: 433,
  },
  {
    title: "Enhanced Coordination",
    text: "Architectural, structural and MEPF models are created from the same reality capture dataset. This improves alignment across disciplines, simplifies coordination efforts and reduces conflicts during project execution.",
    icon: SCAN_BENEFIT_ICON_DEFAULT,
    iconHover: SCAN_BENEFIT_ICON_COLORED,
  },
  {
    title: "Long-Term Asset Value",
    text: "The value of a BIM model goes well beyond design and construction. Building owners and facilities managers can leverage it to help with maintenance planning, space management, future renovations and day-to-day operations.",
    icon: SCAN_BENEFIT_ICON_DEFAULT,
    iconHover: SCAN_BENEFIT_ICON_COLORED,
  },
];

export const scanToBimWhyChooseSection = {
  tag: "Why Choose Us",
  titleLine1: "Why We Are Trusted by Reality Capture ",
  titleAccentLead: "",
  titleAccentRest: "Specialists and Surveyors",
  titleParts: [
    { text: "Why ", className: "text-section font-medium text-[#111111]" },
    { text: "W", className: "text-section font-medium lowercase text-[#111111]" },
    { text: "e ", className: "text-section font-medium text-[#111111]" },
    { text: "A", className: "text-section font-medium lowercase text-[#111111]" },
    { text: "re Trusted ", className: "text-section font-medium text-[#111111]" },
    { text: "b", className: "text-section font-medium lowercase text-[#111111]" },
    { text: "y Reality Capture ", className: "text-section font-medium text-[#111111]" },
    { text: "Specialists ", className: "text-section text-accent font-light" },
    { text: "a", className: "text-section text-accent font-light lowercase" },
    { text: "nd Surveyors", className: "text-section text-accent font-light" },
  ],
  titleMaxWidth: 817,
  descriptionMaxWidth: 780,
  description:
    "Combine AI-powered BIM production, 100+ QC checkpoints, and high-speed delivery workflows to convert reality capture data into dependable project-ready models.",
  ctaLabel: "Book a Call",
  ctaHref: ROUTES.contact,
  gridRows: [2, 2],
};

export const scanToBimWhyChooseItems = [
  {
    title: "30-40% Faster Project Kickoff",
    description:
      "Avoid manual surveying delays and get field teams onboarded instantly with reliable as-built data.",
    icon: fasterProjectKickoffIcon,
  },
  {
    title: "Up to 25% Reduction in Field Rework",
    description:
      "Identify system overlaps early to avoid costly field workarounds and change orders.",
    icon: reductionInFieldReworkIcon,
  },
  {
    title: "20-30% Lower Operational Overhead",
    description:
      "Scale up your internal production capabilities effortlessly by working with a team of 150+ scan to BIM experts.",
    icon: lowerOperationalIcon,
  },
  {
    title: "50% Faster Stakeholder Decision-Making",
    description:
      "Evaluate field conditions, spatial limits, and design choices with complete confidence.",
    icon: fasterStakeholderIcon,
  },
];

export const scanToBimResourcesSection = allServicesResourcesSection;

export const scanToBimIndustriesIntro = {
  titleLine1: "Industries We Serve, Delivering ",
  titleLine2: "3D Scan to Revit Model",
  titleMaxWidth: 750,
  description:
    "Our reality capture to BIM services support a wide range of building types and project requirements across the AEC industry.",
};

export const scanToBimEngagementProcessSection = {
  tag: "How to Start",
  titleLine1: "How to Get Started With ",
  titleLine2: "Our Scan to BIM Workflow",
  description:
    "Every reality capture project is unique. We evaluate your point cloud data, project scope, LOD requirements and deliverables to provide a customized quotation aligned with your project objectives.",
  cta: "Get a Free Quote",
  ctaHref: "#scan-page-contact",
};

export const scanToBimEngagementProcessSteps = [
  {
    prefix: "0",
    number: "1",
    prefixColor: "text-[#42AA32]",
    title: "Submit Your Project Specs & Data",
    description:
      "Provide us with your raw scanned files such as E57, RCP, etc., project scale, LOD requirements and project milestones.",
  },
  {
    prefix: "0",
    number: "2",
    prefixColor: "text-[#2299D6]",
    title: "Get a Fixed-Price Quotation",
    description:
      "We provide a transparent itemised project proposal based on your specific scope, asset complexity and selected LOD parameter.",
  },
  {
    prefix: "0",
    number: "3",
    prefixColor: "text-[#F0B300]",
    title: "Execution & Delivery",
    description:
      "Our Scan to BIM specialists use AI-assisted modeling to deliver a QA verified BIM model directly to your CDE or pre-defined FTP.",
  },
];

export const scanToBimProjectCta = {
  titleLine1: "Let's Convert Your Reality Capture Data ",
  titleLine2: "into Actionable BIM Models",
  titleParts: [
    { text: "Let's Convert ", className: "font-medium text-[#111111]" },
    { text: "Y", className: "font-medium lowercase text-[#111111]" },
    { text: "our Reality Capture Data ", className: "font-medium text-[#111111]" },
    { text: "into Actionable BIM Models", className: "font-light text-[#111111]" },
  ],
  titleMaxWidth: 791,
  descriptionMaxWidth: 799,
  description:
    "From point cloud intake to delivery-ready Revit models, Virtual Building Studio delivers end-to-end scan to BIM Revit services that drive accuracy, coordination, and efficiency across every project phase.",
  cta: "Get a Quote",
  ctaHref: ROUTES.contact,
};

export const scanToBimTestimonialsDescription =
  "Hear how architects and firm owners scaled production, reclaimed time, and grew revenue with dedicated BIM support.";

export const scanToBimFaqDescription =
  "Everything you need to know before getting started.";

export const scanToBimFaqSection = {
  tag: "FAQs",
  titleLine1: "Frequently Asked Questions Related to ",
  titleLine2: "Reality Capture and BIM Services",
  description: scanToBimFaqDescription,
  footerText: "Have more questions about our Scan to BIM Services?",
  footerCtaLabel: "Connect with a Scan to BIM Experts",
  footerCtaHref: "#scan-page-contact",
};

export const scanToBimFaqs = [
  {
    q: "Who is responsible for design versus modeling and sign‑off?",
    a: "You will have the full ownership of all design decisions and final sign-offs. Our team focuses strictly on precise Scan to BIM translation and parametric modeling based on your point cloud.",
  },
  {
    q: "How do you handle time zones and day‑to‑day communication with our team?",
    a: "Our Scan to BIM team works directly in your local time zone. Daily updates are managed seamlessly via email, Microsoft Teams, or Slack.",
  },
  {
    q: 'Do you just "do Revit" or follow a structured workflow?',
    a: "No. Our specialists use ReCap for registration, and Revit, Archicad or AutoCAD for modeling. We also integrate Navisworks for clash detection. We use the proven software combo based entirely on your project requirements. Our 6-step scan to BIM workflow ensures absolute accuracy and strict tolerance compliance.",
  },
  {
    q: "How do you protect our project data and client confidentiality?",
    a: "We protect your assets using secure, encrypted file transfer protocols and signing comprehensive NDAs before we start the project.",
  },
  {
    q: "Can we start with a small pilot project before committing to a long‑term partnership?",
    a: "Yes. We offer a free pilot on a 1,000 sq. ft. project. This will help you to evaluate our speed and quality firsthand.",
  },
  {
    q: "Who will we work with day to day, and what happens if there is an issue?",
    a: "You will collaborate directly with a dedicated Project Manager. If an issue arises this manager coordinates immediate technical support to resolve it swiftly.",
  },
];

export const scanToBimFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: scanToBimFaqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};
