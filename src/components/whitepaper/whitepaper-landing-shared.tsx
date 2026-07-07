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
    --text: #5a5f66;
    font-family: "Segoe UI", system-ui, sans-serif;
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
    width: min(1200px, 100%);
    margin: 0 auto;
    padding: 0 32px;
  }

  .wb-hero {
    padding: 95px 0 28px;
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
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(480px, 640px);
    gap: 44px;
    align-items: center;
  }
  .wb-hero-copy {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 360px;
    padding: 18px 0;
  }
  .wb-hero h1 {
    font-size: clamp(2rem, 3.6vw, 3.1rem);
    line-height: 1.12;
    margin-bottom: 14px;
    font-weight: 800;
    max-width: 620px;
  }
  .wb-hero h1 span {
    color: var(--red);
    display: inline !important;
    line-height: inherit !important;
    vertical-align: baseline;
    border-radius: 0 !important;
  }
  .wb-hero h1 strong {
    display: inline !important;
    line-height: inherit !important;
    vertical-align: baseline;
  }
  .wb-hero-actions {
    display: flex;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
  }
  .wb-hero-actions-mobile {
    display: none;
  }
  .wb-hero-media {
    border-radius: 0;
    overflow: hidden;
    border: 0;
    box-shadow: none;
  }
  .wb-hero-media img {
    display: block;
    width: 100%;
    height: auto;
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
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    padding: 4px 10px;
    margin-bottom: 14px;
  }
  .wb-form-card h3 {
    font-size: 1.2rem;
    margin-bottom: 4px;
  }
  .wb-form-sub {
    font-size: 14px;
    line-height: 1.5;
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
  .wb-content-inner {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(320px, 420px);
    gap: 56px;
    align-items: stretch;
  }
  .wb-learn-panel {
    margin-bottom: 0;
    border: 0;
    border-radius: 0;
    padding: 0;
    background: transparent;
    box-shadow: none;
    height: 100%;
  }
  .wb-form-panel {
    display: flex;
    margin-top: 28px;
    margin-bottom: 36px;
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
    font-size: 14px !important;
    letter-spacing: 0.12em;
    font-weight: 800 !important;
    margin-top: 20px !important;
  }
  .wb-section h2 {
    font-size: clamp(1.6rem, 3vw, 2rem);
    line-height: 1.25;
    margin-bottom: 24px;
    font-family: "Segoe UI", system-ui, sans-serif;
    font-weight: 700;
  }

  .wb-learn-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 14px;
  }
  .wb-learn-item {
    border: 0;
    border-radius: 8px;
    padding: 4px 2px;
    display: flex;
    align-items: flex-start;
    gap: 14px;
    transition: none;
    background: #fff;
  }
  .wb-learn-icon {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    background: rgba(215, 4, 22, 0.12);
    color: var(--red);
    font-size: 12px;
    font-weight: 800;
    flex-shrink: 0;
    margin-top: 1px;
  }
  .wb-learn-item p {
    font-size: 18px !important;
    line-height: 1.35 !important;
    margin: 0;
    color: #4b5563 !important;
    font-weight: 600 !important;
  }

  .wb-key-insight-section {
    padding-top: 24px;
    padding-bottom: 20px;
  }
  .wb-key-insight-section h2 {
    color: #111827;
    max-width: 860px;
    position: relative;
  }

  .wb-key-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 12px;
  }
  .wb-key-item {
    border: 1px solid rgba(17, 24, 39, 0.08);
    background: #fff;
    border-radius: 12px;
    padding: 16px;
    text-align: center;
    box-shadow: 0 8px 22px rgba(17, 24, 39, 0.07);
    transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
  }
  .wb-key-item:hover {
    transform: translateY(-3px);
    border-color: rgba(215, 4, 22, 0.22);
    box-shadow: 0 12px 24px rgba(17, 24, 39, 0.12);
  }
  .wb-key-value {
    color: var(--red);
    font-size: 1.62rem;
    font-weight: 900;
    line-height: 1;
    margin-bottom: 20px;
    margin-top:20px;
    font-family: "Arial Black","Segoe UI Black","Segoe UI",system-ui,sans-serif;
  }
  .wb-key-item h5 {
    color: #111827;
    font-size: 1.03rem;
    line-height: 1.28 !important;
    font-weight: 700 !important;
  }

  .wb-whofor-section {
    padding-top: 0;
    margin-top: -16px;
  }
  .wb-whofor-grid {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 16px;
    margin-top: 20px;
  }
  .wb-whofor-card {
    border-radius: 16px;
    border: 1px solid rgba(17, 24, 39, 0.08);
    background: #fff;
    box-shadow: 0 8px 22px rgba(17, 24, 39, 0.07);
    padding: 20px;
    text-align: center;
    transition: transform .22s ease, box-shadow .22s ease;
  }
  .wb-whofor-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 14px 28px rgba(17, 24, 39, 0.12);
  }
  .wb-whofor-icon {
    width: 42px;
    height: 42px;
    border-radius: 10px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    background: linear-gradient(135deg, #d70416, #8f0a14);
    box-shadow: 0 8px 18px rgba(215, 4, 22, .24);
    margin: 0 auto 12px;
  }
  .wb-whofor-title {
    font-size: 0.96rem;
    line-height: 1.28;
    color: #111827;
    margin: 0;
    font-weight: 800;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 5px;
  }

  .wb-related-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 18px;
    margin-top: 18px;
  }
  .wb-related-card {
    text-decoration: none;
    color: inherit;
    border: 1px solid var(--border);
    border-radius: 12px;
    overflow: hidden;
    background: #fff;
    transition: transform .22s ease, box-shadow .22s ease;
  }
  .wb-related-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 26px rgba(17, 24, 39, 0.10);
  }
  .wb-related-media {
    position: relative;
    aspect-ratio: 16 / 10;
    min-height: 180px;
    overflow: hidden;
    background: #f4f6f8;
  }
  .wb-related-media img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .wb-related-body {
    padding: 12px 14px 14px;
  }
  .wb-related-chip {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 2;
    padding: 5px 10px;
    border-radius: 999px;
    background: linear-gradient(180deg, #e5232b 0%, #c80f1a 100%);
    color: #fff;
    font-size: 12px;
    line-height: 1;
    font-weight: 700;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    box-shadow: 0 10px 16px -12px rgba(215, 4, 22, 0.95);
  }
  .wb-related-card h3 {
    padding: 10px 0 0;
    font-size: 0.9rem !important;
    line-height: 1.45 !important;
    font-weight: 700 !important;
    color:#000000 !important;
  }
  .wb-related-card h3:hover {
    color:#e5232b !important;
  }

  @media (max-width: 1024px) {
    .wb-hero-grid, .wb-content-inner {
      grid-template-columns: 1fr;
      gap: 28px;
    }
    .wb-hero-copy {
      min-height: 0;
      padding: 0;
    }
    .wb-form-card, .wb-sticky-col {
      position: static;
    }
    .wb-form-panel {
      order: 1;
      margin-top: 0;
      margin-bottom: 24px;
    }
    .wb-learn-panel {
      order: 2;
      padding: 22px;
    }
    .wb-related-grid {
      grid-template-columns: 1fr;
    }
    .wb-whofor-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
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
    .wb-hero-actions-mobile .btn {
      width: 100%;
      justify-content: center;
    }
    .wb-content-inner {
      gap: 18px;
    }
    .wb-related-media {
      min-height: 165px;
    }
    .wb-key-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .wb-whofor-grid {
      grid-template-columns: 1fr;
    }
  }
`;

/** Data center whitepaper — tighter hero + balanced learn/form row */
export const WHITEPAPER_MEP_DC_PAGE_STYLES = `
  .wb-page--mep-dc .wb-hero-grid {
    gap: 0;
    grid-template-columns: minmax(0, 1.28fr) minmax(440px, 560px);
  }
  .wb-page--mep-dc .wb-hero-copy {
    min-height: 0;
    padding: 0;
    justify-content: flex-start;
    max-width: none;
  }
  .wb-page--mep-dc .wb-hero h1 {
    max-width: 720px;
  }
  .wb-page--mep-dc .wb-hero-copy .lead {
    max-width: 680px;
  }
  .wb-page--mep-dc .wb-hero-media {
    align-self: center;
  }
  .wb-page--mep-dc .wb-hero-media img {
    width: 100%;
    max-width: 100%;
    transform: scale(1.06);
    transform-origin: center center;
  }

  .wb-page--mep-dc .wb-form-badge {
    align-self: flex-start;
    width: fit-content;
    max-width: 100%;
  }

  .wb-page--mep-dc .wb-content-inner {
    grid-template-columns: minmax(0, 1fr) minmax(500px, 600px);
    gap: 16px;
    align-items: start;
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
  }
  .wb-page--mep-dc .wb-learn-panel h2 {
    margin-bottom: 26px;
  }
  .wb-page--mep-dc .wb-learn-grid {
    flex: 0 1 auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 14px;
    min-height: 0;
  }
  .wb-page--mep-dc .wb-learn-item {
    flex: 0 0 auto;
    align-items: center;
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
    font-size: 1.48rem !important;
    line-height: 1.42 !important;
    font-weight: 900 !important;
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

  @media (max-width: 1024px) {
    .wb-page--mep-dc .wb-hero-grid {
      gap: 20px;
      grid-template-columns: 1fr;
    }
    .wb-page--mep-dc .wb-hero h1,
    .wb-page--mep-dc .wb-hero-copy .lead {
      max-width: none;
    }
    .wb-page--mep-dc .wb-content-inner {
      grid-template-columns: 1fr;
      gap: 28px;
    }
    .wb-page--mep-dc .wb-learn-panel {
      max-width: none;
      padding-right: 0;
    }
    .wb-page--mep-dc .wb-learn-grid {
      justify-content: flex-start;
      gap: 14px;
    }
    .wb-page--mep-dc .wb-learn-item {
      flex: none;
      align-items: flex-start;
    
    }
    .wb-page--mep-dc .wb-form-simple {
      position: static;
    }
    .whitepaper-detail-page.wb-page--mep-dc .wb-hero-actions .btn {
      padding: 10px 16px !important;
      font-size: clamp(13px, 1.6vw, 16px) !important;
      font-weight: 600 !important;
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
    .wb-page--mep-dc .wb-key-insight-section.wb-content,
    .wb-page--mep-dc .wb-key-insight-section.my-8 {
      margin-top: 0 !important;
      margin-bottom: 0 !important;
      padding-top: 8px !important;
      padding-bottom: 12px !important;
    }
    ${LEGACY_SHELL_HEADING_OVERRIDE} ${MEP_DC_PAGE} .wb-hero h1,
    ${LEGACY_SHELL_HEADING_OVERRIDE} ${MEP_DC_PAGE} .wb-hero h1 span,
    ${LEGACY_SHELL_HEADING_OVERRIDE} ${MEP_DC_PAGE} .wb-hero h1 strong {
      font-size: clamp(24px, 6.2vw, 30px) !important;
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
    ${LEGACY_SHELL_HEADING_OVERRIDE} ${MEP_DC_PAGE} .wb-key-insight-section h2,
    ${LEGACY_SHELL_HEADING_OVERRIDE} ${MEP_DC_PAGE} .wb-whofor-section h2,
    ${LEGACY_SHELL_HEADING_OVERRIDE} ${MEP_DC_PAGE} .wb-learn-panel h2,
    ${LEGACY_SHELL_HEADING_OVERRIDE} ${MEP_DC_PAGE} .wb-section h2,
    ${LEGACY_SHELL_HEADING_OVERRIDE} ${MEP_DC_PAGE} .wb-key-insight-section h2 span,
    ${LEGACY_SHELL_HEADING_OVERRIDE} ${MEP_DC_PAGE} .wb-whofor-section h2 span,
    ${LEGACY_SHELL_HEADING_OVERRIDE} ${MEP_DC_PAGE} .wb-learn-panel h2 span,
    ${LEGACY_SHELL_HEADING_OVERRIDE} ${MEP_DC_PAGE} .wb-section h2 span,
    ${LEGACY_SHELL_HEADING_OVERRIDE} ${MEP_DC_PAGE} .wb-key-insight-section h2 strong,
    ${LEGACY_SHELL_HEADING_OVERRIDE} ${MEP_DC_PAGE} .wb-whofor-section h2 strong,
    ${LEGACY_SHELL_HEADING_OVERRIDE} ${MEP_DC_PAGE} .wb-learn-panel h2 strong,
    ${LEGACY_SHELL_HEADING_OVERRIDE} ${MEP_DC_PAGE} .wb-section h2 strong {
      font-size: clamp(20px, 5.2vw, 26px) !important;
      line-height: 1.25 !important;
      margin-bottom: 14px !important;
      font-weight: 600 !important;
    }
    ${LEGACY_SHELL_HEADING_OVERRIDE} ${MEP_DC_PAGE} .wb-form-simple__intro h3,
    ${LEGACY_SHELL_HEADING_OVERRIDE} ${MEP_DC_PAGE} .wb-form-simple__intro h3 span,
    ${LEGACY_SHELL_HEADING_OVERRIDE} ${MEP_DC_PAGE} .wb-form-simple__intro h3 strong {
      font-size: clamp(15px, 3.8vw, 18px) !important;
      line-height: 1.3 !important;
      font-weight: 700 !important;
    }
    ${LEGACY_SHELL_HEADING_OVERRIDE} ${MEP_DC_PAGE} .wb-form-card h3,
    ${LEGACY_SHELL_HEADING_OVERRIDE} ${MEP_DC_PAGE} .wb-related-card h3,
    ${LEGACY_SHELL_HEADING_OVERRIDE} ${MEP_DC_PAGE} .wb-form-card h3 span,
    ${LEGACY_SHELL_HEADING_OVERRIDE} ${MEP_DC_PAGE} .wb-related-card h3 span,
    ${LEGACY_SHELL_HEADING_OVERRIDE} ${MEP_DC_PAGE} .wb-form-card h3 strong,
    ${LEGACY_SHELL_HEADING_OVERRIDE} ${MEP_DC_PAGE} .wb-related-card h3 strong {
      font-size: clamp(17px, 4.4vw, 20px) !important;
      line-height: 1.3 !important;
      font-weight: 600 !important;
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
      font-size: 1.2rem !important;
      margin-top: 12px !important;
      margin-bottom: 10px !important;
    }
    .wb-page--mep-dc .wb-key-item h5 {
      font-size: 0.78rem !important;
      line-height: 1.22 !important;
    }
    .wb-page--mep-dc .wb-key-item {
      padding: 12px 10px !important;
    }
    .wb-page--mep-dc .wb-whofor-title {
      font-size: 0.88rem !important;
      line-height: 1.25 !important;
    }
    .wb-page--mep-dc .wb-learn-item p {
      font-size: 15px !important;
      line-height: 1.32 !important;
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
    .whitepaper-detail-page.wb-page--mep-dc .wb-hero-actions-mobile .btn,
    .whitepaper-detail-page.wb-page--mep-dc .wb-hero-actions .btn {
      width: 100%;
      max-width: 100%;
      padding: 9px 12px !important;
      font-size: clamp(12px, 3.15vw, 14px) !important;
      font-weight: 600 !important;
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
