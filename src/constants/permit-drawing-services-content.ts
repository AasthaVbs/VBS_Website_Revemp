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

export const permitDrawingStatsStrip = [
  { value: "4000+", color: "text-vbs-red", label: "Projects Delivered" },
  { value: "300+", color: "text-vbs-green", label: "Global Clients" },
  { value: "11+", color: "text-vbs-yellow", label: "Years of Experience" },
  { value: "500+", color: "text-vbs-blue", label: "US-trained Architects & Engineers" },
];

export const permitDrawingHero = {
  tag: "Permit Drawing",
  titleLead: "Ease Documentation\nChallenges with ",
  titleAccent: "Our Permit\nDrawing Services",
  description:
    "Our pre-vetted BIM architects and engineers use AI-assisted workflows to produce building permit drawings that get through review faster.",
  ctaLabel: "Connect With Us",
  imageSrc: "/image/permit-drawings-banner.jpg",
  imageAlt: "Permit Drawing Services",
  copyMaxWidth: 675,
  descriptionMaxWidth: 624,
};

export const permitDrawingIntro = {
  tag: "Overview",
  titleLead: "Building Permit Drawing ",
  titleAccent: "Company Code Ready Submittal",
  titleStacked: true,
  titleMaxWidth: 911,
  description:
    "We help your team get their plans in sooner and avoid code issues with our permit drawing services. We also keep architects, engineers and contractors aligned from first draft to final approval.",
  sideDescription:
    "Virtual Building Studio offers permit drawing services in the USA for architecture and structural teams. Our BIM experts use AI-assisted workflows to add capacity fast. This cuts rework and improves coordination between trades, also frees your staff for core design work.",
  featuresTitle: "Pre-Vetted Permit Drawing Experts Ready to Support Your Firm",
  features: [
    "We handle permit drawings from first markup to final resubmission, covering commercial and residential projects.",
    "Our teams work to IBC, ADA and local AHJ codes so your sets clear plan review the first time.",
    "We draft in Revit and AutoCAD and coordinate models in Navisworks before any sheet goes out.",
    "Your team gets a shared BIM 360 or ACC environment, so redlines and updates stay visible to everyone.",
    "Every sheet passes a three-stage QA review before a senior BIM lead signs off.",
    "You receive complete permit sets that includes plans, sections, details, schedules and code compliant notes.",
  ],
  mainImage: "/image/permit-drarings-overview.jpg",
  imageAlt: "Permit drawings overview",
};

export const permitDrawingOurClientsSection = {
  tag: "Our Clients",
  titleLead: "Trusted by",
  titleAccent: "Top AEC Firms",
  titleAccentFirst: false,
  breakTitle: true,
  description:
    "Supporting architecture, engineering, construction, and reality capture teams across diverse project types and workflows.",
};

export const permitDrawingServicesSection = {
  tag: "Our Services",
  titleLine1: "Our Comprehensive Range of ",
  titleLine2: "Permit Drawing Services",
  description:
    "Projects move from early design markups to final construction sets. We prepare permit drawing services that keep pace at every stage of delivery.",
  ctaLabel: "Let's Talk Now",
  ctaHref: "#permit-drawing-page-contact",
  wideCards: true,
};

export const permitDrawingServiceCards = [
  {
    title: "Commercial Permit Drawings",
    text: "We prepare permit-ready sets for offices, retail centers and mixed-use buildings. Our team follows zoning and IBC codes, so your commercial permit drawings clear plan review without any delay.",
    image: "/image/commercial-permit-drawings.jpg",
  },
  {
    title: "Residential Permit Drawings",
    text: "Single-family homes, additions, and multi-unit residences all need clean permit sets. We draft residential permit drawings that meet building codes, so homeowners and builders avoid rejected applications.",
    image: "/image/residential-permit-drawings.jpg",
  },
  {
    title: "Permit Set Preparation Services",
    text: "A complete permit set needs more than floor plans. Our permit set preparation services include elevations, sections, schedules and code notes. We package each set the way your jurisdiction expects.",
    image: "/image/permit-set-preparation-services.jpg",
  },
  {
    title: "New Construction Permit Drawings",
    text: "New builds face the strictest review since inspectors check every system from the ground up. We prepare permit drawings that includes foundations, framing and life safety details for smooth submission.",
    image: "/image/new-construction-permit-drawings.jpg",
  },
  {
    title: "Renovation and Addition Permit Drawings",
    text: "Renovations and additions must tie into the building information that already exists. So one needs to be more careful while drawing. We record the current situation and prepare permit sets to satisfy the inspectors' demands without delay.",
    image: "/image/renovation-and-addition-permit-drawings.jpg",
  },
  {
    title: "Permit Revision and Resubmission Support",
    text: "Plan reviewers sometimes send back comments that need quick fixes. Our team handles permit revisions and resubmissions, so a round of corrections does not turn into months of back and forth.",
    image: "/image/permit-revision-and-resubmission-support.jpg",
  },
];

export const permitDrawingAiBimWorkflowSection = {
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
  posterSrc: "/image/permit-drawings-banner.jpg",
};

export const permitDrawingWhyChooseSection = {
  tag: "Why Choose Us",
  titleLead: "Why Choose Us for ",
  titleAccent: "Permit Drawing Services?",
  description:
    "AEC firms trust us for Permit Drawing Services because of our deep US code knowledge and hands-on experience on fast-moving projects.",
  descriptionMaxWidth: 652,
  ctaLabel: "Start New Project",
  ctaHref: "#permit-drawing-page-contact",
};

export const permitDrawingWhyChooseItems = [
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
      "Get your permit drawings in real-time, all while sticking to US codes, standards and whatever your project needs, making sure smooth communication and teamwork throughout the process.",
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

export const permitDrawingWorkflowIntegrateSection = {
  tag: "Workflow",
  titleParts: [
    {
      text: "Our Process Flow for ",
      className: "text-section font-medium text-[#111111] capitalize",
    },
    {
      text: "Permit Drawing Services",
      className: "text-section text-accent font-light capitalize",
    },
  ],
  description:
    "Every permit drawing set follows a clear 4 step process. Each step follows the last and keep your team up to date and your schedule on track.",
  note: {
    text: 'Our process is designed to get your projects moving quickly. We don\'t wait until onboarding is "finished" to create value—we begin production as soon as the essential alignment is complete and continue improving the partnership with every project.',
  },
  centerLogo: workflowLogo,
};

export const permitDrawingWorkflowIntegrateSteps = [
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

export const permitDrawingTechnologyStackSection = {
  tag: "Tools & Platforms",
  titleLine1: "We Use to Deliver ",
  titleAccent: "Permit Drawing Services",
  description:
    "Leveraging industry-leading BIM and CAD software to create accurate, coordinated, and code-ready permit drawing sets for complex projects.",
};

export const permitDrawingTechnologyStackToolsRowOne: MepBimTechnologyTool[] =
  mepBimTechnologyStackToolsRowOne;

export const permitDrawingTechnologyStackToolsRowTwo: MepBimTechnologyTool[] =
  mepBimTechnologyStackToolsRowTwo;

export const permitDrawingAdvantagesSection = {
  tag: "Advantages",
  titleLine1: "Advantages of Outsourcing ",
  titleLine2: "Permit Drawing Services",
  titleMaxWidth: 844,
  descriptionMaxWidth: 880,
  description:
    "Outsourcing your permit drawings frees your team from repetitive drafting work.",
  ctaLabel: "Contact Now",
  ctaHref: "#permit-drawing-page-contact",
};

export const permitDrawingAdvantagesCards = [
  {
    title: "Fewer Errors, Fewer Rejections",
    text: "Every sheet goes through review before it reaches you. This catches missing dimensions, code gaps and drafting errors, so your permit set gets it right the first time.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Coordination That Keeps Everyone Aligned",
    text: "Architectural and structural drawings must agree with each other before submission. Our team checks both sets together, so your permit package stays consistent from cover sheet to last detail.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Built to Meet Code",
    text: "Building codes vary by city and county and permit reviewers know the difference. Our drafters track local amendments to IBC and ADA, so your set matches what your jurisdiction expects.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Drawings That Communicate Clearly",
    text: "A permit reviewer should understand your design without asking follow-up questions. Clear elevations, sections and callouts help inspectors see exactly what you plan to build.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Documentation You Can Reuse",
    text: "Your permit set does not have to be a one-time document. We build models and drawings your team can reuse for as-built records and future renovation permits.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Lower Cost, Better Data",
    text: "Hiring an in-house drafter for every permit cycle adds up fast. Outsourcing your permit drawings cuts overhead while keeping your model data clean and ready for the next project phase.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
];

export const permitDrawingEngagementModelsSection = {
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

export const permitDrawingEngagementModelsCards = [
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
    ctaHref: "#permit-drawing-page-contact",
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

export const permitDrawingProjectCta = {
  titleLine1: "Got a Permit Set That ",
  titleLine2: "Needs to Move Fast?",
  description:
    "Send us your drawings and jurisdiction details. Our BIM experts will scope your permit drawing services and get your team a plan within a day.",
  cta: "Contact Us",
  ctaHref: "#permit-drawing-page-contact",
};

export const permitDrawingIndustriesIntro = {
  titleLine1: "Industries We Support with ",
  titleLine2: "Permit Drawing Services",
  titleMaxWidth: 858,
  description:
    "From iconic high-rises to large-scale infrastructure, our Permit Drawing Services empower diverse industries with smart, scalable solutions tailored to their unique project goals and challenges.",
};

export const permitDrawingResourcesSection = acsServicePagesResourcesSection;

export const permitDrawingTestimonialsDescription =
  "Client stories set out how our BIM expertise reduced costs, improved coordination and sped project delivery through collaboration.";

export const permitDrawingFaqSection = {
  tag: "FAQs",
  description:
    "Everything you need to know about permit drawing services, project requirements, workflows and deliverables.",
};

export const permitDrawingFaqs = [
  {
    q: "What permit drawing services do you provide?",
    a: "We prepare commercial and residential permit drawings, including plans, elevations, sections, schedules and code compliance notes. Our permit set preparation services cover everything your jurisdiction needs for submission.",
  },
  {
    q: "Can you work with our Revit or CAD standards?",
    a: "Yes. Our team adopts your Revit or AutoCAD templates, naming conventions, and sheet standards, then works inside BIM 360, ACC, or your preferred shared environment.",
  },
  {
    q: "How do you establish scope and LOD for a permit drawing project?",
    a: "We review your markups, jurisdiction requirements, and target LOD during kickoff, then confirm a clear deliverable list for plans, elevations, sections, schedules, and code notes before production starts.",
  },
  {
    q: "How do you ensure quality with AI?",
    a: "AI accelerates drafting and coordination checks, while US-trained BIM leads run multi-stage QA before sign-off. Every sheet is reviewed against codes, coordination rules, and your office standards.",
  },
  {
    q: "Would you support permit revisions if a reviewer comments?",
    a: "Yes. Our team handles permit revisions and resubmissions quickly so reviewer comments do not turn into months of back and forth.",
  },
];

export const permitDrawingContactDescription =
  "Tell us about your permit drawing needs. Our BIM architects will help you prepare code-ready sets that clear plan review faster.";
