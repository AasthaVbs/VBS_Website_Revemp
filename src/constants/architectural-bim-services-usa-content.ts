import { benefitIconColored, benefitIconMuted } from "@/constants/benefit-icons";
import { clientSuccessStories } from "@/constants/client-success-stories-content";

/** Public `/icon` assets (filenames contain spaces/`&`, so encode for safe URLs). */
const usaIcon = (file: string) => encodeURI(`/icon/${file}`);
const caseLogo = (file: string) => `/image/arch-drafting-lp/${file}`;

export const architecturalBimUsaStatsStrip = [
  { value: "1000+", color: "text-vbs-red", label: "Projects Delivered" },
  { value: "100+", color: "text-vbs-green", label: "Architectural Firms Trust Us" },
  { value: "9+", color: "text-vbs-yellow", label: "Years in Industry" },
  { value: "200+", color: "text-vbs-blue", label: "Vetted Architects" },
];

export const architecturalBimUsaHero = {
  tag: "Architectural BIM",
  titleLead: "Architectural BIM Services in USA - ",
  titleAccent: "Hire Top 1% Architects in 5 Days",
  description:
    "Trusted by 100+ firms for delivering precise Architectural BIM Modeling Services, backed by 200+ Vetted US code-compliant Architects",
  formTitleLead: "Get Started Your ",
  formTitleAccent: "Project Today!",
  submitLabel: "Offload Your Drafting today",
  formBg: "/image/architectural-bim-services-usa.jpg",
  formBgAlt: "Architectural BIM services USA",
  copyMaxWidth: 609,
};

export const architecturalBimUsaOurClientsSection = {
  tag: "Our Clients",
  titleAccent: "Architecture Firms Nationwide",
  titleLead: "Trusted by Leading ",
  titleAccentFirst: false,
  description: "",
  titleMaxWidth: 528,
};

export const architecturalBimUsaOurClientsLogos = [
  { name: "GP Architecture", src: "/image/gparchitecture.png" },
  { name: "Sparc Design", src: "/image/sparc-design.png" },
  { name: "Whitten Architects", src: "/image/whitten-architects.png" },
];

export const architecturalBimUsaTestimonials = {
  tag: "Testimonials",
  titleLead: "Real Architects. ",
  titleAccent: "Real Results.",
  description:
    "Client stories that reveal how our Architectural BIM 3D Modeling expertise cuts rework and simplifies AEC project delivery.",
  stories: clientSuccessStories,
};

export const architecturalBimUsaOverviewSection = {
  tag: "Overview",
  titleLead: "The Best ",
  titleAccent: "Architectural BIM Services Provider",
  titleTrail: " for Fast, Accurate Project Delivery",
  description:
    "Virtual Building Studio provides precision-driven Architectural BIM Modeling Services tailored to the evolving needs of the AEC industry in the USA.",
  image: "/image/architectural-bim-overview.jpg",
  imageAlt: "Architectural BIM modeling",
  bodyText:
    "As a trusted architectural BIM services provider, we specialize in delivering accurate, code-compliant BIM models and documentation that align with US building codes and project standards. From early-stage design to construction-ready deliverables, our top 1% vetted BIM experts empower architects to work faster, smarter, and more collaboratively.",
  cardTitle: "Get Revit Experts for Permit Sets, Drafting & 3D Modeling:",
};

export const architecturalBimUsaOverviewBullets = [
  "Full-spectrum Architectural 3D Modeling Services from schematic design to construction documentation",
  "As-built models and point cloud conversions for renovations, retrofits, and facility management",
  "Custom parametric Revit family creation for repeatable and efficient modeling",
  "BIM deliverables aligned with IBC, ADA, and local jurisdictional standards",
  "Seamless integration into your tools, templates, and QA/QC processes",
  "Advanced BIM tools and workflows to reduce rework and improve coordination",
];

export const architecturalBimUsaServicesSection = {
  tag: "Services",
  titleLead: "What Our Architectural ",
  titleAccent: "BIM Experts Do Best",
  titleTrail: "",
  description:
    "From schematic design to final construction documents, our BIM services help you deliver faster and better. Get CAD to BIM, Revit family creation, and 3D models under one roof.",
  ctaLabel: "Get your dedicated architect",
  ctaHref: "#abs-usa-contact",
};

export const architecturalBimUsaServiceCards = [
  {
    title: "3D Revit Modeling",
    description:
      "We build precise, data-rich architectural models in Revit that reflect design intent and construction logic from day one.",
    icon: usaIcon("Revit Architecture Service.svg"),
  },
  {
    title: "Design Development Support",
    description:
      "Our experts translate conceptual sketches into detailed, code-aligned BIM models that evolve seamlessly through the design phases.",
    icon: usaIcon("Design Development Support.svg"),
  },
  {
    title: "Presentation Models & Visualization",
    description:
      "We craft visually striking architectural 3D rendered images and walkthroughs that communicate design narratives to clients and stakeholders with clarity.",
    icon: usaIcon("Architectural 3D Visualization.svg"),
  },
  {
    title: "Construction Documentation",
    description:
      "From annotated floor plans to detailed sections, our dedicated architects generate permit-ready drawing sets directly from BIM with full standards compliance.",
    icon: usaIcon("Project Support & Delivery.svg"),
  },
  {
    title: "Clash Detection & BIM Coordination",
    description:
      "We identify and resolve design conflicts early by coordinating architecture with MEP and structural systems using advanced clash-detection tools.",
    icon: usaIcon("Clash Detection & BIM Coordination.svg"),
  },
  {
    title: "Shop Drawing Generation",
    description:
      "Our team extracts accurate shop drawings from BIM models, ensuring fabrication precision and field-ready clarity.",
    icon: usaIcon("Shop Drawing Generation.svg"),
  },
  {
    title: "Architectural Scan to BIM",
    description:
      "We convert point clouds into LOD-specific as-built architectural models that capture existing site conditions down to the millimeter.",
    icon: usaIcon("Architectural Scan to BIM.svg"),
  },
  {
    title: "Parametric Revit Family Creation",
    description:
      "We develop intelligent, lightweight BIM Content, Revit families with flexible parameters that enhance project performance and modeling speed.",
    icon: usaIcon("BIM Modeling & Design.svg"),
  },
  {
    title: "CAD to BIM Conversion",
    description:
      "We transform legacy 2D CAD drawings into smart BIM models, optimizing for reusability, coordination, and design accuracy.",
    icon: usaIcon("Architectural CAD to BIM.svg"),
  },
];

export const architecturalBimUsaAdvantagesSection = {
  tag: "Key Advantages",
  titleLine1: "Key Advantages of ",
  titleAccentLead: "",
  titleAccentRest: "Architectural BIM Modeling Services",
  titleParts: [
    { text: "Key Advantages of ", className: "mep-figma-why-choose__title-dark" },
    {
      text: "Architectural BIM Modeling Services",
      className: "mep-figma-why-choose__title-accent",
      breakBefore: true,
    },
  ],
  description:
    "As a trusted Architectural BIM Services Company, our dedicated US-trained architects streamline design workflows, enhance collaboration, and reduce rework with data-rich, constructible BIM models tailored to each project's complexity and scope.",
  ctaLabel: "Scale your team at your terms!",
  ctaHref: "#abs-usa-contact",
  titleMaxWidth: 900,
  descriptionMaxWidth: 980,
  gridRows: [3, 3, 3] as [number, number, number],
};

export const architecturalBimUsaAdvantagesItems = [
  {
    title: "LOD-Based 3D Revit Modeling for Design Accuracy",
    description:
      "LOD-Based 3D Revit Modeling allows architects to manage design details progressively, improving clarity and collaboration.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Coordinated Design Development with BIM",
    description:
      "Design Development with BIM helps align architectural layouts with structural and MEP systems early on, reducing rework.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Enhanced Visualization for Stakeholder Buy-In",
    description:
      "Visualization-Ready Models offer realistic 3D views and walkthroughs, enhancing client communication and design validation.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Accurate Construction Documentation from Models",
    description:
      "Construction Documentation from BIM ensures that plans, sections, and elevations are consistent and automatically updated with design changes.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Proactive Clash Detection and Coordination",
    description:
      "Clash Detection and Coordination identify issues before construction begins, minimizing costly site conflicts.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Fabrication-Ready Shop Drawings",
    description:
      "BIM-derived shop drawings support precise fabrication and assembly of architectural components for smoother on-site execution.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Accurate As-Built Models from Point Clouds",
    description:
      "Scan to BIM services for architecture convert laser scan data into intelligent models that reflect existing conditions with high fidelity, essential for renovations and retrofits.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Flexible Parametric Revit Families",
    description:
      "Parametric modeling in BIM enables architects to efficiently model customizable components, improving consistency, speeding up design iterations, and reducing modeling errors.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Seamless CAD to BIM Transition for Legacy Projects",
    description:
      "CAD to BIM Conversion transforms legacy 2D drawings into intelligent models, modernizing project documentation for future use.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
];

export const architecturalBimUsaCaseStudiesSection = {
  tag: "Case Studies",
  titleLead: "Client ",
  titleAccent: "Success Stories",
  description:
    "Discover how our clients boosted efficiency and grew their teams fourfold with our proprietary DRM solution.",
  ctaLabel: "Request a Consultation",
};

/** Same AECOM / Sunway / Horizon cards as /landing/professional-architectural-drafting-services. */
export const architecturalBimUsaCaseStudies = [
  {
    id: "aecom",
    logo: caseLogo("case-aecom-logo.png"),
    logoAlt: "AECOM",
    summary:
      "Scaled BIM production capacity through a dedicated Build-Operate-Transfer (B-O-T) engagement.",
    stats: [
      { label: "Engagement", value: "3 Years\nBuild-Operate-Transfer" },
      { label: "Team", value: "50 Dedicated Architects\n& Engineers" },
      { label: "Partnership", value: "18+ Projects Delivered" },
    ],
    listTitle: "Scope",
    listItems: [
      "SD, DD & CD Documentation",
      "Construction Documentation & Permit Sets",
      "Coordinated BIM & Revit Models",
      "Architectural & MEP Shop Drawings",
      "Clash Detection & Design Coordination",
      "Ongoing Production Support Across Multiple Programs",
    ],
    outcomeTitle: "Outcome",
    outcome:
      "Built and scaled a 50-member dedicated production team, enabling AECOM to accelerate BIM delivery, maintain consistent documentation standards, and support 18+ infrastructure and building projects through a long-term production partnership.",
    gallery: [
      caseLogo("case-aecom-main.png"),
      caseLogo("case-aecom-t1.png"),
      caseLogo("case-aecom-t2.png"),
      caseLogo("case-aecom-t3.png"),
      caseLogo("case-aecom-t4.png"),
      "/image/aecom-project-1.jpg",
      "/image/aecom-project-2.jpg",
      "/image/aecom-slider-image.png",
      "/image/aecom-case-list-img.png",
    ],
    thumbCount: 5,
    moreCount: 5,
  },
  {
    id: "sunway",
    logo: caseLogo("case-sunway-logo.png"),
    logoAlt: "Sunway Construction",
    summary:
      "Strengthened BIM delivery capabilities through a long-term Dedicated Resource engagement.",
    stats: [
      { label: "Engagement", value: "7-Year Engagement\nDedicated Resource Model" },
      { label: "Team", value: "30 Dedicated Architects\n& Engineers" },
      { label: "Partnership", value: "20+ Projects" },
    ],
    listTitle: "Delivery Responsibility",
    listItems: [
      "End-to-end BIM production for government projects",
      "Architectural documentation Services",
      "Revit modeling aligned with project standards",
      "Multi-disciplinary coordination & clash resolution",
      "Production support for evolving BIM workflows",
      "Dedicated team for daily delivery operations",
    ],
    outcomeTitle: "Outcome",
    outcome:
      "Rapidly built a 30-member dedicated architectural and BIM team within just 2 months, enabling Sunway Construction to standardize BIM delivery, improve project coordination, and successfully execute complex government and commercial developments.",
    gallery: [
      caseLogo("case-sunway-main.png"),
      caseLogo("case-sunway-t1.png"),
      caseLogo("case-sunway-t2.png"),
      caseLogo("case-sunway-t3.png"),
      "/image/sunway-project-1.jpg",
      "/image/sunway-project-2.jpg",
    ],
    thumbCount: 5,
    moreCount: 2,
  },
  {
    id: "horizon",
    logo: caseLogo("case-horizon-logo.png"),
    logoAlt: "New Horizon",
    summary: "Expanded production capacity through a dedicated architectural delivery team.",
    stats: [
      { label: "Engagement", value: "5-Year Engagement\nDedicated Resource Model" },
      { label: "Team", value: "9 Dedicated Architects" },
      { label: "Partnership", value: "35+ Projects" },
    ],
    listTitle: "Delivery Responsibility",
    listItems: [
      "SD, DD & CD Documentation",
      "Construction Documentation & Permit Sets",
      "Architectural BIM Modeling",
      "Design Development Support",
      "Detailed Drawing Production",
      "Ongoing Production Support Across Multiple Projects",
    ],
    outcomeTitle: "Outcome",
    outcome:
      "Established a 9-member dedicated architectural team in just 3 days, increasing production efficiency by 4×, reducing internal workload, and enabling the firm to deliver more projects while maintaining consistent documentation quality.",
    gallery: [
      caseLogo("case-horizon-main.png"),
      caseLogo("case-horizon-t1.png"),
      caseLogo("case-horizon-t2.png"),
      caseLogo("case-horizon-t3.png"),
    ],
    thumbCount: 4,
    moreCount: 0,
  },
];

export const architecturalBimUsaWhyChooseSection = {
  tag: "Why Choose us",
  titleLine1: "Why 100+ US Architecture Firms Hire ",
  titleAccentLead: "",
  titleAccentRest: "Our Top Experts for BIM Consulting",
  titleParts: [
    {
      text: "Why 100+ US Architecture Firms Hire ",
      className: "mep-figma-why-choose__title-dark",
    },
    {
      text: "Our Top Experts for BIM Consulting",
      className: "mep-figma-why-choose__title-accent",
      breakBefore: true,
    },
  ],
  description:
    "Being the trusted BIM Architectural Services Provider Near You, our licensed BIM experts deliver speed, accuracy, and flexibility, helping you scale on your terms.",
  ctaLabel: "Hire top 1% BIM Architects",
  ctaHref: "#abs-usa-contact",
  titleMaxWidth: 864,
  descriptionMaxWidth: 900,
  gridRows: [3, 3] as [number, number],
};

export const architecturalBimUsaWhyChooseItems = [
  {
    title: "Top 1% US-Trained Architects",
    description:
      "We screen 20,000+ candidates yearly to hire only the best BIM experts trained in U.S. codes and standards.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "4x Output at a Fraction of the Cost",
    description:
      "Achieve four times the productivity at one-fourth the cost of in-house teams, without compromising on accuracy or speed.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Seamless Onboarding in Just 5 Days",
    description:
      "Get started with our experts within 5 days with zero recruitment overhead, aligning with your workflows, tools, and documentation standards.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "One-Month Risk-Free Trial",
    description:
      "Try our Architectural BIM Modeling experts with zero risk. Experience the quality firsthand; if you're not satisfied, you get a full refund.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "No Long-Term Contracts, Full Flexibility",
    description:
      "Stay flexible with pay-as-you-go engagement. Scale up or down as needed and cancel anytime with just 15 days' notice.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Timezone Aligned & Data Secure",
    description:
      "Collaborate in real time with teams aligned to your working hours while ensuring complete data confidentiality via secure, enterprise-grade protocols.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
];

export const architecturalBimUsaIndustriesIntro = {
  titleLine1: "Industries We Serve with ",
  titleLine2: "Architectural BIM Expertise",
  description:
    "From commercial developments to public infrastructure, our Architectural BIM Services support a wide range of sectors with accurate modeling and seamless coordination.",
  titleMaxWidth: 764,
  introMaxWidth: 700,
};

/** Shared EngagementModelsSection header (same component as other service pages). */
export const architecturalBimUsaEngagementSection = {
  tag: "Engagement Models",
  titleLine1: "Perfect Fit Solutions for Every",
  titleAccent: "Architectural BIM Modeling Project",
  description:
    "Whether you need a single BIM architect or a full-scale architectural BIM team, our flexible resource models adapt seamlessly to your project scope, timeline, and technical requirements.",
};

export const architecturalBimUsaFaqSection = {
  tag: "FAQs",
  description:
    "Everything you need to know about BIM modeling services, project requirements, workflows, and deliverables.",
};

export const architecturalBimUsaFaqs = [
  {
    q: "What are Architectural BIM Services?",
    a: "Architectural BIM (Building Information Modeling) Services involve the creation of intelligent 3D models that digitally represent a building's design, materials, and structure. These services support better decision-making, coordination, and project visualization throughout the building lifecycle.",
  },
  {
    q: "Why should I choose Architectural BIM over traditional CAD drafting?",
    a: "BIM goes beyond 2D drafting by creating a coordinated, data-rich 3D model. That means fewer clashes, faster revisions, clearer visualization for stakeholders, and construction documents that stay consistent as the design evolves.",
  },
  {
    q: "What does your Architectural BIM service package include?",
    a: "Our services span 3D Revit modeling, design development support, presentation models and visualization, construction documentation, clash detection and coordination, shop drawings, scan to BIM, parametric Revit families, and CAD to BIM conversion.",
  },
  {
    q: "How quickly can I onboard a dedicated architect for my project?",
    a: "Most clients get a vetted, dedicated architect onboarded within 5 days — aligned to your tools, templates, and documentation standards.",
  },
  {
    q: "Do you offer Architectural BIM Consulting Services?",
    a: "Yes. Beyond production, our BIM experts advise on workflows, standards, LOD strategy, and coordination processes so your practice scales delivery without sacrificing quality.",
  },
  {
    q: "Is your team experienced with international building codes and standards?",
    a: "Yes. Our architects are trained on US codes and standards (including IBC and ADA) and routinely deliver documentation aligned with local jurisdictional requirements.",
  },
  {
    q: "Can you convert existing CAD drawings into BIM models?",
    a: "Absolutely. We convert legacy 2D CAD drawings into intelligent BIM models optimized for coordination, reusability, and design accuracy.",
  },
  {
    q: "Do you provide BIM services for interior spaces as well?",
    a: "Yes. We support interior architectural BIM — including layouts, millwork-related modeling, and coordinated documentation — alongside full-building BIM scopes.",
  },
];

export const architecturalBimUsaContactDescription =
  "Tell us about your Architectural BIM scope and timeline — we'll match you with vetted, code-compliant architects ready to start.";
