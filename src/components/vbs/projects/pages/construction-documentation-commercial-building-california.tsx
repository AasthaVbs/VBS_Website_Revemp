"use client";
// @ts-nocheck

import { ProjectCaseStudy } from "@/components/vbs/projects/case-study";
import { overviewChipIcons, toExecutionSteps } from "@/components/vbs/projects/case-study/helpers";

const content = {
  hero: {
    tag: "Commercial Building",
    titleLead: "End-to-End Construction Documentation: ",
    titleAccent: "Commercial Building, California",
    description:
      "Supporting a 58,176 sq. ft. commercial retail project with dedicated documentation capacity across design, coordination, and construction documentation phases.",
    image: "/image/3D Visualizaton_-Banner.jpg",
    imageAlt: "Commercial documentation project banner",
  },
  overview: {
    image: "/image/3D Visualizaton_1.jpg",
    imageAlt: "California commercial building documentation visualization",
    paragraphs: [
      "A mid-sized architecture firm in California, specializing in commercial design and land consulting, operates with a lean internal team and typically handles 5–6 commercial projects annually. While manageable during early design stages, documentation workload increases significantly during Design Development and Construction Documentation phases. For this 58,176 sq. ft. single-floor commercial project with multiple retail units, the firm required additional documentation capacity to meet permit and construction deadlines.",
      "Without external support, the internal team would have faced delays in drawing production, increased coordination risks, and a potential impact on project timelines. A dedicated documentation team was assigned to support model development, drawing production, and coordination, aligning with the firm's standards and workflow across all project phases.",
    ],
    chips: [
      { label: "Level of Development LOD 350", icon: overviewChipIcons.lod },
      { label: "Project Area 58,176 Sq.Ft.", icon: overviewChipIcons.area },
      { label: "Location California, USA", icon: overviewChipIcons.location },
      { label: "Manpower Used 2 Resources", icon: overviewChipIcons.manpower },
    ],
  },
  tools: {
    description:
      "Documentation and coordination ran across Revit, AutoCAD, Navisworks, BIM 360, and visualization tools already used by the client team.",
    items: [
      { name: "Revit", icon: "/icon/revit.png" },
      { name: "AutoCAD", icon: "/icon/autocad.png" },
      { name: "Navisworks", icon: "/icon/navisworks.png" },
      { name: "BIM 360", icon: "/icon/bimcollab.png" },
    ],
  },
  io: {
    description:
      "From as-builts, redlines, and standards to clash-free BIM models, CD sets, and permit-ready documentation packages.",
    inputImages: [
      { src: "/image/Input_Construction Documentation_1.jpg", label: "Existing As-Built Drawings" },
      { src: "/image/Input_Construction Documentation_2.jpg", label: "Redlines and Design Markups" },
      { src: "/image/Input_Construction Documentation_3.jpg", label: "Client Standards and Templates" },
      { src: "/image/Input_Construction Documentation_4.jpg", label: "Zoning and Code References" },
      { src: "/image/Input_Construction Documentation_5.jpg", label: "Software and Platform Access" },
      { src: "/image/Input_Construction Documentation_6.jpg", label: "Phase-Wise Review Feedback" },
    ],
    outputImages: [
      { src: "/image/3D Visualizaton_1.jpg", label: "Coordinated BIM Models" },
      { src: "/image/3D Visualizaton_2.jpg", label: "Complete CD Sets" },
      { src: "/image/3D Visualizaton_3.jpg", label: "Permit-Ready Drawing Package" },
      { src: "/image/3D Visualizaton_4.jpg", label: "3D Visualizations and Renderings" },
      { src: "/image/3D Visualizaton_5.jpg", label: "Advanced BIM Coordination" },
      { src: "/image/3D Visualizaton_6.jpg", label: "Construction-Ready Outputs" },
      { src: "/image/3D Visualizaton_7.jpg", label: "Final Project Delivery" },
    ],
    inputPoints: [
      "Existing as-built drawings",
      "Redlines and design markups",
      "Software and platform access",
      "Client standards and templates",
      "Phase-wise review feedback",
      "Zoning and code references",
    ],
    outputPoints: [
      "Clash-free BIM models",
      "Complete CD sets",
      "Permit-ready drawing packages",
      "Incorporated redline revisions",
      "Custom Revit family creation",
      "3D visualizations and renderings",
    ],
  },
  pain: {
    description:
      "Peak DD/CD workload and inconsistent external documentation support made capacity and standards the core challenges.",
    items: [
      {
        title: "Managing Documentation Capacity Across Project Phases",
        text: "Maintaining a full-time in-house documentation team was difficult to justify due to fluctuating project workload, especially during DD and CD phases.",
      },
      {
        title: "Increased Workload During DD and CD Phases",
        text: "During DD and CD stages, documentation workload increased significantly, creating pressure on the internal team to meet permit submission and issue deadlines.",
      },
      {
        title: "Inconsistent Output from External Teams",
        text: "Previous external teams were able to produce drawings but struggled to follow the firm's documentation standards, resulting in rework, misalignment, and coordination issues.",
      },
      {
        title: "Need for Standardized Documentation and QA",
        text: "The firm required consistent documentation standards, coordinated BIM models, and structured QA processes to ensure permit-ready and construction-ready drawing sets across all phases.",
      },
    ],
  },
  approach: {
    description:
      "A dedicated documentation team applied client standards, continuous redline management, and phase-wise review cadence.",
    items: [
      {
        title: "Dedicated Documentation Team",
        text: "A dedicated team was assigned to handle ongoing documentation and coordination tasks, ensuring consistency in output and alignment with the firm's standards and workflow.",
      },
      {
        title: "Structured Documentation and QA Workflow",
        text: "Standard templates, family libraries, and QA check processes were implemented to maintain uniformity and accuracy across drawing sets and project stages.",
      },
      {
        title: "Coordination and Redline Management",
        text: "Redline updates, model revisions, and coordination tasks were managed continuously to ensure drawings remained accurate, updated, and aligned with design intent.",
      },
      {
        title: "Regular Review and Communication",
        text: "Phase-wise and weekly reviews ensured alignment with project expectations, reduced rework, and maintained consistency throughout the documentation process.",
      },
    ],
  },
  execution: {
    tag: "Execution Strategy",
    titleLine1: "A Structured Documentation ",
    titleLine2: "Workflow - Phase by Phase",
    description:
      "Delivery moved from scope and tooling alignment through SD, DD, permit, CD production, and final clash detection review.",
    steps: toExecutionSteps([
      "Scope Briefing and Tool Alignment",
      "Schematic Design and 3D Development",
      "Design Development and Redline Incorporation",
      "Permit Drawing Preparation",
      "Construction Document (CD Set) Production",
      "Clash Detection, Review and Final Delivery",
    ]),
  },
  outcomes: {
    description:
      "Dedicated documentation capacity delivered consistent turnaround, LOD 350 coordination, and permit-ready packages without expanding the client's internal team.",
    items: [
      {
        title: "Fast Turnaround Delivery",
        text: "Maintained consistent 3 to 4-day turnaround across documentation tasks.",
      },
      {
        title: "End-to-End Documentation",
        text: "Delivered complete construction documentation sets across all phases.",
      },
      {
        title: "Advanced BIM Coordination (LOD 350)",
        text: "Developed coordinated BIM models at LOD 350 with permit-ready outputs.",
      },
      {
        title: "Reduced Rework Efficiency",
        text: "Reduced rework through standardized documentation and QA processes.",
      },
      {
        title: "Scalable Workload Management",
        text: "Managed peak workload without expanding the internal team.",
      },
      {
        title: "Lifecycle Coordination Consistency",
        text: "Improved coordination and maintained consistency across project lifecycle.",
      },
    ],
  },
};

export default function ConstructionDocumentationCommercialBuildingCaliforniaPage() {
  return <ProjectCaseStudy content={content} />;
}
