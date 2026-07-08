import { PageContainer } from "@/components/layout/page-container";
import { SectionTag } from "@/components/sections/section-primitives";
import {
  whyWorkVbsPillars,
  whyWorkVbsSectionCopy,
} from "@/constants/careers-content";

const NUMBER_ACCENT_CLASS: Record<string, string> = {
  "#42AA32": "vbs-careers-why__number-digit--green",
  "#2299D6": "vbs-careers-why__number-digit--blue",
  "#F0B300": "vbs-careers-why__number-digit--yellow",
};

/** Figma node 679:16489 — Why Work VBS */
export function CareersWhyWorkSection() {
  const copy = whyWorkVbsSectionCopy;

  return (
    <section className="vbs-careers-why bg-white py-[60px] lg:py-[100px]">
      <PageContainer>
        <div className="vbs-careers-section__inner">
          <header className="vbs-careers-section__header">
            <div className="vbs-careers-section__title-block">
              <SectionTag label={copy.tag} />
              <h2 className="vbs-careers-section__title text-section capitalize">
                <span className="font-medium">{copy.titleLead}</span>
                <span className="text-accent font-light">{copy.titleAccent}</span>
              </h2>
            </div>
            <p className="vbs-careers-section__desc">{copy.description}</p>
          </header>

          <div className="vbs-careers-why__grid">
            {whyWorkVbsPillars.map((pillar) => (
              <article key={pillar.number} className="vbs-careers-why__card">
                <div className="vbs-careers-why__card-head">
                  <p className="vbs-careers-why__number">
                    <span className={NUMBER_ACCENT_CLASS[pillar.numberColor]}>0</span>
                    <span className="vbs-careers-why__number-digit--base">
                      {pillar.number.slice(1)}
                    </span>
                  </p>
                  <h3 className="vbs-careers-why__card-title">{pillar.title}</h3>
                </div>
                <p className="vbs-careers-why__card-desc">{pillar.description}</p>
              </article>
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
