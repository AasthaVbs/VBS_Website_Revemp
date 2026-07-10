// @ts-nocheck
"use client";

import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { useRef } from "react";

// @ts-nocheck
import { PageContainer } from "@/components/layout/page-container";
import { MepSectionTag } from "@/components/sections/mep/mep-section-tag";
import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";
import {
  mepFullSpectrumIntro,
  mepFullSpectrumServices,
} from "@/constants/mep-engineers-content";
import { useHorizontalCarouselWheel } from "@/hooks/use-horizontal-carousel-wheel";
import { cn } from "@/lib/utils";

/** Figma node 265:67257 — Our Full-Spectrum MEP Services carousel */
export function MepFullSpectrumSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  useHorizontalCarouselWheel(sectionRef, carouselRef);

  return (
    <section ref={sectionRef} className="bg-[#FAFAFA] py-16 lg:scroll-mt-[148px] lg:py-[100px]">
      <PageContainer className="flex flex-col items-stretch gap-10 lg:gap-[60px]">
        <div className="flex w-full flex-col items-start gap-5">
          <div className="flex flex-col items-start gap-3">
            <MepSectionTag label="Services" />
            <h2 className="mep-section-heading max-w-[759px] capitalize">
              <span className="font-medium">Our Full-Spectrum </span>
              <span className="text-accent font-light">MEP Services</span>
            </h2>
          </div>
          <p className="max-w-[833px] text-[16px] font-normal leading-6 text-[#808080]">
            {mepFullSpectrumIntro}
          </p>
        </div>

        <div className="w-full min-w-0 lg:scroll-mt-[148px]">
          <div
            ref={carouselRef}
            className={cn(
              "mep-services-scroll flex w-full flex-nowrap items-start gap-[30px] overflow-x-auto overscroll-x-contain pb-2 lg:scroll-mt-[148px]",
            )}
            role="list"
          >
            {mepFullSpectrumServices.map((service) => (
              <article
                key={service.title}
                role="listitem"
                className={cn(
                  "flex w-[460px] shrink-0 flex-col items-center gap-5 overflow-hidden rounded-[10px]",
                  service.highlighted
                    ? "border border-[#CBCCCD] bg-white shadow-[0_0_14px_rgba(0,0,0,0.20)]"
                    : "bg-transparent",
                )}
              >
                <div className="relative h-[280px] w-full shrink-0 overflow-hidden rounded-[10px] bg-[#E8E8E8]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover object-center"
                    sizes="460px"
                  />
                </div>

                <div className="flex h-[295px] w-full flex-col gap-[15px] overflow-hidden p-5">
                  <div className="flex min-h-0 flex-1 flex-col items-end justify-between self-stretch">
                    <div className="flex w-full flex-col items-start gap-5">
                      <h3 className="w-full text-[24px] font-normal leading-[1.35] text-[#111111]">
                        {service.title}
                      </h3>
                      <p className="w-full text-[16px] font-normal leading-6 text-[#808080]">
                        {service.description}
                      </p>
                    </div>
                    <a
                      href="#"
                      className="inline-flex w-fit items-center justify-center gap-1.5 text-[16px] font-normal text-[#2299D6]"
                    >
                      View More
                      <ChevronRight className="h-6 w-6 shrink-0 -rotate-90 stroke-[1.5]" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <PrimaryCtaButton
          fullWidth={false}
          className="h-auto min-h-[52px] w-[164px] self-center px-5 py-4 capitalize backdrop-blur-[50px]"
        >
          Let&apos;s Talk
        </PrimaryCtaButton>
      </PageContainer>
    </section>
  );
}
