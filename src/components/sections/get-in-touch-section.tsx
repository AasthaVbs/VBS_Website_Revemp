import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

import getInTouchImg from "@/assets/images/image 56.png";
import { PageContainer } from "@/components/layout/page-container";
import { SectionIntro } from "@/components/sections/section-primitives";
import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";

export function GetInTouchSection({
  description = "Let's discuss your requirements and see how our expertise can help on your next project.",
  sectionId = "contact",
}: {
  description?: string;
  sectionId?: string;
}) {
  return (
    <section id={sectionId} className="bg-[#FAFAFA] py-12 lg:py-[100px]">
      <PageContainer className="grid items-start gap-8 lg:grid-cols-2 lg:gap-[30px]">
        <div className="flex min-w-0 flex-col gap-6 lg:gap-[30px]">
          <SectionIntro
            tag="Contact Us"
            title={
              <>
                Get in <span className="text-accent">Touch</span>
              </>
            }
            description={description}
            titleClassName="text-section max-w-[528px] normal-case"
          />

          <form className="flex flex-col gap-4">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="flex flex-col gap-2">
                <span className="text-[16px] font-light text-[#111111]">
                  First Name<span className="font-light text-[#D70416]">*</span>
                </span>
                <input
                  type="text"
                  className="h-[50px] rounded-[10px] border border-[#CBCCCD] bg-white px-3 text-[16px] font-normal normal-case text-[#111111] placeholder:text-[#808080]"
                  placeholder="Enter First Name"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-[16px] font-light text-[#111111]">
                  Last Name<span className="font-light text-[#D70416]">*</span>
                </span>
                <input
                  type="text"
                  className="h-[50px] rounded-[10px] border border-[#CBCCCD] bg-white px-3 text-[16px] font-normal normal-case text-[#111111] placeholder:text-[#808080]"
                  placeholder="Enter Last Name"
                />
              </label>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="flex flex-col gap-2">
                <span className="text-[16px] font-light text-[#111111]">
                  Number<span className="font-light text-[#D70416]">*</span>
                </span>
                <input
                  type="tel"
                  className="h-[50px] rounded-[10px] border border-[#CBCCCD] bg-white px-3 text-[16px] font-normal normal-case text-[#111111] placeholder:text-[#808080]"
                  placeholder="Enter Number"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-[16px] font-light text-[#111111]">
                  Email ID<span className="font-light text-[#D70416]">*</span>
                </span>
                <input
                  type="email"
                  className="h-[50px] rounded-[10px] border border-[#CBCCCD] bg-white px-3 text-[16px] font-normal normal-case text-[#111111] placeholder:text-[#808080]"
                  placeholder="Enter Email ID"
                />
              </label>
            </div>
            <label className="flex flex-col gap-2">
              <span className="text-[16px] font-light text-[#111111]">Message</span>
              <textarea
                className="h-[100px] w-full resize-none rounded-[10px] border border-[#CBCCCD] bg-white px-3 py-2 text-[16px] font-normal normal-case text-[#111111] placeholder:text-[#808080]"
                placeholder="Write a Description"
              />
            </label>
            <PrimaryCtaButton type="submit" stripedLong>
              Submit Now
            </PrimaryCtaButton>
          </form>
        </div>

        <div className="relative min-h-[320px] overflow-hidden rounded-[20px] bg-[#111111] shadow-[0_4px_10px_rgba(0,0,0,0.15)] sm:min-h-[420px] lg:min-h-[602px]">
          <Image
            src={getInTouchImg}
            alt="Contact support representative"
            fill
            className="object-cover object-center lg:object-[72%_35%]"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,17,17,0.2)_0%,rgba(17,17,17,0.85)_55%,#111111_100%)] lg:bg-[linear-gradient(90deg,#111111_0%,#111111_35%,rgba(17,17,17,0.55)_55%,rgba(17,17,17,0.15)_100%)]" />
          <div className="absolute bottom-6 left-6 right-6 z-10 flex max-w-[320px] flex-col gap-5 text-white sm:bottom-10 sm:left-10 sm:gap-8">
            <div className="inline-flex items-center gap-2.5">
              <Phone className="h-5 w-5 shrink-0" />
              <span className="text-[16px] font-normal">+1 (409) 800-6601</span>
            </div>
            <div className="inline-flex items-center gap-2.5">
              <Mail className="h-5 w-5 shrink-0" />
              <span className="text-[16px] font-normal">contact@virtualbuildingstudio.com</span>
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
