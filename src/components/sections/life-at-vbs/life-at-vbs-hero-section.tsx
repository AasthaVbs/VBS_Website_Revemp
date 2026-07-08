import Image from "next/image";
import Link from "next/link";

import lifeAtVbsBanner from "@/assets/images/life-at-vbs-banner.jpg";
import { PageContainer } from "@/components/layout/page-container";
import { SectionTag } from "@/components/sections/section-primitives";
import { lifeAtVbsHeroCopy } from "@/constants/life-at-vbs-content";

export function LifeAtVbsHeroSection() {
  const { tag, titleLead, titleAccent, description, ctaLabel, ctaHref, imageAlt } = lifeAtVbsHeroCopy;

  return (
    <section className="vbs-life-at-vbs-hero overflow-hidden bg-white">
      <PageContainer>
        <div className="vbs-life-at-vbs-hero__row">
          <div className="vbs-life-at-vbs-hero__copy">
            <div className="vbs-life-at-vbs-hero__intro">
              <div className="vbs-life-at-vbs-hero__title-block">
                <SectionTag label={tag} />
                <h1 className="vbs-life-at-vbs-hero__title">
                  <span className="vbs-life-at-vbs-hero__title-text">
                    <span className="vbs-life-at-vbs-hero__title-lead">{titleLead}</span>
                    <span className="vbs-life-at-vbs-hero__title-accent">{titleAccent}</span>
                  </span>
                </h1>
              </div>
              <p className="vbs-life-at-vbs-hero__desc">{description}</p>
            </div>

            <Link
              href={ctaHref}
              className="primary-cta relative inline-flex h-[52px] w-auto shrink-0 items-center justify-center overflow-hidden rounded-[10px] border-[1.5px] border-[#D70416] bg-white/10 px-5 py-0 text-[16px] font-medium capitalize leading-none text-[#D70416] no-underline shadow-none backdrop-blur-[100px] transition-colors"
            >
              <span className="primary-cta-blobs" aria-hidden>
                <span className="primary-cta-blob primary-cta-blob--yellow" />
                <span className="primary-cta-blob primary-cta-blob--blue" />
                <span className="primary-cta-blob primary-cta-blob--green" />
                <span className="primary-cta-blob primary-cta-blob--red" />
              </span>
              <span className="primary-cta-label relative z-10">{ctaLabel}</span>
            </Link>
          </div>

          <div className="vbs-life-at-vbs-hero__media relative">
            <Image
              src={lifeAtVbsBanner}
              alt={imageAlt}
              fill
              className="object-cover object-center"
              sizes="588px"
              priority
            />
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
