import { Fragment } from "react";

import { PageContainer } from "@/components/layout/page-container";
import { MepSectionTag } from "@/components/sections/mep/mep-section-tag";
import {
  mepBimMeasurableResultCards,
  mepBimMeasurableResultsSection,
  type MepBimMeasurableResultCard,
} from "@/constants/mep-bim-modelling-content";
import { cn } from "@/lib/utils";

function chunkCards<T>(cards: T[], size: number): T[][] {
  const rows: T[][] = [];
  for (let index = 0; index < cards.length; index += size) {
    rows.push(cards.slice(index, index + size));
  }
  return rows;
}

function VerticalDivider() {
  return (
    <div
      className="hidden w-px shrink-0 self-stretch bg-gradient-to-b from-transparent via-[#CBCCCD] to-transparent lg:block"
      aria-hidden
    />
  );
}

function HorizontalDivider() {
  return (
    <div
      className="h-px w-full shrink-0 bg-[linear-gradient(to_right,transparent_0%,#CBCCCD_12%,#CBCCCD_88%,transparent_100%)]"
      aria-hidden
    />
  );
}

/** Figma node 242:16177 / 2047:18301 — Measurable Results / Outcomes */
export function MepBimMeasurableResultsSection({
  id,
  section = mepBimMeasurableResultsSection,
  cards = mepBimMeasurableResultCards,
  columnsPerRow = 2,
  descriptionMaxWidth = 548,
}: {
  id?: string;
  section?: {
    tag: string;
    titleLead: string;
    titleAccent: string;
    description: string;
  };
  cards?: MepBimMeasurableResultCard[];
  columnsPerRow?: 2 | 3;
  descriptionMaxWidth?: number;
} = {}) {
  const { tag, titleLead, titleAccent, description } = section;
  const rows = chunkCards(cards, columnsPerRow);
  const useColumnDividers = columnsPerRow === 3;

  return (
    <section id={id} className="bg-white py-12 sm:py-16 lg:py-[100px]">
      <PageContainer className="flex flex-col items-center gap-10 lg:gap-[60px]">
        <div className="flex w-full max-w-[1440px] flex-col items-start gap-5">
          <div className="flex flex-col items-start gap-3">
            <MepSectionTag label={tag} />
            <h2 className="mep-section-heading max-w-[657px]">
              {titleLead.split("\n").map((line, index, lines) => (
                <span key={`title-lead-${index}`} className="font-medium">
                  {line}
                  {index < lines.length - 1 ? <br /> : null}
                </span>
              ))}
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

        {/* Mobile: stacked cards with faded horizontal dividers between each */}
        <div className="flex w-full max-w-[1440px] flex-col gap-5 lg:hidden">
          {cards.map((card, index) => (
            <Fragment key={card.title}>
              {index > 0 ? <HorizontalDivider /> : null}
              <MeasurableResultCard card={card} />
            </Fragment>
          ))}
        </div>

        {/* Desktop: row / grid layout */}
        <div className="hidden w-full max-w-[1440px] flex-col gap-12 lg:flex">
          {rows.map((row, rowIndex) =>
            useColumnDividers ? (
              <MeasurableResultsRow key={`measurable-row-${rowIndex}`} cards={row} />
            ) : (
              <div
                key={`measurable-row-${rowIndex}`}
                className="grid grid-cols-1 gap-5 md:grid-cols-2"
              >
                {row.map((card) => (
                  <MeasurableResultCard key={card.title} card={card} />
                ))}
              </div>
            ),
          )}
        </div>
      </PageContainer>
    </section>
  );
}

function MeasurableResultsRow({ cards }: { cards: MepBimMeasurableResultCard[] }) {
  return (
    <div className="flex w-full flex-col gap-5 lg:flex-row lg:items-stretch">
      {cards.map((card, index) => (
        <Fragment key={card.title}>
          {index > 0 ? <VerticalDivider /> : null}
          <MeasurableResultCard card={card} className="flex-1" />
        </Fragment>
      ))}
    </div>
  );
}

function MeasurableResultCard({
  card,
  className,
}: {
  card: MepBimMeasurableResultCard;
  className?: string;
}) {
  return (
    <article className={cn("flex flex-col gap-5 px-2.5 py-0", className)}>
      <div className="flex flex-col gap-2.5">
        <span
          className="text-[28px] font-medium leading-none sm:text-[36px]"
          style={{ color: card.valueColor }}
        >
          {card.value}
        </span>
        <h3 className="text-[20px] font-normal leading-[1.35] text-[#111111] sm:text-[24px]">{card.title}</h3>
      </div>
      <p className="text-[15px] font-normal leading-6 text-[#808080] sm:text-[16px]">{card.description}</p>
    </article>
  );
}
