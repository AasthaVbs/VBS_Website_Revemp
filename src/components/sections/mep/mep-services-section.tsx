import Image from "next/image";

import { PageContainer } from "@/components/layout/page-container";
import { MepSectionTag } from "@/components/sections/mep/mep-section-tag";
import { mepWhatYouGetCards, mepWhatYouGetSection } from "@/constants/mep-engineers-content";
import { altFromImageSrc, cn } from "@/lib/utils";

/** Figma node 286:10032 — What You Get */
export function MepServicesSection() {
  return (
    <section className="bg-white py-16 lg:py-[100px]">
      <PageContainer className="flex flex-col items-stretch gap-10 lg:gap-[60px]">
        <div className="flex w-full flex-col items-start gap-5">
          <div className="flex flex-col items-start gap-3">
            <MepSectionTag label={mepWhatYouGetSection.tag} />
            <h2 className="mep-section-heading capitalize">
              <span className="font-medium">{mepWhatYouGetSection.titleLine1} </span>
              <span className="text-accent font-light">{mepWhatYouGetSection.titleLine2}</span>
            </h2>
          </div>
          <p className="max-w-[836px] text-[16px] font-normal leading-6 text-[#808080]">
            {mepWhatYouGetSection.description}
          </p>
        </div>

        <div className="flex w-full flex-col gap-5 lg:flex-row lg:items-stretch lg:gap-5">
          {mepWhatYouGetCards.map((card) => (
            <article
              key={card.title}
              className={cn(
                "flex min-w-0 flex-1 flex-col gap-[30px] rounded-[10px] border border-[#CBCCCD] bg-white p-5",
                card.elevated && "shadow-[0_4px_10px_rgba(0,0,0,0.15)]",
              )}
            >
              <div className="flex h-[70px] w-[70px] shrink-0 items-center justify-center rounded-[10px] border border-[#CBCCCD] bg-white p-[15px]">
                <Image
                  src={card.icon}
                  alt={altFromImageSrc(card.icon)}
                  width={46}
                  height={46}
                  className="h-[46px] w-[46px] object-contain"
                />
              </div>
              <div className="flex flex-col gap-5">
                <h3 className="text-[24px] font-medium leading-[1.35] text-[#111111]">{card.title}</h3>
                <div className="max-w-[427px] text-[16px] font-normal leading-6 text-[#808080]">
                  {card.lines.map((line, index) => (
                    <span key={line}>
                      {index > 0 ? <br /> : null}
                      {line}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="inline-flex max-w-full flex-wrap items-start gap-2.5 self-start rounded-[10px] border border-[#42AA32] bg-[#F8FFFA] p-5">
          <span className="text-[16px] font-medium capitalize leading-6 text-[#42AA32]">
            {mepWhatYouGetSection.resultLabel}{" "}
          </span>
          <span className="text-[16px] font-medium capitalize leading-6 text-[#42AA32]">-</span>
          <p className="text-[16px] font-normal capitalize leading-6 text-[#111111]">
            {mepWhatYouGetSection.resultText}
          </p>
        </div>
      </PageContainer>
    </section>
  );
}
