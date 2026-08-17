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

export const architecturalDraftingStatsStrip = [
  { value: "2000+", color: "text-vbs-red", label: "Projects Delivered" },
  { value: "300+", color: "text-vbs-green", label: "Global Clients" },
  { value: "11+", color: "text-vbs-yellow", label: "Years of Experience" },
  { value: "250+", color: "text-vbs-blue", label: "US-trained Architects & Engineers" },
];

export const architecturalDraftingHero = {
  tag: "Architectural Drafting",
  titleLead: "Architectural Drafting Services for ",
  titleAccent: "Reduced Rework & Faster Approvals",
  description:
    "Dedicated Revit drafters combine our AI-powered workflow with your existing one, so your team delivers accurate, code-compliant construction documents on time, every time.",
  ctaLabel: "Connect With Us",
  imageSrc: "/image/architecture-drafting-banner.jpg",
  imageAlt: "Architectural Drafting Services",
  copyMaxWidth: 650,
  descriptionMaxWidth: 670,
};

export const architecturalDraftingIntro = {
  tag: "Overview",
  titleLead: "Built to Extend Your ",
  titleAccent: "Team's Capacity",
  titleStacked: false,
  titleMaxWidth: 850,
  description:
    "Documentation backlogs slow firms down before they even notice it happening. Architectural Drafting Outsourcing gives your team extra hands fast, so deadlines stay on track and design work never stalls.",
  sideDescription:
    "Firms turn to us for Architectural Drafting Services in the USA when their in-house team needs more hands. Our drafters take on production work, so your architects get that time back for design and client relationships. Consistent QA on every set means less rework for your team. Direct coordination with your consultants keeps the whole project moving without added friction on your end.",
  featuresTitle: "Pre-Vetted BIM Architects Ready to support your firm",
  features: [
    "Drafters cover schematic design, design development, and construction documentation. Your firm gets support at every phase.",
    "Every drawing follows IBC, ADA, and NFPA codes. Your submissions clear review without repeat rounds.",
    "Drafters work directly in Revit and AutoCAD. Your team never adapts to a new tool.",
    "AutoCAD Architectural Drafting Services with clean layer standards and consistent annotation.",
    "Teams coordinate through your existing platforms. Nothing about your process changes on your end.",
    "QA checks catch layer, dimension, and annotation errors before delivery. Your review time drops as a result.",
    "Drafters produce plans, elevations, sections, schedules, and RCPs. Your set stays complete without gaps.",
  ],
  mainImage: "/image/architectural-drafting-overview.jpg",
  imageAlt: "Architectural Drafting overview",
};

export const architecturalDraftingOurClientsSection = {
  tag: "Our Clients",
  titleAccent: "Trusted by",
  titleLead: " Leading AEC Firms",
  description:
    "Supporting architecture, engineering, construction, and reality capture teams across diverse project types and workflows.",
};

export const architecturalDraftingServicesSection = {
  tag: "Our Services",
  titleLine1: "Our Comprehensive Range of ",
  titleLine2: "Revit Drafting Services",
  description:
    "Our Architectural Drawings Services support design development, construction documentation and permit-ready packages, so your team gets consistent quality from concept through handover.",
  ctaLabel: "let's Talk Now",
  ctaHref: "#architectural-drafting-page-contact",
  titleMaxWidth: 782,
  wideCards: true,
};

export const architecturalDraftingServiceCards = [
  {
    title: "Schematic Design Drafting Services",
    text: "Our remote drafters build scaled layouts, massing studies and preliminary elevations. Integrated CAD Architectural Drafting workflows keep that early communication clear and dimensionally accurate.",
    image: "/image/schematic-design-drafting-services.jpg",
  },
  {
    title: "Design Development Drafting Services",
    text: "Our drafting experts produce coordinated plans, sections and elevations aligned with those systems. Our Architectural Drawings Services carry that alignment through to construction documentation.",
    image: "/image/design-development-drafting-services.jpg",
  },
  {
    title: "Construction Documentation Services",
    text: "We deliver code-compliant sets, including plans, schedules, sections and reflected ceiling plans. Our CAD Architectural Drafting services build every set for permit-ready submission, so your team avoids rework.",
    image: "/image/construction-documentation-services.jpg",
  },
  {
    title: "2D Floor Plan Drawings Services",
    text: "Our experts create dimensionally accurate, layered 2D floor plans with annotations and area calculations. Our Architectural Drawings Services turn these into contractor-ready layouts for residential and commercial projects.",
    image: "/image/2d-floor-plan-drawings-services.jpg",
  },
  {
    title: "As-Built Drawings Services",
    text: "Our drafters develop precise as-built documents from field data, surveys and redline markups. Our Architectural Drafting Services support renovations, retrofits and facility management with accurate existing-condition records.",
    image: "/image/as-built-drawings-services.jpg",
  },
  {
    title: "Permit Set Drawings Services",
    text: "Every jurisdiction reviews permit sets against its own local codes. We prepare jurisdiction-specific permit sets compliant with IBC, ADA, NFPA and zoning regulations. Our CAD Architectural Drawing services speed up AHJ approvals.",
    image: "/image/permit-set-drawings-services.jpg",
  },
  {
    title: "Millwork and Joinery Drawings Services",
    text: "We produce fabrication-ready millwork drawings with material specifications, tolerances and installation details. Our Architectural Drawings Services support cabinetry, interior fit-outs and custom installations.",
    image: "/image/millwork-and-joinery-drawings-services.jpg",
  },
  {
    title: "CAD Conversion Services",
    text: "We convert old sketches, PDFs and legacy files into editable CAD architectural drafting with accurate layer structuring. Our 2D CAD conversion services fold directly into your existing documentation workflows.",
    image: "/image/cad-conversion-services.jpg",
  },
];

export const architecturalDraftingAiBimWorkflowSection = {
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

export const architecturalDraftingWhyChooseSection = {
  tag: "Why Choose Us",
  titleLead: "Why Firms Rely on Us for ",
  titleAccent: "Architectural CAD Services?",
  description:
    "Our drafting specialists work directly inside your workflow, so the drawings they produce match your office standards, your consultant coordination needs, and your submission timelines.",
  ctaLabel: "Start New Project",
  ctaHref: "#architectural-drafting-page-contact",
};

export const architecturalDraftingWhyChooseItems = [
  {
    prefix: "0",
    suffix: "1",
    prefixColor: "#D70416",
    title: "Dedicated Team Ready in 24 Hours",
    description:
      "Access experienced drafting professionals within 24 hours to quickly address workload spikes, project deadlines and resource shortages.",
  },
  {
    prefix: "0",
    suffix: "2",
    prefixColor: "#42AA32",
    title: "US Code-Compliant Delivery in Realtime",
    description:
      "Get your CAD architectural drafts in realtime, all while sticking to US codes, standards and whatever your project needs, making sure smooth communication and teamwork throughout the process.",
  },
  {
    prefix: "0",
    suffix: "3",
    prefixColor: "#2299D6",
    title: "30% More Efficient with AI-Powered Workflow",
    description:
      "With AI helping out, you get workflow efficiency 30% better, resulting in faster model development, quicker QC and improved coordination that keeps project consistent.",
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

export const architecturalDraftingTechnologyStackSection = {
  tag: "Tools & Platforms",
  titleLine1: "We Use to Deliver ",
  titleAccent: "Architectural Drafting Services",
  description:
    "Leveraging industry-leading BIM software to create accurate, coordinated, and constructible MEP models for complex projects.",
};

export const architecturalDraftingTechnologyStackToolsRowOne: MepBimTechnologyTool[] =
  mepBimTechnologyStackToolsRowOne;

export const architecturalDraftingTechnologyStackToolsRowTwo: MepBimTechnologyTool[] =
  mepBimTechnologyStackToolsRowTwo;

export const architecturalDraftingEngagementModelsSection = {
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
  descriptionMaxWidth: 750,
  note: {
    text: "Every strategic partnership begins with one successful project. Each engagement helps us understand your practice more deeply, making every future collaboration faster, smoother, and more valuable.",
  },
};

export const architecturalDraftingEngagementModelsCards = [
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
    ctaHref: "#architectural-drafting-page-contact",
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

export const architecturalDraftingProjectCta = {
  titleLine1: "Ready to Close the ",
  titleLine2: "Gap Between Design and Documentation?",
  description:
    "Our drafters bridge the gap between design idea and a construction-ready drawing, so your architects stay focused on design instead of catching up on paperwork.",
  cta: "Contact Us",
  ctaHref: "#architectural-drafting-page-contact",
};

export const architecturalDraftingIndustriesIntro = {
  titleLine1: "Industries We Support with ",
  titleLine2: "Construction Drafting Services",
  titleMaxWidth: 706,
  description:
    "From iconic high-rises to large-scale infrastructure, our Architectural Drafting Company in the USA empowers diverse industries with smart, scalable solutions tailored to their unique project goals and challenges.",
};

export const architecturalDraftingResourcesSection = acsServicePagesResourcesSection;

export const architecturalDraftingTestimonialsDescription =
  "Client stories set out how our architectural CAD drawing and Revit drafting services reduced costs, improved coordination and sped project delivery through collaboration.";

export const architecturalDraftingFaqSection = {
  tag: "FAQs",
  description:
    "Everything you need to know about our Architectural Drawing Services, including project requirements, workflows and deliverables.",
};

export const architecturalDraftingFaqs = [
  {
    q: "Do your drafters work directly on my projects?",
    a: "Yes. Your drafter works only within your workflow, tools, and schedule. No one splits their time across other clients.",
  },
  {
    q: "How is this different from a freelancer?",
    a: "You get a managed drafting resource with structured QA, backup coverage, US code familiarity, and consistent office standards — not a one-person dependency.",
  },
  {
    q: "Do your drafters understand US documentation standards?",
    a: "Yes. Our US-trained drafters prepare documents aligned with IBC, ADA, NFPA, and common AHJ submission expectations for residential and commercial projects.",
  },
  {
    q: "What if the assigned drafter is not the right fit?",
    a: "We replace the resource quickly and keep project continuity intact. Your account team manages the transition so deadlines stay protected.",
  },
  {
    q: "How do you ensure quality when using AI?",
    a: "AI accelerates production tasks, while experienced drafters review layers, dimensions, annotations, and code compliance through structured QA before every delivery.",
  },
];

export const architecturalDraftingContactDescription =
  "Tell us about your drafting scope, documentation standards, and delivery timeline. Our team will align the right US-trained Revit drafters for your firm.";
