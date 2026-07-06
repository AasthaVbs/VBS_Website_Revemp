"use client";
// @ts-nocheck

import React, { useEffect, useMemo, useState } from "react";
import { ensureNimbusBookingScript, openBookMeetingModal } from "@/utils/nimbus-booking";

const INPUT_IMAGES = [
  { src: "/image/2D AutoCAD drawing_1.jpg", label: "2D AutoCAD Drawing Set 1" },
  { src: "/image/2D AutoCAD drawing_3.jpg", label: "2D AutoCAD Drawing Set 3" },
  { src: "/image/2D AutoCAD drawing_4.jpg", label: "2D AutoCAD Drawing Set 4" },
  { src: "/image/2D AutoCAD drawing_5.jpg", label: "2D AutoCAD Drawing Set 5" },
  { src: "/image/2D AutoCAD drawing.jpg", label: "2D AutoCAD Drawing Base" },
];

const OUTPUT_IMAGES = [
  { src: "/image/Architectural-3D-Visualization_2.jpg", label: "Architectural 3D Visualization 2" },
  { src: "/image/Architectural-3D-Visualization-(3).jpg", label: "Architectural 3D Visualization 3" },
  { src: "/image/Architectural-3D-Visualization-(4).jpg", label: "Architectural 3D Visualization 4" },
  { src: "/image/Architectural-3D-Visualization-(5).jpg", label: "Architectural 3D Visualization 5" },
  { src: "/image/Architectural-3D-Visualization.jpg", label: "Architectural 3D Visualization" },
];

const INPUT_POINTS = [
  "Existing 2D AutoCAD drawing set",
  "Client submission comments and RFI inputs",
  "Technical and graphical mark-ups",
  "Design references and brief",
  "Approved interior layouts and finish schedule",
];

const OUTPUT_POINTS = [
  "Coordinated and corrected AutoCAD drawing set",
  "Updated floor plans with resolved mark-ups",
  "Construction-feasible Revit facade models",
  "Multi-option material and massing studies",
  "Photorealistic Lumion exterior and interior renders",


];

const PAIN_POINTS = [
  {
    title: "Drawing Discrepancies & Coordination Gaps",
    text: "Existing drawings had inconsistencies that needed correction before the project could progress to production.",
  },
  {
    title: "Design Decision Bottleneck",
    text: "Multiple facade and material options were needed with no clear visual reference to start decision-making from.",
  },
  {
    title: "First-Time Documentation Involvement",
    text: "Fast onboarding and precise understanding of requirements were critical from day one of engagement.",
  },
  {
    title: "Dual-Purpose Output Needed",
    text: "Visuals had to serve both technical approvals and marketing needs simultaneously.",
  },
];

const SOLUTIONS = [
  {
    title: "Structured Documentation Review",
    points: [
      "Audited AutoCAD drawings based on comments and created a consolidated RFI list to resolve conflicts before production. ",

    ],
  },
  {
    title: "Systematic Mark-Up Resolution",
    points: [
      "Incorporated technical and graphical mark-ups into AutoCAD files, ensuring layer consistency and coordination. ",
    ],
  },
  {
    title: "Multiple Facade Options, Iteratively Refined",
    points: [
      "Created 3D facade models in Revit on client references, U.S. standards, exploring materials & massing through iterative reviews. ",

    ],
  },
  {
    title: "High-Quality Renders for Dual Use",
    points: [
      "Exported Revit models to Lumion for photorealistic renderings and delivered interior, exterior packages for approvals and marketing.",
    ],
  },
];

const EXECUTION_STEPS = [
  ["Documentation", "Review", "AutoCAD audit against submission comments"],
  ["Query", "Resolution", "RFI consolidation and conflict resolution"],
  ["Drawing", "Updates", "Mark-up incorporation and coordination"],
  ["3D Building", "Modeling", "Revit BIM facade model construction"],
  ["Material & Elevation", "Development", "Multi-option massing studies"],
  ["Final", "Visualization", "Lumion renders for approvals and marketing"],
];

const DELIVERED_POINTS = [
  {
    title: "Fully Coordinated Submission-Ready Drawing Set",
    text: "Resolved cross-document discrepancies, delivering a coordinated, submission-ready drawing set aligned with project requirements.",
  },
  {
    title: "Multiple Revit Facade Alternatives",
    text: "Developed Revit-based facade alternatives with varied material and massing options, accelerating design decisions.",
  },
  {
    title: "Permit-Standard and Marketing-Grade Renders",
    text: "Produced photorealistic exterior and interior renders ready for permit approvals and marketing campaigns.",
  },
  {
    title: "Construction-Feasible Facade Design",
    text: "Finalized a construction-feasible facade design through structured workflow and iterative client review cycles.",
  },
  {
    title: "Complete RFI Resolution Log Maintained",
    text: "Ensured full documentation accuracy through a maintained RFI resolution log before advancing to visualization.",
  },
  {
  title: "Seamless Documentation-to-Render Progression",
  text: "Enabled seamless progression from documentation through Revit modeling to final render delivery.",
  },
];

const LAS_VEGAS_CASE_META = {
  title:
    "Multi-Family Apartment BIM Visualization Case Study | Las Vegas | Virtual Building Studio",
  description:
    "See how Virtual Building Studio supported a Las Vegas multi-family apartment project with AutoCAD mark-up resolution, Revit facade modeling, and photorealistic Lumion visualizations.",
};

const STYLES = `
.vbs-case{--red:#D70416;--border:#e8e8e8;background:#fff;color:#000}
.vbs-case *{box-sizing:border-box}
.vbs-case .wrap{max-width:1200px;margin:0 auto;padding:0 48px}
.vbs-case .banner{border-bottom:1px solid var(--border)}
.vbs-case .banner-inner{max-width:1200px;margin:0 auto;padding:0 48px;display:grid;grid-template-columns:1fr 520px;min-height:520px;align-items:stretch}
.vbs-case .banner-left{padding:72px 64px 0 0;display:flex;flex-direction:column;justify-content:center}
.vbs-case .crumb{display:flex;gap:8px;font-size:12px;color:#999;margin-bottom:24px}
.vbs-case .tag{display:inline-flex;align-items:center;gap:8px;font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--red);margin-bottom:18px}
.vbs-case .tag span{width:20px;height:2px;background:var(--red)}
.vbs-case h1{font-size:38px;line-height:50px;font-weight:600;margin:0 0 18px}
.vbs-case h1 em{color:var(--red);font-style:normal}
.vbs-case .desc{font-size:15px;line-height:28px;color:#555;max-width:500px}
.vbs-case .meta{display:flex;gap:24px;flex-wrap:wrap;margin-top:24px}
.vbs-case .meta-item{display:flex;align-items:center;gap:8px;font-size:13px;color:#555}
.vbs-case .dot{width:8px;height:8px;border-radius:50%;background:var(--red)}
.vbs-case .banner-right{padding-top:52px}
.vbs-case .hero-img-wrap{position:relative;border-radius:12px;overflow:hidden;height:430px}
.vbs-case .hero-img-wrap img{width:100%;height:100%;object-fit:cover}
.vbs-case .lod{position:absolute;top:16px;left:16px;background:var(--red);color:#fff;font-size:10px;font-weight:700;letter-spacing:.08em;padding:6px 10px;border-radius:3px;text-transform:uppercase}
.vbs-case .chip{position:absolute;bottom:16px;right:16px;background:rgba(0,0,0,.85);color:#fff;padding:12px 14px 0;border-radius:8px;border-left:3px solid var(--red)}
.vbs-case section{padding:80px 0}
.vbs-case .divider{height:1px;background:var(--border);max-width:1200px;margin:0 auto}
.vbs-case .ov-label{display:inline-flex;align-items:center;gap:10px;font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--red);margin-bottom:14px}
.vbs-case .ov-label::before{content:'';width:22px;height:2px;background:var(--red)}
.vbs-case h2{font-size:34px;line-height:46px;font-weight:600;margin:0 0 18px}

.vbs-case .ov-text p{font-size:16px;line-height:30px;color:#444;margin:0 0 14px}
.vbs-case .stats{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border);border:1px solid var(--border);border-radius:12px;overflow:hidden;margin:44px 0}
.vbs-case .stat{background:#fff;padding:24px}
.vbs-case .stat small{display:block;font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:#666868 !important;margin-bottom:8px; font-weight: 800;}
.vbs-case .stat strong{font-size:26px;line-height:1;font-weight:700;color:#111}
.vbs-case .value-red{color:#D70416}
.vbs-case .value-black{color:#111}
.vbs-case .tools{display:flex;border:1px solid var(--border);border-radius:12px;overflow:hidden}
.vbs-case .tools-label{background:#000;color:#fff;padding:16px 24px;font-size:12px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;display:flex;align-items:center}
.vbs-case .tools-items{display:flex;flex:1}
.vbs-case .tool{display:flex;align-items:center;gap:10px;padding:16px 24px;border-left:1px solid var(--border);flex:1}
.vbs-case .tool-icon{width:34px;height:34px;border-radius:6px;display:block;object-fit:contain}
.vbs-case .tool-name{font-weight:800; font-size: 18px;}
.vbs-case .ps-grid,.vbs-case .io-grid{display:grid;grid-template-columns:1fr 1fr;gap:44px}
.vbs-case h3{font-size:24px;line-height:34px;font-weight:600;margin:0 0 22px}
.vbs-case .img-card{border-radius:12px;overflow:hidden;box-shadow:0 8px 30px rgba(0,0,0,.08);margin-bottom:24px}
.vbs-case .img-card img{display:block;width:100%;height:260px;object-fit:cover}
.vbs-case .list{border-top:1px solid var(--border)}
.vbs-case .row-item{display:flex;gap:14px;padding:16px 0;border-bottom:1px solid var(--border);align-items:flex-start;transition:padding-left .22s ease}
.vbs-case .row-item:hover{padding-left:6px}
.vbs-case .sq{width:36px;height:36px;border-radius:6px;flex-shrink:0;display:flex;align-items:center;justify-content:center;background:#fff;border:1px solid var(--border);transition:all .25s ease;color:var(--red)}
.vbs-case .sq svg{width:16px;height:16px;stroke:currentColor;stroke-width:2.2;fill:none;transition:stroke .25s ease}
.vbs-case .row-item:hover .sq{background:var(--red);border-color:var(--red);color:#fff}
.vbs-case .row-item h4{font-size:14px;line-height:22px;margin:0 0 4px}
.vbs-case .row-item p{font-size:13px;line-height:22px;color:#666;margin:0}
.vbs-case .solve{display:flex;flex-direction:column;gap:14px}
.vbs-case .solve-card{border:1px solid var(--border);border-radius:10px;padding:18px}
.vbs-case .solve-card h4{font-size:14px;line-height:21px;margin:0 0 6px}
.vbs-case .solve-card li{font-size:13px;line-height:22px;color:#666;margin-left:18px}
.vbs-case .flow{display:flex;gap:0;margin-top:40px;position:relative}
.vbs-case .flow::before{content:'';position:absolute;left:32px;right:32px;top:32px;height:2px;background:var(--border)}
.vbs-case .step{flex:1;text-align:center;padding:0 8px;position:relative;z-index:1}
.vbs-case .num{width:64px;height:64px;border-radius:50%;border:2px solid var(--border);background:#fff;margin:0 auto 14px;display:flex;align-items:center;justify-content:center;font-weight:700}
.vbs-case .step.active .num{background:var(--red);border-color:var(--red);color:#fff}
.vbs-case .step b{display:block;font-size:14px;line-height:20px;margin-bottom:5px}
.vbs-case .step span{font-size:12px;line-height:18px;color:#888}
.vbs-case .io-thumb{position:relative;border:1px solid var(--border);border-radius:12px;overflow:hidden;cursor:pointer}
.vbs-case .io-thumb img{display:block;width:100%;height:260px;object-fit:cover}
.vbs-case .io-overlay{position:absolute;inset:0;background:rgba(0,0,0,.28);display:flex;align-items:center;justify-content:center;opacity:0;transition:opacity .2s}
.vbs-case .io-thumb:hover .io-overlay{opacity:1}
.vbs-case .zoom{width:46px;height:46px;border-radius:50%;background:#fff;display:flex;align-items:center;justify-content:center;font-size:18px}
.vbs-case .io-note{position:absolute;left:12px;bottom:12px;background:rgba(0,0,0,.8);color:#fff;font-size:11px;padding:5px 10px;border-radius:3px}
.vbs-case .io-items{margin-top:14px;border-top:1px solid var(--border)}
.vbs-case .io-items p.text-secondary{display:flex;align-items:flex-start;gap:10px;padding:10px 0;border-bottom:1px solid var(--border);font-size:16px;line-height:21px;color:#555 !important;margin:0}
.vbs-case .io-items p.text-secondary::before{content:'';width:6px;height:6px;border-radius:50%;background:var(--red);margin-top:12px;flex-shrink:0}
.vbs-case .cad-grid{display:grid;grid-template-columns:360px 1fr;gap:64px}
.vbs-case .cad-left-sticky{position:sticky;top:110px;align-self:start}
.vbs-case .modal{position:fixed;inset:0;background:rgba(255,255,255,.96);display:flex;align-items:center;justify-content:center;padding:24px;z-index:1200}
.vbs-case .modal-box{max-width:920px;width:100%;background:#fff;border:1px solid rgba(0,0,0,.1);border-radius:16px;overflow:hidden;box-shadow:0 20px 70px rgba(0,0,0,.2)}
.vbs-case .modal-head{display:flex;justify-content:space-between;align-items:center;padding:12px 18px;border-bottom:1px solid var(--border)}
.vbs-case .badge{font-size:10px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;padding:4px 10px;border-radius:3px;margin-right:8px}
.vbs-case .badge.in{background:#f0f0f0;color:#555}.vbs-case .badge.out{background:rgba(215,4,22,.1);color:var(--red)}
.vbs-case .modal-title{font-size:13px;font-weight:600}
.vbs-case .modal-main{position:relative;height:500px;background:#f5f5f5}
.vbs-case .modal-main img{width:100%;height:100%;object-fit:contain}
.vbs-case .arrow{position:absolute;top:50%;transform:translateY(-50%);width:40px;height:40px;border:1px solid var(--border);border-radius:50%;background:#fff;display:flex;align-items:center;justify-content:center;cursor:pointer}
.vbs-case .arrow.left{left:14px}.vbs-case .arrow.right{right:14px}
.vbs-case .thumbs{display:flex;gap:8px;padding:10px 16px;background:#fafafa;border-top:1px solid var(--border);overflow-x:auto}
.vbs-case .thumb{width:76px;height:54px;border-radius:6px;overflow:hidden;border:2px solid transparent;opacity:.55;cursor:pointer;flex-shrink:0}
.vbs-case .thumb.active{border-color:var(--red);opacity:1}.vbs-case .thumb img{width:100%;height:100%;object-fit:cover}
@media (max-width:1100px){.vbs-case .wrap,.vbs-case .banner-inner{padding:0 32px}.vbs-case .banner-inner{grid-template-columns:1fr 380px}.vbs-case .cad-grid{grid-template-columns:1fr;gap:36px}.vbs-case .cad-left-sticky{position:static}}
@media (max-width:900px){.vbs-case .banner-inner{grid-template-columns:1fr;min-height:auto}.vbs-case .banner-left{padding:54px 0;border-right:none;border-bottom:1px solid var(--border)}.vbs-case .banner-right{padding-top:28px}.vbs-case .hero-img-wrap{height:320px}.vbs-case .ps-grid,.vbs-case .io-grid{grid-template-columns:1fr}.vbs-case .stats{grid-template-columns:repeat(2,1fr)}.vbs-case .flow{flex-wrap:wrap;gap:20px}.vbs-case .flow::before{display:none}.vbs-case .step{flex:0 0 calc(33.333% - 14px)}}
@media (max-width:640px){.vbs-case .wrap,.vbs-case .banner-inner{padding:0 20px}.vbs-case h1{font-size:31px;line-height:1.2}.vbs-case h2{font-size:28px;line-height:1.25}.vbs-case .stats{grid-template-columns:1fr}.vbs-case .tools{flex-direction:column}.vbs-case .tools-items{flex-direction:column}.vbs-case .tool{border-left:none;border-top:1px solid var(--border)}.vbs-case .modal-main{height:360px}}
`;

const SectionTag = ({ children }) => (
  <div className="ov-label">
    {children}
  </div>
);

const ArrowIcon = ({ right = false }) => <span>{right ? ">" : "<"}</span>;

const SmallIcon = () => (
  <svg viewBox="0 0 24 24">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const ErrorFilledIcon = () => (
  <svg viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

const DeliveredIcon = () => (
  <svg viewBox="0 0 24 24">
    <polyline points="9 11 12 14 22 4" />
    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
  </svg>
);

export default function ArchitectureOutsourceServicesCaseStudy() {
  const [activeStep, setActiveStep] = useState(0);
  const [modalType, setModalType] = useState(null);
  const [modalIndex, setModalIndex] = useState(0);

  const modalImages = useMemo(() => (modalType === "input" ? INPUT_IMAGES : OUTPUT_IMAGES), [modalType]);

  useEffect(() => {
    ensureNimbusBookingScript().catch(() => {});
  }, []);

  useEffect(() => {
    const onKey = e => {
      if (!modalType) return;
      if (e.key === "Escape") setModalType(null);
      if (e.key === "ArrowRight") setModalIndex(prev => (prev + 1) % modalImages.length);
      if (e.key === "ArrowLeft") setModalIndex(prev => (prev - 1 + modalImages.length) % modalImages.length);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [modalType, modalImages.length]);

  const openModal = type => {
    setModalType(type);
    setModalIndex(0);
  };

  return (
    <>
      <style>{STYLES}</style>
      <main className="vbs-case">
        <section className="banner">
          <div className="banner-inner">
            <div className="banner-left">
             
              <h1>
                From Redlines to Renders:<br/>
                <em>Multi-Family Apartment,</em><br />
                <em>Las Vegas</em>
              </h1>
              <p className="lead text-secondary">
              From resolving drawing discrepancies to developing facade options and realistic 3D renders, the 225,624 sq.ft. residential project progressed through a structured workflow.
              </p>

            </div>
            <div className="banner-right">
              <div className="hero-img-wrap">
                <img src="/image/Architectural 3D Visualization_Banner.jpg" alt="Multi-family apartment banner" />
              
                <div className="chip">
                  <strong>Multi-Family Residential</strong>
                  <p>Las Vegas, Nevada USA</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="wrap">
            {/* <SectionTag>Project Overview</SectionTag> */}
            <div className="ov-text">
              <h2>Project Overview</h2>
              <p>
                A Las Vegas-based architectural design firm engaged our team to support documentation review and design visualization for a multi-family apartment development. The project was executed through a dedicated remote architect embedded within the client's workflow, enabling fast iteration on documentation updates and facade visualization while maintaining continuous coordination.
              </p>
              <p>
                The result was a clean documentation set and a compelling visual package that enabled the client to move confidently into design approvals and next-stage development.
              </p>
            </div>
            <div className="stats">
              <div className="stat"><small>Level of Development</small><strong><span className="value-black">LOD </span><span className="value-red">200</span></strong></div>
              <div className="stat"><small>Project Area</small><strong><span className="value-red">225,624</span><span className="value-black"> Sq.Ft.</span></strong></div>
              <div className="stat"><small>Location</small><strong><span className="value-red">Las Vegas</span><span className="value-black">, NV</span></strong></div>
              <div className="stat"><small>Manpower Used</small><strong><span className="value-red">3</span><span className="value-black"> Resources</span></strong></div>
            </div>
            <div className="tools">
              <div className="tools-label">Tools Used</div>
              <div className="tools-items">
                <div className="tool"><img className="tool-icon" src="/icon/revit.png" alt="Revit" /><div><div className="tool-name">Autodesk Revit</div></div></div>
                <div className="tool"><img className="tool-icon" src="/icon/lumion.png" alt="Lumion" /><div><div className="tool-name">Lumion</div></div></div>
                <div className="tool"><img className="tool-icon" src="/icon/autocad.png" alt="AutoCAD" /><div><div className="tool-name">AutoCAD</div></div></div>
              </div>
            </div>
          </div>
        </section>

        <div className="divider" />

        <section>
          <div className="wrap">
            <SectionTag>Project Deliverables</SectionTag>
            <h2>Input vs Output</h2>
            <div className="io-grid">
              <div>
                <h3>What We Received</h3>
                <div className="io-thumb" onClick={() => openModal("input")} role="button" tabIndex={0}>
                  <img src={INPUT_IMAGES[0].src} alt="Input" />
                  <div className="io-overlay"><div className="zoom">+</div></div>
                  <div className="io-note">Click to view all inputs</div>
                </div>
                <div className="io-items">
                  {INPUT_POINTS.map(point => <p className="text-secondary" key={point}>{point}</p>)}
                </div>
              </div>
              <div>
                <h3>What We Delivered</h3>
                <div className="io-thumb" onClick={() => openModal("output")} role="button" tabIndex={0}>
                  <img src={OUTPUT_IMAGES[0].src} alt="Output" />
                  <div className="io-overlay"><div className="zoom">+</div></div>
                  <div className="io-note">Click to view all outputs</div>
                </div>
                <div className="io-items">
                  {OUTPUT_POINTS.map(point => <p className="text-secondary" key={point}>{point}</p>)}
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="divider" />

        <section>
          <div className="wrap ps-grid">
            <div>
              <SectionTag>Client Challenges</SectionTag>
              <h3>Pain Points of the Client</h3>
              <div className="img-card"><img src="/image/2D AutoCAD drawing_3.jpg" alt="Pain points" /></div>
              <div className="list">
                {PAIN_POINTS.map(item => (
                  <div className="row-item" key={item.title}>
                    <span className="sq"><ErrorFilledIcon /></span>
                    <div><h4>{item.title}</h4><p>{item.text}</p></div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <SectionTag>Our Approach</SectionTag>
              <h3>How We Solved It</h3>
              <div className="img-card"><img src="/image/Architectural-3D-Visualization-(5).jpg" alt="Solutions" /></div>
              <div className="list">
                {SOLUTIONS.map(item => (
                  <div className="row-item" key={item.title}>
                    <span className="sq"><DeliveredIcon /></span>
                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.points?.[0] || ""}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="divider" />

        <section>
          <div className="wrap">
            <SectionTag>Execution Strategy</SectionTag>
            <h2>A Structured Delivery Workflow - Phase by Phase</h2>
            <p className="text-secondary">
              The project progressed through a structured delivery workflow. Beginning with documentation audit and RFI consolidation, followed by coordinated drawing updates, BIM facade development, and final visualization. This structured approach allowed the client's internal team to review iterations quickly while maintaining design continuity.
            </p>
            <div className="flow">
              {EXECUTION_STEPS.map(([l1, l2, sub], i) => (
                <div className={`step ${activeStep === i ? "active" : ""}`} key={`${l1}-${l2}`} onMouseEnter={() => setActiveStep(i)}>
                  <div className="num">{String(i + 1).padStart(2, "0")}</div>
                  <b>{l1}<br />{l2}</b>
                  
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="divider" />

        <section>
          <div className="wrap cad-grid">
            <div className="cad-left-sticky pt-2">
              <h2>Coordinated.<br />Approved.<br />Delivered.</h2>
              <p className="text-secondary">
              A coordinated documentation workflow combined with structured design development enabled smoother decision-making and clear visualization outcomes.
              </p>
              <button
                type="button"
                onClick={openBookMeetingModal}
                className="btn btn-lightblue text-white text-uppercase px-lg-4 py-2 rounded-pill fs-4 fw-semibold"
              >
                Start Your Project
              </button>
            </div>
            <div className="list">
              {DELIVERED_POINTS.map(item => (
                <div className="row-item" key={item.title}>
                  <span className="sq"><DeliveredIcon /></span>
                  <div><h4>{item.title}</h4><p>{item.text}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {modalType && (
          <div className="modal" onClick={() => setModalType(null)}>
            <div className="modal-box" onClick={e => e.stopPropagation()}>
              <div className="modal-head">
                <div />
                <button onClick={() => setModalType(null)} className="arrow" style={{ position: "static", transform: "none" }}>x</button>
              </div>
              <div className="modal-main">
                <button className="arrow left" onClick={() => setModalIndex(prev => (prev - 1 + modalImages.length) % modalImages.length)}>
                  <ArrowIcon />
                </button>
                <img src={modalImages[modalIndex]?.src} alt="Preview" />
                <button className="arrow right" onClick={() => setModalIndex(prev => (prev + 1) % modalImages.length)}>
                  <ArrowIcon right />
                </button>
              </div>
              <div className="thumbs">
                {modalImages.map((img, idx) => (
                  <button key={img.label} className={`thumb ${idx === modalIndex ? "active" : ""}`} onClick={() => setModalIndex(idx)}>
                    <img src={img.src} alt={img.label} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
      </>
  );
}
