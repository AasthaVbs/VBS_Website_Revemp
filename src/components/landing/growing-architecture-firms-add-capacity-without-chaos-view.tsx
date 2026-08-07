"use client";

import Image from "next/image";

import LandingPdfLeadModal from "@/components/landing/landing-pdf-lead-modal";
import { LandingTopHeader } from "@/components/landing/landing-top-header";
import { PageContainer } from "@/components/layout/page-container";
import { EvaluateDeliveryCtaSection } from "@/components/sections/evaluate-delivery-cta-section";
import { GetInTouchSection } from "@/components/sections/get-in-touch-section";
import { SiteFooter } from "@/components/sections/site-footer";
import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";

import heroImg from "@/assets/images/When-Hiring-Normal 1.jpg";
import reliefImg from "@/assets/images/Why-Adding-People-Doesn\u2019t-Always-Create-Relief 1.jpg";
import capacityDecisionsImg from "@/assets/images/A-Structured-Way-to-Evaluate-Your-Capacity-Decisions 1.jpg";
import hiringImmediateIcon from "@/assets/images/what incrsse immediatley.svg";
import hiringTakesTimeIcon from "@/assets/images/what takes time.svg";
import parallelProjectsIcon from "@/assets/images/parallel projects.svg";
import moreHandoffsIcon from "@/assets/images/more handoffs.svg";
import decisionBacklogIcon from "@/assets/images/decison backlog.svg";
import structuralIssueIcon from "@/assets/images/structural issue.svg";
import reviewTrapIcon from "@/assets/images/gaf-review-trap.svg";
import coordinationPullIcon from "@/assets/images/gaf-coordination-pull.svg";
import decisionRedundancyIcon from "@/assets/images/gaf-decision-redundancy.svg";
import defaultCheckpointIcon from "@/assets/images/gaf-default-checkpoint.svg";
import workflowFitIcon from "@/assets/images/gaf-workflow-fit.svg";
import decisionFlowIcon from "@/assets/images/gaf-decision-flow.svg";
import capacityPathsIcon from "@/assets/images/gaf-capacity-paths.svg";

import "@/styles/growing-architecture-firms-capacity.scss";

const CAPACITY_GUIDE_PDF_URL =
  "https://www.virtualbuildingstudio.com/resources/when-hiring-breaks.pdf?utm_source=LP_CapacityWithoutChaos&utm_medium=LPCTA&utm_campaign=T2TOFU";

const HIRING_IMMEDIATE = [
  "More people working on the same set of drawings",
  "More back-and-forth between team members",
  "More questions coming to senior architects for clarification",
  "More time spent reviewing and correcting work",
] as const;

const HIRING_DELAYED = [
  "New hires' understanding of your drawing standards",
  "Learning how your team coordinates across disciplines",
  "Gaining confidence to make decisions without escalation",
  "Producing work that requires minimal review and correction",
] as const;

const HIRING_CARDS = [
  {
    tag: "What Increases Immediately",
    tagClass: "gaf-hiring-tag--red",
    title: "These costs appear the same day the hire starts",
    items: HIRING_IMMEDIATE,
    icon: hiringImmediateIcon,
  },
  {
    tag: "What Takes Time",
    tagClass: "gaf-hiring-tag--black",
    title: "These benefits take weeks or months to arrive",
    items: HIRING_DELAYED,
    icon: hiringTakesTimeIcon,
  },
] as const;

const RELIEF_ITEMS = [
  "Senior architects are still reviewing drawings late into the evening",
  "Redlines keep coming back on the same sheets across multiple review cycles",
  "Teams wait for decisions because only a few people can approve",
  "New hires need constant guidance before they can move drawings forward",
  "Coordination between teams takes longer than the actual modeling work",
] as const;

const SCALE_CARDS = [
  {
    title: "Parallel Projects",
    text: "Multiple projects run simultaneously, all needing senior attention at once",
    icon: parallelProjectsIcon,
  },
  {
    title: "More Handoffs",
    text: "More people touch the same drawing set, increasing coordination complexity",
    icon: moreHandoffsIcon,
  },
  {
    title: "Decision Backlog",
    text: "Decisions pile up faster than they are made, blocking downstream work",
    icon: decisionBacklogIcon,
  },
  {
    title: "Structural Issue",
    text: "Capacity becomes a question of how clearly work is structured, owned, and reviewed",
    icon: structuralIssueIcon,
  },
] as const;

const IDEA_CARDS = [
  {
    num: "01",
    title: "Clear Ownership",
    text: "When workflows are defined, teams scale smoothly because every member knows exactly where their responsibility ends and the next begins.",
  },
  {
    num: "02",
    title: "The Friction Trap",
    text: "Without structural clarity, every new hire adds more coordination weight and delay, eventually slowing the entire firm down.",
  },
] as const;

const CAPACITY_ITEMS = [
  "Why hiring slows down before it starts helping",
  "The three ways firms add capacity",
  "The trade-offs between different capacity paths",
  "Why some decisions reduce pressure while others increase it",
  "What determines whether any capacity model works",
] as const;

const LEADERSHIP_CARDS = [
  {
    title: "The Review Trap",
    text: "Senior architects stuck reviewing drawings instead of doing high-level design work - the most valuable work they should be leading.",
    icon: reviewTrapIcon,
  },
  {
    title: "Coordination Pull",
    text: "Project leaders pulled away from client management into internal coordination - every meeting that should be external becomes internal instead.",
    icon: coordinationPullIcon,
  },
  {
    title: "Decision Redundancy",
    text: "The same technical decisions being answered repeatedly across different teams - no documented standard, no decision memory across the firm.",
    icon: decisionRedundancyIcon,
  },
  {
    title: "Default Checkpoint",
    text: "Leaders become the manual default checkpoint for every minor drawing update - instead of guiding projects, they are stabilizing them.",
    icon: defaultCheckpointIcon,
  },
] as const;

const ASSESS_CARDS = [
  {
    title: "Workflow fit",
    text: "Whether your current workflow can absorb more people",
    icon: workflowFitIcon,
  },
  {
    title: "Decision flow",
    text: "Where decisions are getting stuck",
    icon: decisionFlowIcon,
  },
  {
    title: "Capacity paths",
    text: "How different capacity options impact control and delivery",
    icon: capacityPathsIcon,
  },
] as const;

function scrollToContact() {
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function GrowingArchitectureFirmsAddCapacityWithoutChaosView() {
  return (
    <>
      <LandingTopHeader fixed />
      <main className="vbs-redesign-page gaf-capacity-page min-h-screen overflow-x-hidden bg-white">
        {/* Hero — Figma 3821:42865 */}
        <section className="gaf-hero">
          <PageContainer className="gaf-hero-inner">
            <div className="gaf-hero-copy">
              <div className="gaf-hero-copy-main">
                <h1>
                  When Hiring Stops Working,{" "}
                  <span className="gaf-accent">What Comes Next?</span>
                </h1>
                <p>
                  As architecture firms grow, hiring more staff alone can&apos;t alleviate capacity
                  pressures. This guide breaks down why and what leaders must look at before making
                  the next capacity decision.
                </p>
              </div>
              <PrimaryCtaButton
                fullWidth={false}
                type="button"
                className="gaf-hero-cta"
                onClick={scrollToContact}
              >
                Rethink Your Capacity Strategy
              </PrimaryCtaButton>
            </div>
            <div className="gaf-hero-media">
              <Image
                src={heroImg}
                alt="Architecture professional under capacity pressure while the team collaborates nearby"
                width={650}
                height={530}
                priority
                sizes="(max-width: 900px) 100vw, 650px"
              />
            </div>
          </PageContainer>
        </section>

        {/* Why Adding People Doesn't Always Create Relief — Figma 3821:42952 */}
        <section className="gaf-relief">
          <PageContainer className="gaf-relief-inner">
            <div className="gaf-section-intro gaf-section-intro--relief">
              <h2>
                Why Adding People Doesn&apos;t{" "}
                <span className="gaf-accent">Always&nbsp;Create Relief</span>
              </h2>
              <p>
                You are hiring more, but capacity still feels tight. Over time, patterns start to show
                up in day-to-day delivery.
              </p>
            </div>
            <div className="gaf-relief-body">
              <div className="gaf-relief-media">
                <Image
                  src={reliefImg}
                  alt="Capacity pressures converging on firm leadership"
                  width={568}
                  height={455}
                  sizes="(max-width: 900px) 100vw, 568px"
                />
              </div>
              <div className="gaf-relief-copy">
                <ul className="gaf-divided-list">
                  {RELIEF_ITEMS.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <blockquote className="gaf-callout">
                  “At first, this feels like a temporary gap. Eventually, it starts to feel like
                  something deeper is not working.”
                </blockquote>
              </div>
            </div>
          </PageContainer>
        </section>

        {/* How Scale Quietly Reshapes Delivery — Figma 3821:42876 */}
        <section className="gaf-scale">
          <PageContainer className="gaf-scale-inner">
            <div className="gaf-section-intro">
              <h2>
                How&nbsp;Scale&nbsp;Quietly{" "}
                <span className="gaf-accent">Reshapes&nbsp;Delivery</span>
              </h2>
              <p>
                This is not about hiring the wrong people. It happens because the way work flows
                through the firm changes.
              </p>
            </div>
            <div className="gaf-scale-body">
              <div className="gaf-scale-grid">
                {SCALE_CARDS.map((card) => (
                  <article key={card.title} className="gaf-scale-card">
                    <div className="gaf-icon-box">
                      <Image src={card.icon} alt="" width={46} height={46} />
                    </div>
                    <div className="gaf-scale-card-text">
                      <h3>{card.title}</h3>
                      <p>{card.text}</p>
                    </div>
                  </article>
                ))}
              </div>
              <blockquote className="gaf-callout">
                At first, it doesn&apos;t look like a system problem. But over time, it becomes
                impossible to ignore.
              </blockquote>
            </div>
          </PageContainer>
        </section>

        {/* The Idea Most Firms Miss — Figma 3821:43003 */}
        <section className="gaf-idea">
          <PageContainer className="gaf-idea-inner">
            <div className="gaf-idea-copy">
              <div className="gaf-section-intro">
                <h2>
                  The Idea Most <span className="gaf-accent">Firms&nbsp;Miss</span>
                </h2>
                <p>
                  Capacity problems are not just about headcount. Most firms respond to pressure by
                  adding people. But capacity does not improve unless the system around those people
                  is clear.
                </p>
              </div>
              <blockquote className="gaf-callout">
                “When ownership, workflow, and reviews are clear, teams scale smoothly.
                <br />
                When they are not, every new hire adds more coordination and delay.”
              </blockquote>
            </div>
            <div className="gaf-idea-cards">
              {IDEA_CARDS.map((card) => (
                <article key={card.num} className="gaf-idea-card">
                  <span className="gaf-idea-num">{card.num}</span>
                  <div className="gaf-idea-card-text">
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </PageContainer>
        </section>

        {/* A Structured Way to Evaluate Your Capacity Decisions — Figma 3821:44050 */}
        <section className="gaf-evaluate">
          <PageContainer className="gaf-evaluate-inner">
            <div className="gaf-section-intro gaf-section-intro--evaluate">
              <h2>
                A Structured Way to Evaluate{" "}
                <span className="gaf-accent">Your&nbsp;Capacity Decisions</span>
              </h2>
              <p>
                This guide breaks down how growing firms think about capacity. It is designed to help
                leadership evaluate, not react.
              </p>
            </div>
            <div className="gaf-evaluate-body">
              <div className="gaf-evaluate-media">
                <Image
                  src={capacityDecisionsImg}
                  alt="When Hiring Breaks guide covering capacity paths and trade-offs"
                  width={710}
                  height={505}
                  sizes="(max-width: 900px) 100vw, 710px"
                />
              </div>
              <div className="gaf-evaluate-copy">
                <ul className="gaf-divided-list">
                  {CAPACITY_ITEMS.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <blockquote className="gaf-callout">
                  “Walk through these themes with your leadership team before you default to another
                  hire or vendor.”
                </blockquote>
              </div>
            </div>
          </PageContainer>
        </section>

        {/* What Really Happens On Live Projects — Figma 3821:44085 */}
        <section className="gaf-live">
          <PageContainer className="gaf-live-inner">
            <div className="gaf-section-intro gaf-section-intro--live">
              <h2>
                What Really Happens On Live Projects
                <span className="gaf-accent"> When You&nbsp;Add People</span>
              </h2>
              <p>
                Hiring feels like the most direct solution. But it changes the system immediately in
                ways that can increase pressure before reducing it.
              </p>
            </div>
            <div className="gaf-live-body">
              <div className="gaf-hiring-grid">
                {HIRING_CARDS.map((card) => (
                  <article key={card.tag} className="gaf-hiring-card">
                    <div className="gaf-hiring-card-top">
                      <span className={`gaf-hiring-tag ${card.tagClass}`}>{card.tag}</span>
                      <div className="gaf-icon-box gaf-hiring-icon" aria-hidden>
                        <Image src={card.icon} alt="" width={46} height={46} />
                      </div>
                    </div>
                    <div className="gaf-hiring-card-body">
                      <h3>{card.title}</h3>
                      <ul className="gaf-hiring-card-list">
                        {card.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </article>
                ))}
              </div>
              <blockquote className="gaf-callout">
                “Capacity improves slowly. Coordination effort increases right away. That gap is
                exactly where the pressure comes from and why adding headcount often makes things feel
                worse before they feel better.”
              </blockquote>
            </div>
          </PageContainer>
        </section>

        {/* This Is Where Leadership Starts Feeling It The Most — Figma 3821:44141 */}
        <section className="gaf-leadership">
          <PageContainer className="gaf-leadership-inner">
            <h2 className="gaf-leadership-title">
              This Is Where Leadership{" "}
              <span className="gaf-accent">Starts Feeling It&nbsp;The Most</span>
            </h2>
            <div className="gaf-leadership-body">
              <div className="gaf-leadership-grid">
                {LEADERSHIP_CARDS.map((card) => (
                  <article key={card.title} className="gaf-scale-card">
                    <div className="gaf-icon-box">
                      <Image src={card.icon} alt="" width={46} height={46} />
                    </div>
                    <div className="gaf-scale-card-text">
                      <h3>{card.title}</h3>
                      <p>{card.text}</p>
                    </div>
                  </article>
                ))}
              </div>
              <blockquote className="gaf-callout">
                “Instead of guiding projects, they are stabilizing them. That shift is usually
                the&nbsp;first sign that capacity is not scaling properly.”
              </blockquote>
            </div>
          </PageContainer>
        </section>

        {/* This guide helps you assess — Figma 3821:44232 */}
        <section className="gaf-assess">
          <PageContainer className="gaf-assess-inner">
            <h2 className="gaf-assess-title">This guide helps you assess:</h2>
            <div className="gaf-assess-body">
              <div className="gaf-assess-cards">
                {ASSESS_CARDS.map((card) => (
                  <article key={card.title} className="gaf-assess-card">
                    <div className="gaf-icon-box">
                      <Image src={card.icon} alt="" width={46} height={46} />
                    </div>
                    <div className="gaf-assess-card-text">
                      <h3>{card.title}</h3>
                      <p>{card.text}</p>
                    </div>
                  </article>
                ))}
              </div>
              <p className="gaf-assess-quote">
                “Make your next capacity decision with structure, not urgency.”
              </p>
              <LandingPdfLeadModal
                title="When Hiring Breaks — Capacity Decision Guide"
                downloadUrl={CAPACITY_GUIDE_PDF_URL}
                trigger={(
                  <PrimaryCtaButton fullWidth={false} className="gaf-cta-fill">
                    Download the Capacity Decision Guide
                  </PrimaryCtaButton>
                )}
              />
            </div>
          </PageContainer>
        </section>

        <EvaluateDeliveryCtaSection
          title={
            <>
              Before Your Next Hire,{" "}
              <span className="font-light">Rethink Capacity</span>
            </>
          }
          titleClassName="!max-w-[720px]"
          description="Talk through where delivery pressure is building and what to evaluate before defaulting to another hire."
          descriptionClassName="!max-w-[662px]"
          ctaLabel="Rethink Your Capacity Strategy"
          ctaElement={
            <PrimaryCtaButton fullWidth={false} type="button" onClick={scrollToContact}>
              Rethink Your Capacity Strategy
            </PrimaryCtaButton>
          }
        />

        <GetInTouchSection />
        <SiteFooter />
      </main>
    </>
  );
}

export default GrowingArchitectureFirmsAddCapacityWithoutChaosView;
