import Image from "next/image";

import { PageContainer } from "@/components/layout/page-container";
import { MepSectionTag } from "@/components/sections/mep/mep-section-tag";
import { mepBimUseCaseCards, mepBimUseCasesSection } from "@/constants/mep-bim-modelling-content";
import { cn } from "@/lib/utils";

const rowOne = mepBimUseCaseCards.slice(0, 2);
const rowTwo = mepBimUseCaseCards.slice(2, 4);

/** Figma node 242:16126 — Use Cases */
export function MepBimUseCasesSection() {
  const { tag, titleLead, titleAccent, description } = mepBimUseCasesSection;

  return (
    <section className="bg-[#FAFAFA] py-16 lg:py-[100px]">
      <PageContainer className="flex flex-col items-stretch gap-10 lg:gap-[60px]">
        <div className="flex w-full max-w-[1440px] flex-col items-start gap-5">
          <div className="flex max-w-[785px] flex-col items-start gap-3">
            <MepSectionTag label={tag} />
            <h2 className="mep-section-heading capitalize">
              <span className="font-medium">{titleLead}</span>
              <span className="text-accent font-light">{titleAccent}</span>
            </h2>
          </div>
          <p className="max-w-[536px] text-[16px] font-normal capitalize leading-6 text-[#808080]">
            {description}
          </p>
        </div>

        <div className="flex w-full max-w-[1440px] flex-col items-stretch gap-10">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-5">
            {rowOne.map((card) => (
              <UseCaseCard key={card.title} card={card} />
            ))}
          </div>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-5">
            {rowTwo.map((card) => (
              <UseCaseCard key={card.title} card={card} />
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

function UseCaseCard({ card }: { card: (typeof mepBimUseCaseCards)[number] }) {
  return (
    <article className="mep-interactive-card flex flex-col gap-5 bg-white p-5">
      <div className="flex flex-col gap-2.5">
        <div className="flex h-[60px] w-[60px] items-center justify-center rounded-[10px] p-[9px]">
          <Image
            src={card.icon}
            alt=""
            width={42}
            height={42}
            className="h-[42px] w-[42px] object-contain"
            aria-hidden
          />
        </div>
        <h3 className="text-[24px] font-normal leading-[1.35] text-[#111111]">{card.title}</h3>
      </div>
      <p className="text-[16px] font-normal leading-6 text-[#808080]">{card.description}</p>
    </article>
  );
}
