"use client";

import Image from "next/image";

import { PageContainer } from "@/components/layout/page-container";
import { SectionTag } from "@/components/sections/section-primitives";
import {
  architectureWorkflowIntegrateSection,
  architectureWorkflowIntegrateSteps,
} from "@/constants/architecture-services-redesign-content";
import { cn } from "@/lib/utils";

type WorkflowStep = (typeof architectureWorkflowIntegrateSteps)[number];
type WorkflowTag = string | { label: string; tint?: string };

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

function WorkflowStepCard({ step }: { step: WorkflowStep }) {
  const alignRight = TEXT_ALIGN_RIGHT.has(step.position);

  return (
    <div
      className={cn(
        "arch-svc-workflow__step flex flex-col gap-5",
        POSITION_CLASS[step.position],
        alignRight ? "items-end text-right" : "items-start text-left",
      )}
    >
      <h3 className="w-full text-[24px] font-medium leading-normal" style={{ color: step.color }}>
        {step.number}
      </h3>
      <div className="flex w-full flex-col gap-2.5">
        <p className="w-full text-[16px] font-normal leading-6 text-[#111111]">{step.title}</p>
        <p className="w-full text-[16px] font-normal leading-6 text-[#808080]">{step.body}</p>
      </div>
      <div className={cn("flex w-full flex-col gap-2.5", alignRight ? "items-end" : "items-start")}>
        {step.tagRows.map((row, rowIndex) => (
          <div
            key={`${step.id}-row-${rowIndex}`}
            className={cn("flex flex-wrap gap-2.5", alignRight ? "justify-end" : "justify-start")}
          >
            {row.map((tag) => {
              const resolved = resolveTag(tag as WorkflowTag);
              return (
                <span
                  key={resolved.label}
                  className="arch-svc-workflow__tag inline-flex items-center rounded-[10px] px-1.5 py-1.5 text-[14px] font-normal text-[#111111]"
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

export function ArchitectureIntegrateWorkflowSection({
  section = architectureWorkflowIntegrateSection,
  steps = architectureWorkflowIntegrateSteps,
}: {
  section?: typeof architectureWorkflowIntegrateSection;
  steps?: typeof architectureWorkflowIntegrateSteps;
}) {
  return (
    <section className="arch-svc-workflow bg-white py-12 sm:py-16 lg:py-[100px]">
      <PageContainer className="flex flex-col items-center gap-10 lg:gap-[60px]">
        <div className="flex w-full max-w-[883px] flex-col items-start gap-5 self-start">
          <div className="flex flex-col items-start gap-3">
            <SectionTag label={section.tag} />
            <h2 className="text-section w-full">
              {section.titleParts.map((part, index) => (
                <span key={`${part.text}-${index}`} className={part.className}>
                  {part.text}
                </span>
              ))}
            </h2>
          </div>
          <p className="w-full max-w-[850px] text-[16px] font-normal leading-6 text-[#808080]">
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
          <div className="w-full rounded-[10px] border border-[#42AA32] bg-[#F8FFFA] p-5">
            <p className="m-0 text-[16px] font-normal leading-6 text-[#111111]">{section.note.text}</p>
          </div>
        ) : null}
      </PageContainer>
    </section>
  );
}
