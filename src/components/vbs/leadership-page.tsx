import { SiteHeader } from "@/components/layout/site-header";
import { LeadershipHeroSection } from "@/components/sections/leadership/leadership-hero-section";
import { TrustStripSection } from "@/components/sections/trust-strip-section";
import { lifeAtVbsStatsStrip } from "@/constants/life-at-vbs-content";
import { leadershipJoinTeamCopy } from "@/constants/leadership-content";
import { ROUTES } from "@/constants/navigation";
import {
  DeferredCertificationAwardsSection,
  DeferredClientSuccessStoriesSection,
  DeferredEvaluateDeliveryCtaSection,
  DeferredLeadershipTeamSection,
  DeferredSiteFooter,
} from "@/lib/lazy-page-sections";

export function VbsLeadershipPage() {
  return (
    <div className="vbs-redesign-page about-section-page min-h-screen overflow-x-hidden bg-white">
      <SiteHeader />

      <LeadershipHeroSection />
      <TrustStripSection stats={lifeAtVbsStatsStrip} className="vbs-trust-strip-section bg-white" />
      <DeferredLeadershipTeamSection />
      <DeferredCertificationAwardsSection />
      <DeferredClientSuccessStoriesSection />
      <DeferredEvaluateDeliveryCtaSection
        cardOnMobile
        title={
          <>
            {leadershipJoinTeamCopy.titleLine1}
            <span className="text-accent">{leadershipJoinTeamCopy.titleAccent}</span>
          </>
        }
        description={leadershipJoinTeamCopy.description}
        ctaLabel={leadershipJoinTeamCopy.ctaLabel}
        ctaHref={ROUTES.careers}
      />

      <DeferredSiteFooter />
    </div>
  );
}
