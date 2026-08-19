import type { StaticImageData } from "next/image";
import Image from "next/image";

import { PageContainer } from "@/components/layout/page-container";
import { SectionTag } from "@/components/sections/section-primitives";
import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";
import {
  architectureEngagementModelsCards,
  architectureEngagementModelsSection,
} from "@/constants/architecture-services-redesign-content";
import { altFromImageSrc, cn, laptopCappedMaxWidth } from "@/lib/utils";

export type EngagementModelsCard = {
  icon: string | StaticImageData;
  title: string;
  headline: string;
  description?: string;
  idealLabel: string;
  idealItems: string[];
  nextLabel: string;
  nextText: string;
  ctaLabel: string;
  ctaHref: string;
  ctaVariant: "outline" | "solid" | string;
  featured?: boolean;
  badge?: string;
};

export type EngagementModelsSectionContent = {
  tag: string;
  titleParts: { text: string; className: string }[];
  /** When true (default), each title part is on its own line. */
  stackTitle?: boolean;
  description: string;
  descriptionMaxWidth?: number;
  note?: { text: string };
};

function EngagementCardArticle({ card }: { card: EngagementModelsCard }) {
  const isSolid = card.ctaVariant === "solid";

  return (
    <article
      className={cn(
        "arch-svc-engagement__card relative flex min-w-0 flex-col gap-5 rounded-[10px] border border-[#CBCCCD] bg-white p-5",
        card.featured && "arch-svc-engagement__card--featured",
      )}
    >
      {card.badge ? <span className="arch-svc-engagement__badge">{card.badge}</span> : null}

      <div className="flex h-[70px] w-[70px] shrink-0 items-center justify-center rounded-[10px] border border-[#CBCCCD] bg-white p-[15px]">
        <Image
          src={card.icon}
          alt={altFromImageSrc(card.icon)}
          width={46}
          height={46}
          className="h-[46px] w-[46px] object-contain"
        />
      </div>

      <p className="arch-svc-engagement__card-title">{card.title}</p>

      <div className="arch-svc-engagement__card-body flex min-h-0 w-full flex-1 flex-col justify-between gap-5">
        <div className="flex w-full flex-col gap-2.5">
          <p className="arch-svc-engagement__headline">{card.headline}</p>
          {card.description ? (
            <p className="arch-svc-engagement__muted">{card.description}</p>
          ) : null}

          <div className="flex w-full flex-col gap-2.5">
            <p className="arch-svc-engagement__label">{card.idealLabel}</p>
            <div className="arch-svc-engagement__ideal-list">
              {card.idealItems.map((item) => (
                <p key={item} className="arch-svc-engagement__ideal-item">
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div className="flex w-full flex-col gap-2.5">
            <p className="arch-svc-engagement__label">{card.nextLabel}</p>
            <p className="arch-svc-engagement__muted">{card.nextText}</p>
          </div>
        </div>

        <PrimaryCtaButton
          fullWidth
          href={card.ctaHref}
          className={cn(
            "arch-svc-engagement__cta",
            isSolid && "primary-cta--highlighted arch-svc-engagement__cta--filled",
          )}
        >
          {card.ctaLabel}
        </PrimaryCtaButton>
      </div>
    </article>
  );
}

/**
 * Shared 3-card engagement models section.
 * Pass page-specific `section` + `cards` (defaults = architecture-services).
 */
export function ArchitectureEngagementModelsSection({
  section = architectureEngagementModelsSection,
  cards = architectureEngagementModelsCards,
}: {
  section?: EngagementModelsSectionContent;
  cards?: readonly EngagementModelsCard[];
}) {
  const descriptionMaxWidth = section.descriptionMaxWidth ?? 840;
  const stackTitle = section.stackTitle !== false;

  return (
    <section id="engagement-models" className="arch-svc-engagement bg-white py-12 sm:py-16 lg:py-[100px]">
      <PageContainer className="flex flex-col items-start gap-10 lg:gap-[60px]">
        <div
          className="flex w-full max-w-[840px] flex-col items-start gap-5"
          style={{ maxWidth: laptopCappedMaxWidth(840, "title") }}
        >
          <div className="flex flex-col items-start gap-3">
            <SectionTag label={section.tag} />
            <h2 className="text-section w-full">
              {section.titleParts.map((part, index) => (
                <span
                  key={`${part.text}-${index}`}
                  className={cn(part.className, stackTitle && "block")}
                >
                  {stackTitle ? part.text.trimEnd() : part.text}
                </span>
              ))}
            </h2>
          </div>
          <p
            className="arch-svc-engagement__section-desc w-full"
            style={{ maxWidth: laptopCappedMaxWidth(descriptionMaxWidth, "desc") }}
          >
            {section.description}
          </p>
        </div>

        <div className="arch-svc-engagement__grid grid w-full grid-cols-1 items-stretch gap-5 lg:grid-cols-3">
          {cards.map((card) => (
            <EngagementCardArticle key={card.title} card={card} />
          ))}
        </div>

        {section.note ? (
          <div className="arch-svc-engagement__note w-full rounded-[10px] border border-[#42AA32] bg-[#F8FFFA] p-5">
            <p className="arch-svc-engagement__note-text m-0">{section.note.text}</p>
          </div>
        ) : null}
      </PageContainer>
    </section>
  );
}
