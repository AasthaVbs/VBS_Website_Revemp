import type { ReactNode } from "react";

import { PageContainer } from "@/components/layout/page-container";
import { EvaluateDeliveryCtaCard } from "@/components/ui/evaluate-delivery-cta-card";

type EvaluateDeliveryCtaSectionProps = {
  title?: ReactNode;
  description?: string;
  ctaLabel?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  /** MEP page: center title and description in the panel */
  contentAlign?: "start" | "center";
};

const defaultTitle = (
  <>
    Evaluate Your <span className="text-accent">Delivery Capacity</span>
  </>
);

const defaultDescription = "A structured conversation about scale, standards, and fit.";

/** Figma 958:32154 — mosaic card CTA (home + MEP) */
export function EvaluateDeliveryCtaSection({
  title = defaultTitle,
  description = defaultDescription,
  ctaLabel = "Contact Us",
  titleClassName,
  descriptionClassName,
  contentAlign = "start",
}: EvaluateDeliveryCtaSectionProps) {
  const ctaHref = ctaLabel.trim().toLowerCase() === "contact us" ? "/contact" : undefined;
  return (
    <section className="bg-white py-12 lg:py-[100px]">
      <PageContainer>
        <EvaluateDeliveryCtaCard
          title={title}
          description={description}
          ctaLabel={ctaLabel}
          ctaHref={ctaHref}
          titleClassName={titleClassName}
          descriptionClassName={descriptionClassName}
          contentAlign={contentAlign}
        />
      </PageContainer>
    </section>
  );
}
