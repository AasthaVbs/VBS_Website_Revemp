import React from "react";

import {
  ZOHO_MEP_DC_WP_IFRAME_ID,
  ZOHO_MEP_DC_WP_IFRAME_SRC,
  ZOHO_MEP_DC_WP_VISIBLE_HEIGHT_PX,
} from "@/utils/zoho-contact-form-embed";

export const mepDataCentersWhitepaperContent = {
  pathname: "/whitepaper/mep-coordination-data-centers-bim-workflows/",
  seoTitle: "MEP Coordination in Data Centers with Advanced BIM Workflows",
  seoDescription:
    "Solve high-density MEP coordination challenges in data centers using advanced BIM workflows. Improve clash detection, efficiency, and project delivery",
  pageClassName: "wb-page--mep-dc",
  heroTitle: (
    <>
      <span>MEP Coordination in Data Centers:</span> Solving High-Density Challenges with Advanced BIM
      Workflows
    </>
  ),
  heroSubheading:
    "Data centers are highly MEP-intensive environments where power, cooling, cabling, and redundancy systems compete within constrained spaces. This whitepaper explores how advanced BIM coordination helps reduce clashes, minimize rework, accelerate delivery, and improve operational reliability.",
  heroImage: encodeURI("/image/WP-Book-Cover-Mockup-Website (1).jpg"),
  heroImageAlt: "MEP Coordination in Data Centers whitepaper book cover mockup",
  ogImage: encodeURI("/image/WP-Book-Cover-Mockup-Website (1).jpg"),
  downloadPdfUrl: encodeURI("/resources/MEP Coordination in Data Centers-White Paper.pdf"),
  ctaLabel: "Get the Guide",
  keyInsightsTitle: (
    <>
      What Advanced BIM Coordination Delivers for{" "}
      <span>High-Density Data Center Projects</span>
    </>
  ),
  insightStats: [
    {
      value: "50%+",
      label: "Reduction in Data Center MEP Clashes",
      color: "#D70416",
      labelWidth: 220,
    },
    {
      value: "37%",
      label: "Fewer Coordination RFIs Across Dense MEP Systems",
      color: "#42AA32",
      labelWidth: 220,
    },
    {
      value: "32%",
      label: "Reduction in Change Orders for Mission-Critical Infrastructure",
      color: "#2299D6",
      labelWidth: 258,
    },
    {
      value: "20–30%",
      label: "Labor Savings Through Coordinated BIM Workflows",
      color: "#F0B300",
      labelWidth: 222,
    },
  ],
  learnTitle: (
    <>
      What You <span>Will Learn</span>
    </>
  ),
  learnItems: [
    "Managing High-Density MEP Coordination",
    "Coordinating Tier III & Tier IV Redundancy",
    "Detecting and Resolving Critical MEP Conflicts",
    "Using BIM for Prefabrication and Modular Delivery",
    "Applying 4D BIM for Sequencing",
    "Building a Long-Term Digital Asset",
  ],
  formTitle: "Get the Data Center BIM Coordination Guide",
  formSub: "Fill in your details to access the complete data center BIM coordination guide instantly.",
  zohoIframeId: ZOHO_MEP_DC_WP_IFRAME_ID,
  zohoIframeSrc: ZOHO_MEP_DC_WP_IFRAME_SRC,
  zohoIframeInitialHeightPx: ZOHO_MEP_DC_WP_VISIBLE_HEIGHT_PX,
  zohoHeaderCropPreset: "mep-dc-wp",
  relatedTitle: (
    <>
      Related <span>Articles</span>
    </>
  ),
  relatedDescription: "Recent Insights and Research on AEC Industry",
  relatedResources: [
    {
      type: "White Paper",
      title: "The Hidden Cost of Late-Stage MEP Coordination Failures",
      href: "/whitepaper/hidden-cost-of-late-stage-mep-coordination-failures/",
      image: encodeURI("/image/WP-Book-Cover-Mockup.jpg"),
      excerpt:
        "How delayed coordination leads to costly rework, project delays, and fabrication issues — and how leading teams prevent it early.",
      date: "12 Jan 2026",
    },
  ],
};
