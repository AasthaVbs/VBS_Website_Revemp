import { EvaluateDeliveryCtaSection } from "@/components/sections/evaluate-delivery-cta-section";
import { careersJoinTeamCtaCopy } from "@/constants/careers-content";

export function CareersJoinTeamCtaSection() {
  const { titleLine1, titleAccent, description, ctaLabel } = careersJoinTeamCtaCopy;

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
