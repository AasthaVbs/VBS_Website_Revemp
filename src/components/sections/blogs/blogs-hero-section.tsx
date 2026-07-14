import Image from "next/image";

import blogBannerImg from "@/assets/images/blog-banner.jpg";
import { PageContainer } from "@/components/layout/page-container";
import { SectionTag } from "@/components/sections/section-primitives";
import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";
import { blogsPageHero } from "@/constants/blogs-page-content";

/** Figma node 405:73045 — Blogs hero */
export function BlogsHeroSection() {
  const { tag, titleLead, titleAccent, description, ctaLabel, imageAlt } = blogsPageHero;

  return (
    <section className="blogs-hero-section overflow-hidden bg-white pt-5 pb-3 lg:py-[100px] lg:pb-12">
      <PageContainer>
        <div className="flex flex-col items-center gap-3 lg:flex-row lg:items-center lg:justify-between lg:gap-8 xl:gap-12">
          <div className="flex w-full min-w-0 flex-1 flex-col items-center gap-3 text-center lg:items-start lg:gap-[30px] lg:text-left">
            <div className="flex flex-col items-center gap-2 lg:items-start lg:gap-5">
              <div className="flex flex-col items-center gap-1.5 lg:items-start lg:gap-3">
                <SectionTag label={tag} className="self-center lg:self-start" />
                <h1 className="text-section w-full max-w-[497px] capitalize max-lg:max-w-none">
                  <span className="font-medium text-[#111111]">{titleLead}</span>
                  <span className="font-light text-[#D70416]">{titleAccent}</span>
                </h1>
              </div>
              <p className="w-full max-w-[568px] text-[16px] font-normal leading-6 text-[#808080] max-lg:max-w-none">
                {description}
              </p>
            </div>
            <PrimaryCtaButton fullWidth={false} href="/contact" className="shrink-0 px-5 py-4 capitalize">
              {ctaLabel}
            </PrimaryCtaButton>
          </div>

          <div className="relative mx-auto aspect-[589/480] w-full max-w-[589px] shrink-0 overflow-hidden rounded-[9px] bg-white lg:mx-0">
            <Image
              src={blogBannerImg}
              alt={imageAlt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 589px"
              priority
            />
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
