import Image from "next/image";

import { PageContainer } from "@/components/layout/page-container";
import { SectionTag } from "@/components/sections/section-primitives";
import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";
import { aboutHeroImages } from "@/constants/about-content";

/** Figma node 325:20127 — Hero Main */
export function AboutHeroSection() {
  return (
    <section className="overflow-hidden bg-white py-12 md:py-16 lg:py-[150px]">
      <PageContainer>
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-2.5">
          <div className="flex w-full min-w-0 flex-1 flex-col items-start gap-[30px]">
            <div className="flex flex-col items-start gap-5">
              <div className="flex flex-col items-start gap-3">
                <SectionTag label="About us" />
                <h1 className="text-section max-w-[497px] capitalize">
                  About{" "}
                  <span className="text-accent font-light">
                    Virtual Building Studio (VBS)
                  </span>
                </h1>
              </div>
              <p className="max-w-[583px] text-[16px] font-normal capitalize leading-6 text-[#808080]">
                Since 2015, we&apos;ve been the trusted partner for Architecture and Engineering
                firms, helping them rapidly scale their BIM teams and deliver award-winning projects
                every time.
              </p>
            </div>
            <PrimaryCtaButton fullWidth={false}>Contact Us</PrimaryCtaButton>
          </div>

          <div className="relative mx-auto aspect-[717/534] w-full max-w-[717px] shrink-0 lg:mx-0">
            <div className="absolute left-[21.34%] top-0 h-full w-[78.66%] overflow-hidden rounded-[10px]">
              <div className="absolute left-[-37.06%] top-[-2.25%] h-[103.56%] w-[174.82%]">
                <Image
                  src={aboutHeroImages.main}
                  alt="Virtual Building Studio team collaboration"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 564px"
                  priority
                />
              </div>
            </div>

            <div className="absolute left-0 top-[19.48%] z-10 h-[61.05%] w-[39.89%] overflow-hidden rounded-[10px] shadow-[0_4px_14px_rgba(0,0,0,0.14)]">
              <div
                className="pointer-events-none absolute inset-0 z-10 rounded-[10px] border-[10px] border-white"
                aria-hidden
              />
              <div className="absolute left-[-11.89%] top-[-4.6%] h-[108.59%] w-[123.78%]">
                <Image
                  src={aboutHeroImages.overlay}
                  alt="BIM building systems visualization"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 40vw, 286px"
                />
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
