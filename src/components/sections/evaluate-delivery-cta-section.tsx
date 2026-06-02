import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";

import { PageContainer } from "@/components/layout/page-container";
import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";
import { cn } from "@/lib/utils";

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
  const isCentered = contentAlign === "center";
  const ctaHref = ctaLabel.trim().toLowerCase() === "contact us" ? "/contact" : undefined;
  return (
    <section className="bg-white py-12 lg:py-[100px]">
      <PageContainer>
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
          <div
            className={cn(
              "evaluate-delivery-cta-panel",
              isCentered && "md:flex-col md:items-center md:justify-center md:gap-8",
            )}
          >
            <div
              className={cn(
                "flex flex-1 flex-col justify-center gap-5",
                isCentered ? "items-center text-center" : "items-start",
              )}
            >
              <h2 className={cn("text-section max-w-[530px]", titleClassName)}>{title}</h2>
              <p
                className={cn(
                  "max-w-[478px] text-[16px] font-normal capitalize leading-6 text-[#808080]",
                  descriptionClassName,
                )}
              >
                {description}
              </p>
            </div>
            <PrimaryCtaButton
              fullWidth={false}
              href={ctaHref}
              className={cn("shrink-0", isCentered && "self-center")}
            >
              {ctaLabel}
              <ChevronRight className="h-2.5 w-2.5" strokeWidth={1.5} />
            </PrimaryCtaButton>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
