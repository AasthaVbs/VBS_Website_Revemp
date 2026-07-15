import Image from "next/image";

import type { StaticImageData } from "next/image";

import { PageContainer } from "@/components/layout/page-container";
import { MepSectionTag } from "@/components/sections/mep/mep-section-tag";
import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";
import { altFromImageSrc, cn } from "@/lib/utils";

export type MepPageHeroContent = {
  tag: string;
  titleLead: string;
  titleAccent: string;
  description: string;
  ctaLabel: string;
  imageSrc: string | StaticImageData;
  imageAlt?: string;
  imageSize?: "default" | "compact";
  ctaHref?: string;
  copyMaxWidth?: number;
  descriptionMaxWidth?: number;
  className?: string;
  containerClassName?: string;
};

const HERO_IMAGE_WIDTH = 1082;
const HERO_IMAGE_HEIGHT = 753;

/** Fade between copy and image — Figma 217:242 */
function HeroImageFadeLeft() {
  return (
    <div
      className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-[min(45%,240px)] bg-[linear-gradient(90deg,#ffffff_56%,rgba(255,255,255,0)_100%)]"
      aria-hidden
    />
  );
}

/** Viewport right-edge fade — Figma 217:242 */
function HeroFadeRightEdge() {
  return (
    <div
      className="mep-page-hero__fade-right pointer-events-none absolute right-0 top-0 z-[2] h-full w-[120px] bg-[linear-gradient(270deg,#ffffff_56%,rgba(255,255,255,0)_100%)] xl:w-[240px]"
      aria-hidden
    />
  );
}

/** Shared MEP-style hero — Figma 217:242 / prototype 217:181 */
export function MepPageHeroSection({
  tag,
  titleLead,
  titleAccent,
  description,
  ctaLabel,
  imageSrc,
  imageAlt,
  imageSize = "default",
  ctaHref = "#services",
  copyMaxWidth = 779,
  descriptionMaxWidth = 736,
  className,
  containerClassName,
}: MepPageHeroContent) {
  const isCompact = imageSize === "compact";
  const resolvedImageAlt = imageAlt ?? altFromImageSrc(imageSrc);

  if (isCompact) {
    return (
      <section className={cn("relative w-full overflow-hidden bg-white", className)}>
        <PageContainer
          className={cn("relative py-10 pt-2 sm:py-12 sm:pt-4 lg:py-14", containerClassName)}
        >
          <div className="flex flex-col items-stretch gap-8 lg:flex-row lg:items-center lg:gap-6 xl:gap-10">
            {/* Copy — vertically centered beside image on desktop */}
            <div
              className="flex w-full min-w-0 shrink flex-col justify-center gap-6 sm:gap-[30px] lg:flex-[0_1_auto]"
              style={{ maxWidth: copyMaxWidth }}
            >
              <div className="flex w-full max-w-full flex-col items-start gap-4 sm:gap-5">
                <div className="flex w-full max-w-full flex-col items-start gap-3">
                  <MepSectionTag label={tag} />
                  <h1
                    className="w-full max-w-full text-[#111111]"
                    style={{ maxWidth: copyMaxWidth }}
                  >
                    {titleLead.split("\n").map((line, index, lines) => (
                      <span
                        key={`${line}-${index}`}
                        className="block text-[32px] font-medium leading-[1.15] sm:text-[40px] lg:text-[48px]"
                      >
                        {line}
                        {index === lines.length - 1 ? (
                          <span className="font-light text-[#D70416]">{titleAccent}</span>
                        ) : null}
                      </span>
                    ))}
                  </h1>
                </div>
                <p
                  className="w-full max-w-full text-[15px] font-normal leading-6 text-[#808080] sm:text-[16px]"
                  style={{ maxWidth: descriptionMaxWidth }}
                >
                  {description}
                </p>
              </div>

              <PrimaryCtaButton
                fullWidth={false}
                href={ctaHref}
                className="h-auto min-h-[52px] self-start px-5 py-4 capitalize backdrop-blur-[50px]"
              >
                {ctaLabel}
              </PrimaryCtaButton>
            </div>

            {/* Image — natural size in column */}
            <div className="relative min-w-0 flex-1 lg:flex lg:items-center lg:justify-end">
              <div className="relative ml-auto w-full max-w-[650px] overflow-hidden rounded-[10px] bg-white shadow-[0_0_16.8px_rgba(0,0,0,0.15)]">
                <Image
                  src={imageSrc}
                  alt={resolvedImageAlt}
                  width={650}
                  height={530}
                  priority
                  sizes="(max-width: 1024px) 100vw, 650px"
                  className="block h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>
        </PageContainer>
      </section>
    );
  }

  return (
    <section className="mep-page-hero mep-page-hero--overlay relative flex w-full flex-col overflow-visible bg-white lg:block">
      {/* Desktop overlay image */}
      <div
        className="mep-page-hero__media pointer-events-none absolute z-0 hidden aspect-[1024/607] max-w-[1080px] lg:right-0 lg:top-0 lg:block lg:w-[min(56%,1080px)]"
        aria-hidden
      >
        <Image
          src={imageSrc}
          alt={resolvedImageAlt}
          fill
          priority
          sizes="56vw"
          className="object-contain object-right object-center"
        />
        <HeroImageFadeLeft />
      </div>

      <div className="hidden lg:block">
        <HeroFadeRightEdge />
      </div>

      <PageContainer className="mep-page-hero__copy-wrap relative z-10 flex min-h-0 flex-col justify-start py-8 pt-6 max-lg:min-h-0 sm:py-10 sm:pt-8 lg:min-h-0 lg:pt-[80px] lg:pb-6">
        <div
          className="mx-auto flex w-full flex-col items-center gap-5 text-center lg:mx-0 lg:items-start lg:gap-[30px] lg:text-left"
          style={{ maxWidth: copyMaxWidth }}
        >
          <div className="flex w-full flex-col items-center gap-4 self-stretch sm:gap-5 lg:items-start">
            <div className="flex flex-col items-center gap-3 lg:items-start">
              <MepSectionTag label={tag} className="max-lg:!self-center" />
              <h1
                className="w-full text-[#111111]"
                style={{ maxWidth: copyMaxWidth }}
              >
                <span className="text-[28px] font-medium leading-[1.15] sm:text-[36px] md:text-[40px] lg:text-[48px] xl:text-[60px]">
                  {titleLead}
                </span>
                <span className="text-[28px] font-light leading-[1.15] text-[#D70416] sm:text-[36px] md:text-[40px] lg:text-[48px] xl:text-[60px]">
                  {titleAccent}
                </span>
              </h1>
            </div>
            <p
              className="w-full text-[15px] font-normal leading-6 text-[#808080] sm:text-[16px]"
              style={{ maxWidth: descriptionMaxWidth }}
            >
              {description}
            </p>
          </div>

          {/* Mobile / tablet in-flow image — between description and CTA */}
          <div className="mep-page-hero__media-mobile relative w-full max-w-[560px] overflow-hidden rounded-[10px] bg-white shadow-[0_0_16.8px_rgba(0,0,0,0.12)] lg:hidden">
            <Image
              src={imageSrc}
              alt={resolvedImageAlt}
              width={HERO_IMAGE_WIDTH}
              height={HERO_IMAGE_HEIGHT}
              priority
              sizes="(max-width: 1024px) 100vw, 560px"
              className="block h-auto w-full object-cover"
            />
          </div>

          <PrimaryCtaButton
            fullWidth={false}
            href={ctaHref}
            className="h-auto min-h-[52px] self-center px-5 py-4 capitalize backdrop-blur-[50px] lg:self-start"
          >
            {ctaLabel}
          </PrimaryCtaButton>
        </div>
      </PageContainer>
    </section>
  );
}
