import type { ReactNode } from "react";

import { PageContainer } from "@/components/layout/page-container";
import { EvaluateDeliveryCtaCard } from "@/components/ui/evaluate-delivery-cta-card";

type EvaluateDeliveryCtaSectionProps = {
  title?: ReactNode;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  contentAlign?: "start" | "center";
  /** @deprecated Card is always shown; mobile uses CTA Mobile BG behind the card */
  cardOnMobile?: boolean;
  /** Custom CTA node (e.g. gated PDF download) — replaces the default PrimaryCtaButton */
  ctaElement?: ReactNode;
};

const defaultTitle = (
  <>
    Discover Your Ideal <span className="font-light">Delivery Model</span>
  </>
);

const defaultDescription =
  "Let's explore how dedicated production support can help you scale with confidence.";

/** Figma mosaic card CTA — Discover Your Ideal Delivery Model */
export function EvaluateDeliveryCtaSection({
  title = defaultTitle,
  description = defaultDescription,
  ctaLabel = "Contact Us",
  ctaHref: ctaHrefProp,
  titleClassName,
  descriptionClassName,
  contentAlign = "start",
  ctaElement,
}: EvaluateDeliveryCtaSectionProps) {
  const ctaHref =
    ctaHrefProp ?? (ctaLabel.trim().toLowerCase() === "contact us" ? "/contact-us" : undefined);

  return (
    <section className="vbs-evaluate-cta bg-white py-12 lg:py-[100px]">
      <PageContainer>
        <EvaluateDeliveryCtaCard
          title={title}
          description={description}
          ctaLabel={ctaLabel}
          ctaHref={ctaHref}
          titleClassName={titleClassName}
          descriptionClassName={descriptionClassName}
          contentAlign={contentAlign}
          ctaElement={ctaElement}
        />
      </PageContainer>
    </section>
  );
}
