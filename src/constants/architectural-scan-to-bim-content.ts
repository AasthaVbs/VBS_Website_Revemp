import { benefitIconColored, benefitIconMuted } from "@/constants/benefit-icons";
import type { MepBimTechnologyTool } from "@/constants/mep-bim-modelling-content";
import {
  mepBimTechnologyStackToolsRowOne,
  mepBimTechnologyStackToolsRowTwo,
} from "@/constants/mep-bim-modelling-content";
import { acsServicePagesResourcesSection } from "@/constants/shared-sections";

/** Temporary placeholders until dedicated art is provided */
const archScanPlaceholderImg = "/image/as-built.jpg";

export const architecturalScanToBimStatsStrip = [
  { value: "4000+", color: "text-vbs-red", label: "Projects Delivered" },
  { value: "300+", color: "text-vbs-green", label: "Global Clients" },
  { value: "11+", color: "text-vbs-yellow", label: "Years of Experience" },
  { value: "500+", color: "text-vbs-blue", label: "Scan to BIM Specialists" },
];

export const architecturalScanToBimHero = {
  tag: "Architectural Scan to BIM",
  titleLead: "Architectural Scan to BIM Services for Firms ",
  titleAccent: "Racing Against Tight Deadlines",
  description:
    "In-house teams fall behind when point cloud data piles up. Our BIM professionals use AI-driven workflows to provide quality assured scan to BIM outsourcing services.",
  ctaLabel: "Get a Free Quote",
  imageSrc: archScanPlaceholderImg,
  imageAlt: "Architectural Scan to BIM Services",
  copyMaxWidth: 716,
  descriptionMaxWidth: 652,
};

export const architecturalScanToBimIntro = {
  tag: "Overview",
  titleLead: "Converting Point Clouds into ",
  titleAccent: "Coordinated Models",
  titleStacked: true,
  titleMaxWidth: 743,
  description:
    "Our architectural scan to BIM experts turns your raw point cloud data into models you can trust. Productivity gets better, coordination improves and delivery times are reduced.",
  sideDescription:
    "As a leading provider of architectural scan to BIM services, our scan to BIM architects use AI-powered workflows to deliver precision. Firms gain more production capacity, cut rework, coordinate better across teams and focus on core project work.",
  featuresTitle: "Our Architectural Point Cloud Modeling Experts Ready to Support Your Firm",
  features: [
    "End-to-end scan to BIM outsourcing services, from point cloud registration to final model handoff.",
    "Models follow International Building Codes and LOD 200-400 standards on every project.",
    "Our teams work in Revit, ReCap, Navisworks and other reality capture architecture tools.",
    "We collaborate through BIM 360, Autodesk Construction Cloud and shared cloud folders.",
    "Every model passes 100+ automated QC points before it reaches your inbox.",
    "Our AI-powered workflow helps BIM experts to convert 10,000 sq.ft. of scans into a BIM model in a day.",
    "Deliverables include Revit models, 2D drawings, registered point cloud files and coordination sheets.",
  ],
  mainImage: "/image/architectural-scan-to-bim-overview.png",
  imageAlt: "Architectural Scan to BIM overview",
};

export const architecturalScanToBimOurClientsSection = {
  tag: "Our Clients",
  titleLead: "Trusted by",
  titleAccent: "Top AEC Firms",
  titleAccentFirst: false,
  breakTitle: true,
  description:
    "Supporting architecture, engineering, construction, and reality capture teams across diverse project types and workflows.",
};

export const architecturalScanToBimServicesSection = {
  tag: "Our Services",
  titleLine1: "Our Comprehensive Range of ",
  titleLine2: "Architectural Scan to BIM Services",
  description:
    "Our architectural scan to BIM outsourcing services support your project from initial site capture through design development to final construction documentation.",
  ctaLabel: "Start New Project",
  ctaHref: "#architectural-scan-to-bim-page-contact",
  wideCards: true,
  titleMaxWidth: 779,
};

export const architecturalScanToBimServiceCards = [
  {
    title: "Point Cloud Registration and Cleanup",
    text: "Our teams align raw scan data from multiple stations into one clean point cloud, removing noise so modelers can build directly from reliable, clean site data.",
    image: archScanPlaceholderImg,
  },
  {
    title: "LOD 200-400 BIM Modeling",
    text: "Select the Level of Development your project requires from basic massing at LOD 200 to full detailed models with material data at LOD 400.",
    image: archScanPlaceholderImg,
  },
  {
    title: "As-Built Documentation",
    text: "Our architectural scanning services capture existing conditions with reality capture architecture tools that gives your team a reliable record prior to renovation or retrofit.",
    image: archScanPlaceholderImg,
  },
  {
    title: "Scan to CAD Drafting",
    text: "We turn point cloud data into 2D CAD drawings, so drafting teams get clean floor plans without manual field measurement.",
    image: archScanPlaceholderImg,
  },
  {
    title: "Floor Plans, RCPs and Elevations",
    text: "Get annotated floor plans, reflected ceiling plans and elevations pulled straight from scan data, ready for coordination and permitting.",
    image: archScanPlaceholderImg,
  },
  {
    title: "Facade and Envelope Modeling",
    text: "Our modelers capture exterior geometry, cladding details and window openings that help your design teams plan restoration or renovation work with confidence.",
    image: archScanPlaceholderImg,
  },
];

export const architecturalScanToBimServiceMetrics = [
  { value: "10,000 Sq.Ft.", label: "Per Day Delivery", valueColor: "#D70416" },
  { value: "100+", label: "Automated QC Points", valueColor: "#42AA32" },
  { value: "20M+ Sq. Ft.", label: "Scan Converted", valueColor: "#F0B300" },
  { value: "LOD 200-400", label: "Modeling Capability", valueColor: "#2299D6" },
] as const;

export const architecturalScanToBimWhyChooseSection = {
  tag: "Why Choose Us",
  titleLead: "Why Choose Us for Outsourcing ",
  titleAccent: "Architectural Scan to BIM Services?",
  description:
    "Outsourcing scan to BIM services gives your firm quality assured models, faster timelines and greater production capacity without adding in-house overhead.",
  ctaLabel: "Start New Project",
  ctaHref: "#architectural-scan-to-bim-page-contact",
};

export const architecturalScanToBimWhyChooseItems = [
  {
    prefix: "0",
    suffix: "1",
    prefixColor: "#D70416",
    title: "35% Fewer Delays Due to Clashes",
    description:
      "Your architects, engineers and contractors identify clashes early with coordinated models, reducing back and forth during design and construction.",
  },
  {
    prefix: "0",
    suffix: "2",
    prefixColor: "#42AA32",
    title: "100% Code-Compliant Delivery",
    description:
      "Our models comply with global building codes and your project-specific standards so submissions flow through review and permitting without delay.",
  },
  {
    prefix: "0",
    suffix: "3",
    prefixColor: "#2299D6",
    title: "60% Faster Stakeholder Sign-Off",
    description:
      "Your stakeholders see an easy to read 3D model instead of raw scan data, leading to faster renovation decisions.",
  },
  {
    prefix: "0",
    suffix: "4",
    prefixColor: "#F0B300",
    title: "40% Lower Modeling Costs",
    description:
      "Using AI-powered workflow our BIM experts reduce the time spent on manual modeling and lower your overall project cost.",
  },
] as const;

export const architecturalScanToBimWorkflowSection = {
  tag: "Workflow",
  titleLine1: "Our Process Flow for ",
  titleLine2: "Architectural Scan to BIM Conversion",
  description:
    "We follow a clear seven step process from initial site capture to final model delivery, keeping your team informed at every step.",
};

export const architecturalScanToBimWorkflowSteps = [
  {
    number: "01",
    title: "Site Scanning and Data Capture",
    text: "Our field teams use laser scanners and reality capture architecture tools to record existing conditions, generating high density point cloud data ready for processing.",
  },
  {
    number: "02",
    title: "Point Cloud Registration",
    text: "The raw scan data is aligned and cleaned from every station into one unified point cloud. Then we remove noise so modeling teams work from reliable data.",
  },
  {
    number: "03",
    title: "AI-Assisted Model Generation",
    text: "Our AI-powered workflow speeds up initial model generation from point cloud data. This let our BIM experts focus on review, not on manual tracing.",
  },
  {
    number: "04",
    title: "Manual Modeling and Detailing",
    text: "Our scan to BIM specialists refines the AI-generated model. They add architectural detail and make sure every element matches the scan data on site.",
  },
  {
    number: "05",
    title: "Quality Control Review",
    text: "Every model passes 100+ automated QC checkpoints, then a second reviewer checks geometry, naming and coordination before handoff.",
  },
  {
    number: "06",
    title: "Client Review and Coordination",
    text: "We share the model through your preferred collaboration platform. This helps your team to review, add comment and request changes quickly.",
  },
  {
    number: "07",
    title: "Final Delivery and Support",
    text: "We handover the final model in your required format. We provide support for any further follow ups or revisions your team may require.",
  },
];

export const architecturalScanToBimTechnologyStackSection = {
  tag: "Tools & Platforms",
  titleLine1: "We Use to Deliver ",
  titleAccent: "BIM Modeling Services",
  description:
    "Leveraging industry-leading BIM software to create accurate, coordinated, and constructible MEP models for complex projects.",
};

export const architecturalScanToBimTechnologyStackToolsRowOne: MepBimTechnologyTool[] =
  mepBimTechnologyStackToolsRowOne;

export const architecturalScanToBimTechnologyStackToolsRowTwo: MepBimTechnologyTool[] =
  mepBimTechnologyStackToolsRowTwo;

export const architecturalScanToBimAdvantagesSection = {
  tag: "Advantages",
  titleLine1: "Benefits Of ",
  titleLine2: "Architectural Scan to BIM Outsourcing",
  titleMaxWidth: 746,
  descriptionMaxWidth: 618,
  description:
    "Outsourcing your architectural scan to BIM work gives your firm faster turnarounds and fewer errors. You get models your whole team can rely on daily.",
  ctaLabel: "Contact Now",
  ctaHref: "#architectural-scan-to-bim-page-contact",
};

export const architecturalScanToBimAdvantagesCards = [
  {
    title: "Lower Overhead Costs",
    text: "Firms skip the cost of BIM software licenses, scanning hardware and full-time hires when they outsource scan to BIM work.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Faster Access to Specialized Talent",
    text: "Outsourcing gives firms trained BIM modelers right away, instead of spending months on recruitment and training.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Faster Turn Around During High Work Load",
    text: "Firms add or subtract production capacity based on project volume, not idle staff between projects.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Consistent QC of Every Deliverable",
    text: "All models are subjected to the same QC checks so quality doesn't depend on which modeler happens to be available that week.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Additional Time for Core Design Work",
    text: "Architects and engineers will spend less time on manual modeling and more time on design decisions and client discussions.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "On-Time Delivery",
    text: "Firms get committed delivery dates from an outsourcing partner, instead of competing for internal resources against other active projects.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
];

export const architecturalScanToBimProjectCta = {
  titleLine1: "Ready to Turn Your Point Cloud Data Into a ",
  titleLine2: "Model You Can Rebuild?",
  description:
    "Share with us your scan data and project details and our BIM experts will get back to you with a clear scope and timeline.",
  cta: "Contact Us",
  ctaHref: "#architectural-scan-to-bim-page-contact",
};

export const architecturalScanToBimIndustriesIntro = {
  titleLine1: "Industries We Support with ",
  titleLine2: "Architectural Scan to BIM Services",
  titleMaxWidth: 788,
  description:
    "From iconic high-rises to large-scale infrastructure, our architectural scan to BIM services support diverse industries with practical, scalable solutions for their unique project goals.",
};

export const architecturalScanToBimResourcesSection = acsServicePagesResourcesSection;

export const architecturalScanToBimTestimonialsDescription =
  "Client stories set out how our scan to BIM expertise reduced costs, improved coordination and sped project delivery through collaboration.";

export const architecturalScanToBimFaqSection = {
  tag: "FAQs",
  description:
    "Everything you need to know about BIM modeling services, project requirements, workflows, and deliverables.",
};

export const architecturalScanToBimFaqs = [
  {
    q: "What is architectural scan to BIM and how does it work?",
    a: "We convert laser scan point cloud data into 3D BIM models, capturing existing walls, floors, and structural elements exactly as built on site today.",
  },
  {
    q: "How fast can you deliver a scan to BIM model?",
    a: "Our AI-powered workflow helps BIM experts convert up to 10,000 sq.ft. of scans into a BIM model in a day. Timelines depend on LOD, scan quality, and project scope.",
  },
  {
    q: "How do you make sure the models are reliable?",
    a: "Every model passes 100+ automated QC checkpoints, then a second reviewer checks geometry, naming, and coordination before handoff.",
  },
  {
    q: "Do you provide reality capture architecture services along with modeling?",
    a: "Yes. Our field teams can capture site data with laser scanners and reality capture architecture tools, then convert those scans into coordinated architectural BIM models.",
  },
  {
    q: "Can you handle large or complex architectural scanning services projects?",
    a: "Yes. We support large and complex projects across commercial, healthcare, educational, mission critical, hospitality, industrial, civic, and heritage facilities.",
  },
];

export const architecturalScanToBimContactDescription =
  "Tell us about your scan data, LOD requirements, and delivery timeline. Our architectural scan to BIM specialists will align the right team for your project.";
