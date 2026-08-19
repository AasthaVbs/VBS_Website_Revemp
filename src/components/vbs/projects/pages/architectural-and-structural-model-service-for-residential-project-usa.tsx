"use client";
// @ts-nocheck

import { ProjectCaseStudy } from "@/components/vbs/projects/case-study";
import { overviewChipIcons, toExecutionSteps } from "@/components/vbs/projects/case-study/helpers";

const content = {
  hero: {
    tag: "Residential Building",
    titleLead: "Architectural BIM with Interior & Exterior Rendering: ",
    titleAccent: "Residential Project, USA",
    description:
      "LOD 300 architectural and structural modeling with clash detection and interdisciplinary coordination for a residential project in the USA.",
    image: "/image/revit-model-front-view-banner.jpg",
    imageAlt: "Residential architectural and structural BIM project",
  },
  overview: {
    image: "/image/revit-model-front-view-overview.jpg",
    imageAlt: "Residential LOD 300 architectural and structural model",
    paragraphs: [
      "This residential project in the USA required LOD 300 architectural and structural BIM models with coordinated clash detection across disciplines. Our team developed accurate models aligned with the client's design standards.",
      "Interdisciplinary coordination ensured architectural and structural elements aligned before construction, reducing potential field conflicts on the residential build.",
    ],
    chips: [
      { label: "Level of Development LOD 300", icon: overviewChipIcons.lod },
      { label: "Discipline Architectural & Structural", icon: overviewChipIcons.manpower },
      { label: "Location USA", icon: overviewChipIcons.location },
      { label: "Project Type Residential Building", icon: overviewChipIcons.area },
    ],
  },
  tools: {
    description:
      "Architectural and structural modeling with coordination ran in Autodesk Revit and Navisworks.",
    items: [
      { name: "Revit", icon: "/icon/revit.png" },
      { name: "Navisworks", icon: "/icon/navisworks.png" },
    ],
  },
  io: {
    description:
      "From design drawings to coordinated LOD 300 architectural and structural BIM models.",
    inputImages: [],
    outputImages: [],
    inputPoints: [
      "Architectural design drawings",
      "Structural engineering drawings",
      "Client BIM standards and templates",
      "Design specifications",
    ],
    outputPoints: [
      "LOD 300 architectural and structural model",
      "Clash detection and interdisciplinary coordination",
    ],
  },
  pain: {
    description:
      "Residential projects require tight coordination between architectural and structural systems to avoid construction delays.",
    items: [
      {
        title: "Architectural-Structural Alignment",
        text: "Wall, floor, and opening placements must align precisely between architectural and structural models.",
      },
      {
        title: "LOD 300 Detail Consistency",
        text: "Both disciplines must reach LOD 300 with consistent element representation for effective coordination.",
      },
      {
        title: "Interdisciplinary Clash Risks",
        text: "Undetected conflicts between architecture and structure can cause costly rework on site.",
      },
      {
        title: "Residential Design Complexity",
        text: "Multi-unit residential layouts add coordination complexity across repeated floor plates.",
      },
    ],
  },
  approach: {
    description:
      "Parallel architectural and structural modeling with federated clash detection and coordination.",
    items: [
      {
        title: "LOD 300 Architectural Modeling",
        text: "Developed architectural BIM models in Revit at LOD 300 with accurate element detail.",
      },
      {
        title: "LOD 300 Structural Modeling",
        text: "Built structural models aligned with engineering drawings and design intent.",
      },
      {
        title: "Federated Clash Detection",
        text: "Linked models in Navisworks for comprehensive interdisciplinary clash testing.",
      },
      {
        title: "Coordination and Resolution",
        text: "Documented and resolved clashes through structured coordination with the project team.",
      },
    ],
  },
  execution: {
    tag: "Execution Strategy",
    titleLine1: "A Structured Residential ",
    titleLine2: "Workflow - Phase by Phase",
    description:
      "Delivery progressed from design intake through discipline modeling, clash detection, and final coordination.",
    steps: toExecutionSteps([
      "Design Intake and Standards Alignment",
      "LOD 300 Architectural Modeling",
      "LOD 300 Structural Modeling",
      "Clash Detection and Coordination",
      "Final Model Review and Delivery",
    ]),
  },
  outcomes: {
    description:
      "Coordinated LOD 300 architectural and structural models delivered for the USA residential project.",
    items: [
      {
        title: "LOD 300 Architectural and Structural Model",
        text: "Discipline models developed at LOD 300 with accurate element representation.",
      },
      {
        title: "Clash Detection and Interdisciplinary Coordination",
        text: "Conflicts identified and resolved across architectural and structural systems.",
      },
    ],
  },
};

export default function ArchitecturalAndStructuralModelPage() {
  return <ProjectCaseStudy content={content} className="lv-case--compact-overview" />;
}
