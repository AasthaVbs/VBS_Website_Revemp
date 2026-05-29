import Image from "next/image";
import { ChevronRight } from "lucide-react";

import { PageContainer } from "@/components/layout/page-container";
import { SectionIntro } from "@/components/sections/section-primitives";
import { testimonialQuote, testimonials } from "@/constants/shared-sections";

export function ClientSuccessStoriesSection({
  description = "We offer two flexible engagement models that work best for our clients.",
}: {
  description?: string;
}) {
  const marqueeItems = [...testimonials, ...testimonials];

  return (
    <section className="relative overflow-hidden bg-[#FAFAFA] py-20">
      <PageContainer className="space-y-[60px]">
        <SectionIntro
          tag="Testimonials"
          title={
            <>
              Client Success <span className="text-accent">Stories</span>
            </>
          }
          description={description}
        />

        <div className="relative overflow-hidden">
          <div className="testimonial-marquee-track">
            {marqueeItems.map((item, index) => (
              <article
                key={`${item.name}-${index}`}
                className="flex h-[340px] w-[732px] shrink-0 items-center gap-5 rounded-[18px] border border-[#CBCCCD] bg-white p-2.5"
              >
                <div className="flex h-[320px] w-[382px] flex-col gap-[15px] p-2.5">
                  <div className="flex items-start gap-[15px]">
                    <div className="relative h-[60px] w-[60px] overflow-hidden rounded-[10px]">
                      <Image src={item.avatar} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex flex-1 flex-col gap-1">
                      <h3 className="text-[24px] font-normal text-[#111111]">{item.name}</h3>
                      <p className="text-[13px] font-normal text-[#808080]">{item.role}</p>
                    </div>
                  </div>
                  <p className="flex-1 text-[16px] font-normal leading-6 text-[#808080]">
                    {testimonialQuote}
                  </p>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Image
                        key={i}
                        src="/images/solar_star-line-duotone.svg"
                        alt=""
                        width={14}
                        height={14}
                        aria-hidden
                      />
                    ))}
                  </div>
                </div>
                <div className="relative h-[300px] w-[300px] overflow-hidden rounded-[10px]">
                  <Image src={item.cover} alt={`${item.name} testimonial`} fill className="object-cover" />
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-8">
          <div className="h-[2px] flex-1 bg-[#B1B1B1]">
            <div className="h-[2px] w-[320px] bg-[#111111]" />
          </div>
          <div className="flex items-center gap-4">
            <button
              type="button"
              aria-label="Previous testimonial"
              className="inline-flex h-12 w-12 items-center justify-center rounded-[10px] border border-[#CBCCCD] text-[#808080]"
            >
              <ChevronRight className="h-6 w-6 rotate-180" />
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              className="inline-flex h-12 w-12 items-center justify-center rounded-[10px] border border-[#CBCCCD] text-[#808080]"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
