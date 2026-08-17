import { PageContainer } from "@/components/layout/page-container";
import { SectionTag } from "@/components/sections/section-primitives";
import { aiaPressureCopy, aiaPressurePoints } from "@/constants/aia-conference-events-content";

export function AiaPressureSection() {
  return (
    <section className="aia-split aia-split--pressure bg-[#FAFAFA] py-12 lg:py-[100px]">
      <PageContainer>
        <div className="aia-split__row">
          <div className="aia-split__media">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={aiaPressureCopy.image} alt={aiaPressureCopy.imageAlt} loading="lazy" />
          </div>

          <div className="aia-split__copy">
            <div className="flex w-full flex-col items-start gap-3">
              <SectionTag label={aiaPressureCopy.tag} />
              <h2 className="text-section w-full capitalize">
                {aiaPressureCopy.titleLead}
                <span className="text-accent font-light">{aiaPressureCopy.titleAccent}</span>
              </h2>
            </div>
            <p className="m-0 w-full text-[16px] font-normal leading-6 text-[#808080]">
              {aiaPressureCopy.description}
            </p>
            <div className="aia-pressure__list">
              {aiaPressurePoints.map((point) => (
                <div key={point} className="aia-pressure__item">
                  <div className="aia-pressure__rule" aria-hidden />
                  <div className="aia-pressure__row">
                    <span className="aia-pressure__bullet" aria-hidden />
                    <p className="aia-pressure__text">{point}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="aia-callout w-full">
              <p className="aia-callout__text">{aiaPressureCopy.callout}</p>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
