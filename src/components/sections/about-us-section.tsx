import { PageContainer } from "@/components/layout/page-container";
import { homeAboutBadges, homeAboutSection } from "@/constants/home-content";

function AboutImage({ imageSrc, alt }: { imageSrc: string; alt: string }) {
  return (
    <div className="vbs-home-about__image-wrap">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={imageSrc}
        alt={alt}
        className="vbs-home-about__image"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}

function AboutBadge({ badge }: { badge: (typeof homeAboutBadges)[number] }) {
  return (
    <div className="vbs-home-about__badge">
      <span className="vbs-home-about__badge-icon" aria-hidden>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={badge.iconSrc} alt="" className="vbs-home-about__badge-icon-img" />
      </span>
      <span className="vbs-home-about__badge-label">{badge.label}</span>
    </div>
  );
}

/** About Us — Figma home node 1398-13060. */
export function AboutUsSection() {
  const section = homeAboutSection;
  const rowOne = homeAboutBadges.slice(0, 2);
  const rowTwo = homeAboutBadges.slice(2, 5);

  return (
    <section className="vbs-home-about">
      <PageContainer className="vbs-home-about__container">
        <div className="vbs-home-about__row">
          <div className="vbs-home-about__media vbs-home-about__media--desktop">
            <AboutImage imageSrc={section.videoImage} alt="Virtual Building Studio team at work" />
          </div>

          <div className="vbs-home-about__copy">
            <div className="vbs-home-about__head">
              <span className="vbs-home-about__tag">{section.tag}</span>
              <h2 className="vbs-home-about__title">
                <span className="vbs-home-about__title-accent">{section.titleAccent}</span>
                <span className="vbs-home-about__title-dark">{section.titleLead}</span>
              </h2>
            </div>

            <div className="vbs-home-about__body">
              <p className="vbs-home-about__paragraph">
                {section.paragraph1Lead}
                <span className="vbs-home-about__emphasis">{section.paragraph1Emphasis}</span>
              </p>
              <p className="vbs-home-about__paragraph">{section.paragraph2}</p>
            </div>

            <div className="vbs-home-about__badges">
              <div className="vbs-home-about__badge-row">
                {rowOne.map((badge) => (
                  <AboutBadge key={badge.id} badge={badge} />
                ))}
              </div>
              <div className="vbs-home-about__badge-row">
                {rowTwo.map((badge) => (
                  <AboutBadge key={badge.id} badge={badge} />
                ))}
              </div>
            </div>

            <div className="vbs-home-about__media vbs-home-about__media--mobile">
              <AboutImage imageSrc={section.videoImage} alt="Virtual Building Studio team at work" />
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
