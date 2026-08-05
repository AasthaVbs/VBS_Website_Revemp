import React from "react";
import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";
import { MepSectionTag } from "@/components/sections/mep/mep-section-tag";
import { cadDraftingLandingHero } from "@/constants/cad-drafting-landing-content";

/** CAD drafting landing hero — Figma node 40-16725. */
export function CadDraftingLandingHeroSection({
  tag = cadDraftingLandingHero.tag,
  titleAccent = cadDraftingLandingHero.titleAccent,
  titleLead = cadDraftingLandingHero.titleLead,
  description = cadDraftingLandingHero.description,
  trustLine,
  ctaLabel = cadDraftingLandingHero.ctaLabel,
  ctaHref = cadDraftingLandingHero.ctaHref,
  imageSrc = cadDraftingLandingHero.imageSrc,
}: {
  tag?: string;
  titleAccent?: string;
  titleLead?: string;
  description?: string;
  trustLine?: string;
  ctaLabel?: string;
  ctaHref?: string;
  imageSrc?: string;
}) {
  return (
    <section className="cad-landing-hero mep-page-hero relative w-full bg-white">
      <div className="mep-page-hero__grid">
        <div className="mep-page-hero__copy">
          <div className="mep-page-hero__copy-inner flex w-full min-w-0 flex-col items-start gap-5">
            <div className="mep-page-hero__head flex w-full flex-col items-start gap-3">
              <MepSectionTag label={tag} />
              <h1 className="mep-page-hero__title w-full capitalize text-[#111111]">
                <span className="mep-page-hero__title-text">
                  <span className="mep-page-hero__title-accent font-light text-[#D70416]">{titleAccent}</span>
                  <span className="mep-page-hero__title-lead font-medium text-[#111111]">{titleLead}</span>
                </span>
              </h1>
            </div>
            <p className="mep-page-hero__desc w-full max-w-[533px] capitalize text-[#808080]">
              {description}
            </p>
            {trustLine ? (
              <p className="cad-landing-hero__trust-line m-0 w-full max-w-[533px] font-medium capitalize text-[#111111]">
                {trustLine}
              </p>
            ) : null}
          </div>
        </div>

        <div className="mep-page-hero__media" aria-hidden>
          <img
            src={imageSrc}
            alt=""
            className="mep-page-hero__photo"
            decoding="async"
          />
        </div>

        <div className="mep-page-hero__cta">
          <PrimaryCtaButton fullWidth className="w-full self-stretch sm:w-auto sm:self-start" href={ctaHref}>
            {ctaLabel}
          </PrimaryCtaButton>
        </div>
      </div>
    </section>
  );
}
