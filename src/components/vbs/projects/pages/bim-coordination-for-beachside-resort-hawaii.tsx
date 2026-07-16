"use client";
// @ts-nocheck

import { ProjectCaseStudy } from "@/components/vbs/projects/case-study";
import { overviewChipIcons, toExecutionSteps } from "@/components/vbs/projects/case-study/helpers";

const content = {
  hero: {
    tag: "Beachside Resort",
    titleLead: "Clash-Free BIM Coordination for Multi-Building ",
    titleAccent: "Beachside Resort, Hawaii, USA",
    description:
      "High-precision LOD 350 modeling across architecture, structure, and MEP ensured seamless coordination for a fast-paced resort project.",
    image: "/image/Clash-Free-BIM-Coordination-for-Multi-Building-Beachside-Resort.png",
    imageAlt: "Clash-free BIM coordination for multi-building beachside resort in Hawaii",
  },
  overview: {
    image: "/image/mullen-Output%20(3).jpg",
    imageAlt: "Coordinated BIM output for Hawaii beachside resort",
    paragraphs: [
      "A BIM delivery partner required coordinated Revit models for a large beachside resort development in Hawaii, USA. The project featured three buildings — a main building, a garage office, and detached bedroom units. Spread across a total area of 40,000 sq. ft., the project scope required LOD 350 modeling across Architecture, Structure, and MEP disciplines.",
      "Our team of five delivered fully integrated Revit models with thorough clash coordination, on time, within three weeks.",
    ],
    chips: [
      { label: "Project Type Beachside Resort", icon: overviewChipIcons.area },
      { label: "Level of Development LOD 350", icon: overviewChipIcons.lod },
      { label: "Project Area 40,000 Sq.Ft.", icon: overviewChipIcons.area },
      { label: "Manpower Used 5 Resources", icon: overviewChipIcons.manpower },
      { label: "Location Hawaii, USA", icon: overviewChipIcons.location },
    ],
  },
  tools: {
    description:
      "Delivery ran in Autodesk Revit and Navisworks so coordinated models and clash reviews landed in platforms the project team already uses.",
    items: [
      { name: "Autodesk Revit", icon: "/icon/revit.png" },
      { name: "Navisworks", icon: "/icon/navisworks.png" },
    ],
  },
  io: {
    description:
      "From discipline-specific inputs to fully coordinated LOD 350 Revit models across three resort buildings.",
    inputImages: [
      { src: "/image/mullen-Input%20(1).jpg", label: "Project Input 1" },
      { src: "/image/mullen-Input%20(2).jpg", label: "Project Input 2" },
    ],
    outputImages: [
      { src: "/image/mullen-Output%20(3).jpg", label: "Coordinated Output 1" },
      { src: "/image/mullen-Output%20(4).jpg", label: "Coordinated Output 2" },
    ],
    inputPoints: [
      "Architectural design references",
      "Structural layout drawings",
      "MEP system schematics",
      "LOD 350 modeling standards",
      "Multi-building coordination brief",
    ],
    outputPoints: [
      "Architectural BIM model",
      "Structural BIM model",
      "MEP system model",
      "Clash-free coordinated Revit models",
      "Multi-trade BIM coordination package",
    ],
  },
  pain: {
    description:
      "Multi-building resort delivery, coastal site constraints, and a compressed three-week window shaped the engagement.",
    items: [
      {
        title: "Multi-Building Coordination Complexity",
        text: "Managing coordination across multiple buildings increased the risk of inconsistencies and delayed design integration.",
      },
      {
        title: "High LOD Requirement Across All Disciplines",
        text: "LOD 350 demands precise element geometry and spatial relationships across all trades, that required specialist modeling expertise.",
      },
      {
        title: "Tight Delivery Window of Only Three Weeks",
        text: "The project demanded fast-paced, accurate execution across five team members with zero room for rework due to coordination errors.",
      },
      {
        title: "Site-specific Coastal Constraints Affecting All Systems",
        text: "A beachside resort setting introduced unique structural and MEP routing challenges not present in standard commercial building projects.",
      },
      {
        title: "Three-building Integration",
        text: "Coordinating consistent LOD 350 modeling standards across three structurally distinct buildings simultaneously.",
      },
      {
        title: "MEP Routing in Tight Zones",
        text: "Routing mechanical, electrical, and plumbing systems without clashing with structural elements in constrained ceiling and wall zones.",
      },
      {
        title: "Cross-discipline Clash Volume",
        text: "High clash density between Architecture, Structure, and MEP systems required systematic detection and iterative resolution cycles.",
      },
      {
        title: "Compressed Timeline with Full-scope Delivery",
        text: "Delivering fully coordinated models across all disciplines within a three-week deadline required strict workflow discipline.",
      },
    ],
  },
  approach: {
    description:
      "A five-person BIM team integrated all disciplines from day one through parallel modeling, structured clash cycles, and daily coordination.",
    items: [
      {
        title: "Architectural BIM Modeling",
        text: "Developed LOD 350 architectural models for the main building, garage office, and detached bedroom units to a consistent standard.",
      },
      {
        title: "Structural BIM Modeling",
        text: "Built structural models aligned with architectural layouts and prepared for multi-trade coordination across all three buildings.",
      },
      {
        title: "MEP System Modeling",
        text: "Modeled mechanical, electrical, and plumbing systems with precise routing through constrained coastal building zones.",
      },
      {
        title: "Clash Detection and Resolution",
        text: "Ran systematic clash detection cycles in Navisworks, logging and resolving issues before final model sign-off.",
      },
      {
        title: "Multi-trade BIM Coordination",
        text: "Maintained daily coordination across five specialists so every issue was assigned, tracked, and closed before delivery.",
      },
    ],
  },
  execution: {
    tag: "Execution Strategy",
    titleLine1: "Structured Multi-Building ",
    titleLine2: "Coordination Workflow",
    description:
      "We deployed a team of 5 BIM experts and a standardized workflow to integrate all disciplines from day one. Parallel modeling, structured clash cycles, and daily coordination kept the project on track. Every issue was logged, assigned, and resolved before final model sign-off.",
    steps: toExecutionSteps([
      "Team Deployment and BIM Standards Setup",
      "Architectural BIM Modeling",
      "Structural BIM Modeling",
      "MEP System Modeling",
      "Clash Detection and Resolution",
      "Multi-trade Coordination and Final Sign-off",
    ]),
  },
  outcomes: {
    description:
      "Quantifiable outcomes delivered through precision BIM coordination across a multi-building beachside resort.",
    items: [
      {
        title: "4x Cost Saving",
        text: "Structured offshore coordination reduced delivery cost compared with rebuilding models in-house under the same deadline.",
      },
      {
        title: "99% On-time Delivery",
        text: "Fully coordinated LOD 350 models were delivered within the three-week project window.",
      },
      {
        title: "98% Project Efficiency",
        text: "Parallel modeling and daily clash cycles kept five specialists productive without rework loops.",
      },
      {
        title: "99% Quality Assurance",
        text: "Every coordination issue was logged, assigned, and resolved before final model sign-off.",
      },
      {
        title: "850 Clashes Detected & Resolved",
        text: "Systematic clash detection across Architecture, Structure, and MEP prevented conflicts from reaching construction.",
      },
    ],
  },
};

export default function BimCoordinationForBeachsideResortHawaiiPage() {
  return <ProjectCaseStudy content={content} />;
}
