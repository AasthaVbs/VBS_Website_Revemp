import Image from "next/image";

import { PageContainer } from "@/components/layout/page-container";
import { SectionTag } from "@/components/sections/section-primitives";
import {
  architectureStageServicesCards,
  architectureStageServicesSection,
} from "@/constants/architecture-services-redesign-content";
import { altFromImageSrc } from "@/lib/utils";

export function ArchitectureStageServicesSection({
  section = architectureStageServicesSection,
  cards = architectureStageServicesCards,
}: {
  section?: typeof architectureStageServicesSection;
  cards?: typeof architectureStageServicesCards;
}) {
  return (
    <section id="services" className="arch-svc-stages bg-[#FAFAFA] py-12 sm:py-16 lg:py-[100px]">
      <PageContainer className="flex flex-col items-start gap-10 lg:gap-[60px]">
        <div className="flex w-full max-w-[848px] flex-col items-start gap-5">
          <div className="flex flex-col items-start gap-3">
            <SectionTag label={section.tag} />
            <h2 className="text-section w-full">
              <span className="font-medium text-[#111111]">{section.titleLine1}</span>
              <span className="text-accent font-light">{section.titleLine2}</span>
            </h2>
          </div>
          <p className="w-full max-w-[764px] text-[16px] font-normal leading-6 text-[#808080]">
            {section.description}
          </p>
        </div>

        <div className="arch-svc-stages__grid grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.title}
              className="arch-svc-stages__card flex min-w-0 flex-col gap-5 rounded-[10px] border border-[#CBCCCD] bg-white p-5"
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
              <div className="flex flex-col gap-3">
                <h3 className="text-[24px] font-medium leading-[1.35] text-[#111111]">{card.title}</h3>
                <ul className="arch-svc-stages__lines flex list-disc flex-col gap-1.5 ps-5 text-[15px] font-normal leading-6 text-[#808080]">
                  {card.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        {section.note ? (
          <div className="w-full rounded-[10px] border border-[#42AA32] bg-[#F8FFFA] p-5">
            <p className="m-0 text-[16px] font-normal leading-6 text-[#111111]">{section.note.text}</p>
          </div>
        ) : null}
      </PageContainer>
    </section>
  );
}
