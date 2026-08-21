"use client";

import Image from "next/image";
import { shouldUnoptimizeImage } from "@/lib/utils";

import { PageContainer } from "@/components/layout/page-container";
import { MepSectionTag } from "@/components/sections/mep/mep-section-tag";
import { AcsInquiryZohoHeroForm } from "@/components/zoho/acs-inquiry-zoho-hero-form";
import { architecturalDraftingUsaHero } from "@/constants/architectural-drafting-services-usa-content";

type HeroContent = typeof architecturalDraftingUsaHero;

/** Architectural Drafting USA hero — form container only carries the bg image. */
export function ArchitecturalDraftingUsaHeroSection({
  content = architecturalDraftingUsaHero,
}: {
  content?: HeroContent & { descMaxWidth?: number };
}) {
  return (
    <section id="ads-usa-hero" className="ads-usa-hero relative w-full overflow-hidden bg-white">
      <PageContainer className="ads-usa-hero__container relative z-[1] pt-1 pb-3 sm:pt-2 sm:pb-4 lg:pb-5">
        <div className="ads-usa-hero__row flex flex-col items-stretch gap-8 lg:flex-row lg:items-center">
          <div className="ads-usa-hero__copy flex w-full min-w-0 flex-col items-start gap-3 lg:gap-4">
            <div className="ads-usa-hero__title-block flex w-full flex-col items-start gap-3">
              <MepSectionTag label={content.tag} />
              <h1 className="w-full capitalize text-[#111111]">
                <span className="font-medium leading-[1.15]">
                  {content.titleLead}
                </span>
                <span className="font-light leading-[1.15] text-[#D70416]">
                  {content.titleAccent}
                </span>
              </h1>
            </div>
            <p
              className="ads-usa-hero__desc w-full text-[15px] font-normal capitalize leading-6 text-[#808080] sm:text-[16px]"
              style={content.descMaxWidth ? { maxWidth: content.descMaxWidth } : undefined}
            >
              {content.description}
            </p>
          </div>

          <div className="ads-usa-hero__media relative w-full overflow-hidden rounded-[14px]">
            <div className="ads-usa-hero__media-bg" aria-hidden>
              <Image
                src={content.formBg}
                alt={content.formBgAlt}
                fill
                priority
                unoptimized={shouldUnoptimizeImage(content.formBg)}
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-center"
              />
            </div>
            <div className="ads-usa-hero__media-overlay" aria-hidden />

            <div className="ads-usa-hero__form-wrap relative z-[1] w-full">
              <AcsInquiryZohoHeroForm
                headingLead={content.formTitleLead}
                headingAccent={content.formTitleAccent}
                className="ads-usa-hero__services-form w-full"
              />
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
