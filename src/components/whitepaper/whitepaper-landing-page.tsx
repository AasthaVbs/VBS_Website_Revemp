"use client";

import { ChevronRight } from "lucide-react";
import { Fragment, type ReactNode } from "react";

import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/sections/site-footer";
import { MepSectionTag } from "@/components/sections/mep/mep-section-tag";
import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";
import { GradientVerticalDivider } from "@/components/ui/gradient-vertical-divider";
import {
  WHITEPAPER_FORM_ANCHOR,
  WHITEPAPER_MEP_DC_PAGE_STYLES,
  WHITEPAPER_STYLES,
  WhitepaperForm,
} from "@/components/whitepaper/whitepaper-landing-shared";

export type WhitepaperInsightStat = {
  value: string;
  label: string;
  color?: string;
  labelWidth?: number;
};

export type WhitepaperRelatedResource = {
  type: string;
  title: string;
  href: string;
  image: string;
  excerpt?: string;
  date?: string;
};

export type WhitepaperLandingPageProps = {
  pageClassName?: string;
  heroTag?: string;
  heroTitle: ReactNode;
  heroSubheading: string;
  heroImage: string;
  heroImageAlt: string;
  ctaLabel: string;
  keyInsightsLabel?: string;
  keyInsightsTitle: ReactNode;
  insightStats: WhitepaperInsightStat[];
  learnLabel?: string;
  learnTitle?: ReactNode;
  learnItems: string[];
  formTitle: string;
  formSub: string;
  downloadPdfUrl?: string;
  zohoIframeId: string;
  zohoIframeSrc: string;
  zohoIframeInitialHeightPx: number;
  zohoHeaderCropPreset: "mep-dc-wp" | "hidden-cost-wp";
  relatedLabel?: string;
  relatedTitle?: ReactNode;
  relatedDescription?: string;
  relatedResources: WhitepaperRelatedResource[];
};

const DEFAULT_INSIGHT_COLORS = ["#D70416", "#42AA32", "#2299D6", "#F0B300"];

function relatedChipClass(type: string) {
  const normalized = type.toLowerCase();
  if (normalized.includes("blog")) return "wb-related-chip--blog";
  if (normalized.includes("case")) return "wb-related-chip--case";
  if (normalized.includes("white")) return "wb-related-chip--whitepaper";
  return "wb-related-chip--default";
}

export function WhitepaperLandingPage({
  pageClassName = "",
  heroTag = "White Papers",
  heroTitle,
  heroSubheading,
  heroImage,
  heroImageAlt,
  ctaLabel,
  keyInsightsLabel = "Key Insights",
  keyInsightsTitle,
  insightStats,
  learnLabel = "Inside the Whitepaper",
  learnTitle = (
    <>
      What You <span>Will Learn</span>
    </>
  ),
  learnItems,
  formTitle,
  formSub,
  downloadPdfUrl,
  zohoIframeId,
  zohoIframeSrc,
  zohoIframeInitialHeightPx,
  zohoHeaderCropPreset,
  relatedLabel = "Resources",
  relatedTitle = (
    <>
      Related <span>Articles</span>
    </>
  ),
  relatedDescription = "Recent Insights and Research on AEC Industry",
  relatedResources,
}: WhitepaperLandingPageProps) {
  const whitepaperResources = relatedResources.filter((item) =>
    item.type.toLowerCase().includes("white"),
  );

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
                  <div className="wb-hero-copy-top">
                    <div className="wb-hero-title-block">
                      <MepSectionTag label={heroTag} />
                      <h1>{heroTitle}</h1>
                    </div>
                    <p className="lead">{heroSubheading}</p>
                  </div>

                  <div className="wb-hero-actions">
                    <PrimaryCtaButton
                      fullWidth={false}
                      href={`#${WHITEPAPER_FORM_ANCHOR}`}
                      className="wb-hero-cta shrink-0 capitalize backdrop-blur-[50px]"
                    >
                      {ctaLabel}
                    </PrimaryCtaButton>
                  </div>
                </div>

                <div className="wb-hero-media">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={heroImage} alt={heroImageAlt} />
                </div>

                <div className="wb-hero-actions wb-hero-actions-mobile">
                  <PrimaryCtaButton
                    fullWidth
                    href={`#${WHITEPAPER_FORM_ANCHOR}`}
                    className="wb-hero-cta capitalize backdrop-blur-[50px]"
                  >
                    {ctaLabel}
                  </PrimaryCtaButton>
                </div>
              </div>
            </div>
          </section>

          <section className="wb-content wb-key-insight-section">
            <div className="wb-container">
              <div className="wb-key-header">
                <MepSectionTag label={keyInsightsLabel} />
                <h2>{keyInsightsTitle}</h2>
              </div>
              <div className="wb-key-grid">
                {insightStats.map((item, index) => (
                  <Fragment key={item.label}>
                    {index > 0 ? (
                      <GradientVerticalDivider id={`wb-key-divider-${index}`} />
                    ) : null}
                    <article className="wb-key-item">
                      <div
                        className="wb-key-value"
                        style={{
                          color:
                            item.color ??
                            DEFAULT_INSIGHT_COLORS[index % DEFAULT_INSIGHT_COLORS.length],
                        }}
                      >
                        {item.value}
                      </div>
                      <h5
                        style={
                          item.labelWidth ? { maxWidth: item.labelWidth } : undefined
                        }
                      >
                        {item.label}
                      </h5>
                    </article>
                  </Fragment>
                ))}
              </div>
            </div>
          </section>

          <section className="wb-content wb-learn-form-section">
            <div className="wb-container">
              <div className="wb-content-inner">
                <section className="wb-section wb-learn-panel">
                  <div className="wb-learn-header">
                    <MepSectionTag label={learnLabel} />
                    <h2>{learnTitle}</h2>
                  </div>
                  <div className="wb-learn-grid">
                    {learnItems.map((item) => (
                      <article className="wb-learn-item" key={item}>
                        <span className="wb-learn-icon" aria-hidden>
                          <svg
                            width="10"
                            height="7"
                            viewBox="0 0 10 7"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 3.5L3.5 6L9 1"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
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
            </div>
          </section>

          {whitepaperResources.length > 0 ? (
            <section className="wb-content wb-related-section">
              <div className="wb-container">
                <div className="wb-related-header">
                  <div className="wb-related-title-block">
                    <MepSectionTag label={relatedLabel} />
                    <h2>{relatedTitle}</h2>
                  </div>
                  <p className="wb-related-desc">{relatedDescription}</p>
                </div>

                <div className="wb-related-cards">
                  {whitepaperResources.map((item) => (
                    <a key={item.href} className="wb-related-card" href={item.href}>
                      <div className="wb-related-card-media">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={item.image} alt={item.title} />
                        <span className={`wb-related-chip ${relatedChipClass(item.type)}`}>
                          {item.type}
                        </span>
                      </div>
                      <div className="wb-related-card-body">
                        <div className="wb-related-card-copy">
                          <h3>{item.title}</h3>
                          {item.excerpt ? <p>{item.excerpt}</p> : null}
                        </div>
                        <span className="wb-related-learn-more">
                          Learn More
                          <ChevronRight className="h-5 w-5" strokeWidth={1.75} />
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </section>
          ) : null}
        </main>

        <SiteFooter />
      </div>
    </>
  );
}
