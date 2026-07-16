"use client";
// @ts-nocheck

import { ProjectCaseStudy } from "@/components/vbs/projects/case-study";
import { overviewChipIcons, toExecutionSteps } from "@/components/vbs/projects/case-study/helpers";

const content = {
  hero: {
    tag: "Residential Villa",
    titleLead: "High-Fidelity Architectural Visualization: ",
    titleAccent: "Residential Villa, Dubai",
    description:
      "Photorealistic interior and exterior renders with walkthrough for a 10,000 sq. ft. villa, enabling presentations, faster approvals, and clear design communication.",
    image: "/image/3D Visualization Banner.jpg",
    imageAlt: "Dubai villa visualization banner",
  },
  overview: {
    image: "/image/3D interior_2.jpg",
    imageAlt: "Dubai villa interior visualization",
    paragraphs: [
      "A Dubai-based construction firm engaged our team to create photorealistic interior and exterior renders along with a complete walkthrough for a 10,000 sq. ft. villa project. The visualization was critical for client presentation and design approval, requiring precise representation of materials, lighting, and overall spatial experience.",
      "Working within a compressed timeline, we developed and refined visuals through continuous iterations. We ensured alignment on perspectives, mood, and detail. The final renders and walkthrough enabled the client to clearly communicate design intent to stakeholders and move forward with confidence.",
    ],
    chips: [
      { label: "Level of Development LOD 300", icon: overviewChipIcons.lod },
      { label: "Project Area 10,000 Sq.Ft.", icon: overviewChipIcons.area },
      { label: "Location Dubai, UAE", icon: overviewChipIcons.location },
      { label: "Manpower Used 3 Resources", icon: overviewChipIcons.manpower },
    ],
  },
  tools: {
    description:
      "Visualization delivery ran in Autodesk Revit and D5 Render so outputs matched the platforms used for design review and presentation.",
    items: [
      { name: "Autodesk Revit", icon: "/icon/revit.png" },
      { name: "D5 Render", icon: "/image/D5 Render.jpg" },
    ],
  },
  io: {
    description:
      "From a concise brief and design references to photorealistic interior, exterior, and walkthrough deliverables.",
    inputImages: [
      { src: "/image/Input_1.jpg", label: "Basic Project Brief" },
      { src: "/image/Input_2.jpg", label: "Architectural Design References" },
      { src: "/image/Input_3.jpg", label: "Interior Design Inputs" },
      { src: "/image/Input_4.jpg", label: "Material and Finish Specifications" },
      { src: "/image/Input_5.jpg", label: "Timeline and Delivery Requirements" },
    ],
    outputImages: [
      { src: "/image/3D interior_2.jpg", label: "Interior Render Output 1" },
      { src: "/image/3D interior_3.jpg", label: "Interior Render Output 2" },
      { src: "/image/3D interior_4.jpg", label: "Interior Render Output 3" },
      { src: "/image/3D interior_5.jpg", label: "Interior Render Output 4" },
      { src: "/image/3D interior_6.jpg", label: "Interior Render Output 5" },
      { src: "/image/3D interior_7.jpg", label: "Interior Render Output 6" },
      { src: "/image/3D interior_8.jpg", label: "Interior Render Output 7" },
      { src: "/image/3D interior_9.jpg", label: "Interior Render Output 8" },
      { src: "/image/3D interior_11.jpg", label: "Interior Render Output 9" },
      { src: "/image/3D interior_12.jpg", label: "Interior Render Output 10" },
    ],
    inputPoints: [
      "Basic project brief",
      "Architectural design references",
      "Interior design inputs",
      "Material and finish specifications",
      "Timeline and delivery requirements",
    ],
    outputPoints: [
      "Interior renders",
      "Exterior renders",
      "Full walkthrough video",
      "Multiple draft views for iteration",
      "Final presentation-ready visuals",
    ],
  },
  pain: {
    description:
      "High visual standards, a compressed timeline, and continuous iteration defined the visualization engagement.",
    items: [
      {
        title: "High Visual Quality Expectations",
        text: "The client required photorealistic renders across interiors and exteriors, with consistent quality in lighting, textures, and detailing. Every visual needed to accurately reflect the intended design experience.",
      },
      {
        title: "Compressed Delivery Timeline",
        text: "All deliverables, such as interior renders, exterior renders, and a complete walkthrough, were required within a tight timeframe, leaving little buffer for rework or delays.",
      },
      {
        title: "Design Changes and Iterations",
        text: "Multiple iterations were expected as materials, lighting setups, and viewpoints evolved during the visualization process. Maintaining speed without compromising quality was critical.",
      },
    ],
  },
  approach: {
    description:
      "A dedicated visualization team ran parallel workstreams and structured feedback loops to keep quality and speed aligned.",
    items: [
      {
        title: "Rendering Workflow Optimized for Quality and Speed",
        text: "A streamlined rendering process ensured high-quality outputs while maintaining fast turnaround across all stages.",
      },
      {
        title: "Dedicated Visualization Team",
        text: "A focused team worked exclusively on the project, enabling faster iterations and consistent visual quality.",
      },
      {
        title: "Parallel Development of Visuals",
        text: "Interior views, exterior renders, and walkthrough sequences were developed simultaneously to accelerate delivery.",
      },
      {
        title: "Iterative Feedback Integration",
        text: "Draft renders were shared regularly for review, allowing refinements in lighting, materials, and perspectives before finalization.",
      },
    ],
  },
  execution: {
    tag: "Execution Strategy",
    titleLine1: "A Structured Visualization ",
    titleLine2: "Workflow - Phase by Phase",
    description:
      "The visualization progressed through model preparation, camera and material setup, draft reviews, and final render plus walkthrough production.",
    steps: toExecutionSteps([
      "3D Model Preparation",
      "Camera and View Setup",
      "Lighting and Material Setup",
      "Draft Render Development",
      "Client Feedback and Revisions",
      "Final Render Production",
      "Walkthrough Development",
    ]),
  },
  outcomes: {
    description:
      "Presentation-ready visuals delivered on time with faster iterations, clearer stakeholder communication, and measurable production efficiency.",
    items: [
      {
        title: "On-Time Visualization Delivery",
        text: "Visualization delivered within the client's compressed timeline.",
      },
      {
        title: "Presentation-Ready Render Outputs",
        text: "Renders were used successfully for client presentation and design approval.",
      },
      {
        title: "Effective Design Communication via Walkthroughs",
        text: "Walkthrough enabled clear communication of design intent to stakeholders.",
      },
      {
        title: "Accelerated Iteration Cycles",
        text: "Faster iteration cycles helped finalize visuals efficiently.",
      },
      {
        title: "High-Quality Visual Decision Support",
        text: "High-quality renders supported presentation and pre-construction decision-making.",
      },
      {
        title: "Significant Cost Efficiency",
        text: "45 percent cost savings compared to conventional engagement models.",
      },
      {
        title: "Reduced Revision Cycles",
        text: "60 percent reduction in revision cycles through structured feedback integration.",
      },
      {
        title: "Enhanced Production Efficiency",
        text: "75 percent increase in production efficiency through parallel execution.",
      },
    ],
  },
};

export default function ArchitecturalVisualizationResidentialVillaDubaiPage() {
  return <ProjectCaseStudy content={content} />;
}
