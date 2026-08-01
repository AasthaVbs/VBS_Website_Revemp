export const mepBimModellingHero = {
  tag: "MEP BIM Modeling",
  titleLead: "Code-Compliant MEP BIM Modeling Services that ",
  titleAccent: "Reduce Costly Rework",
  description:
    "Our pre-vetted BIM professionals help you with LOD 200 to LOD 450 Revit MEP 3D Modeling Services. They create accurate models to enable coordination, collaboration and clash free project delivery.",
  ctaLabel: "Get A Free Quote",
  imageSrc: "/images/mep/mep-bim-modeling-hero.png",
  imageAlt: "mep-bim-modeling-hero",
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

export type MepTrustedByContent = {
  titleAccent: string;
  titleLead: string;
  items: ReadonlyArray<
    | { icon: string; label: string }
    | { dashColor: string; label: string }
  >;
};

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
  imageAlt: "mep-bim-modeling-overview",
} as const;

export type MepOverviewIntroContent = {
  tag: string;
  titleLead: string;
  titleAccent: string;
  paragraph1: string;
  paragraph1Bold?: string;
  paragraph1Tail?: string;
  paragraph2?: string;
  paragraph2Lead?: string;
  paragraph2Bold?: string;
  paragraph2Tail?: string;
  paragraph3Lead?: string;
  paragraph3Bold?: string;
  paragraph3Tail?: string;
  mainImage: string;
  imageAlt?: string;
};

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

/** Sticky carousel section — maps LOD content to StickyHorizontalServicesSection props. */
export const mepBimLodStickySection = {
  tag: mepBimLodSection.tag,
  titleLine1: mepBimLodSection.titleLead,
  titleLine2: mepBimLodSection.titleAccent,
  description: mepBimLodSection.description,
  wideCards: true,
  titleMaxWidth: 1028,
};

export const mepBimLodStickyCards = mepBimLodCards.map(({ title, description, image, highlighted }) => ({
  title,
  text: description,
  image,
  highlighted,
}));

export const mepBimServiceCoverageGridSection = {
  tag: "Service Coverage",
  titleLine1: "Full Range of MEP",
  titleLine2: "BIM Modeling Services",
  description:
    "End-to-End MEP modeling services integrating HVAC, electrical, mechanical piping, plumbing and fire protection processes",
  ctaLabel: "Let's Talk",
} as const;

export type MepBimServiceCoverageGridItem = {
  title: string;
  description: string;
};

export const mepBimServiceCoverageGridItems: MepBimServiceCoverageGridItem[] = [
  {
    title: "HVAC BIM Modeling",
    description:
      "We develop detailed HVAC models of ductwork, air handling units, VAV boxes and special air distribution systems. All the layouts are tailored to your project requirements and ASHRAE standards.",
  },
  {
    title: "BIM Modeling for Mechanical Piping",
    description:
      "We build precise models of process piping systems, hot water, chilled water and steam systems. Each model includes valves, flanges, fittings and equipment connections.",
  },
  {
    title: "Plumbing BIM Modeling",
    description:
      "We model domestic water, sanitary drainage, vent piping, stormwater and gas piping systems. Required slopes and routing are maintained throughout the model.",
  },
  {
    title: "Electrical BIM Modeling",
    description:
      "We prepare coordinated layouts for conduit runs, cable trays, lighting fixtures, switch gear and power distribution systems. The model preserves the clearances necessary to meet NEC requirements.",
  },
  {
    title: "Fire Protection System Modeling",
    description:
      "We model sprinklers, standpipes, fire pumps and related fire protection systems according to the approved design intent. Coordination reduces conflicts with structural and other MEP systems.",
  },
  {
    title: "Integrated MEPF BIM Coordination",
    description:
      "Our coordination process combines every discipline into a federated model. Clash detection helps teams in resolving conflicts before fabrication and installation begin.",
  },
];

export const mepBimTechnologyStackSection = {
  tag: "Tools & Platforms",
  titleLine1: "We Use to Deliver High-Precision",
  titleAccent: "MEP BIM Modeling Services",
  description:
    "We use industry leading BIM software for accurate, coordinated and construction ready MEP models for complex projects.",
} as const;

export type MepBimTechnologyTool = {
  name: string;
  icon: string;
  iconWidth: number;
  iconHeight: number;
};

export const mepBimTechnologyStackToolsRowOne: MepBimTechnologyTool[] = [
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

export const mepBimTechnologyStackToolsRowTwo: MepBimTechnologyTool[] = [
  { name: "Navis works", icon: "/icon/navisworks.png", iconWidth: 55, iconHeight: 85 },
  { name: "Revizto", icon: "/icon/revizto.png", iconWidth: 75, iconHeight: 75 },
  {
    name: "Bluebeam",
    icon: "/image/bluebeam-inc-vector-logo-1.jpg",
    iconWidth: 85,
    iconHeight: 91,
  },
];

export const mepBimDeliverablesSection = {
  tag: "Deliverables",
  titleLead: "What Our Revit MEP",
  titleAccent: "Modeling Services Include",
  description:
    "High Precision 3D Modeling Services for MEP for Smooth Construction and Fabrication.",
  ctaLabel: "Contact Now",
} as const;

export type MepBimDeliverableCard = {
  title: string;
  description: string;
  icon: string;
};

export const mepBimDeliverableCards: MepBimDeliverableCard[] = [
  {
    title: "High Fidelity Revit Models",
    description:
      "Intelligent Revit models from LOD 200 to LOD 450. Each model contains the system parameters that enable architectural and structural coordination.",
    icon: "/images/mep/deliverables/icon-high-fidelity-revit-models.svg",
  },
  {
    title: "MEP Shop Drawings Coordination",
    description:
      "Drawings ready for installation directly created from the BIM model. Deliverables include spool sheets, sleeve locations, hanger layouts and installation details.",
    icon: "/images/mep/deliverables/icon-coordinated-mep-shop-drawings.svg",
  },
  {
    title: "Navisworks Clash Reports",
    description:
      "Detailed clash reports document identified conflicts and completed resolutions. Your team receives a verified coordination record before construction begins.",
    icon: "/images/mep/deliverables/icon-navisworks-clash-reports.svg",
  },
  {
    title: "Automated Schedules & Data Outputs",
    description:
      "We generate Bills of Materials (BOM), equipment schedules and quantity take-offs directly from the model. Improved procurement and planning with accurate project data.",
    icon: "/images/mep/deliverables/icon-automated-schedules-data.svg",
  },
  {
    title: "4D Construction Simulations",
    description:
      "By linking BIM models to time, project teams can review sequences of installation before any work begins. This process is used to support site coordination and construction planning.",
    icon: "/images/mep/deliverables/icon-4d-construction-simulations.svg",
  },
];

export const mepBimModellingProcessSection = {
  tag: "Service Workflow",
  titleLead: "Our Revit MEP BIM ",
  titleAccent: "Services Workflow",
  description:
    "Comprehensive MEP Modeling Services Integrating HVAC, Electrical, Mechanical Piping, Plumbing, and Fire Protection Workflows",
} as const;

/** Scroll-driven workflow — same shape as `mepWorkflowSection` / `mepWorkflowSteps`. */
export const mepBimModellingWorkflowSection = {
  tag: mepBimModellingProcessSection.tag,
  titleLine1: mepBimModellingProcessSection.titleLead,
  titleLine2: mepBimModellingProcessSection.titleAccent,
  description: mepBimModellingProcessSection.description,
};

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

export const mepBimModellingWorkflowSteps = mepBimModellingProcessSteps.map(
  ({ number, title, description }) => ({
    number,
    title,
    text: description,
  }),
);

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
  /** Optional leading digit(s) shown in valueColor; `value` renders in #111111. */
  valuePrefix?: string;
  title: string;
  description: string;
};

export const mepBimMeasurableResultCards: MepBimMeasurableResultCard[] = [
  {
    value: "35%",
    valueColor: "#42AA32",
    title: "Reduced Rework",
    description:
      "Incorporating a dedicated expert focused solely on your project's Design Validation, spatial conflicts are caught in the model, not on the construction site.",
  },
  {
    value: "50%",
    valueColor: "#42AA32",
    title: "Quicker Lead Times",
    description:
      "We have a dedicated process that halves your Design Development (DD) phase and speeds up your transition from 2D schematics to 3D Revit models.",
  },
  {
    value: "99.9%",
    valueColor: "#42AA32",
    title: "BEP Conformance",
    description:
      "A passionate modeler can provide a clean model ready for Pre-Coordination Support by keeping naming conventions, parameter data, and families all consistent.",
  },
  {
    value: "30%",
    valueColor: "#42AA32",
    title: "Improvement in Profit Margins",
    description:
      "To reduce your production burn rate, use remote dedicated resources for high-volume modeling tasks, and keep your senior engineers focused on high-level design.",
  },
];

export const mepBimModellingResourcesSection = {
  tag: "Resources",
  titleLine1: "Resources on ",
  titleLine2: "MEP BIM Modeling",
  description:
    "Explore technical thought leadership and actionable strategies designed to optimize your production workflows and scale without compromising standards.",
  viewAllHref: "/bim-resources/",
  serviceFilter: "MEP Engineering Firms",
} as const;

export const mepBimModellingProjectCta = {
  titleLine1: "Your Dedicated MEP Modeling Partner is ",
  titleLine2: "Just a Click Away",
  description:
    "From 2D-to-BIM validation to pre-coordination support, we provide the technical depth you need to succeed in the US construction market.",
  cta: "Contact Us",
  ctaHref: "/contact-us",
} as const;

export const mepBimModellingFaqDescription =
  "Explore answers to common questions about our services, workflows, deliverables, timelines, and project collaboration.";

export const mepBimModellingFaqSection = {
  tag: "FAQs",
  description: mepBimModellingFaqDescription,
} as const;

export const mepBimModellingFaqs = [
  {
    q: "How do you ensure compliance with US building codes and standards?",
    a: "We use your company templates and work exclusively in Imperial units. Our modelers are trained in NFPA, NEC and IPC standards ensuring all 3D production meets local US regulatory requirements and project-specific BEP guidelines.",
  },
  {
    q: "What is the difference between your LOD 300 and LOD 400 MEP models?",
    a: "LOD 300 focuses on design intent and high-level spatial validation. LOD 400 adds fabrication-level detail, including hangers, supports, and manufacturer-specific metadata. We can scale the model's complexity as your project moves from design to the field.",
  },
  {
    q: "How do you handle communication and time zone differences?",
    a: "We turn time zones into a 24-hour production cycle. While your US team finishes the day, our dedicated modelers handle the 3D authoring overnight, providing updated Revit files for your morning review via Slack, Teams, or BIM 360.",
  },
  {
    q: "Are your dedicated modelers able to work within our BIM 360 / ACC environment?",
    a: "Yes. We function as a virtual extension of your office. By working directly in your Autodesk Construction Cloud (ACC) hub, we enable real-time collaboration on central models, ensuring data security and eliminating file-transfer delays.",
  },
  {
    q: "Can I get help with Point Cloud to BIM for renovation projects?",
    a: "Absolutely. We specialize in Post-Construction As-Built Capture. We transform raw laser scan data into precise, field-verified Revit models, providing a true-to-site digital foundation when original 2D drawings are missing or inaccurate.",
  },
] as const;
