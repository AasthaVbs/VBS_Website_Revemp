import Image from "next/image";
import {
  ChevronDown,
  ChevronRight,
  Mail,
  MapPin,
  Phone,
  Plus,
} from "lucide-react";

import {
  certificationLogos,
  faqs,
  resources,
} from "@/constants/home-content";
import { PageContainer } from "@/components/layout/page-container";
import { SiteHeader } from "@/components/layout/site-header";
import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";

const footerSocialLinks = [
  { label: "Twitter", href: "#", icon: "/icons/social/twitter.svg" },
  { label: "Instagram", href: "#", icon: "/icons/social/instagram.svg" },
  { label: "Facebook", href: "#", icon: "/icons/social/facebook.svg" },
  { label: "LinkedIn", href: "#", icon: "/icons/social/linkedin.svg" },
  { label: "YouTube", href: "#", icon: "/icons/social/youtube.svg" },
] as const;

function SectionTag({ label }: { label: string }) {
  return (
    <span className="inline-flex rounded-lg border border-vbs-blue bg-vbs-blue/10 px-3 py-1 text-[13px] font-medium text-vbs-blue">
      {label}
    </span>
  );
}

function SectionHeader({
  tag,
  title,
  description,
}: {
  tag: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center gap-3 text-center">
      <SectionTag label={tag} />
      <h2 className="h2">{title}</h2>
      <p>{description}</p>
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
        <PageContainer className="flex w-full flex-col items-start gap-10 py-16 lg:flex-row lg:items-center lg:justify-between lg:gap-[10px] md:py-[150px]">
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
            <div className="relative flex h-[635px] max-w-full items-start gap-[10px] overflow-hidden">
              <div className="hero-col-up inline-flex w-[min(291.53px,42vw)] flex-col items-start gap-[10px] sm:w-[291.53px]">
                {[
                  "/images/figma/capability-gc.png",
                  "/images/figma/capability-mep.png",
                  "/images/figma/capability-survey.png",
                  "/images/figma/industry-1.png",
                  "/images/figma/industry-2.png",
                  "/images/figma/industry-3.png",
                ].map((src, idx) => (
                  <div key={`${src}-${idx}`} className="relative h-[300px] w-full max-w-[290px] overflow-hidden rounded-[10px]">
                    <div className="absolute inset-0 rounded-[10px] border-[0.74px] border-[#FAFAFA]" />
                    <Image src={src} alt={`Hero column left ${idx + 1}`} fill className="rounded-[10px] object-cover" />
                    <div className="absolute inset-0 rounded-[10px] border-[5.94px] border-[#FAFAFA]" />
                  </div>
                ))}
              </div>
              <div className="pointer-events-none absolute inset-x-0 top-0 h-[74px] bg-[linear-gradient(180deg,white_30%,rgba(255,255,255,0)_100%)]" />
              <div className="pointer-events-none absolute inset-x-0 top-[561px] h-[74px] bg-[linear-gradient(180deg,white_30%,rgba(255,255,255,0)_100%)]" />
            </div>

            <div className="relative flex h-[635px] max-w-full items-end gap-[10px] overflow-hidden">
              <div className="hero-col-down inline-flex w-[min(290px,42vw)] flex-col items-start gap-[10px] sm:w-[290px]">
                {[
                  "/images/figma/capability-gc.png",
                  "/images/figma/capability-mep.png",
                  "/images/figma/capability-survey.png",
                  "/images/figma/industry-4.png",
                  "/images/figma/industry-5.png",
                  "/images/figma/industry-6.png",
                ].map((src, idx) => (
                  <div key={`${src}-${idx}`} className="relative h-[300px] w-full max-w-[290px] overflow-hidden rounded-[10px]">
                    <div className="absolute inset-0 rounded-[10px] border-[0.74px] border-[#FAFAFA]" />
                    <Image src={src} alt={`Hero column right ${idx + 1}`} fill className="rounded-[10px] object-cover" />
                    <div className="absolute inset-0 rounded-[10px] border-[5.94px] border-[#FAFAFA]" />
                  </div>
                ))}
                <div className="h-[124px] w-full max-w-[290px] rounded-[10px] bg-white" />
              </div>
              <div className="pointer-events-none absolute inset-x-0 top-0 h-[74px] bg-[linear-gradient(180deg,white_30%,rgba(255,255,255,0)_100%)]" />
              <div className="pointer-events-none absolute inset-x-0 top-[561px] h-[74px] bg-[linear-gradient(180deg,white_30%,rgba(255,255,255,0)_100%)]" />
            </div>
          </div>
        </PageContainer>
      </section>

      <section className="bg-white pb-[30px] pt-[60px]">
        <PageContainer className="grid gap-5 md:grid-cols-4">
          {[
            { value: "11+", color: "text-vbs-red", label: "Years Embedded Inside U.S. AEC Delivery" },
            { value: "2000+", color: "text-vbs-green", label: "Production professionals across delivery centers" },
            { value: "5+", color: "text-vbs-blue", label: "Years Average Engagement Length" },
            { value: "6+", color: "text-vbs-yellow", label: "Disciplines Covered" },
          ].map((item, index) => (
            <article
              key={item.label}
              className={`flex flex-col items-center justify-start gap-[7px] text-center md:pr-5 ${
                index < 3 ? "md:border-r md:border-[#CBCCCD]" : ""
              }`}
            >
              <p className={`text-[36px] font-medium leading-none ${item.color}`}>{item.value}</p>
              <p className="max-w-[220px] text-[16px] font-normal text-[#808080]">{item.label}</p>
            </article>
          ))}
        </PageContainer>
      </section>

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

      <section className="bg-white py-20 lg:py-[100px]">
        <PageContainer className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
          <div className="flex w-full shrink-0 flex-col items-start gap-5 lg:w-[528px]">
            <div className="flex flex-col items-start gap-3">
              <SectionTag label="Certification" />
              <h2 className="text-[48px] capitalize leading-[1.15]">
                <span className="block font-medium text-[#111111]">Certification/Awards</span>
                <span className="block font-light text-vbs-red">Recognition</span>
              </h2>
            </div>
            <p className="max-w-[478px] text-[16px] font-normal capitalize leading-6 text-[#808080]">
              We offer two flexible engagement models that work best for our clients. Each year, we
              carefully select the
            </p>
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

      <section className="relative overflow-hidden bg-[#FAFAFA] py-20">
        <PageContainer className="space-y-[60px]">
          <div className="flex flex-col items-start gap-5">
            <div className="flex flex-col items-start gap-3">
              <SectionTag label="Testimonials" />
              <h2 className="text-[48px] font-medium capitalize leading-[1.15] text-[#111111]">
                Client Success <span className="font-light text-vbs-red">Stories</span>
              </h2>
            </div>
            <p className="max-w-[413px] text-[16px] font-normal capitalize leading-6 text-[#808080]">
              We offer two flexible engagement models that work best for our clients.
            </p>
          </div>

          <div className="relative overflow-hidden">
            <div className="testimonial-marquee-track">
              {[
                { name: "Marvin McKinney", role: "CEO at Oceanmtech", avatar: "/images/figma/testimonial-1.png", cover: "/images/figma/resource-1.png" },
                { name: "Cody Fisher", role: "CEO at Oceanmtech", avatar: "/images/figma/testimonial-2.png", cover: "/images/figma/resource-2.png" },
                { name: "Darlene Robertson", role: "CEO at Oceanmtech", avatar: "/images/figma/testimonial-1.png", cover: "/images/figma/resource-3.png" },
                { name: "Savannah Nguyen", role: "CEO at Oceanmtech", avatar: "/images/figma/testimonial-2.png", cover: "/images/figma/resource-1.png" },
                { name: "Marvin McKinney", role: "CEO at Oceanmtech", avatar: "/images/figma/testimonial-1.png", cover: "/images/figma/resource-1.png" },
                { name: "Cody Fisher", role: "CEO at Oceanmtech", avatar: "/images/figma/testimonial-2.png", cover: "/images/figma/resource-2.png" },
              ].map((item, index) => (
                <article
                  key={`${item.name}-${index}`}
                  className="flex h-[340px] w-[732px] shrink-0 items-center gap-5 rounded-[18px] border border-[#CBCCCD] bg-white p-2.5"
                >
                  <div className="flex h-[320px] w-[382px] flex-col gap-[15px] p-2.5">
                    <div className="flex items-start gap-[15px]">
                      <div className="relative h-[60px] w-[60px] overflow-hidden rounded-[10px]">
                        <Image src={item.avatar} alt={item.name} fill className="object-cover" />
                      </div>
                      <div className="flex flex-1 flex-col gap-1">
                        <h3 className="text-[24px] font-normal text-[#111111]">{item.name}</h3>
                        <p className="text-[13px] font-normal text-[#808080]">{item.role}</p>
                      </div>
                    </div>
                    <p className="flex-1 text-[16px] font-normal leading-6 text-[#808080]">
                      Whether you&apos;re launching a new product or entering a new segment, we
                      design the GTM motion that lands and scales. Whether you&apos;re launching a
                      new product or entering a new segment, we design the GTM motion that lands and
                      scales.
                    </p>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Image
                          key={i}
                          src="/images/solar_star-line-duotone.svg"
                          alt=""
                          width={14}
                          height={14}
                          aria-hidden
                        />
                      ))}
                    </div>
                  </div>
                  <div className="relative h-[300px] w-[300px] overflow-hidden rounded-[10px]">
                    <Image src={item.cover} alt={`${item.name} testimonial`} fill className="object-cover" />
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-8">
            <div className="h-[2px] flex-1 bg-[#B1B1B1]">
              <div className="h-[2px] w-[320px] bg-[#111111]" />
            </div>
            <div className="flex items-center gap-4">
              <button className="inline-flex h-12 w-12 items-center justify-center rounded-[10px] border border-[#CBCCCD] text-[#808080]">
                <ChevronRight className="h-6 w-6 rotate-180" />
              </button>
              <button className="inline-flex h-12 w-12 items-center justify-center rounded-[10px] border border-[#CBCCCD] text-[#808080]">
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </PageContainer>
      </section>

      <section className="bg-white py-[100px]">
        <PageContainer>
          <div className="evaluate-delivery-cta-card">
            <div className="evaluate-delivery-cta-mosaic" aria-hidden>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/figma/evaluate-cta-mosaic.svg"
                alt=""
                width={1440}
                height={1467}
              />
            </div>
            <div className="evaluate-delivery-cta-panel">
              <div className="flex flex-1 flex-col items-start justify-center gap-5">
                <h2 className="max-w-[530px] text-[48px] font-medium capitalize leading-[1.15] text-[#111111]">
                  Evaluate Your <span className="font-light">Delivery Capacity</span>
                </h2>
                <p className="max-w-[478px] text-[16px] font-normal capitalize leading-6 text-[#808080]">
                  A structured conversation about scale, standards, and fit.
                </p>
              </div>
              <PrimaryCtaButton fullWidth={false} className="shrink-0">
                Contact Us
                <ChevronRight className="h-2.5 w-2.5" strokeWidth={1.5} />
              </PrimaryCtaButton>
            </div>
          </div>
        </PageContainer>
      </section>

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

      <section className="bg-[#FAFAFA] py-[100px]">
        <PageContainer className="grid items-start gap-[30px] lg:grid-cols-2">
          <div className="flex flex-col gap-[30px]">
            <div className="flex flex-col items-start gap-5">
              <div className="flex flex-col items-start gap-3">
                <SectionTag label="Contact Us" />
                <h2 className="max-w-[528px] text-[48px] font-medium capitalize leading-[1.15] text-[#111111]">
                  Get in <span className="font-light text-vbs-red">Touch</span>
                </h2>
              </div>
              <p className="max-w-[435px] text-[16px] font-normal capitalize leading-6 text-[#808080]">
                Let&apos;s discuss your requirements and see how our expertise can help on your next
                project.
              </p>
            </div>

            <form className="flex flex-col gap-4">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="flex flex-col gap-2">
                  <span className="text-[16px] font-normal capitalize text-[#111111]">
                    First Name<span className="text-vbs-red">*</span>
                  </span>
                  <input
                    type="text"
                    className="h-[50px] rounded-[10px] border border-[#CBCCCD] bg-white px-3 text-[16px] font-normal normal-case text-[#111111] placeholder:text-[#808080]"
                    placeholder="Enter First Name"
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-[16px] font-normal capitalize text-[#111111]">
                    Last Name<span className="text-vbs-red">*</span>
                  </span>
                  <input
                    type="text"
                    className="h-[50px] rounded-[10px] border border-[#CBCCCD] bg-white px-3 text-[16px] font-normal normal-case text-[#111111] placeholder:text-[#808080]"
                    placeholder="Enter Last Name"
                  />
                </label>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="flex flex-col gap-2">
                  <span className="text-[16px] font-normal capitalize text-[#111111]">
                    Number<span className="text-vbs-red">*</span>
                  </span>
                  <input
                    type="tel"
                    className="h-[50px] rounded-[10px] border border-[#CBCCCD] bg-white px-3 text-[16px] font-normal normal-case text-[#111111] placeholder:text-[#808080]"
                    placeholder="Enter Number"
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-[16px] font-normal capitalize text-[#111111]">
                    Email ID<span className="text-vbs-red">*</span>
                  </span>
                  <input
                    type="email"
                    className="h-[50px] rounded-[10px] border border-[#CBCCCD] bg-white px-3 text-[16px] font-normal normal-case text-[#111111] placeholder:text-[#808080]"
                    placeholder="Enter Email ID"
                  />
                </label>
              </div>
              <label className="flex flex-col gap-2">
                <span className="text-[16px] font-normal capitalize text-[#111111]">Message</span>
                <textarea
                  className="h-[100px] w-full resize-none rounded-[10px] border border-[#CBCCCD] bg-white px-3 py-2 text-[16px] font-normal normal-case text-[#111111] placeholder:text-[#808080]"
                  placeholder="Write a Description"
                />
              </label>
              <PrimaryCtaButton type="submit">Submit Now</PrimaryCtaButton>
            </form>
          </div>

          <div className="relative min-h-[602px] overflow-hidden rounded-[20px] bg-[#111111] shadow-[0_4px_10px_rgba(0,0,0,0.15)]">
            <Image
              src="/images/figma/hero-profile.png"
              alt="Contact support representative"
              fill
              className="object-cover object-[center_20%]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,#111111_0%,#111111_35%,rgba(17,17,17,0.55)_55%,rgba(17,17,17,0.15)_100%)]" />
            <div className="absolute bottom-10 left-10 z-10 flex max-w-[320px] flex-col gap-8 text-white">
              <div className="inline-flex items-center gap-2.5">
                <Phone className="h-5 w-5 shrink-0" />
                <span className="text-[16px] font-normal">+1 (409) 800-6601</span>
              </div>
              <div className="inline-flex items-center gap-2.5">
                <Mail className="h-5 w-5 shrink-0" />
                <span className="text-[16px] font-normal">contact@virtualbuildingstudio.com</span>
              </div>
              <div className="inline-flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0" />
                <span className="text-[16px] font-normal lowercase">
                  712 wilcrest drive 1097 houston, tx 77042 us
                </span>
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

      <footer className="relative overflow-hidden bg-[#111111] pt-[100px] text-[#CBCCCD]">
        <PageContainer className="space-y-12">
          <div className="grid gap-10 md:grid-cols-4">
            <div className="space-y-6">
              <Image src="/logos/logo.svg" alt="Virtual Building Studio" width={215} height={41} className="rounded bg-white p-2" />
              <p className="max-w-[409px] text-[16px] text-[#CBCCCD]">
                Always at the forefront, Virtual Building Studio leads the architecture industry with
                its innovative solution.
              </p>
              <div className="flex items-center gap-4">
                {footerSocialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="inline-flex h-[34px] w-[34px] items-center justify-center rounded-full border border-[#CBCCCD]/30 transition-colors hover:border-[#CBCCCD]"
                  >
                    <Image src={social.icon} alt="" width={18} height={18} aria-hidden />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-[24px] font-normal capitalize text-[#CBCCCD]">Quick Links</h4>
              <ul className="mt-5 space-y-4 text-[16px]">
                {["Our Capabilities", "Engagement Model", "About us", "Leadership Team", "Careers", "Life at VBS"].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[24px] font-normal capitalize text-[#CBCCCD]">Resources</h4>
              <ul className="mt-5 space-y-4 text-[16px]">
                {["Case Studies", "Portfolio", "Testimonials", "Blog", "Webinar", "Whitepapers", "News"].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <Image
                src="/icons/circle-flags_us.svg"
                alt="United States"
                width={30}
                height={30}
                className="shrink-0"
              />
              <p className="text-[16px] text-[#CBCCCD]">712 Wilcrest Drive 1097 Houston, TX 77042 US</p>
              <div className="inline-flex items-center gap-2.5 text-[16px]">
                <Phone className="h-5 w-5 text-[#CBCCCD]" />
                +1 (409) 800-6601
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start justify-between gap-5 border-t border-[#808080] py-[30px] text-[16px] md:flex-row md:items-center">
            <p>©2026 Virtual Building Studio Inc.</p>
            <div className="flex flex-wrap items-center gap-8">
              <span>Privacy policy</span>
              <span>Terms & Conditions</span>
              <span>Cookie policy</span>
            </div>
          </div>
        </PageContainer>

        <div className="flex h-1 w-full items-center">
          <span className="h-full flex-1 bg-vbs-red" />
          <span className="h-full flex-1 bg-vbs-green" />
          <span className="h-full flex-1 bg-vbs-blue" />
          <span className="h-full flex-1 bg-vbs-yellow" />
        </div>
      </footer>
    </div>
  );
}
