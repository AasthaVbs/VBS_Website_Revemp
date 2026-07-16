"use client";
// @ts-nocheck

import { ProjectCaseStudy } from "@/components/vbs/projects/case-study";
import { overviewChipIcons, toExecutionSteps } from "@/components/vbs/projects/case-study/helpers";

const content = {
  hero: {
    tag: "Commercial Building",
    titleLead: "LOD 300 MEPF Modeling with Clash Detection: ",
    titleAccent: "Commercial Project",
    description:
      "LOD 300 mechanical, electrical, and plumbing BIM modeling with clash detection and coordination for a commercial building project.",
    image: "/image/project14-slider-1.jpg",
    imageAlt: "Commercial LOD 300 MEPF BIM modeling project",
  },
  overview: {
    image: "/image/project14-slider-1.jpg",
    imageAlt: "LOD 300 MEP coordinated commercial model",
    paragraphs: [
      "This commercial project required LOD 300 BIM models for mechanical, electrical, and plumbing systems with integrated clash detection and coordination. Our team developed discipline models aligned with project standards.",
      "Clash detection workflows ensured MEP systems coordinated effectively before construction, reducing field conflicts on the commercial build.",
    ],
    chips: [
      { label: "Level of Development LOD 300", icon: overviewChipIcons.lod },
      { label: "Discipline MEP", icon: overviewChipIcons.manpower },
      { label: "Location Commercial Project", icon: overviewChipIcons.location },
      { label: "Project Type Commercial Building", icon: overviewChipIcons.area },
    ],
  },
  tools: {
    description:
      "MEP modeling and clash detection ran in Autodesk Revit and Navisworks.",
    items: [
      { name: "Revit", icon: "/icon/revit.png" },
      { name: "Navisworks", icon: "/icon/navisworks.png" },
    ],
  },
  io: {
    description:
      "From MEP design inputs to LOD 300 coordinated models with clash-free MEP systems.",
    inputImages: [
      { src: "/image/project14-slider-1.jpg", label: "MEP Design Drawings and References" },
    ],
    outputImages: [
      { src: "/image/project14-slider-1.jpg", label: "LOD 300 MEP Coordinated Model" },
    ],
    inputPoints: [
      "MEP design drawings and specifications",
      "Architectural and structural reference models",
      "Equipment schedules and layout data",
      "Client BIM standards",
    ],
    outputPoints: [
      "LOD 300 BIM model of mechanical, electrical, and plumbing",
      "Clash detection and coordination",
    ],
  },
  pain: {
    description:
      "Commercial MEP projects require coordinated LOD 300 models with systematic clash detection.",
    items: [
      {
        title: "MEP System Complexity",
        text: "Commercial buildings involve dense MEP routing that requires detailed LOD 300 modeling.",
      },
      {
        title: "Ceiling Space Coordination",
        text: "Mechanical, electrical, and plumbing systems compete for limited ceiling and plenum space.",
      },
      {
        title: "Clash Prevention",
        text: "Undetected MEP clashes lead to costly field rework and schedule delays.",
      },
      {
        title: "Multi-Trade Alignment",
        text: "MEP models must align with architectural and structural constraints throughout the building.",
      },
    ],
  },
  approach: {
    description:
      "LOD 300 MEP modeling with federated clash detection and coordination workflows.",
    items: [
      {
        title: "LOD 300 MEP Modeling",
        text: "Developed mechanical, electrical, and plumbing models in Revit at LOD 300.",
      },
      {
        title: "Federated Model Coordination",
        text: "Linked MEP models with architectural and structural references for coordination.",
      },
      {
        title: "Clash Detection",
        text: "Ran Navisworks clash tests across all MEP systems and reference disciplines.",
      },
      {
        title: "Issue Resolution",
        text: "Documented and resolved clashes through structured coordination workflows.",
      },
    ],
  },
  execution: {
    tag: "Execution Strategy",
    titleLine1: "A Structured MEP ",
    titleLine2: "Workflow - Phase by Phase",
    description:
      "Delivery progressed from design intake through MEP modeling, clash detection, and final coordination.",
    steps: toExecutionSteps([
      "MEP Design Intake and Standards Alignment",
      "LOD 300 MEP Discipline Modeling",
      "Federated Model Assembly",
      "Clash Detection and Resolution",
      "Final Coordinated Model Delivery",
    ]),
  },
  outcomes: {
    description:
      "LOD 300 MEP models with clash detection and coordination delivered for the commercial project.",
    items: [
      {
        title: "LOD 300 MEP BIM Model",
        text: "Mechanical, electrical, and plumbing models developed at LOD 300.",
      },
      {
        title: "Clash Detection and Coordination",
        text: "Interdisciplinary clashes identified and resolved through structured workflows.",
      },
    ],
  },
};

export default function PortfolioCadToBimCommercialPage() {
  return <ProjectCaseStudy content={content} />;
}
