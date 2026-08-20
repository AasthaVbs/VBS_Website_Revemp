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
import { trackLinkedInConversion } from "@/utils/site-tracking-events";

import "@/styles/vbs-landing-home-type.scss";

const heroImage = encodeURI("/image/Adding-People-Should-Reduce-Delivery-Pressure,-But-Why-Does-It-Often-Increase 1 (1).jpg");
const pressureImage = encodeURI("/image/When-Work-Increases,-But-Delivery-Pressure-Does-Not-Ease 1.png");
const matrixEvaluateImage = encodeURI("/image/What-This-Matrix-Helps-You-Evaluate-512x470 1 (1).jpg");
const decisionsWrongImage = encodeURI("/image/Where-Most-Decisions-Go-Wrong-512x300 1 (1).jpg");
const coordinationBeginsIcon = encodeURI("/image/cooridntaion begins.svg");
const dedicatedRemoteArchitectsIcon = "/image/dedicated-remote-architects-icon.svg";
const deadlinesBeginsIcon = encodeURI("/image/deadlines begins.svg");
const freelancersIcon = "/image/freelancers-icon.svg";
const fullTimeHiresIcon = "/image/full-time-hires-icon.svg";
const reviewCyclesIcon = encodeURI("/image/review cycles.svg");
const seniorArchitectsIcon = encodeURI("/image/senior architects.svg");
const matrixGuideCover = "/image/Dedicated-Remote-Architect-vs-Freelancer-vs-Full-Time-Hire.jpg";

/** Local gated PDF (copied from src/assets/resources) + same UTM as Gatsby LP */
const COMPARISON_GUIDE_PDF_URL =
  "/resources/dedicated-vs-freelancer-vs-full-time.pdf?utm_source=LP_DedicatedVsFreelancer&utm_medium=LPCTA&utm_campaign=T2TOFU";

const PDF_MODAL_TITLE = "Dedicated Remote Architect vs Freelancer vs Full-Time Hire";

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
    description: "Provide continuity but depend on structured\nonboarding.",
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
  src: string | StaticImageData;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
}) {
  return (
    <div
      className="relative w-full overflow-hidden rounded-[10px] bg-[#F4F4F4] shadow-[0_0_16.8px_rgba(0,0,0,0.15)]"
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 45vw"
        priority={priority}
      />
    </div>
  );
}

function CalloutAside({ children }: { children: ReactNode }) {
  return (
    <aside
      className="inline-flex w-fit max-w-full items-start justify-start gap-2.5 rounded-[10px] bg-[rgba(215,4,22,0.06)] p-5"
      style={{ outline: "1px solid #D70416", outlineOffset: "-1px" }}
    >
      <p className="!text-[#111111] text-[16px] font-normal leading-6">{children}</p>
    </aside>
  );
}

function StatOverlay({
  value,
  label,
  gapClassName = "gap-5",
  widthClassName = "w-[220px]",
}: {
  value: string;
  label: string;
  gapClassName?: string;
  widthClassName?: string;
}) {
  return (
    <div
      className={cn(
        "absolute bottom-5 right-5 z-[1] inline-flex flex-col items-start rounded-[10px] bg-white p-5",
        widthClassName,
        gapClassName,
      )}
    >
      <p
        className="w-full !text-[24px] !font-semibold !leading-6 !text-[#D70416]"
        style={{ color: "#D70416", fontSize: 24, fontWeight: 600, lineHeight: "24px" }}
      >
        {value}
      </p>
      <p
        className="w-full whitespace-pre-line !text-[16px] !font-normal !leading-6 !text-[#808080]"
        style={{ color: "#808080", fontSize: 16, fontWeight: 400, lineHeight: "24px" }}
      >
        {label}
      </p>
    </div>
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

function ImpactPointRow({
  index,
  text,
  fontPx = 16,
}: {
  index: number;
  text: string;
  fontPx?: number;
}) {
  return (
    <li className="flex w-full items-center gap-5">
      <span className="flex size-[50px] shrink-0 items-center justify-center rounded-full border-2 border-[#D70416] bg-[#D70416] shadow-[0_6px_20px_rgba(255,192,192,0.55)] max-lg:size-10">
        <span className="text-[20px] font-semibold uppercase leading-none text-white max-lg:text-[16px]">
          {String(index + 1).padStart(2, "0")}
        </span>
      </span>
      <p
        className="mb-0 min-w-0 flex-1 font-normal !text-[#808080]"
        style={{ fontSize: fontPx, lineHeight: `${Math.round(fontPx * 1.5)}px`, color: "#808080" }}
      >
        {text}
      </p>
    </li>
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
                  className={cn(
                    "h-full rounded-[3px] transition-[width] duration-[1300ms] ease-[cubic-bezier(0.25,0.8,0.25,1)]",
                    row.fill,
                  )}
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

function ImpactChangesDiagram({ points }: { points: readonly string[] }) {
  const boxRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const box = boxRef.current;
    if (!box) return;

    const update = () => {
      const width = box.clientWidth;
      setScale(width > 0 ? Math.min(1, width / 856) : 1);
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(box);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full min-w-0 max-w-[856px] flex-1">
      <ol className="flex flex-col gap-5 lg:hidden">
        {points.map((text, index) => (
          <ImpactPointRow key={text} index={index} text={text} />
        ))}
      </ol>

      <div ref={boxRef} className="hidden w-full min-w-0 lg:block">
        <div
          className="relative overflow-hidden rounded-[10px]"
          style={{ width: "100%", height: 499 * scale }}
        >
          <div
            className="absolute left-0 top-0 origin-top-left"
            style={{ width: 856, height: 499, transform: `scale(${scale})` }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/landing/capacity-matrix/impact-changes-fork.svg"
              alt=""
              className="pointer-events-none absolute left-[31px] top-[81px] h-[340px] w-[353.811px] max-w-none"
            />
            <div className="absolute left-5 top-[190px] z-10">
              <VbsLogoTile />
            </div>
            <ol className="absolute left-[348px] top-[60px] flex w-[508px] flex-col gap-[60px]">
              {points.map((text, index) => (
                <ImpactPointRow key={text} index={index} text={text} fontPx={16 / scale} />
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Landing: Dedicated Remote Architect vs Freelancer vs Full-Time */
export function DedicatedRemoteArchitectVsFreelancerVsFullTimeView() {
  const trackPdfClick = useCallback(() => {
    trackLinkedInConversion();
  }, []);

  return (
    <div className="vbs-redesign-page dedicated-capacity-lp min-h-screen overflow-x-hidden bg-white">
      <LandingTopHeader maxWidth={1400} />

      <main className="min-w-0">
        {/* Hero — Capacity Decision Framework */}
        <section className="overflow-hidden py-16 max-lg:py-14 lg:py-[90px]">
          <PageContainer className="grid grid-cols-1 items-center gap-8 max-lg:gap-8 lg:grid-cols-[minmax(0,55fr)_minmax(0,45fr)] lg:gap-10">
            <div className="flex w-full min-w-0 flex-col items-start gap-6 max-lg:gap-5 lg:gap-[30px]">
              <div className="flex w-full flex-col items-start gap-5">
                <div className="flex w-full flex-col items-start gap-3">
                  <MepSectionTag label="Capacity Decision Framework" />
                  <h1 className="w-full text-section capitalize !text-[clamp(32px,8vw,40px)] !leading-[1.15] sm:!text-[clamp(32px,8vw,40px)] lg:!text-[54px] lg:!leading-[1.15]">
                    <span className="font-medium text-[#111111]">
                      Adding People Should Reduce Delivery Pressure, But{" "}
                    </span>
                    <span className="font-light text-accent">Why Does It&nbsp;Often Increase?</span>
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

            <div className="w-full min-w-0">
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
          <PageContainer className="flex flex-col items-start gap-5 max-lg:gap-5">
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

            <div className="grid w-full grid-cols-1 items-start gap-8 max-lg:gap-8 lg:grid-cols-[minmax(0,45fr)_minmax(0,55fr)] lg:items-stretch lg:gap-[60px]">
              <div className="relative aspect-[710/446] h-auto w-full min-w-0 overflow-hidden rounded-[10px] bg-white lg:aspect-auto lg:h-full lg:min-h-full">
                <Image
                  src={pressureImage}
                  alt="When work increases but delivery pressure does not ease"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                <StatOverlay
                  value="78%"
                  label={"increased coordination\nload post-hire"}
                  gapClassName="gap-2"
                />
              </div>

              <div className="flex w-full min-w-0 flex-col items-start gap-3">
                <ul className="!m-0 flex w-full !list-none flex-col !p-0 !pl-0">
                  {pressurePoints.map((point, index) => (
                    <li
                      key={point.number}
                      className={cn(
                        "relative !m-0 flex items-start gap-2.5",
                        index === 0 ? "pt-0" : "pt-3",
                        index === pressurePoints.length - 1 ? "pb-0" : "pb-4",
                      )}
                    >
                      <span className="shrink-0 text-[16px] font-semibold leading-6 text-[#D70416]">
                        {point.number}
                      </span>
                      <p
                        className="mb-0 font-normal !text-[#111111]"
                        style={{ fontSize: 16, lineHeight: "24px" }}
                      >
                        {point.text}
                      </p>
                      {index < pressurePoints.length - 1 ? (
                        <span
                          aria-hidden
                          className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-[#E6E6E6] to-transparent"
                        />
                      ) : null}
                    </li>
                  ))}
                </ul>

                <aside
                  className="w-full rounded-[10px] bg-[#F8FFFA] p-5"
                  style={{ outline: "1px solid #42AA32", outlineOffset: "-1px" }}
                >
                  <p className="!text-[#111111] text-[16px] font-normal leading-6">
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
              <div className="grid w-full grid-cols-1 items-start gap-3 lg:grid-cols-3">
                {optionCards.map((card) => (
                  <article
                    key={card.title}
                    className="flex h-auto flex-col items-start justify-start gap-[30px] overflow-hidden rounded-[10px] bg-white p-5"
                    style={{ outline: "1px solid #CBCCCD", outlineOffset: "-1px" }}
                  >
                    <div
                      className="flex h-[70px] w-[70px] shrink-0 items-center justify-center overflow-hidden rounded-[10px] bg-white p-[15px]"
                      style={{ outline: "1px solid #CBCCCD", outlineOffset: "-1px" }}
                    >
                      <Image
                        src={card.icon}
                        alt=""
                        width={46}
                        height={46}
                        className="h-[46px] w-[46px] object-contain"
                      />
                    </div>
                    <div className="flex w-full flex-col items-start gap-2 overflow-hidden">
                      <h3
                        className="mb-0 w-full !text-[24px] !font-medium !leading-normal !text-[#111111]"
                        style={{ color: "#111111", fontSize: 24, fontWeight: 500 }}
                      >
                        {card.title}
                      </h3>
                      <p
                        className="mb-0 w-full whitespace-pre-line !text-[16px] !font-normal !leading-6 !text-[#808080]"
                        style={{ color: "#808080", fontSize: 16, fontWeight: 400, lineHeight: "24px" }}
                      >
                        {card.description}
                      </p>
                      <p
                        className="mb-0 flex w-full items-start gap-2 !text-[16px] !font-normal !leading-6 !text-[#42AA32]"
                        style={{ color: "#42AA32", fontSize: 16, fontWeight: 400, lineHeight: "24px" }}
                      >
                        <span className="mt-[7px] size-1.5 shrink-0 rounded-full bg-[#42AA32]" />
                        {card.positive}
                      </p>
                      <p
                        className="mb-0 flex w-full items-start gap-2 !text-[16px] !font-normal !leading-6 !text-[#D70416]"
                        style={{ color: "#D70416", fontSize: 16, fontWeight: 400, lineHeight: "24px" }}
                      >
                        <span className="mt-[7px] size-1.5 shrink-0 rounded-full bg-[#D70416]" />
                        {card.negative}
                      </p>
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
          <PageContainer className="flex flex-col items-start gap-4 max-lg:gap-4">
            <header className="flex w-full max-w-[745px] flex-col items-start gap-3">
              <div className="flex w-full flex-col items-start gap-3">
                <MepSectionTag label="What This Matrix Helps You Evaluate" />
                <h2 className="w-full text-section">
                  <span className="font-medium text-[#111111]">
                    Compare Options Based on
                    <br />
                  </span>
                  <span className="font-light text-accent">How Work Actually Flows</span>
                </h2>
              </div>
              <p className="max-w-[631px] text-[16px] font-normal leading-6 text-[#808080]">
                This matrix focuses on delivery behaviour, not hiring theory. It helps you evaluate
                how each model performs inside live project conditions.
              </p>
            </header>

            <div className="grid w-full grid-cols-1 items-start gap-8 max-lg:gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-stretch lg:gap-10">
              <div className="relative aspect-[710/560] h-auto w-full min-w-0 overflow-hidden rounded-[10px] bg-white lg:aspect-auto lg:h-full lg:min-h-full">
                <Image
                  src={matrixEvaluateImage}
                  alt="What this matrix helps you evaluate"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-[rgba(17,17,17,0.8)] from-[15%] to-transparent"
                  aria-hidden
                />
                <p className="absolute bottom-5 left-10 right-5 text-[16px] font-medium leading-6 text-white">
                  Evaluate every dimension before your next capacity commitment
                </p>
              </div>

              <div className="flex w-full min-w-0 flex-col items-start gap-[30px]">
                <div className="flex w-full flex-col items-start">
                  {matrixCriteria.map((item, index) => (
                    <div
                      key={item}
                      className={cn(
                        "relative flex w-full items-start gap-2",
                        index === 0 ? "pt-0" : "pt-3",
                        index === matrixCriteria.length - 1 ? "pb-0" : "pb-3",
                      )}
                    >
                      <span className="flex h-6 w-4 shrink-0 items-center justify-center">
                        <span className="size-1.5 rounded-full bg-[#808080]" />
                      </span>
                      <p className="mb-0 min-w-0 flex-1 text-[16px] font-normal leading-6 text-[#808080]">
                        {item}
                      </p>
                      {index < matrixCriteria.length - 1 ? (
                        <span
                          aria-hidden
                          className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-[#E6E6E6] to-transparent"
                        />
                      ) : null}
                    </div>
                  ))}
                </div>
                <CalloutAside>
                  It helps you evaluate impact before committing, not after.
                </CalloutAside>
              </div>
            </div>
          </PageContainer>
        </section>

        {/* What Actually Changes After You Decide */}
        <section className="bg-white py-16 max-lg:py-12 lg:py-20">
          <PageContainer className="flex items-center gap-8 max-lg:flex-col max-lg:items-stretch max-lg:gap-6 lg:gap-8 min-[1440px]:gap-[60px]">
            <div className="flex w-full min-w-0 max-w-[508px] flex-col items-start gap-3 max-lg:max-w-full lg:shrink">
              <div className="flex w-full flex-col items-start gap-3">
                <MepSectionTag label="What Actually Changes After You Decide" />
                <h2 className="w-full text-section">
                  <span className="font-medium text-[#111111]">The Impact Shows </span>
                  <span className="font-light text-accent">Up Inside Active Projects</span>
                </h2>
              </div>
              <div className="flex w-full flex-col items-start gap-2">
                <p className="w-full max-w-[508px] text-[16px] font-normal leading-6 text-[#808080]">
                  Capacity decisions reshape how drawings, reviews, and approvals move through your
                  firm.
                </p>
                <p className="w-full text-[16px] font-normal leading-6 text-[#808080]">
                  After implementation, firms often notice:
                </p>
                <div className="mt-1 hidden w-full lg:block">
                  <CalloutAside>
                    “These changes are not theoretical. They directly affect delivery timelines and
                    project stability.”
                  </CalloutAside>
                </div>
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
          <PageContainer className="grid grid-cols-1 items-start gap-8 max-lg:gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.85fr)] lg:items-center lg:gap-8 min-[1440px]:grid-cols-[minmax(0,55fr)_minmax(0,45fr)] min-[1440px]:gap-[60px]">
            <div className="flex w-full min-w-0 flex-col items-start gap-5">
              <div className="flex w-full flex-col items-start gap-3">
                <MepSectionTag label="Where Most Decisions Go Wrong" />
                <h2 className="w-full text-section">
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

            <div className="relative aspect-[710/446] h-auto w-full min-w-0 overflow-hidden rounded-[10px] bg-white">
              <Image
                src={decisionsWrongImage}
                alt="Where most capacity decisions go wrong"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <StatOverlay
                value="60%"
                label={"senior architect time lost to\nreviews vs. leading"}
                gapClassName="gap-2"
                widthClassName="w-[256px] max-w-[calc(100%-2.5rem)]"
              />
            </div>
          </PageContainer>
        </section>

        {/* Before You Choose a Model */}
        <section className="bg-[#FAFAFA] py-16 max-lg:py-12 lg:py-[100px]">
          <PageContainer className="flex flex-col items-stretch gap-2">
            <header className="flex w-full flex-col items-start gap-2">
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
                <div className="grid w-full grid-cols-1 gap-3 lg:grid-cols-4">
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
                        className="my-3 h-px w-full bg-gradient-to-r from-transparent via-[#CBCCCD] to-transparent lg:my-6"
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
