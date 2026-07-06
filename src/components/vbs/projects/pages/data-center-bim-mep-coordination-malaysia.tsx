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
  CaseStudyVbsIcon,
  ChallengePairedGrid,
} from "@/components/vbs/projects/hvac-case/shared";

const csImage = (filename) => encodeURI(`/image/${filename}`);

const CS_IMG = {
  ductPipe3d: csImage("data-center-bim-mep-coordination-malaysia.png"),
  inputOutputDiagram: encodeURI("/image/Case-study Malaysia Data Center_01-01 2 (1).svg"),
  ioInputs: [
    csImage("data-center-bim-mep-coordination-malaysia-input_4 (1).jpg"),
    csImage("data-center-bim-mep-coordination-malaysia-input_4 (2).jpg"),
    csImage("data-center-bim-mep-coordination-malaysia-input_4 (3).jpg"),
    csImage("data-center-bim-mep-coordination-malaysia-input_4 (4).jpg"),
  ],
  ioOutputs: [
    csImage("data-center-bim-mep-coordination-malaysia-output-1.png"),
    csImage("data-center-bim-mep-coordination-malaysia-ouput-4 (2).jpg"),
    csImage("data-center-bim-mep-coordination-malaysia-ouput-4 (1).png"),
    csImage("data-center-bim-mep-coordination-malaysia-ouput-4 (1).jpg"),
  ],
  executionStrategy2: encodeURI("/image/Case-study Malaysia Data Center_01_Image02 2 (1).svg"),
};

const TOOL_ICONS = {
  revit: "/icon/revit.png",
  navisworks: "/icon/navisworks.png",
};

const META_ITEMS = [
  { icon: "building-2", label: "Project Type", value: "Data Center" },
  { icon: "layers", label: "Level of Development", value: "LOD 350" },
  { icon: "users", label: "Manpower Used", value: "10 Resources" },
  { icon: "map-pin", label: "Location", value: "Malaysia" },
];

const PAIN_LEFT = [
  {
    caseStudyIcon: "multiDisciplinary",
    title: "Intense MEP-Heavy Infrastructure",
    text: "Dense MEP, ICT, and utility systems required precise routing and continuous multi-discipline coordination.",
  },
  {
    caseStudyIcon: "lackVisibility",
    title: "Massive Scale and Footprint",
    text: "Coordinating building systems across a 10.3-hectare site demanded meticulous planning and model management.",
  },
];

const PAIN_RIGHT = [
  {
    caseStudyIcon: "mechanicalClearanceGap",
    title: "Integration of Specialized Systems",
    text: "Water treatment, chemical dosing, and cooling systems required seamless integration within constrained spaces.",
  },
  {
    caseStudyIcon: "equipmentClearance",
    title: "High-Stakes Equipment Density",
    text: "Extensive mechanical and electrical equipment layouts demanded exceptional accuracy to minimize construction risks.",
  },
];

const SCOPE_ITEMS = [
  { caseStudyIcon: "constructionDocs", title: "Architectural BIM Modeling" },
  { caseStudyIcon: "trussCoordination", title: "Structural BIM Modeling" },
  { caseStudyIcon: "hvacSystemModeling", title: "MEP BIM Modeling" },
  { caseStudyIcon: "mechanicalSystemModeling", title: "Revit Family Creation" },
  { caseStudyIcon: "coordinationMeetings", title: "Shop Drawings Development" },
  { caseStudyIcon: "clashDetection", title: "Clash Detection & Reporting" },
  { caseStudyIcon: "multiDisciplinary", title: "BIM Coordination" },
];

const CHALLENGE_LEFT = [
  {
    caseStudyIcon: "hvacSystemModeling",
    title: "High Density of MEP Systems",
    text: "Extensive routing of chilled water, electrical, fire protection, ICT, and plumbing services created severe coordination challenges.",
  },
  {
    caseStudyIcon: "mechanicalSystemModeling",
    title: "Complex Mechanical Infrastructure",
    text: "ACMV systems, water treatment systems, and cooling networks required detailed modeling and coordination.",
  },
  {
    caseStudyIcon: "inadequateMepDocs",
    title: "Electrical System Complexity",
    text: "Major electrical equipment, earthing systems, lighting networks, and BMS integrations increased model complexity.",
  },
];

const CHALLENGE_RIGHT = [
  {
    caseStudyIcon: "constructionDocs",
    title: "Large Equipment Library Requirements",
    text: "Hundreds of specialized equipment families needed to be created and maintained accurately.",
  },
  {
    caseStudyIcon: "clashDetection",
    title: "Clash Detection at Scale",
    text: "Coordinating Architecture, Structure, and multiple MEP trades required continuous clash analysis and issue resolution.",
  },
  {
    caseStudyIcon: "lod400Model",
    title: "LOD 350 Compliance",
    text: "Maintaining consistent model accuracy and documentation standards throughout the project lifecycle demanded strict quality control.",
  },
];

const IMPACT_ITEMS = [
  { big: "4", suffix: "×", label: "Cost Saving" },
  { big: "90", suffix: "%", label: "On-time Delivery" },
  { big: "95", suffix: "%", label: "Project Efficiency" },
  { big: "99", suffix: "%", label: "Quality Assurance" },
];

const MALAYSIA_CASE_PAGE_CLASS = "malaysia-data-center-case";

const chunkIoImagePairs = (images) => {
  const slides = [];
  for (let i = 0; i < images.length; i += 2) {
    slides.push(images.slice(i, i + 2));
  }
  return slides;
};

const HVAC_TOOLS_TILES = [
  { icon: TOOL_ICONS.revit, title: "Revit" },
  { icon: TOOL_ICONS.navisworks, title: "Navisworks" },
];

function HvacCaseIoSection() {
  const [activePreviewMode, setActivePreviewMode] = useState(null);
  const [overlaySlideIdx, setOverlaySlideIdx] = useState(0);
  const inputImages = CS_IMG.ioInputs;
  const outputImages = CS_IMG.ioOutputs;
  const thumbInputImages = inputImages.slice(0, 2);
  const thumbOutputImages = outputImages.slice(0, 2);
  const activeImages = activePreviewMode === "input" ? inputImages : outputImages;
  const overlaySlides = chunkIoImagePairs(activeImages);
  const slideCount = overlaySlides.length;

  const openPreview = (mode) => {
    setOverlaySlideIdx(0);
    setActivePreviewMode(mode);
  };

  const closePreviewOverlay = () => {
    setActivePreviewMode(null);
    setOverlaySlideIdx(0);
  };

  const goToPrevSlide = () => {
    setOverlaySlideIdx((idx) => Math.max(0, idx - 1));
  };

  const goToNextSlide = () => {
    setOverlaySlideIdx((idx) => Math.min(slideCount - 1, idx + 1));
  };

  useEffect(() => {
    if (!activePreviewMode || typeof document === "undefined") return;
    const onKey = (e) => {
      if (e.key === "Escape") {
        setActivePreviewMode(null);
        setOverlaySlideIdx(0);
        return;
      }
      if (e.key === "ArrowLeft") {
        setOverlaySlideIdx((idx) => Math.max(0, idx - 1));
        return;
      }
      if (e.key === "ArrowRight") {
        setOverlaySlideIdx((idx) => Math.min(slideCount - 1, idx + 1));
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [activePreviewMode, slideCount]);

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
                    {thumbInputImages.map((src, idx) => (
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
                    onClick={() => openPreview("input")}
                  >
                    <i className="far fa-eye me-2" aria-hidden="true" />
                    View Inputs
                  </button>
                </div>
                <div className="case-custom-io-side case-custom-io-card">
                  <div className="case-custom-io-thumb-grid">
                    {thumbOutputImages.map((src, idx) => (
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
                    onClick={() => openPreview("output")}
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
      {activePreviewMode && activeImages.length > 0 && (
        <div
          className="case-custom-io-overlay"
          role="dialog"
          aria-modal="true"
          onClick={closePreviewOverlay}
        >
          <div className="case-custom-io-overlay-inner malaysia-io-overlay-inner" onClick={(e) => e.stopPropagation()} role="document">
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
            <div className="malaysia-io-overlay-carousel">
              {slideCount > 1 && (
                <button
                  type="button"
                  className="malaysia-io-overlay-nav malaysia-io-overlay-nav--prev"
                  onClick={goToPrevSlide}
                  disabled={overlaySlideIdx === 0}
                  aria-label="Previous slide"
                >
                  <i className="fas fa-chevron-left" aria-hidden="true" />
                </button>
              )}
              <div className="case-custom-io-overlay-grid malaysia-io-overlay-slide">
                {(overlaySlides[overlaySlideIdx] || []).map((src, idx) => (
                  <Image
                    key={`${activePreviewMode}-hvac-${overlaySlideIdx}-${idx}`}
                    src={src}
                    className="case-custom-io-overlay-image malaysia-io-overlay-image"
                    alt={`${activePreviewMode} preview ${overlaySlideIdx * 2 + idx + 1}`}
                  />
                ))}
              </div>
              {slideCount > 1 && (
                <button
                  type="button"
                  className="malaysia-io-overlay-nav malaysia-io-overlay-nav--next"
                  onClick={goToNextSlide}
                  disabled={overlaySlideIdx >= slideCount - 1}
                  aria-label="Next slide"
                >
                  <i className="fas fa-chevron-right" aria-hidden="true" />
                </button>
              )}
            </div>
            {slideCount > 1 && (
              <div className="malaysia-io-overlay-dots" role="tablist" aria-label="Gallery slides">
                {overlaySlides.map((_, idx) => (
                  <button
                    key={`${activePreviewMode}-dot-${idx}`}
                    type="button"
                    className={`malaysia-io-overlay-dot${overlaySlideIdx === idx ? " is-active" : ""}`}
                    onClick={() => setOverlaySlideIdx(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    aria-selected={overlaySlideIdx === idx}
                  />
                ))}
              </div>
            )}
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
          <Row className="g-4 g-lg-5 justify-content-center case-custom-tools-features-row">
            {HVAC_TOOLS_TILES.map((feature) => (
              <Col key={feature.title} xs={12} sm={6} lg={4} className="d-flex justify-content-center">
                <div className="text-center h-100 p-4 p-lg-5 bg-white border rounded-3 shadow-sm hvac-tools-tile">
                  <Image src={feature.icon} width={56} height={56} className="mb-2 mx-auto d-block" alt="" />
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

function DataCenterBimMepCoordinationMalaysiaPage() {
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
      <main className={`${ROOT} ${MALAYSIA_CASE_PAGE_CLASS}`}>
        <style>{HVAC_CASE_PAGE_STYLES}</style>

        <section className="hvac-hero">
          <div className="wrap">
            <div className="hvac-hero__top">
              <Reveal>
                <h1 className="hvac-hero__title fw-bold text-dark">
                  <span className="acc">BIM Coordination</span> for a Large-Scale Mission-Critical <span className="acc">Data Center</span> in Malaysia
                </h1>
                <p className="hero-sub lead text-secondary">
                  Managed BIM coordination for a 235,750 sq. ft. highly services-intensive data center, integrating complex mechanical, electrical, plumbing, fire protection, and ICT systems.
                </p>
              </Reveal>
              <Reveal delayClass="d1">
                <div className="hero-img-wrap">
                  <img
                    src={CS_IMG.ductPipe3d}
                    alt="BIM coordination for a large-scale mission-critical data center in Malaysia"
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
                  A 235,750 sq. ft. data center development spanning 10.3 hectares of land in Malaysia required comprehensive BIM support to coordinate its highly complex building systems. With extensive mechanical, electrical, plumbing, fire protection, and ICT infrastructure, the project demanded meticulous multi-discipline coordination to ensure constructability and operational reliability. Over a two-year engagement, our team delivered coordinated Architectural, Structural, and MEP BIM models, custom Revit families, shop drawings, and clash-free project documentation to support efficient construction execution.
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
              <div className="scope-row-5 scope-row-7" role="list">
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
                We implemented a structured BIM workflow focused on accuracy and coordination. Regular clash detection prevented costly conflicts. The approach ensured seamless integration of all critical building systems.
              </p>
            </header>
            <Reveal delayClass="d1">
              <div className="exec-strat-diagram">
                <img src={CS_IMG.executionStrategy2} alt="Project execution strategy — BIM workflow from model setup through final delivery" />
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
                Project outcomes that reduced risks, improved constructability, and enhanced delivery confidence.
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
                  &quot;Virtual Building Studio successfully delivered coordinated BIM models for one of our most technically demanding projects. Their team demonstrated exceptional expertise in managing complex MEP systems, resolving coordination issues, and maintaining high-quality standards throughout the project lifecycle. The coordinated models significantly improved project execution and reduced construction risks.&quot;
                </p>

                <div className="testi-author testi-author--brand">
                  — Project Director
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
                    Planning a complex data center or mission-critical facility?
                  </h2>
                  <button
                    type="button"
                    onClick={openBookMeetingModal}
                    className="btn btn-primary rounded-pill px-4 py-3 cta-btn text-decoration-none d-inline-flex align-items-center justify-content-center gap-2"
                  >
                    Talk to Our BIM Experts Today
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


export default DataCenterBimMepCoordinationMalaysiaPage;
