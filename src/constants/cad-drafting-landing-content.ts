// @ts-nocheck
import {
  atlantaPublicSafetyGallery,
  californiaCommercialGallery,
  dubaiVillaGallery,
  lasVegasMultifamilyGallery,
} from "@/constants/cad-landing-case-study-gallery";

const CAD_ICON_MUTED = "/images/mep/key-benefits/icon-benefit-muted.svg";
const CAD_ICON_COLORED = "/images/mep/key-benefits/icon-benefit-colored.svg";

export const cadDraftingLandingHero = {
  tag: "CAD Drafting Service",
  titleAccent: "CAD Drafting Services",
  titleLead: " for Architecture, Construction & Engineering Firms",
  description:
    "Accurate SD, DD, and CD drafting delivered inside your AutoCAD, Revit, and BIM 360 workflow without adding internal headcount.",
  ctaLabel: "Get a Free Quote",
  ctaHref: "#cad-landing-contact",
  imageSrc: "/image/cad-drafting.png",
};

export const cadDraftingLandingNavLinks = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Case Study", href: "#case-studies" },
  { label: "Tools", href: "#tools" },
  { label: "Process", href: "#process" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQs", href: "#faqs" },
];

export const cadDraftingLandingStatsStrip = [
  { value: "50,000+", color: "text-vbs-red", label: "CAD Drawing Sets Delivered" },
  { value: "500+", color: "text-vbs-green", label: "Drafting Experts" },
  { value: "2-5", color: "text-vbs-blue", label: "Days Average Turnaround" },
  { value: "11+", color: "text-vbs-yellow", label: "years in the AEC Industry" },
];

export const cadDraftingLandingServicesSection = {
  tag: "Services",
  titleAccent: "CAD Drafting Services ",
  titleLead: "Across Every Documentation Phase",
  description:
    "Eliminate bottlenecks at any stage of the project lifecycle with scalable, precision drafting.",
  ctaLabel: "Request a Quote Today",
  ctaHref: "#cad-landing-contact",
};

export const cadDraftingLandingServicesCards = [
  {
    title: "Architectural CAD Drafting",
    text: "SD, DD, and CD drawings produced inside your AutoCAD or Revit environment, to your layer standards and sheet templates.",
    bullets: [
      "Floor plans, elevations, sections, RCPs, site plans",
      "Delivered ready to coordinate and issue",
      "No reformatting by your team",
    ],
    icon: CAD_ICON_MUTED,
    iconHover: CAD_ICON_COLORED,
  },
  {
    title: "Construction Documentation (CD Sets)",
    text: "Complete CD sets built to IBC standards and local jurisdiction requirements, formatted for permit and bid issuance directly.",
    bullets: [
      "General notes, enlarged plans, wall sections",
      "Schedules and detail sheets included",
      "Your team issues without reformatting",
    ],
    icon: CAD_ICON_MUTED,
    iconHover: CAD_ICON_COLORED,
  },
  {
    title: "Permit Drawing Packages",
    text: "Submission-ready permit sets formatted to AHJ requirements, organized for fast plan check turnaround.",
    bullets: [
      "Cover sheets, zoning compliance diagrams",
      "Accessibility notes and fire/life-safety sheets",
      "Structured for complete, first-pass submissions",
    ],
    icon: CAD_ICON_MUTED,
    iconHover: CAD_ICON_COLORED,
  },
  {
    title: "Revit & AutoCAD Production Support",
    text: "Embedded drafting support inside BIM 360, ACC, and AutoCAD, aligned to your firm's BIM execution plan.",
    bullets: [
      "Family creation, sheet setup, annotation",
      "View management and drawing issue workflows",
      "Your modelers stay on design decisions",
    ],
    icon: CAD_ICON_MUTED,
    iconHover: CAD_ICON_COLORED,
  },
];

export const cadDraftingLandingComparisonSection = {
  tag: "Why Choose Us",
  titleLead: "Why Firms Choose VBS ",
  titleAccent: "Over In-House or Freelancers",
  description:
    "Compare the hidden overhead of traditional hiring and unpredictable freelancers against a scalable drafting capacity.",
  ctaLabel: "Get Started",
  ctaHref: "#cad-landing-contact",
  columns: ["Factor", "In-House Hiring", "Freelancers", "Virtual Building Studio"],
  rows: [
    {
      factor: "Ramp Time",
      inHouse: "4–8 weeks",
      freelancers: "1–2 weeks",
      vbs: "3–4 days",
    },
    {
      factor: "Capacity Flexibility",
      inHouse: "Fixed capacity",
      freelancers: "Limited scalability",
      vbs: "Scale as needed",
    },
    {
      factor: "US Standards Alignment",
      inHouse: "Varies by hire",
      freelancers: "Inconsistent",
      vbs: "US AEC standards expertise",
    },
    {
      factor: "Workflow Integration",
      inHouse: "Internal onboarding required",
      freelancers: "Separate workflows",
      vbs: "Works within your workflow",
    },
    {
      factor: "Predictable Delivery",
      inHouse: "Resource-dependent",
      freelancers: "Variable timelines",
      vbs: "Defined milestones & turnaround",
    },
    {
      factor: "NDA & IP Protection",
      inHouse: "Employee agreements",
      freelancers: "Varies by contractor",
      vbs: "NDA-backed engagement",
    },
  ],
};

export const cadDraftingLandingCaseStudiesSection = {
  tag: "Case Studies",
  titleLead: "Real-world Project ",
  titleAccent: "Delivery Outcomes",
  description:
    "See how leading AEC firms leverage our on-demand CAD drafting support to scale production, bypass bottlenecks, and hit critical deadlines.",
};

/** Gallery images sourced from each /projects/ case study page (banner + input/output). */
export const cadDraftingLandingCaseStudies = [
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

export const cadDraftingLandingToolsSection = {
  tag: "Tools We Use",
  titleLead: "Inside ",
  titleAccent: "the Tools",
  titleTrail: " You Already Use",
  description:
    "Your project teams continue working inside the same BIM environment, standards, and coordination workflows already used across active projects.",
};

const toolImg = (filename) => encodeURI(`/image/${filename}`);

export const cadDraftingLandingToolLogos = [
  { name: "AutoCAD", src: toolImg("AutoCAD-logo-1.jpg") },
  { name: "Navisworks", src: toolImg("autodesk-navisworks-1.jpg") },
  { name: "Revit", src: toolImg("autodesk-revit-logo-png_seeklogo-482393-1.jpg") },
  { name: "BIM 360", src: toolImg("BIM-360.jpg") },
  { name: "Bluebeam", src: toolImg("bluebeam-inc-vector-logo-1.jpg") },
  { name: "Lumion", src: toolImg("Lumion.jpg") },
  {
    name: "ReCap Pro",
    src: toolImg("ReCap-Pro-2023-lockup-Blk-OL-ADSK-No-Year-Stacked-1.jpg"),
  },
  {
    name: "Revizto",
    src: toolImg("Revizto-logo-horizontal-1024x199-2.jpg"),
  },
];

export const cadDraftingLandingWorkflowSection = {
  tag: "How Engagement Works",
  titleLine1: "Simple, ",
  titleLine2: "Structured Workflow",
  titleLine3: " for Reliable Drafting Support",
  description:
    "Get your projects moving in hours, with our streamlined 4-step collaborative workflow.",
};

export const cadDraftingLandingWorkflowSteps = [
  {
    number: "01",
    title: "Share Project Information",
    text: "Send us markups, sketches, PDFs, or existing CAD files. No special formatting required.",
  },
  {
    number: "02",
    title: "Scope & Delivery Alignment",
    text: "Project scope, drafting standards, timelines, deliverables, and coordination workflow are finalized with your team before project kick-off.",
  },
  {
    number: "03",
    title: "Dedicated Drafting Production",
    text: "A specialized CAD production team is assigned to your project, working inside your tools and to your standards.",
  },
  {
    number: "04",
    title: "Delivery & Revisions",
    text: "Drawing files are delivered within agreed timelines, with ongoing coordination and revision support as needed.",
  },
];

export const cadDraftingLandingTestimonialsDescription =
  "We offer two flexible engagement models that work best for our clients.";

export const cadDraftingLandingFaqDescription =
  "Everything you need to know before getting started.";

export const cadDraftingLandingFaqs = [
  {
    q: "What's your pricing model, per sheet, hourly, or project-based?",
    a: "We offer flexible engagement models based on project scope, complexity, and turnaround requirements, including project-based, hourly, and dedicated resource pricing.",
  },
  {
    q: "Do you sign NDAs before reviewing project files?",
    a: "Yes. We sign NDAs before reviewing any project files and follow strict data-handling protocols to protect your intellectual property.",
  },
  {
    q: "Which US codes and standards is your team familiar with?",
    a: "Our team works to IBC, ADA, ASHRAE, NFPA, and regional AHJ requirements, aligned to your office standards and jurisdiction-specific submission needs.",
  },
  {
    q: "What software do you work in?",
    a: "We work in AutoCAD, Revit, Revit LT, BIM 360, ACC, Navisworks, and other platforms your team already uses for drafting and coordination.",
  },
  {
    q: "How many revision rounds are included?",
    a: "Revision scope is agreed during project kickoff based on deliverable type and turnaround. We support iterative redline cycles within the agreed engagement model.",
  },
  {
    q: "What are your working hours and overlap with U.S. clients?",
    a: "We provide overlap with U.S. business hours for coordination and reviews, with overnight production capacity to accelerate turnaround on active drawing sets.",
  },
];

export const cadDraftingLandingCta = {
  titleLine1: "Need Additional ",
  titleLine2: "Drafting Capacity?",
  description:
    "Extend your drafting team with support for SD, DD, CD sets and permit drawings. Request an estimate or book a scoping call.",
  ctaLabel: "Contact Us",
  ctaHref: "#cad-landing-contact",
};
