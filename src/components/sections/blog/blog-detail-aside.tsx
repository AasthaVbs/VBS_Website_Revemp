"use client";

import Image from "next/image";

import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";
import type { BlogPostDetail } from "@/constants/blog-posts/types";

type BlogDetailAsideProps = {
  author: BlogPostDetail["author"];
  meta: BlogPostDetail["meta"];
};

export function BlogDetailAside({ author, meta }: BlogDetailAsideProps) {
  return (
    <aside className="flex w-full shrink-0 flex-col gap-5 xl:w-[282px]">
      <div className="flex flex-col gap-5 rounded-[10px] bg-white p-5 shadow-[0_4px_10px_rgba(0,0,0,0.15)] xl:sticky xl:top-28">
        <div className="flex items-start gap-4">
          <div className="relative h-[70px] w-[70px] shrink-0 overflow-hidden rounded-full">
            <Image
              src={author.image}
              alt={author.name}
              fill
              className="object-cover"
              sizes="70px"
            />
          </div>
          <div className="flex min-w-0 flex-col gap-2.5">
            <p className="text-[18px] text-[#111111]">{author.name}</p>
            <p className="text-[16px] text-[#808080]">{author.role}</p>
          </div>
        </div>
        <div className="flex items-center gap-2.5">
          <span className="text-[16px] text-[#111111]">Type:</span>
          <span className="text-[16px] text-[#808080]">{meta.category}</span>
        </div>
        <div className="flex items-center gap-2.5">
          <span className="text-[16px] text-[#111111]">Last Updated:</span>
          <span className="text-[16px] text-[#808080]">{meta.lastUpdated}</span>
        </div>
      </div>

      <div className="flex flex-col gap-[30px] rounded-[10px] border border-[#CBCCCD] bg-[#FBF9F9] p-5 shadow-[0_4px_10px_rgba(0,0,0,0.15)]">
        <div className="flex flex-col gap-4">
          <h3 className="text-[24px] text-black">Subscribe to Our Newsletter</h3>
          <p className="text-[16px] text-[#808080]">
            We&apos;ll send you a nice letter once per month. No spam.
          </p>
        </div>
        <form
          className="flex flex-col gap-5"
          onSubmit={(e) => e.preventDefault()}
        >
          <label className="flex flex-col gap-1.5">
            <span className="text-[16px] font-light text-[#111111]">
              Email ID<span className="text-[#D70416]">*</span>
            </span>
            <input
              type="email"
              placeholder="Enter Email ID"
              className="h-[50px] rounded-[10px] border border-[#CBCCCD] bg-white px-2.5 text-[16px] text-[#111111] placeholder:text-[#808080] focus:outline-none focus:ring-1 focus:ring-[#D70416]"
            />
          </label>
          <PrimaryCtaButton type="submit" stripedLong fullWidth>
            Submit Now
          </PrimaryCtaButton>
        </form>
      </div>
    </aside>
  );
}
