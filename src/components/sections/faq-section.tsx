"use client";

import { useState, type ReactNode } from "react";

import { PageContainer } from "@/components/layout/page-container";
import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";
import { cn } from "@/lib/utils";

function HomeFaqToggleIcon({ open }: { open: boolean }) {
  return (
    <span className={cn("vbs-home-faq__toggle", open && "vbs-home-faq__toggle--open")} aria-hidden>
      <svg
        className="vbs-home-faq__toggle-icon"
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="vbs-home-faq__toggle-line-h"
          d="M7 13H19"
          stroke="#111111"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          className="vbs-home-faq__toggle-line-v"
          d="M13 7V19"
          stroke="#111111"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

const defaultTitle = (
  <>
    Frequently Asked <span className="text-accent">Questions</span>
  </>
);

const defaultDescription = "Everything you need to know before getting started.";

type FaqItem = { q: string; a?: string };

export function FaqSection({
  id = "faqs",
  tag = "FAQs",
  title = defaultTitle,
  titleLine1,
  titleLine2,
  description = defaultDescription,
  items = [],
  defaultOpenIndex = 0,
  sectionClassName = "bg-white py-20",
  variant = "default",
  footerText,
  footerCtaLabel,
  footerCtaHref,
}: {
  id?: string;
  tag?: string;
  title?: ReactNode;
  titleLine1?: string;
  titleLine2?: string;
  description?: string;
  items?: readonly FaqItem[];
  defaultOpenIndex?: number;
  sectionClassName?: string;
  variant?: "default" | "home" | "mep";
  footerText?: string;
  footerCtaLabel?: string;
  footerCtaHref?: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(
    items.length > 0 && items[defaultOpenIndex]?.a != null ? defaultOpenIndex : null,
  );

  const isFigmaLayout = variant === "home" || variant === "mep";

  if (isFigmaLayout) {
    return (
      <section id={id} className="vbs-home-faq">
        <PageContainer className="vbs-home-faq__container">
          <header className="vbs-home-faq__head">
            <div className="vbs-home-faq__head-top">
              {tag ? <span className="vbs-home-faq__tag">{tag}</span> : null}
              <h2 className="vbs-home-faq__title">
                {titleLine1 && titleLine2 ? (
                  <>
                    <span className="vbs-home-faq__title-dark">{titleLine1}</span>
                    <span className="vbs-home-faq__title-accent">{titleLine2}</span>
                  </>
                ) : (
                  <>
                    <span className="vbs-home-faq__title-dark">Frequently Asked </span>
                    <span className="vbs-home-faq__title-accent">Questions</span>
                  </>
                )}
              </h2>
            </div>
            {description ? <p className="vbs-home-faq__desc">{description}</p> : null}
            {footerText && footerCtaLabel && footerCtaHref ? (
              <div className="vbs-home-faq__footer flex flex-col items-start gap-4">
                <p className="m-0 text-[16px] font-normal leading-6 text-[#111111]">{footerText}</p>
                <PrimaryCtaButton fullWidth={false} href={footerCtaHref}>
                  {footerCtaLabel}
                </PrimaryCtaButton>
              </div>
            ) : null}
          </header>

          <div className="vbs-home-faq__list">
            {items.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <article
                  key={`${item.q}-${index}`}
                  className={cn("vbs-home-faq__item", isOpen && "vbs-home-faq__item--open")}
                >
                  <button
                    type="button"
                    className="vbs-home-faq__question"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                  >
                    <span className="vbs-home-faq__question-text">{item.q}</span>
                    <HomeFaqToggleIcon open={isOpen} />
                  </button>
                  {isOpen && item.a ? <p className="vbs-home-faq__answer">{item.a}</p> : null}
                </article>
              );
            })}
          </div>
        </PageContainer>
      </section>
    );
  }

  return (
    <section id={id} className={cn(sectionClassName)}>
      <PageContainer className="grid items-start gap-10 md:grid-cols-2">
        <div className="flex flex-col items-start gap-5">
          <div className="flex flex-col items-start gap-3">
            <span className="text-tag inline-flex w-fit items-center justify-center gap-2.5 rounded-[10px] border border-vbs-blue bg-vbs-blue/10 px-3 py-1.5 text-[13px] font-normal capitalize leading-[1.2] text-vbs-blue max-lg:rounded-[8px] max-lg:px-2 max-lg:py-1 max-lg:text-[10px]">
              {tag}
            </span>
            <h2 className="max-w-[528px] text-section">{title}</h2>
          </div>
          {description ? <p className="max-w-[563px] text-body">{description}</p> : null}
        </div>

        <div className="space-y-5">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            const hasAnswer = Boolean(item.a);

            return (
              <article key={item.q} className="rounded-[10px] border border-[#CBCCCD] p-5">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 text-left"
                  onClick={() => {
                    if (!hasAnswer) return;
                    setOpenIndex(isOpen ? null : index);
                  }}
                  aria-expanded={hasAnswer ? isOpen : undefined}
                >
                  <h3 className="text-[16px] font-normal text-[#111111]">{item.q}</h3>
                  <span className="text-[22px] leading-none text-[#111111]">{isOpen ? "−" : "+"}</span>
                </button>
                {hasAnswer && isOpen ? (
                  <p className="mt-5 text-[16px] font-normal leading-6 text-[#808080]">{item.a}</p>
                ) : null}
              </article>
            );
          })}
        </div>
      </PageContainer>
    </section>
  );
}
