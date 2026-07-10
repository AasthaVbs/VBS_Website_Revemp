import { Fragment } from "react";

import { PageContainer } from "@/components/layout/page-container";
import { MepSectionTag } from "@/components/sections/mep/mep-section-tag";
import { GradientVerticalDivider } from "@/components/ui/gradient-vertical-divider";
import {
  mepBimMeasurableResultCards,
  mepBimMeasurableResultsSection,
} from "@/constants/mep-bim-modelling-content";

/** Figma node 242:16177 — Measurable Results */
export function MepBimMeasurableResultsSection() {
  const { tag, titleLead, titleAccent, description } = mepBimMeasurableResultsSection;

  return (
    <section className="bg-white py-16 lg:py-[100px]">
      <PageContainer className="flex flex-col items-stretch gap-10 lg:gap-[60px]">
        <div className="flex w-full max-w-[1440px] flex-col items-start gap-5">
          <div className="flex flex-col items-start gap-3">
            <MepSectionTag label={tag} />
            <h2 className="mep-section-heading capitalize">
              <span className="font-medium">{titleLead}</span>
              <span className="text-accent font-light">{titleAccent}</span>
            </h2>
          </div>
          <p className="max-w-[424px] text-[16px] font-normal leading-6 text-[#808080]">
            {description}
          </p>
        </div>

        <div className="flex w-full max-w-[1440px] flex-col gap-8 sm:flex-row sm:items-stretch sm:gap-5">
          {mepBimMeasurableResultCards.map((card, index) => (
            <Fragment key={card.title}>
              {index > 0 ? (
                <GradientVerticalDivider id={`mep-measurable-divider-${index}`} />
              ) : null}
              <article className="flex min-w-0 flex-1 flex-col gap-5 p-2.5">
                <div className="flex flex-col gap-2.5">
                  <span
                    className="text-[48px] font-medium leading-none"
                    style={{ color: card.valueColor }}
                  >
                    {card.value}
                  </span>
                  <h3 className="text-[24px] font-normal leading-[1.35] text-[#111111]">{card.title}</h3>
                </div>
                <p className="text-[16px] font-normal leading-6 text-[#808080]">{card.description}</p>
              </article>
            </Fragment>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
