import workflowLogo from "@/assets/images/architecture-services/workflow-logo.svg";
import { benefitIconColored, benefitIconMuted } from "@/constants/benefit-icons";
import {
  engagementModelCards,
  type EngagementModelCard,
} from "@/constants/engagement-models-content";
import type { MepBimTechnologyTool } from "@/constants/mep-bim-modelling-content";
import {
  mepBimTechnologyStackToolsRowOne,
  mepBimTechnologyStackToolsRowTwo,
} from "@/constants/mep-bim-modelling-content";
import { acsServicePagesResourcesSection } from "@/constants/shared-sections";

/** Temporary shared photo until data-center ACS assets are ready. */
export const bimForDataCenterPlaceholderImage = "/image/data-center-mep-bim-overview.png";

export const BIM_FOR_DATA_CENTER_CONTACT_HASH = "#bim-for-data-center-page-contact";

export const bimForDataCenterStatsStrip = [
  { value: "400+", color: "text-vbs-red", label: "US-Trained Architects & Engineers" },
  { value: "4000+", color: "text-vbs-green", label: "Projects Delivered" },
  { value: "500+", color: "text-vbs-yellow", label: "Global AEC Clients" },
  { value: "11+", color: "text-vbs-blue", label: "Years of Industry Experience" },
];

export const bimForDataCenterHero = {
  tag: "Data Center for Architecture",
  titleLead: "Data Center BIM Services to Eliminate Capacity Gaps, ",
  titleAccent: "Coordination Errors and Permit Delays",
  description:
    "Data center deadlines leave no buffer for rework or missed coordination. Our pre-vetted BIM architects run AI-assisted workflows to close staffing gaps, tighten cross-discipline coordination and move permit sets through review faster.",
  ctaLabel: "Connect With Us",
  imageSrc: bimForDataCenterPlaceholderImage,
  imageAlt: "Data center BIM services for architecture firms",
  copyMaxWidth: 670,
  descriptionMaxWidth: 670,
  titleMaxWidth: 661,
};

export const bimForDataCenterIntro = {
  tag: "Overview",
  titleLead: "Data Centre Architectural BIM Services Built Around ",
  titleAccent: "Your Firm's Delivery Timeline",
  titleStacked: false,
  titleMaxWidth: 1012,
  descriptionMaxWidth: 936,
  description:
    "Data center for architecture projects demand tight coordination between structural, architectural and civil teams. Our data center design services speed up review cycles and keep every discipline aligned through construction documentation.",
  sideDescription:
    "Virtual Building Studio pairs architecture firms with dedicated BIM architects who use AI-assisted workflows for data center design and construction. Our pre-vetted US-trained architects work as an extension of your team, following your workflow, project standards and timezone. This partnership adds capacity, cuts rework and helps teams move faster without losing coordination quality.",
  featuresTitle: "Pre-Vetted Data Center BIM Architects Ready to Support Your Firm",
  features: [
    "End-to-end support from schematic design through Data Center Construction Documentation and permit sets",
    "Design work aligned with IBC, NFPA 76 and local fire and life safety codes for critical facilities",
    "Modeling in Revit, Navisworks and Enscape for coordinated Data Center Revit Construction Documents",
    "Real-time collaboration through BIM 360 and ACC with your in-house project team",
    "QA/QC checks at every phase to catch clashes before they reach the field",
    "Data Center Drafting Services covering floor plans, sections, elevations and equipment layouts ready for coordination",
  ],
  mainImage: bimForDataCenterPlaceholderImage,
  imageAlt: "Data centre architectural BIM services overview",
};

export const bimForDataCenterOurClientsSection = {
  tag: "Our Clients",
  titleLead: " Leading AEC Firms",
  titleAccent: "Trusted by",
  titleAccentFirst: true,
  breakTitle: false,
  titleMaxWidth: 528,
  descriptionMaxWidth: 484,
  description:
    "Supporting a wide variety of project types and workflows for architecture, engineering, construction, and reality capture companies. We work with your standards, delivery processes and project requirements to offer you reliable CAD documentation support that grows with your business.",
};

export const bimForDataCenterServicesSection = {
  tag: "Our Services",
  titleLine1: "Our Complete Range of ",
  titleLine2: "Data Center Design and Construction Services",
  titleMaxWidth: 853,
  descriptionMaxWidth: 845,
  description:
    "Data center projects move through distinct phases, from early planning to final handover. Our team assists you every phase, connecting schematic design, design development, construction documentation and as-built delivery under one dedicated resource.",
  ctaLabel: "Let's Talk Now",
  ctaHref: BIM_FOR_DATA_CENTER_CONTACT_HASH,
  wideCards: true,
};

export const bimForDataCenterServiceCards = [
  {
    title: "Schematic Design Support",
    text: "Our BIM architects interpret your initial ideas and develop them into coordinated floor plans and massing studies for data center facilities. This groundwork sets clear space planning, security zoning and structural clearances before the design development process begins.",
    image: bimForDataCenterPlaceholderImage,
  },
  {
    title: "Design Services Development",
    text: "As layouts are finalized we refine structural coordination, equipment room clearances and life safety egress paths. Design development services carry your project from concept intent into buildable construction documents ready for engineering handoff.",
    image: bimForDataCenterPlaceholderImage,
  },
  {
    title: "Healthcare Data Center BIM Services",
    text: "Our Hospital Data Center BIM Modeling covers server rooms, imaging support spaces and record storage areas. Medical Data Center Design Support keeps every model aligned with clinical, security and code requirements.",
    image: bimForDataCenterPlaceholderImage,
  },
  {
    title: "Data Center Construction Documentation",
    text: "Data Center Construction Documentation covers detailed floor plans, wall sections, equipment layouts and finish schedules ready for permit submission. Every sheet follows your firm's drawing standards and local jurisdiction requirements before it reaches the field.",
    image: bimForDataCenterPlaceholderImage,
  },
  {
    title: "Permit Drawing Services",
    text: "Permit rejections cost weeks on a data center schedule. Our permit drawing services check code compliance early. This keeps your data center design and construction timeline on track from the first submission.",
    image: bimForDataCenterPlaceholderImage,
  },
  {
    title: "As-Built Drafting Services",
    text: "Field conditions change during construction, especially in retrofit, renovation and expansion projects. Our data center drafting services document existing conditions in detail, giving your team a reliable base for future modifications.",
    image: bimForDataCenterPlaceholderImage,
  },
  {
    title: "Data Center Revit Construction Documents",
    text: "Data Center Revit Construction Documents keep every architectural, structural and civil discipline working from a single coordinated model. This reduces version conflicts and helps your team catch clashes before construction begins on site.",
    image: bimForDataCenterPlaceholderImage,
  },
];

export const bimForDataCenterAiBimWorkflowSection = {
  tag: "AI + BIM Experts",
  titleParts: [
    {
      text: "AI-Assisted Workflows. ",
      className: "text-section font-medium capitalize text-[#111111] block",
    },
    {
      text: "Expert-Led BIM Delivery.",
      className: "text-section text-accent font-light capitalize",
    },
  ],
  description:
    "Technology should accelerate production, not eliminate the technical expertise. Our AI-powered workflows automate repetitive modeling tasks, while experienced BIM architects manage model development, coordination, QC and final handover to make sure each project follows your standards and project requirements.",
  videoAriaLabel: "Play AI-assisted BIM delivery video",
  posterSrc: bimForDataCenterPlaceholderImage,
};

export const bimForDataCenterWhyChooseSection = {
  tag: "Why Choose Us",
  titleLead: "Why Leading AEC Firms Trust ",
  titleAccent: "Our Data Center Design Services",
  description:
    "Data center facilities carry higher stakes than typical commercial projects, from security zoning to uptime requirements. Our BIM specialists understand these demands and bring US-trained expertise to every phase of your project.",
  descriptionMaxWidth: 922,
  titleMaxWidth: 784,
  ctaLabel: "Start New Project",
  ctaHref: BIM_FOR_DATA_CENTER_CONTACT_HASH,
};

export const bimForDataCenterWhyChooseItems = [
  {
    prefix: "0",
    suffix: "1",
    prefixColor: "#D70416",
    title: "US-Trained BIM Architects Available When You Need Them",
    description:
      "Use a network of seasoned US-trained architects to scale up quickly within 24 hours. This helps with project deadlines, workload surges and other production needs, without sacrificing quality or continuity.",
  },
  {
    prefix: "0",
    suffix: "2",
    prefixColor: "#42AA32",
    title: "BIM Delivery Compliant with US Code",
    description:
      "Get coordinated BIM models that meet US codes, standards and your project requirements. This lets architecture, engineering and construction teams work from the same up-to-date information.",
  },
  {
    prefix: "0",
    suffix: "3",
    prefixColor: "#2299D6",
    title: "AI-Assisted Workflows. Expert-Led Delivery.",
    description:
      "Our AI-assisted workflows automate repetitive production tasks. Expert BIM architects still handle modeling, coordination, QA and final deliverables, so speed never comes at the cost of quality.",
  },
  {
    prefix: "0",
    suffix: "4",
    prefixColor: "#F0B300",
    title: "Flexible Engagement Models that work for you",
    description:
      "Select the engagement model that suits your project needs. Whether you need assistance for a single project, a dedicated BIM team or a long-term delivery partner. Start with a no-risk trial and grow as your project needs change.",
  },
] as const;

export const bimForDataCenterWorkflowIntegrateSection = {
  tag: "Workflow",
  titleParts: [
    {
      text: "Our Process Flow for ",
      className: "text-section font-medium text-[#111111]",
    },
    {
      text: "Data Center Design and Construction",
      className: "text-section text-accent font-light",
    },
  ],
  description:
    "Every data center project follows a clear sequence, from initial concept to construction documents ready for permitting, procurement and build execution.",
  note: {
    text: 'Our process is designed to get your projects moving quickly. We don\'t wait until onboarding is "finished" to create value—we begin production as soon as the essential alignment is complete and continue improving the partnership with every project.',
  },
  centerLogo: workflowLogo,
};

export const bimForDataCenterWorkflowIntegrateSteps = [
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

export const bimForDataCenterTechnologyStackSection = {
  tag: "Tools & Platforms",
  titleLine1: "We Use to Deliver ",
  titleAccent: "CAD Drafting Services",
  description:
    "Leveraging industry-leading BIM software to create accurate, coordinated, and constructible MEP models for complex projects.",
};

export const bimForDataCenterTechnologyStackToolsRowOne: MepBimTechnologyTool[] =
  mepBimTechnologyStackToolsRowOne;

export const bimForDataCenterTechnologyStackToolsRowTwo: MepBimTechnologyTool[] =
  mepBimTechnologyStackToolsRowTwo;

export const bimForDataCenterAdvantagesSection = {
  tag: "Advantages",
  titleLine1: "What Changes When ",
  titleLine2: "VBS Becomes Part of Your Delivery Team",
  titleParts: [
    {
      text: "What Changes When ",
      className: "text-section font-medium text-[#111111]",
    },
    {
      text: "VBS Becomes Part of Your Delivery Team",
      className: "text-section text-accent font-light",
    },
  ],
  titleMaxWidth: 824,
  descriptionMaxWidth: 882,
  description:
    "Data center projects are all about precision, strict uptime goals and exacting security demands included. Working with a focused BIM resource provider changes the way your firm plans, documents and delivers these projects.",
  ctaLabel: "Contact Now",
  ctaHref: BIM_FOR_DATA_CENTER_CONTACT_HASH,
};

export const bimForDataCenterAdvantagesCards = [
  {
    title: "Coordinate BIM Models to Ensure Design Intent",
    text: "Our shared BIM models carry your design intent through every phase. We follow your standards, workflows and QC processes, so models are developed as per your project specifications.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Scale Without Hiring",
    text: "Add data center design and construction capacity without the delay of hiring more in-house staff. A dedicated resource integrates into your team fast and removes the overhead of onboarding and management.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Shorten Review Cycles",
    text: "With every data center project, our team learns more about your expectations, processes and internal standards. This means less time explaining deliverables, fewer revisions and more predictable delivery down the road.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Flexible Delivery Ability",
    text: "Whether you need a single dedicated resource, a full BIM team or extra capacity at peak workloads, we adapt. Our engagement models flex around your business, not the other way around.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Support for All Phases of BIM Project Execution",
    text: "We deliver the BIM expertise you need, from concept modeling and multi-discipline coordination to construction documentation and as-built models. Support scales wherever your team needs the most delivery capacity.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "AI-Powered. Human-Driven.",
    text: "AI automates repetitive BIM production tasks to save time. Technical decisions, coordination, quality reviews and final delivery still rest with experienced BIM specialists. We use technology to improve delivery speed, not to replace technical expertise.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
];

export const bimForDataCenterEngagementModelsHeader = {
  tag: "Engagement Models",
  titleLine1: "Flexible Engagement Models Built Around",
  titleAccent: "Your Delivery Needs",
  description:
    "Whether you need project-based support, a dedicated remote team, or a fully managed global delivery center, our engagement models are designed to scale with your business.",
};

export const bimForDataCenterEngagementCards = [
  {
    ...engagementModelCards[0],
    ctaHref: BIM_FOR_DATA_CENTER_CONTACT_HASH,
  },
  engagementModelCards[1],
  {
    ...engagementModelCards[2],
    description:
      "A fully managed offshore BIM delivery center exclusively aligned with your business.",
  },
] as unknown as EngagementModelCard[];

export const bimForDataCenterProjectCta = {
  titleLine1: "Ready to Add a Dedicated Data ",
  titleLine2: "Center BIM Architect to Your Team?",
  description:
    "A dedicated BIM architect, backed by AI-assisted workflows, starts within 24 hours and fits your project scope. Let's talk about your next project and how a dedicated BIM resource can help you meet it.",
  cta: "Contact Us",
  ctaHref: BIM_FOR_DATA_CENTER_CONTACT_HASH,
};

export const bimForDataCenterIndustriesIntro = {
  titleLine1: "Data Center Construction Documentation",
  titleBeforeAccent: "Supporting ",
  titleLine2: "Diverse AEC Projects",
  titleMaxWidth: 1064,
  introMaxWidth: 974,
  description:
    "Data center projects range from single-tenant facilities to large colocation campuses. Our BIM specialists support architecture, engineering, construction and reality capture teams with coordinated models tailored to each project's requirements.",
};

export const bimForDataCenterResourcesSection = acsServicePagesResourcesSection;

export const bimForDataCenterTestimonialsDescription =
  "Client stories set out how our BIM solutions reduced costs, improved coordination and sped project delivery through collaboration.";

export const bimForDataCenterFaqSection = {
  tag: "FAQs",
  description:
    "Everything you need to know about Data Centre Architectural BIM Services, project requirements, workflows, and deliverables.",
};

export const bimForDataCenterFaqs = [
  {
    q: "What is included in Data Center Drafting Services?",
    a: "Data Center Drafting Services cover floor plans, equipment layouts, sections, elevations and finish schedules. Every drawing set is built for coordination between structural, architectural and civil teams before permitting begins.",
  },
  {
    q: "What is Medical Data Center Design Support, and who is it for?",
    a: "Medical Data Center Design Support is for architecture firms delivering hospital and clinical data center spaces. Hospital Data Center BIM Modeling covers server rooms, imaging support spaces and record storage areas, keeping every model aligned with clinical, security and code requirements.",
  },
  {
    q: "How does pricing work for data center design services?",
    a: "Pricing follows the engagement model that fits your delivery needs—project-based support, a dedicated BIM resource, or a global delivery center. You can start with a no-risk trial and scale as your project pipeline changes.",
  },
  {
    q: "How fast can a dedicated BIM resource start on our data center project?",
    a: "A dedicated BIM architect, backed by AI-assisted workflows, can start within 24 hours and fit your project scope, standards and timezone.",
  },
  {
    q: "What happens if we need revisions after delivery?",
    a: "QA/QC checks run at every phase so clashes are caught before they reach the field. After delivery, your dedicated resource stays aligned with your standards, so revisions are handled as part of the ongoing partnership rather than a restart.",
  },
];

export const bimForDataCenterContactDescription =
  "Tell us about your data center project. Our pre-vetted BIM architects will help you close capacity gaps, tighten coordination and move permit sets through review faster.";
