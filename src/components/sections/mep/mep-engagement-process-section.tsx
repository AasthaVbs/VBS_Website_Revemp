import { PageContainer } from "@/components/layout/page-container";
import { MepSectionTag } from "@/components/sections/mep/mep-section-tag";
import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";
import {
  mepEngagementProcessSection,
  mepEngagementProcessSteps,
} from "@/constants/mep-engineers-content";
import { cn } from "@/lib/utils";

/** Figma node 265:67484 — Get Started with the Right MEP BIM Engagement Model */
export function MepEngagementProcessSection() {
  return (
    <section className="overflow-hidden bg-[#FAFAFA] py-16 lg:py-[100px]">
      <PageContainer className="flex flex-col items-center gap-10 lg:gap-[60px]">
        <div className="flex w-full flex-col items-start gap-5">
          <div className="flex flex-col items-start gap-3">
            <MepSectionTag label={mepEngagementProcessSection.tag} />
            <h2 className="mep-section-heading max-w-[719px]">
              <span className="block font-medium">{mepEngagementProcessSection.titleLine1}</span>
              <span className="text-accent block font-light">{mepEngagementProcessSection.titleLine2}</span>
            </h2>
          </div>
          <p className="max-w-[640px] text-[16px] font-normal leading-6 text-[#808080]">
            {mepEngagementProcessSection.description}
          </p>
        </div>

        <div className="flex w-full flex-col items-stretch gap-5 lg:flex-row lg:gap-5">
          {mepEngagementProcessSteps.map((step, index) => (
            <article
              key={step.title}
              className="flex min-w-0 flex-1 flex-col items-start gap-5 overflow-hidden px-2.5 lg:px-[10px]"
            >
              <div className="flex flex-col items-start gap-2.5">
                <div className="leading-none">
                  <span className={cn("text-[36px] font-normal", step.prefixColor)}>{step.prefix}</span>
                  <span className="text-[36px] font-normal text-[#111111]">{step.number}</span>
                </div>
                <h3 className="text-[24px] font-normal leading-[1.35] text-[#111111]">{step.title}</h3>
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
          ))}
        </div>

        <PrimaryCtaButton
          fullWidth={false}
          className="h-auto min-h-[52px] w-[164px] px-5 py-4 capitalize backdrop-blur-[50px]"
        >
          {mepEngagementProcessSection.cta}
        </PrimaryCtaButton>
      </PageContainer>
    </section>
  );
}
