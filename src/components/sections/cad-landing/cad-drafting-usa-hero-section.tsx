"use client";

import Image from "next/image";

import { PageContainer } from "@/components/layout/page-container";
import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";
import { cadDraftingUsaHero } from "@/constants/cad-drafting-services-usa-content";
import { cn, shouldUnoptimizeImage } from "@/lib/utils";

export type CadDraftingUsaHeroContent = {
  titleLead: string;
  titleAccent: string;
  ctaLabel: string;
  ctaHref: string;
  image: string;
  imageAlt: string;
  description?: string;
  breakTitle?: boolean;
  titleMaxWidth?: number;
  descriptionMaxWidth?: number;
};

/** Figma 3991:46252 — CAD Drafting Services USA hero */
export function CadDraftingUsaHeroSection({
  hero = cadDraftingUsaHero,
  mobileLayout = "default",
}: {
  hero?: CadDraftingUsaHeroContent;
  mobileLayout?: "default" | "copy-image-cta";
} = {}) {
  const copyImageCta = mobileLayout === "copy-image-cta";

  return (
    <section className={cn("cad-usa-hero bg-white py-12 sm:py-16 lg:py-[100px]", copyImageCta && "max-lg:py-10")}>
      <PageContainer>
        <div
          className={cn(
            "flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-[60px]",
            copyImageCta && "max-lg:gap-8",
          )}
        >
          <div
            className={cn(
              "flex min-w-0 flex-1 flex-col items-start justify-center gap-[30px]",
              copyImageCta && "max-lg:contents",
            )}
          >
            <div
              className={cn(
                "flex w-full flex-col items-start gap-5",
                copyImageCta && "max-lg:order-1 max-lg:items-center max-lg:text-center max-lg:gap-4",
              )}
            >
              <h1
                className={cn(
                  hero.titleMaxWidth ? "w-full" : "w-full max-w-[730px] lg:max-w-none",
                  copyImageCta && "max-lg:mx-auto",
                )}
                style={hero.titleMaxWidth ? { maxWidth: `${hero.titleMaxWidth}px` } : undefined}
              >
                <span className="font-medium text-[#111111]">{hero.titleLead}</span>
                {hero.breakTitle ? <br /> : null}
                <span className="font-light text-[#D70416]">{hero.titleAccent}</span>
              </h1>
              {hero.description ? (
                <p
                  className={cn(
                    "w-full text-[16px] font-normal leading-6 text-[#808080]",
                    copyImageCta && "max-lg:mx-auto",
                  )}
                  style={{ maxWidth: `${hero.descriptionMaxWidth ?? 635}px` }}
                >
                  {hero.description}
                </p>
              ) : null}
            </div>
            <PrimaryCtaButton
              fullWidth={false}
              href={hero.ctaHref}
              className={cn(
                "!h-auto !min-h-[56px] !px-5 !py-4 capitalize",
                copyImageCta && "max-lg:order-3 max-lg:mx-auto",
              )}
            >
              {hero.ctaLabel}
            </PrimaryCtaButton>
          </div>

          <div
            className={cn(
              "cad-usa-hero__media relative h-[280px] w-full overflow-hidden rounded-[10px] bg-[#F4F4F4] shadow-[0_0_16.8px_rgba(0,0,0,0.15)] sm:h-[400px] lg:h-[530px] lg:w-[650px] lg:shrink-0",
              copyImageCta && "max-lg:h-[220px] sm:max-lg:h-[360px]",
              copyImageCta && "max-lg:order-2",
            )}
          >
            <Image
              src={hero.image}
              alt={hero.imageAlt}
              fill
              priority
              unoptimized={shouldUnoptimizeImage(hero.image)}
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 650px"
            />
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
