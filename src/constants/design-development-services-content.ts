import { benefitIconColored, benefitIconMuted } from "@/constants/benefit-icons";
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

const architecturalDesignDevelopmentImg = "/image/architectural-design-development.jpg";
const architecturalStructuralBimModelingImg = "/image/architectural-structural-bim-modeling.jpg";
const buildingCodeZoningComplianceReviewImg = "/image/building-code-zoning-compliance-review.jpg";
const designDevelopmentBanner = "/image/design-development-banner.jpg";
const designDevelopmentOverview = "/image/design-development-overview.jpg";
const designValidationClashDetectionImg = "/image/design-validation-clash-detection.jpg";
const materialBuildingSystemDevelopmentImg = "/image/material-building-system-development.jpg";
const structuralDesignDevelopmentImg = "/image/structural-design-development.jpg";

export const designDevelopmentStatsStrip = [
  { value: "4000+", color: "text-vbs-red", label: "Projects Delivered" },
  { value: "300+", color: "text-vbs-green", label: "Global Clients" },
  { value: "11+", color: "text-vbs-yellow", label: "Years of Experience" },
  { value: "500+", color: "text-vbs-blue", label: "US-trained Architects & Engineers" },
];

export const designDevelopmentHero = {
  tag: "Design Development",
  titleLead: "Scale Design Development\nCapacity Without ",
  titleAccent: "Expanding In-House Team",
  description:
    "Our US-trained BIM architects and engineers run AI-driven workflows that speed up design development phase in architecture while keeping quality and expertise front and center.",
  ctaLabel: "Connect With Us",
  imageSrc: designDevelopmentBanner,
  imageAlt: "Architectural section drawing of a multi-story building for design development services",
  copyMaxWidth: 750,
  descriptionMaxWidth: 750,
  titleMaxWidth: 700,
};

export const designDevelopmentIntro = {
  tag: "Overview",
  titleLead: "Turning Approved Concepts into ",
  titleAccent: "Coordinated Systems",
  titleStacked: true,
  titleMaxWidth: 911,
  description:
    "Architectural Design Development moves approved concepts into buildable systems. Teams gain faster production, cleaner coordination between disciplines, reliable documentation and delivery timelines they can plan around.",
  sideDescription:
    "At Virtual Building Studio BIM experts use AI-assisted workflows to deliver Architecture Design Development (DD) support for AEC firms. Firms gain drafting capacity and less rework. Coordination between architecture and structural teams gets tighter, freeing time for design work.",
  featuresTitle: "Pre-Vetted Design Development Consultants Ready to Support Your Firm",
  features: [
    "End-to-end Design Development Services from concept refinement through CD-ready packages",
    "Full compliance with IBC, ADA and local zoning and building codes",
    "Modeling in Revit, Navisworks and BIM 360 or ACC for coordinated delivery",
    "Real time collaboration through your preferred cloud platforms",
    "Multi-stage QA/QC review before every deliverable ships",
    "Design Development Drawings, schedules and coordinated models ready for construction planning",
  ],
  mainImage: designDevelopmentOverview,
  imageAlt: "Architectural design studio with scale model, drawings, and material samples",
};

export const designDevelopmentOurClientsSection = {
  tag: "Our Clients",
  titleLead: "Trusted by",
  titleAccent: "Top AEC Firms",
  titleAccentFirst: false,
  breakTitle: true,
  description:
    "Supporting architecture, engineering, construction, and reality capture teams across diverse project types and workflows.",
};

export const designDevelopmentServicesSection = {
  tag: "Our Services",
  titleLine1: "Our Comprehensive Range of ",
  titleLine2: "Design Development Services",
  titleMaxWidth: 881,
  descriptionMaxWidth: 880,
  description:
    "Our Revit Design Development Services support projects from early concept refinement through construction-ready coordination. Architectural intent stays connected to structural and code requirements at every stage.",
  ctaLabel: "Let's Talk Now",
  ctaHref: "#design-development-page-contact",
  wideCards: true,
};

export const designDevelopmentServiceCards = [
  {
    title: "Architectural Design Development",
    text: "Approved schematic layouts move into detailed Revit models with wall assemblies, door and window schedules, material callouts and interior component coordination ready for construction planning.",
    image: architecturalDesignDevelopmentImg,
  },
  {
    title: "Structural Design Development",
    text: "Early structural concepts are developed into coordinated Revit models including framing, foundations, columns and load paths. These models are coordinated with the architectural geometry before documentation and construction planning begins.",
    image: structuralDesignDevelopmentImg,
  },
  {
    title: "Architectural & Structural BIM Modeling",
    text: "One coordinated model for architectural and structural systems helps in detecting conflicts early and maintain design intent throughout the entire set of drawings.",
    image: architecturalStructuralBimModelingImg,
  },
  {
    title: "Material & Building System Development",
    text: "Material selections, wall assemblies, roofing systems and envelope details are refined and documented providing clear direction for construction pricing, specification and procurement planning for your team.",
    image: materialBuildingSystemDevelopmentImg,
  },
  {
    title: "Design Validation & Clash Detection",
    text: "Structured Clash Checks in Navisworks are done with coordinated Architectural and Structural models, identifying conflicts early and ensuring that design development drawings are ready for construction documentation without re-work.",
    image: designValidationClashDetectionImg,
  },
  {
    title: "Building Code & Zoning Compliance Review",
    text: "Every model and drawing set are checked against IBC, ADA and local zoning requirements so that your Design Development Drawings move through permitting and review without delay.",
    image: buildingCodeZoningComplianceReviewImg,
  },
];

export const designDevelopmentAiBimWorkflowSection = {
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
  posterSrc: designDevelopmentBanner,
};

export const designDevelopmentWhyChooseSection = {
  tag: "Why Choose Us",
  titleLead: "Why Choose Us for ",
  titleAccent: "Architectural Design Development?",
  description:
    "AEC firms trust us for Revit design development services because of our deep US code knowledge and hands-on experience on fast-moving projects.",
  descriptionMaxWidth: 652,
  ctaLabel: "Start New Project",
  ctaHref: "#design-development-page-contact",
};

export const designDevelopmentWhyChooseItems = [
  {
    prefix: "0",
    suffix: "1",
    prefixColor: "#D70416",
    title: "On-Demand Team Available In 24 Hours",
    description:
      "Access to experienced architects within 24 hours for quick workload spikes, project deadlines and resource shortages.",
  },
  {
    prefix: "0",
    suffix: "2",
    prefixColor: "#42AA32",
    title: "US Code-Compliant Real Time Delivery",
    description:
      "Get your design development drawings in real-time, all while sticking to US codes, standards and whatever your project needs, making sure smooth communication and teamwork throughout the process.",
  },
  {
    prefix: "0",
    suffix: "3",
    prefixColor: "#2299D6",
    title: "30% Greater Efficiency with AI-Driven Workflow",
    description:
      "With AI helping out, you get workflow efficiency 30% better, resulting in faster project development, quicker QC and improved coordination that keeps everything consistent.",
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

export const designDevelopmentWorkflowIntegrateSection = {
  tag: "Workflow",
  titleParts: [
    {
      text: "Our Process Flow for ",
      className: "text-section font-medium text-[#111111] capitalize",
    },
    {
      text: "Design Development Services",
      className: "text-section text-accent font-light capitalize",
    },
  ],
  description:
    "Every architectural design development follows a clear 4 step process. Each step follows the last, keeping your team up to date and your schedule on track.",
  note: {
    text: 'Our process is designed to get your projects moving quickly. We don\'t wait until onboarding is "finished" to create value—we begin production as soon as the essential alignment is complete and continue improving the partnership with every project.',
  },
  centerLogo: workflowLogo,
};

export const designDevelopmentWorkflowIntegrateSteps = [
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
    ],
  },
];

export const designDevelopmentTechnologyStackSection = {
  tag: "Tools & Platforms",
  titleLine1: "We Use to Deliver ",
  titleAccent: "Design Development Services",
  description:
    "Leveraging industry-leading BIM software to create accurate, coordinated, and constructible design development models for complex projects.",
};

export const designDevelopmentTechnologyStackToolsRowOne: MepBimTechnologyTool[] =
  mepBimTechnologyStackToolsRowOne;

export const designDevelopmentTechnologyStackToolsRowTwo: MepBimTechnologyTool[] =
  mepBimTechnologyStackToolsRowTwo;

export const designDevelopmentAdvantagesSection = {
  tag: "Advantages",
  titleLine1: "Advantages of Working with Design ",
  titleLine2: "Development Architecture Company",
  titleMaxWidth: 844,
  descriptionMaxWidth: 774,
  description:
    "Outsourcing design development services gives your firm faster turnarounds, cleaner coordination and construction-ready drawings without adding headcount or slowing down active projects.",
  ctaLabel: "Contact Now",
  ctaHref: "#design-development-page-contact",
};

export const designDevelopmentAdvantagesCards = [
  {
    title: "Reliable Design Quality",
    text: "Every Design Development Drawing goes through multi-stage QC, catching errors before they reach your desk. Your team gets dependable models ready for the next project phase.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Tighter Discipline Coordination",
    text: "Architectural and structural teams work from one coordinated model, reducing the back and forth that slows down traditional handoffs. Design intent stays intact from concept through construction documents.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "US Code & Zoning Compliance",
    text: "Design Development Drawings get checked against IBC, ADA and local zoning requirements before they leave our team. Your firm moves through permitting review with fewer revisions.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Clear Stakeholder Visualization",
    text: "Coordinated 3D models helps your team and clients to see material selections, spatial arrangements and system integration before construction. Design decisions are made with confidence, not conjecture.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Construction-Ready Documentation",
    text: "Every deliverable, from wall sections to schedules, gets built to construction documentation standards. Your team moves from Design Development straight into CD without rebuilding models from scratch.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Better Cost & Data Control",
    text: "Coordinated models give estimators reliable quantities and material data early in the process. Fewer surprises at the time of bid mean better budgets and fewer change orders at the job site.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
];

export const designDevelopmentEngagementModelsSection = {
  tag: "Engagement Models",
  titleParts: [
    {
      text: "Flexible Engagement Models ",
      className: "text-section font-medium text-[#111111] capitalize",
    },
    {
      text: "Built Around Your Delivery Needs",
      className: "text-section text-accent font-light capitalize",
    },
  ],
  description:
    "Whether you need project-based BIM support, a dedicated remote team, or a fully managed global delivery center, our engagement models are designed to scale with your business.",
  descriptionMaxWidth: 750,
  note: {
    text: "Every strategic partnership begins with one successful project. Each engagement helps us understand your practice more deeply, making every future collaboration faster, smoother, and more valuable.",
  },
};

export const designDevelopmentEngagementModelsCards = [
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
    ctaHref: "#design-development-page-contact",
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

export const designDevelopmentProjectCta = {
  titleLine1: "Ready to Move Your ",
  titleLine2: "Design Development Forward?",
  description:
    "Your architectural and structural teams deserve a Design Development Architecture Company that keeps pace with deadlines. Let's build your next project phase together.",
  cta: "Contact Us",
  ctaHref: "#design-development-page-contact",
};

export const designDevelopmentIndustriesIntro = {
  titleLine1: "Industries We Support with ",
  titleLine2: "Design Development Services",
  titleMaxWidth: 858,
  description:
    "From iconic high-rises to large-scale infrastructure, our support for design development phase in architecture empowers diverse industries with smart, scalable solutions tailored to their unique project goals and challenges.",
};

export const designDevelopmentResourcesSection = acsServicePagesResourcesSection;

export const designDevelopmentTestimonialsDescription =
  "Client stories set out how our BIM expertise reduced costs, improved coordination and sped project delivery through collaboration.";

export const designDevelopmentFaqSection = {
  tag: "FAQs",
  description:
    "Everything you need to know about design development services, project requirements, workflows and deliverables.",
};

export const designDevelopmentFaqs = [
  {
    q: "What is included in Design Development Services?",
    a: "Design Development Services cover detailed Revit modeling, wall assemblies, material callouts, door and window schedules, structural coordination and code review, bridging schematic design and construction documentation.",
  },
  {
    q: "How is Design Development different from Schematic Design?",
    a: "Schematic Design gives the overall concept, while Design Development in architecture develops that concept into coordinated systems, material choices and technical detail suitable for construction planning.",
  },
  {
    q: "Can you work with our existing Revit standards and templates?",
    a: "Yes. Our Revit Design Development Services use your firm's templates, standards and naming conventions and keep every model consistent with your existing project library and workflow.",
  },
  {
    q: "How do you handle structural coordination during Design Development?",
    a: "Structural Design Development runs alongside architectural drafting, so framing, foundations, columns and load paths stay aligned with architectural intent before drawings move into review.",
  },
  {
    q: "How are your Design Development Services priced?",
    a: "You get dedicated architects and engineers who work on your project throughout its full timeline. You pay a monthly engagement fee, not per-project invoices, giving your firm predictable costs.",
  },
  {
    q: "Can we start with a pilot project before committing long term?",
    a: "Yes. We offer a risk-free trial so your firm can review our Design Development consultants and process quality before making any long-term commitment to a full team.",
  },
  {
    q: "How do you make sure quality when using AI?",
    a: "All construction drawings go through our structured quality assurance process. Senior BIM leads review the models, drawings and documentation before project completion. We deliver the output according to the client's standards and project requirements.",
  },
];

export const designDevelopmentFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: designDevelopmentFaqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export const designDevelopmentContactDescription =
  "Tell us about your design development needs. Our BIM architects will help you move approved concepts into coordinated, construction-ready systems.";
