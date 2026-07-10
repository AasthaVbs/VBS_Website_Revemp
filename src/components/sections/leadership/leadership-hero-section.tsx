import { PageContainer } from "@/components/layout/page-container";
import { SectionTag } from "@/components/sections/section-primitives";
import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";
import { leadershipHeroCopy, leadershipHeroImages } from "@/constants/leadership-content";

/** Figma node 897:15373 — Leadership hero */
export function LeadershipHeroSection() {
  const ctaHref =
    leadershipHeroCopy.ctaLabel.trim().toLowerCase() === "contact us" ? "/contact" : undefined;

  return (
    <section className="leadership-hero-section mt-20  about-hero-section overflow-hidden bg-white">
      <PageContainer>
        <div className="vbs-split-hero__row--balanced flex flex-col items-center gap-10 lg:flex-row lg:items-center">
          <div className="vbs-split-hero__copy flex w-full min-w-0 max-w-[587px] flex-1 flex-col items-start gap-5">
            <div className="flex flex-col items-start gap-5">
              <div className="flex flex-col items-start gap-3">
                <SectionTag label={leadershipHeroCopy.tag} />
                <h1 className="text-section w-full capitalize max-lg:max-w-none">
                  {leadershipHeroCopy.titleLead}
                  <span className="text-accent font-light">{leadershipHeroCopy.titleAccent}</span>
                </h1>
              </div>
              <div className="flex w-full flex-col items-start gap-4">
                <p className="text-[16px] font-normal leading-6 text-[#808080]">
                  {leadershipHeroCopy.descriptionLead}{" "}
                  <span className="font-medium text-[#111111]">
                    {leadershipHeroCopy.descriptionHighlight}
                  </span>
                </p>
                <p className="text-[16px] font-normal leading-6 text-[#808080]">
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
