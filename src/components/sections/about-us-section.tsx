import Image from "next/image";

import aboutOverlayImg from "@/assets/images/MEP 1.png";
import aboutMainImg from "@/assets/images/image 35.png";
import { PageContainer } from "@/components/layout/page-container";
import { SectionTag } from "@/components/sections/section-primitives";

const aboutPoints = [
  "Top 1% Vetted MEP Experts",
  "US Code-Compliant Models",
  "Fast Turnaround",
  "3-Day Onboarding",
] as const;

/**
 * Layout from Figma node 265:49932
 * Image group 717×534 — background 564×534 + overlay 286×326 at (431, 104)
 */
export function AboutUsSection() {
  return (
    <section className="bg-white py-20">
      <PageContainer>
        <div className="flex flex-col items-start gap-10 lg:flex-row lg:gap-10">
          <div className="relative mx-auto aspect-[717/534] w-full max-w-[630px] shrink-0 lg:mx-0">
            {/* Background cluster 564×534 */}
            <div className="absolute left-0 top-0 h-full w-[78.66%] overflow-hidden rounded-[10px]">
              <div className="absolute left-0 top-[-33.71%] h-[176.59%] w-[111.52%]">
                <div className="relative h-full w-full">
                  <Image
                    src={aboutMainImg}
                    alt=""
                    fill
                    aria-hidden
                    className="object-contain object-center"
                    sizes="40vw"
                  />
                </div>
              </div>
              <div className="absolute left-[-45.39%] top-0 h-full w-[168.79%]">
                <div className="relative h-full w-full">
                  <Image
                    src={aboutMainImg}
                    alt="BIM professional working on architectural models"
                    fill
                    priority
                    className="object-contain object-center"
                    sizes="40vw"
                  />
                </div>
              </div>
            </div>

            {/* MEP overlay 286×326 @ (431, 104) */}
            <div className="absolute left-[60.11%] top-[19.48%] z-10 h-[61.05%] w-[39.89%] overflow-hidden rounded-[10px] shadow-[0_4px_14px_rgba(0,0,0,0.14)]">
              <div
                className="pointer-events-none absolute inset-0 z-10 rounded-[10px] border-[10px] border-white"
                aria-hidden
              />
              <div className="absolute left-[-11.89%] top-[-4.6%] h-[108.59%] w-[123.78%]">
                <div className="relative h-full w-full">
                  <Image
                    src={aboutOverlayImg}
                    alt="MEP BIM building systems visualization"
                    fill
                    className="object-contain object-center"
                    sizes="20vw"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-full min-w-0 flex-1 flex-col justify-center gap-5">
            <div className="flex flex-col items-start gap-3">
              <SectionTag label="About Us" />
              <h2 className="text-section max-w-[710px]">About us</h2>
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-body max-w-[710px]">
                Field-level rework and uncoordinated submittals frequently derail project timelines
                and inflate budgets. Virtual Building Studio functions as a technical extension of
                your team, providing access to a team of{" "}
                <span className="text-body-emphasis">200+ dedicated remote BIM modelers.</span>
              </p>
              <p className="text-body max-w-[710px]">
                As a specialized MEP BIM modeling service provider in the USA, we ensure your
                building systems are clash-free and fabrication-ready.
              </p>
            </div>

            <div className="flex flex-col gap-3.5">
              {aboutPoints.map((point) => (
                <div key={point} className="inline-flex items-center gap-2.5">
                  <span className="text-body">✅</span>
                  <span className="text-body">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
