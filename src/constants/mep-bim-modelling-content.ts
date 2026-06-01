export const mepBimModellingHero = {
  tag: "MEP BIM Modeling",
  titleLead: "Code-Compliant MEP BIM Modeling Services that ",
  titleAccent: "Reduce Costly Rework",
  description:
    "Our US-trained BIM experts deliver LOD 200–450 Revit MEP 3D modeling services, ensuring accurate coordination and seamless collaboration for clash-free project execution.",
  ctaLabel: "Get A Free Quote",
  imageSrc: "/images/mep/mep-bim-modeling-hero.png",
} as const;

export const mepBimModellingTrustedBy = {
  titleAccent: "Trusted",
  titleLead: " By",
  items: [
    { dashColor: "#D70416", label: "General Contractors" },
    { dashColor: "#42AA32", label: "Sub Contractors" },
    { dashColor: "#2299D6", label: "MEP Engineers" },
    { dashColor: "#F0B300", label: "MEP Consultants" },
  ],
} as const;

export const mepBimModellingIntro = {
  tag: "Who We Are",
  titleLead: "High Fidelity MEP Modeling Services for ",
  titleAccent: "US Construction Standards",
  paragraph1:
    "Field-level rework and uncoordinated submittals frequently derail project timelines and inflate budgets. Virtual Building Studio functions as a technical extension of your team, providing access to a team of ",
  paragraph1Bold: "200+ dedicated remote BIM modelers.",
  paragraph2:
    "As a specialized MEP BIM modeling service provider in the USA, we ensure your building systems are clash-free and fabrication-ready.",
  mainImage: "/images/mep/about-main.png",
  overlayImage: "/images/mep/about-overlay.png",
} as const;

export const mepBimServiceFeaturesSection = {
  tag: "Service Features",
  titleLead: "What You Get with Our ",
  titleAccent: "Revit MEP Modeling",
  titleEnd: " Services",
  description:
    "Your Dedicated MEP BIM Modeling Company Delivering High-Fidelity Data for US Projects",
  ctaLabel: "Get A Free Quote",
} as const;

export type MepBimFeatureCard = {
  title: string;
  description: string;
  icon: string;
};

export const mepBimServiceFeatureCards: MepBimFeatureCard[] = [
  {
    title: "Parametric Revit Families",
    description:
      "Custom-built, intelligent MEP components with manufacturer-specific metadata for accurate scheduling and procurement.",
    icon: "/images/mep/service-features/icon-parametric-revit-families.svg",
  },
  {
    title: "Fully Coordinated MEPF Systems",
    description:
      "Clash-free HVAC, Electrical, Plumbing & Fire Protection integration, optimized using Navisworks for automated interference checking.",
    icon: "/images/mep/service-features/icon-fully-coordinated-mepf.svg",
  },
  {
    title: "Detailed Fabrication & Spool Drawings",
    description:
      "Installation-ready shop drawings derived from the model, including precise cut lengths, sleeve locations, and hanger placements.",
    icon: "/images/mep/service-features/icon-fabrication-spool-drawings.svg",
  },
  {
    title: "Code-Compliant Design Validation",
    description:
      "Engineering layouts cross-verified against NFPA, NEC, and IPC to ensure submittal approval on the first pass.",
    icon: "/images/mep/service-features/icon-code-compliant-validation.svg",
  },
  {
    title: "Point Cloud to BIM Integration",
    description:
      "Precise as-built modeling from high-definition laser scans, capturing existing site conditions with sub-inch accuracy for renovation projects.",
    icon: "/images/mep/service-features/icon-point-cloud-bim.svg",
  },
  {
    title: "Advanced Scheduling & BoQ Generation",
    description:
      "Automated, data-driven Bill of Quantities (BoQ) and material schedules extracted directly from the Revit model to prevent procurement errors.",
    icon: "/images/mep/service-features/icon-scheduling-boq.svg",
  },
  {
    title: "Constructability Review & Value Engineering",
    description:
      "Proactive identification of design inefficiencies to optimize routing, reduce material waste, and improve system performance without compromising design intent.",
    icon: "/images/mep/service-features/icon-constructability-review.svg",
  },
  {
    title: "Standardized BIM Execution (BEP) Adherence",
    description:
      "Models structured strictly according to project-specific BIM Execution Plans and US National BIM Standards (NBIMS).",
    icon: "/images/mep/service-features/icon-bep-adherence.svg",
  },
];

export const mepBimLodSection = {
  tag: "Level of Development",
  titleLead: "Defining Level of Development ",
  titleAccent: "(LOD 300–500)",
  titleEnd: "in MEP Modeling Services",
  description: "We offer two flexible engagement models that work best for our clients.",
} as const;

export type MepBimLodCard = {
  title: string;
  description: string;
  image: string;
  highlighted?: boolean;
};

export const mepBimLodCards: MepBimLodCard[] = [
  {
    title: "LOD 200 - Schematic Design",
    description:
      "Approximate geometry and system placeholders for initial spatial planning and routing.",
    image: "/images/mep/lod/lod-200-56586a.png",
  },
  {
    title: "LOD 300 - Detailed Design",
    description:
      "Accurate 3D geometry and system layouts representing specific size, shape, and location.",
    image: "/images/mep/lod/lod-300-233d41.png",
  },
  {
    title: "LOD 350 - Coordination",
    description:
      "Cross-discipline coordination, including supports, hangers, and maintenance clearances to ensure a clash-free environment.",
    image: "/images/mep/lod/lod-350-14d2ff.png",
  },
  {
    title: "LOD 400 - Fabrication-Ready Detailing",
    description:
      "High-fidelity models with manufacturer-specific data, bolt-level detailing, and assembly requirements for shop production.",
    image: "/images/mep/lod/lod-400-699eb7.png",
  },
  {
    title: "LOD 450 - As-Built/Installation",
    description:
      "Field-verified models incorporating site-specific changes and final sub-assembly details for accurate facility management.",
    image: "/images/mep/lod/lod-450-63dc76.png",
    highlighted: true,
  },
];

export const mepBimServiceCoverageGridSection = {
  tag: "Service Coverage",
  titleLine1: "Complete Coverage for",
  titleLine2: "MEP BIM Modeling Services",
  description:
    "Comprehensive MEP Modeling Services Integrating HVAC, Electrical, Mechanical Piping, Plumbing, and Fire Protection Workflows",
  ctaLabel: "Let's Talk",
} as const;

export type MepBimServiceCoverageGridItem = {
  title: string;
  description: string;
  featured?: boolean;
};

export const mepBimServiceCoverageGridItems: MepBimServiceCoverageGridItem[] = [
  {
    title: "HVAC BIM Modeling",
    description:
      "Detailed 3D BIM modeling of complex ductwork, air handling units (AHUs), VAV boxes, and specialized airflow systems tailored to ASHRAE standards.",
    featured: true,
  },
  {
    title: "Mechanical Piping BIM Modeling",
    description:
      "Precision routing for chilled water, hot water, and steam systems, including valves, flanges, and equipment room layouts.",
  },
  {
    title: "Plumbing BIM Modeling",
    description:
      "Comprehensive modeling of domestic water supply, sanitary drainage, vent systems, and specialized gas piping with accurate slope requirements.",
  },
  {
    title: "Electrical BIM Modeling",
    description:
      "Accurate layouts for cable trays, conduit runs, lighting fixtures, and power distribution systems, ensuring adequate clearances for NEC compliance.",
  },
  {
    title: "Fire Protection System Modeling",
    description:
      "Design-intent modeling for automated sprinklers, standpipes, and fire pumps, coordinated to eliminate interference with structural and MEP elements.",
  },
  {
    title: "Integrated MEPF BIM Coordination",
    description:
      "Multi-disciplinary interference checking and clash resolution to ensure a zero-conflict installation phase.",
  },
];

export const mepBimTechnologyStackSection = {
  tag: "Technology Stack",
  titleLead: "Tools & Platforms: We Use to Deliver ",
  titleAccent: "High-Precision MEP BIM Modeling Services",
  titleEnd: " in the USA",
  description:
    "Comprehensive MEP Modeling Services Integrating HVAC, Electrical, Mechanical Piping, Plumbing, and Fire Protection Workflows",
} as const;

export type MepBimTechnologyStackRow = {
  stage: string;
  software: string[];
  purpose: string[];
};

export const mepBimTechnologyStackRows: MepBimTechnologyStackRow[] = [
  {
    stage: "BIM Authoring",
    software: ["Autodesk Revit", "Graphisoft Archicad"],
    purpose: [
      "Generating 3D parametric models",
      "Developing LOD 200-450 MEP families",
      "Extracting accurate documentation",
    ],
  },
  {
    stage: "Coordination",
    software: ["Navisworks Manage", "Revizto", "Solibri"],
    purpose: [
      "Automating multi-trade clash detection",
      "Generating interference reports",
      "Visualizing complex 4D schedules",
    ],
  },
  {
    stage: "Collaboration",
    software: ["Autodesk Construction Cloud", "Procore"],
    purpose: [
      "Centralizing data in a secure CDE",
      "Real-time cloud worksharing",
      "Managing BIM 360 and Forma workflows",
    ],
  },
  {
    stage: "Interoperability",
    software: ["IFC & OpenBIM"],
    purpose: [
      "Standardizing vendor-neutral data",
      "Ensuring seamless cross-platform exchange",
      "Securing data for facility management",
    ],
  },
];

export const mepBimDeliverablesSection = {
  tag: "Deliverables",
  titleLead: "What We Deliver with Our ",
  titleAccent: "MEP BIM Modeling Services",
  description:
    "High-Precision MEP 3D Modeling Services Designed for Seamless Construction and Fabrication",
  ctaLabel: "Contact Now",
} as const;

export type MepBimDeliverableCard = {
  title: string;
  description: string;
  icon: string;
  iconBordered?: boolean;
};

export const mepBimDeliverableCards: MepBimDeliverableCard[] = [
  {
    title: "High-Fidelity Revit Models",
    description:
      "Intelligent, parametric 3D models (LOD 200-450) with integrated system metadata for architectural and structural synchronization.",
    iconBordered: true,
    icon: "/images/mep/deliverables/icon-high-fidelity-revit-models.svg",
  },
  {
    title: "Coordinated MEP Shop Drawings",
    description:
      "Installation-ready 2D layouts, including spool sheets, sleeve locations, and hanger details extracted directly from the 3D model.",
    icon: "/images/mep/deliverables/icon-coordinated-mep-shop-drawings.svg",
  },
  {
    title: "Navisworks Clash Reports",
    description:
      "Comprehensive interference audits and resolution logs providing a verified clash-free environment before site mobilization.",
    icon: "/images/mep/deliverables/icon-navisworks-clash-reports.svg",
  },
  {
    title: "Automated Schedules & Data Outputs",
    description:
      "Accurate Bill of Materials (BOM), equipment schedules, and quantity take-offs mapped to project parameters for precise procurement",
    icon: "/images/mep/deliverables/icon-automated-schedules-data.svg",
  },
  {
    title: "4D Construction Simulations",
    description:
      "Time-linked BIM data to visualize the installation sequence, helping to optimize labor scheduling and site logistics.",
    icon: "/images/mep/deliverables/icon-4d-construction-simulations.svg",
  },
];

export const mepBimModellingProcessSection = {
  tag: "Service Coverage",
  titleLead: "Complete Coverage for ",
  titleAccent: "MEP BIM Modeling Services",
  description:
    "Comprehensive MEP Modeling Services Integrating HVAC, Electrical, Mechanical Piping, Plumbing, and Fire Protection Workflows",
} as const;

export type MepBimModellingProcessStep = {
  number: string;
  title: string;
  description: string;
  /** Content sits left of center timeline (text right-aligned) */
  align: "left" | "right";
};

export const mepBimModellingProcessSteps: MepBimModellingProcessStep[] = [
  {
    number: "01",
    title: "Project Kick-off & Input Audit",
    description:
      "Deep-dive review of design drawings and specifications. We identify missing data or design gaps to prevent modeling rework.",
    align: "right",
  },
  {
    number: "02",
    title: "MEP System Modeling",
    description:
      "Developing 3D models for mechanical, electrical, HVAC, plumbing, and fire systems based on your schematics, following your design intent at the required LOD.",
    align: "left",
  },
  {
    number: "03",
    title: "Automated Clash Checking",
    description:
      "Performing high-level spatial checks to ensure primary MEP routes do not conflict with major structural elements or architectural clear zones.",
    align: "right",
  },
  {
    number: "04",
    title: "Model Update",
    description:
      "Adjusting the model based on feedback or initial design reviews to ensure the layout is coordinated and ready for further development.",
    align: "left",
  },
  {
    number: "05",
    title: "QA/QC & Standards Check",
    description:
      "Final audit of model health, naming conventions, family parameters, and BIM standard adherence.",
    align: "right",
  },
  {
    number: "06",
    title: "Deliverable Handover",
    description:
      "Delivery of coordinated MEP BIM models and high-quality shop drawings extracted directly from the verified model.",
    align: "left",
  },
];

export const mepBimUseCasesSection = {
  tag: "Use Cases",
  titleLead: "When You Need to Partner with ",
  titleAccent: "MEP BIM Modeling Company",
  description:
    "Comprehensive MEP Modeling Services Integrating HVAC, Electrical, Mechanical Piping, Plumbing, and Fire Protection Workflows",
} as const;

export type MepBimUseCaseCard = {
  title: string;
  description: string;
  icon: string;
};

export const mepBimUseCaseCards: MepBimUseCaseCard[] = [
  {
    title: "Accelerating DD Production",
    description:
      "When you need to scale fast, we convert your design schematics into data-rich BIM models while your engineers focus on calculations.",
    icon: "/images/mep/service-features/icon-parametric-revit-families.svg",
  },
  {
    title: "Pre-Coordination Support",
    description:
      "When deadlines are tight, we provide the heavy lifting for model authoring and spatial checks to ensure you enter meetings with a coordinated model.",
    icon: "/images/mep/service-features/icon-fully-coordinated-mepf.svg",
  },
  {
    title: "2D-to-BIM Design Validation",
    description:
      "When transitioning to 3D, we act as a digital sanity check, uncovering spatial conflicts in the 3D environment that are missed in 2D layouts.",
    icon: "/images/mep/service-features/icon-code-compliant-validation.svg",
  },
  {
    title: "Post-Construction As-Built Capture",
    description:
      "When reality is the requirement, we transform raw scanned data into precise, as-built Revit models to provide a true digital record of the site.",
    icon: "/images/mep/service-features/icon-point-cloud-bim.svg",
  },
];

export const mepBimMeasurableResultsSection = {
  tag: "Measurable Results",
  titleLead: "Impact on ",
  titleAccent: "Your Project",
  description: "Measurable Gains with a Dedicated MEP BIM Modeling Service Provider",
} as const;

export type MepBimMeasurableResultCard = {
  value: string;
  valueColor: string;
  title: string;
  description: string;
};

export const mepBimMeasurableResultCards: MepBimMeasurableResultCard[] = [
  {
    value: "35%",
    valueColor: "#D70416",
    title: "Reduced Rework",
    description:
      "Incorporating a dedicated expert focused solely on your project's design validation, spatial conflicts are caught in the model, not on the construction site.",
  },
  {
    value: "50%",
    valueColor: "#42AA32",
    title: "Faster Lead Times",
    description:
      "Our dedicated workflow accelerates the transition from 2D schematics to 3D Revit models, cutting your Design Development phase in half.",
  },
  {
    value: "99.9%",
    valueColor: "#2299D6",
    title: "BEP Adherence",
    description:
      "A dedicated modeler ensures total consistency in naming conventions, parameter data, and families, providing a clean model ready for pre-coordination support.",
  },
  {
    value: "30%",
    valueColor: "#F0B300",
    title: "Increase in Profit Margins",
    description:
      "Lower your production burn rate by utilizing remote dedicated resources for high-volume modeling tasks while keeping senior engineers focused on high-level design.",
  },
];
