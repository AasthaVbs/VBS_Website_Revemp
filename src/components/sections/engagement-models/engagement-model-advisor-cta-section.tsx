import { EvaluateDeliveryCtaSection } from "@/components/sections/evaluate-delivery-cta-section";
import { engagementModelAdvisorCta } from "@/constants/engagement-models-page-content";

/** Figma node 960:33558 — Not Sure Which Engagement Model Fits Your Business? */
export function EngagementModelAdvisorCtaSection() {
  const { titleLead, titleAccent, description, ctaLabel } = engagementModelAdvisorCta;
  const ctaHref = ctaLabel.trim().toLowerCase() === "contact us" ? "/contact" : undefined;

  return (
    <EvaluateDeliveryCtaSection
      title={
        <>
          <span className="font-medium">{titleLead}</span>
          <span className="font-light">{titleAccent}</span>
        </>
      }
      titleClassName="mep-section-heading w-full max-w-[787px] capitalize"
      description={description}
      descriptionClassName="w-full max-w-[582px] text-[15px] font-normal leading-6 text-[#808080] sm:text-[16px]"
      ctaLabel={ctaLabel}
      ctaHref={ctaHref}
    />
  );
}
