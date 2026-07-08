import { SiteHeader } from "@/components/layout/site-header";
import { LifeAtVbsEventsSection } from "@/components/sections/life-at-vbs/life-at-vbs-events-section";
import { LifeAtVbsHeroSection } from "@/components/sections/life-at-vbs/life-at-vbs-hero-section";
import { LifeAtVbsWhyWorkSection } from "@/components/sections/life-at-vbs/life-at-vbs-why-work-section";
import { TrustStripSection } from "@/components/sections/trust-strip-section";
import { lifeAtVbsStatsStrip } from "@/constants/life-at-vbs-content";
import {
  DeferredGetInTouchSection,
  DeferredSiteFooter,
} from "@/lib/lazy-page-sections";

export function VbsLifeAtVbsPage() {
  return (
    <div className="vbs-redesign-page about-section-page life-at-vbs-page min-h-screen overflow-x-hidden bg-white">
      <SiteHeader />
      <LifeAtVbsHeroSection />
      <TrustStripSection stats={lifeAtVbsStatsStrip} className="vbs-trust-strip-section bg-white" />
      <LifeAtVbsWhyWorkSection />
      <LifeAtVbsEventsSection />
      <DeferredGetInTouchSection />
      <DeferredSiteFooter />
    </div>
  );
}
