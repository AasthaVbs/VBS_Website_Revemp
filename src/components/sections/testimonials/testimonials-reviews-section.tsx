"use client";

import Image from "next/image";

import { PageContainer } from "@/components/layout/page-container";
import { SectionTag } from "@/components/sections/section-primitives";
import {
  clientReviewItems,
  testimonialsReviewsIntro,
  type ClientReviewItem,
} from "@/constants/testimonials-page-content";

function StarRating() {
  return (
    <div className="flex items-center gap-[2.33px]" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, index) => (
        <Image
          key={index}
          src="/images/solar_star-line-duotone.svg"
          alt=""
          width={14}
          height={14}
          aria-hidden
        />
      ))}
    </div>
  );
}

function ClientReviewCard({ review }: { review: ClientReviewItem }) {
  return (
    <article className="flex h-full w-full flex-col gap-4 rounded-[18px] border border-[#CBCCCD] bg-white p-4 sm:gap-5 sm:p-5">
      <div className="flex items-start gap-3 sm:gap-[15px]">
        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-[10px] bg-[#F2F2F2] sm:h-[60px] sm:w-[60px]">
          <Image
            src={review.avatar}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 640px) 48px, 60px"
          />
        </div>
        <div className="flex min-w-0 flex-1 flex-col gap-1">
          <h3 className="text-[20px] font-normal leading-tight text-[#111111] sm:text-[24px]">
            {review.name}
          </h3>
          <p className="text-[13px] font-normal text-[#808080]">{review.role}</p>
        </div>
      </div>
      <p className="text-[15px] leading-6 text-[#808080] sm:text-[16px]">{review.quote}</p>
      <StarRating />
    </article>
  );
}

/** Client reviews — same stories as Client Success Stories (icon + quote only). */
export function TestimonialsReviewsSection() {
  const { tag, titleLead, titleAccent, description } = testimonialsReviewsIntro;

  return (
    <section className="scroll-mt-24 bg-white py-12 lg:py-[100px]">
      <PageContainer className="flex flex-col gap-10 sm:gap-[60px]">
        <div className="flex w-full flex-col items-start gap-4 sm:gap-5">
          <div className="flex flex-col items-start gap-3">
            <SectionTag label={tag} />
            <h2 className="text-section w-full max-w-[886px]">
              <span className="font-medium text-[#111111]">{titleLead}</span>
              <span className="font-light text-[#D70416]">{titleAccent}</span>
            </h2>
          </div>
          <p className="w-full max-w-[673px] text-[16px] leading-6 text-[#808080]">
            {description}
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-3">
          {clientReviewItems.map((review) => (
            <ClientReviewCard key={review.id} review={review} />
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
