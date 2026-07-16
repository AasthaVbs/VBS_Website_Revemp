"use client";
// @ts-nocheck

import { ProjectCaseStudy } from "@/components/vbs/projects/case-study";
import { overviewChipIcons, toExecutionSteps } from "@/components/vbs/projects/case-study/helpers";

const content = {
  hero: {
    tag: "Mechanical Plant Room",
    titleLead: "Clash-Free BIM Modeling for Plant Room Refurbishment Project, ",
    titleAccent: "UK",
    description:
      "Delivered precise LOD 300 BIM modeling and coordination for complex mechanical plant room systems within a tight two-week timeline.",
    image: "/image/Clash-Free-BIM-Modeling-for-Plant-Room-Refurbishment-Project.png",
    imageAlt: "Clash-free BIM modeling for mechanical plant room refurbishment project in the UK",
  },
  overview: {
    image: "/image/Plant_Output%20(1).jpg",
    imageAlt: "Coordinated mechanical plant room BIM output",
    paragraphs: [
      "When a UK-based MEPF team needed precise BIM support for a building refurbishment and new block extension, they partnered with us. The scope covered detailed LOD 300 modeling of mechanical plant room systems.",
      "With a two-person team and a two-week timeline, we translated schematic diagrams and plan layouts into a fully coordinated 3D Revit model, ready for clash-free construction execution.",
    ],
    chips: [
      { label: "Project Type Mechanical Plant Room", icon: overviewChipIcons.area },
      { label: "Level of Development LOD 300", icon: overviewChipIcons.lod },
      { label: "Manpower Used 2 Resources", icon: overviewChipIcons.manpower },
      { label: "Location UK", icon: overviewChipIcons.location },
    ],
  },
  tools: {
    description:
      "Mechanical plant room modeling was delivered in Autodesk Revit with clash detection embedded throughout the two-week sprint.",
    items: [{ name: "Autodesk Revit", icon: "/icon/revit.png" }],
  },
  io: {
    description:
      "From schematic diagrams and plan layouts to a clash-free LOD 300 Revit model and shop drawing-ready deliverables.",
    inputImages: [
      { src: "/image/Plant_Input%20(1).jpg", label: "Plant Room Input 1" },
      { src: "/image/Plant_Input%20(5).jpg", label: "Plant Room Input 2" },
    ],
    outputImages: [
      { src: "/image/Plant_Output%20(1).jpg", label: "Plant Room Output 1" },
      { src: "/image/Plant_Output%20(2).jpg", label: "Plant Room Output 2" },
    ],
    inputPoints: [
      "2D mechanical schematics",
      "Plan layout drawings",
      "Plant room refurbishment scope",
      "Equipment and routing references",
      "Two-week delivery schedule",
    ],
    outputPoints: [
      "LOD 300 mechanical plant room model",
      "Clash-free coordinated Revit model",
      "Shop drawing preparation package",
      "Construction-ready model output",
    ],
  },
  pain: {
    description:
      "Confined plant room space, schematic-to-3D conversion complexity, and a two-week deadline demanded disciplined BIM execution.",
    items: [
      {
        title: "Complex Schematic Interpretation",
        text: "Translating 2D mechanical schematics into accurate, construction-ready 3D models required specialist BIM expertise and process discipline.",
      },
      {
        title: "Confined Space Coordination",
        text: "The plant room had limited spatial clearance, making clash-free routing of mechanical systems extremely challenging.",
      },
      {
        title: "Multiple Interconnected Systems",
        text: "Managing interdependent mechanical systems within one model demanded structured modeling and coordination oversight.",
      },
      {
        title: "Clash Risk Before Construction",
        text: "Undetected design conflicts could cause costly rework and delays during the physical installation phase on-site.",
      },
      {
        title: "Short Delivery Timeline",
        text: "The two-week window required an efficient, structured workflow to meet quality and schedule requirements simultaneously.",
      },
      {
        title: "SD to 3D Conversion",
        text: "Schematic to model conversion required high accuracy and design clarity.",
      },
      {
        title: "Space Constraints",
        text: "Managing dense mechanical systems within restricted plant room space without conflicts.",
      },
      {
        title: "QC Under Timeline Pressure",
        text: "Maintaining quality under a strict two-week delivery timeline.",
      },
    ],
  },
  approach: {
    description:
      "A structured, review-driven approach built each system progressively with coordination checks embedded at every stage.",
    items: [
      {
        title: "Mechanical Plant Room Modeling",
        text: "Translated schematic diagrams and plan layouts into a detailed LOD 300 Revit model of plant room systems.",
      },
      {
        title: "Space Utilization & Routing Optimization",
        text: "Optimized mechanical routing within confined plant room clearance zones to avoid installation conflicts.",
      },
      {
        title: "Clash Detection & Coordination",
        text: "Identified and resolved clashes progressively before final model delivery.",
      },
      {
        title: "Shop Drawing Preparation",
        text: "Prepared construction-ready outputs suitable for shop drawing extraction from the coordinated model.",
      },
    ],
  },
  execution: {
    tag: "Execution Strategy",
    titleLine1: "Review-Driven Plant Room ",
    titleLine2: "Modeling in Two Weeks",
    description:
      "Our team adopted a structured, review-driven approach to BIM modeling. Each system was built progressively, with coordination checks embedded at every stage. This ensured clashes were identified and resolved before final model delivery.",
    steps: toExecutionSteps([
      "Model Setup and BIM Standards Alignment",
      "Schematic and Plan Layout Review",
      "Mechanical System Modeling in Revit",
      "Clash Detection and Conflict Identification",
      "Coordination Reviews and Issue Tracking",
      "Iterative Clash Resolution and Model Refinement",
      "Final Model Validation and Drawing Production",
      "Delivery of RVT Model and Shop Drawings",
    ]),
  },
  outcomes: {
    description:
      "Quantifiable outcomes delivered through accurate modeling, proactive clash detection, and schedule-focused execution.",
    items: [
      {
        title: "3x Cost Saving",
        text: "Focused offshore modeling support reduced delivery cost for the two-week plant room engagement.",
      },
      {
        title: "99% On-time Delivery",
        text: "The clash-free LOD 300 model was delivered within the two-week project window.",
      },
      {
        title: "95% Project Efficiency",
        text: "Progressive modeling with embedded coordination checks kept a two-person team on schedule.",
      },
      {
        title: "99% Quality Assurance",
        text: "Model accuracy and clash resolution were validated before shop drawing production.",
      },
      {
        title: "300 Clashes Detected & Resolved",
        text: "Proactive clash detection prevented mechanical conflicts from reaching the installation phase.",
      },
    ],
  },
};

export default function ClashFreeBimModelingForMechanicalPlantRomPage() {
  return <ProjectCaseStudy content={content} />;
}
