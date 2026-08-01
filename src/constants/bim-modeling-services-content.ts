import architecturalBimModelingImg from "@/assets/images/architectural-bim-modeling.jpg";
import cadToBimImg from "@/assets/images/cad-to-bim.jpg";
import revitFamilyImg from "@/assets/images/revit-family.jpg";
import structuralArchitecturalBimServicesImg from "@/assets/images/structural-architectural-bim-services-for-project 1.jpg";
import structuralBimServicesImg from "@/assets/images/structural-bim-services.jpg";
import { ROUTES } from "@/constants/navigation";

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
  imageSrc: "/images/bim-modeling/bim-modeling-hero.jpg",
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
  mainImage: structuralArchitecturalBimServicesImg,
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
    image: architecturalBimModelingImg.src,
    href: ROUTES.architecturalBim,
  },
  {
    title: "BIM Structural Modeling",
    text: "Coordinate with architectural and MEP disciplines to develop accurate concrete, steel and precast structural models, minimize clashes and enable efficient construction planning.",
    image: structuralBimServicesImg.src,
    href: ROUTES.structuralBim,
  },
  {
    title: "LOD-Based BIM Modeling",
    text: "Get BIM models during the whole project life cycle with proper geometric information and fidelity of data according to industry standards.",
    image: "/images/mep/lod/lod-300-233d41.png",
  },
  {
    title: "Creating Families in Revit",
    text: "Custom Parametric Revit Families include accurate geometry and embedded information for better model consistency, scheduling, quantification, coordination and life cycle management.",
    image: revitFamilyImg.src,
    href: ROUTES.revitFamilies,
  },
  {
    title: "BIM Clash Coordination",
    text: "Resolve multi disciplinary conflicts before construction to reduce field conflicts, avoid costly rework and improve cooperation among project stakeholders.",
    image: "/images/mep/full-spectrum/mep-clash-detection.png",
    href: ROUTES.mepCoordination,
  },
  {
    title: "Shop or Building Drawing",
    text: "Generate detailed fabrication shop drawings directly from coordinated BIM models, enhancing constructability, installation accuracy and communication between project teams and trades.",
    image: "/images/mep/full-spectrum/mep-shop-drawing.png",
    href: ROUTES.shopDrawings,
  },
  {
    title: "3D Visualization Service",
    text: "Share design intent through realistic 3D views that let stakeholders experience spaces, spot potential problems and make better informed project decisions earlier.",
    image: "/images/bim-modeling/bim-modeling-hero.jpg",
    href: ROUTES.visualization,
  },
  {
    title: "BIM to CAD Conversions",
    text: "Convert old CAD drawings into intelligent BIM models to improve collaboration, coordination and accuracy of design through the project life cycle.",
    image: cadToBimImg.src,
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

export const bimModelingWorkflowSection = {
  tag: "Workflow",
  titleLine1: "Our Process Flow for ",
  titleLine2: "BIM Modeling Services",
  description:
    "AI based 6 step BIM workflow that takes project information to create coordinated, data rich models and provides reliable output for design, construction and facility management.",
};

export const bimModelingWorkflowSteps = [
  {
    number: "01",
    title: "Project Kick-Off and BIM Execution Planning",
    text: "The goal for the modeling is defined by reviewing project requirements, design documents, and CAD files. Set LOD, model standards, coordinate systems, naming conventions and collaboration protocols for consistent project delivery.",
  },
  {
    number: "02",
    title: "Data Collection and Model Building",
    text: "The first step of model development is verification of the existing drawings, point cloud data, survey information and project references. Create a common BIM workflow by establishing shared coordinates, levels, grids, worksets and discipline specific templates.",
  },
  {
    number: "03",
    title: "Generation of BIM Model",
    text: "AI-assisted workflows accelerate BIM model development based on approved documentation and project requirements. Intelligent BIM elements incorporate accurate geometry, embedded information and discipline-specific data for effective project coordination.",
  },
  {
    number: "04",
    title: "Coordination & Clash Detection",
    text: "Models from several disciplines are federated and checked for spatial conflicts and constructability problems. Clash detection, model audits and coordination reviews are used to identify and resolve potential issues before construction activities begin.",
  },
  {
    number: "05",
    title: "Quality Assurance and Documentation",
    text: "BIM models are coordinated and reviewed to project standards, LOD requirements and client specifications. Drawing sheets, schedules, quantity information and model data are delivered under structured quality control processes.",
  },
  {
    number: "06",
    title: "Final Delivery and Model Transfer",
    text: "Approved BIM models and project deliverables are created for use in design and construction or facility management. We deliver in RVT, IFC, NWC, DWG & PDF formats along with all documentation and project data required.",
  },
];

import { benefitIconColored, benefitIconMuted } from "@/constants/benefit-icons";
import type { MepBimTechnologyTool } from "@/constants/mep-bim-modelling-content";
import {
  mepBimTechnologyStackToolsRowOne,
  mepBimTechnologyStackToolsRowTwo,
} from "@/constants/mep-bim-modelling-content";
import { acsServicePagesResourcesSection } from "@/constants/shared-sections";

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
