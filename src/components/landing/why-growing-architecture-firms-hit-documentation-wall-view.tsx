"use client";

import Image from "next/image";
import LandingPdfLeadModal from "@/components/landing/landing-pdf-lead-modal";
import { LandingTopHeader } from "@/components/landing/landing-top-header";
import { PageContainer } from "@/components/layout/page-container";
import { GetInTouchSection } from "@/components/sections/get-in-touch-section";
import { SiteFooter } from "@/components/sections/site-footer";
import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";
import "@/styles/why-growing-architecture-firms-hit-documentation-wall.scss";

const heroImg = encodeURI("/image/hero-banner 1.jpg");
const phasesImg = "/image/overlapping-project-phases.png";
const growthCostsImg = encodeURI("/image/growth 1.jpg");
const stageImg = encodeURI("/image/Stage 1.jpg");
const phasesIcon = "/image/dw-project-phases.svg";
const coordinationIcon = "/image/dw-coordination.svg";
const documentationIcon = "/image/dw-documentation.svg";
const questionArrowIcon = "/image/hvd-question-arrow.svg";


const DOC_WALL_PDF_URL =
  "https://www.virtualbuildingstudio.com/resources/documentation-wall-architecture-firms.pdf?utm_source=LP_DocumentationWall&utm_medium=LPCTA&utm_campaign=T2TOFU";

const WALL_NOT_ITEMS = [
  "Slow drafting staff",
  "Weak software skills",
  "Individual underperformance",
] as const;

const GROWTH_SHIFT_ITEMS = [
  "SD, DD, and CD phases begin overlapping across multiple projects",
  "One or two senior architects become default reviewers",
  "Leadership spends more time managing drawings than shaping work",
  "Projects that once felt manageable begin to feel fragile",
] as const;

const TABLE_ROWS = [
  { see: "CDs rushed", happening: "Decisions bleed from SD/DD into CD" },
  { see: "Redlines stacking", happening: "Review authority concentrates in one or two people" },
  { see: "Quality uneven", happening: "Standards rely on memory rather than structure" },
  { see: "Overtime constant", happening: "Effort compensates for systemic gaps" },
] as const;

const APPEARS_CARDS = [
  {
    title: "Project Phases",
    icon: phasesIcon,
    items: [
      "SD decisions leak into DD",
      "DD changes trigger CD rework",
      "30/60/90% reviews become correction checkpoints",
    ],
  },
  {
    title: "Coordination",
    icon: coordinationIcon,
    items: [
      "Engineers wait longer for architectural direction",
      "Redlines sit before action",
      "Clash detection occurs late",
    ],
  },
  {
    title: "Documentation",
    icon: documentationIcon,
    items: [
      "BIM standards drift",
      "Revision cycles increase",
      "Permit comments multiply",
    ],
  },
] as const;

const STAGE_ITEMS = [
  "Context Fragments",
  "Decision authority concentrates",
  "Documentation cycles elongate",
] as const;

const CAPACITY_ITEMS = [
  "Throughput",
  "Review Load",
  "Documentation Ownership",
  "Senior Bandwidth",
] as const;

function PdfCta({
  label,
  fill = false,
  className = "",
}: {
  label: string;
  fill?: boolean;
  className?: string;
}) {
  return (
    <LandingPdfLeadModal
      title="Why Growing Architecture Firms Hit a Documentation Wall"
      downloadUrl={DOC_WALL_PDF_URL}
      trigger={(
        <PrimaryCtaButton fullWidth={false} className={`${fill ? "dw-cta-fill" : ""} ${className}`.trim()}>
          {label}
        </PrimaryCtaButton>
      )}
    />
  );
}

export function WhyGrowingArchitectureFirmsHitDocumentationWallView() {
  return (
    <>
      <LandingTopHeader fixed />
      <main className="vbs-redesign-page dw-page min-h-screen overflow-x-hidden bg-white">
        {/* Hero — Figma 3825:45793 */}
        <section className="dw-hero">
          <PageContainer className="dw-hero-inner">
            <div className="dw-hero-copy">
              <div className="dw-hero-copy-main">
                <h1>
                  Why Growing{" "}
                  <span className="dw-accent">Architecture Firms Hit</span> a Documentation Wall
                </h1>
                <p>
                  Drawings feel rushed. Reviews pile up. Senior architects become bottlenecks. Even
                  with more staff, the workload feels heavier not lighter.
                </p>
                <p className="dw-hero-lead">
                  This isn&apos;t failure. It&apos;s a structural threshold most growing firms
                  eventually reach.
                </p>
              </div>
              <PdfCta label="Access the PDF now" className="dw-hero-cta" />
            </div>
            <div className="dw-hero-media">
              <Image
                src={heroImg}
                alt="When project volume rises, documentation wall slows decision flow"
                width={650}
                height={460}
                priority
                sizes="(max-width: 900px) 100vw, 650px"
              />
            </div>
          </PageContainer>
        </section>

        {/* When Growth Stops Feeling Linear — Figma 3825:46616 */}
        <section className="dw-linear">
          <PageContainer className="dw-linear-inner">
            <div className="dw-linear-copy">
              <h2>
                When Growth <span className="dw-accent">Stops&nbsp;Feeling Linear</span>
              </h2>
              <div className="dw-linear-body">
                <p>As firms scale beyond a certain point, something shifts:</p>
                <ul>
                  {GROWTH_SHIFT_ITEMS.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <p>
                This is the&nbsp;Documentation Wall: when project volume grows faster than
                decision-making capacity.
              </p>
              <p>The bottleneck is no longer effort. It is throughput.</p>
              <blockquote className="dw-callout">
                The hardest part of architecture isn&apos;t the design it&apos;s&nbsp;keeping the
                business running&nbsp;while delivering on time.
              </blockquote>
            </div>
            <div className="dw-linear-media">
              <Image
                src={phasesImg}
                alt="Overlapping project phases across six concurrent projects"
                width={710}
                height={446}
                sizes="(max-width: 900px) 100vw, 710px"
              />
            </div>
          </PageContainer>
        </section>

        {/* What the Documentation Wall Really Is — Figma 3825:46659 */}
        <section className="dw-really">
          <PageContainer className="dw-really-inner">
            <div className="dw-really-copy">
              <h2>
                What the{" "}
                <span className="dw-accent">
                  Documentation
                  <br />
                  Wall
                </span>
                &nbsp;Really Is
              </h2>
              <div className="dw-really-body">
                <p>The Documentation Wall&nbsp;Is Not</p>
                <ul>
                  {WALL_NOT_ITEMS.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <blockquote className="dw-callout dw-callout--green">
                “ It is a&nbsp;throughput constraint where&nbsp;decisions, not drawings&nbsp;limit
                progress.”
              </blockquote>
            </div>
            <div className="dw-table" role="table" aria-label="What you see versus what's actually happening">
              <div className="dw-table-head" role="row">
                <div className="dw-table-cell dw-table-cell--see-head" role="columnheader">
                  What You See
                </div>
                <div className="dw-table-cell dw-table-cell--happen-head" role="columnheader">
                  What&apos;s Actually Happening
                </div>
              </div>
              {TABLE_ROWS.map((row, i) => (
                <div
                  key={row.see}
                  className={`dw-table-row${i % 2 === 1 ? " dw-table-row--alt" : ""}`}
                  role="row"
                >
                  <div className="dw-table-cell dw-table-cell--see" role="cell">
                    {row.see}
                  </div>
                  <div className="dw-table-cell dw-table-cell--happen" role="cell">
                    {row.happening}
                  </div>
                </div>
              ))}
            </div>
          </PageContainer>
        </section>

        {/* Where It Appears First — Figma 3825:45863 */}
        <section className="dw-appears">
          <PageContainer className="dw-appears-inner">
            <div className="dw-appears-header">
              <div className="dw-appears-intro">
                <h2>
                  Where It&nbsp;<span className="dw-accent">Appears&nbsp;First</span>
                </h2>
                <p>The wall shows up in predictable patterns.</p>
              </div>
              <blockquote className="dw-callout dw-callout--right">
                If several of these patterns are occurring simultaneously, the system is likely
                operating beyond its original design.
              </blockquote>
            </div>
            <div className="dw-appears-grid">
              {APPEARS_CARDS.map((card) => (
                <article key={card.title} className="dw-appears-card">
                  <div className="dw-icon-box">
                    <Image src={card.icon} alt="" width={46} height={46} />
                  </div>
                  <div className="dw-appears-card-text">
                    <h3>{card.title}</h3>
                    <ul>
                      {card.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </PageContainer>
        </section>

        {/* The Costs That Hide in Growth — Figma 3825:46761 */}
        <section className="dw-costs">
          <PageContainer className="dw-costs-inner">
            <div className="dw-costs-header">
              <h2>
                The Costs That <span className="dw-accent">Hide in&nbsp;Growth</span>
              </h2>
              <blockquote className="dw-callout">
                Over time, growth begins to feel managerial rather than creative.
              </blockquote>
            </div>
            <div className="dw-costs-media">
              <Image
                src={growthCostsImg}
                alt="Growth costs: rework, senior overload, missed opportunities, leadership erosion"
                width={1200}
                height={400}
                sizes="(max-width: 900px) 100vw, 1200px"
              />
            </div>
          </PageContainer>
        </section>

        {/* Why This Happens at Predictable Stages — Figma 3825:46769 */}
        <section className="dw-stages">
          <PageContainer className="dw-stages-inner">
            <h2>
              Why This Happens at&nbsp;
              <span className="dw-accent">Predictable Stages</span>
            </h2>
            <div className="dw-stages-row">
              <div className="dw-stages-media">
                <Image
                  src={stageImg}
                  alt="Early stage collaboration versus growth stage documentation explosion"
                  width={600}
                  height={400}
                  sizes="(max-width: 900px) 100vw, 600px"
                />
              </div>
              <div className="dw-stages-copy">
                <div className="dw-stages-body">
                  <p>
                    Early-stage firms rely on proximity and shared memory. As concurrency increases:
                  </p>
                  <ul>
                    {STAGE_ITEMS.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <blockquote className="dw-callout dw-callout--green">
                  &quot; The hardest part of architecture isn&apos;t the design — it&apos;s&nbsp;keeping
                  the business running&nbsp;while delivering on time. &quot;
                </blockquote>
              </div>
            </div>
          </PageContainer>
        </section>

        {/* The Shift That Eventually Happens — Figma 3825:46794 */}
        <section className="dw-shift">
          <PageContainer className="dw-shift-inner">
            <div className="dw-shift-copy">
              <h2>
                The Shift That&nbsp;
                <span className="dw-accent">Eventually Happens</span>
              </h2>
              <div className="dw-shift-body">
                <p>Capacity becomes about:</p>
                <ul>
                  {CAPACITY_ITEMS.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p>Not just adding people.</p>
              </div>
            </div>
            <div className="dw-shift-cards">
              <article className="dw-shift-card">
                <h3>At a certain stage, firms stop asking:</h3>
                <p>&quot;Who do we hire next?&quot;</p>
              </article>
              <div className="dw-shift-arrow" aria-hidden>
                <Image
                  src={questionArrowIcon}
                  alt=""
                  width={54}
                  height={44}
                  className="dw-shift-arrow-img"
                />
              </div>
              <article className="dw-shift-card dw-shift-card--accent">
                <h3>They begin asking:</h3>
                <p>&quot;Where is our decision-making capacity constrained?&quot;</p>
              </article>
            </div>
          </PageContainer>
        </section>

        {/* Final Reflection — Figma 3825:46845 */}
        <section className="dw-final">
          <PageContainer className="dw-final-inner">
            <div className="dw-final-left">
              <h2>
                Final<span className="dw-accent"> Reflection</span>
              </h2>
              <p>
                Informal documentation systems built on proximity and centralized judgment do not
                scale invisibly. As concurrency rises, coordination cost compounds.
              </p>
            </div>
            <div className="dw-final-right">
              <p className="dw-final-strong">
                Growth exposes structural limits. It does not create them.
              </p>
              <p>Before adding more people, it is worth asking:</p>
              <p className="dw-final-strong">Are we adding capacity or adding complexity?</p>
              <p>Check out our detailed guide to understand this issue further.</p>
              <PdfCta label="Download the PDF" fill className="dw-final-cta" />
            </div>
          </PageContainer>
        </section>

        <GetInTouchSection />
        <SiteFooter />
      </main>
    </>
  );
}

export default WhyGrowingArchitectureFirmsHitDocumentationWallView;
