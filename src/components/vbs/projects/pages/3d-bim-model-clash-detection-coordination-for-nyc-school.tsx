"use client";
// @ts-nocheck

import { ProjectCaseStudy } from "@/components/vbs/projects/case-study";
import { overviewChipIcons, toExecutionSteps } from "@/components/vbs/projects/case-study/helpers";

const content = {
  hero: {
    tag: "Commercial Building",
    titleLead: "LOD 300 MEPF Modeling with Clash Detection & Coordination: ",
    titleAccent: "NYC School",
    description:
      "LOD 300 mechanical, electrical, plumbing, and fire protection modeling with clash detection and coordination for a New York City school building.",
    image: "/image/project15-slider-1.jpg",
    imageAlt: "NYC school MEPF BIM modeling project",
  },
  overview: {
    image: "/image/project15-slider-2.jpg",
    imageAlt: "Coordinated MEPF BIM model for NYC school",
    paragraphs: [
      "This commercial school project required detailed LOD 300 MEPF modeling across mechanical, electrical, plumbing, and fire protection systems. Our team developed coordinated discipline models aligned with the client's standards and project requirements.",
      "Clash detection and interdisciplinary coordination were performed to resolve conflicts before construction, ensuring a clash-free model ready for downstream use.",
    ],
    chips: [
      { label: "Level of Development LOD 300", icon: overviewChipIcons.lod },
      { label: "Discipline MEPF", icon: overviewChipIcons.manpower },
      { label: "Location New York City, USA", icon: overviewChipIcons.location },
      { label: "Project Type Commercial Building", icon: overviewChipIcons.area },
    ],
  },
  tools: {
    description:
      "Modeling and coordination ran in Autodesk Revit and Navisworks, integrated with the client's existing BIM workflow.",
    items: [
      { name: "Revit", icon: "/icon/revit.png" },
      { name: "Navisworks", icon: "/icon/navisworks.png" },
    ],
  },
  io: {
    description:
      "From design inputs and reference drawings to coordinated LOD 300 MEPF models with clash-free coordination.",
    inputImages: [
      { src: "/image/project15-slider-1.jpg", label: "Design Reference Drawings" },
    ],
    outputImages: [
      { src: "/image/project15-slider-2.jpg", label: "Coordinated LOD 300 MEPF Model" },
    ],
    inputPoints: [
      "Architectural and structural reference models",
      "MEP design drawings and specifications",
      "Client BIM standards and templates",
      "Equipment schedules and layout data",
    ],
    outputPoints: [
      "LOD 300 mechanical, electrical, plumbing, and fire protection modeling",
      "Clash detection and coordination",
    ],
  },
  pain: {
    description:
      "Multi-discipline MEPF systems in a school building present coordination challenges that require structured BIM delivery.",
    items: [
      {
        title: "Complex MEPF System Coordination",
        text: "Mechanical, electrical, plumbing, and fire protection systems must fit within tight ceiling and shaft spaces typical of school buildings.",
      },
      {
        title: "Inter-Discipline Clash Resolution",
        text: "Overlapping routes and equipment placements require systematic clash detection before construction begins.",
      },
      {
        title: "LOD 300 Detail Requirements",
        text: "Models must reach LOD 300 with sufficient detail for coordination while maintaining accuracy across all disciplines.",
      },
      {
        title: "Tight Project Schedules",
        text: "School projects often face fixed occupancy deadlines, requiring efficient modeling and coordination workflows.",
      },
    ],
  },
  approach: {
    description:
      "Structured MEPF modeling, clash detection, and coordination aligned to LOD 300 standards.",
    items: [
      {
        title: "Discipline-Specific MEPF Modeling",
        text: "Developed LOD 300 models for mechanical, electrical, plumbing, and fire protection systems in Revit.",
      },
      {
        title: "Federated Model Coordination",
        text: "Linked discipline models for comprehensive clash detection across all building systems.",
      },
      {
        title: "Clash Detection and Resolution",
        text: "Ran Navisworks clash tests, documented conflicts, and coordinated resolutions with the project team.",
      },
      {
        title: "Quality-Assured Deliverables",
        text: "Validated models against client standards before final delivery of coordinated MEPF outputs.",
      },
    ],
  },
  execution: {
    tag: "Execution Strategy",
    titleLine1: "A Structured MEPF ",
    titleLine2: "Workflow - Phase by Phase",
    description:
      "Delivery progressed from scope alignment through discipline modeling, clash detection, and final coordination.",
    steps: toExecutionSteps([
      "Scope Briefing and Standards Alignment",
      "LOD 300 MEPF Discipline Modeling",
      "Federated Model Assembly",
      "Clash Detection and Issue Resolution",
      "Coordinated Model Review and Delivery",
    ]),
  },
  outcomes: {
    description:
      "Coordinated LOD 300 MEPF models with clash detection delivered for the NYC school project.",
    items: [
      {
        title: "LOD 300 MEPF Modeling",
        text: "Mechanical, electrical, plumbing, and fire protection models developed at LOD 300.",
      },
      {
        title: "Clash Detection and Coordination",
        text: "Interdisciplinary clashes identified and resolved through structured coordination workflows.",
      },
    ],
  },
};

export default function Portfolio3dForSchoolPage() {
  return <ProjectCaseStudy content={content} />;
}
