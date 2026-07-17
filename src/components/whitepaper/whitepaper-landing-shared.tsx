"use client";

import { ZohoPublicIframeForm } from "@/components/zoho/zoho-public-iframe-form";
import { ZOHO_MEP_DC_WP_VISIBLE_HEIGHT_PX } from "@/utils/zoho-contact-form-embed";

export const WHITEPAPER_FORM_ANCHOR = "whitepaper-download-form";

/** Beats legacy `html:not(:has(...)) h1/h2` in vbs-migrated-pages-shell.scss — scoped to data center whitepaper only */
const LEGACY_SHELL_HEADING_OVERRIDE =
  "html:not(:has(.vbs-redesign-page:not(.vbs-redesign-page--contact-embed))):not(:has(.vbs-redesign-page:not(.vbs-redesign-page--contact-embed))):not(:has(.vbs-redesign-page:not(.vbs-redesign-page--contact-embed)))";
const MEP_DC_PAGE = ".whitepaper-detail-page.wb-page--mep-dc";

type WhitepaperFormProps = {
  formTitle?: string;
  formSub?: string;
  downloadPdfUrl?: string;
  zohoIframeId?: string;
  zohoIframeSrc?: string;
  zohoIframeInitialHeightPx?: number;
  zohoHeaderCropPreset?: "mep-dc-wp" | "hidden-cost-wp";
};

export function WhitepaperForm({
  formTitle = "Get the Full Whitepaper",
  formSub = "Fill in your details to access the complete report instantly.",
  downloadPdfUrl,
  zohoIframeId,
  zohoIframeSrc,
  zohoIframeInitialHeightPx = ZOHO_MEP_DC_WP_VISIBLE_HEIGHT_PX,
  zohoHeaderCropPreset = "mep-dc-wp",
}: WhitepaperFormProps) {
  const handleSubmitSuccess = () => {
    if (downloadPdfUrl && typeof window !== "undefined") {
      window.open(downloadPdfUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="wb-form-simple" id={WHITEPAPER_FORM_ANCHOR}>
      <div className="wb-form-simple__intro">
        <div className="wb-form-badge">Access the Exclusive Guide</div>
        <h3>{formTitle}</h3>
        <p className="wb-form-sub">{formSub}</p>
      </div>
      {zohoIframeId && zohoIframeSrc ? (
        <div className="wb-form-zoho-wrap">
          <ZohoPublicIframeForm
            iframeId={zohoIframeId}
            iframeSrc={zohoIframeSrc}
            title={formTitle}
            initialHeight={zohoIframeInitialHeightPx}
            headerCropPreset={zohoHeaderCropPreset}
            footerCropPreset="mep-dc-wp"
            minVisibleHeightPreset="mep-dc-wp"
            cropHeader=""
            lockHeight
            transparentBackground
            redirectOnSubmit={!downloadPdfUrl}
            onSubmitSuccess={downloadPdfUrl ? handleSubmitSuccess : undefined}
            className="wb-form-zoho-iframe"
            frameClassName="wb-form-zoho-iframe__frame"
          />
        </div>
      ) : null}
    </div>
  );
}

export const WHITEPAPER_STYLES = `
  .wb-page, .wb-page * { box-sizing: border-box; }
  .wb-page {
    --red: #D70416;
    --black: #111111;
    --white: #ffffff;
    --light: #f7f8fa;
    --border: #e3e5e8;
    --text: #808080;
    font-family: var(--font-inter, "Inter", "Inter Fallback", system-ui, sans-serif);
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    background: linear-gradient(180deg, #ffffff 0%, #fcfcfd 100%);
    color: var(--black);
    padding-top: 88px;
  }
  .wb-page .vbs-header-spacer {
    display: none !important;
    height: 0 !important;
    min-height: 0 !important;
  }
  .wb-page h1, .wb-page h2, .wb-page h3, .wb-page h4, .wb-page p { margin: 0; }
  .wb-container, .wb-navbar-inner, .wb-content-inner, .wb-footer-inner {
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 28px;
    box-sizing: border-box;
  }
  @media (min-width: 768px) {
    .wb-container, .wb-navbar-inner, .wb-content-inner, .wb-footer-inner {
      padding: 0 37px;
    }
  }

  .wb-hero {
    padding: 100px 0 80px;
    position: relative;
    overflow: hidden;
  }
  .wb-hero::before {
    content: "";
    position: absolute;
    top: -80px;
    right: -80px;
    width: 420px;
    height: 420px;
    border-radius: 50%;
    background: radial-gradient(circle at center, rgba(215, 4, 22, 0.09), rgba(215, 4, 22, 0));
    pointer-events: none;
  }
  .wb-hero-grid {
    position: relative;
    z-index: 1;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    gap: 48px;
  }
  .wb-hero-copy {
    display: flex;
    width: 620px;
    max-width: 620px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 30px;
    min-height: 0;
    padding: 0;
    flex-shrink: 1;
  }
  .wb-hero-copy-top {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
  .wb-hero-title-block {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
  .wb-hero h1 {
    font-family: var(--font-inter, "Inter", system-ui, sans-serif);
    font-size: 48px;
    line-height: 1.2;
    margin: 0;
    font-weight: 500;
    width: 100%;
    max-width: 620px;
    color: #111111;
    text-transform: capitalize;
  }
  .wb-hero h1 span {
    color: #d70416;
    font-weight: 300;
    display: inline !important;
    line-height: inherit !important;
    vertical-align: baseline;
    border-radius: 0 !important;
    text-transform: capitalize;
  }
  .wb-hero h1 strong {
    color: #111111;
    font-weight: 500;
    display: inline !important;
    line-height: inherit !important;
    vertical-align: baseline;
    text-transform: capitalize;
  }
  .wb-hero-copy .lead {
    margin: 0 !important;
    width: 100%;
    font-size: 16px !important;
    font-weight: 400 !important;
    line-height: 24px !important;
    color: #808080 !important;
  }
  .wb-hero-actions {
    display: flex;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
  }
  .wb-hero-actions .wb-hero-cta.primary-cta,
  .wb-hero-actions-mobile .wb-hero-cta.primary-cta {
    text-decoration: none !important;
    min-height: 52px;
    padding: 16px 20px;
  }
  .wb-hero-actions-mobile {
    display: none;
  }
  .wb-hero-media {
    position: relative;
    width: 588.68px;
    max-width: 588.68px;
    height: 480px;
    flex-shrink: 0;
    overflow: hidden;
    border-radius: 10px;
    border: 0;
    background: #f4f4f4;
    box-shadow: 0 0 16.8px rgba(0, 0, 0, 0.15);
  }
  .wb-hero-media img {
    position: absolute;
    top: 0;
    left: -69.32px;
    display: block;
    width: 726px;
    max-width: none;
    height: 480px;
    min-height: 0;
    object-fit: cover;
  }

  @media (max-width: 1340px) and (min-width: 1025px) {
    .wb-hero-grid {
      gap: 32px;
    }
    .wb-hero-copy {
      width: min(620px, 46%);
      max-width: min(620px, 46%);
    }
    .wb-hero-media {
      width: min(588.68px, 50%);
      max-width: min(588.68px, 50%);
      height: auto;
      aspect-ratio: 588.68 / 480;
    }
    .wb-hero-media img {
      position: relative;
      left: 0;
      width: 100%;
      height: 100%;
    }
    .wb-hero {
      padding-top: 72px;
    }
    .wb-hero h1 {
      font-size: 36px !important;
    }
    .wb-hero-copy .lead {
      font-size: 15px !important;
    }
    .wb-key-insight-section h2,
    .wb-learn-panel h2 {
      font-size: 34px !important;
    }
    .wb-section h2 {
      font-size: 36px !important;
    }
    .wb-key-value {
      font-size: 30px;
    }
    .wb-key-item h5 {
      font-size: 15px !important;
    }
    .wb-content-inner {
      gap: 32px;
    }
  }

  #whitepaper-download-form {
    scroll-margin-top: 110px;
  }
  .wb-form-card {
    background: #fff;
    border: 1px solid var(--border);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    border-radius: 14px;
    padding: 28px 24px;
    position: sticky;
    top: 88px;
  }
  .wb-form-badge {
    display: inline-block;
    background: var(--red);
    color: #fff;
    border-radius: 5px;
    font-family: var(--font-inter, "Inter", system-ui, sans-serif);
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    padding: 4px 10px;
    margin-bottom: 14px;
  }
  .wb-form-card h3,
  .wb-form-simple__intro h3 {
    font-family: var(--font-inter, "Inter", system-ui, sans-serif);
    font-size: 20px;
    font-weight: 500;
    line-height: 1.35;
    color: #111111;
    margin-bottom: 4px;
  }
  .wb-form-sub {
    font-family: var(--font-inter, "Inter", system-ui, sans-serif);
    font-size: 16px;
    line-height: 24px;
    color: var(--text);
    margin-bottom: 12px;
  }
  .wb-form-divider {
    border: 0;
    border-top: 1px solid var(--border);
    margin-bottom: 18px;
  }
  .wb-form-note {
    margin-top: 10px;
    text-align: center;
    color: #8a8f96;
    font-size: 12px;
  }

  .wb-form-zoho-wrap {
    margin-top: 0;
    overflow: hidden;
    padding: 0;
  }
  .wb-form-zoho-wrap .vbs-zoho-iframe-form {
    position: relative;
    width: 100%;
    height: var(--vbs-zoho-iframe-visible-height);
    overflow: hidden;
    touch-action: manipulation;
  }
  .wb-page--mep-dc .wb-form-zoho-wrap .vbs-zoho-iframe-form {
    min-height: 0;
  }
  .wb-form-zoho-wrap .vbs-zoho-iframe-form__shift {
    transform: translate3d(0, calc(-1 * var(--vbs-zoho-iframe-header-crop)), 0);
    will-change: transform;
  }
  .wb-form-zoho-wrap .wb-form-zoho-iframe__frame {
    display: block;
    width: 100%;
    border: none;
    margin-top: 0;
    height: var(--vbs-zoho-iframe-full-height) !important;
    touch-action: manipulation;
    pointer-events: auto;
  }

  .wb-toast-container.Toastify__toast-container--top-right {
    top: 0 !important;
    right: 0 !important;
    left: auto !important;
    bottom: auto !important;
    padding: 0 !important;
    margin: 0 !important;
    transform: none !important;
    width: auto;
    max-width: 100vw;
    z-index: 2147483000 !important;
  }
  .wb-toast-container.Toastify__toast-container--top-right .Toastify__toast {
    font-family: "Segoe UI", system-ui, sans-serif;
    font-size: 14px;
    line-height: 1.45;
    max-width: min(420px, 100vw);
    margin: 0 0 6px 0 !important;
    border-radius: 0 0 0 10px;
  }
  .wb-toast-container.Toastify__toast-container--top-right .Toastify__toast:first-child {
    margin-top: 0 !important;
  }

  .wb-content {
    padding: 56px 0 72px;
  }
  .wb-learn-form-section {
    padding: 48px 0 48px;
    background: #ffffff;
  }
  .wb-learn-form-section.wb-content {
    padding: 48px 0 48px;
  }
  .wb-related-section.wb-content {
    padding: 48px 0 100px;
    background: #ffffff;
  }
  .wb-related-section .wb-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 60px;
  }
  .wb-related-header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
  .wb-related-title-block {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
  .wb-related-section h2 {
    margin: 0 !important;
    color: #111111 !important;
    font-size: 48px !important;
    font-weight: 500 !important;
    line-height: normal !important;
    text-transform: capitalize;
  }
  .wb-related-section h2 span {
    color: #d70416 !important;
    font-weight: 300 !important;
    display: inline !important;
  }
  .wb-related-desc {
    margin: 0;
    color: #808080 !important;
    font-size: 16px !important;
    font-weight: 400 !important;
    line-height: 24px !important;
  }
  .wb-related-cards {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    align-items: stretch;
    gap: 20px;
  }
  .wb-related-card {
    flex: 0 1 380px;
    max-width: 420px;
    min-width: 0;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 20px;
    padding: 16px;
    border: 1px solid var(--border);
    border-radius: 12px;
    background: #fff;
    text-decoration: none;
    color: inherit;
    transition: transform .22s ease, box-shadow .22s ease;
  }
  .wb-related-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 26px rgba(17, 24, 39, 0.10);
  }
  .wb-related-card-media {
    position: relative;
    width: 100%;
    height: 220px;
    overflow: hidden;
    border-radius: 10px;
    background: #f9f9f9;
  }
  .wb-related-card-media img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .wb-related-card-body {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    gap: 15px;
  }
  .wb-related-card-copy {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
  .wb-related-card-copy h3 {
    margin: 0 !important;
    color: #111111 !important;
    font-size: 20px !important;
    font-weight: 500 !important;
    line-height: 1.3 !important;
  }
  .wb-related-card-copy p {
    margin: 0 !important;
    color: #808080 !important;
    font-size: 15px !important;
    font-weight: 400 !important;
    line-height: 22px !important;
  }
  .wb-related-learn-more {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    color: #42aa32;
    font-size: 16px;
    font-weight: 400;
  }
  .wb-related-chip {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 10px;
    bottom: 10px;
    z-index: 2;
    padding: 4px 10px;
    border-radius: 10px;
    border: 1px solid #f0b300;
    background: #f0b300;
    color: #fff;
    font-size: 13px;
    line-height: normal;
    font-weight: 400;
    letter-spacing: 0;
    text-transform: none;
    box-shadow: none;
  }
  .wb-related-chip--blog {
    border-color: #d70416;
    background: #d70416;
  }
  .wb-related-chip--case {
    border-color: #42aa32;
    background: #42aa32;
  }
  .wb-related-chip--whitepaper,
  .wb-related-chip--default {
    border-color: #f0b300;
    background: #f0b300;
  }
  .wb-content-inner {
    display: flex;
    width: 100%;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 20px;
  }
  .wb-learn-panel {
    flex: 1 1 0;
    min-width: 0;
    margin-bottom: 0;
    border: 0;
    border-radius: 20px;
    padding: 0;
    background: transparent;
    box-shadow: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
  .wb-learn-header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    max-width: 528px;
  }
  .wb-form-panel {
    flex: 1 1 0;
    min-width: 0;
    display: flex;
    margin-top: 0;
    margin-bottom: 0;
  }
  .wb-form-panel .wb-form-card,
  .wb-form-panel .wb-form-simple {
    width: 100%;
    height: auto;
  }
  .wb-sticky-col {
    position: sticky;
    top: 130px;
  }
  .wb-sticky-col .wb-form-card,
  .wb-sticky-col .wb-form-simple {
    position: static;
  }
  .wb-section-label {
    margin-bottom: 5px !important;
    color: var(--red);
    text-transform: uppercase;
    font-family: var(--font-inter, "Inter", system-ui, sans-serif);
    font-size: 13px !important;
    letter-spacing: 0.08em;
    font-weight: 500 !important;
    margin-top: 20px !important;
  }
  .wb-section h2 {
    font-family: var(--font-inter, "Inter", system-ui, sans-serif);
    font-size: 46px !important;
    line-height: 1.15 !important;
    margin-bottom: 24px;
    font-weight: 500 !important;
    color: #111111;
  }
  .wb-learn-panel h2 {
    font-family: var(--font-inter, "Inter", system-ui, sans-serif);
    margin: 0 !important;
    max-width: 528px;
    color: #111111 !important;
    font-size: 46px !important;
    font-weight: 500 !important;
    line-height: normal !important;
    text-transform: capitalize;
  }
  .wb-learn-panel h2 span {
    color: #d70416 !important;
    font-weight: 300 !important;
    display: inline !important;
    line-height: inherit !important;
    text-transform: capitalize;
  }

  .wb-learn-grid {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    gap: 16px;
  }
  .wb-learn-item {
    border: 0;
    border-radius: 0;
    padding: 0;
    display: flex;
    width: 100%;
    align-items: flex-start;
    gap: 10px;
    transition: none;
    background: transparent;
  }
  .wb-learn-icon {
    width: 16px;
    height: 16px;
    margin-top: 4px;
    border-radius: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: #d70416;
    color: #ffffff;
    flex-shrink: 0;
  }
  .wb-learn-icon svg {
    display: block;
  }
  .wb-learn-item p {
    flex: 1 1 0;
    min-width: 0;
    font-family: var(--font-inter, "Inter", system-ui, sans-serif);
    font-size: 16px !important;
    line-height: 24px !important;
    margin: 0;
    color: #808080 !important;
    font-weight: 400 !important;
  }

  .wb-key-insight-section {
    padding: 80px 0 100px;
    background: #ffffff;
  }
  .wb-key-insight-section .wb-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 60px;
  }
  .wb-key-header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    max-width: 986px;
  }
  .wb-key-insight-section h2 {
    margin: 0 !important;
    max-width: 986px;
    color: #111111 !important;
    font-size: 42px !important;
    font-weight: 500 !important;
    line-height: 50px !important;
    text-transform: capitalize;
  }
  .wb-key-insight-section h2 span {
    color: #d70416 !important;
    font-weight: 300 !important;
    display: inline !important;
    line-height: inherit !important;
    text-transform: capitalize;
  }

  .wb-key-grid {
    display: flex;
    width: 100%;
    align-items: stretch;
    justify-content: flex-start;
    gap: 20px;
  }
  .wb-key-item {
    flex: 1 1 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 7px;
    border: 0;
    background: transparent;
    border-radius: 0;
    padding: 0;
    text-align: center;
    box-shadow: none;
    transition: none;
  }
  .wb-key-item:hover {
    transform: none;
    border-color: transparent;
    box-shadow: none;
  }
  .wb-key-value {
    margin: 0;
    color: var(--red);
    font-family: var(--font-inter, "Inter", system-ui, sans-serif);
    font-size: 36px;
    font-weight: 500;
    line-height: normal;
    text-align: center;
  }
  .wb-key-item h5 {
    margin: 0;
    width: 100%;
    max-width: 220px;
    font-family: var(--font-inter, "Inter", system-ui, sans-serif);
    color: #808080 !important;
    font-size: 16px !important;
    line-height: normal !important;
    font-weight: 400 !important;
    text-align: center;
  }
  .wb-key-insight-section .stats-strip-divider {
    align-self: stretch;
  }

  @media (max-width: 1340px) and (min-width: 1025px) {
    .wb-related-section h2 {
      font-size: 36px !important;
    }
    .wb-related-card-copy h3 {
      font-size: 18px !important;
    }
    .wb-related-card-media {
      height: 200px;
    }
  }

  @media (max-width: 1024px) {
    .wb-hero-grid, .wb-content-inner {
      flex-direction: column;
      grid-template-columns: 1fr;
      gap: 28px;
      align-items: stretch;
    }
    .wb-hero-copy {
      width: 100%;
      max-width: none;
      min-height: 0;
      padding: 0;
    }
    .wb-hero-media {
      width: 100%;
      max-width: 100%;
      height: auto;
      aspect-ratio: 588.68 / 480;
    }
    .wb-hero-media img {
      position: relative;
      left: 0;
      width: 100%;
      height: 100%;
      min-height: 0;
      object-fit: cover;
    }
    .wb-form-card, .wb-sticky-col {
      position: static;
    }
    .wb-form-panel {
      order: 2;
      margin-top: 0;
      margin-bottom: 0;
      width: 100%;
      flex: none;
    }
    .wb-learn-panel {
      order: 1;
      padding: 0;
      width: 100%;
      flex: none;
    }
    .wb-learn-form-section {
      padding: 60px 0;
    }
    .wb-learn-form-section.wb-content {
      padding: 60px 0;
    }
    .wb-related-section.wb-content {
      padding: 60px 0;
    }
    .wb-related-section .wb-container {
      gap: 40px;
    }
    .wb-related-card {
      flex: 1 1 260px;
    }
    .wb-related-section h2 {
      font-size: clamp(28px, 4vw, 40px) !important;
    }
    .wb-related-card-copy h3 {
      font-size: 18px !important;
    }
    .wb-hero h1 {
      font-size: clamp(26px, 3.8vw, 34px);
      line-height: 1.2;
    }
    .wb-section h2 {
      font-size: clamp(28px, 4vw, 46px) !important;
      line-height: 1.15 !important;
      font-weight: 500 !important;
    }
    .wb-learn-panel h2 {
      font-size: clamp(28px, 4vw, 40px) !important;
      line-height: 1.25 !important;
      font-weight: 500 !important;
    }
    .wb-learn-panel h2 span {
      font-weight: 300 !important;
    }
    .wb-key-insight-section {
      padding: 40px 0 60px;
    }
    .wb-key-insight-section .wb-container {
      gap: 40px;
    }
    .wb-key-insight-section h2 {
      font-size: clamp(28px, 4vw, 40px) !important;
      line-height: 1.25 !important;
    }
    .wb-key-insight-section h2 span {
      font-weight: 300 !important;
    }
    .wb-key-grid {
      flex-wrap: wrap;
      gap: 28px 20px;
    }
    .wb-key-item {
      flex: 1 1 calc(50% - 20px);
      min-width: 200px;
    }
    .wb-key-insight-section .stats-strip-divider {
      display: none;
    }
  }
  @media (max-width: 640px) {
    .wb-page {
      padding-top: 74px;
    }
    .wb-container, .wb-content-inner {
      padding: 0 18px;
    }
    .wb-hero {
      padding-top: 46px;
    }
    .wb-hero-copy .wb-hero-actions {
      display: none;
    }
    .wb-hero-actions-mobile {
      display: flex;
      width: 100%;
    }
    .wb-hero-actions-mobile .primary-cta,
    .wb-hero-actions-mobile .wb-hero-cta {
      width: 100%;
      justify-content: center;
    }
    .wb-content-inner {
      gap: 18px;
    }
    .wb-related-section.wb-content {
      padding: 48px 0;
    }
    .wb-related-section .wb-container {
      gap: 32px;
    }
    .wb-related-cards {
      flex-direction: column;
      align-items: stretch;
    }
    .wb-related-card {
      flex: 1 1 auto;
      max-width: none;
    }
    .wb-related-card-media {
      height: 200px;
    }
    .wb-related-section h2 {
      font-size: clamp(26px, 6.5vw, 32px) !important;
    }
    .wb-related-card-copy h3 {
      font-size: 18px !important;
    }
    .wb-key-insight-section {
      padding: 32px 0 48px;
    }
    .wb-key-insight-section .wb-container {
      gap: 32px;
    }
    .wb-key-grid {
      flex-direction: column;
      gap: 0;
    }
    .wb-key-item {
      flex: 1 1 auto;
      width: 100%;
      min-width: 0;
      position: relative;
      padding: 28px 0 !important;
    }
    .wb-key-item:first-of-type {
      padding-top: 0 !important;
    }
    .wb-key-item:last-of-type {
      padding-bottom: 0 !important;
    }
    .wb-key-item:not(:first-of-type)::before {
      content: "";
      position: absolute;
      left: 10%;
      right: 10%;
      top: 0;
      height: 1.5px;
      background: linear-gradient(
        to right,
        transparent 0%,
        #cbcccd 18%,
        #cbcccd 82%,
        transparent 100%
      );
      pointer-events: none;
    }
    .wb-key-insight-section .stats-strip-divider {
      display: none;
    }
    .wb-hero h1 {
      font-size: clamp(26px, 6.5vw, 32px);
      line-height: 1.2;
    }
    .wb-section h2 {
      font-size: clamp(28px, 4vw, 46px) !important;
      line-height: 1.15 !important;
      font-weight: 500 !important;
    }
    .wb-learn-panel h2 {
      font-size: clamp(26px, 6.5vw, 32px) !important;
      line-height: 1.25 !important;
      font-weight: 500 !important;
    }
    .wb-learn-panel h2 span {
      font-weight: 300 !important;
    }
    .wb-key-insight-section h2 {
      font-size: clamp(26px, 6.5vw, 32px) !important;
      line-height: 1.25 !important;
    }
    .wb-key-insight-section h2 span {
      font-weight: 300 !important;
    }
    .wb-form-simple__intro h3 {
      font-size: 18px !important;
    }
    .wb-learn-item p {
      font-size: 14px !important;
      line-height: 22px !important;
    }
    .wb-key-value {
      font-size: 28px;
    }
    .wb-learn-form-section,
    .wb-learn-form-section.wb-content {
      padding: 48px 0;
    }
  }
`;

/** Data center whitepaper — Figma hero + balanced learn/form row */
export const WHITEPAPER_MEP_DC_PAGE_STYLES = `
  .wb-page--mep-dc .wb-hero-grid {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 48px;
  }
  .wb-page--mep-dc .wb-hero-copy {
    width: 620px;
    max-width: 620px;
    min-height: 0;
    padding: 0;
    justify-content: flex-start;
    gap: 30px;
  }
  .wb-page--mep-dc .wb-hero h1 {
    max-width: 620px;
  }
  .wb-page--mep-dc .wb-hero-copy .lead {
    max-width: 620px;
  }
  .wb-page--mep-dc .wb-hero-media {
    align-self: center;
    width: 588.68px;
    max-width: 588.68px;
    height: 480px;
  }
  .wb-page--mep-dc .wb-hero-media img {
    position: absolute;
    top: 0;
    left: -69.32px;
    width: 726px;
    max-width: none;
    height: 480px;
    transform: none;
  }

  .wb-page--mep-dc .wb-form-badge {
    align-self: flex-start;
    width: fit-content;
    max-width: 100%;
  }

  .wb-page--mep-dc .wb-content-inner {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 20px;
  }
  .wb-page--mep-dc .wb-form-panel {
    margin-top: 0;
    margin-bottom: 0;
    align-self: start;
  }
  .wb-page--mep-dc .wb-learn-panel {
    display: flex;
    flex-direction: column;
    align-self: start;
    padding-right: 0;
    max-width: none;
    gap: 20px;
  }
  .wb-page--mep-dc .wb-learn-panel h2 {
    margin: 0 !important;
  }
  .wb-page--mep-dc .wb-learn-grid {
    flex: 0 1 auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 16px;
    min-height: 0;
  }
  .wb-page--mep-dc .wb-learn-item {
    flex: 0 0 auto;
    align-items: flex-start;
  }
  .wb-page--mep-dc .wb-form-simple {
    background: #fff;
    border: 1px solid var(--border);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    border-radius: 14px;
    padding: 0;
    position: sticky;
    top: 88px;
    min-height: 0;
    width: 100%;
    overflow: hidden;
  }
  .wb-page--mep-dc .wb-form-simple__intro {
    padding: 24px 24px 18px;
    border-bottom: 1px solid var(--border);
  }
  .wb-page--mep-dc .wb-form-simple__intro .wb-form-badge {
    display: inline-block;
    margin: 0 0 12px;
  }
  .wb-page--mep-dc .wb-form-simple__intro h3 {
    font-family: var(--font-inter, "Inter", system-ui, sans-serif);
    font-size: 20px !important;
    line-height: 1.35 !important;
    font-weight: 500 !important;
    margin: 0 0 8px !important;
    padding: 0;
    color: var(--black);
  }
  .wb-page--mep-dc .wb-form-simple__intro .wb-form-sub {
    margin: 0;
    padding: 0;
    font-size: 15px !important;
    line-height: 1.55 !important;
    color: var(--text);
    font-weight: 400 !important;
  }
  .wb-page--mep-dc .wb-form-zoho-wrap {
    width: calc(100% + 44px);
    margin: 0 -22px -36px;
    padding: 0;
    overflow: hidden;
    background: #fff;
  }
  .wb-page--mep-dc .wb-form-zoho-wrap .vbs-zoho-iframe-form,
  .wb-page--mep-dc .wb-form-zoho-wrap .wb-form-zoho-iframe {
    width: 100%;
    padding: 0;
    margin: 0;
    background: #fff;
  }
  .wb-page--mep-dc .wb-form-zoho-wrap .vbs-zoho-iframe-form__shift {
    background: #fff;
  }
  .wb-page--mep-dc .wb-form-zoho-wrap .wb-form-zoho-iframe__frame {
    display: block;
    width: 100% !important;
    max-width: none;
    border: none !important;
    background: #fff !important;
    background-color: #fff !important;
    overflow: hidden;
  }

  @media (max-width: 1340px) and (min-width: 1025px) {
    .wb-page--mep-dc .wb-hero-copy {
      width: min(620px, 46%);
      max-width: min(620px, 46%);
    }
    .wb-page--mep-dc .wb-hero-media {
      width: min(588.68px, 50%);
      max-width: min(588.68px, 50%);
      height: auto;
      aspect-ratio: 588.68 / 480;
    }
    .wb-page--mep-dc .wb-hero-media img {
      position: relative;
      left: 0;
      width: 100%;
      height: 100%;
    }
    .wb-page--mep-dc .wb-content-inner {
      gap: 32px;
    }
    .wb-page--mep-dc .wb-form-simple__intro h3 {
      font-size: 18px !important;
    }
    .wb-page--mep-dc .wb-learn-item p {
      font-size: 20px !important;
    }
  }

  @media (max-width: 1024px) {
    .wb-page--mep-dc .wb-hero-grid {
      flex-direction: column;
      gap: 20px;
      align-items: stretch;
    }
    .wb-page--mep-dc .wb-hero-copy,
    .wb-page--mep-dc .wb-hero h1,
    .wb-page--mep-dc .wb-hero-copy .lead {
      width: 100%;
      max-width: none;
    }
    .wb-page--mep-dc .wb-hero-media {
      width: 100%;
      max-width: 100%;
      height: auto;
      aspect-ratio: 588.68 / 480;
    }
    .wb-page--mep-dc .wb-hero-media img {
      position: relative;
      left: 0;
      width: 100%;
      height: 100%;
    }
    .wb-page--mep-dc .wb-content-inner {
      flex-direction: column;
      gap: 40px;
    }
    .wb-page--mep-dc .wb-learn-panel {
      max-width: none;
      padding-right: 0;
    }
    .wb-page--mep-dc .wb-learn-grid {
      justify-content: flex-start;
      gap: 16px;
    }
    .wb-page--mep-dc .wb-learn-item {
      flex: none;
      align-items: flex-start;
    }
    .wb-page--mep-dc .wb-form-simple {
      position: static;
    }
    .whitepaper-detail-page.wb-page--mep-dc .wb-hero-actions .primary-cta {
      padding: 10px 16px !important;
      font-size: clamp(13px, 1.6vw, 16px) !important;
      font-weight: 500 !important;
      line-height: 1.15 !important;
      white-space: nowrap;
    }
  }

  @media (max-width: 640px) {
    .wb-page--mep-dc .wb-hero {
      padding-top: 28px !important;
      padding-bottom: 20px !important;
    }
    .wb-page--mep-dc .wb-hero-grid {
      gap: 12px !important;
    }
    .wb-page--mep-dc .wb-hero-actions-mobile {
      margin-top: 8px !important;
    }
    .wb-page--mep-dc .wb-key-insight-section.wb-content {
      margin-top: 0 !important;
      margin-bottom: 0 !important;
      padding-top: 48px !important;
      padding-bottom: 48px !important;
    }
    ${LEGACY_SHELL_HEADING_OVERRIDE} ${MEP_DC_PAGE} .wb-hero h1,
    ${LEGACY_SHELL_HEADING_OVERRIDE} ${MEP_DC_PAGE} .wb-hero h1 span,
    ${LEGACY_SHELL_HEADING_OVERRIDE} ${MEP_DC_PAGE} .wb-hero h1 strong {
      font-size: clamp(22px, 5.8vw, 28px) !important;
      line-height: 1.25 !important;
      margin-bottom: 10px !important;
      font-weight: 700 !important;
    }
    ${LEGACY_SHELL_HEADING_OVERRIDE} ${MEP_DC_PAGE} .wb-hero h1 span,
    ${LEGACY_SHELL_HEADING_OVERRIDE} ${MEP_DC_PAGE} .wb-hero h1 strong {
      display: inline !important;
      line-height: inherit !important;
      vertical-align: baseline !important;
      border-radius: 0 !important;
    }
    ${LEGACY_SHELL_HEADING_OVERRIDE} ${MEP_DC_PAGE} .wb-section h2,
    ${LEGACY_SHELL_HEADING_OVERRIDE} ${MEP_DC_PAGE} .wb-section h2 span,
    ${LEGACY_SHELL_HEADING_OVERRIDE} ${MEP_DC_PAGE} .wb-section h2 strong {
      font-size: clamp(28px, 4vw, 46px) !important;
      line-height: 1.15 !important;
      margin-bottom: 14px !important;
      font-weight: 500 !important;
    }
    ${LEGACY_SHELL_HEADING_OVERRIDE} ${MEP_DC_PAGE} .wb-learn-panel h2 {
      font-size: clamp(26px, 6.5vw, 32px) !important;
      line-height: 1.25 !important;
      margin-bottom: 0 !important;
      font-weight: 500 !important;
    }
    ${LEGACY_SHELL_HEADING_OVERRIDE} ${MEP_DC_PAGE} .wb-learn-panel h2 span {
      font-size: inherit !important;
      line-height: inherit !important;
      font-weight: 300 !important;
      color: #d70416 !important;
      display: inline !important;
    }
    ${LEGACY_SHELL_HEADING_OVERRIDE} ${MEP_DC_PAGE} .wb-key-insight-section h2 {
      font-size: clamp(26px, 6.5vw, 32px) !important;
      line-height: 1.25 !important;
      margin-bottom: 0 !important;
      font-weight: 500 !important;
    }
    ${LEGACY_SHELL_HEADING_OVERRIDE} ${MEP_DC_PAGE} .wb-key-insight-section h2 span {
      font-size: inherit !important;
      line-height: inherit !important;
      font-weight: 300 !important;
      color: #d70416 !important;
      display: inline !important;
    }
    ${LEGACY_SHELL_HEADING_OVERRIDE} ${MEP_DC_PAGE} .wb-form-simple__intro h3,
    ${LEGACY_SHELL_HEADING_OVERRIDE} ${MEP_DC_PAGE} .wb-form-simple__intro h3 span,
    ${LEGACY_SHELL_HEADING_OVERRIDE} ${MEP_DC_PAGE} .wb-form-simple__intro h3 strong {
      font-size: clamp(15px, 3.8vw, 18px) !important;
      line-height: 1.3 !important;
      font-weight: 700 !important;
    }
    ${LEGACY_SHELL_HEADING_OVERRIDE} ${MEP_DC_PAGE} .wb-form-card h3,
    ${LEGACY_SHELL_HEADING_OVERRIDE} ${MEP_DC_PAGE} .wb-related-card-copy h3,
    ${LEGACY_SHELL_HEADING_OVERRIDE} ${MEP_DC_PAGE} .wb-related-card-copy h3 span,
    ${LEGACY_SHELL_HEADING_OVERRIDE} ${MEP_DC_PAGE} .wb-related-card-copy h3 strong {
      font-size: clamp(18px, 4.4vw, 24px) !important;
      line-height: 1.3 !important;
      font-weight: 400 !important;
    }
    .wb-page--mep-dc .wb-hero-copy .lead {
      font-size: 0.9rem !important;
      line-height: 1.5 !important;
    }
    .wb-page--mep-dc .wb-section-label {
      font-size: 11px !important;
      letter-spacing: 0.08em !important;
      margin-bottom: 4px !important;
      
    }
    .wb-page--mep-dc .wb-key-value {
      font-size: 28px !important;
      margin-top: 0 !important;
      margin-bottom: 0 !important;
    }
    .wb-page--mep-dc .wb-key-item h5 {
      font-size: 14px !important;
      line-height: 1.3 !important;
      max-width: 220px !important;
    }
    .wb-page--mep-dc .wb-key-item {
      padding: 28px 0 !important;
    }
    .wb-page--mep-dc .wb-key-item:first-of-type {
      padding-top: 0 !important;
    }
    .wb-page--mep-dc .wb-key-item:last-of-type {
      padding-bottom: 0 !important;
    }
    .wb-page--mep-dc .wb-learn-item p {
      font-size: 14px !important;
      line-height: 22px !important;
    }
    .wb-page--mep-dc .wb-form-simple__intro {
      padding: 20px 18px 14px;
    }
    .wb-page--mep-dc .wb-form-simple__intro h3 {
      font-size: clamp(15px, 3.8vw, 18px) !important;
      line-height: 1.3 !important;
      margin-bottom: 6px !important;
    }
    .wb-page--mep-dc .wb-form-badge {
      font-size: 9px !important;
      padding: 3px 8px !important;
      letter-spacing: 0.06em !important;
    }
    .wb-page--mep-dc .wb-form-sub {
      font-size: 13px !important;
      line-height: 1.45 !important;
    }
    .whitepaper-detail-page.wb-page--mep-dc .wb-hero-actions-mobile .primary-cta,
    .whitepaper-detail-page.wb-page--mep-dc .wb-hero-actions .primary-cta {
      width: 100%;
      max-width: 100%;
      padding: 9px 12px !important;
      font-size: clamp(12px, 3.15vw, 14px) !important;
      font-weight: 500 !important;
      line-height: 1.15 !important;
      letter-spacing: 0.01em;
      white-space: nowrap;
      gap: 6px !important;
    }
    .wb-page--mep-dc .mep-zoho-wtl-root--whitepaper input[type="submit"] {
      padding: 10px 16px !important;
      font-size: 13px !important;
      width: 100%;
      max-width: 100%;
      white-space: nowrap;
    }
    .wb-page--mep-dc .wb-hero-media img {
      transform: none;
    }
  }
`;
