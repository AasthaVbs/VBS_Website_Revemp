import { Plus } from "lucide-react";

import { faqs } from "@/constants/home-content";
import { mepFaqDescription } from "@/constants/mep-engineers-content";
import { PageContainer } from "@/components/layout/page-container";
import { SectionTag } from "@/components/sections/section-primitives";

export function MepFaqSection() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <PageContainer className="grid items-start gap-10 md:grid-cols-2">
        <div className="flex flex-col items-start gap-5">
          <div className="flex flex-col items-start gap-3">
            <SectionTag label="FAQs" />
            <h2 className="max-w-[528px] text-section">
              Frequently Asked <span className="text-accent">Questions</span>
            </h2>
          </div>
          <p className="max-w-[563px] text-body normal-case">{mepFaqDescription}</p>
        </div>

        <div className="space-y-5">
          <article className="rounded-[10px] border border-[#CBCCCD] p-5">
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-[16px] font-normal text-[#111111]">Do you provide on-site talent?</h3>
              <span className="text-[22px] leading-none text-[#111111]">-</span>
            </div>
            <p className="mt-5 text-body normal-case">
              Yes, we offer on-site talent, with pricing that may vary. Rest assured, our on-site
              services are designed to optimize both cost savings and efficiency
            </p>
          </article>

          {faqs.map((item) => (
            <article key={item} className="rounded-[10px] border border-[#CBCCCD] p-5">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-[16px] font-normal text-[#111111]">{item}</h3>
                <Plus className="h-5 w-5 text-[#111111]" />
              </div>
            </article>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
