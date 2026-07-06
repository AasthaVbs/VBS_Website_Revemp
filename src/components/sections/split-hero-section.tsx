import Image from "next/image";
import Link from "next/link";

import { PageContainer } from "@/components/layout/page-container";
import { SectionTag } from "@/components/sections/section-primitives";
import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";
import { cn } from "@/lib/utils";

export type SplitHeroImages = {
  main: string;
  overlay: string;
};

export type SplitHeroSectionProps = {
  tag: string;
  titleLead: string;
  titleAccent: string;
  description: string;
  images: SplitHeroImages;
  mainImageAlt: string;
  overlayImageAlt: string;
  showCta?: boolean;
  ctaLabel?: string;
  /** When set, CTA renders as a link (e.g. in-page anchor on Careers) */
  ctaHref?: string;
};

/** Figma split hero — text column + dual image (About / Contact) */
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
}: SplitHeroSectionProps) {
  const resolvedCtaHref =
    ctaHref ?? (ctaLabel.trim().toLowerCase() === "contact us" ? "/contact" : undefined);

  const ctaClassName = cn(
    "primary-cta no-underline relative inline-flex h-[52px] w-auto shrink-0 items-center justify-center overflow-hidden rounded-[10px] border-[1.5px] border-[#D70416] bg-white/10 px-5 py-0 text-[16px] font-medium capitalize leading-none text-[#D70416] shadow-none backdrop-blur-[100px] transition-colors",
  );
  return (
    <section className="overflow-hidden bg-white py-12 md:py-16 lg:py-[150px]">
      <PageContainer>
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-2.5">
          <div className="flex w-full min-w-0 flex-1 flex-col items-start gap-[30px]">
            <div className="flex flex-col items-start gap-5">
              <div className="flex flex-col items-start gap-3">
                <SectionTag label={tag} />
                <h1 className="text-section w-full max-w-[497px] capitalize max-lg:max-w-none">
                  {titleLead}
                  <span className="text-accent font-light">{titleAccent}</span>
                </h1>
              </div>
              <p className="w-full max-w-[497px] text-[16px] font-normal capitalize leading-6 text-[#808080] max-lg:max-w-none">
                {description}
              </p>
            </div>
            {showCta && resolvedCtaHref ? (
              <Link href={resolvedCtaHref} className={ctaClassName}>
                <span className="primary-cta-blobs" aria-hidden>
                  <span className="primary-cta-blob primary-cta-blob--yellow" />
                  <span className="primary-cta-blob primary-cta-blob--blue" />
                  <span className="primary-cta-blob primary-cta-blob--green" />
                  <span className="primary-cta-blob primary-cta-blob--red" />
                </span>
                <span className="primary-cta-label relative z-10">{ctaLabel}</span>
              </Link>
            ) : showCta ? (
              <PrimaryCtaButton fullWidth={false}>{ctaLabel}</PrimaryCtaButton>
            ) : null}
          </div>

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
                  alt={overlayImageAlt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 40vw, 286px"
                />
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
