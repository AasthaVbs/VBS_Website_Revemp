import Image from "next/image";

import { PageContainer } from "@/components/layout/page-container";
import { SectionTag } from "@/components/sections/section-primitives";
import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";
import {
  architectureEngagementModelsCards,
  architectureEngagementModelsSection,
} from "@/constants/architecture-services-redesign-content";
import { altFromImageSrc, cn } from "@/lib/utils";

type EngagementCard = (typeof architectureEngagementModelsCards)[number];

function EngagementCardArticle({ card }: { card: EngagementCard }) {
  const isSolid = card.ctaVariant === "solid";

  return (
    <article
      className={cn(
        "arch-svc-engagement__card relative flex min-w-0 flex-col gap-5 rounded-[10px] border border-[#CBCCCD] bg-white p-6",
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

      <p className="text-[16px] font-medium leading-6 text-[#D70416]">{card.title}</p>

      <div className="flex flex-col gap-2.5">
        <p className="text-[20px] font-medium leading-[26px] text-[#111111]">{card.headline}</p>
        <div className="flex flex-col gap-2.5">
          <p className="text-[16px] font-medium leading-6 text-[#111111]">{card.idealLabel}</p>
          <ul className="m-0 list-disc space-y-0 pl-6">
            {card.idealItems.map((item) => (
              <li key={item} className="text-[16px] leading-[26px] text-[#808080]">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-2.5">
          <p className="text-[16px] font-medium leading-6 text-[#111111]">{card.nextLabel}</p>
          <p className="text-[16px] font-normal leading-[26px] text-[#808080]">{card.nextText}</p>
        </div>
      </div>

      <PrimaryCtaButton
        fullWidth
        href={card.ctaHref}
        className={cn("arch-svc-engagement__cta", isSolid && "primary-cta--highlighted arch-svc-engagement__cta--filled")}
      >
        {card.ctaLabel}
      </PrimaryCtaButton>
    </article>
  );
}

export function ArchitectureEngagementModelsSection({
  section = architectureEngagementModelsSection,
  cards = architectureEngagementModelsCards,
}: {
  section?: typeof architectureEngagementModelsSection;
  cards?: typeof architectureEngagementModelsCards;
}) {
  return (
    <section id="engagement-models" className="arch-svc-engagement bg-white py-12 sm:py-16 lg:py-[100px]">
      <PageContainer className="flex flex-col items-start gap-10 lg:gap-[60px]">
        <div className="flex w-full max-w-[884px] flex-col items-start gap-5">
          <div className="flex flex-col items-start gap-3">
            <SectionTag label={section.tag} />
            <h2 className="text-section w-full">
              {section.titleParts.map((part, index) => (
                <span key={`${part.text}-${index}`} className={part.className}>
                  {part.text}
                </span>
              ))}
            </h2>
          </div>
          <p className="w-full max-w-[813px] text-[16px] font-normal leading-6 text-[#808080]">
            {section.description}
          </p>
        </div>

        <div className="arch-svc-engagement__grid grid w-full grid-cols-1 gap-5 lg:grid-cols-3">
          {cards.map((card) => (
            <EngagementCardArticle key={card.title} card={card} />
          ))}
        </div>

        {section.note ? (
          <div className="w-full rounded-[10px] border border-[#42AA32] bg-[#F8FFFA] p-5">
            <p className="m-0 text-[16px] font-normal leading-6 text-[#111111]">{section.note.text}</p>
          </div>
        ) : null}
      </PageContainer>
    </section>
  );
}
