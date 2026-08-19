// @ts-nocheck
import { Fragment } from "react";
import { PageContainer } from "@/components/layout/page-container";
import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";
import { MepSectionTag } from "@/components/sections/mep/mep-section-tag";
import { cn, laptopCappedMaxWidth } from "@/lib/utils";
import {
  mepEngagementProcessSection,
  mepEngagementProcessSteps,
} from "@/constants/mep-engineers-content";

/** Engagement model — /mep-bim-services (Figma 265:67484). Also used for numbered column layouts. */
export function MepEngagementProcessSection({
  section = mepEngagementProcessSection,
  steps = mepEngagementProcessSteps,
  showCta = true,
  className,
  titleLayout = "stacked",
  titleMaxWidth = 719,
}) {
  const { tag, titleLine1, titleLine2, description, descriptionMaxWidth, cta, ctaHref } = section;
  const isInlineTitle = titleLayout === "inline";

  return (
    <section
      id={section.id}
      className={cn(
        "mep-engagement-process overflow-hidden py-16 lg:py-[100px]",
        className ?? "bg-[#FAFAFA]",
      )}
    >
      <PageContainer className="flex flex-col items-center gap-5 lg:gap-[50px]">
        <div className="flex w-full flex-col items-start gap-3 sm:gap-5">
          <div className="flex flex-col items-start gap-3">
            <MepSectionTag label={tag} />
            <h2
              className="mep-section-heading"
              style={{
                maxWidth: laptopCappedMaxWidth(section.titleMaxWidth ?? titleMaxWidth, "title"),
              }}
            >
              {isInlineTitle ? (
                <>
                  <span className="font-medium text-[#111111]">{titleLine1}</span>
                  <span className="text-accent font-light">{titleLine2}</span>
                </>
              ) : (
                <>
                  <span className="block font-medium text-[#111111]">{titleLine1}</span>
                  <span className="text-accent block font-light">{titleLine2}</span>
                </>
              )}
            </h2>
          </div>
          <p
            className="text-[16px] font-normal leading-6 text-[#808080]"
            style={{
              maxWidth: laptopCappedMaxWidth(descriptionMaxWidth ?? 640, "desc"),
            }}
          >
            {description}
          </p>
        </div>

        <div className="mep-engagement-process__steps flex w-full flex-col items-stretch lg:flex-row">
          {steps.map((step, index) => (
            <Fragment key={step.title}>
              {index > 0 ? <div className="mep-engagement-process__divider" aria-hidden /> : null}
              <article className="mep-engagement-process__card flex min-w-0 flex-1 flex-col items-start gap-5 self-stretch overflow-hidden px-2.5 lg:px-[10px]">
                <div className="flex flex-col items-start gap-2.5">
                  <div className="leading-none">
                    <span className={cn("text-[28px] font-normal sm:text-[36px]", step.prefixColor)}>
                      {step.prefix}
                    </span>
                    <span className="text-[28px] font-normal text-[#111111] sm:text-[36px]">{step.number}</span>
                  </div>
                  <h3 className="text-[20px] font-normal leading-[1.35] text-[#111111] sm:text-[24px]">
                    {step.title}
                  </h3>
                </div>
                <p
                  className={cn(
                    "w-full text-[15px] font-normal leading-6 text-[#808080] sm:text-[16px]",
                    step.descriptionMaxWidth
                      ? undefined
                      : index === 0 && "max-w-[447px]",
                  )}
                  style={
                    step.descriptionMaxWidth
                      ? { maxWidth: step.descriptionMaxWidth }
                      : undefined
                  }
                >
                  {step.description}
                </p>
              </article>
            </Fragment>
          ))}
        </div>

        {showCta && cta ? (
          <PrimaryCtaButton fullWidth={false} href={ctaHref}>
            {cta}
          </PrimaryCtaButton>
        ) : null}
      </PageContainer>
    </section>
  );
}
