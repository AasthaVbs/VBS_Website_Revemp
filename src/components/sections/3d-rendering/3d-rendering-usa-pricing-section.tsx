import { PageContainer } from "@/components/layout/page-container";
import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";
import { threeDRenderingUsaPricingSection } from "@/constants/3d-rendering-services-usa-content";

/** Figma 4032:56961 — Transparent, Simple Pricing */
export function ThreeDRenderingUsaPricingSection({
  section = threeDRenderingUsaPricingSection,
}: {
  section?: typeof threeDRenderingUsaPricingSection;
}) {
  return (
    <section className="trs-usa-pricing bg-white py-12 sm:py-16 lg:py-[100px]">
      <PageContainer>
        <div className="trs-usa-pricing__row flex flex-col items-stretch gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-[60px]">
          <div className="trs-usa-pricing__copy flex min-w-0 flex-1 flex-col items-start gap-3 lg:gap-4">
            <h2 className="trs-usa-pricing__title text-section m-0 w-full capitalize">
              <span className="font-medium text-[#111111]">{section.titleLead}</span>
              <span className="font-light text-[#D70416]">{section.titleAccent}</span>
            </h2>
            <p className="trs-usa-pricing__desc m-0 w-full text-[16px] font-normal leading-6 text-[#808080]">
              {section.description}
            </p>
            <PrimaryCtaButton
              fullWidth={false}
              href={section.ctaHref}
              className="!mt-1 !h-auto !min-h-[52px] !px-5 !py-3.5 capitalize lg:!mt-2"
            >
              {section.ctaLabel}
            </PrimaryCtaButton>
          </div>

          <div className="trs-usa-pricing__tiers flex w-full flex-col gap-4 lg:w-[420px] lg:shrink-0 xl:w-[460px]">
            {section.tiers.map((tier) => (
              <div
                key={tier.price}
                className="trs-usa-pricing__card flex flex-col items-start gap-5 rounded-[10px] border border-[#CBCCCD] bg-white p-5"
              >
                <p className="trs-usa-pricing__price m-0 text-[30px] font-medium leading-[34px] text-[#D70416]">
                  {tier.price}
                </p>
                <p className="trs-usa-pricing__label m-0 text-[24px] font-normal leading-[30px] text-[#111111]">
                  {tier.label}
                  {tier.note ? <span className="text-[#D70416]">{tier.note}</span> : null}
                </p>
              </div>
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
