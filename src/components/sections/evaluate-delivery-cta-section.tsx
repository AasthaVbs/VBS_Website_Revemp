import type { ReactNode } from "react";

import { PageContainer } from "@/components/layout/page-container";
import { EvaluateDeliveryCtaCard } from "@/components/ui/evaluate-delivery-cta-card";
import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";

type EvaluateDeliveryCtaSectionProps = {
  title?: ReactNode;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  contentAlign?: "start" | "center";
  cardOnMobile?: boolean;
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
  cardOnMobile = false,
}: EvaluateDeliveryCtaSectionProps) {
  const ctaHref =
    ctaHrefProp ?? (ctaLabel.trim().toLowerCase() === "contact us" ? "/contact" : undefined);

  const card = (
    <EvaluateDeliveryCtaCard
      title={title}
      description={description}
      ctaLabel={ctaLabel}
      ctaHref={ctaHref}
      titleClassName={titleClassName}
      descriptionClassName={descriptionClassName}
      contentAlign={contentAlign}
    />
  );

  if (cardOnMobile) {
    return (
      <section className="vbs-evaluate-cta vbs-evaluate-cta--card-on-mobile bg-white py-12 lg:py-[100px]">
        <PageContainer>{card}</PageContainer>
      </section>
    );
  }

  return (
    <section className="vbs-evaluate-cta bg-white py-12 lg:py-[100px]">
      <PageContainer>
        <div className="vbs-evaluate-cta__desktop">{card}</div>
        <div className="vbs-evaluate-cta__mobile">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/image/CTA%20BGImage.png"
            alt=""
            className="vbs-evaluate-cta__mobile-img"
            loading="lazy"
            decoding="async"
          />
          <PrimaryCtaButton fullWidth={false} href={ctaHref} className="vbs-evaluate-cta__mobile-btn">
            {ctaLabel}
          </PrimaryCtaButton>
        </div>
      </PageContainer>
    </section>
  );
}
