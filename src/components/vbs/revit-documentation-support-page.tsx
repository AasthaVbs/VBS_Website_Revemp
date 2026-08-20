"use client";

import { useCallback, type ElementType, type ReactNode } from "react";

import LandingPdfLeadModal from "@/components/landing/landing-pdf-lead-modal";
import { PageContainer } from "@/components/layout/page-container";
import { SiteHeader } from "@/components/layout/site-header";
import { EvaluateDeliveryCtaSection } from "@/components/sections/evaluate-delivery-cta-section";
import { MepSectionTag } from "@/components/sections/mep/mep-section-tag";
import { SiteFooter } from "@/components/sections/site-footer";
import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";
import {
  revitDocSupportAdvantages,
  revitDocSupportCaseStudyPdf,
  revitDocSupportCaseStudyPdfModalTitle,
  revitDocSupportImages,
  revitDocSupportKeyAspects,
  revitDocSupportPainPoints,
} from "@/constants/revit-documentation-support-content";
import { trackLinkedInConversion } from "@/utils/site-tracking-events";

import "@/styles/revit-documentation-support.scss";

function useTrackPdfClick() {
  return useCallback(() => {
    trackLinkedInConversion();
  }, []);
}

function GatedCaseStudyDownload({
  children,
  fullWidth = false,
  className,
}: {
  children: ReactNode;
  fullWidth?: boolean;
  className?: string;
}) {
  const trackPdfClick = useTrackPdfClick();

  return (
    <LandingPdfLeadModal
      title={revitDocSupportCaseStudyPdfModalTitle}
      downloadUrl={revitDocSupportCaseStudyPdf}
      onBeforeOpen={trackPdfClick}
      neutralModalShell
      trigger={
        <PrimaryCtaButton fullWidth={fullWidth} className={className}>
          {children}
        </PrimaryCtaButton>
      }
    />
  );
}

function GatedCaseStudyFab() {
  const trackPdfClick = useTrackPdfClick();

  return (
    <LandingPdfLeadModal
      title={revitDocSupportCaseStudyPdfModalTitle}
      downloadUrl={revitDocSupportCaseStudyPdf}
      onBeforeOpen={trackPdfClick}
      neutralModalShell
      trigger={
        <a
          href={revitDocSupportCaseStudyPdf}
          className="revit-doc-support-pdf-fab"
          title="Get Your Free PDF"
          aria-label="Get Your Free PDF"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-file-pdf" aria-hidden="true" />
        </a>
      }
    />
  );
}

function ChevronRightIcon() {
  return (
    <svg className="h-2.5 w-2.5" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M9 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SplitTitle({
  as: Tag = "h2",
  lead,
  accent,
  className,
  id,
}: {
  as?: ElementType;
  lead: string;
  accent: string;
  className?: string;
  id?: string;
}) {
  return (
    <Tag id={id} className={className}>
      <span className="revit-doc-support__title-lead font-medium text-[#111111]">{lead}</span>
      <span className="revit-doc-support__title-accent font-light text-[#D70416]">{accent}</span>
    </Tag>
  );
}

const gatedCaseStudyCta = (
  <GatedCaseStudyDownload fullWidth={false}>
    Download Case Study
    <ChevronRightIcon />
  </GatedCaseStudyDownload>
);

export function RevitDocumentationSupportPage() {
  return (
    <div className="vbs-redesign-page revit-doc-support-page">
      <SiteHeader />
      <main>
        <section className="revit-doc-support-hero" aria-labelledby="revit-doc-hero-heading">
          <PageContainer className="revit-doc-support-hero__container">
            <div className="revit-doc-support-hero__grid">
              <div className="revit-doc-support-hero__copy">
                <div className="revit-doc-support-hero__intro">
                  <div className="revit-doc-support-hero__head">
                    <MepSectionTag label="Case Study" />
                    <SplitTitle
                      as="h1"
                      id="revit-doc-hero-heading"
                      className="revit-doc-support__title revit-doc-support__title--hero"
                      lead="How Mid-Size Architecture Firms Stabilize "
                      accent="Documentation During Growth Spurts"
                    />
                  </div>
                  <p className="revit-doc-support__body revit-doc-support-hero__desc lead text-secondary">
                    A real-world case study showing how drawing production was aligned with project
                    demand, without expanding internal teams or disrupting workflows.
                  </p>
                </div>
                <GatedCaseStudyDownload fullWidth={false}>
                  Download the Case Study
                </GatedCaseStudyDownload>
              </div>
              <div className="revit-doc-support-media revit-doc-support-hero__media">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="revit-doc-support-media__img revit-doc-support-media__img--hero"
                  src={revitDocSupportImages.hero}
                  alt="BIM model overlaid on a building under construction with blueprints and digital devices in the foreground"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>
          </PageContainer>
        </section>

        <section className="revit-doc-support-split revit-doc-support-pain" aria-labelledby="revit-doc-pain-heading">
          <PageContainer>
            <div className="revit-doc-support-split__grid revit-doc-support-split__grid--media-first">
              <div className="revit-doc-support-media revit-doc-support-pain__media">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="revit-doc-support-media__img revit-doc-support-media__img--pain"
                  src={revitDocSupportImages.painPoints}
                  alt="Architecture team working on Revit documentation at dual-monitor workstations in a modern office"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="revit-doc-support-split__copy">
                <div className="revit-doc-support__intro">
                  <div className="revit-doc-support-hero__head">
                    <MepSectionTag label="Pain Points" />
                    <SplitTitle
                      id="revit-doc-pain-heading"
                      className="revit-doc-support__title"
                      lead="Does This "
                      accent="Sound Familiar?"
                    />
                  </div>
                  <p className="revit-doc-support__body lead text-secondary">
                    For Architectural firms with 51–200 staff, a successful business development season
                    often leads to an operational Collision. When DD and CD phases overlap across
                    multiple projects, the bottleneck isn&apos;t design issue; it&apos;s production
                    bandwidth.
                  </p>
                </div>
                <div className="revit-doc-support-pain__notices">
                  <p className="revit-doc-support__lead">You may start noticing:</p>
                  <ul className="revit-doc-support-pain__list">
                    {revitDocSupportPainPoints.map((item) => (
                      <li key={item} className="revit-doc-support-pain__list-item">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="revit-doc-support__body lead text-secondary">
                  It doesn&apos;t happen all at once. It builds gradually, until documentation
                  becomes the bottleneck.
                </p>
              </div>
            </div>
          </PageContainer>
        </section>

        <section className="revit-doc-support-key-aspects" aria-labelledby="revit-doc-aspects-heading">
          <PageContainer className="revit-doc-support-key-aspects__container">
            <div className="revit-doc-support-key-aspects__row">
              <div className="revit-doc-support-key-aspects__copy">
                <div className="revit-doc-support-key-aspects__header">
                  <div className="revit-doc-support-hero__head">
                    <MepSectionTag label="Key Aspects" />
                    <SplitTitle
                      id="revit-doc-aspects-heading"
                      className="revit-doc-support__title"
                      lead="What's Inside "
                      accent="the Case Study"
                    />
                  </div>
                  <p className="revit-doc-support__body lead text-secondary">
                    This operational breakdown reveals the exact strategy used by a mid-size firm to
                    decouple design coordination from documentation execution.
                  </p>
                </div>
                <div className="revit-doc-support-key-aspects__items">
                  {revitDocSupportKeyAspects.map((item) => (
                    <article className="revit-doc-support-key-aspects__item" key={item.title}>
                      <h3 className="revit-doc-support-key-aspects__item-title">{item.title}</h3>
                      <p className="revit-doc-support__body lead text-secondary">{item.description}</p>
                    </article>
                  ))}
                </div>
              </div>
              <div className="revit-doc-support-media revit-doc-support-key-aspects__media">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="revit-doc-support-media__img revit-doc-support-media__img--infographic"
                  src={revitDocSupportImages.keyAspects}
                  alt="Five-step documentation workflow infographic"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            <div className="revit-doc-support-key-aspects__cta">{gatedCaseStudyCta}</div>
          </PageContainer>
        </section>

        <section className="revit-doc-support-advantages" aria-labelledby="revit-doc-advantages-heading">
          <PageContainer className="revit-doc-support-advantages__container">
            <div className="revit-doc-support-advantages__head">
              <div className="revit-doc-support-hero__head">
                <MepSectionTag label="Advantages" />
                <SplitTitle
                  id="revit-doc-advantages-heading"
                  className="revit-doc-support__title revit-doc-support-advantages__title"
                  lead="Why This Matters for "
                  accent="Your Architecture Firms"
                />
              </div>
              <p className="revit-doc-support__body revit-doc-support-advantages__desc lead text-secondary">
                How effectively managing your production workflow allows you to protect project
                profitability, prevent senior-level burnout, and maintain the high-quality design
                standards your clients expect.
              </p>
            </div>
            <div className="revit-doc-support-advantages__cards">
              {revitDocSupportAdvantages.map((card) => (
                <article className="revit-doc-support-advantage" key={card.title}>
                  <div className="revit-doc-support-advantage__icon-wrap">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={card.icon}
                      alt=""
                      aria-hidden
                      className="revit-doc-support-advantage__icon"
                    />
                  </div>
                  <div className="revit-doc-support-advantage__content">
                    <h3 className="revit-doc-support-advantage__title">{card.title}</h3>
                    <p className="revit-doc-support__body lead text-secondary">{card.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </PageContainer>
        </section>

        <EvaluateDeliveryCtaSection
          cardOnMobile
          title={
            <>
              Ready to Clear <span className="text-accent">the Backlog?</span>
            </>
          }
          description="Get the full breakdown of how a mid-size firm regained control over drawing production, reduced delays, and stabilized delivery across active projects."
          ctaElement={gatedCaseStudyCta}
        />
      </main>
      <GatedCaseStudyFab />
      <SiteFooter />
    </div>
  );
}

export default RevitDocumentationSupportPage;
