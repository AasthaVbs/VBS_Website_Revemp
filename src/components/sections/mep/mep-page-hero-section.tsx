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
  /** When true, accent (red/light) renders before lead (black/medium). */
  titleAccentFirst?: boolean;
  description: string;
  /** Optional multi-paragraph body; when set, replaces single description. */
  descriptions?: string[];
  ctaLabel: string;
  imageSrc: string | StaticImageData;
  imageAlt?: string;
  imageSize?: "default" | "compact";
  ctaHref?: string;
  /** Filled red primary CTA (white label), matching Figma Variant2. */
  ctaFilled?: boolean;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  copyMaxWidth?: number;
  descriptionMaxWidth?: number;
  /** Compact hero only: title width; defaults to copyMaxWidth. */
  titleMaxWidth?: number;
  className?: string;
  containerClassName?: string;
  /** Compact hero only: extra classes on the copy/image row (e.g. tighter gap). */
  rowClassName?: string;
  /** Compact hero only: extra classes on the copy column. */
  copyClassName?: string;
  /** Compact hero only: extra classes on the image frame. */
  imageFrameClassName?: string;
  /** Compact hero only: extra classes on the image. */
  imageClassName?: string;
  /** Compact hero only: put the red accent on its own line. */
  breakTitle?: boolean;
  /** Compact hero only: title + description, then image, then CTA on mobile. */
  mobileLayout?: "default" | "copy-image-cta";
  /** Compact hero only: keep `\n` in titleLead as a break on desktop, wrap naturally on mobile. */
  collapseTitleBreakOnMobile?: boolean;
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

function HeroTitleLead({ titleLead, titleAccent }: { titleLead: string; titleAccent: string }) {
  const lines = titleLead.split("\n");

  return (
    <>
      {lines.map((line, index) => (
        <span
          key={`${line}-${index}`}
          className="text-[28px] font-medium leading-[1.15] sm:text-[36px] md:text-[40px] lg:block lg:text-[48px] xl:text-[60px]"
        >
          {index > 0 ? <span className="lg:hidden"> </span> : null}
          {line}
          {index === lines.length - 1 ? (
            <span className="font-light text-[#D70416]">{titleAccent}</span>
          ) : null}
        </span>
      ))}
    </>
  );
}

function HeroDescriptions({
  description,
  descriptions,
  descriptionMaxWidth,
  className,
}: {
  description: string;
  descriptions?: string[];
  descriptionMaxWidth: number;
  className?: string;
}) {
  const paragraphs = descriptions?.length ? descriptions : [description];

  return (
    <div
      className={cn("flex w-full flex-col gap-4 sm:gap-5", className)}
      style={{ maxWidth: descriptionMaxWidth }}
    >
      {paragraphs.map((paragraph) => (
        <p
          key={paragraph.slice(0, 48)}
          className="m-0 w-full text-[15px] font-normal leading-6 text-[#808080] sm:text-[16px]"
        >
          {paragraph}
        </p>
      ))}
    </div>
  );
}

function HeroCtas({
  ctaLabel,
  ctaHref,
  ctaFilled,
  secondaryCtaLabel,
  secondaryCtaHref,
  align = "start",
  className,
}: {
  ctaLabel: string;
  ctaHref: string;
  ctaFilled?: boolean;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  align?: "start" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mep-page-hero__cta-row flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-start sm:gap-5",
        align === "center" ? "items-center self-center lg:items-start lg:self-start" : "items-start self-start",
        className,
      )}
    >
      <PrimaryCtaButton
        fullWidth={false}
        href={ctaHref}
        className={cn(
          "!h-[56px] !min-h-[56px] self-start !px-5 capitalize",
          ctaFilled && "mep-page-hero__cta--filled",
        )}
      >
        {ctaLabel}
      </PrimaryCtaButton>
      {secondaryCtaLabel && secondaryCtaHref ? (
        <PrimaryCtaButton
          fullWidth={false}
          href={secondaryCtaHref}
          className="!h-[56px] !min-h-[56px] self-start !px-5 capitalize"
        >
          {secondaryCtaLabel}
        </PrimaryCtaButton>
      ) : null}
    </div>
  );
}

/** Shared MEP-style hero — Figma 217:242 / prototype 217:181 */
export function MepPageHeroSection({
  tag,
  titleLead,
  titleAccent,
  titleAccentFirst = false,
  description,
  descriptions,
  ctaLabel,
  imageSrc,
  imageAlt,
  imageSize = "default",
  ctaHref = "#services",
  ctaFilled = false,
  secondaryCtaLabel,
  secondaryCtaHref,
  copyMaxWidth = 779,
  descriptionMaxWidth = 736,
  titleMaxWidth,
  className,
  containerClassName,
  rowClassName,
  copyClassName,
  imageFrameClassName,
  imageClassName,
  breakTitle = false,
  mobileLayout = "copy-image-cta",
  collapseTitleBreakOnMobile = true,
}: MepPageHeroContent) {
  const isCompact = imageSize === "compact";
  const copyImageCta = mobileLayout === "copy-image-cta";
  const resolvedImageAlt = imageAlt ?? altFromImageSrc(imageSrc);
  const keepOriginalFormat = typeof imageSrc === "string";

  if (isCompact) {
    return (
      <section className={cn("relative w-full overflow-hidden bg-white", className)}>
        <PageContainer
          className={cn("relative py-10 pt-2 sm:py-12 sm:pt-4 lg:py-14", containerClassName)}
        >
          <div
            className={cn(
              "flex flex-col items-stretch gap-8 lg:flex-row lg:items-center lg:gap-6 xl:gap-9",
              copyImageCta && "max-lg:items-center max-lg:gap-6",
              rowClassName,
            )}
          >
            <div
              className={cn(
                "flex w-full min-w-0 shrink flex-col justify-center gap-6 sm:gap-[30px] lg:flex-[0_1_auto]",
                copyImageCta && "max-lg:contents",
                copyClassName,
              )}
              style={{ maxWidth: copyMaxWidth }}
            >
              <div
                className={cn(
                  "flex w-full max-w-full flex-col items-start gap-4 sm:gap-5",
                  copyImageCta && "max-lg:order-1 max-lg:items-center max-lg:text-center",
                )}
              >
                <div
                  className={cn(
                    "flex w-full max-w-full flex-col items-start gap-3",
                    copyImageCta && "max-lg:items-center",
                  )}
                >
                  <MepSectionTag label={tag} className={copyImageCta ? "max-lg:!self-center" : undefined} />
                  <h1
                    className={cn(
                      "w-full max-w-full text-[#111111]",
                      copyImageCta && "max-lg:mx-auto",
                    )}
                    style={{ maxWidth: titleMaxWidth ?? copyMaxWidth }}
                  >
                    {titleAccentFirst ? (
                      <span className="text-[32px] leading-[1.15] sm:text-[40px] lg:text-[48px]">
                        <span className="font-light text-[#D70416]">{titleAccent}</span>
                        {titleLead.split("\n").map((line, index) =>
                          index === 0 ? (
                            <span key={`${line}-${index}`} className="font-medium text-[#111111]">
                              {line}
                            </span>
                          ) : (
                            <span
                              key={`${line}-${index}`}
                              className={cn(
                                "font-medium text-[#111111]",
                                collapseTitleBreakOnMobile ? "lg:block" : "block",
                              )}
                            >
                              {collapseTitleBreakOnMobile ? (
                                <span className="lg:hidden"> </span>
                              ) : null}
                              {line}
                            </span>
                          ),
                        )}
                      </span>
                    ) : breakTitle ? (
                      <>
                        <span className="block text-[32px] font-medium leading-[1.15] sm:text-[40px] lg:text-[48px]">
                          {titleLead.replace(/\n+$/, "")}
                        </span>
                        <span className="block text-[32px] font-light leading-[1.15] text-[#D70416] sm:text-[40px] lg:text-[48px]">
                          {titleAccent}
                        </span>
                      </>
                    ) : (
                      titleLead.split("\n").map((line, index, lines) => (
                        <span
                          key={`${line}-${index}`}
                          className={cn(
                            "text-[32px] font-medium leading-[1.15] sm:text-[40px] lg:text-[48px]",
                            collapseTitleBreakOnMobile ? "lg:block" : "block",
                          )}
                        >
                          {collapseTitleBreakOnMobile && index > 0 ? (
                            <span className="lg:hidden"> </span>
                          ) : null}
                          {line}
                          {index === lines.length - 1 ? (
                            <span className="font-light text-[#D70416]">{titleAccent}</span>
                          ) : null}
                        </span>
                      ))
                    )}
                  </h1>
                </div>
                <HeroDescriptions
                  description={description}
                  descriptions={descriptions}
                  descriptionMaxWidth={descriptionMaxWidth}
                  className={copyImageCta ? "max-lg:mx-auto max-lg:items-center max-lg:text-center" : undefined}
                />
              </div>

              <HeroCtas
                ctaLabel={ctaLabel}
                ctaHref={ctaHref}
                ctaFilled={ctaFilled}
                secondaryCtaLabel={secondaryCtaLabel}
                secondaryCtaHref={secondaryCtaHref}
                align={copyImageCta ? "center" : "start"}
                className={copyImageCta ? "max-lg:order-3" : undefined}
              />
            </div>

            <div
              className={cn(
                "relative min-w-0 flex-1 lg:flex lg:items-center lg:justify-end",
                copyImageCta && "max-lg:order-2 w-full",
              )}
            >
              <div
                className={cn(
                  "relative ml-auto w-full max-w-[650px] overflow-hidden rounded-[10px] bg-white shadow-[0_0_16.8px_rgba(0,0,0,0.15)] aspect-[981/720]",
                  copyImageCta && "max-lg:mx-auto",
                  imageFrameClassName,
                )}
              >
                <Image
                  src={imageSrc}
                  alt={resolvedImageAlt}
                  fill
                  priority
                  unoptimized={keepOriginalFormat}
                  sizes="(max-width: 1024px) 100vw, 650px"
                  className={cn("object-cover", imageClassName)}
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
      <div className="mep-page-hero__media absolute z-0 hidden aspect-[1024/607] max-w-[1080px] overflow-hidden lg:right-0 lg:top-0 lg:block lg:w-[min(56%,1080px)]">
        <Image
          src={imageSrc}
          alt={resolvedImageAlt}
          width={HERO_IMAGE_WIDTH}
          height={HERO_IMAGE_HEIGHT}
          priority
          unoptimized={keepOriginalFormat}
          sizes="(min-width: 1024px) 56vw, 100vw"
          className="mep-page-hero__photo h-full w-full object-contain object-right object-center"
        />
        <HeroImageFadeLeft />
      </div>

      <div className="hidden lg:block">
        <HeroFadeRightEdge />
      </div>

      <PageContainer className="mep-page-hero__copy-wrap relative z-10 flex min-h-0 flex-col justify-start py-8 pt-6 max-lg:min-h-0 sm:py-10 sm:pt-8 lg:min-h-0 lg:pt-[80px] lg:pb-6">
        <div
          className="mep-page-hero__copy-inner mx-auto flex w-full flex-col items-start gap-5 text-left max-md:items-center max-md:text-center md:mx-0 md:gap-[30px]"
          style={{ maxWidth: copyMaxWidth }}
        >
          <div className="flex w-full flex-col items-start gap-4 self-stretch max-md:items-center sm:gap-5">
            <div className="flex flex-col items-start gap-3 max-md:items-center">
              <MepSectionTag label={tag} className="max-md:!self-center" />
              <h1 className="w-full text-left text-[#111111] max-md:text-center" style={{ maxWidth: copyMaxWidth }}>
                <HeroTitleLead titleLead={titleLead} titleAccent={titleAccent} />
              </h1>
            </div>
            <HeroDescriptions
              description={description}
              descriptions={descriptions}
              descriptionMaxWidth={descriptionMaxWidth}
              className="items-start text-left max-md:items-center max-md:text-center"
            />
          </div>

          <div className="mep-page-hero__media-mobile relative w-full max-w-[560px] overflow-hidden rounded-[10px] bg-white shadow-[0_0_16.8px_rgba(0,0,0,0.12)] lg:hidden">
            <Image
              src={imageSrc}
              alt={resolvedImageAlt}
              width={HERO_IMAGE_WIDTH}
              height={HERO_IMAGE_HEIGHT}
              priority
              unoptimized={keepOriginalFormat}
              sizes="(max-width: 1024px) 100vw, 560px"
              className="block h-auto w-full object-cover"
            />
          </div>

          <HeroCtas
            ctaLabel={ctaLabel}
            ctaHref={ctaHref}
            ctaFilled={ctaFilled}
            secondaryCtaLabel={secondaryCtaLabel}
            secondaryCtaHref={secondaryCtaHref}
            align="start"
            className="max-md:items-center max-md:self-center"
          />
        </div>
      </PageContainer>
    </section>
  );
}
