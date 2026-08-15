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

/** Temporary shared photo until as-built-drafting-specific assets are ready. */
export const asBuiltDraftingPlaceholderImage = "/image/commercial-mixed-use.png";

export const asBuiltDraftingStatsStrip = [
  { value: "4000+", color: "text-vbs-red", label: "Projects Delivered" },
  { value: "300+", color: "text-vbs-green", label: "Global Clients" },
  { value: "11+", color: "text-vbs-yellow", label: "Years of Experience" },
  { value: "500+", color: "text-vbs-blue", label: "US-trained Architects & Engineers" },
];

export const asBuiltDraftingHero = {
  tag: "As-built Drafting",
  titleLead: "As-Built Drafting Services for ",
  titleAccent: "Renovation, Compliance and Facility Records",
  description:
    "Old drawings stop matching the building as work moves forward. Our BIM experts use AI-assisted workflows to produce reliable as-built drawings, fast and code-ready.",
  ctaLabel: "Connect With Us",
  imageSrc: asBuiltDraftingPlaceholderImage,
  imageAlt: "As-Built Drafting Services",
  copyMaxWidth: 670,
  descriptionMaxWidth: 670,
  titleMaxWidth: 657,
};

export const asBuiltDraftingIntro = {
  tag: "Overview",
  titleLead: "As Built Services Company for Reliable ",
  titleAccent: "Records for Every Built Structure",
  titleStacked: false,
  titleMaxWidth: 912,
  descriptionMaxWidth: 844,
  description:
    "Field-verified As Built Documentation keeps your team working from one reliable source. It improves coordination, speeds up approvals and protects delivery timelines on every active project.",
  sideDescription:
    "At Virtual Building Studio, our BIM experts delivers as-built services using AI-assisted workflows. This combination adds drafting capacity, cuts rework from outdated drawings and improves coordination across disciplines. Your team stays focused on core project work.",
  featuresTitle: "Pre-Vetted As-Built Drafting Experts Ready to Support Your Firm",
  features: [
    "Full site verification through final drawing delivery, covering every drawing type your project needs.",
    "Drawings are prepared as per IBC, ADA and local AHJ codes for permits and compliance reviews.",
    "Modeling and drafting done in Revit, AutoCAD and Navisworks for coordinated output.",
    "Model sharing and reviews run through BIM 360 and ACC for real time collaboration.",
    "Multi stage QA and QC checks catch dimensional errors before drawings reach your desk.",
    "Outputs include plans, elevations, sections, schedules and BIM models in RVT, DWG and PDF formats.",
  ],
  mainImage: asBuiltDraftingPlaceholderImage,
  imageAlt: "As-built drafting overview",
};

export const asBuiltDraftingOurClientsSection = {
  tag: "Our Clients",
  titleLead: "Trusted by",
  titleAccent: "Top AEC Firms",
  titleAccentFirst: false,
  breakTitle: true,
  descriptionMaxWidth: 504,
  description:
    "We provide as-built drafting services for architects, designers and construction professionals on all project types and workflows.",
};

export const asBuiltDraftingServicesSection = {
  tag: "Our Services",
  titleLine1: "Our Complete Suite of ",
  titleLine2: "As-Built Drafting Services",
  titleMaxWidth: 711,
  descriptionMaxWidth: 705,
  description:
    "Our as built drawings support spans verification, drafting and compliance documentation. It gives your team a reliable record from renovation planning through facility handover.",
  ctaLabel: "Let's Talk Now",
  ctaHref: "#as-built-drafting-page-contact",
  wideCards: true,
};

export const asBuiltDraftingServiceCards = [
  {
    title: "Architectural As-built Drawings",
    text: "Our crew visits the site to see if it fits with the original plans. Drawing plans, sections and elevations are amended to reflect how the arrangement of walls, finishes and rooms looks now.",
    image: asBuiltDraftingPlaceholderImage,
  },
  {
    title: "Structural As-built Drawings",
    text: "The sizes of beams, locations of columns and other construction details are verified according to existing field conditions. The updated structural plans will provide engineers and contractors with a good reference for future repair or building works.",
    image: asBuiltDraftingPlaceholderImage,
  },
  {
    title: "BOMA Area Calculation",
    text: "Both gross and rentable areas are estimated according to BOMA standards for leasing and assessing values. These calculations provide assistance to such people as property managers, brokers, and owners in the process of lease negotiating.",
    image: asBuiltDraftingPlaceholderImage,
  },
  {
    title: "As-Built for Permits & Compliance",
    text: "The drawings are done in order to provide proof of the actual conditions of the site for building permits submission and code inspection. This documentation allows the building department to make sure everything complies with the requirements of IBC and ADA.",
    image: asBuiltDraftingPlaceholderImage,
  },
  {
    title: "Renovation & Retrofit As-Built Documentation",
    text: "The original conditions are documented before the renovation or retrofit process. The modified drawings provide designers with a good basis for their work before it begins.",
    image: asBuiltDraftingPlaceholderImage,
  },
  {
    title: "Facility Management As-Built Drawings",
    text: "Coordinated as built drawings are provided to assist facility teams in asset management after the project handover. These drawings are useful for planning maintenance activities, tracking space usage and for facilitating operations.",
    image: asBuiltDraftingPlaceholderImage,
  },
];

export const asBuiltDraftingAiBimWorkflowSection = {
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
  posterSrc: asBuiltDraftingPlaceholderImage,
};

export const asBuiltDraftingWhyChooseSection = {
  tag: "Why Choose Us",
  titleLead: "Why Choose Us for ",
  titleAccent: "As Built Drawing Services?",
  description:
    "We are the most reliable as built drafting services provider in the USA that gives you access to expert drafters and uses deep code knowledge and years of AEC drafting expertise to deliver services.",
  descriptionMaxWidth: 780,
  ctaLabel: "Start New Project",
  ctaHref: "#as-built-drafting-page-contact",
};

export const asBuiltDraftingWhyChooseItems = [
  {
    prefix: "0",
    suffix: "1",
    prefixColor: "#D70416",
    title: "On-Demand Team Available In 24 Hours",
    description:
      "Access to experienced CAD drafters within 24 hours for quick workload spikes, project deadlines and resource shortages.",
  },
  {
    prefix: "0",
    suffix: "2",
    prefixColor: "#42AA32",
    title: "US Code-Compliant Real Time Delivery",
    description:
      "Get your as-built drafts and drawings in real time per US codes, standards and whatever your project needs, all while ensuring smooth communication and teamwork throughout the entire process.",
  },
  {
    prefix: "0",
    suffix: "3",
    prefixColor: "#2299D6",
    title: "30% Greater Efficiency with AI-Driven Workflow",
    description:
      "Our drafting team is using AI-assisted checks to catch errors early. This means 30% more efficiency in the workflow process so drawings move through QC faster and get to you sooner.",
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

export const asBuiltDraftingWorkflowIntegrateSection = {
  tag: "Workflow",
  titleParts: [
    {
      text: "Our Process Flow for ",
      className: "text-section font-medium text-[#111111]",
    },
    {
      text: "As Built Documentation",
      className: "text-section text-accent font-light",
    },
  ],
  description:
    "Every as-built project moves through defined 4 stages, from site data intake to final QC. Each step keeps your drawings reliable and on schedule.",
  note: {
    text: 'Our process is designed to get your projects moving quickly. We don\'t wait until onboarding is "finished" to create value—we begin production as soon as the essential alignment is complete and continue improving the partnership with every project.',
  },
  centerLogo: workflowLogo,
};

export const asBuiltDraftingWorkflowIntegrateSteps = [
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

export const asBuiltDraftingTechnologyStackSection = {
  tag: "Tools & Platforms",
  titleLine1: "We Use to Deliver ",
  titleAccent: "As-Built Drafting Services",
  description:
    "Leveraging industry-leading BIM software to create accurate, coordinated, and constructible as-built drawings and models for complex projects.",
};

export const asBuiltDraftingTechnologyStackToolsRowOne: MepBimTechnologyTool[] =
  mepBimTechnologyStackToolsRowOne;

export const asBuiltDraftingTechnologyStackToolsRowTwo: MepBimTechnologyTool[] =
  mepBimTechnologyStackToolsRowTwo;

export const asBuiltDraftingAdvantagesSection = {
  tag: "Advantages",
  titleLine1: "Advantages of Outsourcing ",
  titleLine2: "as Built Drafting Services",
  titleMaxWidth: 819,
  descriptionMaxWidth: 669,
  description:
    "Outsourced as built drafting frees your in-house team from repetitive fieldwork documentation. You get reliable as-builts without pulling designers off active project.",
  ctaLabel: "Contact Now",
  ctaHref: "#as-built-drafting-page-contact",
};

export const asBuiltDraftingAdvantagesCards = [
  {
    title: "Verified Site Conditions",
    text: "Each as-built drawing is a true picture of the field conditions, not the assumptions of the old plans. This will reduce planning errors for renovation, retrofit or facility management.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Stronger Team Coordination",
    text: "Architects, engineers and contractors operate from one up-to-date record instead of conflicting drawings. This common source keeps all disciplines in sync during the project.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Code and Permit Compliance",
    text: "Updated as-built documentation helps you get permits and pass code reviews without delay. Building departments get the reliable records they need to confirm compliance.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Clearer Visualization for Project Participants",
    text: "Property owners and other project teams use coordinated as-built drawings to understand the actual site condition. This allows for faster decisions when planning renovation and expansion.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Complete Documentation for Handover",
    text: "Facility teams gets drawing sets and models for long term building operations. This documentation is used to plan maintenance and future rebuilding operations.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Lower Rework and Data Costs",
    text: "Reliable as-built records eliminate the guesswork that leads to change orders and rework. Your team saves time and budget during the project life cycle.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
];

export const asBuiltDraftingEngagementModelsSection = {
  tag: "Engagement Models",
  stackTitle: false,
  titleParts: [
    {
      text: "Flexible Engagement Models Built Around\u00a0",
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

export const asBuiltDraftingEngagementModelsCards = [
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
    ctaHref: "#as-built-drafting-page-contact",
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

export const asBuiltDraftingProjectCta = {
  titleLine1: "Your Building Changed. ",
  titleLine2: "Let's Get the Drawings to Match.",
  description:
    "Your team deserves drawings that match reality on site. Let's set up a dedicated as-built drafting team that keeps pace with your projects.",
  cta: "Contact Us",
  ctaHref: "#as-built-drafting-page-contact",
};

export const asBuiltDraftingIndustriesIntro = {
  titleLine1: "Industries We Support with ",
  titleLine2: "As Built services",
  titleMaxWidth: 858,
  description:
    "From iconic high-rises to large-scale infrastructure, our as built drawing services empower diverse industries with smart, scalable solutions tailored to their unique project goals and challenges.",
};

export const asBuiltDraftingResourcesSection = acsServicePagesResourcesSection;

export const asBuiltDraftingTestimonialsDescription =
  "Client stories set out how our drafting expertise reduced costs, improved coordination and sped project delivery through collaboration.";

export const asBuiltDraftingFaqSection = {
  tag: "FAQs",
  description:
    "Everything you need to know about as-built drafting services, project requirements, workflows and deliverables.",
};

export const asBuiltDraftingFaqs = [
  {
    q: "What does an as-built drafting provider deliver?",
    a: "We deliver updated architectural and structural drawings, Revit models and BOMA area calculations that reflect real site conditions. Formats include RVT, DWG, IFC and PDF for every project.",
  },
  {
    q: "How do you capture site conditions for as-built drawings?",
    a: "We verify existing field conditions against original plans, then update plans, sections and elevations so walls, finishes, rooms, beams and columns match what is on site before drawings are issued.",
  },
  {
    q: "What file formats do you deliver for as-built drawing services?",
    a: "Deliverables include plans, elevations, sections, schedules and BIM models in RVT, DWG, IFC and PDF so your team can use the records across design, permitting and facility workflows.",
  },
  {
    q: "How fast can you start an as-built drafting engagement?",
    a: "Experienced CAD drafters can join within 24 hours for workload spikes, project deadlines and resource shortages. Production begins as soon as essential alignment is complete.",
  },
  {
    q: "How do you guarantee the quality of your drawings?",
    a: "Multi-stage QA and QC checks catch dimensional errors before drawings reach your desk. Drawings are prepared to IBC, ADA and local AHJ requirements for permits and compliance reviews.",
  },
];

export const asBuiltDraftingContactDescription =
  "Tell us about your as-built drafting needs. Our BIM experts will help you produce drawings that match current site conditions for renovation, compliance and facility records.";
