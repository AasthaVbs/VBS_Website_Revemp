"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

import { PageContainer } from "@/components/layout/page-container";
import { MepSectionTag } from "@/components/sections/mep/mep-section-tag";
import {
  mepBimModellingProcessSection,
  mepBimModellingProcessSteps,
  type MepBimModellingProcessStep,
} from "@/constants/mep-bim-modelling-content";
import { cn } from "@/lib/utils";

const STEP_INTERVAL_MS = 2800;
const LAST_STEP_INDEX = mepBimModellingProcessSteps.length - 1;

function subscribePrefersReducedMotion(onStoreChange: () => void) {
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  mediaQuery.addEventListener("change", onStoreChange);
  return () => mediaQuery.removeEventListener("change", onStoreChange);
}

function getPrefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** Figma node 221:14688 — Center timeline with alternating content */
export function MepBimModellingProcessSection() {
  const { tag, titleLead, titleAccent, description } = mepBimModellingProcessSection;
  const prefersReducedMotion = useSyncExternalStore(
    subscribePrefersReducedMotion,
    getPrefersReducedMotion,
    () => false,
  );
  /** Highest step index that has turned red (0 = step 01). Red badges stay; animation stops after 06. */
  const [highlightedUpTo, setHighlightedUpTo] = useState(0);
  const activeHighlightedUpTo = prefersReducedMotion ? LAST_STEP_INDEX : highlightedUpTo;

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const interval = window.setInterval(() => {
      setHighlightedUpTo((current) => {
        if (current >= LAST_STEP_INDEX) {
          window.clearInterval(interval);
          return current;
        }
        return current + 1;
      });
    }, STEP_INTERVAL_MS);

    return () => window.clearInterval(interval);
  }, [prefersReducedMotion]);

  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-16 lg:py-[100px]">
      <PageContainer className="flex flex-col items-center gap-10 lg:gap-[60px]">
        <div className="flex w-full flex-col items-center gap-5 text-center">
          <div className="flex max-w-[890px] flex-col items-center gap-3">
            <MepSectionTag label={tag} />
            <h2 className="mep-section-heading max-w-[688px] capitalize">
              <span className="font-medium">{titleLead}</span>
              <span className="text-accent font-light">{titleAccent}</span>
            </h2>
          </div>
          <p className="max-w-[620px] text-[16px] font-normal leading-6 text-[#808080]">
            {description}
          </p>
        </div>

        <div className="relative w-full max-w-[1440px] px-0 lg:px-[165px]">
          <div
            className="pointer-events-none absolute left-1/2 top-[38px] bottom-[38px] hidden w-[2px] -translate-x-1/2 bg-[repeating-linear-gradient(to_bottom,#CBCCCD_0_10px,transparent_10px_20px)] lg:block"
            aria-hidden
          />

          <ol className="relative flex flex-col gap-10 lg:gap-20">
            {mepBimModellingProcessSteps.map((step, index) => (
              <ProcessTimelineRow
                key={step.number}
                step={step}
                index={index}
                highlightedUpTo={activeHighlightedUpTo}
              />
            ))}
          </ol>
        </div>
      </PageContainer>
    </section>
  );
}

function ProcessTimelineRow({
  step,
  index,
  highlightedUpTo,
}: {
  step: MepBimModellingProcessStep;
  index: number;
  highlightedUpTo: number;
}) {
  const isHighlighted = index <= highlightedUpTo;
  const isLeft = step.align === "right";

  return (
    <li className="grid grid-cols-1 items-start gap-5 lg:grid-cols-[minmax(0,1fr)_76px_minmax(0,1fr)] lg:gap-x-[57px] lg:gap-y-0">
      {/* Desktop — left column */}
      <div
        className={cn(
          "hidden lg:col-start-1 lg:row-start-1 lg:flex",
          isLeft ? "justify-end" : "min-h-0",
        )}
      >
        {isLeft ? <StepContent step={step} align="right" /> : null}
      </div>

      {/* Center — step number (always one vertical column) */}
      <div className="flex justify-center lg:col-start-2 lg:row-start-1">
        <StepBadge highlighted={isHighlighted} number={step.number} />
      </div>

      {/* Desktop — right column */}
      <div
        className={cn(
          "hidden lg:col-start-3 lg:row-start-1 lg:flex",
          !isLeft ? "justify-start" : "min-h-0",
        )}
      >
        {!isLeft ? <StepContent step={step} align="left" /> : null}
      </div>

      {/* Mobile — stacked under badge */}
      <div className="lg:hidden">
        <StepContent step={step} align={isLeft ? "right" : "left"} className="mx-auto" />
      </div>
    </li>
  );
}

function StepContent({
  step,
  align,
  className,
}: {
  step: MepBimModellingProcessStep;
  align: "left" | "right";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex w-full max-w-[460px] flex-col gap-5 p-5",
        align === "right" ? "items-end text-right" : "items-start text-left",
        className,
      )}
    >
      <h3 className="text-[24px] font-medium leading-[1.35] text-[#111111]">{step.title}</h3>
      <p className="text-[16px] font-normal leading-[26px] text-[#808080]">{step.description}</p>
    </div>
  );
}

function StepBadge({ highlighted, number }: { highlighted: boolean; number: string }) {
  return (
    <div
      className={cn(
        "relative z-10 flex h-[76px] w-[76px] shrink-0 items-center justify-center rounded-[10px] px-[19px] py-4 shadow-[0_4px_15px_rgba(0,0,0,0.15)] transition-colors duration-500 ease-in-out",
        highlighted ? "bg-[#D70416]" : "bg-white",
      )}
    >
      <span
        className={cn(
          "whitespace-nowrap text-[36px] font-medium leading-none transition-colors duration-500 ease-in-out",
          highlighted ? "text-white" : "text-[#111111]",
        )}
      >
        {number}
      </span>
    </div>
  );
}
