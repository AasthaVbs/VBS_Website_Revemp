"use client";
// @ts-nocheck

import { ProjectCaseStudy } from "@/components/vbs/projects/case-study";
import { overviewChipIcons, toExecutionSteps } from "@/components/vbs/projects/case-study/helpers";

const content = {
  hero: {
    tag: "Commercial Building",
    titleLead: "LOD 400 ACS & MEPF Modeling with Clash Detection & Coordination: ",
    titleAccent: "Commercial Tower",
    description:
      "LOD 400 architectural, structural, and MEPF modeling with clash detection, 4D simulation, construction scheduling, and comprehensive construction documents for a commercial tower.",
    image: "/image/architectural-banner.jpg",
    imageAlt: "Commercial tower ACS and MEPF BIM modeling",
  },
  overview: {
    image: "/image/architectural-overview.jpg",
    imageAlt: "Coordinated commercial tower BIM model",
    paragraphs: [
      "This commercial tower project required LOD 400 models across architectural, structural, and MEPF disciplines with integrated clash detection and coordination. Our team delivered coordinated models, clash reports, construction scheduling, and 4D simulation outputs.",
      "Comprehensive construction documents were produced alongside the coordinated BIM deliverables to support the tower's construction phase.",
    ],
    chips: [
      { label: "Level of Development LOD 400", icon: overviewChipIcons.lod },
      { label: "Discipline ACS & MEPF", icon: overviewChipIcons.manpower },
      { label: "Location Commercial Tower", icon: overviewChipIcons.location },
      { label: "Project Type Commercial Building", icon: overviewChipIcons.area },
    ],
  },
  tools: {
    description:
      "Multi-discipline modeling, clash detection, and 4D simulation ran in Autodesk Revit and Navisworks.",
    items: [
      { name: "Revit", icon: "/icon/revit.png" },
      { name: "Navisworks", icon: "/icon/navisworks.png" },
    ],
  },
  io: {
    description:
      "From design inputs to LOD 400 coordinated models, clash reports, 4D simulations, and construction documents.",
    inputImages: [],
    outputImages: [],
    inputPoints: [
      "Architectural, structural, and MEPF design drawings",
      "Client BIM execution plan and standards",
      "Consultant reference models",
      "Construction schedule baseline data",
    ],
    outputPoints: [
      "LOD 400 architectural, structural, and MEPF models",
      "Clash detection and coordination reports",
      "Construction scheduling and project tracking reports",
      "4D simulation videos and presentations",
      "Comprehensive construction documents",
    ],
  },
  pain: {
    description:
      "High-rise commercial towers demand precise multi-discipline coordination and construction-ready documentation.",
    items: [
      {
        title: "Multi-Discipline LOD 400 Complexity",
        text: "Architectural, structural, and MEPF systems in a tower require detailed LOD 400 models across all trades.",
      },
      {
        title: "Vertical Shaft and Core Coordination",
        text: "Elevator, stair, and MEP shaft routing in tall buildings creates dense clash zones requiring systematic detection.",
      },
      {
        title: "4D Schedule Integration",
        text: "Construction sequencing for towers must be linked to BIM models for effective 4D simulation.",
      },
      {
        title: "Construction Document Completeness",
        text: "Tower projects require comprehensive, coordinated construction documents aligned with BIM models.",
      },
    ],
  },
  approach: {
    description:
      "Integrated ACS and MEPF modeling with clash detection, 4D simulation, and construction document production.",
    items: [
      {
        title: "LOD 400 Multi-Discipline Modeling",
        text: "Developed architectural, structural, and MEPF models at LOD 400 in Revit.",
      },
      {
        title: "Clash Detection and Reporting",
        text: "Ran federated clash tests in Navisworks and produced coordination reports for resolution.",
      },
      {
        title: "4D Simulation and Scheduling",
        text: "Linked BIM models to construction schedules for 4D simulation videos and tracking reports.",
      },
      {
        title: "Construction Document Production",
        text: "Produced comprehensive construction documents aligned with coordinated BIM deliverables.",
      },
    ],
  },
  execution: {
    tag: "Execution Strategy",
    titleLine1: "A Structured Tower ",
    titleLine2: "Workflow - Phase by Phase",
    description:
      "Delivery moved from scope alignment through multi-discipline modeling, clash detection, 4D simulation, and document production.",
    steps: toExecutionSteps([
      "Scope Briefing and Tool Alignment",
      "LOD 400 ACS & MEPF Modeling",
      "Clash Detection and Coordination",
      "4D Simulation and Scheduling",
      "Construction Document Production",
      "Final Review and Delivery",
    ]),
  },
  outcomes: {
    description:
      "LOD 400 coordinated models, clash reports, 4D simulations, and construction documents delivered for the commercial tower.",
    items: [
      {
        title: "LOD 400 ACS & MEPF Models",
        text: "Architectural, structural, and MEPF models developed at LOD 400.",
      },
      {
        title: "Clash Detection and Coordination Reports",
        text: "Interdisciplinary clashes identified and documented for resolution.",
      },
      {
        title: "Construction Scheduling and Project Tracking",
        text: "Schedule-linked reports supporting construction planning and tracking.",
      },
      {
        title: "4D Simulation Videos and Presentations",
        text: "Visual simulations linking BIM models to construction sequencing.",
      },
      {
        title: "Comprehensive Construction Documents",
        text: "Complete construction document sets aligned with coordinated BIM models.",
      },
    ],
  },
};

export default function PortfolioArchitecturalCommercialTowerPage() {
  return <ProjectCaseStudy content={content} className="lv-case--wide-hero" />;
}
