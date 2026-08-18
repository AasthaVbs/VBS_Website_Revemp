import { benefitIconColored, benefitIconMuted } from "@/constants/benefit-icons";
import type { MepBimTechnologyTool } from "@/constants/mep-bim-modelling-content";
import {
  mepBimTechnologyStackToolsRowOne,
  mepBimTechnologyStackToolsRowTwo,
} from "@/constants/mep-bim-modelling-content";
import { acsServicePagesResourcesSection } from "@/constants/shared-sections";

const scanToCadBanner = "/image/scan-to-cad-conversion-services-banner.jpg";
const scanToCadOverview = "/image/scan-to-cad-conversion-services-overview.jpg";
const pointCloudToCadDraftingImg = "/image/point-cloud-to-cad-drafting.jpg";
const scanPdfLegacyDrawingImg = "/image/scan-pdf-and-legacy-drawing-conversion.jpg";
const reflectedCeilingPlanDraftingImg = "/image/reflected-ceiling-plan-drafting.jpg";
const structuralMepCadDrawingImg = "/image/structural-and-mep-cad-drawing.jpg";
const scanTo2d3dFloorPlanCadImg = "/image/scan-to-2d-and-3d-floor-plan-in-cad.jpg";
const cadAsBuiltDocumentationImg = "/image/cad-as-built-documentation.jpg";

export const scanToCadStatsStrip = [
  { value: "4000+", color: "text-vbs-red", label: "Projects Delivered" },
  { value: "300+", color: "text-vbs-green", label: "Global Clients" },
  { value: "11+", color: "text-vbs-yellow", label: "Years of Experience" },
  { value: "500+", color: "text-vbs-blue", label: "Scan to BIM Specialists" },
];

export const scanToCadHero = {
  tag: "Scan to CAD Conversion",
  titleLead: "Mitigate Drafting Delays with Our ",
  titleAccent: "Scan to CAD Conversion Services",
  description:
    "Manual drafting from scan data slows your project and includes unpredicted errors. Our CAD experts run an AI-powered workflow that converts scans into build-ready CAD drawings.",
  ctaLabel: "Get a Free Quote",
  imageSrc: scanToCadBanner,
  imageAlt: "Scan to CAD conversion from point cloud to 2D and 3D drawings",
  copyMaxWidth: 860,
  descriptionMaxWidth: 701,
  titleMaxWidth: 860,
};

export const scanToCadIntro = {
  tag: "Overview",
  titleLead: "Turning Site Reality into ",
  titleAccent: "Usable CAD Drawings",
  titleStacked: false,
  titleMaxWidth: 689,
  description:
    "Our 3D scan to CAD conversion process turns dense point cloud data into structured drawings that cut drafting hours, improve coordination and keep delivery timelines predictable for every project phase.",
  sideDescription:
    "We convert laser scan to CAD drawings for architects, engineers and contractors who need fast trustworthy data. Our BIM experts pair site knowledge with an AI-assisted workflow, adding capacity, cutting rework and improving coordination across every project phase.",
  featuresTitle: "Pre-Vetted Scan to CAD Experts Ready to Support Your Firm",
  features: [
    "We handle every step from point cloud registration to final DWG delivery, so your team skips the manual cleanup.",
    "Every drawing follows AIA layering standards and the compliance codes your project needs.",
    "Whether you scan with a handheld or tripod-mounted 3D scanner for CAD modeling, our drafters convert the data into structured files.",
    "We collaborate through BIM 360 or ACC, so reviews and markups happen on the platform your team already uses.",
    "Each file passes through documented quality checks, that include manual review of point clouds in AutoCAD.",
    "Deliverables include DWG, DXF, PDF and RVT files, formatted to convert point cloud to 3D model AutoCAD projects can use right away.",
  ],
  mainImage: scanToCadOverview,
  imageAlt: "Point cloud scan converted into a CAD as-built drawing",
};

export const scanToCadOurClientsSection = {
  tag: "Our Clients",
  titleLead: "Trusted by",
  titleAccent: "Top AEC Firms",
  titleAccentFirst: false,
  breakTitle: true,
  description:
    "Supporting architecture, engineering, construction, and reality capture teams across diverse project types and workflows.",
};

export const scanToCadServicesSection = {
  tag: "Our Services",
  titleLine1: "Our Comprehensive Range of ",
  titleLine2: "Scan to CAD Conversion Services",
  description:
    "From initial site capture to final drawing delivery, our scan to CAD conversion process supports every phase of your project lifecycle.",
  ctaLabel: "Start New Project",
  ctaHref: "#scan-to-cad-page-contact",
  wideCards: true,
  titleMaxWidth: 793,
};

export const scanToCadServiceCards = [
  {
    title: "Point Cloud to CAD Drafting",
    text: "We convert point cloud to CAD drawings covering floor plans, elevations and sections, processing LiDAR scan to CAD data from Leica, FARO and other scanners.",
    image: pointCloudToCadDraftingImg,
  },
  {
    title: "Scan PDF and Legacy Drawing Conversion",
    text: "Our scan to DWG converter workflow brings outdated PDFs and legacy drawings into editable, layered CAD files that match your current standards and naming conventions.",
    image: scanPdfLegacyDrawingImg,
  },
  {
    title: "Reflected Ceiling Plan Drafting",
    text: "We extract ceiling grids, MEP fixtures and lighting layouts from scan data, giving coordination teams a clear, structured reference before construction begins.",
    image: reflectedCeilingPlanDraftingImg,
  },
  {
    title: "Structural and MEP CAD Drawing",
    text: "We map columns, beams, duct runs and pipe routing from your scan into structured CAD files your engineering team can use right away for coordination.",
    image: structuralMepCadDrawingImg,
  },
  {
    title: "Scan to 2D and 3D Floor Plan in CAD",
    text: "We turn your 3D scan to 2D drawing outputs into clean floor plans and sections, capturing every wall, opening and structural element your team needs.",
    image: scanTo2d3dFloorPlanCadImg,
  },
  {
    title: "CAD As-built Documentation",
    text: "We deliver annotated, dimensioned existing conditions drawings that reflect actual site conditions, not original design intent, ready for renovation and permit submission.",
    image: cadAsBuiltDocumentationImg,
  },
];

export const scanToCadServiceMetrics = [
  { value: "10,000 Sq.Ft.", label: "Per Day Delivery", valueColor: "#D70416" },
  { value: "100+", label: "Automated QC Points", valueColor: "#42AA32" },
  { value: "20M+ Sq. Ft.", label: "Scan Converted", valueColor: "#F0B300" },
  { value: "LOD 200-400", label: "Modeling Capability", valueColor: "#2299D6" },
] as const;

export const scanToCadWhyChooseSection = {
  tag: "Why Choose Us",
  titleLead: "Why Choose Us to Convert Point ",
  titleAccent: "Cloud to 3D Model in AutoCAD?",
  description:
    "Our teams combine strong CAD drafting skills with an AI-enabled workflow for real project deadlines and real site conditions for every project type.",
  ctaLabel: "Start New Project",
  ctaHref: "#scan-to-cad-page-contact",
};

export const scanToCadWhyChooseItems = [
  {
    prefix: "0",
    suffix: "1",
    prefixColor: "#D70416",
    title: "30-40% Faster Drawing Turnaround",
    description:
      "We convert point clouds and PDFs to CAD to put that data into usable drawings, so design work can start sooner.",
  },
  {
    prefix: "0",
    suffix: "2",
    prefixColor: "#42AA32",
    title: "25% Reduction in Field Rework",
    description:
      "Catching missing details and conflicts ahead of time saves your crews time and money on change orders in the field.",
  },
  {
    prefix: "0",
    suffix: "3",
    prefixColor: "#2299D6",
    title: "20-30% Lower Drafting Costs",
    description:
      "Outsource your scan to CAD drafting and you cut internal overhead, enabling you to scale production without adding headcount.",
  },
  {
    prefix: "0",
    suffix: "4",
    prefixColor: "#F0B300",
    title: "50% Faster Design Coordination",
    description:
      "Your team can review and approve drawings faster when you have clean, standards-compliant CAD files, helping you get projects done on time.",
  },
] as const;

export const scanToCadWorkflowSection = {
  tag: "Workflow",
  titleLine1: "Our Process Flow for ",
  titleLine2: "Scan to CAD Conversion Services",
  description:
    "Every scan to CAD workflow is broken down into six defined stages from the intake of raw data to the delivery of final quality checked drawings ready for your team.",
};

export const scanToCadWorkflowSteps = [
  {
    number: "01",
    title: "Data Intake and Scope Confirmation",
    text: "After receiving your point cloud files in E57, LAS, RCS or PTX formats, we will review and confirm the project scope and delivery timeline within 24 hours.",
  },
  {
    number: "02",
    title: "Scan Processing and Cleanup",
    text: "Our AI-driven workflow is designed to index, denoise and register your scan data and flag inconsistencies and gaps before drafting begins so nothing is missed.",
  },
  {
    number: "03",
    title: "Architectural CAD Drafting",
    text: "Our trained drafters take point clouds and convert them into CAD drawings like floor plans, elevations and sections. We work directly in AutoCAD point cloud environments to assure accurate placement.",
  },
  {
    number: "04",
    title: "Structural & MEP Detailing",
    text: "We map structural grids, duct runs and pipe routing from your scan data, giving coordination teams a complete, layered CAD reference for every trade on site.",
  },
  {
    number: "05",
    title: "Quality Control & Verification",
    text: "Every drawing passes through over 100 automated QC checkpoints and manual review. We check the dimensions against the raw scan before we finally hand over, to catch any mistakes early.",
  },
  {
    number: "06",
    title: "Final Delivery & Handoff",
    text: "We provide DWG, DXF or PDF files to your standards. We also include a scope summary covered and notes to your team for review.",
  },
];

export const scanToCadTechnologyStackSection = {
  tag: "Tools & Platforms",
  titleLine1: "We Use to Deliver ",
  titleAccent: "Scan to CAD Services",
  description:
    "Leveraging industry-leading BIM software to create accurate, coordinated, and constructible MEP models for complex projects.",
};

export const scanToCadTechnologyStackToolsRowOne: MepBimTechnologyTool[] =
  mepBimTechnologyStackToolsRowOne;

export const scanToCadTechnologyStackToolsRowTwo: MepBimTechnologyTool[] =
  mepBimTechnologyStackToolsRowTwo;

export const scanToCadAdvantagesSection = {
  tag: "Advantages",
  titleLine1: "Benefits of Outsourcing ",
  titleLine2: "Scan to CAD Conversion Services",
  titleMaxWidth: 746,
  descriptionMaxWidth: 734,
  description:
    "Outsourcing your scan to CAD conversion requirements to us helps you take the pressure off your in-house team from repetitive drafting work to concentrate on design and client relationships.",
  ctaLabel: "Contact Now",
  ctaHref: "#scan-to-cad-page-contact",
};

export const scanToCadAdvantagesCards = [
  {
    title: "Trusted, Verified CAD Data",
    text: "Each 3D scan to CAD model is verified against the source scan data, providing your team with reliable dimensions for design and construction.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Better Coordination Across Trades",
    text: "Clean, layered CAD files mean architects, engineers and contractors can all work from the same reliable data, which means there's less conflicting information on site.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Standards and Code Compliance",
    text: "Drawings follow AIA layering conventions and the codes your project needs so your team stays compliant before submission or permitting.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Clear Visualization of Site Conditions",
    text: "Point cloud data is converted into readable 2D and 3D drawings which your team can view alongside photos and site notes in design meetings.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Complete As-Built Documentation",
    text: "Scan to CAD deliverables are based on actual site conditions rather than original design intent, providing your team with documentation they can trust for retrofit work.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Lower Costs, Better Data Use",
    text: "Outsourcing of scan to CAD drafting reduces your internal workload and allows your team to reuse the point cloud data for multiple project phases without having to get additional scans.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
];

export const scanToCadProjectCta = {
  titleLine1: "Ready to Extend Your ",
  titleLine2: "CAD Production Capacity?",
  description:
    "Share your scan data or legacy drawings, and our BIM experts will handle the rest, from cleanup to final delivery.",
  cta: "Contact Us",
  ctaHref: "#scan-to-cad-page-contact",
};

export const scanToCadIndustriesIntro = {
  titleLine1: "Industries We Support with ",
  titleLine2: "Scan to CAD Services",
  titleMaxWidth: 788,
  description:
    "From iconic high-rises to large-scale infrastructure, our architectural laser scan to CAD services support diverse industries with practical, scalable solutions for their unique project goals.",
};

export const scanToCadResourcesSection = acsServicePagesResourcesSection;

export const scanToCadTestimonialsDescription =
  "Client stories set out how our scan to CAD expertise reduced costs, improved coordination and sped project delivery through collaboration.";

export const scanToCadFaqSection = {
  tag: "FAQs",
  description:
    "Everything you need to know about BIM modeling services, project requirements, workflows, and deliverables.",
};

export const scanToCadFaqs = [
  {
    q: "How reliable is your scan to CAD conversion?",
    a: "We verify every point cloud to CAD conversion against the source scan data using 100+ QC points, giving your team dimensions it can trust for design.",
  },
  {
    q: "What file formats do you accept for scan to CAD conversion?",
    a: "We accept E57, RCS, LAS, PTX and FLS scan formats, plus legacy PDF drawings for conversion into DWG or DXF files.",
  },
  {
    q: "What deliverables will I get from the scan to CAD process?",
    a: "Deliverables include layered DWG, DXF and PDF files, plus 2D scan to CAD outputs like floor plans, elevations, sections and reflected ceiling plans.",
  },
  {
    q: "How long does a scan to CAD project take?",
    a: "Our team processes 10,000 sq.ft. per day, so most point cloud to CAD projects deliver within a few business days depending on scope and detail level.",
  },
  {
    q: "How much does scan to CAD conversion cost?",
    a: "Costs depend on square footage and project complexity. Share your scan files and we will send a free quote within 24 hours.",
  },
];

export const scanToCadFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: scanToCadFaqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export const scanToCadContactDescription =
  "Tell us about your scan data, drawing standards, and delivery timeline. Our scan to CAD specialists will align the right drafting team for your project.";
