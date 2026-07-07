import { SiteHeader } from "@/components/layout/site-header";
import { ContactHeroSection } from "@/components/sections/contact/contact-hero-section";
import {
  DeferredContactGetInTouchSection,
  DeferredOurLocationsSection,
  DeferredSiteFooter,
} from "@/lib/lazy-page-sections";

export function VbsContactPage() {
  return (
    <div className="vbs-redesign-page contact-us-page min-h-screen overflow-x-hidden bg-white">
      <SiteHeader />

      <main className="contact-section-page">
        <ContactHeroSection />

        <DeferredContactGetInTouchSection />

        <DeferredOurLocationsSection />
      </main>

      <DeferredSiteFooter />
    </div>
  );
}
