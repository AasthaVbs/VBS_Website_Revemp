import React from "react";
import { PageContainer } from "@/components/layout/page-container";
import {
  cadDraftingLandingToolLogos,
  cadDraftingLandingToolsSection,
} from "@/constants/cad-drafting-landing-content";
/** Tools We Use — same layout pattern as OurClientsSection (trusted by marquee). */
export function CadDraftingToolsSection({
  section = cadDraftingLandingToolsSection,
  logos = cadDraftingLandingToolLogos,
}) {
  const marqueeLogos = [...logos, ...logos];

  return (
    <section id="tools" className="cad-landing-tools vbs-our-clients relative overflow-hidden bg-white py-12 md:py-16 lg:py-[100px]">
      <PageContainer className="cad-landing-tools__container vbs-our-clients__container">
        <div className="cad-landing-tools__head vbs-our-clients__head">
          <div className="cad-landing-tools__head-top vbs-our-clients__head-top">
            <span className="cad-landing-tools__tag vbs-our-clients__tag">{section.tag}</span>
            <h2 className="cad-landing-tools__title vbs-our-clients__title">
              <span className="cad-landing-tools__title-dark vbs-our-clients__title-dark">
                {section.titleLead}
              </span>
              <span className="cad-landing-tools__title-accent vbs-our-clients__title-accent">
                {section.titleAccent}
              </span>
              <span className="cad-landing-tools__title-dark vbs-our-clients__title-dark">
                {section.titleTrail}
              </span>
            </h2>
          </div>
          <p className="cad-landing-tools__desc vbs-our-clients__desc">{section.description}</p>
        </div>

        <div className="cad-landing-tools__marquee-wrap vbs-our-clients__marquee-wrap">
          <div className="cad-landing-tools__marquee vbs-our-clients__marquee cad-landing-tools__marquee--tools">
            {marqueeLogos.map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="cad-landing-tools__tile"
                aria-hidden={index >= logos.length ? true : undefined}
              >
                <img
                  src={logo.src}
                  alt=""
                  className="cad-landing-tools__logo"
                  loading="lazy"
                  decoding="async"
                />
                <span className="cad-landing-tools__tile-name">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
