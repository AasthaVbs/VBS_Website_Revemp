import Image from "next/image";

import { PageContainer } from "@/components/layout/page-container";
import { MepSectionTag } from "@/components/sections/mep/mep-section-tag";
import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";
import {
  mepBimServiceFeatureCards,
  mepBimServiceFeaturesSection,
  type MepBimFeatureCard,
} from "@/constants/mep-bim-modelling-content";
import { altFromImageSrc, cn } from "@/lib/utils";

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

        <div className="grid w-full grid-cols-1 gap-[30px] md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <FeatureCard key={card.title} card={card} />
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
