import type { ReactNode } from "react";
import Image from "next/image";

import { PageContainer } from "@/components/layout/page-container";
import { SectionIntro } from "@/components/sections/section-primitives";
import { certificationLogos, certificationSectionCopy } from "@/constants/home-content";
import { cn } from "@/lib/utils";

export type CertificationAwardsSectionProps = {
  /** Section intro tag */
  tag?: string;
  /** Heading — pass accent span inside for red portion */
  title?: ReactNode;
  description?: string;
  className?: string;
};

/**
 * Certification / awards logo marquee — reusable on home, about, and other pages.
 * Figma certification block with scrolling partner logos.
 */
const defaultTitle = (
  <>
    {certificationSectionCopy.titleLead}
    <span className="text-accent">{certificationSectionCopy.titleAccent}</span>
  </>
);

export function CertificationAwardsSection({
  tag = certificationSectionCopy.tag,
  title = defaultTitle,
  description = certificationSectionCopy.description,
  className,
}: CertificationAwardsSectionProps) {
  return (
    <section className={cn("bg-white py-12 lg:py-[100px]", className)}>
      <PageContainer className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-11">
        <div className="flex w-full shrink-0 flex-col items-start gap-5 lg:w-[528px]">
          <SectionIntro
            tag={tag}
            title={title}
            description={description}
            titleClassName="text-section max-w-[528px]"
            className="gap-2.5 lg:gap-5"
          />
        </div>

        <div className="relative w-full min-w-0 flex-1 overflow-hidden lg:max-w-[912px]">
          <div className="certification-marquee-track">
            {[0, 1].map((setIndex) => (
              <div
                key={setIndex}
                className="certification-marquee-set"
                aria-hidden={setIndex === 1}
              >
                {certificationLogos.map((logo) => (
                  <article
                    key={`${logo.src}-${setIndex}`}
                    className="certification-logo-card flex h-[200px] w-[200px] shrink-0 items-center justify-center rounded-[10px] bg-white p-4"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={160}
                      height={160}
                      className="h-full w-full object-contain"
                      draggable={false}
                    />
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

/** @deprecated Use `CertificationAwardsSection` — kept for existing imports */
export const CertificationSection = CertificationAwardsSection;
