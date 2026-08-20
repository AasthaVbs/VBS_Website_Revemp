import { EvaluateDeliveryCtaSection } from "@/components/sections/evaluate-delivery-cta-section";
import { joinTeamCtaCopy } from "@/constants/about-content";

type JoinTeamCtaSectionProps = {
  titleLine1?: string;
  titleAccent?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  /** When true, accent stays #111 with font-light (Figma testimonials CTA) */
  accentAsLight?: boolean;
};

/** Figma mosaic CTA — same layout as home “Evaluate Your Delivery Capacity” */
export function JoinTeamCtaSection({
  titleLine1 = joinTeamCtaCopy.titleLine1,
  titleAccent = joinTeamCtaCopy.titleAccent,
  description = joinTeamCtaCopy.description,
  ctaLabel = joinTeamCtaCopy.ctaLabel,
  ctaHref = joinTeamCtaCopy.ctaHref,
  accentAsLight = false,
}: JoinTeamCtaSectionProps = {}) {
  return (
    <EvaluateDeliveryCtaSection
      cardOnMobile
      title={
        <>
          <span className="font-medium text-[#111111]">{titleLine1}</span>
          {titleLine1.endsWith(" ") ? null : " "}
          <span
            className={
              accentAsLight ? "font-light text-[#111111]" : "font-light text-accent"
            }
          >
            {titleAccent}
          </span>
        </>
      }
      description={description}
      ctaLabel={ctaLabel}
      ctaHref={ctaHref}
    />
  );
}
