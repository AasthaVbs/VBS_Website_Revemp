"use client";

import { ChevronRight } from "lucide-react";
import type { ComponentType, ReactNode } from "react";

import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/sections/site-footer";
import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";
import {
  WHITEPAPER_FORM_ANCHOR,
  WHITEPAPER_MEP_DC_PAGE_STYLES,
  WHITEPAPER_STYLES,
  WhitepaperForm,
} from "@/components/whitepaper/whitepaper-landing-shared";

export type WhitepaperInsightStat = {
  value: string;
  label: string;
};

export type WhitepaperWhoForItem = {
  title: string;
  Icon: ComponentType;
};

export type WhitepaperRelatedResource = {
  type: string;
  title: string;
  href: string;
  image: string;
};

export type WhitepaperLandingPageProps = {
  pageClassName?: string;
  heroTitle: ReactNode;
  heroSubheading: string;
  heroImage: string;
  heroImageAlt: string;
  ctaLabel: string;
  keyInsightsLabel?: string;
  keyInsightsTitle: string;
  insightStats: WhitepaperInsightStat[];
  whoForLabel?: string;
  whoForTitle: string;
  whoForItems: WhitepaperWhoForItem[];
  learnLabel?: string;
  learnTitle?: string;
  learnItems: string[];
  formTitle: string;
  formSub: string;
  downloadPdfUrl?: string;
  zohoIframeId: string;
  zohoIframeSrc: string;
  zohoIframeInitialHeightPx: number;
  zohoHeaderCropPreset: "mep-dc-wp" | "hidden-cost-wp";
  relatedTitle?: string;
  relatedResources: WhitepaperRelatedResource[];
};

export function WhitepaperLandingPage({
  pageClassName = "",
  heroTitle,
  heroSubheading,
  heroImage,
  heroImageAlt,
  ctaLabel,
  keyInsightsLabel = "Key Insights",
  keyInsightsTitle,
  insightStats,
  whoForLabel = "Who This Is For",
  whoForTitle,
  whoForItems,
  learnLabel = "Inside the Whitepaper",
  learnTitle = "What You Will Learn",
  learnItems,
  formTitle,
  formSub,
  downloadPdfUrl,
  zohoIframeId,
  zohoIframeSrc,
  zohoIframeInitialHeightPx,
  zohoHeaderCropPreset,
  relatedTitle = "Read More on MEP Coordination",
  relatedResources,
}: WhitepaperLandingPageProps) {
  return (
    <>
      <style>{WHITEPAPER_STYLES}</style>
      {pageClassName ? <style>{WHITEPAPER_MEP_DC_PAGE_STYLES}</style> : null}

      <div className={`wb-page whitepaper-detail-page${pageClassName ? ` ${pageClassName}` : ""}`}>
        <SiteHeader />

        <main id="top">
          <section className="wb-hero">
            <div className="wb-container">
              <div className="wb-hero-grid">
                <div className="wb-hero-copy">
                  <h1>{heroTitle}</h1>
                  <p className="lead text-secondary my-1">{heroSubheading}</p>

                  <div className="wb-hero-actions mt-3">
                    <PrimaryCtaButton
                      fullWidth={false}
                      href={`#${WHITEPAPER_FORM_ANCHOR}`}
                      className="wb-hero-cta shrink-0 capitalize"
                    >
                      {ctaLabel}
                      <ChevronRight className="h-2.5 w-2.5" strokeWidth={1.5} />
                    </PrimaryCtaButton>
                  </div>
                </div>
                <div className="wb-hero-media">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={heroImage} alt={heroImageAlt} />
                </div>
                <div className="wb-hero-actions wb-hero-actions-mobile mt-2">
                  <PrimaryCtaButton
                    fullWidth
                    href={`#${WHITEPAPER_FORM_ANCHOR}`}
                    className="wb-hero-cta capitalize"
                  >
                    {ctaLabel}
                    <ChevronRight className="h-2.5 w-2.5" strokeWidth={1.5} />
                  </PrimaryCtaButton>
                </div>
              </div>
            </div>
          </section>

          <section className="wb-content wb-key-insight-section my-8">
            <div className="wb-container">
              <p className="wb-section-label">{keyInsightsLabel}</p>
              <h2>{keyInsightsTitle}</h2>
              <div className="wb-key-grid mt-3">
                {insightStats.map((item) => (
                  <article className="wb-key-item" key={item.label}>
                    <div className="wb-key-value">{item.value}</div>
                    <h5>{item.label}</h5>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="wb-content wb-whofor-section mt-5">
            <div className="wb-container">
              <p className="wb-section-label">{whoForLabel}</p>
              <h2>{whoForTitle}</h2>
              <div className="wb-whofor-grid">
                {whoForItems.map((item) => (
                  <article className="wb-whofor-card" key={item.title}>
                    <item.Icon />
                    <h5 className="wb-whofor-title">{item.title}</h5>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="wb-content">
            <div className="wb-content-inner">
              <section className="wb-section wb-learn-panel">
                <p className="wb-section-label">{learnLabel}</p>
                <h2>{learnTitle}</h2>
                <div className="wb-learn-grid">
                  {learnItems.map((item) => (
                    <article className="wb-learn-item" key={item}>
                      <span className="wb-learn-icon" aria-hidden>
                        ✓
                      </span>
                      <p>{item}</p>
                    </article>
                  ))}
                </div>
              </section>

              <aside className="wb-sticky-col wb-form-panel">
                <WhitepaperForm
                  formTitle={formTitle}
                  formSub={formSub}
                  downloadPdfUrl={downloadPdfUrl}
                  zohoIframeId={zohoIframeId}
                  zohoIframeSrc={zohoIframeSrc}
                  zohoIframeInitialHeightPx={zohoIframeInitialHeightPx}
                  zohoHeaderCropPreset={zohoHeaderCropPreset}
                />
              </aside>
            </div>

            <section className="wb-section mt-8">
              <div className="wb-container pt-5">
                <p className="wb-section-label">Related Resources</p>
                <h2>{relatedTitle}</h2>
                <div className="wb-related-grid mb-2">
                  {relatedResources.map((item) => (
                    <a key={item.href} className="wb-related-card" href={item.href}>
                      <div className="wb-related-media">
                        <span className="wb-related-chip">{item.type}</span>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={item.image} alt={item.title} />
                      </div>
                      <div className="wb-related-body">
                        <h3>{item.title}</h3>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </section>
          </section>
        </main>

        <SiteFooter />
      </div>
    </>
  );
}
