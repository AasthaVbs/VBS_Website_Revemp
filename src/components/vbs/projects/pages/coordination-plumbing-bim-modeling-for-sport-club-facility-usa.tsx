"use client";
// @ts-nocheck

import React, { useEffect, useState } from "react";
import { Container, Col, Row, Image } from "react-bootstrap";
import { ensureNimbusBookingScript, openBookMeetingModal } from "@/utils/nimbus-booking";
import {
  ROOT,
  HVAC_CASE_PAGE_STYLES,
  Icon,
  Reveal,
} from "@/components/vbs/projects/hvac-case/shared";

const CS_IMG = {
  ductPipe3d: encodeURI("/image/Coordinated-Plumbing-BIM-Modeling-for-Sports-Club-Facility.png"),
  inputOutputDiagram: encodeURI("/image/YMCA_Input-Output.svg"),
  ioInput1: encodeURI("/image/YMCA_Input (1).jpg"),
  ioInput2: encodeURI("/image/YMCA_Input (2).jpg"),
  ioOutput1: encodeURI("/image/YMCA_Output (2).jpg"),
  ioOutput2: encodeURI("/image/YMCA_Output (4).jpg"),
  executionStrategy2: encodeURI("/image/YMCA_Execution Strategy.svg"),
};

const TOOL_ICONS = {
  revit: "/icon/revit.png",
  navisworks: "/icon/navisworks.png",
};

const META_ITEMS = [
  { icon: "building-2", label: "Project Type", value: "Sports Club Building" },
  { icon: "layers", label: "Level of Development", value: "LOD 350" },
  { icon: "users", label: "Manpower Used", value: "5 Resources" },
  { icon: "map-pin", label: "Location", value: "LeClaire, IA, USA" },
];

const WHY_ITEMS = [
  {
    icon: "git-merge",
    title: "Persistent Design Conflicts",
    text: "Frequent clashes between architectural and structural components were stalling progress and threatening the timeline.",
  },
  {
    icon: "file-text",
    title: "Inadequate System Documentation",
    text: "Sparse MEP data made long-term facility operations and maintenance planning difficult for the client.",
  },
  {
    icon: "messages-square",
    title: "Communication Inefficiency",
    text: "Poor cross-team communication caused unresolved clashes and made meeting strict deadlines nearly impossible.",
  },
  {
    icon: "eye",
    title: "Low System Visibility",
    text: "Limited insight into system interdependencies led to fears of costly adjustments during the installation phase.",
  },
];

const SCOPE_ITEMS = [
  { icon: "droplets", title: "Plumbing System Modeling" },
  { icon: "scan-search", title: "Clash Detection and Resolution" },
  { icon: "network", title: "Multi-trade BIM Coordination" },
];

const CHALLENGE_ITEMS = [
  {
    icon: "route",
    title: "Structural Truss Constraints",
    text: "Routing plumbing lines through complex truss zones without compromising structural integrity.",
  },
  {
    icon: "ruler",
    title: "Strict Equipment Clearances",
    text: "Ensuring every mechanical unit maintains specific clearance zones for future maintenance access.",
  },
  {
    icon: "timer",
    title: "Accelerated Submission Schedule",
    text: "Managing high-precision modeling tasks within a very tight two-month project window.",
  },
  {
    icon: "layout-grid",
    title: "Complex Spatial Integration",
    text: "Coordinating dense plumbing networks within thirty unique sports and recreation spaces.",
  },
];

const IMPACT_ITEMS = [
  { big: "4", suffix: "x", label: "Cost Saving" },
  { big: "99", suffix: "%", label: "On-time Delivery" },
  { big: "98", suffix: "%", label: "Project Efficiency" },
  { big: "99", suffix: "%", label: "Quality Assurance" },
  { big: "1376", suffix: "", label: "Clash Detected & Resolved" },
];

const HVAC_TOOLS_TILES = [
  { icon: TOOL_ICONS.revit, title: "Revit" },
  { icon: TOOL_ICONS.navisworks, title: "Navisworks" },
];

function BasicIconCard({ item }) {
  return (
    <div className="why-row">
      <div className="why-ico">
        <Icon name={item.icon} />
      </div>
      <div className="why-info">
        <h4>{item.title}</h4>
        <p className="text-secondary">{item.text}</p>
      </div>
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

function CoordinationPlumbingBimModelingForSportClubFacilityUsaPage() {
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
        <style>{`
          .${ROOT} .imp-bar{
            grid-template-columns:repeat(5,minmax(0,1fr));
          }
          @media (max-width:1100px){
            .${ROOT} .imp-bar{
              grid-template-columns:repeat(3,minmax(0,1fr));
            }
          }
          @media (max-width:720px){
            .${ROOT} .imp-bar{
              grid-template-columns:repeat(2,minmax(0,1fr));
            }
          }
          @media (max-width:480px){
            .${ROOT} .imp-bar{
              grid-template-columns:1fr;
            }
          }
        `}</style>

        <section className="hvac-hero">
          <div className="wrap">
            <div className="hvac-hero__top">
              <Reveal>
                <h1 className="hvac-hero__title fw-bold text-dark">
                  Coordinated <span className="acc">Plumbing BIM Modeling</span> for Sports Club Facility : LeClaire, IA
                </h1>
                <p className="hero-sub lead text-secondary">
                  Delivered LOD 350 clash-free BIM coordinated plumbing models for a 38,000 sq. ft. Ft. modern community wellness hub.
                </p>
              </Reveal>
              <Reveal delayClass="d1">
                <div className="hero-img-wrap">
                  <img
                    src={CS_IMG.ductPipe3d}
                    alt="Coordinated plumbing BIM model for sports club facility in LeClaire, Iowa"
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
                  An MEPF firm required expert BIM support for a new 38,000 sq. ft. sports facility in Iowa. The project featured 30 diverse sports spaces, including aquatics and fitness centers. We provided LOD 350 plumbing modeling and comprehensive clash resolution within a compressed two-month project schedule. Our team ensured all systems integrated perfectly within the building&apos;s complex structural framework.
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
              <div className="hvac-challenge-grid hvac-challenge-grid--paired">
                <div className="hvac-challenge-pair">
                  <BasicIconCard item={WHY_ITEMS[0]} />
                  <BasicIconCard item={WHY_ITEMS[1]} />
                </div>
                <div className="hvac-challenge-pair">
                  <BasicIconCard item={WHY_ITEMS[2]} />
                  <BasicIconCard item={WHY_ITEMS[3]} />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="hvac-sec">
          <div className="wrap">
            <header className="hvac-sec__head r">
              <h2 className="sec-t">Scope of Work</h2>
            </header>
            <Reveal delayClass="d1">
              <div className="scope-row-5" role="list" style={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
                {SCOPE_ITEMS.map((s) => (
                  <div key={s.title} className="scope-box" role="listitem">
                    <div className="scope-box-ico">
                      <Icon name={s.icon} />
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
              <div className="hvac-challenge-grid hvac-challenge-grid--paired">
                <div className="hvac-challenge-pair">
                  <BasicIconCard item={CHALLENGE_ITEMS[0]} />
                  <BasicIconCard item={CHALLENGE_ITEMS[1]} />
                </div>
                <div className="hvac-challenge-pair">
                  <BasicIconCard item={CHALLENGE_ITEMS[2]} />
                  <BasicIconCard item={CHALLENGE_ITEMS[3]} />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="hvac-sec">
          <div className="wrap">
            <header className="hvac-sec__head sec-head sec-head--center r">
              <h2 className="sec-t">Our Project Execution Strategy</h2>
              <p className="text-secondary">
                We deployed 5 specialists to execute a structured BIM workflow. Our team focused on exact spatial integration using Revit. We proactively resolved conflicts to ensure a smooth transition from digital model to physical construction.
              </p>
            </header>
            <Reveal delayClass="d1">
              <div className="exec-strat-diagram">
                <img src={CS_IMG.executionStrategy2} alt="Step-by-step BIM execution strategy for coordinated plumbing delivery" />
              </div>
            </Reveal>
          </div>
        </section>

        <HvacCaseIoSection />

        <section className="hvac-sec">
          <div className="wrap">
            <header className="hvac-sec__head r">
              <h2 className="sec-t">Business Impact</h2>
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
                  &quot;Working with Virtual Building Studio was an outstanding experience. Their Plumbing BIM work was accurate, timely, and instrumental in helping our construction team avoid conflicts and stay on schedule. We truly appreciate their dedication and highly recommend their services.&quot;
                </p>
                <div className="testi-author testi-author--brand">- VDC Manager</div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="hvac-sec hvac-sec--cta" id="cta" aria-labelledby="hvac-cta-heading">
          <div className="wrap">
            <Reveal>
              <div className="cta-inner">
                <h2 id="hvac-cta-heading" className="cta-h text-dark">
                  Ready to achieve clash-free coordination and faster construction delivery?
                </h2>
                <button
                  type="button"
                  onClick={openBookMeetingModal}
                  className="btn btn-primary rounded-pill px-4 py-3 cta-btn text-decoration-none d-inline-flex align-items-center justify-content-center gap-2"
                >
                  Let&apos;s Discuss Your Next Project
                  <Icon name="arrow-right" />
                </button>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      </>
  );
}

export default CoordinationPlumbingBimModelingForSportClubFacilityUsaPage;
