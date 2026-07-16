"use client";
// @ts-nocheck

import { ProjectCaseStudy } from "@/components/vbs/projects/case-study";
import { overviewChipIcons, toExecutionSteps } from "@/components/vbs/projects/case-study/helpers";

const content = {
  hero: {
    tag: "Data Center",
    titleLead: "BIM Coordination for a Large-Scale Mission-Critical ",
    titleAccent: "Data Center in Malaysia",
    description:
      "Managed BIM coordination for a 235,750 sq. ft. highly services-intensive data center, integrating complex mechanical, electrical, plumbing, fire protection, and ICT systems.",
    image: "/image/data-center-bim-mep-coordination-malaysia.png",
    imageAlt: "BIM coordination for a large-scale mission-critical data center in Malaysia",
  },
  overview: {
    image: "/image/data-center-bim-mep-coordination-malaysia-output-1.png",
    imageAlt: "Coordinated BIM output for Malaysia data center",
    paragraphs: [
      "A 235,750 sq. ft. data center development spanning 10.3 hectares of land in Malaysia required comprehensive BIM support to coordinate its highly complex building systems. With extensive mechanical, electrical, plumbing, fire protection, and ICT infrastructure, the project demanded meticulous multi-discipline coordination to ensure constructability and operational reliability.",
      "Over a two-year engagement, our team delivered coordinated Architectural, Structural, and MEP BIM models, custom Revit families, shop drawings, and clash-free project documentation to support efficient construction execution.",
    ],
    chips: [
      { label: "Project Type Data Center", icon: overviewChipIcons.area },
      { label: "Level of Development LOD 350", icon: overviewChipIcons.lod },
      { label: "Project Area 235,750 Sq.Ft.", icon: overviewChipIcons.area },
      { label: "Manpower Used 10 Resources", icon: overviewChipIcons.manpower },
      { label: "Location Malaysia", icon: overviewChipIcons.location },
    ],
  },
  tools: {
    description:
      "Coordination ran in Autodesk Revit and Navisworks across a two-year mission-critical data center engagement.",
    items: [
      { name: "Autodesk Revit", icon: "/icon/revit.png" },
      { name: "Navisworks", icon: "/icon/navisworks.png" },
    ],
  },
  io: {
    description:
      "From dense MEP references to coordinated models, custom families, shop drawings, and clash-free documentation.",
    inputImages: [
      { src: "/image/data-center-bim-mep-coordination-malaysia-input_4%20(1).jpg", label: "Data Center Input 1" },
      { src: "/image/data-center-bim-mep-coordination-malaysia-input_4%20(2).jpg", label: "Data Center Input 2" },
      { src: "/image/data-center-bim-mep-coordination-malaysia-input_4%20(3).jpg", label: "Data Center Input 3" },
      { src: "/image/data-center-bim-mep-coordination-malaysia-input_4%20(4).jpg", label: "Data Center Input 4" },
    ],
    outputImages: [
      { src: "/image/data-center-bim-mep-coordination-malaysia-output-1.png", label: "Coordinated Model Output 1" },
      { src: "/image/data-center-bim-mep-coordination-malaysia-ouput-4%20(2).jpg", label: "Coordinated Model Output 2" },
      { src: "/image/data-center-bim-mep-coordination-malaysia-ouput-4%20(1).png", label: "Coordinated Model Output 3" },
      { src: "/image/data-center-bim-mep-coordination-malaysia-ouput-4%20(1).jpg", label: "Coordinated Model Output 4" },
    ],
    inputPoints: [
      "Architectural design references",
      "Structural layout drawings",
      "MEP, ICT, and utility schematics",
      "Equipment schedules and specifications",
      "LOD 350 modeling standards",
    ],
    outputPoints: [
      "Architectural BIM model",
      "Structural BIM model",
      "MEP BIM model",
      "Custom Revit families",
      "Shop drawings and clash-free documentation",
    ],
  },
  pain: {
    description:
      "Mission-critical density, massive site scale, and specialized systems created severe coordination pressure across the full project lifecycle.",
    items: [
      {
        title: "Intense MEP-Heavy Infrastructure",
        text: "Dense MEP, ICT, and utility systems required precise routing and continuous multi-discipline coordination.",
      },
      {
        title: "Massive Scale and Footprint",
        text: "Coordinating building systems across a 10.3-hectare site demanded meticulous planning and model management.",
      },
      {
        title: "Integration of Specialized Systems",
        text: "Water treatment, chemical dosing, and cooling systems required seamless integration within constrained spaces.",
      },
      {
        title: "High-Stakes Equipment Density",
        text: "Extensive mechanical and electrical equipment layouts demanded exceptional accuracy to minimize construction risks.",
      },
      {
        title: "High Density of MEP Systems",
        text: "Extensive routing of chilled water, electrical, fire protection, ICT, and plumbing services created severe coordination challenges.",
      },
      {
        title: "Complex Mechanical Infrastructure",
        text: "ACMV systems, water treatment systems, and cooling networks required detailed modeling and coordination.",
      },
      {
        title: "Electrical System Complexity",
        text: "Major electrical equipment, earthing systems, lighting networks, and BMS integrations increased model complexity.",
      },
      {
        title: "Clash Detection at Scale",
        text: "Coordinating Architecture, Structure, and multiple MEP trades required continuous clash analysis and issue resolution.",
      },
    ],
  },
  approach: {
    description:
      "A structured BIM workflow with regular clash detection ensured seamless integration of all critical building systems.",
    items: [
      {
        title: "Architectural BIM Modeling",
        text: "Developed coordinated architectural models aligned with the 10.3-hectare data center site and building envelope.",
      },
      {
        title: "Structural BIM Modeling",
        text: "Built structural models to support dense MEP routing and equipment placement across the facility.",
      },
      {
        title: "MEP BIM Modeling",
        text: "Modeled mechanical, electrical, plumbing, fire protection, and ICT systems with LOD 350 precision.",
      },
      {
        title: "Revit Family Creation",
        text: "Created and maintained hundreds of specialized equipment families required for accurate data center modeling.",
      },
      {
        title: "Shop Drawings Development",
        text: "Produced shop drawings from coordinated models to support construction execution.",
      },
      {
        title: "Clash Detection & Reporting",
        text: "Ran continuous clash analysis across all trades with documented issue tracking and resolution.",
      },
      {
        title: "BIM Coordination",
        text: "Maintained multi-discipline coordination across a two-year engagement with strict quality control.",
      },
    ],
  },
  execution: {
    tag: "Execution Strategy",
    titleLine1: "Structured BIM Workflow ",
    titleLine2: "for Mission-Critical Delivery",
    description:
      "We implemented a structured BIM workflow focused on accuracy and coordination. Regular clash detection prevented costly conflicts. The approach ensured seamless integration of all critical building systems.",
    steps: toExecutionSteps([
      "Model Setup and BIM Standards Alignment",
      "Architectural and Structural Modeling",
      "MEP and ICT System Modeling",
      "Revit Family Development",
      "Clash Detection and Issue Resolution",
      "Shop Drawing Production and Final Delivery",
    ]),
  },
  outcomes: {
    description:
      "Project outcomes that reduced risks, improved constructability, and enhanced delivery confidence.",
    items: [
      {
        title: "4x Cost Saving",
        text: "Dedicated offshore BIM coordination reduced delivery cost across the two-year data center engagement.",
      },
      {
        title: "90% On-time Delivery",
        text: "Coordinated models and documentation were delivered on schedule across structured project milestones.",
      },
      {
        title: "95% Project Efficiency",
        text: "Continuous clash cycles and disciplined model management kept a ten-person team productive at scale.",
      },
      {
        title: "99% Quality Assurance",
        text: "LOD 350 compliance and quality control were maintained throughout the project lifecycle.",
      },
    ],
  },
};

export default function DataCenterBimMepCoordinationMalaysiaPage() {
  return <ProjectCaseStudy content={content} />;
}
