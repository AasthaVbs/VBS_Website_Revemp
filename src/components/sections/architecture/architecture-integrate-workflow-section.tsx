"use client";

import type { StaticImageData } from "next/image";
import Image from "next/image";

import { PageContainer } from "@/components/layout/page-container";
import { SectionTag } from "@/components/sections/section-primitives";
import {
  architectureWorkflowIntegrateSection,
  architectureWorkflowIntegrateSteps,
} from "@/constants/architecture-services-redesign-content";
import { cn } from "@/lib/utils";

type WorkflowTag = string | { label: string; tint?: string };

export type IntegrateWorkflowStep = {
  id: string;
  color: string;
  tint: string;
  position: "top-left" | "top-right" | "bottom-right" | "bottom-left" | string;
  number: string;
  title: string;
  body: string;
  tagRows: WorkflowTag[][];
};

export type IntegrateWorkflowSection = {
  tag: string;
  titleParts: { text: string; className: string }[];
  description: string;
  note?: { text: string };
  centerLogo: string | StaticImageData;
};

const POSITION_CLASS: Record<string, string> = {
  "top-left": "arch-svc-workflow__step--discover",
  "top-right": "arch-svc-workflow__step--integrate",
  "bottom-right": "arch-svc-workflow__step--deliver",
  "bottom-left": "arch-svc-workflow__step--improve",
};

const TEXT_ALIGN_RIGHT = new Set(["top-left", "bottom-left"]);

/** Thin circular ring — continuous yellow / blue / red / green with mid-arc clockwise arrows. */
function WorkflowRing({ className }: { className?: string }) {
  const cx = 200;
  const cy = 200;
  const r = 188;
  const stroke = 5;

  const polar = (deg: number, radius = r) => {
    const rad = ((deg - 90) * Math.PI) / 180;
    return { x: cx + radius * Math.cos(rad), y: cy + radius * Math.sin(rad) };
  };

  const arcPath = (startDeg: number, endDeg: number) => {
    const start = polar(startDeg);
    const end = polar(endDeg);
    const sweep = ((endDeg - startDeg) % 360 + 360) % 360;
    const largeArc = sweep > 180 ? 1 : 0;
    return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArc} 1 ${end.x} ${end.y}`;
  };

  // Continuous quadrants (no gaps). Arrows sit at each arc midpoint.
  const segments = [
    { color: "#F0B300", start: 270, end: 360, mid: 315 }, // top-left
    { color: "#2299D6", start: 0, end: 90, mid: 45 }, // top-right
    { color: "#D70416", start: 90, end: 180, mid: 135 }, // bottom-right
    { color: "#42AA32", start: 180, end: 270, mid: 225 }, // bottom-left
  ];

  return (
    <svg
      className={className}
      viewBox="0 0 400 400"
      width="400"
      height="400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      {segments.map((seg) => {
        const tip = polar(seg.mid);
        const tipAngle = ((seg.mid - 90) * Math.PI) / 180;
        // Clockwise tangent at midpoint.
        const tx = Math.cos(tipAngle + Math.PI / 2);
        const ty = Math.sin(tipAngle + Math.PI / 2);
        const nx = Math.cos(tipAngle);
        const ny = Math.sin(tipAngle);
        const size = 10;
        // Open chevron (V) pointing clockwise, matching the reference.
        const tipPt = { x: tip.x + tx * size, y: tip.y + ty * size };
        const left = {
          x: tip.x - tx * (size * 0.35) - nx * (size * 0.7),
          y: tip.y - ty * (size * 0.35) - ny * (size * 0.7),
        };
        const right = {
          x: tip.x - tx * (size * 0.35) + nx * (size * 0.7),
          y: tip.y - ty * (size * 0.35) + ny * (size * 0.7),
        };

        return (
          <g key={seg.color}>
            <path d={arcPath(seg.start, seg.end)} stroke={seg.color} strokeWidth={stroke} strokeLinecap="butt" />
            <path
              d={`M ${left.x} ${left.y} L ${tipPt.x} ${tipPt.y} L ${right.x} ${right.y}`}
              stroke={seg.color}
              strokeWidth={3}
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </g>
        );
      })}
    </svg>
  );
}

function resolveTag(tag: WorkflowTag) {
  if (typeof tag === "string") {
    return { label: tag, tint: undefined as string | undefined };
  }
  return tag;
}

function WorkflowStepCard({ step }: { step: IntegrateWorkflowStep }) {
  const alignRight = TEXT_ALIGN_RIGHT.has(step.position);
  const flatTags = step.tagRows.flat();

  return (
    <div
      className={cn(
        "arch-svc-workflow__step flex flex-col gap-5 items-start text-left",
        POSITION_CLASS[step.position],
        alignRight && "lg:items-end lg:text-right",
      )}
    >
      <h3 className="w-full text-[24px] font-medium leading-normal" style={{ color: step.color }}>
        {step.number}
      </h3>
      <div className="flex w-full flex-col gap-2.5">
        <p className="w-full text-[16px] font-normal leading-6 text-[#111111]">{step.title}</p>
        <p className="w-full text-[16px] font-normal leading-6 text-[#808080]">{step.body}</p>
      </div>

      {/* Mobile: single centered wrap so chips fill the row without fake breaks */}
      <div className="arch-svc-workflow__tags arch-svc-workflow__tags--mobile flex w-full flex-wrap items-center justify-center gap-2.5 lg:hidden">
        {flatTags.map((tag) => {
          const resolved = resolveTag(tag);
          return (
            <span
              key={`m-${resolved.label}`}
              className="arch-svc-workflow__tag inline-flex shrink-0 items-center whitespace-nowrap rounded-[10px] px-1.5 py-1.5 text-[14px] font-normal text-[#111111]"
              style={{ backgroundColor: resolved.tint ?? step.tint }}
            >
              {resolved.label}
            </span>
          );
        })}
      </div>

      {/* Desktop: Figma rows — left steps right-align chips, right steps left-align chips */}
      <div
        className={cn(
          "arch-svc-workflow__tags arch-svc-workflow__tags--desktop hidden w-full flex-col gap-2.5 lg:flex",
          alignRight ? "items-end" : "items-start",
        )}
      >
        {step.tagRows.map((row, rowIndex) => (
          <div
            key={`${step.id}-row-${rowIndex}`}
            className={cn(
              "arch-svc-workflow__tag-row flex flex-wrap gap-2.5",
              alignRight ? "justify-end" : "justify-start",
            )}
          >
            {row.map((tag) => {
              const resolved = resolveTag(tag);
              return (
                <span
                  key={resolved.label}
                  className="arch-svc-workflow__tag inline-flex shrink-0 items-center whitespace-nowrap rounded-[10px] px-1.5 py-1.5 text-[14px] font-normal text-[#111111]"
                  style={{ backgroundColor: resolved.tint ?? step.tint }}
                >
                  {resolved.label}
                </span>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * Shared Discover → Integrate → Deliver → Improve workflow diagram.
 * Pass page-specific `section` + `steps` (defaults = architecture-services).
 */
export function ArchitectureIntegrateWorkflowSection({
  section = architectureWorkflowIntegrateSection,
  steps = architectureWorkflowIntegrateSteps,
  headerAlign = "start",
  descriptionMaxWidth,
  stackTitleParts = true,
}: {
  section?: IntegrateWorkflowSection;
  steps?: readonly IntegrateWorkflowStep[];
  /** Architecture page is left-aligned; CAD Figma centers the intro block. */
  headerAlign?: "start" | "center";
  descriptionMaxWidth?: number;
  /** Stack each title part on its own line. Set false for inline wrapping titles. */
  stackTitleParts?: boolean;
}) {
  const isCentered = headerAlign === "center";
  const resolvedDescriptionMaxWidth =
    descriptionMaxWidth ?? (isCentered ? 672 : 850);

  return (
    <section className="arch-svc-workflow bg-white py-12 sm:py-16 lg:py-[100px]">
      <PageContainer className="flex flex-col items-center gap-10 lg:gap-[60px]">
        <div
          className={cn(
            "flex w-full max-w-[890px] flex-col gap-5",
            isCentered ? "items-center self-center text-center" : "items-start self-start text-left",
          )}
        >
          <div className={cn("flex flex-col gap-3", isCentered ? "items-center" : "items-start")}>
            <SectionTag
              label={section.tag}
              className={isCentered ? "self-center" : "self-start"}
            />
            <h2 className="text-section w-full">
              {section.titleParts.map((part, index) => (
                <span
                  key={`${part.text}-${index}`}
                  className={cn(part.className, stackTitleParts && "block")}
                >
                  {stackTitleParts ? part.text.trimEnd() : part.text}
                </span>
              ))}
            </h2>
          </div>
          <p
            className="w-full text-[16px] font-normal leading-6 text-[#808080]"
            style={{ maxWidth: resolvedDescriptionMaxWidth }}
          >
            {section.description}
          </p>
        </div>

        <div className="arch-svc-workflow__diagram w-full">
          {steps.map((step) => (
            <WorkflowStepCard key={step.id} step={step} />
          ))}

          <div className="arch-svc-workflow__circle" aria-hidden>
            <div className="arch-svc-workflow__rotor">
              <WorkflowRing className="arch-svc-workflow__ring h-full w-full" />
            </div>
            <div className="arch-svc-workflow__circle-center">
              <Image
                src={section.centerLogo}
                alt=""
                width={110}
                height={110}
                className="h-[72px] w-[72px] object-contain lg:h-[110px] lg:w-[110px]"
              />
            </div>
          </div>
        </div>

        {section.note ? (
          <div className="arch-svc-workflow__note w-full rounded-[10px] border border-[#42AA32] bg-[#F8FFFA] p-5">
            <p className="m-0 text-[16px] font-normal leading-6 text-[#111111]">{section.note.text}</p>
          </div>
        ) : null}
      </PageContainer>
    </section>
  );
}
