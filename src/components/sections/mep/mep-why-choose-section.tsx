import Image from "next/image";

import { PageContainer } from "@/components/layout/page-container";
import { MepSectionTag } from "@/components/sections/mep/mep-section-tag";
import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";
import { mepWhyChooseCards, mepWhyChooseSection } from "@/constants/mep-engineers-content";
import { cn } from "@/lib/utils";

const rowOne = mepWhyChooseCards.slice(0, 3);
const rowTwo = mepWhyChooseCards.slice(3, 5);

/** Figma node 265:67397 — Why Leading Firms Choose */
export function MepWhyChooseSection() {
  return (
    <section className="bg-[#FAFAFA] py-16 lg:py-[100px]">
      <PageContainer className="flex flex-col items-center gap-10 lg:gap-[60px]">
        <div className="flex w-full flex-col items-start gap-5">
          <div className="flex flex-col items-start gap-3">
            <MepSectionTag label={mepWhyChooseSection.tag} />
            <h2 className="max-w-[724px] capitalize text-[#111111]">
              <span className="text-[48px] font-medium leading-[1.15]">
                {mepWhyChooseSection.titleLine1}{" "}
              </span>
              <span className="text-[48px] font-light leading-[1.15] text-[#D70416]">
                {mepWhyChooseSection.titleLine2}
              </span>
            </h2>
          </div>
          <p className="max-w-[587px] text-[16px] font-normal capitalize leading-6 text-[#808080]">
            {mepWhyChooseSection.description}
          </p>
        </div>

        <div className="flex w-full flex-col items-start gap-[30px]">
          <div className="flex w-full flex-col gap-5 lg:flex-row lg:items-stretch lg:gap-5">
            {rowOne.map((card) => (
              <WhyChooseCard key={card.title} card={card} className="min-w-0 flex-1" />
            ))}
          </div>

          <div className="flex w-full flex-col items-center gap-5 lg:flex-row lg:justify-center lg:gap-5">
            {rowTwo.map((card) => (
              <WhyChooseCard key={card.title} card={card} className="w-full lg:w-[460px]" />
            ))}
          </div>
        </div>

        <PrimaryCtaButton
          fullWidth={false}
          className="h-auto min-h-[52px] w-[164px] px-5 py-4 capitalize backdrop-blur-[50px]"
        >
          Let&apos;s Talk
        </PrimaryCtaButton>
      </PageContainer>
    </section>
  );
}

function WhyChooseCard({
  card,
  className,
}: {
  card: (typeof mepWhyChooseCards)[number];
  className?: string;
}) {
  return (
    <article
      className={cn(
        "flex flex-col gap-5 rounded-[10px] bg-transparent p-5 transition-shadow duration-200",
        "hover:border hover:border-[#CBCCCD] hover:bg-white hover:shadow-[0_4px_10px_rgba(0,0,0,0.15)]",
        className,
      )}
    >
      <div className="relative h-[60px] w-[60px] shrink-0 overflow-hidden rounded-[10px]">
        <Image src={card.icon} alt="" width={60} height={60} className="h-[60px] w-[60px] object-contain" aria-hidden />
      </div>
      <div className="flex flex-col gap-2.5">
        <h3 className="text-[24px] font-normal leading-[1.35] text-[#111111]">{card.title}</h3>
        <p className={cn("text-[16px] font-normal leading-[26px] text-[#808080]", card.wide && "max-w-[390px]")}>
          {card.description}
        </p>
      </div>
    </article>
  );
}
