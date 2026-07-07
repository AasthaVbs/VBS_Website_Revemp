import React from "react";

import {
  ZOHO_HIDDEN_COST_WP_IFRAME_ID,
  ZOHO_HIDDEN_COST_WP_IFRAME_SRC,
  ZOHO_HIDDEN_COST_WP_VISIBLE_HEIGHT_PX,
} from "@/utils/zoho-contact-form-embed";

const WhoForIconGeneralContractors = () => (
  <span className="wb-whofor-icon" aria-hidden>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 3l8 4v5c0 5-3.4 8.5-8 9-4.6-.5-8-4-8-9V7l8-4z" stroke="currentColor" strokeWidth="1.8" />
      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

const WhoForIconMep = () => (
  <span className="wb-whofor-icon" aria-hidden>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 7h12M6 12h12M6 17h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="17" cy="17" r="2.5" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  </span>
);

const WhoForIconBim = () => (
  <span className="wb-whofor-icon" aria-hidden>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 3l7 4v10l-7 4-7-4V7l7-4z" stroke="currentColor" strokeWidth="1.8" />
      <path d="M5 7l7 4 7-4M12 11v10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

const WhoForIconOwners = () => (
  <span className="wb-whofor-icon" aria-hidden>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="9" r="3" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="16" cy="9" r="3" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M3.5 18c.8-2.3 2.9-3.8 5.5-3.8S13.7 15.7 14.5 18M9.5 18c.8-2.3 2.9-3.8 5.5-3.8 2.6 0 4.7 1.5 5.5 3.8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  </span>
);

const WhoForIconArchitects = () => (
  <span className="wb-whofor-icon" aria-hidden>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 19h18M6 19V9l6-4 6 4v10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 19v-5h4v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

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
  ctaLabel: "Get the MEP Coordination Guide",
  keyInsightsLabel: "Key Insight",
  keyInsightsTitle: "Projects Starting Coordination at Design Development (LOD 300+) Can:",
  insightStats: [
    { value: "40%", label: "Less Rework Cost" },
    { value: "25-50%", label: "Cut in RFIs" },
    { value: "20%", label: "Faster Project Delivery" },
    { value: "90%+", label: "Clashes Resolved Pre-Construction" },
  ],
  whoForTitle: "Built for Construction Professionals",
  whoForItems: [
    { title: "General Contractors", Icon: WhoForIconGeneralContractors },
    { title: "MEP Contractors & Fabricators", Icon: WhoForIconMep },
    { title: "BIM / VDC Teams", Icon: WhoForIconBim },
    { title: "Architects & Design Consultants", Icon: WhoForIconArchitects },
    { title: "Project Owners & Developers", Icon: WhoForIconOwners },
  ],
  learnTitle: "What You'll Learn",
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
  relatedTitle: "Read More on MEP Coordination",
  relatedResources: [
    {
      type: "Blog",
      title: "MEP Coordination in BIM: Benefits, Process, and Outsourcing",
      href: "https://www.virtualbuildingstudio.com/blog/mep-coordination-bim-benefits-process-outsourcing/",
      image: encodeURI("/image/mep-coordination-benefit-process.jpg"),
    },
    {
      type: "Blog",
      title: "Top MEP Modeling Mistakes That Trigger Coordination Failures",
      href: "https://www.virtualbuildingstudio.com/blog/top-mep-modeling-mistakes-coordination-failures/",
      image: encodeURI("/image/mep-modeling-coordination-mistakes.jpg"),
    },
    {
      type: "Case Study",
      title: "HVAC BIM Coordination for School Building, Austin",
      href: "/projects/hvac-bim-coordination-for-school-building-austin/",
      image: encodeURI("/image/HVAC-Coordination-2.jpg"),
    },
  ],
};
