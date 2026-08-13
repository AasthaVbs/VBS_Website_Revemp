import threeDVisualizationServiceImg from "@/assets/images/3d-visualization-service.jpg";
import bimArchitecturalModelingImg from "@/assets/images/bim-architectural-modeling.jpg";
import bimClashCoordinationImg from "@/assets/images/bim-clash-coordination.jpg";
import bimModelingBannerImg from "@/assets/images/bim-modeling-banner.jpg";
import bimModelingOverviewImg from "@/assets/images/bim-modeling-overview.jpg";
import bimStructuralModelingImg from "@/assets/images/bim-structural-modeling.jpg";
import bimToCadConversionsImg from "@/assets/images/bim-to-cad-conversions.jpg";
import creatingFamiliesRevitImg from "@/assets/images/creating-families-revit.jpg";
import flexibleEngagementModelsIcon from "@/assets/images/flexible-engagement-models.png";
import iconEngageDedicated from "@/assets/images/architecture-services/icon-engage-dedicated.svg";
import iconEngageStrategic from "@/assets/images/architecture-services/icon-engage-strategic.svg";
import workflowLogo from "@/assets/images/architecture-services/workflow-logo.svg";
import lodBasedBimModelingImg from "@/assets/images/lod-based-bim-modeling.jpg";
import shopBuildingDrawingImg from "@/assets/images/shop-building-drawing.jpg";
import { benefitIconColored, benefitIconMuted } from "@/constants/benefit-icons";
import type { MepBimTechnologyTool } from "@/constants/mep-bim-modelling-content";
import {
  mepBimTechnologyStackToolsRowOne,
  mepBimTechnologyStackToolsRowTwo,
} from "@/constants/mep-bim-modelling-content";
import { ROUTES } from "@/constants/navigation";
import { acsServicePagesResourcesSection } from "@/constants/shared-sections";

export const bimModelingStatsStrip = [
  { value: "2000+", color: "text-vbs-red", label: "Projects Delivered" },
  { value: "300+", color: "text-vbs-green", label: "Global Clients" },
  { value: "11+", color: "text-vbs-yellow", label: "Years of Experience" },
  { value: "250+", color: "text-vbs-blue", label: "US-trained Architects & Engineers" },
];

export const bimModelingHero = {
  tag: "BIM Modeling Services",
  titleLead: "BIM Modeling Services for ",
  titleAccent: "Precision-Driven Project Execution",
  description:
    "Our US trained pre-vetted BIM modelers use AI-driven workflow to offer Revit BIM modeling services to meet your needs for compliance, coordination and constructability.",
  ctaLabel: "Contact us Now",
  imageSrc: bimModelingBannerImg,
  imageAlt: "BIM Modeling Services residential visualization",
  copyMaxWidth: 670,
  descriptionMaxWidth: 564,
};

export const bimModelingIntro = {
  tag: "Overview",
  titleLead: "Offering Quality Intelligent ",
  titleAccent: "3D BIM Modeling Services",
  description:
    "Our BIM Outsourcing Services enable architecture, engineering and construction teams to meet growing project demands with accurate models, improved coordination and reliable support throughout all stages of the project.",
  sideDescription:
    "Our BIM Modeling Services in USA offers the expertise you need when tight deadlines, limited resources and coordination issues are causing delays to your project. BIM Modeling Outsourcing helps teams to be productive, accurate and on time.",
  featuresTitle:
    "End-to-End Revit Modeling Services powered by AI workflow and US-trained BIM experts",
  features: [
    "Coordinated Architectural, Structural, and MEPF BIM modeling using Revit, ArchiCAD, and Civil 3D",
    "LOD 100–500 modeling aligned with AIA and BIMForum specifications",
    "Parametric Revit family creation and IFC-compliant components for cross-platform interoperability",
    "Clash detection using Navisworks Manage, Solibri Model Checker, and BIMCollab",
    "Cloud collaboration via Autodesk BIM 360 and ACC",
    "Rule-based checks using Solibri and Dynamo",
    "Automated drawings, quantity take-offs, and schedules via Revit",
    "As-built and FM-ready models compliant with COBie, ISO 19650, and client standards",
  ],
  mainImage: bimModelingOverviewImg,
  imageAlt: "3D BIM modeling services overview",
};

export const bimModelingOurClientsSection = {
  tag: "Our Clients",
  titleAccent: "Trusted by",
  titleLead: " Leading AEC Firms",
  description:
    "Supporting architecture, engineering, construction, and reality capture teams across diverse project types and workflows.",
};

export const bimModelingServicesSection = {
  tag: "Our Services",
  titleLine1: "Our Complete Range of ",
  titleLine2: "BIM Modeling Services",
  description:
    "Our 3D BIM Services provide accuracy, coordination and US standards adherence at all stages of projects from concept to construction documentation.",
  ctaLabel: "Start New Project",
  ctaHref: "#bim-modeling-page-contact",
  wideCards: true,
};

export const bimModelingServiceCards = [
  {
    title: "BIM Architectural Modeling",
    text: "Translate design concepts into intelligent, coordinated Revit models that accurately reflect spatial relationships, design intent, specifications and code requirements for more efficient project execution and documentation.",
    image: bimArchitecturalModelingImg.src,
    href: ROUTES.architecturalBim,
  },
  {
    title: "BIM Structural Modeling",
    text: "Coordinate with architectural and MEP disciplines to develop accurate concrete, steel and precast structural models, minimize clashes and enable efficient construction planning.",
    image: bimStructuralModelingImg.src,
    href: ROUTES.structuralBim,
  },
  {
    title: "LOD-Based BIM Modeling",
    text: "Get BIM models during the whole project life cycle with proper geometric information and fidelity of data according to industry standards.",
    image: lodBasedBimModelingImg.src,
  },
  {
    title: "Creating Families in Revit",
    text: "Custom Parametric Revit Families include accurate geometry and embedded information for better model consistency, scheduling, quantification, coordination and life cycle management.",
    image: creatingFamiliesRevitImg.src,
    href: ROUTES.revitFamilies,
  },
  {
    title: "BIM Clash Coordination",
    text: "Resolve multi disciplinary conflicts before construction to reduce field conflicts, avoid costly rework and improve cooperation among project stakeholders.",
    image: bimClashCoordinationImg.src,
    href: ROUTES.mepCoordination,
  },
  {
    title: "Shop or Building Drawing",
    text: "Generate detailed fabrication shop drawings directly from coordinated BIM models, enhancing constructability, installation accuracy and communication between project teams and trades.",
    image: shopBuildingDrawingImg.src,
    href: ROUTES.shopDrawings,
  },
  {
    title: "3D Visualization Service",
    text: "Share design intent through realistic 3D views that let stakeholders experience spaces, spot potential problems and make better informed project decisions earlier.",
    image: threeDVisualizationServiceImg.src,
    href: ROUTES.visualization,
  },
  {
    title: "BIM to CAD Conversions",
    text: "Convert old CAD drawings into intelligent BIM models to improve collaboration, coordination and accuracy of design through the project life cycle.",
    image: bimToCadConversionsImg.src,
    href: ROUTES.cadToBim,
  },
];

export const bimModelingAiBimWorkflowSection = {
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

export const bimModelingWhyChooseSection = {
  tag: "Why Choose Us",
  titleLead: "Why We Are the Most Trusted ",
  titleAccent: "BIM Modeling Company",
  description:
    "From rapid resource scaling to rigorous quality control, our BIM Modeling Services in the USA are built for reliable delivery.",
  ctaLabel: "Start New Project",
  ctaHref: "#bim-modeling-page-contact",
};

export const bimModelingWhyChooseItems = [
  {
    prefix: "0",
    suffix: "1",
    prefixColor: "#D70416",
    title: "Dedicated Team Ready in 24 Hours",
    description:
      "Access experienced BIM professionals within 24 hours to quickly address workload spikes, project deadlines and resource shortages.",
  },
  {
    prefix: "0",
    suffix: "2",
    prefixColor: "#42AA32",
    title: "US Code-Compliant Delivery in Realtime",
    description:
      "Get your BIM deliverables in real-time, all while sticking to US codes, standards and whatever your project needs making sure smooth communication and teamwork throughout the process.",
  },
  {
    prefix: "0",
    suffix: "3",
    prefixColor: "#2299D6",
    title: "30% More Efficient AI-Powered Workflow",
    description:
      "With AI helping out, you're looking at workflow efficiency that's 30% better resulting in faster model development, quicker QC and improved coordination that keeps everything consistent.",
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

export const bimModelingWorkflowIntegrateSection = {
  tag: "Workflow",
  titleParts: [
    {
      text: "Our Process Flow for ",
      className: "text-section font-medium text-[#111111] capitalize",
    },
    {
      text: "BIM Modeling Services",
      className: "text-section text-accent font-light capitalize",
    },
  ],
  description:
    "AI based 4 step BIM workflow that takes project information to create coordinated, data rich models and provides reliable output for design, construction and facility management.",
  note: {
    text: 'Our process is designed to get your projects moving quickly. We don\'t wait until onboarding is "finished" to create value—we begin production as soon as the essential alignment is complete and continue improving the partnership with every project.',
  },
  centerLogo: workflowLogo,
};

export const bimModelingWorkflowIntegrateSteps = [
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

export const bimModelingEngagementModelsSection = {
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
  note: {
    text: "Every strategic partnership begins with one successful project. Each engagement helps us understand your practice more deeply, making every future collaboration faster, smoother, and more valuable.",
  },
};

export const bimModelingEngagementModelsCards = [
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
    ctaHref: "#bim-modeling-page-contact",
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

export const bimModelingTechnologyStackSection = {
  tag: "Tools & Platforms",
  titleLine1: "We Use to Deliver ",
  titleAccent: "BIM Modeling Services",
  description:
    "Leveraging industry-leading BIM software to create accurate, coordinated, and constructible MEP models for complex projects.",
};

export const bimModelingTechnologyStackToolsRowOne: MepBimTechnologyTool[] =
  mepBimTechnologyStackToolsRowOne;

export const bimModelingTechnologyStackToolsRowTwo: MepBimTechnologyTool[] =
  mepBimTechnologyStackToolsRowTwo;

export const bimModelingAdvantagesSection = {
  tag: "Advantages",
  titleLine1: "Top Advantages to Choose\n",
  titleLine2: "BIM Modeling Services",
  titleMaxWidth: 746,
  descriptionMaxWidth: 581,
  description:
    "Use Revit BIM Services to lower project risks, enhance collaboration and ease delivery from design to construction.",
  ctaLabel: "Contact Now",
  ctaHref: "#bim-modeling-page-contact",
};

export const bimModelingAdvantagesCards = [
  {
    title: "Better design accuracy in all disciplines",
    text: "3D BIM Modeling Services are the digital representation of physical and functional characteristics of a facility. Revit BIM Services help project teams to create constructible, code-compliant models that reduce design inconsistencies and costly rework.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Integrated collaboration & clash-free co-ordination",
    text: "Revit 3D BIM Modeling Services allows the seamless integration of architectural, structural and MEPF disciplines within a federated model. This allows early stage clash detection, reducing design conflicts, change orders and construction delays.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Better visualization to involve the stakeholders",
    text: "Revit generates very detailed 3D models which offer complete transparency of the building's systems, layout and design intent. Better visualization makes it easier to communicate with clients, consultants and contractors leading to faster decisions and design approvals.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Model each phase of the project with LOD-specific modeling",
    text: "BIM models are created to different Level of Development (LOD 100-500) to deliver the appropriate level of detail at each level starting from conceptual design to shop drawings and facility handover. This helps in informed planning, accurate bidding and efficient execution.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Takeoffs & cost estimating data driven quantities",
    text: "5D BIM Services in USA gives accurate quantity take-offs and reliable cost estimates directly from the model. It improves the accuracy of budgeting, resource allocation and financial forecasting across the project life cycle.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Prefabrication and modular construction help",
    text: "Well coordinated BIM models and modular building strategies assisted to generate fabrication ready drawings. This means less time on site, less waste and efficient construction.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
];

export const bimModelingProjectCta = {
  titleLine1: "Need Accurate BIM ",
  titleLine2: "Models Delivered On Time?",
  description:
    "Partner with a trusted BIM Modeling Company for coordinated, data-rich models that support design development, clash-free coordination, construction documentation, and project delivery.",
  cta: "Contact Us",
  ctaHref: "#bim-modeling-page-contact",
};

export const bimModelingIndustriesIntro = {
  titleLine1: "Industries We Serve with ",
  titleLine2: "BIM Modeling Excellence",
  titleMaxWidth: 706,
  description:
    "From iconic high-rises to large-scale infrastructure, our BIM company empowers diverse industries with smart, scalable solutions tailored to their unique project goals and challenges.",
};

export const bimModelingResourcesSection = acsServicePagesResourcesSection;

export const bimModelingTestimonialsDescription =
  "Client stories set out how our BIM solutions reduced costs, improved coordination and sped project delivery through collaboration.";

export const bimModelingFaqSection = {
  tag: "FAQs",
  description:
    "Everything you need to know about BIM modeling services, project requirements, workflows, and deliverables.",
};

export const bimModelingFaqs = [
  {
    q: "What is the difference between 3D, 4D and 5D BIM modeling?",
    a: "3D BIM Modeling Services are focused on geometry and spatial coordination. By adding time scheduling in 4D and cost data in 5D, integrated visualization, phasing and budget tracking can be done directly from the model.",
  },
  {
    q: "What Levels of Development (LOD) do you support?",
    a: "We deliver LOD 100–500 modeling aligned with AIA and BIMForum specifications, from conceptual massing through fabrication-ready and FM-ready as-built models based on your project requirements.",
  },
  {
    q: "What software do you use for coordination and clash detection?",
    a: "We coordinate and detect clashes using Navisworks Manage, Solibri Model Checker, and BIMCollab, with cloud collaboration through Autodesk BIM 360 and Autodesk Construction Cloud (ACC).",
  },
  {
    q: "How do you maintain data interoperability between platforms?",
    a: "We build IFC-compliant components and exchange deliverables in RVT, IFC, NWC, DWG, and PDF formats so models remain usable across Revit, ArchiCAD, Civil 3D, and downstream construction platforms.",
  },
  {
    q: "How do you ensure quality when using AI?",
    a: "AI accelerates model generation and repetitive tasks, while US-trained BIM experts review geometry, data, and coordination through structured QA so every deliverable meets project standards before release.",
  },
];

export const bimModelingContactDescription =
  "Tell us about your BIM modeling scope, timelines, and delivery standards. Our team will align the right US-trained experts to keep your project coordinated and on schedule.";
