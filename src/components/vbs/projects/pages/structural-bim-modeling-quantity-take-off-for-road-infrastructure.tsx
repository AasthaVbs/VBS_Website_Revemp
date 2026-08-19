"use client";
// @ts-nocheck

import { ProjectCaseStudy } from "@/components/vbs/projects/case-study";
import { overviewChipIcons, toExecutionSteps } from "@/components/vbs/projects/case-study/helpers";

const content = {
  hero: {
    tag: "Public Infrastructure",
    titleLead: "Structural BIM Modeling & 4D Simulation: ",
    titleAccent: "Road Infrastructure",
    description:
      "LOD 350 structural BIM modeling with 4D simulation and quantity take-off for a road infrastructure project.",
    image: "/image/4d-simulation-project-banner.jpg",
    imageAlt: "Road infrastructure structural BIM modeling project",
  },
  overview: {
    image: "/image/4d-simulation-project-overview.jpg",
    imageAlt: "LOD 350 road infrastructure BIM model",
    paragraphs: [
      "This road infrastructure project required LOD 350 structural BIM modeling with integrated 4D simulation and quantity take-off. Our team developed detailed structural models supporting construction sequencing and cost planning.",
      "The deliverables enabled the client to visualize construction phasing and extract accurate quantities from the coordinated 3D model.",
    ],
    chips: [
      { label: "Level of Development LOD 350", icon: overviewChipIcons.lod },
      { label: "Discipline Structural", icon: overviewChipIcons.manpower },
      { label: "Location Road Infrastructure", icon: overviewChipIcons.location },
      { label: "Project Type Public Infrastructure", icon: overviewChipIcons.area },
    ],
  },
  tools: {
    description:
      "Structural BIM modeling, 4D simulation, and quantity take-off ran in Autodesk Revit and Navisworks.",
    items: [
      { name: "Revit", icon: "/icon/revit.png" },
      { name: "Navisworks", icon: "/icon/navisworks.png" },
    ],
  },
  io: {
    description:
      "From structural design inputs to LOD 350 models with 4D simulation and quantity take-off data.",
    inputImages: [],
    outputImages: [],
    inputPoints: [
      "Structural engineering drawings",
      "Road alignment and survey data",
      "Construction schedule baseline",
      "Material specifications and standards",
    ],
    outputPoints: [
      "LOD 350 3D model",
      "4D simulation",
      "Quantity take-off",
    ],
  },
  pain: {
    description:
      "Road infrastructure projects require coordinated structural models with sequencing and quantity intelligence.",
    items: [
      {
        title: "Complex Infrastructure Geometry",
        text: "Road and bridge structures involve complex geometry requiring detailed LOD 350 modeling.",
      },
      {
        title: "Construction Sequencing Visibility",
        text: "Infrastructure projects benefit from 4D simulation to visualize phasing and identify conflicts.",
      },
      {
        title: "Quantity Accuracy for Procurement",
        text: "Large infrastructure volumes demand precise quantity take-offs from coordinated models.",
      },
      {
        title: "Multi-Phase Construction Planning",
        text: "Road projects span extended timelines requiring schedule-linked BIM deliverables.",
      },
    ],
  },
  approach: {
    description:
      "LOD 350 structural modeling with 4D simulation integration and quantity take-off extraction.",
    items: [
      {
        title: "LOD 350 Structural Modeling",
        text: "Developed detailed structural BIM models in Revit at LOD 350.",
      },
      {
        title: "4D Simulation Development",
        text: "Linked structural models to construction schedules for 4D phasing simulation in Navisworks.",
      },
      {
        title: "Quantity Take-Off",
        text: "Extracted accurate quantities from the coordinated model for cost and procurement planning.",
      },
      {
        title: "Coordinated Delivery",
        text: "Validated models, simulations, and quantity data against project requirements before delivery.",
      },
    ],
  },
  execution: {
    tag: "Execution Strategy",
    titleLine1: "A Structured Infrastructure ",
    titleLine2: "Workflow - Phase by Phase",
    description:
      "Delivery progressed from design intake through structural modeling, 4D simulation, and quantity extraction.",
    steps: toExecutionSteps([
      "Design Intake and Scope Alignment",
      "LOD 350 Structural BIM Modeling",
      "Construction Schedule Integration",
      "4D Simulation Development",
      "Quantity Take-Off Extraction",
      "Final Review and Delivery",
    ]),
  },
  outcomes: {
    description:
      "LOD 350 structural model with 4D simulation and quantity take-off delivered for road infrastructure.",
    items: [
      {
        title: "LOD 350 3D Model",
        text: "Detailed structural BIM model developed at LOD 350.",
      },
      {
        title: "4D Simulation",
        text: "Construction phasing simulation linking model elements to schedule activities.",
      },
      {
        title: "Quantity Take-Off",
        text: "Accurate quantity data extracted from the coordinated model for planning.",
      },
    ],
  },
};

export default function PortfolioStructuralRoadInfrastructurePage() {
  return <ProjectCaseStudy content={content} className="lv-case--compact-overview" />;
}
