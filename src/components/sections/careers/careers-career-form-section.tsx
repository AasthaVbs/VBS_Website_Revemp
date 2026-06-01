import Image from "next/image";
import { Mail, MapPin, Phone, Upload } from "lucide-react";

import getInTouchImg from "@/assets/images/image 56.png";
import { PageContainer } from "@/components/layout/page-container";
import { SectionIntro } from "@/components/sections/section-primitives";
import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";
import { careersFormSectionCopy } from "@/constants/careers-content";

/**
 * Careers page only — form left, image right (Figma 636:10499).
 * Does not modify shared GetInTouchSection.
 */
export function CareersCareerFormSection() {
  return (
    <section id="career-form" className="bg-[#FAFAFA] py-12 lg:py-[100px]">
      <PageContainer className="grid items-start gap-8 lg:grid-cols-2 lg:gap-[30px]">
        <div className="order-1 flex min-w-0 flex-col gap-6 lg:order-1 lg:gap-[30px]">
          <SectionIntro
            tag={careersFormSectionCopy.tag}
            title={
              <>
                {careersFormSectionCopy.titleLead}
                <span className="text-accent">{careersFormSectionCopy.titleAccent}</span>
              </>
            }
            description={careersFormSectionCopy.description}
            titleClassName="text-section max-w-[528px] capitalize"
          />

          <form className="flex flex-col gap-4">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="flex flex-col gap-1.5">
                <span className="text-[16px] font-light text-[#111111]">
                  First Name<span className="font-light text-[#D70416]">*</span>
                </span>
                <input
                  type="text"
                  className="h-[50px] rounded-[10px] border border-[#CBCCCD] bg-white px-3 text-[16px] font-normal text-[#111111] placeholder:text-[#808080]"
                  placeholder="Enter First Name"
                />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="text-[16px] font-light text-[#111111]">
                  Last Name<span className="font-light text-[#D70416]">*</span>
                </span>
                <input
                  type="text"
                  className="h-[50px] rounded-[10px] border border-[#CBCCCD] bg-white px-3 text-[16px] font-normal text-[#111111] placeholder:text-[#808080]"
                  placeholder="Enter Last Name"
                />
              </label>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="flex flex-col gap-1.5">
                <span className="text-[16px] font-light text-[#111111]">
                  Number<span className="font-light text-[#D70416]">*</span>
                </span>
                <input
                  type="tel"
                  className="h-[50px] rounded-[10px] border border-[#CBCCCD] bg-white px-3 text-[16px] font-normal text-[#111111] placeholder:text-[#808080]"
                  placeholder="Enter Number"
                />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="text-[16px] font-light text-[#111111]">
                  Email ID<span className="font-light text-[#D70416]">*</span>
                </span>
                <input
                  type="email"
                  className="h-[50px] rounded-[10px] border border-[#CBCCCD] bg-white px-3 text-[16px] font-normal text-[#111111] placeholder:text-[#808080]"
                  placeholder="Enter Email ID"
                />
              </label>
            </div>
            <label className="flex flex-col gap-1.5">
              <span className="text-[16px] font-light text-[#111111]">
                Attachment<span className="font-light text-[#D70416]">*</span>
              </span>
              <div className="flex h-[100px] flex-col items-center justify-center gap-2.5 rounded-[10px] border border-[#CBCCCD] bg-white px-3">
                <Upload className="h-[22px] w-[22px] text-[#808080]" aria-hidden />
                <p className="text-center text-[16px] font-normal text-[#808080]">
                  Attach your CV Here /{" "}
                  <button type="button" className="text-[#2299D6] underline">
                    Upload a File
                  </button>
                </p>
              </div>
            </label>
            <PrimaryCtaButton type="submit" stripedLong className="text-[16px] font-medium">
              {careersFormSectionCopy.submitLabel}
            </PrimaryCtaButton>
          </form>
        </div>

        <div className="relative order-2 min-h-[320px] overflow-hidden rounded-[20px] bg-[#111111] shadow-[0_4px_10px_rgba(0,0,0,0.15)] sm:min-h-[420px] lg:order-2 lg:min-h-[602px]">
          <Image
            src={getInTouchImg}
            alt="Virtual Building Studio office"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(222deg,rgba(17,17,17,0)_0%,#111111_75%)]" />
          <div className="absolute bottom-6 left-6 right-6 z-10 flex max-w-[320px] flex-col gap-5 text-white sm:bottom-10 sm:left-10 sm:gap-8 lg:top-auto lg:translate-y-0">
            <div className="inline-flex items-center gap-2.5">
              <Phone className="h-5 w-5 shrink-0" />
              <span className="text-[16px] font-normal lowercase">+1 (409) 800-6601</span>
            </div>
            <div className="inline-flex items-center gap-2.5">
              <Mail className="h-5 w-5 shrink-0" />
              <span className="text-[16px] font-normal lowercase">
                contact@virtualbuildingstudio.com
              </span>
            </div>
            <div className="inline-flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0" />
              <span className="text-[16px] font-normal lowercase">
                712 wilcrest drive 1097 houston, tx 77042 us
              </span>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
