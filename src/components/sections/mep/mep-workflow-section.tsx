// @ts-nocheck
import { PageContainer } from "@/components/layout/page-container";
import { MepSectionTag } from "@/components/sections/mep/mep-section-tag";
import { mepWorkflowSteps } from "@/constants/mep-engineers-content";
import { cn } from "@/lib/utils";

const MEP_WORKFLOW_INTRO =
  "Comprehensive MEP Modeling Services Integrating HVAC, Electrical, Mechanical Piping, Plumbing, and Fire Protection Workflows";

function WorkflowStepBadge({ number, highlight }: { number: string; highlight: boolean }) {
  return (
    <div
      className={cn(
        "flex w-[76px] shrink-0 flex-col items-center justify-center rounded-[10px] px-[19px] py-4 shadow-[0_4px_15px_rgba(0,0,0,0.15)]",
        highlight ? "bg-[#D70416] text-white" : "bg-white text-[#111111]",
      )}
    >
      <span className="text-[36px] font-medium leading-none">{number}</span>
    </div>
  );
}

function WorkflowStepContent({
  title,
  description,
  align,
}: {
  title: string;
  description: string;
  align: "left" | "right";
}) {
  const isRight = align === "right";

  return (
    <div className="w-full max-w-[530px] rounded-[10px] p-5">
      <div className={cn("flex flex-col gap-2.5", isRight ? "items-end text-right" : "items-start text-left")}>
        <h3 className="text-[24px] font-medium leading-[1.35] text-[#111111]">{title}</h3>
        <p className="text-[16px] font-normal leading-[26px] text-[#808080]">{description}</p>
      </div>
    </div>
  );
}

/** Figma node 265:67432 — center-axis timeline; text alternates left/right */
export function MepWorkflowSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-[100px]">
      <PageContainer className="flex flex-col items-center gap-10 lg:gap-[60px]">
        <div className="flex w-full max-w-[890px] flex-col items-center gap-5 text-center">
          <div className="flex flex-col items-center gap-3">
            <MepSectionTag label="Service Workflow" centered />
            <h2 className="mep-section-heading max-w-[688px]">
              <span className="font-medium">Our Revit MEP BIM </span>
              <span className="text-accent font-light">Services Workflow</span>
            </h2>
          </div>
          <p className="max-w-[620px] text-[16px] font-normal leading-6 text-[#808080]">
            {MEP_WORKFLOW_INTRO}
          </p>
        </div>

        <div className="relative w-full ">
          <div
            className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-0 -translate-x-1/2 border-l border-dashed border-[#CBCCCD] lg:block"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute left-1/2 top-0 hidden h-[220px] w-0 -translate-x-1/2 border-l border-dashed border-[#D70416] lg:block"
            aria-hidden
          />

          <div className="relative flex flex-col gap-16 lg:gap-[80px]">
            {mepWorkflowSteps.map((step, index) => {
              const textOnLeft = index % 2 === 0;

              return (
                <article
                  key={step.number}
                  className="grid grid-cols-1 items-center gap-6 lg:grid-cols-[minmax(0,1fr)_76px_minmax(0,1fr)] lg:gap-x-[57px] lg:gap-y-0"
                >
                  {/* Left column — steps 01, 03, 05 (desktop) */}
                  <div className="relative z-10 hidden min-h-[76px] lg:col-start-1 lg:row-start-1 lg:flex lg:justify-end">
                    {textOnLeft ? (
                      <WorkflowStepContent
                        title={step.title}
                        description={step.description}
                        align="right"
                      />
                    ) : null}
                  </div>

                  {/* Center — step number on the vertical axis */}
                  <div className="relative z-10 flex justify-center lg:col-start-2 lg:row-start-1">
                    <WorkflowStepBadge number={step.number} highlight={step.highlight} />
                  </div>

                  {/* Right column — steps 02, 04, 06 (desktop) */}
                  <div className="relative z-10 hidden min-h-[76px] lg:col-start-3 lg:row-start-1 lg:flex lg:justify-start">
                    {!textOnLeft ? (
                      <WorkflowStepContent
                        title={step.title}
                        description={step.description}
                        align="left"
                      />
                    ) : null}
                  </div>

                  {/* Mobile — text under centered badge */}
                  <div className="relative z-10 w-full lg:hidden">
                    <WorkflowStepContent
                      title={step.title}
                      description={step.description}
                      align={textOnLeft ? "right" : "left"}
                    />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
