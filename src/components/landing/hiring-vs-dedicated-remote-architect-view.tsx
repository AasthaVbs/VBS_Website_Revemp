"use client";

import React, { useCallback, useState } from "react";

import { SiteFooter } from "@/components/sections/site-footer";
import LandingTopHeader from "@/components/landing/landing-top-header";
import LandingPdfLeadModal from "@/components/landing/landing-pdf-lead-modal";

const HIRING_PDF_URL = "https://www.virtualbuildingstudio.com/resources/hiring-vs-dedicated-remote-architect.pdf?utm_source=LP_HireVsDRA&utm_medium=LPCTA&utm_campaign=T2TOFU";

const redAccent = "#DB1922";

const IconClock = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={redAccent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);
const IconWarning = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);
const IconTargetPressure = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);
const IconDocs = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={redAccent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
  </svg>
);
const IconChart = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={redAccent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>
);
const IconBrain = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={redAccent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
  </svg>
);
const IconBoxes = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={redAccent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);
const IconClockRefresh = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={redAccent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);
const IconPeopleCard = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={redAccent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="7" r="3" />
    <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
    <circle cx="15" cy="7" r="3" />
    <path d="M21 21v-2a4 4 0 0 0-4-4h-4" />
  </svg>
);
/* Expect vs Reality section icons — grey for expectation, red for reality */
const greyIcon = "#525252";
const IconArrowDown = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={redAccent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19" /><polyline points="19 12 12 19 5 12" /></svg>
);
const IconArrowDownGrey = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={greyIcon} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19" /><polyline points="19 12 12 19 5 12" /></svg>
);
const IconDocList = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={greyIcon} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg>
);
const IconCheckCircle = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={greyIcon} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
);
const IconShield = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={greyIcon} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
);
const IconTrendUp = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={redAccent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>
);
const IconEdit = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={redAccent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
);
const IconEye = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={redAccent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
);
const IconClockLate = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={redAccent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
);
const IconCheckGreen = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
);
const IconXRed = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={redAccent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
);
/* Small red outline icons for timeline card descriptions */
const SmallIconDocArrow = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={redAccent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="12" y1="18" x2="18" y2="12" />
    <polyline points="15 12 18 12 18 15" />
  </svg>
);
const SmallIconDocCheck = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={redAccent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <polyline points="9 15 11 17 15 13" />
  </svg>
);
const SmallIconTarget = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={redAccent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);
const SmallIconLightning = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

/* Icons for timeline cards (white outline on red block) */
const IconDocsStack = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <path d="M6 2v4h4" strokeDasharray="2 2" />
    <path d="M6 6v4h4" strokeDasharray="2 2" />
  </svg>
);
const IconPeopleIdeas = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="7" r="3" />
    <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
    <circle cx="15" cy="7" r="3" />
    <path d="M21 21v-2a4 4 0 0 0-4-4h-4" />
    <circle cx="12" cy="5" r="1.5" fill="#fff" />
    <path d="M12 2v1M12 6v1M10 4h1M13 4h1" strokeWidth="1" />
  </svg>
);
const IconTarget = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
    <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
  </svg>
);

const darkIcon = "#171717";
const IconDocsStackOutline = () => (
  <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke={darkIcon} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="9 15 11 17 15 13" />
  </svg>
);
const IconPeopleIdeasOutline = () => (
  <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke={darkIcon} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="7" r="3" />
    <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
    <circle cx="15" cy="7" r="3" />
    <path d="M21 21v-2a4 4 0 0 0-4-4h-4" />
  </svg>
);
const IconTargetOutline = () => (
  <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke={darkIcon} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const HiringVsDedicatedRemoteArchitectView = () => {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <main className="hiring-vs-lp documentation-wall-page">
      <LandingTopHeader />

      <section className="hero-sec doc-wall-section-spacing" style={{ position: "relative", backgroundImage: "url('/image/bg-hiring.png')", backgroundSize: "contain", backgroundPosition: "right center", backgroundRepeat: "no-repeat", backgroundOrigin: "border-box", padding: "16px 0 4px 24px", margin: "0", width: "100%", maxWidth: "100%", boxSizing: "border-box"}}>
        <div className="container-fluid" style={{ position: "relative", zIndex: 2, padding: "48px 0 0 0", margin: "0", paddingRight: "0" }}>
          <div className="hero-sec-inner-container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
            <div className="hero-inner" style={{ textAlign: "left", justifyContent: "flex-start", width: "100%", padding: "0", margin: "0" }}>
              <div className="hero-left" style={{ margin: "0", padding: "0 0 50px 0", maxWidth: "70%", width: "100%" }}>
                <h1 style={{ fontSize: "2rem", fontWeight: "800", lineHeight: "1.2", marginBottom: "3rem", marginTop: "3rem", color: "#111" }}>
                  <span className="accent-red" style={{ color: "#DB1922", fontSize: "2.5rem" }}>Hiring</span>
                  {" vs "}
                  <span className="accent-red" style={{ color: "#DB1922", fontSize: "2.5rem" }}>Dedicated</span>
                  {" Remote Architect"}
                </h1>
                <div className="hero-what-happens" >
                  What Actually Happens After You Hire
                </div>
                <hr className="shift-hr" style={{ borderColor: "#DB1922", borderWidth: "2px", maxWidth: "260px", margin: "0 0 1rem" }} />
                <div className="hero-desc-highlight-wrap" style={{ justifyContent: "flex-start" }}>
                  <div className="subhead" style={{ fontSize: "1.5rem !important", maxWidth: "650px", margin: "15px 0 ", color: "#333 !important", maxWidth: "650px" }}>
                    A structural look at what actually changes inside architecture  firms during the first 90 days  after adding capacity.
                  </div>
                </div>

                <LandingPdfLeadModal
                  title="Hiring vs Dedicated Remote Architect"
                  downloadUrl={HIRING_PDF_URL}
                  trigger={(
                    <a href={HIRING_PDF_URL} className="cta-btn" style={{ marginTop: "1rem", marginBottom: "0" }} target="_blank" rel="noopener noreferrer">
                      Download the Full Executive Brief (PDF)
                    </a>
                  )}
                />
              </div>
            </div>
          </div>
        </div>

      </section>

      <section className="sec sec-alt doc-wall-section-spacing natural-first-move-sec" style={{ background: "#fff" }}>
        <div className="container">
          <div className="section-heading-with-line">
            <h2 className="section-title" style={{ color: "#222", fontSize: "2.2rem", fontWeight: "700" }}>Why Hiring Feels Like the <span className="accent-red" style={{ color: "#DB1922" }}>Natural First Move</span></h2>
            <div className="accent-underline" style={{ width: "320px", height: "3px", background: "#DB1922" }} />
          </div>

          <div className="natural-flow-grid" style={{ display: "block" }}>
            <img src="/image/Work-Cycle.jpg" alt="Work Cycle" style={{ width: "100%", height: "auto", display: "block" }} />
          </div>

          <p className="nf-note fw-bold ">“This logic works in stable environments. During active growth, the system behaves differently.”</p>
          <hr className="shift-hr" style={{ borderColor: "#DB1922", borderWidth: "2px", maxWidth: "260px", margin: "10px auto 1rem" }} />

          <style>{`
          .natural-first-move-sec .natural-first-move-subtitle {
            color:#6B7280;
            margin-bottom:18px;
            font-size: 1.25rem !important;
            
          }
          .natural-first-move-sec .natural-flow-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
            max-width: 1100px;
            margin: 0 auto;
          }
          @media (max-width: 767px) {
             .natural-first-move-sec .nf-note {
                font-size: 1rem !important;
                margin-top: 20px !important;
             }
          }
          .natural-first-move-sec .nf-card {
            background: #fff;
            border: 1px solid #E2E8F0;
            border-radius: 20px;
            padding: 36px 24px;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
          }
          .natural-first-move-sec .nf-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
            border-color: #DB1922;
          }
          .natural-first-move-sec .nf-card-accent {
            background: #FFF5F5;
            border-color: #FED7D7;
          }
          .natural-first-move-sec .nf-icon-wrapper {
            width: 70px;
            height: 70px;
            border-radius: 18px;
            background: #DB1922;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 24px;
            border: 1px solid #fff;
            color: #fff;
            font-weight: 700 !important;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
            transition: all 0.3s ease;
          }
          .natural-first-move-sec .nf-icon-wrapper svg {
             width: 40px;
             height: 40px;
             stroke: #fff !important;
          }
          .natural-first-move-sec .nf-card:hover .nf-icon-wrapper {
             transform: scale(1.05);
          }

          .natural-first-move-sec .nf-icon-warning {
            background: #FFF1F2;
            border-color: #FECACA;
            color: #DB1922;
          }
          .natural-first-move-sec .nf-title {
            font-weight: 800;
            color: #0F172A;
            font-size: 1.25rem;
            margin-bottom: 12px;
          }
          .natural-first-move-sec .nf-body {
            color: #64748B;
            font-size: 1rem;
            line-height: 1.6;
          }
          .natural-first-move-sec .nf-note {
            text-align: center;
            color: #333333;
            font-style: italic;
            margin: 40px auto 0;
         
            font-size: 1.35rem !important;
            font-weight: 700;
          }
          @media (max-width: 991px) {
            .natural-first-move-sec .natural-flow-grid {
              grid-template-columns: 1fr;
            }
            .capacity-timeline-chart {
               display: none !important;
            }
            .reality-30-90-cards {
               margin-top: 0 !important;
            }
          }
        `}</style>
        </div>
      </section>
      <section className="sec doc-wall-section-spacing expect-reality-sec">
        <div className="container">
          <div className="section-heading-with-line">
            <h2 className="section-title" style={{ color: "#222", fontSize: "1.9rem", fontWeight: "700" }}>What Leaders <span className="accent-red" style={{ color: "#DB1922" }}>Expect</span> vs What <span className="accent-red" style={{ color: "#DB1922" }}>Actually Happens</span></h2>
            <div className="accent-underline expect-reality-accent" style={{ width: "320px", height: "2px", background: "#DB1922" }} />
          </div>
          <div className="expect-reality-image-wrap">
            <img
              src="/image/expectation-reality.png"
              alt="Expect vs Reality"
              className="expect-reality-top-img"
            />
            <div className="container-inner" style={{ maxWidth: "100%", padding: 0 }}>
              <div className="expect-reality-grid">
                <div className="expect-block">
                  <h2 className="label" style={{ color: "#DB1922" }}>Expectation</h2>
                  <ul>
                    <li><span className="item-icon"><IconCheckGreen /></span>Senior workload drops</li>
                    <li><span className="item-icon"><IconCheckGreen /></span>Documentation accelerates</li>
                    <li><span className="item-icon"><IconCheckGreen /></span>Escalations decrease</li>
                    <li><span className="item-icon"><IconCheckGreen /></span>Delivery stabilizes</li>
                  </ul>
                </div>
                <div className="expect-reality-divider" aria-hidden="true" />
                <div className="reality-block">
                  <h2 className="label" style={{ color: "#DB1922" }}>Reality</h2>
                  <ul>
                    <li><span className="item-icon"><IconXRed /></span>Review load increases</li>
                    <li><span className="item-icon"><IconXRed /></span>Redlines multiply</li>
                    <li><span className="item-icon"><IconXRed /></span>Oversight expands</li>
                    <li><span className="item-icon"><IconXRed /></span>Relief arrives later than planned</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="expect-reality-tagline-wrap section-key-line-card doc-wall-pull-quote">
            <p className="text-center section-description">Hiring adds people immediately. Capacity increases gradually.</p>
            <hr className="shift-hr" style={{ borderColor: "#DB1922", borderWidth: "2px", maxWidth: "260px", margin: "10px auto 1rem" }} />

          </div>
        </div>
      </section>

      <section className="sec doc-wall-section-spacing reality-30-90" style={{ background: "#FDFCFE", padding: "60px 0" }}>
        <div className="container">
          <div className="section-heading-with-line">
            <h2 className="section-title" style={{ color: "#222", fontSize: "2.2rem", fontWeight: "700" }}>What Actually Shifts in the <span className="accent-red" style={{ color: "#DB1922" }}>First 30–90 Days</span></h2>
            <div className="accent-underline" style={{ width: "320px", height: "3px", background: "#DB1922" }} />
          </div>

          <div className="capacity-timeline-chart" style={{ maxWidth: "1100px", margin: "0 auto 0px", position: "relative" }}>
            <div className="capacity-timeline-svgs" style={{ display: "flex", flexDirection: "row", alignItems: "flex-end", gap: 0, width: "100%" }}>
              <img
                src="/image/Asset%201.svg"
                alt="30-60-90 Timeline Part 1"
                style={{ flex: 1, minWidth: 0, height: "auto", display: "block", objectFit: "contain", marginTop: "24px", cursor: "pointer" }}
                onMouseEnter={() => setActiveCard(0)}
                onMouseLeave={() => setActiveCard(null)}
                onClick={() => setActiveCard(0)}
              />
              <img src="/image/Asset%202.svg" alt="30-60-90 Timeline Part 2" style={{ flex: 1, minWidth: 0, height: "auto", display: "block", objectFit: "contain", marginTop: "24px", transform: "translateY(-14rem)" }} />
              <img
                src="/image/Asset%203.svg"
                alt="30-60-90 Timeline Part 3"
                style={{ flex: 1, minWidth: 0, height: "auto", display: "block", objectFit: "contain", marginTop: "24px", cursor: "pointer" }}
                onMouseEnter={() => setActiveCard(1)}
                onMouseLeave={() => setActiveCard(null)}
                onClick={() => setActiveCard(1)}
              />
              <img src="/image/Asset%204.svg" alt="30-60-90 Timeline Part 4" style={{ flex: 1, minWidth: 0, height: "auto", display: "block", objectFit: "contain", transform: "translateY(-14rem)" }} />
              <img
                src="/image/Asset%205.svg"
                alt="30-60-90 Timeline Part 5"
                style={{ flex: 1, minWidth: 0, height: "auto", display: "block", objectFit: "contain", cursor: "pointer" }}
                onMouseEnter={() => setActiveCard(2)}
                onMouseLeave={() => setActiveCard(null)}
                onClick={() => setActiveCard(2)}
              />
            </div>
          </div>
          <div className="reality-30-90-cards" style={{ marginTop: "-120px", position: "relative", zIndex: 2 }}>
            <div className={`reality-30-90-card ${activeCard === 0 ? "active-card" : ""}`}>
              <div className="reality-30-90-card-header">
                <div className="reality-30-90-card-icon icon-red">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#E5232B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v6l4 2" />
                  </svg>
                </div>
                <div className="reality-30-90-card-title">30 Days: Learning the System</div>
              </div>
              <div className="reality-30-90-card-body">Standards and internal workflows transfer to the new hire. Senior team members remain closely involved to guide decisions and review early work.</div>
            </div>

            <div className={`reality-30-90-card ${activeCard === 1 ? "active-card" : ""}`}>
              <div className="reality-30-90-card-header">
                <div className="reality-30-90-card-icon icon-amber">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="9" cy="8" r="3" />
                    <path d="M4 20v-1a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v1" />
                    <circle cx="17" cy="9" r="2.5" />
                    <path d="M20 20v-1a4 4 0 0 0-3-3.85" />
                  </svg>
                </div>
                <div className="reality-30-90-card-title">60 Days: Entering Live Work</div>
              </div>
              <div className="reality-30-90-card-body">Work begins touching real projects. Review cycles increase as senior engineers spend more time checking and refining the output.</div>
            </div>

            <div className={`reality-30-90-card ${activeCard === 2 ? "active-card" : ""}`}>
              <div className="reality-30-90-card-header">
                <div className="reality-30-90-card-icon icon-green">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 21c7 0 14-7 14-14 0-2-2-4-4-4C8 3 3 8 3 15c0 2 1 4 2 6Z" />
                    <path d="M7 19c2-4 6-8 10-10" />
                  </svg>
                </div>
                <div className="reality-30-90-card-title">90 Days: Contribution Begins</div>
              </div>
              <div className="reality-30-90-card-body">Contribution improves as familiarity grows. Full independence is still developing as the new hire builds confidence and experience.</div>
            </div>


          </div>
          <div className="pressure-statement section-key-line-card doc-wall-pull-quote section-ending-full-width">
            <p className="text-center section-description">Ramp-up time collides with active deadlines.</p>
            <hr className="shift-hr" style={{ borderColor: "#DB1922", borderWidth: "1px", maxWidth: "200px", margin: "0 auto" }} />

          </div>

          <style>{`
          .hiring-vs-lp .hero-sec .cta-btn,
          .hiring-vs-lp .cta-sec-btn {
            white-space: nowrap !important;
          }
          .hiring-vs-lp .hero-sec .cta-btn {
            font-size: clamp(0.6rem, 2vw + 0.5rem, 1.0625rem) !important;
          }
          .hiring-vs-lp .cta-sec-btn {
            font-size: clamp(0.65rem, 2vw + 0.55rem, 1.1rem) !important;
          }
          .reality-30-90 .reality-30-90-head {
            text-align: center;
            max-width: 920px;
            margin: 0 auto 26px;
          }
          .reality-30-90 .reality-30-90-title {
            font-size: 3rem;
            font-weight: 800;
            color: #0B1324;
            margin: 0;
            letter-spacing: -0.02em;
          }
          .reality-30-90 .progression-30-90 {
            max-width: 980px;
            margin: 0 auto 26px;
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 18px;
          }
          .reality-30-90 .progression-item {
            background: #fff;
            border: 1px solid #E6EEF9;
            border-radius: 14px;
            padding: 18px;
            min-height: 120px;
          }
          .reality-30-90 .progression-day {
            font-weight: 800;
            font-size: 1.05rem;
            color: #0B1324;
            margin-bottom: 8px;
          }
          .reality-30-90 .progression-copy {
            color: #64748B;
            font-size: 0.95rem;
            line-height: 1.6;
          }
          .reality-30-90 .progression-note {
            text-align: center;
            color: #333333;
            font-weight: 800;
            font-size: 1.35rem !important;
            margin: 2px auto 24px;
          }
          @media (max-width: 767px) {
             .reality-30-90 .progression-note {
                font-size: 1rem !important;
                margin-bottom: 12px !important;
                margin-top: 0 !important;
             }
             .capacity-timeline-chart {
                margin-bottom: 0px !important;
             }
          }
          .reality-30-90 .reality-30-90-cards {
            max-width: 1100px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 18px;
            
          }
          .reality-30-90 .reality-30-90-card {
            background: #fff;
            border: 1px solid #E6EEF9;
            border-radius: 20px;
            padding: 36px 24px;
            min-height: 168px;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
            cursor: pointer;
          }
          .reality-30-90 .reality-30-90-card:hover,
          .reality-30-90 .reality-30-90-card.active-card {
            transform: translateY(-8px);
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
            border-color: #E6EEF9;
          }
          .reality-30-90 .reality-30-90-card-icon {
            width: 70px;
            height: 70px;
            border-radius: 18px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 24px;
            background: #fff;
            border: 1px solid #fff;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
            transition: all 0.3s ease;
          }
          .reality-30-90 .reality-30-90-card-icon svg {
             width: 40px;
             height: 40px;
          }
          .reality-30-90 .reality-30-90-card:hover .reality-30-90-card-icon,
          .reality-30-90 .reality-30-90-card.active-card .reality-30-90-card-icon {
             transform: scale(1.05);
          }
          .reality-30-90 .reality-30-90-card-icon.icon-red {
             background: #2299D6;
             color: #fff;
             
          }
          .reality-30-90 .reality-30-90-card-icon.icon-red svg {
             stroke: #fff !important;
          }
          
          .reality-30-90 .reality-30-90-card-icon.icon-amber {
             background: #F59E0B;
             color: #fff;
            
          }
          .reality-30-90 .reality-30-90-card-icon.icon-amber svg {
             stroke: #fff !important;
          }

          .reality-30-90 .reality-30-90-card-icon.icon-green {
             background: #22C55E;
             color: #fff;
           
          }
          .reality-30-90 .reality-30-90-card-icon.icon-green svg {
             stroke: #fff !important;
          }

          .reality-30-90 .reality-30-90-card-title {
            font-weight: 800;
            font-size: 1.35rem;
            color: #0B1324;
            margin-bottom: 10px;
            position: relative;
            display: inline-block;
          }
          .reality-30-90 .reality-30-90-card-title::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: -4px;
            width: 0;
            height: 2px;
            background-color: #DB1922;
            transition: width 0.3s ease;
          }
          .reality-30-90 .reality-30-90-card:hover .reality-30-90-card-title::after,
          .reality-30-90 .reality-30-90-card.active-card .reality-30-90-card-title::after {
            width: 100%;
          }
          .reality-30-90 .reality-30-90-card-body {
            color: #333333;
            font-size: 1.1rem;
            line-height: 1.2;
          }
          @media (max-width: 991px) {
            .natural-first-move-sec .natural-flow-grid {
              grid-template-columns: 1fr;
            }
            .capacity-timeline-chart {
               display: none !important;
            }
            .reality-30-90-cards {
               margin-top: 0 !important;
            }
            .reality-30-90 .reality-30-90-title { font-size: 2.3rem; }
            .reality-30-90 .progression-30-90 { grid-template-columns: 1fr; }
            .reality-30-90 .reality-30-90-cards { grid-template-columns: 1fr; }
            
            .reality-30-90-card {
               display: flex;
               flex-direction: column;
               align-items: flex-start;
               text-align: left;
               padding: 24px !important;
               min-height: auto !important;
            }
            .reality-30-90-card-icon {
               margin-bottom: 0 !important;
               margin-right: 16px;
               width: 50px !important;
               height: 50px !important;
               flex-shrink: 0;
            }
            .reality-30-90-card-icon svg {
               width: 28px !important;
               height: 28px !important;
            }
            .reality-30-90-card-header {
               display: flex;
               align-items: center;
               margin-bottom: 16px;
               width: 100%;
            }
            .reality-30-90-card-title {
               margin-bottom: 0 !important;
               font-size: 1.2rem !important;
            }
            .reality-30-90-card-body {
               width: 100%;
            }
            
            .expect-reality-sec .expect-reality-grid {
               grid-template-columns: 1fr !important;
            }

            .expect-reality-sec .expect-block .label,
             .expect-reality-sec .reality-block .label {
                font-size: 1.1rem !important;
             }
             .expect-reality-sec .expect-block li,
             .expect-reality-sec .reality-block li {
                font-size: 0.9rem !important;
             }
             
             .expect-reality-sec .expect-reality-grid {
                min-height: 0 !important;
             }
             .expect-reality-image-wrap {
                background: none !important;
                padding-top: 0 !important;
                min-height: auto !important;
             }
             .expect-reality-image-wrap .container-inner {
                background: none !important;
             }
             .expect-reality-image-wrap::before {
                display: none !important;
             }
             .expect-reality-top-img {
                display: block !important;
                max-height: 200px;
                margin-bottom: 20px;
             }
             
             .expect-reality-image-wrap .expect-reality-grid {
                display: flex !important;
                flex-direction: row !important;
                gap: 12px !important;
                width: 100% !important;
             }
             .expect-reality-sec .expect-reality-divider {
                display: block !important;
                width: 2px !important;
                background: #DB1922 !important;
                margin: 0 !important;
                flex-shrink: 0 !important;
                margin-top: 40px !important; 
                height: 120px !important;
                align-self: flex-start !important;
             }
             
             .expect-reality-image-wrap .expect-block,
             .expect-reality-image-wrap .reality-block {
                text-align: left !important;
                flex: 1 !important;
                width: auto !important;
             }
             .expect-reality-image-wrap ul {
                text-align: left !important;
                display: block !important;
                padding-left: 0 !important;
             }
             .expect-reality-image-wrap li {
                display: flex;
                align-items: flex-start;
                gap: 8px;
                margin-bottom: 12px;
                font-size: 0.95rem;
             }
             .expect-reality-image-wrap .item-icon {
                flex-shrink: 0;
                margin-top: 2px;
             }
             .expect-reality-image-wrap .label {
                font-size: 1.2rem !important;
                margin-bottom: 1rem !important;
                text-align: left !important;
             }
 
             /* Keep expectation/reality always side-by-side (left-right), no stacking */
            .shift-row {
               flex-direction: column !important;
               gap: 20px !important;
            }
            .shift-arrow {
               transform: rotate(90deg);
               margin: 10px 0 !important;
            }
            .pressure-cards {
               grid-template-columns: 1fr !important;
            }
          }

          @media (max-width: 460px) {
             .hiring-vs-lp .hero-sec {
                background-image: url('/image/bg-hiring-mobile.png') !important;
                background-size: cover !important;
            
                background-repeat: no-repeat !important;
                min-height: 560px !important;
                
                margin-bottom: 0 !important;
                
             
                display: block !important;
             }
             .hiring-vs-lp .hero-sec .container-fluid {
                display: none !important;
             }
          }

          @media (min-width: 461px) and (max-width: 1200px) {
             .hiring-vs-lp .hero-sec {
                background-image: url('/image/bg-hiring.png') !important;
                background-size: contain !important;
                background-position: right center !important;
                background-repeat: no-repeat !important;
                margin-bottom: 0 !important;
             }
          }
          @media (max-width: 576px) {
             .hiring-vs-lp .hero-sec .cta-btn {
                font-size: 0.7rem !important;
                padding: 10px 14px !important;
             }
             .hiring-vs-lp .cta-sec-btn {
                font-size: 0.75rem !important;
                padding: 10px 14px !important;
             }
          }
          @media (max-width: 999px) {
             .hero-sec {
                background-position: right center !important;
                width: 100% !important;
                max-width: 100% !important;
             }
             .hiring-vs-lp .hero-sec {
                background-position: right center !important;
                width: 100% !important;
                max-width: 100% !important;
             }
             .hero-inner, .hero-left, .framing, .hero-desc-highlight-wrap {
                text-align: left !important;
                justify-content: flex-start !important;
                align-items: flex-start !important;
                margin-left: 0 !important;
                padding-left: 0 !important;
                width: 100% !important;
             }
             .hero-left {
                padding-bottom: 2rem !important;
             }
             .hero-sec h1 {
                font-size: 1.5rem !important;
                margin-bottom: 1.5rem !important;
                line-height: 1.2 !important;
             }
             .hiring-vs-lp .hero-sec h1 {
                font-size: 1.4rem !important;
                margin-bottom: 1rem !important;
             }
             .hiring-vs-lp .hero-sec h1 .accent-red {
                font-size: 1.55rem !important;
             }
             .hiring-vs-lp .hero-sec .hero-what-happens {
                font-size: 1.15rem !important;
             }
             .hero-sec .subhead {
                font-size: 1rem !important;
                line-height: 1.5 !important;
             }
             .hiring-vs-lp .hero-sec .subhead {
                font-size: 1rem !important;
             }
             .hero-sec .cta-btn {
                width: auto !important;
                min-width: 200px;
                display: inline-block !important;
                padding: 14px 24px !important;
                font-size: 1rem !important;
                margin: 0 auto !important;
             }
             .hiring-vs-lp .hero-sec .cta-btn {
                font-size: min(0.95rem, 2.5vw + 0.55rem) !important;
                padding: 12px 20px !important;
             }
             .hiring-vs-lp .cta-sec-btn {
                white-space: nowrap !important;
                font-size: min(1rem, 2.5vw + 0.6rem) !important;
             }
             .section-title {
                font-size: 1.35rem !important;
                word-wrap: break-word;
                overflow-wrap: break-word;
             }
             .accent-underline {
                width: 100px !important;
             }
             .natural-first-move-subtitle,
             .reduce-pressure-desc,
             .section-description,
             .doc-wall-pull-quote p {
                font-size: 0.95rem !important;
                line-height: 1.4 !important;
                word-wrap: break-word;
                overflow-wrap: break-word;
             }
             .reality-30-90 .reality-30-90-card-title {
                font-size: 1.1rem !important;
             }
             .reality-30-90 .reality-30-90-card-body {
                font-size: 0.95rem !important;
                line-height: 1.35 !important;
             }
             .pressure-card-title {
                font-size: 1rem !important;
             }
             .pressure-card-sub {
                font-size: 0.9rem !important;
             }
             .expect-reality-sec .expect-block .label,
             .expect-reality-sec .reality-block .label {
                font-size: 1.1rem !important;
             }
             .expect-reality-sec .expect-block li,
             .expect-reality-sec .reality-block li {
                font-size: 0.9rem !important;
             }
             
             .expect-reality-image-wrap {
                background: none !important;
                padding-top: 0 !important;
                min-height: auto !important;
             }
             .expect-reality-image-wrap .container-inner {
                background: none !important;
             }
             .expect-reality-image-wrap::before {
                display: none !important;
             }
             .expect-reality-top-img {
                display: block !important;
                max-height: 200px;
                margin-bottom: 20px;
             }
             
             .hero-sec div[style*="fontSize: 2rem"] {
                font-size: 1.3rem !important;
                margin-top: 1.5rem !important;
                line-height: 1.3 !important;
             }
             .hero-desc-highlight {
                font-size: 1.3rem !important;
             }
             .hero-desc-content {
                font-size: 1.1rem !important;
             }
             .expect-reality-image-wrap .expect-reality-grid {
                display: flex !important;
                flex-direction: row !important;
                gap: 12px !important;
                width: 100% !important;
             }
             .expect-reality-sec .expect-reality-divider {
                display: block !important;
                width: 2px !important;
                background: #DB1922 !important;
                margin: 0 !important;
                flex-shrink: 0 !important;
                margin-top: 40px !important; 
                height: 120px !important;
                align-self: flex-start !important;
             }
             .expect-reality-tagline-wrap.doc-wall-pull-quote p,
             .pressure-statement.doc-wall-pull-quote p, 
             .section-description {
                font-size: 1.2rem !important;
                line-height: 1.3 !important;
                padding: 0 10px !important;
             }
             .section-description {
                font-size: 1.2rem !important;
             }
                margin-top: 20px !important;
             }
             .expect-reality-image-wrap .expect-block,
             .expect-reality-image-wrap .reality-block {
                text-align: left !important;
                flex: 1 !important;
                width: auto !important;
             }
             .expect-reality-image-wrap ul {
                text-align: left !important;
                display: block !important;
                padding-left: 0 !important;
             }
             .expect-reality-image-wrap li {
                display: flex;
                align-items: flex-start;
                gap: 8px;
                margin-bottom: 12px;
                font-size: 0.95rem;
             }
             .expect-reality-image-wrap .item-icon {
                flex-shrink: 0;
                margin-top: 2px;
             }
             .expect-reality-image-wrap .label {
                font-size: 1.2rem !important;
                margin-bottom: 1rem !important;
                text-align: left !important;
             }
          }
        `}</style>
        </div>
      </section>

      <section className="sec doc-wall-section-spacing reduce-pressure-sec" style={{ background: "#fff" }}>
        <div className="container">

          <div className="section-heading-with-line">
            <h2 className="section-title reduce-pressure-title" style={{ color: "#222", fontSize: "1.9rem", fontWeight: "700" }}>Why <span className="accent-red" style={{ color: "#DB1922" }}>Hiring </span> Doesn't Always Reduce Pressure<span className="accent-red" style={{ color: "#DB1922" }}> During Growth</span></h2>
            <div className="accent-underline" style={{ width: "380px", height: "2px", background: "#DB1922" }} />
          </div>
          <p className="reduce-pressure-desc">Adding people creates new dynamics that most leaders don't anticipate until they're already stretched thin.</p>
          <div className="container-inner" style={{ maxWidth: "100%", padding: 0 }}>
            <div className="pressure-cards">
              <div className="pressure-card">
                <div className="pressure-card-icon-wrap"><IconClockRefresh /></div>
                <div className="pressure-card-line" aria-hidden="true" />
                <div className="pressure-card-content">
                  <h3 className="pressure-card-title">Ramp-up vs Deadlines</h3>
                  <p className="pressure-card-sub">New hires need time you don't have</p>
                </div>
              </div>
              <div className="pressure-card">
                <div className="pressure-card-icon-wrap"><IconWarning /></div>
                <div className="pressure-card-line" aria-hidden="true" />
                <div className="pressure-card-content">
                  <h3 className="pressure-card-title">Knowledge Concentration</h3>
                  <p className="pressure-card-sub">Critical know-how stays siloed</p>
                </div>
              </div>
              <div className="pressure-card">
                <div className="pressure-card-icon-wrap"><IconPeopleCard /></div>
                <div className="pressure-card-line" aria-hidden="true" />
                <div className="pressure-card-content">
                  <h3 className="pressure-card-title">Coordination Overhead</h3>
                  <p className="pressure-card-sub">More people, more meetings</p>
                </div>
              </div>
              <div className="pressure-card">
                <div className="pressure-card-icon-wrap"><IconTargetPressure /></div>
                <div className="pressure-card-line" aria-hidden="true" />
                <div className="pressure-card-content">
                  <h3 className="pressure-card-title">Delayed Relief</h3>
                  <p className="pressure-card-sub">Net capacity dips before it rises</p>
                </div>
              </div>
            </div>
            <div className="pressure-statement section-key-line-card doc-wall-pull-quote section-ending-full-width">
              <p className="text-center section-description">Hiring doesn’t remove pressure. It redistributes it</p>
              <hr className="shift-hr" style={{ borderColor: "#DB1922", borderWidth: "1px", maxWidth: "200px", margin: "0 auto" }} />

            </div>
          </div>
        </div>
      </section>

      <section className="sec sec-alt doc-wall-section-spacing position-relative shift-section overflow-hidden" style={{ background: "#ffffff" }}>
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundImage: "url(/image/shift.png)",
            backgroundSize: "130% auto",
            backgroundPosition: "50% 50%",
            backgroundRepeat: "no-repeat",
          }}
          aria-hidden="true"
        />
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: "linear-gradient(to bottom, rgba(252, 247, 247, 0.64) 0%, rgba(252, 252, 252, 0.81) 100%)", zIndex: 0 }} aria-hidden="true" />
        <div className="container position-relative" style={{ zIndex: 1 }}>
          <div className="section-heading-with-line">
            <h2 className="section-title" style={{ color: "#222", fontSize: "1.9rem", fontWeight: "700", lineHeight: "1.2" }}>Eventually, the <span className="accent-red" style={{ color: "#DB1922" }}>Question Changes</span></h2>
            <div className="accent-underline" style={{ width: "400px", height: "2px", background: "#DB1922" }} />
          </div>
          <div className="shift-row">
            <div className="shift-speech-bubble shift-speech-bubble-left p-4">
              <p className="mb-1 section-content" style={{ color: "#333", fontSize: "1.3rem", lineHeight: "1.5" }}>At a certain stage, firms stop asking:</p>
              <p className="mb-0 fw-bold section-content-desc" style={{ color: "#DB1922", fontSize: "1.7rem", lineHeight: "1.4" }}>"Who do we hire next?"</p>
            </div>
            <div className="shift-arrow d-none d-md-block" aria-hidden="true">→</div>
            <div className="shift-speech-bubble shift-speech-bubble-right p-3">
              <p className="mb-1 section-content" style={{ color: "#333", fontSize: "1.15rem", lineHeight: "1.45" }}>They begin asking:</p>
              <p className="mb-0 fw-bold section-content-desc" style={{ color: "#DB1922", fontSize: "1.4rem", lineHeight: "1.4" }}>"Where is our decision-making capacity constrained?"</p>
            </div>
          </div>
          <div className="pressure-statement section-key-line-card doc-wall-pull-quote section-ending-full-width">
            <p className="text-center section-description">Hiring adds people immediately. Capacity increases gradually.</p>
            <hr className="shift-hr" style={{ borderColor: "#DB1922", borderWidth: "1px", maxWidth: "200px", margin: "0 auto" }} />
          </div>

        </div>
      </section>

      <section className="cta-sec">
        <div className="container">
          <span className="cta-sec-badge">
            <svg className="cta-sec-badge-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
            Free Executive Brief
          </span>
          <h2 className="cta-sec-title">Before You Add Headcount, <span className="cta-sec-title-red">Read the Full Analysis</span></h2>
          <p className="cta-sec-para">This executive brief walks through the hiring timeline, hidden workload shifts, and structural mismatches — without pitching services.</p>
          <DownloadCta className="cta-sec-btn">
            <i className="fa fa-file-pdf" style={{ marginRight: "8px", fontSize: "1.1rem" }} aria-hidden="true" />
            Download the Full PDF Guide
          </DownloadCta>
          <div className="cta-sec-trust">
            <span className="cta-sec-trust-text"> For architecture firm leaders navigating growth pressure. </span>
          </div>
        </div>
      </section>
      <LandingPdfLeadModal
        title="Hiring vs Dedicated Remote Architect"
        downloadUrl={HIRING_PDF_URL}
        trigger={(
          <a
            href={HIRING_PDF_URL}
            className="pdf-fab hiring-lp-pdf-fab"
            title="Get Your Free PDF"
            aria-label="Get Your Free PDF"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-file-pdf" aria-hidden="true" />
          </a>
        )}
      />
      <style>{`
        .hiring-vs-lp .call-icon { display: none !important; }
        .hiring-vs-lp .pdf-fab.hiring-lp-pdf-fab {
          position: fixed;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          z-index: 9999;
          background: #D70416;
          color: #fff;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 6px 18px rgba(215, 4, 22, 0.35);
          text-decoration: none;
        }
        .hiring-vs-lp .pdf-fab.hiring-lp-pdf-fab .fa-file-pdf { font-size: 22px; }
        .hiring-vs-lp .pdf-fab.hiring-lp-pdf-fab:hover::after {
          content: 'Get Your Free PDF';
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          background: #111;
          color: #fff;
          padding: 6px 10px;
          border-radius: 6px;
          white-space: nowrap;
          font-size: 12px;
        }
      `}</style>
      <SiteFooter />
      {/* <WebinarHomePopupModal /> */}
    </main >
  );
};

export default HiringVsDedicatedRemoteArchitectView;
export { HiringVsDedicatedRemoteArchitectView };

const DownloadCta = ({ children, className = "cta-btn" }) => {
  const handleClick = useCallback((e) => {
    try {
      if (typeof window.lintrk === "function") {
        window.lintrk("track", { conversion_id: 24698708 });
      }
    } catch { }
  }, []);
  return (
    <LandingPdfLeadModal
      title="Hiring vs Dedicated Remote Architect"
      downloadUrl={HIRING_PDF_URL}
      onBeforeOpen={handleClick}
      trigger={(
        <a
          href={HIRING_PDF_URL}
          className={className}
          rel="noopener noreferrer"
          target="_blank"
        >
          {children}
        </a>
      )}
    />
  );
};
