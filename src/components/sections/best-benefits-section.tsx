import { Fragment } from "react";

import { PageContainer } from "@/components/layout/page-container";
import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";

const defaultItems = [
  {
    prefix: "0",
    suffix: "1",
    prefixColor: "#42AA32",
    title: "Test Before You Commit",
    description:
      "Enjoy complete flexibility with our one-month, no-obligation, money-back guarantee. Experience our services risk-free before making any long-term commitments.",
  },
  {
    prefix: "0",
    suffix: "2",
    prefixColor: "#2299D6",
    title: "50% Knowledge Retention",
    description:
      "With our top 1% architects and engineers, retain valuable project knowledge and processes consistently. Enjoy uninterrupted expertise throughout the engagement.",
  },
  {
    prefix: "0",
    suffix: "3",
    prefixColor: "#F0B300",
    title: "4X Efficiency",
    description:
      "Maximize your budget and productivity get the equivalent output of four architects for the cost of one draftsperson.",
  },
];

type BenefitItem = (typeof defaultItems)[number];

export function BestBenefitsSection({
  id,
  tag = "Benefits",
  titleLead = "Value Beyond ",
  titleAccent = "Delivery",
  description = "Accelerate delivery, improve coordination, and scale project execution without increasing internal overhead.",
  items = defaultItems,
  ctaLabel = "Inquire Now",
  ctaHref = "/contact-us",
}: {
  id?: string;
  tag?: string;
  titleLead?: string;
  titleAccent?: string;
  description?: string;
  items?: readonly BenefitItem[];
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <section id={id} className="vbs-best-benefits">
      <PageContainer className="vbs-best-benefits__container">
        <header className="vbs-best-benefits__head">
          <div className="vbs-best-benefits__head-top">
            <span className="vbs-best-benefits__tag">{tag}</span>
            <h2 className="vbs-best-benefits__title">
              <span className="vbs-best-benefits__title-dark">{titleLead}</span>
              <span className="vbs-best-benefits__title-accent">{titleAccent}</span>
            </h2>
          </div>
          <p className="vbs-best-benefits__desc">{description}</p>
        </header>

        <div className="vbs-best-benefits__grid">
          {items.map((item, index) => (
            <Fragment key={`${item.suffix}-${item.title}`}>
              {index > 0 ? <div className="vbs-best-benefits__divider" aria-hidden /> : null}
              <article className="vbs-best-benefits__card">
                <div className="vbs-best-benefits__card-top">
                  <p className="vbs-best-benefits__number">
                    <span style={{ color: item.prefixColor }}>{item.prefix}</span>
                    <span className="vbs-best-benefits__number-suffix">{item.suffix}</span>
                  </p>
                  <h3 className="vbs-best-benefits__card-title">{item.title}</h3>
                </div>
                <p className="vbs-best-benefits__card-desc">{item.description}</p>
              </article>
            </Fragment>
          ))}
        </div>

        {ctaLabel ? (
          <div className="vbs-best-benefits__cta-wrap">
            <PrimaryCtaButton fullWidth={false} href={ctaHref}>
              {ctaLabel}
            </PrimaryCtaButton>
          </div>
        ) : null}
      </PageContainer>
    </section>
  );
}
