import { ChevronRight } from "lucide-react";

import { PageContainer } from "@/components/layout/page-container";
import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";
import { engagementModelAdvisorCta } from "@/constants/engagement-models-page-content";

/** Figma node 960:33558 — Not Sure Which Engagement Model Fits Your Business? */
export function EngagementModelAdvisorCtaSection() {
  const { titleLead, titleAccent, description, ctaLabel } = engagementModelAdvisorCta;
  const ctaHref = ctaLabel.trim().toLowerCase() === "contact us" ? "/contact" : undefined;

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-[100px]">
      <PageContainer className="px-4 sm:px-6 md:px-10">
        <div className="evaluate-delivery-cta-card">
          <div className="evaluate-delivery-cta-mosaic" aria-hidden>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/figma/evaluate-cta-mosaic.svg"
              alt=""
              width={1440}
              height={1467}
            />
          </div>
          <div className="evaluate-delivery-cta-panel">
            <div className="flex flex-1 flex-col items-start justify-center gap-4 sm:gap-5">
              <h2 className="mep-section-heading w-full max-w-[787px] capitalize">
                <span className="font-medium">{titleLead}</span>
                <span className="font-light">{titleAccent}</span>
              </h2>
              <p className="w-full max-w-[582px] text-[15px] font-normal capitalize leading-6 text-[#808080] sm:text-[16px]">
                {description}
              </p>
            </div>
            <PrimaryCtaButton fullWidth href={ctaHref} className="shrink-0 sm:w-auto">
              {ctaLabel}
              <ChevronRight className="h-2.5 w-2.5" strokeWidth={1.5} />
            </PrimaryCtaButton>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
