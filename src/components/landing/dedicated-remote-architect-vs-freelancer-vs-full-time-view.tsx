"use client";

import Image from "next/image";
import type { StaticImageData } from "next/image";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import LandingPdfLeadModal from "@/components/landing/landing-pdf-lead-modal";
import { LandingTopHeader } from "@/components/landing/landing-top-header";
import { PageContainer } from "@/components/layout/page-container";
import { GetInTouchSection } from "@/components/sections/get-in-touch-section";
import { MepSectionTag } from "@/components/sections/mep/mep-section-tag";
import { SiteFooter } from "@/components/sections/site-footer";
import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";
import { cn } from "@/lib/utils";

const heroImage = encodeURI("/image/Adding-People-Should-Reduce-Delivery-Pressure,-But-Why-Does-It-Often-Increase 1 (1).jpg");
const pressureImage = encodeURI("/image/When-Work-Increases,-But-Delivery-Pressure-Does-Not-Ease 1 (1).jpg");
const matrixEvaluateImage = encodeURI("/image/What-This-Matrix-Helps-You-Evaluate-512x470 1 (1).jpg");
const decisionsWrongImage = encodeURI("/image/Where-Most-Decisions-Go-Wrong-512x300 1 (1).jpg");
const coordinationBeginsIcon = encodeURI("/image/cooridntaion begins.svg");
const dedicatedRemoteArchitectsIcon = "/image/dedicated-remote-architects-icon.svg";
const deadlinesBeginsIcon = encodeURI("/image/deadlines begins.svg");
const freelancersIcon = "/image/freelancers-icon.svg";
const fullTimeHiresIcon = "/image/full-time-hires-icon.svg";
const reviewCyclesIcon = encodeURI("/image/review cycles.svg");
const seniorArchitectsIcon = encodeURI("/image/senior architects.svg");

/** Local gated PDF (copied from src/assets/resources) + same UTM as Gatsby LP */
const COMPARISON_GUIDE_PDF_URL =
  "/resources/dedicated-vs-freelancer-vs-full-time.pdf?utm_source=LP_DedicatedVsFreelancer&utm_medium=LPCTA&utm_campaign=T2TOFU";

const PDF_MODAL_TITLE = "Dedicated Remote Architect vs Freelancer vs Full-Time Hire";

declare global {
  interface Window {
    lintrk?: (action: string, payload: { conversion_id: number }) => void;
  }
}

const pressurePoints = [
  {
    number: "01",
    text: "Senior architects spend more time reviewing drawings than leading projects",
  },
  {
    number: "02",
    text: "Coordination between production and design teams takes longer than expected",
  },
  {
    number: "03",
    text: "Drawing sets move through multiple revision cycles before approval",
  },
  {
    number: "04",
    text: "Decisions slow down because more stakeholders are involved in documentation",
  },
] as const;

const optionCards = [
  {
    title: "Full-Time Hires",
    description: "Improve long-term continuity but require ramp-up and training.",
    positive: "Long-term continuity",
    negative: "Slow ramp-up & training cost",
    icon: fullTimeHiresIcon,
  },
  {
    title: "Freelancers",
    description: "Increase speed but introduce variability in documentation.",
    positive: "Fast initial deployment",
    negative: "Documentation variability",
    icon: freelancersIcon,
  },
  {
    title: "Dedicated Remote Architects",
    description: "Provide continuity but depend on structured onboarding.",
    positive: "Structured delivery continuity",
    negative: "Requires onboarding investment",
    icon: dedicatedRemoteArchitectsIcon,
  },
] as const;

const matrixCriteria = [
  "How quickly each model contributes to active project delivery",
  "How consistently drawing output aligns with your documentation standards",
  "How much coordination and review effort each model requires",
  "How flexible capacity remains as project load change",
  "How cost behaves across project phases, not just at hiring",
  "How much leadership time is required to manage the model",
  "Where delivery risk typically appears during live projects",
] as const;

const afterDecidePoints = [
  "Review cycles either stabilize or multiply across project phases",
  "Communication between production, design, and leadership either becomes clearer or more fragmented",
  "Drawing approvals either move faster or get delayed due to coordination gaps",
  "Senior teams either regain time or spend more time managing documentation flow",
] as const;

const realityCheckCards = [
  {
    text: "Review cycles start increasing across drawing sets",
    icon: reviewCyclesIcon,
  },
  {
    text: "Coordination begins to slow down production output",
    icon: coordinationBeginsIcon,
  },
  {
    text: "Senior architects spend more time managing than leading",
    icon: seniorArchitectsIcon,
  },
  {
    text: "Deadlines begin to compress even after hiring",
    icon: deadlinesBeginsIcon,
  },
] as const;

const matrixInsidePoints = [
  "A side-by-side decision framework comparing full-time hires, freelancers, and dedicated remote architects",
  "A clear view of where each model stabilizes delivery and where it adds coordination load",
  "Cost structure insights focused on predictability and flexibility across project phases",
  "Management and coordination load comparisons across models",
  "Best-fit and poor-fit scenarios based on real delivery conditions",
  "A visual delivery impact map showing where coordination pressure typically increases",
  "Practical guidance on testing a model within live projects before scaling",
] as const;

const deliveryFitBarGroups = [
  {
    label: "System Alignment",
    rows: [
      { name: "Dedicated Remote Architect", meta: "High", w: "84%", fill: "bg-[#D70416]" },
      { name: "Full-Time Hire", meta: "Moderate", w: "60%", fill: "bg-[#000000]" },
      { name: "Freelancer", meta: "Variable", w: "38%", fill: "bg-[rgba(215,4,22,0.35)]" },
    ],
  },
  {
    label: "Coordination Overhead",
    rows: [
      { name: "Dedicated Remote Architect", meta: "Low", w: "30%", fill: "bg-[#D70416]" },
      { name: "Full-Time Hire", meta: "Moderate", w: "55%", fill: "bg-[#000000]" },
      { name: "Freelancer", meta: "High", w: "78%", fill: "bg-[rgba(215,4,22,0.35)]" },
    ],
  },
] as const;

const beforeDecidePillars = [
  "Which model aligns with your delivery system",
  "Where coordination and review load will increase",
  "How flexibility and control shift across options",
  "What to validate before scaling any capacity approach",
] as const;

function HeroMedia({
  src,
  alt,
  width,
  height,
  priority = false,
}: {
  src: StaticImageData;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
}) {
  return (
    <div
      className="relative w-full overflow-hidden rounded-[10px] bg-[#F4F4F4] shadow-[0_0_16.8px_rgba(0,0,0,0.15)]"
      style={{ maxWidth: width, aspectRatio: `${width} / ${height}` }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 650px"
        priority={priority}
      />
    </div>
  );
}

function CalloutAside({ children }: { children: ReactNode }) {
  return (
    <aside
      className="inline-flex w-fit max-w-full items-start justify-start gap-2.5 rounded-[10px] bg-[rgba(215,4,22,0.06)] p-3 sm:p-3.5"
      style={{ outline: "1px solid #D70416", outlineOffset: "-1px" }}
    >
      <p className="!text-[#111111] text-[15px] font-medium leading-6 sm:text-[16px]">{children}</p>
    </aside>
  );
}

function VbsLogoTile() {
  return (
    <div
      className="relative flex h-[120px] w-[120px] items-center justify-center overflow-hidden rounded-[20px] bg-white shadow-[0_2.9px_5.1px_rgba(0,0,0,0.25)]"
      aria-hidden
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/landing/capacity-matrix/vbs-logo-mark.svg"
        alt=""
        className="h-[80px] w-[79px]"
      />
      <div className="pointer-events-none absolute inset-0 rounded-[20px] shadow-[inset_0_2.9px_6.8px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function ImpactChangesDiagram({ points }: { points: readonly string[] }) {
  return (
    <div className="relative h-[499px] w-full min-w-0 flex-1 overflow-hidden max-lg:h-auto max-lg:overflow-visible">
      {/* Branching connector — desktop */}
      <div
        className="pointer-events-none absolute left-[67px] top-[81px] hidden h-[338px] w-[352px] items-center justify-center lg:flex"
        aria-hidden
      >
        <div className="-rotate-90 -scale-y-100">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/landing/capacity-matrix/impact-branch-lines.svg"
            alt=""
            className="h-[352px] w-[338px] max-w-none"
          />
        </div>
      </div>

      {/* Logo hub — desktop only */}
      <div className="absolute left-[46px] top-1/2 z-10 hidden -translate-y-1/2 lg:block">
        <VbsLogoTile />
      </div>

      {/* Numbered outcomes */}
      <ol className="relative z-[1] flex w-full max-w-[508px] flex-col gap-4 max-lg:mx-auto sm:gap-5 lg:absolute lg:right-0 lg:top-1/2 lg:gap-[60px] lg:-translate-y-1/2">
        {points.map((text, index) => (
          <li key={text} className="flex items-start gap-3 sm:items-center sm:gap-5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[#D70416] bg-[#D70416] shadow-[0_6px_20px_rgba(255,192,192,0.55)] sm:h-[50px] sm:w-[50px]">
              <span className="text-[16px] font-semibold uppercase leading-none text-white sm:text-[20px]">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <p className="text-[15px] font-normal leading-6 text-[#808080] sm:text-[16px]">{text}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

/** Gatsby LP “Delivery Fit Overview” bar panel (replaces delivery-fit-overview.png). */
function DeliveryFitOverviewPanel() {
  const panelRef = useRef<HTMLDivElement>(null);
  const [barsActive, setBarsActive] = useState(false);

  useEffect(() => {
    const panel = panelRef.current;
    if (!panel || typeof IntersectionObserver === "undefined") return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          window.setTimeout(() => setBarsActive(true), 150);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.25 },
    );

    observer.observe(panel);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={panelRef}
      id="barpanel"
      className="w-full max-w-[420px] rounded-xl border border-[#E8E8E8] bg-white p-5 shadow-[0_4px_24px_rgba(0,0,0,0.06)] max-lg:max-w-full sm:p-6 lg:sticky lg:top-20 lg:p-[28px]"
    >
      <h3 className="mb-0.5 text-[16px] font-semibold leading-[23px] text-black">
        Delivery Fit Overview
      </h3>
      <p className="mb-5 text-[12px] font-normal text-[#AAAAAA]">
        Indicative — full breakdown inside the matrix
      </p>

      {deliveryFitBarGroups.map((group, groupIndex) => (
        <div key={group.label}>
          <div className="mb-2.5 mt-4 flex items-center gap-2 !text-[11px] font-bold uppercase tracking-[0.1em] !text-[#BBBBBB]">
            <span>{group.label}</span>
            <span className="h-px flex-1 bg-[#E8E8E8]" aria-hidden />
          </div>

          {group.rows.map((row) => (
            <div key={`${group.label}-${row.name}`} className="mb-2.5">
              <div className="mb-1.5 flex justify-between">
                <span className="!text-[15px] font-medium !text-[#2A2A2A]">{row.name}</span>
                <span className="text-[12px] font-semibold text-[#BBBBBB]">{row.meta}</span>
              </div>
              <div className="h-[5px] overflow-hidden rounded-[3px] border border-[#E8E8E8] bg-[#F9F9F9]">
                <div
                  className={cn("h-full rounded-[3px] transition-[width] duration-[1300ms] ease-[cubic-bezier(0.25,0.8,0.25,1)]", row.fill)}
                  style={{ width: barsActive ? row.w : "0%" }}
                />
              </div>
            </div>
          ))}

          {groupIndex < deliveryFitBarGroups.length - 1 ? (
            <div className="my-3.5 h-px bg-[#E8E8E8]" aria-hidden />
          ) : null}
        </div>
      ))}

      <p className="mt-3.5 text-[10px] italic leading-4 text-[#CCCCCC]">
        Indicative. Full breakdown, best-fit scenarios &amp; risk analysis inside the matrix.
      </p>
    </div>
  );
}

/** Landing: Dedicated Remote Architect vs Freelancer vs Full-Time */
export function DedicatedRemoteArchitectVsFreelancerVsFullTimeView() {
  const trackPdfClick = useCallback(() => {
    try {
      if (typeof window !== "undefined" && typeof window.lintrk === "function") {
        window.lintrk("track", { conversion_id: 24698708 });
      }
    } catch {
      /* ignore */
    }
  }, []);

  return (
    <div className="vbs-redesign-page dedicated-capacity-lp min-h-screen overflow-x-hidden bg-white">
      <LandingTopHeader maxWidth={1400} />

      <main className="min-w-0">
        {/* Hero — Capacity Decision Framework */}
        <section className="overflow-hidden py-12 max-lg:py-10 lg:py-[70px]">
          <PageContainer className="flex items-center justify-between gap-6 max-lg:flex-col max-lg:items-stretch max-lg:gap-8 lg:gap-6">
            <div className="flex w-full max-w-[694px] flex-col items-start gap-6 max-lg:gap-5 lg:gap-[30px]">
              <div className="flex w-full flex-col items-start gap-5">
                <div className="flex w-full flex-col items-start gap-3">
                  <MepSectionTag label="Capacity Decision Framework" />
                  <h1 className="max-w-[689px] text-section capitalize !text-[28px] !leading-9 sm:!text-[36px] sm:!leading-[44px] lg:!text-[48px] lg:!leading-[1.15]">
                    <span className="font-medium text-[#111111]">
                      Adding People Should Reduce Delivery Pressure, But{" "}
                    </span>
                    <span className="font-light text-accent">Why Does It Often Increase?</span>
                  </h1>
                </div>
                <p className="w-full text-[16px] font-normal leading-6 text-[#808080]">
                  Hiring in-house, freelancers, or external support can increase capacity, but often
                  changes drawing, review, and coordination workflows in live projects. Leaders
                  realise the impacts only after decisions are made.
                </p>
                <p className="w-full text-[16px] font-normal leading-6 text-[#808080]">
                  Use this comparison matrix to evaluate how each model impacts delivery before you
                  commit.
                </p>
              </div>
              <PrimaryCtaButton
                fullWidth={false}
                type="button"
                className="max-sm:!w-full"
                onClick={() => {
                  document
                    .getElementById("capacity-matrix")
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              >
                Compare Capacity Models
              </PrimaryCtaButton>
            </div>

            <div className="w-full max-w-[650px] shrink-0 max-lg:max-w-full">
              <HeroMedia
                src={heroImage}
                alt="Adding people should reduce delivery pressure, but why does it often increase"
                width={650}
                height={530}
                priority
              />
            </div>
          </PageContainer>
        </section>

        {/* When Work Increases */}
        <section id="delivery-pressure" className="bg-white py-16 max-lg:py-12 lg:py-20">
          <PageContainer className="flex flex-col items-start gap-8 max-lg:gap-8">
            <header className="flex w-full max-w-[868px] flex-col items-start gap-3">
              <div className="flex w-full flex-col items-start gap-3">
                <MepSectionTag label="Question Behind Every Growing Firm" />
                <h2 className="w-full text-section">
                  <span className="font-medium text-[#111111]">When Work Increases, But </span>
                  <span className="font-light text-accent">Delivery Pressure Does Not Ease</span>
                </h2>
              </div>
              <p className="max-w-[802px] text-[16px] font-normal leading-6 text-[#808080]">
                As project volume increases, most firms expect delivery pressure to reduce once more
                people are added. But in practice, pressure often shifts instead of disappearing.
              </p>
            </header>

            <div className="flex w-full items-start gap-8 max-lg:flex-col max-lg:gap-8 lg:gap-[60px]">
              <div className="relative h-[446px] w-full max-w-[710px] shrink-0 overflow-hidden rounded-[10px] bg-white max-lg:aspect-[710/446] max-lg:h-auto max-lg:max-w-full">
                <Image
                  src={pressureImage}
                  alt="When work increases but delivery pressure does not ease"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 710px"
                />
              </div>

              <div className="flex w-full max-w-[670px] mt-1 flex-col items-start gap-5">
                <ul className="!m-0 flex w-full !list-none flex-col !p-0 !pl-0">
                  {pressurePoints.map((point, index) => (
                    <li key={point.number} className="!m-0 flex flex-col !p-0 !pl-0">
                      <div className="flex items-start gap-2.5 py-0 pl-0">
                        <span className="shrink-0 text-[16px] font-semibold leading-normal text-[#D70416]">
                          {point.number}
                        </span>
                        <p className="mb-0 !text-[16px] font-normal leading-normal !text-[#111111]">
                          {point.text}
                        </p>
                      </div>
                      {index < pressurePoints.length - 1 ? (
                        <div
                          className="my-4 h-px w-full bg-gradient-to-r from-transparent via-[#CBCCCD] to-transparent lg:my-[34px]"
                          aria-hidden
                        />
                      ) : null}
                    </li>
                  ))}
                </ul>

                <aside
                  className="w-full max-w-[664px] rounded-[10px] bg-[#F8FFFA] p-3 sm:p-3.5"
                  style={{ outline: "1px solid #42AA32", outlineOffset: "-1px" }}
                >
                  <p className="!text-[#111111] text-[16px] font-medium leading-6">
                    “The issue is not the lack of capacity. It is how that capacity interacts with
                    your delivery system.”
                  </p>
                </aside>
              </div>
            </div>
          </PageContainer>
        </section>

        {/* Why This Decision Becomes Difficult */}
        <section className="bg-[#FAFAFA] py-16 max-lg:py-12 lg:py-[100px]">
          <PageContainer className="flex flex-col items-center gap-[60px] max-lg:gap-10">
            <header className="flex w-full flex-col items-start gap-5">
              <div className="flex max-w-[848px] flex-col items-start gap-3">
                <MepSectionTag label="Why This Decision Becomes Difficult" />
                <h2 className="w-full text-section">
                  <span className="font-medium text-[#111111]">Because Every Option Solves </span>
                  <span className="font-light text-accent">One Problem and Creates Another</span>
                </h2>
              </div>
              <p className="max-w-[764px] text-[16px] font-normal leading-6 text-[#808080]">
                At a glance, the options appear clear. Inside active projects, their trade-offs
                become operational.
              </p>
            </header>

            <div className="flex w-full flex-col items-start gap-5">
              <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-3">
                {optionCards.map((card) => (
                  <article
                    key={card.title}
                    className="flex flex-col items-start gap-3 overflow-hidden rounded-[10px] border border-[#CBCCCD] bg-white p-5"
                  >
                    <div className="flex h-[70px] w-[70px] shrink-0 items-center justify-center overflow-hidden rounded-[10px] border border-[#CBCCCD] bg-white p-[15px]">
                      <Image
                        src={card.icon}
                        alt=""
                        width={46}
                        height={46}
                        className="h-[46px] w-[46px] object-contain"
                      />
                    </div>
                    <div className="flex w-full flex-col items-start gap-2 overflow-hidden">
                      <h3 className="w-full text-[20px] font-medium leading-normal text-[#111111] sm:text-[24px]">
                        {card.title}
                      </h3>
                      <p className="mb-0 w-full text-[16px] font-normal leading-6 text-[#808080]">
                        {card.description}
                      </p>
                      <ul className="!m-0 !list-none flex w-full flex-col gap-1.5 !p-0 pb-1">
                        <li className="!m-0 flex items-center gap-2.5 !p-0 pb-1 text-[16px] font-normal leading-6 text-[#42AA32]">
                          <span
                            className="mb-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#42AA32]"
                            aria-hidden
                          />
                          <span>{card.positive}</span>
                        </li>
                        <li className="!m-0 flex items-center gap-2.5 !p-0 pb-1 text-[16px] font-normal leading-6 text-[#D70416]">
                          <span
                            className="mb-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D70416]"
                            aria-hidden
                          />
                          <span>{card.negative}</span>
                        </li>
                      </ul>
                    </div>
                  </article>
                ))}
              </div>

              <CalloutAside>
                “And most importantly, more capacity may increase coordination overhead across
                teams.”
              </CalloutAside>
            </div>
          </PageContainer>
        </section>

        {/* What This Matrix Helps You Evaluate */}
        <section
          id="capacity-matrix"
          className="scroll-mt-24 bg-white py-16 max-lg:py-12 lg:py-20"
        >
          <PageContainer className="flex items-start gap-8 max-lg:flex-col max-lg:items-stretch max-lg:gap-8 lg:gap-[60px]">
            <div className="flex w-full max-w-[670px] flex-col items-start gap-5 max-lg:max-w-full">
              <header className="flex w-full flex-col items-start gap-5">
                <div className="flex w-full flex-col items-start gap-3">
                  <MepSectionTag label="What This Matrix Helps You Evaluate" />
                  <h2 className="w-full text-section">
                    <span className="font-medium text-[#111111]">Compare Options Based on </span>
                    <span className="font-light text-accent">How Work Actually Flows</span>
                  </h2>
                </div>
                <p className="max-w-[731px] text-[16px] font-normal leading-6 text-[#808080]">
                  This matrix focuses on delivery behaviour, not hiring theory. It helps you evaluate
                  how each model performs inside live project conditions.
                </p>
              </header>

              <ul className="!m-0 flex w-full !list-none flex-col !p-0 !pl-0">
                {matrixCriteria.map((item, index) => (
                  <li key={item} className="!m-0 flex flex-col !p-0 !pl-0">
                    <div className="flex items-start gap-3">
                      <span
                        className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#808080]"
                        aria-hidden
                      />
                      <p className="!text-[16px] font-normal leading-normal !text-[#111111]">
                        {item}
                      </p>
                    </div>
                    {index < matrixCriteria.length - 1 ? (
                      <div
                        className="my-[12px] h-px w-full bg-gradient-to-r from-transparent via-[#CBCCCD] to-transparent"
                        aria-hidden
                      />
                    ) : null}
                  </li>
                ))}
              </ul>

              <CalloutAside>
                It helps you evaluate impact before committing, not after.
              </CalloutAside>
            </div>

            <div className="relative h-[470px] w-full max-w-[512px] shrink-0 overflow-hidden rounded-[10px] bg-[#F4F4F4] shadow-[0_0_16.8px_rgba(0,0,0,0.15)] max-lg:aspect-[512/470] max-lg:h-auto max-lg:max-w-full">
              <Image
                src={matrixEvaluateImage}
                alt="What this matrix helps you evaluate"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 512px"
              />
            </div>
          </PageContainer>
        </section>

        {/* What Actually Changes After You Decide */}
        <section className="bg-white py-16 max-lg:py-12 lg:py-20">
          <PageContainer className="flex items-start gap-8 max-lg:flex-col max-lg:items-stretch max-lg:gap-6 lg:items-center lg:gap-10">
            <div className="flex w-full max-w-[508px] shrink-0 flex-col items-start gap-5 max-lg:max-w-full">
              <div className="flex w-full flex-col items-start gap-3">
                <MepSectionTag label="What Actually Changes After You Decide" />
                <h2 className="w-full text-section">
                  <span className="font-medium text-[#111111]">The Impact Shows </span>
                  <span className="font-light text-accent">Up Inside Active Projects</span>
                </h2>
              </div>
              <p className="w-full max-w-[508px] text-[16px] font-normal leading-6 text-[#808080]">
                Capacity decisions reshape how drawings, reviews, and approvals move through your
                firm.
              </p>
              <p className="w-full text-[16px] font-normal leading-6 text-[#808080]">
                After implementation, firms often notice:
              </p>
              {/* Callout stays with copy on desktop; moved below diagram on mobile */}
              <div className="hidden lg:block">
                <CalloutAside>
                  “These changes are not theoretical. They directly affect delivery timelines and
                  project stability.”
                </CalloutAside>
              </div>
            </div>

            <ImpactChangesDiagram points={afterDecidePoints} />

            <div className="w-full lg:hidden">
              <CalloutAside>
                “These changes are not theoretical. They directly affect delivery timelines and
                project stability.”
              </CalloutAside>
            </div>
          </PageContainer>
        </section>

        {/* Where Most Decisions Go Wrong */}
        <section className="bg-white py-16 max-lg:py-12 lg:py-20">
          <PageContainer className="flex items-start gap-8 max-lg:flex-col max-lg:items-stretch max-lg:gap-8 lg:gap-[60px]">
            <div className="flex w-full max-w-[680px] flex-col items-start gap-5 max-lg:max-w-full">
              <div className="flex w-full flex-col items-start gap-3">
                <MepSectionTag label="Where Most Decisions Go Wrong" />
                <h2 className="w-full max-w-[620px] text-section">
                  <span className="font-medium text-[#111111]">Choosing Based on Speed </span>
                  <span className="font-light text-accent">Instead of System Fit</span>
                </h2>
              </div>
              <div className="flex w-full flex-col items-start gap-2">
                <p className="w-full text-[16px] font-normal leading-6 text-[#808080]">
                  In many cases, decisions are made based on urgency. The fastest option gets selected.
                  The most familiar approach feels safer.
                </p>
                <p className="w-full text-[16px] font-normal leading-6 text-[#808080]">
                  But capacity models do not fail because they are wrong.{" "}
                  <span className="font-medium text-[#111111]">
                    They fail because they do not fit how the firm&apos;s delivery system really
                    operates.
                  </span>
                </p>
                <p className="w-full text-[16px] font-normal leading-6 text-[#808080]">
                  If workflows, documentation standards, and review structures are not aligned,
                  capacity additions can increase coordination effort and slow delivery.
                </p>
              </div>
            </div>

            <div className="relative h-[300px] w-full max-w-[512px] shrink-0 overflow-hidden rounded-[10px] bg-[#F4F4F4] shadow-[0_0_16.8px_rgba(0,0,0,0.15)] max-lg:aspect-[512/300] max-lg:h-auto max-lg:max-w-full">
              <Image
                src={decisionsWrongImage}
                alt="Where most capacity decisions go wrong"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 512px"
              />
            </div>
          </PageContainer>
        </section>

        {/* Before You Choose a Model */}
        <section className="bg-[#FAFAFA] py-16 max-lg:py-12 lg:py-[100px]">
          <PageContainer className="flex flex-col items-stretch gap-5">
            <header className="flex w-full flex-col items-start gap-5">
              <div className="flex flex-col items-start gap-3">
                <MepSectionTag label="Before You Choose a Model" />
                <h2 className="text-section">
                  <span className="font-medium text-[#111111]">A Practical </span>
                  <span className="font-light text-accent">Reality Check</span>
                </h2>
              </div>
              <p className="text-[16px] font-normal leading-6 text-[#808080]">
                Many firms only understand the trade-offs after implementation.
              </p>
            </header>

            <div className="flex w-full flex-col items-start gap-5">
              <p className="text-[16px] font-normal leading-6 text-[#808080]">That is when:</p>

              <div className="flex w-full flex-col items-stretch gap-5">
                <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
                  {realityCheckCards.map((card) => (
                    <article
                      key={card.text}
                      className="flex flex-1 flex-col items-center gap-5 overflow-hidden rounded-[10px] border border-[#CBCCCD] bg-white p-5"
                    >
                      <div className="flex h-[70px] w-[70px] shrink-0 items-center justify-center overflow-hidden rounded-[10px] border border-[#CBCCCD] bg-white p-[15px]">
                        <Image
                          src={card.icon}
                          alt=""
                          width={46}
                          height={46}
                          className="h-[46px] w-[46px] object-contain"
                        />
                      </div>
                      <p className="w-full text-center text-[16px] font-normal leading-6 text-[#808080]">
                        {card.text}
                      </p>
                    </article>
                  ))}
                </div>

                <CalloutAside>
                  “And most importantly, more capacity may increase coordination overhead across
                  teams.”
                </CalloutAside>
              </div>
            </div>
          </PageContainer>
        </section>

        {/* What You Will Find Inside the Matrix */}
        <section className="bg-white py-16 max-lg:py-12 lg:py-20">
          <PageContainer className="flex flex-col items-start gap-[60px] max-lg:gap-10">
            <header className="flex w-full max-w-[826px] flex-col items-start gap-5">
              <div className="flex w-full flex-col items-start gap-3">
                <MepSectionTag label="What You Will Find Inside the Matrix" />
                <h2 className="w-full text-section">
                  <span className="font-medium text-[#111111]">
                    A Decision Framework Designed for{" "}
                  </span>
                  <span className="font-light text-accent">Architecture Leaders</span>
                </h2>
              </div>
              <p className="w-full text-[16px] font-normal leading-6 text-[#808080]">
                This comparison matrix gives you a decision framework designed for architecture
                leaders managing delivery pressure. It is built to support leadership discussions and
                reduce decision risk.
              </p>
            </header>

            <div className="grid w-full grid-cols-1 items-start gap-5 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)] lg:items-center lg:gap-6">
              <DeliveryFitOverviewPanel />

              <ul className="!m-0 flex w-full min-w-0 !list-none flex-col items-start !p-0 !pl-0">
                {matrixInsidePoints.map((point, index) => (
                  <li key={point} className="!m-0 flex w-full flex-col !p-0 !pl-0">
                    <div className="flex items-start gap-3">
                      <span
                        className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#808080]"
                        aria-hidden
                      />
                      <p className="!text-[16px] font-normal leading-6 !text-[#111111]">
                        {point}
                      </p>
                    </div>
                    {index < matrixInsidePoints.length - 1 ? (
                      <div
                        className="my-4 h-px w-full bg-gradient-to-r from-transparent via-[#CBCCCD] to-transparent lg:my-[34px]"
                        aria-hidden
                      />
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
          </PageContainer>
        </section>

        {/* Before You Decide — CTA */}
        <section className="bg-white py-16 max-lg:py-12 lg:py-20">
          <PageContainer className="flex flex-col items-center gap-[60px] max-lg:gap-10">
            <header className="flex w-full max-w-[723px] flex-col items-start gap-5">
              <div className="flex w-full flex-col items-center gap-3">
                <MepSectionTag label="Before You Decide" centered />
                <h2 className="w-full text-center text-section">
                  <span className="font-medium text-[#111111]">Compare the Trade-Offs </span>
                  <span className="font-light text-accent">Before You Commit</span>
                </h2>
              </div>
              <p className="w-full text-center text-[16px] font-normal leading-6 text-[#808080]">
                The wrong capacity decision rarely fails immediately. It shows up later in delayed
                drawings, extended review cycles, and compressed deadlines.
              </p>
            </header>

            <div className="flex w-full flex-col items-center gap-[30px]">
              <div className="flex w-full flex-col rounded-[10px] border border-[#CBCCCD] bg-[#FAFAFA] px-4 py-2 sm:flex-row sm:items-stretch sm:gap-0 sm:px-5">
                {beforeDecidePillars.map((pillar, index) => (
                  <div
                    key={pillar}
                    className={cn(
                      "flex flex-1 items-center justify-center px-3 py-3 sm:px-5 sm:py-0",
                      index > 0 && "border-t border-[#CBCCCD]/50 sm:border-t-0 sm:border-l",
                    )}
                  >
                    <p className="w-full text-center text-[15px] font-medium leading-6 text-[#111111] sm:text-[16px]">
                      {pillar}
                    </p>
                  </div>
                ))}
              </div>

              <p className="text-center text-[16px] font-normal leading-6 text-[#808080]">
                Make your next capacity decision with clarity and control.
              </p>

              <LandingPdfLeadModal
                title={PDF_MODAL_TITLE}
                downloadUrl={COMPARISON_GUIDE_PDF_URL}
                onBeforeOpen={trackPdfClick}
                trigger={
                  <PrimaryCtaButton
                    fullWidth={false}
                    type="button"
                    className="!bg-[#D70416] !text-white hover:!bg-[#b80312]"
                  >
                    Download The Comparison Guide (PDF)
                  </PrimaryCtaButton>
                }
              />
            </div>
          </PageContainer>
        </section>
      </main>

      <LandingPdfLeadModal
        title={PDF_MODAL_TITLE}
        downloadUrl={COMPARISON_GUIDE_PDF_URL}
        onBeforeOpen={trackPdfClick}
        trigger={
          <a
            href={COMPARISON_GUIDE_PDF_URL}
            className="pdf-fab dedicated-capacity-lp-pdf-fab"
            title="Get Your Free PDF"
            aria-label="Get Your Free PDF"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-file-pdf" aria-hidden="true" />
          </a>
        }
      />

      <style>{`
        .dedicated-capacity-lp .call-icon { display: none !important; }
        .dedicated-capacity-lp .pdf-fab.dedicated-capacity-lp-pdf-fab {
          position: fixed;
          right: 0;
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
          border: none;
          padding: 0;
        }
        .dedicated-capacity-lp .pdf-fab.dedicated-capacity-lp-pdf-fab .fa-file-pdf { font-size: 22px; }
        .dedicated-capacity-lp .pdf-fab.dedicated-capacity-lp-pdf-fab:hover::after {
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
      `}</style>

      <GetInTouchSection />
      <SiteFooter />
    </div>
  );
}
