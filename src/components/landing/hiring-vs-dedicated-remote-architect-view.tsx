"use client";

import Image from "next/image";
import LandingPdfLeadModal from "@/components/landing/landing-pdf-lead-modal";
import { LandingTopHeader } from "@/components/landing/landing-top-header";
import { trackLinkedInConversion } from "@/utils/site-tracking-events";
import { PageContainer } from "@/components/layout/page-container";
import { GetInTouchSection } from "@/components/sections/get-in-touch-section";
import { SiteFooter } from "@/components/sections/site-footer";
import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";
import "@/styles/hiring-vs-dedicated-remote-architect.scss";

const heroImg = encodeURI("/image/bg-hiring 1.jpg");
const workCycleImg = encodeURI("/image/Work-Cycle 1.jpg");
const rampUpIcon = "/image/hvd-ramp-up.svg";
const knowledgeIcon = "/image/hvd-knowledge.svg";
const coordinationIcon = "/image/hvd-coordination.svg";
const delayedReliefIcon = "/image/hvd-delayed-relief.svg";
const questionArrowIcon = "/image/hvd-question-arrow.svg";


const HIRING_PDF_URL =
  "https://www.virtualbuildingstudio.com/resources/hiring-vs-dedicated-remote-architect.pdf?utm_source=LP_HireVsDRA&utm_medium=LPCTA&utm_campaign=T2TOFU";

const EXPECT_ROWS = [
  { reality: "Review load increases", expectation: "Senior workload drops" },
  { reality: "Redlines multiply", expectation: "Documentation accelerates" },
  { reality: "Oversight expands", expectation: "Escalations decrease" },
  { reality: "Relief arrives later than planned", expectation: "Delivery stabilizes" },
] as const;

const TIMELINE_CARDS = [
  {
    day: "30 Days",
    dayClass: "hvd-day--red",
    title: "Learning the System",
    text: "Standards and internal workflows transfer to the new hire. Senior team members remain closely involved to guide decisions and review early work.",
  },
  {
    day: "60 Days",
    dayClass: "hvd-day--green",
    title: "Entering Live Work",
    text: "Work begins touching real projects. Review cycles increase as senior engineers spend more time checking and refining the output.",
  },
  {
    day: "90 Days",
    dayClass: "hvd-day--yellow",
    title: "Contribution Begins",
    text: "Contribution improves as familiarity grows. Full independence is still developing as the new hire builds confidence and experience.",
  },
] as const;

const PRESSURE_CARDS = [
  {
    title: "Ramp-up vs Deadlines",
    text: "New hires need time you don't have",
    icon: rampUpIcon,
  },
  {
    title: "Knowledge Concentration",
    text: "Critical know-how stays siloed",
    icon: knowledgeIcon,
  },
  {
    title: "Coordination Overhead",
    text: "More people, more meetings",
    icon: coordinationIcon,
  },
  {
    title: "Delayed Relief",
    text: "Net capacity dips before it rises",
    icon: delayedReliefIcon,
  },
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
      title="Hiring vs Dedicated Remote Architect"
      downloadUrl={HIRING_PDF_URL}
      onBeforeOpen={() => trackLinkedInConversion()}
      trigger={(
        <PrimaryCtaButton fullWidth={false} className={`${fill ? "hvd-cta-fill" : ""} ${className}`.trim()}>
          {label}
        </PrimaryCtaButton>
      )}
    />
  );
}

export function HiringVsDedicatedRemoteArchitectView() {
  return (
    <>
      <LandingTopHeader fixed />
      <main className="vbs-redesign-page hvd-page min-h-screen overflow-x-hidden bg-white">
        {/* Hero — Figma 3825:44467 */}
        <section className="hvd-hero">
          <PageContainer className="hvd-hero-inner">
            <div className="hvd-hero-copy">
              <div className="hvd-hero-copy-main">
                <h1>
                  Hiring&nbsp;vs&nbsp;Dedicated{" "}
                  <span className="hvd-accent">Remote Architect</span>
                </h1>
                <p className="hvd-hero-lead">What Actually Happens After You Hire</p>
                <p>
                  A structural look at what actually changes inside architecture firms during the
                  first 90 days after adding capacity.
                </p>
              </div>
              <PdfCta label="Download the Full Executive Brief (PDF)" className="hvd-hero-cta" />
            </div>
            <div className="hvd-hero-media">
              <Image
                src={heroImg}
                alt="Hiring versus dedicated remote architect capacity"
                width={650}
                height={530}
                priority
                sizes="(max-width: 900px) 100vw, 650px"
              />
            </div>
          </PageContainer>
        </section>

        {/* Why Hiring Feels Like The Natural First Move — Figma 3825:44476 */}
        <section className="hvd-natural">
          <PageContainer className="hvd-natural-inner">
            <h2 className="hvd-natural-title">
              Why Hiring Feels Like{" "}
              <span className="hvd-accent">The&nbsp;Natural First Move</span>
            </h2>
            <div className="hvd-natural-right">
              <div className="hvd-natural-media">
                <Image
                  src={workCycleImg}
                  alt="More workload, add people, add capacity, pressure eases"
                  width={862}
                  height={326}
                  sizes="(max-width: 900px) 100vw, 862px"
                />
              </div>
              <blockquote className="hvd-callout">
                “This logic works in stable environments. During active growth, the system behaves
                differently.”
              </blockquote>
            </div>
          </PageContainer>
        </section>

        {/* What Leaders Expect vs What Actually Happens — Figma 3825:45442 */}
        <section className="hvd-expect">
          <PageContainer className="hvd-expect-inner">
            <div className="hvd-expect-copy">
              <h2>
                What Leaders Expect vs What{" "}
                <span className="hvd-accent">Actually Happens</span>
              </h2>
              <blockquote className="hvd-callout hvd-callout--green hvd-callout--nowrap">
                Hiring adds people immediately. Capacity increases gradually.
              </blockquote>
            </div>
            <div className="hvd-table" role="table" aria-label="Expectation versus reality">
              <div className="hvd-table-head" role="row">
                <div className="hvd-table-cell hvd-table-cell--reality-head" role="columnheader">
                  Reality
                </div>
                <div className="hvd-table-cell hvd-table-cell--expect-head" role="columnheader">
                  Expectation
                </div>
              </div>
              {EXPECT_ROWS.map((row, i) => (
                <div
                  key={row.reality}
                  className={`hvd-table-row${i % 2 === 1 ? " hvd-table-row--alt" : ""}`}
                  role="row"
                >
                  <div className="hvd-table-cell hvd-table-cell--reality" role="cell">
                    {row.reality}
                  </div>
                  <div className="hvd-table-cell hvd-table-cell--expect" role="cell">
                    {row.expectation}
                  </div>
                </div>
              ))}
            </div>
          </PageContainer>
        </section>

        {/* What Actually Shifts in The First 30–90 Days — Figma 3825:44495 */}
        <section className="hvd-timeline">
          <PageContainer className="hvd-timeline-inner">
            <div className="hvd-timeline-header">
              <h2>
                What Actually Shifts in{" "}
                <br className="hvd-timeline-break" />
                <span className="hvd-accent">The First 30–90 Days</span>
              </h2>
              <blockquote className="hvd-callout">
                Ramp-up time collides with active deadlines.
              </blockquote>
            </div>
            <div className="hvd-timeline-grid">
              {TIMELINE_CARDS.map((card) => (
                <article key={card.day} className="hvd-timeline-card">
                  <div className={`hvd-day ${card.dayClass}`}>{card.day}</div>
                  <div className="hvd-timeline-card-text">
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </PageContainer>
        </section>

        {/* Why Hiring Doesn't Always Reduce Pressure — Figma 3825:45491 */}
        <section className="hvd-pressure">
          <PageContainer className="hvd-pressure-inner">
            <div className="hvd-pressure-header">
              <div className="hvd-pressure-intro">
                <h2>
                  Why&nbsp;Hiring&nbsp;Doesn&apos;t Always Reduce{" "}
                  <span className="hvd-accent">Pressure&nbsp;During Growth</span>
                </h2>
                <p>
                  Adding people creates new dynamics that most leaders don&apos;t anticipate until
                  they&apos;re already stretched thin.
                </p>
              </div>
              <blockquote className="hvd-callout">
                Hiring doesn&apos;t remove pressure. It redistributes it
              </blockquote>
            </div>
            <div className="hvd-pressure-grid">
              {PRESSURE_CARDS.map((card) => (
                <article key={card.title} className="hvd-pressure-card">
                  <div className="hvd-icon-box">
                    <Image src={card.icon} alt="" width={46} height={46} />
                  </div>
                  <div className="hvd-pressure-card-text">
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </PageContainer>
        </section>

        {/* Eventually, The Question Changes — Figma 3825:44584 */}
        <section className="hvd-question">
          <PageContainer className="hvd-question-inner">
            <div className="hvd-question-copy">
              <h2>
                Eventually, The&nbsp;
                <span className="hvd-accent">Question Changes</span>
              </h2>
              <blockquote className="hvd-callout hvd-callout--nowrap">
                Hiring adds people immediately. Capacity increases gradually.
              </blockquote>
            </div>
            <div className="hvd-question-cards">
              <article className="hvd-question-card">
                <h3>At a certain stage, firms stop asking:</h3>
                <p>&quot;Who do we hire next?&quot;</p>
              </article>
              <div className="hvd-question-arrow" aria-hidden>
                <Image
                  src={questionArrowIcon}
                  alt=""
                  width={54}
                  height={44}
                  className="hvd-question-arrow-img"
                />
              </div>
              <article className="hvd-question-card hvd-question-card--accent">
                <h3>They begin asking:</h3>
                <p className="hvd-question-quote">
                  &quot;Where is our decision-making capacity constrained?&quot;
                </p>
              </article>
            </div>
          </PageContainer>
        </section>

        {/* Before You Add Headcount — Figma 3825:45717 */}
        <section className="hvd-final-cta">
          <PageContainer className="hvd-final-cta-inner">
            <h2>
              Before You Add Headcount,&nbsp;
              <br />
              <span className="hvd-accent">Read The Full Analysis</span>
            </h2>
            <p>
              This executive brief walks through the hiring timeline, hidden workload shifts, and
              structural mismatches without pitching services.
            </p>
            <p className="hvd-final-cta-sub">
              For architecture firm leaders navigating growth pressure.
            </p>
            <PdfCta label="Download the Full PDF Guide" fill />
          </PageContainer>
        </section>

        <GetInTouchSection />
        <SiteFooter />
      </main>
    </>
  );
}

export default HiringVsDedicatedRemoteArchitectView;
