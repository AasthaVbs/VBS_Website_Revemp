"use client";
// @ts-nocheck

import React, { useMemo, useState } from "react";
import BookMeetingCta from "@/components/vbs/book-meeting-cta";

const INPUT_IMAGES = [
  { src: "/image/Input_Construction Documentation_1.jpg", label: "Existing As-Built Drawings" },
  { src: "/image/Input_Construction Documentation_2.jpg", label: "Redlines and Design Markups" },
  { src: "/image/Input_Construction Documentation_3.jpg", label: "Client Standards and Templates" },
  { src: "/image/Input_Construction Documentation_4.jpg", label: "Zoning and Code References" },
  { src: "/image/Input_Construction Documentation_5.jpg", label: "Software and Platform Access" },
  { src: "/image/Input_Construction Documentation_6.jpg", label: "Phase-Wise Review Feedback" },
];

const OUTPUT_IMAGES = [
  { src: "/image/3D Visualizaton_1.jpg", label: "Coordinated BIM Models" },
  { src: "/image/3D Visualizaton_2.jpg", label: "Complete CD Sets" },
  { src: "/image/3D Visualizaton_3.jpg", label: "Permit-Ready Drawing Package" },
  { src: "/image/3D Visualizaton_4.jpg", label: "3D Visualizations and Renderings" },
  { src: "/image/3D Visualizaton_5.jpg", label: "Advanced BIM Coordination" },
  { src: "/image/3D Visualizaton_6.jpg", label: "Construction-Ready Outputs" },
  { src: "/image/3D Visualizaton_7.jpg", label: "Final Project Delivery" },
];

const INPUT_POINTS = [
  "Existing as-built drawings",
  "Redlines and design markups",
  "Software and platform access",
  "Client standards and templates",
  "Phase-wise review feedback",
  "Zoning and code references",
];

const OUTPUT_POINTS = [
  "Clash-free BIM models",
  "Complete CD sets",
  "Permit-ready drawing packages",
  "Incorporated redline revisions",
  "Custom Revit family creation",
  "3D visualizations and renderings",
];

const PAIN_POINTS = [
  {
    title: "Managing Documentation Capacity Across Project Phases",
    text: "Maintaining a full-time in-house documentation team was difficult to justify due to fluctuating project workload, especially during DD and CD phases.",
  },
  {
    title: "Increased Workload During DD and CD Phases",
    text: "During DD and CD stages, documentation workload increased significantly, creating pressure on the internal team to meet permit submission and issue deadlines. ",
  },
  {
    title: "Inconsistent Output from External Teams",
    text: "Previous external teams were able to produce drawings but struggled to follow the firm's documentation standards, resulting in rework, misalignment, and coordination issues.",
  },
  {
    title: "Need for Standardized Documentation and QA",
    text: "The firm required consistent documentation standards, coordinated BIM models, and structured QA processes to ensure permit-ready and construction-ready drawing sets across all phases.",
  },
];

const SOLUTIONS = [
  {
    title: "Dedicated Documentation Team",
    text: "A dedicated team was assigned to handle ongoing documentation and coordination tasks, ensuring consistency in output and alignment with the firm's standards and workflow.",
  },
  {
    title: "Structured Documentation and QA Workflow",
    text: "Standard templates, family libraries, and QA check processes were implemented to maintain uniformity and accuracy across drawing sets and project stages.",
  },
  {
    title: "Coordination and Redline Management",
    text: "Redline updates, model revisions, and coordination tasks were managed continuously to ensure drawings remained accurate, updated, and aligned with design intent.",
  },
  {
    title: "Regular Review and Communication",
    text: "Phase-wise and weekly reviews ensured alignment with project expectations, reduced rework, and maintained consistency throughout the documentation process.",
  },
];

const EXECUTION_STEPS = [
  "Scope Briefing and Tool Alignment",
  "Schematic Design and 3D Development",
  "Design Development and Redline Incorporation",
  "Permit Drawing Preparation",
  "Construction Document (CD Set) Production",
  "Clash Detection, Review and Final Delivery",
];

const DELIVERED_POINTS = [
  {
    title: "Fast Turnaround Delivery",
    text: "Maintained consistent 3 to 4-day turnaround across documentation tasks.",
  },
  {
    title: "End-to-End Documentation",
    text: "Delivered complete construction documentation sets across all phases.",
  },
  {
    title: "Advanced BIM Coordination (LOD 350)",
    text: "Developed coordinated BIM models at LOD 350 with permit-ready outputs.",
  },
  {
    title: "Reduced Rework Efficiency",
    text: "Reduced rework through standardized documentation and QA processes.",
  },
  {
    title: "Scalable Workload Management",
    text: "Managed peak workload without expanding the internal team.",
  },
  {
    title: "Lifecycle Coordination Consistency",
    text: "Improved coordination and maintained consistency across project lifecycle.",
  },
];

const TOOLS = [
  { name: "Revit", icon: "/icon/revit.png" },
  { name: "AutoCAD", icon: "/icon/autocad.png" },
  { name: "Navisworks", icon: "/icon/navisworks.png" },
  { name: "BIM 360", icon: "/icon/bimcollab.png" },
  { name: "Enscape", icon: null },
  { name: "Blender", icon: null },
  { name: "Revu", icon: null },
  { name: "Photoshop", icon: null },
];

const STYLES = `
.vbs-case{--red:#D70416;--border:#e8e8e8;background:#fff;color:#000;overflow-x:hidden}
.vbs-case *{box-sizing:border-box}
.vbs-case .wrap{max-width:1200px;margin:0 auto;padding:0 48px}
.vbs-case .banner{border-bottom:1px solid var(--border)}
.vbs-case .banner-inner{max-width:1200px;margin:0 auto;padding:0 48px;display:grid;grid-template-columns:1fr 520px;min-height:520px;align-items:stretch}
.vbs-case .banner-left{padding:72px 64px 0 0;display:flex;flex-direction:column;justify-content:center}
.vbs-case h1{font-size:38px;line-height:50px;font-weight:600;margin:0 0 18px}
.vbs-case h1 em{color:var(--red);font-style:normal}
.vbs-case .desc{font-size:15px;line-height:28px;color:#555;max-width:500px}
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
.vbs-case .tools-items{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));flex:1}
.vbs-case .tool{display:flex;align-items:center;gap:10px;padding:16px 18px;border-left:1px solid var(--border);border-top:1px solid var(--border)}
.vbs-case .tools-items .tool:nth-child(-n+4){border-top:none}
.vbs-case .tool-icon{width:34px;height:34px;border-radius:6px;display:block;object-fit:contain}
.vbs-case .tool-fallback{width:34px;height:34px;border-radius:6px;background:#f3f4f6;color:#111;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700}
.vbs-case .tool-name{font-weight:800;font-size:15px}
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
.vbs-case .step{flex:1;text-align:center;padding:0 8px;position:relative;z-index:1}
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
@media (max-width:900px){.vbs-case .banner-inner{grid-template-columns:1fr;min-height:auto}.vbs-case .banner-left{padding:54px 14px 18px;border-right:none;border-bottom:1px solid var(--border)}.vbs-case .banner-right{padding:28px 14px 0}.vbs-case .hero-img-wrap{height:320px}.vbs-case .ps-grid,.vbs-case .io-grid{grid-template-columns:1fr}.vbs-case .stats{grid-template-columns:repeat(2,1fr)}.vbs-case .flow{flex-wrap:wrap;gap:20px}.vbs-case .flow::before{display:none}.vbs-case .step{flex:0 0 calc(33.333% - 14px)}}
@media (max-width:640px){.vbs-case .wrap,.vbs-case .banner-inner{padding:0 20px}.vbs-case .banner-left{padding-left:12px;padding-right:12px}.vbs-case .banner-right{padding:22px 12px 0}.vbs-case .hero-img-wrap{height:auto;}.vbs-case .hero-img-wrap img{object-fit:contain;object-position:center}.vbs-case h1{font-size:31px;line-height:1.2}.vbs-case h2{font-size:28px;line-height:1.25}.vbs-case .stats{grid-template-columns:1fr}.vbs-case .tools{flex-direction:column}.vbs-case .tools-items{grid-template-columns:1fr}.vbs-case .tool{border-left:none;border-top:1px solid var(--border)}.vbs-case .modal-main{height:360px}}
@media (max-width:991px){.vbs-case .banner{padding-top:clamp(88px,12vw,118px)}.vbs-case .banner-left{padding-top:16px!important}.vbs-case .banner h1 br{display:block!important}.vbs-case .banner-left h1{overflow-wrap:anywhere;word-break:break-word}.vbs-case .banner .desc{max-width:100%}.vbs-case .banner-left{min-width:0}}
@media (max-width:480px){.vbs-case .banner-left h1{font-size:clamp(1.15rem,4.5vw + 0.35rem,1.75rem);line-height:1.25}.vbs-case .banner .desc{font-size:14px;line-height:1.55}}
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

export default function ConstructionDocumentationCommercialBuildingCaliforniaPage() {
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
                End-to-End Construction Documentation:<br />
                <em>Commercial Building, California</em>
              </h1>
              <p className="lead text-secondary desc">
              Supporting a 58,176 sq. ft. commercial retail project with dedicated documentation capacity across design, coordination, and construction documentation phases.
              </p>
            </div>
            <div className="banner-right">
              <div className="hero-img-wrap">
                <img src="/image/3D Visualizaton_-Banner.jpg" alt="Commercial documentation project banner" />
                <div className="chip">
                  <strong>Commercial Building</strong>
                  <p>California, USA</p>
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
              A mid-sized architecture firm in California, specializing in commercial design and land consulting, operates with a lean internal team and typically handles 5–6 commercial projects annually. While manageable during early design stages, documentation workload increases significantly during Design Development and Construction Documentation phases. For this 58,176 sq. ft. single-floor commercial project with multiple retail units, the firm required additional documentation capacity to meet permit and construction deadlines. 
              </p>
              <p>
              Without external support, the internal team would have faced delays in drawing production, increased coordination risks, and a potential impact on project timelines. A dedicated documentation team was assigned to support model development, drawing production, and coordination, aligning with the firm’s standards and workflow across all project phases. 
              </p>
            </div>
            <div className="stats">
              <div className="stat">
                <small>Level of Development</small>
                <strong><span className="value-black">LOD </span><span className="value-red">350</span></strong>
              </div>
              <div className="stat">
                <small>Project Area</small>
                <strong><span className="value-red">58,176</span><span className="value-black"> Sq.Ft.</span></strong>
              </div>
              <div className="stat">
                <small>Location</small>
                <strong><span className="value-red">California</span><span className="value-black">, USA</span></strong>
              </div>
              <div className="stat">
                <small>Resource Used</small>
                <strong><span className="value-red">2</span><span className="value-black"> Resources</span></strong>
              </div>
            </div>
            <div className="tools">
              <div className="tools-label">Tools Used</div>
              <div className="tools-items">
                {TOOLS.map(tool => (
                  <div className="tool" key={tool.name}>
                    {tool.icon ? <img className="tool-icon" src={tool.icon} alt={tool.name} /> : <span className="tool-fallback">{tool.name.slice(0, 2).toUpperCase()}</span>}
                    <div><div className="tool-name">{tool.name}</div></div>
                  </div>
                ))}
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
              <div className="img-card"><img src="/image/Input_Construction Documentation_3.jpg" alt="Pain points" /></div>
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
              <div className="img-card"><img src="/image/3D Visualization_2.jpg" alt="Solutions" /></div>
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
            <h2>End-to-End BIM Workflow for Coordinated Project Delivery</h2>
            <p className="text-secondary">
              A phased, process-driven approach allowed the team to move from initial scope alignment through to fully
              coordinated construction documentation, maintaining quality control at every stage.
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
              Phase-structured BIM delivery workflow integrating fast documentation cycles, multi-trade coordination, QA validation, and scalable workload management.
              </p>
              <BookMeetingCta
                buttonText="Start Your Project"
                fullButtonClass="btn-lightblue text-white text-uppercase px-lg-4 py-2 rounded-pill fs-4 fw-semibold"
              />
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

