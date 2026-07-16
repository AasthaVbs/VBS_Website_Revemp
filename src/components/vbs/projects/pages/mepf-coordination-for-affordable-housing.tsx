"use client";
// @ts-nocheck

import { ProjectCaseStudy } from "@/components/vbs/projects/case-study";
import { overviewChipIcons, toExecutionSteps } from "@/components/vbs/projects/case-study/helpers";

const content = {
  hero: {
    tag: "Residential Building",
    titleLead: "Clash-Free MEPF Coordination for 56-Unit Residential Development: ",
    titleAccent: "Revere, MA",
    description:
      "Delivered precise LOD 350 BIM coordination across complex MEPF systems for a multi-story affordable housing project.",
    image: "/image/Clash-Free-MEPF-Coordination-for-56-Unit-Residential-Development.png",
    imageAlt: "MEPF BIM coordination for affordable housing project in Revere, MA",
  },
  overview: {
    image: "/image/AISDWootenElementarySchool%20Case%20study-41.jpg",
    imageAlt: "Coordinated MEPF BIM output for Revere affordable housing",
    paragraphs: [
      "When an MEPF firm needed dependable BIM expertise, they turned to us. The project was a 79,100 sq. ft., 7-story affordable housing building in Revere, MA. It featured 56 residential units, supportive group-living spaces, and ground-floor community areas.",
      "We delivered fully coordinated LOD 350 MEPF models, resolved all clashes, and produced penetration drawings within a 2-month timeline.",
    ],
    chips: [
      { label: "Project Type Residential Building", icon: overviewChipIcons.area },
      { label: "Level of Development LOD 350", icon: overviewChipIcons.lod },
      { label: "Project Area 79,100 Sq.Ft.", icon: overviewChipIcons.area },
      { label: "Manpower Used 5 Resources", icon: overviewChipIcons.manpower },
      { label: "Location Revere, MA", icon: overviewChipIcons.location },
    ],
  },
  tools: {
    description:
      "MEPF coordination ran in Autodesk Revit and Navisworks for modeling, clash detection, and penetration drawing production.",
    items: [
      { name: "Autodesk Revit", icon: "/icon/revit.png" },
      { name: "Navisworks", icon: "/icon/navisworks.png" },
    ],
  },
  io: {
    description:
      "From fragmented discipline inputs to LOD 350 clash-free MEPF models and penetration-ready documentation across seven floors.",
    inputImages: [
      { src: "/image/AISDWootenElementarySchool%20Case%20study-30.jpg", label: "MEPF Input 1" },
      { src: "/image/AISDWootenElementarySchool%20Case%20study-31.jpg", label: "MEPF Input 2" },
    ],
    outputImages: [
      { src: "/image/AISDWootenElementarySchool%20Case%20study-41.jpg", label: "Coordinated Output 1" },
      { src: "/image/AISDWootenElementarySchool%20Case%20study-42.jpg", label: "Coordinated Output 2" },
    ],
    inputPoints: [
      "Architectural and structural references",
      "Legacy and as-built site data",
      "MEPF system layouts",
      "Penetration location requirements",
      "Two-month delivery schedule",
    ],
    outputPoints: [
      "LOD 350 MEPF BIM model",
      "Clash-free coordinated model",
      "Penetration drawings",
      "Coordination documentation and reporting",
      "Validated final model delivery",
    ],
  },
  pain: {
    description:
      "High-density unit layouts, diverse space typologies, and seven-floor MEPF coordination created significant delivery pressure.",
    items: [
      {
        title: "Complex Multi-Discipline Coordination",
        text: "MEPF systems across seven floors required precise alignment to prevent costly on-site construction conflicts.",
      },
      {
        title: "High-Density Unit Layout",
        text: "56 residential units with shared community spaces created intricate routing challenges for all building systems.",
      },
      {
        title: "Penetration Drawing Production",
        text: "Structural penetrations had to be accurately located and documented across all floors for safe installation.",
      },
      {
        title: "Diverse Space Typologies",
        text: "Coordinating MEPF systems for standard units, group-living spaces, and service areas added significant coordination complexity.",
      },
      {
        title: "Inconsistent Workflows",
        text: "Lack of standardized processes across the team disrupted coordination and reduced overall modeling efficiency.",
      },
      {
        title: "Software Incompatibility",
        text: "Misaligned tools between disciplines created data exchange issues and slowed the coordination process.",
      },
      {
        title: "Clash Detection Complexity",
        text: "Identifying and resolving multi-discipline MEPF clashes across seven floors required continuous attention and precision.",
      },
      {
        title: "Managing Legacy and As-Built Data",
        text: "Incorporating existing site data accurately into the BIM model was time-consuming and error-prone.",
      },
    ],
  },
  approach: {
    description:
      "A structured BIM workflow with regular clash detection cycles and disciplined modeling standards ensured seamless MEPF integration.",
    items: [
      {
        title: "MEPF BIM Modeling",
        text: "Developed LOD 350 MEPF models across 56 units, group-living spaces, and community areas in Revit.",
      },
      {
        title: "Clash Detection & Coordination",
        text: "Ran continuous clash detection and issue tracking across seven floors and multiple disciplines.",
      },
      {
        title: "Penetration Drawings Development",
        text: "Produced accurate structural penetration drawings for safe installation across all floors.",
      },
      {
        title: "Revit Model Setup and Management",
        text: "Established standardized BIM workflows and model management practices for the full project team.",
      },
      {
        title: "Coordination Documentation and Reporting",
        text: "Maintained structured coordination records and reporting throughout the two-month engagement.",
      },
    ],
  },
  execution: {
    tag: "Execution Strategy",
    titleLine1: "Disciplined MEPF Coordination ",
    titleLine2: "Across Seven Floors",
    description:
      "We implemented a structured BIM workflow focused on coordination efficiency and accuracy. Regular clash detection cycles, disciplined modeling standards, and proactive communication ensured seamless integration of all MEPF systems within the defined timeline.",
    steps: toExecutionSteps([
      "Model Setup and BIM Standards Alignment",
      "MEPF System Modeling in Revit",
      "Clash Detection and Issue Identification",
      "Coordination Meeting and Issue Tracking",
      "Iterative Clash Resolution",
      "Penetration Drawing Development",
      "Final Model Validation and Delivery",
    ]),
  },
  outcomes: {
    description:
      "Quantifiable outcomes delivered through precise BIM coordination, penetration-ready documentation, and proactive issue resolution.",
    items: [
      {
        title: "4x Cost Saving",
        text: "Offshore MEPF coordination reduced delivery cost while maintaining LOD 350 accuracy across the development.",
      },
      {
        title: "90% On-time Delivery",
        text: "Coordinated models and penetration drawings were delivered within the two-month timeline.",
      },
      {
        title: "95% Project Efficiency",
        text: "Standardized workflows and structured clash cycles kept five specialists productive across seven floors.",
      },
      {
        title: "99% Quality Assurance",
        text: "Penetration locations and MEPF routing were validated before final model submission.",
      },
      {
        title: "7,000 Clashes Detected & Resolved",
        text: "Systematic clash detection prevented multi-discipline conflicts from reaching the construction site.",
      },
    ],
  },
};

export default function MepfCoordinationForAffordableHousingPage() {
  return <ProjectCaseStudy content={content} />;
}
