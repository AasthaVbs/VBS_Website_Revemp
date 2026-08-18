import { benefitIconColored, benefitIconMuted } from "@/constants/benefit-icons";
import type { MepBimTechnologyTool } from "@/constants/mep-bim-modelling-content";
import {
  mepBimTechnologyStackToolsRowOne,
  mepBimTechnologyStackToolsRowTwo,
} from "@/constants/mep-bim-modelling-content";
import { ROUTES } from "@/constants/navigation";
import { acsServicePagesResourcesSection } from "@/constants/shared-sections";

export const architecturalBimStatsStrip = [
  { value: "2000+", color: "text-vbs-red", label: "Projects Delivered" },
  { value: "300+", color: "text-vbs-green", label: "AEC Firms Trust Us" },
  { value: "11+", color: "text-vbs-yellow", label: "Years in Industry" },
  { value: "250+", color: "text-vbs-blue", label: "US-trained Architects & Engineers" },
];

export const architecturalBimHero = {
  tag: "Architectural BIM",
  titleLead: "AI-powered Architectural BIM Services for ",
  titleAccent: "Overloaded AEC Teams",
  description:
    "When deadlines pile up, BIM production becomes the bottleneck. Our US-trained architects help your firm deliver Architectural BIM Modeling Services faster without compromising design quality.",
  ctaLabel: "Connect With Us",
  imageSrc: "/image/architectural-bim-banner.jpg",
  imageAlt: "Architectural BIM Services",
  copyMaxWidth: 670,
  descriptionMaxWidth: 608,
};

export const architecturalBimIntro = {
  tag: "Overview",
  titleLead: "Simplifying Design, ",
  titleAccent: "Collaboration and Delivery",
  titleStacked: false,
  description:
    "Our architectural BIM models enable architects to minimize coordination issues, improve design decisions, accelerate documentation and approval process and execute projects on time from concept to construction.",
  sideDescription:
    "As a leading Architectural BIM Services Provider in the USA, Virtual Building Studio helps architecture firms increase production capacity, minimize rework, improve multidisciplinary coordination, and deliver accurate, construction-ready models while keeping internal teams focused on design and client engagement.",
  featuresTitle: "Pre-Vetted BIM Architects Ready to support your firm",
  features: [
    "Complete AI-driven Architectural BIM services covering right from schematic to design development and construction documentation.",
    "LOD 100–500 Revit Architecture Services delivered as per US Construction Codes like AIA, IBC, ADA and BIMForum standards.",
    "IFC compliant intelligent parametric Revit Family Creation for doors, windows, furniture, and other architectural components.",
    "Clash-free BIM coordination across structural and MEPF disciplines using Navisworks and Solibri.",
    "Collaboration and version management in realtime using Autodesk Construction Cloud.",
    "Design validation and rule-based quality checks using Dynamo and Solibri.",
    "Using Revit to automatically produce drawings, schedules and quantity takeoffs.",
    "Asbuilt and COBie compliant architectural BIM models delivered following ISO 19650 and client specific guidelines.",
  ],
  mainImage: "/image/architectural-bim-services-overview.jpg",
  imageAlt: "Architectural BIM overview",
};

export const architecturalBimOurClientsSection = {
  tag: "Our Clients",
  titleAccent: "Trusted by",
  titleLead: " Leading AEC Firms",
  description:
    "Supporting architecture, engineering, construction, and reality capture teams across diverse project types and workflows.",
};

export const architecturalBimServicesSection = {
  tag: "Our Services",
  titleLine1: "Our Comprehensive Range of ",
  titleLine2: "Architectural BIM Modeling Services",
  description:
    "Our Architectural Modeling Services provide accuracy, coordination and compliance through all stages of a project life cycle, from concept and design to construction documentation and onward.",
  ctaLabel: "let's Talk Now",
  ctaHref: "#architectural-bim-page-contact",
  wideCards: true,
};

export const architecturalBimServiceCards = [
  {
    title: "Revit Architecture Services",
    text: "Our BIM architects deliver 3D Revit Modeling Services keeping in mind the US building codes requirements to facilitate cross disciplinary teamwork throughout the entire project development period.",
    image: "/image/revit-architecture-services.jpg",
  },
  {
    title: "Design Development Support",
    text: "We support architectural firms in the USA by refining their concepts into detailed, buildable models aligned with industry standards, design intent and supporting seamless team coordination.",
    image: "/image/design-development-support.jpg",
  },
  {
    title: "Architectural 3D Visualization",
    text: "Our trained architects use AI-powered workflow to deliver high-quality architectural visualizations that include renderings and walkthroughs that help in effective communication of your design vision.",
    image: "/image/architectural-3d-visualization-card.jpg",
    href: ROUTES.visualization,
  },
  {
    title: "Construction Documentation",
    text: "We use the BIM model to prepare fully coordinated CD sets that follow AIA, ADA and local building codes to speed up review and approval process.",
    image: "/image/construction-documentation.jpg",
  },
  {
    title: "Clash Detection & BIM Coordination",
    text: "Our on demand Revit architects use Navisworks and Solibri to deliver BIM coordination services. It helps in minimizing rework and maintain project timelines.",
    image: "/image/clash-detection-bim-coordination.jpg",
    href: ROUTES.mepCoordination,
  },
  {
    title: "Shop Drawing Generation",
    text: "Our BIM architects create coordinated prefab drawings which include everything from plans and elevations to sections, dimensions, details, schedules and specifications.",
    image: "/image/shop-drawing-generation.jpg",
    href: ROUTES.shopDrawings,
  },
  {
    title: "Parametric Revit Family Creation",
    text: "Our skilled team prepares custom Revit families that make sure quality assurance and keep models consistent, flexible and compatible across different BIM platforms.",
    image: "/image/parametric-revit-family-creation.jpg",
    href: ROUTES.revitFamilies,
  },
  {
    title: "CAD to BIM Services",
    text: "Our US project trained BIM architects take CAD drawings and turn them into fully coordinated BIM models. This really helps cut down on mistakes and speeds up how efficiently the project gets delivered.",
    image: "/image/cad-to-bim-services.jpg",
    href: ROUTES.cadToBim,
  },
];

export const architecturalBimAiBimWorkflowSection = {
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

export const architecturalBimWhyChooseSection = {
  tag: "Why Choose Us",
  titleLead: "Why Choose Us for ",
  titleAccent: "Architectural BIM Modeling Services?",
  description:
    "Working with our architectural BIM Company means your projects are backed by top 1% BIM architects familiar with US building codes, design workflows and coordination challenges.",
  ctaLabel: "Start New Project",
  ctaHref: "#architectural-bim-page-contact",
};

export const architecturalBimWhyChooseItems = [
  {
    prefix: "0",
    suffix: "1",
    prefixColor: "#D70416",
    title: "Dedicated Team Ready in 24 Hours",
    description:
      "Access experienced BIM professionals within 24 hours to quickly address workload spikes, project deadlines and resource shortages.",
  },
  {
    prefix: "0",
    suffix: "2",
    prefixColor: "#42AA32",
    title: "US Code-Compliant Delivery in Realtime",
    description:
      "Get your BIM deliverables in real-time, all while sticking to US codes, standards and whatever your project needs making sure smooth communication and teamwork throughout the process.",
  },
  {
    prefix: "0",
    suffix: "3",
    prefixColor: "#2299D6",
    title: "30% More Efficient AI-Powered Workflow",
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

export const architecturalBimTechnologyStackSection = {
  tag: "Tools & Platforms",
  titleLine1: "We Use to Deliver ",
  titleAccent: "Architectural BIM Services",
  description:
    "Leveraging industry-leading BIM software to create accurate, coordinated, and constructible MEP models for complex projects.",
};

export const architecturalBimTechnologyStackToolsRowOne: MepBimTechnologyTool[] =
  mepBimTechnologyStackToolsRowOne;

export const architecturalBimTechnologyStackToolsRowTwo: MepBimTechnologyTool[] =
  mepBimTechnologyStackToolsRowTwo;

export const architecturalBimAdvantagesSection = {
  tag: "Advantages",
  titleLine1: "Key Advantages of ",
  titleLine2: "Architectural Outsourcing Services",
  titleMaxWidth: 746,
  descriptionMaxWidth: 880,
  description:
    "Our architects make sure assured quality and up to code, helping your team design better, work together smoothly and build with confidence.",
  ctaLabel: "Contact Now",
  ctaHref: "#architectural-bim-page-contact",
};

export const architecturalBimAdvantagesCards = [
  {
    title: "Architecture Modeling with Accuracy",
    text: "Revit modeling tools help you realize your design vision and making sure compliance with standards such as AIA and IBC. This reduces the chances for later corrections and your architectural models to be constructible.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Integrated Multidisciplinary Coordination",
    text: "Using Revit modeling tools, you can achieve your design vision following industry standards. This reduces rework and help in producing build ready architectural models.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Regulatory & Code-Compliant Design Delivery",
    text: "Rest assured your designs are AIA, ISO 19650 and LEED guidelines compliant. Our process makes sure your work is safe, sustainable and gets approved by the permitting authority.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Smarter Design Visualization & Communication",
    text: "Bring your ideas to life with stunning 3D models and walkthroughs. Great visuals help you get approvals faster and keep your clients engaged.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Optimized Construction Documentation",
    text: "Make no error drawings for builders right from the BIM model. Every detail matches up with AIA and BIMForum's LOD standards making the project run more smoothly.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Data-Driven Planning & Cost Control",
    text: "5D BIM helps you understand costs, forecast expenses and track changes. Make educated decisions about your budget and design with realtime data.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
];

export const architecturalBimProjectCta = {
  titleLine1: "Ready to Transform Design ",
  titleLine2: "Intent Into Reality?",
  description:
    "Leverage coordinated AI-driven BIM workflows for accurate documentation and multi disciplinary collaboration to deliver projects with greater efficiency and fewer construction challenges.",
  cta: "Contact Us",
  ctaHref: "#architectural-bim-page-contact",
};

export const architecturalBimIndustriesIntro = {
  titleLine1: "Industries We Support with ",
  titleLine2: "Architectural BIM Services",
  titleMaxWidth: 706,
  description:
    "From iconic high-rises to large-scale infrastructure, our Architectural BIM Services Company empowers diverse industries with smart, scalable solutions tailored to their unique project goals and challenges.",
};

export const architecturalBimResourcesSection = acsServicePagesResourcesSection;

export const architecturalBimTestimonialsDescription =
  "Client stories set out how our BIM solutions reduced costs, improved coordination and sped project delivery through collaboration.";

export const architecturalBimFaqSection = {
  tag: "FAQs",
  description:
    "Everything you need to know about BIM Architectural Services, project requirements, workflows, and deliverables.",
};

export const architecturalBimFaqs = [
  {
    q: "What is Virtual Building Studio’s engagement model?",
    a: "Think of VBS as an extension of your team. Our architects and BIM professionals work within your workflows, tools and timelines helping you increase capacity without adding headcount.",
  },
  {
    q: "Are these architects experienced in US building codes and standards?",
    a: "Yes. Our architects have hands-on experience working on US projects and are familiar with AIA, ADA, IBC, LEED and ISO 19650 requirements, along with regional documentation standards.",
  },
  {
    q: "Am I allowed to scale my team up or down depending on project needs?",
    a: "Absolutely. Whether you need additional support for a busy phase or fewer resources after a milestone you can adjust your team size as project demands evolve.",
  },
  {
    q: "How quickly can VBS provide an architect or BIM expert assigned to my project?",
    a: "In most cases, we can have a prevetted architect or BIM specialist ready to join your project within three business days to keep your schedule on track.",
  },
  {
    q: "How does VBS protect data security and confidentiality during the project?",
    a: "We take data security seriously. From signed Non Disclosure Agreements and secure VPN access to controlled permissions and cloud based security protocols your project data remains protected at every stage.",
  },
  {
    q: "How do you ensure quality when using AI?",
    a: "Every deliverable passes through our structured quality assurance process. Senior BIM leads verify models, drawings and documentation before project delivery. We make sure the final output meets client standards and project requirements.",
  },
];

export const architecturalBimFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: architecturalBimFaqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export const architecturalBimContactDescription =
  "Tell us about your architectural BIM scope, LOD requirements, and delivery timeline. Our team will align the right US-trained BIM architects for your project.";
