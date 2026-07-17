import React from "react";

import {
  ZOHO_HIDDEN_COST_WP_IFRAME_ID,
  ZOHO_HIDDEN_COST_WP_IFRAME_SRC,
  ZOHO_HIDDEN_COST_WP_VISIBLE_HEIGHT_PX,
} from "@/utils/zoho-contact-form-embed";

export const hiddenCostWhitepaperContent = {
  pathname: "/whitepaper/hidden-cost-of-late-stage-mep-coordination-failures/",
  seoTitle: "The Hidden Cost of Late-Stage MEP Coordination Failures",
  seoDescription:
    "Download the MEP coordination whitepaper to learn how delayed coordination causes rework and how high-performing teams prevent costly clashes early.",
  pageClassName: "wb-page--mep-dc",
  heroTitle: (
    <>
      The Hidden Cost of <span>Late-Stage MEP</span> Coordination Failures
    </>
  ),
  heroSubheading:
    "How delayed coordination leads to costly rework, project delays, and fabrication issues - and how leading teams prevent it early.",
  heroImage: encodeURI("/image/WP-Book-Cover-Mockup.jpg"),
  heroImageAlt: "MEP coordination model showing multi-trade systems in a building ceiling zone",
  ogImage: encodeURI("/image/WP-Book-Cover-Mockup.jpg"),
  ctaLabel: "Get the Guide",
  keyInsightsLabel: "Key Insight",
  keyInsightsTitle: "Projects Starting Coordination at Design Development (LOD 300+) Can:",
  insightStats: [
    { value: "40%", label: "Less Rework Cost", color: "#D70416" },
    { value: "25-50%", label: "Cut in RFIs", color: "#42AA32" },
    { value: "20%", label: "Faster Project Delivery", color: "#2299D6" },
    { value: "90%+", label: "Clashes Resolved Pre-Construction", color: "#F0B300" },
  ],
  learnTitle: (
    <>
      What You&apos;ll <span>Learn</span>
    </>
  ),
  learnItems: [
    "The real cost impact of late-stage MEP coordination",
    "Why projects generate 2,000-10,000 clashes in early stages",
    "Where coordination breaks: ceilings, shafts, and plant rooms",
    "Trade-level conflict strategies - HVAC vs Electrical vs Plumbing",
    "The cost escalation curve from design to construction",
    "How early BIM coordination delivers 5:1 to 10:1 ROI",
    "A real project case study with $4.89M savings through early coordination",
    "A proven multi-trade coordination workflow used by high-performing teams",
  ],
  formTitle: "Get the Full Whitepaper",
  formSub: "Fill in your details to access the complete MEP coordination report instantly.",
  zohoIframeId: ZOHO_HIDDEN_COST_WP_IFRAME_ID,
  zohoIframeSrc: ZOHO_HIDDEN_COST_WP_IFRAME_SRC,
  zohoIframeInitialHeightPx: ZOHO_HIDDEN_COST_WP_VISIBLE_HEIGHT_PX,
  zohoHeaderCropPreset: "hidden-cost-wp",
  relatedTitle: (
    <>
      Related <span>Articles</span>
    </>
  ),
  relatedDescription: "Recent Insights and Research on AEC Industry",
  relatedResources: [
    {
      type: "White Paper",
      title:
        "MEP Coordination in Data Centers: Solving High-Density Challenges with Advanced BIM Workflows",
      href: "/whitepaper/mep-coordination-data-centers-bim-workflows/",
      image: encodeURI("/image/WP-Book-Cover-Mockup-Website (1).jpg"),
      excerpt:
        "Learn how advanced BIM coordination reduces clashes, minimizes rework, and improves operational reliability in mission-critical data center environments.",
      date: "12 Jan 2026",
    },
  ],
};
