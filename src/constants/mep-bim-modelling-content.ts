export const mepBimModellingHero = {
  tag: "MEP BIM Modeling",
  titleLead: "Code-Compliant MEP BIM Modeling Services that ",
  titleAccent: "Reduce Costly Rework",
  description:
    "Our pre-vetted BIM professionals help you with LOD 200 to LOD 450 Revit MEP 3D Modeling Services. They create accurate models to enable coordination, collaboration and clash free project delivery.",
  ctaLabel: "Get A Free Quote",
  imageSrc: "/images/mep/mep-bim-modeling-hero.png",
  copyMaxWidth: 699,
  descriptionMaxWidth: 585,
} as const;

export const mepBimModellingTrustedBy = {
  titleAccent: "Trusted",
  titleLead: " By",
  items: [
    {
      icon: "/images/mep/trusted-by/icon-general-contractors.svg",
      label: "General Contractors",
    },
    {
      icon: "/images/mep/trusted-by/icon-sub-contractors.svg",
      label: "Sub Contractors",
    },
    {
      icon: "/images/mep/trusted-by/icon-mep-engineers.svg",
      label: "MEP Engineers",
    },
    {
      dashColor: "#F0B300",
      label: "MEP Consultants",
    },
  ],
} as const;

import mepBimModelingOverview from "@/assets/images/mep-bim-modeling-overview.png";

export const mepBimModellingIntro = {
  tag: "Overview",
  titleLead: "High Fidelity MEP Modeling Services for ",
  titleAccent: "Global Construction Standards",
  paragraph1:
    "Field-level rework and uncoordinated submittals frequently derail project timelines and inflate budgets. Virtual Building Studio functions as a technical extension of your team, providing access to a team of",
  paragraph1Bold: " 150+ dedicated remote BIM modelers.",
  paragraph2:
    "As a specialized MEP BIM modeling service provider based in Houston, TX, we ensure your building systems are clash-free and fabrication-ready.",
  mainImage: mepBimModelingOverview.src,
} as const;

export const mepBimServiceFeaturesSection = {
  tag: "What You Get",
  titleLead: "What to Expect from Our ",
  titleAccent: "MEP Revit Modeling Services",
  description:
    "Your on-demand MEP BIM Modeling Company Delivering Highly Reliable Data for US Projects.",
  ctaLabel: "Get A Free Quote",
} as const;

export type MepBimFeatureCard = {
  title: string;
  description: string;
  icon: string;
};

export const mepBimServiceFeatureCards: MepBimFeatureCard[] = [
  {
    title: "Parametric Families in Revit",
    description:
      "Our team develops intelligent Revit families with manufacturer-specific information. These families support accurate scheduling, procurement, and future model updates.",
    icon: "/images/mep/service-features/icon-parametric-revit-families.svg",
  },
  {
    title: "Fully Integrated MEPF Systems",
    description:
      "Integrated HVAC, Electrical, Plumbing and Fire Protection systems optimized in Navisworks, automated for interference checking and clash-free.",
    icon: "/images/mep/service-features/icon-fully-coordinated-mepf.svg",
  },
  {
    title: "Spool Drawings and Fabrication",
    description:
      "Shop drawings from the model for installation showing exact cut lengths, sleeve locations and hanger placements.",
    icon: "/images/mep/service-features/icon-fabrication-spool-drawings.svg",
  },
  {
    title: "Code Compliance Design Verification",
    description:
      "Engineering layouts cross referenced with US standards such as NFPA, NEC and IPC to assure first pass submittal approval.",
    icon: "/images/mep/service-features/icon-code-compliant-validation.svg",
  },
  {
    title: "BIM Integration from Point Cloud",
    description:
      "High definition laser scans for accurate as-built modeling of existing site conditions to sub-inch accuracy for renovation projects.",
    icon: "/images/mep/service-features/icon-point-cloud-bim.svg",
  },
  {
    title: "Advanced Scheduling and Generation of Bills of Quantities",
    description:
      "Revit model based automated data oriented Bill of Quantities (BoQ) and material schedules to avoid procurement errors.",
    icon: "/images/mep/service-features/icon-scheduling-boq.svg",
  },
  {
    title: "Compliance with the Standardized BIM Execution Plan (BEP)",
    description:
      "Models built strictly to project-specific BIM Execution Plans and US National BIM Standards (NBIMS).",
    icon: "/images/mep/service-features/icon-bep-adherence.svg",
  },
  {
    title: "Constructability Review & Value Engineering",
    description:
      "We review routing, system layouts and installation requirements before construction begins. This process helps project teams to mitigate material waste while keeping the original design intent",
    icon: "/images/mep/service-features/icon-constructability-review.svg",
  },
];

export const mepBimLodSection = {
  tag: "Level of Development",
  titleLead: "Level of Development ",
  titleAccent: "(LOD 300 to LOD 450) in MEP Modeling Services",
  description:
    "Understand how each LOD stage incrementally increases model accuracy, coordination, fabrication readiness and as-built documentation.",
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
      "During early stage planning, teams use rough geometry and system placeholders for space planning, initial coordination and routing studies.",
    image: "/images/mep/lod/lod-200-56586a.png",
    highlighted: true,
  },
  {
    title: "LOD 300 - Detailed Design",
    description:
      "The model includes accurate system geometry, dimensions, locations and orientations. Engineers can validate the design intent before coordination begins.",
    image: "/images/mep/lod/lod-300-233d41.png",
  },
  {
    title: "LOD 350 - Coordination",
    description:
      "The model includes supports, hangers and maintenance clearances. This level guides project teams to coordinate across disciplines and resolve conflicts before installation process starts.",
    image: "/images/mep/lod/lod-350-14d2ff.png",
  },
  {
    title: "LOD 400 - Fabrication-Ready Detailing",
    description:
      "The model contains fabrication-level details, manufacturer specific information and assembly requirements. Fabricators can generate shop drawings directly from the model.",
    image: "/images/mep/lod/lod-400-699eb7.png",
  },
  {
    title: "LOD 450 - As-Built/Installation",
    description:
      "The final model includes the installed equipment and the as-built site conditions. Facility teams can use this information for operations and for future maintenance.",
    image: "/images/mep/lod/lod-450-63dc76.png",
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
