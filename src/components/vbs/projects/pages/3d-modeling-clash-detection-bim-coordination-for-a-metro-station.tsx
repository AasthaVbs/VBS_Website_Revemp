"use client";
// @ts-nocheck

import { ProjectCaseStudy } from "@/components/vbs/projects/case-study";
import { overviewChipIcons, toExecutionSteps } from "@/components/vbs/projects/case-study/helpers";

const content = {
  hero: {
    tag: "Public Infrastructure",
    titleLead: "Structural and Facade 3D Modeling with Clash Detection: ",
    titleAccent: "Metro Station",
    description:
      "LOD 400 structural and architectural façade modeling with clash detection, quantity estimation, and constructability reviews for a metro station infrastructure project.",
    image: "/image/architecture-structure-3d-models-banner.jpg",
    imageAlt: "Metro station structural and facade BIM modeling",
  },
  overview: {
    image: "/image/architecture-structure-3d-models-overview.jpg",
    imageAlt: "Coordinated metro station BIM model",
    paragraphs: [
      "This public infrastructure metro station project required LOD 400 structural and architectural façade models with integrated clash detection and coordination. Our team developed detailed models supporting quantity estimation and constructability reviews.",
      "The coordinated deliverables enabled the client to assess buildability and extract quantities from accurate 3D representations of the station structure and façade systems.",
    ],
    chips: [
      { label: "Level of Development LOD 400", icon: overviewChipIcons.lod },
      { label: "Discipline Structural & Facade", icon: overviewChipIcons.manpower },
      { label: "Location Metro Station", icon: overviewChipIcons.location },
      { label: "Project Type Public Infrastructure", icon: overviewChipIcons.area },
    ],
  },
  tools: {
    description:
      "Structural and façade modeling with clash detection ran in Autodesk Revit and Navisworks.",
    items: [
      { name: "Revit", icon: "/icon/revit.png" },
      { name: "Navisworks", icon: "/icon/navisworks.png" },
    ],
  },
  io: {
    description:
      "From design drawings and reference data to LOD 400 structural and façade models with coordinated clash-free outputs.",
    inputImages: [],
    outputImages: [],
    inputPoints: [
      "Structural design drawings and calculations",
      "Architectural façade design documentation",
      "Client BIM standards and LOD requirements",
      "Reference surveys and site data",
    ],
    outputPoints: [
      "LOD 400 structural and architectural façade model",
      "Clash detection and coordination",
      "Quantity estimation",
      "Constructability reviews",
    ],
  },
  pain: {
    description:
      "Metro station infrastructure projects involve complex structural and façade systems that demand precise coordination.",
    items: [
      {
        title: "Complex Structural Geometry",
        text: "Metro station structures involve intricate framing and support systems requiring detailed LOD 400 modeling.",
      },
      {
        title: "Façade-Structure Coordination",
        text: "Architectural façade systems must align precisely with structural elements to avoid field conflicts.",
      },
      {
        title: "Constructability Constraints",
        text: "Infrastructure projects require early constructability reviews to identify buildability issues.",
      },
      {
        title: "Accurate Quantity Requirements",
        text: "Quantity estimation depends on precise 3D models with correctly associated material data.",
      },
    ],
  },
  approach: {
    description:
      "LOD 400 modeling with integrated clash detection, quantity extraction, and constructability review.",
    items: [
      {
        title: "LOD 400 Structural Modeling",
        text: "Developed detailed structural models in Revit aligned with design intent and LOD 400 requirements.",
      },
      {
        title: "Architectural Façade Modeling",
        text: "Built façade models with accurate panel, glazing, and attachment detail for coordination.",
      },
      {
        title: "Clash Detection and Coordination",
        text: "Ran federated clash tests between structural and façade systems using Navisworks.",
      },
      {
        title: "Quantity and Constructability Review",
        text: "Extracted quantities from coordinated models and performed constructability assessments.",
      },
    ],
  },
  execution: {
    tag: "Execution Strategy",
    titleLine1: "A Structured Infrastructure ",
    titleLine2: "Workflow - Phase by Phase",
    description:
      "Delivery progressed from design intake through LOD 400 modeling, clash detection, and constructability review.",
    steps: toExecutionSteps([
      "Design Intake and Scope Alignment",
      "LOD 400 Structural Modeling",
      "Architectural Façade Modeling",
      "Clash Detection and Coordination",
      "Quantity Estimation and Constructability Review",
      "Final Model Delivery",
    ]),
  },
  outcomes: {
    description:
      "LOD 400 structural and façade models with clash detection, quantities, and constructability reviews delivered.",
    items: [
      {
        title: "LOD 400 Structural & Façade Model",
        text: "Detailed structural and architectural façade models developed at LOD 400.",
      },
      {
        title: "Clash Detection & Coordination",
        text: "Interdisciplinary clashes identified and resolved across structure and façade systems.",
      },
      {
        title: "Quantity Estimation",
        text: "Accurate quantity take-offs extracted from coordinated 3D models.",
      },
      {
        title: "Constructability Reviews",
        text: "Buildability assessments performed to identify and resolve construction issues early.",
      },
    ],
  },
};

export default function ThreeDModelingMetroStationPage() {
  return <ProjectCaseStudy content={content} className="lv-case--compact-overview" />;
}
