import architecturalBimModelingImg from "@/assets/images/architectural-bim-modeling.jpg";
import cadToBimImg from "@/assets/images/cad-to-bim.jpg";
import cadToBimConversionServicesImg from "@/assets/images/cad-to-bim-conversion-services.png";
import structuralBimServicesImg from "@/assets/images/structural-bim-services.jpg";
import { benefitIconColored, benefitIconMuted } from "@/constants/benefit-icons";
import { bimModelingStatsStrip } from "@/constants/bim-modeling-services-content";
import type { MepBimTechnologyTool } from "@/constants/mep-bim-modelling-content";
import {
  mepBimTechnologyStackToolsRowOne,
  mepBimTechnologyStackToolsRowTwo,
} from "@/constants/mep-bim-modelling-content";
import { ROUTES } from "@/constants/navigation";
import { acsServicePagesResourcesSection } from "@/constants/shared-sections";

export const cadToBimStatsStrip = bimModelingStatsStrip;

export const cadToBimHero = {
  tag: "CAD to BIM",
  titleAccent: "CAD to BIM Services ",
  titleLead: "for \nCoordinated Revit Models",
  titleAccentFirst: true,
  description:
    "Our pre-vetted BIM experts convert your CAD and PDF drawings into accurate Revit models. Teams get faster decisions, fewer clashes, and stronger stakeholder trust.",
  ctaLabel: "Connect With Us",
  imageSrc: cadToBimImg,
  imageAlt: "CAD to BIM Conversion Services",
  copyMaxWidth: 683,
  descriptionMaxWidth: 670,
};

export const cadToBimIntro = {
  tag: "Overview",
  titleLead: "Integrating Intelligence ",
  titleAccent: "into Every Drawing",
  titleStacked: false,
  description:
    "A 2D drawing tells you what a wall looks like. A BIM model tells your whole team how it behaves, connects, and performs across the project.",
  sideDescription:
    "Design and construction teams rely on us to convert CAD files into data-rich Revit models. Our CAD to BIM Conversion Services add the accuracy layer that flat drawings cannot carry on their own. Firms get more design capacity, less rework on site, and tighter coordination between architects, engineers, and contractors. Outsourcing CAD to BIM modeling services frees your in-house team to focus on design decisions instead of file cleanup.",
  featuresTitle: "CAD to BIM Conversion by Vetted Top 1% US-Trained BIM Specialists",
  features: [
    "Accurate CAD to BIM Conversion for architectural, structural and MEP disciplines.",
    "AI-powered PDF to Revit Conversion that provides data-rich and clash-free 3D Models.",
    "AutoCAD to Revit Modeling for design coordination and documentation.",
    "Standard BIM workflows consistent with US codes and standards and industry best practices.",
    "Intelligent model creation with direct implications for clash detection, quantity take-off and scheduling.",
    "Improved collaboration with multi-discipline integration and less RFIs.",
    "Deliverables produced for design development, construction and facilities management.",
  ],
  mainImage: cadToBimConversionServicesImg,
  imageAlt: "CAD to BIM overview",
};

export const cadToBimOurClientsSection = {
  tag: "Our Clients",
  titleAccent: "Trusted by",
  titleLead: " Leading AEC Firms",
  description:
    "Supporting architecture, engineering, construction and reality capture teams across diverse project types and workflows.",
};

export const cadToBimServicesSection = {
  tag: "Our Services",
  titleLine1: "Our Comprehensive Range of ",
  titleLine2: "CAD to BIM Modeling Services",
  description:
    "Our support covers your project from the first drawing set through construction documentation and final handover.",
  ctaLabel: "let's Talk Now",
  ctaHref: "#cad-to-bim-page-contact",
  wideCards: true,
};

export const cadToBimServiceCards = [
  {
    title: "Architectural CAD to BIM Service",
    text: "We convert 2D architectural drawings into full 3D Revit models. Walls, floors and building elements come out accurate and ready to build from.",
    image: architecturalBimModelingImg.src,
    href: ROUTES.architecturalBim,
  },
  {
    title: "Structural CAD to BIM Conversion",
    text: "Structural CAD files become coordinated models covering framing, foundations and load paths. Engineers get a model that matches the real structure.",
    image: structuralBimServicesImg.src,
    href: ROUTES.structuralBim,
  },
  {
    title: "As-Built CAD Drawing to BIM Conversion",
    text: "Existing site drawings become accurate as-built models. Renovation and retrofit teams get a clear picture of the current structure.",
    image: "/images/mep/full-spectrum/mep-scan-to-bim.png",
    href: ROUTES.asBuiltModeling,
  },
  {
    title: "AutoCAD to BIM Conversion",
    text: "AutoCAD files convert into intelligent Revit models with real building data. Every wall and system carries information your team can use.",
    image: cadToBimImg.src,
  },
  {
    title: "PDF to Revit Conversion",
    text: "Turn scanned PDFs or legacy drawings into accurate editable Revit models. Ensuring design accuracy, reduced errors and reliable digital workflows.",
    image: "/images/mep/full-spectrum/mep-bim-modeling.png",
    href: ROUTES.pdfToCad,
  },
  {
    title: "2D to 3D Floor Plan Conversion",
    text: "Transform 2D CAD drawings into 3D models with detailed, accurate and spatial layouts to improve dialogue with clients and stakeholders through visual clarity.",
    image: "/images/mep/lod/lod-200-56586a.png",
  },
  {
    title: "Construction Documentation",
    text: "Coordinated drawing sets and schedules come ready for permitting. Contractors get documents built for construction, not just design review.",
    image: "/images/mep/full-spectrum/mep-shop-drawing.png",
  },
  {
    title: "Quantity Take-Offs & BOQs from CAD",
    text: "Using CAD-based inputs for a BIM-based workflow, create accurate quantities and Bills of Quantities (BOQs). Utilize for cost estimating, procurement and resource planning.",
    image: "/images/mep/full-spectrum/mep-bom.png",
  },
];

export const cadToBimAiBimWorkflowSection = {
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

export const cadToBimWhyChooseSection = {
  tag: "Why Choose Us",
  titleLead: "Why Choose Us as Your ",
  titleAccent: "CAD to BIM Service Provider?",
  description:
    "Our top 1% BIM specialists use AI-driven workflows and standard processes to provide you with the most accurate and high-quality CAD to BIM Services in the USA.",
  ctaLabel: "Start New Project",
  ctaHref: "#cad-to-bim-page-contact",
};

export const cadToBimWhyChooseItems = [
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
      "Get your CAD to BIM conversions in realtime, all while sticking to US codes, standards and whatever your project needs, making sure smooth communication and teamwork throughout the process.",
  },
  {
    prefix: "0",
    suffix: "3",
    prefixColor: "#2299D6",
    title: "30% More Efficient with AI-Powered Workflow",
    description:
      "With AI helping out, you get workflow efficiency 30% better, resulting in faster model development, quicker QC and improved coordination that keeps your project consistent.",
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

export const cadToBimWorkflowSection = {
  tag: "Workflow",
  titleLine1: "Our Workflow for ",
  titleLine2: "CAD to BIM Conversion",
  description:
    "Every CAD to BIM project moves through clear 7 stages, from file review to final output",
};

export const cadToBimWorkflowSteps = [
  {
    number: "01",
    title: "Drawing Review and Scoping",
    text: "Our team reviews your CAD or PDF files first. We check for missing details, gaps and scope before confirming the conversion plan with your team.",
  },
  {
    number: "02",
    title: "Standards and LOD Alignment",
    text: "We align on the Level of Development your project needs. Setting this early keeps the model focused on what your team will actually use it for.",
  },
  {
    number: "03",
    title: "Model Development",
    text: "Our BIM professionals use an AI-powered workflow to accelerate Revit model development discipline by discipline. Walls, systems and structural elements take shape based on your original drawings.",
  },
  {
    number: "04",
    title: "Discipline Coordination",
    text: "Architectural, structural and MEP models come together into one coordinated file. Clash checks run at this stage to catch conflicts early.",
  },
  {
    number: "05",
    title: "Quality Assurance Review",
    text: "Every model goes through a detailed QA and QC check against the source drawings. This step make sure accuracy before anything reaches your desk.",
  },
  {
    number: "06",
    title: "Client Review and Revisions",
    text: "We share the model with your team for review. Any changes you request get done quickly without any delay to your timeline.",
  },
  {
    number: "07",
    title: "Final Output and Handover",
    text: "You receive the final Revit model along with coordinated drawing package and clash reports. Your team can move straight into the next project phase.",
  },
];

export const cadToBimTechnologyStackSection = {
  tag: "Tools & Platforms",
  titleLine1: "We Use to Deliver ",
  titleAccent: "CAD to BIM Services",
  description:
    "Leveraging industry-leading BIM software to create accurate, coordinated, and constructible MEP models for complex projects.",
};

export const cadToBimTechnologyStackToolsRowOne: MepBimTechnologyTool[] =
  mepBimTechnologyStackToolsRowOne;

export const cadToBimTechnologyStackToolsRowTwo: MepBimTechnologyTool[] =
  mepBimTechnologyStackToolsRowTwo;

export const cadToBimKeyPointsSection = {
  tag: "Key Points",
  titleLine1: "Advantages of Outsourcing ",
  titleLine2: "CAD to BIM Services",
  titleMaxWidth: 661,
  descriptionMaxWidth: 598,
  description:
    "Outsourcing conversion work gives your in-house team back the hours they used to spend cleaning up drawings manually.",
  ctaLabel: "Contact Now",
  ctaHref: "#cad-to-bim-page-contact",
};

export const cadToBimKeyPointsCards = [
  {
    title: "Better Design Accuracy",
    text: "Converting CAD and PDF drawings to BIM indicates every size and element is accurately modeled. This helps reduce discrepancies, design gaps, and rework costs.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Improved Coordination of All Disciplines",
    text: "Architectural, structural and MEP models now work in one BIM and digital platform. Not only does this assist in clash detection but keeps coordination and collaboration seamless.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Faster Project Completion",
    text: "Revit offers automated workflows for quicker modeling and documentation resulting in less manual redrawing leading to time saving and gaining approvals faster.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Data-Driven Decision Making",
    text: "BIM models enriched with materials data, quantities and schedule data create a significant opportunity for stakeholders to use their data to make informed decisions.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Better Visualization & Communication",
    text: "3D BIM models replace flat 2D drawings with 3D visuals. This enables stakeholders to better understand, and feel confident, about the design intent.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Optimized Construction & Facility Management",
    text: "BIM deliverables are a detailed, accurate source of information that can optimize construction planning, as well as future facility operations.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
];

export const cadToBimProjectCta = {
  titleLine1: "Ready to Turn Your Drawings ",
  titleLine2: "into Coordinated Models?",
  description:
    "Send us your CAD or PDF files, and our team will walk you through the conversion process and timeline.",
  cta: "Contact Us",
  ctaHref: "#cad-to-bim-page-contact",
};

export const cadToBimIndustriesIntro = {
  titleLine1: "Industries We Support with ",
  titleLine2: "Architectural CAD to BIM Services",
  titleMaxWidth: 796,
  description:
    "From iconic high-rises to large-scale infrastructure, our CAD to BIM Company in the USA empowers diverse industries with smart, scalable solutions tailored to their unique project goals and challenges.",
};

export const cadToBimResourcesSection = acsServicePagesResourcesSection;

export const cadToBimTestimonialsDescription =
  "Client stories set out how our CAD to BIM conversion services reduced costs, improved coordination and sped project delivery through collaboration.";

export const cadToBimFaqSection = {
  tag: "FAQs",
  description:
    "Everything you need to know about our Architectural CAD to BIM conversion services, including project requirements, workflows and deliverables.",
};

export const cadToBimFaqs = [
  {
    q: "Do you perform one-off projects converting CAD to BIM?",
    a: "No. We provide continuing access to top 1% BIM professionals who will become ingrained into your team. Our professionals become dedicated resources that provide consistency, technical accuracy and increased project velocity across different projects and assignments.",
  },
  {
    q: "How accurate are the BIM models created from the CAD files?",
    a: "Our CAD to BIM conversion process follows international standards like LOD 300–500, ensuring precise geometry, parametric data, and alignment with project specifications. Every model undergoes strict quality checks before delivery.",
  },
  {
    q: "How quickly can your team be integrated into a project?",
    a: "We can integrate into your workflows within 5 business days, allowing you to scale BIM resources quickly without lengthy hiring or training processes.",
  },
  {
    q: "Do you provide Quantity Take-Offs and BOQs from CAD drawings?",
    a: "Yes. Our CAD to BIM workflows support automated Quantity Take-Offs (QTO) and accurate BOQs, giving project teams reliable data for budgeting, procurement, and cost planning.",
  },
  {
    q: "How do you ensure quality when using AI?",
    a: "AI accelerates model generation and repetitive tasks, while US-trained BIM experts review geometry, data, and coordination through structured QA so every deliverable meets project standards before release.",
  },
];

export const cadToBimContactDescription =
  "Tell us about your CAD or PDF drawings, target LOD, and delivery timeline. Our team will align the right US-trained BIM experts for accurate Revit conversion.";
