import asBuiltDrawingServicesImg from "@/assets/images/as-built-drawing-services.jpg";
import { benefitIconColored, benefitIconMuted } from "@/constants/benefit-icons";
import type { MepBimTechnologyTool } from "@/constants/mep-bim-modelling-content";
import { acsServicePagesResourcesSection } from "@/constants/shared-sections";

/** Temporary placeholders until service/hero art is provided */
const asBuiltPlaceholderImg = "/image/as-built.jpg";

export const asBuiltModelingStatsStrip = [
  { value: "4000+", color: "text-vbs-red", label: "Projects Delivered" },
  { value: "300+", color: "text-vbs-green", label: "Global Clients" },
  { value: "11+", color: "text-vbs-yellow", label: "Years of Experience" },
  { value: "500+", color: "text-vbs-blue", label: "Scan to BIM Specialists" },
];

export const asBuiltModelingHero = {
  tag: "As-built BIM Modeling",
  titleLead: "As Built BIM Modeling Services\nFor ",
  titleAccent: "Fast and Accurate Construction Documentation",
  description:
    "It can take weeks of manual effort to turn raw scan data into usable drawings. Our BIM experts use an AI-enabled workflow to produce code-compliant coordinated as-built models.",
  ctaLabel: "Get a Free Quote",
  imageSrc: asBuiltPlaceholderImg,
  imageAlt: "As Built BIM Modeling Services",
  copyMaxWidth: 716,
  descriptionMaxWidth: 699,
};

export const asBuiltModelingIntro = {
  tag: "Overview",
  titleLead: "As-Built BIM Modeling Company for ",
  titleAccent: "Reliable, True to Site Models",
  titleStacked: false,
  titleMaxWidth: 743,
  description:
    "Our as-built BIM modeling services helps to convert scan data to as-built BIM model faster and meeting quality guidelines. So your team can hit delivery deadlines without any delays or reworks on site.",
  sideDescription:
    "As a leading as built BIM modeling provider, we offer construction as built drawings with AI-assisted workflow. The combination of our BIM experts' skills and AI helps increase delivery capacity, reduce rework and improve coordination. Your team stays focused on core design work, not manual drafting.",
  featuresTitle: "Our As-Built BIM Modeling Experts Ready to Support Your Firm",
  features: [
    "End-to-end coverage from scan registration to final BIM as-built model delivery",
    "Compliance with AIA, COBie, NBIMS and other international standards for as built documents",
    "Tools like Revit, Recap and Navisworks power every as-built BIM model",
    "Real time collaboration platforms keep your team connected to project files",
    "Automated QA/QC checks run through 100+ points before delivery",
    "Deliverables include architectural, structural and MEPF as-built BIM models",
  ],
  mainImage: asBuiltDrawingServicesImg,
  imageAlt: "As-Built BIM modeling overview",
};

export const asBuiltModelingOurClientsSection = {
  tag: "Our Clients",
  titleLead: "Trusted by",
  titleAccent: "Top AEC Firms",
  titleAccentFirst: false,
  breakTitle: true,
  description:
    "Supporting architecture, engineering, construction, and reality capture teams across diverse project types and workflows.",
};

export const asBuiltModelingServicesSection = {
  tag: "Our Services",
  titleLine1: "Our Comprehensive Range of ",
  titleLine2: "As-Built BIM Modeling Services",
  description:
    "From the first as built survey to final as built documents, we support your entire as-built BIM modeling project.",
  ctaLabel: "Start New Project",
  ctaHref: "#as-built-modeling-page-contact",
  wideCards: true,
  titleMaxWidth: 720,
};

export const asBuiltModelingServiceCards = [
  {
    title: "Architectural As-Built Modeling",
    text: "We model walls, doors, windows, floors and finishes exactly as they exist on site. Every set of architectural as built drawings reflects true building conditions for renovation and facility use.",
    image: asBuiltPlaceholderImg,
  },
  {
    title: "Structural As-Built Modeling",
    text: "We model columns, beams, slabs and foundations from your scan data. This gives structural teams a reliable base for retrofit, expansion, and renovation planning across every project.",
    image: asBuiltPlaceholderImg,
  },
  {
    title: "MEPF As-Built Modeling",
    text: "Our engineers model HVAC, plumbing, electrical and fire protection systems from scan data. This delivers coordinated MEPF models that your maintenance and construction teams can trust.",
    image: asBuiltPlaceholderImg,
  },
  {
    title: "Construction As-Builts & As-Built Plans",
    text: "We prepare construction as builts and as built plans that match real site conditions. Contractors and owners get documents they can trust for every decision.",
    image: asBuiltPlaceholderImg,
  },
  {
    title: "As-Built Drafting Services",
    text: "Our as built drafting services turn scan data and field notes into clean drawings. Your architects and engineers get code-compliant construction as built drawings ready to use.",
    image: asBuiltPlaceholderImg,
  },
  {
    title: "CAD to BIM Conversion for As-Built Documentation",
    text: "We convert your existing 2D drawings into accurate 3D as-built BIM models. This turns older as built documents into a usable, modern set of construction as built drawings.",
    image: asBuiltPlaceholderImg,
  },
];

export const asBuiltModelingServiceMetrics = [
  { value: "10,000 Sq.Ft.", label: "Per Day Delivery", valueColor: "#D70416" },
  { value: "100+", label: "Automated QC Points", valueColor: "#42AA32" },
  { value: "20M+ Sq. Ft.", label: "Scan Converted", valueColor: "#F0B300" },
  { value: "LOD 200-400", label: "Modeling Capability", valueColor: "#2299D6" },
] as const;

export const asBuiltModelingWhyChooseSection = {
  tag: "Why Choose Us",
  titleLead: "Why Choose Us for ",
  titleAccent: "As-Built BIM Modeling Services?",
  description:
    "Our teams have advanced BIM skills, AI-enabled workflows and real project deadlines and site conditions.",
  ctaLabel: "Start New Project",
  ctaHref: "#as-built-modeling-page-contact",
};

export const asBuiltModelingWhyChooseItems = [
  {
    prefix: "0",
    suffix: "1",
    prefixColor: "#D70416",
    title: "30-40% Faster Project Kick-off",
    description:
      "Our as-built BIM modeling services make sure your team is working with reliable as-built data from day one.",
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
      "Clients and contractors review reliable as built documents early, so design choices and approvals move faster.",
  },
] as const;

export const asBuiltModelingWorkflowSection = {
  tag: "Workflow",
  titleLine1: "Our Process Flow for ",
  titleLine2: "As-Built BIM Modeling",
  description:
    "Our process moves from raw scan data to a construction-ready model in five clear steps. We verify quality in each step before we move forward.",
};

export const asBuiltModelingWorkflowSteps = [
  {
    number: "01",
    title: "Scan Data Intake & Review",
    text: "Our team reviews the laser scanning for as built drawings. We check quality and scope to define the right modeling approach for your project.",
  },
  {
    number: "02",
    title: "Data Registration & Alignment",
    text: "Using Recap, Revit and Navisworks, our team cleans and registers your scan data. Every point gets aligned so your final model matches actual site conditions.",
  },
  {
    number: "03",
    title: "AI-powered BIM Model Development",
    text: "Our AI-powered workflow speeds up model creation across every project discipline. BIM experts develop architectural, structural and MEPF elements to LOD 200 through LOD 400.",
  },
  {
    number: "04",
    title: "Automation-based Quality Control",
    text: "Before delivery, every model passes through 100+ automated QC points. This catches clashes and errors early, so your team receives a clean, construction-ready file every time.",
  },
  {
    number: "05",
    title: "Final Delivery & Documentation",
    text: "We deliver your completed as-built BIM model along with as built documents and drawings. Everything gets formatted exactly how your team needs it for daily project use.",
  },
];

export const asBuiltModelingTechnologyStackSection = {
  tag: "Tools & Platforms",
  titleLine1: "We Use to Deliver ",
  titleAccent: "BIM Modeling Services",
  description:
    "Leveraging industry-leading BIM software to create accurate, coordinated, and constructible MEP models for complex projects.",
};

/** Figma 3265:37718 — Tools & Platforms grid */
export const asBuiltModelingTechnologyStackToolsRowOne: MepBimTechnologyTool[] = [
  { name: "Autodesk Revit", icon: "/icon/revit.png", iconWidth: 84, iconHeight: 84 },
  { name: "Lumion", icon: "/icon/lumion.png", iconWidth: 74, iconHeight: 74 },
  { name: "AutoCAD", icon: "/icon/autocad.png", iconWidth: 84, iconHeight: 84 },
  {
    name: "ReCap Pro",
    icon: "/image/ReCap-Pro-2023-lockup-Blk-OL-ADSK-No-Year-Stacked-1.jpg",
    iconWidth: 71,
    iconHeight: 66,
  },
  { name: "BIM 360", icon: "/image/bim-360.png", iconWidth: 66, iconHeight: 79 },
];

export const asBuiltModelingTechnologyStackToolsRowTwo: MepBimTechnologyTool[] = [
  { name: "Navis works", icon: "/icon/navisworks.png", iconWidth: 55, iconHeight: 85 },
  { name: "Revizto", icon: "/icon/revizto.png", iconWidth: 75, iconHeight: 75 },
  {
    name: "Bluebeam",
    icon: "/image/bluebeam-inc-vector-logo-1.jpg",
    iconWidth: 85,
    iconHeight: 91,
  },
];

export const asBuiltModelingAdvantagesSection = {
  tag: "Advantages",
  titleLine1: "Benefits Of Outsourcing ",
  titleLine2: "As-Built BIM Modeling Services",
  titleMaxWidth: 746,
  descriptionMaxWidth: 618,
  description:
    "Outsourcing your as-built BIM modeling work gives your firm faster turnarounds and fewer errors. You get models your whole team can rely on daily.",
  ctaLabel: "Contact Now",
  ctaHref: "#as-built-modeling-page-contact",
};

export const asBuiltModelingAdvantagesCards = [
  {
    title: "True-to-Site Model Quality",
    text: "Every as-built BIM model we deliver reflects real, onsite building conditions. Your team gets reliable data for renovation, retrofit and construction decisions every time.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Better Cross-Team Coordination",
    text: "Coordinated architectural, structural and MEPF models help your design and construction teams catch clashes early. This reduces costly delays long before they reach the job site.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Compliance-Ready Documentation",
    text: "We build every as-built BIM model to meet AIA, ISO 19650, COBie, IFC, NBIMS and other global standards. Your as built documents stay ready for audits and inspections year round.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Clear Visualization for Every Stakeholder",
    text: "Rich, detailed 3D models help owners, developers, surveyors, architects, engineers, contractors and reality capture professionals see the real building before work begins. This reduces miscommunication across your whole project team every single day.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Reliable As-Built Plans and Records",
    text: "Your team gets organized as built plans and construction as built drawings. Facility managers gain a dependable record for daily maintenance and future building upgrades.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Lower Costs With Ready to Use Data",
    text: "Our AI-driven workflow cuts modeling time so your firm spends less on rework. You get clean and usable data ready for every project phase and budget.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
];

export const asBuiltModelingProjectCta = {
  titleLine1: "Ready to Turn Your Scan Data Into a ",
  titleLine2: "Reliable As-built Model?",
  description:
    "Share your laser scan or point cloud data with our team. We handle registration, modeling and QC, so you get a construction-ready as-built model fast.",
  cta: "Contact Us",
  ctaHref: "#as-built-modeling-page-contact",
};

export const asBuiltModelingIndustriesIntro = {
  titleLine1: "Industries We Support with ",
  titleLine2: "As-Built BIM Modeling Services",
  titleMaxWidth: 758,
  description:
    "From iconic high-rises to large-scale infrastructure, our as-built modeling services support diverse industries with practical, scalable solutions for their unique project goals.",
};

export const asBuiltModelingResourcesSection = acsServicePagesResourcesSection;

export const asBuiltModelingTestimonialsDescription =
  "Client stories set out how our scan to BIM expertise reduced costs, improved coordination and sped project delivery through collaboration.";

export const asBuiltModelingFaqSection = {
  tag: "FAQs",
  description:
    "Everything you need to know about BIM modeling services, project requirements, workflows, and deliverables.",
};

export const asBuiltModelingFaqs = [
  {
    q: "What is included in your as-built BIM modeling services?",
    a: "We convert your laser scan or as built survey data into coordinated architectural, structural and MEPF as-built BIM models. These stay ready for construction or facility use right away.",
  },
  {
    q: "How accurate is your as-built BIM model compared to actual site conditions?",
    a: "Every model is aligned to registered scan data and verified through 100+ automated QC points plus expert review, so deliverables reflect true-to-site conditions within the agreed LOD tolerance.",
  },
  {
    q: "Do you offer laser scanning for as built drawings, or only modeling from existing scans?",
    a: "We specialize in modeling from existing laser scans and point clouds. If you need capture support, we can coordinate with scanning partners and then deliver the as-built BIM model.",
  },
  {
    q: "Can you turn old CAD files into as built drafting services deliverables without new scans?",
    a: "Yes. Our CAD to BIM conversion workflow upgrades legacy 2D drawings into accurate 3D as-built BIM models and construction as built drawings when new scans are not available.",
  },
  {
    q: "What LOD do you deliver for as-built BIM modeling projects?",
    a: "We deliver LOD 200 through LOD 400 based on your project scope, including architectural, structural, and MEPF as-built BIM models ready for coordination and documentation.",
  },
  {
    q: "How fast can your team deliver an as-built BIM model?",
    a: "Our workflow supports up to 10,000 sq. ft. per day. After intake we confirm scope and schedule quickly, then move through registration, modeling, QC, and final delivery.",
  },
];

export const asBuiltModelingContactDescription =
  "Tell us about your scan data, documentation standards, and delivery timeline. Our as-built BIM modeling specialists will align the right team for your project.";
