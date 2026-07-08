import { EvaluateDeliveryCtaSection } from "@/components/sections/evaluate-delivery-cta-section";
import { joinTeamCtaCopy } from "@/constants/about-content";

/** Figma mosaic CTA — same layout as home “Evaluate Your Delivery Capacity” */
export function JoinTeamCtaSection() {
  const { titleLine1, titleAccent, description, ctaLabel } = joinTeamCtaCopy;

  return (
    <EvaluateDeliveryCtaSection
      cardOnMobile
      title={
        <>
          {titleLine1} <span className="text-accent">{titleAccent}</span>
        </>
      }
      description={description}
      ctaLabel={ctaLabel}
    />
  );
}
