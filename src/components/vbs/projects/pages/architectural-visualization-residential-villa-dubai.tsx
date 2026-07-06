"use client";
// @ts-nocheck

import React, { useMemo, useState } from "react";
import BookMeetingCta from "@/components/vbs/book-meeting-cta";

const INPUT_IMAGES = [
  { src: "/image/Input_1.jpg", label: "Basic Project Brief" },
  { src: "/image/Input_2.jpg", label: "Architectural Design References" },
  { src: "/image/Input_3.jpg", label: "Interior Design Inputs" },
  { src: "/image/Input_4.jpg", label: "Material and Finish Specifications" },
  { src: "/image/Input_5.jpg", label: "Timeline and Delivery Requirements" },
];

const OUTPUT_IMAGES = [
  { src: "/image/3D interior_2.jpg", label: "Interior Render Output 1" },
  { src: "/image/3D interior_3.jpg", label: "Interior Render Output 2" },
  { src: "/image/3D interior_4.jpg", label: "Interior Render Output 3" },
  { src: "/image/3D interior_5.jpg", label: "Interior Render Output 4" },
  { src: "/image/3D interior_6.jpg", label: "Interior Render Output 5" },
  { src: "/image/3D interior_7.jpg", label: "Interior Render Output 6" },
  { src: "/image/3D interior_8.jpg", label: "Interior Render Output 7" },
  { src: "/image/3D interior_9.jpg", label: "Interior Render Output 8" },
  { src: "/image/3D interior_11.jpg", label: "Interior Render Output 9" },
  { src: "/image/3D interior_12.jpg", label: "Interior Render Output 10" },
];

const INPUT_POINTS = [
  "Basic project brief",
  "Architectural design references",
  "Interior design inputs",
  "Material and finish specifications",
  "Timeline and delivery requirements",
];

const OUTPUT_POINTS = [
  "Interior renders",
  "Exterior renders",
  "Full walkthrough video",
  "Multiple draft views for iteration",
  "Final presentation-ready visuals",
];

const PAIN_POINTS = [
  {
    title: "High Visual Quality Expectations",
    text: "The client required photorealistic renders across interiors and exteriors, with consistent quality in lighting, textures, and detailing. Every visual needed to accurately reflect the intended design experience.",
  },
  {
    title: "Compressed Delivery Timeline",
    text: "All deliverables, such as interior renders, exterior renders, and a complete walkthrough, were required within a tight timeframe, leaving little buffer for rework or delays.",
  },
  {
    title: "Design Changes and Iterations",
    text: "Multiple iterations were expected as materials, lighting setups, and viewpoints evolved during the visualization process. Maintaining speed without compromising quality was critical.",
  },
];

const SOLUTIONS = [
  {
    title: "Rendering Workflow Optimized for Quality and Speed",
    text: "A streamlined rendering process ensured high-quality outputs while maintaining fast turnaround across all stages.",
  },
  {
    title: "Dedicated Visualization Team",
    text: "A focused team worked exclusively on the project, enabling faster iterations and consistent visual quality.",
  },
  {
    title: "Parallel Development of Visuals",
    text: "Interior views, exterior renders, and walkthrough sequences were developed simultaneously to accelerate delivery.",
  },
  {
    title: "Iterative Feedback Integration",
    text: "Draft renders were shared regularly for review, allowing refinements in lighting, materials, and perspectives before finalization.",
  },
];

const EXECUTION_STEPS = [
  "3D Model Preparation",
  "Camera and View Setup",
  "Lighting and Material Setup",
  "Draft Render Development",
  "Client Feedback and Revisions",
  "Final Render Production",
  "Walkthrough Development",
];

const DELIVERED_POINTS = [
  {
    title: "On-Time Visualization Delivery",
    text: "Visualization delivered within the client's compressed timeline.",
  },
  {
    title: "Presentation-Ready Render Outputs",
    text: "Renders were used successfully for client presentation and design approval.",
  },
  {
    title: "Effective Design Communication via Walkthroughs",
    text: "Walkthrough enabled clear communication of design intent to stakeholders.",
  },
  {
    title: "Accelerated Iteration Cycles",
    text: "Faster iteration cycles helped finalize visuals efficiently.",
  },
  {
    title: "High-Quality Visual Decision Support",
    text: "High-quality renders supported presentation and pre-construction decision-making.",
  },
  {
    title: "Significant Cost Efficiency",
    text: "45 percent cost savings compared to conventional engagement models.",
  },
  {
    title: "Reduced Revision Cycles",
    text: "60 percent reduction in revision cycles through structured feedback integration.",
  },
  {
    title: "Enhanced Production Efficiency",
    text: "75 percent increase in production efficiency through parallel execution.",
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
.vbs-case .tool{display:flex;flex-direction:row;align-items:center;gap:10px;padding:16px 24px;border-left:1px solid var(--border);flex:1}
.vbs-case .tool-icon{order:1;width:34px;height:34px;border-radius:6px;display:block;object-fit:contain}
.vbs-case .tool-name{order:2;font-weight:800;font-size:18px}
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
.vbs-case .step{flex:1;text-align:center;padding:0 8px;position:relative;z-index:1;min-width:150px}
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

export default function ArchitecturalVisualizationResidentialVillaDubaiPage() {
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
                High-Fidelity Architectural Visualization:<br />
                <em>Residential Villa, Dubai</em>
              </h1>
              <p className="lead text-secondary desc">
              Photorealistic interior and exterior renders with walkthrough for a 10,000 sq. ft. villa, enabling presentations, faster approvals, and clear design communication. 
              </p>
            </div>
            <div className="banner-right">
              <div className="hero-img-wrap">
                <img src="/image/3D Visualization Banner.jpg" alt="Dubai villa visualization banner" />
                <div className="chip">
                  <strong>Residential Villa</strong>
                  <p>Dubai, UAE</p>
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
                A Dubai-based construction firm engaged our team to create photorealistic interior and exterior renders
                along with a complete walkthrough for a 10,000 sq. ft. villa project. The visualization was critical
                for client presentation and design approval, requiring precise representation of materials, lighting,
                and overall spatial experience.
              </p>
              <p>
                Working within a compressed timeline, we developed and refined visuals through continuous iterations. We
                ensured alignment on perspectives, mood, and detail. The final renders and walkthrough enabled the
                client to clearly communicate design intent to stakeholders and move forward with confidence.
              </p>
            </div>
            <div className="stats">
              <div className="stat"><small>Level of Development</small><strong><span className="value-black">LOD </span><span className="value-red">300</span></strong></div>
              <div className="stat"><small>Project Area</small><strong><span className="value-red">10,000</span><span className="value-black"> Sq.Ft.</span></strong></div>
              <div className="stat"><small>Location</small><strong><span className="value-red">Dubai</span><span className="value-black">, UAE</span></strong></div>
              <div className="stat"><small>Team Size</small><strong><span className="value-red">3</span><span className="value-black"> Resources</span></strong></div>
            </div>
            <div className="tools">
              <div className="tools-label">Tools Used</div>
              <div className="tools-items">
                <div className="tool"><img className="tool-icon" src="/icon/revit.png" alt="Revit" /><div className="tool-name">Revit</div></div>
                <div className="tool"><img className="tool-icon" src="/image/D5 Render.jpg" alt="D5 Render" /><div className="tool-name">D5 Render</div></div>
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
          <img src="/image/Input_Main.jpg" alt="Input main" />
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
          <img src="/image/3D interior_Output.jpg" alt="Output main" />
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
              <div className="img-card"><img src="/image/Input_1.jpg" alt="Pain points" /></div>
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
              <div className="img-card"><img src="/image/3D interior_11.jpg" alt="Solutions" /></div>
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
            <h2>Structured Visualization Workflow from Concept to Final Delivery</h2>
            <p className="text-secondary">
              The project followed a structured visualization workflow. Beginning with scope segmentation and tool
              setup, progressing through iterative render development with continuous client feedback, and culminating
              in final render and walkthrough delivery within the agreed timeline.
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
              Measured impact across speed, iterations, and visual quality, showing smoother approvals, fewer revisions, and stronger presentation outcomes. 
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

