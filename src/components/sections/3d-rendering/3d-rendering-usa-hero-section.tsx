import Image from "next/image";
import { shouldUnoptimizeImage } from "@/lib/utils";

import { PageContainer } from "@/components/layout/page-container";
import { MepSectionTag } from "@/components/sections/mep/mep-section-tag";
import { threeDRenderingUsaHero } from "@/constants/3d-rendering-services-usa-content";

/** Figma 4016:56768 — 3D Rendering USA hero */
export function ThreeDRenderingUsaHeroSection({
  content = threeDRenderingUsaHero,
}: {
  content?: typeof threeDRenderingUsaHero;
}) {
  return (
    <section className="trs-usa-hero relative w-full overflow-hidden bg-white">
      <PageContainer className="trs-usa-hero__container py-6 sm:py-8 lg:py-4">
        <div className="flex flex-col items-stretch gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-[60px]">
          <div className="flex w-full min-w-0 flex-1 flex-col items-start gap-5">
            <div className="flex w-full flex-col items-start gap-3">
              <MepSectionTag label={content.tag} />
              <h1 className="w-full max-w-[580px] text-[#111111]">
                <span className="text-[28px] font-medium leading-[1.15] sm:text-[36px] lg:text-[42px] xl:text-[48px]">
                  {content.titleLead}
                </span>
                <span className="text-[28px] font-light leading-[1.15] text-[#D70416] sm:text-[36px] lg:text-[42px] xl:text-[48px]">
                  {content.titleAccentLead}
                </span>
                <span className="text-[28px] font-light leading-[1.15] text-[#D70416] line-through sm:text-[36px] lg:text-[42px] xl:text-[48px]">
                  {content.titlePriceWas}
                </span>
                <span className="text-[28px] font-light leading-[1.15] text-[#D70416] sm:text-[36px] lg:text-[42px] xl:text-[48px]">
                  {" "}
                </span>
                <span className="text-[28px] font-semibold leading-[1.15] text-[#D70416] sm:text-[36px] lg:text-[42px] xl:text-[48px]">
                  {content.titlePriceNow}
                </span>
              </h1>
            </div>
            <p className="max-w-[525px] text-[15px] font-normal capitalize leading-6 text-[#808080] sm:text-[16px]">
              {content.description}
            </p>
          </div>

          <div className="trs-usa-hero__media relative h-[320px] w-full shrink-0 overflow-hidden rounded-[10px] bg-[#F4F4F4] shadow-[0px_0px_16.8px_rgba(0,0,0,0.15)] sm:h-[420px] lg:h-[530px] lg:w-[650px]">
            <Image
              src={content.image}
              alt={content.imageAlt}
              fill
              priority
              unoptimized={shouldUnoptimizeImage(content.image)}
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 650px"
            />
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
