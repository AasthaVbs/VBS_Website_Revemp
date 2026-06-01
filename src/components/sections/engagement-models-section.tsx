import type { ReactNode } from "react";

import { EngagementSectionShell } from "@/components/sections/engagement-section-shell";
import { SectionTag } from "@/components/sections/section-primitives";
import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";
import {
  defaultEngagementModelsHeader,
  engagementModelCards,
  type EngagementModelCard,
} from "@/constants/engagement-models-content";
import { cn } from "@/lib/utils";

export type { EngagementModelCard };

export type EngagementModelsSectionProps = {
  id?: string;
  tag?: string;
  title?: ReactNode;
  description?: string;
  cards?: readonly EngagementModelCard[];
  sectionClassName?: string;
};

function BulletList({
  items,
  className = "leading-6",
}: {
  items: readonly string[];
  className?: string;
}) {
  return (
    <ul className={`flex flex-col gap-2 ${className}`}>
      {items.map((item) => (
        <li key={item} className="inline-flex items-center gap-2.5">
          <span className="text-body shrink-0">•</span>
          <span className="text-body">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function EngagementModelCardArticle({ card }: { card: EngagementModelCard }) {
  return (
    <article
      className={cn(
        "relative flex min-w-0 flex-col items-start gap-5 rounded-[10px] border bg-white p-5",
        card.shadow && "shadow-[0_0_14px_rgba(0,0,0,0.20)]",
      )}
      style={{ borderColor: card.borderColor }}
    >
      {"badge" in card && card.badge ? (
        <div className="absolute -top-4 right-5 inline-flex h-8 items-center justify-center rounded-[10px] bg-[#2299D6] px-3 py-1.5">
          <span className="text-[14px] font-normal text-white">{card.badge}</span>
        </div>
      ) : null}

      <div
        className="flex items-center justify-center rounded-[10px] border p-2.5"
        style={{ backgroundColor: card.iconBg, borderColor: card.iconBorder }}
      >
        <span className="text-[40px] font-normal leading-none text-[#111111]">{card.icon}</span>
      </div>

      <p className="text-[16px] font-medium leading-6 text-[#D70416]">{card.audience}</p>

      <div className="flex w-full flex-1 flex-col items-end gap-5">
        <div className="flex w-full flex-col gap-5">
          <div className="flex flex-col gap-2.5">
            <h3 className="text-card-title">{card.title}</h3>
            <p className="text-[16px] font-medium leading-6 text-[#808080]">{card.description}</p>
          </div>

          <div className="flex flex-col gap-2.5">
            <p className="text-[16px] font-medium leading-6 text-[#808080]">Key Benefits</p>
            <BulletList items={card.keyBenefits} />
          </div>

          <div className="flex flex-col gap-2.5">
            <p className="text-[16px] font-medium leading-6 text-[#808080]">Best Suited For</p>
            <BulletList items={card.bestSuitedFor} className="leading-[26px]" />
          </div>
        </div>

        <PrimaryCtaButton
          fullWidth={false}
          className={cn(
            "primary-cta--wide w-full",
            card.ctaHighlighted && "primary-cta--highlighted",
          )}
        >
          {card.cta}
        </PrimaryCtaButton>
      </div>
    </article>
  );
}

/** Shared engagement models grid — used on home and MEP pages. */
const defaultTitle = (
  <>
    {defaultEngagementModelsHeader.titleLine1}{" "}
    <span className="text-accent">{defaultEngagementModelsHeader.titleAccent}</span>
  </>
);

export function EngagementModelsSection({
  id = "engagement",
  tag = defaultEngagementModelsHeader.tag,
  title = defaultTitle,
  description = defaultEngagementModelsHeader.description,
  cards = engagementModelCards,
  sectionClassName,
}: EngagementModelsSectionProps) {
  return (
    <EngagementSectionShell
      id={id}
      className={sectionClassName}
      header={
        <div className="flex w-full flex-col items-start gap-5">
          <div className="flex flex-col items-start gap-3">
            <SectionTag label={tag} />
            <h2 className="max-w-[884px] text-section">{title}</h2>
          </div>
          <p className="max-w-[750px] text-body">{description}</p>
        </div>
      }
    >
      <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <EngagementModelCardArticle key={card.title} card={card} />
        ))}
      </div>
    </EngagementSectionShell>
  );
}
