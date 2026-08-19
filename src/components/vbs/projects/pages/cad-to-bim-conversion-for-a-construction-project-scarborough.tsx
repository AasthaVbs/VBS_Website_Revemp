"use client";
// @ts-nocheck

import { ProjectCaseStudy } from "@/components/vbs/projects/case-study";
import { overviewChipIcons, toExecutionSteps } from "@/components/vbs/projects/case-study/helpers";

const content = {
  hero: {
    tag: "Commercial Building",
    titleLead: "CAD to BIM with LOD 300: ",
    titleAccent: "Construction Project, Scarborough",
    description:
      "CAD to BIM conversion producing a coordinated LOD 300 3D model with construction documents and quantity extraction for a commercial construction project in Scarborough.",
    image: "/image/cad-to-bom-lod-model-banner.jpg",
    imageAlt: "Scarborough CAD to BIM conversion project",
  },
  overview: {
    image: "/image/cad-to-bom-lod-model-overview.jpg",
    imageAlt: "LOD 300 coordinated BIM model Scarborough",
    paragraphs: [
      "This commercial construction project in Scarborough required converting CAD documentation into a coordinated LOD 300 3D BIM model. Our team developed the model and produced construction documents with quantity extraction and material association.",
      "The deliverables provided the client with accurate 3D documentation and quantity data to support construction planning and procurement.",
    ],
    chips: [
      { label: "Level of Development LOD 300", icon: overviewChipIcons.lod },
      { label: "Discipline Multi-Discipline", icon: overviewChipIcons.manpower },
      { label: "Location Scarborough, Canada", icon: overviewChipIcons.location },
      { label: "Project Type Commercial Building", icon: overviewChipIcons.area },
    ],
  },
  tools: {
    description:
      "CAD to BIM conversion and documentation ran in Autodesk Revit for coordinated model and drawing production.",
    items: [
      { name: "Revit", icon: "/icon/revit.png" },
    ],
  },
  io: {
    description:
      "From 2D CAD drawings to a coordinated LOD 300 model with construction documents and quantity data.",
    inputImages: [],
    outputImages: [],
    inputPoints: [
      "2D CAD architectural and discipline drawings",
      "Construction specifications",
      "Client BIM standards and templates",
      "Material schedules",
    ],
    outputPoints: [
      "Coordinated LOD 300 3D model",
      "Construction documents",
      "Quantity extraction and material association",
    ],
  },
  pain: {
    description:
      "Commercial construction projects converting from CAD need coordinated BIM models with reliable quantity data.",
    items: [
      {
        title: "CAD Documentation Limitations",
        text: "2D CAD sets lack the coordination and quantity intelligence that BIM models provide.",
      },
      {
        title: "LOD 300 Coordination Requirements",
        text: "Construction-phase models must reach LOD 300 with coordinated discipline elements.",
      },
      {
        title: "Quantity and Material Accuracy",
        text: "Procurement depends on accurate quantity extraction with correct material associations.",
      },
      {
        title: "Construction Document Alignment",
        text: "Drawing sets must stay synchronized with the coordinated 3D model throughout delivery.",
      },
    ],
  },
  approach: {
    description:
      "CAD to BIM conversion with LOD 300 modeling, construction documents, and quantity extraction.",
    items: [
      {
        title: "CAD to BIM Conversion",
        text: "Converted 2D CAD documentation into structured Revit models following client standards.",
      },
      {
        title: "LOD 300 Coordinated Modeling",
        text: "Developed coordinated 3D models at LOD 300 across relevant disciplines.",
      },
      {
        title: "Construction Document Production",
        text: "Produced construction drawing sets extracted from the coordinated BIM model.",
      },
      {
        title: "Quantity Extraction",
        text: "Extracted quantities with material association from the LOD 300 model for procurement support.",
      },
    ],
  },
  execution: {
    tag: "Execution Strategy",
    titleLine1: "A Structured CAD to BIM ",
    titleLine2: "Workflow - Phase by Phase",
    description:
      "Delivery moved from CAD intake through BIM conversion, LOD 300 modeling, and document production.",
    steps: toExecutionSteps([
      "CAD Intake and Standards Review",
      "CAD to BIM Conversion",
      "LOD 300 Coordinated Modeling",
      "Construction Document Production",
      "Quantity Extraction and Material Association",
      "Final Review and Delivery",
    ]),
  },
  outcomes: {
    description:
      "Coordinated LOD 300 model with construction documents and quantity data delivered for Scarborough.",
    items: [
      {
        title: "Coordinated LOD 300 3D Model",
        text: "Multi-discipline BIM model developed at LOD 300 from CAD inputs.",
      },
      {
        title: "Construction Documents",
        text: "Drawing sets produced from the coordinated BIM model.",
      },
      {
        title: "Quantity Extraction and Material Association",
        text: "Accurate quantities with material data extracted for procurement planning.",
      },
    ],
  },
};

export default function PortfolioCadToBimScarboroughPage() {
  return <ProjectCaseStudy content={content} className="lv-case--compact-overview" />;
}
