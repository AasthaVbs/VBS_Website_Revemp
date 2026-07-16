"use client";
// @ts-nocheck

import { ProjectCaseStudy } from "@/components/vbs/projects/case-study";
import { overviewChipIcons, toExecutionSteps } from "@/components/vbs/projects/case-study/helpers";

const content = {
  hero: {
    tag: "Healthcare",
    titleLead: "MEPF Modeling with Clash Detection & Coordination: ",
    titleAccent: "Healthcare Institute",
    description:
      "LOD 300 MEPF modeling with inter-discipline clash detection, shop drawings, and fabrication drawings for a healthcare institute project.",
    image: "/image/project4-slider1.jpg",
    imageAlt: "Healthcare institute MEPF BIM modeling project",
  },
  overview: {
    image: "/image/project4-slider2.jpg",
    imageAlt: "LOD 300 MEPF coordinated healthcare model",
    paragraphs: [
      "This healthcare institute project required LOD 300 MEPF models with inter-discipline clash detection and coordination. Our team developed coordinated discipline models and produced shop and fabrication drawings for installation.",
      "Healthcare facilities demand precise MEPF coordination to support critical building systems, and the deliverables addressed these requirements through structured BIM workflows.",
    ],
    chips: [
      { label: "Level of Development LOD 300", icon: overviewChipIcons.lod },
      { label: "Discipline MEPF", icon: overviewChipIcons.manpower },
      { label: "Location Healthcare Institute", icon: overviewChipIcons.location },
      { label: "Project Type Healthcare", icon: overviewChipIcons.area },
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
      "From MEPF design inputs to LOD 300 coordinated models, shop drawings, and fabrication drawings.",
    inputImages: [
      { src: "/image/project4-slider1.jpg", label: "MEPF Design Drawings and References" },
    ],
    outputImages: [
      { src: "/image/project4-slider2.jpg", label: "LOD 300 Coordinated MEPF Model" },
      { src: "/image/project4-slider3.jpg", label: "Shop and Fabrication Drawings" },
    ],
    inputPoints: [
      "MEPF design drawings and specifications",
      "Architectural and structural reference models",
      "Medical equipment schedules and layouts",
      "Healthcare BIM standards and guidelines",
    ],
    outputPoints: [
      "LOD 300 MEPF model",
      "Inter-discipline clash detection and coordination",
      "Shop drawings",
      "Fabrication drawings",
    ],
  },
  pain: {
    description:
      "Healthcare facilities present unique MEPF coordination challenges due to critical system requirements.",
    items: [
      {
        title: "Critical MEPF System Coordination",
        text: "Healthcare buildings require precise coordination of mechanical, medical gas, and electrical systems.",
      },
      {
        title: "Inter-Discipline Clash Risks",
        text: "Dense MEPF routing in healthcare facilities creates high clash potential requiring systematic detection.",
      },
      {
        title: "Shop Drawing Precision",
        text: "Installation of healthcare MEPF systems depends on accurate shop and fabrication drawings.",
      },
      {
        title: "Regulatory and Code Compliance",
        text: "Healthcare MEPF systems must meet stringent code and regulatory requirements.",
      },
    ],
  },
  approach: {
    description:
      "LOD 300 MEPF modeling with clash detection, coordination, and healthcare-focused drawing production.",
    items: [
      {
        title: "LOD 300 MEPF Modeling",
        text: "Developed mechanical, electrical, plumbing, and fire protection models at LOD 300 in Revit.",
      },
      {
        title: "Inter-Discipline Clash Detection",
        text: "Ran federated clash tests across all disciplines using Navisworks.",
      },
      {
        title: "Coordination and Resolution",
        text: "Documented and resolved clashes through structured coordination workflows.",
      },
      {
        title: "Shop and Fabrication Drawings",
        text: "Produced installation and fabrication drawing sets from the coordinated model.",
      },
    ],
  },
  execution: {
    tag: "Execution Strategy",
    titleLine1: "A Structured Healthcare MEPF ",
    titleLine2: "Workflow - Phase by Phase",
    description:
      "Delivery progressed from design intake through MEPF modeling, clash detection, and drawing production.",
    steps: toExecutionSteps([
      "MEPF Design Intake and Healthcare Standards Review",
      "LOD 300 MEPF Discipline Modeling",
      "Inter-Discipline Clash Detection",
      "Coordination and Issue Resolution",
      "Shop and Fabrication Drawing Production",
      "Final Review and Delivery",
    ]),
  },
  outcomes: {
    description:
      "LOD 300 MEPF models with clash detection, shop drawings, and fabrication drawings delivered.",
    items: [
      {
        title: "LOD 300 MEPF Model",
        text: "Coordinated MEPF models developed at LOD 300 for the healthcare institute.",
      },
      {
        title: "Inter-Discipline Clash Detection and Coordination",
        text: "Conflicts identified and resolved across all building systems.",
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

export default function MepfModelingHealthcareInstitutePage() {
  return <ProjectCaseStudy content={content} />;
}
