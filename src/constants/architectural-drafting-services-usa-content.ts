import { clientSuccessStories } from "@/constants/client-success-stories-content";

const threeDayOnboardingIcon = "/image/3-day-onboarding.svg";
const riskFreeTrialIcon = "/image/risk-free-trial.png";
const flexibleEngagementIcon = "/image/flexible-engagement-models.png";
const timezoneIcon = "/image/multi-time-zone-availability-icon.png";

export const architecturalDraftingUsaStatsStrip = [
  { value: "1000+", color: "text-vbs-red", label: "Firms Trust Our Drafting Services" },
  { value: "200+", color: "text-vbs-green", label: "Architects & Drafters In-House" },
  { value: "11+", color: "text-vbs-blue", label: "Years of Drafting Excellence" },
];

export const architecturalDraftingUsaHero = {
  tag: "Architectural drafting",
  titleLead: "Get Architectural Drafting Done Right - ",
  titleAccent: "By U.S.-Trained Architects",
  description:
    "We provide drafting-only support (no design, no stamping). Our team delivers permit-ready, code-compliant drawings in Revit & AutoCAD  so you stay focused on design while we handle documentation.",
  formTitleLead: "Get a ",
  formTitleAccent: "Drafting Estimate",
  submitLabel: "Offload Your Drafting today",
  formBg: "/image/architectural-drafting-usa/hero-form-bg.png",
  formBgAlt: "Architectural drafting estimate",
  copyMaxWidth: 588,
};

export const architecturalDraftingUsaOurClientsSection = {
  tag: "Our Clients",
  titleAccent: "Architecture Firms Nationwide",
  titleLead: "Trusted by Leading ",
  titleAccentFirst: false,
  description: "",
  titleMaxWidth: 528,
};

export const architecturalDraftingUsaOurClientsLogos = [
  { name: "GP Architecture", src: "/image/architectural-drafting-usa/gp-architecture-logo.png" },
  { name: "Studio Seven Architecture", src: "/image/architectural-drafting-usa/studio-seven-logo.png" },
  { name: "Whitten Architects", src: "/image/architectural-drafting-usa/whitten-architects-logo.png" },
];

export const architecturalDraftingUsaTestimonials = {
  tag: "Testimonials",
  titleLead: "Real Architects. ",
  titleAccent: "Real Results.",
  description:
    "Hear from principals and PMs who streamlined delivery by outsourcing drafting not design.",
  stories: clientSuccessStories,
};

export const architecturalDraftingUsaWhoWeAreSection = {
  tag: "Who We Are",
  titleLead: "Your Design. ",
  titleAccent: "Our Drafting Precision.",
  description:
    "With Revit and AutoCAD expertise, our Architects and Drafters transform your designs into detailed, code-compliant drawings at every stage.",
  ctaLabel: "Get permit ready drafts free call",
  ctaHref: "#ads-usa-contact",
  image: "/image/architectural-drafting-precision.png",
  imageAlt: "Architectural drafting precision",
};

export const architecturalDraftingUsaWhoWeAreItems = [
  {
    title: "Schematic Design Drafting (SD) Services",
    caption: "Early layouts, scalable drawings, and basic elevations.",
  },
  {
    title: "Design Development Drafting (DD) Services",
    caption: "Coordinated plans, sections, and elevations for design refinement.",
  },
  {
    title: "Construction Documentation (CD) Services",
    caption: "Permit-ready construction sets with schedules and details.",
  },
  {
    title: "2D Floor Plan Drawings Services",
    caption: "Dimensionally accurate layered floor plans for residential and commercial work.",
  },
  {
    title: "As-Built Drawings Services",
    caption: "Precise as-built records from field data, surveys, and redlines.",
  },
  {
    title: "Permit Set Drawings Services",
    caption: "Jurisdiction-ready permit packages aligned to local codes.",
  },
  {
    title: "Millwork and Joinery Drawings Services",
    caption: "Fabrication-ready millwork drawings with specs and tolerances.",
  },
  {
    title: "Point Cloud to CAD Conversion Services",
    caption: "Accurate CAD deliverables converted from point cloud data.",
  },
  {
    title: "CAD Conversion Services",
    caption: "Legacy PDFs and sketches converted into editable CAD files.",
  },
];

export const architecturalDraftingUsaShowcaseSection = {
  tag: "Project Showcase",
  titleLead: "From Design Intent to",
  titleAccent: "Documentation Excellence",
  description:
    "Explore how our drafting specialists have helped firms produce accurate, code-compliant drawings that win approvals.",
};

export const architecturalDraftingUsaShowcaseProjects = [
  {
    title: "Bari Ristorante Italiano",
    location: "Houston, Texas",
    image: "/image/architectural-3d-visualization-future-images.png",
  },
  {
    title: "KO Remodel",
    location: "Conyers, Georgia",
    image: "/image/ko-remodel-future-images-1.png",
  },
  {
    title: "KO Remodel",
    location: "Los Angeles, California",
    image: "/image/ko-remodel-future-images-2.png",
  },
];

export const architecturalDraftingUsaToolsSection = {
  tag: "Tools We use",
  titleLead: "Our ",
  titleAccent: "Software Expertise",
  titleTrail: "",
  description: "",
};

export const architecturalDraftingUsaToolLogos = [
  { name: "Enscape", src: "/icon/enscape.png" },
  { name: "Lumion", src: "/icon/lumion.png" },
  { name: "Autodesk Revit", src: "/icon/revit.png" },
  { name: "AutoCAD", src: "/icon/autocad.png" },
];

export const architecturalDraftingUsaWhyChooseSection = {
  tag: "Why Choose us",
  titleLine1: "Why We Are the ",
  titleAccentLead: "",
  titleAccentRest: "Trusted Productivity Partner",
  titleParts: [
    { text: "Why We Are the ", className: "mep-figma-why-choose__title-dark" },
    { text: "Trusted Productivity Partner", className: "mep-figma-why-choose__title-accent" },
  ],
  description:
    "Trusted by architects nationwide, we deliver precision, speed, and flexibility that keeps projects moving.",
  ctaLabel: "Claim your risk free start",
  ctaHref: "#ads-usa-contact",
  titleMaxWidth: 574,
  gridRows: [2, 2] as [number, number],
};

export const architecturalDraftingUsaWhyChooseItems = [
  {
    title: "Seamless Start in 24 hours",
    description: "Integrate our team into your workflow quickly, aligned with your standards and tools.",
    icon: threeDayOnboardingIcon,
  },
  {
    title: "Risk-Free First Month",
    description: "Experience our services with confidence — if you're not satisfied, you don't pay.",
    icon: riskFreeTrialIcon,
  },
  {
    title: "No Lock-Ins, Full Flexibility",
    description: "Scale services up or down as your project pipeline shifts.",
    icon: flexibleEngagementIcon,
  },
  {
    title: "Time zone Aligned & Data Secure",
    description: "Work in real-time with enterprise-grade file security.",
    icon: timezoneIcon,
  },
];

export const architecturalDraftingUsaIndustriesIntro = {
  titleLine1: "Areas ",
  titleLine2: "of Expertise",
  description: "Our drafting services support diverse industries with tailored precision.",
  titleMaxWidth: 536,
};

export const architecturalDraftingUsaWorkflowSection = {
  tag: "Our Workflow",
  titleLine1: "How it ",
  titleLine2: "Works",
  description: "From Design to Delivery",
};

export const architecturalDraftingUsaWorkflowSteps = [
  {
    number: "01",
    title: "Discovery Call",
    text: "Define goals, standards, and timelines.",
  },
  {
    number: "02",
    title: "Tailored Drafting Plan",
    text: "Our team sets up workflows in Revit and AutoCAD, aligned with your standards.",
  },
  {
    number: "03",
    title: "Seamless Delivery",
    text: "Receive permit-ready, approval-focused drawings on time, every time.",
  },
];

export const architecturalDraftingUsaContactDescription =
  "Tell us about your drafting workload — we'll help you offload production without changing how you design.";
