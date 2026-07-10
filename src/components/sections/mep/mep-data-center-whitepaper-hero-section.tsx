import Image from "next/image";

import { PageContainer } from "@/components/layout/page-container";
import { SectionTag } from "@/components/sections/section-primitives";
import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";

const HERO_IMAGE = "/images/image%2057.png";

function HeroFadeRightEdge() {
  return (
    <div
      className="pointer-events-none absolute bottom-0 right-0 top-0 z-[2] hidden w-[120px] bg-[linear-gradient(270deg,#ffffff_56%,rgba(255,255,255,0)_100%)] lg:block lg:w-[240px]"
      aria-hidden
    />
  );
}

function HeroFormField({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: "text" | "email" | "tel";
}) {
  return (
    <label className="flex min-w-0 flex-1 flex-col gap-1.5">
      <span className="text-[16px] font-light text-[#111111]">
        {label}
        <span className="text-[#D70416]">*</span>
      </span>
      <input
        type={type}
        placeholder={placeholder}
        className="h-[50px] w-full rounded-[10px] border border-[#CBCCCD] bg-white px-2.5 text-[16px] font-normal capitalize text-[#111111] placeholder:text-[#808080]"
      />
    </label>
  );
}

function HeroContactForm({ className }: { className?: string }) {
  return (
    <div
      className={`w-full max-w-[520px] rounded-[20px] border border-[#CBCCCD] bg-white/90 p-5 backdrop-blur-[10px] ${className ?? ""}`}
    >
      <div className="flex flex-col gap-[30px]">
        <div className="flex flex-col gap-5">
          <h2 className="max-w-[528px] text-[24px] capitalize leading-8 text-[#111111]">
            Get in <span className="font-light text-[#D70416]">Touch</span>
          </h2>
          <p className="max-w-[480px] text-[16px] leading-6 text-[#808080]">
            Let&apos;s discuss your requirements and see how our expertise can help on your next
            project.
          </p>
        </div>

        <form className="flex flex-col gap-5">
          <div className="flex flex-col gap-5 sm:flex-row">
            <HeroFormField label="Name" placeholder="Name" />
            <HeroFormField label="Work Email" placeholder="Work Email" type="email" />
          </div>
          <div className="flex flex-col gap-5 sm:flex-row">
            <HeroFormField label="Phone Number" placeholder="Phone Number" type="tel" />
            <HeroFormField label="Company Name" placeholder="Email ID" />
          </div>
          <label className="flex flex-col gap-1.5">
            <span className="text-[16px] font-light text-[#111111]">
              Message
              <span className="text-[#D70416]">*</span>
            </span>
            <textarea
              placeholder="Write a Description"
              className="h-[100px] w-full resize-none rounded-[10px] border border-[#CBCCCD] bg-white px-2.5 py-2.5 text-[16px] font-normal capitalize text-[#111111] placeholder:text-[#808080]"
            />
          </label>
          <PrimaryCtaButton type="submit" stripedLong>
            Submit Now
          </PrimaryCtaButton>
        </form>
      </div>
    </div>
  );
}

/** Figma 994:22583 — data center whitepaper hero with overlay contact form */
export function MepDataCenterWhitepaperHeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div
        className="pointer-events-none absolute z-0 hidden lg:right-0 lg:top-0 lg:block lg:h-[900px] lg:w-[min(62%,1082px)]"
        aria-hidden
      >
        <Image
          src={HERO_IMAGE}
          alt=""
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 62vw"
          className="object-contain object-center"
        />
      </div>

      <div className="pointer-events-none absolute z-[1] hidden lg:right-0 lg:top-0 lg:block lg:h-[900px] lg:w-[min(62%,1082px)] lg:max-w-[1082px] lg:overflow-visible">
        <HeroContactForm className="pointer-events-auto absolute left-[312px] top-[88px]" />
      </div>

      <HeroFadeRightEdge />

      <PageContainer className="relative z-10 py-12 lg:py-[150px]">
        <div className="flex w-full max-w-[646px] flex-col gap-[30px]">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              <SectionTag label="MEP BIM for data Canters" />
              <h1 className="w-full capitalize text-[#111111]">
                <span className="block text-[32px] font-medium leading-[1.15] sm:text-[40px] lg:text-[48px]">
                  Fabrication-Ready
                </span>
                <span className="block text-[32px] font-light leading-[1.15] text-[#D70416] sm:text-[40px] lg:text-[48px]">
                  MEP BIM Services for Data Centers
                </span>
              </h1>
            </div>
            <p className="max-w-[618px] text-[16px] font-normal leading-6 text-[#808080]">
              Our pre-vetted BIM team helps contractors, consultants, and developers deliver
              mission-critical facilities with coordinated MEP models built for construction,
              fabrication, and long-term operations.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-5">
            <PrimaryCtaButton
              fullWidth={false}
              className="primary-cta--highlighted h-auto min-h-[52px] px-5 py-4 capitalize backdrop-blur-[50px]"
            >
              Book a Free Consultation
            </PrimaryCtaButton>
            <PrimaryCtaButton
              fullWidth={false}
              className="h-auto min-h-[52px] px-5 py-4 capitalize backdrop-blur-[50px]"
            >
              Explore Data Center Project
            </PrimaryCtaButton>
          </div>
        </div>

        <div className="relative z-10 mt-10 lg:hidden">
          <HeroContactForm className="mx-auto" />
        </div>

        <div className="relative mt-8 h-[300px] w-full sm:h-[360px] lg:hidden">
          <Image
            src={HERO_IMAGE}
            alt="Data center MEP BIM coordination model"
            fill
            sizes="100vw"
            className="object-contain object-center"
          />
        </div>
      </PageContainer>
    </section>
  );
}
