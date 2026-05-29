import Image from "next/image";
import {
  ChevronDown,
  ChevronRight,
  Plus,
} from "lucide-react";

import { faqs, resources } from "@/constants/home-content";
import { PageContainer } from "@/components/layout/page-container";
import { SiteHeader } from "@/components/layout/site-header";
import { CertificationSection } from "@/components/sections/certification-section";
import { ClientSuccessStoriesSection } from "@/components/sections/client-success-stories-section";
import { EvaluateDeliveryCtaSection } from "@/components/sections/evaluate-delivery-cta-section";
import { GetInTouchSection } from "@/components/sections/get-in-touch-section";
import { SectionTag } from "@/components/sections/section-primitives";
import { SiteFooter } from "@/components/sections/site-footer";
import { StatsStripSection } from "@/components/sections/stats-strip-section";
import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";

const heroMediaLeft = [
  "/images/figma/capability-gc.png",
  "/images/figma/capability-mep.png",
  "/images/figma/capability-survey.png",
  "/images/figma/industry-1.png",
  "/images/figma/industry-2.png",
  "/images/figma/industry-3.png",
];

const heroMediaRight = [
  "/images/figma/capability-gc.png",
  "/images/figma/capability-mep.png",
  "/images/figma/capability-survey.png",
  "/images/figma/industry-4.png",
  "/images/figma/industry-5.png",
  "/images/figma/industry-6.png",
];

function HeroMediaSet({ images, columnId, setIndex }: { images: string[]; columnId: string; setIndex: number }) {
  return (
    <div className="hero-col-set flex w-full flex-col items-start gap-[10px]">
      {images.map((src, idx) => (
        <div
          key={`${columnId}-set${setIndex}-${src}-${idx}`}
          className="relative h-[300px] w-full max-w-[290px] shrink-0 overflow-hidden rounded-[10px]"
        >
          <div className="absolute inset-0 rounded-[10px] border-[0.74px] border-[#FAFAFA]" />
          <Image src={src} alt="" fill className="rounded-[10px] object-cover" />
          <div className="absolute inset-0 rounded-[10px] border-[5.94px] border-[#FAFAFA]" />
        </div>
      ))}
      <div className="h-[124px] w-full max-w-[290px] shrink-0 rounded-[10px] bg-white" aria-hidden />
    </div>
  );
}

function HeroMediaTrack({
  images,
  direction,
  columnId,
}: {
  images: string[];
  direction: "up" | "down";
  columnId: string;
}) {
  const trackClass = direction === "up" ? "hero-col-up" : "hero-col-down";

  return (
    <div className={`hero-col-track ${trackClass} flex w-full flex-col items-start`}>
      <HeroMediaSet images={images} columnId={columnId} setIndex={0} />
      <HeroMediaSet images={images} columnId={columnId} setIndex={1} />
    </div>
  );
}

const capabilityCards = [
  {
    image: "/images/figma/capability-gc.png",
    title: "Architecture & Structure",
    summary:
      "Documentation, modeling, and design support embedded with your architecture team.",
    bullets: [
      "Construction drawings, design development, permit drawings",
      "LOD 100–400 modeling, sheet setup, family creation",
      "Redline markups, revisions, CAD-to-BIM, PDF-to-Revit",
      "2D drafting, photorealistic renders, walkthroughs",
    ],
  },
  {
    image: "/images/figma/capability-mep.png",
    title: "Engineering & Construction",
    summary:
      "MEP, structural, and construction documentation aligned with your engineering workflows.",
    bullets: [
      "Clash detection, coordination, and constructability reviews",
      "Fabrication-ready MEP modeling and detailing",
      "Structural modeling, rebar detailing, and shop drawings",
      "4D/5D support, as-builts, and field-driven revisions",
    ],
  },
  {
    image: "/images/figma/capability-survey.png",
    title: "Reality Capture & Survey Companies",
    summary:
      "Point cloud to BIM pipelines designed for speed, consistency, and scale.",
    bullets: [
      "Scan-to-BIM modeling for as-built and renovation projects",
      "Survey data integration and QA for capture deliverables",
      "LOD-controlled modeling aligned to your capture standards",
      "Fast turnaround for multi-site and portfolio programs",
    ],
  },
] as const;

function CapabilityCard({
  image,
  title,
  summary,
  bullets,
}: {
  image: string;
  title: string;
  summary: string;
  bullets: readonly string[];
}) {
  return (
    <article className="capability-card group relative h-[636px] overflow-hidden rounded-[10px] bg-white">
      <Image src={image} alt={title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 466px" />
      <div className="capability-card__gradient pointer-events-none absolute inset-0" aria-hidden />
      <div className="capability-card__panel absolute inset-x-0 bottom-0 flex flex-col items-end justify-end p-5">
        <div className="capability-card__content flex w-full flex-col items-start overflow-hidden">
          <h3 className="text-[24px] font-medium leading-tight text-white">{title}</h3>
          <div className="capability-card__details flex w-full flex-col items-start gap-2.5">
            <p className="text-[16px] font-medium leading-6 text-[#CBCCCD]">{summary}</p>
            <ul className="text-[16px] font-normal leading-6 text-[#CBCCCD]">
              {bullets.map((bullet) => (
                <li key={bullet}>• {bullet}</li>
              ))}
            </ul>
          </div>
        </div>
        <a
          href="#"
          className="capability-card__link inline-flex items-center gap-1.5 text-[16px] font-normal text-vbs-blue"
        >
          Explore More
          <ChevronRight className="h-5 w-5" strokeWidth={1.5} />
        </a>
      </div>
    </article>
  );
}

export function VbsHomePage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <SiteHeader />

      <section className="relative overflow-hidden bg-white">
        <PageContainer className="flex w-full flex-col items-start gap-10 pb-12 pt-6 sm:pt-8 md:pb-20 md:pt-10 lg:flex-row lg:items-center lg:justify-between lg:gap-[10px] lg:pb-24 lg:pt-12">
          <div className="flex min-w-0 flex-1 flex-col items-start gap-[30px]">
            <div className="flex flex-col items-start gap-5 self-stretch">
              <div className="flex flex-col items-start gap-3">
                <div className="inline-flex items-center justify-center gap-[10px] rounded-[10px] border border-vbs-blue bg-vbs-blue/10 px-3 py-1.5">
                  <span className="text-[13px] font-normal capitalize text-vbs-blue">Welcome to VBS</span>
                </div>
                <h1 className="max-w-[726px] text-[60px] font-medium capitalize leading-[1.1] text-[#111111]">
                  Delivery Infrastructure for <span className="font-light text-vbs-red">AEC Firms</span>
                </h1>
              </div>
              <p className="max-w-[637px] text-[16px] font-normal capitalize leading-6 text-[#808080]">
                Global delivery teams for architects, engineers, and reality capture professionals.
                Integrated into your standards. Sized to your portfolio. Governed end to end.
              </p>
            </div>

            <PrimaryCtaButton fullWidth={false}>See How We Engage</PrimaryCtaButton>

            <div className="flex w-full flex-col items-start pt-10">
              <div className="relative h-[25px] w-full max-w-[730px] overflow-hidden">
                <div className="hero-logo-ticker">
                  <Image
                    src="/images/figma/hero-logo-strip.png"
                    alt="Client logos strip"
                    width={1510}
                    height={54}
                    className="h-[25px] w-auto max-w-none"
                  />
                  <Image
                    src="/images/figma/hero-logo-strip.png"
                    alt="Client logos strip duplicate"
                    width={1510}
                    height={54}
                    className="h-[25px] w-auto max-w-none"
                  />
                </div>
              </div>

              <div className="mt-3 inline-flex h-[3px] w-[260px] items-center gap-[10px]">
                <span className="h-[10px] flex-1 bg-vbs-red" />
                <span className="h-[10px] flex-1 bg-[#CBCCCD]" />
                <span className="h-[10px] flex-1 bg-[#CBCCCD]" />
                <span className="h-[10px] flex-1 bg-[#CBCCCD]" />
              </div>
            </div>
          </div>

          <div className="flex w-full max-w-full shrink-0 items-center justify-end gap-[10px] lg:w-auto">
            <div className="hero-media-column w-[min(291.53px,42vw)] sm:w-[291.53px]">
              <HeroMediaTrack images={heroMediaLeft} direction="up" columnId="left" />
            </div>

            <div className="hero-media-column w-[min(290px,42vw)] sm:w-[290px]">
              <HeroMediaTrack images={heroMediaRight} direction="down" columnId="right" />
            </div>
          </div>
        </PageContainer>
      </section>

      <StatsStripSection />

      <section className="bg-white py-[100px]">
        <PageContainer className="flex flex-col items-start gap-[60px]">
          <div className="flex w-full flex-col items-start gap-5">
            <div className="flex flex-col items-start gap-3">
              <SectionTag label="Our Capabilities" />
              <h2 className="max-w-[572px] text-[48px] font-medium capitalize leading-[1.15] text-[#111111]">
                Built Around How You <span className="font-light text-vbs-red">Already Work</span>
              </h2>
            </div>
            <p className="max-w-[729px] text-[16px] font-normal capitalize leading-6 text-[#808080]">
              Three buyers carry the delivery load in AEC. Our BIM modeling services adapt to each
              select the one that describes your firm and we&apos;ll show you exactly how we plug in.
            </p>
          </div>

          <div className="grid w-full gap-5 md:grid-cols-3">
            {capabilityCards.map((card) => (
              <CapabilityCard key={card.title} {...card} />
            ))}
          </div>
        </PageContainer>
      </section>

      <section className="bg-white py-20">
        <PageContainer className="grid items-start gap-10 lg:grid-cols-2">
          <div className="relative mx-auto h-[534px] w-full max-w-[850px]">
            <div className="absolute left-0 top-0 h-full w-[66%] overflow-hidden rounded-[10px]">
              <Image src="/images/figma/hero-bg-1.png" alt="About workspace" fill className="object-cover object-center" />
            </div>
            <div className="absolute left-[53%] top-[104px] z-10 h-[326px] w-[34%] min-w-[200px] overflow-hidden rounded-[10px] border-[10px] border-white shadow-[0_4px_14px_rgba(0,0,0,0.14)]">
              <Image src="/images/figma/industry-2.png" alt="About secondary visual" fill className="object-cover object-center" />
            </div>
          </div>

          <div className="flex min-w-0 flex-col items-start gap-5 pt-1">
            <div className="flex w-full flex-col items-start gap-3">
              <SectionTag label="About Us" />
              <h2 className="text-[56px] font-medium capitalize leading-[1.05] text-[#111111]">About Us</h2>
            </div>

            <div className="flex w-full flex-col items-start gap-4">
              <p className="text-[16px] font-normal capitalize leading-8 text-[#808080]">
                Field-level rework and uncoordinated submittals frequently derail project timelines
                and inflate budgets. Virtual Building Studio functions as a technical extension of
                your team, providing access to a team of{" "}
                <span className="font-medium text-[#111111]">200+ dedicated remote BIM modelers.</span>
              </p>
              <p className="text-[16px] font-normal capitalize leading-8 text-[#808080]">
                As a specialized MEP BIM modeling service provider in the USA, we ensure your
                building systems are clash-free and fabrication-ready.
              </p>
            </div>

            <div className="flex flex-col items-start gap-[14px]">
              {[
                "Top 1% Vetted MEP Experts",
                "US Code-Compliant Models",
                "Fast Turnaround",
                "3-Day Onboarding",
              ].map((point) => (
                <div key={point} className="inline-flex items-center gap-2.5">
                  <span className="text-[16px]">✅</span>
                  <span className="text-[16px] font-normal capitalize leading-6 text-[#808080]">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </PageContainer>
      </section>

      <section className="bg-[#FAFAFA] py-[100px]">
        <PageContainer className="flex flex-col items-center gap-[60px]">
          <div className="flex w-full flex-col items-start gap-5">
            <div className="flex flex-col items-start gap-3">
              <div className="inline-flex items-center justify-center gap-[10px] rounded-[10px] border border-vbs-blue bg-vbs-blue/10 px-3 py-1.5">
                <span className="text-[13px] font-normal capitalize text-vbs-blue">Engagement Models</span>
              </div>
              <h2 className="max-w-[884px] text-[48px] font-medium capitalize leading-[1.15] text-[#111111]">
                Flexible Engagement Models Built Around <span className="font-light text-vbs-red">Your Delivery Needs</span>
              </h2>
            </div>
            <p className="max-w-[750px] text-[16px] font-normal capitalize leading-6 text-[#808080]">
              Whether you need project-based BIM support, a dedicated remote team, or a fully managed global delivery center, our engagement models are designed to scale with your business.
            </p>
          </div>

          <div className="grid w-full gap-5 lg:grid-cols-3">
            <article className="flex min-w-0 flex-col items-start gap-5 rounded-[10px] border border-[#CBCCCD] bg-white p-5 shadow-[0_0_14px_rgba(0,0,0,0.20)]">
              <div className="flex items-center justify-center gap-[10px] rounded-[10px] border border-[#FF9000] bg-[rgba(255,240,219,0.5)] p-2.5">
                <span className="text-[40px]">⚡</span>
              </div>
              <p className="text-[16px] font-medium leading-6 text-[#D70416]">Best for Small Firms</p>
              <div className="flex w-full flex-1 flex-col items-end gap-5">
                <div className="flex w-full flex-col gap-5">
                  <div className="space-y-2.5">
                    <h3 className="text-[24px] font-medium text-[#111111]">Project-Based Support</h3>
                    <p className="text-[16px] font-medium leading-6 text-[#808080]">
                      Flexible BIM support for one-time projects and fast-moving delivery requirements.
                    </p>
                  </div>
                  <div className="space-y-2.5">
                    <p className="text-[16px] font-medium leading-6 text-[#808080]">Key Benefits</p>
                    <ul className="space-y-2 text-[16px] font-normal capitalize leading-6 text-[#808080]">
                      <li>Plug-and-play execution</li>
                      <li>Immediate project kickoff</li>
                      <li>No long-term commitment</li>
                      <li>Flexible scope and duration</li>
                    </ul>
                  </div>
                  <div className="space-y-2.5">
                    <p className="text-[16px] font-medium leading-6 text-[#808080]">Best Suited For</p>
                    <p className="text-[16px] font-normal leading-[26px] text-[#808080]">
                      Small architecture firms<br />Pilot projects<br />Short-term BIM needs
                    </p>
                  </div>
                </div>
                <PrimaryCtaButton>Start a Project</PrimaryCtaButton>
              </div>
            </article>

            <article className="flex min-w-0 flex-col items-start gap-5 rounded-[10px] border border-[#CBCCCD] bg-white p-5">
              <div className="flex items-center justify-center gap-[10px] rounded-[10px] border border-[#294769] bg-[rgba(223,239,255,0.5)] p-2.5">
                <span className="text-[40px]">👥</span>
              </div>
              <p className="text-[16px] font-medium leading-6 text-[#D70416]">Best for Growing Firms</p>
              <div className="flex w-full flex-1 flex-col items-end gap-5">
                <div className="flex w-full flex-col gap-5">
                  <div className="space-y-2.5">
                    <h3 className="text-[24px] font-medium text-[#111111]">Dedicated Resource Model</h3>
                    <p className="text-[16px] font-medium leading-6 text-[#808080]">
                      Dedicated BIM professionals working as an extension of your internal team.
                    </p>
                  </div>
                  <div className="space-y-2.5">
                    <p className="text-[16px] font-medium leading-6 text-[#808080]">Key Benefits</p>
                    <ul className="space-y-2 text-[16px] font-normal capitalize leading-6 text-[#808080]">
                      <li>Fixed monthly cost</li>
                      <li>Dedicated resources</li>
                      <li>Scalable team structure</li>
                      <li>Consistent communication</li>
                    </ul>
                  </div>
                  <div className="space-y-2.5">
                    <p className="text-[16px] font-medium leading-6 text-[#808080]">Best Suited For</p>
                    <p className="text-[16px] font-normal leading-[26px] text-[#808080]">
                      Mid-sized firms<br />Ongoing project pipelines<br />Long-term delivery support
                    </p>
                  </div>
                </div>
                <PrimaryCtaButton>Build your Team</PrimaryCtaButton>
              </div>
            </article>

            <article className="relative flex min-w-0 flex-col items-start gap-5 rounded-[10px] border border-[#2299D6] bg-white p-5">
              <div className="flex items-center justify-center gap-[10px] rounded-[10px] border border-[#094004] bg-[rgba(211,255,211,0.5)] p-2.5">
                <span className="text-[40px]">🌍</span>
              </div>
              <p className="text-[16px] font-medium leading-6 text-[#D70416]">Best for Enterprise Firms</p>
              <div className="flex w-full flex-1 flex-col items-end gap-5">
                <div className="flex w-full flex-col gap-5">
                  <div className="space-y-2.5">
                    <h3 className="text-[24px] font-medium text-[#111111]">Global Delivery Center</h3>
                    <p className="text-[16px] font-medium leading-6 text-[#808080]">
                      A fully managed offshore BIM delivery center exclusively aligned with your business.
                    </p>
                  </div>
                  <div className="space-y-2.5">
                    <p className="text-[16px] font-medium leading-6 text-[#808080]">Key Benefits</p>
                    <ul className="space-y-2 text-[16px] font-normal capitalize leading-6 text-[#808080]">
                      <li>Exclusive delivery team</li>
                      <li>Enterprise scalability</li>
                      <li>Standardized workflows</li>
                      <li>Long-term operational efficiency</li>
                    </ul>
                  </div>
                  <div className="space-y-2.5">
                    <p className="text-[16px] font-medium leading-6 text-[#808080]">Best Suited For</p>
                    <p className="text-[16px] font-normal leading-[26px] text-[#808080]">
                      Large global firms<br />Multi-project delivery<br />Strategic outsourcing partnerships
                    </p>
                  </div>
                </div>
                <PrimaryCtaButton>Explore GDC Model</PrimaryCtaButton>
              </div>
              <div className="absolute -top-4 right-5 inline-flex h-8 items-center justify-center rounded-[10px] bg-[#2299D6] px-3 py-1.5">
                <span className="text-[14px] font-normal capitalize text-white">Most Demanding</span>
              </div>
            </article>
          </div>
        </PageContainer>
      </section>

      <section className="bg-white py-20">
        <PageContainer className="space-y-10">
          <div className="flex flex-col items-start gap-5">
            <div className="flex flex-col items-start gap-3">
              <div className="inline-flex items-center justify-center gap-[10px] rounded-[10px] border border-vbs-blue bg-vbs-blue/10 px-3 py-1.5">
                <span className="text-[13px] font-normal capitalize text-vbs-blue">Industries</span>
              </div>
              <h2 className="text-[48px] font-medium capitalize leading-[1.15] text-[#111111]">
                Industries <span className="font-light text-vbs-red">We Serve</span>
              </h2>
            </div>
            <p className="max-w-[536px] text-[16px] font-normal capitalize leading-6 text-[#808080]">
              Delivering accuracy driven BIM solutions tailored to the unique requirements of every construction sector we serve.
            </p>
          </div>

          <div className="relative overflow-hidden">
            <div className="industries-marquee-track">
              {[
                { img: "industry-1.png", title: "Commercial & Mixed-Use" },
                { img: "industry-2.png", title: "Healthcare" },
                { img: "industry-3.png", title: "Educational" },
                { img: "industry-4.png", title: "Mission Critical" },
                { img: "industry-5.png", title: "Hospitality & Residential" },
                { img: "industry-6.png", title: "Industrial & Manufacturing" },
                { img: "industry-7.png", title: "Civic & Government Infrastructure" },
                { img: "industry-8.png", title: "Heritage, Religious & Cultural Spaces" },
                { img: "industry-1.png", title: "Commercial & Mixed-Use" },
                { img: "industry-2.png", title: "Healthcare" },
              ].map((item, idx) => (
                <div
                  key={`${item.img}-${idx}`}
                  className="relative h-[330px] w-[330px] flex-shrink-0 overflow-hidden rounded-[10px] border border-[#CBCCCD]"
                >
                  <Image src={`/images/figma/${item.img}`} alt={item.title} fill className="object-cover" />
                  <div className="absolute bottom-0 left-0 h-[160px] w-full bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,#000_100%)]" />
                  <div className="absolute bottom-8 left-1/2 w-[228px] -translate-x-1/2 text-center text-[24px] font-normal leading-[1.2] text-white">
                    {item.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </PageContainer>
      </section>

      <section className="bg-white py-20">
        <PageContainer className="space-y-[60px]">
          <div className="flex w-full flex-col items-start gap-5">
            <div className="flex flex-col items-start gap-3">
              <div className="inline-flex items-center justify-center gap-[10px] rounded-[10px] border border-vbs-blue bg-vbs-blue/10 px-3 py-1.5">
                <span className="text-[13px] font-normal capitalize text-vbs-blue">Benefits</span>
              </div>
              <h2 className="text-[48px] font-medium capitalize leading-[1.15] text-[#111111]">
                Best <span className="font-light text-vbs-red">Benefits</span>
              </h2>
            </div>
            <p className="max-w-[536px] text-[16px] font-normal capitalize leading-6 text-[#808080]">
              Delivering accuracy driven BIM solutions tailored to the unique requirements of every construction sector we serve.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                id: "01",
                color: "text-vbs-green",
                title: "Test Before You Commit",
                description:
                  "Enjoy complete flexibility with our one-month, no-obligation, money-back guarantee. Experience our services risk-free before making any long-term commitments.",
              },
              {
                id: "02",
                color: "text-vbs-blue",
                title: "Boost Knowledge Retention by 50%",
                description:
                  "With our top 1% architects, retain valuable project knowledge and processes consistently, even as resources change. Enjoy uninterrupted expertise throughout the engagement.",
              },
              {
                id: "03",
                color: "text-vbs-yellow",
                title: "4X Efficiency",
                description:
                  "Maximize your budget and productivity get the equivalent output of four architects for the cost of one draftsperson.",
              },
            ].map((item) => (
              <article
                key={item.id}
                className="flex h-full flex-col gap-5 border-l border-[#e8e8e8] px-2.5 first:border-l-0 md:px-5"
              >
                <div className="flex flex-col items-start gap-2.5">
                  <p className={`text-[36px] font-normal leading-none ${item.color}`}>{item.id}</p>
                  <h3 className="text-[24px] font-normal leading-[1.35] text-[#111111]">{item.title}</h3>
                </div>
                <p className="text-[16px] font-normal leading-6 text-[#808080]">{item.description}</p>
              </article>
            ))}
          </div>

          <div className="flex w-full justify-center">
            <PrimaryCtaButton fullWidth={false}>Inquire Now</PrimaryCtaButton>
          </div>
        </PageContainer>
      </section>

      <section className="bg-white py-20">
        <PageContainer className="space-y-[60px]">
          <div className="flex w-full flex-col items-start gap-5">
            <div className="flex flex-col items-start gap-3">
              <SectionTag label="Resources" />
              <h2 className="text-[48px] font-medium capitalize leading-[1.15] text-[#111111]">
                Latest thoughts, <span className="font-light text-vbs-red">Ideas & Plan.</span>
              </h2>
            </div>
            <p className="max-w-[413px] text-[16px] font-normal capitalize leading-6 text-[#808080]">
              We offer two flexible engagement models that work best for our clients.
            </p>
          </div>

          <div className="space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2.5">
                {["All", "Blogs", "Webinar", "Case Study", "White Paper"].map((tab, index) => (
                  <button
                    key={tab}
                    className={`rounded-[10px] px-5 py-3 text-[16px] capitalize backdrop-blur-[50px] ${
                      index === 0
                        ? "bg-vbs-red font-semibold text-white"
                        : "bg-[#FAFAFA] font-normal text-[#111111]"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <a href="#" className="inline-flex items-center gap-1.5 text-[16px] font-normal text-vbs-blue">
                View All
                <ChevronRight className="h-5 w-5" />
              </a>
            </div>

            <div className="grid items-start gap-5 lg:grid-cols-2">
              <article className="inline-flex flex-col gap-[30px] overflow-hidden">
                <div className="relative h-[360px] overflow-hidden rounded-[10px]">
                  <Image src="/images/figma/resource-1.png" alt="Featured resource" fill className="object-cover" />
                  <span className="absolute bottom-4 right-4 inline-flex rounded-[10px] border border-vbs-yellow bg-vbs-yellow px-2.5 py-1 text-[13px] font-normal text-[#FBF9F9]">
                    Webinar
                  </span>
                </div>
                <div className="flex flex-col items-start gap-[15px]">
                  <div className="flex flex-col items-start gap-4">
                    <h3 className="text-[36px] font-normal leading-[1.2] text-[#111111]">
                      Why AutoCAD to BIM Conversion is Essential for Modern Construction
                    </h3>
                    <p className="text-[16px] font-normal text-[#808080]">
                      Whether you&apos;re launching a new product or entering a new segment, we
                      design the GTM motion that lands and scales.
                    </p>
                  </div>
                  <a href="#" className="inline-flex items-center gap-1.5 text-[16px] font-normal text-vbs-blue">
                    Learn More
                    <ChevronRight className="h-5 w-5" />
                  </a>
                </div>
              </article>

              <div className="inline-flex w-full flex-col gap-5">
                {[
                  { tag: "Blog", tagClass: "border-vbs-red bg-vbs-red text-white", image: "/images/figma/resource-2.png" },
                  { tag: "Case Study", tagClass: "border-vbs-green bg-vbs-green text-white", image: "/images/figma/resource-3.png" },
                  { tag: "White Paper", tagClass: "border-vbs-blue bg-vbs-blue text-white", image: "/images/figma/resource-1.png" },
                ].map((item, index) => (
                  <article key={`${item.tag}-${index}`} className="grid gap-5 sm:grid-cols-2">
                    <div className="relative h-[193px] overflow-hidden rounded-[10px]">
                      <Image src={item.image} alt={item.tag} fill className="object-cover" />
                      <span className={`absolute bottom-4 right-4 inline-flex rounded-[10px] border px-2.5 py-1 text-[13px] font-normal ${item.tagClass}`}>
                        {item.tag}
                      </span>
                    </div>
                    <div className="flex h-[193px] flex-col justify-between">
                      <h3 className="text-[24px] font-normal leading-[1.3] text-[#111111]">
                        Why AutoCAD to BIM Conversion is Essential for Modern Construction
                      </h3>
                      <p className="text-[16px] font-normal text-[#808080]">{resources[0]?.date ?? "12 Jan 2026"}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

      <CertificationSection />
      <ClientSuccessStoriesSection />
      <EvaluateDeliveryCtaSection />

      <section className="bg-white py-20">
        <PageContainer className="grid items-start gap-10 md:grid-cols-2">
          <div className="flex flex-col items-start gap-5">
            <div className="flex flex-col items-start gap-3">
              <SectionTag label="FAQs" />
              <h2 className="max-w-[528px] text-[48px] font-medium capitalize leading-[1.15] text-[#111111]">
                Frequently Asked <span className="font-light text-vbs-red">Questions</span>
              </h2>
            </div>
            <p className="max-w-[563px] text-[16px] font-normal capitalize leading-6 text-[#808080]">
              We offer two flexible engagement models that work best for our clients. Each year, we
              carefully select the
            </p>
          </div>

          <div className="space-y-5">
            <article className="rounded-[10px] border border-[#CBCCCD] p-5">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-[16px] font-normal text-[#111111]">Do you provide on-site talent?</h3>
                <span className="text-[22px] leading-none text-[#111111]">-</span>
              </div>
              <p className="mt-5 text-[16px] font-normal leading-6 text-[#808080]">
                Yes, we offer on-site talent, with pricing that may vary. Rest assured, our on-site
                services are designed to optimize both cost savings and efficiency
              </p>
            </article>

            {faqs.map((item) => (
              <article key={item} className="rounded-[10px] border border-[#CBCCCD] p-5">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-[16px] font-normal text-[#111111]">{item}</h3>
                  <Plus className="h-5 w-5 text-[#111111]" />
                </div>
              </article>
            ))}
          </div>
        </PageContainer>
      </section>

      <GetInTouchSection />
      <SiteFooter />
    </div>
  );
}
