import Image from "next/image";

import { PageContainer } from "@/components/layout/page-container";
import { SectionTag } from "@/components/sections/section-primitives";
import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";
import { leadershipHeroCopy, leadershipHeroImages } from "@/constants/leadership-content";

/** Figma node 897:15373 — Leadership hero (same media frame as About) */
export function LeadershipHeroSection() {
  const ctaHref =
    leadershipHeroCopy.ctaLabel.trim().toLowerCase() === "contact us" ? "/contact" : undefined;

  return (
    <section className="overflow-hidden bg-white py-12 md:py-16 lg:py-[150px]">
      <PageContainer>
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-2.5">
          <div className="flex w-full min-w-0 flex-1 flex-col items-start gap-[30px]">
            <div className="flex flex-col items-start gap-5">
              <div className="flex flex-col items-start gap-3">
                <SectionTag label={leadershipHeroCopy.tag} />
                <h1 className="text-section w-full max-w-[655px] capitalize max-lg:max-w-none">
                  {leadershipHeroCopy.titleLead}
                  <span className="text-accent font-light">{leadershipHeroCopy.titleAccent}</span>
                </h1>
              </div>
              <div className="flex w-full max-w-[655px] flex-col items-start gap-4 max-lg:max-w-none">
                <p className="text-[16px] font-normal capitalize leading-6 text-[#808080]">
                  {leadershipHeroCopy.descriptionLead}{" "}
                  <span className="font-medium text-[#111111]">
                    {leadershipHeroCopy.descriptionHighlight}
                  </span>
                </p>
                <p className="text-[16px] font-normal capitalize leading-6 text-[#808080]">
                  {leadershipHeroCopy.descriptionTail}
                </p>
              </div>
            </div>
            <PrimaryCtaButton fullWidth={false} href={ctaHref}>
              {leadershipHeroCopy.ctaLabel}
            </PrimaryCtaButton>
          </div>

          <div className="relative mx-auto aspect-[717/534] w-full max-w-[717px] shrink-0 lg:mx-0">
            <div className="absolute left-[21.34%] top-0 h-full w-[78.66%] overflow-hidden rounded-[10px]">
              <div className="absolute left-[-37.06%] top-[-2.25%] h-[103.56%] w-[174.82%]">
                <Image
                  src={leadershipHeroImages.main}
                  alt="Leadership primary visual"
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
                  src={leadershipHeroImages.overlay}
                  alt="Leadership secondary visual"
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
