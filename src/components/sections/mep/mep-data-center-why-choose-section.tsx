import Image from "next/image";

import { PageContainer } from "@/components/layout/page-container";
import { SectionTag } from "@/components/sections/section-primitives";
import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";
import {
  dataCenterWhyChooseCards,
  dataCenterWhyChooseSection,
} from "@/constants/mep-data-center-whitepaper-content";
import { altFromImageSrc, cn } from "@/lib/utils";

const rowOne = dataCenterWhyChooseCards.slice(0, 3);
const rowTwo = dataCenterWhyChooseCards.slice(3, 5);

/** Figma node 995:24862 — Why choose us for data centers */
export function MepDataCenterWhyChooseSection() {
  const { tag, titleAccent, titleLead, description, ctaLabel } = dataCenterWhyChooseSection;

  return (
    <section className="bg-[#FAFAFA] py-12 lg:py-[100px]">
      <PageContainer className="flex flex-col items-center gap-10 lg:gap-[60px]">
        <div className="flex w-full flex-col gap-5">
          <div className="flex max-w-[778px] flex-col gap-3">
            <SectionTag label={tag} />
            <h2 className="text-section max-w-[778px]">
              <span className="font-light text-[#D70416]">{titleAccent}</span>
              <span className="font-medium text-[#111111]">{titleLead}</span>
            </h2>
          </div>
          <p className="max-w-[636px] text-[16px] leading-6 text-[#808080]">{description}</p>
        </div>

        <div className="flex w-full max-w-[1400px] flex-col gap-[30px]">
          <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2 xl:grid-cols-3">
            {rowOne.map((card) => (
              <WhyChooseCard key={card.title} card={card} />
            ))}
          </div>
          <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2 xl:mx-auto xl:max-w-[950px]">
            {rowTwo.map((card) => (
              <WhyChooseCard key={card.title} card={card} />
            ))}
          </div>
        </div>

        <div className="flex w-full justify-center px-2">
          <PrimaryCtaButton
            fullWidth={false}
            className="w-auto max-w-full shrink-0 px-5 py-4 capitalize backdrop-blur-[50px]"
          >
            {ctaLabel}
          </PrimaryCtaButton>
        </div>
      </PageContainer>
    </section>
  );
}

function WhyChooseCard({
  card,
  className,
}: {
  card: (typeof dataCenterWhyChooseCards)[number];
  className?: string;
}) {
  return (
    <article
      className={cn(
        "group flex flex-col items-start gap-5 overflow-hidden rounded-[10px] border border-transparent p-5 transition-all duration-200",
        "hover:border-[#CBCCCD] hover:bg-white hover:shadow-[0_4px_10px_rgba(0,0,0,0.15)]",
        className,
      )}
    >
      <div
        className={cn(
          "inline-flex items-center justify-start self-start overflow-hidden rounded-[10px] border border-transparent p-[9px] transition-colors duration-200",
          "group-hover:border-[#CBCCCD] group-hover:bg-[#FBF9F9]",
        )}
      >
        <Image
          src={card.icon}
          alt={altFromImageSrc(card.icon)}
          width={42}
          height={42}
          className="h-[42px] w-[42px] object-contain object-left"
        />
      </div>
      <div className="flex w-full flex-col items-start gap-5 text-left">
        <h3 className="text-[20px] font-normal leading-[1.35] text-[#111111] sm:text-[24px]">{card.title}</h3>
        <p className="text-[15px] leading-[26px] text-[#808080] sm:text-[16px]">{card.description}</p>
      </div>
    </article>
  );
}
