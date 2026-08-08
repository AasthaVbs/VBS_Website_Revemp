"use client";

import Image, { type StaticImageData } from "next/image";

import { ServicesUsaContact } from "@/components/forms/services-usa-contact";
import { PageContainer } from "@/components/layout/page-container";
import { MepSectionTag } from "@/components/sections/mep/mep-section-tag";
import { architecturalDraftingUsaHero } from "@/constants/architectural-drafting-services-usa-content";

type HeroContent = typeof architecturalDraftingUsaHero;

/** Figma 3910:65594 — Architectural Drafting USA hero with frosted estimate form. */
export function ArchitecturalDraftingUsaHeroSection({
  content = architecturalDraftingUsaHero,
}: {
  content?: HeroContent & { formBg: StaticImageData };
}) {
  return (
    <section id="ads-usa-hero" className="ads-usa-hero relative w-full overflow-hidden bg-white">
      <PageContainer className="py-2 sm:py-3 lg:py-2">
        <div className="flex flex-col items-stretch gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-[40px] xl:gap-[60px]">
          <div
            className="ads-usa-hero__copy flex w-full min-w-0 flex-col items-start gap-5 lg:gap-[30px]"
            style={{ maxWidth: content.copyMaxWidth }}
          >
            <div className="ads-usa-hero__title-block flex w-full flex-col items-start gap-3">
              <MepSectionTag label={content.tag} />
              <h1 className="w-full capitalize text-[#111111]">
                <span className="text-[28px] font-medium leading-[1.15] sm:text-[36px] lg:text-[42px] xl:text-[48px]">
                  {content.titleLead}
                </span>
                <span className="text-[28px] font-light leading-[1.15] text-[#D70416] sm:text-[36px] lg:text-[42px] xl:text-[48px]">
                  {content.titleAccent}
                </span>
              </h1>
            </div>
            <p className="ads-usa-hero__desc w-full text-[15px] font-normal capitalize leading-6 text-[#808080] sm:text-[16px]">
              {content.description}
            </p>
          </div>

          <div className="ads-usa-hero__media relative w-full max-w-[603px] shrink-0 overflow-hidden rounded-[10px] lg:w-[603px]">
            <Image
              src={content.formBg}
              alt={content.formBgAlt}
              fill
              priority
              sizes="603px"
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-black/35" aria-hidden />
            <div className="ads-usa-hero__form-wrap relative z-[1] w-full">
              <ServicesUsaContact
                variant="glass"
                headingLead={content.formTitleLead}
                headingAccent={content.formTitleAccent}
                buttonText={content.submitLabel}
                className="ads-usa-hero__services-form w-full"
              />
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
