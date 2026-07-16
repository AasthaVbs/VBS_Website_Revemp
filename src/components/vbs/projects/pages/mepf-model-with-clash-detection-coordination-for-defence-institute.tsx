"use client";
// @ts-nocheck

import { ProjectCaseStudy } from "@/components/vbs/projects/case-study";
import { overviewChipIcons, toExecutionSteps } from "@/components/vbs/projects/case-study/helpers";

const content = {
  hero: {
    tag: "Public Infrastructure",
    titleLead: "LOD 400 ACS & MEPF Modeling with Shop Drawings & Clash Detection: ",
    titleAccent: "Defence Institute",
    description:
      "LOD 400 mechanical, electrical, plumbing, and fire protection modeling with inter-discipline clash detection, shop drawings, and fabrication drawings for a defence institute.",
    image: "/image/project2-slider1.jpg",
    imageAlt: "Defence institute MEPF BIM modeling project",
  },
  overview: {
    image: "/image/project2-slider2.jpg",
    imageAlt: "LOD 400 MEPF coordinated model defence institute",
    paragraphs: [
      "This defence institute project required LOD 400 MEPF models across mechanical, electrical, plumbing, and fire protection systems with inter-discipline clash detection and coordination. Our team delivered coordinated models along with shop and fabrication drawings.",
      "The deliverables supported installation planning and fabrication with accurate, coordinated drawing sets derived from the LOD 400 BIM models.",
    ],
    chips: [
      { label: "Level of Development LOD 400", icon: overviewChipIcons.lod },
      { label: "Discipline MEPF", icon: overviewChipIcons.manpower },
      { label: "Location Defence Institute", icon: overviewChipIcons.location },
      { label: "Project Type Public Infrastructure", icon: overviewChipIcons.area },
    ],
  },
  tools: {
    description:
      "MEPF modeling, clash detection, and drawing production ran in Autodesk Revit and Navisworks.",
    items: [
      { name: "Revit", icon: "/icon/revit.png" },
      { name: "Navisworks", icon: "/icon/navisworks.png" },
    ],
  },
  io: {
    description:
      "From MEPF design inputs to LOD 400 coordinated models, shop drawings, and fabrication drawings.",
    inputImages: [
      { src: "/image/project2-slider1.jpg", label: "MEPF Design Drawings and References" },
    ],
    outputImages: [
      { src: "/image/project2-slider2.jpg", label: "LOD 400 Coordinated MEPF Model" },
      { src: "/image/project2-slider3.jpg", label: "Shop and Fabrication Drawings" },
    ],
    inputPoints: [
      "MEPF design drawings and specifications",
      "Architectural and structural reference models",
      "Equipment schedules and layout data",
      "Client BIM standards and templates",
    ],
    outputPoints: [
      "LOD 400 mechanical, electrical, plumbing, and fire protection models",
      "Inter-discipline clash detection and coordination",
      "Shop drawings",
      "Fabrication drawings",
    ],
  },
  pain: {
    description:
      "Defence institute facilities require precise MEPF coordination and fabrication-ready documentation.",
    items: [
      {
        title: "LOD 400 MEPF Detail Requirements",
        text: "Institutional MEPF systems require detailed LOD 400 models for installation and fabrication.",
      },
      {
        title: "Inter-Discipline Coordination",
        text: "Mechanical, electrical, plumbing, and fire protection systems must coordinate without conflicts.",
      },
      {
        title: "Shop and Fabrication Drawing Accuracy",
        text: "Installation and fabrication depend on drawing sets that precisely reflect the coordinated model.",
      },
      {
        title: "Institutional System Complexity",
        text: "Defence facilities involve specialized MEPF systems with stringent coordination requirements.",
      },
    ],
  },
  approach: {
    description:
      "LOD 400 MEPF modeling with clash detection, coordination, and shop/fabrication drawing production.",
    items: [
      {
        title: "LOD 400 MEPF Modeling",
        text: "Developed mechanical, electrical, plumbing, and fire protection models at LOD 400 in Revit.",
      },
      {
        title: "Inter-Discipline Clash Detection",
        text: "Ran federated clash tests across all MEPF disciplines using Navisworks.",
      },
      {
        title: "Shop Drawing Production",
        text: "Extracted shop drawings from coordinated models for installation planning.",
      },
      {
        title: "Fabrication Drawing Delivery",
        text: "Produced fabrication-ready drawing sets aligned with the coordinated BIM model.",
      },
    ],
  },
  execution: {
    tag: "Execution Strategy",
    titleLine1: "A Structured MEPF ",
    titleLine2: "Workflow - Phase by Phase",
    description:
      "Delivery progressed from design intake through MEPF modeling, clash detection, and drawing production.",
    steps: toExecutionSteps([
      "MEPF Design Intake and Standards Alignment",
      "LOD 400 MEPF Discipline Modeling",
      "Inter-Discipline Clash Detection",
      "Coordination and Issue Resolution",
      "Shop and Fabrication Drawing Production",
      "Final Review and Delivery",
    ]),
  },
  outcomes: {
    description:
      "LOD 400 MEPF models with clash detection, shop drawings, and fabrication drawings delivered.",
    items: [
      {
        title: "LOD 400 MEPF Models",
        text: "Mechanical, electrical, plumbing, and fire protection models at LOD 400.",
      },
      {
        title: "Inter-Discipline Clash Detection and Coordination",
        text: "Conflicts identified and resolved across all MEPF disciplines.",
      },
      {
        title: "Shop Drawings",
        text: "Installation-ready shop drawing sets extracted from coordinated models.",
      },
      {
        title: "Fabrication Drawings",
        text: "Fabrication-ready drawing sets aligned with the BIM model.",
      },
    ],
  },
};

export default function MepfModelDefenceInstitutePage() {
  return <ProjectCaseStudy content={content} />;
}
