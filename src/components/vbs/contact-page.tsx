import { SiteHeader } from "@/components/layout/site-header";
import { ContactHeroSection } from "@/components/sections/contact/contact-hero-section";
import { OurLocationsSection } from "@/components/sections/contact/our-locations-section";
import { ContactGetInTouchSection } from "@/components/sections/contact/contact-get-in-touch-section";
import { SiteFooter } from "@/components/sections/site-footer";

export function VbsContactPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <SiteHeader />

      <ContactHeroSection />

      <ContactGetInTouchSection />

      <OurLocationsSection />

      <SiteFooter />
    </div>
  );
}
