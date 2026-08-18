import { benefitIconColored, benefitIconMuted } from "@/constants/benefit-icons";
import type { MepBimTechnologyTool } from "@/constants/mep-bim-modelling-content";
import {
  mepBimTechnologyStackToolsRowOne,
  mepBimTechnologyStackToolsRowTwo,
} from "@/constants/mep-bim-modelling-content";
import { allServicesResourcesSection } from "@/constants/shared-sections";

export const LASER_SCAN_TO_BIM_CONTACT_ID = "laser-scan-to-bim-page-contact";
export const LASER_SCAN_TO_BIM_CONTACT_HASH = `#${LASER_SCAN_TO_BIM_CONTACT_ID}`;

const laserScanBanner = "/image/laser-scan-to-bim-banner.jpg";
const laserScanOverview = "/image/laser-scan-to-bim-Overview.jpg";
const architecturalScanToBimImg = "/image/architectural-scan-to-bim.jpg";
const structuralScanToBimImg = "/image/structural-scan-to-bim.jpg";
const mepScanToBimImg = "/image/mep-scan-to-bim.jpg";
const pointCloudToBimModelingImg = "/image/point-cloud-to-bim-modeling.jpg";
const scanToRevitModelingImg = "/image/scan-to-revit-modeling.jpg";
const asBuiltBimModelingImg = "/image/as-built-bim-modeling.jpg";
const scanToCadConversionImg = "/image/scan-to-cad-conversion.jpg";
const clashDetectionCoordinationImg = "/image/clash-detection-and-coordination.jpg";

export const laserScanToBimStatsStrip = [
  { value: "1000+", color: "text-vbs-red", label: "Projects Delivered" },
  { value: "100+", color: "text-vbs-green", label: "Firms Trust Us" },
  { value: "9+", color: "text-vbs-yellow", label: "Years in Industry" },
  { value: "200+", color: "text-vbs-blue", label: "Vetted Architects" },
];

export const laserScanToBimHero = {
  tag: "Laser Scan to BIM",
  titleLead: "AI-powered Scan to BIM Services - ",
  titleAccent: "Reduce Rework, Eliminate Guesswork",
  description:
    "Our Top 1% US-Trained Experts Convert Point Clouds into Revit or CAD Models with 99% Accuracy – Speed Up Project Timelines, and Bring Clarity to Your Renovation and Retrofit Workflows.",
  ctaLabel: "Get a Free Quote",
  imageSrc: laserScanBanner,
  imageAlt: "Point cloud scan of a building converted into a clean Scan to BIM model",
  copyMaxWidth: 760,
  descriptionMaxWidth: 760,
  titleMaxWidth: 638,
};

export const laserScanToBimIntro = {
  tag: "Overview",
  titleLead: "Efficient Point Cloud to BIM Modeling Services ",
  titleAccent: "10,000 Sq. Ft. Delivered in Just 1 Day",
  titleStacked: false,
  titleMaxWidth: 1330,
  descriptionMaxWidth: 1032,
  description:
    "Virtual Building Studio delivers high-accuracy Scan to BIM Services to support surveyors, architects, and engineers in the USA. Our team of top 1% US-trained vetted BIM modelers specializes in converting point cloud data into clean, clash-free Revit and CAD models that align with the US construction standards, enabling design teams to make faster, data-driven decisions for renovations and retrofits.",
  sideDescription:
    "The deliverables adhere to project-specific requirements, and supporting facility management workflows with minimal data loss or rework.",
  featuresTitle: "Pre-vetted Scan to BIM Experts Ready to Deliver Precision from Day 1",
  featuresTitleClassName: "text-[24px] sm:text-[28px]",
  features: [
    "Geometrically accurate Scan to BIM Revit models developed from registered point cloud data (E57, RCP, or LAS)",
    "Discipline-specific modeling for architectural, structural, and MEP components based on scan density and required LOD (LOD 300 for coordination or LOD 400 for fabrication)",
    "Modeling aligned to project coordinates and real-world orientation, based on survey control points or reference geometry",
    "2D extractions and Scan to CAD Services from Revit views, including floor plans, elevations, and sections with annotation layers",
    "BIM execution standards followed per project scope, including naming conventions, object styles, and US-specific code references (ADA, IBC, NFPA)",
    "As-built modeling for existing conditions, suitable for construction documentation, permit sets, and facility asset mapping",
    "File deliverables in RVT, DWG, NWC, and IFC formats for downstream compatibility with design, coordination, and FM platforms",
  ],
  mainImage: laserScanOverview,
  imageAlt: "Laser scanner converting a building point cloud into a Revit BIM model",
};

export const laserScanToBimOurClientsSection = {
  tag: "Our Clients",
  titleLead: "Trusted by",
  titleAccent: "Top AEC Firms",
  titleAccentFirst: false,
  breakTitle: true,
  description:
    "Supporting architecture, engineering, construction, and reality capture teams across diverse project types and workflows.",
};

export const laserScanToBimServicesSection = {
  tag: "Our Services",
  titleLine1: "Our Comprehensive Range of ",
  titleLine2: "Scan to BIM Conversion Services",
  description:
    "Whether you're planning a renovation, verifying existing conditions, or developing as-built documentation, our Point Cloud to BIM Modeling Services ensure accurate digital replication of physical spaces. Using point clouds, we produce coordinated models that integrate seamlessly into your design, construction, or FM workflows.",
  ctaLabel: "Start New Project",
  ctaHref: LASER_SCAN_TO_BIM_CONTACT_HASH,
  wideCards: true,
  titleMaxWidth: 793,
  descriptionMaxWidth: 900,
};

export const laserScanToBimServiceCards = [
  {
    title: "Architectural Scan to BIM",
    text: "We recreate building envelopes and interiors such as walls, windows, doors, ceilings, stairs, and finish materials, with high geometric fidelity. Our Scan to BIM Revit Services supports accurate area calculations, quantity takeoffs, and design planning.",
    image: architecturalScanToBimImg,
  },
  {
    title: "Structural Scan to BIM",
    text: "Our Scan to BIM Conversion Services include detailed modeling of Structural elements like columns, beams, foundations, and load-bearing walls with correct profiles and materials. We ensure alignment with grid systems, level definitions, and construction sequencing needs.",
    image: structuralScanToBimImg,
  },
  {
    title: "MEP Scan to BIM",
    text: "We extract and model visible HVAC, electrical, plumbing, and fire protection systems from the scan data. The output includes system-wise separation, accurate routing, and clearance zones to support design or coordination.",
    image: mepScanToBimImg,
  },
  {
    title: "Point Cloud to BIM Modeling",
    text: "We convert registered point cloud files such as E57, RCP, etc., into precise 3D BIM models in Revit. Our Scan to BIM Conversion Services ensure geometry is extracted and modeled based on real-world dimensions, ensuring alignment with project coordinates and control points.",
    image: pointCloudToBimModelingImg,
  },
  {
    title: "Scan to Revit Modeling",
    text: "Using Autodesk Revit, we develop native parametric models from point cloud inputs with discipline-specific detail. Our models include correct element categorization, phase settings, and levels aligned to US construction standards.",
    image: scanToRevitModelingImg,
  },
  {
    title: "As-Built BIM Modeling",
    text: "We generate detailed models that reflect actual built conditions, incorporating structural, architectural, and MEP components as found onsite. These models support retrofit design, permit drawings, and facility lifecycle management.",
    image: asBuiltBimModelingImg,
  },
  {
    title: "Scan to CAD Conversion",
    text: "Point cloud data is processed into 2D CAD deliverables, including floor plans, elevations, and sections. Our workflow ensures geometry is traceable and layered according to AIA or client-specific CAD standards.",
    image: scanToCadConversionImg,
  },
  {
    title: "Clash Detection & Coordination",
    text: "We run clash detection between point cloud to BIM models and new design elements using Navisworks or Revit. Conflicts across architectural, structural, and MEP systems are identified early, ensuring smooth coordination and reducing costly rework during construction.",
    image: clashDetectionCoordinationImg,
  },
];

export const laserScanToBimServiceMetrics = [
  { value: "10,000 Sq.Ft.", label: "Per Day Delivery", valueColor: "#D70416" },
  { value: "100+", label: "Automated QC Points", valueColor: "#42AA32" },
  { value: "20M+ Sq. Ft.", label: "Scan Converted", valueColor: "#F0B300" },
  { value: "LOD 200-400", label: "Modeling Capability", valueColor: "#2299D6" },
] as const;

export const laserScanToBimWhyChooseSection = {
  tag: "Why Choose Us",
  titleLead: "Why Choose Us for ",
  titleAccent: "Your Scan to BIM Needs?",
  description:
    "Outsourcing your Scan to BIM requirements to Virtual Building Studio means working with a technically advanced team that understands the criticality of accuracy, speed, and coordination in renovation and retrofit projects. Our Scan to BIM Conversion Services are engineered to minimize rework, reduce field errors, and deliver Revit or CAD-ready models that align with the US project standards and coordination workflows.",
  ctaLabel: "Start New Project",
  ctaHref: LASER_SCAN_TO_BIM_CONTACT_HASH,
};

export const laserScanToBimWhyChooseItems = [
  {
    prefix: "0",
    suffix: "1",
    prefixColor: "#D70416",
    title: "Top 1% US-Trained BIM Modelers",
    description:
      "Our BIM professionals are among the top 1% globally, with deep expertise in modeling from point cloud data for complex architectural, structural, and MEP systems. As part of our MEP BIM services, we extract and accurately reconstruct visible HVAC, electrical, plumbing, and fire protection systems directly from scan data converting raw point clouds into Revit models. Their experience across residential, commercial, and infrastructure projects ensures code-aware, coordination-ready deliverables.",
  },
  {
    prefix: "0",
    suffix: "2",
    prefixColor: "#42AA32",
    title: "AI-Powered Workflow & QC Automation",
    description:
      "Our proprietary AI-driven tools assist in detecting geometry inconsistencies and automatically flagging anomalies during model generation. Integrated quality checks ensure 99% accuracy while significantly reducing manual review time.",
  },
  {
    prefix: "0",
    suffix: "3",
    prefixColor: "#F0B300",
    title: "Real-Time Revisions & Model Updates",
    description:
      "Our scan to BIM experts work in real-time collaboration and version control, enabling clients to request changes and track updates live. This ensures fewer coordination delays and faster design decisions during iterative review cycles.",
  },
  {
    prefix: "0",
    suffix: "4",
    prefixColor: "#2299D6",
    title: "Instant, Automated Quotation System",
    description:
      "Provide project data and receive a detailed quotation in seconds. Our automated pricing engine accounts for building type, square footage, LOD, and timeline, giving you cost clarity up front.",
  },
  {
    prefix: "0",
    suffix: "5",
    prefixColor: "#D70416",
    title: "Scalable Delivery Teams",
    description:
      "Whether it's a single building or a multi-site portfolio, our scalable teams adjust to your project size and complexity. Our Dedicated BIM modeler integrates into your team and starts in as little as 5 days to keep your schedules on track.",
  },
  {
    prefix: "0",
    suffix: "6",
    prefixColor: "#42AA32",
    title: "No Long-Term Contracts",
    description:
      "Onboard our dedicated resource into your team and scale on your terms, with no lock-in. Whether you need one-time Scan to BIM support or ongoing assistance, our flexible model scales with your project demands.",
  },
  {
    prefix: "0",
    suffix: "7",
    prefixColor: "#F0B300",
    title: "One-Month Risk-Free Trial",
    description:
      "Experience our quality and responsiveness with a one-month, no-obligation trial. If you're not satisfied, we offer a full refund, no questions asked.",
  },
  {
    prefix: "0",
    suffix: "8",
    prefixColor: "#2299D6",
    title: "Time-Zone Aligned Collaboration",
    description:
      "Our teams work in sync with your US timezone, attend coordination calls, and follow your file standards and naming conventions, ensuring seamless project integration.",
  },
  {
    prefix: "0",
    suffix: "9",
    prefixColor: "#D70416",
    title: "End-to-End Point Cloud to BIM Delivery",
    description:
      "From preprocessing scan data to final Revit or CAD outputs, we manage the full pipeline using Revit, AutoCAD, Navisworks, and automated QA tools, ensuring consistent, constructible models ready to use across design, coordination, and facilities workflows.",
  },
] as const;

export const laserScanToBimTechnologyStackSection = {
  tag: "Tools & Platforms",
  titleLine1: "We Use to Deliver ",
  titleAccent: "Laser Scan to BIM Services",
  description:
    "Leveraging industry-leading BIM software to create accurate, coordinated, and constructible MEP models for complex projects.",
};

export const laserScanToBimTechnologyStackToolsRowOne: MepBimTechnologyTool[] =
  mepBimTechnologyStackToolsRowOne;

export const laserScanToBimTechnologyStackToolsRowTwo: MepBimTechnologyTool[] =
  mepBimTechnologyStackToolsRowTwo;

export const laserScanToBimAdvantagesSection = {
  tag: "Advantages",
  titleLine1: "Key Advantages of ",
  titleLine2: "Point Cloud to BIM Modeling Services",
  titleMaxWidth: 858,
  descriptionMaxWidth: 1006,
  description:
    "Point Cloud to BIM modeling offers a high-fidelity digital representation of existing conditions, enabling data-driven decision-making across renovation, retrofit, and asset management workflows. By converting scanned spatial data into accurate BIM models, design and construction teams can reduce ambiguity, improve coordination, and accelerate project timelines.",
  ctaLabel: "Contact Now",
  ctaHref: LASER_SCAN_TO_BIM_CONTACT_HASH,
};

export const laserScanToBimAdvantagesCards = [
  {
    title: "Accurate Existing Conditions Modeling",
    text: "Scan data captures real-world geometry with millimeter-level precision, enabling BIM models to reflect actual site conditions. This eliminates guesswork in retrofit design and ensures precise fitment of new systems.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Reduced Site Visits and Manual Survey Time",
    text: "Laser scanning minimizes the need for repeated site access by capturing complete spatial data in a single visit. The resulting BIM models provide all necessary measurements and context for remote planning and design.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Enhanced Multidisciplinary Coordination",
    text: "BIM models derived from point clouds allow architects, engineers, and contractors to collaborate within a unified digital environment. Spatial conflicts between systems can be identified and resolved early through integrated clash detection.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Support for High-LOD Outputs",
    text: "Models can be developed to LOD 200–500, depending on the project stage and use case. This allows flexibility in downstream use, from conceptual design to fabrication and facilities management.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Improved Construction Documentation",
    text: "Accurate as-built BIM models serve as a reliable base for generating 2D drawings, permit sets, and construction documentation. Geometry is aligned to real-world coordinates, enhancing compliance and drawing precision.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Lifecycle Integration and FM Readiness",
    text: "BIM models populated from point clouds can include metadata and asset tagging to support facility operations. This ensures a seamless handoff from construction to building maintenance and long-term management.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
];

export const laserScanToBimEngagementModelsHeader = {
  tag: "Engagement Models",
  titleLine1: "Perfect Fit Solutions for Every ",
  titleAccent: "Point Cloud to BIM Conversion Project",
  description:
    "From small residential scans to complex multi-level facilities, our dedicated resources adapt to your project's scope, LOD requirements, and coordination needs, ensuring accuracy, efficiency, and compliance every time.",
};

export const laserScanToBimIndustriesIntro = {
  titleLine1: "Industries We Serve with ",
  titleLine2: "Scan to BIM Modeling Services",
  titleMaxWidth: 788,
  description:
    "We provide Point cloud to BIM Modeling Services customized to meet the unique requirements of industries ranging from commercial real estate and healthcare to infrastructure, education, and heritage conservation.",
};

export const laserScanToBimResourcesSection = {
  ...allServicesResourcesSection,
  titleLine2: "Production, Governance and Scale",
};

export const laserScanToBimTestimonialsDescription =
  "Client stories that reveal how our Point Cloud to BIM Modeling Services cut cost by 50% and saved time with realtime revisions";

export const laserScanToBimFaqSection = {
  tag: "FAQs",
  description: "",
};

export const laserScanToBimFaqs = [
  {
    q: "What does it mean to provide a dedicated resource for Scan to BIM?",
    a: "A dedicated resource is a BIM specialist who works solely on your projects as part of your internal team, fully integrated into your processes, tools, and time zones, rather than offering ad-hoc or one-off services.",
  },
  {
    q: "How quickly can a dedicated Scan to BIM modeler start working?",
    a: "A dedicated Scan to BIM modeler can typically start in as little as 5 days. We align the specialist to your tools, file standards, and timezone before kickoff so production can begin without a long ramp-up.",
  },
  {
    q: "Can the modeler adapt to our internal standards and tools?",
    a: "Yes. Dedicated modelers work in Revit, ReCap Pro, Navisworks, AutoCAD, and BIM 360, and follow your naming conventions, object styles, LOD requirements, and US code references such as ADA, IBC, and NFPA.",
  },
  {
    q: "Is the modeler scalable to handle multiple or large projects?",
    a: "Yes. You can start with one dedicated resource and scale to a larger delivery team or a fully managed Global Delivery Center as project volume, square footage, or LOD requirements grow.",
  },
  {
    q: "What advantages does hiring a dedicated resource offer?",
    a: "You get a specialist embedded in your workflow, timezone-aligned collaboration, consistent quality, no long-term lock-in, and a one-month risk-free trial—without the overhead of hiring full-time in-house staff.",
  },
  {
    q: "How is performance monitored and quality ensured?",
    a: "Every model passes 100+ automated QC points plus expert review. AI-assisted checks flag geometry issues early, and version-controlled collaboration keeps revisions visible throughout the project.",
  },
  {
    q: "Are there long-term commitments or contracts required?",
    a: "No. There is no long-term lock-in. You can use Scan to BIM support for a single project or ongoing delivery, and the one-month trial can be cancelled with a full refund if you are not satisfied.",
  },
];

export const laserScanToBimFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: laserScanToBimFaqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export const laserScanToBimContactDescription =
  "Share your point cloud files, LOD requirements, and delivery timeline. Our Scan to BIM specialists will align the right dedicated resource for your renovation or retrofit project.";
