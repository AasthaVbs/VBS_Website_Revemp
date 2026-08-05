"use client";

import React, { useEffect, useRef, useState } from "react";

import { LandingTopHeader } from "@/components/landing/landing-top-header";
import { PageContainer } from "@/components/layout/page-container";
import { EvaluateDeliveryCtaSection } from "@/components/sections/evaluate-delivery-cta-section";
import { GetInTouchSection } from "@/components/sections/get-in-touch-section";
import { SiteFooter } from "@/components/sections/site-footer";
import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";

import "@/styles/delivery-inside-architecture-firms.scss";

declare global {
  interface Window {
    lintrk?: (action: string, payload: { conversion_id: number }) => void;
  }
}

const RESOURCE_UTM_QUERY = "?utm_source=LP&utm_medium=LPCTA&utm_campaign=T2TOFU";

const RESOURCE_IMAGES = {
  documentationWall: "/image/Why-Growing-Firms-Hit-a-Documentation-Wall.jpg",
  hiringRemote: "/image/HIring-vs-remote-architec.jpg",
  burnout: "/image/How Architecture Firms Avoid Burning Out Their Senior Team0.jpg",
  scaleSystems: "/image/doc-that-scale-banner2.png",
} as const;

const DELIVERY_INSIDE_LP_HIDE_FLOAT_UI = "vbs-delivery-inside-architecture-firms--hide-float-ui";

const FAMILIAR_ITEMS = [
  "CDs are taking longer than expected",
  "Coordination across teams is increasing",
  "Senior architects are still reviewing most outputs",
  "Hiring hasn't reduced delivery pressure",
  "Projects feel heavier than they did with a smaller team",
] as const;

const PRESSURE_METRICS = [
  {
    value: "68%",
    label: "Of delivery delays",
    title: "Delivery slowdown",
    copy: "Timelines stretch as review load and coordination demands outpace internal capacity.",
  },
  {
    value: "4.2×",
    label: "Production hours",
    title: "Senior team overload",
    copy: "Experienced talent pulled back into production instead of leading.",
  },
  {
    value: "52%",
    label: "Schedule variance",
    title: "Loss of predictability",
    copy: "Overlapping timelines create uncertainty and strain resources.",
  },
] as const;

type ResourceCard = {
  title: string;
  description: string;
  downloadUrl: string;
  cardImage: string;
  linkedinConversionId?: number;
};

function trackLinkedInOnDemandWebinarClick(conversionId: number, title: string) {
  if (typeof window === "undefined") return;
  console.log("[VBS] LinkedIn on-demand webinar card click (delivery-inside-architecture-firms)", {
    conversion_id: conversionId,
    title,
  });
  if (typeof window.lintrk === "function") {
    try {
      window.lintrk("track", { conversion_id: conversionId });
    } catch (e) {
      console.warn("[VBS] LinkedIn lintrk track failed", e);
    }
  }
}

function useCountUp(end: number, suffix = "", duration = 1600) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const done = useRef(false);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const observer = new IntersectionObserver(
      (entries) => {
        if (done.current) return;
        if (entries[0]?.isIntersecting) {
          done.current = true;
          const startTime = performance.now();
          const step = () => {
            const elapsed = performance.now() - startTime;
            const p = Math.min(elapsed / duration, 1);
            const eased = 1 - (1 - p) * (1 - p);
            setValue(Math.round(eased * end));
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  return { value, ref, suffix };
}

export function DeliveryInsideArchitectureFirmsView() {
  const resourcesRef = useRef<HTMLElement | null>(null);
  const count300 = useCountUp(300, "+");
  const count15 = useCountUp(15, "+");
  const count200 = useCountUp(200, "+");

  useEffect(() => {
    document.body.classList.add(DELIVERY_INSIDE_LP_HIDE_FLOAT_UI);
    return () => {
      document.body.classList.remove(DELIVERY_INSIDE_LP_HIDE_FLOAT_UI);
    };
  }, []);

  const scrollToResources = () => {
    resourcesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const resources: ResourceCard[] = [
    {
      title: "Why Growing Firms Hit a Delivery Wall",
      description:
        "Why delivery starts slowing down as firms scale and where documentation begins to create bottlenecks.",
      downloadUrl: `/landing/why-growing-architecture-firms-hit-documentation-wall/${RESOURCE_UTM_QUERY}`,
      cardImage: RESOURCE_IMAGES.documentationWall,
    },
    {
      title: "Hiring vs Remote Support: What Actually Changes in Delivery",
      description:
        "What improves and what doesn’t when you add headcount, with a focus on delivery impact.",
      downloadUrl: `/landing/hiring-vs-dedicated-remote-architect/${RESOURCE_UTM_QUERY}`,
      cardImage: RESOURCE_IMAGES.hiringRemote,
    },
    {
      title: "Why Senior Architects Become Delivery Bottlenecks as Firms Grow",
      description:
        "Why senior teams get pulled back into production—and what firms start noticing when this happens.",
      downloadUrl: `/landing/documentation-system-that-scale/${RESOURCE_UTM_QUERY}`,
      cardImage: RESOURCE_IMAGES.burnout,
      linkedinConversionId: 26825082,
    },
    {
      title: "Documentation Systems That Scale Without a Bigger Team",
      description:
        "A conceptual guide to why documentation systems break under growth—and what scalable firms have in common.",
      downloadUrl: `/landing/documentation-system-that-scale/${RESOURCE_UTM_QUERY}`,
      cardImage: RESOURCE_IMAGES.scaleSystems,
    },
  ];

  return (
    <>
      <LandingTopHeader fixed />
      <main className="vbs-redesign-page growth-strain-page awareness-page delivery-inside-architecture-firms-page min-h-screen overflow-x-hidden bg-white">
        {/* Hero — Figma 3802:48768 */}
        <section className="diaf-hero">
          <PageContainer className="diaf-hero-inner">
            <div className="diaf-hero-copy">
              <div className="diaf-hero-copy-main">
                <h1>
                  You’re Hiring More Architects. So Why Is{" "}
                  <span className="diaf-accent">Delivery Still Slowing Down?</span>
                </h1>
                <p>
                  As firms grow, delivery gets heavier—more coordination, longer review cycles, and
                  increasing dependence on senior architects despite hiring.
                </p>
              </div>
              <PrimaryCtaButton
                fullWidth={false}
                type="button"
                className="diaf-hero-cta"
                onClick={scrollToResources}
              >
                See What’s Slowing Your Delivery
              </PrimaryCtaButton>
            </div>
            <div className="diaf-hero-media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/image/awarness-hero.png" alt="Architect reviewing plans under delivery pressure" />
            </div>
          </PageContainer>
        </section>

        {/* Growth Changes How Firms Deliver Work */}
        <section className="diaf-growth">
          <PageContainer className="diaf-growth-inner">
            <div className="diaf-growth-media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/image/blueprints-detail.jpg"
                alt="Architecture delivery team coordinating around active project model"
              />
            </div>
            <div className="diaf-growth-copy">
              <div className="diaf-growth-intro">
                <h2>
                  Growth Changes How <span className="diaf-accent">Firms&nbsp;Deliver Work</span>
                </h2>
                <p>
                  As you take on more projects, delivery doesn’t get easier it gets heavier. More
                  coordination. More reviews. More pressure on senior architects. And despite hiring,
                  the load doesn’t reduce. It shifts.
                </p>
              </div>
              <ul className="diaf-growth-list">
                {FAMILIAR_ITEMS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </PageContainer>
        </section>

        {/* Pressure metrics */}
        <section className="diaf-pressure">
          <PageContainer className="diaf-pressure-inner">
            <h2 className="diaf-pressure-title">This is How the Pressure Starts Showing Up</h2>
            <div className="diaf-pressure-body">
              <div className="diaf-pressure-grid">
                {PRESSURE_METRICS.map((metric) => (
                  <article key={metric.title} className="diaf-pressure-card">
                    <div className="diaf-pressure-card-stat">
                      <span className="diaf-pressure-value">{metric.value}</span>
                      <span className="diaf-pressure-label">{metric.label}</span>
                    </div>
                    <div className="diaf-pressure-card-copy">
                      <h3>{metric.title}</h3>
                      <p>{metric.copy}</p>
                    </div>
                  </article>
                ))}
              </div>
              <blockquote className="diaf-pressure-quote">
                “Most firms don’t notice the shift until delivery starts depending on senior
                architects to hold everything together.”
              </blockquote>
            </div>
          </PageContainer>
        </section>

        {/* What this helps you see */}
        <section className="diaf-helps">
          <PageContainer className="diaf-helps-inner">
            <div className="diaf-helps-copy">
              <h2>
                What this <span className="diaf-accent">helps you see</span>
              </h2>
              <p>
                These resources help you identify what’s actually slowing delivery as your firm grows
                and why it’s happening.
              </p>
              <ul className="diaf-helps-list">
                <li>Identify where delivery is getting stuck</li>
                <li>Understand why hiring isn’t reducing pressure</li>
                <li>See how growth is changing project flow</li>
              </ul>
              <p>
                Practical, experience-based insights direct from industry veterans and firms at a
                similar stage.
              </p>
            </div>
            <div className="diaf-helps-media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/image/whatyouwillfind.png" alt="Teams aligning documentation and delivery systems" />
            </div>
          </PageContainer>
        </section>

        {/* Resource Hub */}
        <section ref={resourcesRef} id="resources" className="diaf-resources">
          <PageContainer className="diaf-resources-inner">
            <div className="diaf-resources-header">
              <h2>
                Resource <span className="diaf-accent">Hub</span>
              </h2>
              <p className="diaf-resources-desc">
                Select the resources that resonate with your situation. Each explores a different
                facet of growth-related delivery challenges.
              </p>
              <p className="diaf-resources-lead">
                Explore the areas that match what you’re experiencing:
              </p>
            </div>

            <div className="diaf-resources-grid">
              {resources.map((r) => {
                const openResource = () => {
                  if (r.linkedinConversionId != null) {
                    trackLinkedInOnDemandWebinarClick(r.linkedinConversionId, r.title);
                  }
                  window.open(r.downloadUrl, "_blank", "noopener,noreferrer");
                };
                return (
                  <button
                    key={r.title}
                    type="button"
                    className="diaf-resource-card"
                    onClick={openResource}
                  >
                    <div className="diaf-resource-card-image">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={r.cardImage} alt="" />
                    </div>
                    <div className="diaf-resource-card-body">
                      <h3>{r.title}</h3>
                      <p>{r.description}</p>
                      <span className="diaf-resource-card-cta">Learn more</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </PageContainer>
        </section>

        {/* Evaluate CTA + metrics */}
        <EvaluateDeliveryCtaSection
          title={
            <>
              Before You Hire Again, See{" "}
              <span className="font-light">What’s Slowing Your Delivery</span>
            </>
          }
          titleClassName="!max-w-[692px]"
          description="Supporting architecture firms as they navigate delivery pressure, coordination complexity, and growth-related capacity strain."
          descriptionClassName="!max-w-[662px]"
          ctaLabel="See Where Your Delivery Is Breaking"
          ctaElement={
            <PrimaryCtaButton fullWidth={false} type="button" onClick={scrollToResources}>
              See Where Your Delivery Is Breaking
            </PrimaryCtaButton>
          }
        />

        <section className="diaf-credibility">
          <PageContainer className="diaf-credibility-inner">
            <div className="diaf-credibility-metric" ref={count300.ref}>
              <span className="diaf-credibility-num diaf-credibility-num--red">
                {count300.value}
                {count300.suffix}
              </span>
              <span className="diaf-credibility-label">Firms served</span>
            </div>
            <div className="diaf-credibility-metric" ref={count15.ref}>
              <span className="diaf-credibility-num diaf-credibility-num--green">
                {count15.value}
                {count15.suffix}
              </span>
              <span className="diaf-credibility-label">Years experience</span>
            </div>
            <div className="diaf-credibility-metric" ref={count200.ref}>
              <span className="diaf-credibility-num diaf-credibility-num--yellow">
                {count200.value}
                {count200.suffix}
              </span>
              <span className="diaf-credibility-label">BIM experts</span>
            </div>
          </PageContainer>
        </section>

        <GetInTouchSection />
        <SiteFooter />
      </main>
    </>
  );
}

export default DeliveryInsideArchitectureFirmsView;
