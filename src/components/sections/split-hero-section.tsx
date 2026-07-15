import Image from "next/image";
import Link from "next/link";

import { PageContainer } from "@/components/layout/page-container";
import { SectionTag } from "@/components/sections/section-primitives";
import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";
import { cn } from "@/lib/utils";

export type SplitHeroImages = {
  main: string;
  overlay?: string;
};

export type SplitHeroSectionProps = {
  tag: string;
  titleLead: string;
  titleAccent: string;
  description: string;
  images: SplitHeroImages;
  mainImageAlt: string;
  overlayImageAlt?: string;
  showCta?: boolean;
  ctaLabel?: string;
  ctaHref?: string;
  accentOnNewLine?: boolean;
  sectionClassName?: string;
  descriptionClassName?: string;
  rowClassName?: string;
};

function SplitHeroDualMedia({
  images,
  mainImageAlt,
  overlayImageAlt,
}: {
  images: SplitHeroImages & { overlay: string };
  mainImageAlt: string;
  overlayImageAlt?: string;
}) {
  return (
    <div className="relative mx-auto aspect-[717/534] w-full max-w-[717px] shrink-0 lg:mx-0">
      <div className="absolute left-[21.34%] top-0 h-full w-[78.66%] overflow-hidden rounded-[10px]">
        <div className="absolute left-[-37.06%] top-[-2.25%] h-[103.56%] w-[174.82%]">
          <Image
            src={images.main}
            alt={mainImageAlt}
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
            src={images.overlay}
            alt={overlayImageAlt || mainImageAlt}
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 40vw, 286px"
          />
        </div>
      </div>
    </div>
  );
}

/** Figma split hero — text column + single or dual image */
export function SplitHeroSection({
  tag,
  titleLead,
  titleAccent,
  description,
  images,
  mainImageAlt,
  overlayImageAlt,
  showCta = false,
  ctaLabel = "Contact Us",
  ctaHref,
  accentOnNewLine = false,
  sectionClassName = "py-12 md:py-16 lg:py-[150px]",
  descriptionClassName = "w-full max-w-[497px] text-[16px] font-normal leading-6 text-[#808080] max-lg:max-w-none",
  rowClassName,
}: SplitHeroSectionProps) {
  const resolvedCtaHref =
    ctaHref ?? (ctaLabel.trim().toLowerCase() === "contact us" ? "/contact-us" : undefined);

  const ctaClassName = cn(
    "primary-cta no-underline relative inline-flex h-[52px] w-auto shrink-0 items-center justify-center overflow-hidden rounded-[10px] border-[1.5px] border-[#D70416] bg-white/10 px-5 py-0 text-[16px] font-medium capitalize leading-none text-[#D70416] shadow-none backdrop-blur-[100px] transition-colors",
  );

  const hasDualMedia = Boolean(images.overlay);

  return (
    <section className={cn("overflow-hidden bg-white", sectionClassName)}>
      <PageContainer>
        <div
          className={cn(
            "vbs-split-hero__row--balanced flex flex-col items-center gap-10 lg:flex-row lg:items-center",
            rowClassName,
          )}
        >
          <div className="vbs-split-hero__copy flex w-full min-w-0 flex-1 flex-col items-start gap-[30px]">
            <div className="flex flex-col items-start gap-3">
              <div className="flex flex-col items-start gap-3">
                <SectionTag label={tag} />
                <h1 className="text-section w-full max-w-full lg:max-w-[597px]">
                  {titleLead}
                  {accentOnNewLine ? (
                    <>
                      <br />
                      <span className="text-accent block font-light">{titleAccent}</span>
                    </>
                  ) : (
                    <span className="text-accent font-light">{titleAccent}</span>
                  )}
                </h1>
              </div>
              <p className={descriptionClassName}>{description}</p>
            </div>
            {showCta ? (
              <div className="vbs-split-hero__cta-wrap">
                {resolvedCtaHref ? (
                  <Link href={resolvedCtaHref} className={ctaClassName}>
                    <span className="primary-cta-blobs" aria-hidden>
                      <span className="primary-cta-blob primary-cta-blob--yellow" />
                      <span className="primary-cta-blob primary-cta-blob--blue" />
                      <span className="primary-cta-blob primary-cta-blob--green" />
                      <span className="primary-cta-blob primary-cta-blob--red" />
                    </span>
                    <span className="primary-cta-label relative z-10">{ctaLabel}</span>
                  </Link>
                ) : (
                  <PrimaryCtaButton fullWidth={false}>{ctaLabel}</PrimaryCtaButton>
                )}
              </div>
            ) : null}
          </div>

          {hasDualMedia ? (
            <SplitHeroDualMedia
              images={images as SplitHeroImages & { overlay: string }}
              mainImageAlt={mainImageAlt}
              overlayImageAlt={overlayImageAlt}
            />
          ) : (
            <div className="vbs-split-hero__media--single mx-auto w-full lg:mx-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={images.main} alt={mainImageAlt} />
            </div>
          )}
        </div>
      </PageContainer>
    </section>
  );
}
