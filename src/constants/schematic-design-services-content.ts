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

export const schematicDesignStatsStrip = [
  { value: "4000+", color: "text-vbs-red", label: "Projects Delivered" },
  { value: "300+", color: "text-vbs-green", label: "Global Clients" },
  { value: "11+", color: "text-vbs-yellow", label: "Years of Experience" },
  { value: "500+", color: "text-vbs-blue", label: "US-trained Architects & Engineers" },
];

export const schematicDesignHero = {
  tag: "Schematic Design",
  titleLead: "Expand Your Design Capacity\nwith ",
  titleAccent: "Our Schematic Design Support Services",
  description:
    "Your team loses time to tight deadlines during early design work. Our pre-vetted architects use AI-assisted workflows for fast, code-compliant schematic design services.",
  ctaLabel: "Connect With Us",
  imageSrc: "/image/schematic-design-services-banner.jpg",
  imageAlt: "Schematic Design Services",
  copyMaxWidth: 680,
  descriptionMaxWidth: 670,
};

export const schematicDesignIntro = {
  tag: "Overview",
  titleLead: "Fast, Code-Ready ",
  titleAccent: "Conceptual Design",
  titleStacked: false,
  titleMaxWidth: 911,
  description:
    "Our schematic design services help your team move from concept to approved layout faster. Your team gains productivity, steadier design quality, tighter coordination and predictable delivery timelines.",
  sideDescription:
    "Virtual Building Studio works as a reliable schematic design services provider in the USA. Our BIM architects use AI-assisted workflows to provide Architectural SD Phase Services. Your team gains extra capacity, cuts rework, coordinates better with structural partners, and stays focused on core design work.",
  featuresTitle:
    "Pre-Vetted Architectural Schematic Design Experts Ready to Support Your Firm",
  features: [
    "End-to-end schematic design support services from concept sketches to layout approval",
    "Confirmed IBC, ADA and local zoning compliance before design work advances",
    "Modelers work in Revit, AutoCAD, SketchUp and Enscape for early-stage visualization",
    "Coordinators manage design reviews through BIM 360 and ACC for real-time markups",
    "QA leads run milestone checks before every deliverable reaches your team",
    "Your team receives floor plans, elevations, site plans and 3D visuals",
  ],
  mainImage: "/image/schematic-design-services-overview.jpg",
  imageAlt: "Schematic design overview",
};

export const schematicDesignOurClientsSection = {
  tag: "Our Clients",
  titleLead: "Trusted by",
  titleAccent: "Top AEC Firms",
  titleAccentFirst: false,
  breakTitle: true,
  description:
    "Supporting architecture, engineering, construction, and reality capture teams across diverse project types and workflows.",
};

export const schematicDesignServicesSection = {
  tag: "Our Services",
  titleLine1: "Our Comprehensive Range of ",
  titleLine2: "Schematic Design Support Services",
  description:
    "From first concept sketch to construction-ready handoff, our architectural concept design services cover every early-stage need your architecture and structural team requires.",
  ctaLabel: "Let's Talk Now",
  ctaHref: "#schematic-design-page-contact",
  wideCards: true,
};

export const schematicDesignServiceCards = [
  {
    title: "Site Plans & Preliminary Code Analysis",
    text: "We map site boundaries, setbacks, and zoning constraints early. Our team checks IBC and ADA requirements before design work advances, that saves your firm from rework later.",
    image: "/image/site-plans-preliminary-code-analysis.jpg",
  },
  {
    title: "2D & 3D Floor Plans",
    text: "Our architects draft clear floor layouts in both 2D and 3D formats. They resolve space planning, room adjacencies and circulation paths before your team moves into design development.",
    image: "/image/2d-3d-floor-plans.jpg",
  },
  {
    title: "Building Elevations",
    text: "We draft exterior elevations that show massing, proportions, and material intent from the earliest design stage. Your reviewers see the building's character well before construction documents begin.",
    image: "/image/building-elevations.jpg",
  },
  {
    title: "3D Visualizations",
    text: "Our team turns concept models into clear 3D visuals for fast client review. These visuals help your team make early decisions and speed up clients' approvals.",
    image: "/image/3d-visualizations.jpg",
  },
  {
    title: "Programming & Space Planning",
    text: "Our team analyzes your program needs and turns them into workable spatial layouts. We confirm room counts, adjacencies and square footage targets before detailed design.",
    image: "/image/programming-space-planning.jpg",
  },
  {
    title: "Preliminary Structural System Coordination",
    text: "Our structural team reviews early architectural layouts and flags framing, span and foundation concerns before design development begins. This keeps structural feasibility in view from day one.",
    image: "/image/preliminary-structural-system-coordination.jpg",
  },
];

export const schematicDesignAiBimWorkflowSection = {
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
  posterSrc: "/image/schematic-design-services-banner.jpg",
};

export const schematicDesignWhyChooseSection = {
  tag: "Why Choose Us",
  titleLead: "Why Choose Us for ",
  titleAccent: "Schematic Design Support Services?",
  description:
    "Architecture firms trust us as a schematic design outsourcing company because of our deep US code knowledge and hands-on experience on fast-moving projects.",
  descriptionMaxWidth: 671,
  ctaLabel: "Start New Project",
  ctaHref: "#schematic-design-page-contact",
};

export const schematicDesignWhyChooseItems = [
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
      "Get your schematic designs in real-time, all while sticking to US codes, standards and whatever your project needs, making sure smooth communication and teamwork throughout the process.",
  },
  {
    prefix: "0",
    suffix: "3",
    prefixColor: "#2299D6",
    title: "30% More Efficient with AI-Powered Workflow",
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

export const schematicDesignWorkflowIntegrateSection = {
  tag: "Workflow",
  titleParts: [
    {
      text: "Our Process Flow for ",
      className: "text-section font-medium text-[#111111] capitalize",
    },
    {
      text: "Architectural Schematic Design Services",
      className: "text-section text-accent font-light capitalize",
    },
  ],
  description:
    "Every schematic design project follows a clear 4 step process. Each step followed the previous one, keeping your team up to date and your schedule intact.",
  note: {
    text: 'Our process is designed to get your projects moving quickly. We don\'t wait until onboarding is "finished" to create value—we begin production as soon as the essential alignment is complete and continue improving the partnership with every project.',
  },
  centerLogo: workflowLogo,
};

export const schematicDesignWorkflowIntegrateSteps = [
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

export const schematicDesignTechnologyStackSection = {
  tag: "Tools & Platforms",
  titleLine1: "We Use to Deliver ",
  titleAccent: "Schematic Design Services",
  description:
    "Leveraging industry-leading BIM and design software to create accurate, coordinated schematic layouts and early-stage visualizations for complex projects.",
};

export const schematicDesignTechnologyStackToolsRowOne: MepBimTechnologyTool[] =
  mepBimTechnologyStackToolsRowOne;

export const schematicDesignTechnologyStackToolsRowTwo: MepBimTechnologyTool[] =
  mepBimTechnologyStackToolsRowTwo;

export const schematicDesignAdvantagesSection = {
  tag: "Advantages",
  titleLine1: "Advantages of Schematic Design ",
  titleLine2: "Outsourcing Company",
  titleMaxWidth: 834,
  descriptionMaxWidth: 880,
  description:
    "Outsourcing schematic design work brings real gains beyond faster turnaround. Your team benefits from improved coordination, cleaner documentation and stronger design results at every phase of your project.",
  ctaLabel: "Contact Now",
  ctaHref: "#schematic-design-page-contact",
};

export const schematicDesignAdvantagesCards = [
  {
    title: "Reliable Design Quality",
    text: "Our senior reviewers check every layout before delivery. Your team gets residential schematic design services that holds up through design development and construction documentation without rework.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Stronger Architecture-Structure Coordination",
    text: "Our structural team checks feasibility alongside architectural layouts from day one. This keeps your framing, spans and foundation plans aligned early that avoids costly redesign later in the process.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Full Code Compliance",
    text: "Our team checks every schematic design decision against IBC, ADA, and local zoning requirements from the very first layout. Your project moves forward without surprises at the permitting stage.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Clear Design Visualization",
    text: "Our 3D visuals help your clients and stakeholders see and react to early concepts fast. This faster feedback means quicker approval at every review stage of the project.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Complete, Organized Documentation",
    text: "Your team receives organized site plans, floor plans, elevations and code analysis ready for the next design phase. With our commercial schematic design services, you spend less time hunting for missing information.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Lower Cost, Better Data Use",
    text: "You cut overhead by outsourcing schematic design work instead of expanding an in-house team. Your models also carry clean data your team can reuse through later design phases.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
];

export const schematicDesignEngagementModelsSection = {
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

export const schematicDesignEngagementModelsCards = [
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
    ctaHref: "#schematic-design-page-contact",
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

export const schematicDesignProjectCta = {
  titleLine1: "Ready to Speed Up Your ",
  titleLine2: "Schematic Design Phase?",
  description:
    "Our pre-vetted architects and engineers are ready to support your schematic design phase with fast, code-compliant deliverables your team can trust.",
  cta: "Contact Us",
  ctaHref: "#schematic-design-page-contact",
};

export const schematicDesignIndustriesIntro = {
  titleLine1: "Industries We Support with ",
  titleLine2: "Schematic Design Services",
  titleMaxWidth: 778,
  description:
    "From iconic high-rises to large-scale infrastructure, our architectural concept design services empower diverse industries with smart, scalable solutions tailored to their unique project goals and challenges.",
};

export const schematicDesignResourcesSection = acsServicePagesResourcesSection;

export const schematicDesignTestimonialsDescription =
  "Client stories set out how our BIM expertise reduced costs, improved coordination and sped project delivery through collaboration.";

export const schematicDesignFaqSection = {
  tag: "FAQs",
  description:
    "Everything you need to know about schematic design services, project requirements, workflows, and deliverables.",
};

export const schematicDesignFaqs = [
  {
    q: "How fast can you start on a schematic design project?",
    a: "Our dedicated team gets ready within 24 hours of your project kickoff. It allows your firm to move fast on short schedules, without compromising design coordination or quality.",
  },
  {
    q: "Can we outsource schematic design services without a long-term commitment?",
    a: "Yes. Most firms start with a project engagement or risk-free trial so you can evaluate quality, turnaround, and collaboration before expanding to ongoing dedicated support.",
  },
  {
    q: "What software do you use for schematic design and early-stage visualization?",
    a: "Our modelers work in Revit, AutoCAD, SketchUp, and Enscape for early-stage visualization, with design reviews managed through BIM 360 and ACC for real-time markups.",
  },
  {
    q: "How do you keep architectural and structural layouts coordinated at the schematic stage?",
    a: "Our structural team reviews early architectural layouts and flags framing, span, and foundation concerns before design development begins, keeping structural feasibility visible from day one.",
  },
  {
    q: "How do you make sure quality when using AI?",
    a: "AI accelerates production steps, while US-trained architects run QA checks at each milestone. Deliverables are reviewed against IBC, ADA, zoning requirements, and your office standards before handover.",
  },
];

export const schematicDesignContactDescription =
  "Tell us about your schematic design needs. Our architects will help you move from concept to approved layout faster with code-compliant deliverables.";
