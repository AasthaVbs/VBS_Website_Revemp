import React from "react";

import {
  ZOHO_MEP_DC_WP_IFRAME_ID,
  ZOHO_MEP_DC_WP_IFRAME_SRC,
  ZOHO_MEP_DC_WP_VISIBLE_HEIGHT_PX,
} from "@/utils/zoho-contact-form-embed";

const WhoForIconBim = () => (
  <span className="wb-whofor-icon" aria-hidden>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 3l7 4v10l-7 4-7-4V7l7-4z" stroke="currentColor" strokeWidth="1.8" />
      <path d="M5 7l7 4 7-4M12 11v10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
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

const WhoForIconDesign = () => (
  <span className="wb-whofor-icon" aria-hidden>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 19h18M6 19V9l6-4 6 4v10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 19v-5h4v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

const WhoForIconContractors = () => (
  <span className="wb-whofor-icon" aria-hidden>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 3l8 4v5c0 5-3.4 8.5-8 9-4.6-.5-8-4-8-9V7l8-4z" stroke="currentColor" strokeWidth="1.8" />
      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
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

export const mepDataCentersWhitepaperContent = {
  pathname: "/whitepaper/mep-coordination-data-centers-bim-workflows/",
  seoTitle: "MEP Coordination in Data Centers with Advanced BIM Workflows",
  seoDescription:
    "Solve high-density MEP coordination challenges in data centers using advanced BIM workflows. Improve clash detection, efficiency, and project delivery",
  pageClassName: "wb-page--mep-dc",
  heroTitle: (
    <>
      <span>MEP Coordination in</span> <span>Data Centers</span>: Solving High-Density Challenges with Advanced BIM
      Workflows
    </>
  ),
  heroSubheading:
    "Data centers are highly MEP-intensive environments where power, cooling, cabling, and redundancy systems compete within constrained spaces. This whitepaper explores how advanced BIM coordination helps reduce clashes, minimize rework, accelerate delivery, and improve operational reliability.",
  heroImage: encodeURI("/image/WP-Book-Cover-Mockup-Website (1).jpg"),
  heroImageAlt: "MEP Coordination in Data Centers whitepaper book cover mockup",
  ogImage: encodeURI("/image/WP-Book-Cover-Mockup-Website (1).jpg"),
  downloadPdfUrl: encodeURI("/resources/MEP Coordination in Data Centers-White Paper.pdf"),
  ctaLabel: "Get the Data Center BIM Coordination Guide",
  keyInsightsTitle: "What Advanced BIM Coordination Delivers for High-Density Data Center Projects",
  insightStats: [
    { value: "50%+", label: "Reduction in Data Center MEP Clashes" },
    { value: "37%", label: "Fewer Coordination RFIs Across Dense MEP Systems" },
    { value: "32%", label: "Reduction in Change Orders for Mission-Critical Infrastructure" },
    { value: "20–30%", label: "Labor Savings Through Coordinated BIM Workflows" },
  ],
  whoForTitle: "Built for Teams Delivering High-Density Data Center Infrastructure",
  whoForItems: [
    { title: "BIM and VDC Managers", Icon: WhoForIconBim },
    { title: "MEP Engineers and Consultants", Icon: WhoForIconMep },
    { title: "Data Center Design and Engineering Teams", Icon: WhoForIconDesign },
    { title: "Design-Build Contractors and Project Managers", Icon: WhoForIconContractors },
    { title: "Facility Owners and Operations Teams", Icon: WhoForIconOwners },
  ],
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
  relatedTitle: "Read More on Data Center MEP Coordination",
  relatedResources: [
    {
      type: "Whitepaper",
      title: "The Hidden Cost of Late-Stage MEP Coordination Failures",
      href: "/whitepaper/hidden-cost-of-late-stage-mep-coordination-failures/",
      image: encodeURI("/image/WP-Book-Cover-Mockup.jpg"),
    },
    {
      type: "Blog",
      title: "Fast-Track Data Center Construction: How BIM Reduces Delays by 30–40%",
      href: "/blog/data-center-construction-bim-reduces-delays/",
      image: encodeURI("/image/Data Center MEP BIM Services.jpg"),
    },
    {
      type: "Case Study",
      title: "BIM Coordination for a Large-Scale Mission-Critical Data Center in Malaysia",
      href: "/projects/data-center-bim-mep-coordination-malaysia/",
      image: encodeURI("/image/data-center-bim-mep-coordination-malaysia.png"),
    },
  ],
};
