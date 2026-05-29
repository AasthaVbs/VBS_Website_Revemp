import Image from "next/image";

import { PageContainer } from "@/components/layout/page-container";
import { SiteHeader } from "@/components/layout/site-header";
import { FounderSection } from "@/components/sections/about/founder-section";
import { CoreValuesSection } from "@/components/sections/about/core-values-section";
import { VisionMissionSection } from "@/components/sections/about/vision-mission-section";
import { CertificationSection } from "@/components/sections/certification-section";
import { ClientSuccessStoriesSection } from "@/components/sections/client-success-stories-section";
import { GetInTouchSection } from "@/components/sections/get-in-touch-section";
import { JoinTeamCtaSection } from "@/components/sections/join-team-cta-section";
import { SectionTag } from "@/components/sections/section-primitives";
import { SiteFooter } from "@/components/sections/site-footer";
import { StatsStripSection } from "@/components/sections/stats-strip-section";
import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";
import { aboutStatsStrip } from "@/constants/shared-sections";

export function VbsAboutPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <SiteHeader />

      <section className="bg-white py-12 md:py-16 lg:py-20">
        <PageContainer className="grid items-center gap-10 lg:grid-cols-2">
          <div className="flex flex-col items-start gap-[30px]">
            <div className="flex flex-col items-start gap-5">
              <SectionTag label="About us" />
              <h1 className="text-[48px] font-medium capitalize leading-[1.1] text-[#111111] md:text-[56px]">
                About{" "}
                <span className="font-light text-vbs-red">Virtual Building Studio (VBS)</span>
              </h1>
              <p className="max-w-[637px] text-[16px] font-normal capitalize leading-6 text-[#808080]">
                Since 2015, we&apos;ve been the trusted partner for Architecture and Engineering
                firms, helping them rapidly scale their BIM teams and deliver award-winning
                projects every time.
              </p>
            </div>
            <PrimaryCtaButton fullWidth={false}>Contact Us</PrimaryCtaButton>
          </div>

          <div className="relative mx-auto h-[400px] w-full max-w-[850px] lg:h-[480px]">
            <div className="absolute left-0 top-0 h-full w-[66%] overflow-hidden rounded-[10px]">
              <Image
                src="/images/figma/hero-bg-1.png"
                alt="Virtual Building Studio workspace"
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="absolute left-[53%] top-[80px] z-10 h-[280px] w-[34%] min-w-[200px] overflow-hidden rounded-[10px] border-[10px] border-white shadow-[0_4px_14px_rgba(0,0,0,0.14)]">
              <Image
                src="/images/figma/industry-2.png"
                alt="BIM modeling project"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </PageContainer>
      </section>

      <StatsStripSection stats={aboutStatsStrip} className="bg-white pb-[30px] pt-0" />

      <VisionMissionSection />
      <CoreValuesSection />
      <FounderSection />
      <CertificationSection />
      <JoinTeamCtaSection />
      <ClientSuccessStoriesSection />
      <GetInTouchSection />
      <SiteFooter />
    </div>
  );
}
