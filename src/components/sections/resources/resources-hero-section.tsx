import Image from "next/image";

import { PageContainer } from "@/components/layout/page-container";
import { SectionTag } from "@/components/sections/section-primitives";
import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";
import { resourcesPageHero } from "@/constants/resources-page-content";

/** Figma node 337:36551 — Resources hero */
export function ResourcesHeroSection() {
  const { tag, titleLead, titleAccent, description, ctaLabel, image, imageAlt } = resourcesPageHero;

  return (
    <section className="overflow-hidden bg-white py-12 lg:py-[100px]">
      <PageContainer>
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center lg:gap-8 xl:gap-12">
          <div className="flex w-full min-w-0 flex-1 flex-col items-start gap-[30px]">
            <div className="flex flex-col items-start gap-5">
              <div className="flex flex-col items-start gap-3">
                <SectionTag label={tag} />
                <h1 className="text-section w-full max-w-[497px] capitalize max-lg:max-w-none">
                  <span className="font-medium text-[#111111]">{titleLead}</span>
                  <span className="font-light text-[#D70416]">{titleAccent}</span>
                </h1>
              </div>
              <p className="w-full max-w-[583px] text-[16px] font-normal capitalize leading-6 text-[#808080] max-lg:max-w-none">
                {description}
              </p>
            </div>
            <PrimaryCtaButton fullWidth={false} href="/contact" className="shrink-0 px-5 py-4 capitalize">
              {ctaLabel}
            </PrimaryCtaButton>
          </div>

          <div className="relative mx-auto aspect-[650/530] w-full max-w-[650px] shrink-0 overflow-hidden rounded-[10px] bg-white lg:mx-0">
            <Image
              src={image}
              alt={imageAlt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 650px"
              priority
            />
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
