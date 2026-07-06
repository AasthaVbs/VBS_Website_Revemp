"use client";
// @ts-nocheck

import React, { useMemo, useState } from "react";
import BookMeetingCta from "@/components/vbs/book-meeting-cta";

const INPUT_IMAGES = [
  { src: "/image/Policeinput.jpg", label: "IFC Architectural Model" },
  { src: "/image/policeInput_2.jpg", label: "Construction Drawing Set" },
  { src: "/image/policeInput_3.jpg", label: "Verbal Scope Confirmation" },
  { src: "/image/policeInput_4.jpg", label: "Clarification Responses" },
  { src: "/image/policeinput5.jpg", label: "Site Survey Data" },
  { src: "/image/policeInput_6.jpg", label: "Structural Reference Drawings" },
  { src: "/image/policeInput_7.jpg", label: "MEP Coordination Inputs" },
  { src: "/image/policeInput_8.jpg", label: "Client Markups" },
];

const OUTPUT_IMAGES = [
  { src: "/image/3D Visualization_1.jpg", label: "Architectural Model" },
  { src: "/image/3D Visualization_2.jpg", label: "Coordinated Structural Model" },
  { src: "/image/3D Visualization_3.jpg", label: "Coordination Issue Log" },
  { src: "/image/3D Visualization_4.jpg", label: "Lumion Exterior Renderings" },
  { src: "/image/3D Visualization_5.jpg", label: "BIM Marketing Visuals" },
];

const INPUT_POINTS = [
  "IFC Architectural model",
  "Construction drawing set",
  "Verbal scope confirmation",
  "Clarification responses",
];

const OUTPUT_POINTS = [
  "Architectural model",
  "Coordinated structural model",
  "Coordination issue log",

  "BIM marketing visuals",
];

const PAIN_POINTS = [
  {
    title: "Updated Models Not Delivered",
    text: "The design team did not provide updated Architectural, Structural, or MEPF models at the CD stage, leaving the client without a coordinated model set.",
  },
  {
    title: "Incomplete Architectural Revisions",
    text: "The architectural model had limited revisions and did not reflect the latest construction drawings, making it unreliable for coordination or documentation.",
  },
  {
    title: "No Structural or MEPF Starting Point",
    text: "Structural and MEPF models were not shared by the design team, leaving no baseline for building, coordinating, or validating engineering systems.",
  },
  {
    title: "Coordination Gaps Across Disciplines",
    text: "Interdisciplinary coordination stalled without updated models across all three disciplines, hindering discrepancy identification and resolution.",
  },
  {
    title: "Risk of Downstream Documentation Errors",
    text: "Proceeding with outdated or incomplete models risked propagating errors into construction documentation, permit packages, and contractor-facing deliverables.",
  },
  {
    title: "Internal Capacity Constraints",
    text: "The client's team could not rebuild and coordinate three discipline models while handling ongoing engineering and client responsibilities.",
  },
];

const SOLUTIONS = [
  {
    title: "Independent Model Development",
    text: "Architectural and Structural models were developed from the ground up using the available IFC model, construction drawings, and applicable standards.",
  },
  {
    title: "Architectural Model Refinement",
    text: "The available model was reviewed against revised PDFs. Missing walls, outdated elements, and furniture mismatches were corrected floor by floor.",
  },
  {
    title: "Structural System Modeled from Scratch",
    text: " The complete structural model was developed independently, covering framing, beams, columns, connections, and wall footings, with attention to complex junction conditions.",
  },
  {
    title: "Structured Coordination List",
    text: "A comprehensive coordination list was prepared at project outset, documenting all issues, responsible disciplines, and required actions for a traceable process. ",
  },
  {
    title: "Proactive Clarification Requests",
    text: "Formal clarification requests were raised and documented for ambiguous items before modeling decisions were finalized and validated",
  },
  {
    title: "Day-Wise Work Planning with QC",
    text: "Coordination items were distributed across a structured daily work plan, with dedicated QC hours allocated before each submission for accuracy",
  },
];

const EXECUTION_STEPS = [
  "Project Review and Coordination",
  "Client Mark-Ups and Model Updates",
  "Structural and Building Modeling",
  "Material, Elevation, and Visualization Development",
  "Visualization Production and Final Rendering",
  "Final Delivery and Submission",
];

const DELIVERED_POINTS = [
  {
    title: "Coordinated BIM Models at LOD 300",
    text: "Delivered fully coordinated Architectural and Structural models at LOD 300.",
  },
  {
    title: "Structured Multidisciplinary Issue Tracking",
    text: "Documented all multidisciplinary discrepancies in a structured coordination list.",
  },
  {
    title: "Architectural Discrepancy Resolution",
    text: "Resolved first and second floor architectural discrepancies against latest drawings.",
  },
  {
    title: "End-to-End Structural Model Development",
    text: "Developed complete structural model from scratch, including complex junction conditions.",
  },
  {
    title: "High-Quality Visualization and Marketing Outputs",
    text: "Produced exterior renderings and BIM marketing visuals within tight timelines.",
  },
  {
    title: "Phase-Gated Quality-Controlled Delivery",
    text: "Maintained QC-verified, phase-gated delivery across four structured project stages.",
  },
];

const STYLES = `
.vbs-case{--red:#D70416;--border:#e8e8e8;background:#fff;color:#000}
.vbs-case *{box-sizing:border-box}
.vbs-case .wrap{max-width:1200px;margin:0 auto;padding:0 48px}
.vbs-case .banner{border-bottom:1px solid var(--border)}
.vbs-case .banner-inner{max-width:1200px;margin:0 auto;padding:0 48px;display:grid;grid-template-columns:1fr 520px;min-height:520px;align-items:stretch}
.vbs-case .banner-left{padding:72px 64px 0 0;display:flex;flex-direction:column;justify-content:center}
.vbs-case h1{font-size:38px;line-height:50px;font-weight:600;margin:0 0 18px}
.vbs-case h1 em{color:var(--red);font-style:normal}
.vbs-case .desc{font-size:15px;line-height:28px;color:#555;max-width:540px}
.vbs-case .banner-right{padding-top:52px}
.vbs-case .hero-img-wrap{position:relative;border-radius:12px;overflow:hidden;height:430px}
.vbs-case .hero-img-wrap img{width:100%;height:100%;object-fit:cover}
.vbs-case .chip{position:absolute;bottom:16px;right:16px;background:rgba(0,0,0,.85);color:#fff;padding:12px 14px 0;border-radius:8px;border-left:3px solid var(--red)}
.vbs-case section{padding:80px 0}
.vbs-case .divider{height:1px;background:var(--border);max-width:1200px;margin:0 auto}
.vbs-case .ov-label{display:inline-flex;align-items:center;gap:10px;font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--red);margin-bottom:14px}
.vbs-case .ov-label::before{content:'';width:22px;height:2px;background:var(--red)}
.vbs-case h2{font-size:34px;line-height:46px;font-weight:600;margin:0 0 18px}
.vbs-case .ov-text p{font-size:16px;line-height:30px;color:#444;margin:0 0 14px}
.vbs-case .stats{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border);border:1px solid var(--border);border-radius:12px;overflow:hidden;margin:44px 0}
.vbs-case .stat{background:#fff;padding:24px}
.vbs-case .stat small{display:block;font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:#666868 !important;margin-bottom:8px;font-weight:800}
.vbs-case .stat strong{font-size:24px;line-height:1;font-weight:700;color:#111}
.vbs-case .value-red{color:#D70416}
.vbs-case .value-black{color:#111}
.vbs-case .tools{display:flex;border:1px solid var(--border);border-radius:12px;overflow:hidden}
.vbs-case .tools-label{background:#000;color:#fff;padding:16px 24px;font-size:12px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;display:flex;align-items:center}
.vbs-case .tools-items{display:flex;flex:1}
.vbs-case .tool{display:flex;align-items:center;gap:10px;padding:16px 24px;border-left:1px solid var(--border);flex:1}
.vbs-case .tool-icon{width:34px;height:34px;border-radius:6px;display:block;object-fit:contain}
.vbs-case .tool-name{font-weight:800;font-size:18px}
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
.vbs-case .flow{display:flex;gap:0;margin-top:40px;position:relative;flex-wrap:wrap}
.vbs-case .flow::before{content:'';position:absolute;left:32px;right:32px;top:32px;height:2px;background:var(--border)}
.vbs-case .step{flex:1;text-align:center;padding:0 8px;position:relative;z-index:1;min-width:170px}
.vbs-case .num{width:64px;height:64px;border-radius:50%;border:2px solid var(--border);background:#fff;margin:0 auto 14px;display:flex;align-items:center;justify-content:center;font-weight:700}
.vbs-case .step.active .num{background:var(--red);border-color:var(--red);color:#fff}
.vbs-case .step b{display:block;font-size:14px;line-height:20px;margin-bottom:5px}
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
.vbs-case .modal-main{position:relative;height:500px;background:#f5f5f5}
.vbs-case .modal-main img{width:100%;height:100%;object-fit:contain}
.vbs-case .arrow{position:absolute;top:50%;transform:translateY(-50%);width:40px;height:40px;border:1px solid var(--border);border-radius:50%;background:#fff;display:flex;align-items:center;justify-content:center;cursor:pointer}
.vbs-case .arrow.left{left:14px}.vbs-case .arrow.right{right:14px}
.vbs-case .thumbs{display:flex;gap:8px;padding:10px 16px;background:#fafafa;border-top:1px solid var(--border);overflow-x:auto}
.vbs-case .thumb{width:76px;height:54px;border-radius:6px;overflow:hidden;border:2px solid transparent;opacity:.55;cursor:pointer;flex-shrink:0}
.vbs-case .thumb.active{border-color:var(--red);opacity:1}.vbs-case .thumb img{width:100%;height:100%;object-fit:cover}
@media (max-width:1100px){.vbs-case .wrap,.vbs-case .banner-inner{padding:0 32px}.vbs-case .banner-inner{grid-template-columns:1fr 380px}.vbs-case .cad-grid{grid-template-columns:1fr;gap:36px}.vbs-case .cad-left-sticky{position:static}}
@media (max-width:900px){.vbs-case .banner-inner{grid-template-columns:1fr;min-height:auto}.vbs-case .banner-left{padding:54px 0;border-right:none;border-bottom:1px solid var(--border)}.vbs-case .banner-right{padding-top:28px}.vbs-case .hero-img-wrap{height:320px}.vbs-case .ps-grid,.vbs-case .io-grid{grid-template-columns:1fr}.vbs-case .stats{grid-template-columns:repeat(2,1fr)}.vbs-case .flow{gap:20px}.vbs-case .flow::before{display:none}}
@media (max-width:640px){.vbs-case .wrap,.vbs-case .banner-inner{padding:0 20px}.vbs-case h1{font-size:31px;line-height:1.2}.vbs-case h2{font-size:28px;line-height:1.25}.vbs-case .stats{grid-template-columns:1fr}.vbs-case .tools{flex-direction:column}.vbs-case .tools-items{flex-direction:column}.vbs-case .tool{border-left:none;border-top:1px solid var(--border)}.vbs-case .modal-main{height:360px}}
`;

const SectionTag = ({ children }) => <div className="ov-label">{children}</div>;
const ArrowIcon = ({ right = false }) => <span>{right ? ">" : "<"}</span>;

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

export default function MultiDisciplineBimModelingForPublicSectorAtlantaPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [modalType, setModalType] = useState(null);
  const [modalIndex, setModalIndex] = useState(0);
  const modalImages = useMemo(() => (modalType === "input" ? INPUT_IMAGES : OUTPUT_IMAGES), [modalType]);

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
                Multi-Discipline BIM Modeling from Scratch:<br />
                <em>Public Safety Facility, Atlanta</em>
              </h1>
              <p className="lead text-secondary desc">
              From incomplete inputs to coordinated Structural and Architectural BIM models delivery for a 20,800 sq. ft. public Safety facility in Atlanta, GA
              </p>
            </div>
            <div className="banner-right">
              <div className="hero-img-wrap">
                <img src="/image/police3D Visualization Banner.jpg" alt="Public safety facility banner" />
                <div className="chip">
                  <strong>Public Safety Facility</strong>
                  <p>Atlanta, GA</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="wrap">
            <div className="ov-text">
              <h2>Project Overview</h2>
              <p>
                A multidisciplinary engineering consultancy in Atlanta engaged our team to develop fully coordinated
                Structural and Architectural BIM models for a 20,800 sq. ft. two-story institutional facility. Updated
                models were never made available by the broader design team, creating a critical coordination gap at the
                Construction Documents stage.
              </p>
              <p>
                We deployed a dedicated BIM team, including an Architect, a Structural Engineer, and a Project Manager.
                Working from the available IFC model and issued construction drawings, the team independently developed
                all discipline models. Construction-ready content was delivered alongside high-quality Lumion renderings.
              </p>
            </div>
            <div className="stats">
              <div className="stat"><small>Level of Development</small><strong><span className="value-black">LOD </span><span className="value-red">300</span></strong></div>
              <div className="stat"><small>Project Area</small><strong><span className="value-red">20,800</span><span className="value-black"> Sq.Ft.</span></strong></div>
              <div className="stat"><small>Location</small><strong><span className="value-red">Atlanta</span><span className="value-black">, GA</span></strong></div>
              <div className="stat"><small>Team Size</small><strong><span className="value-red">3</span><span className="value-black"> Resources</span></strong></div>
            </div>
            <div className="tools">
              <div className="tools-label">Tools Used</div>
              <div className="tools-items">
                <div className="tool"><img className="tool-icon" src="/icon/revit.png" alt="Revit" /><div><div className="tool-name">Revit</div></div></div>
                <div className="tool"><img className="tool-icon" src="/icon/lumion.png" alt="Lumion" /><div><div className="tool-name">Lumion</div></div></div>
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
                  <img src={OUTPUT_IMAGES[2].src} alt="Output" />
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
              <div className="img-card"><img src="/image/policeInput_4.jpg" alt="Pain points" /></div>
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
              <div className="img-card"><img src="/image/3D Visualization_1.jpg" alt="Solutions" /></div>
              <div className="list">
                {SOLUTIONS.map(item => (
                  <div className="row-item" key={item.title}>
                    <span className="sq"><DeliveredIcon /></span>
                    <div><h4>{item.title}</h4><p>{item.text}</p></div>
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
            <h2>End-to-End Project Delivery Through a Phase-Controlled Approach</h2>
            <p className="text-secondary">
              The project was delivered across sequential stages, with each phase reviewed and confirmed before the team
              advanced. This phase-gated approach ensured that model content, coordination items, and client approvals
              were progressively locked in, reducing rework and maintaining forward momentum.
            </p>
            <div className="flow">
              {EXECUTION_STEPS.map((label, i) => (
                <div className={`step ${activeStep === i ? "active" : ""}`} key={label} onMouseEnter={() => setActiveStep(i)}>
                  <div className="num">{String(i + 1).padStart(2, "0")}</div>
                  <b>{label}</b>
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
                End-to-end coordinated BIM delivery with validated models, resolved design gaps, and structured phase-gated execution
              </p>
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

