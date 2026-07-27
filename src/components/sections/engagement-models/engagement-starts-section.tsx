import { PageContainer } from "@/components/layout/page-container";
import { MepSectionTag } from "@/components/sections/mep/mep-section-tag";
import {
  engagementStartSteps,
  engagementStartsSection,
} from "@/constants/engagement-models-page-content";

/** Figma node 960:34684 — How Engagement Starts */
export function EngagementStartsSection() {
  const { tag, titleLead, titleAccent, description } = engagementStartsSection;

  return (
    <section className="relative overflow-hidden bg-[#FAFAFA] py-12 sm:py-16 lg:py-[100px]">
      <PageContainer className="flex flex-col items-center gap-8 sm:gap-10 lg:gap-[60px]">
        <div className="flex w-full max-w-[1400px] flex-col items-center gap-4 sm:gap-5">
          <div className="flex max-w-[890px] flex-col items-center gap-3 px-2 text-center">
            <MepSectionTag label={tag} centered />
            <h2 className="mep-section-heading max-w-[688px]">
              <span className="font-medium">{titleLead}</span>
              <span className="text-accent font-light">{titleAccent}</span>
            </h2>
          </div>
          <p className="max-w-[620px] px-2 text-center text-[15px] font-normal leading-6 text-[#808080] sm:text-[16px]">
            {description}
          </p>
        </div>

        <div className="relative w-full max-w-[940px] px-2 sm:px-0">
          {/* Dashed line through badge centers — Figma */}
          <div
            className="pointer-events-none absolute left-[36px] right-[36px] top-[30px] z-0 hidden h-[2px] bg-[repeating-linear-gradient(to_right,#CBCCCD_0_18px,transparent_18px_30px)] sm:left-[40px] sm:right-[40px] sm:top-[35px] min-[360px]:block"
            aria-hidden
          />

          <div className="relative z-10 flex w-full items-start justify-between gap-2 sm:gap-4">
            {engagementStartSteps.map((step) => (
              <EngagementStartStep key={step.number} step={step} />
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

function EngagementStartStep({
  step,
}: {
  step: (typeof engagementStartSteps)[number];
}) {
  return (
    <div className="flex w-[72px] shrink-0 flex-col items-center gap-10 sm:w-[80px] sm:gap-12">
      <div
        className="relative z-10 flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-[10px] bg-[#D70416] outline outline-[6px] outline-[rgba(215,4,22,0.20)] sm:h-[70px] sm:w-[70px]"
        aria-hidden
      >
        <span className="text-[32px] font-medium leading-none text-white sm:text-[42px]">
          {step.number}
        </span>
      </div>
      <p className="text-center text-[14px] font-normal leading-6 text-[#111111] sm:text-[16px]">
        {step.label}
      </p>
    </div>
  );
}
