import { SiteHeader } from "@/components/layout/site-header";
import { ContactHeroSection } from "@/components/sections/contact/contact-hero-section";
import {
  DeferredContactGetInTouchSection,
  DeferredOurLocationsSection,
  DeferredSiteFooter,
} from "@/lib/lazy-page-sections";

export function VbsContactPage() {
  return (
    <div className="vbs-redesign-page min-h-screen overflow-x-hidden bg-white">
      <SiteHeader />

      <ContactHeroSection />

      <DeferredContactGetInTouchSection />

      <DeferredOurLocationsSection />

      <DeferredSiteFooter />
    </div>
  );
}
