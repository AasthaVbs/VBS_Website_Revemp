"use client";
// @ts-nocheck

import { ProjectCaseStudy } from "@/components/vbs/projects/case-study";
import { overviewChipIcons, toExecutionSteps } from "@/components/vbs/projects/case-study/helpers";

const content = {
  hero: {
    tag: "School Building",
    titleLead: "Clash-free HVAC Coordination: Multi-Unit School Project in ",
    titleAccent: "Austin, TX",
    description:
      "Delivered fully coordinated HVAC and hydronic systems, resolving all clashes pre-construction to ensure seamless installation and on-time project delivery.",
    image: "/image/HVAC-Coordination%20(1).png",
    imageAlt: "HVAC BIM coordination — 3D mechanical systems for the Austin school project",
  },
  overview: {
    image: "/image/AISDWootenElementarySchool%20Case%20study-41.jpg",
    imageAlt: "Coordinated HVAC BIM output for Austin school project",
    paragraphs: [
      "When an MEPF firm needed reliable BIM expertise for a 65,000 sq. ft. educational campus in Austin, TX, they turned to us. With 25 mixed-story units ranging from 800 to 1,500 sq. ft., the project demanded high-precision LOD 400 coordination across HVAC and Mechanical Piping systems.",
      "We ensured every system was precisely coordinated, each clash was resolved, and the models were delivered on schedule.",
    ],
    chips: [
      { label: "Project Type School Building", icon: overviewChipIcons.area },
      { label: "Level of Development LOD 400", icon: overviewChipIcons.lod },
      { label: "Project Area 65,000 Sq.Ft.", icon: overviewChipIcons.area },
      { label: "Manpower Used 5 Resources", icon: overviewChipIcons.manpower },
      { label: "Location Austin, TX", icon: overviewChipIcons.location },
    ],
  },
  tools: {
    description:
      "HVAC and mechanical piping coordination ran in Autodesk Revit and Navisworks for LOD 400 modeling and clash detection.",
    items: [
      { name: "Autodesk Revit", icon: "/icon/revit.png" },
      { name: "Navisworks", icon: "/icon/navisworks.png" },
    ],
  },
  io: {
    description:
      "From unresolved cross-disciplinary inputs to clash-free LOD 400 HVAC and mechanical piping models across 25 units.",
    inputImages: [
      { src: "/image/AISDWootenElementarySchool%20Case%20study-30.jpg", label: "HVAC Input 1" },
      { src: "/image/AISDWootenElementarySchool%20Case%20study-31.jpg", label: "HVAC Input 2" },
    ],
    outputImages: [
      { src: "/image/AISDWootenElementarySchool%20Case%20study-41.jpg", label: "Coordinated Output 1" },
      { src: "/image/AISDWootenElementarySchool%20Case%20study-42.jpg", label: "Coordinated Output 2" },
    ],
    inputPoints: [
      "Architectural and structural references",
      "Incomplete MEP documentation",
      "HVAC and mechanical piping layouts",
      "Equipment clearance requirements",
      "LOD 400 coordination standards",
    ],
    outputPoints: [
      "LOD 400 HVAC system model",
      "Coordinated mechanical piping model",
      "Clash-free coordinated BIM deliverable",
      "Construction documentation support",
      "Coordination issue log",
    ],
  },
  pain: {
    description:
      "Unresolved clashes, inadequate documentation, and a strict submission deadline threatened on-time delivery across 25 school units.",
    items: [
      {
        title: "Unresolved Cross-disciplinary Clashes",
        text: "Continuous conflicts between architectural, structural, and MEP systems were stalling coordination and threatening the construction schedule.",
      },
      {
        title: "Strict Submission Deadline",
        text: "Tight project timelines combined with inefficient cross-team communication made meeting delivery milestones increasingly difficult.",
      },
      {
        title: "Mechanical Equipment Clearance Gap",
        text: "Insufficient clearance planning around mechanical equipment created risks for accurate installation and future system accessibility.",
      },
      {
        title: "Inadequate MEP Documentation",
        text: "Poorly structured MEP documentation was making it difficult to support effective long-term facility operation and maintenance.",
      },
      {
        title: "Lack of System Visibility",
        text: "Limited cross-discipline insight led to late-stage discoveries, causing costly adjustments that proactive coordination could have prevented.",
      },
      {
        title: "Needed Fully Coordinated LOD 400 Model",
        text: "Project demanded a clash-free LOD 400 model with accurate documentation, ready for direct construction execution on time.",
      },
      {
        title: "Truss Coordination Constraints",
        text: "Routing HVAC systems without interfering with structural truss zones required precise spatial planning and iterative clash reviews at every routing decision point.",
      },
      {
        title: "Tight Timeline Pressure",
        text: "Delivering coordinated outputs within strict submission deadlines while maintaining full LOD 400 accuracy across all 25 units.",
      },
    ],
  },
  approach: {
    description:
      "A structured BIM coordination workflow using Revit for LOD 400 modeling and Navisworks for clash detection kept HVAC and piping systems aligned.",
    items: [
      {
        title: "HVAC System Modeling",
        text: "Developed LOD 400 HVAC models across 25 mixed-story units with precise routing through truss and ceiling zones.",
      },
      {
        title: "Mechanical System Modeling",
        text: "Modeled mechanical piping systems with equipment clearance and maintenance access requirements built in.",
      },
      {
        title: "Clash Detection & Coordination",
        text: "Ran proactive clash detection cycles and resolved conflicts across architectural, structural, and MEP systems.",
      },
      {
        title: "Construction Documentation Support",
        text: "Supported construction-ready documentation derived from the coordinated LOD 400 model.",
      },
      {
        title: "Coordination Meeting Support",
        text: "Maintained structured issue tracking and cross-team alignment through coordination reviews.",
      },
    ],
  },
  execution: {
    tag: "Execution Strategy",
    titleLine1: "Proactive HVAC Coordination ",
    titleLine2: "Across 25 School Units",
    description:
      "Our team followed a structured BIM coordination workflow using Revit for LOD 400 modeling and Navisworks for clash detection. We ensured proactive coordination, real-time updates, and precise modeling to ensure seamless integration of HVAC and piping systems.",
    steps: toExecutionSteps([
      "Model Setup and LOD 400 Standards Alignment",
      "HVAC System Modeling in Revit",
      "Mechanical Piping System Modeling",
      "Truss Zone Coordination and Clearance Checks",
      "Clash Detection and Issue Resolution",
      "Final Model Validation and Delivery",
    ]),
  },
  outcomes: {
    description:
      "Quantifiable outcomes delivered through precision BIM coordination and proactive pre-construction clash management.",
    items: [
      {
        title: "4x Cost Saving",
        text: "Offshore LOD 400 coordination reduced delivery cost while resolving clashes before they reached the site.",
      },
      {
        title: "99% On-time Delivery",
        text: "Coordinated HVAC and mechanical piping models were delivered within the project submission window.",
      },
      {
        title: "90% Project Efficiency",
        text: "Structured clash cycles and real-time model updates kept five specialists aligned across 25 units.",
      },
      {
        title: "99% Quality Assurance",
        text: "Equipment clearances and truss-zone routing were validated before final LOD 400 submission.",
      },
      {
        title: "3,000 Clashes Detected & Resolved",
        text: "Systematic clash detection prevented cross-disciplinary conflicts from reaching construction.",
      },
    ],
  },
};

export default function HvacBimCoordinationForSchoolBuildingAustinPage() {
  return <ProjectCaseStudy content={content} />;
}
