import Image from "next/image";

import { PageContainer } from "@/components/layout/page-container";
import { MepSectionTag } from "@/components/sections/mep/mep-section-tag";
import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";
import {
  mepBimUseCaseCards,
  mepBimUseCasesSection,
  type MepBimUseCaseCard,
} from "@/constants/mep-bim-modelling-content";
import { cn } from "@/lib/utils";

function chunkCards<T>(cards: T[], size: number): T[][] {
  const rows: T[][] = [];
  for (let index = 0; index < cards.length; index += size) {
    rows.push(cards.slice(index, index + size));
  }
  return rows;
}

/** Figma node 242:16126 — Use Cases / Outsourcing Guide */
export function MepBimUseCasesSection({
  id,
  section = mepBimUseCasesSection,
  cards = mepBimUseCaseCards,
  showCta = false,
  ctaHref = "/contact",
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
  const rows = chunkCards(cards, columnsPerRow);
  const gridCols =
    columnsPerRow === 3
      ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      : "grid-cols-1 lg:grid-cols-2";

  return (
    <section id={id} className="bg-[#FAFAFA] py-16 lg:py-[100px]">
      <PageContainer className="flex flex-col items-stretch gap-10 lg:gap-[60px]">
        <div className="flex w-full max-w-[1440px] flex-col items-start gap-5">
          <div className="flex max-w-[785px] flex-col items-start gap-3">
            <MepSectionTag label={tag} />
            <h2 className="mep-section-heading max-w-[778px] capitalize">
              <span className="font-medium">{titleLead}</span>
              <span className="text-accent font-light">{titleAccent}</span>
            </h2>
          </div>
          <p
            className="text-[16px] font-normal leading-6 text-[#808080]"
            style={{ maxWidth: descriptionMaxWidth }}
          >
            {description}
          </p>
        </div>

        <div className="flex w-full max-w-[1440px] flex-col items-stretch gap-[30px]">
          {rows.map((row, rowIndex) => (
            <div key={`use-case-row-${rowIndex}`} className={cn("grid gap-[30px]", gridCols)}>
              {row.map((card) => (
                <UseCaseCard key={card.title} card={card} iconVariant={iconVariant} />
              ))}
            </div>
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
            alt=""
            width={42}
            height={42}
            className="h-[42px] w-[42px] object-contain"
            aria-hidden
          />
        </div>
        <h3 className="text-[24px] font-normal leading-[1.35] text-[#111111]">{card.title}</h3>
      </div>
      <p className="text-[16px] font-normal leading-[26px] text-[#808080]">{card.description}</p>
    </article>
  );
}
