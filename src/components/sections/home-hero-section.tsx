import { PageContainer } from "@/components/layout/page-container";
import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";
import { LazyImg } from "@/components/ui/lazy-img";
import { homeHeroTrustStats } from "@/constants/home-content";
import { TrustStripItems } from "@/components/sections/trust-strip-section";

const architecturalDraftingImg = "/image/architectural-drafting.png";
const bimServicesImg = "/image/bim-services.png";
const mechanicalBimServicesImg = "/image/mechanical-bim-services.png";
const mepServicesImg = "/image/mep-services.png";
const pointCloudToBimImg = "/image/point-cloud-to-bim.png";
const scanToBimImg = "/image/scan-to-bim.png";

/** Left track — 3 unique images (set is repeated only for seamless loop). */
const HOME_HERO_MEDIA_LEFT = [
  {
    src: architecturalDraftingImg,
    alt: "Architect working on BIM software for architectural drafting",
  },
  {
    src: bimServicesImg,
    alt: "Professional reviewing a 3D structural BIM model on desktop monitors",
  },
  {
    src: mechanicalBimServicesImg,
    alt: "Color-coded mechanical BIM model with MEP ductwork and piping",
  },
] as const;

/** Right track — 3 unique images (set is repeated only for seamless loop). */
const HOME_HERO_MEDIA_RIGHT = [
  {
    src: mepServicesImg,
    alt: "Multi-story building cutaway showing coordinated MEP BIM systems",
  },
  {
    src: pointCloudToBimImg,
    alt: "Point cloud to BIM overlay of interior structural and piping systems",
  },
  {
    src: scanToBimImg,
    alt: "Scan to BIM comparison of point cloud data and finished building model",
  },
] as const;

function HeroMediaCard({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <div className="vbs-home-hero__media-card">
      <div className="vbs-home-hero__media-card-inner">
        <LazyImg src={src} alt={alt} className="vbs-home-hero__media-photo" priority={priority} />
      </div>
      <div className="vbs-home-hero__media-frame" aria-hidden />
    </div>
  );
}

function HeroMediaSet({
  images,
  setIndex,
  columnId,
}: {
  images: readonly { src: string; alt: string }[];
  setIndex: number;
  columnId: string;
}) {
  return (
    <div className="vbs-home-hero__media-set" aria-hidden={setIndex > 0 || undefined}>
      {images.map((image, index) => (
        <HeroMediaCard
          key={`${columnId}-${setIndex}-${index}`}
          src={image.src}
          alt={setIndex === 0 ? image.alt : ""}
          priority={setIndex === 0 && columnId === "left" && index === 0}
        />
      ))}
    </div>
  );
}

function HeroMediaTrack({
  images,
  direction,
  columnId,
}: {
  images: readonly { src: string; alt: string }[];
  /** left: top → bottom, right: bottom → top */
  direction: "top-to-bottom" | "bottom-to-top";
  columnId: string;
}) {
  const trackClass =
    direction === "top-to-bottom"
      ? "vbs-home-hero__media-track--down"
      : "vbs-home-hero__media-track--up";

  return (
    <div className={`vbs-home-hero__media-track ${trackClass}`}>
      {/* Second set is the same 3 images — required for seamless one-direction loop */}
      <HeroMediaSet images={images} setIndex={0} columnId={columnId} />
      <HeroMediaSet images={images} setIndex={1} columnId={columnId} />
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
              <HeroMediaTrack
                images={HOME_HERO_MEDIA_LEFT}
                direction="top-to-bottom"
                columnId="left"
              />
            </div>
            <div className="vbs-home-hero__media-col vbs-home-hero__media-col--right">
              <HeroMediaTrack
                images={HOME_HERO_MEDIA_RIGHT}
                direction="bottom-to-top"
                columnId="right"
              />
            </div>
          </div>
        </div>

        <TrustStripItems stats={homeHeroTrustStats} />
      </PageContainer>
    </section>
  );
}
