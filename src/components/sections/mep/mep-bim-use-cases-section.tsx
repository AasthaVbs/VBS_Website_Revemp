import Image from "next/image";

import { PageContainer } from "@/components/layout/page-container";
import { MepSectionTag } from "@/components/sections/mep/mep-section-tag";
import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";
import {
  mepBimUseCaseCards,
  mepBimUseCasesSection,
  type MepBimUseCaseCard,
} from "@/constants/mep-bim-modelling-content";
import { altFromImageSrc, cn } from "@/lib/utils";

/** Figma node 242:16126 — Use Cases / Outsourcing Guide */
export function MepBimUseCasesSection({
  id,
  section = mepBimUseCasesSection,
  cards = mepBimUseCaseCards,
  showCta = false,
  ctaHref = "/contact-us",
  iconVariant = "plain",
  descriptionMaxWidth = 536,
  columnsPerRow = 2,
}: {
  id?: string;
  section?: {
    tag: string;
    titleLead: string;
    titleAccent: string;
    description: string;
    ctaLabel?: string;
  };
  cards?: MepBimUseCaseCard[];
  showCta?: boolean;
  ctaHref?: string;
  iconVariant?: "plain" | "boxed";
  descriptionMaxWidth?: number;
  columnsPerRow?: 2 | 3;
} = {}) {
  const { tag, titleLead, titleAccent, description, ctaLabel } = section;
  const gridCols =
    columnsPerRow === 3
      ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      : "grid-cols-1 md:grid-cols-2";

  return (
    <section id={id} className="bg-[#FAFAFA] py-12 sm:py-16 lg:py-[100px]">
      <PageContainer className="flex flex-col items-stretch gap-10 lg:gap-[60px]">
        <div className="flex w-full max-w-[1440px] flex-col items-start gap-5">
          <div className="flex max-w-[785px] flex-col items-start gap-3">
            <MepSectionTag label={tag} />
            <h2 className="mep-section-heading max-w-[778px]">
              <span className="font-medium">{titleLead}</span>
              <span className="text-accent font-light">{titleAccent}</span>
            </h2>
          </div>
          <p
            className="text-[15px] font-normal leading-6 text-[#808080] sm:text-[16px]"
            style={{ maxWidth: descriptionMaxWidth }}
          >
            {description}
          </p>
        </div>

        <div className={cn("grid w-full max-w-[1440px] gap-[30px]", gridCols)}>
          {cards.map((card) => (
            <UseCaseCard key={card.title} card={card} iconVariant={iconVariant} />
          ))}
        </div>

        {showCta && ctaLabel ? (
          <PrimaryCtaButton
            fullWidth={false}
            href={ctaHref}
            className="h-auto min-h-[52px] self-center px-5 py-4 capitalize backdrop-blur-[50px]"
          >
            {ctaLabel}
          </PrimaryCtaButton>
        ) : null}
      </PageContainer>
    </section>
  );
}

function UseCaseCard({
  card,
  iconVariant,
}: {
  card: MepBimUseCaseCard;
  iconVariant: "plain" | "boxed";
}) {
  const isBoxed = iconVariant === "boxed";

  return (
    <article className="mep-interactive-card flex flex-col gap-5 rounded-[10px] bg-white p-5">
      <div className="flex flex-col gap-5">
        <div
          className={cn(
            "flex h-[60px] w-[60px] items-center justify-center rounded-[10px] p-[9px]",
            isBoxed && "border border-[#CBCCCD] bg-[#FBF9F9]",
          )}
        >
          <Image
            src={card.icon}
            alt={altFromImageSrc(card.icon)}
            width={42}
            height={42}
            className="h-[42px] w-[42px] object-contain"
          />
        </div>
        <h3 className="text-[22px] font-normal leading-[1.35] text-[#111111] sm:text-[24px]">
          {card.title}
        </h3>
      </div>
      <p className="text-[15px] font-normal leading-6 text-[#808080] sm:text-[16px] sm:leading-[26px]">
        {card.description}
      </p>
    </article>
  );
}
