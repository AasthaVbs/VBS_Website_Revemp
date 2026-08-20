import { PageContainer } from "@/components/layout/page-container";
import { SectionTag } from "@/components/sections/section-primitives";
import {
  architectureDifferenceCards,
  architectureDifferenceSection,
} from "@/constants/architecture-services-redesign-content";
import { altFromImageSrc } from "@/lib/utils";

function resolveImageSrc(icon: string | { src: string }) {
  return typeof icon === "string" ? icon : icon.src;
}

export function ArchitectureVbsDifferenceSection({
  section = architectureDifferenceSection,
  cards = architectureDifferenceCards,
}: {
  section?: typeof architectureDifferenceSection;
  cards?: typeof architectureDifferenceCards;
}) {
  return (
    <section className="arch-svc-difference bg-[#FAFAFA] py-12 sm:py-16 lg:py-[100px]">
      <PageContainer className="arch-svc-difference__inner flex flex-col items-start">
        <div className="arch-svc-difference__header flex w-full max-w-[1000px] flex-col items-start">
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
          <p className="w-full max-w-[1000px] text-[16px] font-normal leading-6 text-[#808080]">
            {section.description}
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-10">
          {cards.map((card) => (
            <article key={card.title} className="arch-svc-difference__card flex min-w-0 flex-col items-start gap-5 p-2.5">
              <div className="flex flex-col items-start gap-2.5">
                <div className="arch-svc-difference__icon-wrap">
                  <img
                    src={resolveImageSrc(card.icon)}
                    alt={altFromImageSrc(card.icon)}
                    className="arch-svc-difference__icon arch-svc-difference__icon--muted"
                    width={56}
                    height={56}
                    decoding="async"
                  />
                  <img
                    src={resolveImageSrc(card.iconHover)}
                    alt=""
                    className="arch-svc-difference__icon arch-svc-difference__icon--colored"
                    width={56}
                    height={56}
                    decoding="async"
                    aria-hidden
                  />
                </div>
                <h3 className="text-[24px] font-normal leading-normal text-[#111111]">{card.title}</h3>
              </div>
              <p className="text-[16px] font-normal leading-6 text-[#808080]">{card.body}</p>
            </article>
          ))}
        </div>

        {section.note ? (
          <div className="arch-svc-difference__note w-full rounded-[10px] border border-[#42AA32] bg-[#F8FFFA] p-5">
            <p className="m-0 text-[16px] font-normal leading-6 text-[#111111]">{section.note.text}</p>
          </div>
        ) : null}
      </PageContainer>
    </section>
  );
}
