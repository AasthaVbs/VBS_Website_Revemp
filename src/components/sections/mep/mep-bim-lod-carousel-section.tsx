"use client";

import Image from "next/image";
import { useRef } from "react";

import { PageContainer } from "@/components/layout/page-container";
import { MepSectionTag } from "@/components/sections/mep/mep-section-tag";
import { mepBimLodCards, mepBimLodSection } from "@/constants/mep-bim-modelling-content";
import { useHorizontalCarouselWheel } from "@/hooks/use-horizontal-carousel-wheel";
import { cn } from "@/lib/utils";

/** Figma node 221:9409 — LOD horizontal carousel */
export function MepBimLodCarouselSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  useHorizontalCarouselWheel(sectionRef, carouselRef);

  const { tag, titleLead, titleAccent, titleEnd, description } = mepBimLodSection;

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#FAFAFA] py-16 lg:scroll-mt-[148px] lg:py-[100px]"
    >
      <PageContainer className="flex flex-col items-stretch gap-10 lg:gap-[60px]">
        <div className="flex w-full max-w-[1440px] flex-col items-start gap-5">
          <div className="flex flex-col items-start gap-3">
            <MepSectionTag label={tag} />
            <h2 className="mep-section-heading max-w-[1108px] capitalize">
              <span className="font-medium">{titleLead}</span>
              <span className="text-accent font-light">{titleAccent}</span>
              <br className="hidden lg:block" />
              <span className="font-medium">{titleEnd}</span>
            </h2>
          </div>
          <p className="max-w-[588px] text-[16px] font-normal leading-6 text-[#808080]">
            {description}
          </p>
        </div>

        <div className="relative w-full min-w-0">
          <div
            ref={carouselRef}
            className="mep-services-scroll flex w-full flex-nowrap items-stretch gap-5 overflow-x-auto overscroll-x-contain pb-2 lg:gap-5"
            role="list"
          >
            {mepBimLodCards.map((card) => (
              <article
                key={card.title}
                role="listitem"
                className={cn(
                  "flex w-[min(460px,85vw)] shrink-0 flex-col gap-5 overflow-hidden rounded-[10px]",
                  card.highlighted ? "bg-[#F7F7F7]" : "bg-transparent",
                )}
              >
                <div
                  className={cn(
                    "relative h-[280px] w-full shrink-0 overflow-hidden rounded-[10px]",
                    card.highlighted ? "bg-[#F7F7F7]" : "bg-[#F6F6F6]",
                  )}
                >
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className={cn(
                      "object-center",
                      card.highlighted ? "object-cover" : "object-contain p-11",
                    )}
                    sizes="460px"
                  />
                </div>
                <div className="flex flex-col gap-5 px-5 pb-5">
                  <h3 className="text-[22px] font-normal leading-[1.35] text-[#111111]">
                    {card.title}
                  </h3>
                  <p className="text-[16px] font-normal leading-6 text-[#808080]">
                    {card.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
