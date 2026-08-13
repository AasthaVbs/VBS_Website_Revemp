import autoCadDraftingOverviewImg from "@/assets/images/auto-cad-drafting-services-overview.jpg";
import cadConversionImg from "@/assets/images/cad-conversion.jpg";
import cadDraftingBannerImg from "@/assets/images/cad-drafting-services-banner.jpg";
import twoDAndThreeDCadDraftingImg from "@/assets/images/2d-and-3d-cad-drafting.jpg";
import incorporateRedlineMarkupImg from "@/assets/images/incorporate-redline-and-markup.jpg";
import permitConstructionDrawingSetsImg from "@/assets/images/permit-and-construction-drawing-sets.jpg";
import architecturalCadDraftingServicesImg from "@/assets/images/architectural-cad-drafting-services.jpg";
import structuralCadDraftingServicesImg from "@/assets/images/structural-cad-drafting-services.jpg";
import facadeCadDraftingServicesImg from "@/assets/images/facade-cad-drafting-services.jpg";
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

export const cadDraftingStatsStrip = [
  { value: "4000+", color: "text-vbs-red", label: "Projects Delivered" },
  { value: "300+", color: "text-vbs-green", label: "Global Clients" },
  { value: "11+", color: "text-vbs-yellow", label: "Years of Experience" },
  { value: "500+", color: "text-vbs-blue", label: "US-trained Architects & Engineers" },
];

export const cadDraftingHero = {
  tag: "CAD Drafting",
  titleLead: "Expert CAD Drafting Services to Cut Down on ",
  titleAccent: "Repetitive Drafting Time",
  description:
    "Our pre-vetted, US-trained CAD drafters will take care of detailed CAD drawing and AutoCAD drafting services for you so your design team can concentrate on core work.",
  ctaLabel: "Connect With Us",
  imageSrc: cadDraftingBannerImg,
  imageAlt: "CAD Drafting Services",
  copyMaxWidth: 670,
  descriptionMaxWidth: 670,
};

export const cadDraftingIntro = {
  tag: "Overview",
  titleLead: "CAD Drafting Company Designed for ",
  titleAccent: "Speed, Standards and Scale",
  titleStacked: false,
  titleMaxWidth: 800,
  description:
    "When you work with a trusted CAD drafting company, you'll see a change in how your team handles documentation, coordination and delivery. Increases productivity, speeds up drawings and keeps on schedule.",
  sideDescription:
    "Virtual Building Studio is a CAD drafting outsourcing service provider to AEC firms across the USA. Our AutoCAD drafting experts will boost your production capacity and cut down rework. Your team also improves coordination and reduces time spent on core design work.",
  featuresTitle: "Pre-vetted CAD Drafting Professionals For Your Firm",
  features: [
    "CAD drafting services for architecture, structural and MEP disciplines, from start to finish",
    "Code-compliant drawings that meet local US building codes and ADA standards",
    "AutoCAD Drawing Services and drafting support in AutoCAD, Revit and other AEC software your team already uses",
    "Collaborate live on the tools you prefer, from Slack to Asana",
    "QA/QC checks are built into every drawing before it gets to your desk",
    "Deliverables from redlines, to permit sets, to full construction documentation",
  ],
  mainImage: autoCadDraftingOverviewImg,
  imageAlt: "CAD Drafting overview",
};

export const cadDraftingOurClientsSection = {
  tag: "Our Clients",
  titleLead: "Trusted by",
  titleAccent: "Top AEC Firms",
  titleAccentFirst: false,
  breakTitle: true,
  titleMaxWidth: 450,
  description:
    "We provide CAD drafting services for architects, designers and construction professionals on all project types and workflows.",
};

export const cadDraftingServicesSection = {
  tag: "Our Services",
  titleLine1: "Our Complete Suite of ",
  titleLine2: "AutoCAD Drafting Services",
  description:
    "Let our licensed drafters help you with your project from initial concept sketches to fully detailed construction documents and CAD drawings ready for permits.",
  ctaLabel: "let's Talk Now",
  ctaHref: "#cad-drafting-page-contact",
  wideCards: true,
};

export const cadDraftingServiceCards = [
  {
    title: "CAD Conversion",
    text: "We transform hand sketches, paper drawings, PDFs and scanned images into editable DWG or DXF files. All outputs preserve your layers, dimensions and title blocks for smooth handoffs.",
    image: cadConversionImg.src,
    href: ROUTES.pdfToCad,
  },
  {
    title: "2D and 3D CAD Drafting",
    text: "Our team provides 2D & 3D CAD drawing services throughout all phases of the project from concept to construction. We also deliver clean 2D plans and sections from complex 3D models.",
    image: twoDAndThreeDCadDraftingImg.src,
    href: ROUTES.twoDDrafting,
  },
  {
    title: "Incorporate Redline and Markup",
    text: "We are incredibly careful with every detail when we update redlines and markups. We ensure annotation standards and version control are consistent, so the intent of your project remains clear with our AutoCAD drafting services.",
    image: incorporateRedlineMarkupImg.src,
  },
  {
    title: "Permit & Construction Drawing Sets",
    text: "We prepare full permit-ready and construction documentation sets that meet US codes and local jurisdiction rules. When you outsource CAD drafting services in the USA to us, drawings pass inspection the first time.",
    image: permitConstructionDrawingSetsImg.src,
  },
  {
    title: "Architectural CAD Drafting Services",
    text: "We handle CAD drawing services for residential, commercial and industrial architecture projects. Deliverables include floor plans, sections, elevations and reflected ceiling plans built to your templates and codes.",
    image: architecturalCadDraftingServicesImg.src,
    href: ROUTES.architecturalDrafting,
  },
  {
    title: "Structural CAD Drafting Services",
    text: "From framing plans to reinforcement detailing, our AutoCAD drafting services support structural engineers with clean, coordinated drawings. Every sheet integrates smoothly with your architectural and MEP sets.",
    image: structuralCadDraftingServicesImg.src,
  },
  {
    title: "Facade CAD Drafting Services",
    text: "Our facade drafting team supports curtain wall and cladding systems with shop drawings, fabrication details and panel layouts. We give complex facade projects the CAD drafting support they need.",
    image: facadeCadDraftingServicesImg.src,
  },
];

export const cadDraftingAiBimWorkflowSection = {
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

export const cadDraftingWhyChooseSection = {
  tag: "Why Choose Us",
  titleLead: "Why Choose Us to Outsource ",
  titleAccent: "CAD Drafting Services",
  description:
    "We are the most reliable CAD drafting service provider, built on expert drafters, deep code knowledge, and years of AEC drafting expertise.",
  ctaLabel: "Start New Project",
  ctaHref: "#cad-drafting-page-contact",
};

export const cadDraftingWhyChooseItems = [
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

export const cadDraftingWorkflowIntegrateSection = {
  tag: "Workflow",
  titleParts: [
    {
      text: "Our Process Flow for ",
      className: "text-section font-medium text-[#111111] capitalize",
    },
    {
      text: "CAD Drafting Services",
      className: "text-section text-accent font-light capitalize",
    },
  ],
  description:
    "For each project, we follow a systematic 4 step process from initial scope to final delivery, with clear checkpoints at each stage.",
  note: {
    text: 'Our process is designed to get your projects moving quickly. We don\'t wait until onboarding is "finished" to create value—we begin production as soon as the essential alignment is complete and continue improving the partnership with every project.',
  },
  centerLogo: workflowLogo,
};

export const cadDraftingWorkflowIntegrateSteps = [
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

export const cadDraftingEngagementModelsSection = {
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
    "Whether you need project-based CAD drafting support, a dedicated remote team, or a fully managed global delivery center, our engagement models are designed to scale with your business.",
  note: {
    text: "Every strategic partnership begins with one successful project. Each engagement helps us understand your practice more deeply, making every future collaboration faster, smoother, and more valuable.",
  },
};

export const cadDraftingEngagementModelsCards = [
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
    ctaHref: "#cad-drafting-page-contact",
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

export const cadDraftingTechnologyStackSection = {
  tag: "Tools & Platforms",
  titleLine1: "We Use to Deliver ",
  titleAccent: "CAD Drafting Services",
  description:
    "Leveraging industry-leading BIM software to create accurate, coordinated, and constructible MEP models for complex projects.",
};

export const cadDraftingTechnologyStackToolsRowOne: MepBimTechnologyTool[] =
  mepBimTechnologyStackToolsRowOne;

export const cadDraftingTechnologyStackToolsRowTwo: MepBimTechnologyTool[] =
  mepBimTechnologyStackToolsRowTwo;

export const cadDraftingAdvantagesSection = {
  tag: "Advantages",
  titleParts: [
    {
      text: "Advantages of ",
      className: "text-section font-medium text-[#111111]",
    },
    {
      text: "CAD Drafting Outsourcing Services",
      className: "text-section text-accent font-light",
    },
  ],
  titleLine1: "Advantages of ",
  titleLine2: "CAD Drafting Outsourcing Services",
  titleMaxWidth: 700,
  descriptionMaxWidth: 880,
  description:
    "Outsourcing CAD drafting work allows AEC firms to improve drawing quality, reduce rework and accelerate delivery without increasing full-time headcount to their payroll.",
  ctaLabel: "Contact Now",
  ctaHref: "#cad-drafting-page-contact",
};

export const cadDraftingAdvantagesCards = [
  {
    title: "Error-Free and Cleaner Drawings",
    text: "Manual errors are reduced since our drafters maintain clean linework, standard layer control and reliable scaling with CAD software. The quality of the drawing is consistent throughout the project.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Better Team Collaboration",
    text: "Digital drawings provide markups, redlines, and version control to your entire team in real-time. Everyone works from the same file, so approvals are quicker and there's less conflict.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Full Code and Standards Compliance",
    text: "Every project is drafted in accordance with local building codes, ADA requirements and your individual CAD standards. This helps to prevent rejections and to speed up the review of permits.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Transparent 3D to 2D Visualization",
    text: "Our team extracts clean 2D drawings from your 3D models so design intent is visible at every stage. This makes the handoff from design to construction easier.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Organized Digital Record Keeping",
    text: "CAD files give your team a centralized, searchable way to store and track drawings. This provides retrieval, versioning and updates during the building lifecycle.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Less Overhead & Better Cost Control",
    text: "When you outsource CAD drafting services, you save money on hiring, training and managing an in-house team. This preserves quality, at no extra fixed overhead to you.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
];

export const cadDraftingEngagementDescription =
  "Whether you need project-based CAD drafting support, a dedicated remote team, or a fully managed global delivery center, our engagement models are designed to scale with your business.";

export const cadDraftingProjectCta = {
  titleLine1: "Ready to Take ",
  titleLine2: "Drafting Off Your Plate?",
  description:
    "Connect with our CAD drafting team today and see how fast, code-compliant drawings free up time for higher value design work.",
  cta: "Contact Us",
  ctaHref: "#cad-drafting-page-contact",
};

export const cadDraftingIndustriesIntro = {
  titleLine1: "Industries We Support with ",
  titleLine2: "CAD Drafting Expertise",
  titleMaxWidth: 706,
  descriptionMaxWidth: 790,
  description:
    "From iconic high-rises to large-scale infrastructure, our CAD drawing services empower diverse industries with smart, scalable solutions tailored to their unique project goals and challenges.",
};

export const cadDraftingResourcesSection = acsServicePagesResourcesSection;

export const cadDraftingTestimonialsDescription =
  "Client stories set out how our drafting expertise reduced costs, improved coordination and sped project delivery through collaboration.";

export const cadDraftingFaqSection = {
  tag: "FAQs",
  description:
    "Everything you need to know about CAD drafting services, project requirements, workflows, and deliverables.",
};

export const cadDraftingFaqs = [
  {
    q: "Do you deliver CAD drawings directly?",
    a: "No. We do not deliver CAD drawings as just a service. We give you access to expert CAD drafters who join your team and follow your standards, templates and existing workflows closely.",
  },
  {
    q: "What kind of CAD drafting professionals do you offer?",
    a: "We provide US-trained CAD drafters experienced across architectural, structural, and MEP documentation — including AutoCAD, Revit support, permit sets, redlines, and construction documentation.",
  },
  {
    q: "Can your drafters work on our internal systems and templates?",
    a: "Yes. Our drafters work inside your preferred platforms, layer standards, title blocks, and templates so deliverables match your office conventions from day one.",
  },
  {
    q: "Can we bring on your drafters on a short-term basis?",
    a: "Yes. Flexible engagement models support short-term surge capacity, pilot projects, and longer dedicated-resource arrangements based on your pipeline.",
  },
  {
    q: "How do your drafters communicate with our in-house team?",
    a: "Drafters communicate through your existing channels — Slack, Asana, email, or project management tools — so coordination stays inside your current workflow.",
  },
];

export const cadDraftingContactDescription =
  "Tell us about your CAD drafting scope, standards, and delivery timeline. Our team will align the right US-trained CAD drafters for your firm.";
