"use client";
// @ts-nocheck

import { ProjectCaseStudy } from "@/components/vbs/projects/case-study";
import { overviewChipIcons, toExecutionSteps } from "@/components/vbs/projects/case-study/helpers";

const content = {
  hero: {
    tag: "Residential Building",
    titleLead: "High-Precision Site Utility Modeling for Large-Scale Residence: ",
    titleAccent: "Caldwell, ID",
    description:
      "LOD 300 BIM modeling for drainage and water systems delivered for a 1,054,670 sq. ft. residential development within tight timelines using limited inputs.",
    image: "/image/High-Precision-Site-Utility-Modeling-for-Large-Scale-Residence-Caldwell,-ID.png",
    imageAlt: "High-precision site utility BIM modeling for large-scale residential development in Caldwell, Idaho",
  },
  overview: {
    image: "/image/Wilison-Output%20(2).jpg",
    imageAlt: "Site utility BIM model output for Caldwell residential development",
    paragraphs: [
      "A site utilities firm needed expert BIM support for a large residential development spanning over 1,054,670 sq. ft. in Caldwell, ID, USA. The project covered complex drainage and water main systems across 251 units.",
      "With only partial inputs and a 10-day deadline, our 3-member team delivered an LOD 300 Revit model. All systems were accurately modeled, slopes were maintained, and files were delivered on time.",
    ],
    chips: [
      { label: "Project Type Residential Building", icon: overviewChipIcons.area },
      { label: "Level of Development LOD 300", icon: overviewChipIcons.lod },
      { label: "Project Area 1,054,670 Sq.Ft.", icon: overviewChipIcons.area },
      { label: "Manpower Used 3 Resources", icon: overviewChipIcons.manpower },
      { label: "Location Caldwell, ID, USA", icon: overviewChipIcons.location },
    ],
  },
  tools: {
    description:
      "Site utility modeling was delivered in Autodesk Revit so outputs aligned with the client's existing BIM workflow.",
    items: [{ name: "Autodesk Revit", icon: "/icon/revit.png" }],
  },
  io: {
    description:
      "From partial architectural references to a complete LOD 300 site utility model with accurate slopes and depths.",
    inputImages: [
      { src: "/image/wilison-Input%20(1).jpg", label: "Site Input 1" },
      { src: "/image/wilison-Input%20(2).jpg", label: "Site Input 2" },
    ],
    outputImages: [
      { src: "/image/Wilison-Output%20(2).jpg", label: "Utility Model Output 1" },
      { src: "/image/Wilison-Output%20(5).jpg", label: "Utility Model Output 2" },
    ],
    inputPoints: [
      "Partial architectural model (one-third shared)",
      "Drainage layout references",
      "Water main depth requirements",
      "Asphalt slope data",
      "10-day delivery schedule",
    ],
    outputPoints: [
      "Site utilities 3D model",
      "Drainage system model",
      "Water main system model",
      "LOD 300 Revit deliverable",
      "Slope-compliant coordinated utilities",
    ],
  },
  pain: {
    description:
      "Limited inputs, strict depth compliance, and a 10-day deadline made accurate site utility modeling especially demanding.",
    items: [
      {
        title: "Tight Submission Deadline",
        text: "The project required full site utility modeling within a strict 10-day turnaround window.",
      },
      {
        title: "Incomplete Design Inputs",
        text: "Only one-third of the architectural model was shared, limiting reference data for accurate modeling.",
      },
      {
        title: "Complex Drainage System Requirements",
        text: "The drainage network included intricate trench systems and catch basin layouts needing careful coordination.",
      },
      {
        title: "Critical Water Main Depth Compliance",
        text: "The water main had to run exactly 48 inches below the top of the asphalt throughout the site.",
      },
      {
        title: "Asphalt Slope Alignment Challenges",
        text: "Maintaining vertical offset while tracking the asphalt slope added significant technical complexity to the model.",
      },
      {
        title: "Limited Model Data",
        text: "Only partial architectural input was available when modeling began.",
      },
      {
        title: "Drainage Network Complexity",
        text: "Modeling interconnected trench and catch basin systems with correct slopes.",
      },
      {
        title: "Deadline Pressure",
        text: "Delivering a complete and accurate model within a 10-day project window.",
      },
    ],
  },
  approach: {
    description:
      "Advanced BIM tools and disciplined modeling standards maintained accuracy despite limited inputs and strict compliance requirements.",
    items: [
      {
        title: "Site Utilities 3D Modeling",
        text: "Built the full site utility network in Revit across 251 residential units using available references and applicable standards.",
      },
      {
        title: "Drainage System Modeling",
        text: "Modeled intricate trench systems and catch basin layouts with correct slopes and coordinated connections.",
      },
      {
        title: "Water Main System Modeling",
        text: "Maintained a consistent 48-inch offset below the asphalt surface while tracking variable site slopes.",
      },
    ],
  },
  execution: {
    tag: "Execution Strategy",
    titleLine1: "Precision Site Utility ",
    titleLine2: "Delivery Under Pressure",
    description:
      "Our team leveraged advanced BIM tools and professional expertise to model complex site utilities with precision. Despite limited inputs, we maintained high accuracy, met compliance requirements, and delivered the model on schedule.",
    steps: toExecutionSteps([
      "Input Review and Scope Confirmation",
      "Drainage Network Modeling",
      "Water Main Depth and Slope Alignment",
      "Utility System Coordination and QC",
      "LOD 300 Model Validation",
      "Final Revit Delivery",
    ]),
  },
  outcomes: {
    description:
      "Accurate site utility modeling delivered on schedule despite partial inputs and demanding depth requirements.",
    items: [
      {
        title: "4x Cost Saving",
        text: "Dedicated offshore modeling support reduced delivery cost versus expanding the internal team for a 10-day sprint.",
      },
      {
        title: "99% On-time Delivery",
        text: "The complete LOD 300 utility model was delivered within the 10-day project window.",
      },
      {
        title: "98% Project Efficiency",
        text: "A focused three-person team maintained modeling momentum without back-and-forth delays.",
      },
      {
        title: "99% Quality Assurance",
        text: "Water main depths, drainage slopes, and catch basin layouts were validated before final submission.",
      },
    ],
  },
};

export default function SiteUtilityModeilngForLargeScaleResidentialBuildingCaldwellPage() {
  return <ProjectCaseStudy content={content} />;
}
