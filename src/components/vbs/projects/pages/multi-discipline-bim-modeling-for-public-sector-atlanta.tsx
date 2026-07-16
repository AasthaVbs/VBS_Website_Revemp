"use client";
// @ts-nocheck

import { ProjectCaseStudy } from "@/components/vbs/projects/case-study";
import { overviewChipIcons, toExecutionSteps } from "@/components/vbs/projects/case-study/helpers";

const content = {
  hero: {
    tag: "Public Sector",
    titleLead: "Multi-Discipline BIM Modeling from Scratch: ",
    titleAccent: "Public Safety Facility, Atlanta",
    description:
      "From incomplete inputs to coordinated Structural and Architectural BIM models delivery for a 20,800 sq. ft. public Safety facility in Atlanta, GA",
    image: "/image/police3D Visualization Banner.jpg",
    imageAlt: "Public safety facility banner",
  },
  overview: {
    image: "/image/3D Visualization_1.jpg",
    imageAlt: "Atlanta public safety facility BIM visualization",
    paragraphs: [
      "A multidisciplinary engineering consultancy in Atlanta engaged our team to develop fully coordinated Structural and Architectural BIM models for a 20,800 sq. ft. two-story institutional facility. Updated models were never made available by the broader design team, creating a critical coordination gap at the Construction Documents stage.",
      "We deployed a dedicated BIM team, including an Architect, a Structural Engineer, and a Project Manager. Working from the available IFC model and issued construction drawings, the team independently developed all discipline models. Construction-ready content was delivered alongside high-quality Lumion renderings.",
    ],
    chips: [
      { label: "Level of Development LOD 300", icon: overviewChipIcons.lod },
      { label: "Project Area 20,800 Sq.Ft.", icon: overviewChipIcons.area },
      { label: "Location Atlanta, GA", icon: overviewChipIcons.location },
      { label: "Manpower Used 3 Resources", icon: overviewChipIcons.manpower },
    ],
  },
  tools: {
    description:
      "Delivery ran in Autodesk Revit and Lumion so coordinated models and visuals landed in platforms the project team already uses.",
    items: [
      { name: "Autodesk Revit", icon: "/icon/revit.png" },
      { name: "Lumion", icon: "/icon/lumion.png", className: "lv-case-tools__item--lumion" },
    ],
  },
  io: {
    description:
      "From limited IFC and drawing inputs to coordinated multi-discipline BIM models and visualization outputs.",
    inputImages: [
      { src: "/image/Policeinput.jpg", label: "IFC Architectural Model" },
      { src: "/image/policeInput_2.jpg", label: "Construction Drawing Set" },
      { src: "/image/policeInput_3.jpg", label: "Verbal Scope Confirmation" },
      { src: "/image/policeInput_4.jpg", label: "Clarification Responses" },
      { src: "/image/policeinput5.jpg", label: "Site Survey Data" },
      { src: "/image/policeInput_6.jpg", label: "Structural Reference Drawings" },
      { src: "/image/policeInput_7.jpg", label: "MEP Coordination Inputs" },
      { src: "/image/policeInput_8.jpg", label: "Client Markups" },
    ],
    outputImages: [
      { src: "/image/3D Visualization_1.jpg", label: "Architectural Model" },
      { src: "/image/3D Visualization_2.jpg", label: "Coordinated Structural Model" },
      { src: "/image/3D Visualization_3.jpg", label: "Coordination Issue Log" },
      { src: "/image/3D Visualization_4.jpg", label: "Lumion Exterior Renderings" },
      { src: "/image/3D Visualization_5.jpg", label: "BIM Marketing Visuals" },
    ],
    inputPoints: [
      "IFC Architectural model",
      "Construction drawing set",
      "Verbal scope confirmation",
      "Clarification responses",
    ],
    outputPoints: [
      "Architectural model",
      "Coordinated structural model",
      "Coordination issue log",
      "BIM marketing visuals",
    ],
  },
  pain: {
    description:
      "Missing and outdated discipline models blocked coordination at CD stage and put documentation accuracy at risk.",
    items: [
      {
        title: "Updated Models Not Delivered",
        text: "The design team did not provide updated Architectural, Structural, or MEPF models at the CD stage, leaving the client without a coordinated model set.",
      },
      {
        title: "Incomplete Architectural Revisions",
        text: "The architectural model had limited revisions and did not reflect the latest construction drawings, making it unreliable for coordination or documentation.",
      },
      {
        title: "No Structural or MEPF Starting Point",
        text: "Structural and MEPF models were not shared by the design team, leaving no baseline for building, coordinating, or validating engineering systems.",
      },
      {
        title: "Coordination Gaps Across Disciplines",
        text: "Interdisciplinary coordination stalled without updated models across all three disciplines, hindering discrepancy identification and resolution.",
      },
      {
        title: "Risk of Downstream Documentation Errors",
        text: "Proceeding with outdated or incomplete models risked propagating errors into construction documentation, permit packages, and contractor-facing deliverables.",
      },
      {
        title: "Internal Capacity Constraints",
        text: "The client's team could not rebuild and coordinate three discipline models while handling ongoing engineering and client responsibilities.",
      },
    ],
  },
  approach: {
    description:
      "An independent multi-discipline BIM team rebuilt models from available inputs and locked coordination through structured QC.",
    items: [
      {
        title: "Independent Model Development",
        text: "Architectural and Structural models were developed from the ground up using the available IFC model, construction drawings, and applicable standards.",
      },
      {
        title: "Architectural Model Refinement",
        text: "The available model was reviewed against revised PDFs. Missing walls, outdated elements, and furniture mismatches were corrected floor by floor.",
      },
      {
        title: "Structural System Modeled from Scratch",
        text: "The complete structural model was developed independently, covering framing, beams, columns, connections, and wall footings, with attention to complex junction conditions.",
      },
      {
        title: "Structured Coordination List",
        text: "A comprehensive coordination list was prepared at project outset, documenting all issues, responsible disciplines, and required actions for a traceable process.",
      },
      {
        title: "Proactive Clarification Requests",
        text: "Formal clarification requests were raised and documented for ambiguous items before modeling decisions were finalized and validated.",
      },
      {
        title: "Day-Wise Work Planning with QC",
        text: "Coordination items were distributed across a structured daily work plan, with dedicated QC hours allocated before each submission for accuracy.",
      },
    ],
  },
  execution: {
    tag: "Execution Strategy",
    titleLine1: "End-to-End Project Delivery ",
    titleLine2: "Through a Phase-Controlled Approach",
    description:
      "The project was delivered across sequential stages, with each phase reviewed and confirmed before the team advanced. This phase-gated approach ensured that model content, coordination items, and client approvals were progressively locked in, reducing rework and maintaining forward momentum.",
    steps: toExecutionSteps([
      "Project Review and Coordination",
      "Client Mark-Ups and Model Updates",
      "Structural and Building Modeling",
      "Material, Elevation, and Visualization Development",
      "Visualization Production and Final Rendering",
      "Final Delivery and Submission",
    ]),
  },
  outcomes: {
    description:
      "End-to-end coordinated BIM delivery with validated models, resolved design gaps, and structured phase-gated execution.",
    items: [
      {
        title: "Coordinated BIM Models at LOD 300",
        text: "Delivered fully coordinated Architectural and Structural models at LOD 300.",
      },
      {
        title: "Structured Multidisciplinary Issue Tracking",
        text: "Documented all multidisciplinary discrepancies in a structured coordination list.",
      },
      {
        title: "Architectural Discrepancy Resolution",
        text: "Resolved first and second floor architectural discrepancies against latest drawings.",
      },
      {
        title: "End-to-End Structural Model Development",
        text: "Developed complete structural model from scratch, including complex junction conditions.",
      },
      {
        title: "High-Quality Visualization and Marketing Outputs",
        text: "Produced exterior renderings and BIM marketing visuals within tight timelines.",
      },
      {
        title: "Phase-Gated Quality-Controlled Delivery",
        text: "Maintained QC-verified, phase-gated delivery across four structured project stages.",
      },
    ],
  },
};

export default function MultiDisciplineBimModelingForPublicSectorAtlantaPage() {
  return <ProjectCaseStudy content={content} />;
}
