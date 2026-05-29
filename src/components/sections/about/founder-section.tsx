import Image from "next/image";
import { ChevronRight } from "lucide-react";

import { PageContainer } from "@/components/layout/page-container";
import { SectionIntro } from "@/components/sections/section-primitives";
import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";
import { founderBio, founderHighlights } from "@/constants/about-content";

export function FounderSection() {
  const midpoint = Math.ceil(founderHighlights.length / 2);
  const leftColumn = founderHighlights.slice(0, midpoint);
  const rightColumn = founderHighlights.slice(midpoint);

  return (
    <section className="bg-white py-20">
      <PageContainer className="grid items-start gap-10 lg:grid-cols-2">
        <div className="flex min-w-0 flex-col items-start gap-5">
          <SectionIntro
            tag="Leadership"
            title={
              <>
                Meet the Founder & CEO{" "}
                <span className="font-light text-vbs-red">Ar. Ankit Kansara</span>
              </>
            }
            titleClassName="text-[48px] font-medium capitalize leading-[1.15] text-[#111111]"
          />

          <p className="text-[16px] font-normal capitalize leading-8 text-[#808080]">{founderBio}</p>

          <div className="grid w-full gap-x-8 gap-y-3 sm:grid-cols-2">
            <ul className="flex flex-col gap-3">
              {leftColumn.map((point) => (
                <li key={point} className="inline-flex items-start gap-2.5">
                  <span className="text-[16px]">✅</span>
                  <span className="text-[16px] font-normal capitalize leading-6 text-[#808080]">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
            <ul className="flex flex-col gap-3">
              {rightColumn.map((point) => (
                <li key={point} className="inline-flex items-start gap-2.5">
                  <span className="text-[16px]">✅</span>
                  <span className="text-[16px] font-normal capitalize leading-6 text-[#808080]">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <PrimaryCtaButton fullWidth={false}>
            Linkedin
            <ChevronRight className="h-2.5 w-2.5" strokeWidth={1.5} />
          </PrimaryCtaButton>
        </div>

        <div className="relative mx-auto h-[534px] w-full max-w-[850px]">
          <div className="absolute left-0 top-0 h-full w-[66%] overflow-hidden rounded-[10px]">
            <Image
              src="/images/figma/hero-profile.png"
              alt="Ar. Ankit Kansara"
              fill
              className="object-cover object-center"
            />
          </div>
          <div className="absolute left-[53%] top-[104px] z-10 h-[326px] w-[34%] min-w-[200px] overflow-hidden rounded-[10px] border-[10px] border-white shadow-[0_4px_14px_rgba(0,0,0,0.14)]">
            <Image
              src="/images/figma/industry-2.png"
              alt="VBS project work"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
