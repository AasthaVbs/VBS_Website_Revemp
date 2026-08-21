import Image, { type StaticImageData } from "next/image";

import { PageContainer } from "@/components/layout/page-container";
import { MepSectionTag } from "@/components/sections/mep/mep-section-tag";
import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";
import { altFromImageSrc, shouldUnoptimizeImage } from "@/lib/utils";

export type LocationServiceOverviewContent = {
  tag: string;
  titleLines: readonly { text: string; accent?: boolean }[];
  description: string;
  ctaLabel: string;
  ctaHref: string;
  image: string | StaticImageData;
  imageAlt?: string;
  descriptionMaxWidth?: number;
};

export function LocationServiceOverviewSection({
  section,
}: {
  section: LocationServiceOverviewContent;
}) {
  const { tag, titleLines, description, ctaLabel, ctaHref, image, imageAlt, descriptionMaxWidth = 702 } =
    section;

  return (
    <section className="location-service-overview bg-white py-12 sm:py-16 lg:py-[100px]">
      <PageContainer className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-[60px]">
        <div className="relative order-2 aspect-[553/472] w-full shrink-0 overflow-hidden rounded-[10px] bg-[#F4F4F4] lg:order-none lg:w-[553px] lg:max-w-[42%]">
          <Image
            src={image}
            alt={imageAlt ?? altFromImageSrc(image)}
            fill
            unoptimized={shouldUnoptimizeImage(image)}
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 553px"
          />
        </div>

        <div className="order-1 flex min-w-0 flex-1 flex-col items-start gap-5 lg:order-none">
          <div className="flex w-full flex-col items-start gap-3">
            <MepSectionTag label={tag} />
            <h2 className="m-0 w-full text-[32px] leading-[1.15] sm:text-[40px] min-[1440px]:text-[48px]">
              {titleLines.map((line) => (
                <span
                  key={line.text}
                  className={
                    line.accent
                      ? "block font-light text-[#D70416]"
                      : "block font-medium text-[#111111]"
                  }
                >
                  {line.text}
                </span>
              ))}
            </h2>
          </div>
          <p
            className="m-0 w-full text-[16px] font-normal leading-6 text-[#808080]"
            style={{ maxWidth: descriptionMaxWidth }}
          >
            {description}
          </p>
          <PrimaryCtaButton fullWidth={false} href={ctaHref} className="capitalize">
            {ctaLabel}
          </PrimaryCtaButton>
        </div>
      </PageContainer>
    </section>
  );
}
