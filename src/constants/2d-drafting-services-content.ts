import flexibleEngagementModelsIcon from "@/assets/images/flexible-engagement-models.png";
import iconEngageDedicated from "@/assets/images/architecture-services/icon-engage-dedicated.svg";
import iconEngageStrategic from "@/assets/images/architecture-services/icon-engage-strategic.svg";
import workflowLogo from "@/assets/images/architecture-services/workflow-logo.svg";
import { benefitIconColored, benefitIconMuted } from "@/constants/benefit-icons";
import type { MepBimTechnologyTool } from "@/constants/mep-bim-modelling-content";
import {
  mepBimTechnologyStackToolsRowOne,
  mepBimTechnologyStackToolsRowTwo,
} from "@/constants/mep-bim-modelling-content";
import { ROUTES } from "@/constants/navigation";
import { acsServicePagesResourcesSection } from "@/constants/shared-sections";

export const twoDDraftingStatsStrip = [
  { value: "4000+", color: "text-vbs-red", label: "Projects Delivered" },
  { value: "300+", color: "text-vbs-green", label: "Global Clients" },
  { value: "11+", color: "text-vbs-yellow", label: "Years of Experience" },
  { value: "500+", color: "text-vbs-blue", label: "US-trained Architects & Engineers" },
];

export const twoDDraftingHero = {
  tag: "2D Drafting",
  titleLead: "2D Drafting Services\nto Expand ",
  titleAccent: "Your Documentation Capacity",
  description:
    "Rework and missed deadlines happen when drafting capacity runs short. Our pre-vetted architects and engineers use an AI-assisted workflow to deliver fast, error-free 2D CAD drawings on time.",
  ctaLabel: "Connect With Us",
  imageSrc: "/image/2d-drafting-services-banner.jpg",
  imageAlt: "2D Drafting Services",
  copyMaxWidth: 670,
  descriptionMaxWidth: 582,
};

export const twoDDraftingIntro = {
  tag: "Overview",
  titleLead: "Clear Documentation and ",
  titleAccent: "Faster Delivery",
  titleStacked: false,
  titleMaxWidth: 574,
  description:
    "Clear 2D CAD drawings help your team work faster, catch errors early, coordinate directly between trades and move from concept to construction on schedule every time.",
  sideDescription:
    "At Virtual Building Studio, our CAD drafters use an AI-assisted workflow to deliver dependable 2D Drafting Services in the USA. Firms gain drafting capacity, cut rework and coordinate better across teams, so your architects and engineers stay focused on design instead of repetitive drawing tasks.",
  featuresTitle: "Pre-Vetted 2D Drafting Experts Ready to Support Your Firm",
  features: [
    "End-to-end drafting support for architectural and structural scopes, delivered by architects who understand US project workflows.",
    "Detailed 2D CAD Drawing output with clear dimensions, layers and text annotations that remove guesswork from every sheet.",
    "As-built documentation and design detailing that match your project templates and internal standards.",
    "Drawings that follow current US construction codes and documentation practices for every submission.",
    "Dedicated architects trained on US projects who integrate directly into your team's culture and toolsets.",
    "Outputs as per your project needs in DWG, PDF or Revit format.",
  ],
  mainImage: "/image/2d-drafting-services-overview.jpg",
  imageAlt: "2D Drafting Services overview",
};

export const twoDDraftingOurClientsSection = {
  tag: "Our Clients",
  titleLead: "Trusted by",
  titleAccent: "Top AEC Firms",
  titleAccentFirst: false,
  breakTitle: true,
  titleMaxWidth: 528,
  description:
    "We provide CAD drafting services for architects, designers and construction professionals on all project types and workflows.",
};

export const twoDDraftingServicesSection = {
  tag: "Our Services",
  titleLine1: "Our Complete Range of 2D ",
  titleLine2: "CAD Conversion Services",
  titleMaxWidth: 640,
  descriptionMaxWidth: 620,
  description:
    "When you outsource 2D Drafting Services to our team, you get support across every stage, from early concept sketches through construction documentation to final delivery.",
  ctaLabel: "let's Talk Now",
  ctaHref: "#two-d-drafting-page-contact",
  wideCards: true,
};

export const twoDDraftingServiceCards = [
  {
    title: "Architectural 2D Drafting",
    text: "We prepare clean architectural drawings that follow your design intent through every sheet. Our team develops plans, elevations and sections that meet US building construction standards from day one.",
    image: "/image/architectural-2d-drafting.jpg",
    href: ROUTES.architecturalDrafting,
  },
  {
    title: "Structural 2D Drawing",
    text: "We provide 2D structural drawings that clearly detail each beam, column and connection point. Skilled drafters prepare framing and reinforcement layouts that let your team coordinate with other trades.",
    image: "/image/structural-2d-drawing.jpg",
  },
  {
    title: "Construction Documentation Drafting",
    text: "We turn early design concepts into detailed drawings your contractor can build from. Coordinated construction documents help your team cut RFIs, speed up approvals and clarify conditions on site.",
    image: "/image/construction-documentation-drafting.jpg",
    href: ROUTES.constructionDocumentation,
  },
  {
    title: "Permit Drawing Production",
    text: "We prepare permit-ready drawings as per local authority requirements and industry standards. You do not have to wait for approval as all sheets are checked for compliance before they are submitted.",
    image: "/image/permit-drawing-production.jpg",
    href: ROUTES.permitDrawing,
  },
  {
    title: "2D As-Built Drawings",
    text: "We convert field changes into accurate as-built drawings that represent actual conditions on the project. These records are a reference for your team to rely on for years to come, and support future renovations.",
    image: "/image/2d-as-built-drawings.jpg",
  },
  {
    title: "Design Development Drawings",
    text: "We take schematic concepts and turn them into design development drawings that have specific dimensions and material callouts. This step connects concept design with construction documentation so your project continues forward.",
    image: "/image/design-development-drawings.jpg",
  },
];

export const twoDDraftingAiBimWorkflowSection = {
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

export const twoDDraftingWhyChooseSection = {
  tag: "Why Choose Us",
  titleLead: "Why Choose Us to ",
  titleAccent: "Outsource 2D Drafting Services",
  description:
    "Work with pre-vetted architects and engineers who understand the demands of 2D CAD Drawing Services with deep domain expertise across residential, commercial and infrastructure projects.",
  descriptionMaxWidth: 675,
  ctaLabel: "Start New Project",
  ctaHref: "#two-d-drafting-page-contact",
};

export const twoDDraftingWhyChooseItems = [
  {
    prefix: "0",
    suffix: "1",
    prefixColor: "#D70416",
    title: "On-Demand Team Available In 24 Hours",
    description:
      "Quick access to experienced CAD drafters in 24 hours for quick workload spikes, project deadlines and shortage of resources.",
  },
  {
    prefix: "0",
    suffix: "2",
    prefixColor: "#42AA32",
    title: "US Code-Compliant Real Time Delivery",
    description:
      "Get your CAD drafts and drawings in real time per US codes, standards and whatever your project needs, all while ensuring smooth communication and teamwork throughout the entire process.",
  },
  {
    prefix: "0",
    suffix: "3",
    prefixColor: "#2299D6",
    title: "30% Greater Efficiency with AI-Driven Workflow",
    description:
      "Our CAD drafting team is using AI-assisted checks to catch errors early. This means 30% more efficiency in the workflow process so drawings move through QC faster and get to you sooner.",
  },
  {
    prefix: "0",
    suffix: "4",
    prefixColor: "#F0B300",
    title: "Flexible Engagement & Risk-Free Trial",
    description:
      "Select the engagement models that best fit your project. And if you're unsure, there is a risk-free trial to test the expertise before you make a long-term commitment.",
  },
] as const;

export const twoDDraftingWorkflowIntegrateSection = {
  tag: "Workflow",
  titleParts: [
    {
      text: "Our Process Flow for Structural &\n",
      className: "text-section font-medium text-[#111111] capitalize",
    },
    {
      text: "Architectural 2D Drafting Services",
      className: "text-section text-accent font-light capitalize",
    },
  ],
  description:
    "Every 2D Drawing Services engagement follows a defined process of 4 steps from initial scope alignment through drafting, review and final delivery to your team.",
  note: {
    text: 'Our process is designed to get your projects moving quickly. We don\'t wait until onboarding is "finished" to create value—we begin production as soon as the essential alignment is complete and continue improving the partnership with every project.',
  },
  centerLogo: workflowLogo,
};

export const twoDDraftingWorkflowIntegrateSteps = [
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

export const twoDDraftingTechnologyStackSection = {
  tag: "Tools & Platforms",
  titleLine1: "We Use to Deliver ",
  titleLine2: "CAD Drafting Services",
  description:
    "Leveraging industry-leading BIM software to create accurate, coordinated, and constructible MEP models for complex projects.",
};

export const twoDDraftingTechnologyStackToolsRowOne: MepBimTechnologyTool[] =
  mepBimTechnologyStackToolsRowOne;

export const twoDDraftingTechnologyStackToolsRowTwo: MepBimTechnologyTool[] =
  mepBimTechnologyStackToolsRowTwo;

export const twoDDraftingAdvantagesSection = {
  tag: "Advantages",
  titleLine1: "Advantages of Outsourcing ",
  titleLine2: "2D Drafting Services",
  titleMaxWidth: 711,
  descriptionMaxWidth: 669,
  description:
    "Outsourcing 2D CAD Drawing Services gives your team more capacity, fewer errors and faster turnaround so projects move from design to construction without delay.",
  ctaLabel: "Contact Now",
  ctaHref: "#two-d-drafting-page-contact",
};

export const twoDDraftingAdvantagesCards = [
  {
    title: "Clear Visualization of Design Intent",
    text: "2D drafting turns floor plans, elevations, and sections into a shared reference every stakeholder can read the same way. This shared reference cuts confusion before construction begins.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Better Design Communication",
    text: "Consistent 2D drawings give architects, engineers and contractors one common reference point. The common language cuts down on back and forth questions and keeps teams aligned during each phase.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Early Error Detection",
    text: "Organized 2D documentation helps your team find clashes during design. Detecting issues early reduces rework and results in fewer RFIs.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Fast-Tracked Construction Documentation",
    text: "Organized drafting helps get construction documents out faster, so your team can get them out faster for approval and coordinate work on the job site better, with less delays and questions from contractors.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Adherence to Code and Standards",
    text: "Drawings made using a consistent drafting process that adhere to the codes and conventions your project requires. Standardized sheets mean no matter what, reliable from first draft to final version.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Lower Cost, Faster Business Decisions",
    text: "Drafting clearly helps to reduce revision cycles, enabling your team to make decisions faster and control overall project delivery costs from end to end.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
];

export const twoDDraftingEngagementModelsSection = {
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
  stackTitle: false,
  description:
    "Whether you need project-based BIM support, a dedicated remote team, or a fully managed global delivery center, our engagement models are designed to scale with your business.",
  descriptionMaxWidth: 750,
  note: {
    text: "Every strategic partnership begins with one successful project. Each engagement helps us understand your practice more deeply, making every future collaboration faster, smoother, and more valuable.",
  },
};

export const twoDDraftingEngagementModelsCards = [
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
    ctaHref: "#two-d-drafting-page-contact",
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

export const twoDDraftingProjectCta = {
  titleLine1: "Ready to Add Drafting Capacity Without ",
  titleLine2: "the Hiring Headache?",
  description:
    "Talk to a 2D drafting expert today and find out how an AI-powered workflow can help your team hit deadlines with less mistakes and rework.",
  cta: "Contact Us",
  ctaHref: "#two-d-drafting-page-contact",
};

export const twoDDraftingIndustriesIntro = {
  titleLine1: "Industries We Support with ",
  titleLine2: "2D Drafting Services",
  titleMaxWidth: 780,
  descriptionMaxWidth: 802,
  description:
    "From iconic high-rises to large-scale infrastructure, our Architectural 2D Drafting Services empower diverse industries with smart, scalable solutions tailored to their unique project goals and challenges.",
};

export const twoDDraftingResourcesSection = acsServicePagesResourcesSection;

export const twoDDraftingTestimonialsDescription =
  "Client stories set out how our BIM solutions reduced costs improved coordination and sped project delivery by way collaboration";

export const twoDDraftingFaqSection = {
  tag: "FAQs",
  description:
    "Everything you need to know about 2D drafting services, project requirements, workflows and deliverables.",
};

export const twoDDraftingFaqs = [
  {
    q: "What is 2D Drafting Services?",
    a: "2D Drafting Services offers the creation of accurate technical drawings including plans, elevations and sections that outline the design intent of a project. These drawings are the basis of construction documents and permitting.",
  },
  {
    q: "Who can benefit from 2D Drafting Services?",
    a: "Architecture firms, structural engineers, contractors, and developers who need scalable drafting capacity without hiring full-time staff. Teams facing deadline pressure, permit submissions, or documentation backlogs benefit the most.",
  },
  {
    q: "What's different about Virtual Building Studio's 2D Drafting Services?",
    a: "Our pre-vetted, US-trained architects and engineers deliver AI-assisted drafting that follows your templates, standards, and US code requirements. You get faster turnaround, fewer revisions, and drafters who integrate into your existing tools and workflows.",
  },
  {
    q: "Can I hire dedicated architects to provide ongoing drafting support?",
    a: "Yes. Through our dedicated resource and strategic partnership models, you can add dedicated architects who work as an extension of your team for ongoing project pipelines and long-term production support.",
  },
  {
    q: "How do you guarantee the quality of your drawings?",
    a: "Every sheet goes through structured QA/QC checks before delivery. We align to your CAD standards, layer conventions, and dimensioning rules, then review for code compliance, completeness, and coordination before handover.",
  },
];

export const twoDDraftingContactDescription =
  "Let's discuss your 2D drafting requirements and see how our team can expand your documentation capacity.";
