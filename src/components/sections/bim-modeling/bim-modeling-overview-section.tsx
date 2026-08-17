import Image, { type StaticImageData } from "next/image";

import { PageContainer } from "@/components/layout/page-container";
import { MepSectionTag } from "@/components/sections/mep/mep-section-tag";
import { bimModelingIntro } from "@/constants/bim-modeling-services-content";
import { altFromImageSrc, cn } from "@/lib/utils";

type BimModelingIntroContent = {
  tag: string;
  titleLead: string;
  titleAccent: string;
  /** Stack title lines (default) vs inline lead + accent. */
  titleStacked?: boolean;
  titleMaxWidth?: number;
  descriptionMaxWidth?: number;
  description: string;
  sideDescription: string;
  featuresTitle: string;
  featuresTitleClassName?: string;
  features: readonly string[];
  mainImage: string | StaticImageData;
  imageAlt?: string;
};

/** Overview — Figma VBS-Website Architecture & Structure service pages */
export function BimModelingOverviewSection({
  intro = bimModelingIntro,
}: {
  intro?: BimModelingIntroContent;
} = {}) {
  const {
    tag,
    titleLead,
    titleAccent,
    titleStacked = true,
    titleMaxWidth = 750,
    description,
    descriptionMaxWidth = 874,
    sideDescription,
    featuresTitle,
    featuresTitleClassName,
    features,
    mainImage,
    imageAlt,
  } = intro;
  const titlePartClass = titleStacked ? "block" : "inline";

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-[100px]">
      <PageContainer className="flex flex-col items-center gap-10 lg:gap-[60px]">
        <div className="flex w-full flex-col items-start gap-5">
          <div
            className="flex w-full flex-col items-start gap-3"
            style={{ maxWidth: `${titleMaxWidth}px` }}
          >
            <MepSectionTag label={tag} />
            <h2 className="w-full">
              <span className={`text-section font-medium text-[#111111] ${titlePartClass}`}>
                {titleLead}
              </span>
              <span className={`text-section font-light text-accent ${titlePartClass}`}>
                {titleAccent}
              </span>
            </h2>
          </div>
          <p
            className="w-full text-[16px] font-normal leading-6 text-[#808080]"
            style={{ maxWidth: `${descriptionMaxWidth}px` }}
          >
            {description}
          </p>
        </div>

        <div className="flex w-full flex-col items-stretch gap-8 lg:flex-row lg:items-stretch lg:gap-10">
          <div className="relative min-h-[320px] w-full overflow-hidden rounded-[10px] bg-[#F4F4F4] shadow-[0_0_16.8px_rgba(0,0,0,0.15)] lg:min-h-[670px] lg:flex-1">
            <Image
              src={mainImage}
              alt={imageAlt ?? altFromImageSrc(mainImage)}
              fill
              unoptimized={typeof mainImage === "string"}
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="flex w-full flex-col justify-between gap-8 lg:flex-1">
            <p className="text-[16px] font-normal leading-6 text-[#808080]">{sideDescription}</p>

            <div className="flex w-full flex-col items-start gap-6 rounded-[10px] bg-white p-5 shadow-[0_0_20px_rgba(0,0,0,0.20)]">
              <h3
                className={cn(
                  "text-[22px] font-normal leading-[1.35] text-[#111111] sm:text-[24px]",
                  featuresTitleClassName,
                )}
              >
                {featuresTitle}
              </h3>
              <ul className="flex w-full flex-col items-start gap-4">
                {features.map((feature) => (
                  <li key={feature} className="flex w-full items-start gap-2.5">
                    <span
                      className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-[4px] bg-[#D70416] text-white"
                      aria-hidden
                    >
                      <svg width="10" height="7" viewBox="0 0 10 7" fill="none">
                        <path
                          d="M1 3.5L3.5 6L9 1"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="flex-1 text-[16px] font-normal leading-6 text-[#808080]">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
