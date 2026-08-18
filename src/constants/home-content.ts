import { ROUTES } from "@/constants/navigation";

export const navLinks = [
  "What We Do",
  "Success Stories",
  "Resources",
  "About Us",
  "Contact Us",
];

export const stats = [
  { value: "11+", label: "Years Embedded Inside U.S. AEC Delivery", color: "vbs-red" },
  { value: "2000+", label: "Projects Delivered Across BIM & VDC", color: "vbs-blue" },
  { value: "98%", label: "Client Retention Through Long-Term Partnerships", color: "vbs-green" },
  { value: "6+", label: "Disciplines Covered", color: "vbs-yellow" },
];

/** Figma 112-17552 — hero-integrated trust strip on home. */
export const homeHeroTrustStats = [
  { value: "11+", label: "Years Embedded Inside U.S. AEC Delivery", color: "text-vbs-red" },
  {
    value: "200+",
    label: "Production Professionals Across Delivery Centers",
    color: "text-vbs-green",
  },
  { value: "5+", label: "Years Average Engagement Length", color: "text-vbs-blue" },
  { value: "6+", label: "Disciplines Covered", color: "text-vbs-yellow" },
];

/** Figma 1-2786 — About Us section. */
export const homeAboutSection = {
  tag: "About Us",
  titleAccent: "The Infrastructure",
  titleLead: " Behind Scalable Delivery",
  paragraph1Lead:
    "Field-level rework and uncoordinated submittals frequently derail project timelines and inflate budgets. Virtual Building Studio functions as a technical extension of your team, providing access to a team of ",
  paragraph1Emphasis: "200+ dedicated remote BIM modelers.",
  paragraph2:
    "As a specialized MEP BIM modeling service provider in the USA, we ensure your building systems are clash-free and fabrication-ready.",
  videoImage: "/image/infrastructure-delivery-model-about-us.jpg",
  youtubeVideoId: "uyaBPQrNhW0",
};

export const homeAboutBadges = [
  {
    id: "code",
    label: "US Code-Compliant Models",
    iconSrc: "/icons/Capa_about-usicon.png",
  },
  {
    id: "guarantee",
    label: "30 days money back guarantee",
    iconSrc: "/icons/Capa_1about-usicon.png",
  },
  {
    id: "vetted",
    label: "Top 1% Vetted Experts",
    iconSrc: "/icons/Capa_1-about-usicon.png",
  },
  {
    id: "turnaround",
    label: "Fast Turnaround",
    iconSrc: "/icons/svg195.svg",
  },
  {
    id: "onboarding",
    label: "3-Day Onboarding",
    iconSrc: "/icons/Capa_1about-usicon.png",
  },
];

export type HomeCapabilityCard = {
  image: string;
  title: string;
  href: string;
  summary: string;
  description: string;
};

export const homeCapabilityCards: HomeCapabilityCard[] = [
  {
    image: "/image/architecture-structure.png",
    title: "Architecture & Structure",
    href: "/architecture-services",
    summary: "Architectural BIM Modeling Services, Documentation, And Design Support",
    description:
      "An integrated BIM Modeling Company functioning as a technical infrastructure layer, allowing principals to focus on design leadership and client engagement.",
  },
  {
    image: "/image/engineering-construction.jpg",
    title: "Engineering & Construction",
    href: ROUTES.mepServices,
    summary: "MEP, Structural, And Construction Documentation Support",
    description:
      "Clash detection, coordination, and constructability reviews with fabrication-ready MEP modeling aligned to your engineering workflows.",
  },
  {
    image: "/image/reality-capture-survey.png",
    title: "Reality Capture & Survey",
    href: "/scan-to-bim-services",
    summary: "Scan-To-BIM Modeling, Survey Data Integration, And Capture Deliverables",
    description:
      "Point cloud to BIM pipelines designed for speed, consistency, and scale across multi-site and portfolio programs.",
  },
];

/** Home hero scrolling media — left column (3) / right column (3), no duplicates. */
export const homeHeroMediaLeft = [
  "/image/architectural-drafting.png",
  "/image/bim-services.png",
  "/image/mechanical-bim-services.png",
] as const;

export const homeHeroMediaRight = [
  "/image/mep-services-2.png",
  "/image/point-cloud-to-bim.png",
  "/image/scan-to-bim.png",
] as const;

/** Figma 1-2925 — Our Clients marquee. */
export const homeOurClientsSection = {
  tag: "Our Clients",
  titleAccent: "Trusted by",
  titleLead: " Leading AEC Firms",
  description:
    "Supporting architecture, engineering, construction, and reality capture teams across diverse project types and workflows.",
};

export const homeOurClientsLogos = [
  { name: "Aecom", src: "/image/Aecom-142-50.png" },
  { name: "Jacobs", src: "/image/Jacobs-142-50.png" },
  { name: "Sunway", src: "/image/Sunway-142-50.png" },
  { name: "Tesla", src: "/image/Tesla-142-50.png" },
];

export const capabilities = [
  {
    title: "General Contractors",
    description:
      "Model support for phased execution, clash workflows, and site-driven coordination.",
  },
  {
    title: "MEP Contractors",
    description:
      "High-fidelity MEP modeling with fabrication alignment and constructability focus.",
  },
  {
    title: "Reality Capture & Survey Companies",
    description:
      "Point cloud to BIM pipelines designed for speed, consistency, and scale.",
  },
];

export const engagementModelCards = [
  {
    icon: "project-based" as const,
    audience: "Best for Small Firms",
    title: "Project-Based Support",
    description:
      "Flexible BIM support for one-time projects and fast-moving delivery requirements.",
    keyBenefits: [
      "Plug-and-play execution",
      "Immediate project kickoff",
      "No long-term commitment",
      "Flexible scope and duration",
    ],
    bestSuitedFor: ["Small firms", "Pilot projects", "Short-term BIM needs"],
    cta: "Start a Project",
    ctaHref: "/contact-us",
    shadow: false,
    ctaHighlighted: false,
    featured: false,
  },
  {
    icon: "dedicated-resource" as const,
    audience: "Best for Growing Firms",
    title: "Dedicated Resource Model",
    description: "Dedicated BIM professionals working as an extension of your internal team.",
    keyBenefits: [
      "Fixed monthly cost",
      "Dedicated resources",
      "Scalable team structure",
      "Consistent communication",
    ],
    bestSuitedFor: ["Mid-sized firms", "Ongoing project pipelines", "Long-term delivery support"],
    cta: "Build your Team",
    ctaHref: ROUTES.dedicatedTeam,
    shadow: false,
    badge: "Most Demanding",
    ctaHighlighted: true,
    featured: true,
  },
  {
    icon: "global-delivery" as const,
    audience: "Best for Enterprise Firms",
    title: "Global Delivery Center",
    description:
      "A managed offshore BIM delivery center exclusively aligned with your business.",
    keyBenefits: [
      "Exclusive delivery team",
      "Enterprise scalability",
      "Standardized workflows",
      "Long-term operational efficiency",
    ],
    bestSuitedFor: [
      "Large global firms",
      "Multi-project delivery",
      "Strategic outsourcing partnerships",
    ],
    cta: "Explore GDC Model",
    ctaHref: "/contact-us",
    shadow: false,
    ctaHighlighted: false,
    featured: false,
  },
] as const;

export const homeResourcesSection = {
  tag: "Resources",
  titleLine1: "Latest Insights on ",
  titleLine2: "Production, Governance, and Scale",
  description:
    "Explore technical thought leadership and actionable strategies designed to optimize your production workflows and scale without compromising standards.",
  viewAllHref: "/resources",
};

export const homeResourcesFilters = [
  "All",
  "Blogs",
  "Webinar",
  "Case Study",
  "White Paper",
] as const;

export const homeResourceBadgeStyles: Record<
  string,
  { bg: string; color: string; border: string }
> = {
  Webinar: { bg: "#F0B300", color: "#FBF9F9", border: "#F0B300" },
  Blog: { bg: "#D70416", color: "#FFFFFF", border: "#D70416" },
  "Case Study": { bg: "#42AA32", color: "#FFFFFF", border: "#42AA32" },
  "White Paper": { bg: "#2299D6", color: "#FFFFFF", border: "#2299D6" },
};

const HOME_RESOURCE_TITLE =
  "Why AutoCAD to BIM Conversion is Essential for Modern Construction";

const HOME_RESOURCE_EXCERPT =
  "Whether you're launching a new product or entering a new segment, we design the GTM motion that lands and scales.";

export const homeResourcesFeatured = {
  type: "Webinar",
  title: HOME_RESOURCE_TITLE,
  excerpt: HOME_RESOURCE_EXCERPT,
  image: "/images/figma/resource-1.png",
  href: "/webinar",
};

export const homeResourcesListItems = [
  {
    type: "Blog",
    title: HOME_RESOURCE_TITLE,
    date: "12 Jan 2026",
    image: "/images/figma/resource-2.png",
    href: "/blog",
  },
  {
    type: "Case Study",
    title: HOME_RESOURCE_TITLE,
    date: "12 Jan 2026",
    image: "/images/figma/resource-3.png",
    href: "/projects",
  },
  {
    type: "White Paper",
    title: HOME_RESOURCE_TITLE,
    date: "12 Jan 2026",
    image: "/images/figma/resource-1.png",
    href: "/whitepaper/mep-coordination-data-centers-bim-workflows",
  },
];

export const resources = [
  {
    type: "White Paper",
    title: HOME_RESOURCE_TITLE,
    date: "12 Jan 2026",
  },
  {
    type: "Case Study",
    title: "How BIM Coordination Reduced Rework Across a Multi-Tower Project",
    date: "09 Jan 2026",
  },
  {
    type: "Guide",
    title: "A Practical Framework for Building a Reliable BIM Delivery Engine",
    date: "03 Jan 2026",
  },
];

export const faqs = [
  'What does Virtual Building Studio mean by "delivery infrastructure"?',
  "Do you provide project-based support or dedicated teams?",
  "How quickly can a team be onboarded?",
  "Can your team work within our existing software ecosystem?",
  "How do you ensure quality and consistency across projects?",
  "How do you protect intellectual property (IP), client relationships, and confidential project data?",
];

export const homeFaqDescription = "Everything you need to know before getting started.";

export const homeFaqItems = [
  {
    q: 'What does Virtual Building Studio mean by "delivery infrastructure"?',
    a: "Virtual Building Studio operates as a remote extension of your production environment. We provide governed BIM production, coordination, and documentation under one roof, fully aligned with your standards, workflows, and delivery requirements.",
  },
  {
    q: "Do you provide project-based support or dedicated teams?",
    a: "Yes. Our delivery models include pilots, project-based delivery, and embedded production teams. You may begin with a 30-day trial backed by a money-back guarantee to validate processes, quality standards, and team integration.",
  },
  {
    q: "How quickly can a team be onboarded?",
    a: "Share your requirements, and we will connect you with pre-vetted BIM experts aligned to your standards, workflows, and project needs within 24 hours.",
  },
  {
    q: "Can your team work within our existing software ecosystem?",
    a: "Absolutely. Our teams adapt to your BIM standards, templates, collaboration platforms, project management tools, and established workflows to ensure seamless integration with existing delivery environments.",
  },
  {
    q: "How do you ensure quality and consistency across projects?",
    a: "Our AI-powered workflows reduce manual errors, improve consistency, and accelerate delivery. Combined with multi-level quality reviews and governed production processes, this ensures accurate, standards-compliant deliverables across every project.",
  },
  {
    q: "How do you protect intellectual property (IP), client relationships, and confidential project data?",
    a: "All project information is handled under strict confidentiality protocols, secure access controls, and non-disclosure agreements (NDAs). Your intellectual property, client relationships, project data, and delivery processes remain fully protected throughout the engagement.",
  },
];

export const homeFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homeFaqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export const bestBenefitsSectionCopy = {
  tag: "Benefits",
  titleLead: "Value Beyond ",
  titleAccent: "Delivery",
  description:
    "Accelerate delivery, improve coordination, and scale project execution without increasing internal overhead.",
};

export const certificationSectionCopy = {
  tag: "Certification/Awards",
  titleLead: "Trusted, Certified & ",
  titleAccent: "Recognized",
  description:
    "Built on industry standards, backed by professional memberships, and recognized for delivering consistent BIM excellence.",
};

export const certificationLogos = [
  {
    alt: "SMACNA Associate Member",
    src: encodeURI("/image/SMACNA Associate Member_VBS (1).png"),
  },
  {
    alt: "AIA San Diego Chapter",
    src: "/image/aia-san-diego.png",
    imageClassName: "certification-logo-img--lg",
  },
  {
    alt: "GoodFirms Top Digital Marketing Company",
    src: "/image/Image-1.png",
  },
  {
    alt: "ISO 9001:2015 Certified Company",
    src: "/image/Image-3.png",
  },
  {
    alt: "ISO 27001 Information Security Management Certified",
    src: "/image/Image-4.png",
  },
  {
    alt: "Autodesk Certified Professional",
    src: "/image/Image-5.png",
  },
  {
    alt: "Clutch recognition",
    src: "/image/Image.png",
  },
];
