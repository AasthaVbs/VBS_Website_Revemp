"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { LandingTopHeader } from "@/components/landing/landing-top-header";
import { PageContainer } from "@/components/layout/page-container";
import { GetInTouchSection } from "@/components/sections/get-in-touch-section";
import { SiteFooter } from "@/components/sections/site-footer";
import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";
import "@/styles/delivery-capacity-in-architecture-firms.scss";

const heroImg = "/image/delivery-capacity-hero.png";
const productionIcon = "/image/dc-production.svg";
const coordinationIcon = "/image/dc-coordination.svg";
const controlIcon = "/image/dc-control.svg";


const FAMILIAR_SIGNALS = [
  "You've added staff, yet deadlines still feel compressed, and fire drills are the norm.",
  "Drawing sets require significantly more internal coordination than they did two years ago.",
  "Senior Architects are still redlining sets late into the evening because they don't trust the output.",
  "Projects overlap, but clarity around who owns specific delivery outcomes feels weaker.",
  "Despite team growth, the volume of RFIs and avoidable revisions hasn't dropped.",
] as const;

const BREAK_CARDS = [
  {
    title: "Production",
    icon: productionIcon,
    text: "Where schematic designs, design developments, CD sets, and permit submissions are built and advanced.",
    breaks: "Output slows, redlines repeat, or staff lacks markup direction.",
  },
  {
    title: "Coordination",
    icon: coordinationIcon,
    text: "The information layer connecting project architects, consultants, and phase gates.",
    breaks: "RFI loops, submittal handoffs, or internal markups lose context.",
  },
  {
    title: "Control",
    icon: controlIcon,
    text: "Where principals and project managers review, redline, and sign off on deliverables.",
    breaks: "QA bottlenecks form, or principals get pulled back into CD-level work.",
  },
] as const;

/** Resource hub — same copy/images as Gatsby; hrefs point to working Main destinations */
const RESOURCE_CARDS = [
  {
    title: "When Hiring Breaks",
    subtitle: "System-level approach to capacity in growing architecture firms",
    body: "Learn how production, coordination, and control layers interact and why adding staff alone often fails.",
    href: "/landing/growing-architecture-firms-add-capacity-without-chaos/",
    cta: "Read the Capacity Guide",
    image: "/image/When-Hiring-Breaks.jpg",
    imageAlt: "When hiring breaks capacity guide",
  },
  {
    title: "Dedicated Remote Architect vs Freelancer vs Full-Time Hire",
    subtitle: "A System-Based Capacity Decision Matrix",
    body: "Compare dedicated remote teams, freelancers, and full-time hires across coordination, QA, scalability, and operational control.",
    href: "/landing/dedicated-remote-architect-vs-freelancer-vs-full-time/",
    cta: "Explore the Comparison Matrix",
    image: "/image/Dedicated-Remote-Architect-vs-Freelancer-vs-Full-Time-Hire.jpg",
    imageAlt: "Dedicated remote architect vs freelancer vs full-time hire comparison",
  },
  {
    title: "How Mid-Size Firms Stabilize Delivery",
    subtitle: "A detailed guide to fix your Capacity System",
    body: "Read the real-world case study showing how a growing firm identified system breakdowns, restructured delivery, and restored predictability.",
    href: "/landing/why-growing-architecture-firms-hit-documentation-wall/",
    cta: "Read the Case Study",
    image: "/image/How-Mid-Size-Architecture-Firms-Stabilize-Documentation-During-Growth-Spurts.jpg",
    imageAlt: "Case study resource preview",
  },
  {
    title: "Why Senior Architects Become Bottlenecks",
    subtitle:
      "A comprehensive webinar to understand what your bottlenecks reveal about your delivery system",
    body: "Watch the on-demand session unpacking why review layers fail under growth and why hiring more staff doesn't remove leadership bottlenecks.",
    href: "/landing/documentation-system-that-scale/",
    cta: "Watch the Webinar",
    image: "/image/How Architecture Firms Avoid Burning Out Their Senior Team0.jpg",
    imageAlt: "Webinar resource preview",
  },
  {
    title: "Architecture Delivery Capacity System Diagnostic Worksheet",
    subtitle: "A self-diagnosis comparison sheet",
    body: "Evaluate your current capacity system across production, coordination, and control and determine your next step.",
    href: "/pipeline-health-diagnostic/",
    cta: "Start the Capacity Diagnostic",
    image: "/image/A-Structured-Way-to-Evaluate-Your-Capacity-Decisions.jpg",
    imageAlt: "Diagnostic worksheet resource preview",
  },
  {
    title: "Delivery Planning Checklist for Growing Teams",
    subtitle: "A practical readiness checklist before scaling capacity",
    body: "Use this checklist to align production, coordination, and QA expectations before committing to your next delivery model.",
    href: "/landing/dedicated-remote-architect-vs-freelancer-vs-full-time/",
    cta: "Use the Planning Checklist",
    image: "/image/Architectural-BIM-services.jpg",
    imageAlt: "Delivery planning checklist resource preview",
  },
] as const;

const RETHINK_SIGNALS = [
  "Hiring has not reduced delivery pressure after multiple project cycles.",
  "Senior review time continues to increase despite team growth.",
  "Coordination across overlapping projects is beginning to affect deadlines.",
  "Principals remain involved deeper into documentation phases than they should be.",
] as const;

export function DeliveryCapacityInArchitectureFirmsView() {
  const resourcesRef = useRef<HTMLElement | null>(null);

  const scrollToResources = () => {
    resourcesRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <LandingTopHeader fixed />
      <main className="vbs-redesign-page dc-page min-h-screen overflow-x-hidden bg-white">
        {/* Hero — Figma 3825:46925 */}
        <section className="dc-hero">
          <PageContainer className="dc-hero-inner">
            <div className="dc-hero-copy">
              <div className="dc-hero-copy-main">
                <h1>
                  Where Delivery Capacity Actually Breaks in{" "}
                  <span className="dc-accent">Growing Architecture Firms</span>
                </h1>
                <p>
                  If drawing sets are moving through more hands but still requiring more revisions,
                  the issue is not just staffing -{" "}
                  <span className="dc-hero-em">it&apos;s how delivery is structured.</span>
                </p>
                <p>
                  We bring together practical tools used by growing architecture firms to evaluate
                  capacity decisions before making their next hire.
                </p>
              </div>
              <PrimaryCtaButton
                fullWidth={false}
                type="button"
                className="dc-hero-cta"
                onClick={scrollToResources}
              >
                Explore Resources
              </PrimaryCtaButton>
            </div>
            <div className="dc-hero-media">
              <Image
                src={heroImg}
                alt="Architecture team reviewing plans under delivery capacity pressure"
                width={650}
                height={460}
                priority
                sizes="(max-width: 900px) 100vw, 650px"
              />
            </div>
          </PageContainer>
        </section>

        {/* If This Sounds Familiar — Figma 3841:48213 */}
        <section className="dc-familiar">
          <PageContainer className="dc-familiar-inner">
            <div className="dc-familiar-copy">
              <h2>
                If This Sounds Familiar, You&apos;re{" "}
                <span className="dc-accent">Likely&nbsp;Managing Capacity Strain</span>
              </h2>
              <p>
                Adding headcount is a logical response to growth, but in growing architecture firms,
                more people often add more complexity. Are you seeing these signals?
              </p>
              <PrimaryCtaButton
                fullWidth={false}
                type="button"
                className="dc-familiar-cta"
                onClick={scrollToResources}
              >
                See How Firms Like Yours Stabilized Delivery
              </PrimaryCtaButton>
            </div>
            <ol className="dc-signal-list">
              {FAMILIAR_SIGNALS.map((text, i) => (
                <li key={text}>
                  <span className="dc-signal-num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="dc-signal-text">{text}</span>
                </li>
              ))}
            </ol>
          </PageContainer>
        </section>

        {/* Where Capacity Actually Breaks — Figma 3825:46987 */}
        <section className="dc-breaks">
          <PageContainer className="dc-breaks-inner">
            <div className="dc-breaks-header">
              <h2>
                Where Capacity Actually&nbsp;
                <br />
                <span className="dc-accent">Breaks Inside Delivery</span>
              </h2>
              <p>
                Most growing firms try to solve capacity issues at the surface level by adding
                people. But delivery strain usually builds deeper inside the system.
              </p>
            </div>
            <div className="dc-breaks-grid">
              {BREAK_CARDS.map((card) => (
                <article key={card.title} className="dc-breaks-card">
                  <div className="dc-icon-box">
                    <Image src={card.icon} alt="" width={46} height={46} />
                  </div>
                  <div className="dc-breaks-card-text">
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                  </div>
                  <div className="dc-breaks-callout">
                    <div className="dc-breaks-callout-title">Where it breaks</div>
                    <p>{card.breaks}</p>
                  </div>
                </article>
              ))}
            </div>
          </PageContainer>
        </section>

        {/* Evaluate Your Capacity Decisions — Figma 3841:47832 */}
        <section className="dc-resources" ref={resourcesRef} id="resources">
          <PageContainer className="dc-resources-inner">
            <div className="dc-resources-header">
              <h2>
                Evaluate Your Capacity{" "}
                <span className="dc-accent">Decisions Step by Step</span>
              </h2>
              <p>
                The resources here are organized as decision steps. Each one addresses a specific
                point in how architecture firms evaluate, compare, and resolve capacity challenges.
                Use them in sequence or start where your firm&apos;s pressure is most visible.
              </p>
            </div>
            <div className="dc-resources-grid">
              {RESOURCE_CARDS.map((card) => (
                <Link
                  key={card.title}
                  href={card.href}
                  className="dc-resource-card"
                  aria-label={`${card.cta}: ${card.title}`}
                >
                  <div className="dc-resource-media">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={card.image} alt={card.imageAlt} loading="lazy" decoding="async" />
                  </div>
                  <div className="dc-resource-body">
                    <h3>{card.title}</h3>
                    <p className="dc-resource-subtitle">{card.subtitle}</p>
                    <p>{card.body}</p>
                    <span className="dc-resource-link">{card.cta}</span>
                  </div>
                </Link>
              ))}
            </div>
          </PageContainer>
        </section>

        {/* Most Firms Rethink Capacity — Figma 3841:47897 */}
        <section className="dc-rethink">
          <PageContainer className="dc-rethink-inner">
            <div className="dc-rethink-copy">
              <h2>
                Most Firms Rethink Capacity&nbsp;
                <br />
                <span className="dc-accent">After These Signals Appear</span>
              </h2>
              <p>
                Capacity strain usually does not arrive at once; it builds through signals that each
                seem manageable, until the system can no longer absorb them.
              </p>
              <PrimaryCtaButton
                fullWidth={false}
                type="button"
                className="dc-rethink-cta"
                href="#contact"
              >
                Evaluate your next capacity decision
              </PrimaryCtaButton>
            </div>
            <ol className="dc-signal-list">
              {RETHINK_SIGNALS.map((text, i) => (
                <li key={text}>
                  <span className="dc-signal-num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="dc-signal-text">{text}</span>
                </li>
              ))}
            </ol>
          </PageContainer>
        </section>

        {/* Find the capacity structure — Figma 3841:47944 */}
        <section className="dc-final">
          <PageContainer className="dc-final-inner">
            <h2>
              Find the capacity structure{" "}
              <span className="dc-accent">your Firm&nbsp;actually needs.</span>
            </h2>
            <p>
              Two ways to start: a self-evaluation worksheet, or a structured comparison of your
              options.
            </p>
            <PrimaryCtaButton
              fullWidth={false}
              className="dc-cta-fill dc-final-cta"
              href="/landing/dedicated-remote-architect-vs-freelancer-vs-full-time/"
            >
              Explore Capacity Options
            </PrimaryCtaButton>
          </PageContainer>
        </section>

        <GetInTouchSection />
        <SiteFooter />
      </main>
    </>
  );
}

export default DeliveryCapacityInArchitectureFirmsView;
