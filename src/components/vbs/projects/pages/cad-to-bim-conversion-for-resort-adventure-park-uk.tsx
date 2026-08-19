"use client";
// @ts-nocheck

import { ProjectCaseStudy } from "@/components/vbs/projects/case-study";
import { overviewChipIcons, toExecutionSteps } from "@/components/vbs/projects/case-study/helpers";

const content = {
  hero: {
    tag: "Commercial Building",
    titleLead: "CAD to BIM with LOD 400: ",
    titleAccent: "Resort Adventure Park, UK",
    description:
      "CAD to BIM conversion producing a LOD 400 BIM model with parametric data integration for a resort adventure park project in the UK.",
    image: "/image/cad-to-bom-lod-model-banner.jpg",
    imageAlt: "UK resort adventure park CAD to BIM project",
  },
  overview: {
    image: "/image/cad-to-bom-lod-model-overview.jpg",
    imageAlt: "LOD 400 resort adventure park BIM model",
    paragraphs: [
      "This resort adventure park project in the UK required converting CAD documentation into a LOD 400 BIM model with integrated parametric data. Our team developed the model with accurate element representation and embedded parametric properties.",
      "The deliverable supports design coordination, facility planning, and data-driven workflows for the commercial resort development.",
    ],
    chips: [
      { label: "Level of Development LOD 400", icon: overviewChipIcons.lod },
      { label: "Discipline Architectural", icon: overviewChipIcons.manpower },
      { label: "Location UK", icon: overviewChipIcons.location },
      { label: "Project Type Commercial Building", icon: overviewChipIcons.area },
    ],
  },
  tools: {
    description:
      "CAD to BIM conversion with parametric data integration ran in Autodesk Revit.",
    items: [
      { name: "Revit", icon: "/icon/revit.png" },
    ],
  },
  io: {
    description:
      "From 2D CAD design drawings to a LOD 400 BIM model with parametric data integration.",
    inputImages: [],
    outputImages: [],
    inputPoints: [
      "2D CAD architectural design drawings",
      "Resort layout and facility schedules",
      "Client BIM standards and data requirements",
      "Material and equipment specifications",
    ],
    outputPoints: [
      "LOD 400 BIM model",
      "Parametric data integration",
    ],
  },
  pain: {
    description:
      "Resort and adventure park projects require detailed BIM models with rich parametric data for facility management.",
    items: [
      {
        title: "Complex Resort Layouts",
        text: "Adventure park facilities involve diverse building types requiring detailed LOD 400 modeling.",
      },
      {
        title: "Parametric Data Requirements",
        text: "Models must embed parametric properties for equipment, materials, and facility assets.",
      },
      {
        title: "CAD to BIM Fidelity",
        text: "Design drawings must be converted accurately to preserve design intent at LOD 400.",
      },
      {
        title: "Multi-Facility Coordination",
        text: "Resort developments span multiple structures that must be modeled consistently.",
      },
    ],
  },
  approach: {
    description:
      "CAD to BIM conversion with LOD 400 modeling and parametric data integration.",
    items: [
      {
        title: "CAD to BIM Conversion",
        text: "Converted 2D CAD documentation into structured Revit models.",
      },
      {
        title: "LOD 400 Model Development",
        text: "Built detailed models at LOD 400 with accurate geometry and element detail.",
      },
      {
        title: "Parametric Data Integration",
        text: "Embedded parametric properties and data into model elements for facility workflows.",
      },
      {
        title: "Quality Assurance",
        text: "Validated model accuracy and data completeness against project requirements.",
      },
    ],
  },
  execution: {
    tag: "Execution Strategy",
    titleLine1: "A Structured CAD to BIM ",
    titleLine2: "Workflow - Phase by Phase",
    description:
      "Delivery moved from CAD intake through LOD 400 modeling, parametric data integration, and validation.",
    steps: toExecutionSteps([
      "CAD Intake and Scope Review",
      "CAD to BIM Conversion",
      "LOD 400 Model Development",
      "Parametric Data Integration",
      "Quality Validation and Delivery",
    ]),
  },
  outcomes: {
    description:
      "LOD 400 BIM model with parametric data integration delivered for the UK resort adventure park.",
    items: [
      {
        title: "LOD 400 BIM Model",
        text: "Detailed BIM model developed at LOD 400 from CAD inputs.",
      },
      {
        title: "Parametric Data Integration",
        text: "Model elements enriched with parametric properties for data-driven workflows.",
      },
    ],
  },
};

export default function PortfolioCadToBimResortUkPage() {
  return <ProjectCaseStudy content={content} className="lv-case--compact-overview" />;
}
