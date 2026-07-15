import Image from "next/image";
import Link from "next/link";

import { PageContainer } from "@/components/layout/page-container";
import { thankYouContent, thankYouSocialLinks } from "@/constants/thank-you-content";

/** Figma node 1746:18257 — Thank You */
export function ThankYouSection() {
  const { title, paragraphs, contactLead, contactEmail, followLabel, ctaLabel, ctaHref } =
    thankYouContent;

  return (
    <section className="thank-you-page__section" aria-labelledby="thank-you-title">
      <PageContainer className="thank-you-page__container">
        <div className="thank-you-page__content">
          <header className="thank-you-page__header">
            <h1 id="thank-you-title" className="thank-you-page__title">
              {title}
            </h1>
            {paragraphs.map((paragraph) => (
              <p key={paragraph} className="thank-you-page__text">
                {paragraph}
              </p>
            ))}
            <p className="thank-you-page__text">
              {contactLead}
              <a href={`mailto:${contactEmail}`} className="thank-you-page__link">
                {contactEmail}
              </a>
            </p>
          </header>

          <div className="thank-you-page__social-block">
            <p className="thank-you-page__follow-label">{followLabel}</p>
            <div className="thank-you-page__socials">
              {thankYouSocialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="thank-you-page__social-link"
                >
                  <Image src={social.icon} alt="" width={24} height={24} aria-hidden />
                </a>
              ))}
            </div>
          </div>

          <Link href={ctaHref} className="thank-you-page__cta">
            {ctaLabel}
          </Link>
        </div>
      </PageContainer>
    </section>
  );
}
