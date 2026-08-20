import Image from "next/image";

import { PageContainer } from "@/components/layout/page-container";
import { MepSectionTag } from "@/components/sections/mep/mep-section-tag";
import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";
import {
  mepBimServiceFeatureCards,
  mepBimServiceFeaturesSection,
  type MepBimFeatureCard,
} from "@/constants/mep-bim-modelling-content";
import { altFromImageSrc, cn, laptopCappedMaxWidth } from "@/lib/utils";

/** Figma node 217:9292 — Service Features grid */
export function MepBimServiceFeaturesSection({
  section = mepBimServiceFeaturesSection,
  cards = mepBimServiceFeatureCards,
  ctaHref,
  columnsPerRow = 3,
  titleMaxWidth = 716,
  descriptionMaxWidth = 705,
}: {
  section?: {
    tag: string;
    titleLead: string;
    titleAccent: string;
    description: string;
    ctaLabel: string;
    ctaHref?: string;
  };
  cards?: MepBimFeatureCard[];
  ctaHref?: string;
  /** Desktop columns — Figma shop drawings uses 2×2; most MEP pages use 3. */
  columnsPerRow?: 2 | 3;
  titleMaxWidth?: number;
  descriptionMaxWidth?: number;
} = {}) {
  const { tag, titleLead, titleAccent, description, ctaLabel, ctaHref: sectionCtaHref } = section;
  const isTwoColumn = columnsPerRow === 2;
  const resolvedCtaHref = ctaHref ?? sectionCtaHref;

  return (
    <section className="bg-[#FAFAFA] py-12 sm:py-16 lg:py-[100px]">
      <PageContainer className="flex flex-col items-stretch gap-10 lg:gap-[60px]">
        <div className="flex w-full flex-col items-start gap-5">
          <div className="flex flex-col items-start gap-3">
            <MepSectionTag label={tag} />
            <h2
              className="mep-section-heading"
              style={{ maxWidth: laptopCappedMaxWidth(titleMaxWidth, "title") }}
            >
              <span className="whitespace-pre-line font-medium">{titleLead}</span>
              <span className="text-accent font-light">{titleAccent}</span>
            </h2>
          </div>
          <p
            className="text-[16px] font-normal leading-6 text-[#808080]"
            style={{ maxWidth: laptopCappedMaxWidth(descriptionMaxWidth, "desc") }}
          >
            {description}
          </p>
        </div>

        <div
          className={cn(
            "grid w-full grid-cols-1 gap-[30px] md:grid-cols-2",
            !isTwoColumn && "lg:grid-cols-6",
          )}
        >
          {cards.map((card, index) => {
            if (isTwoColumn) {
              return <FeatureCard key={card.title} card={card} />;
            }

            const lastRowCount = cards.length % 3;
            const isLastIncompleteRow =
              lastRowCount > 0 && index >= cards.length - lastRowCount;
            const centersLastPair =
              lastRowCount === 2 && index === cards.length - 2;

            return (
              <FeatureCard
                key={card.title}
                card={card}
                className={cn(
                  "lg:col-span-2",
                  isLastIncompleteRow && lastRowCount === 1 && "lg:col-start-3",
                  centersLastPair && "lg:col-start-2",
                )}
              />
            );
          })}
        </div>

        <PrimaryCtaButton
          fullWidth={false}
          href={resolvedCtaHref}
          className="h-auto min-h-[52px] self-center px-5 py-4 capitalize backdrop-blur-[50px]"
        >
          {ctaLabel}
        </PrimaryCtaButton>
      </PageContainer>
    </section>
  );
}

function FeatureCard({
  card,
  className,
}: {
  card: MepBimFeatureCard;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "mep-interactive-card flex min-h-0 flex-col gap-[15px] bg-white p-5 sm:min-h-[290px]",
        className,
      )}
    >
      <div className="flex flex-col gap-2.5">
        <div className="flex h-[70px] w-[70px] shrink-0 items-center justify-center rounded-[10px] border border-[#CBCCCD] bg-[#FBF9F9] p-[15px]">
          <Image
            src={card.icon}
            alt={altFromImageSrc(card.icon)}
            width={46}
            height={46}
            className="h-[46px] w-[46px] object-contain"
          />
        </div>
        <h3 className="text-[22px] font-normal leading-[1.35] text-[#111111] sm:text-[24px]">
          {card.title}
        </h3>
      </div>
      <p className="text-[15px] font-normal leading-6 text-[#808080] sm:text-[16px]">
        {card.description}
      </p>
    </article>
  );
}
