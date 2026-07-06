import { PageContainer } from "@/components/layout/page-container";
import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";
import { LazyImg } from "@/components/ui/lazy-img";
import { homeHeroMediaLeft, homeHeroMediaRight, homeHeroTrustStats } from "@/constants/home-content";
import { TrustStripItems } from "@/components/sections/trust-strip-section";

function HeroMediaCard({ src, priority = false }: { src: string; priority?: boolean }) {
  return (
    <div className="vbs-home-hero__media-card">
      <div className="vbs-home-hero__media-card-inner">
        <LazyImg src={src} alt="" className="vbs-home-hero__media-photo" priority={priority} />
      </div>
      <div className="vbs-home-hero__media-frame" aria-hidden />
    </div>
  );
}

function HeroMediaSet({
  images,
  setIndex,
  columnId,
  showSpacer = false,
}: {
  images: string[];
  setIndex: number;
  columnId: string;
  showSpacer?: boolean;
}) {
  return (
    <div className="vbs-home-hero__media-set">
      {images.map((src, index) => (
        <HeroMediaCard
          key={`${columnId}-${setIndex}-${index}`}
          src={src}
          priority={setIndex === 0 && index === 0}
        />
      ))}
      {showSpacer ? <div className="vbs-home-hero__media-spacer" aria-hidden /> : null}
    </div>
  );
}

function HeroMediaTrack({
  images,
  direction,
  columnId,
  showSpacer = false,
}: {
  images: string[];
  direction: "up" | "down";
  columnId: string;
  showSpacer?: boolean;
}) {
  const trackClass =
    direction === "up" ? "vbs-home-hero__media-track--up" : "vbs-home-hero__media-track--down";

  return (
    <div className={`vbs-home-hero__media-track ${trackClass}`}>
      <HeroMediaSet images={images} setIndex={0} columnId={columnId} showSpacer={showSpacer} />
      <HeroMediaSet images={images} setIndex={1} columnId={columnId} showSpacer={showSpacer} />
    </div>
  );
}

export function HomeHeroSection() {
  return (
    <section className="vbs-home-hero">
      <PageContainer className="vbs-home-hero__container">
        <div className="vbs-home-hero__main">
          <div className="vbs-home-hero__copy">
            <div className="vbs-home-hero__copy-top">
              <div className="vbs-home-hero__head">
                <span className="vbs-home-hero__tag">Welcome to VBS</span>
                <h1 className="vbs-home-hero__title">
                  <span className="vbs-home-hero__title-dark">
                    Delivery Infrastructure for <span className="text-accent">AEC Firms</span>
                  </span>
                </h1>
              </div>
              <p className="vbs-home-hero__desc">
                Global delivery teams for architects, engineers, and reality capture professionals.
                Integrated into your standards. Sized to your portfolio. Governed end to end.
              </p>
            </div>

            <div className="vbs-split-hero__cta-wrap">
              <PrimaryCtaButton fullWidth={false} href="/engagement-models">
                See How We Engage
              </PrimaryCtaButton>
            </div>
          </div>

          <div className="vbs-home-hero__media">
            <div className="vbs-home-hero__media-col vbs-home-hero__media-col--left">
              <HeroMediaTrack images={homeHeroMediaLeft} direction="up" columnId="left" />
            </div>
            <div className="vbs-home-hero__media-col vbs-home-hero__media-col--right">
              <HeroMediaTrack images={[...homeHeroMediaRight]} direction="down" columnId="right" />
            </div>
          </div>
        </div>

        <TrustStripItems stats={homeHeroTrustStats} />
      </PageContainer>
    </section>
  );
}
