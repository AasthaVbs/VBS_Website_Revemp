import { SiteHeader } from "@/components/layout/site-header";
import { CareersCareerFormSection } from "@/components/sections/careers/careers-career-form-section";
import { CareersDetailedHeroSection } from "@/components/sections/careers/careers-detailed-hero-section";
import { CareersOpeningsSection } from "@/components/sections/careers/careers-openings-section";
import { SiteFooter } from "@/components/sections/site-footer";

export function VbsCareersDetailedPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <SiteHeader />
      <CareersDetailedHeroSection />
      <CareersOpeningsSection />
      <CareersCareerFormSection />
      <SiteFooter />
    </div>
  );
}
