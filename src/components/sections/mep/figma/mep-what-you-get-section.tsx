// @ts-nocheck
import Image from "next/image";

import { PageContainer } from "@/components/layout/page-container";
import { MepSectionTag } from "@/components/sections/mep/mep-section-tag";
import {
  mepWhatYouGetCards,
  mepWhatYouGetSection,
} from "@/constants/mep-engineers-content";

/**
 * What You Get — Figma VBS-Website node 265-67102.
 */
export function MepWhatYouGetSection({
  section = mepWhatYouGetSection,
  cards = mepWhatYouGetCards,
}) {
  return (
    <section id="what-you-get" className="mep-figma-what-you-get bg-white py-[100px]">
      <PageContainer>
        <div className="mep-figma-what-you-get__stack flex w-full flex-col items-center gap-[60px]">
          <div className="flex w-full flex-col items-start gap-5">
            <div className="flex flex-col items-start gap-3">
              <MepSectionTag label={section.tag} />
              <h2
                className={`mep-figma-what-you-get__title w-full${section.titleParts?.length ? " mep-figma-what-you-get__title--parts" : ""}`}
              >
                {section.titleParts?.length ? (
                  section.titleParts.map((part) => (
                    <span key={part.text} className={part.className}>
                      {part.text}
                    </span>
                  ))
                ) : (
                  <>
                    <span className="text-section font-medium text-[#111111]">{section.titleLine1} </span>
                    <span className="text-section text-accent font-light">{section.titleLine2}</span>
                  </>
                )}
              </h2>
            </div>
            <p className="w-full max-w-[709px] text-[16px] font-normal leading-6 text-[#808080]">
              {section.description}
            </p>
          </div>

          <div className="mep-figma-what-you-get__cards flex w-full flex-col gap-5 lg:flex-row lg:items-stretch">
            {cards.map((card) => (
              <article
                key={card.title}
                className={`mep-figma-what-you-get__card flex min-w-0 flex-1 flex-col gap-[30px] rounded-[10px] border border-[#CBCCCD] bg-white p-5${card.elevated ? " mep-figma-what-you-get__card--elevated" : ""}`}
              >
                <div className="mep-figma-what-you-get__card-icon flex h-[70px] w-[70px] shrink-0 items-center justify-center rounded-[10px] border border-[#CBCCCD] bg-white p-[15px]">
                  <Image
                    src={card.icon}
                    alt=""
                    width={46}
                    height={46}
                    className="h-[46px] w-[46px] object-contain"
                    aria-hidden
                  />
                </div>
                <div className="mep-figma-what-you-get__card-body flex flex-col gap-5">
                  <h3 className="text-[24px] font-medium leading-normal text-[#111111]">{card.title}</h3>
                  <ul className="mep-figma-what-you-get__lines flex list-disc flex-col gap-1 ps-5 text-[16px] font-normal leading-6 text-[#808080]">
                    {card.lines.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          <div className="mep-figma-what-you-get__result inline-flex max-w-full flex-wrap items-center justify-center gap-2.5 self-center rounded-[10px] border border-[#42AA32] bg-[#F8FFFA] p-5 text-center">
            {section.resultLabel ? (
              <>
                <span className="shrink-0 text-[16px] font-medium capitalize leading-6 text-[#42AA32]">
                  {section.resultLabel}{" "}
                </span>
                <span className="shrink-0 text-[16px] font-medium capitalize leading-6 text-[#42AA32]">
                  -
                </span>
              </>
            ) : null}
            <span className="text-[16px] font-normal leading-6 text-[#111111]">
              {section.resultText}
            </span>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
