"use client";
// @ts-nocheck

import { ProjectCaseStudy } from "@/components/vbs/projects/case-study";
import { overviewChipIcons } from "@/components/vbs/projects/case-study/helpers";

const content = {
  hero: {
    tag: "Multi-Family Residential",
    titleLead: "From Redlines to Renders: ",
    titleAccent: "Multi-Family Apartment, Las Vegas",
    description:
      "From resolving drawing discrepancies to developing facade options and realistic 3D renders, the 225,624 sq.ft. residential project progressed through a structured workflow.",
    image: "/image/Architectural 3D Visualization_Banner.jpg",
    imageAlt: "Multi-family apartment BIM visualization, Las Vegas",
  },
  overview: {
    image: "/image/Architectural-3D-Visualization-(4).jpg",
    imageAlt: "Project overview visualization",
    paragraphs: [
      "A Las Vegas-based architectural design firm engaged our team to support documentation review and design visualization for a multi-family apartment development. The project was executed through a dedicated remote architect embedded within the client's workflow, enabling fast iteration on documentation updates and facade visualization while maintaining continuous coordination.",
      "The result was a clean documentation set and a compelling visual package that enabled the client to move confidently into design approvals and next-stage development.",
    ],
    chips: [
      { label: "Level of Development LOD 200", icon: overviewChipIcons.lod },
      { label: "Project Area 225,624 Sq.Ft.", icon: overviewChipIcons.area },
      { label: "Location Las Vegas, NV", icon: overviewChipIcons.location },
      { label: "Manpower Used 3 Resources", icon: overviewChipIcons.manpower },
    ],
  },
  tools: {
    description:
      "Delivery ran in Autodesk Revit, Lumion, and AutoCAD so outputs landed in the same platforms your team already uses for documentation and design reviews.",
    items: [
      { name: "Autodesk Revit", icon: "/icon/revit.png", className: "" },
      { name: "Lumion", icon: "/icon/lumion.png", className: "lv-case-tools__item--lumion" },
      { name: "AutoCAD", icon: "/icon/autocad.png", className: "" },
    ],
  },
  io: {
    description:
      "From mark-up-heavy CAD sets to coordinated drawings and photorealistic renders, every input was transformed into decision-ready output.",
    inputImages: [
      { src: "/image/2D AutoCAD drawing_1.jpg", label: "2D AutoCAD Drawing Set 1" },
      { src: "/image/2D AutoCAD drawing_3.jpg", label: "2D AutoCAD Drawing Set 3" },
      { src: "/image/2D AutoCAD drawing_4.jpg", label: "2D AutoCAD Drawing Set 4" },
      { src: "/image/2D AutoCAD drawing_5.jpg", label: "2D AutoCAD Drawing Set 5" },
      { src: "/image/2D AutoCAD drawing.jpg", label: "2D AutoCAD Drawing Base" },
    ],
    outputImages: [
      { src: "/image/Architectural-3D-Visualization_2.jpg", label: "Architectural 3D Visualization 2" },
      { src: "/image/Architectural-3D-Visualization-(3).jpg", label: "Architectural 3D Visualization 3" },
      { src: "/image/Architectural-3D-Visualization-(4).jpg", label: "Architectural 3D Visualization 4" },
      { src: "/image/Architectural-3D-Visualization-(5).jpg", label: "Architectural 3D Visualization 5" },
      { src: "/image/Architectural-3D-Visualization.jpg", label: "Architectural 3D Visualization" },
    ],
    inputPoints: [
      "Existing 2D AutoCAD drawing set",
      "Client submission comments and RFI inputs",
      "Technical and graphical mark-ups",
      "Design references and brief",
      "Approved interior layouts and finish schedule",
    ],
    outputPoints: [
      "Coordinated and corrected AutoCAD drawing set",
      "Updated floor plans with resolved mark-ups",
      "Construction-feasible Revit facade models",
      "Multi-option material and massing studies",
      "Photorealistic Lumion exterior and interior renders",
    ],
  },
  pain: {
    description:
      "These four constraints shaped the engagement and drove a documentation-first, visualization-led approach.",
    items: [
      {
        title: "Drawing Discrepancies & Coordination Gaps",
        text: "Existing drawings had inconsistencies that needed correction before the project could progress to production.",
        zeroColor: "#D70416",
      },
      {
        title: "Design Decision Bottleneck",
        text: "Multiple facade and material options were needed with no clear visual reference to start decision-making from.",
        zeroColor: "#42AA32",
      },
      {
        title: "First-Time Documentation Involvement",
        text: "Fast onboarding and precise understanding of requirements were critical from day one of engagement.",
        zeroColor: "#2299D6",
      },
      {
        title: "Dual-Purpose Output Needed",
        text: "Visuals had to serve both technical approvals and marketing needs simultaneously.",
        zeroColor: "#F0B300",
      },
    ],
  },
  approach: {
    description:
      "A remote architect embedded in the client's workflow closed gaps from redlines through renders.",
    items: [
      {
        title: "Structured Documentation Review",
        text: "Audited AutoCAD drawings based on comments and created a consolidated RFI list to resolve conflicts before production.",
      },
      {
        title: "Systematic Mark-Up Resolution",
        text: "Incorporated technical and graphical mark-ups into AutoCAD files, ensuring layer consistency and coordination.",
      },
      {
        title: "Multiple Facade Options, Iteratively Refined",
        text: "Created 3D facade models in Revit on client references, U.S. standards, exploring materials & massing through iterative reviews.",
      },
      {
        title: "High-Quality Renders for Dual Use",
        text: "Exported Revit models to Lumion for photorealistic renderings and delivered interior, exterior packages for approvals and marketing.",
      },
    ],
  },
  execution: {
    tag: "Execution Strategy",
    titleLine1: "A Structured Delivery ",
    titleLine2: "Workflow - Phase by Phase",
    description:
      "The project progressed through a structured delivery workflow. Beginning with documentation audit and RFI consolidation, followed by coordinated drawing updates, BIM facade development, and final visualization.",
    steps: [
      {
        number: "01",
        title: "Documentation Review",
        text: "AutoCAD audit against submission comments to establish a clean baseline before production updates.",
      },
      {
        number: "02",
        title: "Query Resolution",
        text: "RFI consolidation and conflict resolution so open questions were closed before drawings advanced.",
      },
      {
        number: "03",
        title: "Drawing Updates",
        text: "Mark-up incorporation and coordination across the set to deliver consistent, submission-ready sheets.",
      },
      {
        number: "04",
        title: "3D Building Modeling",
        text: "Revit BIM facade model construction aligned with client references and U.S. project standards.",
      },
      {
        number: "05",
        title: "Material & Elevation Development",
        text: "Multi-option massing and material studies refined through iterative client review cycles.",
      },
      {
        number: "06",
        title: "Final Visualization",
        text: "Lumion renders for approvals and marketing, covering both exterior and interior packages.",
      },
    ],
  },
  outcomes: {
    description:
      "A coordinated documentation workflow combined with structured design development enabled smoother decision-making and clear visualization outcomes.",
    items: [
      {
        title: "Fully Coordinated Submission-Ready Drawing Set",
        text: "Resolved cross-document discrepancies, delivering a coordinated, submission-ready drawing set aligned with project requirements.",
      },
      {
        title: "Multiple Revit Facade Alternatives",
        text: "Developed Revit-based facade alternatives with varied material and massing options, accelerating design decisions.",
      },
      {
        title: "Permit-Standard and Marketing-Grade Renders",
        text: "Produced photorealistic exterior and interior renders ready for permit approvals and marketing campaigns.",
      },
      {
        title: "Construction-Feasible Facade Design",
        text: "Finalized a construction-feasible facade design through structured workflow and iterative client review cycles.",
      },
      {
        title: "Complete RFI Resolution Log Maintained",
        text: "Ensured full documentation accuracy through a maintained RFI resolution log before advancing to visualization.",
      },
      {
        title: "Seamless Documentation-to-Render Progression",
        text: "Enabled seamless progression from documentation through Revit modeling to final render delivery.",
      },
    ],
  },
};

export default function ArchitectureOutsourceServicesCaseStudy() {
  return <ProjectCaseStudy content={content} />;
}
