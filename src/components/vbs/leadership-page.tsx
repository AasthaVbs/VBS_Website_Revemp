import { SiteHeader } from "@/components/layout/site-header";
import { CertificationAwardsSection } from "@/components/sections/certification-awards-section";
import { ClientSuccessStoriesSection } from "@/components/sections/client-success-stories-section";
import { EvaluateDeliveryCtaSection } from "@/components/sections/evaluate-delivery-cta-section";
import { LeadershipHeroSection } from "@/components/sections/leadership/leadership-hero-section";
import { LeadershipTeamSection } from "@/components/sections/leadership/leadership-team-section";
import { SiteFooter } from "@/components/sections/site-footer";
import { StatsStripSection } from "@/components/sections/stats-strip-section";
import { leadershipJoinTeamCopy, leadershipStats } from "@/constants/leadership-content";

export function VbsLeadershipPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <SiteHeader />

      <LeadershipHeroSection />
      <StatsStripSection stats={leadershipStats} className="bg-white pb-[30px] pt-0" />
      <LeadershipTeamSection />
      <CertificationAwardsSection />
      <ClientSuccessStoriesSection />
      <EvaluateDeliveryCtaSection
        title={
          <>
            {leadershipJoinTeamCopy.titleLine1}
            <span className="text-accent">{leadershipJoinTeamCopy.titleAccent}</span>
          </>
        }
        description={leadershipJoinTeamCopy.description}
        ctaLabel={leadershipJoinTeamCopy.ctaLabel}
      />

      <SiteFooter />
    </div>
  );
}
