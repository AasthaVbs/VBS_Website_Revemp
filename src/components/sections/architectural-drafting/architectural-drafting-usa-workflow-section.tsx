"use client";

import { useRef } from "react";

import { PageContainer } from "@/components/layout/page-container";
import { MepSectionTag } from "@/components/sections/mep/mep-section-tag";
import {
  architecturalDraftingUsaWorkflowSection,
  architecturalDraftingUsaWorkflowSteps,
} from "@/constants/architectural-drafting-services-usa-content";
import { useWorkflowScrollProgress } from "@/hooks/useWorkflowScrollProgress";
import { cn } from "@/lib/utils";

type WorkflowStep = (typeof architecturalDraftingUsaWorkflowSteps)[number];

function WorkflowBadge({
  number,
  highlighted,
}: {
  number: string;
  highlighted: boolean;
}) {
  return (
    <div
      className={cn(
        "mep-figma-workflow__badge ads-usa-workflow__badge",
        highlighted
          ? "mep-figma-workflow__badge--active ads-usa-workflow__badge--active"
          : "mep-figma-workflow__badge--inactive ads-usa-workflow__badge--inactive",
      )}
    >
      <span className="mep-figma-workflow__badge-number ads-usa-workflow__badge-number">
        {number}
      </span>
    </div>
  );
}

/** Figma 3910:65992 — two-column How it Works with scroll-driven step highlights. */
export function ArchitecturalDraftingUsaWorkflowSection({
  section = architecturalDraftingUsaWorkflowSection,
  steps = architecturalDraftingUsaWorkflowSteps,
  id = "ads-usa-workflow",
}: {
  section?: typeof architecturalDraftingUsaWorkflowSection;
  steps?: WorkflowStep[];
  id?: string;
}) {
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const { activeIndex, lineProgress, axisLayout } = useWorkflowScrollProgress(
    timelineRef,
    steps.length,
  );

  const axisStyle = axisLayout
    ? {
        top: `${axisLayout.top}px`,
        height: `${axisLayout.height}px`,
        bottom: "auto" as const,
      }
    : undefined;

  return (
    <section
      id={id}
      className="ads-usa-workflow bg-[#FAFAFA] py-12 sm:py-16 lg:py-[100px]"
    >
      <PageContainer className="flex flex-col items-start gap-10 lg:flex-row lg:items-start lg:justify-center lg:gap-[60px]">
        <div className="flex w-full max-w-[500px] shrink-0 flex-col items-start gap-5 lg:w-[500px]">
          <div className="flex flex-col items-start gap-3">
            <MepSectionTag label={section.tag} />
            <h2 className="text-section capitalize">
              <span className="font-medium text-[#111111]">{section.titleLine1}</span>
              <span className="font-light text-accent">{section.titleLine2}</span>
            </h2>
          </div>
          <p className="text-[16px] font-normal capitalize leading-6 text-[#808080]">
            {section.description}
          </p>
        </div>

        <div
          ref={timelineRef}
          className="ads-usa-workflow__timeline relative w-full flex-1"
        >
          <div className="ads-usa-workflow__axis" aria-hidden style={axisStyle}>
            <div
              className="ads-usa-workflow__axis-progress"
              style={{ height: `${lineProgress * 100}%` }}
            />
          </div>

          <ol className="ads-usa-workflow__steps m-0 flex list-none flex-col gap-16 p-0 lg:gap-20">
            {steps.map((step, index) => {
              const highlighted = index <= activeIndex;
              return (
                <li
                  key={step.number}
                  data-workflow-step={index}
                  className="ads-usa-workflow__step relative flex items-center gap-5 sm:gap-[30px]"
                >
                  <WorkflowBadge number={step.number} highlighted={highlighted} />
                  <div className="flex min-w-0 flex-1 flex-col gap-4">
                    <h3 className="m-0 text-[22px] font-medium leading-normal text-[#111111] sm:text-[24px]">
                      {step.title}
                    </h3>
                    <p className="m-0 max-w-[389px] text-[16px] font-normal leading-[26px] text-[#808080]">
                      {step.text}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </PageContainer>
    </section>
  );
}
