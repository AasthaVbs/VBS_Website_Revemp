import Image from "next/image";

import { PageContainer } from "@/components/layout/page-container";
import { SectionTag } from "@/components/sections/section-primitives";
import { cn, laptopCappedMaxWidth } from "@/lib/utils";
import {
  industriesMarqueeTrack,
  industriesSectionIntro,
} from "@/constants/industries-content";

type IndustriesSectionProps = {
  intro?: string;
  titleLine1?: string;
  /** Optional black text after a forced line break, before the accent (e.g. "Our "). */
  titleBeforeAccent?: string;
  titleLine2?: string;
  /** Force a line break after titleLine1 (Figma Industries title layout). */
  breakTitle?: boolean;
  titleMaxWidth?: number;
  introMaxWidth?: number;
  marqueeTrack?: typeof industriesMarqueeTrack;
  className?: string;
};

/** Industries marquee — shared with home and service pages */
export function IndustriesSection({
  intro = industriesSectionIntro,
  titleLine1 = "Industries ",
  titleBeforeAccent,
  titleLine2 = "We Serve",
  breakTitle = false,
  titleMaxWidth,
  introMaxWidth = 536,
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
              style={titleMaxWidth ? { maxWidth: laptopCappedMaxWidth(titleMaxWidth, "title") } : undefined}
            >
              <span className="font-medium text-[#111111]">{titleLine1}</span>
              {breakTitle ? <br /> : null}
              {titleBeforeAccent ? (
                <span className="font-medium text-[#111111]">{titleBeforeAccent}</span>
              ) : null}
              <span className="font-light text-accent">{titleLine2}</span>
            </h2>
          </div>
          <p
            className="text-[16px] font-normal leading-6 text-[#808080]"
            style={{ maxWidth: laptopCappedMaxWidth(introMaxWidth, "desc") }}
          >
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
                <Image src={item.src} alt={item.alt} fill unoptimized className="object-cover" sizes="330px" />
                <div className="absolute bottom-0 left-0 h-[160px] w-full bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,#000_100%)]" />
                <div className="absolute bottom-8 left-1/2 w-[228px] -translate-x-1/2 text-center text-[24px] font-normal leading-[1.2] text-white">
                  {item.title}
                </div>
              </div>
            ))}
          </div>
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-4 sm:w-6 lg:w-8 bg-[linear-gradient(90deg,#FAFAFA_30%,rgba(250,250,250,0)_100%)]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-4 sm:w-6 lg:w-8 bg-[linear-gradient(270deg,#FAFAFA_30%,rgba(250,250,250,0)_100%)]"
            aria-hidden
          />
        </div>
      </PageContainer>
    </section>
  );
}
