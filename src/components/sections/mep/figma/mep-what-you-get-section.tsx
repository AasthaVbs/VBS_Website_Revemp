// @ts-nocheck
import { PageContainer } from "@/components/layout/page-container";
import {
  mepWhatYouGetCards,
  mepWhatYouGetSection,
} from "@/constants/mep-engineers-content";
/**
 * What You Get — Figma VBS-Current-Website node 5-12802.
 */
export function MepWhatYouGetSection({
  section = mepWhatYouGetSection,
  cards = mepWhatYouGetCards,
}) {

  return (
    <section id="what-you-get" className="mep-figma-what-you-get bg-white py-16 lg:py-[100px]">
      <PageContainer className="flex flex-col items-stretch">
        <div className="flex flex-col items-stretch gap-2 lg:gap-[30px]">
          <div className="flex w-full flex-col items-start justify-center gap-2">
            <div className="flex flex-col items-start justify-center gap-3">
              <span className="text-tag inline-flex w-fit items-center justify-center self-start rounded-[10px] border border-[#2299D6] bg-[rgba(34,153,214,0.10)] px-3 py-1.5 capitalize text-[#2299D6]">
                {section.tag}
              </span>
              <h2
                className="capitalize"
                style={section.titleMaxWidth ? { maxWidth: `${section.titleMaxWidth}px` } : undefined}
              >
                <span className="text-section font-medium text-[#111111]">{section.titleLine1} </span>
                <span className="text-section text-accent font-light">{section.titleLine2}</span>
              </h2>
            </div>
            <p className="w-full max-w-[836px] text-[16px] font-normal capitalize leading-6 text-[#808080]">
              {section.description}
            </p>
          </div>

          <div className="flex w-full flex-col gap-2 lg:flex-row lg:items-stretch lg:gap-2 py-4">
            {cards.map((card) => (
              <article
                key={card.title}
                className={`mep-figma-what-you-get__card flex min-w-0 flex-1 flex-col gap-[25px] rounded-[10px] bg-white p-3${card.elevated ? " mep-figma-what-you-get__card--elevated" : ""}`}
              >
                <div className="mep-figma-what-you-get__card-body flex flex-col gap-2">
                  <h3 className="text-[24px] font-medium leading-[1.35] text-[#111111]">{card.title}</h3>
                  <ul className="mep-figma-what-you-get__lines flex list-disc flex-col gap-1 ps-2 text-[16px] font-normal leading-6 text-[#808080]">
                    {card.lines.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </div>
                <div className="mep-figma-what-you-get__card-icon flex h-[70px] w-[70px] shrink-0 items-center justify-center rounded-[10px] border border-[#CBCCCD] bg-white p-[15px]">
                  <img src={card.icon} alt="" className="h-[46px] w-[46px] object-contain" aria-hidden decoding="async" />
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mep-figma-what-you-get__result mt-[5px] inline-flex max-w-full flex-wrap items-center gap-2.5 self-start rounded-[10px] border border-[#42AA32] bg-[#F8FFFA] p-5">
          {section.resultLabel ? (
            <>
              <span className="shrink-0 text-[16px] font-medium leading-6 text-[#42AA32]">
                {section.resultLabel}{" "}
              </span>
              <span className="shrink-0 text-[16px] font-medium leading-6 text-[#42AA32]">-</span>
            </>
          ) : null}
          <span className="text-[16px] font-normal capitalize leading-6 text-[#111111]">
            {section.resultText}
          </span>
        </div>
      </PageContainer>
    </section>
  );
}
