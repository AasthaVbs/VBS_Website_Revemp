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

export const constructionDocumentationStatsStrip = [
  { value: "4000+", color: "text-vbs-red", label: "Projects Delivered" },
  { value: "300+", color: "text-vbs-green", label: "Global Clients" },
  { value: "11+", color: "text-vbs-yellow", label: "Years of Experience" },
  { value: "500+", color: "text-vbs-blue", label: "US-trained Architects & Engineers" },
];

export const constructionDocumentationHero = {
  tag: "Construction Documentation",
  titleLead: "Construction Documentation\nServices for ",
  titleAccent: "Fully Occupied AEC Teams",
  description:
    "Your team needs permit-ready drawings fast, but limited team strength slows every submission. Our BIM experts run AI-assisted workflows to cut production time without hurting quality.",
  ctaLabel: "Connect With Us",
  imageSrc: "/image/construction-documentation-services-banner.jpg",
  imageAlt: "Construction Documentation Services",
  copyMaxWidth: 675,
  descriptionMaxWidth: 624,
};

export const constructionDocumentationIntro = {
  tag: "Overview",
  titleLead: "US Code Compliant ",
  titleAccent: "Construction Documentation Company",
  titleStacked: false,
  titleMaxWidth: 911,
  description:
    "Slow drawing turnaround drains productivity, invites costly errors and pushes back construction schedules. Our construction documentation services in USA tighten coordination between disciplines and protect your delivery timelines.",
  descriptionMaxWidth: 926,
  sideDescription:
    "Virtual Building Studio is a leading construction documentation company based in Houston, TX. Our US-trained pre-vetted BIM experts use AI-assisted workflows to add efficiency along with capacity to your team. We help you cut rework through coordinated drawing sets and keep your architects focused on core design work.",
  featuresTitle:
    "Pre-Vetted Construction Documentation Experts Ready to Support Your Firm",
  features: [
    "End-to-end coverage from schematic markups through permit-ready construction drawings",
    "Drawing standards built to IBC, ADA and local AHJ requirements",
    "Revit, AutoCAD and Navisworks tools for clash-free coordination",
    "BIM 360 and ACC collaboration that keeps your team in sync",
    "Structured QA/QC review on every drawing set before delivery",
    "Architectural CD set services, structural drawings, schedules and detail sheets",
  ],
  mainImage: "/image/construction-documentation-overview.jpg",
  imageAlt: "Construction documentation overview",
};

export const constructionDocumentationOurClientsSection = {
  tag: "Our Clients",
  titleLead: "Trusted by",
  titleAccent: "Top AEC Firms",
  titleAccentFirst: false,
  breakTitle: true,
  description:
    "Supporting architecture, engineering, construction, and reality capture teams across diverse project types and workflows.",
};

export const constructionDocumentationServicesSection = {
  tag: "Our Services",
  titleLine1: "Our Comprehensive Range of ",
  titleLine2: "Construction Documentation Services",
  description:
    "Our construction drawing services follow your project from early concept sketches through permit submission. Every drawing set stays aligned into final construction.",
  ctaLabel: "Let's Talk Now",
  ctaHref: "#construction-documentation-page-contact",
  wideCards: true,
};

export const constructionDocumentationServiceCards = [
  {
    title: "Architectural Construction Drawings",
    text: "Our architects produce floor plans, elevations, sections and building envelope details built to your project standards. Every sheet is coordinated with structural and site conditions for permit-ready submission.",
    image: "/image/architectural-construction-drawings.jpg",
  },
  {
    title: "Structural Construction Drawings",
    text: "Our structural team details framing, foundations and load paths for steel, concrete and timber systems. They coordinate closely with architectural models to remove clashes early in the process.",
    image: "/image/structural-construction-drawings.jpg",
  },
  {
    title: "Permit Ready Drawing Sets",
    text: "Permit Ready Drawing Sets meet IBC, ADA and local AHJ requirements before submission. Our permit set services help your team clear plan check faster and move approvals along.",
    image: "/image/permit-drawing-sets.jpg",
  },
  {
    title: "Redline Drawings",
    text: "Our team turns your markups and review comments into updated, coordinated construction sets fast. We track every revision so your team always works from the latest approved version.",
    image: "/image/redline-drawings.jpg",
  },
  {
    title: "Construction Detail Drawings",
    text: "Our detailers resolve wall assemblies, roof transitions and connection details before they reach the job site. Contractors get fewer RFIs and keep projects moving without delays.",
    image: "/image/construction-detail-drawings.jpg",
  },
  {
    title: "Door, Window & Finish Schedules",
    text: "We pull every schedule directly from your coordinated model, so quantities and specifications always match the drawings. This keeps procurement and bidding on solid ground from day one.",
    image: "/image/door-window-finish-schedules.jpg",
  },
  {
    title: "Building Envelope Drawings and Wall Section",
    text: "Our team documents insulation, flashing and material transitions for code compliance. This documentation protects building performance and reduces callbacks after construction begins.",
    image: "/image/building-envelope-drawings-wall-section.jpg",
  },
  {
    title: "Millwork & Interior Detail Drawings",
    text: "Our detailers capture custom casework, trim and finish details down to the fraction of an inch. Fabricators get exactly what they need to build it right.",
    image: "/image/millwork-interior-detail-drawings.jpg",
  },
];

export const constructionDocumentationAiBimWorkflowSection = {
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
  posterSrc: "/image/construction-documentation-services-banner.jpg",
};

export const constructionDocumentationWhyChooseSection = {
  tag: "Why Choose Us",
  titleLead: "Why Choose Us for Outsourcing ",
  titleAccent: "Construction Documentation Services?",
  description:
    "Architecture firms trust us for construction documentation services because of our deep US code knowledge and hands-on experience on fast-moving projects.",
  descriptionMaxWidth: 652,
  ctaLabel: "Start New Project",
  ctaHref: "#construction-documentation-page-contact",
};

export const constructionDocumentationWhyChooseItems = [
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
      "Get your CD sets in real-time, all while sticking to US codes, standards and whatever your project needs, making sure smooth communication and teamwork throughout the process.",
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

export const constructionDocumentationWorkflowIntegrateSection = {
  tag: "Workflow",
  titleParts: [
    {
      text: "Our Process Flow for ",
      className: "text-section font-medium text-[#111111] capitalize",
    },
    {
      text: "Construction Documentation Services",
      className: "text-section text-accent font-light capitalize",
    },
  ],
  description:
    "Every architectural construction drawing follows a clear 4 step process. Each step follows the last, keeping your team up to date and your schedule on track.",
  note: {
    text: 'Our process is designed to get your projects moving quickly. We don\'t wait until onboarding is "finished" to create value—we begin production as soon as the essential alignment is complete and continue improving the partnership with every project.',
  },
  centerLogo: workflowLogo,
};

export const constructionDocumentationWorkflowIntegrateSteps = [
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

export const constructionDocumentationTechnologyStackSection = {
  tag: "Tools & Platforms",
  titleLine1: "We Use to Deliver ",
  titleAccent: "Construction Documentation Services",
  description:
    "Leveraging industry-leading BIM and CAD software to create accurate, coordinated, and constructible construction documentation for complex projects.",
};

export const constructionDocumentationTechnologyStackToolsRowOne: MepBimTechnologyTool[] =
  mepBimTechnologyStackToolsRowOne;

export const constructionDocumentationTechnologyStackToolsRowTwo: MepBimTechnologyTool[] =
  mepBimTechnologyStackToolsRowTwo;

export const constructionDocumentationAdvantagesSection = {
  tag: "Advantages",
  titleLine1: "Advantages of Outsourcing ",
  titleLine2: "Construction Documentation Services",
  titleMaxWidth: 980,
  descriptionMaxWidth: 720,
  description:
    "Bringing on more BIM staff takes months. Outsourcing your construction documentation gets you the same output starting next week and mitigates the hiring headache.",
  ctaLabel: "Contact Now",
  ctaHref: "#construction-documentation-page-contact",
};

export const constructionDocumentationAdvantagesCards = [
  {
    title: "Fewer Errors, Cleaner Drawings",
    text: "Coordinated construction documentation catches conflicts before they reach the field. Your team spends less time on corrections and more time moving projects toward permit and construction.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Stronger Cross-Trade Coordination",
    text: "Architectural documentation services stay linked to structural models throughout the project. Coordinated drawing sets close the gap between design intent and what actually gets built.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Built for Code Compliance",
    text: "Our team checks every drawing set against IBC, ADA and local AHJ requirements before submission. Fewer plan check comments mean your permits move through review faster.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Clearer Visualization for Every Stakeholder",
    text: "Our coordinated 3D models let owners, contractors and consultants see the same view before construction starts. Everyone works from the same information that cut down onsite miscommunication.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Complete and Organized Documentation",
    text: "Every construction documentation services package includes plans, schedules and detail sheets organized for easy reference. Contractors and fabricators find what they need without digging through scattered files.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Lower Production Costs Without Lower Standards",
    text: "Outsourced CD drawing services cost less than growing an in-house drafting team for short-term spikes. You get senior-level output without the overhead of full-time hires.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
];

export const constructionDocumentationEngagementModelsSection = {
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

export const constructionDocumentationEngagementModelsCards = [
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
    ctaHref: "#construction-documentation-page-contact",
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

export const constructionDocumentationProjectCta = {
  titleLine1: "Ready to Clear Your ",
  titleLine2: "Drawing Backlog?",
  description:
    "Stop letting drawing backlogs slow down your permits and your projects. Let our BIM experts and AI-assisted workflows help your team catch up fast.",
  cta: "Contact Us",
  ctaHref: "#construction-documentation-page-contact",
};

export const constructionDocumentationIndustriesIntro = {
  titleLine1: "Industries We Support with ",
  titleLine2: "Architectural Documentation Services",
  titleMaxWidth: 858,
  description:
    "From iconic high-rises to large-scale infrastructure, our Architectural CD Set Services empower diverse industries with smart, scalable solutions tailored to their unique project goals and challenges.",
};

export const constructionDocumentationResourcesSection =
  acsServicePagesResourcesSection;

export const constructionDocumentationTestimonialsDescription =
  "Client stories set out how our BIM expertise reduced costs, improved coordination and sped project delivery through collaboration.";

export const constructionDocumentationFaqSection = {
  tag: "FAQs",
  description:
    "Everything you need to know about construction documentation services, project requirements, workflows and deliverables.",
};

export const constructionDocumentationFaqs = [
  {
    q: "What are construction documentation services?",
    a: "Construction documentation services turn approved designs into permit-ready drawing sets, including plans, elevations, sections, schedules, and construction details needed for bidding, permitting and construction activities.",
  },
  {
    q: "Do you provide both architectural and structural construction drawings?",
    a: "Yes. Our teams deliver coordinated architectural and structural construction drawings, including framing, foundations, plans, elevations, sections, schedules, and detail sheets.",
  },
  {
    q: "Do you work with our existing CAD or PDF files?",
    a: "Yes. We can start from your CAD, PDF, or Revit files, apply your office standards, and produce coordinated construction documentation inside your preferred collaboration environment.",
  },
  {
    q: "Can we start with a small trial project?",
    a: "Absolutely. Many firms begin with a risk-free trial or single project engagement so you can evaluate quality, turnaround, and workflow fit before scaling.",
  },
  {
    q: "How do you make sure quality when using AI?",
    a: "AI accelerates production and coordination checks, while US-trained BIM leads run structured QA/QC on every set. Final sheets are reviewed against codes, coordination rules, and your office standards before delivery.",
  },
];

export const constructionDocumentationContactDescription =
  "Tell us about your construction documentation needs. Our BIM architects will help you clear drawing backlogs and deliver permit-ready sets faster.";
