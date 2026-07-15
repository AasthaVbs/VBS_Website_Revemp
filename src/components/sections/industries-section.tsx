import Image from "next/image";

import { PageContainer } from "@/components/layout/page-container";
import { SectionTag } from "@/components/sections/section-primitives";
import { cn } from "@/lib/utils";
import {
  industriesMarqueeTrack,
  industriesSectionIntro,
} from "@/constants/industries-content";

type IndustriesSectionProps = {
  intro?: string;
  titleLine1?: string;
  titleLine2?: string;
  titleMaxWidth?: number;
  marqueeTrack?: typeof industriesMarqueeTrack;
  className?: string;
};

/** Industries marquee — shared with home and service pages */
export function IndustriesSection({
  intro = industriesSectionIntro,
  titleLine1 = "Industries ",
  titleLine2 = "We Serve",
  titleMaxWidth,
  marqueeTrack = industriesMarqueeTrack,
  className,
}: IndustriesSectionProps) {
  return (
    <section className={cn("bg-[#FAFAFA] py-20", className)}>
      <PageContainer className="space-y-10">
        <div className="flex flex-col items-start gap-2 md:gap-5">
          <div className="flex flex-col items-start gap-2 md:gap-3">
            <SectionTag label="Industries" />
            <h2
              className="text-section"
              style={titleMaxWidth ? { maxWidth: `${titleMaxWidth}px` } : undefined}
            >
              <span className="font-medium text-[#111111]">{titleLine1}</span>
              <span className="font-light text-accent">{titleLine2}</span>
            </h2>
          </div>
          <p className="max-w-[536px] text-[16px] font-normal leading-6 text-[#808080]">
            {intro}
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="industries-marquee-track">
            {marqueeTrack.map((item, idx) => (
              <div
                key={`${item.title}-${idx}`}
                className="relative h-[330px] w-[330px] shrink-0 overflow-hidden rounded-[10px] border border-[#CBCCCD]"
              >
                <Image src={item.src} alt={item.alt} fill className="object-cover" sizes="330px" />
                <div className="absolute bottom-0 left-0 h-[160px] w-full bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,#000_100%)]" />
                <div className="absolute bottom-8 left-1/2 w-[228px] -translate-x-1/2 text-center text-[24px] font-normal leading-[1.2] text-white">
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
