import Image from "next/image";
import type { StaticImageData } from "next/image";

import { PageContainer } from "@/components/layout/page-container";
import { SectionTag } from "@/components/sections/section-primitives";
import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";
import { ROUTES } from "@/constants/navigation";
import { cn, shouldUnoptimizeImage } from "@/lib/utils";

import "@/styles/vbs-listing-hero-spacing.scss";

type ListingHeroProps = {
  tag: string;
  titleLead: string;
  titleAccent: string;
  description: string;
  ctaLabel: string;
  ctaHref?: string;
  image: StaticImageData | string;
  imageAlt: string;
  titleMaxWidthClass?: string;
  descriptionMaxWidthClass?: string;
  sectionClassName?: string;
  ctaClassName?: string;
};

/**
 * Shared listing-page hero (Portfolio / Blogs / Webinar / Whitepapers / Resources).
 * Mobile: centered. Desktop (lg+): left-aligned via scoped CSS (beats utility conflicts).
 */
export function ListingPageHeroSection({
  tag,
  titleLead,
  titleAccent,
  description,
  ctaLabel,
  ctaHref = ROUTES.contact,
  image,
  imageAlt,
  titleMaxWidthClass = "max-w-[597px]",
  descriptionMaxWidthClass = "max-w-[583px]",
  sectionClassName,
  ctaClassName,
}: ListingHeroProps) {
  return (
    <section
      className={cn(
        "vbs-listing-hero overflow-hidden bg-white pt-6 pb-8 lg:pt-[72px] lg:pb-12",
        sectionClassName,
      )}
    >
      <PageContainer>
        <div className="vbs-listing-hero__row flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-8 xl:gap-12">
          <div className="vbs-listing-hero__copy flex w-full min-w-0 flex-1 flex-col gap-5 lg:gap-6">
            <div className="vbs-listing-hero__text flex w-full flex-col gap-3 lg:gap-4">
              <div className="vbs-listing-hero__heading flex w-full flex-col gap-2 lg:gap-3">
                <SectionTag label={tag} className="vbs-listing-hero__tag" />
                <h1
                  className={cn(
                    "vbs-listing-hero__title text-section w-full max-lg:max-w-none",
                    titleMaxWidthClass,
                  )}
                >
                  <span className="font-medium text-[#111111]">{titleLead}</span>
                  <span className="font-light text-[#D70416]">{titleAccent}</span>
                </h1>
              </div>
              <p
                className={cn(
                  "vbs-listing-hero__description w-full text-[16px] font-normal leading-6 text-[#808080] max-lg:max-w-none",
                  descriptionMaxWidthClass,
                )}
              >
                {description}
              </p>
            </div>
            <PrimaryCtaButton
              fullWidth={false}
              href={ctaHref}
              className={cn(
                "vbs-listing-hero__cta shrink-0 px-4 py-2 capitalize",
                ctaClassName,
              )}
            >
              {ctaLabel}
            </PrimaryCtaButton>
          </div>

          <div className="vbs-listing-hero__media relative aspect-[589/480] w-full max-w-[589px] shrink-0 overflow-hidden rounded-[9px] bg-white">
            <Image
              src={image}
              alt={imageAlt}
              fill
              unoptimized={shouldUnoptimizeImage(image)}
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 589px"
              priority
            />
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
