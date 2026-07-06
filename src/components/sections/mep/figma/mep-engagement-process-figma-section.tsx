// @ts-nocheck
import { Fragment } from "react";
import { PageContainer } from "@/components/layout/page-container";
import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";
import { MepSectionTag } from "@/components/sections/mep/mep-section-tag";
import { cn } from "@/lib/utils";
import {
  mepEngagementProcessSection,
  mepEngagementProcessSteps,
} from "@/constants/mep-engineers-content";

/** Engagement model — Next /mep-engineers (Figma 265:67484). */
export function MepEngagementProcessSection({
  section = mepEngagementProcessSection,
  steps = mepEngagementProcessSteps,
}) {
  const { tag, titleLine1, titleLine2, description, cta, ctaHref } = section;

  return (
    <section id="engagement" className="mep-engagement-process overflow-hidden bg-[#FAFAFA] py-16 lg:py-[100px]">
      <PageContainer className="flex flex-col items-center gap-5 lg:gap-[50px]">
        <div className="flex w-full flex-col items-start gap-3">
          <div className="flex flex-col items-start gap-3">
            <MepSectionTag label={tag} />
            <h2 className="mep-section-heading max-w-[719px] capitalize">
              <span className="block font-medium text-[#111111]">{titleLine1}</span>
              <span className="text-accent block font-light">{titleLine2}</span>
            </h2>
          </div>
          <p className="max-w-[640px] text-[16px] font-normal capitalize leading-6 text-[#808080]">
            {description}
          </p>
        </div>

        <div className="mep-engagement-process__steps flex w-full flex-col items-stretch lg:flex-row">
          {steps.map((step, index) => (
            <Fragment key={step.title}>
              {index > 0 ? <div className="mep-engagement-process__divider" aria-hidden /> : null}
              <article className="mep-engagement-process__card flex min-w-0 flex-1 flex-col items-start gap-3 self-stretch overflow-hidden px-2.5 lg:px-[10px]">
                <div className="flex flex-col items-start gap-2.5">
                  <div className="leading-none">
                    <span className={cn("text-[36px] font-normal", step.prefixColor)}>
                      {step.prefix}
                    </span>
                    <span className="text-[36px] font-normal text-[#111111]">{step.number}</span>
                  </div>
                  <h3 className="text-[24px] font-normal leading-[1.35] text-[#111111]">
                    {step.title}
                  </h3>
                </div>
                <p
                  className={cn(
                    "w-full text-[16px] font-normal leading-6 text-[#808080]",
                    index === 0 && "max-w-[433px]",
                  )}
                >
                  {step.description}
                </p>
              </article>
            </Fragment>
          ))}
        </div>

        <PrimaryCtaButton fullWidth={false} href={ctaHref}>
          {cta}
        </PrimaryCtaButton>
      </PageContainer>
    </section>
  );
}
