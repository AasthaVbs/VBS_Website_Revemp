import { benefitIconColored, benefitIconMuted } from "@/constants/benefit-icons";
import { bimModelingStatsStrip } from "@/constants/bim-modeling-services-content";
import type { MepBimTechnologyTool } from "@/constants/mep-bim-modelling-content";
import {
  mepBimTechnologyStackToolsRowOne,
  mepBimTechnologyStackToolsRowTwo,
} from "@/constants/mep-bim-modelling-content";
import { ROUTES } from "@/constants/navigation";
import { acsServicePagesResourcesSection } from "@/constants/shared-sections";

const flexibleEngagementModelsIcon = "/image/flexible-engagement-models.png";
const iconEngageDedicated = "/image/architecture-services/icon-engage-dedicated.svg";
const iconEngageStrategic = "/image/architecture-services/icon-engage-strategic.svg";
const workflowLogo = "/image/architecture-services/workflow-logo.svg";

export const cadToBimStatsStrip = bimModelingStatsStrip;

export const cadToBimHero = {
  tag: "CAD to BIM",
  titleAccent: "CAD to BIM Services ",
  titleLead: "for \nCoordinated Revit Models",
  titleAccentFirst: true,
  description:
    "Our pre-vetted BIM experts convert your CAD and PDF drawings into accurate Revit models. Teams get faster decisions, fewer clashes, and stronger stakeholder trust.",
  ctaLabel: "Connect With Us",
  imageSrc: "/image/cad-to-bim-banner.jpg",
  imageAlt: "CAD to BIM Conversion Services",
  copyMaxWidth: 683,
  descriptionMaxWidth: 670,
};

export const cadToBimIntro = {
  tag: "Overview",
  titleLead: "Integrating Intelligence ",
  titleAccent: "Into Every Drawing",
  titleStacked: false,
  titleMaxWidth: 620,
  description:
    "A 2D drawing tells you what a wall looks like. A BIM model tells your whole team how it behaves, connects, and performs across the project.",
  sideDescription:
    "Design and construction teams rely on us to convert CAD files into data-rich Revit models. Our CAD to BIM Conversion Services add the accuracy layer that flat drawings cannot carry on their own. Firms get more design capacity, less rework on site, and tighter coordination between architects, engineers, and contractors. Outsourcing CAD to BIM modeling services frees your in-house team to focus on design decisions instead of file cleanup.",
  featuresTitle: "CAD to BIM Conversion by Vetted Top 1% US-Trained BIM Specialists",
  features: [
    "Accurate CAD to BIM Conversion for architectural, structural and MEP disciplines.",
    "AI-powered PDF to Revit Conversion that provides data-rich and clash-free 3D Models.",
    "AutoCAD to Revit Modeling for design coordination and documentation.",
    "Standard BIM workflows consistent with US codes and standards and industry best practices.",
    "Intelligent model creation with direct implications for clash detection, quantity take-off and scheduling.",
    "Improved collaboration with multi-discipline integration and less RFIs.",
    "Deliverables produced for design development, construction and facilities management.",
  ],
  mainImage: "/image/cad-to-bim-conversion-services-overview.jpg",
  imageAlt: "CAD to BIM overview",
};

export const cadToBimOurClientsSection = {
  tag: "Our Clients",
  titleAccent: "Trusted by",
  titleLead: " Leading AEC Firms",
  description:
    "Supporting architecture, engineering, construction and reality capture teams across diverse project types and workflows.",
};

export const cadToBimServicesSection = {
  tag: "Our Services",
  titleLine1: "Our Comprehensive Range of ",
  titleLine2: "CAD to BIM Modeling Services",
  titleMaxWidth: 700,
  descriptionMaxWidth: 700,
  description:
    "Our support covers your project from the first drawing set through construction documentation and final handover.",
  ctaLabel: "let's Talk Now",
  ctaHref: "#cad-to-bim-page-contact",
  wideCards: true,
};

export const cadToBimServiceCards = [
  {
    title: "Architectural CAD to BIM Service",
    text: "We convert 2D architectural drawings into full 3D Revit models. Walls, floors and building elements come out accurate and ready to build from.",
    image: "/image/architectural-cad-to-bim-service.jpg",
    href: ROUTES.architecturalBim,
  },
  {
    title: "Structural CAD to BIM Conversion",
    text: "Structural CAD files become coordinated models covering framing, foundations and load paths. Engineers get a model that matches the real structure.",
    image: "/image/structural-cad-to-bim-conversion.jpg",
    href: ROUTES.structuralBim,
  },
  {
    title: "As-Built CAD Drawing to BIM Conversion",
    text: "Existing site drawings become accurate as-built models. Renovation and retrofit teams get a clear picture of the current structure.",
    image: "/image/as-built-cad-drawing-to-bim-conversion.jpg",
    href: ROUTES.asBuiltModeling,
  },
  {
    title: "AutoCAD to BIM Conversion",
    text: "AutoCAD files convert into intelligent Revit models with real building data. Every wall and system carries information your team can use.",
    image: "/image/autocad-to-bim-conversion.jpg",
  },
  {
    title: "PDF to Revit Conversion",
    text: "Turn scanned PDFs or legacy drawings into accurate editable Revit models. Ensuring design accuracy, reduced errors and reliable digital workflows.",
    image: "/image/pdf-to-revit-conversion.jpg",
    href: ROUTES.pdfToCad,
  },
  {
    title: "2D to 3D Floor Plan Conversion",
    text: "Transform 2D CAD drawings into 3D models with detailed, accurate and spatial layouts to improve dialogue with clients and stakeholders through visual clarity.",
    image: "/image/2d-to-3d-floor-plan-conversion.jpg",
  },
  {
    title: "Construction Documentation",
    text: "Coordinated drawing sets and schedules come ready for permitting. Contractors get documents built for construction, not just design review.",
    image: "/image/construction-documentation.jpg",
  },
  {
    title: "Quantity Take-Offs & BOQs from CAD",
    text: "Using CAD-based inputs for a BIM-based workflow, create accurate quantities and Bills of Quantities (BOQs). Utilize for cost estimating, procurement and resource planning.",
    image: "/image/quantity-take-offs-boqs-from-cad.jpg",
  },
];

export const cadToBimAiBimWorkflowSection = {
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

export const cadToBimWhyChooseSection = {
  tag: "Why Choose Us",
  titleLead: "Why Choose Us as Your ",
  titleAccent: "CAD to BIM Service Provider?",
  description:
    "Our top 1% BIM specialists use AI-driven workflows and standard processes to provide you with the most accurate and high-quality CAD to BIM Services in the USA.",
  descriptionMaxWidth: 780,
  ctaLabel: "Start New Project",
  ctaHref: "#cad-to-bim-page-contact",
};

export const cadToBimWhyChooseItems = [
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
      "Get your CAD to BIM conversions in realtime, all while sticking to US codes, standards and whatever your project needs, making sure smooth communication and teamwork throughout the process.",
  },
  {
    prefix: "0",
    suffix: "3",
    prefixColor: "#2299D6",
    title: "30% More Efficient with AI-Powered Workflow",
    description:
      "With AI helping out, you get workflow efficiency 30% better, resulting in faster model development, quicker QC and improved coordination that keeps your project consistent.",
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

export const cadToBimWorkflowIntegrateSection = {
  tag: "Workflow",
  titleParts: [
    {
      text: "Our Workflow for ",
      className: "text-section font-medium text-[#111111] capitalize",
    },
    {
      text: "CAD to BIM Conversion",
      className: "text-section text-accent font-light capitalize",
    },
  ],
  description:
    "Every CAD to BIM project moves through clear 4 stages, from file review to final output",
  note: {
    text: 'Our process is designed to get your projects moving quickly. We don\'t wait until onboarding is "finished" to create value—we begin production as soon as the essential alignment is complete and continue improving the partnership with every project.',
  },
  centerLogo: workflowLogo,
};

export const cadToBimWorkflowIntegrateSteps = [
  {
    id: "discover",
    color: "#F0B300",
    tint: "rgba(240, 179, 0, 0.10)",
    position: "top-left",
    number: "01. Discover",
    title: "Understanding Your Practice",
    body: "Before production begins, we take time to understand how your team works so we can align with your expectations from day one.",
    tagRows: [
      ["Project Goals", "Workflow", "Standards", "QA/QC", "Communication"],
      ["Technology Stack"],
    ],
  },
  {
    id: "integrate",
    color: "#2299D6",
    tint: "rgba(34, 153, 214, 0.10)",
    position: "top-right",
    number: "02. Integrate",
    title: "Align, Onboard & Start Production",
    body: "We integrate with your team, configure project standards, and begin production as soon as the initial onboarding is complete. From this point forward, delivery and continuous learning happen together.",
    tagRows: [
      ["Team Alignment", "Templates", "File Structure", "Pilot Validation"],
      ["Communication Rhythm", "Production Begins"],
    ],
  },
  {
    id: "deliver",
    color: "#D70416",
    tint: "#FBE6E8",
    position: "bottom-right",
    number: "03. Deliver",
    title: "Reliable Project Delivery",
    body: "With production underway, we focus on delivering consistent, high-quality work while maintaining complete transparency throughout the project.",
    tagRows: [
      [
        { label: "BIM Production", tint: "#FBE6E8" },
        { label: "Documentation", tint: "#FBE6E8" },
        { label: "Coordination", tint: "#FBE6E8" },
        { label: "QA/QC", tint: "#FBE6E8" },
      ],
      [
        { label: "Milestone Reviews", tint: "rgba(215, 4, 22, 0.10)" },
        { label: "Progress Updates", tint: "#FBE6E8" },
      ],
    ],
  },
  {
    id: "improve",
    color: "#42AA32",
    tint: "rgba(66, 170, 50, 0.10)",
    position: "bottom-left",
    number: "04. Improve",
    title: "Growing Stronger Together",
    body: "As we complete projects together, we refine workflows, improve efficiency, and expand support making every project smoother than the last.",
    tagRows: [
      ["Feedback", "Workflow Optimization", "Efficiency", "Scalability"],
      ["Continuous Improvement", "Knowledge Sharing"],
      ["Continuous process refinement"],
    ],
  },
];

export const cadToBimEngagementModelsSection = {
  tag: "Engagement Models",
  titleParts: [
    {
      text: "Flexible Engagement Models Built Around ",
      className: "text-section font-medium text-[#111111] capitalize",
    },
    {
      text: "Your Delivery Needs",
      className: "text-section text-accent font-light capitalize",
    },
  ],
  description:
    "Whether you need project-based BIM support, a dedicated remote team, or a fully managed global delivery center, our engagement models are designed to scale with your business.",
  note: {
    text: "Every strategic partnership begins with one successful project. Each engagement helps us understand your practice more deeply, making every future collaboration faster, smoother, and more valuable.",
  },
};

export const cadToBimEngagementModelsCards = [
  {
    icon: flexibleEngagementModelsIcon,
    title: "Project Engagement",
    headline: "Best for immediate project support.",
    idealLabel: "Ideal for firms that:",
    idealItems: [
      "Have won a larger or more complex project.",
      "Need additional delivery capacity.",
      "Want to evaluate VBS before expanding.",
    ],
    nextLabel: "What happens next?",
    nextText:
      "While we deliver your project, we learn your standards, workflows, and preferences—creating a stronger foundation for future collaboration.",
    ctaLabel: "Start a Project",
    ctaHref: "#cad-to-bim-page-contact",
    ctaVariant: "outline" as const,
    featured: false,
  },
  {
    icon: iconEngageDedicated,
    title: "Dedicated Architecture Team",
    headline: "Best when delivery support becomes ongoing.",
    idealLabel: "Ideal for firms that:",
    idealItems: [
      "Consistent project pipelines.",
      "Multiple active projects.",
      "Long-term production requirements.",
    ],
    nextLabel: "What changes?",
    nextText:
      "Your dedicated team becomes increasingly familiar with your practice, improving consistency, efficiency, and communication with every project.",
    ctaLabel: "Build your Team",
    ctaHref: ROUTES.dedicatedTeam,
    ctaVariant: "solid" as const,
    featured: true,
    badge: "Most Demanding",
  },
  {
    icon: iconEngageStrategic,
    title: "Strategic Delivery Partnership",
    headline: "Built on trust, not contracts.",
    idealLabel: "Ideal for firms focused on:",
    idealItems: [
      "Sustainable growth.",
      "Standardized delivery.",
      "Long-term operational scalability.",
    ],
    nextLabel: "The result",
    nextText:
      "VBS becomes a trusted extension of your practice, helping you increase delivery capability while preserving your firm's identity.",
    ctaLabel: "Explore GDC Model",
    ctaHref: ROUTES.engagement,
    ctaVariant: "outline" as const,
    featured: false,
  },
];

export const cadToBimTechnologyStackSection = {
  tag: "Tools & Platforms",
  titleLine1: "We Use to Deliver ",
  titleAccent: "CAD to BIM Services",
  description:
    "Leveraging industry-leading BIM software to create accurate, coordinated, and constructible MEP models for complex projects.",
};

export const cadToBimTechnologyStackToolsRowOne: MepBimTechnologyTool[] =
  mepBimTechnologyStackToolsRowOne;

export const cadToBimTechnologyStackToolsRowTwo: MepBimTechnologyTool[] =
  mepBimTechnologyStackToolsRowTwo;

export const cadToBimKeyPointsSection = {
  tag: "Key Points",
  titleLine1: "Advantages of Outsourcing ",
  titleLine2: "CAD to BIM Services",
  titleMaxWidth: 661,
  descriptionMaxWidth: 880,
  description:
    "Outsourcing conversion work gives your in-house team back the hours they used to spend cleaning up drawings manually.",
  ctaLabel: "Contact Now",
  ctaHref: "#cad-to-bim-page-contact",
};

export const cadToBimKeyPointsCards = [
  {
    title: "Better Design Accuracy",
    text: "Converting CAD and PDF drawings to BIM indicates every size and element is accurately modeled. This helps reduce discrepancies, design gaps, and rework costs.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Improved Coordination of All Disciplines",
    text: "Architectural, structural and MEP models now work in one BIM and digital platform. Not only does this assist in clash detection but keeps coordination and collaboration seamless.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Faster Project Completion",
    text: "Revit offers automated workflows for quicker modeling and documentation resulting in less manual redrawing leading to time saving and gaining approvals faster.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Data-Driven Decision Making",
    text: "BIM models enriched with materials data, quantities and schedule data create a significant opportunity for stakeholders to use their data to make informed decisions.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Better Visualization & Communication",
    text: "3D BIM models replace flat 2D drawings with 3D visuals. This enables stakeholders to better understand, and feel confident, about the design intent.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Optimized Construction & Facility Management",
    text: "BIM deliverables are a detailed, accurate source of information that can optimize construction planning, as well as future facility operations.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
];

export const cadToBimProjectCta = {
  titleLine1: "Ready to Turn Your Drawings ",
  titleLine2: "into Coordinated Models?",
  description:
    "Send us your CAD or PDF files, and our team will walk you through the conversion process and timeline.",
  cta: "Contact Us",
  ctaHref: "#cad-to-bim-page-contact",
};

export const cadToBimIndustriesIntro = {
  titleLine1: "Industries We Support with ",
  titleLine2: "Architectural CAD to BIM Services",
  titleMaxWidth: 796,
  description:
    "From iconic high-rises to large-scale infrastructure, our CAD to BIM Company in the USA empowers diverse industries with smart, scalable solutions tailored to their unique project goals and challenges.",
};

export const cadToBimResourcesSection = acsServicePagesResourcesSection;

export const cadToBimTestimonialsDescription =
  "Client stories set out how our CAD to BIM conversion services reduced costs, improved coordination and sped project delivery through collaboration.";

export const cadToBimFaqSection = {
  tag: "FAQs",
  description:
    "Everything you need to know about our Architectural CAD to BIM conversion services, including project requirements, workflows and deliverables.",
};

export const cadToBimFaqs = [
  {
    q: "Do you perform one-off projects converting CAD to BIM?",
    a: "No. We provide continuing access to top 1% BIM professionals who will become ingrained into your team. Our professionals become dedicated resources that provide consistency, technical accuracy and increased project velocity across different projects and assignments.",
  },
  {
    q: "How accurate are the BIM models created from the CAD files?",
    a: "With respect to CAD to BIM protocols, we produce models to international standards including LOD 300–500; therefore, geometry, parametric information, and project specifications have a reliable basis for use in BIM. We conduct all models through a rigorous quality check prior to handing them over to the customer.",
  },
  {
    q: "How quickly can your team be integrated into a project?",
    a: "We are able to enter into your workflows within 3 business days, which allows you to scale BIM resources and take on more work with no HR investments and without having to hire and train new staff.",
  },
  {
    q: "Do you provide Quantity Take-Offs and BOQs from CAD drawings?",
    a: "Yes. We provide CAD to BIM workflows that already offer automated Quantity Take-Offs (QTO) and BOQs with accurate quantities to allow project teams to utilize reliable information as part of budgeting, procurement and cost planning.",
  },
  {
    q: "How do you ensure quality when using AI?",
    a: "Every deliverable passes through our structured quality assurance process. Senior BIM leads verify models, drawings and documentation before project delivery. We make sure the final output meets client standards and project requirements.",
  },
];

export const cadToBimFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: cadToBimFaqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export const cadToBimContactDescription =
  "Tell us about your CAD or PDF drawings, target LOD, and delivery timeline. Our team will align the right US-trained BIM experts for accurate Revit conversion.";
