import type { StatItem } from "@/constants/shared-sections";

export const mepStatsStrip: StatItem[] = [
  { value: "2000+", color: "text-vbs-red", label: "Projects Delivered" },
  { value: "300+", color: "text-vbs-green", label: "Global Clients" },
  { value: "11+", color: "text-vbs-blue", label: "Years of Experience" },
  { value: "200+", color: "text-vbs-yellow", label: "Licensed Engineers" },
];

export const mepIntroPoints = [
  "Top 1% Vetted MEP Experts",
  "US Code-Compliant Models",
  "Fast Turnaround",
  "3-Day Onboarding",
] as const;

export const mepWhatYouGetSection = {
  tag: "What You Get",
  titleLine1: "What You Get with",
  titleLine2: "Our MEP Services",
  description:
    "Our MEP BIM services support accurate modeling, clash coordination, and construction-ready documentation to improve project efficiency and reduce site conflicts across all MEPF trades.",
  resultLabel: "Result",
  resultText:
    "Faster coordination, fewer site conflicts, and improved project delivery timelines across all MEPF trades.",
} as const;

export const mepWhatYouGetCards = [
  {
    title: "BIM Modeling & Design",
    icon: "/images/mep/what-you-get/icon-bim-modeling.svg",
    elevated: true,
    lines: [
      "Detailed Coordinated MEPF Modeling Solutions",
      "LOD 200-500 BIM models in Autodesk Revit",
      "Custom high-quality Revit family creation",
      "Code-compliant parametric MEP families",
    ],
  },
  {
    title: "Clash-detection & Coordination",
    icon: "/images/mep/what-you-get/icon-clash-detection.svg",
    elevated: false,
    lines: [
      "Clash detection and coordination using Navisworks and BIM 360",
      "Coordinated MEP shop drawings and spool drawings",
      "Construction Code modeling",
      "Clash reports with resolution tracking",
    ],
  },
  {
    title: "Project Support & Delivery",
    icon: "/images/mep/what-you-get/icon-project-support.svg",
    elevated: false,
    lines: [
      "Quantity take-offs and BOQ extraction",
      "As-built modeling and FM ready LOD 500 documentation",
      "Full support across design, construction, and handover stages",
      "4D scheduling and 5D cost estimation",
    ],
  },
] as const;

/** @deprecated use mepWhatYouGetCards — kept for existing imports */
export const mepServiceCards = mepWhatYouGetCards;

export const mepDisciplinesIntro =
  "Each discipline in MEP BIM Services demands a distinct technical approach. Virtual Building Studio models every system with code-accurate detail and full coordination across trades." as const;

export const mepDisciplineTabs = [
  {
    id: "mechanical",
    label: "Mechanical BIM",
    title: "Mechanical BIM Services",
    description:
      "Our Mechanical BIM Services deliver full 3D models of ductwork, AHU placements, piping systems, and plant rooms, sized to SMACNA standards with precise coordination across structure and services. Models support design validation, fabrication, and site installation, with coordinated schedules ready for contractor review and shop drawing generation.",
    standardsApplied: "SMACNA Ductwork, ASHRAE 90.1, ASHRAE 62.1",
    keySystemsModeled: "Supply/Return Ductwork, AHUs, VAV Boxes, ERUs, FCUs, Plant Rooms",
    lodCapability: "LOD 300 Design → LOD 400 Fabrication → LOD 500 As-Built",
    deliverablesTitle: "Mechanical BIM Deliverables",
    deliverables: [
      "Coordinated duct routing models with SMACNA sheet metal gauges and fittings",
      "AHU and equipment placement with factory-clearance zones modeled",
      "Plant room layouts with structural interface coordination",
      "Duct pressure class schedules and volume control damper locations",
      "Chilled water and condenser water piping at LOD 350+",
      "Mechanical shop drawings and hanger/support details",
      "Duct and equipment quantity take-off schedules",
    ],
  },
  {
    id: "electrical",
    label: "Electrical BIM",
    title: "Electrical BIM Services",
    description:
      "Electrical BIM models cover power distribution, lighting layouts, panel schedules, and conduit routing with NEC-compliant parameters. We coordinate cable trays and equipment clearances with structural and MEP trades for clash-free installation paths.",
    standardsApplied: "NEC, NFPA 70, IEEE, IES Lighting Standards",
    keySystemsModeled: "Panelboards, Transformers, Cable Trays, Conduit, Lighting Fixtures",
    lodCapability: "LOD 300 Design → LOD 400 Fabrication → LOD 500 As-Built",
    deliverablesTitle: "Electrical BIM Deliverables",
    deliverables: [
      "Coordinated power and lighting models with NEC-compliant routing",
      "Panel schedules, circuiting, and feeder routing documentation",
      "Cable tray and conduit layouts with clearance coordination",
      "One-line diagrams and equipment connection details",
      "Lighting layout models with fixture schedules",
      "Electrical shop drawings and panel board layouts",
      "Quantity take-offs for conduit, wire, and equipment",
    ],
  },
  {
    id: "plumbing",
    label: "Plumbing BIM",
    title: "Plumbing BIM Services",
    description:
      "Plumbing BIM includes domestic water, sanitary waste, vent systems, and storm drainage modeled to IPC standards. We produce coordinated layouts with slope verification, pipe sizing, and fixture connections ready for submittal and fabrication.",
    standardsApplied: "IPC, UPC, ASPE, Local AHJ Requirements",
    keySystemsModeled: "Domestic Water, Sanitary Waste, Vent Systems, Storm Drainage",
    lodCapability: "LOD 300 Design → LOD 400 Fabrication → LOD 500 As-Built",
    deliverablesTitle: "Plumbing BIM Deliverables",
    deliverables: [
      "Coordinated plumbing layouts with verified slopes and pipe sizing",
      "Riser diagrams, isometrics, and fixture schedules",
      "Domestic water and sanitary waste routing models",
      "Storm drainage and vent system coordination",
      "Plumbing shop drawings and sleeve penetration layouts",
      "Equipment and fixture connection details",
      "BOQ and material schedules for plumbing systems",
    ],
  },
  {
    id: "fire",
    label: "Fire Protection BIM",
    title: "Fire Protection BIM Services",
    description:
      "Fire protection BIM covers sprinkler systems, standpipes, and fire alarm device placement per NFPA standards. Models integrate with architectural ceilings and structural framing for accurate hydraulic calculations and installation planning.",
    standardsApplied: "NFPA 13, NFPA 72, NFPA 101, Local Fire Codes",
    keySystemsModeled: "Sprinkler Systems, Standpipes, Fire Alarm Devices, Fire Pumps",
    lodCapability: "LOD 300 Design → LOD 400 Fabrication → LOD 500 As-Built",
    deliverablesTitle: "Fire Protection BIM Deliverables",
    deliverables: [
      "Sprinkler layout models coordinated with ceiling and structure",
      "Hydraulic calculation support and pipe sizing documentation",
      "Fire alarm device placement and routing models",
      "Standpipe and fire pump room coordination drawings",
      "Clash-free coordination with MEP and architectural trades",
      "Fire protection shop drawings and spool details",
      "As-built fire protection models for facility handover",
    ],
  },
] as const;

export const mepFullSpectrumIntro =
  "We deliver accurate 3D MEPF models (LOD 200–500) that ensure seamless clash detection, coordinated shop drawings, and constructible BIM models across every stage from pre-bid to as-built handover." as const;

export const mepFullSpectrumServices = [
  {
    title: "MEP BIM Modeling Services",
    image: "/images/mep/full-spectrum/mep-bim-modeling.png",
    highlighted: true,
    description:
      "We deliver data-rich 3D MEPF models (LOD 300–500) that ensure seamless integration with architectural and structural systems. Our models comply with ASHRAE, NEC, IPC, and NFPA standards to enhance coordination, reduce rework, and support design validation and facility management.",
  },
  {
    title: "MEP Revit Family Creation Services",
    image: "/images/mep/full-spectrum/mep-revit-family.png",
    highlighted: false,
    description:
      "We Deliver custom, parametric Revit families for MEP components like valves, fixtures, and panels, built to project standards. Each family is performance-tested for accuracy, flexibility, and interoperability within the Revit platform, ensuring consistent documentation and scheduling.",
  },
  {
    title: "MEP Shop Drawing Services",
    image: "/images/mep/full-spectrum/mep-shop-drawing.png",
    highlighted: false,
    description:
      "Our installation-ready MEP shop drawings include detailed plans, sections, and assemblies for HVAC, piping, and electrical systems. We also provide sleeve layouts, hanger details, and dimensioned drawings that align with contractor and fabrication requirements.",
  },
  {
    title: "Bill of Material (BOM) Services",
    image: "/images/mep/full-spectrum/mep-bom.png",
    highlighted: false,
    description:
      "Using BIM models, we extract accurate quantities and generate detailed BOQs for all MEP systems. Our automated QTO services reduce manual errors and offer reliable cost estimation for budgeting, resource planning, and project control.",
  },
  {
    title: "Pre-Bid Estimation Services",
    image: "/images/mep/full-spectrum/mep-pre-bid.png",
    highlighted: false,
    description:
      "We deliver accurate pre-bid estimates using advanced BIM tools and industry-standard software, covering material takeoffs, labor costs, and equipment pricing. Our fast turnarounds and precise reports help contractors bid confidently, reduce cost overruns, and win more profitable projects.",
  },
  {
    title: "MEP Spool Drawing Services",
    image: "/images/mep/full-spectrum/mep-spool-drawing.png",
    highlighted: false,
    description:
      "We create fabrication-ready spool drawings for MEP systems, complete with dimensions, IDs, joint locations, and material specifications. These detailed drawings streamline off-site prefabrication, reduce site installation errors, and support efficient construction sequencing.",
  },
  {
    title: "MEP Clash Detection & Coordination Services",
    image: "/images/mep/full-spectrum/mep-clash-detection.png",
    highlighted: false,
    description:
      "Our expert BIM team performs clash detection using Navisworks and BIM 360 to identify and resolve conflicts between MEP, architectural, and structural systems. Our coordination process ensures constructability through issue tracking, clash reports, and collaborative resolution sessions with project stakeholders.",
  },
  {
    title: "Scan to BIM Services for MEP Systems",
    image: "/images/mep/full-spectrum/mep-scan-to-bim.png",
    highlighted: false,
    description:
      "We convert point cloud data into detailed MEP as-built models for renovation and facility management projects. These models represent real-world conditions and help with accurate planning, coordination, advanced clash detection, improved decision-making, and lifecycle documentation, ensuring higher efficiency across all project stages.",
  },
] as const;

export const mepWorkflowSteps = [
  {
    number: "01",
    title: "Project Initiation & BEP Setup",
    description:
      "We receive architectural models, MEP design drawings, and project specifications from your team. We establish the BEP, define LOD requirements, and configure file-sharing protocols in Autodesk BIM 360. Coordinate references and shared parameters get verified before modeling starts.",
    highlight: true,
  },
  {
    number: "02",
    title: "Discipline MEP BIM Modeling",
    description:
      "We model each MEPF discipline separately like mechanical, electrical, plumbing, and fire protection in Revit MEP. System families, connector parameters, and LOD-appropriate content populate each discipline model. Modeling follows project-specific drafting standards and code requirements for each trade.",
    highlight: false,
  },
  {
    number: "03",
    title: "Clash Detection & Coordination",
    description:
      "We link discipline models and run hard, soft, and clearance clash tests in Navisworks Manage. Clash reports document conflicts with annotated screenshots and location references. Coordination meetings address clashes with trade representatives, and model updates reflect resolved items.",
    highlight: false,
  },
  {
    number: "04",
    title: "Construction Documentation",
    description:
      "We extract MEP shop drawings, spool drawings, reflected ceiling plans, and section views from the coordinated model. All documentation meets contractor, fabricator, and AHJ submission standards for each project jurisdiction. Installation Details accompany every shop drawing package.",
    highlight: false,
  },
  {
    number: "05",
    title: "QTO & BOQ Extraction",
    description:
      "We generate automated material take-offs directly from the coordinated Revit MEP model. Accurate BOQs cover ductwork, piping, conduit, fittings, and equipment for each MEPF trade. These schedules support procurement, cost estimation, and change order documentation with model-verified quantities.",
    highlight: false,
  },
  {
    number: "06",
    title: "As-Built & FM Handover",
    description:
      "We update models to reflect site conditions and issued-for-construction revisions throughout the build phase. LOD 500 as-built models and COBie-compliant data exports support facility management and owner operations. Final deliverables cover RVT, IFC, DWG, and NWD formats for complete project compatibility.",
    highlight: false,
  },
] as const;

export const mepTechnicalMethods = {
  tag: "Name Tag",
  titleLine1: "Our Technical Methods for",
  titleLine2: "Inter-Disciplinary Conflict Resolution",
  description:
    "MEP BIM Services at Virtual Building Studio apply a two-stage clash detection process that catches conflicts early and resolves them before construction begins - reducing RFIs and cutting change order volume at the project site.",
  phases: [
    {
      prefix: "0",
      prefixColor: "text-[#42AA32]",
      number: "1",
      title: "In-Model Coordination",
      description:
        "Each trade model receives internal coordination checks using Revit's interference checking tools. Our BIM engineers review spatial conflicts between ducts, pipes, conduits, and structural elements within the linked model environment catching issues at the design stage",
      highlighted: true,
    },
    {
      prefix: "0",
      prefixColor: "text-[#2299D6]",
      number: "2",
      title: "Navisworks Federation",
      description:
        "We federate all trade models architectural, structural, mechanical, electrical, plumbing, and fire protection within Navisworks. We run rule-based clash tests for hard clashes, soft clashes (clearance violations), and workflow clashes (sequencing conflicts). Clash reports categorize each conflict by severity, trade, and grid reference.",
      highlighted: false,
    },
  ],
  stats: [
    {
      value: "2x",
      valueClass: "text-[#D70416]",
      label: "Clash detection stages on every project",
      labelClass: "max-w-[227px]",
    },
    {
      value: "LOD 400",
      valueClass: "text-[#42AA32]",
      label: "Fabrication-level resolution for shop drawings",
      labelClass: "",
    },
    {
      value: "6 Trades",
      valueClass: "text-[#2299D6]",
      label: "Arch + Struct + MEP + FP federated coordination",
      labelClass: "",
    },
    {
      value: "Weekly",
      valueClass: "text-[#F0B300]",
      label: "Coordination meetings with all stakeholders",
      labelClass: "",
    },
  ],
  quote:
    '"Prevention costs less than correction. Our two-stage process catches conflicts at the design phase - eliminating costly site modifications and delivering clash-free models that construction teams can trust."',
  attribution: "-VBS BIM Coordination Approach",
} as const;

export const mepKeyBenefitsSection = {
  tag: "Name Tag",
  titleLine1: "Key Benefits of Adopting",
  titleLine2: "MEP BIM Services",
  description:
    "MEP BIM Services transform every phase of your project from design to facility management. Virtual Building Studio delivers measurable outcomes across coordination, cost, and construction efficiency.",
} as const;

export const mepKeyBenefits = [
  {
    title: "Improved Design Accuracy",
    description:
      "MEP BIM Services produce precise MEPF layouts that meet spatial and project requirements with fewer revisions. Accurate parametric models reduce design errors and cut coordination cycles across all trades.",
    featured: true,
  },
  {
    title: "Smarter Facility Management",
    description:
      "BIM models enriched with COBie and asset data act as digital twins for long-term building operations. Facility managers efficiently track maintenance schedules, assets, and system upgrades directly from the model data.",
    featured: false,
  },
  {
    title: "Enhanced Visualization & Planning",
    description:
      "High-resolution 3D MEPF models give all project stakeholders complete visibility into system layouts and design intent. Teams assess constructability, identify conflicts, and make informed decisions before construction begins.",
    featured: false,
  },
  {
    title: "Optimized Project Scheduling & Costing",
    description:
      "4D and 5D BIM dimensions allow accurate construction sequencing and reliable cost forecasting. Quantity take-offs and cost estimates come directly from the coordinated model, improving planning and financial control.",
    featured: false,
  },
  {
    title: "Faster Prefabrication & Modular Construction",
    description:
      "Clash-free MEPF models support generation of accurate spool and shop drawings for off-site fabrication. Coordinated models accelerate installation timelines, reduce material waste, and improve quality through construction.",
    featured: false,
  },
  {
    title: "Seamless Multidisciplinary Coordination",
    description:
      "Integrated BIM workflows foster seamless, real-time collaboration among all project disciplines. Early-stage coordination catches design clashes before construction, eliminating costly change orders and project delays.",
    featured: false,
  },
] as const;

export const mepWhyChooseSection = {
  tag: "Name Tag",
  titleLine1: "Why Leading Firms Choose",
  titleLine2: "Our MEP BIM Services",
  description:
    "Work with a BIM partner that delivers accuracy, speed, and results across every stage of your project from pre-bid to as-built handover.",
} as const;

export const mepWhyChooseCards = [
  {
    title: "Top 1% BIM Experts",
    description:
      "Highly experienced MEP BIM professionals trained on global standards and complex US projects worldwide.",
    icon: "/images/mep/why-choose/icon-top-bim-experts.svg",
    highlighted: true,
    wide: false,
  },
  {
    title: "US Code-Compliant Delivery",
    description:
      "Models align with ASHRAE, NFPA, IPC, SMACNA, NEC, and regional AHJ compliance requirements.",
    icon: "/images/mep/why-choose/icon-us-code-compliant.svg",
    highlighted: false,
    wide: false,
  },
  {
    title: "Fast Turnaround Cycles",
    description:
      "Accelerate project timelines with efficient BIM workflows and quick delivery cycles tuned for US contractor schedules.",
    icon: "/images/mep/why-choose/icon-fast-turnaround.svg",
    highlighted: false,
    wide: false,
  },
  {
    title: "Flexible Engagement Models",
    description:
      "Scale your BIM team with dedicated resources, task support, or full project teams with zero long-term lock-in.",
    icon: "/images/mep/why-choose/icon-flexible-engagement.svg",
    highlighted: false,
    wide: true,
  },
  {
    title: "End-to-End BIM Support",
    description:
      "From pre-bid modeling to as-built documentation complete MEP project lifecycle support under one roof.",
    icon: "/images/mep/why-choose/icon-end-to-end.svg",
    highlighted: false,
    wide: true,
  },
] as const;

export const mepEngagementProcessSection = {
  tag: "Engagement Model",
  titleLine1: "Get Started with the Right",
  titleLine2: "MEP BIM Engagement Model",
  description:
    "Whether you need a dedicated MEP BIM expert or a full project team, our flexible engagement models adapt to your scope, timeline, and project requirements.",
  cta: "Inquire Now",
} as const;

/** Figma node 265:67484 — step numbers use colored 0 + black digit */
export const mepEngagementProcessSteps = [
  {
    prefix: "0",
    number: "1",
    prefixColor: "text-[#42AA32]",
    title: "Share Your Requirements",
    description:
      "Tell us about your project scope, timelines, and MEP BIM needs. We carefully align the right MEP expertise to your goals and project milestones.",
  },
  {
    prefix: "0",
    number: "2",
    prefixColor: "text-[#2299D6]",
    title: "Get the Right BIM Experts",
    description:
      "We match you with experienced MEP BIM professionals tailored to your project within a fast turnaround. Your team is vetted, trained on US standards, and ready to deliver.",
  },
  {
    prefix: "0",
    number: "3",
    prefixColor: "text-[#F0B300]",
    title: "Execute & Scale Seamlessly",
    description:
      "Start quickly, collaborate efficiently, and scale your BIM team as your project grows. Our engagement model carries zero commitments and a one-month risk-free trial.",
  },
] as const;

export const mepIndustries = [
  { title: "Commercial & Mixed-Use", image: "/images/figma/industry-1.png" },
  { title: "Healthcare", image: "/images/figma/industry-2.png" },
  { title: "Educational", image: "/images/figma/industry-3.png" },
  { title: "Mission Critical", image: "/images/figma/industry-4.png" },
  { title: "Hospitality & Residential", image: "/images/figma/industry-5.png" },
  { title: "Industrial & Manufacturing", image: "/images/figma/industry-6.png" },
] as const;

export const mepProjectCta = {
  titleLine1: "Start Your Next Project with",
  titleLine2: "MEP BIM Services That Deliver",
  description:
    "From pre-bid modeling to as-built documentation Virtual Building Studio delivers end-to-end BIM MEP Services that drive accuracy, coordination, and efficiency across every project phase.",
  cta: "Book a call",
} as const;

export const mepFaqDescription =
  "We offer two flexible engagement models that work best for our clients. Each year, we carefully select the leading certifications that validate our delivery quality and team expertise.";

export const mepTestimonialsDescription =
  "We offer two flexible engagement models that work best for our clients.";
