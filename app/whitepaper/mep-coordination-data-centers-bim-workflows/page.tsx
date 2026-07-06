import type { Metadata } from "next";
import Image from "next/image";
import { SiteHeader } from "@/components/layout/site-header";
import { PageContainer } from "@/components/layout/page-container";
import { EvaluateDeliveryCtaSection } from "@/components/sections/evaluate-delivery-cta-section";
import { GetInTouchSection } from "@/components/sections/get-in-touch-section";
import { MepFaqSection } from "@/components/sections/mep/mep-faq-section";
import { MepDataCenterBimWorkflowSection } from "@/components/sections/mep/mep-data-center-bim-workflow-section";
import { MepDataCenterKeyChallengesSection } from "@/components/sections/mep/mep-data-center-key-challenges-section";
import { MepDataCenterWhyChooseSection } from "@/components/sections/mep/mep-data-center-why-choose-section";
import { MepDataCenterWhitepaperHeroSection } from "@/components/sections/mep/mep-data-center-whitepaper-hero-section";
import { SectionTag } from "@/components/sections/section-primitives";
import { SiteFooter } from "@/components/sections/site-footer";
import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";
import { dataCenterWhitepaperCta } from "@/constants/mep-data-center-whitepaper-content";

export const metadata: Metadata = {
  title: "MEP Coordination for Data Centers | Whitepaper | Virtual Building Studio",
  description:
    "Read our whitepaper on MEP coordination strategies for data center BIM workflows.",
};

const serviceFeatures = [
  {
    icon: "/icons/Label/Capa_1.svg",
    title: "MEP BIM Modeling (LOD 300-400)",
    description:
      "Our dedicated MEP BIM engineers deliver detailed data center HVAC BIM modeling along with electrical infrastructure, precision cooling, mechanical piping, and support system modeling at LOD 300-400.",
  },
  {
    icon: "/icons/Label/svg2112.svg",
    title: "Clash Detection and Coordination",
    description:
      "Our US-trained MEP BIM coordinators run iterative clash detection across MEP systems, structural elements, and architecture, including rack-level clearance validation and overhead cable tray verification.",
  },
  {
    icon: "/icons/Label/Layer_1.svg",
    title: "Fabrication and Spool Drawings",
    description:
      "Our team of BIM experts produces piping spool drawings, electrical shop drawings, and hanger and support detailing so prefabrication and installation teams can work from fabrication-ready outputs directly.",
  },
  {
    icon: "/icons/Label/Capa_1-1.svg",
    title: "Prefabrication and Modular BIM",
    description:
      "Our MEP BIM team models skid-based assemblies, modular rack systems, and prefabricated pipe spools while producing detailed documentation that off-site fabrication teams use for accurate on-site installation.",
  },
  {
    icon: "/icons/Label/svg2250.svg",
    title: "Cable Tray & Routing Optimization",
    description:
      "Cable tray congestion is a major coordination challenge, but our teams optimize layouts for better constructability and access, keeping installation electrical standards compliant.",
  },
  {
    icon: "/icons/Label/Capa_1-2.svg",
    title: "Scan to BIM As-Built Modeling",
    description:
      "For existing facilities, retrofits, and phased upgrades, our team processes point cloud data into high-accuracy BIM models that give operators and engineers a reliable foundation to plan renovations.",
  },
  {
    icon: "/icons/Label/183025708_b5feb708-70db-4f6e-92a8-b9a593ab3fd3%201.svg",
    title: "BIM for Facility Management and Digital Twin",
    description:
      "Our engineers structure models with asset tagging and system attribute data so facility management teams can support CMMS integration, digital twin programs, and lifecycle operations.",
  },
] as const;

const serviceFeatureRows = [
  serviceFeatures.slice(0, 3),
  serviceFeatures.slice(3, 6),
  serviceFeatures.slice(6, 7),
] as const;

const whoWeHelpCards = [
  {
    title: "MEP Engineers",
    description:
      "Our BIM specialists work closely with MEP engineering teams to develop accurate models aligned with project specifications and installation requirements.",
    supportTitle: "We Support Engineering Teams, With",
    points: [
      "Discipline-specific BIM modeling",
      "Detailed equipment and routing coordination",
      "Fabrication-level model development",
      "Construction documentation support",
      "Coordination reviews for high-density MEP systems",
    ],
  },
  {
    title: "MEP Contractors",
    description:
      "Our BIM specialists help MEP contractors coordinate complex systems in congested ceiling spaces, utility corridors, plant rooms, and white spaces.",
    supportTitle: "We Support MEP Contractors With",
    points: [
      "Detailed trade coordination",
      "Spool-ready piping models",
      "Installation planning",
      "Reduced field clashes and rework",
      "Better visibility into constructability constraints",
    ],
  },
  {
    title: "MEP Consultants",
    description:
      "MEP consultants use our MEP BIM services for data centers to validate design intent across complex data center environments.",
    supportTitle: "We Support Consultants With",
    points: [
      "BIM support for design coordination",
      "Constructability reviews during preconstruction",
      "Clash detection and issue tracking",
      "Coordination between architectural, structural, and MEP systems",
      "Improved design validation workflows",
    ],
  },
  {
    title: "General Contractors (GCs)",
    description:
      "GC teams use our Data Center MEP Coordination workflows to manage multiple trades within fast-track construction programs.",
    supportTitle: "We Support GCs With",
    points: [
      "Centralized BIM coordination",
      "Multi-trade clash management",
      "Construction sequencing support",
      "Better schedule reliability",
      "Improved coordination visibility across stakeholders",
    ],
  },
  {
    title: "Data Center Developers & Operators",
    description:
      "Developers and operators need scalable infrastructure that delivers BIM Modeling for Data Centers and",
    descriptionLine2:
      "supports future growth, maintenance access, and operational continuity",
    supportTitle: "We Support Developers and Operators With",
    points: [
      "High-performance MEP infrastructure modeling",
      "Expansion and retrofit planning",
      "Space utilization validation",
      "Equipment access coordination",
      "Accurate as-built documentation",
    ],
  },
] as const;

const whoWeHelpRows = [whoWeHelpCards.slice(0, 3), whoWeHelpCards.slice(3, 5)] as const;

export default function MepCoordinationDataCentersWhitepaperPage() {
  return (
    <div className="vbs-redesign-page min-h-screen overflow-x-hidden bg-white">
      <SiteHeader />

      <main className="bg-white">
        <MepDataCenterWhitepaperHeroSection />

        <section className="bg-white py-8 sm:py-[50px]">
          <PageContainer>
            <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
              <p className="text-[20px] capitalize leading-tight sm:text-[24px]">
                <span className="font-light text-[#D70416]">Trusted</span>
                <span className="font-medium text-[#111111]"> By</span>
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2">
                {[
                  ["#D70416", "MEP Contractors"],
                  ["#42AA32", "General Contractors (GCs)"],
                  ["#2299D6", "Data Center Developers & Operators"],
                  ["#F0B300", "MEP Consultants & Engineers"],
                ].map(([color, label]) => (
                  <div key={label} className="inline-flex items-center gap-2.5">
                    <span className="text-[20px] font-medium leading-none sm:text-[24px]" style={{ color }}>
                      -
                    </span>
                    <span className="text-[14px] text-[#808080] sm:text-[16px]">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </PageContainer>
        </section>

        <section className="bg-white py-12 lg:py-[100px]">
          <PageContainer>
            <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-start lg:gap-10">
              {/* Figma 994:22622 — group 717×534 (main 564×534 + overlay 286×326 @ 431,104) */}
              <div className="relative mx-auto aspect-[717/534] w-full max-w-[717px] shrink-0 lg:mx-0">
                <div className="absolute left-0 top-0 h-full w-[78.66%] overflow-hidden rounded-[10px]">
                  <Image
                    src="/images/image%2058.png"
                    alt="MEP BIM building systems model"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 80vw, 564px"
                  />
                </div>
                <div className="absolute left-[60.11%] top-[19.48%] z-10 h-[61.05%] w-[39.89%] overflow-hidden rounded-[10px] shadow-[0_4px_14px_rgba(0,0,0,0.14)]">
                  <div
                    className="pointer-events-none absolute inset-0 z-10 rounded-[10px] border-[10px] border-white"
                    aria-hidden
                  />
                  <div className="absolute left-[-30.65%] top-[-5.83%] h-[106.13%] w-[161.31%]">
                    <Image
                      src="/images/image%2059.png"
                      alt="Data center server infrastructure"
                      fill
                      className="object-cover object-center"
                      sizes="286px"
                    />
                  </div>
                </div>
              </div>

              <div className="flex w-full min-w-0 flex-1 flex-col justify-center gap-5 lg:max-w-[683px]">
                <div className="flex flex-col gap-3">
                  <SectionTag label="Who We Are" />
                  <h2 className="text-section max-w-[683px] capitalize">
                    <span className="font-medium">Data Center MEP BIM Services for </span>
                    <span className="font-light text-[#D70416]">Mission-Critical Facilities</span>
                  </h2>
                </div>
                <p className="max-w-[683px] text-[16px] leading-6 text-[#808080]">
                  Data centers involve complex MEP and fire protection systems within dense construction
                  environments. Tight clearances, heavy cable routing, and fast-track schedules increase
                  coordination challenges, often leading to clashes, delays, and rework. Our team delivers
                  specialized Data Center MEP Engineering and BIM Coordination services to improve
                  constructability, installation accuracy, and coordination efficiency for mission-critical
                  projects.
                </p>
                <div className="flex flex-col gap-4">
                  <p className="text-[16px] font-medium leading-6 text-[#111111]">
                    What Our Data Center MEP BIM Services Deliver
                  </p>
                  <ul className="flex flex-col gap-4 text-[16px] leading-6 text-[#808080]">
                    <li className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#808080]" />
                      <span>Clash-free coordination across MEP, structural, and architectural systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#808080]" />
                      <span>Fabrication-ready BIM models developed to LOD 300 and LOD 400</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#808080]" />
                      <span>Optimized layouts for high-density equipment environments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#808080]" />
                      <span>Faster project execution with reduced site rework and coordination delays</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </PageContainer>
        </section>

        <section className="bg-[#FAFAFA] py-12 lg:py-[100px]">
          <PageContainer className="flex flex-col items-center gap-10 lg:gap-[60px]">
            <div className="flex w-full flex-col gap-5">
              <div className="flex flex-col gap-3">
                <SectionTag label="Service Features" />
                <h2 className="text-section max-w-[716px] capitalize">
                  <span className="font-medium">What We Deliver With Our </span>
                  <span className="font-light text-[#D70416]">MEP BIM Services for Data Centers</span>
                </h2>
              </div>
              <p className="max-w-[682px] text-[16px] capitalize leading-6 text-[#808080]">
                Specialized Data Center MEP BIM Services that improve coordination, prefabrication,
                constructability, and installation efficiency for mission-critical facilities.
              </p>
            </div>

            <div className="flex w-full flex-col gap-[30px]">
              {serviceFeatureRows.map((row, rowIndex) => (
                <div
                  key={rowIndex}
                  className={
                    row.length === 1
                      ? "flex justify-center"
                      : "grid grid-cols-1 gap-[30px] md:grid-cols-2 lg:grid-cols-3"
                  }
                >
                  {row.map((item) => (
                    <article
                      key={item.title}
                      className={`group flex min-h-0 flex-col gap-2.5 rounded-[10px] border border-[#CBCCCD] bg-white p-5 transition-shadow duration-200 hover:shadow-[0_4px_10px_rgba(0,0,0,0.15)] lg:min-h-[290px] ${
                        row.length === 1 ? "w-full max-w-[460px]" : "w-full"
                      }`}
                    >
                      <div className="flex flex-col gap-5">
                        <div className="inline-flex h-[70px] w-[70px] items-center justify-center rounded-[10px] border border-[#CBCCCD] bg-[#FBF9F9] p-[15px]">
                          <Image
                            src={item.icon}
                            alt=""
                            width={46}
                            height={46}
                            className="h-[46px] w-[46px] object-contain"
                            aria-hidden
                          />
                        </div>
                        <h3 className="text-[20px] font-normal leading-[1.35] text-[#111111] sm:text-[24px]">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-[15px] leading-6 text-[#808080] sm:text-[16px]">{item.description}</p>
                    </article>
                  ))}
                </div>
              ))}
            </div>

            <div className="flex w-full justify-center">
              <PrimaryCtaButton
                fullWidth={false}
                className="w-auto shrink-0 px-5 py-4 capitalize backdrop-blur-[50px]"
              >
                Get A Free Quote
              </PrimaryCtaButton>
            </div>
          </PageContainer>
        </section>

        <section className="overflow-hidden bg-white py-12 lg:py-[100px]">
          <PageContainer className="flex flex-col items-center gap-10 lg:gap-[60px]">
            <div className="flex w-full flex-col gap-5">
              <div className="flex flex-col gap-3">
                <SectionTag label="Who We Help" />
                <h2 className="text-section max-w-[833px] capitalize">
                  <span className="font-medium">Who We Help with </span>
                  <span className="font-light text-[#D70416]">
                    Data
                    <br />
                    Center BIM Coordination
                  </span>
                </h2>
              </div>
              <p className="max-w-[528px] text-[16px] capitalize leading-6 text-[#808080]">
                We Work with the Engineers, Contractors, Consultants, and Developers Who Plan, Build,
                and Operate Data Centers.
              </p>
            </div>

            <div className="flex w-full flex-col gap-[30px]">
              {whoWeHelpRows.map((row, rowIndex) => (
                <div
                  key={rowIndex}
                  className={
                    row.length === 3
                      ? "grid grid-cols-1 gap-[30px] lg:grid-cols-3"
                      : "grid grid-cols-1 gap-[30px] md:grid-cols-2 xl:flex xl:justify-center xl:gap-[30px]"
                  }
                >
                  {row.map((card) => (
                    <article
                      key={card.title}
                      className={`group flex flex-col gap-5 rounded-[10px] border border-[#CBCCCD] bg-white p-5 transition-shadow duration-200 hover:shadow-[0_4px_10px_rgba(0,0,0,0.20)] ${
                        row.length === 3 ? "w-full" : "w-full xl:w-[460px] xl:max-w-[460px]"
                      }`}
                    >
                      <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2.5">
                          <div className="inline-flex h-[72px] w-[72px] items-center justify-center overflow-hidden rounded-[10px]">
                            <Image
                              src="/images/mep/key-benefits/icon-benefit-colored.svg"
                              alt=""
                              width={56}
                              height={56}
                              className="h-14 w-14 object-contain"
                              aria-hidden
                            />
                          </div>
                          <h3 className="text-[20px] font-normal leading-[1.35] text-[#111111] sm:text-[24px]">
                            {card.title}
                          </h3>
                        </div>
                        <p className="text-[16px] leading-6 text-[#808080]">
                          {card.description}
                          {"descriptionLine2" in card && card.descriptionLine2 ? (
                            <>
                              <br />
                              {card.descriptionLine2}
                            </>
                          ) : null}
                        </p>
                      </div>
                      <div className="flex flex-col gap-4">
                        <p className="text-[16px] font-medium leading-6 text-[#808080]">
                          {card.supportTitle}
                        </p>
                        <ul className="list-disc space-y-0 pl-5 text-[16px] leading-6 text-[#808080] marker:text-[#808080]">
                          {card.points.map((point) => (
                            <li key={point} className="pl-1">
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </article>
                  ))}
                </div>
              ))}
            </div>

            <div className="flex w-full justify-center">
              <PrimaryCtaButton
                fullWidth={false}
                className="w-auto shrink-0 px-5 py-4 capitalize backdrop-blur-[50px]"
              >
                Let&apos;s Talk
              </PrimaryCtaButton>
            </div>
          </PageContainer>
        </section>

        <MepDataCenterKeyChallengesSection />
        <MepDataCenterBimWorkflowSection />
        <MepDataCenterWhyChooseSection />

        <MepFaqSection />

        <EvaluateDeliveryCtaSection
          title={
            <>
              <span className="font-medium">Let&apos;s Build Your </span>
              <span className="font-light">
                Data Center
                <br />
                with Precision
              </span>
            </>
          }
          description={dataCenterWhitepaperCta.description}
          ctaLabel={dataCenterWhitepaperCta.ctaLabel}
          titleClassName="max-w-[787px] capitalize"
          descriptionClassName="max-w-[806px]"
        />

        <GetInTouchSection />
      </main>

      <SiteFooter />
    </div>
  );
}
