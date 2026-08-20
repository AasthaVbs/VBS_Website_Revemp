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
import { ROUTES } from "@/constants/navigation";

export const POINT_CLOUD_TO_BIM_CONTACT_ID = "point-cloud-to-bim-page-contact";
export const POINT_CLOUD_TO_BIM_CONTACT_HASH = `#${POINT_CLOUD_TO_BIM_CONTACT_ID}`;

export const pointCloudToBimStatsStrip = [
  { value: "4000+", color: "text-vbs-red", label: "Projects Delivered" },
  { value: "300+", color: "text-vbs-green", label: "Global Clients" },
  { value: "11+", color: "text-vbs-yellow", label: "Years of Experience" },
  { value: "500+", color: "text-vbs-blue", label: "Scan to BIM Specialists" },
];

export const pointCloudToBimHero = {
  tag: "Point Cloud to BIM",
  titleLead: "Point Cloud to BIM Services for ",
  titleAccent: "AEC Firms Tired of Rework",
  description:
    "Messy point cloud data slows every project down. Our BIM experts use an AI-powered workflow to convert scans into reliable models fast, without compromising quality.",
  ctaLabel: "Get a Free Quote",
  ctaHref: POINT_CLOUD_TO_BIM_CONTACT_HASH,
  imageSrc: "/image/point-cloud-to-bim-services-banner.png",
  imageAlt: "Point Cloud to BIM Services",
  copyMaxWidth: 699,
  descriptionMaxWidth: 699,
};

export const pointCloudToBimIntro = {
  tag: "Overview",
  titleLead: "Reliable Models From ",
  titleAccent: "Complex Scans",
  titleStacked: false,
  titleMaxWidth: 872,
  description:
    "Raw scan data holds huge value but only when someone turns it into usable models. Our team improves productivity, model quality, coordination and delivery timelines together.",
  sideDescription:
    "Virtual Building Studio is a leading provider of point cloud to BIM conversion. Our BIM experts use an AI-powered workflow to deliver 10,000 square feet point cloud modeling in Revit per day. Firms gain more capacity, less rework, better coordination and more time for their core work.",
  featuresTitle: "Expert Point Cloud to BIM Modeler Ready to Support Your Firm",
  features: [
    "We handle every stage, from scan cleanup to final delivery, to convert point cloud to 3D model output reliably.",
    "Our models follow your regional codes and standards, including AIA, COBie, and IFC.",
    "Our teams work with point clouds in Revit, Navisworks, and Recap for every point cloud to BIM conversion project.",
    "We collaborate through BIM 360, Trimble Connect, and other shared platforms your team already uses.",
    "Every deliverable passes through 100+ automated QC points before it reaches you.",
    "We deliver drawings, Revit models, schedules and point cloud to CAD model files as needed.",
  ],
  mainImage: "/image/point-cloud-to-bim-services-overview.png",
  imageAlt: "Point Cloud to BIM overview",
};

export const pointCloudToBimOurClientsSection = {
  tag: "Our Clients",
  titleLead: "Trusted by",
  titleAccent: "Top AEC Firms",
  titleAccentFirst: false,
  breakTitle: true,
  description:
    "Supporting architecture, engineering, construction, and reality capture teams across diverse project types and workflows.",
};

export const pointCloudToBimServicesSection = {
  tag: "Our Services",
  titleLine1: "Our Comprehensive Range of ",
  titleLine2: "Point Cloud to BIM Services",
  description:
    "Our team supports every phase of your project, from the first scan to the final construction-ready deliverable, without gaps in between.",
  ctaLabel: "Start New Project",
  ctaHref: POINT_CLOUD_TO_BIM_CONTACT_HASH,
  wideCards: true,
  titleMaxWidth: 747,
};

export const pointCloudToBimServiceCards = [
  {
    title: "Point Cloud to BIM Conversion",
    text: "We convert point cloud to 3D model outputs that capture every wall, beam and duct with reliable, field-matched geometry ready for design work.",
    image: "/image/point-cloud-to-bim-conversion.png",
  },
  {
    title: "Deviation Analysis",
    text: "We compare your point cloud to BIM model against the original design intent, flagging shifts in walls, columns or ductwork before they become site issues.",
    image: "/image/deviation-analysis.png",
  },
  {
    title: "Point Cloud to CAD Conversion",
    text: "When your team needs 2D output, we complete conversion of point cloud to CAD model for floor plans, sections, and elevation drawings your architects can use right away.",
    image: "/image/point-cloud-to-cad-conversion.png",
  },
  {
    title: "Point Cloud Modeling in Revit",
    text: "Our specialists handle point cloud modeling in Revit, building intelligent families and components that support clash checks, quantity takeoffs and future renovations.",
    image: "/image/point-cloud-modeling-in-revit.png",
  },
  {
    title: "Scan Registration and Cleanup",
    text: "Prior to modeling, we register and clean raw scan data by removing noise so your point cloud to BIM model accurately represents real site conditions.",
    image: "/image/scan-registration-and-cleanup.png",
  },
  {
    title: "Clash Detection and Coordination",
    text: "We run all the models through Navisworks to catch conflicts between architecture, structure and MEP, before your crews hit the site.",
    image: "/image/clash-detection-and-coordination.png",
  },
  {
    title: "As-Built Documentation",
    text: "Renovation and retrofit teams are provided with reliable as-built drawings and models that reflect existing conditions, reducing guess work in design and construction.",
    image: "/image/as-built-documentation.png",
  },
  {
    title: "Point Cloud to 3D Walkthrough",
    text: "We generate interactive point cloud to 3D walkthroughs from your scan data so stakeholders are able to explore the space, confirm clearances and identify issues before construction starts.",
    image: "/image/point-cloud-to-3d-walkthrough.png",
  },
];

export const pointCloudToBimServiceMetrics = [
  { value: "10,000 Sq.Ft.", label: "Per Day Delivery", valueColor: "#D70416" },
  { value: "100+", label: "Automated QC Points", valueColor: "#42AA32" },
  { value: "20M+ Sq. Ft.", label: "Scan Converted", valueColor: "#F0B300" },
  { value: "LOD 200-400", label: "Modeling Capability", valueColor: "#2299D6" },
] as const;

export const pointCloudToBimWhyChooseSection = {
  tag: "Why Choose Us",
  titleLead: "Why Choose Us for ",
  titleAccent: "Point Cloud to BIM Services?",
  description:
    "Our teams have advanced BIM skills, AI-enabled workflows and real project deadlines and site conditions.",
  ctaLabel: "Start New Project",
  ctaHref: POINT_CLOUD_TO_BIM_CONTACT_HASH,
};

export const pointCloudToBimWhyChooseItems = [
  {
    prefix: "0",
    suffix: "1",
    prefixColor: "#D70416",
    title: "30-40% Faster Project Kick-off",
    description:
      "Our point cloud to BIM conversion gets your team working with reliable as-built data from day one.",
  },
  {
    prefix: "0",
    suffix: "2",
    prefixColor: "#42AA32",
    title: "25% Reduction in Field Rework",
    description:
      "Early detection of clashes and deviations saves your crews' money in change orders and rework on site.",
  },
  {
    prefix: "0",
    suffix: "3",
    prefixColor: "#2299D6",
    title: "20-30% Lower Operational Overhead",
    description:
      "Scale your production without adding headcount. Our 500+ BIM experts extend your team's capacity on demand.",
  },
  {
    prefix: "0",
    suffix: "4",
    prefixColor: "#F0B300",
    title: "50% Faster Stakeholder Decision-Making",
    description:
      "Clients and contractors review a reliable point cloud to BIM model early, so design choices and approvals move faster.",
  },
] as const;

export const pointCloudToBimWorkflowSection = {
  tag: "Workflow",
  titleLine1: "Our Process Flow for ",
  titleLine2: "Point Cloud to BIM Conversion",
  description:
    "Every project moves through a clear sequence of steps, so your team always knows what stage your point cloud to BIM conversion is at.",
};

export const pointCloudToBimWorkflowSteps = [
  {
    number: "01",
    title: "Scan Data Collection and Import",
    text: "We receive raw laser scan data from FARO, Leica or Trimble devices and import it directly into Recap for initial processing and review.",
  },
  {
    number: "02",
    title: "Point Cloud Registration and Cleanup",
    text: "Our team aligns multiple scans into one coordinate system, then removes noise and clutter, so the point cloud reflects real site geometry.",
  },
  {
    number: "03",
    title: "AI-Assisted Point Cloud to BIM Conversion",
    text: "Our AI-powered workflow scans the cleaned point cloud, flags walls, beams and MEP elements and speeds up early model development for our team.",
  },
  {
    number: "04",
    title: "Model Development in Revit",
    text: "Our modelers build LOD 200 to 400 elements in Revit, converting point cloud to 3D model geometry that matches your project requirements exactly.",
  },
  {
    number: "05",
    title: "Automation-based Quality Control",
    text: "Each model goes through more than 100 automated quality check points, catching missing elements and geometry errors before human reviewers look at the file.",
  },
  {
    number: "06",
    title: "Coordination and Client Review",
    text: "We run clash test in Navisworks, then send you the model for review before we complete.",
  },
  {
    number: "07",
    title: "Delivery of Final Model",
    text: "The completed point cloud to BIM model is provided to your team in RVT, IFC, NWD or your preferred format for immediate use.",
  },
];

export const pointCloudToBimTechnologyStackSection = {
  tag: "Tools & Platforms",
  titleLine1: "We Use to Deliver ",
  titleAccent: "Point Cloud to BIM Services",
  description:
    "Leveraging industry-leading BIM software to create accurate, coordinated, and constructible MEP models for complex projects.",
};

export const pointCloudToBimTechnologyStackToolsRowOne: MepBimTechnologyTool[] =
  mepBimTechnologyStackToolsRowOne;

export const pointCloudToBimTechnologyStackToolsRowTwo: MepBimTechnologyTool[] =
  mepBimTechnologyStackToolsRowTwo;

export const pointCloudToBimAdvantagesSection = {
  tag: "Advantages",
  titleLine1: "Benefits Of Outsourcing ",
  titleLine2: "Point Cloud To BIM Services",
  titleMaxWidth: 746,
  descriptionMaxWidth: 581,
  description:
    "Get faster delivery, less errors and more time to focus on design and client work by outsourcing your point cloud to BIM conversion.",
  ctaLabel: "Contact Now",
  ctaHref: POINT_CLOUD_TO_BIM_CONTACT_HASH,
};

export const pointCloudToBimAdvantagesCards = [
  {
    title: "Dependable and Error-Free Models",
    text: "Each point cloud is carefully reviewed by our team to convert it to a BIM model, so your design begins with geometry that corresponds to the real building.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Improved Multi-trade Coordination",
    text: "Architects, engineers and contractors all work from a single shared model that cuts out back-and-forth questions and rework once construction begins.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Fully Compliant with Global Standards",
    text: "Our models are compliant with AIA, COBie and IFC standards, helping your team avoid delays in permitting and review.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Better Visualization for All Stakeholders",
    text: "Design decisions and approvals are faster and easier for everyone involved as clients and contractors see the finished space before construction even begins.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "All Inclusive As-Built Documentation",
    text: "Your team receives drawings and models that replicate real conditions onsite, to assist renovation, retrofit and long-term planning for facility.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Better Data Means Cost Savings",
    text: "We catch clashes and errors early, so you don't have to deal with change orders onsite and your project stays on time and on budget.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
];

export const pointCloudToBimProjectCta = {
  titleLine1: "Ready to Turn Your Point Cloud Data Into a ",
  titleLine2: "Model You Can Actually Use?",
  description:
    "Your scans hold everything your team needs. Let our BIM experts convert point cloud to 3D model output that speeds up your next project.",
  cta: "Contact Us",
  ctaHref: ROUTES.contact,
};

export const pointCloudToBimEngagementCards = engagementModelCards.map((card) => ({
  ...card,
  ctaHref: ROUTES.contact,
})) as unknown as EngagementModelCard[];

export const pointCloudToBimIndustriesIntro = {
  titleLine1: "Industries We Support with ",
  titleLine2: "Point Cloud to BIM Services",
  titleMaxWidth: 758,
  description:
    "From iconic high-rises to large-scale infrastructure, we convert point cloud to 3D model to empower diverse industries with practical, scalable solutions tailored to their project goals.",
};

export const pointCloudToBimResourcesSection = acsServicePagesResourcesSection;

export const pointCloudToBimTestimonialsDescription =
  "Client stories set out how our scan to BIM expertise reduced costs, improved coordination and sped project delivery through collaboration.";

export const pointCloudToBimFaqSection = {
  tag: "FAQs",
  description:
    "Everything you need to know about BIM modeling services, project requirements, workflows, and deliverables.",
};

export const pointCloudToBimFaqs = [
  {
    q: "What is point cloud to BIM conversion?",
    a: "Point cloud to BIM conversion turns raw laser scan data into an intelligent Revit model, capturing walls, MEP systems, and structural elements for design and construction use.",
  },
  {
    q: "Which software do you use for point cloud modeling in Revit?",
    a: "We primarily use Autodesk Revit with Recap Pro for scan processing, and Navisworks for clash detection and coordination across disciplines.",
  },
  {
    q: "Can you provide point cloud to CAD conversion instead of a Revit model?",
    a: "Yes. When your team needs 2D output, we deliver point cloud to CAD conversion for floor plans, sections, and elevation drawings your architects can use right away.",
  },
  {
    q: "How fast can you deliver a point cloud to BIM model?",
    a: "Our AI-powered workflow supports up to 10,000 square feet of point cloud modeling in Revit per day, with timelines tailored to your LOD and project scope.",
  },
  {
    q: "How do you check quality before delivery?",
    a: "Every deliverable passes through 100+ automated QC points, followed by expert review, so geometry errors and missing elements are caught before handover.",
  },
];

export const pointCloudToBimContactDescription =
  "Tell us about your scan data, LOD requirements, and delivery timeline. Our point cloud to BIM specialists will align the right team for your project.";
