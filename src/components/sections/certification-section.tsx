import Image from "next/image";

import { PageContainer } from "@/components/layout/page-container";
import { SectionIntro } from "@/components/sections/section-primitives";
import { certificationLogos } from "@/constants/home-content";

export function CertificationSection({
  description = "We offer two flexible engagement models that work best for our clients. Each year, we carefully select the",
}: {
  description?: string;
}) {
  return (
    <section className="bg-white py-20 lg:py-[100px]">
      <PageContainer className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
        <div className="flex w-full shrink-0 flex-col items-start gap-5 lg:w-[528px]">
          <SectionIntro
            tag="Certification"
            title={
              <>
                <span className="block font-medium text-[#111111]">Certification/Awards</span>
                <span className="block font-light text-vbs-red">Recognition</span>
              </>
            }
            description={description}
            titleClassName="text-[48px] capitalize leading-[1.15] text-[#111111]"
          />
        </div>

        <div className="relative w-full min-w-0 flex-1 overflow-hidden lg:max-w-[912px]">
          <div className="certification-marquee-track">
            {[0, 1].map((setIndex) => (
              <div
                key={setIndex}
                className="certification-marquee-set"
                aria-hidden={setIndex === 1}
              >
                {certificationLogos.map((logo) => (
                  <article
                    key={`${logo.src}-${setIndex}`}
                    className="certification-logo-card flex h-[200px] w-[200px] shrink-0 items-center justify-center rounded-[10px] bg-white p-4"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={160}
                      height={160}
                      className="h-full w-full object-contain"
                      draggable={false}
                    />
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
