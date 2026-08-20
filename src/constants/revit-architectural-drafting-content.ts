import { benefitIconColored, benefitIconMuted } from "@/constants/benefit-icons";
import { clientSuccessStories } from "@/constants/client-success-stories-content";
import {
  architecturalDraftingUsaWhoWeAreItems,
} from "@/constants/architectural-drafting-services-usa-content";

export const revitArchitecturalDraftingStatsStrip = [
  { value: "100+", color: "text-vbs-red", label: "Firms Have Trusted Our Drafting" },
  { value: "200+", color: "text-vbs-green", label: "Projects Delivered" },
  { value: "10+", color: "text-vbs-blue", label: "Years of Expertise" },
];

export const revitArchitecturalDraftingHero = {
  tag: "Revit Architectural Drafting",
  titleLead: "Get Permit-Ready Drafts ",
  titleAccent: "On Time, Every Time",
  description:
    "Our architects and drafters deliver code-compliant, approval-ready drawings using Revit and AutoCAD - so you can move projects forward without delays.",
  formTitleLead: "Get a ",
  formTitleAccent: "Drafting Estimate",
  submitLabel: "Offload Your Drafting today",
  formBg: "/image/revit-architectural-drafting-services-banner.jpg",
  formBgAlt: "Revit architectural drafting estimate",
  copyMaxWidth: 640,
  descMaxWidth: 600,
};

export const revitArchitecturalDraftingOurClientsSection = {
  tag: "Our Clients",
  titleAccent: "Architecture Firms Nationwide",
  titleLead: "Trusted by Leading ",
  titleAccentFirst: false,
  description: "",
  titleMaxWidth: 528,
};

export const revitArchitecturalDraftingOurClientsLogos = [
  { name: "GP Architecture", src: "/image/architectural-drafting-usa/gp-architecture-logo.png" },
  { name: "Studio Seven Architecture", src: "/image/architectural-drafting-usa/studio-seven-logo.png" },
  { name: "Whitten Architects", src: "/image/architectural-drafting-usa/whitten-architects-logo.png" },
];

export const revitArchitecturalDraftingTestimonials = {
  tag: "Testimonials",
  titleLead: "From First Sketch to Final Build - ",
  titleAccent: "Hear It from Our Clients",
  titleMaxWidth: 780,
  description:
    "Client stories that reveal how our drafting expertise cuts rework and simplifies Architectural project delivery.",
  stories: clientSuccessStories,
};

export const revitArchitecturalDraftingWhoWeAreSection = {
  tag: "Who We Are",
  titleLead: "Your Design. ",
  titleAccent: "Our Drafting Precision.",
  description:
    "With Revit and AutoCAD expertise, our Architects and Drafters transform your designs into detailed, code-compliant drawings at every stage.",
  ctaLabel: "Get permit ready drafts free call",
  ctaHref: "#rad-contact",
  image: "/image/your-design-our-drafting-precision.jpg",
  imageAlt: "Your design, our drafting precision",
};

export const revitArchitecturalDraftingWhoWeAreItems = architecturalDraftingUsaWhoWeAreItems;

export const revitArchitecturalDraftingShowcaseSection = {
  tag: "Project Showcase",
  titleLead: "From Blueprints to ",
  titleAccent: "Built Reality",
  description:
    "Explore how our drafting expertise has supported projects across the USA - from residential remodels to large commercial builds.",
};

export const revitArchitecturalDraftingShowcaseProjects = [
  {
    title: "Bari Ristorante Italiano",
    location: "Houston, Texas",
    image: "/image/bari-ristorante-italiano.jpg",
  },
  {
    title: "KO Remodel",
    location: "Conyers, Georgia",
    image: "/image/ko-remodel.jpg",
  },
  {
    title: "KO Remodel",
    location: "Los Angeles, California",
    image: "/image/ko-remodel-losangeles-california.jpg",
  },
];

export const revitArchitecturalDraftingWhyChooseSection = {
  tag: "Why Choose us",
  titleLine1: "Why Architects Choose Us for ",
  titleAccentLead: "",
  titleAccentRest: "Project-Based Drafting",
  titleParts: [
    { text: "Why Architects Choose Us for ", className: "mep-figma-why-choose__title-dark" },
    { text: "Project-Based Drafting", className: "mep-figma-why-choose__title-accent" },
  ],
  description:
    "We specialize in providing accurate, fast, and approval-focused drafting support for individual projects.",
  ctaLabel: "Talk to our drafting experts",
  ctaHref: "#rad-contact",
  titleMaxWidth: 650,
  gridRows: [2, 2] as [number, number],
};

export const revitArchitecturalDraftingWhyChooseItems = [
  {
    title: "Immediate Project Start",
    description: "Get your drafting support underway within days, no waiting.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Experienced Drafting Team",
    description: "A proven team of architects and drafters delivering across diverse project types.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Licensed U.S. Architect Oversight",
    description:
      "Every project is guided and reviewed by a licensed U.S. architect to ensure compliance and accuracy.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Dedicated Project Manager",
    description: "A single point of contact for seamless communication and coordination.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
];

export const revitArchitecturalDraftingIndustriesIntro = {
  titleLine1: "Areas ",
  titleLine2: "of Expertise",
  description: "Our drafting services support diverse industries with tailored precision.",
  titleMaxWidth: 536,
  introMaxWidth: 850,
};

export const revitArchitecturalDraftingWorkflowSection = {
  tag: "Our Workflow",
  titleLine1: "How It Works - ",
  titleLine2: "Simple & Project-Focused",
  description: "",
};

export const revitArchitecturalDraftingWorkflowSteps = [
  {
    number: "01",
    title: "Discovery Call",
    text: "Share your project requirements, scope, and deadlines.",
  },
  {
    number: "02",
    title: "Tailored Drafting Plan",
    text: "We create drawing sets in Revit or AutoCAD, aligned with your standards.",
  },
  {
    number: "03",
    title: "Seamless Delivery",
    text: "Receive accurate, approval-ready drawings on time, every time.",
  },
];

export const revitArchitecturalDraftingContactDescription =
  "Tell us about your drafting workload — we'll help you offload production without changing how you design.";
