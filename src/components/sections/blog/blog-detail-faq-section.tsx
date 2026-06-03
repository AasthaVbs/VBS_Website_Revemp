"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";

import { PageContainer } from "@/components/layout/page-container";
import { SectionTag } from "@/components/sections/section-primitives";
import type { BlogFaqItem } from "@/constants/blog-posts/types";
import { cn } from "@/lib/utils";

const faqIntro =
  "We offer two flexible engagement models that work best for our clients. Each year, we carefully select the ";

type BlogDetailFaqSectionProps = {
  items: BlogFaqItem[];
};

export function BlogDetailFaqSection({ items }: BlogDetailFaqSectionProps) {
  const defaultOpenIndex = items.findIndex((item) => item.defaultOpen) ?? 0;
  const [openIndex, setOpenIndex] = useState(
    defaultOpenIndex >= 0 ? defaultOpenIndex : 0,
  );

  return (
    <section className="bg-white py-12 lg:py-[100px]">
      <PageContainer className="grid items-start gap-10 lg:grid-cols-2 lg:gap-[60px]">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <SectionTag label="FAQs" />
            <h2 className="max-w-[528px] text-section capitalize">
              Frequently Asked{" "}
              <span className="font-light text-[#D70416]">Questions</span>
            </h2>
          </div>
          <p className="max-w-[563px] text-[16px] capitalize leading-6 text-[#808080]">
            {faqIntro}
          </p>
        </div>

        <div className="space-y-5">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <article
                key={item.question}
                className={cn(
                  "rounded-[10px] border border-[#CBCCCD] p-5",
                  isOpen ? "flex flex-col gap-5" : "",
                )}
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 text-left"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                >
                  <span className="text-[16px] text-[#111111]">{item.question}</span>
                  {isOpen ? (
                    <Minus className="h-[26px] w-[26px] shrink-0 text-[#111111]" />
                  ) : (
                    <Plus className="h-[26px] w-[26px] shrink-0 text-[#111111]" />
                  )}
                </button>
                {isOpen && item.answer ? (
                  <p className="text-[16px] leading-6 text-[#808080]">{item.answer}</p>
                ) : null}
              </article>
            );
          })}
        </div>
      </PageContainer>
    </section>
  );
}
