"use client";

import React, { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";

import { SiteFooter } from "@/components/sections/site-footer";
import LandingTopHeader from "@/components/landing/landing-top-header";
import LandingPdfLeadModal from "@/components/landing/landing-pdf-lead-modal";

const HeroImage = "/image/doc-that-scale-header.png";
const HeroMobileImage = "/image/doc-that-scale-banner2.png";
const InfographicImage = "/image/Visualizing%20the%20GAP%20(1).svg";
const GrowthStageIllustration = "/image/what-changes-during-growth-stage1.jpg";
const Title1Svg = "/image/Title-1.svg";
const Title2Svg = "/image/Title-2.svg";
const WhyAddingMorePeopleImg = "/image/Why%20Adding%20More%20People.png";


const SCALE_SYSTEM_PDF_URL =
  "https://www.virtualbuildingstudio.com/resources/documentation-systems-that-scale.pdf?utm_source=LP_DocSystems&utm_medium=LPCTA&utm_campaign=T2TOFU";
const DOC_SYSTEMS_HIDE_CHAT_ICON = "vbs-doc-systems--hide-chat-icon";

/** Primary CTA — brand red pill */
const DOC_LP_BTN_PRIMARY =
  "btn doc-lp-btn-primary text-white text-uppercase px-3 px-lg-4 py-2 rounded-pill fw-semibold d-inline-flex align-items-center justify-content-center text-decoration-none";

const ScaleSystemsMeta = {
  metaTitle:
    "Scalable Documentation Systems for Architecture Firms",
  metaDescription:
    "Explore documentation systems that help architecture firms scale efficiently, reduce coordination issues, and improve project delivery speed.",
  metaKeywords:
    "architecture documentation, documentation systems, growing architecture firms, AEC documentation, BIM documentation, design documentation, construction documentation, drawing review cycles, coordination workflows, architecture firm scaling, senior architect workload, documentation workflow, drawing standards, multidisciplinary coordination",
  ogImage: null,
  twitterImage: null,
};

/**
 * Section header aligned with documentation-wall LP:
 * .section-title + red accent word + #D70416 underline (same as why-growing-architecture-firms-hit-documentation-wall.js)
 */
const SectionHeadEditorial = ({ title, titleAccent, lead, iconClass = "fa fa-lightbulb-o", className = "" }) => {
  return (
    <header className={`doc-systems-section-editorial ${className}`.trim()}>

      <h2 className="h2 section-title mb-1 doc-systems-heading-single-line">
        {title}
        {titleAccent ? (
          <>
            {" "}
            <span className="accent-red" style={{ color: "#D70416" }}>
              {titleAccent}
            </span>
          </>
        ) : null}
      </h2>
      <div
        className="accent-underline mb-4"
        style={{ width: "260px", height: "2px", background: "#D70416" }}
        aria-hidden="true"
      />
      {lead ? <p className="lead text-secondary doc-systems-section-editorial__lead mb-0">{lead}</p> : null}
    </header>
  );
};

const SectionPill = ({ iconClass = "fa fa-lightbulb-o", children }) => (
  <div className="doc-systems-section-pill">
    <i className={iconClass} aria-hidden="true" />
    <span>{children}</span>
  </div>
);

const DocumentationSystemThatScaleView = () => {
  const shouldReduceMotion = useReducedMotion();
  const revealVariants = {
    hidden: { opacity: 0, y: 22 },
    show: { opacity: 1, y: 0 },
  };
  const reveal = (delay = 0) =>
    shouldReduceMotion
      ? {}
      : {
        initial: "hidden",
        whileInView: "show",
        viewport: { once: true, amount: 0.18 },
        variants: revealVariants,
        transition: { duration: 0.62, delay, ease: [0.22, 1, 0.36, 1] },
      };
  useEffect(() => {
    if (typeof document === "undefined") return;
    const root = document.querySelector("main.doc-systems-page");
    if (!root) return;
    const sections = Array.from(root.querySelectorAll("section:not(.doc-systems-hero-split)"));

    if (shouldReduceMotion) {
      sections.forEach((section) => section.classList.add("in-view"));
      return;
    }

    sections.forEach((section) => section.classList.add("section-reveal"));
    const io = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" },
    );
    sections.forEach((section) => io.observe(section));
    return () => io.disconnect();
  }, [shouldReduceMotion]);
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.classList.add(DOC_SYSTEMS_HIDE_CHAT_ICON);
    return () => {
      document.body.classList.remove(DOC_SYSTEMS_HIDE_CHAT_ICON);
    };
  }, []);

  const growthInsightWrapRef = useRef(null);
  const growthInsightGridRef = useRef(null);
  useEffect(() => {
    const root = growthInsightWrapRef.current;
    const gridEl = growthInsightGridRef.current;
    if (!root || !gridEl) return;
    const items = Array.from(root.querySelectorAll(".seq-item"));
    const ids = ["s0", "s1", "s2", "s3", "s4", "s5", "s6", "s7"];
    const delays = [80, 210, 340, 470, 620, 760, 900, 1040];
    items.forEach((el) => el.classList.remove("show"));
    if (shouldReduceMotion) {
      ids.forEach((id) => {
        const el = root.querySelector(`#${id}`);
        if (!el) return;
        el.classList.add("show");
      });
      return;
    }
    let started = false;
    const timers = [];
    const startSequence = () => {
      if (started) return;
      started = true;
      ids.forEach((id, i) => {
        const t = window.setTimeout(() => {
          const el = root.querySelector(`#${id}`);
          if (!el) return;
          el.classList.add("show");
        }, delays[i]);
        timers.push(t);
      });
    };
    const io = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          startSequence();
          observer.disconnect();
        });
      },
      { threshold: 0.3, rootMargin: "0px 0px 0px 0px" },
    );
    io.observe(gridEl);
    return () => {
      io.disconnect();
      timers.forEach((t) => window.clearTimeout(t));
    };
  }, [shouldReduceMotion]);

  const scrollToBreakingSection = (e) => {
    e.preventDefault();
    if (typeof document === "undefined") return;
    const target = document.getElementById("doc-breaking");
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const hiringImmediate = [
    "Contributors to each documentation set",
    "Coordination paths between team members",
    "Review load as seniors oversee new staff",
  ];
  const hiringTakesTime = [
    "Knowledge transfer about firm standards and client nuances",
    "Alignment on coordination conventions",
    "Independent decision-making without senior validation",
  ];
  return (
    <main className="doc-systems-page documentation-wall-page">
      <LandingTopHeader />

      <section className="doc-systems-hero-split doc-systems-hero-premium doc-systems-hero-ref">
        <div className="doc-systems-hero-ref__blueprint" aria-hidden="true" />
        <div className="doc-systems-hero-ref__glow doc-systems-hero-ref__glow--image" aria-hidden="true" />
        <div className="doc-systems-hero-ref__glow doc-systems-hero-ref__glow--cta" aria-hidden="true" />
        <Container fluid="lg" className="doc-systems-hero-split__container doc-systems-hero-ref__container position-relative">
          <Row className="align-items-center g-5 g-xl-5 doc-systems-hero-split__row doc-systems-hero-premium__row doc-systems-hero-ref__row">
            <Col lg={7} className="order-1 order-lg-1">
              <motion.div className="doc-systems-hero-copy doc-systems-hero-ref__copy doc-systems-reveal doc-systems-reveal--1 position-relative" {...reveal(0.02)}>
                <h1 className="h1 mb-3">
                  Why Delivery Starts Slowing Down as Architecture Firms Grow
                </h1>
                <p className="lead text-secondary mb-0 doc-systems-hero-ref__body">
                  As firms grow, review cycles expand, coordination gets heavier, and senior architects stay stuck in documentation longer than expected-despite hiring.
                </p>
                <img
                  src={HeroMobileImage}
                  alt="Mature architect reviewing documentation and floor plans on a large monitor"
                  className="doc-systems-hero-mobile-image"
                  loading="eager"
                  decoding="async"
                />
                <div className="doc-v2-hero-ctas mb-4 mt-4">
                  <a href="#" className="doc-v2-btn doc-v2-btn-outline" onClick={scrollToBreakingSection}>
                    <i className="fa-solid fa-magnifying-glass me-2" aria-hidden />
                    See What's Slowing Your Delivery
                  </a>
                  <LandingPdfLeadModal
                    title="Documentation Systems That Scale"
                    downloadUrl={SCALE_SYSTEM_PDF_URL}
                    trigger={(
                      <a href={SCALE_SYSTEM_PDF_URL} target="_blank" rel="noopener noreferrer" className={DOC_LP_BTN_PRIMARY}>
                        <i className="fa-solid fa-file-arrow-down me-2" aria-hidden />
                        Download the Guide
                        <i className="fa-solid fa-arrow-right-long ms-2" aria-hidden />
                      </a>
                    )}
                  />
                </div>
                <p className="lead text-secondary mb-0 doc-systems-hero-ref__body">
                  Growth doesn&apos;t reduce delivery pressure-it redistributes it.
                </p>

              </motion.div>
            </Col>
          </Row>
        </Container>

      </section>

      <section className="doc-systems-pattern-narrative doc-v2-pattern-sec doc-systems-band doc-systems-band--pattern py-9 py-lg-10">
        <Container fluid="lg" className="doc-v2-wrap">
          <motion.div className="doc-v2-rv" {...reveal(0.04)}>
            {/* <div className="doc-v2-chip">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
              Pattern Recognition
            </div> */}
            <h2 className="h2 section-title mb-1 doc-systems-heading-single-line">
              The Pattern Most Architecture Firms <span className="doc-v2-red">Experience</span>
            </h2>
            <div className="doc-v2-rule" aria-hidden="true" />
            <p className="lead text-secondary doc-v2-pattern-intro">
              You&apos;re running more projects than before-but delivery feels slower.
              <br />
              <em className="doc-v2-pattern-intro-em">The pattern starts showing up:</em>
            </p>

          </motion.div>
          <div className="doc-v2-cards-2 doc-v2-cards-2--pattern-row">
            <div className="doc-v2-card doc-v2-rv doc-v2-rv-d1">
              <div className="doc-v2-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <p className="doc-v2-card-p mb-0">
                Review cycles that used to take days now take weeks
              </p>
            </div>
            <div className="doc-v2-card doc-v2-rv doc-v2-rv-d2">
              <div className="doc-v2-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <p className="doc-v2-card-p mb-0">
                Senior architects are still reviewing almost every drawing set
              </p>
            </div>
            <div className="doc-v2-card doc-v2-rv doc-v2-rv-d3">
              <div className="doc-v2-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <p className="doc-v2-card-p mb-0">
                RFIs keep increasing-even after hiring more staff
              </p>
            </div>
            <div className="doc-v2-card doc-v2-rv doc-v2-rv-d4">
              <div className="doc-v2-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <line x1="8" y1="6" x2="21" y2="6" />
                  <line x1="8" y1="12" x2="21" y2="12" />
                  <line x1="8" y1="18" x2="21" y2="18" />
                  <line x1="3" y1="6" x2="3.01" y2="6" />
                  <line x1="3" y1="12" x2="3.01" y2="12" />
                  <line x1="3" y1="18" x2="3.01" y2="18" />
                </svg>
              </div>
              <p className="doc-v2-card-p mb-0">
                Coordination gets heavier, not lighter, across projects
              </p>
            </div>
          </div>
          <div className="doc-v2-section-closer-wrap doc-v2-section-closer-wrap--in-pattern">
            <p className="doc-v2-section-closer mb-0">
              At first, it doesn&apos;t look like a system problem.
              But over time, it becomes impossible to ignore.
            </p>
          </div>
        </Container>
      </section>

      <section className="doc-systems-growth-stage doc-v2-growth-sec doc-systems-band doc-systems-band--subtle py-9 py-lg-10">
        <Container fluid="lg" className="doc-v2-wrap">
          <motion.div className="doc-v2-growth-intro doc-v2-rv w-100 mb-4 mb-lg-5" {...reveal(0.05)}>
           
            <h2 className="h2 section-title mb-1 doc-systems-heading-single-line">
              What Changes During <span className="doc-v2-red">Growth Stage</span>
            </h2>
            <div className="doc-v2-rule" aria-hidden="true" />
            <p className="lead text-secondary doc-v2-growth-lede">
              This isn&apos;t about performance.
              It happens because the structure of delivery changes as firms grow.
            </p>
            <ul className="doc-v2-growth-list mb-0">
              <li>More projects run in parallel</li>
              <li>More handoffs happen across teams</li>
              <li>More decisions require coordination</li>
            </ul>

          </motion.div>
          <motion.div className="doc-v2-rv" {...reveal(0.12)}>
            <img
              src={GrowthStageIllustration}
              alt="What changes during growth stage: more projects, more handoffs, and more decisions"
              className="w-100 h-auto"
              width={1600}
              height={900}
              loading="lazy"
              decoding="async"
            />
          </motion.div>
          <div className="doc-v2-section-closer-wrap">
            <p className="doc-v2-section-closer mb-0">
              &quot;Growth increases interdependence-not just workload.&quot;
            </p>
          </div>

        </Container>
      </section>

      <section className="doc-systems-gap-premium doc-systems-band doc-systems-band--white pb-9 pb-lg-10">
        <Container fluid="lg">
          {/* <SectionHeadEditorial
            title="Visualizing the Documentation"
            titleAccent="Gap"
            iconClass="fa fa-sitemap"
            // lead="Most firms think they have a workload problem. What they actually have is a coordination problem."
            className="doc-systems-section-editorial--center-lg mb-4 mb-lg-5"
          /> */}



          <div className="doc-systems-infographic-shell mx-auto mt-5 mt-lg-5">
            <img src={InfographicImage} alt="Early stage versus growth stage documentation and coordination gap" />
          </div>
          <div className="doc-v2-section-closer-wrap doc-v2-section-closer-wrap--gap">
            <p className="doc-v2-section-closer mb-0">
              The Gap: Coordination points multiply faster than capacity expands
            </p>
          </div>
        </Container>
      </section>

      <section id="what-guide" className="doc-v2-guide-sec doc-systems-band doc-systems-band--subtle py-9 py-lg-10 scroll-margin">
        <Container fluid="lg" className="doc-v2-wrap">
          <div className="doc-v2-guide-header doc-v2-rv">
            {/* <div className="doc-v2-chip doc-v2-chip--center">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              Inside the Guide
            </div> */}
            <h2 className="h2 section-title mb-1 doc-systems-heading-single-line">
              What This Guide Helps You <span className="doc-v2-red">See</span>
            </h2>
            <div className="doc-v2-rule" aria-hidden="true" />
            <p className="lead text-secondary doc-v2-guide-sub">
              This guide breaks down why delivery starts slowing down-and where documentation begins to become the constraint.
            </p>
          </div>
          <div className="doc-v2-cards-3">
            <div className="doc-v2-card doc-v2-rv doc-v2-rv-d1">
              {/* <div className="doc-v2-card-num">01</div> */}
              <div className="doc-v2-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                </svg>
              </div>
              <div className="doc-v2-card-h">Why Informal Documentation Worked</div>
              <div className="doc-v2-card-p">
                Why informal documentation worked reliably at smaller scale—and when that changes.
              </div>
            </div>
            <div className="doc-v2-card doc-v2-rv doc-v2-rv-d2">
              {/* <div className="doc-v2-card-num">02</div> */}
              <div className="doc-v2-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <rect x="3" y="3" width="7" height="7" />
                  <rect x="14" y="3" width="7" height="7" />
                  <rect x="14" y="14" width="7" height="7" />
                  <rect x="3" y="14" width="7" height="7" />
                </svg>
              </div>
              <div className="doc-v2-card-h">What Changes as Projects Overlap</div>
              <div className="doc-v2-card-p">What changes as project concurrency increases and overlap grows across teams.</div>
            </div>
            <div className="doc-v2-card doc-v2-rv doc-v2-rv-d3">
              {/* <div className="doc-v2-card-num">03</div> */}
              <div className="doc-v2-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <line x1="23" y1="11" x2="17" y2="11" />
                  <line x1="20" y1="8" x2="20" y2="14" />
                </svg>
              </div>
              <div className="doc-v2-card-h">Why Hiring Shifts the Load</div>
              <div className="doc-v2-card-p">Why hiring shifts the problem instead of solving it—and what to do instead.</div>
            </div>
            <div className="doc-v2-card doc-v2-rv doc-v2-rv-d1">
              {/* <div className="doc-v2-card-num">04</div> */}
              <div className="doc-v2-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              </div>
              <div className="doc-v2-card-h">When Coordination Becomes the Constraint</div>
              <div className="doc-v2-card-p">Where coordination becomes the constraint—not raw headcount or project volume.</div>
            </div>
            <div className="doc-v2-card doc-v2-rv doc-v2-rv-d2">
              {/* <div className="doc-v2-card-num">05</div> */}
              <div className="doc-v2-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                  <polyline points="17 6 23 6 23 12" />
                </svg>
              </div>
              <div className="doc-v2-card-h">What Scales</div>
              <div className="doc-v2-card-p">
                What scalable firms have in common, and why it&apos;s usually a pattern—not a talent—problem.
              </div>
            </div>
            <div className="doc-v2-card doc-v2-rv doc-v2-rv-d3">
              {/* <div className="doc-v2-card-num">06</div> */}
              <div className="doc-v2-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
              </div>
              <div className="doc-v2-card-h">Where Firms Stall</div>
              <div className="doc-v2-card-p">
                Where growing firms typically get stuck before systems catch up with their delivery demands.
              </div>
            </div>
          </div>
          <div className="doc-v2-section-closer-wrap doc-v2-section-closer-wrap--hiring">
            <p className="doc-v2-section-closer mb-0">
              Hiring doesn&apos;t remove delivery pressure—it redistributes it across the system.
            </p>
          </div>
        </Container>
      </section>

      <section className="doc-systems-hiring-section doc-growth-insight-section py-8 py-lg-9">
        <Container fluid="lg" className="doc-growth-insight__container">
          <div className="doc-growth-insight-wrap" ref={growthInsightWrapRef}>
            <h2 className="h2 section-title doc-growth-insight__title mb-1">
              Why Adding More People <span className="doc-growth-insight__title-em">Doesn&apos;t Fix It</span>
            </h2>
            <div className="doc-v2-rule" aria-hidden="true" />
            <p className="lead text-secondary doc-growth-insight__intro mb-0">
              When delivery starts slowing down, hiring feels like the obvious fix.
              But adding people changes the system in ways that aren&apos;t immediately visible.
            </p>

            <div className="doc-growth-insight__grid" ref={growthInsightGridRef}>
              <div className="doc-growth-insight__col doc-growth-insight__col--left">
                <div className="seq-item doc-growth-insight__section-label" id="s0">
                  <div className="doc-growth-insight__title-row">
                    <img src={Title1Svg} alt="" className="doc-growth-insight__title-glyph" width={64} height={37} decoding="async" />
                    <h3 className="doc-growth-insight__heading-plain mb-0">What increases immediately</h3>
                  </div>
                </div>
                <ul className="doc-growth-insight__points-list mb-0">
                  {hiringImmediate.map((text, i) => (
                    <li key={text} id={`s${i + 1}`} className="seq-item doc-growth-insight__list-point">
                      {text}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="doc-growth-insight__col doc-growth-insight__col--visual">
                <img
                  src={WhyAddingMorePeopleImg}
                  alt="Team members crowding a stressed lead—adding people increases coordination overhead before benefits appear"
                  className="doc-growth-insight__center-photo img-fluid"
                  width={640}
                  height={480}
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="doc-growth-insight__col doc-growth-insight__col--right">
                <div className="seq-item doc-growth-insight__section-label" id="s4">
                  <div className="doc-growth-insight__title-row">
                    <img src={Title2Svg} alt="" className="doc-growth-insight__title-glyph" width={64} height={59} decoding="async" />
                    <h3 className="doc-growth-insight__heading-plain mb-0">What takes time</h3>
                  </div>
                </div>
                <ul className="doc-growth-insight__points-list mb-0">
                  {hiringTakesTime.map((text, i) => (
                    <li key={text} id={`s${i + 5}`} className="seq-item doc-growth-insight__list-point">
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="doc-systems-senior-time doc-v2-senior-time-sec doc-systems-band doc-systems-band--white pt-8 pb-9 py-lg-10">
        <Container fluid="lg" className="doc-v2-wrap">
          <div className="doc-v2-senior-time-header doc-v2-rv mb-4 mb-lg-5">
            {/* <div className="doc-v2-chip doc-v2-chip--center mx-auto">
              <i className="fa fa-black-tie" aria-hidden />
              Senior dynamics
            </div> */}
            <h2 className="h2 section-title mb-1 doc-systems-heading-single-line">
              The Shift in <span className="doc-v2-red">Senior Time</span>
            </h2>
            <div className="doc-v2-rule" aria-hidden="true" />
            <p className="lead text-secondary doc-v2-senior-time-lede mb-0">
              Principals and project directors are the first to feel it.
            </p>
          </div>
          <div className="doc-v2-cards-3 doc-v2-senior-time-cards">
            <div className="doc-v2-card doc-v2-rv doc-v2-rv-d1">
              <div className="doc-v2-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                </svg>
              </div>
              <p className="doc-v2-card-p mb-0">
                More time spent reviewing across multiple projects
              </p>
            </div>
            <div className="doc-v2-card doc-v2-rv doc-v2-rv-d2">
              <div className="doc-v2-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <p className="doc-v2-card-p mb-0">
                Less time for design leadership and strategic work
              </p>
            </div>
            <div className="doc-v2-card doc-v2-rv doc-v2-rv-d3">
              <div className="doc-v2-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <p className="doc-v2-card-p mb-0">
                Constant involvement in coordination decisions
              </p>
            </div>
          </div>
          <div className="doc-v2-section-closer-wrap doc-v2-section-closer-wrap--senior">
            <p className="doc-v2-section-closer mb-0">
              Leadership time shifts from shaping projects to stabilizing delivery.
            </p>
          </div>
        </Container>
      </section>

      <section id="doc-breaking" className="doc-systems-breaking-section doc-v2-breaking-sec doc-systems-band doc-systems-band--subtle py-9 py-lg-10 scroll-margin">
        <Container fluid="lg" className="doc-v2-wrap">
          <div className="doc-v2-breaking-header doc-v2-rv">
            {/* <div className="doc-v2-chip doc-v2-chip--center">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              Failure Points
            </div> */}
            <h2 className="h2 section-title mb-1 doc-systems-heading-single-line">
              Where It Starts <span className="doc-v2-red">Breaking</span>
            </h2>
            <div className="doc-v2-rule" aria-hidden="true" />
          </div>
          <div className="doc-v2-cards-2 mb-2">
            <div className="doc-v2-card doc-v2-rv doc-v2-rv-d1">
              {/* <div className="doc-v2-card-num">01</div> */}
              <div className="doc-v2-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
              </div>
              <div className="doc-v2-card-h">Standards Exist-But Fade</div>
              <div className="doc-v2-card-p">
                Documentation templates and checklists launch with commitment, then quietly lose consistency as{" "}
                <span className="doc-v2-red doc-v2-fw-600">enforcement weakens</span>.
              </div>
            </div>
            <div className="doc-v2-card doc-v2-rv doc-v2-rv-d2">
              {/* <div className="doc-v2-card-num">02</div> */}
              <div className="doc-v2-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="doc-v2-card-h">Tools Add Visibility, Not Clarity</div>
              <div className="doc-v2-card-p">
                BIM coordination platforms and PM systems get implemented, but{" "}
                <span className="doc-v2-red doc-v2-fw-600">adoption stays incomplete</span>.
              </div>
            </div>
            <div className="doc-v2-card doc-v2-rv doc-v2-rv-d3">
              {/* <div className="doc-v2-card-num">03</div> */}
              <div className="doc-v2-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <polyline points="9 11 12 14 22 4" />
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                </svg>
              </div>
              <div className="doc-v2-card-h">More Reviews, Slower Decisions</div>
              <div className="doc-v2-card-p">
                Additional review layers expand <span className="doc-v2-red doc-v2-fw-600">approval cycles</span> without
                improving outcomes proportionally.
              </div>
            </div>
            <div className="doc-v2-card doc-v2-rv doc-v2-rv-d4">
              {/* <div className="doc-v2-card-num">04</div> */}
              <div className="doc-v2-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div className="doc-v2-card-h">Seniors Become the Default Safety Net</div>
              <div className="doc-v2-card-p">
                Partial delegation leaves principals as permanent <span className="doc-v2-red doc-v2-fw-600">fallback points</span>{" "}
                instead of true decision-makers.
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="doc-cta" className="doc-v2-cta-sec doc-v2-cta-sec--fullbleed doc-v2-cta-sec--compact py-5 py-lg-6 doc-systems-final-cta scroll-margin">
        <div className="doc-v2-cta-fullwidth">
          <div className="doc-v2-cta-box doc-v2-rv">
            <div className="doc-v2-cta-decor-a" aria-hidden="true" />
            <div className="doc-v2-cta-decor-b" aria-hidden="true" />
            <div className="doc-v2-cta-icon" aria-hidden="true">
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </div>
            {/* <div className="doc-v2-chip doc-v2-chip--center doc-v2-chip--cta">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Free Download
            </div> */}
            <h2 className="h2 section-title mb-1 doc-v2-cta-h2 doc-systems-heading-single-line">
              Before You Hire Again, See <span className="doc-v2-red">What&apos;s Slowing Your Delivery</span>
            </h2>
            <div className="doc-v2-rule" aria-hidden="true" />
            <p className="lead text-secondary mb-5">
              Understand what&apos;s actually slowing your projects before adding more people or restructuring your team.
            </p>
            <LandingPdfLeadModal
              title="Documentation Systems That Scale"
              downloadUrl={SCALE_SYSTEM_PDF_URL}
              trigger={(
                <a
                  href={SCALE_SYSTEM_PDF_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${DOC_LP_BTN_PRIMARY} doc-v2-cta-btn`}
                >
                  <i className="fa-solid fa-file-arrow-down me-2" aria-hidden />
                  See Where Your Delivery Is Breaking
                  <i className="fa-solid fa-arrow-right-long ms-2" aria-hidden />
                </a>
              )}
            />
          </div>
        </div>
      </section>

      <SiteFooter />
      <LandingPdfLeadModal
        title="Documentation Systems That Scale"
        downloadUrl={SCALE_SYSTEM_PDF_URL}
        trigger={(
          <a
            href={SCALE_SYSTEM_PDF_URL}
            className="pdf-fab doc-systems-pdf-fab"
            title="Get Your Free PDF"
            aria-label="Get Your Free PDF"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-file-pdf" aria-hidden="true" />
          </a>
        )}
      />
      {/* <WebinarHomePopupModal /> */}

      <style>{`
        .doc-systems-page {
          scroll-behavior: smooth;
          background: #ffffff;
          overflow-x: hidden;
          font-family: "Segoe UI", system-ui, -apple-system, sans-serif;
          --ds-ease-out: cubic-bezier(0.22, 1, 0.36, 1);
          --ds-ease-soft: cubic-bezier(0.4, 0, 0.2, 1);
          --ds-duration: 0.45s;
          --ds-duration-slow: 0.65s;
          --ds-divider: #e8e8e8;
          --ds-shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.04);
          --ds-shadow-md: 0 8px 30px rgba(0, 0, 0, 0.08);
          --ds-shadow-lg: 0 20px 50px rgba(0, 0, 0, 0.1);
          --ds-radius: 16px;
          --ds-radius-lg: 24px;
        }
        .doc-systems-page.documentation-wall-page {
          height: auto !important;
          max-height: none !important;
          min-height: 0 !important;
          overflow-y: visible !important;
          overflow: visible !important;
        }
        .doc-systems-page,
        .doc-systems-page * {
          font-family: "Segoe UI", system-ui, -apple-system, sans-serif;
        }
        .doc-systems-page .fab,
        .doc-systems-page .fa-brands {
          font-family: "Font Awesome 6 Brands" !important;
          font-weight: 400 !important;
        }
        .doc-systems-page .fa,
        .doc-systems-page .fas,
        .doc-systems-page .far,
        .doc-systems-page .fal,
        .doc-systems-page .fa-solid,
        .doc-systems-page .fa-regular,
        .doc-systems-page .fa-light {
          font-family: "Font Awesome 6 Free" !important;
        }
        .doc-systems-page.documentation-wall-page .container-lg {
          max-width: 1200px !important;
          margin-left: auto;
          margin-right: auto;
        }
        .doc-systems-page a,
        .doc-systems-page button {
          cursor: pointer !important;
        }
        .doc-systems-page h1,
        .doc-systems-page .h1 {
          line-height: 58px !important;
          letter-spacing: 0.005em !important;
        }
        .doc-systems-page h2,
        .doc-systems-page .h2 {
          line-height: 48px !important;
        }
        .doc-systems-page h3,
        .doc-systems-page .h3 {
          line-height: 34px !important;
        }
        .doc-systems-page h4,
        .doc-systems-page .h4 {
          line-height: 28px !important;
        }
        .doc-systems-page h1,
        .doc-systems-page h2,
        .doc-systems-page h3,
        .doc-systems-page h4,
        .doc-systems-page h5,
        .doc-systems-page h6 {
          font-weight: 600 !important;
          color: #000000 !important;
          text-align: left !important;
        }
        .doc-systems-page p {
          font-size: 18px !important;
          font-weight: 400 !important;
          line-height: 28px !important;
          color: #000000;
        }
        .doc-systems-page .lead {
          font-size: 20px !important;
          font-weight: 400;
          line-height: 30px !important;
        }
        .doc-systems-page .call-icon {
          display: none !important;
        }
        body.${DOC_SYSTEMS_HIDE_CHAT_ICON} .siqico-chat.zsiq-chat-icn,
        body.${DOC_SYSTEMS_HIDE_CHAT_ICON} [class*="siqico-chat"][class*="zsiq-chat-icn"],
        body.${DOC_SYSTEMS_HIDE_CHAT_ICON} .zsiq-float.zsiq-flexM.zsiq_cnt,
        body.${DOC_SYSTEMS_HIDE_CHAT_ICON} [class*="zsiq-float"][class*="zsiq-flexM"][class*="zsiq_cnt"] {
          display: none !important;
          visibility: hidden !important;
          opacity: 0 !important;
          pointer-events: none !important;
        }
        .doc-systems-page .pdf-fab.doc-systems-pdf-fab {
          position: fixed;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          z-index: 9999;
          background: #d70416;
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
        .doc-systems-page .pdf-fab.doc-systems-pdf-fab .fa-file-pdf {
          font-size: 22px;
        }
        .doc-systems-page .pdf-fab.doc-systems-pdf-fab:hover::after {
          content: "Get Your Free PDF";
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
        .doc-systems-heading-icon-wrap {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(215, 4, 22, 0.25);
          background: linear-gradient(165deg, rgba(215, 4, 22, 0.1) 0%, rgba(215, 4, 22, 0.03) 100%);
          color: #d70416;
          box-shadow: 0 8px 24px rgba(215, 4, 22, 0.12);
        }
        .doc-systems-heading-icon-wrap .fa {
          font-size: 1.2rem;
        }
        .scroll-margin {
          scroll-margin-top: 6rem;
        }

        @keyframes doc-systems-reveal-up {
          from {
            opacity: 0;
            transform: translateY(28px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes doc-systems-reveal-scale {
          from {
            opacity: 0;
            transform: scale(0.96) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .doc-systems-reveal {
          animation: doc-systems-reveal-up var(--ds-duration-slow) var(--ds-ease-out) both;
        }
        .doc-systems-reveal--1 {
          animation-delay: 0.08s;
        }
        .doc-systems-reveal--2 {
          animation: doc-systems-reveal-scale calc(var(--ds-duration-slow) + 0.1s) var(--ds-ease-out) both;
          animation-delay: 0.2s;
        }
        @media (prefers-reduced-motion: reduce) {
          .doc-systems-reveal,
          .doc-systems-reveal--2 {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
          .doc-systems-infographic-shell:hover {
            transform: none !important;
          }
          .doc-systems-stage-ribbon:hover .doc-systems-stage-ribbon__arrow {
            transform: none !important;
          }
        }

        .doc-systems-band--white {
          background: #ffffff;
        }
        .doc-systems-band--pattern {
          background: #ffffff;
        }
        .doc-systems-band--gray {
          background: #ffffff;
        }
        .doc-systems-band--subtle {
          
          border-top: 1px solid rgba(0, 0, 0, 0.06);
          border-bottom: 1px solid rgba(0, 0, 0, 0.06);
        }
        .doc-systems-band {
          transition: background-color var(--ds-duration-slow) var(--ds-ease-soft);
        }

        /* —— Premium SaaS layout —— */
        .doc-systems-hero-ref {
          position: relative;
          overflow: hidden;
          background-image: url("/image/doc-that-scale-header.png") !important;
          background-repeat: no-repeat;
          background-position: center center !important;
          background-size: cover !important;
          padding-bottom: 0.75rem;
        }
        .doc-systems-hero-ref::after {
          content: none;
        }
        .doc-systems-hero-ref__blueprint {
          display: none;
        }
        .doc-systems-hero-ref__glow {
          display: none;
        }
        .doc-systems-hero-ref__glow--image {
          width: min(540px, 58vw);
          height: min(340px, 44vw);
          right: 5%;
          top: 24%;
          background: radial-gradient(circle at 50% 50%, rgba(215, 4, 22, 0.46), rgba(215, 4, 22, 0));
        }
        .doc-systems-hero-ref__glow--cta {
          width: min(360px, 48vw);
          height: min(220px, 30vw);
          left: 14%;
          bottom: 5%;
          background: radial-gradient(circle at 50% 50%, rgba(215, 4, 22, 0.32), rgba(215, 4, 22, 0));
        }
        .doc-systems-hero-ref__container {
          z-index: 2;
          max-width: 1200px !important;
          margin-left: auto;
          margin-right: auto;
          padding-top: clamp(0.6rem, 1.8vw, 1.2rem);
          padding-bottom: clamp(0.5rem, 1.4vw, 0.95rem);
        }
        .doc-systems-hero-premium__row.doc-systems-hero-ref__row {
          min-height: clamp(300px, 46vh, 420px);
        }
        .doc-systems-hero-ref__copy {
          max-width: 40rem;
          
          padding: clamp(8px, 1.3vw, 14px) clamp(10px, 1.6vw, 18px);
          border-radius: 0;
        }
        .doc-systems-hero-mobile-image {
          display: none;
          width: min(100%, 620px);
          margin: 14px auto 8px;
          border-radius: 14px;
          box-shadow: 0 12px 30px rgba(15, 23, 42, 0.16);
          object-fit: cover;
        }
        @media (max-width: 850px) {
          .doc-systems-hero-ref {
            background-image: none !important;
            background-color: #ffffff !important;
          }
          .doc-systems-hero-ref__copy {
            text-align: center !important;
            margin-left: auto !important;
            margin-right: auto !important;
          }
          .doc-systems-hero-ref__copy h1.h1,
          .doc-systems-hero-ref__body {
            text-align: center !important;
            margin-left: auto !important;
            margin-right: auto !important;
          }
          .doc-systems-hero-mobile-image {
            display: block;
            margin-left: auto;
            margin-right: auto;
          }
          .doc-systems-page .doc-v2-hero-ctas {
            justify-content: center !important;
            align-items: center !important;
          }
          .doc-systems-page .doc-v2-hero-ctas a {
            margin-left: auto !important;
            margin-right: auto !important;
          }
        }
        .doc-systems-hero-ref__copy h1.h1 {
          max-width: 100%;
          white-space: normal;
          overflow-wrap: break-word;
        }
        .doc-systems-hero-ref__eyebrow {
          margin: 0 0 0.9rem 0;
          font-family: "Segoe UI", system-ui, -apple-system, sans-serif;
          font-size: 0.78rem !important;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #111827 !important;
          opacity: 0.75;
          line-height: 1.4 !important;
          font-weight: 600 !important;
        }
        .doc-systems-hero-ref__body {
          max-width: 40rem;
        }
        .doc-systems-hero-ref__actions .btn {
          font-family: "Segoe UI", system-ui, -apple-system, sans-serif;
        }
        .doc-systems-hero-ref__btn-secondary {
          background: #ffffff !important;
          color: #111827 !important;
          border: 1.5px solid rgba(0, 0, 0, 0.14) !important;
          border-radius: 14px !important;
          min-height: 50px;
          padding: 0.78rem 1.22rem !important;
          font-size: 0.97rem !important;
          font-weight: 600 !important;
          display: inline-flex !important;
          align-items: center !important;
          gap: 0.5rem;
          box-shadow: 0 6px 18px rgba(15, 23, 42, 0.08);
        }
        .doc-systems-hero-ref__btn-secondary-icon {
          width: 28px;
          height: 28px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(215, 4, 22, 0.25);
          background: rgba(215, 4, 22, 0.08);
          color: #d70416;
          font-size: 0.85rem;
          flex-shrink: 0;
        }
        .doc-systems-hero-ref__btn-primary {
          background: linear-gradient(180deg, #e21024 0%, #b90314 100%) !important;
          color: #ffffff !important;
          border: 1px solid #b90314 !important;
          border-radius: 14px !important;
          min-height: 56px;
          padding: 0.92rem 1.8rem !important;
          font-size: 1.07rem !important;
          font-weight: 700 !important;
          box-shadow: 0 14px 32px rgba(215, 4, 22, 0.32);
        }
        .doc-systems-hero-ref__trust {
          gap: 0.72rem;
        }
        .doc-systems-hero-ref__trust-item {
          border-radius: 12px !important;
          padding: 0.58rem 0.78rem !important;
          background: #ffffff !important;
          border: 1px solid rgba(0, 0, 0, 0.1) !important;
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06) !important;
          gap: 0.5rem;
        }
        .doc-systems-trust-badge__icon {
          width: 18px;
          height: 18px;
          border-radius: 5px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #d70416;
          font-size: 0.78rem;
          flex-shrink: 0;
        }
        .doc-systems-trust-badge__text {
          font-family: "Segoe UI", system-ui, -apple-system, sans-serif;
          font-size: 0.9rem;
          font-weight: 600;
          color: #111827;
          line-height: 1.2;
        }

        .doc-systems-hero-ref__visual {
          position: relative;
          width: 100%;
          max-width: 100%;
          margin-left: auto;
          margin-right: auto;
        }
        @media (min-width: 992px) {
          .doc-systems-hero-ref__visual {
            margin-right: calc(50% - 50vw);
            margin-left: auto;
            width: min(50vw, 760px);
            max-width: none;
          }
        }
       
        .doc-systems-hero-ref__figure {
          z-index: 2;
        }
        .doc-systems-hero-ref__frame {
          border-radius: 26px !important;
       
          background: #ffffff;
          box-shadow: 0 24px 56px rgba(15, 23, 42, 0.22), 0 0 0 1px rgba(255, 255, 255, 0.8) inset !important;
        }
        .doc-systems-hero-ref__img {
          border-radius: 20px;
          width: 100%;
          max-width: 100%;
          height: clamp(300px, 40vw, 430px) !important;
          object-fit: cover;
          object-position: 57% 34% !important;
        }
        @media (min-width: 992px) {
          .doc-systems-hero-ref__frame {
            border-top-right-radius: 0 !important;
            border-bottom-right-radius: 0 !important;
          }
          .doc-systems-hero-ref__img {
            border-top-right-radius: 0 !important;
            border-bottom-right-radius: 0 !important;
          }
        }
        @media (min-width: 992px) {
          .doc-systems-hero-ref__img {
            // height: min(430px, 56vh) !important;
          }
        }
        .doc-systems-hero-ref__floats {
          position: absolute;
          left: 50%;
          bottom: -20px;
          transform: translateX(-4%);
          display: flex;
          flex-direction: column;
          gap: 0.7rem;
          width: min(290px, 52vw);
        }
        .doc-systems-hero-float-card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.85);
          border-radius: 16px;
          box-shadow: 0 12px 28px rgba(15, 23, 42, 0.14);
          padding: 0.75rem 1rem;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          line-height: 1.2;
        }
        .doc-systems-hero-float-card__stat {
          font-family: "Segoe UI", system-ui, -apple-system, sans-serif;
          font-size: 2rem;
          font-weight: 700;
          color: #d70416;
          letter-spacing: -0.02em;
        }
        .doc-systems-hero-float-card__label {
          font-family: "Segoe UI", system-ui, -apple-system, sans-serif;
          font-size: 0.95rem;
          color: #111827;
          opacity: 0.92;
          font-weight: 600;
        }
        .doc-systems-hero-float-card--inline {
          flex-direction: row;
          align-items: center;
          gap: 0.68rem;
          padding: 0.68rem 0.95rem;
        }
        .doc-systems-hero-float-card__ico {
          width: 30px;
          height: 30px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(0, 0, 0, 0.1);
          color: #111827;
          background: #ffffff;
          font-size: 0.9rem;
          flex-shrink: 0;
        }
        .doc-systems-hero-float-card__text {
          font-family: "Segoe UI", system-ui, -apple-system, sans-serif;
          font-size: 0.96rem;
          font-weight: 600;
          color: #111827;
          line-height: 1.35;
        }
        .doc-systems-hero-ref__caption {
          margin-top: 0.85rem;
          font-size: 0.84rem;
          color: #111827;
          opacity: 0.7;
          text-align: center;
        }
      
        @media (max-width: 850px) {
          .doc-systems-hero-ref {
            background-image: none !important;
            background-color: #ffffff !important;
          }
          .doc-systems-hero-ref__copy {
            text-align: center;
          }
          .doc-systems-hero-mobile-image {
            display: block;
          }
          .doc-systems-page .doc-v2-hero-ctas {
            justify-content: center;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .doc-systems-hero-visual:hover .doc-systems-hero-visual__frame,
          .doc-systems-hero-visual:hover .doc-systems-hero-visual__img {
            transform: none !important;
          }
        }

        .doc-systems-section-kicker {
          font-size: 1.125rem;
          line-height: 1.65;
          color: #000000;
          max-width: 40rem;
        }
        .doc-systems-section-closer {
          font-size: 1.0625rem;
          line-height: 1.7;
          color: #000000;
          max-width: 44rem;
          padding-top: 0.5rem;
          border-top: 1px solid rgba(0, 0, 0, 0.08);
        }

        .doc-systems-problem-card {
          height: 100%;
          padding: 1.75rem 1.5rem;
          background: #ffffff;
          border-radius: var(--ds-radius-lg);
          border: 1px solid rgba(0, 0, 0, 0.07);
          box-shadow: var(--ds-shadow-md);
          transition:
            transform var(--ds-duration) var(--ds-ease-out),
            box-shadow var(--ds-duration) var(--ds-ease-soft),
            border-color var(--ds-duration) var(--ds-ease-soft);
        }
        .doc-systems-problem-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--ds-shadow-lg);
          border-color: rgba(215, 4, 22, 0.2);
        }
        .doc-systems-problem-card__icon {
          width: 56px;
          height: 56px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(145deg, rgba(215, 4, 22, 0.12), rgba(215, 4, 22, 0.04));
          color: #d70416;
          font-size: 1.35rem;
          margin-bottom: 1.25rem;
          border: 1px solid rgba(215, 4, 22, 0.18);
        }
        .doc-systems-problem-card__title {
          font-weight: 600 !important;
          color: #000000 !important;
        }
        .doc-systems-problem-card__text {
          font-size: 15px !important;
          line-height: 26px !important;
          color: #000000 !important;
          opacity: 0.88;
        }

        .doc-systems-growth-copy p {
          color: #000000;
        }
        .doc-systems-growth-tagline {
          color: #000000;
          font-size: 1.05rem;
          padding: 1rem 1.25rem;
          background: #ffffff;
          border-radius: 14px;
          border-left: 4px solid #d70416;
          box-shadow: var(--ds-shadow-sm);
        }

        .doc-systems-process {
          display: flex;
          flex-direction: column;
          gap: 0;
          background: #ffffff;
          border-radius: var(--ds-radius-lg);
          border: 1px solid rgba(0, 0, 0, 0.08);
          box-shadow: var(--ds-shadow-md);
          padding: 1.5rem 1.25rem;
        }
        @media (min-width: 992px) {
          .doc-systems-process {
            flex-direction: row;
            align-items: stretch;
            padding: 2rem 1.5rem;
            gap: 0;
          }
        }
        .doc-systems-process__step {
          display: flex;
          flex-direction: column;
          flex: 1;
          align-items: center;
          text-align: center;
        }
        @media (min-width: 992px) {
          .doc-systems-process__step {
            flex-direction: row;
            align-items: center;
            text-align: left;
          }
        }
        .doc-systems-process__node {
          flex: 1;
          padding: 1rem 0.75rem;
          position: relative;
          width: 100%;
        }
        .doc-systems-process__num {
          position: absolute;
          top: 0.5rem;
          right: 0.75rem;
          font-size: 0.65rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: #d70416;
          opacity: 0.5;
        }
        @media (min-width: 992px) {
          .doc-systems-process__num {
            right: auto;
            left: 0.75rem;
          }
        }
        .doc-systems-process__icon {
          width: 52px;
          height: 52px;
          margin: 0 auto 0.75rem auto;
          border-radius: 14px;
          background: #fafafa;
          border: 1px solid rgba(0, 0, 0, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #d70416;
          font-size: 1.25rem;
        }
        @media (min-width: 992px) {
          .doc-systems-process__icon {
            margin: 0 0 0.75rem 0;
          }
        }
        .doc-systems-process__node--accent .doc-systems-process__icon {
          background: linear-gradient(145deg, rgba(215, 4, 22, 0.12), rgba(215, 4, 22, 0.04));
          border-color: rgba(215, 4, 22, 0.22);
        }
        .doc-systems-process__title {
          font-weight: 600 !important;
          color: #000000 !important;
        }
        .doc-systems-process__desc {
          font-size: 14px !important;
          line-height: 22px !important;
          color: #000000 !important;
          opacity: 0.8;
        }
        .doc-systems-process__arrow {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 0.35rem 0;
          color: #d70416;
        }
        @media (min-width: 992px) {
          .doc-systems-process__arrow {
            flex-direction: row;
            padding: 0 0.5rem;
            min-width: 2.5rem;
          }
        }
        .doc-systems-process__arrow-line {
          display: none;
        }
        .doc-systems-process__arrow .fa {
          font-size: 1.25rem;
          opacity: 0.85;
        }
        @media (max-width: 991.98px) {
          .doc-systems-process__arrow .fa-long-arrow-right {
            transform: rotate(90deg);
          }
        }
        .doc-systems-process__step--last .doc-systems-process__arrow {
          display: none;
        }

        .doc-systems-gap-card {
          position: relative;
          padding: 2rem 1.75rem;
          border-radius: var(--ds-radius-lg);
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.08);
          box-shadow: var(--ds-shadow-md);
          overflow: hidden;
          transition:
            transform var(--ds-duration) var(--ds-ease-out),
            box-shadow var(--ds-duration) var(--ds-ease-soft);
        }
        .doc-systems-gap-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--ds-shadow-lg);
        }
        .doc-systems-gap-card--early {
          border-top: 4px solid rgba(0, 0, 0, 0.12);
        }
        .doc-systems-gap-card--growth {
          border-top: 4px solid #d70416;
        }
        .doc-systems-gap-card__illus {
          width: 72px;
          height: 72px;
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.75rem;
          margin-bottom: 1.25rem;
        }
        .doc-systems-gap-card__illus--calm {
          background: linear-gradient(145deg, #f5f5f5, #ebebeb);
          color: #000000;
          border: 1px solid rgba(0, 0, 0, 0.08);
        }
        .doc-systems-gap-card__illus--intense {
          background: linear-gradient(145deg, rgba(215, 4, 22, 0.15), rgba(215, 4, 22, 0.05));
          color: #d70416;
          border: 1px solid rgba(215, 4, 22, 0.2);
        }
        .doc-systems-gap-card__label {
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #d70416;
          margin-bottom: 0.35rem;
        }
        .doc-systems-gap-card--early .doc-systems-gap-card__label {
          color: #000000;
          opacity: 0.45;
        }
        .doc-systems-gap-card__headline {
          font-weight: 600 !important;
          color: #000000 !important;
        }
        .doc-systems-gap-card__list li {
          position: relative;
          padding-left: 1.1rem;
          margin-bottom: 0.5rem;
          font-size: 15px;
          line-height: 26px;
          color: #000000;
        }
        .doc-systems-gap-card__list li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0.55rem;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #d70416;
        }
        .doc-systems-gap-card--early .doc-systems-gap-card__list li::before {
          background: #000000;
          opacity: 0.35;
        }

        .doc-systems-gap-timeline {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.25rem;
          width: 100%;
          max-width: 48px;
        }
        .doc-systems-gap-timeline__dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.15);
        }
        .doc-systems-gap-timeline__dot--end {
          background: #d70416;
          box-shadow: 0 0 0 4px rgba(215, 4, 22, 0.2);
        }
        .doc-systems-gap-timeline__track {
          width: 2px;
          flex: 1;
          min-height: 24px;
          background: linear-gradient(180deg, rgba(0, 0, 0, 0.12), rgba(215, 4, 22, 0.35));
          border-radius: 2px;
        }
        .doc-systems-gap-timeline__chev {
          color: #d70416;
          font-size: 1.25rem;
          line-height: 1;
        }

        .doc-systems-feature-card {
          padding: 1.75rem 1.5rem;
          background: #ffffff;
          border-radius: var(--ds-radius-lg);
          border: 1px solid rgba(0, 0, 0, 0.08);
          box-shadow: var(--ds-shadow-md);
          transition:
            transform var(--ds-duration) var(--ds-ease-out),
            box-shadow var(--ds-duration) var(--ds-ease-soft),
            border-color var(--ds-duration) var(--ds-ease-soft);
        }
        .doc-systems-feature-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--ds-shadow-lg);
          border-color: rgba(215, 4, 22, 0.22);
        }
        .doc-systems-feature-card__icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(215, 4, 22, 0.08);
          color: #d70416;
          font-size: 1.15rem;
          margin-bottom: 1rem;
          border: 1px solid rgba(215, 4, 22, 0.15);
        }
        .doc-systems-feature-card__title {
          font-weight: 600 !important;
          color: #000000 !important;
        }
        .doc-systems-feature-card__text {
          font-size: 14px !important;
          line-height: 24px !important;
          color: #000000 !important;
          opacity: 0.85;
        }

        /* Hiring paradox — sequential points layout */
        .doc-growth-insight-section {
          --doc-gi-red: #d70416;
          --doc-gi-dark: #1a1a1a;
          --doc-gi-muted: #555555;
          --doc-gi-line: #e8e8e8;
          --doc-gi-card-border: #e8e8e8;
          --doc-gi-tag-bg: #fef7f7;
          --doc-gi-tag-border: #f2c4c4;
          background: #ffffff !important;
        }
        .doc-growth-insight__container {
          max-width: 1140px !important;
        }
        .doc-growth-insight-wrap {
          padding: 8px 0 0;
       
        }
        .doc-growth-insight__title {
          line-height: 1.22;
          color: var(--doc-gi-dark);
        }
        .doc-growth-insight__title-em {
          color: var(--doc-gi-red);
          font-style: normal;
          font-weight: inherit;
        }
        .doc-growth-insight__intro {
          max-width: 760px;
          margin-bottom: 40px;
        }
        .doc-growth-insight__intro strong {
          color: var(--doc-gi-dark);
          font-weight: 500;
        }
        .doc-growth-insight__grid {
          margin-top: clamp(28px, 4.5vw, 52px);
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(280px, min(44vw, 440px)) minmax(0, 1fr);
          gap: clamp(16px, 2.5vw, 32px);
          align-items: center;
          perspective: 900px;
          transform-style: preserve-3d;
          padding: clamp(1.25rem, 3.5vw, 2.25rem);
       
          box-shadow:
            0 1px 0 rgba(255, 255, 255, 0.9) inset,
            0 8px 32px rgba(17, 24, 39, 0.06);
        }
        .doc-growth-insight__col {
          min-width: 0;
        }
        .doc-growth-insight__col--left,
        .doc-growth-insight__col--right {
          padding-top: 0.15rem;
          padding-bottom: 0.15rem;
        }
        .doc-growth-insight__col--visual {
          align-self: center;
        }
        .doc-growth-insight__center-photo {
          width: 100%;
          max-width: none;
          height: auto;
          display: block;
          border-radius: 14px;
          border: 1px solid rgba(0, 0, 0, 0.06);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
        }
        /* Icon + heading: grid keeps glyph beside text; centers with multi-line titles */
        .doc-growth-insight__title-row {
          display: grid;
          grid-template-columns: auto minmax(0, 1fr);
          column-gap: clamp(10px, 1.5vw, 14px);
          row-gap: 0;
          align-items: center;
          min-width: 0;
        }
        .doc-growth-insight__title-glyph {
          display: block;
          object-fit: contain;
          width: clamp(40px, 5.25vw, 54px);
          height: auto;
          align-self: center;
        }
        .doc-growth-insight__heading-plain,
        .doc-systems-page .doc-growth-insight-section h3.doc-growth-insight__heading-plain {
          color: #D70416 !important;
          font-size: clamp(1.2rem, 2.35vw, 1.45rem);
          font-weight: 700;
          line-height: 1.28;
          letter-spacing: -0.01em;
          text-transform: none;
          background: none !important;
          border: none !important;
          box-shadow: none !important;
          padding: 0 !important;
          border-radius: 0 !important;
        }
        .doc-growth-insight__points-list {
          list-style: disc;
          padding-left: 1.2rem;
          margin: 0.65rem 0 0 0;
        }
        .doc-growth-insight__points-list li::marker {
          color: var(--doc-gi-red);
        }
        .doc-growth-insight__list-point {
          font-size: clamp(0.875rem, 1.2vw, 1.05rem) !important;
          line-height: 1.52 !important;
          color: #3d4349 !important;
          margin-bottom: 0.5rem;
          padding-left: 0.15rem;
        }
        .doc-growth-insight__list-point:last-child {
          margin-bottom: 0;
        }
        .seq-item {
          opacity: 0;
          --gi-seq: 0.28s;
          --gi-ease: cubic-bezier(0.22, 1, 0.45, 1);
          will-change: transform, opacity;
          transition:
            opacity var(--gi-seq) var(--gi-ease),
            transform var(--gi-seq) var(--gi-ease),
            box-shadow var(--gi-seq) ease;
        }
        .doc-growth-insight__point-row.seq-item,
        .doc-growth-insight__list-point.seq-item {
          transform: translate3d(0, 16px, -22px);
        }
        .doc-growth-insight__section-label.seq-item {
          transform: translate3d(0, 12px, -16px) scale(0.985);
        }
        .doc-growth-insight__point-row.seq-item.show,
        .doc-growth-insight__list-point.seq-item.show {
          opacity: 1;
          transform: translate3d(0, -3px, 14px);
        }
        .doc-growth-insight__section-label.seq-item.show {
          opacity: 1;
          transform: translate3d(0, -3px, 16px) scale(1);
        }
        .doc-growth-insight__section-label {
          margin-bottom: 18px;
          min-width: 0;
        }
        .doc-growth-insight__title-row .doc-growth-insight__heading-plain,
        .doc-systems-page .doc-growth-insight-section .doc-growth-insight__title-row h3.doc-growth-insight__heading-plain {
          white-space: normal;
          overflow-wrap: break-word;
          word-break: normal;
          font-size: clamp(0.98rem, 1.65vw, 1.22rem) !important;
          line-height: 1.22 !important;
          margin: 0 !important;
        }
        .doc-growth-insight__pill {
          padding: 11px 22px;
          border-radius: 999px;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          white-space: nowrap;
          line-height: 1.25;
        }
        h3.doc-growth-insight__pill {
          margin: 0;
        }
        .doc-growth-insight__pill--red {
          background: var(--doc-gi-red);
          color: #ffffff !important;
          box-shadow: none;
        }
        /* Beat .doc-systems-page h3 { color: #000 !important } */
        .doc-systems-page .doc-growth-insight__pill--red,
        .doc-growth-insight-section h3.doc-growth-insight__pill--red {
          color: #ffffff !important;
        }
        .doc-growth-insight__pill--dark {
          background: var(--doc-gi-dark);
          color: #fff;
        }
        .doc-growth-insight__line {
          flex: 1;
          height: 1px;
          background: var(--doc-gi-red);
          border-radius: 1px;
        }
        .doc-growth-insight__point-row {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 10px 0 10px 10px;
          border: none;
          background: transparent;
          margin-bottom: 10px;
          box-shadow: none;
        }
       
        .doc-growth-insight__point-row--dark {
          border-left: 3px solid var(--doc-gi-dark);
        }
        .doc-growth-insight__point-icon {
          flex-shrink: 0;
          width: 24px;
          height: 24px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-top: 0;
          color: var(--doc-gi-red);
        }
        .doc-growth-insight__point-icon svg {
          display: block;
        }
        .doc-growth-insight__point-icon--time svg {
          opacity: 0.95;
        }
        .doc-growth-insight__point-text {
          font-size: 20px !important;
          line-height: 1.55 !important;
          color: #404040 !important;
        }
        @media (max-width: 991px) {
          .doc-growth-insight__grid {
            grid-template-columns: 1fr;
            gap: 24px;
            padding: clamp(1rem, 3vw, 1.5rem);
          }
          .doc-growth-insight__col--visual {
            max-width: min(100%, 500px);
            margin-inline: auto;
            order: 2;
          }
          .doc-growth-insight__col--left {
            order: 1;
          }
          .doc-growth-insight__col--right {
            order: 3;
          }
          .doc-growth-insight__intro {
            margin-bottom: 28px;
          }
        }
        @media (max-width: 600px) {
          .doc-growth-insight-wrap {
            padding: 0;
          }
          .doc-growth-insight__title {
            font-size: 26px;
          }
          .doc-growth-insight__point-text {
            font-size: 20px !important;
          }
          .doc-growth-insight__list-point {
            font-size: 0.9rem !important;
          }
          .doc-growth-insight__heading-plain,
          .doc-systems-page .doc-growth-insight-section h3.doc-growth-insight__heading-plain {
            font-size: 1.08rem !important;
            color: #D70416 !important;
          }
          .doc-growth-insight__title-glyph {
            width: clamp(38px, 11vw, 52px);
          }
        }

        .doc-systems-senior-compare {
          padding: 2rem 1.75rem;
          border-radius: var(--ds-radius-lg);
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.08);
          box-shadow: var(--ds-shadow-md);
        }
        .doc-systems-senior-compare--after {
          border-top: 4px solid #d70416;
        }
        .doc-systems-senior-compare--before {
          border-top: 4px solid rgba(0, 0, 0, 0.12);
        }
        .doc-systems-senior-compare__label {
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #d70416;
          margin-bottom: 0.25rem;
        }
        .doc-systems-senior-compare--before .doc-systems-senior-compare__label {
          color: #000000;
          opacity: 0.45;
        }
        .doc-systems-senior-compare__title {
          font-weight: 600 !important;
          color: #000000 !important;
        }
        .doc-systems-senior-bar__row {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          font-size: 13px;
          font-weight: 600;
          color: #000000;
          margin-bottom: 0.35rem;
        }
        .doc-systems-senior-bar__pct {
          font-variant-numeric: tabular-nums;
          color: #d70416;
          font-weight: 700;
        }
        .doc-systems-senior-compare--before .doc-systems-senior-bar__pct {
          color: #000000;
          opacity: 0.55;
        }
        .doc-systems-senior-bar__track {
          height: 10px;
          border-radius: 999px;
          background: rgba(0, 0, 0, 0.06);
          overflow: hidden;
        }
        .doc-systems-senior-bar__fill {
          display: block;
          height: 100%;
          border-radius: 999px;
          transition: width 0.8s var(--ds-ease-out);
        }
        .doc-systems-senior-bar__fill--muted {
          background: linear-gradient(90deg, #c4c4c4, #e0e0e0);
        }
        .doc-systems-senior-bar__fill--soft {
          background: linear-gradient(90deg, #94a3b8, #cbd5e1);
        }
        .doc-systems-senior-bar__fill--accent {
          background: linear-gradient(90deg, #d70416, #ff5c6c);
        }
        .doc-systems-senior-bar__fill--stress {
          background: linear-gradient(90deg, #b10314, #d70416);
        }
        .doc-systems-senior-compare__note {
          font-size: 13px !important;
          line-height: 20px !important;
          color: #000000 !important;
          opacity: 0.6;
        }
        .doc-systems-senior-bullets li {
          position: relative;
          padding-left: 1.1rem;
          margin-bottom: 0.5rem;
          font-size: 14px;
          line-height: 22px;
          color: #000000;
        }
        .doc-systems-senior-bullets li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0.5rem;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #d70416;
        }

        .doc-systems-breaking__grid--saas {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          max-width: 1120px;
          margin-left: auto;
          margin-right: auto;
          border: none !important;
          background: transparent !important;
        }
        @media (min-width: 768px) {
          .doc-systems-breaking__grid--saas {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.75rem;
          }
        }
        .doc-systems-breaking__grid--saas .doc-systems-breaking-card {
          border: none !important;
          border-radius: var(--ds-radius-lg) !important;
          background: #ffffff !important;
          box-shadow: var(--ds-shadow-md) !important;
          padding: 2rem 1.75rem !important;
          text-align: left !important;
          transition:
            transform var(--ds-duration) var(--ds-ease-out),
            box-shadow var(--ds-duration) var(--ds-ease-soft),
            border-color var(--ds-duration) var(--ds-ease-soft);
          border: 1px solid rgba(0, 0, 0, 0.07) !important;
        }
        .doc-systems-breaking__grid--saas .doc-systems-breaking-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--ds-shadow-lg) !important;
          border-color: rgba(215, 4, 22, 0.2) !important;
        }
        .doc-systems-breaking__grid--saas .doc-systems-breaking-card__illu,
        .doc-systems-breaking__grid--saas .doc-systems-breaking__illu {
          margin: 0 0 1.25rem 0 !important;
          width: 64px !important;
          height: 64px !important;
          border-radius: 16px !important;
          font-size: 1.65rem !important;
        }
        .doc-systems-breaking__grid--saas .doc-systems-breaking__heading {
          text-align: left !important;
          font-size: 1.125rem !important;
          margin-bottom: 0.75rem !important;
        }
        .doc-systems-breaking__grid--saas .doc-systems-breaking__body {
          max-width: none !important;
          margin: 0 !important;
          text-align: left !important;
        }

        .doc-systems-final-premium {
          background: #fafafa !important;
        }
        .doc-systems-final-premium__texture {
          position: absolute;
          inset: 0;
          opacity: 0.45;
          pointer-events: none;
          background-image:
            linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px);
          background-size: 48px 48px;
          mask-image: radial-gradient(ellipse 80% 70% at 50% 40%, #000 20%, transparent 75%);
        }
        .doc-systems-final-premium__container {
          z-index: 1;
        }
        .doc-systems-final-premium__panel {
          position: relative;
          max-width: 720px;
          padding: clamp(2.5rem, 6vw, 3.5rem) clamp(1.75rem, 5vw, 3rem);
          background: #ffffff;
          border-radius: 28px;
          box-shadow: var(--ds-shadow-lg);
        }
        .doc-systems-final-premium__panel::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 28px;
          padding: 2px;
          background: linear-gradient(135deg, rgba(215, 4, 22, 0.55), rgba(215, 4, 22, 0.08), rgba(215, 4, 22, 0.35));
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }
        .doc-systems-final-premium__pdf {
          width: 76px;
          height: 76px;
          border-radius: 20px;
          background: linear-gradient(145deg, rgba(215, 4, 22, 0.14), rgba(215, 4, 22, 0.05));
          border: 1px solid rgba(215, 4, 22, 0.22);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #d70416;
          font-size: 2rem;
        }
        .doc-systems-final-premium__headline {
          font-weight: 700 !important;
          font-size: clamp(1.65rem, 4vw, 2.35rem) !important;
          line-height: 1.2 !important;
          color: #000000 !important;
          letter-spacing: -0.02em !important;
        }
        .doc-systems-final-premium__lead {
          max-width: 34rem;
          color: #000000 !important;
          opacity: 0.88;
        }
        .doc-systems-final-premium__btn {
          padding: 1rem 2.25rem !important;
          font-size: 1.0625rem !important;
          border-radius: 14px !important;
          min-height: 56px;
          box-shadow: 0 12px 36px rgba(215, 4, 22, 0.35) !important;
        }
        @media (min-width: 576px) {
          .doc-systems-final-premium__btn {
            padding: 1.05rem 2.75rem !important;
            font-size: 1.125rem !important;
            min-height: 60px;
          }
        }

        .doc-systems-pattern-narrative__body {
          max-width: 44rem;
          margin-top: 0.5rem;
        }
        .doc-systems-pattern-narrative__body > p {
          color: #000000;
        }
        .doc-systems-content-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .doc-systems-content-list li {
          position: relative;
          padding-left: 1.35rem;
          margin-bottom: 0.75rem;
          font-size: 16px;
          line-height: 28px;
          color: #000000;
        }
        .doc-systems-content-list li:last-child {
          margin-bottom: 0;
        }
        .doc-systems-content-list li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0.65rem;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #d70416;
        }
        .doc-systems-content-list--compact li {
          margin-bottom: 0.5rem;
        }
        .doc-systems-content-list--boxed {
          max-width: 40rem;
          padding: 1.75rem 1.5rem 1.75rem 1.25rem;
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-radius: 16px;
          border-left: 4px solid #d70416;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.06);
        }
        @media (min-width: 768px) {
          .doc-systems-content-list--boxed {
            padding: 2rem 2rem 2rem 1.75rem;
          }
        }

        .doc-systems-stage-compare__eyebrow {
          font-size: 0.95rem;
          max-width: 36rem;
        }
        .doc-systems-stage-compare__card {
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: 16px;
          padding: 1.5rem 1.35rem 1.5rem;
          box-shadow: 0 6px 28px rgba(0, 0, 0, 0.06);
          transition:
            box-shadow var(--ds-duration) var(--ds-ease-soft),
            border-color var(--ds-duration) var(--ds-ease-soft);
        }
        .doc-systems-stage-compare__card:hover {
          border-color: rgba(215, 4, 22, 0.35);
          box-shadow: 0 14px 40px rgba(215, 4, 22, 0.08);
        }
        .doc-systems-stage-compare__card--growth {
          border-top: 3px solid #d70416;
        }
        .doc-systems-stage-compare__title {
          color: #000000;
          font-weight: 600 !important;
        }

        .doc-systems-guide-see-panel {
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-radius: 16px;
          padding: 1.75rem 1.5rem;
          box-shadow: 0 8px 36px rgba(0, 0, 0, 0.06);
        }
        @media (min-width: 768px) {
          .doc-systems-guide-see-panel {
            padding: 2rem 2.25rem;
          }
          .doc-systems-chevron-list--two-col {
            column-count: 2;
            column-gap: 2.5rem;
          }
        }
        .doc-systems-chevron-list--two-col li {
          break-inside: avoid;
        }

        /* Section headers — same system as documentation-wall LP (section-title + #D70416 underline) */
        .doc-systems-section-editorial {
          text-align: left;
          margin-bottom: 0;
          max-width: 40rem;
        }
        .doc-systems-section-editorial .section-title {
          margin-top: 0;
        }
        .doc-systems-section-editorial .accent-underline {
          margin-top: 0;
        }
        .doc-systems-section-editorial__lead {
          margin: 0;
          max-width: 38rem;
        }
        .doc-systems-section-editorial--center-lg .doc-systems-section-editorial__lead {
          margin-left: 0;
          margin-right: 0;
        }
        .doc-systems-section-editorial--center-lg {
          text-align: left;
      
        }
        .doc-systems-section-editorial--center-lg .accent-underline {
          margin-left: 0;
          margin-right: 0;
        }

        /* Pattern — four columns, red icons, red top line L→R on hover/focus */
        .doc-systems-pattern-editorial__grid {
          display: grid;
          grid-template-columns: 1fr;
          border-top: 1px solid var(--ds-divider);
          margin-top: 0.25rem;
        }
        .doc-systems-pattern-editorial__cell {
          position: relative;
          text-align: left;
          padding: 1.75rem 0 1.75rem 0;
          border-bottom: 1px solid var(--ds-divider);
          transition: background-color var(--ds-duration) var(--ds-ease-soft);
        }
        .doc-systems-pattern-editorial__cell::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: #d70416;
          border-radius: 0 0 1px 1px;
          transform: scaleX(0);
          transform-origin: left center;
          transition: transform 0.5s var(--ds-ease-out);
          pointer-events: none;
          z-index: 1;
        }
        .doc-systems-pattern-editorial__cell:hover::before {
          transform: scaleX(1);
        }
        .doc-systems-pattern-editorial__cell:last-child {
          border-bottom: none;
        }
        @media (min-width: 992px) {
          .doc-systems-pattern-editorial__grid {
            grid-template-columns: repeat(4, minmax(0, 1fr));
            column-gap: 0;
          }
          .doc-systems-pattern-editorial__cell {
            padding: 2.35rem 1.5rem 2.5rem 1.5rem;
            border-bottom: none;
            border-right: 1px solid var(--ds-divider);
          }
          .doc-systems-pattern-editorial__cell:first-child {
            padding-left: 0;
          }
          .doc-systems-pattern-editorial__cell:last-child {
            border-right: none;
            padding-right: 0;
          }
        }
        .doc-systems-pattern-editorial__icon {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          border: 1px solid rgba(215, 4, 22, 0.28);
          background: rgba(215, 4, 22, 0.06);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #d70416;
          font-size: 1.15rem;
          flex-shrink: 0;
          transition:
            border-color var(--ds-duration) var(--ds-ease-soft),
            background-color var(--ds-duration) var(--ds-ease-soft),
            transform var(--ds-duration) var(--ds-ease-out);
        }
        .doc-systems-pattern-editorial__cell:hover .doc-systems-pattern-editorial__icon {
          border-color: rgba(215, 4, 22, 0.45);
          background: rgba(215, 4, 22, 0.1);
          transform: scale(1.04);
        }
        .doc-systems-pattern-editorial__cell-title {
          font-weight: 600;
          font-size: 1.05rem;
          line-height: 34px;
          color: #000000;
          margin: 1.15rem 0 0.5rem 0;
        }
        .doc-systems-pattern-editorial__cell-body {
          margin: 0;
          font-size: 16px;
          line-height: 28px;
          color: #000000;
          font-weight: 400;
        }
        @media (min-width: 992px) {
          .doc-systems-pattern-editorial__cell:hover {
            background: rgba(215, 4, 22, 0.02);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .doc-systems-pattern-editorial__cell::before {
            transition: none;
          }
          .doc-systems-pattern-editorial__cell:hover .doc-systems-pattern-editorial__icon {
            transform: none;
          }
        }

        /* Hero — split layout; ~40vh cap on large screens, CTAs one row */
        .doc-systems-hero-split {
          position: relative;
          overflow: hidden;
          background: #ffffff;
          padding-bottom: 0;
        }
        .doc-systems-hero-split__ambient {
          display: none;
        }
        .doc-systems-hero-split__mesh {
          display: none;
        }
        .doc-systems-hero-split__container {
          z-index: 1;
          padding-top: clamp(1.25rem, 3vw, 2rem);
          padding-bottom: clamp(1rem, 2.5vw, 1.5rem);
        }
        .doc-systems-hero-split__row {
          min-height: 0;
        }
        @media (min-width: 992px) {
          .doc-systems-hero-split__row {
            min-height: 0;
            align-items: center;
          }
          .doc-systems-hero-split__container {
            padding-top: clamp(0.65rem, 1.5vh, 1.1rem);
            padding-bottom: clamp(0.65rem, 1.5vh, 1.1rem);
          }
        }
        .doc-systems-hero-split__bridge {
          height: 32px;
          margin-top: -1px;
          background: #ffffff;
          pointer-events: none;
        }
        @media (min-width: 992px) {
          .doc-systems-hero-split__bridge {
            height: 24px;
          }
        }

        .doc-systems-hero-figure {
          position: relative;
          max-width: 520px;
          margin-bottom: 0;
        }
        .doc-systems-hero-figure__ring {
          position: absolute;
          inset: -10px -6px auto auto;
          width: 88%;
          height: 92%;
          border-radius: 22px;
         
          transition: transform var(--ds-duration-slow) var(--ds-ease-out);
        }
        .doc-systems-hero-figure:hover .doc-systems-hero-figure__ring {
          transform: translate(4px, 4px);
        }
        .doc-systems-hero-figure__frame {
          position: relative;
          z-index: 1;
          border-radius: 20px;
          overflow: hidden;
          box-shadow:
            0 4px 6px rgba(0, 0, 0, 0.04),
            0 24px 48px rgba(15, 23, 42, 0.12),
            0 0 0 1px rgba(0, 0, 0, 0.04);
          transition: box-shadow var(--ds-duration) var(--ds-ease-soft), transform var(--ds-duration) var(--ds-ease-out);
        }
        .doc-systems-hero-figure:hover .doc-systems-hero-figure__frame {
          box-shadow:
            0 8px 12px rgba(0, 0, 0, 0.06),
            0 32px 56px rgba(15, 23, 42, 0.14),
            0 0 0 1px rgba(215, 4, 22, 0.08);
          transform: translateY(-4px);
        }
        .doc-systems-hero-figure__img {
          display: block;
          width: 100%;
          height: clamp(220px, 42vw, 320px);
          object-fit: cover;
          object-position: 58% 30%;
          transition: transform calc(var(--ds-duration-slow) + 0.15s) var(--ds-ease-out);
        }
        @media (min-width: 992px) {
          .doc-systems-hero-figure__img {
            height: min(calc(40vh - 2.5rem), 280px);
            max-height: 36vh;
          }
        }
        .doc-systems-hero-figure:hover .doc-systems-hero-figure__img {
          transform: scale(1.03);
        }
        @media (prefers-reduced-motion: reduce) {
          .doc-systems-hero-figure:hover .doc-systems-hero-figure__frame,
          .doc-systems-hero-figure:hover .doc-systems-hero-figure__img,
          .doc-systems-hero-figure:hover .doc-systems-hero-figure__ring {
            transform: none !important;
          }
        }
        .doc-systems-hero-figure__caption {
          margin-top: 1rem;
          font-size: 0.82rem;
          color: #6b6b6b;
          font-weight: 600;
          text-align: center;
        }
        @media (min-width: 992px) {
          .doc-systems-hero-figure__caption {
            display: none;
          }
        }
        .doc-systems-hero-figure__caption .fa {
          color: #d70416;
        }
        .doc-systems-hero-mock__label {
          display: inline-flex;
          align-items: center;
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #d70416;
          margin-bottom: 0.75rem;
        }
        .doc-systems-hero-mock__title.h1 {
          color: #000000 !important;
          font-size: clamp(1.65rem, 4.5vw, 2.35rem) !important;
          font-weight: 600 !important;
          margin-bottom: 1rem;
        }
        @media (min-width: 992px) {
          .doc-systems-hero-mock__title.h1 {
            font-size: 2.125rem !important;
            margin-bottom: 0.85rem;
          }
        }
        .doc-systems-hero-mock__lead.lead {
          color: #000000;
          max-width: 36rem;
          margin-bottom: 1.75rem;
        }
        @media (min-width: 992px) {
          .doc-systems-hero-mock__lead.lead {
            margin-bottom: 1.35rem;
          }
        }
        .doc-systems-hero-mock__actions {
          flex-wrap: nowrap;
        }
        @media (max-width: 419.98px) {
          .doc-systems-hero-mock__actions {
            overflow-x: visible;
            overflow-y: hidden;
            padding-bottom: 4px;
            margin-right: -0.25rem;
            -webkit-overflow-scrolling: touch;
          }
          .doc-systems-hero-mock__action-btn {
            flex-shrink: 0;
          }
        }
        .doc-systems-hero-mock__action-btn {
          white-space: normal;
          text-align: center;
          line-height: 1.35;
          flex: 0 1 auto;
          padding-left: 1rem;
          padding-right: 1rem;
          font-size: 0.875rem;
        }
        @media (min-width: 576px) {
          .doc-systems-hero-mock__action-btn {
            font-size: 0.9375rem;
            padding-left: 1.35rem;
            padding-right: 1.35rem;
          }
        }
        .doc-systems-btn-primary {
          background: #d70416;
          border: 2px solid #d70416;
          color: #fff !important;
          border-radius: 12px;
          padding: 0.72rem 1.45rem;
          font-size: 0.78rem;
          letter-spacing: 0.04em;
          box-shadow: 0 8px 24px rgba(215, 4, 22, 0.28);
          transition:
            transform var(--ds-duration) var(--ds-ease-out),
            box-shadow var(--ds-duration) var(--ds-ease-soft),
            background var(--ds-duration) var(--ds-ease-soft),
            border-color var(--ds-duration) var(--ds-ease-soft);
        }
        .doc-systems-btn-primary:hover {
          background: #b80312;
          border-color: #b80312;
          color: #fff !important;
          transform: translateY(-3px);
          box-shadow: 0 16px 36px rgba(215, 4, 22, 0.34);
        }
        .doc-systems-btn-secondary {
          background: #ffffff;
          border: 2px solid #d70416;
          color: #d70416 !important;
          border-radius: 12px;
          padding: 0.72rem 1.45rem;
          font-size: 0.9375rem;
          letter-spacing: 0.02em;
          transition:
            background var(--ds-duration) var(--ds-ease-soft),
            color var(--ds-duration) var(--ds-ease-soft),
            border-color var(--ds-duration) var(--ds-ease-soft),
            transform var(--ds-duration) var(--ds-ease-out),
            box-shadow var(--ds-duration) var(--ds-ease-soft);
        }
        .doc-systems-btn-secondary:hover {
          background: #fff5f5;
          color: #b80312 !important;
          border-color: #b80312;
          transform: translateY(-3px);
          box-shadow: 0 10px 28px rgba(215, 4, 22, 0.12);
        }

        .doc-systems-hero-chip {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          padding: 0.68rem 0.9rem;
          background: rgba(255, 255, 255, 0.88);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(232, 234, 237, 0.95);
          border-radius: 12px;
          font-size: 0.82rem;
          font-weight: 600;
          color: #3d3d3d;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
          transition:
            transform var(--ds-duration) var(--ds-ease-out),
            box-shadow var(--ds-duration) var(--ds-ease-soft),
            border-color var(--ds-duration) var(--ds-ease-soft),
            background var(--ds-duration) var(--ds-ease-soft);
        }
        .doc-systems-hero-chip:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(0, 0, 0, 0.07);
          border-color: rgba(215, 4, 22, 0.18);
          background: #ffffff;
        }
        .doc-systems-hero-chip .fa {
          color: #d70416;
          font-size: 1.1rem;
          flex-shrink: 0;
          transition: transform var(--ds-duration) var(--ds-ease-out);
        }
        .doc-systems-hero-chip:hover .fa {
          transform: scale(1.08);
        }

        .doc-systems-eyebrow {
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #d70416;
        }
        .doc-systems-eyebrow--center {
          text-align: center;
        }
        .doc-systems-eyebrow--light {
          color: #fecaca;
        }

        /* Guide split: editorial header alignment */
        @media (max-width: 991.98px) {
          #what-guide .doc-systems-section-editorial {
            text-align: left;
            margin-left: 0;
            margin-right: 0;
          }
          #what-guide .doc-systems-section-editorial .accent-underline {
            margin-left: 0;
            margin-right: 0;
          }
          #what-guide .doc-systems-section-editorial__lead {
            margin-left: 0;
            margin-right: 0;
          }
        }
        @media (min-width: 992px) {
          #what-guide .doc-systems-section-editorial {
            text-align: left;
            margin-left: 0;
            max-width: none;
          }
          #what-guide .doc-systems-section-editorial .accent-underline {
            margin-left: 0;
            margin-right: 0;
          }
          #what-guide .doc-systems-section-editorial__lead {
            margin-left: 0;
          }
        }
        .doc-systems-guide-visual__caption-icon {
          color: #d70416;
        }

        .doc-systems-guide-visual__img {
          max-width: min(100%, 320px);
          height: auto;
          display: inline-block;
          filter: drop-shadow(0 12px 28px rgba(0, 0, 0, 0.08));
        }
        .doc-systems-guide-visual__caption {
          max-width: 320px;
          margin-left: auto;
          margin-right: auto;
          font-size: 0.88rem;
          color: #6b6b6b;
          line-height: 1.5;
          margin-top: 1rem;
        }
        @media (min-width: 992px) {
          .doc-systems-guide-visual__caption {
            margin-left: 0;
          }
        }

        /* Where It Starts Breaking — 2×2 grid, #D70416 / #222 theme (documentation-wall alignment) */
        .doc-systems-breaking-section__header {
          max-width: 44rem;
          margin-bottom: clamp(1.75rem, 3vw, 2.5rem);
        }
        .doc-systems-breaking-section__header .section-title {
          margin-top: 0;
        }
        .doc-systems-breaking-section__lead {
          max-width: 36rem;
          margin-top: 0.5rem;
        }
        .doc-systems-breaking__grid {
          display: grid;
          grid-template-columns: 1fr;
          border: 1px solid #e5e7eb;
          background: #ffffff;
          max-width: 960px;
          margin-left: auto;
          margin-right: auto;
        }
        .doc-systems-breaking__cell {
          padding: clamp(1.5rem, 3vw, 2.35rem) clamp(1.15rem, 2.5vw, 1.75rem);
          text-align: center;
          border-bottom: 1px solid #e5e7eb;
        }
        .doc-systems-breaking__cell:last-child {
          border-bottom: none;
        }
        @media (min-width: 768px) {
          .doc-systems-breaking__grid {
            grid-template-columns: 1fr 1fr;
          }
          .doc-systems-breaking__cell {
            border-bottom: 1px solid #e5e7eb;
            border-right: 1px solid #e5e7eb;
          }
          .doc-systems-breaking__cell:nth-child(2n) {
            border-right: none;
          }
          .doc-systems-breaking__cell:nth-child(n + 3) {
            border-bottom: none;
          }
        }
        .doc-systems-breaking__illu {
          width: 72px;
          height: 72px;
          margin: 0 auto 1.1rem auto;
          border-radius: 16px;
          background: linear-gradient(165deg, rgba(215, 4, 22, 0.1) 0%, rgba(215, 4, 22, 0.04) 100%);
          border: 1px solid rgba(215, 4, 22, 0.22);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #d70416;
          font-size: 1.85rem;
        }
        .doc-systems-breaking__illu--dual {
          gap: 0.4rem;
          font-size: 1.35rem;
        }
        .doc-systems-breaking__illu-addon {
          font-size: 1.1rem;
          opacity: 0.9;
        }
        .doc-systems-breaking__heading {
          font-size: 1.05rem;
          font-weight: 600;
          color: #000000;
          line-height: 34px;
          margin: 0 0 0.65rem 0;
          text-align: left !important;
        }
        .doc-systems-breaking__body {
          font-size: 16px;
          line-height: 28px;
          color: #000000;
          max-width: 22rem;
          margin-left: auto;
          margin-right: auto;
        }
        .doc-systems-breaking__body p {
          margin: 0;
        }

        .doc-systems-section-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.65rem;
          flex-wrap: wrap;
          justify-content: center;
          max-width: 100%;
          padding: 0.95rem 1.6rem;
          border-radius: 999px;
          border: 1px solid #dde1e6;
          background: #ffffff;
          color: #3d3d3d;
          font-size: 0.93rem;
          font-weight: 600;
          line-height: 1.45;
          box-shadow: 0 4px 18px rgba(0, 0, 0, 0.05);
          transition:
            transform var(--ds-duration) var(--ds-ease-out),
            box-shadow var(--ds-duration) var(--ds-ease-soft),
            border-color var(--ds-duration) var(--ds-ease-soft);
        }
        .doc-systems-section-pill:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(0, 0, 0, 0.07);
          border-color: rgba(215, 4, 22, 0.2);
        }
        .doc-systems-section-pill .fa {
          color: #d70416;
          flex-shrink: 0;
          font-size: 1.05rem;
          transition: transform var(--ds-duration) var(--ds-ease-out);
        }
        .doc-systems-section-pill:hover .fa {
          transform: scale(1.1);
        }

        /* Infographic stage ribbon */
        .doc-systems-stage-ribbon {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 1rem 1.5rem;
          max-width: 640px;
        }
        .doc-systems-stage-ribbon__item {
          flex: 1 1 140px;
          text-align: center;
          padding: 1rem 1.1rem;
          background: #fff;
          border: 1px solid #e8eaed;
          border-radius: 14px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
          transition:
            transform var(--ds-duration) var(--ds-ease-out),
            box-shadow var(--ds-duration) var(--ds-ease-soft),
            border-color var(--ds-duration) var(--ds-ease-soft);
        }
        .doc-systems-stage-ribbon__item:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.07);
        }
        .doc-systems-stage-ribbon__item .fa {
          display: block;
          font-size: 1.5rem;
          color: #d70416;
          margin-bottom: 0.35rem;
        }
        .doc-systems-stage-ribbon__item span {
          display: block;
          font-weight: 800;
          font-size: 0.95rem;
          color: #1a1a1a;
        }
        .doc-systems-stage-ribbon__item small {
          display: block;
          font-size: 0.78rem;
          color: #6b6b6b;
          margin-top: 0.2rem;
        }
        .doc-systems-stage-ribbon__item--growth .fa {
          color: #15803d;
        }
        .doc-systems-stage-ribbon__arrow {
          color: #d70416;
          font-size: 1.5rem;
          flex-shrink: 0;
        }
        @media (max-width: 575.98px) {
          .doc-systems-stage-ribbon__arrow {
            transform: rotate(90deg);
          }
        }

        .doc-systems-infographic-shell {
          max-width: 960px;
          background: #fff;
               }
       
        }
        .doc-systems-infographic-shell img {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 10px;
          transition: opacity var(--ds-duration-slow) var(--ds-ease-soft);
        }

        /* Guide panels */
        .doc-systems-guide-panel {
          background: #fff;
          border: 1px solid #e8eaed;
          border-radius: 14px;
          padding: 1.5rem 1.35rem 1.35rem;
          box-shadow: 0 6px 26px rgba(0, 0, 0, 0.05);
          border-top: 3px solid #d70416;
          transition:
            box-shadow var(--ds-duration) var(--ds-ease-soft),
            transform var(--ds-duration) var(--ds-ease-out),
            border-color var(--ds-duration) var(--ds-ease-soft);
        }
        .doc-systems-guide-panel:hover {
          box-shadow: 0 16px 40px rgba(215, 4, 22, 0.1);
          transform: translateY(-4px);
        }
        .doc-systems-guide-panel--b {
          border-top-color: #e85d6f;
        }
        .doc-systems-guide-panel--c {
          border-top-color: #64748b;
        }
        .doc-systems-guide-panel--d {
          border-top-color: #d70416;
        }
        .doc-systems-guide-panel__head {
          display: flex;
          align-items: flex-start;
          gap: 0.85rem;
          margin-bottom: 1rem;
        }
        .doc-systems-guide-panel__icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 46px;
          height: 46px;
          border-radius: 12px;
          background: linear-gradient(145deg, #fff5f5, #ffe4e6);
          border: 1px solid #fecdd3;
          color: #d70416;
          font-size: 1.15rem;
          flex-shrink: 0;
        }
        .doc-systems-guide-panel__icon--dual {
          flex-direction: row;
          width: auto;
          min-width: 52px;
          padding: 0 0.45rem;
          gap: 0.35rem;
          font-size: 1rem;
        }
        .doc-systems-guide-panel__icon-second {
          font-size: 0.92em;
          opacity: 0.92;
        }
        .doc-systems-guide-panel--b .doc-systems-guide-panel__icon {
          background: linear-gradient(145deg, #f0fdf4, #dcfce7);
          border-color: #bbf7d0;
          color: #15803d;
        }
        .doc-systems-guide-panel--c .doc-systems-guide-panel__icon {
          background: linear-gradient(145deg, #f8fafc, #f1f5f9);
          border-color: #e2e8f0;
          color: #475569;
        }
        .doc-systems-guide-panel--d .doc-systems-guide-panel__icon {
          background: linear-gradient(145deg, #fff5f5, #ffe4e6);
          border-color: #fecdd3;
          color: #d70416;
        }
        .doc-systems-guide-panel__title {
          font-family: var(--ds-editorial-serif);
          font-size: 1.2rem;
          font-weight: 700;
          color: #1a1a1a;
          line-height: 1.3;
          padding-top: 0.15rem;
        }
        .doc-systems-chevron-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .doc-systems-chevron-list li {
          position: relative;
          padding-left: 1.4rem;
          margin-bottom: 0.65rem;
          color: #5c5c5c;
          font-size: 1rem;
          line-height: 1.75;
        }
        .doc-systems-chevron-list li:last-child {
          margin-bottom: 0;
        }
        .doc-systems-chevron-list li::before {
          content: "›";
          position: absolute;
          left: 0;
          color: #d70416;
          font-weight: 800;
          font-size: 1.1rem;
          line-height: 1.45;
        }

        /* Hiring paradox section (growth insight layout) */
        .doc-systems-hiring-section.doc-growth-insight-section {
          background: #ffffff !important;
        }

        .doc-systems-hiring-panel {
          background: #ffffff;
       
          overflow: hidden;
          margin-bottom: clamp(2rem, 4vw, 2.75rem);
        }
        .doc-systems-hiring-panel__side {
          display: flex;
          flex-direction: column;
          min-height: 100%;
          background: #ffffff;
          border-bottom: 1px solid #e8ecf0;
        }
        @media (min-width: 992px) {
          .doc-systems-hiring-panel__side {
            border-bottom: none;
            background: #ffffff;
          }
      
        }

        .doc-systems-hiring-col {
          padding: 1.5rem 1.25rem 1.5rem;
          height: 100%;
        }
        @media (min-width: 992px) {
          .doc-systems-hiring-col {
            padding: 1.75rem 1.35rem 2rem;
          }
        }
        .doc-systems-hiring-col__heading {
          font-family: "Source Sans 3", "Segoe UI", system-ui, sans-serif;
          font-size: 0.95rem;
          font-weight: 700;
          color: #1a1a1a;
          text-transform: none;
          letter-spacing: 0;
          margin: 0 0 1.15rem 0;
          line-height: 34px;
        }
        .doc-systems-hiring-col__list {
          padding: 0;
          margin: 0;
        }
        .doc-systems-hiring-col__row {
          display: flex;
          align-items: flex-start;
          gap: 0.85rem;
          padding: 1rem 0;
          border-bottom: 1px solid rgba(0, 0, 0, 0.07);
        }
        .doc-systems-hiring-col__row:first-of-type {
          padding-top: 0;
        }
        .doc-systems-hiring-col__row:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }
        .doc-systems-hiring-col__icon {
          flex-shrink: 0;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.05rem;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
        }
        .doc-systems-hiring-col__icon--blue {
          background: linear-gradient(145deg, #e0f2fe 0%, #bae6fd 100%);
          color: #0369a1;
          border: 1px solid rgba(3, 105, 161, 0.15);
        }
        .doc-systems-hiring-col__icon--teal {
          background: linear-gradient(145deg, #ccfbf1 0%, #99f6e4 100%);
          color: #0f766e;
          border: 1px solid rgba(15, 118, 110, 0.12);
        }
        .doc-systems-hiring-col__icon--coral {
          background: linear-gradient(145deg, #ffe4e6 0%, #fecdd3 100%);
          color: #be123c;
          border: 1px solid rgba(190, 18, 60, 0.12);
        }
        .doc-systems-hiring-col__icon--amber {
          background: linear-gradient(145deg, #fff5f5 0%, #ffe4e6 100%);
          color: #d70416;
          border: 1px solid rgba(215, 4, 22, 0.2);
        }
        .doc-systems-hiring-col__icon--slate {
          background: linear-gradient(145deg, #f1f5f9 0%, #e2e8f0 100%);
          color: #475569;
          border: 1px solid rgba(71, 85, 105, 0.15);
        }
        .doc-systems-hiring-col__icon--green {
          background: linear-gradient(145deg, #dcfce7 0%, #bbf7d0 100%);
          color: #15803d;
          border: 1px solid rgba(21, 128, 61, 0.12);
        }
        .doc-systems-hiring-col__label {
          font-size: 0.9rem;
          line-height: 1.5;
          font-weight: 500;
          color: #2d2d2d;
          padding-top: 0.15rem;
        }

        .doc-systems-hiring-panel__center {
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          border-bottom: 1px solid #e8ecf0;
          padding: 1.25rem 1rem;
        }
        @media (min-width: 992px) {
          .doc-systems-hiring-panel__center {
            border-bottom: none;
            padding: 1.5rem 1.25rem;
          }
        }
        .doc-systems-hiring-panel__figure-wrap {
          width: 100%;
          max-width: 520px;
          margin: 0 auto;
        }
        .doc-systems-hiring-panel__img {
          display: block;
          width: 100%;
          height: auto;
          vertical-align: middle;
        }

        .doc-systems-hiring-section__footer {
          max-width: 52rem;
        }
        .doc-systems-hiring-section__highlight-box {
          position: relative;
          overflow: hidden;
          padding: clamp(1.5rem, 3.5vw, 2.25rem) clamp(1.25rem, 3vw, 2rem);
          background: #fafafa;
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-radius: 16px;
        }
        .doc-systems-hiring-section__highlight-box::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #d70416 0%, rgba(215, 4, 22, 0.45) 55%, transparent 100%);
          border-radius: 16px 16px 0 0;
          pointer-events: none;
        }
        .doc-systems-hiring-section__highlight-row {
          display: flex;
          flex-wrap: wrap;
          align-items: stretch;
          justify-content: center;
          gap: 0.75rem 1rem;
          margin-bottom: clamp(1.25rem, 3vw, 1.65rem);
        }
        .doc-systems-hiring-section__highlight-stat {
          flex: 1 1 200px;
          max-width: 280px;
          text-align: center;
          padding: 1.1rem 1rem 1.2rem;
          border-radius: 14px;
          border: 1px solid #e8ecf0;
          background: #ffffff;
          box-shadow: 0 4px 16px rgba(15, 23, 42, 0.04);
        }
        .doc-systems-hiring-section__highlight-stat--slow {
          border-color: rgba(0, 0, 0, 0.1);
          background: linear-gradient(180deg, #fafafa 0%, #ffffff 100%);
        }
        .doc-systems-hiring-section__highlight-stat--fast {
          border-color: rgba(215, 4, 22, 0.28);
          background: linear-gradient(180deg, #fff5f5 0%, #ffffff 100%);
        }
        .doc-systems-hiring-section__highlight-icon-wrap {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 52px;
          height: 52px;
          margin-bottom: 0.65rem;
          border-radius: 14px;
          font-size: 1.35rem;
        }
        .doc-systems-hiring-section__highlight-stat--slow .doc-systems-hiring-section__highlight-icon-wrap {
          background: linear-gradient(145deg, rgba(0, 0, 0, 0.06), rgba(0, 0, 0, 0.02));
          border: 1px solid rgba(0, 0, 0, 0.1);
          color: #000000;
        }
        .doc-systems-hiring-section__highlight-stat--fast .doc-systems-hiring-section__highlight-icon-wrap {
          background: linear-gradient(145deg, rgba(215, 4, 22, 0.14), rgba(215, 4, 22, 0.05));
          border: 1px solid rgba(215, 4, 22, 0.22);
          color: #d70416;
        }
        .doc-systems-hiring-section__highlight-label {
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #000000;
          opacity: 0.55;
          margin: 0 0 0.35rem 0;
          line-height: 1.2;
        }
        .doc-systems-hiring-section__highlight-value {
          font-size: clamp(1.2rem, 2.4vw, 1.45rem);
          font-weight: 700;
          color: #000000;
          margin: 0;
          line-height: 1.25;
          letter-spacing: -0.02em;
        }
        .doc-systems-hiring-section__highlight-stat--fast .doc-systems-hiring-section__highlight-value {
          color: #b10314;
        }
        .doc-systems-hiring-section__highlight-connector {
          display: none;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          align-self: center;
          color: #94a3b8;
          font-size: 0.85rem;
          padding: 0 0.25rem;
        }
        @media (min-width: 768px) {
          .doc-systems-hiring-section__highlight-connector {
            display: flex;
          }
        }
        .doc-systems-hiring-section__highlight-connector-line {
          width: 1px;
          height: 1.25rem;
          background: linear-gradient(180deg, transparent, #cbd5e1, transparent);
        }
        .doc-systems-hiring-section__highlight-insight {
          max-width: 40rem;
          margin: 0 auto;
          padding: 0 0.25rem;
        }
        .doc-systems-hiring-section__kicker {
          font-size: 18px !important;
          font-weight: 600 !important;
          line-height: 28px !important;
          color: #000000 !important;
        }
        .doc-systems-hiring-section__highlight-insight-icon {
          flex-shrink: 0;
          width: 40px;
          height: 40px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          background: #ffffff;
          border: 1px solid rgba(215, 4, 22, 0.18);
          color: #d70416;
          font-size: 1.15rem;
          box-shadow: 0 2px 8px rgba(215, 4, 22, 0.08);
        }
        .doc-systems-hiring-section__note {
          font-size: 16px !important;
          line-height: 28px !important;
          color: #000000 !important;
          font-weight: 400 !important;
        }

        /* Final CTA */
        .doc-systems-page #doc-cta.doc-v2-cta-sec.doc-systems-final-cta {
          background: #fafaf9 !important;
        }
        .doc-systems-final-cta {
          background: transparent;
        }
        .doc-systems-final-cta--band {
          background: linear-gradient(180deg, #fafafa 0%, #ffffff 45%);
          border-top: 1px solid rgba(0, 0, 0, 0.06);
        }
        .doc-systems-final-cta__inner {
          max-width: 52rem;
        }
        .doc-systems-final-cta__panel {
          max-width: 46rem;
          padding: clamp(2.25rem, 5vw, 3rem) clamp(1.5rem, 4vw, 2.75rem);
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: 20px;
          border-top: 4px solid #d70416;
          box-shadow: 0 16px 48px rgba(0, 0, 0, 0.08);
        }
        .doc-systems-final-cta__pdf-badge {
          width: 68px;
          height: 68px;
          border-radius: 18px;
          background: linear-gradient(145deg, rgba(215, 4, 22, 0.12) 0%, rgba(215, 4, 22, 0.05) 100%);
          border: 1px solid rgba(215, 4, 22, 0.22);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #d70416;
          font-size: 1.85rem;
        }
        .doc-systems-final-cta__accent-bar {
          width: 260px;
          height: 2px;
          max-width: 100%;
          background: #d70416;
          border-radius: 1px;
        }
        .doc-systems-final-lead {
          color: #000000;
          max-width: 36rem;
        }
        .doc-systems-final-benefits {
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          align-items: stretch;
          justify-content: center;
          gap: 0.5rem;
          margin-left: auto;
          margin-right: auto;
          text-align: left;
          list-style: none;
          padding: 0;
          max-width: 100%;
        }
        @media (min-width: 576px) {
          .doc-systems-final-benefits {
            gap: 0.75rem;
          }
        }
        .doc-systems-final-benefit {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 0.5rem;
          padding: 0.65rem 0.5rem;
          background: #ffffff;
          border: 1px solid #e8eaed;
          border-radius: 12px;
          flex: 1 1 0;
          min-width: 0;
        }
        @media (min-width: 576px) {
          .doc-systems-final-benefit {
            gap: 0.65rem;
            padding: 0.85rem 0.75rem;
          }
        }
        .doc-systems-final-benefit__icon {
          flex-shrink: 0;
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: rgba(215, 4, 22, 0.1);
          border: 1px solid rgba(215, 4, 22, 0.2);
          color: #d70416;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.95rem;
        }
        @media (min-width: 576px) {
          .doc-systems-final-benefit__icon {
            width: 42px;
            height: 42px;
            font-size: 1.05rem;
          }
        }
        .doc-systems-final-benefit__title {
          font-size: 0.72rem;
          font-weight: 700;
          color: #3d3d3d;
          line-height: 1.25;
          text-align: left;
        }
        @media (min-width: 400px) {
          .doc-systems-final-benefit__title {
            font-size: 0.8rem;
          }
        }
        @media (min-width: 576px) {
          .doc-systems-final-benefit__title {
            font-size: 0.88rem;
            line-height: 1.35;
          }
        }
        .doc-systems-final-btn--with-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }
        .doc-systems-final-btn__fa {
          color: #ffffff;
          font-size: 1.1rem;
          line-height: 1;
        }
        .doc-systems-final-btn {
          color: #ffffff !important;
          box-shadow: 0 8px 24px rgba(215, 4, 22, 0.28);
          border-radius: 12px;
          transition:
            transform var(--ds-duration) var(--ds-ease-out),
            box-shadow var(--ds-duration) var(--ds-ease-soft),
            background-color var(--ds-duration) var(--ds-ease-soft);
        }
        .doc-systems-final-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(215, 4, 22, 0.35);
          color: #ffffff !important;
        }
        @media (prefers-reduced-motion: reduce) {
          .doc-systems-page section.section-reveal {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
          .doc-systems-final-btn:hover,
          .doc-systems-page .doc-v2-btn-outline:hover,
          .doc-systems-page .doc-lp-btn-primary:hover,
          .doc-systems-page .doc-v2-card:hover,
          .doc-systems-page .doc-v2-g-item:hover,
          .doc-systems-page .doc-v2-chip {
            animation: none !important;
          }
        }

        /* ── doc-v2 (vbs-documentation-v2.html parity) ── */
        .doc-systems-page .doc-v2-wrap {
          max-width: 1160px !important;
          margin-left: auto !important;
          margin-right: auto !important;
          padding-left: clamp(20px, 4vw, 48px) !important;
          padding-right: clamp(20px, 4vw, 48px) !important;
        }
        .doc-systems-page .doc-v2-red {
          color: #d70416;
        }
        .doc-systems-page section.section-reveal {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.62s cubic-bezier(0.22, 1, 0.36, 1), transform 0.62s cubic-bezier(0.22, 1, 0.36, 1);
          will-change: opacity, transform;
        }
        .doc-systems-page section.section-reveal.in-view {
          opacity: 1;
          transform: none;
        }
        .doc-systems-page .doc-v2-fw-600 {
          font-weight: 600;
        }
        .doc-systems-page .doc-v2-rv {
          opacity: 1 !important;
          transform: none !important;
        }
        .doc-systems-page::before {
          content: "";
          position: fixed;
          inset: -20vh -20vw auto auto;
          width: min(42vw, 520px);
          height: min(42vw, 520px);
          background: radial-gradient(circle, rgba(215, 4, 22, 0.09) 0%, rgba(215, 4, 22, 0) 68%);
          pointer-events: none;
          z-index: 0;
          filter: blur(2px);
        }
        .doc-systems-page > * {
          position: relative;
          z-index: 1;
        }
        .doc-systems-page .doc-v2-hero-ctas {
          display: flex;
          align-items: stretch;
          justify-content: flex-start;
          gap: 12px;
          flex-wrap: wrap;
        }
        .doc-systems-page .doc-v2-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          line-height: 1.2;
          text-decoration: none !important;
          border-radius: 999px;
          border: 1.6px solid #d70416;
          padding: 12px 22px;
          transition: background-color 0.22s ease, color 0.22s ease, border-color 0.22s ease, transform 0.22s ease, box-shadow 0.22s ease;
          white-space: nowrap;
        }
        .doc-systems-page .doc-v2-btn-outline {
          color: #d70416;
          background: #ffffff;
          border-color: rgba(215, 4, 22, 0.92);
        }
        .doc-systems-page .doc-v2-btn-outline:hover {
          color: #d70416;
          background: #ffffff;
          border-color: #d70416;
       
          transform: translateY(-5px);
        }
        .doc-systems-page .btn.doc-lp-btn-primary {
          background-color: #d70416 !important;
          border-color: #d70416 !important;
          color: #ffffff !important;
          box-shadow: 0 10px 28px rgba(215, 4, 22, 0.24);
          transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease, border-color 0.2s ease;
        }
        .doc-systems-page .btn.doc-lp-btn-primary:hover,
        .doc-systems-page .btn.doc-lp-btn-primary:focus {
          background-color: #b80312 !important;
          border-color: #b80312 !important;
          color: #ffffff !important;
          transform: translateY(-2px);
          box-shadow: 0 16px 34px rgba(215, 4, 22, 0.32);
        }
        @media (min-width: 576px) {
          .doc-systems-page .doc-v2-hero-ctas {
            align-items: center;
          }
        }
        .doc-systems-page .doc-v2-badges {
          display: flex;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
        }
        .doc-systems-page .doc-v2-badge {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 12.5px;
          font-weight: 500;
          color: #a8a8a2;
        }
        .doc-systems-page .doc-v2-badge svg {
          color: #d70416;
          flex-shrink: 0;
        }
        .doc-systems-page .doc-v2-pattern-sec {
          background: #fafaf9;
          position: relative;
          overflow: hidden;
        }
        .doc-systems-page .doc-v2-pattern-sec::after {
          content: "";
          position: absolute;
          top: -80px;
          right: -80px;
          width: 320px;
          height: 320px;
          border-radius: 50%;
          background: rgba(215, 4, 22, 0.06);
          filter: blur(60px);
          pointer-events: none;
        }
        .doc-systems-page .doc-v2-chip {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #d70416;
          background: rgba(215, 4, 22, 0.06);
          border: 1px solid rgba(215, 4, 22, 0.15);
          padding: 5px 14px;
          border-radius: 100px;
          margin-bottom: 20px;
        }
        .doc-systems-page .doc-v2-chip svg {
          flex-shrink: 0;
        }
        .doc-systems-page .doc-v2-chip--center {
          margin-left: auto;
          margin-right: auto;
          display: flex;
          width: fit-content;
        }
        .doc-systems-page .doc-v2-chip--cta {
          margin-bottom: 20px;
        }
        .doc-systems-page .doc-v2-cta-sec--compact .doc-v2-chip--cta {
          margin-bottom: 10px;
        }
        .doc-systems-page .doc-v2-rule {
          width: 280px;
          height: 3px;
          background: #d70416;
          border-radius: 2px;
          margin: 10px 0 20px;
        }
        .doc-systems-page .doc-v2-rule--center {
          margin-left: auto;
          margin-right: auto;
        }
        .doc-systems-page .doc-v2-pattern-intro {
         
          margin-bottom: 52px;
        }
        .doc-systems-page .doc-v2-pattern-intro-em {
          font-style: normal;
          color: #d70416;
          font-weight: 600;
        }
        .doc-systems-page .doc-v2-section-closer-wrap {
          text-align: center;
          
          margin-left: auto;
          margin-right: auto;
          width: 100%;
        }
        .doc-systems-page .doc-v2-section-closer-wrap::after {
          content: "";
          display: block;
          width: 260px;
          height: 2px;
          margin: 0 auto ;
          background: rgba(215, 4, 22, 0.35);
          border-radius: 999px;
        }
        .doc-systems-page .doc-v2-section-closer-wrap--in-pattern {
          margin-top: 0;
        
        }
        .doc-systems-page .doc-v2-section-closer-wrap--gap {
          margin-top: 1.5rem;
        }
        .doc-systems-page .doc-v2-section-closer-wrap--hiring {
          margin-top: 2rem;
        }
        .doc-systems-page .doc-v2-section-closer-wrap--senior {
          margin-top: 40px;
        }
        .doc-systems-page .doc-v2-section-closer {
          display: inline-block;
          max-width: 820px;
          margin-left: auto;
          margin-right: auto;
          padding: 40px 28px 8px;
          border-radius: 14px;
          font-size: 1.1rem !important;
          letter-spacing: 0.02em !important;
          font-weight: 600 !important;
          font-style: italic !important;
          color:#D70416 !important;
          line-height: 1.55;
          // background: linear-gradient(
          //   90deg,
          //   transparent 0%,
          //   rgba(215, 4, 22, 0.02) 18%,
          //   rgba(215, 4, 22, 0.08) 50%,
          //   rgba(215, 4, 22, 0.02) 82%,
          //   transparent 100%
          // );
          border: none;
        }
        .doc-systems-page .doc-v2-section-closer-strong {
          font-weight: 700 !important;
          font-style: normal;
          color: #0a0a0a !important;
        }
        .doc-systems-page .doc-v2-section-closer .doc-v2-red,
        .doc-systems-page .doc-v2-section-closer .doc-v2-fw-600 {
          font-style: normal;
        }
        .doc-systems-page .doc-v2-cards-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        .doc-systems-page .doc-v2-cards-2--pattern-row {
          grid-template-columns: repeat(4, 1fr);
        }
        .doc-systems-page .doc-v2-cards-2--pattern-row .doc-v2-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 24px 16px;
        }
        .doc-systems-page .doc-v2-cards-2--pattern-row .doc-v2-icon-box {
          margin-bottom: 14px;
        }
        .doc-systems-page .doc-v2-cards-2--pattern-row .doc-v2-card-p {
          color: #3d3d3a;
          font-weight: 500;
        }
        .doc-systems-page .doc-v2-cards-3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        @media (max-width: 1100px) {
          .doc-systems-page .doc-v2-cards-2--pattern-row {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 900px) {
          .doc-systems-page .doc-v2-cards-2,
          .doc-systems-page .doc-v2-cards-3 {
            grid-template-columns: 1fr;
          }
        }
        .doc-systems-page .doc-v2-card {
          background: #fff;
          border: 1px solid #e8e8e6;
          border-radius: 24px;
          padding: 32px;
          position: relative;
          overflow: hidden;
          transition: all 0.25s ease;
        }
        .doc-systems-page .doc-v2-card::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: #d70416;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }
        .doc-systems-page .doc-v2-card:hover {
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.07), 0 8px 32px rgba(0, 0, 0, 0.05);
          transform: translateY(-4px);
          border-color: rgba(215, 4, 22, 0.15);
        }
        .doc-systems-page .doc-v2-card:hover::after {
          transform: scaleX(1);
        }
        .doc-systems-page .doc-v2-icon-box {
          width: 50px;
          height: 50px;
          background: rgba(215, 4, 22, 0.06);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          border: 1px solid rgba(215, 4, 22, 0.1);
          transition: all 0.25s ease;
        }
        .doc-systems-page .doc-v2-card:hover .doc-v2-icon-box {
          background: #d70416;
          border-color: #d70416;
        }
        .doc-systems-page .doc-v2-icon-box svg {
          color: #d70416;
          transition: color 0.25s ease;
        }
        .doc-systems-page .doc-v2-card:hover .doc-v2-icon-box svg {
          color: #fff !important;
        }
        .doc-systems-page .doc-v2-card-h {
          font-size: 1rem;
          font-weight: 600;
          color: inherit;
          margin-bottom: 8px;
          line-height: 1.35;
        }
        .doc-systems-page .doc-v2-card-p {
          font-size: 0.9375rem;
          line-height: 1.6;
          color: var(--bs-secondary-color, #6c757d);
        }
        .doc-systems-page .doc-v2-card-num {
          position: absolute;
          top: 24px;
          right: 24px;
          font-size: 52px;
          color: #f4f4f3;
          line-height: 1;
          font-weight: 400;
          user-select: none;
        }
        .doc-systems-page .doc-v2-pattern-closer-wrap {
          margin-top: 48px;
        }
        .doc-systems-page .doc-v2-pattern-closer {
          max-width: 640px;
        }
        .doc-systems-page .doc-v2-growth-sec {
          background: #fff;
        }
        .doc-systems-page .doc-v2-growth-grid {
          display: grid;
          grid-template-columns: 1fr 1.3fr;
          gap: 80px;
          align-items: start;
        }
        @media (max-width: 900px) {
          .doc-systems-page .doc-v2-growth-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
        }
        .doc-systems-page .doc-v2-growth-lede {
          margin-bottom: 20px;
        }
        .doc-systems-page .doc-v2-growth-list {
          margin: 0.2rem 0 0;
          padding-left: 1.1rem;
        }
        .doc-systems-page .doc-v2-growth-list li {
          font-size: 1rem;
          line-height: 1.55;
          color: #1f2937;
          font-weight: 500;
          margin-bottom: 0.35rem;
        }
        .doc-systems-page .doc-v2-growth-list li:last-child {
          margin-bottom: 0;
        }
        .doc-systems-page .doc-v2-anchor-note-sec {
          border-top: 1px solid rgba(0, 0, 0, 0.06);
          border-bottom: 1px solid rgba(0, 0, 0, 0.06);
        }
        .doc-systems-page .doc-v2-anchor-note {
          margin: 0.25rem 0;
          font-size: clamp(1.02rem, 1.55vw, 1.12rem) !important;
          line-height: 1.55 !important;
          font-weight: 500 !important;
          color: #111827 !important;
        }
        .doc-systems-page .doc-v2-growth-strong-line {
          font-size: 16px;
          color: #6e6e68;
          line-height: 1.7;
        }
        .doc-systems-page .doc-v2-growth-strong-line strong {
          color: #0a0a0a;
        }
        .doc-systems-page .doc-v2-senior-time-header h2,
        .doc-systems-page .doc-v2-senior-time-header .h2 {
          text-align: left !important;
        }
        .doc-systems-page .doc-v2-senior-time-lede {
          max-width: none;
          margin-left: 0;
          margin-right: 0;
          text-align: left;
        }
        .doc-systems-page .doc-v2-senior-time-header {
          text-align: left;
        }
        .doc-systems-page .doc-v2-senior-time-header .doc-v2-chip--center {
          margin-left: 0;
          margin-right: auto;
        }
        .doc-systems-page .doc-v2-senior-time-cards .doc-v2-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .doc-systems-page .doc-v2-senior-time-cards .doc-v2-icon-box {
          margin-bottom: 16px;
        }
        .doc-systems-page .doc-v2-senior-time-cards .doc-v2-card-p {
          color: #3d3d3a;
          font-weight: 500;
        }
        .doc-systems-page .doc-v2-growth-svg {
          height: auto;
          max-width: 100%;
          border-radius: 16px;
          background: #fff;
          border: 1px solid #e8e8e6;
          display: block;
          box-shadow: 0 10px 36px rgba(0, 0, 0, 0.07);
        }
        .doc-systems-page .doc-v2-card,
        .doc-systems-page .doc-v2-g-item,
        .doc-systems-page .doc-v2-cta-box {
          box-shadow: 0 12px 34px rgba(0, 0, 0, 0.06);
          border-color: rgba(215, 4, 22, 0.12);
        }
        .doc-systems-page .doc-v2-card:hover,
        .doc-systems-page .doc-v2-g-item:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 44px rgba(0, 0, 0, 0.1);
        }
        .doc-systems-page .doc-v2-chip {
          animation: docChipPulse 2.8s ease-in-out infinite;
        }
        @keyframes docChipPulse {
          0%,
          100% {
            box-shadow: 0 0 0 0 rgba(215, 4, 22, 0.14);
          }
          50% {
            box-shadow: 0 0 0 8px rgba(215, 4, 22, 0);
          }
        }
        .doc-systems-page .doc-v2-growth-items {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .doc-systems-page .doc-v2-g-item {
          background: #fafaf9;
          border: 1px solid #e8e8e6;
          border-radius: 16px;
          padding: 22px 24px;
          display: flex;
          align-items: flex-start;
          gap: 18px;
          transition: all 0.22s ease;
        }
        .doc-systems-page .doc-v2-g-item:hover {
          background: #fff;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05), 0 2px 8px rgba(0, 0, 0, 0.04);
          transform: translateX(5px);
          border-color: rgba(215, 4, 22, 0.2);
        }
        .doc-systems-page .doc-v2-g-icon {
          width: 42px;
          height: 42px;
          background: rgba(215, 4, 22, 0.06);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border: 1px solid rgba(215, 4, 22, 0.1);
        }
        .doc-systems-page .doc-v2-g-icon svg {
          color: #d70416;
        }
        .doc-systems-page .doc-v2-g-title {
          margin-bottom: 0.25rem;
          color: inherit;
        }
        .doc-systems-page .doc-v2-g-body {
          line-height: 1.6;
        }
        .doc-systems-page .doc-v2-guide-sec {
          background: #fafaf9;
        }
        .doc-systems-page .doc-v2-guide-header {
          text-align: left;
          margin-bottom: 56px;
        }
        .doc-systems-page .doc-v2-guide-header .doc-v2-chip--center {
          margin-left: 0;
          margin-right: auto;
        }
        .doc-systems-page .doc-v2-guide-sub {
         
          margin-left: 0;
          margin-right: 0;
        }
        .doc-systems-page .doc-v2-senior-time-sec {
          background: #fafaf9;
        }
        .doc-systems-page .doc-v2-breaking-sec {
          background: #ffffff;
        }
        .doc-systems-page .doc-systems-band,
        .doc-systems-page .doc-growth-insight-section {
          padding-top: clamp(56px, 7vw, 84px) !important;
          padding-bottom: clamp(56px, 7vw, 84px) !important;
        }
        .doc-systems-page .doc-v2-breaking-header {
          text-align: left;
          margin-bottom: 56px;
        }
        .doc-systems-page .doc-v2-breaking-header .doc-v2-chip--center {
          margin-left: 0;
          margin-right: auto;
        }
        .doc-systems-page .doc-v2-cta-sec {
          background: #fafaf9;
        }
        .doc-systems-page .doc-v2-cta-sec--compact.doc-v2-cta-sec--fullbleed {
          padding-top: 0 !important;
          padding-bottom: 0 !important;
        }
        @media (min-width: 992px) {
          .doc-systems-page .doc-v2-cta-sec--compact.doc-v2-cta-sec--fullbleed {
            padding-top: 0 !important;
            padding-bottom: 0 !important;
          }
        }
        .doc-systems-page .doc-v2-cta-sec--fullbleed {
          width: 100%;
          max-width: none;
          margin-left: 0;
          margin-right: 0;
          padding-left: 0 !important;
          padding-right: 0 !important;
          box-sizing: border-box;
        }
        .doc-systems-page .doc-v2-cta-fullwidth {
          width: 100%;
          max-width: none;
          margin: 0;
          padding: 0;
        }
        .doc-systems-page .doc-v2-cta-box {
          background: #ffe4e44d;
          border: none;
          
          border-bottom: 1.5px solid #e8e8e6;
          border-radius: 0;
          width: 100%;
          max-width: none;
          margin: 0;
          padding: clamp(48px, 8vw, 80px) clamp(24px, 5vw, 48px);
          text-align: center;
          position: relative;
          overflow: hidden;
          box-shadow: none;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .doc-systems-page .doc-v2-cta-sec--compact .doc-v2-cta-box {
          padding: clamp(34px, 5vw, 80px) clamp(20px, 4vw, 40px);
        }
        .doc-systems-page .doc-v2-cta-box .doc-v2-chip--center {
          margin-left: auto;
          margin-right: auto;
        }
        .doc-systems-page .doc-v2-cta-box .doc-v2-cta-btn {
          align-self: center;
        }
        .doc-systems-page .doc-v2-cta-box h2.doc-v2-cta-h2.section-title {
          text-align: center !important;
        }
        .doc-systems-page .doc-v2-cta-box::before {
          content: none;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #d70416, #ff3347, #d70416);
        }
        .doc-systems-page .doc-v2-cta-decor-a {
          position: absolute;
          bottom: -48px;
          right: -48px;
          width: min(200px, 42vw);
          height: min(200px, 42vw);
          border-radius: 50%;
          background: rgba(215, 4, 22, 0.06);
          pointer-events: none;
        }
        .doc-systems-page .doc-v2-cta-decor-b {
          position: absolute;
          top: -32px;
          left: -32px;
          width: min(140px, 32vw);
          height: min(140px, 32vw);
          border-radius: 50%;
          background: rgba(215, 4, 22, 0.06);
          pointer-events: none;
        }
        .doc-systems-page .doc-v2-cta-icon {
          width: 76px;
          height: 76px;
          background: rgba(215, 4, 22, 0.06);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 28px;
          border: 1px solid rgba(215, 4, 22, 0.15);
          position: relative;
          z-index: 1;
        }
        .doc-systems-page .doc-v2-cta-sec--compact .doc-v2-cta-icon {
          width: 56px;
          height: 56px;
          margin-bottom: 12px;
        }
        .doc-systems-page .doc-v2-cta-sec--compact .doc-v2-cta-icon svg {
          width: 26px;
          height: 26px;
        }
        .doc-systems-page .doc-v2-cta-icon svg {
          color: #d70416;
        }
        .doc-systems-page .doc-v2-cta-h2 {
          max-width: none;
          width: fit-content;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 16px;
          position: relative;
          z-index: 1;
          text-align: center;
          white-space: normal;
        }
        .doc-systems-page .doc-v2-cta-sec--compact .doc-v2-cta-h2 {
          margin-bottom: 8px;
        }
        .doc-systems-page .doc-v2-cta-lead {
          max-width: 480px;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 36px;
          position: relative;
          z-index: 1;
        }
        .doc-systems-page .doc-v2-cta-sec--compact .doc-v2-cta-lead {
          font-size: 15px !important;
          line-height: 1.45 !important;
          margin-bottom: 18px;
          max-width: 34rem;
        }
        .doc-systems-page .doc-v2-cta-box .doc-v2-rule {
          margin-left: auto;
          margin-right: auto;
        }
        .doc-systems-page .doc-v2-cta-sec--compact .doc-v2-cta-box .doc-v2-rule {
          margin-top: 8px;
          margin-bottom: 14px;
        }
        .doc-systems-page .doc-v2-cta-btn {
          position: relative;
          z-index: 1;
          white-space: nowrap;
          font-size: clamp(12px, 2.8vw, 15px) !important;
          padding-left: clamp(16px, 4vw, 28px) !important;
          padding-right: clamp(16px, 4vw, 28px) !important;
        }
        .doc-systems-page .doc-v2-cta-sec--compact .doc-v2-cta-btn {
          font-size: clamp(11px, 2.6vw, 14px) !important;
        }
        .doc-systems-page .scroll-margin {
          scroll-margin-top: 96px;
        }
        @media (min-width: 1200px) {
          .doc-systems-page h2.doc-systems-heading-single-line.section-title {
            white-space: nowrap;
          }
        }
      `}</style>
    </main>
  );
};

export default DocumentationSystemThatScaleView;
export { DocumentationSystemThatScaleView };
