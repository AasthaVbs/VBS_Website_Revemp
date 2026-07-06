"use client";
// @ts-nocheck

import React, { useEffect, useState } from "react";
import { Container, Col, Row, Image } from "react-bootstrap";
import { ensureNimbusBookingScript, openBookMeetingModal } from "@/utils/nimbus-booking";

const ROOT = "hvac-case";

const CS_IMG = {
  /** Hero — 3D HVAC coordination visualization */
  ductPipe3d: encodeURI("/image/HVAC-Coordination (1).png"),
  inputOutputDiagram: encodeURI("/image/Input-Output-MEP-New.svg"),
  ioInput1: encodeURI("/image/AISDWootenElementarySchool Case study-30.jpg"),
  ioInput2: encodeURI("/image/AISDWootenElementarySchool Case study-31.jpg"),
  ioOutput1: encodeURI("/image/AISDWootenElementarySchool Case study-41.jpg"),
  ioOutput2: encodeURI("/image/AISDWootenElementarySchool Case study-42.jpg"),
  executionStrategy2: encodeURI("/image/Execution Strategy-MEP-NEW.svg"),
};

const TOOL_ICONS = {
  revit: "/icon/revit.png",
  navisworks: "/icon/navisworks.png",
  autocad: "/icon/autocad.png",
};

const META_ITEMS = [
  { icon: "building-2", label: "Project Type", value: "School Building" },
  { icon: "layers", label: "Level of Development", value: "LOD 400" },
  { icon: "users", label: "Manpower Used", value: "5 Resources" },
  { icon: "map-pin", label: "Location", value: "Austin, TX" },
];

const PAIN_LEFT = [
  {
    caseStudyIcon: "unresolvedClashes",
    title: "Unresolved Cross-disciplinary Clashes",
    text: "Continuous conflicts between architectural, structural, and MEP systems were stalling coordination and threatening the construction schedule.",
  },
  {
    caseStudyIcon: "strictDeadline",
    title: "Strict Submission Deadline",
    text: "Tight project timelines combined with inefficient cross-team communication made meeting delivery milestones increasingly difficult.",
  },
  {
    caseStudyIcon: "mechanicalClearanceGap",
    title: "Mechanical Equipment Clearance Gap",
    text: "Insufficient clearance planning around mechanical equipment created risks for accurate installation and future system accessibility.",
  },
];

const PAIN_RIGHT = [
  {
    caseStudyIcon: "inadequateMepDocs",
    title: "Inadequate MEP Documentation",
    text: "Poorly structured MEP documentation was making it difficult to support effective long-term facility operation and maintenance.",
  },
  {
    caseStudyIcon: "lackVisibility",
    title: "Lack of System Visibility",
    text: "Limited cross-discipline insight led to late-stage discoveries, causing costly adjustments that proactive coordination could have prevented.",
  },
  {
    caseStudyIcon: "lod400Model",
    title: "Needed Fully Coordinated LOD 400 Model",
    text: "Project demanded a clash-free LOD 400 model with accurate documentation, ready for direct construction execution on time.",
  },
];

const SCOPE_ITEMS = [
  { caseStudyIcon: "hvacSystemModeling", title: "HVAC System Modeling" },
  { caseStudyIcon: "mechanicalSystemModeling", title: "Mechanical System Modeling" },
  { caseStudyIcon: "clashDetection", title: "Clash Detection & Coordination" },
  { caseStudyIcon: "constructionDocs", title: "Construction Documentation Support" },
  { caseStudyIcon: "coordinationMeetings", title: "Coordination Meeting Support" },
];

const CHALLENGE_LEFT = [
  {
    caseStudyIcon: "trussCoordination",
    title: "Truss Coordination Constraints",
    text: "Routing HVAC systems without interfering with structural truss zones required precise spatial planning and iterative clash reviews at every routing decision point.",
  },
  {
    caseStudyIcon: "equipmentClearance",
    title: "Equipment Clearance Management",
    text: "Ensuring proper maintenance and installation clearance for all mechanical equipment to safeguard long-term system operability and safe installation.",
  },
  {
    caseStudyIcon: "frequentDesignChanges",
    title: "Frequent Design Changes",
    text: "Adapting models quickly to ongoing architectural and structural revisions without disrupting coordination progress or compromising model accuracy.",
  },
];

const CHALLENGE_RIGHT = [
  {
    caseStudyIcon: "tightTimeline",
    title: "Tight Timeline Pressure",
    text: "Delivering coordinated outputs within strict submission deadlines while maintaining full LOD 400 accuracy across all 25 units.",
  },
  {
    caseStudyIcon: "multiDisciplinary",
    title: "Multi-Disciplinary Coordination",
    text: "Resolving conflicts across architectural, structural, and MEP systems efficiently required robust cross-team communication, systematic issue tracking, and structured coordination meetings to keep all parties aligned throughout the project lifecycle.",
  },
];

const IMPACT_ITEMS = [
  { big: "4", suffix: "×", label: "Cost Saving" },
  { big: "99", suffix: "%", label: "On-time Delivery" },
  { big: "90", suffix: "%", label: "Project Efficiency" },
  { big: "99", suffix: "%", label: "Quality Assurance" },
  { big: "3,000", suffix: "", label: "Clashes Detected & Resolved" },
];

const HVAC_TOOLS_TILES = [
  { icon: TOOL_ICONS.revit, title: "Revit" },
  { icon: TOOL_ICONS.navisworks, title: "Navisworks" },
  // { icon: TOOL_ICONS.autocad, title: "AutoCAD" },
];

export function Icon({ name }) {
  return <i data-lucide={name} aria-hidden="true" />;
}

/** VBS case-study icons (vbs-icons.html) — 28×28, viewBox 0 0 26 26 */
function CaseStudyVbsIcon({ variant, className = "" }) {
  const svgProps = {
    width: 28,
    height: 28,
    viewBox: "0 0 26 26",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: `hvac-case-svg ${className}`.trim(),
    "aria-hidden": true,
  };

  switch (variant) {
    case "unresolvedClashes":
      return (
        <svg {...svgProps}>
          <rect x="2" y="2" width="10" height="10" rx="2" stroke="#D70416" strokeWidth="1.6" />
          <rect x="14" y="14" width="10" height="10" rx="2" stroke="#D70416" strokeWidth="1.6" />
          <line x1="16" y1="10" x2="10" y2="16" stroke="#111" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="10" y1="10" x2="16" y2="16" stroke="#111" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "strictDeadline":
      return (
        <svg {...svgProps}>
          <rect x="3" y="5" width="20" height="18" rx="2" stroke="#D70416" strokeWidth="1.6" />
          <line x1="3" y1="11" x2="23" y2="11" stroke="#D70416" strokeWidth="1.4" />
          <line x1="8" y1="3" x2="8" y2="8" stroke="#111" strokeWidth="1.6" strokeLinecap="round" />
          <line x1="18" y1="3" x2="18" y2="8" stroke="#111" strokeWidth="1.6" strokeLinecap="round" />
          <circle cx="13" cy="17" r="3.5" stroke="#D70416" strokeWidth="1.4" />
          <line x1="13" y1="14.5" x2="13" y2="17" stroke="#D70416" strokeWidth="1.3" strokeLinecap="round" />
          <line x1="13" y1="17" x2="15" y2="18.2" stroke="#D70416" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
      );
    case "mechanicalClearanceGap":
      return (
        <svg {...svgProps}>
          <circle cx="13" cy="13" r="5" stroke="#D70416" strokeWidth="1.6" />
          <path d="M13 8V6M13 20v-2M8 13H6M20 13h-2" stroke="#111" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="6" y1="17" x2="20" y2="17" stroke="#D70416" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2" />
          <line x1="13" y1="17" x2="13" y2="20" stroke="#D70416" strokeWidth="1.4" strokeLinecap="round" />
          <line x1="10" y1="20" x2="16" y2="20" stroke="#D70416" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      );
    case "inadequateMepDocs":
      return (
        <svg {...svgProps}>
          <path d="M6 3h9l5 5v15H6V3z" stroke="#D70416" strokeWidth="1.6" strokeLinejoin="round" />
          <path d="M15 3v5h5" stroke="#D70416" strokeWidth="1.4" />
          <line x1="9" y1="12" x2="17" y2="12" stroke="#111" strokeWidth="1.4" strokeLinecap="round" />
          <line x1="9" y1="15" x2="14" y2="15" stroke="#111" strokeWidth="1.4" strokeLinecap="round" />
          <line x1="9" y1="18" x2="12" y2="18" stroke="#D70416" strokeWidth="1.4" strokeLinecap="round" strokeDasharray="1.5 1.5" />
          <line x1="14" y1="18" x2="17" y2="18" stroke="#D70416" strokeWidth="1.4" strokeLinecap="round" strokeDasharray="1.5 1.5" />
          <circle cx="20" cy="20" r="4" fill="#D70416" />
          <line x1="20" y1="18" x2="20" y2="20.5" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
          <circle cx="20" cy="22" r="0.6" fill="white" />
        </svg>
      );
    case "lackVisibility":
      return (
        <svg {...svgProps}>
          <path d="M3 13c2.5-6 17.5-6 20 0" stroke="#D70416" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M3 13c2.5 6 17.5 6 20 0" stroke="#D70416" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="13" cy="13" r="3.5" stroke="#111" strokeWidth="1.5" />
          <line x1="4" y1="4" x2="22" y2="22" stroke="#D70416" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "lod400Model":
      return (
        <svg {...svgProps}>
          <rect x="4" y="3" width="12" height="16" rx="1.5" stroke="#D70416" strokeWidth="1.5" />
          <rect x="10" y="3" width="12" height="16" rx="1.5" stroke="#111" strokeWidth="1.5" strokeDasharray="2 1.5" />
          <circle cx="19" cy="19" r="5" fill="#D70416" />
          <polyline
            points="16.5,19 18.3,21 22,16.5"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      );
    case "hvacSystemModeling":
      return (
        <svg {...svgProps}>
          <rect x="3" y="8" width="20" height="5" rx="1.5" stroke="#D70416" strokeWidth="1.5" />
          <rect x="6" y="13" width="14" height="4" rx="1" stroke="#111" strokeWidth="1.4" />
          <line x1="9" y1="17" x2="9" y2="21" stroke="#D70416" strokeWidth="1.4" strokeLinecap="round" />
          <line x1="17" y1="17" x2="17" y2="21" stroke="#D70416" strokeWidth="1.4" strokeLinecap="round" />
          <line x1="7" y1="21" x2="11" y2="21" stroke="#D70416" strokeWidth="1.4" strokeLinecap="round" />
          <line x1="15" y1="21" x2="19" y2="21" stroke="#D70416" strokeWidth="1.4" strokeLinecap="round" />
          <line x1="8" y1="8" x2="8" y2="5" stroke="#111" strokeWidth="1.4" strokeLinecap="round" />
          <line x1="18" y1="8" x2="18" y2="5" stroke="#111" strokeWidth="1.4" strokeLinecap="round" />
          <line x1="6" y1="5" x2="20" y2="5" stroke="#111" strokeWidth="1.4" strokeLinecap="round" />
          <line x1="13" y1="8" x2="13" y2="5" stroke="#111" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      );
    case "mechanicalSystemModeling":
      return (
        <svg {...svgProps}>
          <circle cx="13" cy="13" r="3" stroke="#D70416" strokeWidth="1.6" />
          <path d="M13 4v3M13 19v3M4 13h3M19 13h3" stroke="#D70416" strokeWidth="1.5" strokeLinecap="round" />
          <path
            d="M6.7 6.7l2.1 2.1M17.2 17.2l2.1 2.1M19.3 6.7l-2.1 2.1M8.8 17.2l-2.1 2.1"
            stroke="#111"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          <circle cx="13" cy="13" r="6.5" stroke="#111" strokeWidth="1.2" strokeDasharray="3 2" />
        </svg>
      );
    case "clashDetection":
      return (
        <svg {...svgProps}>
          <circle cx="9" cy="13" r="6" stroke="#D70416" strokeWidth="1.5" />
          <circle cx="17" cy="13" r="6" stroke="#111" strokeWidth="1.5" />
          <circle cx="21.5" cy="6.5" r="3" fill="#D70416" />
          <line x1="20" y1="6.5" x2="23" y2="6.5" stroke="white" strokeWidth="1.3" strokeLinecap="round" />
          <line x1="21.5" y1="5" x2="21.5" y2="8" stroke="white" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
      );
    case "constructionDocs":
      return (
        <svg {...svgProps}>
          <path d="M6 3h10l5 5v15H6V3z" stroke="#D70416" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M16 3v5h5" stroke="#D70416" strokeWidth="1.3" />
          <line x1="9" y1="13" x2="17" y2="13" stroke="#111" strokeWidth="1.3" strokeLinecap="round" />
          <line x1="9" y1="16" x2="17" y2="16" stroke="#111" strokeWidth="1.3" strokeLinecap="round" />
          <line x1="9" y1="19" x2="14" y2="19" stroke="#111" strokeWidth="1.3" strokeLinecap="round" />
          <circle cx="20" cy="20" r="4" fill="white" stroke="#D70416" strokeWidth="1.4" />
          <line x1="17.5" y1="20" x2="22.5" y2="20" stroke="#D70416" strokeWidth="1.3" strokeLinecap="round" />
          <line x1="20" y1="17.5" x2="20" y2="22.5" stroke="#D70416" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
      );
    case "coordinationMeetings":
      return (
        <svg {...svgProps}>
          <circle cx="8" cy="8" r="2.5" stroke="#D70416" strokeWidth="1.5" />
          <circle cx="18" cy="8" r="2.5" stroke="#D70416" strokeWidth="1.5" />
          <circle cx="13" cy="17" r="2.5" stroke="#111" strokeWidth="1.5" />
          <path d="M5.5 14c0-3 5.5-3 5.5 0" stroke="#D70416" strokeWidth="1.3" strokeLinecap="round" />
          <path d="M15 14c0-3 5.5-3 5.5 0" stroke="#D70416" strokeWidth="1.3" strokeLinecap="round" />
          <line x1="8" y1="10.5" x2="11.5" y2="14.5" stroke="#111" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="1.5 1.5" />
          <line x1="18" y1="10.5" x2="14.5" y2="14.5" stroke="#111" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="1.5 1.5" />
        </svg>
      );
    case "trussCoordination":
      return (
        <svg {...svgProps}>
          <line x1="2" y1="18" x2="13" y2="8" stroke="#D70416" strokeWidth="1.6" strokeLinecap="round" />
          <line x1="13" y1="8" x2="24" y2="18" stroke="#D70416" strokeWidth="1.6" strokeLinecap="round" />
          <line x1="2" y1="18" x2="24" y2="18" stroke="#111" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="5" y1="18" x2="7.5" y2="13" stroke="#111" strokeWidth="1.3" strokeLinecap="round" />
          <line x1="7.5" y1="13" x2="10" y2="18" stroke="#111" strokeWidth="1.3" strokeLinecap="round" />
          <line x1="13" y1="8" x2="13" y2="22" stroke="#D70416" strokeWidth="1.3" strokeDasharray="2 1.5" />
          <rect x="10.5" y="19.5" width="5" height="3" rx="0.5" fill="#D70416" />
        </svg>
      );
    case "equipmentClearance":
      return (
        <svg {...svgProps}>
          <circle cx="13" cy="13" r="4.5" stroke="#D70416" strokeWidth="1.6" />
          <circle cx="13" cy="13" r="7.5" stroke="#111" strokeWidth="1.2" strokeDasharray="2.5 2" />
          <line x1="13" y1="4" x2="13" y2="2" stroke="#111" strokeWidth="1.4" strokeLinecap="round" />
          <line x1="22" y1="13" x2="24" y2="13" stroke="#111" strokeWidth="1.4" strokeLinecap="round" />
          <line x1="13" y1="22" x2="13" y2="24" stroke="#111" strokeWidth="1.4" strokeLinecap="round" />
          <line x1="4" y1="13" x2="2" y2="13" stroke="#111" strokeWidth="1.4" strokeLinecap="round" />
          <line x1="13" y1="5.5" x2="13" y2="8.5" stroke="#D70416" strokeWidth="1.4" strokeLinecap="round" />
          <line x1="13" y1="20.5" x2="13" y2="17.5" stroke="#D70416" strokeWidth="1.4" strokeLinecap="round" />
          <polyline points="11,7 13,5 15,7" fill="none" stroke="#D70416" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          <polyline points="11,19 13,21 15,19" fill="none" stroke="#D70416" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "frequentDesignChanges":
      return (
        <svg {...svgProps}>
          <path d="M5 13a8 8 0 0 1 13.66-5.66" stroke="#D70416" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M21 13a8 8 0 0 1-13.66 5.66" stroke="#111" strokeWidth="1.5" strokeLinecap="round" />
          <polyline points="19,4 19,7.5 22.5,7.5" fill="none" stroke="#D70416" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          <polyline points="7,22 7,18.5 3.5,18.5" fill="none" stroke="#111" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="9" y1="11" x2="17" y2="11" stroke="#D70416" strokeWidth="1.3" strokeLinecap="round" strokeDasharray="1.5 1.5" />
          <line x1="9" y1="14" x2="17" y2="14" stroke="#D70416" strokeWidth="1.3" strokeLinecap="round" strokeDasharray="1.5 1.5" />
        </svg>
      );
    case "tightTimeline":
      return (
        <svg {...svgProps}>
          <circle cx="13" cy="13" r="9" stroke="#D70416" strokeWidth="1.5" />
          <line x1="13" y1="7" x2="13" y2="13" stroke="#111" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="13" y1="13" x2="17" y2="16" stroke="#D70416" strokeWidth="1.6" strokeLinecap="round" />
          <circle cx="13" cy="13" r="1.2" fill="#D70416" />
        </svg>
      );
    case "multiDisciplinary":
      return (
        <svg {...svgProps}>
          <circle cx="13" cy="13" r="2.5" fill="#D70416" />
          <circle cx="5" cy="8" r="2" stroke="#D70416" strokeWidth="1.4" />
          <circle cx="21" cy="8" r="2" stroke="#D70416" strokeWidth="1.4" />
          <circle cx="5" cy="18" r="2" stroke="#111" strokeWidth="1.4" />
          <circle cx="21" cy="18" r="2" stroke="#111" strokeWidth="1.4" />
          <line x1="7" y1="8.6" x2="10.8" y2="11.5" stroke="#D70416" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="19" y1="8.6" x2="15.2" y2="11.5" stroke="#D70416" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="7" y1="17.4" x2="10.8" y2="14.5" stroke="#111" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="19" y1="17.4" x2="15.2" y2="14.5" stroke="#111" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="5" y1="10" x2="5" y2="16" stroke="#111" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="1.5 1.5" />
          <line x1="21" y1="10" x2="21" y2="16" stroke="#111" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="1.5 1.5" />
        </svg>
      );
    default:
      return null;
  }
}

export function Reveal({ children, className = "", delayClass = "" }) {
  return <div className={`r ${delayClass} ${className}`.trim()}>{children}</div>;
}

function WhyChallengeCard({ item }) {
  if (!item) {
    return <div className="hvac-challenge-pair-slot" aria-hidden="true" />;
  }
  return (
    <div className="why-row">
      <div className="why-ico">
        <CaseStudyVbsIcon variant={item.caseStudyIcon} />
      </div>
      <div className="why-info">
        <h4>{item.title}</h4>
        <p className="text-secondary">{item.text}</p>
      </div>
    </div>
  );
}

function ChallengePairedGrid({ leftItems, rightItems }) {
  const n = Math.max(leftItems.length, rightItems.length);
  const rows = Array.from({ length: n }, (_, i) => ({
    left: leftItems[i],
    right: rightItems[i],
  }));

  return (
    <div className="hvac-challenge-grid hvac-challenge-grid--paired">
      {rows.map((row, i) => (
        <div key={i} className="hvac-challenge-pair">
          <WhyChallengeCard item={row.left} />
          <WhyChallengeCard item={row.right} />
        </div>
      ))}
    </div>
  );
}

function HvacCaseIoSection() {
  const [activePreviewMode, setActivePreviewMode] = useState(null);
  const inputImages = [CS_IMG.ioInput1, CS_IMG.ioInput2];
  const outputImages = [CS_IMG.ioOutput1, CS_IMG.ioOutput2];
  const closePreviewOverlay = () => setActivePreviewMode(null);

  useEffect(() => {
    if (!activePreviewMode || typeof document === "undefined") return;
    const onKey = (e) => {
      if (e.key === "Escape") setActivePreviewMode(null);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [activePreviewMode]);

  return (
    <section className="hvac-sec">
      <div className="wrap">
        <header className="hvac-sec__head sec-head sec-head--center r">

          <h2 className="sec-t">Solution Delivered</h2>

        </header>
        <div className="hvac-io-body r d1">
          <Container className="hvac-io-container px-0 px-md-3 px-lg-4">
            <div className="case-custom-io-block">
              <div className="case-custom-io-main-image-wrap">
                <Image
                  src={CS_IMG.inputOutputDiagram}
                  className="img-fluid text-center d-block mx-auto hvac-io-main-diagram"
                  alt="Input and output overview"
                />
              </div>
              <div className="case-custom-io-button-grid">
                <div className="case-custom-io-side case-custom-io-card">
                  <div className="case-custom-io-thumb-grid">
                    {inputImages.map((src, idx) => (
                      <Image
                        key={`hvac-io-in-${idx}`}
                        src={src}
                        className="case-custom-io-thumb-image"
                        alt={`Project input example ${idx + 1}`}
                      />
                    ))}
                  </div>
                  <button
                    type="button"
                    className="btn case-custom-io-button case-custom-io-button-pill"
                    onClick={() => setActivePreviewMode("input")}
                  >
                    <i className="far fa-eye me-2" aria-hidden="true" />
                    View Inputs
                  </button>
                </div>
                <div className="case-custom-io-side case-custom-io-card">
                  <div className="case-custom-io-thumb-grid">
                    {outputImages.map((src, idx) => (
                      <Image
                        key={`hvac-io-out-${idx}`}
                        src={src}
                        className="case-custom-io-thumb-image"
                        alt={`Project output example ${idx + 1}`}
                      />
                    ))}
                  </div>
                  <button
                    type="button"
                    className="btn case-custom-io-button case-custom-io-button-pill"
                    onClick={() => setActivePreviewMode("output")}
                  >
                    <i className="far fa-eye me-2" aria-hidden="true" />
                    View Outputs
                  </button>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
      {activePreviewMode && (activePreviewMode === "input" ? inputImages : outputImages).length > 0 && (
        <div
          className="case-custom-io-overlay"
          role="dialog"
          aria-modal="true"
          onClick={closePreviewOverlay}
        >
          <div className="case-custom-io-overlay-inner" onClick={(e) => e.stopPropagation()} role="document">
            <button
              type="button"
              className="case-custom-io-overlay-close"
              onClick={closePreviewOverlay}
              aria-label="Close preview"
            >
              <i className="fas fa-times" aria-hidden="true" />
            </button>
            <h4 className="case-custom-io-overlay-title">
              {activePreviewMode === "input" ? "The Input Drawings We Got" : "The Output Drawings We Gave"}
            </h4>
            <div className="case-custom-io-overlay-grid">
              {(activePreviewMode === "input" ? inputImages : outputImages).map((src, idx) => (
                <Image
                  key={`${activePreviewMode}-hvac-${idx}`}
                  src={src}
                  className="case-custom-io-overlay-image"
                  alt={`${activePreviewMode} preview ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function HvacCaseToolsSection() {
  return (
    <div className="singapore-case-theme">
      <section className="hvac-sec hvac-tools-sec">
        <Container>
          <header className="hvac-tools-head text-center mx-auto r">

            <h2 className="hvac-tools-title">Tools Used</h2>
          </header>
          <Row lg={3} md={2} xs={1} className="g-4 g-lg-5 justify-content-center case-custom-tools-features-row">
            {HVAC_TOOLS_TILES.map((feature) => (
              <Col key={feature.title}>
                <div className="text-center h-100 p-4 p-lg-5 bg-white border rounded-3 shadow-sm hvac-tools-tile">
                  <Image src={feature.icon} width={56} height={56} className="mb-2" alt="" />
                  <h4 className="mb-0 text-dark">{feature.title}</h4>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
}

function HvacBimCoordinationCaseStudyAustin() {
  useEffect(() => {
    ensureNimbusBookingScript().catch(() => {});

    const runLucide = () => {
      if (typeof window !== "undefined" && window.lucide?.createIcons) {
        window.lucide.createIcons();
      }
    };
    runLucide();
    const iconTimer = setTimeout(runLucide, 200);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("on");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    document.querySelectorAll(`.${ROOT} .r`).forEach((el) => observer.observe(el));

    return () => {
      clearTimeout(iconTimer);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <main className={ROOT}>
        <style>{HVAC_CASE_PAGE_STYLES}</style>

        <section className="hvac-hero">
          <div className="wrap">
            <div className="hvac-hero__top">
              <Reveal>
                <h1 className="hvac-hero__title fw-bold text-dark">
                  <span className="acc">Clash-free HVAC Coordination</span>: Multi-Unit School Project in Austin, TX
                </h1>
                <p className="hero-sub lead text-secondary">Delivered fully coordinated HVAC and hydronic systems, resolving all clashes pre-construction to ensure seamless installation and on-time project delivery.</p>
              </Reveal>
              <Reveal delayClass="d1">
                <div className="hero-img-wrap">
                  <img
                    src={CS_IMG.ductPipe3d}
                    alt="HVAC BIM coordination — 3D mechanical systems for the Austin school project"
                  />
                  <div className="hero-img-overlay" />
                </div>
              </Reveal>
            </div>
            <Reveal delayClass="d2">
              <div className="meta-strip" role="list">
                {META_ITEMS.map((m) => (
                  <div key={m.label} className="m-cell" role="listitem">
                    <div className="m-ico-circle">
                      <Icon name={m.icon} />
                    </div>
                    <span className="m-lbl text-secondary">{m.label}</span>
                    <div className="m-val">{m.value}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="hvac-sec">
          <div className="wrap">
            <header className="hvac-sec__head r">
              <h2 className="sec-t">Project Overview</h2>
            </header>
            <Reveal delayClass="d1">
              <div className="ov-body">
                <p className="text-secondary">
                  When an MEPF firm needed reliable BIM expertise for a 65,000 sq. ft. educational campus in Austin, TX, they turned to us. With 25 mixed-story units ranging from 800 to 1,500 sq. ft., the project demanded high-precision LOD 400 coordination across HVAC and Mechanical Piping systems. We ensured every system was precisely coordinated, each clashes were resolved, and the models were delivered on schedule.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="hvac-sec">
          <div className="wrap">
            <header className="hvac-sec__head r">
              <h2 className="sec-t">Why the Client Needed Help</h2>
            </header>
            <Reveal delayClass="d1">
              <ChallengePairedGrid leftItems={PAIN_LEFT} rightItems={PAIN_RIGHT} />
            </Reveal>
          </div>
        </section>

        <section className="hvac-sec">
          <div className="wrap">
            <header className="hvac-sec__head r">
              <h2 className="sec-t">Scope of Work</h2>
            </header>
            <Reveal delayClass="d1">
              <div className="scope-row-5" role="list">
                {SCOPE_ITEMS.map((s) => (
                  <div key={s.title} className="scope-box" role="listitem">
                    <div className="scope-box-ico">
                      <CaseStudyVbsIcon variant={s.caseStudyIcon} className="hvac-case-svg--scope" />
                    </div>
                    <p className="scope-box-title">{s.title}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="hvac-sec">
          <div className="wrap">
            <header className="hvac-sec__head r">
              <h2 className="sec-t">Key Project Challenges</h2>
            </header>
            <Reveal delayClass="d1">
              <ChallengePairedGrid leftItems={CHALLENGE_LEFT} rightItems={CHALLENGE_RIGHT} />
            </Reveal>
          </div>
        </section>

        <section className="hvac-sec">
          <div className="wrap">
            <header className="hvac-sec__head sec-head sec-head--center r">

              <h2 className="sec-t">Our Project Execution Strategy</h2>
              <p className="text-secondary">
                Our team followed a structured BIM coordination workflow using Revit for LOD 400 modeling and Navisworks for clash detection. We ensured proactive coordination, real-time updates, and precise modeling to ensure seamless integration of HVAC and piping systems.
              </p>
            </header>
            <Reveal delayClass="d1">
              <div className="exec-strat-diagram">
                <img src={CS_IMG.executionStrategy2} alt="Project execution strategy — BIM coordination workflow from model setup through delivery" />
              </div>
            </Reveal>
          </div>
        </section>

        <HvacCaseIoSection />

        <section className="hvac-sec">
          <div className="wrap">
            <header className="hvac-sec__head r">
              <h2 className="sec-t">Business Impact</h2>
              <p className="text-secondary">
                Quantifiable outcomes delivered through precision BIM coordination and proactive pre-construction clash management.
              </p>
            </header>
            <Reveal delayClass="d1">
              <div className="imp-bar" role="list">
                {IMPACT_ITEMS.map((it) => (
                  <div key={it.label} className="imp-c" role="listitem">
                    <div className="imp-big">
                      {it.big}
                      {it.suffix ? <span className="imp-big-suffix">{it.suffix}</span> : null}
                    </div>
                    <div className="imp-lbl">{it.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <HvacCaseToolsSection />

        <section className="hvac-sec hvac-sec--testi">
          <div className="wrap">
            <header className="hvac-sec__head sec-head sec-head--center r">
              <h2 className="sec-t">Client Testimonial</h2>
            </header>
            <div className="testi-sec">
              <Reveal delayClass="d1" className="testi-inner">
                <p className="text-secondary">
                  &quot;Working with Virtual Building Studio on our school building project was an outstanding experience. Their HVAC &amp; Mechanical Piping BIM work was accurate, timely, and instrumental in helping our construction team avoid conflicts and stay on schedule. We truly appreciate their dedication and highly recommend their services.&quot;
                </p>

                <div className="testi-author testi-author--brand">
                  — Vice President, MEP &nbsp;·&nbsp; MEPF Firm · Austin, TX
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="hvac-sec hvac-sec--cta" id="cta" aria-labelledby="hvac-cta-heading">
          <div className="wrap">
            <Reveal>
              <div className="">
                <div className="cta-inner">
                  <h2 id="hvac-cta-heading" className="cta-h text-dark">
                    Ready to eliminate clashes before they hit the site?
                  </h2>
                  <button
                    type="button"
                    onClick={openBookMeetingModal}
                    className="btn btn-primary rounded-pill px-4 py-3 cta-btn text-decoration-none d-inline-flex align-items-center justify-content-center gap-2"
                  >
                    Let&apos;s coordinate your project
                    <Icon name="arrow-right" />
                  </button>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      </>
  );
}

/* All page styles scoped to .hvac-case — single block at file bottom */
const S = `.${ROOT}`;
export const HVAC_CASE_PAGE_STYLES = `
${S}, ${S} * , ${S} *::before, ${S} *::after { box-sizing: border-box; }
${S} {
  --hvac-red: #D70416;
  --hvac-black: #0a0a0a;
  --hvac-white: #fff;
  --hvac-off: #f7f7f7;
  --hvac-border: #e8eaef;
  --hvac-border-soft: #f0f2f5;
  --hvac-muted: #6b7280;
  --hvac-max: 1200px;
  --hvac-radius: 12px;
  --hvac-radius-lg: 14px;
  /* One vertical rhythm: section padding (≈32px / spacing-8) + head→content gap */
  --hvac-py: 2rem;
  --hvac-py-md: clamp(2.75rem, 7vw, 4.25rem);
  --hvac-head-gap: 1.5rem;
  --hvac-stack: 1rem;
  background: var(--hvac-white);
  color: var(--hvac-black);
  padding-top: 0;
  overflow-x: hidden;
}
${S} .wrap {
  max-width: var(--hvac-max);
  margin: 0 auto;
  padding-left: clamp(1rem, 4vw, 2.5rem);
  padding-right: clamp(1rem, 4vw, 2.5rem);
}
${S} [data-lucide] {
  display: inline-block;
  vertical-align: middle;
  stroke: currentColor;
  fill: none;
  stroke-width: 1.8;
  stroke-linecap: round;
  stroke-linejoin: round;
}

/* Sections: equal vertical padding only */
${S} .hvac-hero {
  background: var(--hvac-white);
  padding: var(--hvac-py-md) 0;
}
${S} .hvac-sec {
  padding: var(--hvac-py-md) 0;
  background: var(--hvac-white);
}
${S} .hvac-sec--testi {
  background: var(--hvac-white);
}
${S} .singapore-case-theme {
  background: var(--hvac-white);
}
${S} .hvac-sec--cta {
  padding: var(--hvac-py-md) 0 calc(var(--hvac-py-md) + 0.5rem);
  background: var(--hvac-white);
}

/* Title block → content: same gap everywhere */
${S} .hvac-sec__head {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 0 0 var(--hvac-head-gap) 0;
  max-width: none;
}
${S} .hvac-sec__head.sec-head--center {
  align-items: center;
  text-align: center;
}
${S} .hvac-sec__head.sec-head--center .sec-ey {
  justify-content: center;
}
${S} .hvac-sec__head.sec-head--center .sec-t::after {
  margin-left: auto;
  margin-right: auto;
}
${S} .hvac-sec__head .sec-t {
  display: inline-block;
  margin: 0;
  font-weight: 700;
  color: #1f252b;
  letter-spacing: -0.02em;
}
${S} .hvac-sec__head .sec-t::after {
  content: "";
  display: block;
  width: 200px;
  height: 3px;
  background: var(--hvac-red);
  margin-top: 0.65rem;
  border-radius: 2px;
}
${S} .hvac-sec__head p {
  margin: 0;
  margin-top: 0.25rem;
}
${S} .hvac-sec__head .sec-ey {
  text-transform: uppercase;
  color: var(--hvac-red);
  margin: 0;
  display: flex;
  align-items: center;
  gap: 8px;
}
${S} .hvac-sec__head .sec-ey::before {
  content: attr(data-n);
  color: var(--hvac-muted);
}
${S} .hvac-sec__head .sec-ey [data-lucide] { width: 13px; height: 13px; }

/* Hero: title column top-aligned, image column stays bottom-aligned (same visual as before for the img) */
${S} .hvac-hero__top {
  display: grid;
  grid-template-columns: 1fr minmax(280px, 500px);
  gap: clamp(1.5rem, 4vw, 4rem);
  align-items: end;
}
${S} .hvac-hero__top > div:first-child {
  align-self: start;
}
${S} .hvac-hero__top > div:last-child {
  align-self: end;
}
${S} .hvac-hero__title {
  margin: 0 0 26px 0;
  font-size: clamp(1.35rem, 4.2vw, 2.5rem);
  line-height: 1.18;
  word-wrap: break-word;
  overflow-wrap: anywhere;
}
${S} .hvac-hero__title .acc { color: var(--hvac-red); }
${S} .hero-sub {
  margin: 0;
  max-width: none;
  font-size: clamp(0.9375rem, 2.4vw, 1.25rem);
  line-height: 1.55;
}
${S} .hero-img-wrap {
  position: relative;
  overflow: hidden;
  border-radius: var(--hvac-radius-lg);

}
${S} .hero-img-wrap img {
  width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
}
${S} .hero-img-overlay {
  position: absolute;
  inset: 0;
  
}
${S} .meta-strip {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: var(--hvac-stack);
  margin-top: clamp(1.5rem, 3vw, 2.25rem);
  margin-bottom: 0;
}
${S} .m-cell {
  border-radius: var(--hvac-radius);
  padding: 0.72rem 0.85rem;
  border: 1px solid var(--hvac-border-soft);
  box-shadow: 0 4px 18px rgba(17, 24, 39, 0.05);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
${S} .m-cell:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 32px rgba(17, 24, 39, 0.1);
  border-color: rgba(215, 4, 22, 0.15);
}
${S} .m-ico-circle {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(215, 4, 22, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
${S} .m-ico-circle [data-lucide] { width: 20px; height: 20px; color: var(--hvac-red); }
${S} .m-lbl {
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  line-height: 1.3;
}
${S} .m-val {
  font-size: 1.0625rem;
  font-weight: 700;
  line-height: 1.35;
  color: #1f252b;
}

/* Overview */
${S} .ov-body p { margin: 0; }

/* Challenge grid — paired rows: equal-height cards per row */
${S} .hvac-challenge-grid--paired {
  display: flex;
  flex-direction: column;
  gap: var(--hvac-stack);
}
${S} .hvac-challenge-pair {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--hvac-head-gap);
  align-items: stretch;
  min-width: 0;
}
${S} .hvac-challenge-pair-slot {
  min-height: 0;
}
${S} .why-row {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  padding: 1.25rem 1.15rem;
  border: 1px solid var(--hvac-border-soft);
  border-radius: var(--hvac-radius-lg);
  background: var(--hvac-white);
  box-shadow: 0 2px 12px rgba(10, 10, 10, 0.03);
  transition: transform 0.28s ease, box-shadow 0.28s ease, border-color 0.28s ease;
  min-height: 200px;
  height: 100%;
  box-sizing: border-box;
}
${S} .why-row:hover {
  transform: translateY(-5px);
  box-shadow: 0 14px 36px rgba(17, 24, 39, 0.12);
  border-color: rgba(215, 4, 22, 0.25);
}
${S} .why-ico {
  width: 42px;
  height: 42px;
  border-radius: 8px;
  background: #fff0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
${S} .why-ico [data-lucide] { width: 19px; height: 19px; color: var(--hvac-red); }
${S} .why-ico .hvac-case-svg {
  width: 28px;
  height: 28px;
  display: block;
  flex-shrink: 0;
}
${S} .why-info {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
}
${S} .why-info h4 {
  margin: 0 0 0.35rem 0;
  font-size: 1.05rem;
  font-weight: 600;
  color: #1f252b;
}
${S} .why-info p {
  margin: 0;
  flex: 1;
}

/* Scope */
${S} .scope-row-5 {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: var(--hvac-stack);
  align-items: stretch;
}
${S} .scope-box {
  border: 1px solid var(--hvac-border-soft);
  border-radius: var(--hvac-radius-lg);
  background: var(--hvac-white);
  padding: 1.25rem 0.75rem 1.1rem;
  box-shadow: 0 2px 12px rgba(10, 10, 10, 0.03);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: background 0.2s, border-color 0.2s;
}
${S} .scope-box:hover {
  background: #fff8f8;
  border-color: #ffd0d0;
}
${S} .scope-box-ico {
  width: 56px;
  height: 56px;
  border-radius: 12px;
  background: #fff0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.75rem;
}
${S} .scope-box-ico [data-lucide] { width: 26px; height: 26px; color: var(--hvac-red); }
${S} .scope-box-ico .hvac-case-svg--scope {
  width: 36px;
  height: 36px;
  display: block;
  flex-shrink: 0;
}
${S} .scope-box-title {
  font-size: 0.9375rem;
  font-weight: 600;
  line-height: 1.35;
  margin: 0;
  color: #1f252b;
}

${S} .exec-strat-diagram {
  margin-bottom: clamp(1.25rem, 3vw, 2rem);
  margin-top: clamp(2rem, 6vw, 5rem);
  min-width: 0;
}
${S} .exec-strat-diagram img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 0;
}

/* IO: spacing from global case-custom-*; only align with section rhythm */
${S} .hvac-io-body {
  margin: 0;
}
${S} .hvac-io-container {
  max-width: 100%;
}
${S} .case-custom-io-block {
  margin-bottom: clamp(0.75rem, 2vw, 1.25rem);
  min-width: 0;
  max-width: 100%;
}
${S} .case-custom-io-main-image-wrap {
  min-width: 0;
  max-width: 100%;
  margin-bottom: clamp(1.5rem, 5vw, 4rem);
  padding-top: clamp(0.5rem, 2vw, 2rem);
}
${S} .hvac-io-main-diagram,
${S} .case-custom-io-main-image-wrap img {
  width: 100%;
  max-width: 100%;
  height: auto;
}
${S} .case-custom-io-thumb-grid {
  flex-wrap: wrap;
  min-width: 0;
}
${S} .case-custom-io-thumb-image {
  flex: 1 1 auto;
  min-width: 0;
  max-width: min(245px, 100%);
  width: auto;
  height: auto;
  min-height: 120px;
  aspect-ratio: 245 / 135;
}

${S} .imp-bar {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: var(--hvac-stack);
  align-items: stretch;
}
${S} .imp-c {
  padding: 1.35rem 0.75rem 1.25rem;
  text-align: center;
  transition: box-shadow 0.2s, border-color 0.2s;
  border: 1px solid var(--hvac-border-soft);
  border-radius: var(--hvac-radius-lg);
  background: var(--hvac-white);
  box-shadow: 0 2px 14px rgba(10, 10, 10, 0.04);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 148px;
  height: 100%;
  box-sizing: border-box;
}
${S} .imp-c:hover {
  border-color: #ffd0d0;
  box-shadow: 0 8px 24px rgba(215, 4, 22, 0.08);
}
${S} .imp-big {
  color: #D70416;
  margin: 0 0 0.5rem 0;
  font-variant-numeric: tabular-nums;
  font-family: "Arial Black", "Segoe UI Black", "Segoe UI", system-ui, sans-serif;
  font-size: clamp(2.125rem, 4.6vw, 2.125rem);
  line-height: 1.1;
  font-weight: 600;
}
${S} .imp-big-suffix {
  font-variant-numeric: tabular-nums;
  font-family: inherit;
  font-size: inherit;
}
${S} .imp-lbl {
  font-size: clamp(0.75rem, 1.85vw, 0.875rem);
  font-weight: 800 !important;
  line-height: 1.35;
  margin-top: 0.5rem;
  color: rgba(var(--bs-secondary-rgb), var(--bs-text-opacity)) !important;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

/* Testimonial — AISD reference (below page title) */

 
${S} .testi-inner {

  margin: 0 auto;
  text-align: center;
}
${S} .testi-qmark {
  font-size: 80px;
  line-height: 1;
  color: var(--hvac-red);
  opacity: 0.1;
  font-family: Georgia, serif;
  margin-bottom: -16px;
  display: block;
  user-select: none;
}
${S} .testi-inner p {
  margin: 0 0 28px;
  padding: 0;
  border: none;
}
${S} .testi-divider {
  width: 40px;
  height: 1px;
  background: #D70416;
  margin: 20px auto ;
}
${S} .testi-author {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--hvac-muted);
}
${S} .testi-author--brand {
  color: #D70416;
  text-transform: none;
  letter-spacing: 0.02em;
  font-weight: 600;
  font-size: clamp(0.8125rem, 1.4vw, 1rem);
}

/* CTA — centered finale card */
${S} .cta-panel {
  position: relative;
  border: 1px solid rgba(215, 4, 22, 0.12);
  border-top: 3px solid var(--hvac-red);
  border-radius: var(--hvac-radius-lg);
  background: linear-gradient(165deg, #ffffff 0%, #fffbfb 55%, #fff8f8 100%);
  box-shadow:
    0 4px 6px rgba(17, 24, 39, 0.04),
    0 18px 48px rgba(215, 4, 22, 0.07);
  padding: clamp(2rem, 5vw, 3rem) clamp(1.35rem, 4vw, 2.75rem);
  max-width: 52rem;
  margin: 0 auto;
}
${S} .cta-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: clamp(0.65rem, 2vw, 1rem);
  
  margin: 0 auto;
}
${S} .cta-ey {
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--hvac-red);
  margin: 0;
}
${S} .cta-h {
  font-size: clamp(1.35rem, 2.8vw, 1.85rem);
  font-weight: 700;
  line-height: 1.28;
  letter-spacing: -0.02em;
  margin: 0;
}
${S} .cta-line2 {
  font-size: clamp(0.9375rem, 1.6vw, 1.0625rem);
  font-weight: 400;
  line-height: 1.55;
  margin: 0;
  max-width: 32rem;
}
${S} .cta-btn {
  margin-top: 0.35rem;
  font-weight: 600;
  min-height: 48px;
  box-shadow: 0 4px 14px rgba(215, 4, 22, 0.25);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
${S} .cta-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 22px rgba(215, 4, 22, 0.32);
}
${S} .cta-btn [data-lucide] {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
}

/* Tools */
${S} .hvac-tools-head {
  max-width: 42rem;
  margin-bottom: var(--hvac-head-gap);
}
${S} .hvac-tools-kicker {
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--hvac-red);
  margin: 0 0 0.35rem 0;
}
${S} .hvac-tools-title {
  display: inline-block;
  font-size: clamp(1.5rem, 2.4vw, 1.85rem);
  font-weight: 700;
  margin: 0;
  color: var(--hvac-black);
}
${S} .hvac-tools-title::after {
  content: "";
  display: block;
  width: 100px;
  height: 3px;
  background: var(--hvac-red);
  margin: 12px auto 0;
  border-radius: 2px;
}

/* Scroll reveal */
${S} .r {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
${S} .r.on {
  opacity: 1;
  transform: none;
}
${S} .r.d1 { transition-delay: 0.08s; }
${S} .r.d2 { transition-delay: 0.16s; }

@media (max-width: 1100px) {
  ${S} .hvac-hero__top {
    grid-template-columns: 1fr;
    gap: var(--hvac-head-gap);
  }
  ${S} .hvac-challenge-pair {
    grid-template-columns: 1fr;
  }
  ${S} .hvac-challenge-pair-slot {
    display: none;
  }
  ${S} .imp-bar {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  ${S} .scope-row-5 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  ${S} .meta-strip {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  ${S} .cta-panel {
    padding: clamp(1.65rem, 4vw, 2.25rem) clamp(1.1rem, 3vw, 1.5rem);
  }
  ${S} .cta-btn {
    width: 100%;
    max-width: 20rem;
  }
}

@media (max-width: 720px) {
  ${S} .imp-bar {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  ${S} .scope-row-5 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  ${S} .testi-sec {
    padding: 48px 0;
  }
}

@media (max-width: 480px) {
  ${S} .imp-bar,
  ${S} .scope-row-5 {
    grid-template-columns: 1fr;
  }
  ${S} .meta-strip {
    grid-template-columns: 1fr;
  }
  ${S} .why-row {
    min-height: 0;
    padding: 1rem 0.85rem;
  }
  ${S} .case-custom-io-overlay-title {
    font-size: clamp(1.1rem, 5vw, 1.5rem);
    padding-bottom: 1rem;
  }
}

@media (max-width: 991.98px) {
  ${S} .case-custom-io-button-pill {
    max-width: 100%;
  }
}
`;

export default HvacBimCoordinationCaseStudyAustin;
