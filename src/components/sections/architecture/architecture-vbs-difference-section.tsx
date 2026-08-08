import Image from "next/image";

import { PageContainer } from "@/components/layout/page-container";
import { SectionTag } from "@/components/sections/section-primitives";
import {
  architectureDifferenceCards,
  architectureDifferenceSection,
} from "@/constants/architecture-services-redesign-content";
import { altFromImageSrc } from "@/lib/utils";

export function ArchitectureVbsDifferenceSection({
  section = architectureDifferenceSection,
  cards = architectureDifferenceCards,
}: {
  section?: typeof architectureDifferenceSection;
  cards?: typeof architectureDifferenceCards;
}) {
  return (
    <section className="arch-svc-difference bg-[#FAFAFA] py-12 sm:py-16 lg:py-[100px]">
      <PageContainer className="flex flex-col items-start gap-10 lg:gap-[60px]">
        <div className="flex w-full max-w-[901px] flex-col items-start gap-5">
          <div className="flex flex-col items-start gap-3">
            <SectionTag label={section.tag} />
            <h2 className="text-section w-full max-w-[812px]">
              {section.titleParts.map((part, index) => (
                <span key={`${part.text}-${index}`} className={part.className}>
                  {part.text}
                </span>
              ))}
            </h2>
          </div>
          <p className="w-full text-[16px] font-normal leading-6 text-[#808080]">
            {section.description}
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-10">
          {cards.map((card) => (
            <article key={card.title} className="flex min-w-0 flex-col items-start gap-5 p-2.5">
              <div className="flex flex-col items-start gap-2.5">
                <div className="flex h-[60px] w-[60px] shrink-0 items-center justify-center overflow-hidden rounded-[10px] p-[15px]">
                  <Image
                    src={card.icon}
                    alt={altFromImageSrc(card.icon)}
                    width={40}
                    height={40}
                    className="h-[40px] w-[40px] object-contain"
                  />
                </div>
                <h3 className="text-[24px] font-normal leading-normal text-[#111111]">{card.title}</h3>
              </div>
              <p className="text-[16px] font-normal leading-6 text-[#808080]">{card.body}</p>
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
