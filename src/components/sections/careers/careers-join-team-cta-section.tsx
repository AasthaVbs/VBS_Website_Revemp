import { EvaluateDeliveryCtaSection } from "@/components/sections/evaluate-delivery-cta-section";
import { careersJoinTeamCtaCopy } from "@/constants/careers-content";

export function CareersJoinTeamCtaSection() {
  const { titleLine1, titleAccent, description, ctaLabel } = careersJoinTeamCtaCopy;

  return (
    <EvaluateDeliveryCtaSection
      cardOnMobile
      title={
        <>
          <span className="font-medium">{titleLine1}</span>
          <span className="font-light text-[#111111]">{titleAccent}</span>
        </>
      }
      description={description}
      ctaLabel={ctaLabel}
    />
  );
}
