"use client";

import type { MouseEvent, ReactNode } from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";

import { PageContainer } from "@/components/layout/page-container";
import LandingPdfLeadModal from "@/components/landing/landing-pdf-lead-modal";
import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";
const docThatScaleBanner = encodeURI("/image/doc-that-scale-banner2-51091e21237ec5127e2b77f5b3544fe5 1.jpg");
const gapEarlyStageImg = "/image/Rectangle.jpg";
const gapGrowthStageImg = "/image/Rectangle-1.jpg";
const patternReviewIcon = "/image/doc-pattern-review.svg";
const patternSeniorIcon = "/image/doc-pattern-senior.svg";
const patternRfiIcon = "/image/doc-pattern-rfi.svg";
const patternCoordIcon = "/image/doc-pattern-coord.svg";
const whyInformalIcon = encodeURI("/image/why informal doc.svg");
const projectsOverlapIcon = encodeURI("/image/what chnages as projects overlap.svg");
const hiringShiftsIcon = "/image/doc-guide-hiring.svg";
const coordinationConstraintIcon = encodeURI("/image/when cooridnation becomes the constriant.svg");
const whatScalesIcon = encodeURI("/image/what scales.svg");
const whereFirmsStallIcon = encodeURI("/image/where firms stall.svg");
const whatIncreasesIcon = encodeURI("/image/what incrsse immediatley.svg");
const whatTakesTimeIcon = encodeURI("/image/what takes time.svg");
const hiringVisualImg = encodeURI("/image/Why Adding More People-14dbcead4e7967eec43cd3c47c04c0dc 1.jpg");
const growthStageImg = encodeURI("/image/what-changes-during-growth-stage1-e901522dccbd79a553dd90077f5d41ef 1.jpg");
const breakStandardsIcon = "/image/doc-break-standards.svg";
const breakToolsIcon = "/image/doc-break-tools.svg";
const breakReviewsIcon = "/image/doc-break-reviews.svg";
const breakSeniorsIcon = "/image/doc-break-seniors.svg";

const SCALE_SYSTEM_PDF_URL =
  "https://www.virtualbuildingstudio.com/resources/documentation-systems-that-scale.pdf?utm_source=LP_DocSystems&utm_medium=LPCTA&utm_campaign=T2TOFU";

type IconSrc = string | StaticImageData;

const PATTERN_CARDS: { text: string; icon: IconSrc }[] = [
  {
    text: "Review cycles that used to take days now take weeks",
    icon: patternReviewIcon,
  },
  {
    text: "Senior architects are still reviewing almost every drawing set",
    icon: patternSeniorIcon,
  },
  {
    text: "RFIs keep increasing-even after hiring more staff",
    icon: patternRfiIcon,
  },
  {
    text: "Coordination gets heavier, not lighter, across projects",
    icon: patternCoordIcon,
  },
];

const GUIDE_CARDS_ROW1: { title: string; text: string; icon: IconSrc }[] = [
  {
    title: "Why Informal Documentation Worked",
    text: "Why informal documentation worked reliably at smaller scale and when that changes.",
    icon: whyInformalIcon,
  },
  {
    title: "What Changes as Projects Overlap",
    text: "What changes as project concurrency increases and overlap grows across teams.",
    icon: projectsOverlapIcon,
  },
  {
    title: "Why Hiring Shifts the Load",
    text: "Why hiring shifts the problem instead of solving itâ€”and what to do instead.",
    icon: hiringShiftsIcon,
  },
];

const GUIDE_CARDS_ROW2: { title: string; text: string; icon: IconSrc }[] = [
  {
    title: "When Coordination Becomes the Constraint",
    text: "Where coordination becomes the constraintâ€”not raw headcount or project volume.",
    icon: coordinationConstraintIcon,
  },
  {
    title: "What Scales",
    text: "What scalable firms have in common, and why it's usually a patternâ€”not a talentâ€”problem.",
    icon: whatScalesIcon,
  },
  {
    title: "Where Firms Stall",
    text: "Where growing firms typically get stuck before systems catch up with their delivery demands.",
    icon: whereFirmsStallIcon,
  },
];

const EARLY_STAGE_POINTS = [
  "Few projects",
  "Shared context",
  "Fast decisions",
  "Stable documentation",
  "Implicit knowledge",
  "Quick clarifications",
] as const;

const GROWTH_STAGE_POINTS = [
  "Multiple concurrent projects",
  "Distributed context",
  "Queued decisions",
  "Fragmented documentation",
  "Explicit coordination needed",
  "Asynchronous clarification",
] as const;

const HIRING_INCREASES = [
  "Contributors to each documentation set",
  "Coordination paths between team members",
  "Review load as seniors oversee new staff",
] as const;

const HIRING_TAKES_TIME = [
  "Knowledge transfer about firm standards and client nuances",
  "Alignment on coordination conventions",
  "Independent decision-making without senior validation",
] as const;

const GROWTH_CHANGE_POINTS = [
  "More projects run in parallel",
  "More handoffs happen across teams",
  "More decisions require coordination",
] as const;

const SENIOR_TIME_POINTS = [
  "More time spent reviewing across multiple projects",
  "Less time for design leadership and strategic work",
  "Constant involvement in coordination decisions",
] as const;

function PointList({
  items,
  variant = "plain",
}: {
  items: readonly string[];
  variant?: "plain" | "spaced";
}) {
  return (
    <ul
      className={
        variant === "spaced"
          ? "doc-figma-point-list doc-figma-point-list--spaced"
          : "doc-figma-point-list"
      }
    >
      {items.map((item) => (
        <li key={item}>
          <span className="doc-figma-point-list__bullet" aria-hidden>
            •
          </span>
          <span className="doc-figma-point-list__text">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function GapCheckIcon({ variant }: { variant: "red" | "green" }) {
  return (
    <span className={`doc-figma-gap__check doc-figma-gap__check--${variant}`} aria-hidden>
      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
        <path
          d="M1 4.2 3.6 6.8 9 1.2"
          stroke="#fff"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

const BREAKING_CARDS_ROW1: { title: string; text: string; icon: IconSrc }[] = [
  {
    title: "Standards Exist-But Fade",
    text: "Documentation templates and checklists launch with commitment, then quietly lose consistency as enforcement weakens.",
    icon: breakStandardsIcon,
  },
  {
    title: "Tools Add Visibility, Not Clarity",
    text: "BIM coordination platforms and PM systems get implemented, but adoption stays incomplete.",
    icon: breakToolsIcon,
  },
];

const BREAKING_CARDS_ROW2: { title: string; text: string; icon: IconSrc }[] = [
  {
    title: "More Reviews, Slower Decisions",
    text: "Additional review layers expand approval cycles without improving outcomes proportionally.",
    icon: breakReviewsIcon,
  },
  {
    title: "Seniors Become the Default Safety Net",
    text: "Partial delegation leaves principals as permanent fallback points instead of true decision-makers.",
    icon: breakSeniorsIcon,
  },
];

function IconBox({ src, alt }: { src: IconSrc; alt: string }) {
  return (
    <div className="doc-figma-icon-box">
      <Image src={src} alt={alt} width={46} height={46} className="doc-figma-icon-box__img" />
    </div>
  );
}

function Callout({ children }: { children: ReactNode }) {
  return (
    <div className="doc-figma-callout">
      <p className="doc-figma-callout__text">{children}</p>
    </div>
  );
}

type DocSystemsFigmaSectionsProps = {
  onSeeSlowing?: (e: MouseEvent) => void;
};

/** Figma redesign sections for Documentation Systems That Scale LP (nodes 3811+). */
export function DocSystemsFigmaSections({ onSeeSlowing }: DocSystemsFigmaSectionsProps) {
  return (
    <div className="doc-figma-lp" style={{ ["--vbs-page-max" as string]: "1440px" }}>
      {/* Hero â€” Figma 3811:42404 */}
      <section className="doc-figma-hero">
        <PageContainer className="doc-figma-hero__inner">
          <div className="doc-figma-hero__copy">
            <div className="doc-figma-hero__copy-text">
              <h1 className="doc-figma-title doc-figma-title--hero">
                Why Delivery Starts Slowing Down as{" "}
                <span className="text-accent">Architecture Firms Grow</span>
              </h1>
              <p className="doc-figma-desc doc-figma-hero__desc">
                As firms grow, review cycles expand, coordination gets heavier, and senior architects stay stuck in documentation longer than expected-despite hiring.
              </p>
            </div>
            <div className="doc-figma-hero__ctas">
              <LandingPdfLeadModal
                title="Documentation Systems That Scale"
                downloadUrl={SCALE_SYSTEM_PDF_URL}
                trigger={(
                  <PrimaryCtaButton fullWidth={false} className="doc-figma-cta-fill">
                    Download The Guide
                  </PrimaryCtaButton>
                )}
              />
              <PrimaryCtaButton fullWidth={false} className="doc-figma-cta-outline" onClick={onSeeSlowing}>
                See What&apos;s Slowing Your Delivery
              </PrimaryCtaButton>
            </div>
          </div>
          <div className="doc-figma-hero__media">
            <Image
              src={docThatScaleBanner}
              alt="Architects reviewing documentation and project drawings"
              width={650}
              height={530}
              priority
              className="doc-figma-hero__img"
              sizes="(max-width: 1024px) 100vw, 650px"
            />
          </div>
        </PageContainer>
      </section>

      {/* Pattern â€” Figma 3811:43223 */}
      <section className="doc-figma-pattern">
        <PageContainer className="doc-figma-stack doc-figma-stack--60">
          <div className="doc-figma-stack doc-figma-stack--20">
            <h2 className="doc-figma-title" style={{ maxWidth: 696 }}>
              The Pattern Most Architecture <span className="text-accent">Firms Experience</span>
            </h2>
            <p className="doc-figma-desc">
              You&apos;re running more projects than before-but delivery feels slower.
            </p>
          </div>
          <div className="doc-figma-stack doc-figma-stack--20">
            <p className="doc-figma-desc">The pattern starts showing up:</p>
            <div className="doc-figma-pattern__grid">
              {PATTERN_CARDS.map((card) => (
                <article key={card.text} className="doc-figma-card doc-figma-card--center">
                  <IconBox src={card.icon} alt="" />
                  <p className="doc-figma-desc doc-figma-card__center-text">{card.text}</p>
                </article>
              ))}
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Growth Stage â€” Figma 3869:49781 */}
      <section className="doc-figma-growth">
        <PageContainer className="doc-figma-stack doc-figma-stack--60">
          <div className="doc-figma-stack doc-figma-stack--20">
            <h2 className="doc-figma-title">
              What Changes <span className="text-accent">During Growth Stage</span>
            </h2>
            <p className="doc-figma-desc">
              This isn&apos;t about performance. It happens because the structure of delivery changes as firms grow.
            </p>
            <PointList items={GROWTH_CHANGE_POINTS} />
          </div>
          <div className="doc-figma-stack doc-figma-stack--20">
            <Image
              src={growthStageImg}
              alt="What changes during growth stage"
              className="doc-figma-growth__img"
              width={1440}
              height={626}
              sizes="100vw"
            />
            <Callout>&quot;Growth increases interdependence-not just workload.&quot;</Callout>
          </div>
        </PageContainer>
      </section>

      {/* Documentation Gap â€” Figma 3869:49796 */}
      <section className="doc-figma-gap">
        <PageContainer className="doc-figma-stack doc-figma-stack--60">
          <div className="doc-figma-gap__header">
            <h2 className="doc-figma-title doc-figma-gap__title">
              Visualizing The <span className="text-accent">Documentation Gap</span>
            </h2>
            <div className="doc-figma-gap__header-row">
              <div className="doc-figma-stack doc-figma-stack--20 doc-figma-gap__intro">
                <p className="doc-figma-desc">
                  As firms grow, coordination expands faster than clarity.
                </p>
                <p className="doc-figma-gap__stage-label">Early Stage --&gt; Growth Stage</p>
              </div>
              <Callout>The Gap: Coordination points multiply faster than capacity expands</Callout>
            </div>
          </div>

          <div className="doc-figma-gap__compare">
            <article className="doc-figma-gap__card">
              <Image
                src={gapEarlyStageImg}
                alt="Early stage architecture team"
                width={471}
                height={340}
                className="doc-figma-gap__card-img"
                sizes="(max-width: 768px) 100vw, 471px"
              />
              <div className="doc-figma-gap__card-body">
                <h3 className="doc-figma-gap__card-title">Early Stage</h3>
                <ul className="doc-figma-gap__points">
                  {EARLY_STAGE_POINTS.map((point) => (
                    <li key={point}>
                      <GapCheckIcon variant="red" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            <div className="doc-figma-gap__arrow" aria-hidden>
              <svg width="120" height="48" viewBox="0 0 120 48" fill="none">
                <path
                  d="M4 24h88M78 8l30 16-30 16"
                  stroke="url(#docFigmaGapArrow)"
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <defs>
                  <linearGradient id="docFigmaGapArrow" x1="0" y1="24" x2="120" y2="24">
                    <stop stopColor="#D50F25" />
                    <stop offset="1" stopColor="#870A17" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <article className="doc-figma-gap__card">
              <Image
                src={gapGrowthStageImg}
                alt="Growth stage architecture office"
                width={471}
                height={340}
                className="doc-figma-gap__card-img"
                sizes="(max-width: 768px) 100vw, 471px"
              />
              <div className="doc-figma-gap__card-body">
                <h3 className="doc-figma-gap__card-title">Growth Stage</h3>
                <ul className="doc-figma-gap__points">
                  {GROWTH_STAGE_POINTS.map((point) => (
                    <li key={point}>
                      <GapCheckIcon variant="green" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </div>
        </PageContainer>
      </section>

      {/* What This Guide Helps You See â€” Figma 3869:51366 */}
      <section id="what-guide" className="doc-figma-guide scroll-margin">
        <PageContainer className="doc-figma-stack doc-figma-stack--60">
          <div className="doc-figma-stack doc-figma-stack--20">
            <h2 className="doc-figma-title">
              What This Guide <span className="text-accent">Helps You See</span>
            </h2>
            <p className="doc-figma-desc">
              This guide breaks down why delivery starts slowing down-and where documentation begins to become the constraint.
            </p>
          </div>
          <div className="doc-figma-stack doc-figma-stack--20">
            <div className="doc-figma-guide__row">
              {GUIDE_CARDS_ROW1.map((card) => (
                <article key={card.title} className="doc-figma-card doc-figma-card--stretch">
                  <IconBox src={card.icon} alt="" />
                  <div className="doc-figma-guide__card-text">
                    <h3 className="doc-figma-card-title">{card.title}</h3>
                    <p className="doc-figma-desc">{card.text}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="doc-figma-guide__row">
              {GUIDE_CARDS_ROW2.map((card) => (
                <article key={card.title} className="doc-figma-card doc-figma-card--stretch">
                  <IconBox src={card.icon} alt="" />
                  <div className="doc-figma-guide__card-text">
                    <h3 className="doc-figma-card-title">{card.title}</h3>
                    <p className="doc-figma-desc">{card.text}</p>
                  </div>
                </article>
              ))}
            </div>
            <Callout>
              Hiring doesn&apos;t remove delivery pressure it redistributes it across the system.
            </Callout>
          </div>
        </PageContainer>
      </section>

      {/* Why Adding More People Doesn't Fix It â€” Figma 3869:51551 */}
      <section className="doc-figma-hiring">
        <PageContainer className="doc-figma-stack doc-figma-stack--60">
          <div className="doc-figma-hiring__intro">
            <h2 className="doc-figma-title">
              Why Adding More People <span className="text-accent">Doesn&apos;t Fix It</span>
            </h2>
            <p className="doc-figma-desc">
              When delivery starts slowing down, hiring feels like the obvious fix. But adding people changes the system in ways that aren&apos;t immediately visible.
            </p>
          </div>
          <div className="doc-figma-hiring__grid">
            <div className="doc-figma-hiring__cards">
              <article className="doc-figma-card">
                <IconBox src={whatIncreasesIcon} alt="" />
                <div className="doc-figma-guide__card-text">
                  <h3 className="doc-figma-card-title">What increases immediately</h3>
                  <PointList items={HIRING_INCREASES} />
                </div>
              </article>
              <article className="doc-figma-card">
                <IconBox src={whatTakesTimeIcon} alt="" />
                <div className="doc-figma-guide__card-text">
                  <h3 className="doc-figma-card-title">What takes time</h3>
                  <PointList items={HIRING_TAKES_TIME} />
                </div>
              </article>
            </div>
            <div className="doc-figma-hiring__visual">
              <Image
                src={hiringVisualImg}
                alt="Adding people increases coordination overhead"
                className="doc-figma-hiring__img"
                width={795}
                height={516}
                sizes="(max-width: 1100px) 100vw, 55vw"
              />
            </div>
          </div>
        </PageContainer>
      </section>

      {/* The Shift in Senior Time â€” Figma 3869:51949 */}
      <section className="doc-figma-senior">
        <PageContainer className="doc-figma-senior__inner">
          <div className="doc-figma-stack doc-figma-stack--20 doc-figma-senior__left">
            <h2 className="doc-figma-title">
              The Shift in <span className="text-accent">Senior Time</span>
            </h2>
            <p className="doc-figma-desc">
              Principals and project directors are the first to feel it.
            </p>
          </div>
          <div className="doc-figma-senior__right">
            <PointList items={SENIOR_TIME_POINTS} variant="spaced" />
            <Callout>
              Leadership time shifts from shaping projects to stabilizing delivery.
            </Callout>
          </div>
        </PageContainer>
      </section>

      {/* Where It Starts Breaking â€” Figma 3869:52128 */}
      <section id="doc-breaking" className="doc-figma-breaking scroll-margin">
        <PageContainer className="doc-figma-stack doc-figma-stack--60">
          <h2 className="doc-figma-title">
            Where It Starts <span className="text-accent">Breaking</span>
          </h2>
          <div className="doc-figma-stack doc-figma-stack--20">
            <div className="doc-figma-breaking__row">
              {BREAKING_CARDS_ROW1.map((card) => (
                <article key={card.title} className="doc-figma-card doc-figma-card--stretch">
                  <IconBox src={card.icon} alt="" />
                  <div className="doc-figma-guide__card-text">
                    <h3 className="doc-figma-card-title">{card.title}</h3>
                    <p className="doc-figma-desc">{card.text}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="doc-figma-breaking__row">
              {BREAKING_CARDS_ROW2.map((card) => (
                <article key={card.title} className="doc-figma-card doc-figma-card--stretch">
                  <IconBox src={card.icon} alt="" />
                  <div className="doc-figma-guide__card-text">
                    <h3 className="doc-figma-card-title">{card.title}</h3>
                    <p className="doc-figma-desc">{card.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Final CTA â€” Figma 3869:52261 */}
      <section id="doc-cta" className="doc-figma-final-cta scroll-margin">
        <PageContainer className="doc-figma-final-cta__inner">
          <div className="doc-figma-final-cta__copy">
            <h2 className="doc-figma-title doc-figma-final-cta__title">
              Before You Hire Again, See{" "}
              <span className="text-accent">What&apos;s Slowing Your Delivery</span>
            </h2>
            <p className="doc-figma-desc doc-figma-final-cta__desc">
              Understand what&apos;s actually slowing your projects before adding more people or restructuring your team.
            </p>
            <LandingPdfLeadModal
              title="Documentation Systems That Scale"
              downloadUrl={SCALE_SYSTEM_PDF_URL}
              trigger={(
                <PrimaryCtaButton fullWidth={false} className="doc-figma-cta-fill">
                  See Where Your Delivery is Breaking
                </PrimaryCtaButton>
              )}
            />
          </div>
        </PageContainer>
      </section>
    </div>
  );
}
