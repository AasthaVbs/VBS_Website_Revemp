"use client";

import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import type { ButtonHTMLAttributes } from "react";
import { useMemo, useState } from "react";

import { PageContainer } from "@/components/layout/page-container";
import { SectionTag } from "@/components/sections/section-primitives";
import {
  clientReviewItems,
  clientReviewPaginationPages,
  clientReviewsPerPage,
  testimonialsReviewsIntro,
  type ClientReviewItem,
} from "@/constants/testimonials-page-content";
import { cn } from "@/lib/utils";

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
    <article className="flex h-full w-full flex-col gap-5 rounded-[18px] border border-[#CBCCCD] bg-white p-4 sm:flex-row sm:items-start sm:justify-between sm:p-5">
      <div className="flex min-w-0 flex-1 flex-col gap-4 sm:max-w-[382px] sm:gap-5">
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
      </div>
      <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden rounded-[10px] sm:aspect-square sm:h-[134px] sm:w-[134px] sm:aspect-auto">
        <Image src={review.cover} alt="" fill className="object-cover" sizes="(max-width: 640px) 100vw, 134px" />
      </div>
    </article>
  );
}

function PaginationButton({
  children,
  disabled,
  onClick,
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "flex items-center justify-center rounded-[10px] border border-[#CBCCCD] p-2.5 backdrop-blur-[50px] transition-opacity",
        disabled ? "cursor-not-allowed opacity-40" : "hover:bg-[#FAFAFA]",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

/** Figma 948:29976 — all reviews on page 01; responsive 2-column grid */
export function TestimonialsReviewsSection() {
  const { tag, titleLead, titleAccent, description } = testimonialsReviewsIntro;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.max(1, Math.ceil(clientReviewItems.length / clientReviewsPerPage));

  const pageItems = useMemo(() => {
    const start = (currentPage - 1) * clientReviewsPerPage;
    return clientReviewItems.slice(start, start + clientReviewsPerPage);
  }, [currentPage]);

  const cardRows = useMemo(() => {
    const rows: ClientReviewItem[][] = [];
    for (let index = 0; index < pageItems.length; index += 2) {
      rows.push(pageItems.slice(index, index + 2));
    }
    return rows;
  }, [pageItems]);

  return (
    <section className="bg-white py-12 lg:py-[100px]">
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

        <div className="flex w-full flex-col gap-4 sm:gap-5">
          {cardRows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-2"
            >
              {row.map((review) => (
                <ClientReviewCard key={review.id} review={review} />
              ))}
            </div>
          ))}
        </div>

        <nav
          className="flex w-full flex-wrap items-center justify-center gap-3 sm:justify-end sm:gap-5"
          aria-label="Client reviews pagination"
        >
          <PaginationButton
            aria-label="First page"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(1)}
          >
            <ChevronsLeft className="h-5 w-5 text-[#808080]" strokeWidth={1.5} />
          </PaginationButton>
          <PaginationButton
            aria-label="Previous page"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
          >
            <ChevronLeft className="h-5 w-5 text-[#808080]" strokeWidth={1.5} />
          </PaginationButton>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            {clientReviewPaginationPages.map((page) => {
              const pageNumber = page === "..." ? null : Number(page);
              const isActive =
                pageNumber !== null && pageNumber === currentPage && pageNumber <= totalPages;

              return (
                <button
                  key={page}
                  type="button"
                  disabled={page === "..."}
                  onClick={() => {
                    if (pageNumber !== null && pageNumber <= totalPages) {
                      setCurrentPage(pageNumber);
                    }
                  }}
                  className={cn(
                    "rounded-[10px] px-3 py-2 text-[14px] capitalize backdrop-blur-[50px] transition-colors sm:px-[18px] sm:py-2.5 sm:text-[16px]",
                    page === "..."
                      ? "cursor-default text-[#808080]"
                      : isActive
                        ? "text-[#111111]"
                        : pageNumber !== null && pageNumber <= totalPages
                          ? "text-[#808080] hover:text-[#111111]"
                          : "cursor-default text-[#808080]/50",
                  )}
                >
                  {page}
                </button>
              );
            })}
          </div>

          <PaginationButton
            aria-label="Next page"
            disabled={currentPage >= totalPages}
            onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
          >
            <ChevronRight className="h-5 w-5 text-[#808080]" strokeWidth={1.5} />
          </PaginationButton>
          <PaginationButton
            aria-label="Last page"
            disabled={currentPage >= totalPages}
            onClick={() => setCurrentPage(totalPages)}
          >
            <ChevronsRight className="h-5 w-5 text-[#808080]" strokeWidth={1.5} />
          </PaginationButton>
        </nav>
      </PageContainer>
    </section>
  );
}
