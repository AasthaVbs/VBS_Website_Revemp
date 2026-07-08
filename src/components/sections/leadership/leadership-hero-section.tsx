import { PageContainer } from "@/components/layout/page-container";
import { SectionTag } from "@/components/sections/section-primitives";
import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";
import { leadershipHeroCopy, leadershipHeroImages } from "@/constants/leadership-content";

/** Figma node 897:15373 — Leadership hero */
export function LeadershipHeroSection() {
  const ctaHref =
    leadershipHeroCopy.ctaLabel.trim().toLowerCase() === "contact us" ? "/contact" : undefined;

  return (
    <section className="about-hero-section overflow-hidden bg-white py-12 md:py-16 lg:py-[150px]">
      <PageContainer>
        <div className="vbs-split-hero__row--balanced flex flex-col items-center gap-10 lg:flex-row lg:items-center">
          <div className="vbs-split-hero__copy flex w-full min-w-0 flex-1 flex-col items-start gap-[30px]">
            <div className="flex flex-col items-start gap-5">
              <div className="flex flex-col items-start gap-3">
                <SectionTag label={leadershipHeroCopy.tag} />
                <h1 className="text-section w-full max-w-[655px] capitalize max-lg:max-w-none">
                  {leadershipHeroCopy.titleLead}
                  <span className="text-accent font-light">{leadershipHeroCopy.titleAccent}</span>
                </h1>
              </div>
              <div className="flex w-full max-w-[655px] flex-col items-start gap-4 max-lg:max-w-none">
                <p className="text-[16px] font-normal capitalize leading-6 text-[#808080]">
                  {leadershipHeroCopy.descriptionLead}{" "}
                  <span className="font-medium text-[#111111]">
                    {leadershipHeroCopy.descriptionHighlight}
                  </span>
                </p>
                <p className="text-[16px] font-normal capitalize leading-6 text-[#808080]">
                  {leadershipHeroCopy.descriptionTail}
                </p>
              </div>
            </div>
            <PrimaryCtaButton fullWidth={false} href={ctaHref}>
              {leadershipHeroCopy.ctaLabel}
            </PrimaryCtaButton>
          </div>

          <div className="vbs-split-hero__media--single mx-auto w-full lg:mx-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={leadershipHeroImages.main}
              alt="Virtual Building Studio leadership"
            />
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
