"use client";

import React, { useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";

import { SiteFooter } from "@/components/sections/site-footer";
import { GetInTouchSection } from "@/components/sections/get-in-touch-section";
import LandingTopHeader from "@/components/landing/landing-top-header";
import LandingPdfLeadModal from "@/components/landing/landing-pdf-lead-modal";

const DocumentationWallMeta = {
  metaTitle: "Why Growing Architecture Firms Hit a Documentation Wall | Virtual Building Studio",
  metaDescription: "Drawings feel rushed. Reviews pile up. Senior architects become bottlenecks. Even with more staff, the workload feels heavier — not lighter. ",
  ogImage: null,
  twitterImage: null,
};
const DOCUMENTATION_WALL_PDF_URL =
  "https://www.virtualbuildingstudio.com/resources/documentation-wall-architecture-firms.pdf?utm_source=LP_DocumentationWall&utm_medium=LPCTA&utm_campaign=T2TOFU";

const WhyGrowingArchitectureFirmsHitDocumentationWallView = () => {
  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined") return;
    console.log("[Insight] init start");
    try {
      window._linkedin_partner_id = "706315";
      window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
      if (!window._linkedin_data_partner_ids.includes("706315")) {
        window._linkedin_data_partner_ids.push("706315");
      }
      console.log("[Insight] partner id", window._linkedin_partner_id, "list", window._linkedin_data_partner_ids);
      if (!window.lintrk) {
        window.lintrk = function (a, b) {
          window.lintrk.q = window.lintrk.q || [];
          window.lintrk.q.push([a, b]);
        };
        window.lintrk.q = window.lintrk.q || [];
      }
      const exists = Array.from(document.getElementsByTagName("script")).some(s => (s.src || "").includes("snap.licdn.com/li.lms-analytics/insight.min.js"));
      if (!exists) {
        const firstScript = document.getElementsByTagName("script")[0];
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.async = true;
        script.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
        script.onload = () => {
          console.log("[Insight] script loaded", typeof window.lintrk === "function", "partner", window._linkedin_partner_id);
        };
        script.onerror = () => {
          console.log("[Insight] script load error");
        };
        firstScript.parentNode.insertBefore(script, firstScript);
        console.log("[Insight] script inserted");
      } else {
        console.log("[Insight] script already present, skipping insert");
      }
    } catch (e) {
      console.log("[Insight] init error", e && e.message);
    }
  }, []);
  const trackPdfClick = () => {
    const conversionId = 24698708;
    const hasLintrk = typeof window.lintrk === "function";
    console.log("[Insight] handleDownload init", { conversionId, hasLintrk });
    try {
      if (hasLintrk) {
        window.lintrk("track", { conversion_id: conversionId });
        console.log("[Insight] lintrk fired", conversionId);
      } else {
        console.log("[Insight] lintrk unavailable");
      }
    } catch (e) {
      console.log("[Insight] lintrk error", e && e.message);
    }
  };
  return (
    <main className="documentation-wall-page">
      <LandingTopHeader />

      <section className="documentation-wall-hero">
        <Container>
          <div className="hero-inner d-none d-md-flex">
            {/* TEXT CONTENT (desktop/tablet only) */}
            <div className="hero-content d-none d-md-block">
              <h1 className="hero-title">
                Why Growing  <span className="accent-red" style={{ color: '#DB1922' }}>Architecture</span>
                Firms Hit a <br />

                <span className="accent-red" style={{ color: '#DB1922' }}>Documentation Wall</span>
              </h1>

              <div className="accent-underline"></div>

              <p className="hero-subtitle">
                Drawings feel rushed. Reviews pile up. <br /> Senior architects become bottlenecks.
                <br /> Even with more staff, the
                workload feels <br /> <span className="fw-bold accent-red" style={{ color: '#DB1922' }}>heavier — not lighter.</span>
                <br />

                <div className="mt-3">
                  <LandingPdfLeadModal
                    title="Why Growing Architecture Firms Hit a Documentation Wall"
                    downloadUrl={DOCUMENTATION_WALL_PDF_URL}
                    onBeforeOpen={trackPdfClick}
                    trigger={(
                      <a
                        href={DOCUMENTATION_WALL_PDF_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn fw-bold"
                        style={{ backgroundColor: "#D70416", borderColor: "#D70416", color: "#fff" }}
                      >
                        Access the PDF Now
                      </a>
                    )}
                  />
                </div>

                <p className="hero-subtitle-2 fw-bold" style={{ fontSize: '1.3rem', fontWeight: '500', color: '#000' }}>
                  This isn’t failure.
                  <br />
                  It’s a structural threshold most growing firms eventually reach. </p>


              </p>



            </div>
          </div>

          {/* Desktop / tablet visual used as background layer via CSS */}
          <div className="hero-visual d-none d-md-block">
            <img
              src="/image/hero-banner.png"
              alt="Documentation Wall Diagram"
              fetchPriority="high"
              loading="eager"
              decoding="async"
            />
          </div>

          {/* Mobile visual (stacked layout) */}
          <div className="hero-mobile-banner d-block d-md-none">
            <img
              src="/image/hero-banner-2.png"
              alt="Documentation Wall Diagram"
              fetchPriority="high"
              loading="eager"
              decoding="async"
            />
          </div>
        </Container>
      </section>

      {/* Section 1 - When Growth Stops Feeling Linear — white */}
      <section className="doc-wall-section-spacing doc-wall-section-when-growth " style={{ paddingBottom: '3rem', background: '#fff' }}>
        <Container >
          <Row>
            <Col lg={12} md={12} xs={12} className="">
              <div className=" ">
                <h2 className="section-title mb-1 mt-4" style={{ color: '#222', fontSize: '1.9rem', fontWeight: '700', lineHeight: '1.2' }}>
                  When Growth Stops <span className="accent-red" style={{ color: '#DB1922' }}>Feeling Linear</span>
                </h2>
                <div className="accent-underline mb-6" style={{ width: '250px', height: '2px', background: '#DB1922' }}></div>
              </div>
              <Row className="align-items-start">
                <Col lg={6} md={12} xs={12} className="pe-lg-4">
                  <p className="mb-2" style={{ color: '#333', fontSize: '1.15rem', lineHeight: '1.7', maxWidth: '520px' }}>
                    As firms scale beyond a certain point, something shifts:
                  </p>
                  <ul className="list-unstyled mb-2 doc-wall-icon-list">
                    <li className="mb-1 d-flex align-items-center">
                      <i className="fa fa-users me-2 doc-wall-list-icon" style={{ color: '#DB1922', fontSize: '14px' }}></i>
                      <span style={{ color: '#333', fontSize: '0.9rem', lineHeight: '1.6' }}>
                        SD, DD, and CD phases begin overlapping across multiple projects
                      </span>
                    </li>
                    <li className="mb-1 d-flex align-items-center">
                      <i className="fa fa-user-tie me-2 doc-wall-list-icon" style={{ color: '#DB1922', fontSize: '14px' }}></i>
                      <span style={{ color: '#333', fontSize: '0.9rem', lineHeight: '1.6' }}>
                        One or two senior architects become default reviewers
                      </span>
                    </li>
                    <li className="mb-1 d-flex align-items-center">
                      <i className="fa fa-clock me-2 doc-wall-list-icon" style={{ color: '#DB1922', fontSize: '14px' }}></i>
                      <span style={{ color: '#333', fontSize: '0.9rem', lineHeight: '1.6' }}>
                        Leadership spends more time managing drawings than shaping work
                      </span>
                    </li>
                    <li className="mb-1 d-flex align-items-center">
                      <i className="fa fa-exclamation-triangle me-2 doc-wall-list-icon" style={{ color: '#DB1922', fontSize: '14px' }}></i>
                      <span style={{ color: '#333', fontSize: '0.9rem', lineHeight: '1.6' }}>
                        Projects that once felt manageable begin to feel fragile
                      </span>
                    </li>
                  </ul>


                  <p className="mb-3" style={{ color: '#333', fontSize: '1rem', lineHeight: '1.8' }}>
                    This is the <strong>Documentation Wall</strong>: when project volume grows faster than decision-making capacity.
                  </p>
                  <p className="fw-bold mb-0" style={{ color: '#DB1922', fontSize: '0.9rem', lineHeight: '1.25' }}>
                    The bottleneck is no longer effort.<br />
                    It is throughput.
                  </p>

                  <div
                    style={{
                      marginTop: "30px",
                      padding: "28px 32px",
                      background: "linear-gradient(to bottom, #fbf2f2 0%, #ffffff 100%)",
                      borderRadius: "14px",
                      position: "relative"
                    }}
                  >
                    {/* Quote Icon */}
                    <i
                      className="fa fa-quote-left"
                      style={{
                        position: "absolute",
                        top: "18px",
                        left: "22px",
                        fontSize: "32px",
                        color: "#DB1922",
                        opacity: 0.18
                      }}
                    ></i>

                    <h5
                      style={{

                        fontStyle: "italic",
                        color: "#111",
                        margin: 0,
                        lineHeight: "1.4",
                        paddingLeft: "40px"
                      }}
                    >
                      The hardest part of architecture isn’t the design — it’s{" "}
                      <span style={{ color: "#DB1922", fontWeight: 800 }}>
                        keeping the business running
                      </span>{" "}
                      while delivering on time.
                    </h5>


                  </div>

                </Col>
                <Col lg={6} md={12} xs={12} className="mt-3 mt-lg-0">


                  {/* Diagram Section */}
                  <div>
                    <div className="d-flex align-items-center mb-2">
                      <i className="fa fa-layer-group me-2" style={{ color: '#DB1922', fontSize: '16px' }}></i>
                      <h5 className="mb-0 fw-bold" style={{ color: '#222', fontSize: '1rem', letterSpacing: '0.5px', lineHeight: '1.1' }}>
                        OVERLAPPING PROJECT PHASES
                      </h5>
                    </div>
                    {/* <p className="mb-3 fw-bold" style={{ color: '#333', fontSize: '0.75rem', lineHeight: '1.1' }}>
                      Six Active Projects • Concurrent Review Pressure
                    </p> */}
                    <div className="gantt-chart-container  bg-light rounded">
                      <img
                        src="/image/project-phases.gif"
                        alt="Six Active Projects – Concurrent Review Pressure"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                        fetchPriority="low"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Section 2 — What the Documentation Wall Really Is */}
      <section
        className="py-5 py-lg-5 position-relative doc-wall-section-spacing "
        style={{ background: '#fff5f5' }}
      >
        <Container className="position-relative" style={{ zIndex: 1 }}>
          <Row>
            <Col lg={12} md={12} xs={12} >
              <h2
                className="section-title mb-1 mt-5"
                style={{
                  color: '#222',
                  fontSize: '1.9rem',
                  fontWeight: '700',
                  lineHeight: '1.2'
                }}
              >
                What the{' '}
                <span style={{ color: '#DB1922' }}>Documentation Wall</span>{' '}
                Really Is
              </h2>

              <div
                className="mb-6 "
                style={{
                  width: '320px',
                  height: '2px',
                  background: '#DB1922'
                }}
              ></div>

              <Row className="align-items-start">
                {/* LEFT SIDE — TABLE */}
                <Col lg={8} md={12} xs={12} className="mb-5 mb-lg-0">

                  {/* ✅ Removed h-100, d-flex, flex-column (fixes grey gap) */}
                  <div className="comparison-box p-0 overflow-hidden rounded documentation-wall-comparison-table-wrapper">

                    <table
                      className="table table-bordered mb-0 documentation-wall-comparison-table"
                      style={{ width: '100%' }}
                    >
                      <thead>
                        <tr>
                          <th
                            style={{
                              color: '#fff',
                              fontSize: '1rem',
                              fontWeight: '700',
                              padding: '0.75rem 1rem',
                              borderColor: '#ffffff',
                              background: '#c63a4b'
                            }}
                          >
                            <i className="fa fa-file-alt me-2"></i>
                            What You See
                          </th>

                          <th
                            style={{
                              color: '#fff',
                              fontSize: '1rem',
                              fontWeight: '700',
                              padding: '0.75rem 1rem',
                              borderColor: '#ffffff',
                              background: '#9e2436'
                            }}
                          >
                            <i className="fa fa-users me-2"></i>
                            What's Actually Happening
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        {[
                          ['CDs rushed', 'Decisions bleed from SD/DD into CD'],
                          ['Redlines stacking', 'Review authority concentrates in one or two people'],
                          ['Quality uneven', 'Standards rely on memory rather than structure'],
                          ['Overtime constant', 'Effort compensates for systemic gaps']
                        ].map((row, index) => (
                          <tr key={index}>
                            <td
                              style={{
                                color: '#222222 !important',
                                fontSize: '0.9rem',
                                fontWeight: '600',
                                padding: '0.7rem 1rem',
                                borderColor: '#B7383D !important',
                                verticalAlign: 'middle',
                                background: index % 2 === 0 ? '#ffffff' : '#fcf7f7'
                              }}
                            >
                              {row[0]}
                            </td>

                            <td
                              style={{
                                color: '#222',
                                fontSize: '0.9rem',
                                fontWeight: '600',
                                padding: '0.7rem 1rem',
                                borderColor: '#ffffff',
                                verticalAlign: 'middle',
                                background: index % 2 === 0 ? '#fef5f6' : '#ffffff'
                              }}
                            >
                              {row[1]}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div
                    style={{
                      marginTop: "20px",
                      marginBottom: "20px",
                      padding: "10px 0",
                      borderTop: "1px solid #DB1922",
                      borderBottom: "1px solid #DB1922",
                      textAlign: "center"
                    }}
                  >
                    <p
                      style={{
                        fontSize: "1.8rem",
                        fontWeight: "800 !important",
                        color: "#111",
                        maxWidth: "900px",
                        margin: "0 auto",

                        lineHeight: "1.5"
                      }}
                    >
                      “ It is a{" "}
                      <span style={{ color: "#DB1922" }}>
                        throughput constraint
                      </span>{" "}
                      — where{" "}
                      <span style={{ color: "#DB1922" }}>
                        decisions, not drawings
                      </span>{" "}
                      limit progress.”
                    </p>

                  </div> <br />
                </Col>

                {/* RIGHT SIDE — INFO CARD */}
                <Col lg={4} md={12} xs={12} className="ps-lg-4">

                  {/* ✅ Refined container styling */}
                  <div
                    className="doc-wall-info-card "
                    style={{
                      background: '#ffffff',
                      borderRadius: '12px',
                      borderLeft: '4px solid #DB1922'
                    }}
                  >
                    <div style={{ marginBottom: '1rem' }}>
                      <h5
                        style={{
                          fontSize: '1.15rem',
                          fontWeight: 700,
                          letterSpacing: '0.5px',
                          color: '#222',
                          marginBottom: '0.5rem'
                        }}
                      >
                        The Documentation Wall  <span style={{ color: '#DB1922' }}>Is Not</span>
                      </h5>
                      <div
                        className="mb-6 mx-auto"
                        style={{
                          width: '160px',
                          height: '2px',
                          background: '#DB1922'
                        }}
                      ></div>

                    </div>

                    <ul className="list-unstyled mb-0">
                      {[
                        'Slow drafting staff',
                        'Weak software skills',
                        'Individual underperformance'
                      ].map((item, index) => (
                        <li
                          key={index}
                          className="mb-2 d-flex align-items-center"
                          style={{
                            color: '#222',
                            fontSize: '0.98rem',
                            fontWeight: '600'
                          }}
                        >
                          <i
                            className="fa fa-times-circle me-2"
                            style={{
                              color: '#DB1922',
                              fontSize: '1.05rem'
                            }}
                          ></i>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Section 3 */}
      <section className="py-6 py-lg-6 doc-wall-section-spacing" style={{ background: '#ffffff' }}>
        <Container >
          <Row>
            <Col lg={12} md={12} xs={12} className="">
              <h2 className="section-title mb-1 mt-1" style={{ color: '#222', fontSize: '1.9rem', fontWeight: '700', lineHeight: '1.2' }}>
                Where It <span className="accent-red" style={{ color: '#DB1922' }}>Appears</span> First
              </h2>
              <div className="accent-underline mb-4" style={{ width: '200px', height: '2px', background: '#DB1922' }}></div>
              <p className="mb-3" style={{ color: '#333', fontSize: '0.9rem', lineHeight: '1.6' }}>
                The wall shows up in predictable patterns.
              </p>
              <Row>
                <Col lg={4} md={4} xs={12} className="mb-2">
                  <div className="pattern-card p-3 h-100">
                    <div className="d-flex align-items-center mb-2 pattern-card-header">
                      <i className="fa fa-file-alt me-2" style={{ color: '#DB1922', fontSize: '16px' }}></i>
                      <h5 className="mb-0 fw-bold" style={{ color: '#222', fontSize: '1.25rem', lineHeight: '1.2' }}>Project Phases</h5>
                    </div>
                    <ul className="list-unstyled pattern-card-list">
                      <li className="mb-1 d-flex align-items-start">
                        <span className="red-dot me-2 doc-wall-bullet-dot"></span>
                        <span style={{ color: '#333', fontSize: '0.85rem', lineHeight: '1.3' }}>SD decisions leak into DD</span>
                      </li>
                      <li className="mb-1 d-flex align-items-start">
                        <span className="red-dot me-2 doc-wall-bullet-dot"></span>
                        <span style={{ color: '#333', fontSize: '0.85rem', lineHeight: '1.3' }}>DD changes trigger CD rework</span>
                      </li>
                      <li className="mb-1 d-flex align-items-start">
                        <span className="red-dot me-2 doc-wall-bullet-dot"></span>
                        <span style={{ color: '#333', fontSize: '0.85rem', lineHeight: '1.3' }}>30/60/90% reviews become correction checkpoints</span>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col lg={4} md={4} xs={12} className="mb-2">
                  <div className="pattern-card p-3 h-100">
                    <div className="d-flex align-items-center mb-2 pattern-card-header">
                      <i className="fa fa-comments me-2" style={{ color: '#DB1922', fontSize: '16px' }}></i>
                      <h5 className="mb-0 fw-bold" style={{ color: '#222', fontSize: '1.25rem', lineHeight: '1.2' }}>Coordination</h5>
                    </div>
                    <ul className="list-unstyled pattern-card-list">
                      <li className="mb-1 d-flex align-items-start">
                        <span className="red-dot me-2 doc-wall-bullet-dot"></span>
                        <span style={{ color: '#333', fontSize: '0.85rem', lineHeight: '1.3' }}>Engineers wait longer for architectural direction</span>
                      </li>
                      <li className="mb-1 d-flex align-items-start">
                        <span className="red-dot me-2 doc-wall-bullet-dot"></span>
                        <span style={{ color: '#333', fontSize: '0.85rem', lineHeight: '1.3' }}>Redlines sit before action</span>
                      </li>
                      <li className="mb-1 d-flex align-items-start">
                        <span className="red-dot me-2 doc-wall-bullet-dot"></span>
                        <span style={{ color: '#333', fontSize: '0.85rem', lineHeight: '1.3' }}>Clash detection occurs late</span>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col lg={4} md={4} xs={12} className="mb-2">
                  <div className="pattern-card p-3 h-100">
                    <div className="d-flex align-items-center mb-2 pattern-card-header">
                      <i className="fa fa-list me-2" style={{ color: '#DB1922', fontSize: '16px' }}></i>
                      <h5 className="mb-0 fw-bold" style={{ color: '#222', fontSize: '1.25rem', lineHeight: '1.2' }}>Documentation</h5>
                    </div>

                    <ul className="list-unstyled pattern-card-list">
                      <li className="mb-1 d-flex align-items-start ">
                        <span className="red-dot me-2 doc-wall-bullet-dot"></span>
                        <span style={{ color: '#333', fontSize: '0.85rem', lineHeight: '1.3' }}>BIM standards drift</span>
                      </li>
                      <li className="mb-1 d-flex align-items-start">
                        <span className="red-dot me-2 doc-wall-bullet-dot"></span>
                        <span style={{ color: '#333', fontSize: '0.85rem', lineHeight: '1.3' }}>Revision cycles increase</span>
                      </li>
                      <li className="mb-1 d-flex align-items-start ">
                        <span className="red-dot me-2 doc-wall-bullet-dot"></span>
                        <span style={{ color: '#333', fontSize: '0.85rem', lineHeight: '1.3' }}>Permit comments multiply</span>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
              <div className="mt-0 mb-2 p-2" style={{ background: 'linear-gradient(to bottom,rgb(251, 245, 245) 0%, #ffffff 100%)', textAlign: 'center', borderRadius: '12px', boxShadow: '2px 4px 6px rgba(0, 0, 0, 0.1)' }}>
                <div className="mb-0 fst-italic fw-bold" style={{ color: '#DB1922', fontSize: '1rem', lineHeight: '1.5', fontWeight: '900' }}>
                  <i className="fa fa-quote-left mb-2 me-2" style={{ fontSize: '0.9rem' }}></i>
                  If several of these patterns are occurring simultaneously, the system is likely operating beyond its original design.
                  <i className="fa fa-quote-right ms-2" style={{ fontSize: '0.9rem' }}></i>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Section 4 — very subtle red tint */}
      <section className="py-7 py-lg-7 doc-wall-section-spacing why-hiring-section mb-5" style={{ background: '#faf5f5' }}>
        <Container >
          <Row>
            <Col lg={12} md={12} xs={12} className="">
              <h2 className="section-title mb-1 mt-4" style={{ color: '#222', fontSize: '1.9rem', fontWeight: '700', lineHeight: '1.2' }}>
                Why Hiring Rarely <span className="accent-red" style={{ color: '#DB1922' }}>Relieves Pressure</span>
              </h2>
              <div className="accent-underline mb-4" style={{ width: '350px', height: '2px', background: '#DB1922' }}></div>

              <Row className="align-items-center">
                <Col lg={6} md={12} xs={12} className="mb-3 mb-lg-0">
                  <div className="position-relative" style={{ borderRadius: '8px', width: '100%', height: '340px' }}>
                    <img
                      src="/image/Team-collaboration.png"
                      alt="Team collaboration meeting"
                      className="w-100 h-100"
                      style={{ objectFit: 'cover' }}
                      loading="lazy"
                      fetchPriority="low"
                      decoding="async"
                    />
                    <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'linear-gradient(to bottom, rgba(247, 245, 245, 0.21) 0%, rgba(255, 254, 254, 0) 100%)' }}></div>
                  </div>
                </Col>
                <Col lg={6} md={12} xs={12}>
                  <p className="mb-3" style={{ color: '#333', fontSize: '0.95rem', lineHeight: '1.3' }}>
                    When strain appears, hiring feels logical. But new hires require:
                  </p>
                  <Row className="g-3">
                    <Col md={4} xs={12}>
                      <div className="hiring-card p-3 h-100">
                        <div className="text-center mb-2">
                          <i className="fa fa-exchange-alt" style={{ color: '#DB1922', fontSize: '2rem' }}></i>
                        </div>
                        <h6 className="text-center fw-bold mb-2" style={{ color: '#222', fontSize: '0.9rem' }}>Context Transfer</h6>
                        <p className="text-center mb-0 small" style={{ color: '#666', fontSize: '0.8rem', lineHeight: '1.3' }}>Time-intensive onboarding</p>
                      </div>
                    </Col>
                    <Col md={4} xs={12}>
                      <div className="hiring-card p-3 h-100">
                        <div className="text-center mb-2">
                          <i className="fa fa-user-check" style={{ color: '#DB1922', fontSize: '2rem' }}></i>
                        </div>
                        <h6 className="text-center fw-bold mb-2" style={{ color: '#222', fontSize: '0.9rem' }}>Senior Review</h6>
                        <p className="text-center mb-0 small" style={{ color: '#666', fontSize: '0.8rem', lineHeight: '1.3' }}>Increased bandwidth demand</p>
                      </div>
                    </Col>
                    <Col md={4} xs={12}>
                      <div className="hiring-card p-3 h-100">
                        <div className="text-center mb-2">
                          <i className="fa fa-chalkboard-teacher" style={{ color: '#DB1922', fontSize: '2rem' }}></i>
                        </div>
                        <h6 className="text-center fw-bold mb-2" style={{ color: '#222', fontSize: '0.9rem' }}>Mentorship Time</h6>
                        <p className="text-center mb-0 small" style={{ color: '#666', fontSize: '0.8rem', lineHeight: '1.3' }}>Ongoing training needs</p>
                      </div>
                    </Col>
                  </Row>
                  <div className="doc-wall-key-insight p-3 mt-4 mb-6" style={{ background: 'linear-gradient(to bottom, #fbf2f2 0%, #ffffff 100%)', borderRadius: '4px' }}>
                    <div className="mb-0 fst-italic fw-bold" style={{ color: '#222', fontSize: '1.2rem', lineHeight: '1.4', fontWeight: '900' }}>
                      For months, senior architects often review more — not less.<br /> <span className="doc-wall-key-line">Capacity is not headcount. It is decision flow.</span>
                    </div>

                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Section 5 — white */}
      <section className=" doc-wall-section-spacing doc-wall-section-5" style={{ background: '#ffffff' }}>
        <Container >
          <Row>
            <Col lg={12} md={12} xs={12} className="">
              <h2 className="section-title mb-1" style={{ color: '#222', fontSize: '1.9rem', fontWeight: '700', lineHeight: '1.2' }}>
                The Costs That Hide in <span className="accent-red" style={{ color: '#DB1922' }}>Growth</span>
              </h2>
              <div className="accent-underline mb-6" style={{ width: '300px', height: '2px', background: '#DB1922' }}></div>
              <div className="w-100 mt-1 doc-wall-growth-wrapper">
                <img
                  src="/image/growth.png"
                  alt="Growth costs illustration"
                  className="doc-wall-growth-image"
                  fetchPriority="low"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="mt-0 p-3" style={{ textAlign: 'center', borderRadius: '12px' }}>
                <div className="mb-0 fst-italic fw-bold" style={{ color: '#DB1922', fontSize: '1.3rem', lineHeight: '1.4', fontWeight: '900' }}>
                  Over time, growth begins to feel managerial rather than creative.
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Section 6 */}
      <section className="py-5 py-lg-6 doc-wall-section-spacing why-stages-section">
        <Container >
          <Row>
            <Col lg={12} md={12} xs={12} className="">
              <h2 className="section-title mb-1 mt-1" style={{ color: '#222', fontSize: '1.9rem', fontWeight: '700', lineHeight: '1.2' }}>
                Why This Happens at <span className="accent-red" style={{ color: '#DB1922' }}>Predictable Stages</span>
              </h2>
              <div className="accent-underline mb-6" style={{ width: '400px', height: '2px', background: '#DB1922' }}></div>

              <Row className="align-items-center">
                <Col lg={5} md={12} xs={12} className="mb-4 mb-lg-4">
                  <div className="position-relative" style={{ borderRadius: '8px', overflow: 'hidden' }}>
                    <img
                      src="/image/Stage.png"
                      alt="Predictable stages"
                      className="w-100"
                      style={{ objectFit: 'contain' }}
                      loading="lazy"
                      fetchPriority="low"
                      decoding="async"
                    />
                  </div>
                </Col>
                <Col lg={7} md={12} xs={12}>
                  <p className="mb-3" style={{ color: '#333', fontSize: '0.95rem', lineHeight: '1.3' }}>
                    Early-stage firms rely on proximity and shared memory. As concurrency increases:
                  </p>
                  <ul className="list-unstyled mb-4 doc-wall-stage-list doc-wall-icon-list">
                    <li className="d-flex align-items-center" style={{ marginBottom: '0.35rem' }}>
                      <i className="fa fa-puzzle-piece me-2 doc-wall-list-icon" style={{ color: '#DB1922', fontSize: '0.9rem' }} aria-hidden="true"></i>
                      <div style={{ lineHeight: '1.5' }}>
                        <strong className="d-block" style={{ color: '#666', fontSize: '1rem' }}>Context Fragments</strong>
                      </div>
                    </li>
                    <li className="d-flex align-items-center" style={{ marginBottom: '0.35rem' }}>
                      <i className="fa fa-user-shield me-2 doc-wall-list-icon" style={{ color: '#DB1922', fontSize: '0.9rem' }} aria-hidden="true"></i>
                      <div style={{ lineHeight: '1.5' }}>
                        <strong className="d-block" style={{ color: '#666', fontSize: '1rem' }}>Decision authority concentrates</strong>
                      </div>
                    </li>
                    <li className="d-flex align-items-center" style={{ marginBottom: '0.35rem' }}>
                      <i className="fa fa-clock me-2 doc-wall-list-icon" style={{ color: '#DB1922', fontSize: '0.9rem' }} aria-hidden="true"></i>
                      <div style={{ lineHeight: '1.5' }}>
                        <strong className="d-block" style={{ color: '#666', fontSize: '1rem' }}>Documentation cycles elongate</strong>
                      </div>
                    </li>
                  </ul>
                  <div
                    style={{
                      marginTop: "30px",
                      padding: "28px 32px",
                      background: "linear-gradient(to bottom, #ffffff 0%, #FCF8F9 100%)",
                      borderRadius: "14px",
                      position: "relative"
                    }}
                  >
                    {/* Quote Icon */}
                    {/* <i
    className="fa fa-quote-left"
    style={{
      position: "absolute",
      top: "18px",
      left: "22px",
      fontSize: "32px",
      color: "#DB1922",
      opacity: 0.18
    }}
  ></i> */}

                    <h5
                      style={{

                        fontStyle: "italic",
                        color: "#111",
                        margin: 0,
                        lineHeight: "1.4",
                        paddingLeft: "40px"
                      }}
                    >
                      "  The hardest part of architecture isn’t the design — it’s{" "}
                      <span style={{ color: "#DB1922", fontWeight: 800 }}>
                        keeping the business running
                      </span>{" "}
                      while delivering on time. "
                    </h5>


                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Section 7 - The Shift That Eventually Happens — white */}
      <section className="py-5 py-lg-6 position-relative shift-section overflow-hidden doc-wall-section-spacing" style={{ background: '#ffffff' }}>
        <div
          className="position-absolute top-0 start-10 w-100 h-100"
          style={{
            backgroundImage: 'url(/image/shift.png)',
            backgroundSize: '130% auto',
            backgroundPosition: '50% 50%',
            backgroundRepeat: 'no-repeat'
          }}
          aria-hidden="true"
        />
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'linear-gradient(to bottom, rgba(252, 247, 247, 0.64) 0%, rgba(252, 252, 252, 0.81) 100%)', zIndex: 0 }} aria-hidden="true" />
        <Container className="position-relative  " style={{ zIndex: 1 }}>
          <h2 className="section-title  mb-1 mt-6" style={{ color: '#222', fontSize: '1.9rem', fontWeight: '700', lineHeight: '1.2' }}>
            The Shift That <span className="accent-red" style={{ color: '#DB1922' }}>Eventually  Happens</span>
          </h2>
          <div className="accent-underline mb-6" style={{ width: '400px', height: '2px', background: '#DB1922' }}></div>
          <Row className="align-items-start justify-content-center mb-0">
            <Col lg={5} md={5} xs={12} className="mb-2 mb-lg-0">
              <div
                className="shift-speech-bubble shift-speech-bubble-left p-4"

              >
                <p className="mb-1 section-content" style={{ color: '#333', fontSize: '1.3rem', lineHeight: '1.5' }}>At a certain stage, firms stop asking:</p>
                <p className="mb-0 fw-bold section-content-desc" style={{ color: '#DB1922', fontSize: '1.7rem', lineHeight: '1.4' }}>"Who do we hire next?"</p>
              </div>
            </Col>
            <Col lg={2} md={2} xs={12} className="text-center d-none d-md-block" style={{ minHeight: '140px' }}>

            </Col>
            <Col lg={5} md={5} xs={12} className="mb-2 mb-lg-0">
              <div className="shift-speech-bubble shift-speech-bubble-right p-3">
                <p className="mb-1 section-content" style={{ color: '#333', fontSize: '1.15rem', lineHeight: '1.45' }}>They begin asking:</p>
                <p className="mb-0 fw-bold section-content-desc" style={{ color: '#DB1922', fontSize: '1.4rem', lineHeight: '1.4' }}>"Where is our decision-making capacity constrained?"</p>
              </div>
            </Col>
          </Row>
          <p className="text-center section-description" >
            Capacity becomes about
          </p>
          <hr className="mb-2" style={{ borderColor: '#DB1922', borderWidth: '1px', maxWidth: '200px', margin: '0rem auto' }} />
          <Row className="g-3 justify-content-center mb-4">
            <Col xs={6} md={3}>
              <div className="shift-capacity-box px-3 py-4 text-center h-100">
                <i className="fa fa-tachometer-alt mb-2" style={{ color: '#DB1922', fontSize: '2rem' }}></i>
                <p className="mb-0 fw-bold" style={{ color: '#222', fontSize: '0.9rem' }}>Throughput</p>
              </div>
            </Col>
            <Col xs={6} md={3}>
              <div className="shift-capacity-box px-3 py-4 text-center h-100">
                <i className="fa fa-clipboard-check mb-2" style={{ color: '#DB1922', fontSize: '2rem' }}></i>
                <p className="mb-0 fw-bold" style={{ color: '#222', fontSize: '0.9rem' }}>Review Load</p>
              </div>
            </Col>
            <Col xs={6} md={3}>
              <div className="shift-capacity-box px-3 py-4 text-center h-100">
                <i className="fa fa-file-contract mb-2" style={{ color: '#DB1922', fontSize: '2rem' }}></i>
                <p className="mb-0 fw-bold" style={{ color: '#222', fontSize: '0.9rem' }}>Documentation Ownership</p>
              </div>
            </Col>
            <Col xs={6} md={3}>
              <div className="shift-capacity-box px-3 py-4 text-center h-100">
                <i className="fa fa-users-cog mb-2" style={{ color: '#DB1922', fontSize: '2rem' }}></i>
                <p className="mb-0 fw-bold" style={{ color: '#222', fontSize: '0.9rem' }}>Senior Bandwidth</p>
              </div>
            </Col>
          </Row>
          <p className="text-center mb-7 section-content " >
            Not just adding people.
          </p>

        </Container>
      </section>

      {/* Final Reflection — very subtle red tint */}
      <section className="py-4 py-lg-4 final-reflection-cta-section" style={{ background: '#ffffff' }}>
        <Container className="">
          <h2 className="section-title  mb-1 " style={{ color: '#111', fontSize: '2.1rem', fontWeight: '750', lineHeight: '1.15' }}>
            FINAL <span className="accent-red" style={{ color: '#DB1922' }}>REFLECTION</span>
          </h2>
          <div className="accent-underline mb-6" style={{ width: '160px', height: '2px', background: '#DB1922', textAlign: 'center', margin: '0 auto' }}></div>
          <div className="final-reflection-quote">
            Informal documentation systems built on proximity and centralized judgment do not scale invisibly. As concurrency rises, coordination cost compounds.
          </div>
          <p className="mb-2 section-content-desc text-center" style={{ color: '#DB1922', fontSize: '0.95rem', lineHeight: '1.6' }}>Growth exposes structural limits. It does not create them.</p>
          <p className="fw-bold mt-3" style={{ color: '#222', fontSize: '1rem', lineHeight: '1.6' }}>Before adding more people, it is worth asking:</p>
          <p className="mb-2 section-content-desc text-center" style={{ color: '#DB1922', fontSize: '1.2rem', lineHeight: '1.4' }}>Are we adding capacity — or adding complexity?</p>


          <div className="final-reflection-cta-row">
            <hr className="mb-2" style={{ borderColor: '#DB1922', borderWidth: '1px', maxWidth: '200px', margin: '0rem auto' }} />


            <div className="doc-wall-guide-cta">

              <p className="guide-cta-text">
                Check out our detailed guide to understand this issue further.
              </p>



            </div>
            <LandingPdfLeadModal
              title="Why Growing Architecture Firms Hit a Documentation Wall"
              downloadUrl={DOCUMENTATION_WALL_PDF_URL}
              onBeforeOpen={trackPdfClick}
              trigger={(
                <a
                  className="doc-wall-final-question fw-bold text-decoration-none"
                  href={DOCUMENTATION_WALL_PDF_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download the PDF
                </a>
              )}
            />

          </div>




        </Container>
      </section>


      <GetInTouchSection />
      <SiteFooter />
      <LandingPdfLeadModal
        title="Why Growing Architecture Firms Hit a Documentation Wall"
        downloadUrl={DOCUMENTATION_WALL_PDF_URL}
        onBeforeOpen={trackPdfClick}
        trigger={(
          <a
            href={DOCUMENTATION_WALL_PDF_URL}
            className="pdf-fab"
            title="Get Your Free PDF"
            aria-label="Get Your Free PDF"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-file-pdf"></i>
          </a>
        )}
      />
      {/* <WebinarHomePopupModal /> */}
      <style>{`
        .documentation-wall-page .call-icon { display: none !important; }
        .pdf-fab {
          position: fixed;
          right: 0px;
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
        .pdf-fab .fa-file-pdf { font-size: 22px; }
        .pdf-fab:hover::after {
          content: 'Get Your Free PDF';
          position: absolute;
          right: 0px;
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
    </main>
  );
};

export default WhyGrowingArchitectureFirmsHitDocumentationWallView;
export { WhyGrowingArchitectureFirmsHitDocumentationWallView };
