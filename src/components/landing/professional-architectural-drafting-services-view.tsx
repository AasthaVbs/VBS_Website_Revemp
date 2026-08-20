"use client";

import React, { useEffect, useRef, useState } from "react";
import { Modal, Image, Container, Navbar, Nav, Offcanvas } from "react-bootstrap";
import {
  Building2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleCheck,
  CloudUpload,
  Cpu,
  FileScan,
  FolderOpen,
  LayoutTemplate,
  Lock,
  Map,
  ScanLine,
  Scissors,
} from "lucide-react";

import { SiteFooter } from "@/components/sections/site-footer";
import { GetInTouchFormPanel } from "@/components/sections/get-in-touch/get-in-touch-form-panel";
import { BimLandingZohoFormSection } from "@/components/sections/cad-landing/bim-landing-zoho-form-section";
import { IndustriesSection } from "@/components/sections/industries-section";
import { FaqSection } from "@/components/sections/faq-section";
import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";
import { mepFaqs } from "@/constants/mep-engineers-content";
import {
  ensureNimbusBookingScript,
  openBookMeetingModal,
} from "@/utils/nimbus-booking";
import { scrollToPageSection } from "@/hooks/scrollToPageSection";

const Logo = "/vbs-logo.svg";

function AiFillYoutube({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      aria-hidden
    >
      <path d="M23.498 6.186a2.997 2.997 0 0 0-2.11-2.12C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.388.566A2.997 2.997 0 0 0 .502 6.186 31.2 31.2 0 0 0 0 12a31.2 31.2 0 0 0 .502 5.814 2.997 2.997 0 0 0 2.11 2.12C4.495 20.5 12 20.5 12 20.5s7.505 0 9.388-.566a2.997 2.997 0 0 0 2.11-2.12A31.2 31.2 0 0 0 24 12a31.2 31.2 0 0 0-.502-5.814zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
    </svg>
  );
}

const LuBuilding2 = Building2;
const LuChevronDown = ChevronDown;
const LuChevronLeft = ChevronLeft;
const LuChevronRight = ChevronRight;
const LuCircleCheck = CircleCheck;
const LuCpu = Cpu;
const LuFileScan = FileScan;
const LuFolderOpen = FolderOpen;
const LuLayoutTemplate = LayoutTemplate;
const LuLock = Lock;
const LuMap = Map;
const LuScanLine = ScanLine;
const LuScissors = Scissors;
const LuCloudUpload = CloudUpload;

const ARCH_PAGE_CSS = `
/* Smooth scroll when using header in-page links (hash targets) */
html {
  scroll-behavior: smooth;
}

/* Entire page shell: 1440px content, 18px L/R gutters (header + sections + footer) */
.arch-draft-lp-page {
  --vbs-page-max: 1440px;
  --vbs-page-gutter: 18px;
}
.arch-draft-lp-page .vbs-page-container,
.arch-draft-lp-page .vbs-redesign-page .vbs-page-container,
.arch-draft-lp-page .vbs-site-footer > .vbs-page-container,
.arch-draft-lp-page .vbs-site-footer .vbs-page-container.vbs-site-footer__container {
  max-width: 1440px !important;
  padding-left: 18px !important;
  padding-right: 18px !important;
  box-sizing: border-box !important;
}

/* LP header: logo scales on narrow viewports (header sits outside .arch-drafting-lp) */
.arch-draft-lp-header-anchor .navbar-brand img {
  max-width: min(294px, 70vw);
  height: auto;
}

/*
 * Do NOT add .large-navbar here â€” responsive.scss sets .large-navbar { display: none } below 992px.
 * This bar uses .arch-lp-navbar-main only so logo + hamburger stay visible on mobile.
 */
.arch-draft-lp-header-anchor nav.navbar.arch-lp-navbar-main {
  display: flex !important;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center !important;
  justify-content: space-between;
  width: 100%;
  min-height: 72px;
  background: #fff !important;
  border-bottom: 1px solid #eee !important;
  /* style.css may set .navbar { position: fixed } â€” keep this bar in normal/sticky document flow */
  position: relative !important;
  top: auto !important;
  left: auto !important;
}
@media (max-width: 991.98px) {
  .arch-draft-lp-header-anchor nav.navbar.arch-lp-navbar-main {
    flex-wrap: nowrap;
  }
}

/* Fixed header — sticky fails when ancestors use overflow clip/hidden (site + redesign wrappers) */
.arch-draft-lp-header-anchor {
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  right: 0 !important;
  width: 100% !important;
  z-index: 2000 !important;
  background: #fff !important;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
}
.arch-draft-lp-header-spacer {
  display: block;
  width: 100%;
  height: var(--arch-lp-header-height, 112px);
  flex-shrink: 0;
  pointer-events: none;
}
@media (max-width: 991.98px) {
  .arch-draft-lp-header-spacer {
    height: var(--arch-lp-header-height, 72px);
  }
}
.arch-draft-lp-header-anchor .arch-lp-header-topbar,
.arch-draft-lp-header-anchor .arch-lp-navbar-main,
.arch-draft-lp-header-anchor .arch-lp-navbar-main > .container {
  background: #fff !important;
}

.arch-draft-lp-header-anchor .container.arch-lp-header-container,
.arch-draft-lp-header-anchor .arch-lp-header-container {
  width: 100%;
  max-width: 1440px !important;
  margin-left: auto;
  margin-right: auto;
  padding-left: 18px !important;
  padding-right: 18px !important;
}

.arch-draft-lp-header-anchor .arch-lp-navbar-main > .container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding-top: 10px;
  padding-bottom: 10px;
}
@media (max-width: 991.98px) {
  .arch-draft-lp-header-anchor .arch-lp-navbar-main > .container {
    flex-wrap: nowrap;
  }
}
.arch-draft-lp-header-anchor .arch-lp-navbar-main .navbar-brand {
  flex: 1 1 auto;
  min-width: 0;
  margin-right: 0;
}
@media (min-width: 992px) {
  .arch-draft-lp-header-anchor .arch-lp-navbar-main > .container {
    justify-content: flex-start;
    flex-wrap: nowrap;
    align-items: center;
    gap: 0;
  }
  .arch-draft-lp-header-anchor .arch-lp-navbar-main .navbar-brand {
    flex: 0 0 auto;
    margin-right: 0;
  }
  .arch-draft-lp-header-anchor .navbar-brand img {
    max-width: min(250px, 18vw);
  }
  /* Desktop: nav+CTA group flush right; items packed together inside */
  .arch-draft-lp-header-anchor .arch-lp-navbar-main .arch-lp-offcanvas.offcanvas,
  .arch-draft-lp-header-anchor .arch-lp-navbar-main .arch-lp-offcanvas.offcanvas-lg,
  .arch-draft-lp-header-anchor #arch-lp-offcanvas-nav {
    display: flex !important;
    flex: 0 0 auto !important;
    min-width: 0 !important;
    width: auto !important;
    max-width: none !important;
    align-items: center !important;
    justify-content: flex-start !important;
    margin-left: auto !important;
    margin-right: 0 !important;
    background: transparent !important;
    border: 0 !important;
    box-shadow: none !important;
  }
  .arch-draft-lp-header-anchor .arch-lp-offcanvas .offcanvas-header {
    display: none !important;
  }
  .arch-draft-lp-header-anchor .arch-lp-offcanvas .offcanvas-body.arch-lp-offcanvas-body {
    flex: 0 0 auto !important;
    flex-direction: row !important;
    flex-wrap: nowrap !important;
    align-items: center !important;
    justify-content: flex-start !important;
    gap: clamp(16px, 1.6vw, 28px) !important;
    width: auto !important;
    max-width: none !important;
    min-width: 0;
    padding: 0 !important;
    margin: 0 !important;
  }
  .arch-draft-lp-header-anchor .arch-lp-nav {
    display: flex !important;
    flex: 0 0 auto !important;
    flex-wrap: nowrap !important;
    align-items: center !important;
    justify-content: flex-start !important;
    margin: 0 !important;
    margin-left: 0 !important;
    margin-right: 0 !important;
    gap: clamp(12px, 1.2vw, 22px) !important;
    min-width: 0;
  }
  .arch-draft-lp-header-anchor .arch-lp-nav .nav-link {
    white-space: nowrap !important;
    line-height: 1.2 !important;
    padding: 8px 0 !important;
    font-size: clamp(13px, 1vw, 15px) !important;
  }
  .arch-draft-lp-header-anchor .arch-lp-offcanvas-body .header-inquire-btn,
  .arch-draft-lp-header-anchor .arch-lp-offcanvas-body .vbs-header-book-cta,
  .arch-draft-lp-header-anchor .arch-lp-offcanvas-body .vbs-header-book-cta.primary-cta {
    margin-left: 0 !important;
    margin-right: 0 !important;
    flex-shrink: 0 !important;
    width: auto !important;
    min-width: 0;
    height: 44px !important;
    padding: 0 18px !important;
    white-space: nowrap !important;
  }
  .arch-draft-lp-header-anchor .arch-lp-offcanvas-body .header-inquire-btn {
    font-size: 13px !important;
    letter-spacing: 0.02em;
  }
}
.arch-draft-lp-header-anchor .arch-lp-nav-toggler {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 8px 10px;
  flex-shrink: 0;
  margin-right: 12px;
  margin-left: 0;
}
.arch-draft-lp-header-anchor .arch-lp-offcanvas.offcanvas {
  z-index: 1055;
}

.arch-draft-lp-header-anchor .arch-lp-nav .nav-link {
  font-size: 16px;
  font-weight: 600;
  color: #111 !important;
  padding: 12px 0 !important;
  border-bottom: 1px solid #f0f0f0;
}
.arch-draft-lp-header-anchor .arch-lp-nav .nav-link:hover,
.arch-draft-lp-header-anchor .arch-lp-nav .nav-link:focus {
  color: #d70416 !important;
}
@media (min-width: 992px) {
  .arch-draft-lp-header-anchor .arch-lp-nav .nav-link {
    margin-right: 0 !important;
    border-bottom: none;
    font-weight: 500;
  }
}

@media (max-width: 991.98px) {
  /* Offcanvas vertical menu + full-width CTA */
  .arch-draft-lp-header-anchor .arch-lp-offcanvas-body .header-inquire-btn,
  .arch-draft-lp-header-anchor .arch-lp-offcanvas-body .vbs-header-book-cta.primary-cta {
    width: 100% !important;
    margin-top: 8px;
    margin-left: 0 !important;
  }
  .arch-draft-lp-header-anchor .arch-lp-nav {
    margin-left: 0 !important;
  }
  .arch-drafting-lp section[id] {
    scroll-margin-top: calc(var(--arch-lp-header-height, 96px) + 8px);
  }
}

/* Match redesign Primary CTA blob animation inside LP reset */
.arch-drafting-lp .primary-cta {
  margin: 0 !important;
  padding: 0 20px !important;
  height: 52px !important;
  min-height: 52px !important;
  border: 1.5px solid #d70416 !important;
  border-radius: 10px !important;
  background: rgba(255, 255, 255, 0.1) !important;
  color: #d70416 !important;
  font-size: 16px !important;
  font-weight: 500 !important;
  line-height: 1 !important;
  text-transform: capitalize !important;
  backdrop-filter: blur(50px);
  overflow: hidden !important;
  isolation: isolate;
  box-shadow: none !important;
}
.arch-drafting-lp .primary-cta .primary-cta-label {
  margin: 0 !important;
  padding: 0 !important;
  position: relative;
  z-index: 10;
}
.arch-drafting-lp .primary-cta .primary-cta-blobs,
.arch-drafting-lp .primary-cta .primary-cta-blob {
  margin: 0 !important;
  padding: 0 !important;
}
.arch-drafting-lp .primary-cta--highlighted {
  background: #d70416 !important;
}
.arch-drafting-lp .primary-cta--highlighted .primary-cta-label {
  color: #fff !important;
}
.arch-drafting-lp .primary-cta--highlighted:hover .primary-cta-label,
.arch-drafting-lp .primary-cta--highlighted:focus-visible .primary-cta-label {
  color: #d70416 !important;
}
.arch-drafting-lp .hero-lets-talk.primary-cta,
.arch-drafting-lp .services-offer-cta.primary-cta,
.arch-drafting-lp .case-studies-cta.primary-cta,
.arch-drafting-lp .why-stay-cta.primary-cta {
  background: rgba(255, 255, 255, 0.1) !important;
  color: #d70416 !important;
  transition: none;
}
.arch-drafting-lp .hero-lets-talk.primary-cta:hover,
.arch-drafting-lp .services-offer-cta.primary-cta:hover,
.arch-drafting-lp .case-studies-cta.primary-cta:hover,
.arch-drafting-lp .why-stay-cta.primary-cta:hover,
.arch-drafting-lp .hero-lets-talk.primary-cta:focus-visible,
.arch-drafting-lp .services-offer-cta.primary-cta:focus-visible,
.arch-drafting-lp .case-studies-cta.primary-cta:focus-visible,
.arch-drafting-lp .why-stay-cta.primary-cta:focus-visible {
  background: rgba(255, 255, 255, 0.1) !important;
  color: #fff !important;
}

.arch-drafting-lp *, .arch-drafting-lp *::before, .arch-drafting-lp *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* Mid-page Zoho block — same component/styles as BIM USA; no CAD header offset */
.arch-drafting-want-to-know.vbs-redesign-page.cad-drafting-landing-page {
  padding-top: 0 !important;
  overflow-x: clip;
  background: #fff;
}
.arch-drafting-want-to-know .bim-landing-zoho-form__heading-lead {
  display: block;
}
/* iPad / tablet: center title + contact rows under heading */
@media (max-width: 1023.98px) {
  .arch-drafting-want-to-know .bim-landing-zoho-form__aside {
    align-items: center !important;
    text-align: center !important;
  }
  .arch-drafting-want-to-know .bim-landing-zoho-form__heading {
    max-width: 100% !important;
    margin-left: auto !important;
    margin-right: auto !important;
    text-align: center !important;
  }
  .arch-drafting-want-to-know .bim-landing-zoho-form__contacts {
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    width: 100% !important;
    max-width: 100% !important;
    margin-left: 0 !important;
    margin-right: 0 !important;
    padding-left: 0 !important;
    list-style: none !important;
  }
  .arch-drafting-want-to-know .bim-landing-zoho-form__contacts > li {
    display: flex !important;
    justify-content: center !important;
    width: 100% !important;
  }
  .arch-drafting-want-to-know .bim-landing-zoho-form__contact {
    display: inline-flex !important;
    justify-content: flex-start !important;
    width: max-content !important;
    max-width: 100% !important;
    text-align: left !important;
  }
  .arch-drafting-want-to-know .bim-landing-zoho-form__socials {
    justify-content: center !important;
    width: 100% !important;
  }
}

.arch-drafting-industries-host,
.arch-drafting-faq-host,
.arch-drafting-contact-host,
.arch-drafting-want-to-know {
  --vbs-page-max: 1440px;
}

/* Industries host — homepage IndustriesSection (outside LP reset) */
.arch-drafting-industries-host.vbs-redesign-page {
  padding-top: 0 !important;
  background: #fafafa;
  scroll-margin-top: calc(var(--arch-lp-header-height, 112px) + 12px);
}
.arch-drafting-industries-host .industries-marquee-track {
  padding-bottom: 4px;
}

/* FAQ host — homepage FaqSection (outside LP reset) */
.arch-drafting-faq-host.vbs-redesign-page {
  padding-top: 0 !important;
  background: #fff;
  scroll-margin-top: calc(var(--arch-lp-header-height, 112px) + 12px);
}
.arch-drafting-faq-host .vbs-home-faq,
.arch-drafting-faq-host #faq {
  scroll-margin-top: calc(var(--arch-lp-header-height, 112px) + 12px);
}
@media (max-width: 767.98px) {
  .arch-drafting-faq-host .vbs-home-faq,
  .arch-drafting-faq-host #faq.vbs-home-faq,
  .arch-drafting-faq-host section.vbs-home-faq {
    padding-top: 32px !important;
  }
}

/* Contact Us — Figma 2991:50092 (layout matches site Contact Us form) */
.arch-drafting-contact-host.vbs-redesign-page {
  padding-top: 0 !important;
  background: #fafafa;
  overflow-x: clip;
}
.arch-drafting-contact {
  padding: 80px 0 48px;
  background: #fafafa;
  scroll-margin-top: calc(var(--arch-lp-header-height, 112px) + 12px);
}
.arch-drafting-contact__wrap {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 24px;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding-left: 18px;
  padding-right: 18px;
  box-sizing: border-box;
}
.arch-drafting-contact-header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  width: 100%;
  max-width: none;
}
.arch-drafting-contact-header-top {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  width: 100%;
}
.arch-drafting-contact-tag {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 6px 12px;
  background: rgba(34, 153, 214, 0.1);
  border: 1px solid #2299d6;
  border-radius: 10px;
  color: #2299d6;
  font-size: 13px;
  font-weight: 400;
  text-transform: capitalize;
}
.arch-drafting-contact-title {
  margin: 0;
  color: #111;
  font-size: clamp(32px, 4vw, 48px);
  font-weight: 500;
  line-height: 1.15;
  text-transform: capitalize;
}
.arch-drafting-contact-title .accent {
  color: #d70416;
  font-weight: 300;
}
.arch-drafting-contact-sub {
  margin: 0;
  max-width: 650px;
  color: #808080;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
}
.arch-drafting-contact-body {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.2fr);
  align-items: start;
  gap: 40px;
  width: 100%;
}
.arch-drafting-contact-copy {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  min-width: 0;
  width: 100%;
}
.arch-drafting-contact-benefits {
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  max-width: none;
  min-width: 0;
}
.arch-drafting-contact-benefit {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 16px;
  width: 100%;
}
.arch-drafting-contact-benefit-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  padding: 7px;
  background: #fff;
  border: 1px solid #cbcccd;
  border-radius: 7px;
  box-sizing: border-box;
  flex-shrink: 0;
}
.arch-drafting-contact-benefit-icon img {
  display: block;
  width: 36px;
  height: 36px;
  object-fit: contain;
}
.arch-drafting-contact-benefit-copy {
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
  flex: 1 1 auto;
}
.arch-drafting-contact-benefit-copy h3 {
  margin: 0;
  color: #111;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.3;
  text-transform: capitalize;
}
.arch-drafting-contact-benefit-copy p {
  margin: 0;
  color: #808080;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
}
.arch-drafting-contact-form {
  min-width: 0;
  width: 100%;
  max-width: none;
  align-self: start;
  margin-top: 0;
  padding: 0 !important;
  background: transparent !important;
}
.arch-drafting-contact-form.vbs-get-in-touch-section {
  --vbs-get-in-touch-form-width: 100%;
}
.arch-drafting-contact-form .vbs-get-in-touch__tabs {
  padding-left: 0;
}
.arch-drafting-contact-form .vbs-get-in-touch__panel {
  width: 100%;
}

@media (max-width: 991.98px) {
  .arch-drafting-contact {
    padding: 56px 0 40px;
  }
  .arch-drafting-contact__wrap {
    gap: 20px;
  }
  .arch-drafting-contact-body {
    display: flex;
    flex-direction: column;
    gap: 36px;
  }
  .arch-drafting-contact-copy,
  .arch-drafting-contact-form {
    max-width: 100%;
    width: 100%;
  }
}

/* Tools We Use — Figma 2991:49870 */
.arch-drafting-tools {
  padding: 100px 0;
  background: #fff;
  scroll-margin-top: calc(var(--arch-lp-header-height, 112px) + 12px);
}
.arch-drafting-tools .wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding-left: 18px;
  padding-right: 18px;
  box-sizing: border-box;
}
.arch-drafting-tools-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
  text-align: center;
}
.arch-drafting-tools-header-top {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}
.arch-drafting-tools-tag {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 6px 12px;
  background: rgba(34, 153, 214, 0.1);
  border: 1px solid #2299d6;
  border-radius: 10px;
  color: #2299d6;
  font-size: 13px;
  font-weight: 400;
  text-transform: capitalize;
}
.arch-drafting-tools-title {
  margin: 0;
  max-width: none;
  width: 100%;
  color: #111;
  font-size: clamp(32px, 4vw, 48px);
  font-weight: 500;
  line-height: 1.15;
  text-transform: capitalize;
  text-align: center;
}
.arch-drafting-tools-title .accent {
  display: inline;
  color: #d70416;
  font-weight: 300;
}
.arch-drafting-tools-sub {
  margin: 0;
  max-width: none;
  width: 100%;
  color: #808080;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
}
.arch-drafting-tools-grid {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
}
.arch-drafting-tools-grid-row {
  display: flex;
  align-items: stretch;
  justify-content: center;
  gap: 12px;
  width: 100%;
}
.arch-drafting-tools-card {
  flex: 1 1 0;
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  padding: 14px;
  background: #fff;
  border: 1px solid #cbcccd;
  border-radius: 10px;
  overflow: hidden;
}
.arch-drafting-tools-card-canvas {
  position: relative;
  width: 100%;
  aspect-ratio: 1340 / 520;
  height: auto;
  min-height: 180px;
  overflow: hidden;
  border-radius: 10px;
  background: #fafafa;
  flex-shrink: 0;
}
.arch-drafting-tools-card-canvas img {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
}
.arch-drafting-tools-grid-row:nth-child(2) .arch-drafting-tools-card-canvas {
  aspect-ratio: 16 / 11;
  min-height: 260px;
}
.arch-drafting-tools-grid-row:nth-child(2) .arch-drafting-tools-card-canvas img {
  object-fit: cover;
  object-position: center;
}
.arch-drafting-tools-card-title {
  margin: 0;
  color: #111;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.25;
  width: 100%;
}

@media (max-width: 1199.98px) {
  .arch-drafting-tools-grid-row {
    flex-wrap: wrap;
  }
  .arch-drafting-tools-card {
    flex: 1 1 calc(50% - 6px);
    min-width: min(100%, 280px);
  }
}

@media (max-width: 991.98px) {
  .arch-drafting-tools {
    padding: 64px 0;
  }
  .arch-drafting-tools .wrap {
    gap: 40px;
  }
  .arch-drafting-tools-grid-row {
    flex-direction: column;
    flex-wrap: nowrap;
  }
  .arch-drafting-tools-card {
    flex: 0 0 auto;
    width: 100%;
    max-width: 640px;
    margin-left: auto;
    margin-right: auto;
    padding: 16px;
  }
  .arch-drafting-tools-card-canvas {
    min-height: 180px;
    aspect-ratio: 2.2 / 1;
  }
  .arch-drafting-tools-grid-row:nth-child(2) .arch-drafting-tools-card-canvas {
    min-height: 220px;
    aspect-ratio: 16 / 10;
  }
  .arch-drafting-tools-card-canvas img {
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;
  }
  .arch-drafting-tools-card-title {
    font-size: 20px !important;
    text-align: center;
  }
}

@media (max-width: 575.98px) {
  .arch-drafting-tools-card {
    padding: 14px;
    gap: 12px;
    max-width: 100%;
  }
  .arch-drafting-tools-card-canvas {
    min-height: 160px;
    aspect-ratio: 2.1 / 1;
  }
  .arch-drafting-tools-card-canvas img {
    object-fit: cover;
    object-position: center;
  }
  .arch-drafting-tools-card-title {
    font-size: 18px !important;
    text-align: center;
  }
}

/* Client Success Stories — Figma 2991:50010 */
.arch-drafting-testimonials {
  padding: 56px 0 100px;
  background: #fff;
  overflow: hidden;
  scroll-margin-top: calc(var(--arch-lp-header-height, 112px) + 12px);
}
.arch-drafting-testimonials .wrap {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 60px;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding-left: 18px;
  padding-right: 18px;
  box-sizing: border-box;
}
.arch-drafting-stories-header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  width: 100%;
}
.arch-drafting-stories-header-top {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
}
.arch-drafting-stories-tag {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 6px 12px;
  background: rgba(34, 153, 214, 0.1);
  border: 1px solid #2299d6;
  border-radius: 10px;
  color: #2299d6;
  font-size: 13px;
  font-weight: 400;
  text-transform: capitalize;
}
.arch-drafting-stories-title {
  margin: 0;
  color: #111;
  font-size: clamp(32px, 4vw, 48px);
  font-weight: 500;
  line-height: 1.15;
  text-transform: capitalize;
}
.arch-drafting-stories-title .accent {
  color: #d70416;
  font-weight: 300;
}
.arch-drafting-stories-sub {
  margin: 0;
  max-width: 523px;
  color: #808080;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-transform: capitalize;
}
.arch-drafting-stories-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  width: 100%;
}
.arch-drafting-story-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  padding: 20px 12px;
  background: #fff;
  border: 1px solid #cbcccd;
  border-radius: 18px;
  min-width: 0;
  height: 100%;
  box-sizing: border-box;
}
.arch-drafting-story-card-head {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
  width: 100%;
}
.arch-drafting-story-avatar {
  position: relative;
  width: 60px;
  height: 60px;
  overflow: hidden;
  border-radius: 10px;
  background: #f2f2f2;
  flex-shrink: 0;
}
.arch-drafting-story-avatar img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.arch-drafting-story-avatar--cover img {
  object-fit: cover;
}
.arch-drafting-story-meta {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 100%;
}
.arch-drafting-story-name {
  margin: 0;
  color: #111;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.3;
}
.arch-drafting-story-role {
  margin: 0;
  color: #808080;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.3;
}
.arch-drafting-story-quote {
  margin: 0;
  flex: 1 1 auto;
  color: #808080;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
}
.arch-drafting-story-watch {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 0;
  border: 0;
  background: none;
  color: #2299d6;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.2;
  cursor: pointer;
  text-align: left;
}
.arch-drafting-story-watch:hover,
.arch-drafting-story-watch:focus-visible {
  color: #1a7aab;
  outline: none;
}
.arch-drafting-story-watch img {
  display: block;
  width: 24px;
  height: 24px;
  transform: rotate(-90deg);
  flex-shrink: 0;
}

@media (max-width: 991.98px) {
  .arch-drafting-testimonials {
    padding: 64px 0;
  }
  .arch-drafting-testimonials .wrap {
    gap: 40px;
  }
  .arch-drafting-stories-grid {
    grid-template-columns: 1fr;
  }
}

.arch-drafting-lp {
  --red: #D70416;
  --black: #000;
  --white: #fff;
  --gray-bg: #F7F7F7;
  --gray-light: #F0F0F0;
  --gray-mid: #E2E2E2;
  --gray-text: #555;
  --gray-sub: #888;
  --font-inter: "Inter", "Inter Fallback", system-ui, sans-serif;
  font-family: var(--font-inter), Inter, system-ui, sans-serif;
  background: #fff;
  color: #000;
  font-size: 16px;
  line-height: 1.75;
  overflow-x: hidden;
}

/* Section chips — match Industries SectionTag exactly */
.arch-drafting-lp .hero-tag,
.arch-drafting-lp .services-offer-tag,
.arch-drafting-lp .case-studies-tag,
.arch-drafting-lp .engage-tag,
.arch-drafting-lp .why-stay-tag,
.arch-drafting-tools-tag,
.arch-drafting-stories-tag,
.arch-drafting-contact-tag,
.arch-drafting-industries-host .text-tag,
.arch-drafting-faq-host .text-tag,
.arch-drafting-want-to-know .text-tag {
  display: inline-flex !important;
  width: fit-content !important;
  max-width: max-content !important;
  align-items: center !important;
  justify-content: center !important;
  align-self: flex-start;
  gap: 10px !important;
  padding: 6px 12px !important;
  margin: 0 !important;
  background: rgba(34, 153, 214, 0.1) !important;
  border: none !important;
  border-radius: 10px !important;
  outline: none !important;
  box-shadow: none !important;
  color: #2299d6 !important;
  font-family: var(--font-inter), Inter, system-ui, sans-serif !important;
  font-size: 13px !important;
  font-weight: 400 !important;
  line-height: 1.2 !important;
  letter-spacing: normal !important;
  text-transform: capitalize !important;
  white-space: nowrap !important;
  box-sizing: border-box !important;
  overflow: hidden !important;
}
.arch-drafting-tools-header .arch-drafting-tools-tag,
.arch-drafting-lp .services-offer-header-top .services-offer-tag {
  align-self: center !important;
}
.arch-drafting-lp .case-studies-header-top .case-studies-tag,
.arch-drafting-lp .why-stay-header-top .why-stay-tag,
.arch-drafting-stories-header .arch-drafting-stories-tag {
  align-self: flex-start !important;
}

.arch-drafting-lp .wrap {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding-left: 18px;
  padding-right: 18px;
  box-sizing: border-box;
}

/* Reduce overall vertical gap between sections */
.arch-drafting-lp section:not(#hero):not(.trust-strip):not(#case-studies):not(#how):not(#why) {
  padding-top: clamp(44px, 5vw, 72px) !important;
  padding-bottom: clamp(44px, 5vw, 72px) !important;
}

.arch-drafting-lp .section-label {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--red);
  display: block;
  margin-bottom: 14px;
}

.arch-drafting-lp .red-line {
  display: block;
  width: 44px;
  height: 3px;
  background: var(--red);
  margin-bottom: 22px;
}

.arch-drafting-lp .section-heading {
  font-size: 48px;
  font-weight: 600;
  line-height: 1.1;
  color: #000;
}

.arch-drafting-lp .section-heading span {
  color: var(--red);
}

.arch-drafting-lp .section-sub {
  font-size: 17px;
  color: var(--gray-text);
  line-height: 1.75;
}

.arch-drafting-lp .btn-red {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--red);
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  padding: 14px 30px;
  border-radius: 100px;
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.2s, transform 0.15s;
}

.arch-drafting-lp .btn-red:hover {
  background: #b8000f;
  transform: translateY(-1px);
}

.arch-drafting-lp .btn-outline {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #fff;
  color: #000;
  font-size: 15px;
  font-weight: 600;
  padding: 13px 28px;
  border-radius: 100px;
  border: 1.5px solid #ccc;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s;
}

.arch-drafting-lp .btn-outline:hover {
  border-color: var(--red);
  color: var(--red);
}

/* Scroll reveal (matches HTML .rv / .rl / .rr timing) */
.arch-drafting-lp .reveal {
  opacity: 0;
  transform: translateY(22px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.arch-drafting-lp .reveal.visible {
  opacity: 1;
  transform: none;
}
.arch-drafting-lp .reveal-left {
  opacity: 0;
  transform: translateX(-22px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.arch-drafting-lp .reveal-left.visible {
  opacity: 1;
  transform: none;
}
.arch-drafting-lp .reveal-right {
  opacity: 0;
  transform: translateX(22px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.arch-drafting-lp .reveal-right.visible {
  opacity: 1;
  transform: none;
}

.arch-drafting-lp section[id] {
  scroll-margin-top: calc(var(--arch-lp-header-height, 112px) + 12px);
}

/* All headings on this LP — medium weight */
.arch-drafting-lp h1,
.arch-drafting-lp h2,
.arch-drafting-lp h3,
.arch-drafting-lp h4,
.arch-drafting-lp h5,
.arch-drafting-lp h6,
.arch-drafting-tools h1,
.arch-drafting-tools h2,
.arch-drafting-tools h3,
.arch-drafting-tools h4,
.arch-drafting-testimonials h1,
.arch-drafting-testimonials h2,
.arch-drafting-testimonials h3,
.arch-drafting-testimonials h4,
.arch-drafting-contact h1,
.arch-drafting-contact h2,
.arch-drafting-contact h3,
.arch-drafting-contact h4,
.arch-drafting-industries-host h1,
.arch-drafting-industries-host h2,
.arch-drafting-industries-host h3,
.arch-drafting-industries-host h4,
.arch-drafting-faq-host h1,
.arch-drafting-faq-host h2,
.arch-drafting-faq-host h3,
.arch-drafting-faq-host h4,
.arch-drafting-want-to-know h1,
.arch-drafting-want-to-know h2,
.arch-drafting-want-to-know h3,
.arch-drafting-want-to-know h4 {
  font-weight: 500 !important;
}

/* Mobile/tablet headings — match homepage redesign scale */
@media (max-width: 1023.98px) {
  .arch-drafting-lp h1,
  .arch-drafting-lp .hero-h1,
  .arch-drafting-tools h1,
  .arch-drafting-testimonials h1,
  .arch-drafting-contact h1,
  .arch-drafting-industries-host h1,
  .arch-drafting-faq-host h1,
  .arch-drafting-want-to-know h1 {
    font-size: clamp(2rem, 8vw, 3.75rem) !important;
    line-height: 1.1 !important;
  }
  .arch-drafting-lp h2,
  .arch-drafting-lp .case-studies-title,
  .arch-drafting-lp .services-offer-title,
  .arch-drafting-lp .engage-title,
  .arch-drafting-lp .why-stay-title,
  .arch-drafting-lp .arch-portfolio-h2,
  .arch-drafting-tools h2,
  .arch-drafting-tools-title,
  .arch-drafting-testimonials h2,
  .arch-drafting-stories-title,
  .arch-drafting-contact h2,
  .arch-drafting-contact-title,
  .arch-drafting-industries-host h2,
  .arch-drafting-faq-host h2,
  .arch-drafting-want-to-know h2,
  .arch-drafting-want-to-know .bim-landing-zoho-form__heading {
    font-size: clamp(1.75rem, 6.5vw, 3rem) !important;
    line-height: 1.2 !important;
  }
  .arch-drafting-lp h3,
  .arch-drafting-tools h3,
  .arch-drafting-testimonials h3,
  .arch-drafting-contact h3,
  .arch-drafting-industries-host h3,
  .arch-drafting-faq-host h3,
  .arch-drafting-want-to-know h3 {
    font-size: 20px !important;
    line-height: 1.35 !important;
  }
}
@media (max-width: 479.98px) {
  .arch-drafting-lp h1,
  .arch-drafting-lp .hero-h1 {
    font-size: clamp(28px, 9vw, 36px) !important;
    line-height: 1.15 !important;
  }
  .arch-drafting-lp h2,
  .arch-drafting-lp .case-studies-title,
  .arch-drafting-lp .services-offer-title,
  .arch-drafting-lp .engage-title,
  .arch-drafting-lp .why-stay-title,
  .arch-drafting-lp .arch-portfolio-h2,
  .arch-drafting-tools h2,
  .arch-drafting-tools-title,
  .arch-drafting-testimonials h2,
  .arch-drafting-stories-title,
  .arch-drafting-contact h2,
  .arch-drafting-contact-title,
  .arch-drafting-industries-host h2,
  .arch-drafting-faq-host h2,
  .arch-drafting-want-to-know h2,
  .arch-drafting-want-to-know .bim-landing-zoho-form__heading {
    font-size: clamp(26px, 8vw, 32px) !important;
    line-height: 1.15 !important;
  }
}

/* Smaller desktops / laptops (<1440px) — same scale as homepage */
@media (min-width: 768px) and (max-width: 1439.98px) {
  .arch-draft-lp-page h1,
  .arch-draft-lp-page h1 span,
  .arch-drafting-lp h1,
  .arch-drafting-lp .hero-h1,
  .arch-drafting-lp .hero-h1 span,
  .arch-drafting-tools h1,
  .arch-drafting-testimonials h1,
  .arch-drafting-contact h1,
  .arch-drafting-industries-host h1,
  .arch-drafting-faq-host h1,
  .arch-drafting-want-to-know h1 {
    font-size: 54px !important;
    line-height: 1.15 !important;
  }
  .arch-draft-lp-page h2,
  .arch-draft-lp-page h2 span,
  .arch-drafting-lp h2,
  .arch-drafting-lp h2 span,
  .arch-drafting-lp .case-studies-title,
  .arch-drafting-lp .case-studies-title .accent,
  .arch-drafting-lp .services-offer-title,
  .arch-drafting-lp .services-offer-title .accent,
  .arch-drafting-lp .engage-title,
  .arch-drafting-lp .engage-title .accent,
  .arch-drafting-lp .why-stay-title,
  .arch-drafting-lp .why-stay-title .accent,
  .arch-drafting-lp .arch-portfolio-h2,
  .arch-drafting-lp .section-heading,
  .arch-drafting-tools h2,
  .arch-drafting-tools-title,
  .arch-drafting-tools-title .accent,
  .arch-drafting-testimonials h2,
  .arch-drafting-stories-title,
  .arch-drafting-stories-title .accent,
  .arch-drafting-contact h2,
  .arch-drafting-contact-title,
  .arch-drafting-contact-title .accent,
  .arch-drafting-industries-host h2,
  .arch-drafting-faq-host h2,
  .arch-drafting-want-to-know h2,
  .arch-drafting-want-to-know .bim-landing-zoho-form__heading {
    font-size: 40px !important;
    line-height: 1.15 !important;
  }
  .arch-draft-lp-page h3,
  .arch-draft-lp-page h3 span,
  .arch-drafting-lp h3,
  .arch-drafting-lp .services-offer-copy h3,
  .arch-drafting-lp .engage-card-title,
  .arch-drafting-lp .why-stay-card-copy h3,
  .arch-drafting-tools h3,
  .arch-drafting-tools-card-title,
  .arch-drafting-testimonials h3,
  .arch-drafting-story-name,
  .arch-drafting-contact h3,
  .arch-drafting-industries-host h3,
  .arch-drafting-faq-host h3,
  .arch-drafting-want-to-know h3 {
    font-size: 20px !important;
    line-height: 1.3 !important;
  }
  .arch-draft-lp-page h4,
  .arch-drafting-lp h4,
  .arch-drafting-tools h4,
  .arch-drafting-testimonials h4,
  .arch-drafting-contact h4,
  .arch-drafting-industries-host h4,
  .arch-drafting-faq-host h4,
  .arch-drafting-want-to-know h4 {
    font-size: 18px !important;
    line-height: 1.35 !important;
  }
  .arch-drafting-lp .engage-feature h4,
  .arch-drafting-lp .engage-best h4,
  .arch-drafting-lp .case-study-block h4 {
    font-size: 16px !important;
    line-height: 24px !important;
  }
}

/* Hero — tighter gap, wider copy, homepage Inter type */
.arch-drafting-lp #hero {
  padding-top: 40px;
  padding-bottom: 60px;
  margin-top: 24px;
  padding-left: 0;
  padding-right: 0;
  overflow: hidden;
}
@media (min-width: 1400px) {
  .arch-drafting-lp #hero {
    padding-top: 48px;
    margin-top: 32px;
  }
}
@media (max-width: 1199.98px) {
  .arch-drafting-lp #hero {
    padding-top: 28px;
    margin-top: 16px;
  }
}
.arch-drafting-lp #hero > .wrap {
  padding-bottom: 0;
}
.arch-drafting-lp .hero-grid {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  overflow: visible;
}
.arch-drafting-lp .hero-copy {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  flex: 1 1 0;
  max-width: 560px;
  min-width: 0;
  position: relative;
  z-index: 2;
  font-family: var(--font-inter), Inter, system-ui, sans-serif;
}
.arch-drafting-lp .hero-headline-block {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  width: 100%;
}
.arch-drafting-lp .hero-tag {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 6px 12px;
  background: rgba(34, 153, 214, 0.1);
  border: 1px solid #2299d6;
  border-radius: 10px;
  color: #2299d6;
  font-family: var(--font-inter), Inter, system-ui, sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: normal;
  text-transform: capitalize;
  white-space: nowrap;
}
.arch-drafting-lp .hero-h1 {
  margin: 0;
  width: 100%;
  max-width: 560px;
  color: #111111;
  font-family: var(--font-inter), Inter, system-ui, sans-serif;
  font-size: 54px;
  font-weight: 500 !important;
  line-height: 1.15;
  letter-spacing: 0;
  text-transform: capitalize;
  word-break: break-word;
  overflow-wrap: break-word;
}
.arch-drafting-lp .hero-h1 .hero-h1-line2 {
  display: inline;
  white-space: normal;
}
.arch-drafting-lp .hero-h1 .hero-h1-accent {
  color: #d70416;
  font-weight: 300 !important;
  white-space: nowrap;
}
.arch-drafting-lp .hero-p {
  margin: 0;
  width: 100%;
  max-width: 560px;
  color: #808080;
  font-family: var(--font-inter), Inter, system-ui, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-transform: capitalize;
  word-break: break-word;
}
.arch-drafting-lp .hero-lets-talk {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 16px 20px;
  background: rgba(255, 255, 255, 0.1);
  border: 1.5px solid #d70416;
  border-radius: 10px;
  color: #d70416;
  font-family: var(--font-inter), Inter, system-ui, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 1;
  text-transform: capitalize;
  cursor: pointer;
  backdrop-filter: blur(50px);
  transition: background 0.2s ease, color 0.2s ease;
}
.arch-drafting-lp .hero-lets-talk:hover {
  background: #d70416;
  color: #fff;
}
.arch-drafting-lp .hero-visual {
  position: relative;
  z-index: 1;
  flex: 0 0 600px;
  max-width: 600px;
  width: 600px;
  min-width: 0;
  margin: 0;
}
.arch-drafting-lp .hero-media {
  position: relative;
  width: 100%;
  aspect-ratio: 782 / 530;
  overflow: hidden;
  border-radius: 10px;
  background: #f3f4f6;
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.15);
}
.arch-drafting-lp .hero-media img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}
.arch-drafting-lp .hero-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 44px;
  padding-top: 28px;
  border-top: 1px solid var(--gray-mid);
}
.arch-drafting-lp .stat-item {
  padding: 0 18px 0 0;
}
.arch-drafting-lp .stat-item + .stat-item {
  border-left: 1px solid var(--gray-mid);
  padding-left: 18px;
}
.arch-drafting-lp .stat-num {
  font-size: 32px;
  font-weight: 600;
  letter-spacing: -0.02em;
}
.arch-drafting-lp .stat-num span {
  color: var(--red);
}
.arch-drafting-lp .stat-label {
  font-size: 13px;
  color: var(--gray-sub);
  margin-top: 2px;
}

@media (max-width: 1199.98px) {
  .arch-drafting-lp .hero-visual {
    flex: 0 1 52%;
    width: auto;
    max-width: min(600px, 52%);
  }
  .arch-drafting-lp .hero-copy {
    max-width: 48%;
  }
  .arch-drafting-lp .hero-h1 {
    font-size: clamp(34px, 3.8vw, 44px);
  }
}

@media (max-width: 991.98px) {
  .arch-drafting-lp #hero {
    padding-top: clamp(20px, 4vw, 32px);
    padding-bottom: clamp(28px, 5vw, 40px);
    margin-top: 12px;
  }
  .arch-drafting-lp .hero-h1 br {
    display: block !important;
  }
  .arch-drafting-lp .hero-h1 .hero-h1-line2 {
    white-space: normal;
    display: inline;
  }
  .arch-drafting-lp .hero-h1 .hero-h1-accent {
    white-space: normal;
  }
  .arch-drafting-lp .hero-grid {
    flex-direction: column;
    align-items: stretch;
    gap: 28px;
  }
  .arch-drafting-lp .hero-copy {
    flex: none;
    max-width: none;
  }
  .arch-drafting-lp .hero-visual {
    flex: none;
    width: 100%;
    max-width: none;
  }
  .arch-drafting-lp .hero-h1 {
    max-width: 100%;
  }
}

/* Mobile hero — center chip/title/desc, CTA above image */
@media (max-width: 767.98px) {
  .arch-drafting-lp .hero-grid {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0;
  }
  .arch-drafting-lp .hero-copy {
    display: contents;
  }
  .arch-drafting-lp .hero-headline-block {
    order: 1;
    align-items: center;
    text-align: center;
    width: 100%;
    gap: 10px;
    margin-bottom: 10px;
  }
  .arch-drafting-lp .hero-tag {
    align-self: center;
    margin-left: auto;
    margin-right: auto;
  }
  .arch-drafting-lp .hero-h1,
  .arch-drafting-lp .hero-h1 .hero-h1-line2,
  .arch-drafting-lp .hero-h1 .hero-h1-accent {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    font-size: clamp(32px, 8.5vw, 40px) !important;
    line-height: 1.05 !important;
  }
  .arch-drafting-lp .hero-p {
    order: 2;
    text-align: center;
    margin: 0 auto 20px;
    max-width: 36em;
    font-size: 15px;
    line-height: 22px;
  }
  .arch-drafting-lp .hero-lets-talk,
  .arch-drafting-lp .hero-copy .hero-lets-talk.primary-cta,
  .arch-drafting-lp #hero .hero-lets-talk {
    order: 3;
    align-self: center;
    margin: 0 auto 20px !important;
  }
  .arch-drafting-lp .hero-visual {
    order: 4;
    width: 100%;
    max-width: 100%;
  }
}

/* Trust strip — Figma 2991:49195 */
.arch-drafting-lp .trust-strip {
  position: relative;
  z-index: 1;
  width: 100%;
  margin: 0;
  padding: 60px 0 !important;
  background: #fff;
  border: none;
}
.arch-drafting-lp .trust-strip > .wrap {
  width: 100% !important;
  max-width: 1440px !important;
  margin-left: auto !important;
  margin-right: auto !important;
  padding-left: 18px !important;
  padding-right: 18px !important;
  box-sizing: border-box !important;
}
.arch-drafting-lp .trust-strip-inner {
  width: 100% !important;
  max-width: none !important;
  margin: 0 !important;
  padding: 0 !important;
  display: flex;
  align-items: stretch;
  gap: 24px;
  flex-wrap: nowrap;
  justify-content: flex-start;
  box-sizing: border-box !important;
}
.arch-drafting-lp .trust-strip .ts-item {
  flex: 1 1 0;
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 7px;
  padding: 0;
  text-align: center;
  position: relative;
  background: transparent;
  border-radius: 0;
  border: none;
  box-shadow: none;
  transition: none;
}
.arch-drafting-lp .trust-strip .ts-item + .ts-item {
  border-left: 1px solid #e8e8e8;
}
.arch-drafting-lp .trust-strip .ts-item:hover {
  transform: none;
  box-shadow: none;
}
.arch-drafting-lp .trust-strip .ts-num {
  font-family: inherit;
  font-size: 36px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 1.2;
  text-shadow: none;
  transform: none;
  color: #d70416;
}
.arch-drafting-lp .trust-strip .ts-num.stats-count {
  font-variant-numeric: tabular-nums;
}
.arch-drafting-lp .trust-strip .ts-label {
  width: 100%;
  max-width: none;
  margin: 0 auto;
  font-size: 16px;
  color: #808080;
  font-weight: 400;
  line-height: 1.35;
  text-transform: none;
  letter-spacing: 0;
  opacity: 1;
}

@media (max-width: 900px) {
  .arch-drafting-lp .trust-strip .ts-num {
    font-size: 32px;
  }
}

/* Trust strip — match homepage mobile (stacked + gradient dividers) */
@media (max-width: 767.98px) {
  .arch-drafting-lp .trust-strip {
    padding: 30px 0 !important;
  }
  .arch-drafting-lp .trust-strip-inner {
    display: flex !important;
    flex-direction: column !important;
    flex-wrap: nowrap !important;
    align-items: center !important;
    justify-content: flex-start !important;
    gap: 0 !important;
    grid-template-columns: none !important;
  }
  .arch-drafting-lp .trust-strip .ts-item {
    position: relative;
    flex: none !important;
    width: 100%;
    align-items: center;
    padding: 0 !important;
    border: none !important;
    border-left: none !important;
    border-top: none !important;
  }
  .arch-drafting-lp .trust-strip .ts-item + .ts-item {
    border: none !important;
    margin-top: 10px;
    padding-top: 10px !important;
  }
  .arch-drafting-lp .trust-strip .ts-item + .ts-item::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
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
  .arch-drafting-lp .trust-strip .ts-num {
    font-size: 32px !important;
    font-weight: 500;
    line-height: 1.1 !important;
  }
  .arch-drafting-lp .trust-strip .ts-label {
    width: 228px;
    max-width: 100%;
    font-size: 13px !important;
    line-height: 16px !important;
  }
}

@media (max-width: 540px) {
  .arch-drafting-lp .trust-strip .ts-item,
  .arch-drafting-lp .trust-strip .ts-item + .ts-item,
  .arch-drafting-lp .trust-strip .ts-item:nth-child(even),
  .arch-drafting-lp .trust-strip .ts-item:first-child {
    border-left: none !important;
    border-top: none !important;
  }
}

/* Services — Figma 2991:49344 */
.arch-drafting-lp #services {
  padding: 100px 0 !important;
  background: #fafafa;
}
.arch-drafting-lp #services .wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
}
.arch-drafting-lp .services-offer-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  text-align: center;
  max-width: 920px;
}
.arch-drafting-lp .services-offer-header-top {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}
.arch-drafting-lp .services-offer-tag {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 6px 12px;
  background: rgba(34, 153, 214, 0.1);
  border: 1px solid #2299d6;
  border-radius: 10px;
  color: #2299d6;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.2;
  text-transform: capitalize;
}
.arch-drafting-lp .services-offer-title {
  margin: 0;
  color: #111;
  font-size: clamp(32px, 4vw, 48px);
  font-weight: 500;
  line-height: 1.15;
  text-align: center;
  text-transform: capitalize;
}
.arch-drafting-lp .services-offer-title .accent {
  color: #d70416;
  font-weight: 300;
}
.arch-drafting-lp .services-offer-sub {
  margin: 0;
  color: #808080;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
}
.arch-drafting-lp .services-offer-list {
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
}
.arch-drafting-lp .services-offer-row {
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  width: 100%;
  background: #fff;
  border: 1px solid #cbcccd;
  border-radius: 10px;
  overflow: hidden;
}
.arch-drafting-lp .services-offer-row.is-reverse {
  flex-direction: row-reverse;
}
.arch-drafting-lp .services-offer-media {
  flex: 1 1 45%;
  width: 100%;
  max-width: none;
  min-width: 0;
  min-height: 300px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
}
.arch-drafting-lp .services-offer-media-frame {
  position: relative;
  flex: 1 1 auto;
  min-height: 260px;
  width: 100%;
  overflow: hidden;
  border-radius: 10px;
  border: 1px solid #cbcccd;
  background: #f3f4f6;
}
.arch-drafting-lp .services-offer-media-frame img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  inset: 0;
}
.arch-drafting-lp .services-offer-copy {
  flex: 1 1 55%;
  max-width: none;
  min-width: 0;
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px;
  box-sizing: border-box;
}
.arch-drafting-lp .services-offer-copy h3 {
  margin: 0;
  color: #111;
  font-size: 24px;
  font-weight: 400;
  line-height: 1.3;
}
.arch-drafting-lp .services-offer-copy-body {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  width: 100%;
}
.arch-drafting-lp .services-offer-copy p {
  margin: 0;
  color: #808080;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
}
.arch-drafting-lp .services-offer-bullets {
  margin: 0;
  padding: 0 0 0 24px;
  list-style: disc;
  color: #808080;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
}
.arch-drafting-lp .services-offer-bullets li {
  margin: 0;
  padding: 0;
}
.arch-drafting-lp .services-offer-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 16px 20px;
  background: rgba(255, 255, 255, 0.1);
  border: 1.5px solid #d70416;
  border-radius: 10px;
  color: #d70416;
  font-size: 16px;
  font-weight: 500;
  line-height: 1;
  text-transform: capitalize;
  cursor: pointer;
  backdrop-filter: blur(50px);
  transition: background 0.2s ease, color 0.2s ease;
}
.arch-drafting-lp .services-offer-cta:hover {
  background: #d70416;
  color: #fff;
}

@media (max-width: 991.98px) {
  .arch-drafting-lp #services {
    padding: 64px 0 !important;
  }
  .arch-drafting-lp #services .wrap {
    gap: 40px;
  }
  .arch-drafting-lp .services-offer-row,
  .arch-drafting-lp .services-offer-row.is-reverse {
    flex-direction: column;
  }
  .arch-drafting-lp .services-offer-media,
  .arch-drafting-lp .services-offer-copy {
    flex: none;
    max-width: none;
  }
  .arch-drafting-lp .services-offer-media {
    min-height: 0;
    padding-bottom: 0;
  }
  .arch-drafting-lp .services-offer-media-frame {
    min-height: 220px;
    aspect-ratio: 506 / 260;
  }
}


/* Case Studies — Figma 2991:49691 */
.arch-drafting-lp #case-studies {
  padding: 72px 0 !important;
  background: #fff;
  position: relative;
  overflow: hidden;
}
.arch-drafting-lp #case-studies .wrap {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 40px;
}
.arch-drafting-lp .case-studies-header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  max-width: 720px;
}
.arch-drafting-lp .case-studies-header-top {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
}
.arch-drafting-lp .case-studies-tag {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 6px 12px;
  background: rgba(34, 153, 214, 0.1);
  border: 1px solid #2299d6;
  border-radius: 10px;
  color: #2299d6;
  font-size: 13px;
  font-weight: 400;
  text-transform: capitalize;
}
.arch-drafting-lp .case-studies-title {
  margin: 0;
  color: #111;
  font-size: clamp(28px, 3.6vw, 40px);
  font-weight: 500;
  line-height: 1.15;
  text-transform: capitalize;
}
.arch-drafting-lp .case-studies-title .accent {
  color: #d70416;
  font-weight: 300;
}
.arch-drafting-lp .case-studies-sub {
  margin: 0;
  max-width: 544px;
  color: #808080;
  font-size: 15px;
  font-weight: 400;
  line-height: 22px;
}
.arch-drafting-lp .case-studies-track-wrap {
  position: relative;
  width: 100vw;
  margin-left: calc(50% - 50vw);
  padding-left: max(18px, calc((100vw - 1440px) / 2));
  box-sizing: border-box;
}
.arch-drafting-lp .case-studies-track {
  display: flex;
  gap: 16px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  padding-right: max(18px, calc((100vw - 1440px) / 2 + 80px));
  padding-bottom: 8px;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
}
.arch-drafting-lp .case-studies-track::-webkit-scrollbar {
  display: none;
}
.arch-drafting-lp .case-study-card {
  flex: 0 0 min(1040px, calc(100vw - 48px));
  width: min(1040px, calc(100vw - 48px));
  scroll-snap-align: start;
  background: #fff;
  border: 1px solid #cbcccd;
  border-radius: 18px;
  padding: 24px 0 24px 24px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow: visible;
}
.arch-drafting-lp .case-study-logo {
  display: block;
  height: 32px;
  width: auto;
  max-width: 130px;
  object-fit: contain;
  object-position: left center;
  margin-right: 24px;
}
.arch-drafting-lp .case-study-summary {
  margin: 0 24px 0 0;
  color: #808080;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.35;
}
.arch-drafting-lp .case-study-stats {
  display: flex;
  gap: 16px;
  width: auto;
  margin-right: 24px;
  padding: 12px 16px;
  background: #fafafa;
  border-radius: 10px;
  box-sizing: border-box;
}
.arch-drafting-lp .case-study-stat {
  flex: 1 1 0;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.arch-drafting-lp .case-study-stat + .case-study-stat {
  border-left: 1px solid #e8e8e8;
  padding-left: 16px;
}
.arch-drafting-lp .case-study-stat-label {
  margin: 0;
  color: #111;
  font-size: 15px;
  font-weight: 500;
  line-height: 20px;
}
.arch-drafting-lp .case-study-stat-value {
  margin: 0;
  color: #808080;
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
  white-space: pre-line;
}
.arch-drafting-lp .case-study-body {
  display: flex;
  gap: 16px;
  align-items: flex-start;
  width: 100%;
}
.arch-drafting-lp .case-study-text {
  flex: 1 1 0;
  min-width: 0;
  max-width: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.arch-drafting-lp .case-study-block {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.arch-drafting-lp .case-study-block--outcome {
  max-width: none;
}
.arch-drafting-lp .case-study-block h4 {
  margin: 0;
  color: #111;
  font-size: 15px;
  font-weight: 500;
  line-height: 20px;
}
.arch-drafting-lp .case-study-block p,
.arch-drafting-lp .case-study-block ul {
  margin: 0;
  color: #808080;
  font-size: 15px;
  font-weight: 400;
  line-height: 22px;
}
.arch-drafting-lp .case-study-block ul {
  list-style: none;
  padding: 0;
}
.arch-drafting-lp .case-study-gallery {
  flex: 0 0 410px;
  width: 410px;
  max-width: 42%;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-right: 0;
  padding-right: 24px;
  box-sizing: border-box;
  overflow: visible;
}
.arch-drafting-lp .case-study-main {
  position: relative;
  width: 100%;
  aspect-ratio: 463 / 320;
  overflow: visible;
  border-radius: 8px;
  background: transparent;
}
.arch-drafting-lp .case-study-main img {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 8px;
  background: #f3f4f6;
}
.arch-drafting-lp .case-study-nav {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  pointer-events: none;
  z-index: 2;
}
.arch-drafting-lp .case-study-nav-btn {
  pointer-events: auto;
  width: 34px;
  height: 34px;
  border: 0.77px solid #fff;
  border-radius: 8px;
  background: #d70416;
  color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  backdrop-filter: blur(8px);
  box-shadow: 0 4px 14px rgba(215, 4, 22, 0.25);
}
.arch-drafting-lp .case-study-nav-btn:first-child {
  transform: translateX(-50%);
}
.arch-drafting-lp .case-study-nav-btn:last-child {
  transform: translateX(50%);
}
.arch-drafting-lp .case-study-thumbs {
  display: flex;
  align-items: center;
  gap: 10px;
  overflow: hidden;
  width: 100%;
}
.arch-drafting-lp .case-study-thumb {
  position: relative;
  flex: 0 0 80px;
  width: 80px;
  height: 54px;
  padding: 0;
  border: 1px solid #cbcccd;
  border-radius: 8px;
  overflow: hidden;
  background: #f3f4f6;
  cursor: pointer;
}
.arch-drafting-lp .case-study-thumb.is-active {
  border-color: #d70416;
}
.arch-drafting-lp .case-study-thumb img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
.arch-drafting-lp .case-study-thumb-more {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
}
.arch-drafting-lp .case-studies-cta-wrap {
  display: flex;
  justify-content: center;
}
.arch-drafting-lp .case-studies-controls {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 40px;
  width: 100%;
  max-width: none;
}
.arch-drafting-lp .case-studies-progress {
  position: relative;
  flex: 1 1 auto;
  min-width: 0;
  height: 2px;
  background: #b1b1b1;
}
.arch-drafting-lp .case-studies-progress-thumb {
  position: absolute;
  left: 0;
  top: 0;
  height: 2px;
  width: min(280px, 72%);
  background: #111;
  transition: transform 0.15s ease;
  will-change: transform;
}
.arch-drafting-lp .case-studies-nav {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 30px;
  flex-shrink: 0;
}
.arch-drafting-lp .case-studies-nav-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  padding: 0;
  border: 1px solid #cbcccd;
  border-radius: 10px;
  background: #fff;
  color: #808080;
  cursor: pointer;
  backdrop-filter: blur(50px);
  transition: border-color 0.2s ease, color 0.2s ease, opacity 0.2s ease;
}
.arch-drafting-lp .case-studies-nav-btn:hover:not(:disabled) {
  border-color: #808080;
  color: #111;
}
.arch-drafting-lp .case-studies-nav-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
@media (max-width: 575.98px) {
  .arch-drafting-lp .case-studies-controls {
    flex-direction: column;
    align-items: stretch;
    gap: 16px;
  }
  .arch-drafting-lp .case-studies-nav {
    justify-content: flex-end;
    gap: 16px;
  }
  .arch-drafting-lp .case-studies-nav-btn {
    width: 40px;
    height: 40px;
  }
}
.arch-drafting-lp .case-studies-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 16px 20px;
  background: rgba(255, 255, 255, 0.1);
  border: 1.5px solid #d70416;
  border-radius: 10px;
  color: #d70416;
  font-size: 16px;
  font-weight: 500;
  text-transform: capitalize;
  cursor: pointer;
  backdrop-filter: blur(50px);
  transition: background 0.2s ease, color 0.2s ease;
}
.arch-drafting-lp .case-studies-cta:hover {
  background: #d70416;
  color: #fff;
}
.arch-drafting-lp .case-studies-fade {
  pointer-events: none;
  position: absolute;
  top: 200px;
  bottom: 120px;
  width: min(100px, 8vw);
  z-index: 2;
}
.arch-drafting-lp .case-studies-fade--right {
  right: 0;
  background: linear-gradient(270deg, #fff 0%, #fff 35%, rgba(255, 255, 255, 0) 100%);
}
.arch-drafting-lp .case-studies-fade--left {
  left: 0;
  /* Match track-wrap left inset so the fade never masks the snapped card */
  width: max(18px, calc((100vw - 1440px) / 2));
  background: linear-gradient(90deg, #fff 0%, #fff 35%, rgba(255, 255, 255, 0) 100%);
  opacity: 0;
}
.arch-drafting-lp #case-studies.has-scrolled .case-studies-fade--left {
  opacity: 1;
}

@media (max-width: 991.98px) {
  .arch-drafting-lp #case-studies {
    padding: 64px 0 !important;
  }
  .arch-drafting-lp #case-studies .wrap {
    gap: 40px;
  }
  .arch-drafting-lp .case-study-card {
    flex: 0 0 min(980px, calc(100vw - 32px));
    width: min(980px, calc(100vw - 32px));
    padding: 24px;
  }
  .arch-drafting-lp .case-study-logo,
  .arch-drafting-lp .case-study-stats {
    margin-right: 0;
  }
  .arch-drafting-lp .case-study-summary {
    margin-right: 0;
  }
  .arch-drafting-lp .case-study-body {
    flex-direction: column;
  }
  .arch-drafting-lp .case-study-text {
    max-width: 100%;
  }
  .arch-drafting-lp .case-study-block--outcome {
    max-width: 100%;
  }
  .arch-drafting-lp .case-study-gallery {
    flex: none;
    width: 100%;
    max-width: 100%;
  }
  .arch-drafting-lp .case-study-main {
    aspect-ratio: 463 / 320;
    height: auto;
    border-radius: 8px;
  }
  .arch-drafting-lp .case-study-stats {
    flex-direction: column;
    gap: 12px;
  }
  .arch-drafting-lp .case-study-stat + .case-study-stat {
    border-left: none;
    border-top: 1px solid #e8e8e8;
    padding-left: 0;
    padding-top: 12px;
  }
  .arch-drafting-lp .case-studies-fade {
    display: none;
  }
}

/* How we work */
.arch-drafting-lp #how {
  padding: 100px 0 !important;
  background: #fff;
}
.arch-drafting-lp #how .wrap {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 60px;
}
.arch-drafting-lp .engage-header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  max-width: 884px;
}
.arch-drafting-lp .engage-header-top {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
}
.arch-drafting-lp .engage-tag {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 6px 12px;
  background: rgba(34, 153, 214, 0.1);
  border: 1px solid #2299d6;
  border-radius: 10px;
  color: #2299d6;
  font-size: 13px;
  font-weight: 400;
  text-transform: capitalize;
}
.arch-drafting-lp .engage-title {
  margin: 0;
  color: #111;
  font-size: clamp(32px, 4vw, 48px);
  font-weight: 500;
  line-height: 1.15;
  text-transform: capitalize;
}
.arch-drafting-lp .engage-title .accent {
  color: #d70416;
  font-weight: 300;
}
.arch-drafting-lp .engage-sub {
  margin: 0;
  max-width: 550px;
  color: #808080;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
}
.arch-drafting-lp .engage-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  align-items: center;
  width: 100%;
}
.arch-drafting-lp .engage-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  padding: 20px;
  background: #fff;
  border: 1px solid #cbcccd;
  border-radius: 10px;
  box-sizing: border-box;
  overflow: hidden;
  box-shadow: none;
  transform: translateY(0);
  transition: border-color 0.2s ease, box-shadow 0.25s ease, transform 0.25s ease;
}
.arch-drafting-lp .engage-card:hover {
  box-shadow: 20px 0 50px rgba(0, 0, 0, 0.05);
  transform: translateY(-6px);
}
.arch-drafting-lp .engage-card--featured {
  border-color: #d70416;
  box-shadow: 20px 0 50px rgba(0, 0, 0, 0.05);
}
.arch-drafting-lp .engage-card--featured:hover {
  box-shadow: 20px 0 50px rgba(0, 0, 0, 0.1);
  transform: translateY(-6px);
}
.arch-drafting-lp .engage-card:not(.engage-card--featured) {
  gap: 16px;
  padding: 16px 20px;
}
.arch-drafting-lp .engage-card:not(.engage-card--featured) .engage-card-body {
  gap: 16px;
}
.arch-drafting-lp .engage-card:not(.engage-card--featured) .engage-cta {
  margin-top: 0;
}
.arch-drafting-lp .engage-card-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  width: 100%;
}
.arch-drafting-lp .engage-icon {
  width: 70px;
  height: 70px;
  padding: 15px;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border: 1px solid #cbcccd;
  border-radius: 10px;
  flex-shrink: 0;
}
.arch-drafting-lp .engage-icon img {
  display: block;
  width: 40px;
  height: 40px;
  object-fit: contain;
}
.arch-drafting-lp .engage-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  background: #d70416;
  border-radius: 10px;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  white-space: nowrap;
}
.arch-drafting-lp .engage-card-body {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  width: 100%;
  flex: 1 1 auto;
}
.arch-drafting-lp .engage-card-intro {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
}
.arch-drafting-lp .engage-card-title {
  margin: 0;
  color: #111;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.2;
}
.arch-drafting-lp .engage-card-lead {
  margin: 0;
  color: #808080;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
}
.arch-drafting-lp .engage-features {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 10px;
  row-gap: 20px;
  width: 100%;
}
.arch-drafting-lp .engage-features:not(.engage-features--stack) .engage-feature:nth-child(even) {
  position: relative;
  padding-left: 20px;
}
.arch-drafting-lp .engage-features:not(.engage-features--stack) .engage-feature:nth-child(even)::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 1px;
  background: linear-gradient(
    180deg,
    rgba(232, 232, 232, 0) 0%,
    #e8e8e8 18%,
    #e8e8e8 82%,
    rgba(232, 232, 232, 0) 100%
  );
  pointer-events: none;
}
.arch-drafting-lp .engage-features--stack {
  grid-template-columns: 1fr;
}
.arch-drafting-lp .engage-features--stack .engage-feature:nth-child(even) {
  padding-left: 0;
}
.arch-drafting-lp .engage-features--stack .engage-feature:nth-child(even)::before {
  display: none;
}
.arch-drafting-lp .engage-feature {
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 0;
}
.arch-drafting-lp .engage-feature h4 {
  margin: 0;
  color: #111;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
}
.arch-drafting-lp .engage-feature p {
  margin: 0;
  color: #808080;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
}
.arch-drafting-lp .engage-best {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
}
.arch-drafting-lp .engage-best h4 {
  margin: 0;
  color: #111;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
}
.arch-drafting-lp .engage-best ul {
  margin: 0 !important;
  padding-left: 24px !important;
  list-style-type: disc !important;
  list-style-position: outside !important;
  color: #808080;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
}
.arch-drafting-lp .engage-best li {
  display: list-item !important;
  list-style-type: disc !important;
  margin: 0 !important;
  padding: 0 !important;
}
.arch-drafting-lp .engage-best li + li {
  margin-top: 0;
}
.arch-drafting-lp .engage-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: auto;
  padding: 16px 20px;
  min-height: 52px;
  height: auto;
  border-radius: 10px;
  border: 1.5px solid #d70416;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  text-transform: capitalize;
  cursor: pointer;
  backdrop-filter: blur(50px);
  transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
}
.arch-drafting-lp .engage-cta--solid {
  background: #d70416;
  color: #fff;
}
.arch-drafting-lp .engage-cta--solid:hover {
  background: #b80312;
  border-color: #b80312;
}
.arch-drafting-lp .engage-cta--outline {
  background: rgba(255, 255, 255, 0.1);
  color: #d70416;
}
.arch-drafting-lp .engage-cta--outline:hover {
  background: #d70416;
  color: #fff;
}

@media (max-width: 991.98px) {
  .arch-drafting-lp #how {
    padding: 64px 0 !important;
  }
  .arch-drafting-lp #how .wrap {
    gap: 40px;
  }
  .arch-drafting-lp .engage-grid {
    grid-template-columns: 1fr;
  }
  .arch-drafting-lp .engage-badge {
    white-space: normal;
    text-align: center;
  }
}

@media (max-width: 575.98px) {
  .arch-drafting-lp .engage-features {
    grid-template-columns: 1fr;
  }
  .arch-drafting-lp .engage-features:not(.engage-features--stack) .engage-feature:nth-child(even) {
    padding-left: 0;
  }
  .arch-drafting-lp .engage-features:not(.engage-features--stack) .engage-feature:nth-child(even)::before {
    display: none;
  }
  .arch-drafting-lp .engage-card-top {
    flex-direction: column;
    align-items: flex-start;
  }
}

.arch-drafting-lp .trust-pills {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 9px;
  margin: 22px 0 36px;
}
.arch-drafting-lp .trust-pill {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-size: 13px;
  font-weight: 500;
  color: #333;
  background: #fff;
  border: 1px solid #e5e5e5;
  padding: 7px 14px;
  border-radius: 100px;
}
.arch-drafting-lp .trust-pill-dot {
  width: 6px;
  height: 6px;
  background: var(--red);
  border-radius: 50%;
  flex-shrink: 0;
}
.arch-drafting-lp .fcard {
  width: 100%;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;

  border-radius: 16px;
  padding: 44px;
  text-align: left;
  box-shadow: 0 16px 40px rgba(16, 24, 40, 0.08);
}
.arch-drafting-lp .fcard-title {
  font-size: 28px;
  font-weight: 700;
  line-height: 1.2;
  color: #111;
  margin-bottom: 24px;
}
.arch-drafting-lp .form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
.arch-drafting-lp .form-group {
  margin-bottom: 16px;
}
.arch-drafting-lp .form-group label {
  display: block;
  font-size: 14px;
  font-weight: 700 !important;
  color: #333;
  margin-bottom: 8px;
  line-height: 1.35;
}
.arch-drafting-lp .form-group .form-group-label {
  display: block;
  font-size: 14px;
  font-weight: 700 !important;
  color: #333;
  margin-bottom: 8px;
  line-height: 1.35;
}
.arch-drafting-lp .form-group input,
.arch-drafting-lp .form-group textarea,
.arch-drafting-lp .form-group select {
  width: 100%;
  padding: 12px 16px;
  border: 1.5px solid var(--gray-mid);
  border-radius: 7px;
  font-family: inherit;
  font-size: 14px;
  color: #000;
  background: #fff;
  outline: none;
  transition: border-color 0.2s;
  -webkit-appearance: none;
}
.arch-drafting-lp .form-group input:focus,
.arch-drafting-lp .form-group textarea:focus,
.arch-drafting-lp .form-group select:focus {
  border-color: var(--red);
}
.arch-drafting-lp .form-group textarea {
  resize: vertical;
  min-height: 100px;
}
.arch-drafting-lp .form-note {
  font-size: 12px;
  color: var(--gray-sub);
  text-align: center;
  margin-top: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
}

/* Portfolio â€” cinematic case-study carousel + modal */
.arch-drafting-lp #portfolio {
  padding: 84px 0 72px;
  background: linear-gradient(180deg, #fafafa 0%, #fff 18%, #fff 100%);
}
.arch-drafting-lp .arch-portfolio-header {
  text-align: center;
  max-width: 720px;
  margin: 0 auto clamp(24px, 3.5vw, 34px);
}
.arch-drafting-lp .arch-portfolio-header .section-label {
  margin-left: auto;
  margin-right: auto;
}
.arch-drafting-lp .arch-portfolio-header .red-line {
  margin-left: auto;
  margin-right: auto;
}
.arch-drafting-lp .arch-portfolio-h2 {
  font-size: clamp(32px, 4.5vw, 52px);
  font-weight: 600;
  line-height: 1.12;
  color: #000;
  letter-spacing: -0.02em;
  margin: 0;
}
.arch-drafting-lp .arch-portfolio-h2 .arch-portfolio-h2-accent {
  color: var(--red);
}
.arch-drafting-lp .arch-portfolio-lead {
  margin: 20px auto 0;
  max-width: 560px;
  font-size: 17px;
  line-height: 1.65;
  color: var(--gray-text);
}
.arch-drafting-lp .arch-port-showcase {
  position: relative;
  max-width: 780px;
  margin: 0 auto;
  padding: 0 clamp(8px, 2vw, 16px);
}
.arch-drafting-lp .arch-port-carousel-stage {
  position: relative;
  width: 100%;
  max-width: 780px;
  margin: 0 auto;
}
.arch-drafting-lp .arch-port-carousel-viewport {
  position: relative;
  overflow: hidden;
  border-radius: 18px;
  width: 100%;
  max-width: 780px;
  margin: 0 auto;
}
.arch-drafting-lp .arch-port-case-card {
  display: flex;
  flex-direction: column;
  background: #fff;
  border: 1px solid #e8e8e8;
  border-radius: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04), 0 24px 64px rgba(0, 0, 0, 0.08);
  overflow: hidden;
}
.arch-drafting-lp .arch-port-case-head {
  padding: clamp(18px, 2.5vw, 24px) clamp(18px, 2.6vw, 28px) clamp(10px, 1.4vw, 14px);
  text-align: left;
  border-bottom: 1px solid #f0f0f0;
  background: #fff;
}
.arch-drafting-lp .arch-port-case-head .arch-port-case-title {
  margin: 0 0 8px;
}
.arch-drafting-lp .arch-port-case-head .arch-port-case-meta {
  margin: 0;
}
.arch-drafting-lp .arch-port-case-hero {
  position: relative;
  width: 100%;
  max-width: 780px;
  aspect-ratio: 2.35 / 1;
  height: auto;
  flex-shrink: 0;
  overflow: hidden;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #f4f4f4 0%, #ebebeb 100%);
}
.arch-drafting-lp .arch-port-case-hero img {
  position: static;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  image-rendering: auto;
  backface-visibility: hidden;
  transform: none;
  filter: none;
}
.arch-drafting-lp .arch-port-case-footer {
  display: flex;
  align-items: stretch;
  justify-content: stretch;
  padding: clamp(14px, 2.2vw, 18px) clamp(18px, 2.6vw, 28px) clamp(18px, 2.6vw, 22px);
  border-top: 1px solid #f0f0f0;
  background: #fff;
}
.arch-drafting-lp .arch-port-case-slide-in-next {
  animation: archPortCarouselInNext 0.52s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.arch-drafting-lp .arch-port-case-slide-in-prev {
  animation: archPortCarouselInPrev 0.52s cubic-bezier(0.22, 1, 0.36, 1) both;
}
@keyframes archPortCarouselInNext {
  from {
    opacity: 0.24;
    transform: translate3d(24px, 0, 0) scale(0.988);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0) scale(1);
  }
}
@keyframes archPortCarouselInPrev {
  from {
    opacity: 0.24;
    transform: translate3d(-24px, 0, 0) scale(0.988);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0) scale(1);
  }
}
.arch-drafting-lp .arch-port-case-title {
  font-size: clamp(21px, 2.8vw, 29px);
  font-weight: 600;
  line-height: 1.15;
  color: #0a0a0a;
  letter-spacing: -0.02em;
  margin: 0 0 12px;
}
.arch-drafting-lp .arch-port-case-meta {
  font-size: 14px;
  font-weight: 500;
  color: #666;
  line-height: 1.45;
  margin: 0;
}
/* Primary CTA â€” matches page .btn-red; full-width in footer for clear hierarchy */
.arch-drafting-lp .arch-port-case-footer .arch-port-case-cta.btn-red {
  width: 100%;
  justify-content: center;
  gap: 10px;
  padding: 13px 22px;
  font-size: 14px;
  font-weight: 600;
}
.arch-drafting-lp .arch-port-case-footer .arch-port-case-cta.btn-red svg {
  flex-shrink: 0;
  color: #fff;
  transition: transform 0.2s ease;
}
.arch-drafting-lp .arch-port-case-footer .arch-port-case-cta.btn-red:hover svg {
  transform: translateX(5px);
}
.arch-drafting-lp .arch-port-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 4;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 1px solid #e0e0e0;
  background: #fff;
  color: #111;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: border-color 0.2s ease, box-shadow 0.2s ease, color 0.2s ease;
}
.arch-drafting-lp .arch-port-nav:hover {
  border-color: rgba(215, 4, 22, 0.35);
  color: var(--red);
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.1);
}
.arch-drafting-lp .arch-port-nav--prev {
  left: clamp(10px, 2.5vw, 20px);
}
.arch-drafting-lp .arch-port-nav--next {
  right: clamp(10px, 2.5vw, 20px);
}
.arch-drafting-lp .arch-port-dots {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: clamp(20px, 3vw, 28px);
  padding: 0;
  background: transparent;
  border: none;
  box-shadow: none;
  width: fit-content;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
}
.arch-drafting-lp .arch-port-dot {
  width: 10px;
  height: 10px;
  border-radius: 999px;
  padding: 0;
  border: none;
  background: #d8d8d8;
  cursor: pointer;
  transition: width 0.3s ease, background 0.25s ease, transform 0.2s ease;
}
.arch-drafting-lp .arch-port-dot:hover {
  background: #b0b0b0;
  transform: scale(1.08);
}
.arch-drafting-lp .arch-port-dot[aria-current="true"] {
  width: 28px;
  background: var(--red);
  opacity: 1;
}
.arch-drafting-lp .arch-port-modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 1080;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 6px;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
}
.arch-drafting-lp .arch-port-modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(10, 10, 12, 0.72);
  backdrop-filter: blur(6px);
  animation: archPortFadeIn 0.35s ease both;
}
.arch-drafting-lp .arch-port-modal-panel {
  position: relative;
  z-index: 1;
  width: min(1080px, 98vw);
  max-width: 100%;
  margin: auto;
  min-height: 0;
  max-height: min(calc(100dvh - 12px), 800px);
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: clamp(14px, 2vw, 22px);
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.06) inset, 0 32px 80px rgba(0, 0, 0, 0.28),
    0 12px 32px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  flex-shrink: 0;
  animation: archPortModalUp 0.45s cubic-bezier(0.22, 1, 0.36, 1) both;
}
@keyframes archPortFadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes archPortModalUp {
  from {
    opacity: 0;
    transform: translateY(24px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
.arch-drafting-lp .arch-port-modal-close {
  position: absolute;
  top: clamp(10px, 2vw, 16px);
  right: clamp(10px, 2vw, 16px);
  z-index: 5;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  border: 1px solid #e5e5e5;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #222;
  transition: border-color 0.2s ease, background 0.2s ease, color 0.2s ease;
}
.arch-drafting-lp .arch-port-modal-close:hover {
  border-color: var(--red);
  color: var(--red);
  background: rgba(215, 4, 22, 0.04);
}
.arch-drafting-lp .arch-port-modal-texthead {
  flex-shrink: 0;
  padding: clamp(14px, 2.1vw, 18px) clamp(48px, 6vw, 58px) clamp(10px, 1.5vw, 14px) clamp(14px, 2vw, 18px);
  border-bottom: 1px solid #ececec;
  background: linear-gradient(180deg, #fff 0%, #fafafa 100%);
  text-align: left;
}
.arch-drafting-lp .arch-port-modal-texthead h2 {
  font-size: clamp(20px, 4vw, 28px);
  font-weight: 600;
  margin: 0 0 8px;
  color: #0a0a0a;
  letter-spacing: -0.02em;
  line-height: 1.2;
  padding-right: 8px;
}
.arch-drafting-lp .arch-port-modal-img-title {
  font-size: clamp(14px, 2.6vw, 17px);
  font-weight: 500;
  color: var(--red);
  margin: 0;
  line-height: 1.45;
  padding-right: 8px;
  letter-spacing: 0.01em;
}
.arch-drafting-lp .arch-port-modal-body {
  flex: 1;
  min-height: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  background: #f6f6f6;
}
.arch-drafting-lp .arch-port-modal-stage {
  position: relative;
  flex: 0 0 auto;
  background: #fff;
  border: 1px solid #e6e6e6;
  border-radius: 0;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  width: 100%;
}
.arch-drafting-lp .arch-port-modal-zoom-controls {
  position: absolute;
  left: 50%;
  bottom: 14px;
  transform: translateX(-50%);
  z-index: 4;
  display: flex;
  gap: 10px;
  padding: 0;
  border-radius: 0;
  background: transparent;
  border: none;
  box-shadow: none;
  backdrop-filter: none;
}
.arch-drafting-lp .arch-port-modal-zoom-btn {
  width: 44px;
  height: 44px;
  border-radius: 999px;
  border: 1px solid rgba(0, 0, 0, 0.14);
  background: #fff;
  color: #111;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  cursor: pointer;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.22);
  transition: color 0.2s ease, border-color 0.2s ease, transform 0.2s ease, background 0.2s ease;
}
.arch-drafting-lp .arch-port-modal-zoom-btn:hover {
  color: #111;
  border-color: rgba(0, 0, 0, 0.25);
  background: #fff;
  transform: translateY(-1px);
}
.arch-drafting-lp .arch-port-modal-zoom-btn:disabled {
  opacity: 0.42;
  cursor: not-allowed;
  transform: none;
}
.arch-drafting-lp .arch-port-modal-stage-inner {
  position: relative;
  width: 100%;
  max-width: none;
  height: min(52dvh, 560px);
  min-height: 300px;
  max-height: 560px;
  overflow: hidden;
  margin: 0 auto;
}
.arch-drafting-lp .arch-port-modal-slide-wrap {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  box-sizing: border-box;
}
.arch-drafting-lp .arch-port-modal-slide-wrap img {
  display: block;
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
  object-position: center bottom;
  background: transparent;
  image-rendering: auto;
  backface-visibility: hidden;
  transform: scale(1);
  filter: none;
  transition: transform 0.22s ease-out;
}
.arch-drafting-lp .arch-port-modal-slide-in-next {
  animation: archPortCaseInNext 0.45s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.arch-drafting-lp .arch-port-modal-slide-in-prev {
  animation: archPortCaseInPrev 0.45s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.arch-drafting-lp .arch-port-modal-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.08);
  background: rgba(255, 255, 255, 0.95);
  color: #111;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.1);
  transition: color 0.2s ease, border-color 0.2s ease;
}
.arch-drafting-lp .arch-port-modal-nav:hover {
  color: var(--red);
  border-color: rgba(215, 4, 22, 0.35);
}
.arch-drafting-lp .arch-port-modal-nav--prev {
  left: clamp(6px, 1.5vw, 14px);
}
.arch-drafting-lp .arch-port-modal-nav--next {
  right: clamp(6px, 1.5vw, 14px);
}
.arch-drafting-lp .arch-port-modal-thumbs {
  display: flex;
  gap: 10px;
  margin-top: 0;
  padding: 12px 14px;
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: thin;
  -webkit-overflow-scrolling: touch;
  flex-shrink: 0;
  background: #fff;
  border: 1px solid #e8e8e8;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
}
.arch-drafting-lp .arch-port-thumb {
  flex: 0 0 auto;
  width: 78px;
  height: 58px;
  padding: 0;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  background: #ddd;
  transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
}
.arch-drafting-lp .arch-port-thumb:hover {
  border-color: #bbb;
  transform: translateY(-1px);
}
.arch-drafting-lp .arch-port-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.arch-drafting-lp .arch-port-thumb[aria-selected="true"] {
  border-color: var(--red);
  box-shadow: 0 4px 16px rgba(215, 4, 22, 0.2);
}
.arch-drafting-lp .arch-port-thumb:focus-visible {
  outline: 2px solid var(--red);
  outline-offset: 2px;
}
@media (max-width: 480px) {
  .arch-drafting-lp .arch-port-case-hero {
    max-width: 100%;
  }
}

@media (max-width: 900px) {
  .arch-drafting-lp .arch-port-modal-stage-inner {
    height: min(50dvh, 500px);
    min-height: 280px;
    max-height: 500px;
  }
}

@media (max-width: 640px) {
  .arch-drafting-lp section:not(#hero):not(.trust-strip):not(#case-studies):not(#how):not(#why) {
    padding-top: clamp(28px, 6vw, 44px) !important;
    padding-bottom: clamp(28px, 6vw, 44px) !important;
  }
  .arch-drafting-lp .arch-port-modal-overlay {
    padding: 6px;
    align-items: stretch;
  }
  .arch-drafting-lp .arch-port-modal-panel {
    margin: 0 auto;
    width: 100%;
    max-height: calc(100dvh - 12px);
    border-radius: 14px;
  }
  .arch-drafting-lp .arch-port-modal-texthead {
    padding-right: 56px;
    padding-left: 14px;
  }
  .arch-drafting-lp .arch-port-modal-stage-inner {
    height: min(46dvh, 420px);
    min-height: 240px;
    max-height: 420px;
  }
  .arch-drafting-lp .arch-port-modal-slide-wrap {
    padding: 0;
  }
  .arch-drafting-lp .arch-port-modal-nav {
    width: 40px;
    height: 40px;
  }
  .arch-drafting-lp .arch-port-modal-nav svg {
    width: 22px;
    height: 22px;
  }
  .arch-drafting-lp .arch-port-thumb {
    width: 76px;
    height: 56px;
  }
  .arch-drafting-lp .arch-port-modal-zoom-btn {
    width: 40px;
    height: 40px;
    font-size: 14px;
  }
}

@media (max-width: 400px) {
  .arch-drafting-lp .arch-port-modal-stage-inner {
    height: min(42dvh, 350px);
    min-height: 210px;
    max-height: 350px;
  }
}
@media (prefers-reduced-motion: reduce) {
  .arch-drafting-lp .arch-port-case-slide-in-next,
  .arch-drafting-lp .arch-port-case-slide-in-prev,
  .arch-drafting-lp .arch-port-modal-slide-in-next,
  .arch-drafting-lp .arch-port-modal-slide-in-prev {
    animation: none !important;
  }
  .arch-drafting-lp .arch-port-modal-panel,
  .arch-drafting-lp .arch-port-modal-backdrop {
    animation: none !important;
  }
}

/* Why Firms Stay With Us — Figma 2991:49547 */
.arch-drafting-lp #why {
  padding: 56px 0 100px !important;
  background: #fff;
}
.arch-drafting-lp #why .wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  width: 100%;
  max-width: 1440px;
}
.arch-drafting-lp .why-stay-header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  width: 100%;
  align-self: flex-start;
}
.arch-drafting-lp .why-stay-header-top {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
}
.arch-drafting-lp .why-stay-tag {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 6px 12px;
  background: rgba(34, 153, 214, 0.1);
  border: 1px solid #2299d6;
  border-radius: 10px;
  color: #2299d6;
  font-size: 13px;
  font-weight: 400;
  text-transform: capitalize;
}
.arch-drafting-lp .why-stay-title {
  margin: 0;
  color: #111;
  font-size: clamp(32px, 4vw, 48px);
  font-weight: 500;
  line-height: 1.15;
  text-transform: capitalize;
}
.arch-drafting-lp .why-stay-title .accent {
  color: #d70416;
  font-weight: 300;
}
.arch-drafting-lp .why-stay-sub {
  margin: 0;
  color: #808080;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-transform: capitalize;
}
.arch-drafting-lp .why-stay-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px 20px;
  width: 100%;
}
.arch-drafting-lp .why-stay-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  padding: 20px;
  border-radius: 10px;
  background: #fff;
  overflow: hidden;
  box-sizing: border-box;
  box-shadow: none;
  transition: box-shadow 0.2s ease;
}
.arch-drafting-lp .why-stay-card:hover {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
}
.arch-drafting-lp .why-stay-icon {
  width: 60px;
  height: 60px;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.arch-drafting-lp .why-stay-icon img {
  display: block;
  width: 42px;
  height: 42px;
  object-fit: contain;
}
.arch-drafting-lp .why-stay-card-copy {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  width: 100%;
}
.arch-drafting-lp .why-stay-card-copy h3 {
  margin: 0;
  color: #111;
  font-size: 24px;
  font-weight: 400;
  line-height: 1.2;
}
.arch-drafting-lp .why-stay-card-copy p {
  margin: 0;
  color: #808080;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
}
.arch-drafting-lp .why-stay-cta-wrap {
  display: flex;
  justify-content: center;
  width: 100%;
}
.arch-drafting-lp .why-stay-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 16px 20px;
  background: rgba(255, 255, 255, 0.1);
  border: 1.5px solid #d70416;
  border-radius: 10px;
  color: #d70416;
  font-size: 16px;
  font-weight: 500;
  text-transform: capitalize;
  cursor: pointer;
  backdrop-filter: blur(50px);
  transition: background 0.2s ease, color 0.2s ease;
}
.arch-drafting-lp .why-stay-cta:hover {
  background: #d70416;
  color: #fff;
}

@media (max-width: 991.98px) {
  .arch-drafting-lp #why {
    padding: 64px 0 !important;
  }
  .arch-drafting-lp #why .wrap {
    gap: 40px;
  }
  .arch-drafting-lp .why-stay-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }
}

/* Client feedback â€” markup matches DynamicPdfToCad; video tiles use global .card-secrtion styles */
.arch-drafting-lp #testimonials {
  background: #fff;
}
/*
 * .arch-drafting-lp * { padding:0; margin:0 } strips Bootstrap .row gutters.
 * Restore grid spacing for testimonial videos (must beat that reset).
 */
.arch-drafting-lp #testimonials .arch-video-row.arch-video-row {
  --bs-gutter-x: 2rem;
  --bs-gutter-y: 1.5rem;
  margin-top: calc(-1 * var(--bs-gutter-y)) !important;
  margin-left: calc(-0.5 * var(--bs-gutter-x)) !important;
  margin-right: calc(-0.5 * var(--bs-gutter-x)) !important;
}
.arch-drafting-lp #testimonials .arch-video-row.arch-video-row > [class*="col"] {
  padding-left: calc(var(--bs-gutter-x) * 0.5) !important;
  padding-right: calc(var(--bs-gutter-x) * 0.5) !important;
  margin-top: var(--bs-gutter-y) !important;
}
@media (min-width: 992px) {
  .arch-drafting-lp #testimonials .arch-video-row.arch-video-row {
    --bs-gutter-x: 2.75rem;
    --bs-gutter-y: 1.5rem;
  }
}

/* Industries */
.arch-drafting-lp #industries {
  padding: 96px 0;
}
.arch-drafting-lp .arch-ind-sectors {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  margin-top: 48px;
}
.arch-drafting-lp .arch-ind-tile {
  position: relative;
  overflow: hidden;
  border-radius: 14px;
  min-height: 168px;
  box-shadow: 0 5px 24px rgba(0, 0, 0, 0.09);
  border: 1px solid #e6e6e6;
}
.arch-drafting-lp .arch-ind-tile img {
  width: 100%;
  height: 100%;
  min-height: 168px;
  object-fit: cover;
  display: block;
}
.arch-drafting-lp .arch-ind-tile-cap {
  position: absolute;
  inset: auto 0 0 0;
  padding: 1.25rem 1.25rem 1.1rem;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.78), transparent);
}
.arch-drafting-lp .arch-ind-tile-cap span {
  color: #fff;
  font-size: 0.95rem;
  font-weight: 600;
  line-height: 1.25;
  letter-spacing: 0.2px;
}
/* Compatible drawing types â€” reference layout: left copy + 3Ã—4 grid + full-width BIM row */
.arch-drafting-lp .drawing-types-section {
  margin-top: 56px;
  padding-top: 48px;
  border-top: 1px solid var(--gray-mid);
}
.arch-drafting-lp .dts-split {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.22fr);
  gap: clamp(28px, 4vw, 52px);
  align-items: start;
}
.arch-drafting-lp .dts-pill {
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--red);
  border: 1.5px solid var(--red);
  padding: 7px 14px;
  border-radius: 2px;
  margin-bottom: 20px;
}
.arch-drafting-lp .dts-heading {
  font-family: "Segoe UI", system-ui, sans-serif;
  font-size: clamp(26px, 3.2vw, 40px);
  font-weight: 700;
  line-height: 1.12;
  color: #000;
  letter-spacing: -0.02em;
  margin: 0 0 16px;
}
.arch-drafting-lp .dts-heading span {
  color: var(--red);
  display: block;
}
.arch-drafting-lp .dts-lead {
  font-size: 15px;
  line-height: 1.75;
  color: var(--gray-text);
  margin: 0;
  max-width: 34rem;
}
.arch-drafting-lp .dts-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
.arch-drafting-lp .dts-cell {
  display: flex;
  align-items: center;
  gap: 10px;
  min-height: 52px;
  padding: 12px 14px;
  background: #fff;
  border: 1px solid #e4e4e4;
  border-radius: 4px;
}
.arch-drafting-lp .dts-cell--plain {
  padding-left: 14px;
}
.arch-drafting-lp .dts-diamond {
  width: 7px;
  height: 7px;
  flex-shrink: 0;
  background: var(--red);
  transform: rotate(45deg);
  margin-left: 2px;
}
.arch-drafting-lp .dts-cell-label {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #111;
  line-height: 1.35;
}
.arch-drafting-lp .dts-bim-card {
  margin-top: 10px;
  padding: 16px 18px;
  text-align: center;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--red);
  background: rgba(215, 4, 22, 0.06);
  border: 2px solid var(--red);
  border-radius: 4px;
  line-height: 1.45;
}
@media (max-width: 991px) {
  .arch-drafting-lp .dts-split {
    grid-template-columns: 1fr;
  }
  .arch-drafting-lp .dts-lead {
    max-width: none;
  }
}
@media (max-width: 700px) {
  .arch-drafting-lp .dts-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 420px) {
  .arch-drafting-lp .dts-grid {
    grid-template-columns: 1fr;
  }
}

/* Contact */
.arch-drafting-lp #contact {
  padding: 96px 0;
  background: #fff;
}
.arch-drafting-lp .contact-head {
  text-align: left;
  width: 100%;
  margin-bottom: 18px;
}
.arch-drafting-lp .contact-head .section-heading {
  max-width: none;
}
.arch-drafting-lp .contact-head-desc {
  margin-bottom: 48px;
  max-width: 100%;
  font-size: 17px;
  line-height: 1.75;
  color: var(--gray-text);
}
.arch-drafting-lp .contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 56px 72px;
  align-items: start;
}
.arch-drafting-lp .cta-trust-items {
  display: flex;
  flex-direction: column;
  gap: 22px;
}
.arch-drafting-lp .cti {
  display: flex;
  align-items: flex-start;
  gap: 14px;
}
.arch-drafting-lp .cti-icon {
  color: var(--red);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 2px;
}
.arch-drafting-lp .cti-body strong {
  font-size: 14px;
  font-weight: 600;
  display: block;
  margin-bottom: 4px;
  color: #111;
}
.arch-drafting-lp .cti-body p {
  font-size: 13px;
  color: var(--gray-text);
  line-height: 1.65;
}
.arch-drafting-lp .contact-form {
  background: #fff;
  border: 1px solid var(--gray-mid);
  border-radius: 10px;
  padding: 40px;
}
.arch-drafting-lp .contact-form h3 {
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 8px;
}
.arch-drafting-lp .contact-form .cform-field-error {
  color: #c00;
  font-size: 13px;
  margin-top: 6px;
  margin-bottom: 0;
}
.arch-drafting-lp .cform-sub {
  font-size: 14px;
  color: var(--gray-text);
  margin-bottom: 22px;
}

/* FAQ â€” accordion pattern aligned with mep-bim-services.js */
.arch-drafting-lp #faq {
  padding: 96px 0;
  background: #fff;
}
.arch-drafting-lp .arch-faq-head {
  text-align: center;
  margin-bottom: 48px;
}
.arch-drafting-lp .arch-faq-head .section-heading {
  font-size: clamp(28px, 4vw, 38px);
}
.arch-drafting-lp .faq-wrap {
  max-width: 820px;
  margin: 0 auto;
}
.arch-drafting-lp .faq-item {
  border-bottom: 1.5px solid var(--gray-mid);
}
.arch-drafting-lp .faq-q {
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 24px 0;
  font-family: inherit;
  font-size: 18px;
  font-weight: 600;
  line-height: 26px;
  color: #000;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  transition: color 0.2s ease;
  user-select: none;
}
.arch-drafting-lp .faq-q:hover,
.arch-drafting-lp .faq-q.open {
  color: var(--red);
}
.arch-drafting-lp .faq-tog {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 1.5px solid var(--gray-mid);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background 0.2s ease, border-color 0.2s ease, transform 0.3s ease;
}
.arch-drafting-lp .faq-q.open .faq-tog {
  background: var(--red);
  border-color: var(--red);
  transform: rotate(45deg);
}
.arch-drafting-lp .faq-tog svg {
  width: 14px;
  height: 14px;
  stroke: #777;
  stroke-width: 2;
  fill: none;
  transition: stroke 0.2s ease;
}
.arch-drafting-lp .faq-q.open .faq-tog svg {
  stroke: #fff;
}
.arch-drafting-lp .faq-ans {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s ease, padding 0.3s ease;
}
.arch-drafting-lp .faq-ans.open {
  max-height: 2000px;
  padding-bottom: 20px;
}
.arch-drafting-lp .faq-ans p {
  font-size: 16px;
  font-weight: 400;
  line-height: 27px;
  color: var(--gray-text);
  margin: 0;
}
.arch-drafting-lp .arch-faq-cta {
  text-align: center;
  margin-top: 40px;
}
.arch-drafting-lp .arch-faq-cta > p {
  margin-bottom: 16px;
  font-weight: 600;
  color: #000;
}

/* Footer call icon: same as site-wide, fixed bottom-right on this LP (matches former floating CTA position) */
body.vbs-professional-arch-drafting-lp--hide-float-ui .call-icon {
  top: auto !important;
  bottom: 26px !important;
  right: 22px !important;
  left: auto !important;
  transform: none !important;
  z-index: 1040 !important;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.12);
  border-radius: 50%;
}

.arch-drafting-lp .arch-svg-host {
  display: block;
  width: 100%;
  height: 100%;
}
.arch-drafting-lp .portfolio-img .arch-svg-host,
.arch-drafting-lp .hero-svg-wrap .arch-svg-host {
  height: 100%;
}
.arch-drafting-lp .arch-svg-host svg {
  display: block;
  width: 100%;
  height: auto;
}

@media (max-width: 1100px) {
  .arch-drafting-lp .services-grid--vbs {
    grid-template-columns: repeat(2, 1fr);
  }
  .arch-drafting-lp .services-grid--vbs .service-card,
  .arch-drafting-lp .services-grid--vbs .service-card:nth-child(7),
  .arch-drafting-lp .services-grid--vbs .service-card:nth-child(8) {
    grid-column: auto;
  }
}

@media (max-width: 900px) {
  .arch-drafting-lp .contact-grid {
    grid-template-columns: 1fr;
  }
  .arch-drafting-lp .services-header--vbs {
    margin-bottom: 40px;
  }
  .arch-drafting-lp .wrap {
    padding-left: 18px;
    padding-right: 18px;
  }
  .arch-drafting-lp .hero-stats {
    grid-template-columns: 1fr 1fr;
  }
  .arch-drafting-lp .services-grid--vbs {
    grid-template-columns: 1fr;
  }
  .arch-drafting-lp .form-row {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .arch-drafting-lp .arch-portfolio-h2 {
    font-size: clamp(26px, 7vw, 34px);
  }
  .arch-drafting-lp .hero-badges {
    gap: 8px;
    margin-bottom: 22px;
  }
  .arch-drafting-lp .hero-badges .badge {
    font-size: 12px;
    padding: 6px 12px;
  }
}

@media (max-width: 540px) {
  .arch-drafting-lp .hero-support-row {
    flex-direction: column;
    align-items: stretch;
    flex-wrap: nowrap;
    gap: 16px;
    padding: 16px 16px 18px;
  }
  .arch-drafting-lp .hero-support-row .hero-support-line {
    align-items: flex-start;
  }
  .arch-drafting-lp .hero-support-line-icon {
    margin-top: 2px;
  }
  .arch-drafting-lp .hero-support-row .hero-btns {
    width: 100%;
  }
  .arch-drafting-lp .hero-support-row .hero-btns .btn-red,
  .arch-drafting-lp .hero-support-row .hero-btns .hero-get-started-btn {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .arch-drafting-lp section[id] {
    scroll-margin-top: 88px;
  }
  .arch-drafting-lp #hero {
    padding-top: clamp(40px, 9vw, 48px);
    margin-top: 0;
  }
  .arch-drafting-lp #services,
  .arch-drafting-lp #how,
  .arch-drafting-lp #testimonials,
  .arch-drafting-lp #contact,
  .arch-drafting-lp #faq {
    padding-top: clamp(44px, 10vw, 72px);
    padding-bottom: clamp(44px, 10vw, 72px);
  }
  .arch-drafting-lp #services {
    padding-top: clamp(10px, 5vw, 18px);
  }
  .arch-drafting-lp .section-heading {
    font-size: clamp(24px, 7.5vw, 32px);
  }
  .arch-drafting-lp .contact-head .section-heading {
    font-size: clamp(22px, 6.5vw, 28px);
  }
  .arch-drafting-lp .arch-ind-sectors {
    gap: 14px;
    margin-top: 32px;
  }
  .arch-drafting-lp .arch-ind-tile {
    min-height: 140px;
  }
}

@media (max-width: 380px) {
  .arch-drafting-lp .btn-red {
    padding: 12px 22px;
    font-size: 14px;
  }
}
`.trim();

const ARCH_DRAFTING_HIDE_FLOAT = "vbs-professional-arch-drafting-lp--hide-float-ui";

/** Same EmailJS service/template/public key as `download-diy-ada.js`. */
const ZOHO_WIDGET_HIDE_CSS = `body.${ARCH_DRAFTING_HIDE_FLOAT} #zsiq_float,body.${ARCH_DRAFTING_HIDE_FLOAT} .zsiq_floatmain,body.${ARCH_DRAFTING_HIDE_FLOAT} #zsiq_chat_wrap,body.${ARCH_DRAFTING_HIDE_FLOAT} [class*="siqico"],body.${ARCH_DRAFTING_HIDE_FLOAT} [id*="siqico"]{display:none!important;visibility:hidden!important;pointer-events:none!important;opacity:0!important;}`;

const PAGE_META = {
  metaTitle: "Professional Architectural Drafting Services | Virtual Building Studio",
  metaDescription:
    "Construction-ready CAD and Revit drawings by dedicated drafters â€” permit-ready documents, ISO-certified quality, and flexible engagement for AEC firms.",
};

const ARCH_IN_PAGE_NAV = [
  { href: "#services", label: "Services" },
  { href: "#case-studies", label: "Case Studies" },
  { href: "#how", label: "Engagement Models" },
  { href: "#why", label: "Why Us" },
  { href: "#faq", label: "FAQs" },
  { href: "#contact", label: "Contact Us" },
];

/** Tools We Use — Figma 2991:49870 */
const ARCH_TOOLS_CATEGORIES = [
  {
    title: "BIM Modeling & Documentation",
    canvas: "/image/arch-drafting-lp/tools-bim.png",
    canvasAlt:
      "Autodesk Forma, Autodesk Revit, Rhino, and AutoCAD for BIM modeling and documentation",
    row: 1,
  },
  {
    title: "Visualization",
    canvas: "/image/arch-drafting-lp/tools-visualization.png",
    canvasAlt: "Lumion, Enscape, Twinmotion, and D5 Render for visualization",
    row: 1,
  },
  {
    title: "Design & Presentation",
    canvas: "/image/arch-drafting-lp/tools-design.png",
    canvasAlt: "SketchUp and Adobe Photoshop for design and presentation",
    row: 2,
  },
  {
    title: "Coordination",
    canvas: "/image/arch-drafting-lp/tools-coordination.png",
    canvasAlt: "Navisworks for coordination",
    row: 2,
  },
  {
    title: "Documentation & Collaboration",
    canvas: "/image/arch-drafting-lp/tools-documentation.png",
    canvasAlt:
      "Bluebeam, Microsoft Office Suite, and Autodesk Docs for documentation and collaboration",
    row: 2,
  },
];
const ARCH_TOOLS_ROW_1 = ARCH_TOOLS_CATEGORIES.filter(c => c.row === 1);
const ARCH_TOOLS_ROW_2 = ARCH_TOOLS_CATEGORIES.filter(c => c.row === 2);

/** Client Success Stories — Figma 2991:50010 (same videos as prior Real Feedback section). */
const ARCH_ICON = (filename: string) => encodeURI(`/icons/${filename}`);
const ARCH_CONTACT_BENEFITS = [
  {
    title: "Free 30-Minute Scoping Call",
    body:
      "Discuss your project goals, delivery requirements, and technical standards with a senior specialist before getting started.",
    icon: "/icons/arch-drafting-lp/contact-scoping-call.svg",
  },
  {
    title: "Dedicated Team, Not a Project Queue",
    body:
      "Work with a consistent team that understands your standards instead of rotating resources on every project.",
    icon: "/icons/arch-drafting-lp/contact-dedicated-team.svg",
  },
  {
    title: "100% Confidential Project Handling",
    body:
      "Your drawings, data, and intellectual property are protected through secure workflows and strict confidentiality.",
    icon: "/icons/arch-drafting-lp/contact-confidential.svg",
  },
  {
    title: "Built for Firms That Scale",
    body:
      "Expand your drafting capacity as demand grows without the delays and overhead of hiring internally.",
    icon: "/icons/arch-drafting-lp/contact-firms-scale.svg",
  },
];
const ARCH_CLIENT_SUCCESS_STORIES = [
  {
    name: "John Whitten",
    role: "Principal Architect | Whitten Architects",
    quote:
      '"What started as production support became an extension of my practice. Having a dedicated architect who understands my standards has given me the bandwidth to focus on clients, grow the firm, and deliver better projects."',
    avatar: ARCH_ICON("Alec Whitten  1.png"),
    image: "https://img.youtube.com/vi/2NsLtpdtMto/maxresdefault.jpg",
    video: "https://www.youtube.com/watch?v=2NsLtpdtMto",
  },
  {
    name: "Amanda Johnson",
    role: "Founder | LD Architecture",
    quote:
      '"We\'ve seen a three to four times improvement in efficiency. Having a dedicated architect and a scalable production team has given us back valuable time while helping us deliver more projects."',
    avatar: ARCH_ICON("Lexent Design  1.png"),
    avatarCover: true,
    image: "https://img.youtube.com/vi/uyaBPQrNhW0/maxresdefault.jpg",
    video: "https://www.youtube.com/watch?v=uyaBPQrNhW0",
  },
  {
    name: "Prashant Mahakali",
    role: "Principal Architect | PMPC Architects",
    quote:
      '"Our dedicated architect integrated so seamlessly that they became no different from one of our in-house staff. That support helped us scale our delivery and reach our first $1M in annual revenue sooner than expected."',
    avatar: ARCH_ICON("Pmpc 1.png"),
    image: "https://img.youtube.com/vi/nHNRCMkaGAk/hqdefault.jpg",
    video: "https://www.youtube.com/watch?v=nHNRCMkaGAk",
  },
];

/** Trust strip — Figma 2991:49195 */
const ARCH_TRUST_STRIP_STATS = [
  { target: 2000, suffix: "+", label: "Licensed Architects", color: "#D70416" },
  { target: 98, suffix: "%", label: "Client Retention", color: "#42AA32" },
  { target: 9, suffix: "+", label: "Month Avg Engagement", color: "#2299D6" },
  { target: 11, suffix: "+", label: "Years of Experience", color: "#F0B300" },
];

/** Services we offer — Figma 2991:49344 */
const ARCH_SERVICES_OFFERED = [
  {
    title: "Design Development",
    description:
      "From floor plans and elevations to detailed section drawings, we produce coordinated architectural documentation aligned with your CAD standards and design intent.",
    bullets: [
      "Floor plans, elevations, and sections",
      "Dimensioned layouts and annotations",
      "Façade details and material callouts",
      "Construction ready documentation",
    ],
    image: "/image/arch-drafting-lp/service-design-development.png",
    imageAlt: "Architectural design development floor plan documentation",
    imageLeft: true,
  },
  {
    title: "Construction Documentation",
    description:
      "We prepare site plans, construction documentation, and as built drawings that support every stage of project execution.",
    bullets: [
      "Site plans and permit documentation",
      "Plans, sections, details, and schedules",
      "Accurate as built drawings",
      "Built for construction and approvals",
    ],
    image: "/image/arch-drafting-lp/service-construction-delivery.png",
    imageAlt: "Construction delivery site plan documentation",
    imageLeft: false,
  },
  {
    title: "Detailed Drafting",
    description:
      "We produce precise architectural detail drawings that communicate critical construction information for accurate site execution.",
    bullets: [
      "Wall, window, and door details",
      "Curtain wall, roof, and stair sections",
      "Construction assemblies and material callouts",
      "Buildable details for site execution and coordination",
    ],
    image: "/image/arch-drafting-lp/service-detailed-drafting.png",
    imageAlt: "Detailed architectural drafting sections and construction details",
    imageLeft: true,
  },
];

/** Case studies carousel — Figma 2991:49691 */
const ARCH_CASE_STUDIES = [
  {
    id: "aecom",
    logo: "/image/arch-drafting-lp/case-aecom-logo.png",
    logoAlt: "AECOM",
    summary:
      "Scaled BIM production capacity through a dedicated Build-Operate-Transfer (B-O-T) engagement.",
    stats: [
      { label: "Engagement", value: "3 Years\nBuild-Operate-Transfer" },
      { label: "Team", value: "50 Dedicated Architects\n& Engineers" },
      { label: "Partnership", value: "18+ Projects Delivered" },
    ],
    listTitle: "Scope",
    listItems: [
      "SD, DD & CD Documentation",
      "Construction Documentation & Permit Sets",
      "Coordinated BIM & Revit Models",
      "Architectural & MEP Shop Drawings",
      "Clash Detection & Design Coordination",
      "Ongoing Production Support Across Multiple Programs",
    ],
    outcomeTitle: "Outcome",
    outcome:
      "Built and scaled a 50-member dedicated production team, enabling AECOM to accelerate BIM delivery, maintain consistent documentation standards, and support 18+ infrastructure and building projects through a long-term production partnership.",
    gallery: [
      "/image/arch-drafting-lp/case-aecom-main.png",
      "/image/arch-drafting-lp/case-aecom-t1.png",
      "/image/arch-drafting-lp/case-aecom-t2.png",
      "/image/arch-drafting-lp/case-aecom-t3.png",
      "/image/arch-drafting-lp/case-aecom-t4.png",
      "/image/aecom-project-1.jpg",
      "/image/aecom-project-2.jpg",
      "/image/aecom-slider-image.png",
      "/image/aecom-case-list-img.png",
    ],
    thumbCount: 5,
    moreCount: 5,
  },
  {
    id: "sunway",
    logo: "/image/arch-drafting-lp/case-sunway-logo.png",
    logoAlt: "Sunway Construction",
    summary:
      "Strengthened BIM delivery capabilities through a long-term Dedicated Resource engagement.",
    stats: [
      { label: "Engagement", value: "7-Year Engagement\nDedicated Resource Model" },
      { label: "Team", value: "30 Dedicated Architects\n& Engineers" },
      { label: "Partnership", value: "20+ Projects" },
    ],
    listTitle: "Delivery Responsibility",
    listItems: [
      "End-to-end BIM production for government projects",
      "Architectural documentation Services",
      "Revit modeling aligned with project standards",
      "Multi-disciplinary coordination & clash resolution",
      "Production support for evolving BIM workflows",
      "Dedicated team for daily delivery operations",
    ],
    outcomeTitle: "Outcome",
    outcome:
      "Rapidly built a 30-member dedicated architectural and BIM team within just 2 months, enabling Sunway Construction to standardize BIM delivery, improve project coordination, and successfully execute complex government and commercial developments.",
    gallery: [
      "/image/arch-drafting-lp/case-sunway-main.png",
      "/image/arch-drafting-lp/case-sunway-t1.png",
      "/image/arch-drafting-lp/case-sunway-t2.png",
      "/image/arch-drafting-lp/case-sunway-t3.png",
      "/image/sunway-project-1.jpg",
      "/image/sunway-project-2.jpg",
    ],
    thumbCount: 5,
    moreCount: 2,
  },
  {
    id: "horizon",
    logo: "/image/arch-drafting-lp/case-horizon-logo.png",
    logoAlt: "New Horizon",
    summary: "Expanded production capacity through a dedicated architectural delivery team.",
    stats: [
      { label: "Engagement", value: "5-Year Engagement\nDedicated Resource Model" },
      { label: "Team", value: "9 Dedicated Architects" },
      { label: "Partnership", value: "35+ Projects" },
    ],
    listTitle: "Delivery Responsibility",
    listItems: [
      "SD, DD & CD Documentation",
      "Construction Documentation & Permit Sets",
      "Architectural BIM Modeling",
      "Design Development Support",
      "Detailed Drawing Production",
      "Ongoing Production Support Across Multiple Projects",
    ],
    outcomeTitle: "Outcome",
    outcome:
      "Established a 9-member dedicated architectural team in just 3 days, increasing production efficiency by 4×, reducing internal workload, and enabling the firm to deliver more projects while maintaining consistent documentation quality.",
    gallery: [
      "/image/arch-drafting-lp/case-horizon-main.png",
      "/image/arch-drafting-lp/case-horizon-t1.png",
      "/image/arch-drafting-lp/case-horizon-t2.png",
      "/image/arch-drafting-lp/case-horizon-t3.png",
    ],
    thumbCount: 4,
    moreCount: 0,
  },
];

const ARCH_DRAWING_TYPES_GRID = [
  { label: "Floor Plans", showBullet: true },
  { label: "Site Plans", showBullet: true },
  { label: "Elevations", showBullet: true },
  { label: "Section Drawings", showBullet: true },
  { label: "Reflected Ceiling Plans", showBullet: true },
  { label: "Structural Drawings", showBullet: true },
  { label: "Mechanical Layouts", showBullet: true },
  { label: "Electrical Layouts", showBullet: true },
  { label: "Plumbing Drawings", showBullet: true },
  { label: "Interior Detailing", showBullet: true },
  { label: "Door & Window Schedules", showBullet: true },
  { label: "FaÃ§ade Drawings", showBullet: true },
];

function ArchServiceCardIcon({
  name,
}: {
  name: "floor" | "elevation" | "section" | "site" | "construction" | "revit" | "pdf" | "asbuilt";
}) {
  const svgProps = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };
  switch (name) {
    case "floor":
      return (
        <svg {...svgProps}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18" />
          <path d="M9 21V9" />
        </svg>
      );
    case "elevation":
      return (
        <svg {...svgProps}>
          <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18" />
          <path d="M6 12H4a2 2 0 0 0-2 2v8h20v-8a2 2 0 0 0-2-2h-2" />
          <rect x="10" y="18" width="4" height="4" />
          <path d="M10 6h4" />
          <path d="M10 10h4" />
        </svg>
      );
    case "section":
      return (
        <svg {...svgProps}>
          <circle cx="6" cy="6" r="3" />
          <circle cx="6" cy="18" r="3" />
          <line x1="20" y1="4" x2="8.12" y2="15.88" />
          <line x1="14.47" y1="14.48" x2="20" y2="20" />
          <line x1="8.12" y1="8.12" x2="12" y2="12" />
        </svg>
      );
    case "site":
      return (
        <svg {...svgProps}>
          <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
          <line x1="9" y1="3" x2="9" y2="18" />
          <line x1="15" y1="6" x2="15" y2="21" />
        </svg>
      );
    case "construction":
      return (
        <svg {...svgProps}>
          <path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2" />
        </svg>
      );
    case "revit":
      return (
        <svg {...svgProps}>
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <rect x="9" y="9" width="6" height="6" />
          <path d="M15 2v2M9 2v2M2 9h2M2 15h2M22 9h-2M22 15h-2M15 22v-2M9 22v-2" />
        </svg>
      );
    case "pdf":
      return (
        <svg {...svgProps}>
          <path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4" />
          <polyline points="14 2 14 8 20 8" />
          <path d="m3 15 2 2 4-4" />
        </svg>
      );
    case "asbuilt":
      return (
        <svg {...svgProps}>
          <path d="M3 7V5a2 2 0 0 1 2-2h2" />
          <path d="M17 3h2a2 2 0 0 1 2 2v2" />
          <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
          <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
          <line x1="7" y1="12" x2="17" y2="12" />
        </svg>
      );
    default:
      return null;
  }
}

const ARCH_WHY_STAY_CARDS = [
  {
    title: "Dedicated Resource",
    body: "Work with the same architect or drafting team across your projects, ensuring familiarity with your standards and delivery expectations.",
    icon: "/icons/dedicated-resource-icon.svg",
  },
  {
    title: "Continuity",
    body: "Your CAD standards, shared parameters, naming conventions, and workflows become embedded within our team not relearned for every project.",
    icon: "/icons/continuity-icon.svg",
  },
  {
    title: "96% Client Retention",
    body: "Long-term client relationships reflect the consistency, quality, and reliability we bring to every engagement.",
    icon: "/icons/client-retention-icon.svg",
  },
  {
    title: "Scale With You",
    body: "Expand your drafting capacity as your firm grows, without restructuring teams or renegotiating your engagement.",
    icon: "/icons/scale-with-you-icon.svg",
  },
];

const ARCH_SVG_0 = "<svg viewBox=\"0 0 580 440\" xmlns=\"http://www.w3.org/2000/svg\" style=\"background:#F8F8F8\">\n            <!-- Grid background -->\n            <defs>\n              <pattern id=\"grid\" width=\"20\" height=\"20\" patternUnits=\"userSpaceOnUse\">\n                <path d=\"M 20 0 L 0 0 0 20\" fill=\"none\" stroke=\"#E8E8E8\" stroke-width=\"0.5\"/>\n              </pattern>\n              <pattern id=\"grid2\" width=\"100\" height=\"100\" patternUnits=\"userSpaceOnUse\">\n                <path d=\"M 100 0 L 0 0 0 100\" fill=\"none\" stroke=\"#DDD\" stroke-width=\"1\"/>\n              </pattern>\n            </defs>\n            <rect width=\"580\" height=\"440\" fill=\"url(#grid)\"/>\n            <rect width=\"580\" height=\"440\" fill=\"url(#grid2)\" opacity=\".5\"/>\n\n            <!-- Title block -->\n            <rect x=\"18\" y=\"18\" width=\"544\" height=\"404\" fill=\"none\" stroke=\"#BDBDBD\" stroke-width=\"1.5\"/>\n            <rect x=\"22\" y=\"22\" width=\"536\" height=\"396\" fill=\"none\" stroke=\"#BDBDBD\" stroke-width=\".5\"/>\n\n            <!-- Floor Plan: Outer walls -->\n            <rect x=\"60\" y=\"60\" width=\"320\" height=\"240\" fill=\"none\" stroke=\"#333\" stroke-width=\"3\"/>\n            <!-- Inner rooms -->\n            <line x1=\"200\" y1=\"60\" x2=\"200\" y2=\"300\" stroke=\"#333\" stroke-width=\"2.5\"/>\n            <line x1=\"60\" y1=\"175\" x2=\"380\" y2=\"175\" stroke=\"#333\" stroke-width=\"2.5\"/>\n            <line x1=\"200\" y1=\"210\" x2=\"380\" y2=\"210\" stroke=\"#333\" stroke-width=\"2\"/>\n            <!-- Windows -->\n            <line x1=\"90\" y1=\"60\" x2=\"150\" y2=\"60\" stroke=\"#D70416\" stroke-width=\"3\"/>\n            <line x1=\"220\" y1=\"60\" x2=\"290\" y2=\"60\" stroke=\"#D70416\" stroke-width=\"3\"/>\n            <line x1=\"310\" y1=\"60\" x2=\"370\" y2=\"60\" stroke=\"#D70416\" stroke-width=\"3\"/>\n            <line x1=\"380\" y1=\"100\" x2=\"380\" y2=\"145\" stroke=\"#D70416\" stroke-width=\"3\"/>\n            <line x1=\"380\" y1=\"230\" x2=\"380\" y2=\"270\" stroke=\"#D70416\" stroke-width=\"3\"/>\n            <!-- Doors -->\n            <path d=\"M 175 175 Q 175 155 195 155\" fill=\"none\" stroke=\"#888\" stroke-width=\"1.5\" stroke-dasharray=\"2,2\"/>\n            <line x1=\"175\" y1=\"175\" x2=\"195\" y2=\"175\" stroke=\"#333\" stroke-width=\"2\"/>\n            <path d=\"M 290 210 Q 290 225 275 225\" fill=\"none\" stroke=\"#888\" stroke-width=\"1.5\" stroke-dasharray=\"2,2\"/>\n            <line x1=\"275\" y1=\"210\" x2=\"290\" y2=\"210\" stroke=\"#333\" stroke-width=\"2\"/>\n\n            <!-- Room labels -->\n            <text x=\"120\" y=\"128\" text-anchor=\"middle\" font-size=\"9\" fill=\"#555\" font-family=\"Segoe UI\" font-weight=\"600\">LIVING ROOM</text>\n            <text x=\"120\" y=\"250\" text-anchor=\"middle\" font-size=\"9\" fill=\"#555\" font-family=\"Segoe UI\" font-weight=\"600\">BEDROOM 01</text>\n            <text x=\"295\" y=\"128\" text-anchor=\"middle\" font-size=\"9\" fill=\"#555\" font-family=\"Segoe UI\" font-weight=\"600\">KITCHEN</text>\n            <text x=\"295\" y=\"245\" text-anchor=\"middle\" font-size=\"9\" fill=\"#555\" font-family=\"Segoe UI\" font-weight=\"600\">BATH</text>\n            <text x=\"295\" y=\"275\" text-anchor=\"middle\" font-size=\"7\" fill=\"#777\" font-family=\"Segoe UI\">3.2 Ã— 2.8 M</text>\n\n            <!-- Dimension lines -->\n            <line x1=\"60\" y1=\"330\" x2=\"380\" y2=\"330\" stroke=\"#888\" stroke-width=\"1\"/>\n            <line x1=\"60\" y1=\"326\" x2=\"60\" y2=\"334\" stroke=\"#888\" stroke-width=\"1\"/>\n            <line x1=\"380\" y1=\"326\" x2=\"380\" y2=\"334\" stroke=\"#888\" stroke-width=\"1\"/>\n            <text x=\"220\" y=\"344\" text-anchor=\"middle\" font-size=\"9\" fill=\"#666\" font-family=\"Segoe UI\">18,500</text>\n\n            <line x1=\"415\" y1=\"60\" x2=\"415\" y2=\"300\" stroke=\"#888\" stroke-width=\"1\"/>\n            <line x1=\"411\" y1=\"60\" x2=\"419\" y2=\"60\" stroke=\"#888\" stroke-width=\"1\"/>\n            <line x1=\"411\" y1=\"300\" x2=\"419\" y2=\"300\" stroke=\"#888\" stroke-width=\"1\"/>\n            <text x=\"430\" y=\"185\" text-anchor=\"middle\" font-size=\"9\" fill=\"#666\" font-family=\"Segoe UI\" transform=\"rotate(90,430,185)\">12,000</text>\n\n            <!-- North arrow -->\n            <g transform=\"translate(468,72)\">\n              <circle cx=\"0\" cy=\"0\" r=\"22\" fill=\"none\" stroke=\"#BDBDBD\" stroke-width=\"1.5\"/>\n              <polygon points=\"0,-16 5,8 0,3 -5,8\" fill=\"#333\"/>\n              <polygon points=\"0,16 5,-8 0,-3 -5,-8\" fill=\"#CCC\"/>\n              <text x=\"0\" y=\"-24\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"700\" fill=\"#333\" font-family=\"Segoe UI\">N</text>\n            </g>\n\n            <!-- Scale bar -->\n            <g transform=\"translate(450,340)\">\n              <rect x=\"0\" y=\"0\" width=\"20\" height=\"7\" fill=\"#333\"/>\n              <rect x=\"20\" y=\"0\" width=\"20\" height=\"7\" fill=\"#fff\" stroke=\"#333\" stroke-width=\".5\"/>\n              <rect x=\"40\" y=\"0\" width=\"20\" height=\"7\" fill=\"#333\"/>\n              <rect x=\"60\" y=\"0\" width=\"20\" height=\"7\" fill=\"#fff\" stroke=\"#333\" stroke-width=\".5\"/>\n              <text x=\"0\" y=\"18\" font-size=\"7.5\" fill=\"#555\" font-family=\"Segoe UI\">0   5   10   15m</text>\n              <text x=\"0\" y=\"-6\" font-size=\"7.5\" fill=\"#555\" font-family=\"Segoe UI\">SCALE 1:100</text>\n            </g>\n\n            <!-- Title block bottom -->\n            <rect x=\"22\" y=\"374\" width=\"536\" height=\"44\" fill=\"#F0F0F0\" stroke=\"#BDBDBD\" stroke-width=\".5\"/>\n            <line x1=\"200\" y1=\"374\" x2=\"200\" y2=\"418\" stroke=\"#BDBDBD\" stroke-width=\".5\"/>\n            <line x1=\"380\" y1=\"374\" x2=\"380\" y2=\"418\" stroke=\"#BDBDBD\" stroke-width=\".5\"/>\n            <line x1=\"480\" y1=\"374\" x2=\"480\" y2=\"418\" stroke=\"#BDBDBD\" stroke-width=\".5\"/>\n            <text x=\"111\" y=\"390\" text-anchor=\"middle\" font-size=\"8\" fill=\"#444\" font-family=\"Segoe UI\" font-weight=\"600\">PROJECT NAME</text>\n            <text x=\"111\" y=\"403\" text-anchor=\"middle\" font-size=\"7.5\" fill=\"#777\" font-family=\"Segoe UI\">Residential Floor Plan</text>\n            <text x=\"290\" y=\"390\" text-anchor=\"middle\" font-size=\"8\" fill=\"#444\" font-family=\"Segoe UI\" font-weight=\"600\">DRAWING TITLE</text>\n            <text x=\"290\" y=\"403\" text-anchor=\"middle\" font-size=\"7.5\" fill=\"#777\" font-family=\"Segoe UI\">Ground Floor Plan</text>\n            <text x=\"430\" y=\"390\" text-anchor=\"middle\" font-size=\"8\" fill=\"#444\" font-family=\"Segoe UI\" font-weight=\"600\">DRAWN BY</text>\n            <text x=\"430\" y=\"403\" text-anchor=\"middle\" font-size=\"7.5\" fill=\"#D70416\" font-family=\"Segoe UI\" font-weight=\"600\">VirtualBuilding Studio</text>\n            <text x=\"528\" y=\"390\" text-anchor=\"middle\" font-size=\"8\" fill=\"#444\" font-family=\"Segoe UI\" font-weight=\"600\">SHEET</text>\n            <text x=\"528\" y=\"403\" text-anchor=\"middle\" font-size=\"7.5\" fill=\"#777\" font-family=\"Segoe UI\">A-101</text>\n          </svg>";
const ARCH_WEDDINGTON_RENDER = "/image/Scene-5.jpg";
/** Hero visual — CAD Drafting Services sheet */
const ARCH_HERO_IMAGE = {
  src: "/image/arch-drafting-lp/hero-cad-drafting-v2.png",
  alt: "Architectural drafting documentation — floor plan, elevations, and construction details",
};

const ARCH_PORTFOLIO_PROJECTS = [
  {
    id: "weddington",
    badge: "Residential",
    title: "Weddington Home",
    metadata: "",
    description: "Residential new build â€” from concept visualization through coordinated construction documentation.",
    ctaLabel: "View Full Portfolio",
    processTagline: "See how this project evolved from render to construction-ready drawings.",
    heroImage: "/image/weddington-home-Comp.jpg",
    heroImageAlt: "Residential visualization â€” Weddington Home",
    slides: [
      {
        src: ARCH_WEDDINGTON_RENDER,
        alt: "Concept visualization â€” Weddington Home",
        title: "3D Visualization",
        subtitle: "Design intent and massing before the drawing set is developed.",
      },
      {
        src: "/image/SITE PLAN .jpg",
        alt: "Site plan â€” Weddington Home",
        title: "Site Plan",
        subtitle: "Site layout, setbacks, and access coordinated for planning review.",
      },
      {
        src: "/image/FLOOR PLAN-weddington.jpg",
        alt: "Floor plan â€” Weddington Home",
        title: "Floor Plan",
        subtitle: "Ground-level plan with openings, structure, and room logic.",
      },
      {
        src: "/image/NORTH ELEVATION  .jpg",
        alt: "North elevation â€” Weddington Home",
        title: "North Elevation",
        subtitle: "FaÃ§ade, materials, and vertical dimensions for the north face.",
      },
      {
        src: "/image/SOUTH ELEVATION .jpg",
        alt: "South elevation â€” Weddington Home",
        title: "South Elevation",
        subtitle: "Opposite elevation coordinated with plans and sections.",
      },
      {
        src: "/image/EAST ELEVATION .jpg",
        alt: "East elevation â€” Weddington Home",
        title: "East Elevation",
        subtitle: "East-side facade profile with aligned levels and openings.",
      },
      {
        src: "/image/WEST ELEVATION .jpg",
        alt: "West elevation â€” Weddington Home",
        title: "West Elevation",
        subtitle: "West-side facade profile coordinated with the full drawing set.",
      },
      {
        src: "/image/SECTTION 1.jpg",
        alt: "Section 1 â€” Weddington Home",
        title: "Section ",
        subtitle: "Primary cut through structure, levels, and vertical circulation.",
      },
      {
        src: "/image/SECTTION 2 .jpg",
        alt: "Section 2 â€” Weddington Home",
        title: "Section ",
        subtitle: "Secondary section clarifying assemblies and critical junctions.",
      },
      {
        src: ARCH_WEDDINGTON_RENDER,
        alt: "Final visualization â€” Weddington Home",
        title: "External Visualization",
        subtitle: "Closing the loop â€” completed documentation aligned with the original design intent.",
      },
    ],
  },
  {
    id: "mechanicsville",
    badge: "Residential",
    title: "Mechaniscville",
    metadata: "",
    description: "Residential drafting set from visualization to coordinated architectural sheets.",
    ctaLabel: "View Full Portfolio",
    processTagline: "Trace the project from first render through technical sheets and back to the finished vision.",
    heroImage: "/image/mechasville-Comp.jpg",
    heroImageAlt: "Residential render â€” Mechaniscville",
    slides: [
      {
        src: "/image/Render-2.jpg",
        alt: "Render â€” Mechaniscville",
        title: "3D Visualization",
        subtitle: "Exterior visualization before technical drafting progression.",
      },
      {
        src: "/image/SITE PLAN-mechanicsville.jpg",
        alt: "Site plan â€” Mechanicsville",
        title: "Site Plan",
        subtitle: "Overall site layout and placement context before detailed drafting.",
      },
      {
        src: "/image/BASEMENT-mechanics-ville.jpg",
        alt: "Basement plan â€” Mechanicsville",
        title: "Basement Plan",
        subtitle: "Basement-level layout and foundational planning references.",
      },
      {
        src: "/image/1ST FLOOR.jpg",
        alt: "First floor plan â€” Mechanicsville",
        title: "First Floor Plan",
        subtitle: "Primary floor arrangement and circulation planning.",
      },
      {
        src: "/image/mechanics-ville-2ND FLOOR.jpg",
        alt: "Second floor plan â€” Mechanicsville",
        title: "Second Floor Plan",
        subtitle: "Upper-level spatial layout and room coordination.",
      },
      {
        src: "/image/ROOF PLAN.jpg",
        alt: "Roof plan â€” Mechanicsville",
        title: "Roof Plan",
        subtitle: "Roof geometry and top-level structural reference plan.",
      },
      {
        src: "/image/FRONT ELEVTION.jpg",
        alt: "Front elevation â€” Mechanicsville",
        title: "Front Elevation",
        subtitle: "Front facade detailing with levels, openings, and proportions.",
      },
      {
        src: "/image/BACK ELEVATION.jpg",
        alt: "Back elevation â€” Mechanicsville",
        title: "Back Elevation",
        subtitle: "Rear facade composition with vertical level references.",
      },
      {
        src: "/image/LEFT ELEVATION.jpg",
        alt: "Left elevation â€” Mechanicsville",
        title: "Left Elevation",
        subtitle: "Left-side architectural profile and facade detailing.",
      },
      {
        src: "/image/RIGHT ELEVATION.jpg",
        alt: "Right elevation â€” Mechanicsville",
        title: "Right Elevation",
        subtitle: "Right-side architectural profile and facade detailing.",
      },
      {
        src: "/image/SECTION  1.jpg",
        alt: "Section 1 â€” Mechanicsville",
        title: "Section ",
        subtitle: "Primary building section showing vertical organization.",
      },
      {
        src: "/image/SECTION 2-mechanisville.jpg",
        alt: "Section 2 â€” Mechanicsville",
        title: "Section ",
        subtitle: "Secondary section clarifying interior relationships.",
      },
      {
        src: "/image/SECTION 3.jpg",
        alt: "Section 3 â€” Mechanicsville",
        title: "Section ",
        subtitle: "Section cut highlighting structural and floor-level alignment.",
      },
      {
        src: "/image/SECTION 4.jpg",
        alt: "Section 4 â€” Mechanicsville",
        title: "Section ",
        subtitle: "Additional sectional view for complete documentation coverage.",
      },
      {
        src: "/image/Render-2.jpg",
        alt: "Final render â€” Mechaniscville",
        title: "External Visualization",
        subtitle: "Completed drawing package aligned with final visual intent.",
      },
    ],
  },
  {
    id: "taos-ski-valley",
    badge: "Commercial",
    title: "Taos Ski Valley",
    metadata: "",
    description: "Drawing package progression from site studies to coordinated architectural sets.",
    ctaLabel: "Explore Drawing Set",
    processTagline: "Follow the project from master planning through detailed drawing sheets.",
    heroImage: "/image/taos-sky-ville-Comp.jpg",
    heroImageAlt: "Taos Ski Valley portfolio preview",
    slides: [
      {
        src: "/image/tsv 2.png",
        alt: "Render â€” Taos Ski Valley",
        title: "3D Visualization",
        subtitle: "Initial project visualization before detailed documentation.",
      },
      {
        src: "/image/Site Plan.jpg",
        alt: "Master plan â€” Taos Ski Valley",
        title: "Site Plan",
        subtitle: "Overall site strategy and placement within terrain context.",
      },
      {
        src: "/image/Floor Plan.jpg",
        alt: "Taos Ski Valley set 2",
        title: "Floor Plan",
        subtitle: "Early planning and alignment sheets for design coordination.",
      },
      {
        src: "/image/Front Elevation.jpg",
        alt: "Taos Ski Valley set 3",
        title: "Front Elevation",
        subtitle: "Architectural development documents with refined layout intent.",
      },
      {
        src: "/image/Right Side Elevation.jpg",
        alt: "Taos Ski Valley set 6",
        title: "Right Side Elevation",
        subtitle: "Coordinated plan and section information for submission readiness.",
      },
      {
        src: "/image/Left Side Elevation.jpg",
        alt: "Taos Ski Valley set 8",
        title: "Left Side Elevation",
        subtitle: "Advanced detailing and dimensional controls for project accuracy.",
      },
      {
        src: "/image/Section 1.jpg",
        alt: "Taos Ski Valley set 10",
        title: "Building Section 1",
        subtitle: "Final package sheet showing completed design documentation output.",
      },
      {
        src: "/image/Section 2.jpg",
        alt: "Final render â€” Taos Ski Valley",
        title: "Building Section 2",
        subtitle: "Final visualization after full architectural drawing development.",
      },
      {
        src: "/image/tsv 2.png",
        alt: "Final render â€” Taos Ski Valley",
        title: "External Visualization",
        subtitle: "Final visualization after full architectural drawing development.",
      },
    ],
  },
  {
    id: "manor-drive",
    badge: "Residential",
    title: "Manor drive",
    metadata: "",
    description: "Residential redevelopment package from render to coordinated elevation, section, and site sheets.",
    ctaLabel: "Explore Drawing Set",
    processTagline: "Walk through Manor drive from exterior concept render to final site and section documentation.",
    heroImage: "/image/Render-2-manor-drive-Comp.jpg",
    heroImageAlt: "Render â€” Manor drive",
    slides: [
      {
        src: "/image/Render-2-manor-drive.jpg",
        alt: "Render â€” Manor drive",
        title: "3D Visualization",
        subtitle: "Exterior concept before detailed drawing sequence.",
      },
      {
        src: "/image/manor-site plan.jpg",
        alt: "Proposed site plan â€” Manor drive",
        title: "Site Plan",
        subtitle: "Planned site layout with updated building and circulation strategy.",
      },
      {
        src: "/image/first floor.jpg",
        alt: "Front elevation â€” Manor drive",
        title: "First Floor Plan",
        subtitle: "Main elevation with facade composition and datum coordination.",
      },
      {
        src: "/image/2nd floor.jpg",
        alt: "Back elevation â€” Manor drive",
        title: "Second Floor Plan",
        subtitle: "Rear facade alignment, openings, and level references.",
      },
      {
        src: "/image/basement.jpg",
        alt: "Building section â€” Manor drive",
        title: "Basement Floor Plan",
        subtitle: "Primary section cut defining vertical organization and structure.",
      },
      {
        src: "/image/front e.jpg",
        alt: "Building section 2 â€” Manor drive",
        title: "Front Elevation",
        subtitle: "Secondary cut for additional spatial and construction clarity.",
      },
      {
        src: "/image/back e.jpg",
        alt: "Back elevation â€” Manor drive",
        title: "Back Elevation",
        subtitle: "Current site condition used as baseline for proposal mapping.",
      },
      {
        src: "/image/right e.jpg",
        alt: "Right elevation â€” Manor drive",
        title: "Right Elevation",
        subtitle: "Final render closing the documentation sequence.",
      },
      {
        src: "/image/left e.jpg",
        alt: "Left elevation â€” Manor drive",
        title: "Left Elevation",
        subtitle: "Final elevation closing the documentation sequence.",
      },
      {
        src: "/image/manor-drive-section 1.jpg",
        alt: "Building section 1 â€” Manor drive",
        title: " Section ",
        subtitle: "Final package sheet showing completed design documentation output.",
      },
      {
        src: "/image/manor-drive-Section 2.jpg",
        alt: "Building section 1 â€” Manor drive",
        title: " Section ",
        subtitle: "Final package sheet showing completed design documentation output.",
      },
      {
        src: "/image/Section.jpg",
        alt: "Building section 1 â€” Manor drive",
        title: " Section ",
        subtitle: "Final package sheet showing completed design documentation output.",
      },
      {
        src: "/image/Render-2-manor-drive.jpg",
        alt: "Final render â€” Manor drive",
        title: "External Visualization",
        subtitle: "Final visualization after full architectural drawing development.",
      },
    ],
  },
];

const ARCH_ICON_MAP = {
  "building-2": LuBuilding2,
  "check-circle": LuCircleCheck,
  "check-circle-2": LuCircleCheck,
  "cpu": LuCpu,
  "file-scan": LuFileScan,
  "folder-open": LuFolderOpen,
  "layout-template": LuLayoutTemplate,
  "lock": LuLock,
  "map": LuMap,
  "scan-line": LuScanLine,
  "scissors": LuScissors,
  "upload-cloud": LuCloudUpload,
};

function renderArchIcon(
  name: keyof typeof ARCH_ICON_MAP,
  size = 18,
  style?: React.CSSProperties,
) {
  const Cmp = ARCH_ICON_MAP[name];
  if (!Cmp) return null;
  return <Cmp size={size} strokeWidth={2} style={style} aria-hidden />;
}

export function ProfessionalArchitecturalDraftingServicesView() {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [activeVideo, setActiveVideo] = useState<(typeof ARCH_CLIENT_SUCCESS_STORIES)[number] | null>(
    null,
  );
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [archNavExpanded, setArchNavExpanded] = useState(false);
  const [portfolioCarouselIndex, setPortfolioCarouselIndex] = useState(0);
  const [portfolioCarouselDir, setPortfolioCarouselDir] = useState(1);
  const [portfolioModalIndex, setPortfolioModalIndex] = useState<number | null>(null);
  const [portfolioModalSlide, setPortfolioModalSlide] = useState(0);
  const [portfolioModalDir, setPortfolioModalDir] = useState(1);
  const [portfolioModalZoom, setPortfolioModalZoom] = useState(1);
  const [portfolioModalZoomOrigin, setPortfolioModalZoomOrigin] = useState("50% 50%");
  const trustStripRef = useRef<HTMLElement>(null);
  const trustStatsAnimatedRef = useRef(false);
  const [trustCounts, setTrustCounts] = useState(() => ARCH_TRUST_STRIP_STATS.map(() => 1));
  const caseStudiesTrackRef = useRef<HTMLDivElement>(null);
  const caseStudiesProgressTrackRef = useRef<HTMLDivElement>(null);
  const caseStudiesProgressThumbRef = useRef<HTMLDivElement>(null);
  const archHeaderRef = useRef<HTMLElement>(null);
  const [archHeaderHeight, setArchHeaderHeight] = useState(112);
  const [caseGalleryIndexes, setCaseGalleryIndexes] = useState(() => ARCH_CASE_STUDIES.map(() => 0));
  const [caseTrackScrolled, setCaseTrackScrolled] = useState(false);
  const [caseScrollProgress, setCaseScrollProgress] = useState(0);
  const [caseCanScrollPrev, setCaseCanScrollPrev] = useState(false);
  const [caseCanScrollNext, setCaseCanScrollNext] = useState(true);
  const [caseProgressMaxOffset, setCaseProgressMaxOffset] = useState(0);

  useEffect(() => {
    document.body.classList.add(ARCH_DRAFTING_HIDE_FLOAT);
    return () => document.body.classList.remove(ARCH_DRAFTING_HIDE_FLOAT);
  }, []);

  useEffect(() => {
    ensureNimbusBookingScript().catch(() => {});
  }, []);

  const scrollToConnectForm = () => {
    scrollToPageSection("#quote", { behavior: "smooth", updateHash: true });
  };

  useEffect(() => {
    const el = archHeaderRef.current;
    if (!el || typeof window === "undefined") return undefined;

    const updateHeaderHeight = () => {
      const next = Math.ceil(el.getBoundingClientRect().height);
      if (!next) return;
      setArchHeaderHeight(next);
      document.documentElement.style.setProperty("--arch-lp-header-height", `${next}px`);
    };

    updateHeaderHeight();
    const ro =
      typeof ResizeObserver !== "undefined" ? new ResizeObserver(updateHeaderHeight) : null;
    if (ro) ro.observe(el);
    window.addEventListener("resize", updateHeaderHeight);

    return () => {
      if (ro) ro.disconnect();
      window.removeEventListener("resize", updateHeaderHeight);
      document.documentElement.style.removeProperty("--arch-lp-header-height");
    };
  }, []);

  useEffect(() => {
    const roots = document.querySelectorAll(".arch-drafting-lp");
    if (!roots.length) return undefined;

    const els: Element[] = [];
    roots.forEach(root => {
      root.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach(el => els.push(el));
    });
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08 },
    );
    els.forEach(el => io.observe(el));

    return () => {
      io.disconnect();
    };
  }, []);

  useEffect(() => {
    const el = caseStudiesTrackRef.current;
    if (!el) return undefined;

    let paused = false;
    const pause = () => {
      paused = true;
    };
    const resume = () => {
      paused = false;
    };
    const syncScrollState = () => {
      const maxScroll = Math.max(0, el.scrollWidth - el.clientWidth);
      const left = el.scrollLeft;
      setCaseTrackScrolled(left > 24);
      setCaseCanScrollPrev(left > 4);
      setCaseCanScrollNext(left < maxScroll - 4);
      setCaseScrollProgress(maxScroll > 0 ? Math.min(1, left / maxScroll) : 0);
    };
    syncScrollState();

    el.addEventListener("scroll", syncScrollState, { passive: true });
    el.addEventListener("mouseenter", pause);
    el.addEventListener("mouseleave", resume);
    el.addEventListener("touchstart", pause, { passive: true });
    el.addEventListener("touchend", resume, { passive: true });
    window.addEventListener("resize", syncScrollState);

    const id = setInterval(() => {
      if (paused) return;
      const cards = el.querySelectorAll(".case-study-card");
      if (!cards.length) return;
      const gap = 16;
      const step = cards[0].getBoundingClientRect().width + gap;
      const maxScroll = Math.max(0, el.scrollWidth - el.clientWidth);
      const nextLeft = el.scrollLeft + step;
      if (nextLeft >= maxScroll - 4) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: step, behavior: "smooth" });
      }
    }, 4200);

    return () => {
      clearInterval(id);
      el.removeEventListener("scroll", syncScrollState);
      el.removeEventListener("mouseenter", pause);
      el.removeEventListener("mouseleave", resume);
      el.removeEventListener("touchstart", pause);
      el.removeEventListener("touchend", resume);
      window.removeEventListener("resize", syncScrollState);
    };
  }, []);

  useEffect(() => {
    const progressTrack = caseStudiesProgressTrackRef.current;
    const progressThumb = caseStudiesProgressThumbRef.current;
    if (!progressTrack || !progressThumb || typeof ResizeObserver === "undefined") return undefined;

    const update = () => {
      setCaseProgressMaxOffset(
        Math.max(0, progressTrack.clientWidth - progressThumb.offsetWidth)
      );
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(progressTrack);
    ro.observe(progressThumb);
    return () => ro.disconnect();
  }, []);

  const scrollCaseStudiesByCard = (direction: number) => {
    const el = caseStudiesTrackRef.current;
    if (!el) return;
    const cards = el.querySelectorAll(".case-study-card");
    if (!cards.length) return;
    const gap = 16;
    const step = cards[0].getBoundingClientRect().width + gap;
    el.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  const setCaseGalleryIndex = (studyIndex: number, nextIndex: number) => {
    setCaseGalleryIndexes(prev => {
      const copy = [...prev];
      const total = ARCH_CASE_STUDIES[studyIndex].gallery.length;
      copy[studyIndex] = ((nextIndex % total) + total) % total;
      return copy;
    });
  };

  useEffect(() => {
    if (portfolioModalIndex === null) return undefined;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [portfolioModalIndex]);

  useEffect(() => {
    if (portfolioModalIndex === null) return undefined;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPortfolioModalIndex(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [portfolioModalIndex]);

  useEffect(() => {
    const el = trustStripRef.current;
    if (!el || typeof window === "undefined") return undefined;
    const targets = ARCH_TRUST_STRIP_STATS.map(s => s.target);
    const io = new IntersectionObserver(
      entries => {
        if (!entries.some(e => e.isIntersecting) || trustStatsAnimatedRef.current) return;
        trustStatsAnimatedRef.current = true;
        io.disconnect();
        const duration = 2200;
        const start = performance.now();
        const ease = (u: number) => 1 - (1 - u) ** 3;
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          const k = ease(t);
          setTrustCounts(targets.map(max => Math.max(1, Math.round(1 + (max - 1) * k))));
          if (t < 1) requestAnimationFrame(tick);
          else setTrustCounts(targets);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const handleOpenVideoModal = (thumb: (typeof ARCH_CLIENT_SUCCESS_STORIES)[number]) => {
    setActiveVideo(thumb);
    setShowVideoModal(true);
    setIsPlayingVideo(false);
    setVideoUrl("");
  };

  const handleCloseVideoModal = () => {
    setShowVideoModal(false);
    setActiveVideo(null);
    setIsPlayingVideo(false);
    setVideoUrl("");
  };

  const startEmbedVideo = () => {
    if (!activeVideo) return;
    const embedUrl = activeVideo.video.replace("watch?v=", "embed/") + "?autoplay=1&rel=0";
    setVideoUrl(embedUrl);
    setIsPlayingVideo(true);
  };

  const portfolioCarouselGo = (delta: number) => {
    const n = ARCH_PORTFOLIO_PROJECTS.length;
    setPortfolioCarouselDir(delta > 0 ? 1 : -1);
    setPortfolioCarouselIndex(i => (i + delta + n) % n);
  };

  const portfolioCarouselSetIndex = (idx: number) => {
    setPortfolioCarouselDir(idx > portfolioCarouselIndex ? 1 : -1);
    setPortfolioCarouselIndex(idx);
  };

  const openPortfolioModal = (projectIdx: number) => {
    setPortfolioModalIndex(projectIdx);
    setPortfolioModalSlide(0);
    setPortfolioModalDir(1);
    setPortfolioModalZoom(1);
    setPortfolioModalZoomOrigin("50% 50%");
  };

  const closePortfolioModal = () => {
    setPortfolioModalIndex(null);
    setPortfolioModalZoom(1);
    setPortfolioModalZoomOrigin("50% 50%");
  };

  const portfolioModalGoSlide = (delta: number) => {
    if (portfolioModalIndex === null) return;
    const totalProjects = ARCH_PORTFOLIO_PROJECTS.length;
    const currentProject = ARCH_PORTFOLIO_PROJECTS[portfolioModalIndex];
    const currentSlidesCount = currentProject.slides.length;
    const direction = delta > 0 ? 1 : -1;

    // Move through slides, and when a portfolio ends, continue in the next/previous portfolio.
    if (direction > 0 && portfolioModalSlide >= currentSlidesCount - 1) {
      const nextProjectIndex = (portfolioModalIndex + 1) % totalProjects;
      setPortfolioModalDir(1);
      setPortfolioModalIndex(nextProjectIndex);
      setPortfolioCarouselIndex(nextProjectIndex);
      setPortfolioCarouselDir(1);
      setPortfolioModalSlide(0);
      setPortfolioModalZoom(1);
      setPortfolioModalZoomOrigin("50% 50%");
      return;
    }

    if (direction < 0 && portfolioModalSlide <= 0) {
      const prevProjectIndex = (portfolioModalIndex - 1 + totalProjects) % totalProjects;
      const prevSlidesCount = ARCH_PORTFOLIO_PROJECTS[prevProjectIndex].slides.length;
      setPortfolioModalDir(-1);
      setPortfolioModalIndex(prevProjectIndex);
      setPortfolioCarouselIndex(prevProjectIndex);
      setPortfolioCarouselDir(-1);
      setPortfolioModalSlide(Math.max(0, prevSlidesCount - 1));
      setPortfolioModalZoom(1);
      setPortfolioModalZoomOrigin("50% 50%");
      return;
    }

    setPortfolioModalDir(direction);
    setPortfolioModalSlide(s => s + direction);
    setPortfolioModalZoom(1);
    setPortfolioModalZoomOrigin("50% 50%");
  };

  const portfolioModalSetSlide = (idx: number) => {
    if (portfolioModalIndex === null) return;
    const { slides } = ARCH_PORTFOLIO_PROJECTS[portfolioModalIndex];
    const m = slides.length;
    const next = ((idx % m) + m) % m;
    setPortfolioModalDir(next > portfolioModalSlide ? 1 : next < portfolioModalSlide ? -1 : 1);
    setPortfolioModalSlide(next);
    setPortfolioModalZoom(1);
    setPortfolioModalZoomOrigin("50% 50%");
  };

  const portfolioZoomIn = () => setPortfolioModalZoom(z => Math.min(3.5, +(z + 0.35).toFixed(2)));
  const portfolioZoomOut = () => setPortfolioModalZoom(z => Math.max(1, +(z - 0.35).toFixed(2)));

  const handlePortfolioModalImageMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    const xClamped = Math.max(0, Math.min(100, x));
    const yClamped = Math.max(0, Math.min(100, y));
    setPortfolioModalZoomOrigin(`${xClamped}% ${yClamped}%`);
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: ARCH_PAGE_CSS }} />
      <style dangerouslySetInnerHTML={{ __html: ZOHO_WIDGET_HIDE_CSS }} />

      <div className="arch-draft-lp-page">
      <header ref={archHeaderRef} className="arch-draft-lp-header-anchor">
        <div className="arch-lp-header-topbar d-none d-lg-block">
          <Container className="arch-lp-header-container border-bottom border-primary border-opacity-25">
            <div className="header-line py-1 d-flex justify-content-end flex-wrap gap-2">
              <p className="mb-0 me-4 fs-6">
                <a
                  className="text-decoration-none text-secondary"
                  href="mailto:contact@virtualbuildingstudio.com"
                >
                  <i className="text-primary fa fa-envelope me-1" />
                  contact@virtualbuildingstudio.com
                </a>
              </p>
              <p className="mb-0 fs-6">
                <a className="text-secondary text-decoration-none" href="tel:+14098006601">
                  <i className="text-primary fa fa-phone me-1" />
                  +1 (409) 800-6601
                </a>
              </p>
            </div>
          </Container>
        </div>

        <Navbar
          expand="lg"
          expanded={archNavExpanded}
          onToggle={next => setArchNavExpanded(next)}
          collapseOnSelect
          className="arch-lp-navbar-main py-0"
          aria-label="Site"
        >
          <Container className="arch-lp-header-container">
            <Navbar.Toggle
              aria-controls="arch-lp-offcanvas-nav"
              className="arch-lp-nav-toggler d-lg-none"
              aria-label="Open menu"
            />
            <Navbar.Brand href="/">
              <Image className="me-2" src={Logo} width={294} height={56} alt="virtualbuilding studio" />
            </Navbar.Brand>
            <Navbar.Offcanvas
              id="arch-lp-offcanvas-nav"
              aria-labelledby="arch-lp-offcanvas-label"
              placement="end"
              responsive="lg"
              className="arch-lp-offcanvas"
              onHide={() => setArchNavExpanded(false)}
            >
              <Offcanvas.Header closeButton className="border-bottom py-3">
                <Offcanvas.Title id="arch-lp-offcanvas-label" className="mb-0 fw-semibold">
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="arch-lp-offcanvas-body d-flex flex-column flex-lg-row align-items-lg-center pt-3 pt-lg-0">
                <Nav className="arch-lp-nav flex-column flex-lg-row flex-lg-nowrap align-items-lg-center gap-lg-1">
                  {ARCH_IN_PAGE_NAV.map(item => (
                    <Nav.Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setArchNavExpanded(false)}
                    >
                      {item.label}
                    </Nav.Link>
                  ))}
                </Nav>
                <PrimaryCtaButton
                  fullWidth={false}
                  className="vbs-header-book-cta primary-cta--highlighted"
                  onClick={(event) => {
                    setArchNavExpanded(false);
                    openBookMeetingModal(event);
                  }}
                >
                  Schedule a Discussion
                </PrimaryCtaButton>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </header>
      <div
        className="arch-draft-lp-header-spacer"
        style={{ height: archHeaderHeight }}
        aria-hidden
      />

      <div id="archDraftingLp" className="arch-drafting-lp">
        <section id="hero">
          <div className="wrap">
            <div className="hero-grid">
              <div className="hero-copy reveal-left">
                <div className="hero-headline-block">
                  <span className="hero-tag">Architectural Drafting</span>
                  <h1 className="hero-h1">
                    Architectural Drafting
                    <br />
                    <span className="hero-h1-line2">
                      Services for{"\u00A0"}
                      <span className="hero-h1-accent">Growing Firms</span>
                    </span>
                  </h1>
                </div>
                <p className="hero-p">
                  Augment your architectural team with dedicated architects who integrate into your workflows, support your deadlines, and deliver precise, construction-ready documentation at scale.
                </p>
                <PrimaryCtaButton
                  fullWidth={false}
                  className="hero-lets-talk"
                  onClick={scrollToConnectForm}
                >
                  Let's Talk
                </PrimaryCtaButton>
              </div>

              <div className="hero-visual reveal-right">
                <div className="hero-media">
                  <img
                    src={ARCH_HERO_IMAGE.src}
                    alt={ARCH_HERO_IMAGE.alt}
                    loading="eager"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="trust-strip" ref={trustStripRef} aria-label="Company stats">
          <div className="wrap">
            <div className="trust-strip-inner">
              {ARCH_TRUST_STRIP_STATS.map((stat, i) => (
                <div className="ts-item" key={stat.label}>
                  <div className="ts-num stats-count" style={{ color: stat.color }}>
                    {trustCounts[i]}
                    {stat.suffix}
                  </div>
                  <div className="ts-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>


        <section id="services">
          <div className="wrap">
            <div className="services-offer-header reveal">
              <div className="services-offer-header-top">
                <span className="services-offer-tag">Services</span>
                <h2 className="services-offer-title">
                  Architectural Drafting{" "}
                  <span className="accent">Services We Offer</span>
                </h2>
              </div>
              <p className="services-offer-sub">
                Project-based support or a dedicated drafter embedded directly within your team.
              </p>
            </div>

            <div className="services-offer-list">
              {ARCH_SERVICES_OFFERED.map(svc => (
                <div
                  key={svc.title}
                  className={`services-offer-row reveal${svc.imageLeft ? "" : " is-reverse"}`}
                >
                  <div className="services-offer-media">
                    <div className="services-offer-media-frame">
                      <img src={svc.image} alt={svc.imageAlt} loading="lazy" decoding="async" />
                    </div>
                  </div>
                  <div className="services-offer-copy">
                    <h3>{svc.title}</h3>
                    <div className="services-offer-copy-body">
                      <p>{svc.description}</p>
                      {svc.bullets?.length ? (
                        <ul className="services-offer-bullets">
                          {svc.bullets.map(item => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <PrimaryCtaButton
              fullWidth={false}
              className="services-offer-cta"
              onClick={scrollToConnectForm}
            >
              Request a Proposal
            </PrimaryCtaButton>
          </div>
        </section>


        <section id="case-studies" className={caseTrackScrolled ? "has-scrolled" : undefined}>
          <div className="case-studies-fade case-studies-fade--left" aria-hidden />
          <div className="case-studies-fade case-studies-fade--right" aria-hidden />
          <div className="wrap">
            <div className="case-studies-header reveal">
              <div className="case-studies-header-top">
                <span className="case-studies-tag">Case Studies</span>
                <h2 className="case-studies-title">
                  Real Feedback, <span className="accent">Real Results</span>
                </h2>
              </div>
              <p className="case-studies-sub">
                Client stories set out how our BIM solutions reduced costs, improved coordination and sped project delivery through collaboration.
              </p>
            </div>

            <div className="case-studies-track-wrap">
              <div className="case-studies-track" ref={caseStudiesTrackRef}>
                {ARCH_CASE_STUDIES.map((study, studyIndex) => {
                  const active = caseGalleryIndexes[studyIndex] || 0;
                  const thumbs = study.gallery.slice(0, study.thumbCount);
                  return (
                    <article className="case-study-card reveal" key={study.id}>
                      <img className="case-study-logo" src={study.logo} alt={study.logoAlt} />
                      <p className="case-study-summary">{study.summary}</p>
                      <div className="case-study-stats">
                        {study.stats.map(stat => (
                          <div className="case-study-stat" key={stat.label}>
                            <p className="case-study-stat-label">{stat.label}</p>
                            <p className="case-study-stat-value">{stat.value}</p>
                          </div>
                        ))}
                      </div>
                      <div className="case-study-body">
                        <div className="case-study-text">
                          <div className="case-study-block">
                            <h4>{study.listTitle}</h4>
                            <ul>
                              {study.listItems.map(item => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          </div>
                          <div className="case-study-block case-study-block--outcome">
                            <h4>{study.outcomeTitle}</h4>
                            <p>{study.outcome}</p>
                          </div>
                        </div>
                        <div className="case-study-gallery">
                          <div className="case-study-main">
                            <img
                              src={study.gallery[active]}
                              alt={`${study.logoAlt} project ${active + 1}`}
                              loading="lazy"
                              decoding="async"
                            />
                            <div className="case-study-nav">
                              <button
                                type="button"
                                className="case-study-nav-btn"
                                aria-label="Previous image"
                                onClick={() => setCaseGalleryIndex(studyIndex, active - 1)}
                              >
                                <LuChevronLeft size={18} strokeWidth={2.5} aria-hidden />
                              </button>
                              <button
                                type="button"
                                className="case-study-nav-btn"
                                aria-label="Next image"
                                onClick={() => setCaseGalleryIndex(studyIndex, active + 1)}
                              >
                                <LuChevronRight size={18} strokeWidth={2.5} aria-hidden />
                              </button>
                            </div>
                          </div>
                          <div className="case-study-thumbs">
                            {thumbs.map((src, thumbIndex) => {
                              const isMore =
                                study.moreCount > 0 && thumbIndex === thumbs.length - 1;
                              return (
                                <button
                                  type="button"
                                  key={`${study.id}-thumb-${thumbIndex}`}
                                  className={`case-study-thumb${active === thumbIndex ? " is-active" : ""}`}
                                  onClick={() => setCaseGalleryIndex(studyIndex, thumbIndex)}
                                  aria-label={`Show image ${thumbIndex + 1}`}
                                >
                                  <img src={src} alt="" />
                                  {isMore ? (
                                    <span className="case-study-thumb-more">+{study.moreCount}</span>
                                  ) : null}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>

            <div className="case-studies-controls">
              <div className="case-studies-progress" ref={caseStudiesProgressTrackRef}>
                <div
                  className="case-studies-progress-thumb"
                  ref={caseStudiesProgressThumbRef}
                  style={{
                    transform: `translateX(${caseScrollProgress * caseProgressMaxOffset}px)`,
                  }}
                />
              </div>
              <div className="case-studies-nav">
                <button
                  type="button"
                  className="case-studies-nav-btn"
                  aria-label="Previous case study"
                  disabled={!caseCanScrollPrev}
                  onClick={() => scrollCaseStudiesByCard(-1)}
                >
                  <LuChevronLeft size={22} strokeWidth={1.5} aria-hidden />
                </button>
                <button
                  type="button"
                  className="case-studies-nav-btn"
                  aria-label="Next case study"
                  disabled={!caseCanScrollNext}
                  onClick={() => scrollCaseStudiesByCard(1)}
                >
                  <LuChevronRight size={22} strokeWidth={1.5} aria-hidden />
                </button>
              </div>
            </div>

            <div className="case-studies-cta-wrap">
              <PrimaryCtaButton
                fullWidth={false}
                className="case-studies-cta"
                onClick={scrollToConnectForm}
              >
                Request a Consultation
              </PrimaryCtaButton>
            </div>
          </div>
        </section>


        <section id="how">
          <div className="wrap">
            <div className="engage-header reveal">
              <div className="engage-header-top">
                <span className="engage-tag">Engagement Models</span>
                <h2 className="engage-title">
                  Flexible <span className="accent">Engagement Models</span>
                </h2>
              </div>
              <p className="engage-sub">
                Choose the engagement model that fits your delivery needs today and scale as your workload grows.
              </p>
            </div>

            <div className="engage-grid">
              <article className="engage-card engage-card--featured reveal-left">
                <div className="engage-card-top">
                  <div className="engage-icon" aria-hidden>
                    <img
                      src="/image/arch-drafting-lp/dedicated-resources-icon.svg"
                      alt=""
                      width={40}
                      height={40}
                    />
                  </div>
                  <span className="engage-badge">Best for Growing Firms</span>
                </div>
                <div className="engage-card-body">
                  <div className="engage-card-intro">
                    <h3 className="engage-card-title">Dedicated Resource Model</h3>
                    <p className="engage-card-lead">
                      Most firms choose this model for long-term production support.
                    </p>
                    <p className="engage-card-lead">
                      Most firms that start here stay engaged for 9+ months.
                    </p>
                  </div>
                  <div className="engage-features">
                    <div className="engage-feature">
                      <h4>Discovery Call</h4>
                      <p>Understand your workflow, standards, and team requirements.</p>
                    </div>
                    <div className="engage-feature">
                      <h4>Resource Ready in 24 Hrs</h4>
                      <p>Pre-vetted CAD specialists matched to your team.</p>
                    </div>
                    <div className="engage-feature">
                      <h4>Integrated Into Your Team</h4>
                      <p>Works within your tools, standards, and communication channels.</p>
                    </div>
                    <div className="engage-feature">
                      <h4>Scale On Demand</h4>
                      <p>Increase or reduce capacity as your workload evolves.</p>
                    </div>
                  </div>
                  <div className="engage-best">
                    <h4>Best For</h4>
                    <ul>
                      <li>Ongoing production support</li>
                      <li>Growing AEC firms</li>
                      <li>Dedicated drafting capacity</li>
                    </ul>
                  </div>
                  <button
                    type="button"
                    className="engage-cta engage-cta--solid"
                    onClick={openBookMeetingModal}
                  >
                    Schedule a Discovery Call
                  </button>
                </div>
              </article>

              <article className="engage-card reveal-right">
                <div className="engage-icon" aria-hidden>
                  <img
                    src="/image/arch-drafting-lp/engagement-project-icon.png"
                    alt=""
                    width={40}
                    height={40}
                  />
                </div>
                <div className="engage-card-body">
                  <div className="engage-card-intro">
                    <h3 className="engage-card-title">Project-Based</h3>
                    <p className="engage-card-lead">
                      For firms validating fit before scaling up.
                    </p>
                  </div>
                  <div className="engage-features engage-features--stack">
                    <div className="engage-feature">
                      <h4>Share Your Requirements</h4>
                      <p>
                        Share with us the details of your projects &amp; PDFs, sketches, markups or
                        cad files in the follow up conversations
                      </p>
                    </div>
                  </div>
                  <div className="engage-features">
                    <div className="engage-feature">
                      <h4>Drafting &amp; QA</h4>
                      <p>Drawings produced and reviewed to your standards.</p>
                    </div>
                    <div className="engage-feature">
                      <h4>Final Delivery</h4>
                      <p>Receive production-ready DWG or RVT files.</p>
                    </div>
                  </div>
                  <div className="engage-best">
                    <h4>Best For</h4>
                    <ul>
                      <li>One-off projects</li>
                      <li>Overflow drafting</li>
                      <li>Pilot engagements</li>
                    </ul>
                  </div>
                  <button
                    type="button"
                    className="engage-cta engage-cta--outline"
                    onClick={scrollToConnectForm}
                  >
                    Start with a Project
                  </button>
                </div>
              </article>
            </div>
          </div>
        </section>
      </div>

      <div className="vbs-redesign-page cad-drafting-landing-page bim-modeling-landing-page mep-bim-services-page arch-drafting-want-to-know">
        <main>
          <BimLandingZohoFormSection sectionId="quote" />
        </main>
      </div>

      <div className="arch-drafting-lp">
        <section id="why">
          <div className="wrap">
            <div className="why-stay-header reveal">
              <div className="why-stay-header-top">
                <span className="why-stay-tag">Why Choose Us</span>
                <h2 className="why-stay-title">
                  Why Firms <span className="accent">Stay With Us</span>
                </h2>
              </div>
              <p className="why-stay-sub">
                Built around consistency, continuity, and the flexibility to support your firm as it
                grows.
              </p>
            </div>

            <div className="why-stay-grid reveal">
              {ARCH_WHY_STAY_CARDS.map(card => (
                <article key={card.title} className="why-stay-card">
                  <div className="why-stay-icon" aria-hidden>
                    <img src={card.icon} alt="" width={42} height={42} />
                  </div>
                  <div className="why-stay-card-copy">
                    <h3>{card.title}</h3>
                    <p>{card.body}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="why-stay-cta-wrap reveal">
              <PrimaryCtaButton
                fullWidth={false}
                className="why-stay-cta"
                onClick={openBookMeetingModal}
              >
                Book a Meeting
              </PrimaryCtaButton>
            </div>
          </div>
        </section>
      </div>

      <div
        id="industries"
        className="vbs-redesign-page arch-drafting-industries-host"
      >
        <IndustriesSection
          titleLine1="Industries & Sectors "
          titleLine2="We Serve"
          intro="Architectural drafting expertise across a wide range of project types and construction sectors."
        />
      </div>

      <section id="tools" className="arch-drafting-tools">
        <div className="wrap">
          <div className="arch-drafting-tools-header reveal">
            <div className="arch-drafting-tools-header-top">
              <span className="arch-drafting-tools-tag">Tools We Use</span>
              <h2 className="arch-drafting-tools-title">
                Industry-Leading Tools.{" "}
                <span className="accent">Superior Project Delivery.</span>
              </h2>
            </div>
            <p className="arch-drafting-tools-sub">
              Whether it's Revit, Rhino, Navisworks, or BIM 360, we fit into your existing workflows
              for smooth collaboration from design through construction.
            </p>
          </div>

          <div className="arch-drafting-tools-grid reveal">
            <div className="arch-drafting-tools-grid-row">
              {ARCH_TOOLS_ROW_1.map(card => (
                <article key={card.title} className="arch-drafting-tools-card">
                  <div className="arch-drafting-tools-card-canvas">
                    <img src={card.canvas} alt={card.canvasAlt} loading="lazy" decoding="async" />
                  </div>
                  <h3 className="arch-drafting-tools-card-title">{card.title}</h3>
                </article>
              ))}
            </div>
            <div className="arch-drafting-tools-grid-row">
              {ARCH_TOOLS_ROW_2.map(card => (
                <article key={card.title} className="arch-drafting-tools-card">
                  <div className="arch-drafting-tools-card-canvas">
                    <img src={card.canvas} alt={card.canvasAlt} loading="lazy" decoding="async" />
                  </div>
                  <h3 className="arch-drafting-tools-card-title">{card.title}</h3>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="arch-drafting-testimonials">
        <div className="wrap">
          <div className="arch-drafting-stories-header">
            <div className="arch-drafting-stories-header-top">
              <span className="arch-drafting-stories-tag">Testimonials</span>
              <h2 className="arch-drafting-stories-title">
                Client Success <span className="accent">Stories</span>
              </h2>
            </div>
            <p className="arch-drafting-stories-sub">
              Hear how architects and firm owners scaled production, reclaimed time, and grew revenue
              with dedicated BIM support.
            </p>
          </div>

          <div className="arch-drafting-stories-grid">
            {ARCH_CLIENT_SUCCESS_STORIES.map(story => (
              <article key={story.name} className="arch-drafting-story-card">
                <div className="arch-drafting-story-card-head">
                  <div
                    className={`arch-drafting-story-avatar${
                      story.avatarCover ? " arch-drafting-story-avatar--cover" : ""
                    }`}
                  >
                    <img src={story.avatar} alt="" width={60} height={60} loading="lazy" />
                  </div>
                  <div className="arch-drafting-story-meta">
                    <h3 className="arch-drafting-story-name">{story.name}</h3>
                    <p className="arch-drafting-story-role">{story.role}</p>
                  </div>
                </div>
                <p className="arch-drafting-story-quote">{story.quote}</p>
                <button
                  type="button"
                  className="arch-drafting-story-watch"
                  onClick={() => handleOpenVideoModal(story)}
                >
                  Watch Full Story
                  <img
                    src="/icons/arch-watch-story-chevron.svg"
                    alt=""
                    width={24}
                    height={24}
                    aria-hidden="true"
                  />
                </button>
              </article>
            ))}
          </div>
        </div>

        <Modal
          show={showVideoModal}
          onHide={handleCloseVideoModal}
          size="xl"
          centered
          className="video-modal"
          backdrop="static"
          keyboard={false}
        >
          <Modal.Body className="p-2 position-relative bg-white">
            <button
              type="button"
              onClick={handleCloseVideoModal}
              aria-label="Close"
              className="top-closebtn text-dark"
            >
              <i className="fa fa-times"></i>
            </button>

            <div
              className="ratio ratio-16x9 bg-border"
              onClick={!isPlayingVideo ? startEmbedVideo : undefined}
              style={{ cursor: !isPlayingVideo ? "pointer" : "auto" }}
              role={!isPlayingVideo ? "button" : undefined}
              tabIndex={!isPlayingVideo ? 0 : undefined}
              onKeyDown={
                !isPlayingVideo
                  ? e => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        startEmbedVideo();
                      }
                    }
                  : undefined
              }
            >
              {!isPlayingVideo ? (
                <div
                  className="poster d-flex align-items-center justify-content-center"
                  style={{
                    backgroundImage: activeVideo ? `url(${activeVideo.image})` : "none",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "100%",
                  }}
                >
                  <AiFillYoutube className="youtube-icon text-danger" />
                </div>
              ) : (
                <div className="video-container">
                  <iframe
                    width="100%"
                    height="100%"
                    src={videoUrl}
                    title="YouTube video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="video-frame"
                  />
                </div>
              )}
            </div>
          </Modal.Body>
        </Modal>
      </section>

      <div className="vbs-redesign-page arch-drafting-faq-host">
        <FaqSection
          id="faq"
          variant="mep"
          items={mepFaqs}
          description="Everything you need to know before getting started."
          defaultOpenIndex={0}
        />
      </div>

      <div className="vbs-redesign-page arch-drafting-contact-host">
        <section id="contact" className="arch-drafting-contact" aria-label="Contact Us">
          <div className="arch-drafting-contact__wrap">
            <div className="arch-drafting-contact-body">
              <div className="arch-drafting-contact-copy">
                <div className="arch-drafting-contact-header">
                  <div className="arch-drafting-contact-header-top">
                    <span className="arch-drafting-contact-tag">Contact Us</span>
                    <h2 className="arch-drafting-contact-title">
                      Start Your Project
                      <br />
                      With <span className="accent">Confidence</span>
                    </h2>
                  </div>
                  <p className="arch-drafting-contact-sub">
                    Whether you need support for a single project or a dedicated drafting team, our
                    specialists are ready to integrate with your workflow and deliver from day one.
                  </p>
                </div>

                <div className="arch-drafting-contact-benefits">
                  {ARCH_CONTACT_BENEFITS.map(item => (
                    <div key={item.title} className="arch-drafting-contact-benefit">
                      <div className="arch-drafting-contact-benefit-icon" aria-hidden>
                        <img src={item.icon} alt="" width={36} height={36} loading="lazy" />
                      </div>
                      <div className="arch-drafting-contact-benefit-copy">
                        <h3>{item.title}</h3>
                        <p>{item.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="arch-drafting-contact-form vbs-get-in-touch-section">
                <GetInTouchFormPanel />
              </div>
            </div>
          </div>
        </section>
      </div>

      <SiteFooter />
      </div>
    </>
  );
}

export default ProfessionalArchitecturalDraftingServicesView;
