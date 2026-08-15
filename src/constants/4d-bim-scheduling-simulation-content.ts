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

export const fourDBimSchedulingStatsStrip = [
  { value: "4000+", color: "text-vbs-red", label: "Projects Delivered" },
  { value: "300+", color: "text-vbs-green", label: "Global Clients" },
  { value: "11+", color: "text-vbs-yellow", label: "Years of Experience" },
  { value: "500+", color: "text-vbs-blue", label: "US-trained Architects & Engineers" },
];

export const fourDBimSchedulingHero = {
  tag: "4D BIM Services",
  titleLead: "4D BIM Services for \nFirms Struggling with ",
  titleAccent: "Construction Scheduling",
  description:
    "Tight schedules and last-minute changes slow construction down. Our BIM experts use an AI-powered workflow to produce reliable 4D BIM Scheduling Services.",
  ctaLabel: "Connect With Us",
  imageSrc: "/image/4d-bim-service-banner.jpg",
  imageAlt: "4D BIM Scheduling Simulation Services",
  copyMaxWidth: 670,
  descriptionMaxWidth: 670,
};

export const fourDBimSchedulingIntro = {
  tag: "Overview",
  titleLead: "Turning Design Models into ",
  titleAccent: "Reliable Construction Schedules",
  titleStacked: true,
  titleMaxWidth: 812,
  description:
    "Our 4D BIM Modeling Services link design and structural elements to project schedules. This helps teams improve productivity, coordination, reliability and project timelines from day one.",
  sideDescription:
    "Project schedules work better when every activity connects with the BIM model. As a trusted 4D BIM Company in the USA our BIM experts use AI powered workflows to increase production capacity and cut rework. This improves coordination, so your team stays focused on core project work.",
  featuresTitle:
    "Pre-Vetted 4D BIM Experts and AI-assisted workflows Ready to Support Your Firm",
  features: [
    "End-to-end 4D BIM Scheduling Services from model setup to sequence validation",
    "US code-compliant workflows aligned with IBC, ADA and AHJ scheduling logic",
    "Expertise in Revit, Navisworks, Synchro Pro, BIM 360/ACC, etc.",
    "Shared schedules across architects, engineers and contractors",
    "Milestone-based schedule reviews before every delivery",
    "4D simulations, sequence videos, schedule-linked models and reports",
  ],
  mainImage: "/image/4d-bim-service-overview.jpg",
  imageAlt: "4D BIM scheduling overview",
};

export const fourDBimSchedulingOurClientsSection = {
  tag: "Our Clients",
  titleAccent: "Trusted by",
  titleLead: " Leading AEC Firms",
  description:
    "Our BIM Family Creation Services support architecture, structural engineering, and construction teams across many project types and workflows.",
};

export const fourDBimSchedulingServicesSection = {
  tag: "Our Services",
  titleLine1: "Our Comprehensive Range of ",
  titleLine2: "BIM 4D Modeling Services",
  description:
    "From early design coordination through construction handover, our 4D BIM Simulation Services keep project schedules aligned at every stage.",
  ctaLabel: "Let's Talk Now",
  ctaHref: "#four-d-bim-scheduling-page-contact",
  wideCards: true,
};

export const fourDBimSchedulingServiceCards = [
  {
    title: "Structural Erection Sequencing",
    text: "Our structural team sequences steel, concrete and precast erection stages inside the model. This shows crews the safest and fastest installation order for every phase.",
    image: "/image/structural-erection-sequencing.jpg",
  },
  {
    title: "Site Logistics & Temporary Works Planning",
    text: "Site activities required careful planning to avoid delays and safety issues. We create 4D visualizations. This helps site teams plan access, storage, and safety zones without delays.",
    image: "/image/site-logistics-temporary-works-planning.jpg",
  },
  {
    title: "Schedule Integration in BIM",
    text: "We connect your Primavera or MS Project schedule directly to the coordinated model. This keeps every task, milestone and update linked to the right element.",
    image: "/image/schedule-integration-in-bim.jpg",
  },
  {
    title: "Spatial-Temporal Clash Detection",
    text: "We check the model for clashes that only appear at specific points in the schedule. This catches sequencing conflicts that standard clash detection misses entirely.",
    image: "/image/spatial-temporal-clash-detection.jpg",
  },
  {
    title: "Planned vs. Actual Progress Monitoring",
    text: "We compare your planned 4D sequence against real site progress on a regular basis. This gives your team early warning when work starts falling behind schedule.",
    image: "/image/planned-vs-actual-progress-monitoring.jpg",
  },
];

export const fourDBimSchedulingAiBimWorkflowSection = {
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
  posterSrc: "/image/4d-bim-service-banner.jpg",
};

export const fourDBimSchedulingWhyChooseSection = {
  tag: "Why Choose Us",
  titleLead: "Why Choose Us for ",
  titleAccent: "4D BIM Simulation Services?",
  description:
    "We pair BIM experts with AI driven workflows to deliver reliable 4D BIM Services faster. This gives your firm a single trusted scheduling partner.",
  descriptionMaxWidth: 592,
  ctaLabel: "Start New Project",
  ctaHref: "#four-d-bim-scheduling-page-contact",
};

export const fourDBimSchedulingWhyChooseItems = [
  {
    prefix: "0",
    suffix: "1",
    prefixColor: "#D70416",
    title: "On-Demand Team Ready in 24 Hours",
    description:
      "Get access to experienced BIM professionals within 24 hours to quickly address workload spikes, project deadlines and resource shortages.",
  },
  {
    prefix: "0",
    suffix: "2",
    prefixColor: "#42AA32",
    title: "US Code-Compliant Delivery in Realtime",
    description:
      "Get your 4D Construction Simulation in realtime, all while sticking to US codes, standards and whatever your project needs, making sure smooth communication and teamwork throughout the process.",
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

export const fourDBimSchedulingWorkflowIntegrateSection = {
  tag: "Workflow",
  titleParts: [
    {
      text: "Our Process Flow for ",
      className: "text-section font-medium text-[#111111] capitalize",
    },
    {
      text: "4D Construction Scheduling",
      className: "text-section text-accent font-light capitalize",
    },
  ],
  description:
    "Every 4D BIM Scheduling Services engagement follows a clear, repeatable process. It moves from model setup to final schedule validation without confusion.",
  note: {
    text: 'Our process is designed to get your projects moving quickly. We don\'t wait until onboarding is "finished" to create value—we begin production as soon as the essential alignment is complete and continue improving the partnership with every project.',
  },
  centerLogo: workflowLogo,
};

export const fourDBimSchedulingWorkflowIntegrateSteps = [
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

export const fourDBimSchedulingTechnologyStackSection = {
  tag: "Tools & Platforms",
  titleLine1: "We Use to Deliver ",
  titleAccent: "4D BIM Scheduling Services",
  description:
    "Leveraging industry-leading BIM software to create accurate, coordinated, and constructible MEP models for complex projects.",
};

export const fourDBimSchedulingTechnologyStackToolsRowOne: MepBimTechnologyTool[] =
  mepBimTechnologyStackToolsRowOne;

export const fourDBimSchedulingTechnologyStackToolsRowTwo: MepBimTechnologyTool[] =
  mepBimTechnologyStackToolsRowTwo;

export const fourDBimSchedulingAdvantagesSection = {
  tag: "Advantages",
  titleLine1: "Advantages of Outsourcing ",
  titleLine2: "Construction Scheduling Services",
  titleMaxWidth: 834,
  descriptionMaxWidth: 880,
  description:
    "Outsourcing 4D BIM Scheduling Services gives your firm clearer construction timelines. It brings fewer coordination errors and stronger client confidence at every milestone.",
  ctaLabel: "Contact Now",
  ctaHref: "#four-d-bim-scheduling-page-contact",
};

export const fourDBimSchedulingAdvantagesCards = [
  {
    title: "Fewer Sequencing Errors",
    text: "4D construction simulation catches sequencing errors before they reach the job site. This helps your team to avoid costly rework and schedule slippage down the line.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Stronger Coordination",
    text: "Integrating design and models to one shared schedule keeps every trade working from the same sequence. This cuts miscommunication between design and construction teams daily.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Built-In Compliance",
    text: "Our 4D BIM Company in the USA builds schedules that respect permit timelines, inspection windows and AHJ requirements. This keeps your project compliant from day one.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Clearer Visualization",
    text: "4D BIM Modeling Services turn complex construction sequences into clear visuals. Owners, architects and contractors then understand exactly what happens at each construction phase early.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Stronger Documentation",
    text: "Every 4D construction simulation comes with a fully documented schedule trail. This gives your team a reliable record for approvals, audits and future project planning.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Cost and Data Optimization",
    text: "Detailed 4D BIM Scheduling Services help firms avoid idle labor and reduce material waste. Resource data from the model then supports tighter, more cost-efficient construction schedules overall.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
];

export const fourDBimSchedulingEngagementModelsSection = {
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

export const fourDBimSchedulingEngagementModelsCards = [
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
    ctaHref: "#four-d-bim-scheduling-page-contact",
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

export const fourDBimSchedulingProjectCta = {
  titleLine1: "Looking for a Faster Way to ",
  titleLine2: "Scale Your BIM Production?",
  description:
    "Add experienced BIM experts to your team and keep construction planning, scheduling, and coordination moving without slowing down your internal resources.",
  cta: "Contact Us",
  ctaHref: "#four-d-bim-scheduling-page-contact",
};

export const fourDBimSchedulingIndustriesIntro = {
  titleLine1: "Industries We Support with ",
  titleLine2: "4D BIM Services",
  titleMaxWidth: 706,
  description:
    "Delivering accuracy driven BIM solutions tailored to the unique requirements of every construction sector we serve.",
};

export const fourDBimSchedulingResourcesSection = acsServicePagesResourcesSection;

export const fourDBimSchedulingTestimonialsDescription =
  "Client stories set out how our BIM expertise reduced costs, improved coordination and sped project delivery through collaboration.";

export const fourDBimSchedulingFaqSection = {
  tag: "FAQs",
  description:
    "Everything you need to know about 4D BIM Services, project requirements, workflows, and deliverables.",
};

export const fourDBimSchedulingFaqs = [
  {
    q: "What are 4D BIM Services?",
    a: "4D BIM Services add construction time data to design and structural models. This shows exactly how a building gets built, phase by phase, before construction starts.",
  },
  {
    q: "How is 4D BIM different from a regular construction schedule?",
    a: "A regular schedule is a list of activities and dates. 4D BIM links those activities to model elements so you can simulate construction sequences, spot conflicts in space and time, and validate logistics before work begins on site.",
  },
  {
    q: "Which scheduling software do you use for 4D BIM Scheduling Services?",
    a: "We work with Primavera P6, Microsoft Project, Synchro Pro, Navisworks, and Autodesk Construction Cloud / BIM 360—matched to your existing tools and delivery standards.",
  },
  {
    q: "Can you work from CAD drawings that have not been converted to BIM yet?",
    a: "Yes. We can convert CAD or PDF drawings into coordinated BIM models first, then build the 4D schedule and simulation from that model so sequencing stays accurate.",
  },
  {
    q: "Can your AI-assisted workflow work with our existing BIM standards?",
    a: "Yes. We align templates, naming, LOD, and QA/QC to your office standards before production starts, then use AI-assisted workflows to accelerate delivery without changing how your team reviews work.",
  },
];

export const fourDBimSchedulingContactDescription =
  "Tell us about your construction schedule challenges. Our 4D BIM experts will help you connect models to reliable sequencing and delivery plans.";
