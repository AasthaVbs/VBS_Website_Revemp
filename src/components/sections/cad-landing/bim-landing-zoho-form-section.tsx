"use client";

import { PageContainer } from "@/components/layout/page-container";
import { ZohoPublicIframeForm } from "@/components/zoho/zoho-public-iframe-form";
import { contactGetInTouchDetails } from "@/constants/contact-content";
import {
  ZOHO_ACS_BIM_LANDING_IFRAME_ID,
  ZOHO_ACS_BIM_LANDING_IFRAME_SRC,
  ZOHO_ACS_BIM_LANDING_VISIBLE_HEIGHT_PX,
} from "@/utils/zoho-contact-form-embed";

import "@/styles/bim-landing-zoho-form.scss";

const FORM_TITLE = "ACS - Landing page - Contact us Form";

const socialLinks = [
  { label: "Twitter", href: "https://x.com/vbsglobal", icon: "/icons/social/twitter.svg" },
  {
    label: "Instagram",
    href: "https://www.instagram.com/virtualbuildingstudios/",
    icon: "/icons/social/instagram.svg",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/virtualbuildingstudio/",
    icon: "/icons/social/facebook.svg",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/virtual-building-studio-inc/",
    icon: "/icons/social/linkedin.svg",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/channel/UCCNVUKdB5rncH-J1E-8xcoA",
    icon: "/icons/social/youtube.svg",
  },
];

function PhoneIcon() {
  return (
    <svg className="bim-landing-zoho-form__icon" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg className="bim-landing-zoho-form__icon" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 6h16v12H4V6zm0 0l8 6 8-6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg className="bim-landing-zoho-form__icon" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 21s7-4.5 7-11a7 7 0 10-14 0c0 6.5 7 11 7 11z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function BimLandingZohoFormSection({ sectionId }: { sectionId?: string } = {}) {
  return (
    <section
      id={sectionId}
      className="bim-landing-zoho-form"
      aria-label="Contact form"
      style={sectionId ? { scrollMarginTop: 100 } : undefined}
    >
      <PageContainer className="bim-landing-zoho-form__container">
        <div className="bim-landing-zoho-form__grid">
          <aside className="bim-landing-zoho-form__aside">
            <h2 className="bim-landing-zoho-form__heading">
              <span className="bim-landing-zoho-form__heading-lead">Want to know more?</span>
              <span className="bim-landing-zoho-form__heading-accent">Let&apos;s connect!</span>
            </h2>

            <ul className="bim-landing-zoho-form__contacts">
              <li>
                <a href={contactGetInTouchDetails.phoneHref} className="bim-landing-zoho-form__contact">
                  <PhoneIcon />
                  <span>{contactGetInTouchDetails.phone}</span>
                </a>
              </li>
              <li>
                <a href={contactGetInTouchDetails.emailHref} className="bim-landing-zoho-form__contact">
                  <MailIcon />
                  <span>{contactGetInTouchDetails.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={contactGetInTouchDetails.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bim-landing-zoho-form__contact"
                >
                  <MapPinIcon />
                  <span>
                    {contactGetInTouchDetails.addressLine1}, {contactGetInTouchDetails.addressLine2}
                  </span>
                </a>
              </li>
            </ul>

            <div className="bim-landing-zoho-form__socials">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bim-landing-zoho-form__social"
                  aria-label={social.label}
                >
                  <img src={social.icon} alt="" width={24} height={24} aria-hidden />
                </a>
              ))}
            </div>
          </aside>

          <div className="bim-landing-zoho-form__form-col">
            <div className="bim-landing-zoho-form__wrap">
              <ZohoPublicIframeForm
                iframeId={ZOHO_ACS_BIM_LANDING_IFRAME_ID}
                iframeSrc={ZOHO_ACS_BIM_LANDING_IFRAME_SRC}
                title={FORM_TITLE}
                initialHeight={ZOHO_ACS_BIM_LANDING_VISIBLE_HEIGHT_PX}
                headerCropPreset="acs-bim"
                lockHeight
                transparentBackground
                className="bim-landing-zoho-form__iframe"
                frameClassName="bim-landing-zoho-form__frame"
              />
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

export default BimLandingZohoFormSection;
