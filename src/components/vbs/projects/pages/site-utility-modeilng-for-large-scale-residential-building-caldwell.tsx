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

/** Paths under `static/image/` → `/image/…` (encode spaces & parentheses). */
const csImage = (file) => encodeURI(`/image/${file}`);

const CS_IMG = {
  ductPipe3d: encodeURI("/image/High-Precision-Site-Utility-Modeling-for-Large-Scale-Residence-Caldwell,-ID.png"),
  inputOutputDiagram: csImage("Wilison-Input-Output.svg"),
  executionStrategy2: csImage("Wilison-Execution Strategy.svg"),
  ioInput1: csImage("wilison-Input (1).jpg"),
  ioInput2: csImage("wilison-Input (2).jpg"),
  ioOutput1: csImage("Wilison-Output (2).jpg"),
  ioOutput2: csImage("Wilison-Output (5).jpg"),
};

const TOOL_ICONS = {
  revit: "/icon/revit.png",
};

const META_ITEMS = [
  { icon: "building-2", label: "Project Type", value: "Residential Building" },
  { icon: "layers", label: "Level of Development", value: "LOD 300" },
  { icon: "users", label: "Manpower Used", value: "3 Resources" },
  { icon: "map-pin", label: "Location", value: "Caldwell, ID, USA" },
];

const WHY_ITEMS = [
  {
    icon: "timer",
    title: "Tight Submission Deadline",
    text: "The project required full site utility modeling within a strict 10-day turnaround window.",
  },
  {
    icon: "file-warning",
    title: "Incomplete Design Inputs",
    text: "Only one-third of the architectural model was shared, limiting reference data for accurate modeling.",
  },
  {
    icon: "network",
    title: "Complex Drainage System Requirements",
    text: "The drainage network included intricate trench systems and catch basin layouts needing careful coordination.",
  },
  {
    icon: "ruler",
    title: "Critical Water Main Depth Compliance",
    text: "The water main had to run exactly 48 inches below the top of the asphalt throughout the site.",
  },
  {
    icon: "mountain",
    title: "Asphalt Slope Alignment Challenges",
    text: "Maintaining vertical offset while tracking the asphalt slope added significant technical complexity to the model.",
  },
];

const SCOPE_ITEMS = [
  { icon: "cable", title: "Site Utilities 3D Modeling" },
  { icon: "waves", title: "Drainage System Modeling" },
  { icon: "droplets", title: "Water Main System Modeling" },
];

const CHALLENGE_ITEMS = [
  {
    icon: "file-question",
    title: "Limited Model Data",
    text: "Only partial architectural input was available when modeling began.",
  },
  {
    icon: "ruler",
    title: "Water Main Depth Accuracy",
    text: "Ensuring a consistent 48-inch offset below the asphalt surface throughout.",
  },
  {
    icon: "git-merge",
    title: "Drainage Network Complexity",
    text: "Modeling interconnected trench and catch basin systems with correct slopes.",
  },
  {
    icon: "line-chart",
    title: "Asphalt Slope Referencing",
    text: "Aligning the water main precisely with a variable asphalt slope across the site.",
  },
  {
    icon: "clock-3",
    title: "Deadline Pressure",
    text: "Delivering a complete and accurate model within a 10-day project window.",
  },
];

const IMPACT_ITEMS = [
  { big: "4", suffix: "x", label: "Cost Saving" },
  { big: "99", suffix: "%", label: "On-time Delivery" },
  { big: "98", suffix: "%", label: "Project Efficiency" },
  { big: "99", suffix: "%", label: "Quality Assurance" },
];

const HVAC_TOOLS_TILES = [{ icon: TOOL_ICONS.revit, title: "Revit" }];

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

function SiteUtilityModeilngForLargeScaleResidentialBuildingCaldwellPage() {
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
                  High-Precision <strong className="acc">Site Utility Modeling</strong> for Large-Scale Residence : Caldwell, ID
                </h1>
                <p className="hero-sub lead text-secondary">
                  LOD 300 BIM modeling for drainage and water systems delivered for a 1,054,670 sq. ft. residential development within tight timelines using limited inputs.
                </p>
              </Reveal>
              <Reveal delayClass="d1">
                <div className="hero-img-wrap">
                  <img
                    src={CS_IMG.ductPipe3d}
                    alt="High-precision site utility BIM modeling for large-scale residential development in Caldwell, Idaho"
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
                  A site utilities firm needed expert BIM support for a large residential development spanning over 1,054,670 sq. ft. in Caldwell, ID, USA. The project covered complex drainage and water main systems across 251 units. With only partial inputs and a 10-day deadline, our 3-member team delivered an LOD 300 Revit model. All systems were accurately modeled, slopes were maintained, and files were delivered on time.
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
                <div className="hvac-challenge-pair">
                  <BasicIconCard item={WHY_ITEMS[4]} />
                  <div className="hvac-challenge-pair-slot" aria-hidden="true" />
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
                <div className="hvac-challenge-pair">
                  <BasicIconCard item={CHALLENGE_ITEMS[4]} />
                  <div className="hvac-challenge-pair-slot" aria-hidden="true" />
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
                Our team leveraged advanced BIM tools and professional expertise to model complex site utilities with precision. Despite limited inputs, we maintained high accuracy, met compliance requirements, and delivered the model on schedule.
              </p>
            </header>
            <Reveal delayClass="d1">
              <div className="exec-strat-diagram">
                <img
                  src={CS_IMG.executionStrategy2}
                  alt="Execution strategy for site utility BIM delivery — Caldwell large-scale residential project"
                />
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
                  &quot;We were a bit concerned about handing this off with so little data and such a tight window. We only had part of the architectural model ready, and the water main depth requirements made things even more demanding. But the team handled it without any back and forth. They understood the slope referencing issue right away and came back with a clean, accurate model. The drainage layout was exactly what we needed. Delivered on time. That kind of reliability is hard to find. We will definitely be bringing them in on future projects.&quot;
                </p>
                <div className="testi-author testi-author--brand">- Project Manager</div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="hvac-sec hvac-sec--cta" id="cta" aria-labelledby="hvac-cta-heading">
          <div className="wrap">
            <Reveal>
              <div className="cta-inner">
                <h2 id="hvac-cta-heading" className="cta-h text-dark">
                  Need accurate site utility models under tight timelines?
                </h2>
                <button
                  type="button"
                  onClick={openBookMeetingModal}
                  className="btn btn-primary rounded-pill px-4 py-3 cta-btn text-decoration-none d-inline-flex align-items-center justify-content-center gap-2"
                >
                  Let&apos;s Deliver Precision Where It Matters Most
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

export default SiteUtilityModeilngForLargeScaleResidentialBuildingCaldwellPage;
