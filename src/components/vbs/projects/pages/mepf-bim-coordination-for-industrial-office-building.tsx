"use client";
// @ts-nocheck

import { ProjectCaseStudy } from "@/components/vbs/projects/case-study";
import { overviewChipIcons, toExecutionSteps } from "@/components/vbs/projects/case-study/helpers";

const content = {
  hero: {
    tag: "Industrial Facility",
    titleLead: "MEPF BIM Coordination for Industrial Office Building: ",
    titleAccent: "Florida, USA",
    description:
      "LOD 350 BIM modeling for Plumbing, HVAC, and Fire Protection systems delivered in 7 days for seamless coordination and efficient space use.",
    image: "/image/MEPF-BIM-Coordination-for-Industrial-Office-Building-Florida,-USA.png",
    imageAlt: "MEPF BIM coordination — 3D plumbing, HVAC, and fire protection systems for the Florida industrial office project",
  },
  overview: {
    image: "/image/AISDWootenElementarySchool%20Case%20study-41.jpg",
    imageAlt: "Coordinated MEPF BIM output for Florida industrial office building",
    paragraphs: [
      "An MEP consulting firm required precise BIM modeling support for a 30,000 sq. ft., 4-storey office building in Florida, USA. The facility was integrated within a factory and warehouse setup, adding coordination complexity.",
      "The project required LOD 350 Revit models covering Plumbing, HVAC, and Fire Protection systems. Our team of four delivered accurate, fully coordinated models within a 7-day turnaround.",
    ],
    chips: [
      { label: "Project Type Industrial Facility", icon: overviewChipIcons.area },
      { label: "Level of Development LOD 350", icon: overviewChipIcons.lod },
      { label: "Project Area 30,000 Sq.Ft.", icon: overviewChipIcons.area },
      { label: "Manpower Used 4 Resources", icon: overviewChipIcons.manpower },
      { label: "Location Florida, USA", icon: overviewChipIcons.location },
    ],
  },
  tools: {
    description:
      "MEPF modeling and clash detection ran in Autodesk Revit and Navisworks for a fast-turnaround industrial office delivery.",
    items: [
      { name: "Autodesk Revit", icon: "/icon/revit.png" },
      { name: "Navisworks", icon: "/icon/navisworks.png" },
    ],
  },
  io: {
    description:
      "From architectural and structural references to LOD 350 coordinated Plumbing, HVAC, and Fire Protection models in seven days.",
    inputImages: [
      { src: "/image/AISDWootenElementarySchool%20Case%20study-30.jpg", label: "MEPF Input 1" },
      { src: "/image/AISDWootenElementarySchool%20Case%20study-31.jpg", label: "MEPF Input 2" },
    ],
    outputImages: [
      { src: "/image/AISDWootenElementarySchool%20Case%20study-41.jpg", label: "Coordinated Output 1" },
      { src: "/image/AISDWootenElementarySchool%20Case%20study-42.jpg", label: "Coordinated Output 2" },
    ],
    inputPoints: [
      "Architectural Revit model",
      "Structural Revit model",
      "Plumbing, HVAC, and fire protection layouts",
      "Industrial facility spatial constraints",
      "7-day delivery schedule",
    ],
    outputPoints: [
      "Plumbing system model",
      "HVAC system model",
      "Fire protection system model",
      "Clash-free coordinated MEPF model",
      "LOD 350 validated deliverable",
    ],
  },
  pain: {
    description:
      "Multi-trade modeling, industrial spatial constraints, and a seven-day deadline left no room for late-stage coordination rework.",
    items: [
      {
        title: "Multi-Trade Coordination Complexity",
        text: "Simultaneous modeling of Plumbing, HVAC, and Fire Protection across four floors required tight inter-discipline coordination to avoid costly conflicts.",
      },
      {
        title: "Tight Delivery Timeline",
        text: "A 7-day turnaround demanded a structured workflow with no room for rework caused by late-stage clashes or miscommunication.",
      },
      {
        title: "Compliance Requirements",
        text: "Models required precise spatial geometry and connection detailing to meet LOD 350 standards, going well beyond basic representation.",
      },
      {
        title: "Industrial Context Integration",
        text: "The office building was located within a factory and warehouse facility, introducing unique spatial constraints that directly affected MEP routing decisions.",
      },
      {
        title: "Architecture and Structure Alignment",
        text: "Coordinating MEP services against the provided Architectural and Structural Revit models required careful reference management and consistent modeling standards throughout.",
      },
      {
        title: "Limited Ceiling Space",
        text: "Tight clearances made routing Plumbing, HVAC, and Fire Protection services difficult.",
      },
      {
        title: "Steel Beam Interference",
        text: "Structural steel beams created significant obstructions across MEPF service routing paths.",
      },
      {
        title: "Unresolvable Clash Zones",
        text: "Certain clash areas required RFIs to be raised directly with the client.",
      },
      {
        title: "Multi-Disciplinary Coordination",
        text: "Complex clashes needed active input from structural and site engineers to resolve.",
      },
    ],
  },
  approach: {
    description:
      "Four BIM specialists followed a parallel yet coordinated modeling approach in a shared model environment to meet the 7-day deadline.",
    items: [
      {
        title: "Plumbing System Modeling",
        text: "Modeled plumbing systems with LOD 350 precision across four floors within the industrial office context.",
      },
      {
        title: "HVAC System Modeling",
        text: "Routed HVAC services through tight ceiling zones while maintaining compliance with clearance requirements.",
      },
      {
        title: "Fire Protection System Modeling",
        text: "Developed fire protection layouts coordinated with plumbing and HVAC routing paths.",
      },
      {
        title: "Clash Detection and Resolution",
        text: "Ran intra- and cross-trade clash detection cycles, escalating unresolvable zones through RFIs.",
      },
      {
        title: "Multi-trade MEP Coordination",
        text: "Maintained shared-model coordination across four specialists to deliver clash-resolved models on schedule.",
      },
    ],
  },
  execution: {
    tag: "Execution Strategy",
    titleLine1: "Parallel MEPF Modeling ",
    titleLine2: "Within a 7-Day Window",
    description:
      "Our team of four BIM specialists followed a parallel yet coordinated modeling approach. Trades were divided while maintaining a shared model environment. This ensured every system was clash-resolved and LOD 350 compliant within the project deadline.",
    steps: toExecutionSteps([
      "Model Setup and Standards Alignment",
      "Architectural and Structural Model Referencing",
      "Plumbing System Modeling",
      "HVAC System Modeling",
      "Fire Protection System Modeling",
      "Intra and Cross Trade Clash Detection",
      "Coordination Review and Issue Tracking",
      "Iterative Clash Resolution",
      "Final Model Validation and Delivery",
    ]),
  },
  outcomes: {
    description:
      "Quantifiable outcomes delivered through precision BIM coordination and proactive pre-construction clash resolution.",
    items: [
      {
        title: "4x Cost Saving",
        text: "Offshore MEPF coordination reduced delivery cost while meeting a demanding seven-day turnaround.",
      },
      {
        title: "99% On-time Delivery",
        text: "LOD 350 coordinated models were delivered within the 7-day project window.",
      },
      {
        title: "85% Project Efficiency",
        text: "Parallel trade modeling in a shared environment kept four specialists productive without rework loops.",
      },
      {
        title: "99% Quality Assurance",
        text: "Every system was clash-resolved and LOD 350 compliant before final submission.",
      },
    ],
  },
};

export default function MepfBimCoordinationForIndustrialOfficeBuildingPage() {
  return <ProjectCaseStudy content={content} />;
}
