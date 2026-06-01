import Image from "next/image";

import { PageContainer } from "@/components/layout/page-container";
import { MepSectionTag } from "@/components/sections/mep/mep-section-tag";
import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";

/** MEP hero — Figma node 265:59177 (Hero Main) */
export function MepHeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div
        className="pointer-events-none absolute z-0 aspect-[1191/707] max-w-[1191px] max-xl:inset-x-0 max-xl:top-0 max-xl:w-full max-xl:max-w-none lg:right-0 lg:top-0 lg:w-[min(62%,1191px)]"
        aria-hidden
      >
        <Image
          src="/images/mep/mep-hero-bg-68e547.png"
          alt=""
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 62vw"
          className="object-cover object-center"
        />
      </div>

      <PageContainer className="relative z-10 flex min-h-0 flex-col justify-start py-12 max-lg:min-h-[420px] lg:min-h-[680px] lg:py-[150px]">
        <div className="flex w-full max-w-[779px] flex-col items-start gap-[30px]">
          <div className="flex w-full flex-col items-start gap-5 self-stretch">
            <div className="flex flex-col items-start gap-3">
              <MepSectionTag label="MEP Engineering Firms" />
              <h1 className="w-full max-w-[779px] capitalize text-[#111111]">
                <span className="text-[40px] font-medium leading-[1.1] sm:text-[48px] lg:text-[60px]">
                  MEP BIM Services That Reduce Rework &{" "}
                </span>
                <span className="text-[40px] font-light leading-[1.1] text-[#D70416] sm:text-[48px] lg:text-[60px]">
                  Improve Project Coordination
                </span>
              </h1>
            </div>
            <p className="w-full max-w-[660px] text-[16px] font-normal capitalize leading-6 text-[#808080]">
              From pre-bid estimation to clash-free coordination and as-built models we help
              contractors and AEC firms deliver projects faster and more efficiently.
            </p>
          </div>

          <PrimaryCtaButton
            fullWidth={false}
            className="h-auto min-h-[52px] px-5 py-4 capitalize backdrop-blur-[50px]"
          >
            View All Service
          </PrimaryCtaButton>
        </div>
      </PageContainer>
    </section>
  );
}
