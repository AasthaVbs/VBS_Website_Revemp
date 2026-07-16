"use client";
// @ts-nocheck

import { ProjectCaseStudy } from "@/components/vbs/projects/case-study";
import { overviewChipIcons, toExecutionSteps } from "@/components/vbs/projects/case-study/helpers";

const content = {
  hero: {
    tag: "Commercial Building",
    titleLead: "CAD to BIM Modeling with MEP Coordination: ",
    titleAccent: "Commercial Project, New York",
    description:
      "CAD to BIM conversion producing a LOD 400 coordinated model with shop drawings, hanger drawings, and sleeve drawings for a commercial project in New York.",
    image: "/image/project3-slider1.jpg",
    imageAlt: "New York commercial CAD to BIM conversion project",
  },
  overview: {
    image: "/image/project3-slider2.jpg",
    imageAlt: "LOD 400 coordinated commercial BIM model",
    paragraphs: [
      "This commercial project in New York required converting CAD documentation into a LOD 400 coordinated BIM model with MEP-focused deliverables. Our team developed the coordinated model and produced shop, hanger, and sleeve drawings for construction.",
      "The deliverables supported MEP installation planning with accurate, coordinated drawing sets derived from the BIM model.",
    ],
    chips: [
      { label: "Level of Development LOD 400", icon: overviewChipIcons.lod },
      { label: "Discipline MEP", icon: overviewChipIcons.manpower },
      { label: "Location New York, USA", icon: overviewChipIcons.location },
      { label: "Project Type Commercial Building", icon: overviewChipIcons.area },
    ],
  },
  tools: {
    description:
      "CAD to BIM conversion and MEP coordination ran in Autodesk Revit with Navisworks for clash detection.",
    items: [
      { name: "Revit", icon: "/icon/revit.png" },
      { name: "Navisworks", icon: "/icon/navisworks.png" },
    ],
  },
  io: {
    description:
      "From 2D CAD MEP drawings to a LOD 400 coordinated model with shop, hanger, and sleeve drawing sets.",
    inputImages: [
      { src: "/image/project3-slider1.jpg", label: "2D CAD MEP Drawings" },
    ],
    outputImages: [
      { src: "/image/project3-slider2.jpg", label: "LOD 400 Coordinated Model and Drawings" },
    ],
    inputPoints: [
      "2D CAD MEP design drawings",
      "Equipment schedules and specifications",
      "Structural and architectural reference models",
      "Client drafting standards",
    ],
    outputPoints: [
      "LOD 400 coordinated model",
      "Shop drawings",
      "Hanger drawings",
      "Sleeve drawings",
    ],
  },
  pain: {
    description:
      "Commercial MEP projects in New York require coordinated BIM models and fabrication-ready drawing sets.",
    items: [
      {
        title: "CAD to BIM Conversion Accuracy",
        text: "Legacy CAD MEP drawings must be converted accurately to support LOD 400 coordinated modeling.",
      },
      {
        title: "MEP Installation Coordination",
        text: "Hanger and sleeve placements require precise coordination with structural elements.",
      },
      {
        title: "Shop Drawing Production",
        text: "Fabrication-ready shop drawings must reflect the coordinated BIM model accurately.",
      },
      {
        title: "Multi-Trade Alignment",
        text: "MEP systems must align with architectural and structural constraints in dense commercial buildings.",
      },
    ],
  },
  approach: {
    description:
      "CAD to BIM conversion followed by LOD 400 coordination and MEP drawing production.",
    items: [
      {
        title: "CAD to BIM Conversion",
        text: "Converted 2D CAD MEP documentation into structured Revit models.",
      },
      {
        title: "LOD 400 Coordinated Modeling",
        text: "Developed coordinated MEP models at LOD 400 aligned with reference disciplines.",
      },
      {
        title: "Shop and Fabrication Drawings",
        text: "Produced shop drawings from the coordinated model for fabrication and installation.",
      },
      {
        title: "Hanger and Sleeve Drawings",
        text: "Generated hanger and sleeve drawing sets with precise placement coordinates.",
      },
    ],
  },
  execution: {
    tag: "Execution Strategy",
    titleLine1: "A Structured CAD to BIM ",
    titleLine2: "Workflow - Phase by Phase",
    description:
      "Delivery moved from CAD intake through BIM conversion, coordination, and MEP drawing production.",
    steps: toExecutionSteps([
      "CAD Intake and Standards Review",
      "CAD to BIM Conversion",
      "LOD 400 Coordinated Modeling",
      "MEP Coordination and Clash Detection",
      "Shop, Hanger, and Sleeve Drawing Production",
      "Final Review and Delivery",
    ]),
  },
  outcomes: {
    description:
      "LOD 400 coordinated model with shop, hanger, and sleeve drawings delivered for the New York commercial project.",
    items: [
      {
        title: "LOD 400 Coordinated Model",
        text: "MEP-coordinated BIM model developed at LOD 400 from CAD inputs.",
      },
      {
        title: "Shop Drawings",
        text: "Fabrication-ready shop drawing sets extracted from the coordinated model.",
      },
      {
        title: "Hanger Drawings",
        text: "Precise hanger placement drawings for MEP installation.",
      },
      {
        title: "Sleeve Drawings",
        text: "Coordinated sleeve drawings aligned with structural penetrations.",
      },
    ],
  },
};

export default function CadToBimCommercialNewYorkPage() {
  return <ProjectCaseStudy content={content} />;
}
