import Image from "next/image";

import { PageContainer } from "@/components/layout/page-container";
import { SectionTag } from "@/components/sections/section-primitives";
import { lifeAtVbsHeroCopy } from "@/constants/life-at-vbs-content";

export function LifeAtVbsHeroSection() {
  const { tag, titleLead, titleAccent, description, image, imageAlt } = lifeAtVbsHeroCopy;

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
          </div>

          <div className="vbs-life-at-vbs-hero__media relative">
            <Image
              src={image}
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
