// @ts-nocheck
import threeDayOnboardingIcon from "@/assets/images/3-day-onboarding.svg";
import aiPowerWorkflowIcon from "@/assets/images/ai-power-workflow.png";
import aiPoweredScanIcon from "@/assets/images/ai-owered-scan.svg";
import architecturalBimModelingImg from "@/assets/images/architectural-bim-modeling.jpg";
import architecturalStructuralServiceImg from "@/assets/images/architectural-structural-service.png";
import bimModelingCoordinationIcon from "@/assets/images/bim-modeling-coordination.png";
import bimSupportSdDdImg from "@/assets/images/bim-support-sd-dd.jpg";
import cadToBimImg from "@/assets/images/cad-to-bim.jpg";
import dedicatedTeamReadyIcon from "@/assets/images/dedicated-team-ready.png";
import designSupportDocumentationIcon from "@/assets/images/design-support-documentation.png";
import flexibleEngagementModelsIcon from "@/assets/images/flexible-engagement-models.png";
import projectSupportHandoverIcon from "@/assets/images/project-support-handover.png";
import revitCadDraftingServicesImg from "@/assets/images/revit-cad-drafting-services.jpg";
import revitFamilyImg from "@/assets/images/revit-family.jpg";
import riskFreeTrialIcon from "@/assets/images/risk-free-trial.png";
import schematicDesignImg from "@/assets/images/schemetic-design.jpg";
import structuralArchitecturalBimServicesImg from "@/assets/images/structural-architectural-bim-services-for-project 1.jpg";
import structuralBimServicesImg from "@/assets/images/structural-bim-services.jpg";
import topBimExpertIcon from "@/assets/images/top-bim-expert.png";
import usCodeCompliantDeliveryIcon from "@/assets/images/us-code-compliant-delivery.png";
import usCodeCompliantModelsIcon from "@/assets/images/us-code-complaints-models.svg";
import { benefitIconColored, benefitIconMuted } from "@/constants/benefit-icons";
import { ROUTES } from "@/constants/navigation";
import { acsServicePagesResourcesSection } from "@/constants/shared-sections";
import { WHY_CHOOSE_ICON_TOP_BIM_EXPERTS } from "@/constants/service-why-choose-icons";

export const architectureStatsStrip = [
  { value: "2000+", color: "text-vbs-red", label: "Projects Delivered" },
  { value: "300+", color: "text-vbs-green", label: "Global Clients" },
  { value: "11+", color: "text-vbs-blue", label: "Years of Experience" },
  { value: "250+", color: "text-vbs-yellow", label: "US-trained Architects & Engineers" },
];

export const architectureHero = {
  tag: "Architecture & Structure",
  titleLead: "AI-Enhanced Architectural and Structural Services for ",
  titleAccent: "Faster Project Delivery",
  description:
    "From schematic design to construction documentation, we help AEC firms, architects, structural engineers, and contractors deliver precise, code-compliant BIM models faster.",
  ctaLabel: "View All Service",
  imageSrc: architecturalStructuralServiceImg,
  imageAlt: "architectural-structural-service",
  copyMaxWidth: 753,
  descriptionMaxWidth: 696,
};

export const architectureIntroFeatures = [
  { label: "US Code-Compliant Deliverables", icon: usCodeCompliantModelsIcon },
  { label: "Top 1% Vetted Architects & Engineers", icon: WHY_CHOOSE_ICON_TOP_BIM_EXPERTS },
  { label: "AI-Assisted BIM Generation", icon: aiPoweredScanIcon },
  { label: "Delivery Infrastructure Ready in 3 Days", icon: threeDayOnboardingIcon },
];

export const architectureIntroCopy = {
  tag: "Overview",
  titleLead: "AI-driven Workflow Delivering Scalable Structural and ",
  titleAccent: "Architectural BIM Support",
  titleParts: [
    {
      text: "AI-driven Workflow Delivering ",
      className: "text-section font-medium text-[#111111]",
    },
    {
      text: "Scalable Structural and ",
      className: "text-section font-medium text-[#111111] block",
    },
    {
      text: "Architectural BIM Support",
      className: "text-section text-accent font-light",
    },
  ],
  descriptions: [
    "We are a Houston-based Architecture Services Company delivering end-to-end Revit Architectural Services across every stage of the project lifecycle. From Schematic Design Services and Design Development to Construction Documentation Services, our pre-vetted US-trained architects and engineers deliver code-compliant, coordination-ready models and drawing sets.",
    "AI-assisted BIM generation and automation workflows streamline model development and reduce manual drafting effort. The result is faster delivery of accurate, code-compliant architectural and structural documentation.",
    "As a trusted Structural and Architecture Services Provider in the USA, we ensure every deliverable aligns with IBC, ADA, and local jurisdiction standards.",
  ],
  mainImage: structuralArchitecturalBimServicesImg,
};

export const architectureWhatYouGetSection = {
  tag: "What You Get",
  titleLine1: "What You Get with Our ",
  titleLine2: "Architectural & Structural Services",
  titleMaxWidth: 786,
  description:
    "Get data-validated, code-compliant Revit models and permit-ready construction documentation tailored exactly to your firm's standards and project timelines.",
  resultLabel: "Result",
  resultText:
    "Accelerated coordination, zero spatial conflicts between aesthetics and structural integrity, and streamlined approval timelines across all design phases.",
};

export const architectureWhatYouGetCards = [
  {
    title: "Design Support & Documentation",
    icon: designSupportDocumentationIcon,
    elevated: false,
    lines: [
      "Schematic Design Services through Construction Documentation",
      "AI-assisted design development drafting with material callouts",
      "Permit-ready drawing sets aligned with AHJ requirements",
      "Coordinated architectural and structural drawing packages",
    ],
  },
  {
    title: "BIM Modeling & Coordination",
    icon: bimModelingCoordinationIcon,
    elevated: false,
    lines: [
      "AI-assisted LOD 200–400 BIM model generation",
      "Custom Revit family creation for doors, windows & fixtures",
      "Clash coordination with structural and MEP disciplines",
      "Code-compliant parametric architectural families",
    ],
  },
  {
    title: "Project Support & Handover",
    icon: projectSupportHandoverIcon,
    elevated: false,
    lines: [
      "Full support across design, construction, and handover stages",
      "As-built modeling and LOD 500 FM-ready documentation",
      "BIM 360 / ACC collaborative project delivery",
      "Quantity take-offs and BOQ extraction from coordinated models",
    ],
  },
];

export const architectureFullSpectrumSection = {
  tag: "Services",
  titleLine1: "Architectural and Structural Services ",
  titleLine2: "from Concept to Construction",
  description:
    "Coordinated architectural and structural services support projects from concept to construction through BIM-driven workflows that enhance design accuracy, interdisciplinary coordination, and project delivery.",
  ctaLabel: "Let's Discuss",
  ctaHref: "#architecture-page-contact",
  wideCards: true,
};

export const architectureFullSpectrumCards = [
  {
    title: "Schematic Design",
    text: "Establish a clear project direction through conceptual layouts, spatial planning, and early-stage design studies. Schematic design deliverables help evaluate design alternatives, assess project feasibility, and align stakeholders before advancing into detailed development.",
    image: schematicDesignImg.src,
    href: "#",
  },
  {
    title: "Design Development",
    text: "Transform approved concepts into coordinated, technically detailed designs ready for documentation and construction planning. Design development workflows refine building systems, material selections, and project requirements while maintaining alignment between architectural intent and structural performance.",
    image: bimSupportSdDdImg.src,
    href: "#",
  },
  {
    title: "Construction Documentation",
    text: "Support permitting, bidding, and construction activities with comprehensive documentation packages developed for clarity and accuracy. Detailed plans, elevations, sections, schedules, and construction details help reduce ambiguities, improve communication, and facilitate efficient project delivery.",
    image: revitCadDraftingServicesImg.src,
    href: "#",
  },
  {
    title: "Architectural BIM Modeling",
    text: "Improve design accuracy, visualization, and multidisciplinary coordination with intelligent architectural BIM models developed to LOD 200-500 requirements. Supporting new construction, renovation, and expansion projects, these models enable better design validation, streamlined documentation, and a reliable foundation for project execution.",
    image: architecturalBimModelingImg.src,
    href: "/bim-modeling-services/architectural-bim-services/",
  },
  {
    title: "Structural BIM Modeling",
    text: "Gain a coordinated digital representation of structural systems, including steel, concrete, rebar, timber, and foundation elements. Detailed structural BIM models support constructability reviews, clash-free coordination, fabrication planning, and accurate documentation throughout the design and construction process.",
    image: structuralBimServicesImg.src,
    href: "#",
  },
  {
    title: "Revit Family Creation",
    text: "Enhance BIM efficiency and model consistency with custom Revit families developed to project and organizational standards. Parametric architectural, structural, and manufacturer-specific families support standardized modeling workflows, accurate documentation, and long-term BIM library management.",
    image: revitFamilyImg.src,
    href: "/bim-modeling-services/revit-family-creation/",
  },
  {
    title: "CAD to BIM Conversion",
    text: "Convert legacy 2D architectural and structural drawings into coordinated BIM models that support modern project workflows. CAD-to-BIM conversion improves design coordination, enhances visualization, streamlines documentation, and creates data-rich digital assets for future project phases.",
    image: cadToBimImg.src,
    href: "/bim-modeling-services/cad-to-bim/",
  },
];

export const architectureAiBimWorkflowSection = {
  tag: "AI-BIM Workflow",
  titleParts: [
    { text: "See Our ", className: "text-section font-medium text-[#111111]" },
    { text: "AI-Powered BIM ", className: "text-section text-accent font-light" },
    { text: "Generation in Action", className: "text-section font-medium text-[#111111]" },
  ],
  description:
    "Watch how we combine the expertise of our pre-vetted US-trained Architects and Engineers with proprietary AI tools to build flawless, high-LOD models 30% faster.",
  videoAriaLabel: "Play AI-powered BIM generation video",
};

export const architectureDisciplinesSection = {
  tag: "Core Pointes",
  titleLine1: "Core Architectural and Structural ",
  titleLine2: "Expertise Delivered Through BIM",
  titleLine3: "",
  titleMaxWidth: 759,
  descriptionMaxWidth: 780,
  description:
    "Each discipline demands a distinct technical approach. Virtual Building Studio models every system with code-accurate detail and full coordination across structural integrity and architectural form.",
};

export const architectureDisciplinePanels = [
  {
    id: "arch",
    tabLabel: "Architectural Services",
    title: "Architectural BIM Services",
    description:
      "BIM specialists at our Architecture Services Company transform conceptual sketches and spatial intents into highly precise, data-rich 3D models. We develop coordinated layouts, interior millwork details, and code-compliant CD sets. Outsourcing Architectural Services to us helps you streamline the bidding, regulatory permitting, and field installation phases for complex commercial, residential, and institutional projects worldwide.",
    meta: [
      {
        label: "Standards Applied",
        value: "IBC, ADA, AWI Standards, Local AHJ Requirements, Project-Specific BIM Standards",
      },
      {
        label: "Key Systems Modeled",
        value:
          "Walls, Doors, Windows, Floors, Roofs, Ceilings, Curtain Walls, Stairs, Railings, Interior Components",
      },
      {
        label: "LOD Capability",
        value: "LOD 200 Schematic → LOD 300 Design Development → LOD 400 Construction Docs",
      },
    ],
    deliverablesTitle: "Architectural Deliverables",
    deliverables: [
      "Coordinated architectural models with structural and MEP links",
      "Permit-ready drawing sets per AHJ requirements",
      "Door, window, finish, and room schedules from the model",
      "Exterior and interior elevations with material callouts",
      "Reflected ceiling plans with lighting coordination zones",
      "Wall assembly details and building envelope sections",
      "Architectural shop drawings for custom millwork and façade",
    ],
  },
  {
    id: "struct",
    tabLabel: "Structural Services",
    title: "Structural BIM Services",
    description:
      "Structural BIM specialists develop coordinated steel, concrete, timber, and foundation models with fabrication-ready LOD. We support constructability reviews, rebar detailing, and interdisciplinary coordination for commercial, industrial, and institutional projects, helping teams deliver accurate structural documentation from schematic design through construction.",
    meta: [
      {
        label: "Standards Applied",
        value: "AISC, ACI 318, ASCE 7, IBC, Local AHJ Requirements, Project-Specific BIM Standards",
      },
      {
        label: "Key Systems Modeled",
        value:
          "Steel Framing, Concrete, Rebar, Foundations, Timber, Precast, Connections, Lateral Systems",
      },
      {
        label: "LOD Capability",
        value: "LOD 200 Schematic → LOD 300 Design Development → LOD 400 Construction Docs",
      },
    ],
    deliverablesTitle: "Structural Deliverables",
    deliverables: [
      "Coordinated structural models linked with architectural and MEP disciplines",
      "Framing plans, sections, and connection details",
      "Rebar shop drawings and bending schedules",
      "Foundation and slab models with reinforcement",
      "Structural schedules and member size tables",
      "IFC and DWG exports for engineer review",
      "Clash detection reports for interdisciplinary coordination",
    ],
  },
];

export const architectureWorkflowSection = {
  tag: "Service Workflow",
  titleLine1: "Our ",
  titleLine2: "Revit Architectural Services",
  titleLine3: " and Structural Workflow",
  description:
    "AI-powered six clearly defined phases, from project initiation to as-built documentation, each delivering verifiable outputs your team can act on without delays.",
};

export const architectureWorkflowSteps = [
  {
    number: "01",
    title: "Project Initiation & BEP Setup",
    text: "Your architectural briefs, site surveys, redlines, and project specifications are reviewed and onboarded. LOD requirements are defined, collaboration workflows are configured in Autodesk BIM 360/ACC, and shared parameters and coordinate references are verified before work begins.",
  },
  {
    number: "02",
    title: "Schematic Design Support",
    text: "Massing models, site plans, and preliminary floor layouts are drafted based on your design intent and markups. Space allocation, early code compliance checks, and owner review presentations are supported through accurate Revit drafting at the SD stage.",
  },
  {
    number: "03",
    title: "Design Development Drafting",
    text: "Approved schematic markups are advanced into fully resolved DD drawings in Revit, including wall assemblies, door or window schedules, material callouts, and preliminary structural coordination, all built from your redlines and direction.",
  },
  {
    number: "04",
    title: "Construction Documentation",
    text: "Permit-ready drawing sets, details, schedules, and specifications are drafted and coordinated from your redline markups. All Construction Documentation deliverables meet contractor, fabricator, and AHJ submission standards for the project jurisdiction.",
  },
  {
    number: "05",
    title: "Redline Markup Updates & Revisions",
    text: "Architectural and structural models are updated to reflect your issued redlines and review comments. Clash detection is run in Navisworks, and model revisions are tracked and resolved before updated drawing sets are reissued.",
  },
  {
    number: "06",
    title: "As-Built Documentation Support",
    text: "Models are updated to reflect site conditions and construction revisions based on your inputs. Final deliverables are issued in RVT, IFC, DWG, and PDF formats, ready for client handover or record documentation purposes.",
  },
];

export const architectureQualityAssuranceSection = {
  tag: "Quality Assurance",
  titleLine1: "Our Quality Assurance Process for ",
  titleLine2: "Every Architectural & Structural Deliverable",
  titleParts: [
    {
      text: "Our Quality Assurance Process for ",
      className: "mep-figma-qa__title-dark",
    },
    {
      text: "Every Architectural & Structural Deliverable",
      className: "mep-figma-qa__title-accent",
    },
  ],
  titleMaxWidth: 1100,
  description:
    "Every project deliverable goes through a structured QA process before it reaches your team, ensuring accuracy, coordination, and construction-ready from the first submission.",
  quote:
    "Successful project delivery depends on the quality of information shared across teams. Structured quality assurance workflows help ensure that architectural and structural models, drawings, and documentation remain accurate, coordinated, and ready for construction.",
  quoteAttribution: "-Expert Insight",
};

export const architectureQualityAssuranceStages = [
  {
    prefix: "0",
    suffix: "1",
    prefixColor: "#42AA32",
    title: "Input Review & Markup Validation",
    text: "All input redlines, markups, and project specifications are reviewed before drafting begins. Ambiguities are flagged and resolved upfront, eliminating rework caused by misread intent.",
    elevated: false,
  },
  {
    prefix: "0",
    suffix: "2",
    prefixColor: "#2299D6",
    title: "In-Progress QC & Coordination",
    text: "Internal QC checks are performed at each LOD milestone. Architectural and structural models are cross-checked for dimensional accuracy, annotation consistency, and inter-disciplinary conflicts before advancing.",
    elevated: false,
  },
  {
    prefix: "0",
    suffix: "3",
    prefixColor: "#F0B300",
    title: "Pre-Delivery Senior Review",
    text: "Every drawing set undergoes a final review by a senior BIM lead. Deliverables are verified against AHJ requirements and markup intent, ensuring what you receive is submission ready.",
    elevated: false,
  },
];

export const architectureQualityAssuranceStats = [
  { value: "3 Step", valueColor: "#D70416", label: "Quality assurance checks" },
  { value: "100%", valueColor: "#42AA32", label: "Senior review pre-delivery" },
  { value: "30%", valueColor: "#2299D6", label: "Efficiency gain" },
  { value: "4X", valueColor: "#F0B300", label: "Cost saving" },
];

export const architectureServiceBenefitsSection = {
  tag: "Service benefits",
  titleLine1: "Key Benefits of Outsourcing ",
  titleLine2: "Architectural and Structural Services",
  titleMaxWidth: 920,
  descriptionMaxWidth: 850,
  description:
    "Coordinated architectural and structural workflows help project teams improve design quality, streamline documentation, and reduce project risks throughout the building lifecycle.",
  ctaLabel: "Let's Talk",
  ctaHref: "#architecture-page-contact",
};

const ARCH_BENEFIT_ICON_COLORED = benefitIconColored;
const ARCH_BENEFIT_ICON_MUTED = benefitIconMuted;

export const architectureServiceBenefitsCards = [
  {
    title: "Improved Design Accuracy",
    text: "Architectural and structural BIM models provide a reliable foundation for design validation, helping project teams identify issues early and improve accuracy throughout the project lifecycle.",
    icon: ARCH_BENEFIT_ICON_MUTED,
    iconHover: ARCH_BENEFIT_ICON_COLORED,
  },
  {
    title: "Streamlined Design Development",
    text: "Design Development Services help refine approved concepts into coordinated, technically detailed solutions that align architectural intent with structural requirements and project objectives.",
    icon: ARCH_BENEFIT_ICON_MUTED,
    iconHover: ARCH_BENEFIT_ICON_COLORED,
  },
  {
    title: "Construction-Ready Documentation",
    text: "Construction Documentation Services provide detailed plans, elevations, sections, schedules, and construction details that support permitting, bidding, and construction activities with greater consistency and accuracy.",
    icon: ARCH_BENEFIT_ICON_MUTED,
    iconHover: ARCH_BENEFIT_ICON_COLORED,
  },
  {
    title: "Enhanced Coordination Across Disciplines",
    text: "Coordinated Architecture Services streamline collaboration between architects, structural engineers, consultants, and contractors, reducing communication gaps and supporting efficient project delivery.",
    icon: ARCH_BENEFIT_ICON_MUTED,
    iconHover: ARCH_BENEFIT_ICON_COLORED,
    textMaxWidth: 433,
  },
  {
    title: "Better Design Visualization and Decision-Making",
    text: "Schematic Design Services and BIM workflows enable stakeholders to evaluate layouts, building forms, and project requirements with greater clarity before detailed development begins.",
    icon: ARCH_BENEFIT_ICON_MUTED,
    iconHover: ARCH_BENEFIT_ICON_COLORED,
  },
  {
    title: "Greater Efficiency Through BIM Workflows",
    text: "Revit Architectural Services and coordinated BIM deliverables improve project efficiency by supporting clash-free coordination, reducing rework, and creating accurate documentation for construction and facility management.",
    icon: ARCH_BENEFIT_ICON_MUTED,
    iconHover: ARCH_BENEFIT_ICON_COLORED,
  },
];

export const architectureWhyChooseSection = {
  tag: "Why Choose Us",
  titleLine1: "Why Leading AEC Firms Choose Our ",
  titleAccentLead: "",
  titleAccentRest: "Architectural & Structural Services",
  titleMaxWidth: 1100,
  descriptionMaxWidth: 900,
  description:
    "Partner with a proven architecture and structural services company delivering overnight production speed, strict code compliance, and scalable drafting capacity.",
  ctaLabel: "Build Your Team",
  ctaHref: ROUTES.contact,
  gridRows: [3, 3],
};

export const architectureWhyChooseItems = [
  {
    title: "Top 1% BIM Experts",
    description:
      "Vetted Revit architects and BIM coordinators trained on US standards and complex projects.",
    icon: topBimExpertIcon,
  },
  {
    title: "US Code-Compliant Delivery",
    description:
      "Every drawing set aligns with IBC, ADA, ASHRAE, NFPA 101, and regional AHJ requirements.",
    icon: usCodeCompliantDeliveryIcon,
  },
  {
    title: "Dedicated Team Ready",
    description:
      "Your dedicated team assembled within an hour, working in your workflow and time zone.",
    icon: dedicatedTeamReadyIcon,
  },
  {
    title: "AI-Powered Workflows",
    description:
      "AI-driven production workflows drive 30% efficiency gains, helping in faster turnaround.",
    icon: aiPowerWorkflowIcon,
  },
  {
    title: "Flexible Engagement Models",
    description:
      "Scale your team with single drafter to full BIM team, with no lock-in, no long-term commitment.",
    icon: flexibleEngagementModelsIcon,
  },
  {
    title: "Risk-Free 30-Day Trial",
    description:
      "Start with confidence with a one-month risk-free trial backed by a full money-back guarantee.",
    icon: riskFreeTrialIcon,
  },
];

export const architectureResourcesSection = acsServicePagesResourcesSection;

export const architectureIndustriesIntro = {
  titleLine1: "Industries We Support with Our ",
  titleLine2: "Architectural and Structural Expertise",
  titleMaxWidth: 850,
  description:
    "Delivering precision-driven architectural and structural BIM solutions tailored to the unique requirements of every construction sector.",
};

export const architectureEngagementProcessSection = {
  tag: "How to Start",
  titleLine1: "Get Started with the Right ",
  titleLine2: "BIM Delivery Infrastructure",
  description:
    "Whether you need a dedicated Revit architect, structural engineer, or a full BIM team, our flexible engagement models adapt to your scope, timeline, and project needs.",
  descriptionMaxWidth: 900,
  cta: "Inquire Now",
  ctaHref: "#architecture-page-contact",
};

export const architectureEngagementProcessSteps = [
  {
    prefix: "0",
    number: "1",
    prefixColor: "text-[#42AA32]",
    title: "Share Your Requirements",
    description:
      "Tell us about your project scope, timelines, and architectural or structural drafting needs. We align the right expertise to your milestones and deliverable requirements.",
  },
  {
    prefix: "0",
    number: "2",
    prefixColor: "text-[#2299D6]",
    title: "Get the Right BIM Experts",
    description:
      "We match you with experienced Revit professionals within an hour. Your team is pre-vetted, trained on US standards, and ready to deliver.",
  },
  {
    prefix: "0",
    number: "3",
    prefixColor: "text-[#F0B300]",
    title: "Execute & Scale Seamlessly",
    description:
      "Start quickly, collaborate efficiently, and scale your team as project demands grow across architectural and structural disciplines.",
  },
];

export const architectureProjectCta = {
  titleLine1: "Enhance Project Delivery with ",
  titleLine2: "Dedicated BIM Support",
  description:
    "Trusted Architecture Services Provider in the USA delivering accurate, coordinated Revit Architectural and Structural BIM Services across every project phase.",
  cta: "Get a Free Quote",
};

export const architectureTestimonialsDescription =
  "Hear how architects and firm owners scaled production, reclaimed time, and grew revenue with dedicated BIM support.";

export const architectureFaqDescription =
  "Everything you need to know before getting started.";

export const architectureFaqSection = {
  tag: "FAQs",
  description: architectureFaqDescription,
};

export const architectureFaqs = [
  {
    q: "What architectural and structural BIM deliverables do you provide?",
    a: "We provide coordinated Revit models, drawing sets (plans, sections, elevations, details), schedules, and BIM-ready exports tailored to your scope. Coverage spans early design modeling through construction documentation and as-built records.",
  },
  {
    q: "Can you work in our Revit standards, templates, and CDE environment?",
    a: "Yes. We align with your office standards, title blocks, view templates, and file structure from day one. We also plug directly into your CDE (Autodesk Construction Cloud, BIM 360, or others) so your team stays in full control.",
  },
  {
    q: "How do you define LOD, scope, and modeling responsibilities on a project?",
    a: "At kickoff, LOD, model uses, and included versus excluded scope are agreed and documented in a written scope matrix. This ensures your team knows exactly what to expect at every milestone.",
  },
  {
    q: "Can you work from existing CAD, PDF, or point cloud data?",
    a: "Yes. We regularly convert legacy CAD drawings, PDFs, and point clouds into coordinated Revit models. Source data is reviewed with you upfront to flag any gaps that could affect accuracy before work starts.",
  },
  {
    q: "How are your architectural and structural BIM services priced?",
    a: "We offer per-hour, per-sheet, per-square-foot, or fixed-fee models depending on project type. Pricing is always tied to clearly defined scope and LOD so you can benchmark it against your in-house cost.",
  },
  {
    q: "Can you support clash detection and multidisciplinary coordination?",
    a: "Yes. We run clash detection in Navisworks and coordinate architectural and structural models with MEP and other disciplines. Issues are tracked in logs or your CDE and resolved in cycles agreed within the BIM Execution Plan.",
  },
  {
    q: "Can we start with a pilot project before committing long-term?",
    a: "Absolutely. Many clients begin with a limited-scope pilot covering one building, one phase, or a drawing subset. This lets both teams validate fit, communication, and quality before moving into a larger engagement.",
  },
];

export const architectureFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: architectureFaqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};
