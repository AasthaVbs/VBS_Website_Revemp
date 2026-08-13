// @ts-nocheck
import {
  atlantaPublicSafetyGallery,
  californiaCommercialGallery,
  dubaiVillaGallery,
  lasVegasMultifamilyGallery,
} from "@/constants/cad-landing-case-study-gallery";

const BIM_ICON_MUTED = "/images/mep/key-benefits/icon-benefit-muted.svg";
const BIM_ICON_COLORED = "/images/mep/key-benefits/icon-benefit-colored.svg";

const HERO_IMAGE = "/image/1004447_OIU9Q61-1.jpg";

export const bimModelingLandingHero = {
  tag: "BIM Modeling Services",
  titleAccent: "LOD 100 - 500 BIM\u00A0Modeling\u00A0Services:",
  titleLead: "Starts in 60 Minutes ",
  description:
    "Scale your project capacity with dedicated Revit & Navisworks specialists delivering architectural BIM models directly within your workflow.",

  ctaLabel: "Get a Free Quote",
  ctaHref: "#bim-landing-contact",
  imageSrc: HERO_IMAGE,
};

export const bimModelingLandingNavLinks = [
  { label: "Services", href: "#services" },
  { label: "Case Study", href: "#case-studies" },
  { label: "Why Us", href: "#why-us" },
  { label: "Tools", href: "#tools" },
  { label: "Process", href: "#process" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQs", href: "#faqs" },
];

export const bimModelingLandingStatsStrip = [
  { value: "4000+", color: "text-vbs-red", label: "Projects Delivered" },
  { value: "500+", color: "text-vbs-green", label: "BIM Experts" },
  { value: "3-5", color: "text-vbs-blue", label: "Days Average Turnaround" },
  { value: "11+", color: "text-vbs-yellow", label: "years in the AEC Industry" },
];

export const bimModelingLandingServicesSection = {
  tag: "Services",
  titleBefore: "Every ",
  titleAccent: "Architectural BIM Deliverable",
  titleAfter: ", Under One Team ",
  titleMaxWidth: 697,
  description:
    "Our BIM production team operates as an extension of your in-house, helping your architects to focus on design intent, client management, and core project delivery.",
  ctaLabel: "Request a Quote",
  ctaHref: "#bim-landing-contact",
};

export const bimModelingLandingServicesCards = [
  {
    title: "Architectural BIM Modeling",
    text: "Revit-native models built to project BEP and firm standards across all phases.",
    bullets: [
      "LOD 100-500, SD, DD, CD phase support",
      "Plans, sections, RCPs, elevations, 3D views",
      "IFC, NWC, and RVT on delivery",
    ],
    icon: BIM_ICON_MUTED,
    iconHover: BIM_ICON_COLORED,
  },
  {
    title: "Structural BIM Modeling",
    text: "Coordinated structural models your team uses to resolve design conflicts before consultant review.",
    bullets: [
      "Concrete, steel, and timber in Revit Structure",
      "Column schedules, grids, and structural plans to CD standards",
      "NWC-ready for Navisworks assembly",
    ],
    icon: BIM_ICON_MUTED,
    iconHover: BIM_ICON_COLORED,
  },
  {
    title: "Revit Family Creation",
    text: "Parametric families built to your firm's shared parameter schema and naming conventions.",
    bullets: [
      "Hosted, non-hosted, face-based, and adaptive types",
      "Type catalogues and formula-driven parameters",
      "Tested against your firm's template before delivery",
    ],
    icon: BIM_ICON_MUTED,
    iconHover: BIM_ICON_COLORED,
  },
  {
    title: "BIM Coordination and Clash Detection",
    text: "Multi-discipline coordination runs managed in Navisworks and BIM 360.",
    bullets: [
      "Hard, soft, and workflow clash detection",
      "Clash matrix, resolution log, and BCF reports",
      "Viewpoint-tagged output for your review workflow",
    ],
    icon: BIM_ICON_MUTED,
    iconHover: BIM_ICON_COLORED,
  },
  {
    title: "As-Built BIM Modeling",
    text: "Field data and point clouds converted into verified Revit as-builts.",
    bullets: [
      "ReCap point cloud processing and registration",
      "LOD 300-400 as-built per project spec",
      "Delivered as RVT with linked point cloud",
    ],
    icon: BIM_ICON_MUTED,
    iconHover: BIM_ICON_COLORED,
  },
  {
    title: "Construction Documentation in Revit",
    text: "Full CD sets produced in Revit to your office template and AIA sheet standards.",
    bullets: [
      "Plans, sections, elevations, details, and schedules",
      "Title blocks, sheet index, and annotation to firm standards",
      "Issued for permit, bid, and construction in coordinated RVT",
    ],
    icon: BIM_ICON_MUTED,
    iconHover: BIM_ICON_COLORED,
  },
];

export const bimModelingLandingServiceBenefitsCards = bimModelingLandingServicesCards.map(
  ({ title, text, bullets, icon, iconHover, textMaxWidth }) => ({
    title,
    text: [text, ...bullets].join(" "),
    icon,
    iconHover,
    ...(textMaxWidth ? { textMaxWidth } : {}),
  }),
);

export const bimModelingLandingComparisonSection = {
  tag: "Why AEC Firms Choose VBS",
  titleAccent: "Why AEC Firms Choose VBS ",
  titleLead: "Over Other External Capacity Options",
  titleAccentFirst: true,
  description:
    "Compare the operational speed, technical accuracy, and strategic risk mitigation of our BIM Modeling services against alternative production models.",
  showCta: false,
  columns: ["Factor", "In-House Hiring", "Other BIM Vendors", "Virtual Building Studio"],
  columnKeys: [
    { key: "factor", labelIndex: 0, variant: "factor" },
    { key: "inHouse", labelIndex: 1, variant: "data" },
    { key: "otherVendors", labelIndex: 2, variant: "data" },
    { key: "vbs", labelIndex: 3, variant: "vbs" },
  ],
  rows: [
    {
      factor: "Ramp Time",
      inHouse: "6 to 12 weeks",
      otherVendors: "1 to 3 weeks",
      vbs: "60 Minutes ",
    },
    {
      factor: "LOD Range",
      inHouse: "Skill-dependent",
      otherVendors: "Inconsistent outputs",
      vbs: "LOD 100 to 500",
    },
    {
      factor: "Software Fit",
      inHouse: "Internal standards only",
      otherVendors: "Workflow mismatch risk",
      vbs: "Revit, Navisworks, BIM 360 native",
    },
    {
      factor: "Capacity Flex",
      inHouse: "Fixed team bandwidth",
      otherVendors: "Limited scaling",
      vbs: "Scalable on demand",
    },
    {
      factor: "US Standards",
      inHouse: "Depends on hiring",
      otherVendors: "Varies by vendor",
      vbs: "11+ years with U.S. AEC firms",
    },
    {
      factor: "NDA & IP",
      inHouse: "Standard internal process",
      otherVendors: "Limited protection clarity",
      vbs: "NDA signed before file sharing",
    },
    {
      factor: "Cost Predictability",
      inHouse: "Salary and overhead costs",
      otherVendors: "Variable project pricing",
      vbs: "Transparent hourly or project-based pricing",
    },
  ],
};

export const bimModelingLandingCaseStudiesSection = {
  tag: "Case Studies",
  titleLead: "Real-world Project ",
  titleAccent: "Delivery Outcomes",
  description:
    "See how leading AEC firms leverage our on-demand BIM modeling support to scale production, bypass bottlenecks, and hit critical deadlines.",
};

export const bimModelingLandingCaseStudies = [
  {
    id: "las-vegas-multifamily",
    title: "From Redlines to Renders: Multi-Family Apartment, Las Vegas",
    description:
      "From resolving drawing discrepancies to developing facade options and realistic 3D renders, the 225,624 sq.ft. residential project progressed through a structured workflow.",
    lod: "LOD 200",
    area: "225,624 Sq.Ft.",
    location: "Las Vegas, NV",
    href: "/projects/multi-family-apartment-bim-visualization-las-vegas/",
    imageFit: "cover",
    ...lasVegasMultifamilyGallery,
  },
  {
    id: "atlanta-public-safety",
    title: "Multi-Discipline BIM Modeling from Scratch: Public Safety Facility, Atlanta",
    description:
      "From incomplete inputs to coordinated Structural and Architectural BIM models delivery for a 20,800 sq. ft. public Safety facility in Atlanta, GA",
    lod: "LOD 300",
    area: "20,800 Sq.Ft.",
    location: "Atlanta, GA",
    href: "/projects/multi-discipline-bim-modeling-for-public-sector-atlanta/",
    imageFit: "cover",
    ...atlantaPublicSafetyGallery,
  },
  {
    id: "dubai-villa",
    title: "High-Fidelity Architectural Visualization: Residential Villa, Dubai",
    description:
      "Photorealistic interior and exterior renders with walkthrough for a 10,000 sq. ft. villa, enabling presentations, faster approvals, and clear design communication.",
    lod: "LOD 300",
    area: "10,000 Sq.Ft.",
    location: "Dubai, UAE",
    href: "/projects/architectural-visualization-residential-villa-dubai/",
    imageFit: "cover",
    ...dubaiVillaGallery,
  },
  {
    id: "california-commercial",
    title: "End-to-End Construction Documentation: Commercial Building, California",
    description:
      "Supporting a 58,176 sq. ft. commercial retail project with dedicated documentation capacity across design, coordination, and construction documentation phases.",
    lod: "LOD 350",
    area: "58,176 Sq.Ft.",
    location: "California, USA",
    href: "/projects/construction-documentation-commercial-building-california/",
    imageFit: "cover",
    ...californiaCommercialGallery,
  },
];

export const bimModelingLandingToolsSection = {
  tag: "Tools We Use",
  titleLead: "Inside ",
  titleAccent: "the Tools",
  titleTrail: " You Already Use",
  description:
    "Your project teams continue working inside the same BIM environment, standards, and coordination workflows already used across active projects.",
};

const toolImg = (filename: string) => encodeURI(`/image/${filename}`);

export const bimModelingLandingToolLogos = [
  { name: "Revit", src: toolImg("autodesk-revit-logo-png_seeklogo-482393-1.jpg") },
  { name: "Navisworks", src: toolImg("autodesk-navisworks-1.jpg") },
  { name: "BIM 360", src: toolImg("bim-360.png") },
  { name: "AutoCAD", src: toolImg("AutoCAD-logo-1.jpg") },
  {
    name: "ReCap Pro",
    src: toolImg("ReCap-Pro-2023-lockup-Blk-OL-ADSK-No-Year-Stacked-1.jpg"),
  },
  {
    name: "Revizto",
    src: toolImg("Revizto-logo-horizontal-1024x199-2.jpg"),
  },
];

export const bimModelingLandingWorkflowSection = {
  tag: "How It Works",
  titleLine1: "Simple, ",
  titleLine2: "Structured Workflow ",
  titleLine3: "for Reliable BIM Support",
  description:
    "Get your projects moving in hours, with our streamlined 4-step collaborative workflow.",
};

export const bimModelingLandingWorkflowSteps = [
  {
    number: "01",
    title: "Submit Your Project",
    text: "Share drawings, markups, point cloud files, BIM standards, or project specifications.",
  },
  {
    number: "02",
    title: "Scope & Proposal",
    text: "Receive a comprehensive project plan, clear milestone deliverables, and binding timeline constraints within 48 hours.",
  },
  {
    number: "03",
    title: "Dedicated Team Assigned",
    text: "Our specialized production modelers integrate directly into your internal Revit or BIM 360 project environment.",
  },
  {
    number: "04",
    title: "Phase-Gated Deliver",
    text: "Teams review deliverables at each milestone with revision tracking and coordination updates.",
  },
];

export const bimModelingLandingTestimonialsDescription =
  "We offer two flexible engagement models that work best for our clients.";

export const bimModelingLandingFaqDescription =
  "Everything you need to know before getting started.";

export const bimModelingLandingFaqs = [
  {
    q: "What LOD levels do you support?",
    a: "We deliver LOD 100 through LOD 500 BIM models across architectural, structural, and MEP disciplines based on your project BEP and phase requirements.",
  },
  {
    q: "Do you sign NDAs before reviewing project files?",
    a: "Yes. We sign NDAs before reviewing any project files and follow strict data-handling protocols to protect your intellectual property.",
  },
  {
    q: "Which software platforms do you work in?",
    a: "We work natively in Revit, Navisworks, BIM 360, ACC, and ReCap, aligned to your firm's templates, standards, and coordination workflows.",
  },
  {
    q: "How quickly can a dedicated BIM team start?",
    a: "Most engagements ramp within 3 to 5 business days once scope, standards, and access are confirmed.",
  },
  {
    q: "Can you work inside our existing Revit models?",
    a: "Yes. Our teams integrate directly into your live project environment, following your BEP, naming conventions, and issue workflows.",
  },
  {
    q: "What are your working hours and overlap with U.S. clients?",
    a: "We provide overlap with U.S. business hours for coordination and reviews, with overnight production capacity to accelerate turnaround on active models.",
  },
];

export const bimModelingLandingCta = {
  titleLine1: "Expand BIM Capacity ",
  titleLine2: "Without Hiring, Training, or Delays",
  description:
    "Increase production output while your architects stay focused on design leadership, client communication, and project delivery.",
  ctaLabel: "Claim Your Free Trial",
  ctaHref: "#bim-landing-contact",
};
