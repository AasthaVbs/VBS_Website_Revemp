import { Fragment } from "react";

import { PageContainer } from "@/components/layout/page-container";
import { MepSectionTag } from "@/components/sections/mep/mep-section-tag";
import {
  mepBimMeasurableResultCards,
  mepBimMeasurableResultsSection,
  type MepBimMeasurableResultCard,
} from "@/constants/mep-bim-modelling-content";
import { cn, laptopCappedMaxWidth } from "@/lib/utils";

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
      className="hidden w-px shrink-0 self-stretch bg-[linear-gradient(to_bottom,transparent_0%,transparent_20%,rgba(203,204,205,0.25)_35%,#CBCCCD_50%,rgba(203,204,205,0.25)_65%,transparent_80%,transparent_100%)] lg:block"
      aria-hidden
    />
  );
}

function HorizontalDivider() {
  return (
    <div
      className="h-px w-full shrink-0 bg-[linear-gradient(to_right,transparent_0%,transparent_20%,rgba(203,204,205,0.25)_35%,#CBCCCD_50%,rgba(203,204,205,0.25)_65%,transparent_80%,transparent_100%)]"
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
  titleMaxWidth = 657,
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
  titleMaxWidth?: number;
} = {}) {
  const { tag, titleLead, titleAccent, description } = section;
  const rows = chunkCards(cards, columnsPerRow);

  return (
    <section id={id} className="bg-white py-12 sm:py-16 lg:py-[100px]">
      <PageContainer className="flex flex-col items-center gap-10 lg:gap-[60px]">
        <div className="flex w-full max-w-[1400px] flex-col items-start gap-5">
          <div className="flex flex-col items-start gap-3">
            <MepSectionTag label={tag} />
            <h2 className="mep-section-heading" style={{ maxWidth: laptopCappedMaxWidth(titleMaxWidth, "title") }}>
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
            style={{ maxWidth: laptopCappedMaxWidth(descriptionMaxWidth, "desc") }}
          >
            {description}
          </p>
        </div>

        {/* Mobile: stacked cards with faded horizontal dividers between each */}
        <div className="flex w-full max-w-[1400px] flex-col gap-5 lg:hidden">
          {cards.map((card, index) => (
            <Fragment key={card.title}>
              {index > 0 ? <HorizontalDivider /> : null}
              <MeasurableResultCard card={card} />
            </Fragment>
          ))}
        </div>

        {/* Desktop: rows with faded vertical + horizontal dividers */}
        <div className="hidden w-full max-w-[1400px] flex-col gap-10 lg:flex">
          {rows.map((row, rowIndex) => (
            <Fragment key={`measurable-row-${rowIndex}`}>
              {rowIndex > 0 ? <HorizontalDivider /> : null}
              <MeasurableResultsRow cards={row} />
            </Fragment>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}

function MeasurableResultsRow({ cards }: { cards: MepBimMeasurableResultCard[] }) {
  return (
    <div className="flex w-full flex-col gap-5 lg:flex-row lg:items-stretch lg:gap-5">
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
        <span className="text-[28px] font-medium leading-none sm:text-[36px]">
          {card.valuePrefix ? (
            <>
              <span style={{ color: card.valueColor }}>{card.valuePrefix}</span>
              <span className="text-[#111111]">{card.value}</span>
            </>
          ) : (
            <span style={{ color: card.valueColor }}>{card.value}</span>
          )}
        </span>
        <h3 className="text-[20px] font-normal leading-[1.35] text-[#111111] sm:text-[24px]">{card.title}</h3>
      </div>
      <p className="text-[15px] font-normal leading-6 text-[#808080] sm:text-[16px]">{card.description}</p>
    </article>
  );
}
