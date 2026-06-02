import Image from "next/image";
import { ChevronRight } from "lucide-react";

import { PageContainer } from "@/components/layout/page-container";
import { SectionTag } from "@/components/sections/section-primitives";
import { resources } from "@/constants/home-content";

const resourceCards = [
  { tag: "Blog", tagClass: "border-vbs-red bg-vbs-red text-white", image: "/images/figma/resource-2.png" },
  {
    tag: "Case Study",
    tagClass: "border-vbs-green bg-vbs-green text-white",
    image: "/images/figma/resource-3.png",
  },
  {
    tag: "White Paper",
    tagClass: "border-vbs-blue bg-vbs-blue text-white",
    image: "/images/figma/resource-1.png",
  },
] as const;

export function MepResourcesSection() {
  return (
    <section className="bg-white py-16 lg:py-[100px]">
      <PageContainer className="space-y-[60px]">
        <div className="flex w-full flex-col items-start gap-5">
          <div className="flex flex-col items-start gap-3">
            <SectionTag label="Resources" />
            <h2 className="text-section">
              Latest thoughts, <span className="text-accent">Ideas & Plan.</span>
            </h2>
          </div>
          <p className="max-w-[413px] text-body normal-case">
            We offer two flexible engagement models that work best for our clients.
          </p>
        </div>

        <div className="space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2.5">
              {["All", "Blogs", "Webinar", "Case Study", "White Paper"].map((tab, index) => (
                <button
                  key={tab}
                  type="button"
                  className={`rounded-[10px] px-5 py-3 text-[16px] backdrop-blur-[50px] ${
                    index === 0
                      ? "bg-vbs-red font-semibold text-white"
                      : "bg-[#FAFAFA] font-normal text-[#111111]"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <a href="/resources" className="inline-flex items-center gap-1.5 text-[16px] font-normal text-vbs-blue">
              View All
              <ChevronRight className="h-5 w-5" />
            </a>
          </div>

          <div className="grid items-start gap-5 lg:grid-cols-2">
            <article className="inline-flex flex-col gap-[30px] overflow-hidden">
              <div className="relative h-[360px] overflow-hidden rounded-[10px]">
                <Image
                  src="/images/figma/resource-1.png"
                  alt="Featured resource"
                  fill
                  className="object-cover"
                />
                <span className="absolute bottom-4 right-4 inline-flex rounded-[10px] border border-vbs-yellow bg-vbs-yellow px-2.5 py-1 text-[13px] font-normal text-[#FBF9F9]">
                  Webinar
                </span>
              </div>
              <div className="flex flex-col items-start gap-[15px]">
                <div className="flex flex-col items-start gap-4">
                  <h3 className="text-[36px] font-normal leading-[1.2] text-[#111111]">
                    Why AutoCAD to BIM Conversion is Essential for Modern Construction
                  </h3>
                  <p className="text-body normal-case">
                    Whether you&apos;re launching a new product or entering a new segment, we design
                    the GTM motion that lands and scales.
                  </p>
                </div>
                <a href="#" className="inline-flex items-center gap-1.5 text-[16px] font-normal text-vbs-blue">
                  Learn More
                  <ChevronRight className="h-5 w-5" />
                </a>
              </div>
            </article>

            <div className="inline-flex w-full flex-col gap-5">
              {resourceCards.map((item, index) => (
                <article key={`${item.tag}-${index}`} className="grid gap-5 sm:grid-cols-2">
                  <div className="relative h-[193px] overflow-hidden rounded-[10px]">
                    <Image src={item.image} alt={item.tag} fill className="object-cover" />
                    <span
                      className={`absolute bottom-4 right-4 inline-flex rounded-[10px] border px-2.5 py-1 text-[13px] font-normal ${item.tagClass}`}
                    >
                      {item.tag}
                    </span>
                  </div>
                  <div className="flex h-[193px] flex-col justify-between">
                    <h3 className="text-[24px] font-normal leading-[1.3] text-[#111111]">
                      Why AutoCAD to BIM Conversion is Essential for Modern Construction
                    </h3>
                    <p className="text-body normal-case">{resources[0]?.date ?? "12 Jan 2026"}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
