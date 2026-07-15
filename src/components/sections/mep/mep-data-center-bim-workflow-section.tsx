import { PageContainer } from "@/components/layout/page-container";
import { SectionTag } from "@/components/sections/section-primitives";
import {
  dataCenterBimWorkflowSection,
  dataCenterBimWorkflowSteps,
} from "@/constants/mep-data-center-whitepaper-content";
import { cn } from "@/lib/utils";

/** Figma node 994:24686 — Data center BIM workflow timeline */
export function MepDataCenterBimWorkflowSection() {
  const { tag, titleLead, titleAccent, description } = dataCenterBimWorkflowSection;

  return (
    <section className="relative overflow-hidden bg-white py-12 lg:py-[100px]">
      <PageContainer className="flex flex-col items-center gap-10 lg:gap-[60px]">
        <div className="flex w-full max-w-[890px] flex-col items-center gap-5 text-center">
          <div className="flex flex-col items-center gap-3">
            <SectionTag label={tag} />
            <h2 className="text-section max-w-[760px]">
              <span className="font-medium">
                {titleLead}
                <br className="hidden sm:block" />
              </span>
              <span className="font-light text-[#D70416]">{titleAccent}</span>
            </h2>
          </div>
          <p className="max-w-[790px] text-[16px] leading-6 text-[#808080]">{description}</p>
        </div>

        <div className="relative w-full max-w-[1440px] px-0 sm:px-4 lg:px-[165px]">
          <div
            className="pointer-events-none absolute left-1/2 top-[38px] bottom-[38px] hidden w-[2px] -translate-x-1/2 bg-[repeating-linear-gradient(to_bottom,#CBCCCD_0_10px,transparent_10px_20px)] lg:block"
            aria-hidden
          />

          <ol className="relative flex flex-col gap-10 lg:gap-20">
            {dataCenterBimWorkflowSteps.map((step) => {
              const textOnLeft = step.align === "right";

              return (
                <li
                  key={step.number}
                  className="grid grid-cols-1 items-start gap-5 lg:grid-cols-[minmax(0,1fr)_76px_minmax(0,1fr)] lg:gap-x-[57px]"
                >
                  <div
                    className={cn(
                      "hidden lg:col-start-1 lg:row-start-1 lg:flex",
                      textOnLeft ? "justify-end" : "min-h-0",
                    )}
                  >
                    {textOnLeft ? (
                      <WorkflowStepContent
                        title={step.title}
                        description={step.description}
                        align="right"
                      />
                    ) : null}
                  </div>

                  <div className="flex justify-center lg:col-start-2 lg:row-start-1">
                    <WorkflowStepBadge number={step.number} highlight={step.highlight} />
                  </div>

                  <div
                    className={cn(
                      "hidden lg:col-start-3 lg:row-start-1 lg:flex",
                      !textOnLeft ? "justify-start" : "min-h-0",
                    )}
                  >
                    {!textOnLeft ? (
                      <WorkflowStepContent
                        title={step.title}
                        description={step.description}
                        align="left"
                      />
                    ) : null}
                  </div>

                  <div className="w-full lg:hidden">
                    <WorkflowStepContent
                      title={step.title}
                      description={step.description}
                      align="left"
                      className="max-w-none px-0"
                    />
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

function WorkflowStepContent({
  title,
  description,
  align,
  className,
}: {
  title: string;
  description: string;
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
      <h3 className="text-[20px] font-medium leading-[1.35] text-[#111111] sm:text-[24px]">{title}</h3>
      <p className="text-[15px] leading-[26px] text-[#808080] sm:text-[16px]">{description}</p>
    </div>
  );
}

function WorkflowStepBadge({ number, highlight }: { number: string; highlight: boolean }) {
  return (
    <div
      className={cn(
        "relative z-10 flex h-[76px] w-[76px] shrink-0 items-center justify-center rounded-[10px] px-[19px] py-4 shadow-[0_4px_15px_rgba(0,0,0,0.15)]",
        highlight ? "bg-[#D70416]" : "bg-white",
      )}
    >
      <span
        className={cn(
          "whitespace-nowrap text-[36px] font-medium leading-none",
          highlight ? "text-white" : "text-[#111111]",
        )}
      >
        {number}
      </span>
    </div>
  );
}
