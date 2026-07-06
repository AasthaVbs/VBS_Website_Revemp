import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";

import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";
import { cn } from "@/lib/utils";

type EvaluateDeliveryCtaCardProps = {
  title: ReactNode;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  className?: string;
  /** Blog detail: title-only panel matching Figma 1398:16524 */
  compact?: boolean;
  contentAlign?: "start" | "center";
};

/** Figma 958:32154 / blog inline CTA — mosaic background + white panel */
export function EvaluateDeliveryCtaCard({
  title,
  description,
  ctaLabel = "Contact Us",
  ctaHref = "/contact",
  titleClassName,
  descriptionClassName,
  className,
  compact = false,
  contentAlign = "start",
}: EvaluateDeliveryCtaCardProps) {
  const isCentered = contentAlign === "center";

  return (
    <div
      className={cn(
        "evaluate-delivery-cta-card",
        compact && "evaluate-delivery-cta-card--compact",
        isCentered && "evaluate-delivery-cta-card--centered",
        className,
      )}
    >
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
          <h2
            className={cn(
              compact
                ? "max-w-[373px] text-[24px] font-medium capitalize leading-[34px] text-[#111111]"
                : "text-section max-w-[530px] capitalize",
              titleClassName,
            )}
          >
            {title}
          </h2>
          {description ? (
            <p
              className={cn(
                "max-w-[478px] text-[16px] font-normal leading-6 text-[#808080]",
                descriptionClassName,
              )}
            >
              {description}
            </p>
          ) : null}
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
  );
}
