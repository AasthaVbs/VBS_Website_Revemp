import { SiteHeader } from "@/components/layout/site-header";
import { LeadershipHeroSection } from "@/components/sections/leadership/leadership-hero-section";
import { StatsStripSection } from "@/components/sections/stats-strip-section";
import { leadershipJoinTeamCopy, leadershipStats } from "@/constants/leadership-content";
import {
  DeferredCertificationAwardsSection,
  DeferredClientSuccessStoriesSection,
  DeferredEvaluateDeliveryCtaSection,
  DeferredLeadershipTeamSection,
  DeferredSiteFooter,
} from "@/lib/lazy-page-sections";

export function VbsLeadershipPage() {
  return (
    <div className="vbs-redesign-page min-h-screen overflow-x-hidden bg-white">
      <SiteHeader />

      <LeadershipHeroSection />
      <StatsStripSection stats={leadershipStats} className="bg-white pb-[30px] pt-0" />
      <DeferredLeadershipTeamSection />
      <DeferredCertificationAwardsSection />
      <DeferredClientSuccessStoriesSection />
      <DeferredEvaluateDeliveryCtaSection
        title={
          <>
            {leadershipJoinTeamCopy.titleLine1}
            <span className="text-accent">{leadershipJoinTeamCopy.titleAccent}</span>
          </>
        }
        description={leadershipJoinTeamCopy.description}
        ctaLabel={leadershipJoinTeamCopy.ctaLabel}
      />

      <DeferredSiteFooter />
    </div>
  );
}
