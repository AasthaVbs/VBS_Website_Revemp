import Image from "next/image";

import { PageContainer } from "@/components/layout/page-container";
import { MepSectionTag } from "@/components/sections/mep/mep-section-tag";
import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";
import {
  mepBimServiceFeatureCards,
  mepBimServiceFeaturesSection,
  type MepBimFeatureCard,
} from "@/constants/mep-bim-modelling-content";
import { cn } from "@/lib/utils";

function chunkCards<T>(cards: T[], size: number): T[][] {
  const rows: T[][] = [];
  for (let index = 0; index < cards.length; index += size) {
    rows.push(cards.slice(index, index + size));
  }
  return rows;
}

/** Figma node 217:9292 — Service Features grid */
export function MepBimServiceFeaturesSection({
  section = mepBimServiceFeaturesSection,
  cards = mepBimServiceFeatureCards,
  ctaHref,
}: {
  section?: {
    tag: string;
    titleLead: string;
    titleAccent: string;
    description: string;
    ctaLabel: string;
  };
  cards?: MepBimFeatureCard[];
  ctaHref?: string;
} = {}) {
  const { tag, titleLead, titleAccent, description, ctaLabel } = section;
  const rows = chunkCards(cards, 3);

  return (
    <section className="bg-[#FAFAFA] py-12 sm:py-16 lg:py-[100px]">
      <PageContainer className="flex flex-col items-stretch gap-10 lg:gap-[60px]">
        <div className="flex w-full flex-col items-start gap-5">
          <div className="flex flex-col items-start gap-3">
            <MepSectionTag label={tag} />
            <h2 className="mep-section-heading max-w-[716px] capitalize">
              <span className="whitespace-pre-line font-medium">{titleLead}</span>
              <span className="text-accent font-light">{titleAccent}</span>
            </h2>
          </div>
          <p className="max-w-[705px] text-[16px] font-normal leading-6 text-[#808080]">
            {description}
          </p>
        </div>

        <div className="flex w-full flex-col gap-[30px]">
          {rows.map((row, index) => (
            <FeatureRow key={`feature-row-${index}`} cards={row} />
          ))}
        </div>

        <PrimaryCtaButton
          fullWidth={false}
          href={ctaHref}
          className="h-auto min-h-[52px] self-center px-5 py-4 capitalize backdrop-blur-[50px]"
        >
          {ctaLabel}
        </PrimaryCtaButton>
      </PageContainer>
    </section>
  );
}

function FeatureRow({ cards }: { cards: MepBimFeatureCard[] }) {
  const colClass =
    cards.length === 2
      ? "grid-cols-1 md:grid-cols-2 lg:justify-center"
      : cards.length === 1
        ? "grid-cols-1 lg:justify-center"
        : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={cn("grid gap-[30px]", colClass)}>
      {cards.map((card) => (
        <FeatureCard
          key={card.title}
          card={card}
          className={cn("min-h-[290px]", cards.length === 1 && "w-full lg:w-[460px]")}
        />
      ))}
    </div>
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
    <article className={cn("mep-interactive-card flex flex-col gap-[15px] bg-white p-5", className)}>
      <div className="flex flex-col gap-2.5">
        <div className="flex h-[70px] w-[70px] shrink-0 items-center justify-center rounded-[10px] border border-[#CBCCCD] bg-[#FBF9F9] p-[15px]">
          <Image
            src={card.icon}
            alt=""
            width={46}
            height={46}
            className="h-[46px] w-[46px] object-contain"
            aria-hidden
          />
        </div>
        <h3 className="text-[24px] font-normal leading-[1.35] text-[#111111]">{card.title}</h3>
      </div>
      <p className="text-[16px] font-normal leading-6 text-[#808080]">{card.description}</p>
    </article>
  );
}
