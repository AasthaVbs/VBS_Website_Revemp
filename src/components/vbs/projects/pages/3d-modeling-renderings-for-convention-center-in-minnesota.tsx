"use client";
// @ts-nocheck

import { ProjectCaseStudy } from "@/components/vbs/projects/case-study";
import { overviewChipIcons, toExecutionSteps } from "@/components/vbs/projects/case-study/helpers";

const content = {
  hero: {
    tag: "Commercial",
    titleLead: "Architectural BIM & Rendering: ",
    titleAccent: "Convention Center, Minnesota",
    description:
      "LOD 450 architectural BIM modeling with high-quality interior and exterior renderings, customized views, and walkthrough video for a Minnesota convention center.",
    image: "/image/project5-slider1.jpg",
    imageAlt: "Convention center architectural BIM and rendering project",
  },
  overview: {
    image: "/image/project5-slider2.jpg",
    imageAlt: "Convention center 3D visualization",
    paragraphs: [
      "This commercial convention center project required detailed LOD 450 architectural BIM modeling paired with high-quality interior and exterior renderings. Our team developed the building model and produced customized views and a walkthrough video for design presentation.",
      "The visual deliverables supported stakeholder decision-making and marketing needs for the Minnesota convention center development.",
    ],
    chips: [
      { label: "Level of Development LOD 450", icon: overviewChipIcons.lod },
      { label: "Discipline Architectural", icon: overviewChipIcons.manpower },
      { label: "Location Minnesota, USA", icon: overviewChipIcons.location },
      { label: "Project Type Commercial", icon: overviewChipIcons.area },
    ],
  },
  tools: {
    description:
      "Architectural modeling and visualization ran in Autodesk Revit with rendering tools for presentation deliverables.",
    items: [
      { name: "Revit", icon: "/icon/revit.png" },
      { name: "Lumion", icon: "/icon/lumion.png", className: "lv-case-tools__item--lumion" },
    ],
  },
  io: {
    description:
      "From design references and architectural inputs to LOD 450 BIM models, renderings, and walkthrough video.",
    inputImages: [
      { src: "/image/project5-slider1.jpg", label: "Architectural Design References" },
    ],
    outputImages: [
      { src: "/image/project5-slider2.jpg", label: "Interior & Exterior Renderings" },
      { src: "/image/project5-slider3.jpg", label: "Customized Views and Walkthrough" },
    ],
    inputPoints: [
      "Architectural design drawings and briefs",
      "Material and finish schedules",
      "Site context and landscape references",
      "Client visualization requirements",
    ],
    outputPoints: [
      "LOD 450 BIM model",
      "High-quality interior and exterior renderings",
      "Customized views",
      "Walkthrough video",
    ],
  },
  pain: {
    description:
      "Large convention center projects need compelling visuals and detailed BIM models to support design approvals and marketing.",
    items: [
      {
        title: "Design Presentation Requirements",
        text: "Stakeholders need photorealistic visuals to evaluate design options for large public-facing buildings.",
      },
      {
        title: "LOD 450 Model Detail",
        text: "Convention centers require high-detail architectural models for accurate visualization and documentation.",
      },
      {
        title: "Multiple View Requirements",
        text: "Interior, exterior, and customized views are needed for diverse presentation and marketing uses.",
      },
      {
        title: "Walkthrough and Immersive Media",
        text: "Video walkthroughs help stakeholders experience spatial qualities before construction.",
      },
    ],
  },
  approach: {
    description:
      "LOD 450 architectural modeling followed by rendering production and walkthrough video creation.",
    items: [
      {
        title: "LOD 450 Architectural Modeling",
        text: "Built detailed architectural BIM models in Revit at LOD 450 with accurate materials and geometry.",
      },
      {
        title: "Interior and Exterior Rendering",
        text: "Produced high-quality photorealistic renderings for both interior spaces and exterior facades.",
      },
      {
        title: "Customized View Development",
        text: "Created tailored camera angles and compositions for specific presentation requirements.",
      },
      {
        title: "Walkthrough Video Production",
        text: "Developed animated walkthrough video showcasing key spaces and design features.",
      },
    ],
  },
  execution: {
    tag: "Execution Strategy",
    titleLine1: "A Structured Visualization ",
    titleLine2: "Workflow - Phase by Phase",
    description:
      "Delivery moved from design intake through BIM modeling, rendering, and final walkthrough production.",
    steps: toExecutionSteps([
      "Design Intake and Brief Alignment",
      "LOD 450 Architectural BIM Modeling",
      "Material and Lighting Setup",
      "Interior and Exterior Rendering",
      "Customized Views and Walkthrough Video",
      "Final Package Delivery",
    ]),
  },
  outcomes: {
    description:
      "LOD 450 BIM model with renderings, customized views, and walkthrough video delivered for the convention center.",
    items: [
      {
        title: "LOD 450 BIM Model",
        text: "Detailed architectural BIM model developed at LOD 450.",
      },
      {
        title: "High-Quality Interior & Exterior Renderings",
        text: "Photorealistic renderings produced for design presentation and marketing.",
      },
      {
        title: "Customized Views",
        text: "Tailored camera compositions created for specific stakeholder needs.",
      },
      {
        title: "Walkthrough Video",
        text: "Animated walkthrough video delivered for immersive design review.",
      },
    ],
  },
};

export default function ThreeModelingRenderingsMinnesotaPage() {
  return <ProjectCaseStudy content={content} />;
}
