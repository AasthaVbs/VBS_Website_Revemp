import Image from "next/image";

import { PageContainer } from "@/components/layout/page-container";
import { SectionTag } from "@/components/sections/section-primitives";
import {
  industriesMarqueeTrack,
  industriesSectionIntro,
} from "@/constants/industries-content";

/** Industries marquee — shared with home page */
export function IndustriesSection() {
  return (
    <section className="bg-white py-20">
      <PageContainer className="space-y-10">
        <div className="flex flex-col items-start gap-5">
          <div className="flex flex-col items-start gap-3">
            <SectionTag label="Industries" />
            <h2 className="text-section">
              Industries <span className="text-accent">We Serve</span>
            </h2>
          </div>
          <p className="max-w-[536px] text-[16px] font-normal leading-6 text-[#808080]">
            {industriesSectionIntro}
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="industries-marquee-track">
            {industriesMarqueeTrack.map((item, idx) => (
              <div
                key={`${item.img}-${idx}`}
                className="relative h-[330px] w-[330px] shrink-0 overflow-hidden rounded-[10px] border border-[#CBCCCD]"
              >
                <Image src={`/images/figma/${item.img}`} alt={item.title} fill className="object-cover" />
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
