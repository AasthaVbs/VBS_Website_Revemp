import complexMechanicalRoomsIcon from "@/assets/images/complex-mechanical-rooms-icon.png";
import fastTrackProjectsIcon from "@/assets/images/fast-track-projects-icon.png";
import largeScaleIndustrialWorksIcon from "@/assets/images/large-scale-industrial-works-icon.png";
import correctMaterialSpecificationsIcon from "@/assets/images/mep-spool-drawing/correct-material-specifications-icon.png";
import detailedDimensionsAndSpoolIdsIcon from "@/assets/images/mep-spool-drawing/detailed-dimensions-and-spool-ids-icon.png";
import fabricationReadySpoolDrawingsIcon from "@/assets/images/mep-spool-drawing/fabrication-ready-spool-drawings-icon.png";
import fasterPrefabricationTurnaroundIcon from "@/assets/images/mep-spool-drawing/faster-prefabrication-turnaround-icon.png";
import reducedInstallationErrorsIcon from "@/assets/images/mep-spool-drawing/reduced-installation-errors-icon.png";
import standardizedDrawingFormatIcon from "@/assets/images/mep-spool-drawing/standardized-drawing-format-icon.png";
import prefabricationStageIcon from "@/assets/images/prefabrication-stage-icon.png";
import { benefitIconColored, benefitIconMuted } from "@/constants/benefit-icons";
import type {
  MepBimFeatureCard,
  MepBimMeasurableResultCard,
  MepBimTechnologyTool,
  MepBimUseCaseCard,
  MepOverviewIntroContent,
  MepTrustedByContent,
} from "@/constants/mep-bim-modelling-content";

export const mepSpoolDrawingHero = {
  tag: "Spool Drawing",
  titleLead: "Eliminate Fabrication\nErrors with ",
  titleAccent: "Piping Spool Drawing Services",
  description:
    "Our pre-vetted MEP engineers prepare high quality 2D and 3D piping spool drawings to help AEC teams fasten project timelines and ensure better fabrication.",
  ctaLabel: "Get a Free Quote",
  imageSrc: "/image/spool-drawing-services-banner.jpg",
  imageAlt: "spool-drawing-services-banner",
  copyMaxWidth: 699,
  descriptionMaxWidth: 699,
} as const;

export const mepSpoolDrawingTrustedBy: MepTrustedByContent = {
  titleAccent: "Trusted",
  titleLead: " By",
  items: [
    { dashColor: "#D70416", label: "Mechanical Contractors" },
    { dashColor: "#42AA32", label: "General Contractors" },
    { dashColor: "#F0B300", label: "MEP Engineering" },
    { dashColor: "#2299D6", label: "Piping Fabricators" },
  ],
};

export const mepSpoolDrawingIntro: MepOverviewIntroContent = {
  tag: "Overview",
  titleLead: "From Isometrics to Installation-Ready ",
  titleAccent: "Piping Spool Drawings",
  paragraph1:
    "Dimensioning errors, missing weld IDs and material conflicts create delays on the shop floor. Poorly coordinated drawings force crews into last-minute field changes. Those changes raise labor costs and push schedules past deadlines. ",
  paragraph1Bold: "Outsource piping spool drawing services",
  paragraph1Tail: " to our team, and these problems go away.",
  paragraph2Lead: "Our trained ",
  paragraph2Bold: "MEP team converts",
  paragraph2Tail:
    " your 3D pipe models, isometric piping drawings, or P&IDs into ISO-compliant, shop-ready fabrication drawings. Our fabrication drawings services give you buildable spools, correct dimensions, and coordinated details your team can trust.",
  mainImage: "/image/spool-drawing-services-overview.jpg",
  imageAlt: "spool-drawing-services-overview",
};

export const mepSpoolDrawingServiceFeaturesSection = {
  tag: "What you get",
  titleLead: "What You Get with Our\n",
  titleAccent: "BIM Spool Drawing Services",
  description:
    "Close the gap between design intent and field work. Our 2D piping spool drawings give your crew clarity for fabrication and installation.",
  ctaLabel: "Get A Free Quote",
} as const;

export const mepSpoolDrawingServiceFeatureCards: MepBimFeatureCard[] = [
  {
    title: "Fabrication-Ready Spool Drawings",
    description:
      "We produce LOD 400 drawings with cut lengths, bevel angles and weld symbols. Your shop floor can fabricate without calling us to clarify details.",
    icon: fabricationReadySpoolDrawingsIcon.src,
  },
  {
    title: "Detailed Dimensions and Spool IDs",
    description:
      "Each spool carries a unique ID, exact dimensions and flange face orientation. These data align with your isometric and piping drawings.",
    icon: detailedDimensionsAndSpoolIdsIcon.src,
  },
  {
    title: "Reduced Installation Errors",
    description:
      "We create 3D piping spool drawings and cross reference them against structural and civil models. This removes clash-driven rework during installation and prefabrication.",
    icon: reducedInstallationErrorsIcon.src,
  },
  {
    title: "Faster Prefabrication Turnaround",
    description:
      "Pre-coordinated, clash-free spool packages cut shop floor hold time. Your team can fabricate multiple spool groups in parallel without sequencing conflicts.",
    icon: fasterPrefabricationTurnaroundIcon.src,
  },
  {
    title: "Correct Material Specifications",
    description:
      "Each drawing lists pipe schedules, fitting grades, types of gasket and bolt specifications according to ASME B31.3. Procurement teams can match orders to engineering design intent.",
    icon: correctMaterialSpecificationsIcon.src,
  },
  {
    title: "Standardized Drawing Format",
    description:
      "Every spool drawing adhere to the same layout, symbols and naming guide. Your team gets consistent, easy to read drawings across the entire project.",
    icon: standardizedDrawingFormatIcon.src,
  },
];

export const mepSpoolDrawingServicesSection = {
  tag: "Our Comprehensive",
  titleLine1: "Complete Range for Pipe\n",
  titleLine2: "Spool Shop Drawing Services",
  description:
    "Our piping spool drawing work covers every pipe class, joint type and fabrication standard. Each drawing is field-ready from day one.",
  ctaLabel: "Start New Project",
  ctaHref: "/contact-us",
  wideCards: true,
  titleMaxWidth: 875,
} as const;

export const mepSpoolDrawingServiceCards = [
  {
    title: "Pipe Segment Detailing",
    text: "We segment piping runs into fabricable spool units. Each unit lists cut lengths, offset dimensions and straight pipe quantities based on shop capability.",
    image: "/image/pipe-segment-detailing.jpg",
  },
  {
    title: "Joint and Weld Locations",
    text: "MEP engineers mark field welds, shop welds and flanged joints with AWS and ASME compliant symbols. Clear symbols reduce fabrication misinterpretation.",
    image: "/image/joint-and-weld-locations.jpg",
  },
  {
    title: "Material Specifications and BOM",
    text: "We tie a bill of materials to each spool. Every BOM lists pipe grades, schedule ratings and fitting standards under ASME B16.9 and B16.5.",
    image: "/image/material-specifications-bom.jpg",
  },
  {
    title: "Isometric to Spool Conversion",
    text: "We convert engineering isometrics and P&ID references into dimensioned fabrication spools. Our team uses AutoCAD Plant 3D, SP3D, or Revit MEP.",
    image: "/image/isometric-spool-conversion.jpg",
  },
  {
    title: "Nozzle and Flange Orientation Details",
    text: "Our MEP BIM team verify flange face orientation, bolt hole rotation and nozzle projection dimensions against vendor data sheets and structural tie-in drawings.",
    image: "/image/nozzle-flange-orientation-details.jpg",
  },
  {
    title: "Hanger and Support Locations",
    text: "On each drawing we indicate pipe support locations, hanger types and the positions of spring can. They are designed for structural attachment points for installation.",
    image: "/image/hanger-support-locations.jpg",
  },
  {
    title: "Callouts for Insulation and Tracing",
    text: "For our US project, engineers mark the insulation thickness, cladding type and heat tracing requirements according to the line class specifications. These callouts help with better procurement and installation planning.",
    image: "/image/callouts-for-insulation-tracing.jpg",
  },
  {
    title: "Revision Control and As-Built Update",
    text: "We track revisions with cloud markups and delta schedules. This allows drawings to remain accurate as design changes and site condition updates are made.",
    image: "/image/revision-control-built-update.jpg",
  },
];

export const mepSpoolDrawingDeliverablesSection = {
  tag: "What We Deliver",
  titleLine1: "What You Get from Our Pipe\n",
  titleLine2: "Spool Shop Drawing Service",
  titleMaxWidth: 833,
  description:
    "Our piping isometric drawings prevent conflicts before they hit the site. It promote better prefabrication planning and ensure your project stays on time and on budget.",
  descriptionMaxWidth: 694,
  ctaLabel: "Get A Free Quote",
  ctaHref: "/contact-us",
} as const;

export const mepSpoolDrawingDeliverablesCards = [
  {
    title: "2D & 3D Spool Drawings",
    text: "We produce discipline-specific, fully annotated shop drawing sets aligned with SMACNA, NEC, IPC and ASHRAE standards. Each set is clear, consistent, and ready for approval.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Fabrication Sheets with BOM",
    text: "We generate parts lists that detail every fitting, flange and pipe length. Clean lists keep your procurement lean and fast.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Assembly and Erection Details",
    text: "Our field assembly drawings show spool-to-spool connection sequences, support attachment points and flange bolt-up details. Erection crews can work without stopping for clarification.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Clash-Resolved 3D Spool Model",
    text: "We coordinate your 3D piping spool model in Navisworks or Revit and resolve every clash. Fabrication and installation teams use this model as a validated reference.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
];

export const mepSpoolDrawingTechnologyStackSection = {
  tag: "Tools & Platforms",
  titleLine1: "We Use to Deliver\n",
  titleAccent: "Spool Drawing Services",
  description:
    "Leveraging industry-leading BIM software to create accurate, coordinated, and constructible MEP models for complex projects.",
} as const;

export const mepSpoolDrawingTechnologyStackToolsRowOne: MepBimTechnologyTool[] = [
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

export const mepSpoolDrawingTechnologyStackToolsRowTwo: MepBimTechnologyTool[] = [
  { name: "Navis works", icon: "/icon/navisworks.png", iconWidth: 55, iconHeight: 85 },
  { name: "Revizto", icon: "/icon/revizto.png", iconWidth: 75, iconHeight: 75 },
  {
    name: "Bluebeam",
    icon: "/image/bluebeam-inc-vector-logo-1.jpg",
    iconWidth: 85,
    iconHeight: 91,
  },
];

export const mepSpoolDrawingWorkflowSection = {
  tag: "Our Workflow",
  titleLine1: "Our Pipe Spool Drawing ",
  titleLine2: "Services Workflow",
  description:
    "Our detailed workflow is structured to take coordinated BIM models and produce fabrication-ready pipe spool drawings in 6 steps.",
};

export const mepSpoolDrawingWorkflowSteps = [
  {
    number: "01",
    title: "Input Review and Scope Definition",
    text: "We review your 3D models, P&ID's, isometrics and line class specs. This review lays out our segmentation rationale and delivery milestones.",
  },
  {
    number: "02",
    title: "Pipe Segmentation and Spool Planning",
    text: "Piping runs are divided into fabrication ready units based on shop standard and installation sequencing. Every unit is given a unique spool ID.",
  },
  {
    number: "03",
    title: "Drawing Production and Detailing",
    text: "We detail each spool with full dimensions, weld symbols, material call outs and support locations. Every drawing reaches LOD 400 fabrication-ready detail.",
  },
  {
    number: "04",
    title: "Clash Coordination and QC Review",
    text: "We cross-reference spool drawings against structural and equipment models in Navisworks. This step resolves spatial conflicts before submission.",
  },
  {
    number: "05",
    title: "Client Review and Revision Update",
    text: "We submit drawings with systematic revision register. All mark ups are included and re-verified within agreed turnaround.",
  },
  {
    number: "06",
    title: "Final Delivery and As-Built Support",
    text: "We deliver finalized spool packages in DWG, PDF, RVT or IFC format. Each package includes full revision history and as-built support.",
  },
];

export const mepSpoolDrawingOutsourcingGuideSection = {
  tag: "Outsourcing Guide",
  titleLead: "When You Need to Outsource ",
  titleAccent: "Piping Spool Drawing Services",
  description:
    "Partner with specialists to speed up fabrication documentation. You keep consistency and hold your production schedule.",
  ctaLabel: "Let's Talk",
} as const;

export const mepSpoolDrawingOutsourcingGuideCards: MepBimUseCaseCard[] = [
  {
    title: "Prefabrication Stage",
    description:
      "Bring us in when you move from design to shop production. We optimize every pipe segment for off-site manufacturing.",
    icon: prefabricationStageIcon.src,
  },
  {
    title: "Fast-Track Projects",
    description:
      "Partner with our team when tight schedules demand fast isometric spool drawings. Your fabrication facility keeps running without gaps.",
    icon: fastTrackProjectsIcon.src,
  },
  {
    title: "Complex Mechanical Rooms",
    description:
      "Call on us when congested MEP spaces need 3D coordination. We help you avoid clashes between piping, ductwork, and electrical trays.",
    icon: complexMechanicalRoomsIcon.src,
  },
  {
    title: "Large-Scale Industrial Works",
    description:
      "Outsource piping spool drawing services when refineries or plants need high-volume spooling. We hold consistent quality across thousands of unique pipe segments.",
    icon: largeScaleIndustrialWorksIcon.src,
  },
];

export const mepSpoolDrawingMeasurableOutcomesSection = {
  tag: "Measurable Outcomes",
  titleLead: "Measurable Impact of Our\n",
  titleAccent: "Fabrication Drawings Services",
  description:
    "Our fabrication drawings services improve project performance and your bottom line. Correct data in your fabrication and installation workflows drives greater ROI.",
} as const;

export const mepSpoolDrawingMeasurableOutcomeCards: MepBimMeasurableResultCard[] = [
  {
    value: "40%",
    valueColor: "#42AA32",
    title: "Faster Prefabrication Turnaround",
    description:
      "Pre-coordinated, clash-free spool packages let your shop fabricate in parallel. Schedules compress without added crew headcount or overtime costs.",
  },
  {
    value: "60%",
    valueColor: "#42AA32",
    title: "Reduction in Field Rework",
    description:
      "Isometric piping spool drawings with resolved conflicts and verified measurements eliminates installation errors. Your crew avoids field cutting, re-welding, and component re-procurement.",
  },
  {
    value: "50%",
    valueColor: "#42AA32",
    title: "Fewer Material Procurement Errors",
    description:
      "Spool-level bills of materials tied to pipe class specifications cut over-ordering, substitution errors, and procurement delays during fabrication mobilization.",
  },
  {
    value: "25%",
    valueColor: "#42AA32",
    title: "Decrease in Installation Labor Hours",
    description:
      "Sequenced assembly details and flange orientation callouts cut erection crew decision time. Your site installation runs faster and more predictably.",
  },
];

export const mepSpoolDrawingResourcesSection = {
  tag: "Resources",
  titleLine1: "Resources on ",
  titleLine2: "pipe spool drawing",
  description:
    "Explore technical thought leadership and actionable strategies designed to optimize your production workflows and scale without compromising standards.",
  viewAllHref: "/bim-resources/",
  serviceFilter: "MEP Engineering Firms",
} as const;

export const mepSpoolDrawingProjectCta = {
  titleLine1: "Your Strategic Partner for\n",
  titleLine2: "Pipe Spool Shop Drawings",
  description:
    "We apply US BIM standards and technical expertise to deliver correct spool drawings with faster turnaround.",
  cta: "Book a Quick Call",
  ctaHref: "/contact-us",
} as const;

export const mepSpoolDrawingFaqSection = {
  tag: "FAQs",
  description:
    "Explore answers to common questions about our services, workflows, deliverables, timelines, and project collaboration.",
} as const;

export const mepSpoolDrawingFaqs = [
  {
    q: "How do you make sure spool drawings are correct for fabrication?",
    a: "We run every spool drawing through a structured QC process. This includes dimensional checks against your 3D model, clash coordination in Navisworks and a review of weld symbols and material callouts against ASME B31.3.",
  },
  {
    q: "Can you work from our model, markup or isometric sketches?",
    a: "Yes. We accept coordinated 3D models, marked-up PDFs, isometric sketches, and P&IDs. Our team converts these inputs into dimensioned, fabrication-ready spool packages aligned to your shop standards.",
  },
  {
    q: "Can spool drawings be customized to my fabrication standards?",
    a: "Absolutely. We adapt spool segmentation, naming conventions, weld symbols, title blocks, and BOM formats to match your fabricator standards and project specifications before production begins.",
  },
  {
    q: "How much do spool drawing services cost?",
    a: "Pricing depends on spool count, pipe class complexity, revision cycles, and delivery format. Share your model or isometric package and we will provide a clear, fixed-scope quote with turnaround timelines.",
  },
  {
    q: "How quickly can you deliver spool drawings?",
    a: "Typical packages start within an agreed kickoff window and scale with volume. Priority and fast-track packages are available when your fabrication shop needs drawings to stay on the production schedule.",
  },
] as const;
