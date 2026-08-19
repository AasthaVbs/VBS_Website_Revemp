"use client";
// @ts-nocheck

import { ProjectCaseStudy } from "@/components/vbs/projects/case-study";
import { overviewChipIcons, toExecutionSteps } from "@/components/vbs/projects/case-study/helpers";

const content = {
  hero: {
    tag: "Residential Building",
    titleLead: "CAD to BIM with Clash Detection & Coordination: ",
    titleAccent: "Residential Project",
    description:
      "CAD to BIM conversion at LOD 350 with clash detection, interdisciplinary coordination, and construction scheduling support for a residential building project.",
    image: "/image/cad-to-bim-lod-500-banners.jpg",
    imageAlt: "Residential CAD to BIM conversion project",
  },
  overview: {
    image: "/image/cad-to-bim-lod-500-overview.jpg",
    imageAlt: "LOD 350 coordinated residential BIM model",
    paragraphs: [
      "This residential project required converting existing CAD documentation into a coordinated LOD 350 BIM model. Our team developed architectural and discipline models with clash detection and interdisciplinary coordination throughout.",
      "Construction scheduling and project tracking were integrated into the delivery workflow to support the client's construction planning needs.",
    ],
    chips: [
      { label: "Level of Development LOD 350", icon: overviewChipIcons.lod },
      { label: "Discipline Multi-Discipline", icon: overviewChipIcons.manpower },
      { label: "Location USA", icon: overviewChipIcons.location },
      { label: "Project Type Residential Building", icon: overviewChipIcons.area },
    ],
  },
  tools: {
    description:
      "CAD to BIM conversion and coordination ran in Autodesk Revit and Navisworks across the project lifecycle.",
    items: [
      { name: "Revit", icon: "/icon/revit.png" },
      { name: "Navisworks", icon: "/icon/navisworks.png" },
    ],
  },
  io: {
    description:
      "From 2D CAD drawings to coordinated LOD 350 BIM models with clash-free interdisciplinary coordination.",
    inputImages: [],
    outputImages: [],
    inputPoints: [
      "2D CAD architectural and discipline drawings",
      "Design specifications and standards",
      "Client BIM execution plan",
      "Reference models from consultants",
    ],
    outputPoints: [
      "CAD to BIM conversion",
      "LOD 350 BIM model",
      "Clash detection",
      "Interdisciplinary coordination",
      "Construction scheduling and project tracking",
    ],
  },
  pain: {
    description:
      "Residential projects converting from CAD to BIM face coordination gaps and schedule pressures that structured BIM delivery addresses.",
    items: [
      {
        title: "Legacy CAD Documentation Gaps",
        text: "Existing 2D drawings often lack the coordination detail needed for modern construction workflows.",
      },
      {
        title: "Multi-Discipline Coordination",
        text: "Architectural, structural, and MEP systems must align in a single coordinated model at LOD 350.",
      },
      {
        title: "Clash Prevention Before Construction",
        text: "Undetected conflicts between disciplines can cause costly field rework on residential builds.",
      },
      {
        title: "Schedule and Tracking Integration",
        text: "Construction teams need BIM models linked to scheduling and tracking for effective project control.",
      },
    ],
  },
  approach: {
    description:
      "CAD to BIM conversion followed by LOD 350 modeling, clash detection, and coordinated delivery.",
    items: [
      {
        title: "CAD to BIM Conversion",
        text: "Converted 2D CAD documentation into structured Revit models following client standards.",
      },
      {
        title: "LOD 350 Model Development",
        text: "Built coordinated discipline models at LOD 350 with accurate element representation.",
      },
      {
        title: "Clash Detection and Coordination",
        text: "Ran federated clash tests and resolved interdisciplinary conflicts through Navisworks.",
      },
      {
        title: "Scheduling and Tracking Support",
        text: "Integrated construction scheduling and project tracking into the BIM delivery workflow.",
      },
    ],
  },
  execution: {
    tag: "Execution Strategy",
    titleLine1: "A Structured CAD to BIM ",
    titleLine2: "Workflow - Phase by Phase",
    description:
      "Delivery moved from CAD intake through BIM conversion, LOD 350 modeling, clash detection, and final coordination.",
    steps: toExecutionSteps([
      "CAD Intake and Standards Review",
      "CAD to BIM Conversion",
      "LOD 350 Model Development",
      "Clash Detection and Coordination",
      "Construction Scheduling Integration",
      "Final Model Review and Delivery",
    ]),
  },
  outcomes: {
    description:
      "A coordinated LOD 350 residential BIM model with clash detection and scheduling support delivered from CAD inputs.",
    items: [
      {
        title: "CAD to BIM Conversion",
        text: "Legacy CAD documentation converted into structured, coordinated BIM models.",
      },
      {
        title: "LOD 350 BIM Model",
        text: "Discipline models developed at LOD 350 with accurate element representation.",
      },
      {
        title: "Clash Detection",
        text: "Interdisciplinary clashes identified and resolved before construction.",
      },
      {
        title: "Interdisciplinary Coordination",
        text: "All disciplines aligned in a single federated, clash-free model.",
      },
      {
        title: "Construction Scheduling and Project Tracking",
        text: "BIM deliverables integrated with scheduling and tracking workflows.",
      },
    ],
  },
};

export default function Portfolio3dBimModelingResidentialPage() {
  return <ProjectCaseStudy content={content} className="lv-case--compact-overview" />;
}
