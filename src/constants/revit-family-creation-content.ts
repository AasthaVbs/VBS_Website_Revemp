import { benefitIconColored, benefitIconMuted } from "@/constants/benefit-icons";
import type { MepBimTechnologyTool } from "@/constants/mep-bim-modelling-content";
import {
  mepBimTechnologyStackToolsRowOne,
  mepBimTechnologyStackToolsRowTwo,
} from "@/constants/mep-bim-modelling-content";
import { acsServicePagesResourcesSection } from "@/constants/shared-sections";

/** Temporary placeholders until dedicated art is provided */
const PLACEHOLDER = "/image/as-built.jpg";

export const revitFamilyCreationStatsStrip = [
  { value: "4000+", color: "text-vbs-red", label: "Projects Delivered" },
  { value: "300+", color: "text-vbs-green", label: "Global Clients" },
  { value: "11+", color: "text-vbs-yellow", label: "Years of Experience" },
  {
    value: "500+",
    color: "text-vbs-blue",
    label: "US-trained Architects & Engineers",
  },
];

export const revitFamilyCreationHero = {
  tag: "Revit Family Creation",
  titleLead: "Custom Revit Family Creation Services for ",
  titleAccent: "Architecture and Structural Teams",
  description:
    "From parametric architectural walls to structural connections, our pre-vetted Revit experts provide AI-powered Revit Family Creation Services to keep your models coordinated and fully code-compliant.",
  ctaLabel: "Connect With Us",
  imageSrc: PLACEHOLDER,
  imageAlt: "Custom Revit Family Creation Services",
  copyMaxWidth: 677,
  descriptionMaxWidth: 648,
};

export const revitFamilyCreationIntro = {
  tag: "Overview",
  titleLead: "Revit Family Creation Company for ",
  titleAccent: "Standardized BIM Libraries",
  titleStacked: false,
  description:
    "Custom Revit Family Creation Services help architects, structural engineers, and manufacturers boost productivity, sharpen accuracy, tighten coordination, and hit delivery timelines every project cycle.",
  sideDescription:
    "Virtual Building Studio stands as a trusted BIM Object Creation service provider in the USA for AEC firms and manufacturers. Our vetted experts use proprietary AI tools to increase your team's capacity, cut rework, strengthen coordination and free your staff for core work.",
  featuresTitle: "Pre-Vetted Revit Family Experts Ready to Support Your Firm",
  features: [
    "Custom parametric families for Architectural and Structural systems, built to your exact specs",
    "LOD 100 to 500 development, following AIA and BIMForum standards at every project stage",
    "Manufacturer-specific BIM object creation for architectural product catalogs and global distribution",
    "IFC-compliant, platform-neutral families that work across every major BIM platform",
    "Real-time collaboration through Autodesk BIM 360, so your team sees updates instantly",
    "Symbolic and model geometry optimized for visual clarity and lightweight files",
    "Code-compliant families tested for performance and function, so they work with any platform",
  ],
  mainImage: PLACEHOLDER,
  imageAlt: "Revit Family Creation overview",
};

export const revitFamilyCreationOurClientsSection = {
  tag: "Our Clients",
  titleAccent: "Trusted by",
  titleLead: " Leading AEC Firms",
  description:
    "Our BIM Family Creation Services support architecture, structural engineering, and construction teams across many project types and workflows.",
};

export const revitFamilyCreationServicesSection = {
  tag: "Our Services",
  titleLine1: "Our Comprehensive Range of Parametric",
  titleLine2: "BIM Content Creation Services",
  titleMaxWidth: 1440,
  description:
    "From simple 2D symbols to complex parametric objects, our Revit family creation services cover every stage, from concept through construction to final delivery.",
  ctaLabel: "let's Talk Now",
  ctaHref: "#revit-family-creation-page-contact",
  wideCards: true,
};

export const revitFamilyCreationServiceCards = [
  {
    title: "Architectural BIM Object Creation",
    text: "Our team builds detailed, parametric architectural objects for walls, doors, windows and ceilings. Every BIM Object Creation Services deliverable meets US standards and drops straight into your Revit environment.",
    image: PLACEHOLDER,
  },
  {
    title: "Structural BIM Object Creation",
    text: "Our Structural BIM Object Creation covers beams, columns, connections, and custom load-bearing elements. Each family is LOD-specific, clash-free and ready for coordination inside Revit, right from the start.",
    image: PLACEHOLDER,
  },
  {
    title: "Furniture & FF&E BIM Content Creation",
    text: "We create manufacturer-accurate furniture families built for Revit. Our BIM Content Creation Services support interior designers and FF&E workflows with lightweight, data-rich components that load fast.",
    image: PLACEHOLDER,
  },
  {
    title: "Facade & Curtain Wall BIM Object Creation",
    text: "Our team models parametric curtain walls, cladding panels and facade systems for Revit. These families carry accurate geometry and metadata ready for coordination across your project.",
    image: PLACEHOLDER,
  },
  {
    title: "Building Product & Manufacturer BIM Object Creation",
    text: "We build Revit-ready BIM objects for doors, windows and other architectural building elements. Our Revit Content Creation Services help manufacturers distribute lightweight, code-compliant families fast.",
    image: PLACEHOLDER,
  },
  {
    title: "Equipment & Product BIM Object Creation",
    text: "Our BIM Object Creation Services turn real-world architectural products into intelligent BIM objects. We support manufacturer branding, IFC compliance and distribution across the globe.",
    image: PLACEHOLDER,
  },
];

export const revitFamilyCreationAiBimWorkflowSection = {
  tag: "AI + BIM Experts",
  titleParts: [
    {
      text: "How We Deliver BIM Projects with ",
      className: "text-section font-medium text-[#111111]",
    },
    {
      text: "AI-Driven Workflows",
      className: "text-section text-accent font-light",
    },
  ],
  description:
    "Explore the workflow that combines proprietary AI tools with expert BIM oversight to accelerate production, maintain quality and support scalable project delivery.",
  videoAriaLabel: "Play AI-driven BIM workflow video",
};

export const revitFamilyCreationWhyChooseSection = {
  tag: "Why Choose Us",
  titleLead: "Why Choose Us for ",
  titleAccent: "BIM Content Creation Services?",
  description:
    "Our licensed BIM experts use AI-driven workflows and standard processes to provide you with the most parametric Revit family creation services across the nation.",
  descriptionMaxWidth: 650,
  ctaLabel: "Start New Project",
  ctaHref: "#revit-family-creation-page-contact",
};

export const revitFamilyCreationWhyChooseItems = [
  {
    prefix: "0",
    suffix: "1",
    prefixColor: "#D70416",
    title: "On-Demand Team Ready in 24 Hours",
    description:
      "Get access to experienced BIM professionals within 24 hours to quickly address workload spikes, project deadlines and resource shortages.",
  },
  {
    prefix: "0",
    suffix: "2",
    prefixColor: "#42AA32",
    title: "US Code-Compliant Delivery in Realtime",
    description:
      "Get your Revit families in realtime, all while sticking to US codes, standards and whatever your project needs, making sure smooth communication and teamwork throughout the process.",
  },
  {
    prefix: "0",
    suffix: "3",
    prefixColor: "#2299D6",
    title: "30% More Efficient with AI-Powered Workflow",
    description:
      "With AI helping out, you get workflow efficiency 30% better, resulting in faster family development, quicker QC and improved coordination that keeps your project consistent.",
  },
  {
    prefix: "0",
    suffix: "4",
    prefixColor: "#F0B300",
    title: "Flexible Engagement & Risk-Free Trial",
    description:
      "You can pick engagement models that work best for your project. And if you're unsure, there's a risk-free trial to check out the expertise before you make a long-term commitment.",
  },
] as const;

export const revitFamilyCreationWorkflowSection = {
  tag: "Workflow",
  titleLine1: "Our Process Flow for ",
  titleLine2: "Revit Family Creation Services",
  description:
    "From initial scoping to final delivery, we manage your Revit Family Creation project with clear checkpoints and consistent communication.",
};

export const revitFamilyCreationWorkflowSteps = [
  {
    number: "01",
    title: "Scope and Requirements Gathering",
    text: "Your project specs, naming convention and Level of Development needs are reviewed by our team. This sets clear expectations before we start modelling and avoids costly re-work.",
  },
  {
    number: "02",
    title: "Family Development & Modeling",
    text: "Our Revit experts use AI-assisted workflows to accelerate parametric family development. Data parameters and metadata are added, and every family is structured for reuse following AIA, BIMForum or your internal standards.",
  },
  {
    number: "03",
    title: "QA & Standard Check",
    text: "Our quality control team cross checks geometry accuracy, parameter naming convention and metadata structure match your project needs. This catches errors before files enter your Revit environment.",
  },
  {
    number: "04",
    title: "Client review & changes",
    text: "You look through each family on Autodesk BIM 360 or your favourite platform. We revise in realtime. We keep communication direct and turnaround fast.",
  },
  {
    number: "05",
    title: "Final Delivery and Support",
    text: "When approved, we deliver your BIM content ready to be used immediately in your Revit workflow. Our team remains available for future updates, fixes and future family requests.",
  },
];

export const revitFamilyCreationTechnologyStackSection = {
  tag: "Tools & Platforms",
  titleLine1: "We Use to Deliver ",
  titleAccent: "Revit Family Creation",
  description:
    "Leveraging industry-leading BIM software to create accurate, coordinated, and constructible MEP models for complex projects.",
};

export const revitFamilyCreationTechnologyStackToolsRowOne: MepBimTechnologyTool[] =
  mepBimTechnologyStackToolsRowOne;

export const revitFamilyCreationTechnologyStackToolsRowTwo: MepBimTechnologyTool[] =
  mepBimTechnologyStackToolsRowTwo;

export const revitFamilyCreationKeyPointsSection = {
  tag: "Key Points",
  titleLine1: "Advantages of Outsourcing ",
  titleLine2: "Revit Family Creation Services",
  titleMaxWidth: 724,
  descriptionMaxWidth: 687,
  description:
    "Parametric content in Revit helps architecture and structural teams fasten workflows, sharpen model accuracy and scale BIM assets without added rework.",
  ctaLabel: "Contact Now",
  ctaHref: "#revit-family-creation-page-contact",
};

export const revitFamilyCreationKeyPointsCards = [
  {
    title: "Flexibility and Adaptability in Design",
    text: "Our Revit modelers build parametric families that update measurements, materials and configurations automatically. You get fast design iterations without rebuilding geometry from scratch saving your team real time.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Improved Accuracy and Consistency",
    text: "All the BIM objects we build are to precise specifications. That means your data structure, naming conventions and geometry are always compliant to project standard or manufacturer specs.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Reduced Modeling Time",
    text: "Reusable parametric families cut down repetitive modeling tasks across multiple projects. Your team documents faster, hits production deadlines and spends fewer late nights at the desk.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Smooth Coordination Across Disciplines",
    text: "Whether your team works in architecture or structural design, residential Revit families connect smartly. Real time updates and clash free integration keep every trade in sync and cutting down chances of revisions.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Better Scheduling and Quantity Take-offs",
    text: "Embedded metadata and parameters let your team pull accurate Revit schedules automatically. Quantity extraction and cost estimation become faster, with far fewer manual errors slowing you down.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Scalability for Large Projects or Product Catalogs",
    text: "Type catalogs and nested families let your team manage thousands of components at once. This scales easily for large projects or manufacturers with wide product lines.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Compliance Across Every Platform",
    text: "Our teams model parametric BIM objects to meet AIA, BIMForum, IFC and COBie standards. This means your families work across every BIM platform and app you use.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
];

export const revitFamilyCreationProjectCta = {
  titleLine1: "Ready to Standardize Your ",
  titleLine2: "BIM Content Library?",
  description:
    "Get consistent, code-compliant Revit families across every project. Let's talk about your BIM content needs and get started this week.",
  cta: "Contact Us",
  ctaHref: "#revit-family-creation-page-contact",
};

export const revitFamilyCreationIndustriesIntro = {
  titleLine1: "Industries We Support with ",
  titleLine2: "Revit Family Creation Expertise",
  titleMaxWidth: 706,
  introMaxWidth: 780,
  description:
    "From iconic high-rises to large-scale infrastructure, our Revit family services empower diverse industries with smart, scalable solutions tailored to their unique project goals and challenges.",
};

export const revitFamilyCreationResourcesSection = acsServicePagesResourcesSection;

export const revitFamilyCreationTestimonialsDescription =
  "Client stories set out how our BIM expertise reduced costs, improved coordination and sped project delivery through collaboration.";

export const revitFamilyCreationFaqSection = {
  tag: "FAQs",
  description:
    "Everything you need to know about our Custom Revit Family Creation Services, including project requirements, workflows and deliverables.",
};

export const revitFamilyCreationFaqs = [
  {
    q: "Do you provide project-specific Revit Family Creation services?",
    a: "No, we provide access to top 1% US-trained Revit experts with deep experience in Revit Family Creation Services. Our professionals integrate into your team within 5 days and function as an extension of your in-house staff.",
  },
  {
    q: "Can I scale the Revit family creation team up or down based on workload?",
    a: "Yes. You can scale your dedicated family creation team up or down as project demand changes. Engagement models support short spikes, steady pipelines, and longer-term capacity without restarting onboarding each time.",
  },
  {
    q: "Do your experts work in the same time zone as our U.S. team?",
    a: "Our Revit family experts align with U.S. business hours and collaboration windows so reviews, feedback, and handoffs stay in sync with your internal design and production schedules.",
  },
  {
    q: "How fast can you onboard a resource for Revit Family Creation?",
    a: "We typically onboard a dedicated Revit Family Creation resource within 5 business days, after aligning standards, naming conventions, LOD requirements, and preferred collaboration platforms.",
  },
  {
    q: "How do you ensure quality when using AI?",
    a: "AI accelerates parametric development and repetitive tasks, while US-trained Revit experts review geometry, parameters, metadata, and standards through structured QA so every family is code-compliant before delivery.",
  },
];

export const revitFamilyCreationContactDescription =
  "Tell us about your family library needs, LOD targets, and product or project standards. Our team will align the right US-trained Revit experts to build parametric BIM content that fits your workflow.";
