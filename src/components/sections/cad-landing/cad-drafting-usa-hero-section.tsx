"use client";

import Image from "next/image";

import { PageContainer } from "@/components/layout/page-container";
import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";
import { cadDraftingUsaHero } from "@/constants/cad-drafting-services-usa-content";

/** Figma 3991:46252 — CAD Drafting Services USA hero */
export function CadDraftingUsaHeroSection({
  hero = cadDraftingUsaHero,
}: {
  hero?: typeof cadDraftingUsaHero;
} = {}) {
  return (
    <section className="cad-usa-hero bg-white py-12 sm:py-16 lg:py-[100px]">
      <PageContainer>
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-[60px]">
          <div className="flex min-w-0 flex-1 flex-col items-start justify-center gap-[30px]">
            <h1 className="w-full max-w-[730px] lg:max-w-none">
              <span className="font-medium text-[#111111]">{hero.titleLead}</span>
              <span className="font-light text-[#D70416]">{hero.titleAccent}</span>
            </h1>
            <PrimaryCtaButton
              fullWidth={false}
              href={hero.ctaHref}
              className="!h-auto !min-h-[56px] !px-5 !py-4 capitalize"
            >
              {hero.ctaLabel}
            </PrimaryCtaButton>
          </div>

          <div className="relative h-[280px] w-full overflow-hidden rounded-[10px] bg-[#F4F4F4] shadow-[0_0_16.8px_rgba(0,0,0,0.15)] sm:h-[400px] lg:h-[530px] lg:w-[650px] lg:shrink-0">
            <Image
              src={hero.image}
              alt={hero.imageAlt}
              fill
              priority
              unoptimized={typeof hero.image === "string"}
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 650px"
            />
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
