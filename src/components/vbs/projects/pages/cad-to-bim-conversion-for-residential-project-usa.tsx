"use client";
// @ts-nocheck

import { ProjectCaseStudy } from "@/components/vbs/projects/case-study";
import { overviewChipIcons, toExecutionSteps } from "@/components/vbs/projects/case-study/helpers";

const content = {
  hero: {
    tag: "Residential Building",
    titleLead: "CAD to BIM Conversion: ",
    titleAccent: "Residential Project, USA",
    description:
      "CAD to BIM conversion producing a LOD 300 BIM model with accurate architectural element representation for a residential project in the USA.",
    image: "/image/project12-slider-1.jpg",
    imageAlt: "Residential CAD to BIM conversion USA",
  },
  overview: {
    image: "/image/project12-slider-1.jpg",
    imageAlt: "LOD 300 residential BIM model",
    paragraphs: [
      "This residential project in the USA required converting existing CAD documentation into a LOD 300 BIM model with accurate architectural element representation. Our team developed the model following client standards and residential design requirements.",
      "The deliverable provides a structured 3D model that supports design review, coordination, and downstream project workflows.",
    ],
    chips: [
      { label: "Level of Development LOD 300", icon: overviewChipIcons.lod },
      { label: "Discipline Architectural", icon: overviewChipIcons.manpower },
      { label: "Location USA", icon: overviewChipIcons.location },
      { label: "Project Type Residential Building", icon: overviewChipIcons.area },
    ],
  },
  tools: {
    description:
      "CAD to BIM conversion ran in Autodesk Revit for accurate architectural model development.",
    items: [
      { name: "Revit", icon: "/icon/revit.png" },
    ],
  },
  io: {
    description:
      "From 2D CAD architectural drawings to a LOD 300 BIM model with accurate element representation.",
    inputImages: [
      { src: "/image/project12-slider-1.jpg", label: "2D CAD Architectural Drawings" },
    ],
    outputImages: [
      { src: "/image/project12-slider-1.jpg", label: "LOD 300 Architectural BIM Model" },
    ],
    inputPoints: [
      "2D CAD architectural drawing sets",
      "Design specifications and standards",
      "Client BIM templates",
      "Room and finish schedules",
    ],
    outputPoints: [
      "LOD 300 BIM model",
      "Accurate architectural elements representation",
    ],
  },
  pain: {
    description:
      "Residential CAD documentation often lacks the 3D intelligence needed for modern design and coordination workflows.",
    items: [
      {
        title: "2D to 3D Conversion Accuracy",
        text: "CAD drawings must be converted with precise architectural element representation at LOD 300.",
      },
      {
        title: "Element Detail Requirements",
        text: "Walls, openings, finishes, and fixtures need accurate modeling for downstream use.",
      },
      {
        title: "Client Standards Compliance",
        text: "Models must follow client-specific BIM standards and naming conventions.",
      },
      {
        title: "Residential Layout Complexity",
        text: "Multi-room residential layouts require careful modeling of architectural relationships.",
      },
    ],
  },
  approach: {
    description:
      "Structured CAD to BIM conversion with LOD 300 architectural modeling and quality validation.",
    items: [
      {
        title: "CAD Drawing Audit",
        text: "Reviewed 2D CAD sets to identify elements, layers, and conversion requirements.",
      },
      {
        title: "Revit Model Setup",
        text: "Configured Revit project with client templates, levels, and grids.",
      },
      {
        title: "LOD 300 Element Modeling",
        text: "Built architectural elements at LOD 300 with accurate representation of design intent.",
      },
      {
        title: "Quality Validation",
        text: "Validated model against source drawings and client standards before delivery.",
      },
    ],
  },
  execution: {
    tag: "Execution Strategy",
    titleLine1: "A Structured CAD to BIM ",
    titleLine2: "Workflow - Phase by Phase",
    description:
      "Delivery moved from CAD intake through model setup, LOD 300 modeling, and final validation.",
    steps: toExecutionSteps([
      "CAD Intake and Drawing Audit",
      "Revit Project Setup",
      "LOD 300 Architectural Modeling",
      "Quality Validation and Delivery",
    ]),
  },
  outcomes: {
    description:
      "LOD 300 residential BIM model with accurate architectural elements delivered from CAD inputs.",
    items: [
      {
        title: "LOD 300 BIM Model",
        text: "Structured architectural BIM model developed at LOD 300.",
      },
      {
        title: "Accurate Architectural Elements Representation",
        text: "Walls, openings, finishes, and fixtures modeled with design-intent accuracy.",
      },
    ],
  },
};

export default function PortfolioCadToBimResidentialUsaPage() {
  return <ProjectCaseStudy content={content} />;
}
