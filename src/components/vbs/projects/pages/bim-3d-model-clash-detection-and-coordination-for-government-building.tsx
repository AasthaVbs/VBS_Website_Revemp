"use client";
// @ts-nocheck

import { ProjectCaseStudy } from "@/components/vbs/projects/case-study";
import { overviewChipIcons, toExecutionSteps } from "@/components/vbs/projects/case-study/helpers";

const content = {
  hero: {
    tag: "Public Infrastructure",
    titleLead: "LOD 500 As-Built Modeling: ",
    titleAccent: "Government Building",
    description:
      "LOD 500 as-built BIM modeling with inter-discipline clash detection and coordination for a government building project.",
    image: "/image/project9-slider1.jpg",
    imageAlt: "Government building LOD 500 as-built modeling",
  },
  overview: {
    image: "/image/project9-slider2.jpg",
    imageAlt: "LOD 500 as-built government building model",
    paragraphs: [
      "This government building project required LOD 500 as-built BIM models capturing the constructed state of the facility. Our team developed accurate as-built models with inter-discipline clash detection and coordination.",
      "The deliverables provide a reliable digital record of the building for facility management, future renovations, and operational planning.",
    ],
    chips: [
      { label: "Level of Development LOD 500", icon: overviewChipIcons.lod },
      { label: "Discipline Multi-Discipline", icon: overviewChipIcons.manpower },
      { label: "Location Government Building", icon: overviewChipIcons.location },
      { label: "Project Type Public Infrastructure", icon: overviewChipIcons.area },
    ],
  },
  tools: {
    description:
      "As-built modeling and coordination ran in Autodesk Revit and Navisworks for accurate facility documentation.",
    items: [
      { name: "Revit", icon: "/icon/revit.png" },
      { name: "Navisworks", icon: "/icon/navisworks.png" },
    ],
  },
  io: {
    description:
      "From field data and existing documentation to LOD 500 as-built models with coordinated discipline outputs.",
    inputImages: [
      { src: "/image/project9-slider1.jpg", label: "Existing Documentation and Field Data" },
    ],
    outputImages: [
      { src: "/image/project9-slider2.jpg", label: "LOD 500 As-Built Coordinated Model" },
    ],
    inputPoints: [
      "Existing design and construction drawings",
      "Field survey and laser scan data",
      "As-built mark-ups and redlines",
      "Equipment and asset records",
    ],
    outputPoints: [
      "LOD 500 as-built models",
      "Inter-discipline clash detection and coordination",
    ],
  },
  pain: {
    description:
      "Government buildings require accurate as-built records that reflect actual constructed conditions across all disciplines.",
    items: [
      {
        title: "As-Built Accuracy Requirements",
        text: "LOD 500 models must precisely reflect field conditions, including undocumented changes during construction.",
      },
      {
        title: "Multi-Discipline Record Gaps",
        text: "As-built documentation often exists in silos across architectural, structural, and MEP disciplines.",
      },
      {
        title: "Facility Management Needs",
        text: "Government facilities require reliable digital twins for long-term operations and maintenance.",
      },
      {
        title: "Inter-Discipline Consistency",
        text: "As-built models must be coordinated across disciplines to serve as a single source of truth.",
      },
    ],
  },
  approach: {
    description:
      "Field-verified as-built modeling with inter-discipline coordination at LOD 500.",
    items: [
      {
        title: "As-Built Data Collection",
        text: "Gathered field data, surveys, and redlines to establish accurate as-built conditions.",
      },
      {
        title: "LOD 500 Model Development",
        text: "Built discipline models at LOD 500 capturing actual constructed elements and systems.",
      },
      {
        title: "Inter-Discipline Clash Detection",
        text: "Coordinated federated as-built models through Navisworks clash detection.",
      },
      {
        title: "Validated Facility Record",
        text: "Reviewed and validated models against field conditions for facility management use.",
      },
    ],
  },
  execution: {
    tag: "Execution Strategy",
    titleLine1: "A Structured As-Built ",
    titleLine2: "Workflow - Phase by Phase",
    description:
      "Delivery progressed from data collection through LOD 500 modeling, coordination, and final validation.",
    steps: toExecutionSteps([
      "Field Data and Documentation Intake",
      "LOD 500 As-Built Modeling",
      "Inter-Discipline Coordination",
      "Clash Detection and Resolution",
      "Final Validation and Delivery",
    ]),
  },
  outcomes: {
    description:
      "LOD 500 as-built models with inter-discipline coordination delivered for the government building.",
    items: [
      {
        title: "LOD 500 As-Built Models",
        text: "Accurate as-built BIM models capturing constructed conditions at LOD 500.",
      },
      {
        title: "Inter-Discipline Clash Detection & Coordination",
        text: "Discipline models coordinated into a unified, clash-free facility record.",
      },
    ],
  },
};

export default function ThreedBimModelGovernmentBuildingPage() {
  return <ProjectCaseStudy content={content} />;
}
