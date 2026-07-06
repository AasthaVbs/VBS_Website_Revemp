import { SiteHeader } from "@/components/layout/site-header";
import { CareersDetailedHeroSection } from "@/components/sections/careers/careers-detailed-hero-section";
import {
  DeferredCareersCareerFormSection,
  DeferredCareersOpeningsSection,
  DeferredSiteFooter,
} from "@/lib/lazy-page-sections";

export function VbsCareersDetailedPage() {
  return (
    <div className="vbs-redesign-page min-h-screen overflow-x-hidden bg-white">
      <SiteHeader />
      <CareersDetailedHeroSection />
      <DeferredCareersOpeningsSection />
      <DeferredCareersCareerFormSection />
      <DeferredSiteFooter />
    </div>
  );
}
