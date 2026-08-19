"use client";
// @ts-nocheck

import { ProjectCaseStudy } from "@/components/vbs/projects/case-study";
import { overviewChipIcons, toExecutionSteps } from "@/components/vbs/projects/case-study/helpers";

const content = {
  hero: {
    tag: "Historical Building",
    titleLead: "Architecture Drafting & SD, DD, CD Documentation: ",
    titleAccent: "Heritage Building Redevelopment",
    description:
      "LOD 300 architectural and structural modeling with design revisions, quantity estimation, 3D rendering, and schematic through construction documentation for a heritage building redevelopment.",
    image: "/image/architectural-structureal-banner.jpg",
    imageAlt: "Heritage building redevelopment documentation project",
  },
  overview: {
    image: "/image/architectural-structure-model-overview.jpg",
    imageAlt: "Heritage building LOD 300 models and documentation",
    paragraphs: [
      "This heritage building redevelopment required LOD 300 architectural and structural models with design revisions, quantity estimation, and 3D rendering across schematic design through construction documentation stages. Our team supported the full documentation lifecycle.",
      "Heritage projects demand careful balance between preserving existing conditions and integrating new design elements, addressed through structured modeling and phased documentation delivery.",
    ],
    chips: [
      { label: "Level of Development LOD 300", icon: overviewChipIcons.lod },
      { label: "Discipline Architectural & Structural", icon: overviewChipIcons.manpower },
      { label: "Location Heritage Building", icon: overviewChipIcons.location },
      { label: "Project Type Historical Building", icon: overviewChipIcons.area },
    ],
  },
  tools: {
    description:
      "Architectural and structural modeling, documentation, and visualization ran in Autodesk Revit and Navisworks.",
    items: [
      { name: "Revit", icon: "/icon/revit.png" },
      { name: "Navisworks", icon: "/icon/navisworks.png" },
    ],
  },
  io: {
    description:
      "From heritage survey data and design inputs to LOD 300 models, documentation sets, and 3D renderings.",
    inputImages: [],
    outputImages: [],
    inputPoints: [
      "Existing heritage building surveys and as-built data",
      "Schematic and design development drawings",
      "Heritage preservation guidelines and constraints",
      "Client documentation standards",
    ],
    outputPoints: [
      "LOD 300 architectural and structural models",
      "Design revisions",
      "Quantity estimation",
      "3D rendering",
      "SD to CD stage documentation",
    ],
  },
  pain: {
    description:
      "Heritage building redevelopments require careful documentation across design stages while respecting existing conditions.",
    items: [
      {
        title: "Heritage Condition Documentation",
        text: "Existing heritage elements must be accurately captured before integrating new design work.",
      },
      {
        title: "Multi-Stage Documentation",
        text: "Projects require consistent documentation from schematic design through construction documents.",
      },
      {
        title: "Design Revision Management",
        text: "Heritage projects involve frequent design revisions that must be tracked across all deliverables.",
      },
      {
        title: "Preservation vs. New Design Balance",
        text: "Models must reconcile existing heritage fabric with new architectural and structural elements.",
      },
    ],
  },
  approach: {
    description:
      "Phased documentation from SD through CD with LOD 300 modeling, revisions, and visualization.",
    items: [
      {
        title: "LOD 300 Architectural and Structural Modeling",
        text: "Developed discipline models at LOD 300 capturing both existing and new design elements.",
      },
      {
        title: "Design Revision Management",
        text: "Tracked and incorporated design revisions across models and documentation sets.",
      },
      {
        title: "Quantity Estimation",
        text: "Extracted quantities from coordinated models for cost planning and procurement.",
      },
      {
        title: "SD to CD Documentation",
        text: "Produced phased documentation sets from schematic design through construction documents.",
      },
    ],
  },
  execution: {
    tag: "Execution Strategy",
    titleLine1: "A Structured Heritage ",
    titleLine2: "Workflow - Phase by Phase",
    description:
      "Delivery moved from heritage survey through SD, DD, and CD documentation with modeling and visualization.",
    steps: toExecutionSteps([
      "Heritage Survey and Existing Conditions Modeling",
      "Schematic Design Documentation",
      "Design Development and Revisions",
      "LOD 300 Model Refinement",
      "Quantity Estimation and 3D Rendering",
      "Construction Document Production and Delivery",
    ]),
  },
  outcomes: {
    description:
      "LOD 300 models, design revisions, quantities, renderings, and SD-to-CD documentation delivered.",
    items: [
      {
        title: "LOD 300 Architectural and Structural Models",
        text: "Discipline models developed at LOD 300 for the heritage redevelopment.",
      },
      {
        title: "Design Revisions",
        text: "Design changes tracked and incorporated across all deliverables.",
      },
      {
        title: "Quantity Estimation",
        text: "Accurate quantities extracted from coordinated models.",
      },
      {
        title: "3D Rendering",
        text: "Visual renderings produced for design presentation and stakeholder review.",
      },
      {
        title: "SD to CD Stage Documentation",
        text: "Complete documentation sets delivered from schematic design through construction documents.",
      },
    ],
  },
};

export default function SchematicDesignHeritageBuildingPage() {
  return <ProjectCaseStudy content={content} className="lv-case--compact-overview" />;
}
