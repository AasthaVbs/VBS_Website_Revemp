// @ts-nocheck
"use client";

import { useRef } from "react";
import { PageContainer } from "@/components/layout/page-container";
import { cn } from "@/lib/utils";
import { useWorkflowScrollProgress } from "@/hooks/useWorkflowScrollProgress";
import {
  mepWorkflowSection,
  mepWorkflowSteps,
} from "@/constants/mep-engineers-content";

function WorkflowBadge({ number, highlighted }) {
  return (
    <div
      className={cn(
        "mep-figma-workflow__badge",
        highlighted
          ? "mep-figma-workflow__badge--active"
          : "mep-figma-workflow__badge--inactive",
      )}
    >
      <span className="mep-figma-workflow__badge-number">{number}</span>
    </div>
  );
}

function WorkflowConnector() {
  return <div className="mep-figma-workflow__connector" aria-hidden />;
}

function WorkflowStepContent({ step, align }) {
  const alignRight = align === "right";

  return (
    <div
      className={cn(
        "mep-figma-workflow__step-panel flex w-full max-w-[530px] flex-col overflow-hidden rounded-[10px] p-5",
        alignRight ? "items-end text-right" : "items-start text-left",
      )}
    >
      <div
        className={cn(
          "flex w-full flex-col gap-[10px] overflow-hidden",
          alignRight ? "items-end" : "items-start",
        )}
      >
        <p className="mep-figma-workflow__step-title w-full">{step.title}</p>
        <p className="mep-figma-workflow__step-text w-full">{step.text}</p>
      </div>
    </div>
  );
}

function WorkflowStepRow({ step, index, activeIndex, isLast }) {
  const textOnLeft = index % 2 === 0;
  const highlighted = index <= activeIndex;

  return (
    <li className="mep-figma-workflow__step" data-workflow-step={index}>
      <div className="mep-figma-workflow__step-desktop">
        <div
          className={cn(
            "mep-figma-workflow__slot mep-figma-workflow__slot--left",
            textOnLeft && "mep-figma-workflow__slot--filled",
          )}
        >
          {textOnLeft ? <WorkflowStepContent step={step} align="right" /> : null}
        </div>

        <div className="mep-figma-workflow__step-center">
          <WorkflowBadge number={step.number} highlighted={highlighted} />
          {!isLast ? <WorkflowConnector /> : null}
        </div>

        <div
          className={cn(
            "mep-figma-workflow__slot mep-figma-workflow__slot--right",
            !textOnLeft && "mep-figma-workflow__slot--filled",
          )}
        >
          {!textOnLeft ? <WorkflowStepContent step={step} align="left" /> : null}
        </div>
      </div>

      <div className="mep-figma-workflow__step-mobile">
        <WorkflowBadge number={step.number} highlighted={highlighted} />
        <WorkflowStepContent step={step} align="left" />
      </div>
    </li>
  );
}

/**
 * Service Workflow — Figma node 5-13078 with scroll-driven step highlights.
 */
export function MepWorkflowSection({
  section = mepWorkflowSection,
  steps = mepWorkflowSteps,
  id = "workflow",
}) {
  const timelineRef = useRef(null);
  const { activeIndex, lineProgress, axisLayout } = useWorkflowScrollProgress(
    timelineRef,
    steps.length,
  );

  const axisStyle = axisLayout
    ? {
      top: `${axisLayout.top}px`,
      height: `${axisLayout.height}px`,
      bottom: "auto",
    }
    : undefined;

  return (
    <section
      id={id}
      className="mep-figma-workflow flex flex-col items-center overflow-hidden bg-white py-[100px]"
    >
      <PageContainer className="mep-figma-workflow__container flex flex-col items-center gap-[60px]">
        <header className="mep-figma-workflow__head">
          <div className="mep-figma-workflow__head-top">
            <span className="mep-figma-workflow__tag">{section.tag}</span>
            <p className="mep-figma-workflow__title">
              <span className="mep-figma-workflow__title-dark">{section.titleLine1}</span>
              <span className="mep-figma-workflow__title-accent">{section.titleLine2}</span>
              {section.titleLine3 ? (
                <span className="mep-figma-workflow__title-dark">{section.titleLine3}</span>
              ) : null}
            </p>
          </div>
          <p className="mep-figma-workflow__section-desc">{section.description}</p>
        </header>

        <div
          ref={timelineRef}
          className="mep-figma-workflow__timeline relative w-full self-stretch"
        >
          <div className="mep-figma-workflow__axis" aria-hidden style={axisStyle}>
            <div
              className="mep-figma-workflow__axis-progress"
              style={{ height: `${lineProgress * 100}%` }}
            />
          </div>

          <ol className="mep-figma-workflow__steps">
            {steps.map((step, index) => (
              <WorkflowStepRow
                key={step.number}
                step={step}
                index={index}
                activeIndex={activeIndex}
                isLast={index === steps.length - 1}
              />
            ))}
          </ol>
        </div>
      </PageContainer>
    </section>
  );
}
