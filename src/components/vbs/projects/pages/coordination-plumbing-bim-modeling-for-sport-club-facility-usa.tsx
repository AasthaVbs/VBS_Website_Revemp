"use client";
// @ts-nocheck

import { ProjectCaseStudy } from "@/components/vbs/projects/case-study";
import { overviewChipIcons, toExecutionSteps } from "@/components/vbs/projects/case-study/helpers";

const content = {
  hero: {
    tag: "Sports Club Building",
    titleLead: "Coordinated Plumbing BIM Modeling for Sports Club Facility: ",
    titleAccent: "LeClaire, IA",
    description:
      "Delivered LOD 350 clash-free BIM coordinated plumbing models for a 38,000 sq. ft. modern community wellness hub.",
    image: "/image/Coordinated-Plumbing-BIM-Modeling-for-Sports-Club-Facility.png",
    imageAlt: "Coordinated plumbing BIM model for sports club facility in LeClaire, Iowa",
  },
  overview: {
    image: "/image/YMCA_Output%20(2).jpg",
    imageAlt: "Coordinated plumbing BIM output for sports club facility",
    paragraphs: [
      "An MEPF firm required expert BIM support for a new 38,000 sq. ft. sports facility in Iowa. The project featured 30 diverse sports spaces, including aquatics and fitness centers.",
      "We provided LOD 350 plumbing modeling and comprehensive clash resolution within a compressed two-month project schedule. Our team ensured all systems integrated perfectly within the building's complex structural framework.",
    ],
    chips: [
      { label: "Project Type Sports Club Building", icon: overviewChipIcons.area },
      { label: "Level of Development LOD 350", icon: overviewChipIcons.lod },
      { label: "Project Area 38,000 Sq.Ft.", icon: overviewChipIcons.area },
      { label: "Manpower Used 5 Resources", icon: overviewChipIcons.manpower },
      { label: "Location LeClaire, IA, USA", icon: overviewChipIcons.location },
    ],
  },
  tools: {
    description:
      "Plumbing coordination ran in Autodesk Revit and Navisworks so models and clash reviews stayed in the client's delivery stack.",
    items: [
      { name: "Autodesk Revit", icon: "/icon/revit.png" },
      { name: "Navisworks", icon: "/icon/navisworks.png" },
    ],
  },
  io: {
    description:
      "From fragmented MEP references to LOD 350 clash-free plumbing models across 30 sports and recreation spaces.",
    inputImages: [
      { src: "/image/YMCA_Input%20(1).jpg", label: "Plumbing Input 1" },
      { src: "/image/YMCA_Input%20(2).jpg", label: "Plumbing Input 2" },
    ],
    outputImages: [
      { src: "/image/YMCA_Output%20(2).jpg", label: "Coordinated Output 1" },
      { src: "/image/YMCA_Output%20(4).jpg", label: "Coordinated Output 2" },
    ],
    inputPoints: [
      "Architectural and structural references",
      "Incomplete MEP documentation",
      "Sports facility space program",
      "Equipment clearance requirements",
      "Two-month delivery schedule",
    ],
    outputPoints: [
      "LOD 350 plumbing system model",
      "Clash-free coordinated plumbing layout",
      "Multi-trade BIM coordination package",
      "Construction-ready plumbing routing",
    ],
  },
  pain: {
    description:
      "Persistent clashes, sparse documentation, and dense recreation spaces threatened the two-month delivery schedule.",
    items: [
      {
        title: "Persistent Design Conflicts",
        text: "Frequent clashes between architectural and structural components were stalling progress and threatening the timeline.",
      },
      {
        title: "Inadequate System Documentation",
        text: "Sparse MEP data made long-term facility operations and maintenance planning difficult for the client.",
      },
      {
        title: "Communication Inefficiency",
        text: "Poor cross-team communication caused unresolved clashes and made meeting strict deadlines nearly impossible.",
      },
      {
        title: "Low System Visibility",
        text: "Limited insight into system interdependencies led to fears of costly adjustments during the installation phase.",
      },
      {
        title: "Structural Truss Constraints",
        text: "Routing plumbing lines through complex truss zones without compromising structural integrity.",
      },
      {
        title: "Strict Equipment Clearances",
        text: "Ensuring every mechanical unit maintains specific clearance zones for future maintenance access.",
      },
      {
        title: "Accelerated Submission Schedule",
        text: "Managing high-precision modeling tasks within a very tight two-month project window.",
      },
      {
        title: "Complex Spatial Integration",
        text: "Coordinating dense plumbing networks within thirty unique sports and recreation spaces.",
      },
    ],
  },
  approach: {
    description:
      "Five specialists executed a structured BIM workflow focused on exact spatial integration and proactive clash resolution.",
    items: [
      {
        title: "Plumbing System Modeling",
        text: "Developed LOD 350 plumbing models across aquatics, fitness, and recreation zones using Revit.",
      },
      {
        title: "Clash Detection and Resolution",
        text: "Identified and resolved conflicts between plumbing, structure, and equipment before construction documentation advanced.",
      },
      {
        title: "Multi-trade BIM Coordination",
        text: "Coordinated plumbing routing with architectural and structural constraints across all 30 sports spaces.",
      },
    ],
  },
  execution: {
    tag: "Execution Strategy",
    titleLine1: "Structured Plumbing Coordination ",
    titleLine2: "Across 30 Sports Spaces",
    description:
      "We deployed 5 specialists to execute a structured BIM workflow. Our team focused on exact spatial integration using Revit. We proactively resolved conflicts to ensure a smooth transition from digital model to physical construction.",
    steps: toExecutionSteps([
      "Model Setup and Standards Alignment",
      "Plumbing System Modeling in Revit",
      "Structural Truss Zone Coordination",
      "Clash Detection and Issue Resolution",
      "Equipment Clearance Validation",
      "Final Coordinated Model Delivery",
    ]),
  },
  outcomes: {
    description:
      "Precision plumbing coordination delivered clash-free models and measurable project efficiency gains.",
    items: [
      {
        title: "4x Cost Saving",
        text: "Offshore BIM coordination reduced delivery cost while maintaining LOD 350 accuracy across the facility.",
      },
      {
        title: "99% On-time Delivery",
        text: "Coordinated plumbing models were delivered within the two-month project schedule.",
      },
      {
        title: "98% Project Efficiency",
        text: "Structured clash cycles kept five specialists aligned without late-stage rework.",
      },
      {
        title: "99% Quality Assurance",
        text: "Equipment clearances and truss-zone routing were validated before final model submission.",
      },
      {
        title: "1,376 Clashes Detected & Resolved",
        text: "Systematic clash detection prevented plumbing conflicts from reaching the construction site.",
      },
    ],
  },
};

export default function CoordinationPlumbingBimModelingForSportClubFacilityUsaPage() {
  return <ProjectCaseStudy content={content} />;
}
