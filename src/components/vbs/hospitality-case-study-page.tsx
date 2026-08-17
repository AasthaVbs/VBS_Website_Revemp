"use client";

import Image from "next/image";
import { useState } from "react";
import { SiteHeader } from "@/components/layout/site-header";
import { PageContainer } from "@/components/layout/page-container";
import {
  DeferredGetInTouchSection,
  DeferredSiteFooter,
} from "@/lib/lazy-page-sections";
import "@/styles/vbs-hospitality-case-page.scss";

const img1 = "/image/hospitality-case/1.jpg";
const img2 = "/image/hospitality-case/2.jpg";
const img3 = "/image/hospitality-case/3.jpg";
const img4 = "/image/hospitality-case/4.jpg";
const img5 = "/image/hospitality-case/5.jpg";
const img6 = "/image/hospitality-case/6.jpg";
const img7 = "/image/hospitality-case/7.jpg";
const img8 = "/image/hospitality-case/8.jpg";
const img9 = "/image/hospitality-case/9.jpg";
const img10 = "/image/hospitality-case/10.jpg";
const img11 = "/image/hospitality-case/11.jpg";
const img12 = "/image/hospitality-case/12.jpg";
const heroBanner = "/image/hospitality-case/hospitality-banner.jpg";
const overviewImage = "/image/hospitality-case/hospitality-project-overview.jpg";


type GalleryItem = {
  src: string;
  alt: string;
};

type StoryTab = {
  id: string;
  label: string;
  paragraphs: readonly string[];
};

const GALLERY: readonly GalleryItem[] = [
  { src: img1, alt: "Hyatt Place Level 1 floor plan with lobby, amenities, and pool" },
  { src: img2, alt: "Hyatt Place typical guestroom floor plan" },
  { src: img3, alt: "Hyatt Place public and guestroom wing floor plan" },
  { src: img4, alt: "Hyatt Place building section and elevation documentation" },
  { src: img5, alt: "Hyatt Place guest suite living and sleeping area" },
  { src: img6, alt: "Hyatt Place king guestroom interior" },
  { src: img7, alt: "Hyatt Place suite living area with city views" },
  { src: img8, alt: "Hyatt Place guestroom with living, sleeping, and work zones" },
  { src: img9, alt: "Hyatt Place lobby lounge and dining interior" },
  { src: img10, alt: "Hyatt Place outdoor pool and deck" },
  { src: img11, alt: "Hyatt Place bar and millwork interior" },
  { src: img12, alt: "Hyatt Place exterior architectural visualization" },
];

const TABS: readonly StoryTab[] = [
  {
    id: "need",
    label: "Business Need",
    paragraphs: [
      "Hyatt Place is a tightly defined brand: the brand prescribes room modules, amenity mix, and guest-flow expectations. The client needed a partner who could translate those brand standards into a site-specific building, and keep the model, plans, elevations, and details in lockstep as the design evolved.",
      "Key requirements included a clear separation of public, private, and service zones; an efficient repeating guestroom module across four room levels; a rooftop-level restaurant and outdoor deck; and a coordinated documentation set suitable for jurisdiction approvals.",
    ],
  },
  {
    id: "challenges",
    label: "Challenges",
    paragraphs: [
      "Brand standards had to be adapted to a unique site without losing the Hyatt Place guest experience. Public amenities, service cores, and repeating guestroom modules needed to stay coordinated as the design evolved.",
      "The documentation set had to remain approval-ready across floor plates, enlarged rooms, interiors, and millwork, with one BIM source of truth instead of disconnected drawing files.",
    ],
  },
  {
    id: "planning",
    label: "Solution: Planning & Modelling",
    paragraphs: [
      "Virtual Building Studio modeled the six-story hotel in Autodesk Revit so planning strategy and spatial organization lived in one coordinated model.",
      "Floor plates separate public, private, and service functions. Level 1 gathers the lobby, café, meeting room, fitness area, and pool around a clear arrival sequence, while guestroom levels repeat an efficient module.",
    ],
  },
  {
    id: "documentation",
    label: "Documentation & Detailing",
    paragraphs: [
      "Every sheet, from full floor plates to enlarged guest room plans, was produced from the Revit model as one coordinated, approval-ready source.",
      "Interior and millwork detailing stayed aligned with brand standards, while Navisworks and BIM 360 supported coordination as the design developed.",
    ],
  },
  {
    id: "approach",
    label: "Approach",
    paragraphs: [
      "The team treated brand standards as the planning brief, then translated them into a site-specific building with a clear guest-flow sequence.",
      "Public amenities, service zones, and guestroom modules were modeled together so plans, elevations, and details stayed in lockstep through design development and construction documentation.",
    ],
  },
  {
    id: "workflow",
    label: "Workflow",
    paragraphs: [
      "Work moved from planning strategy into a coordinated Revit model, then into construction documentation and interior detailing.",
      "BIM 360 kept the team aligned on a shared model, and Navisworks supported clash-aware coordination before sheets were issued for approvals.",
    ],
  },
  {
    id: "impact",
    label: "Business Impact",
    paragraphs: [
      "A single coordinated model reduced drawing drift and kept brand-compliant room modules consistent across four guestroom levels.",
      "The client received a construction-ready documentation set organized for jurisdiction review, with public, private, and service zones clearly expressed from arrival through rooftop amenities.",
    ],
  },
  {
    id: "video",
    label: "Project Video",
    paragraphs: [
      "Explore the Hyatt Place documentation set below — floor plans, sections, interiors, and exterior visualizations from planning through construction-ready delivery.",
    ],
  },
];

export function HospitalityCaseStudyPage() {
  const [activeTab, setActiveTab] = useState("need");
  const currentTab = TABS.find((tab) => tab.id === activeTab) ?? TABS[0];

  return (
    <div className="vbs-redesign-page hyatt-case-page hyatt-page min-h-screen overflow-x-hidden bg-white">
      <SiteHeader />

      <main>
        <section className="hyatt-hero" aria-label="Hyatt Place case study">
          <Image
            className="hyatt-hero__image"
            src={heroBanner}
            alt=""
            fill
            priority
            sizes="100vw"
          />
          <div className="hyatt-hero__overlay" aria-hidden="true" />
          <PageContainer className="hyatt-hero__inner">
            <div className="hyatt-hero__copy">
              <div className="hyatt-hero__heading">
                <span className="hyatt-hero__tag">Hospitality Case Study</span>
                <h1 className="hyatt-hero__title">Hyatt Place, A Select-Service Hotel</h1>
              </div>
              <p className="hyatt-hero__intro">
                An architectural journey from planning strategy to construction-ready documentation,
                designed &amp; delivered by Virtual Building Studio.
              </p>
            </div>
          </PageContainer>
        </section>

        <section className="hyatt-overview" aria-label="Project overview">
          <PageContainer>
            <div className="hyatt-overview__grid">
              <aside className="hyatt-overview__meta">
                <div className="hyatt-overview__meta-item">
                  <h3>Project Type</h3>
                  <p>Hospitality: Select-Service Hotel (Hyatt Place), six-story</p>
                </div>
                <div className="hyatt-overview__meta-item">
                  <h3>Location</h3>
                  <p>United States</p>
                </div>
                <div className="hyatt-overview__meta-item">
                  <h3>Scope of Work</h3>
                  <ul>
                    <li>Architectural BIM</li>
                    <li>Planning &amp; Design Development</li>
                    <li>Construction Documentation</li>
                    <li>Interior &amp; Millwork Detailing</li>
                  </ul>
                </div>
                <div className="hyatt-overview__meta-item">
                  <h3>Tools Used</h3>
                  <p>Autodesk Revit, Navisworks, BIM 360</p>
                </div>
              </aside>

              <div className="hyatt-overview__copy">
                <h2 className="hyatt-overview__title">
                  Project <span>Overview</span>
                </h2>
                <p>
                  Virtual Building Studio delivered a six-story Hyatt Place hotel from planning
                  strategy to construction documentation.
                </p>
                <p>
                  Floor plans were organized to separate public, private, and service functions,
                  while Level 1 gathers the lobby, café, meeting room, fitness area, and pool around
                  a clear arrival sequence.
                </p>
                <p>
                  Every sheet, from full floor plates to enlarged guest room plans, was modeled in
                  Autodesk Revit as one coordinated, approval-ready source.
                </p>
              </div>

              <div className="hyatt-overview__media">
                <Image
                  src={overviewImage}
                  alt="Aerial view of the six-story Hyatt Place hotel and site"
                  fill
                  sizes="(max-width: 1024px) 100vw, 526px"
                  className="object-cover"
                />
              </div>
            </div>
          </PageContainer>
        </section>

        <section className="hyatt-story" aria-label="Project story">
          <PageContainer>
            <div className="hyatt-story__tabs" role="tablist" aria-label="Case study sections">
              {TABS.map((tab) => {
                const isActive = tab.id === activeTab;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    className={`hyatt-story__tab${isActive ? " is-active" : ""}`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            <div className="hyatt-story__content" role="tabpanel">
              {currentTab.paragraphs.map((text) => (
                <p key={text}>{text}</p>
              ))}
            </div>

            <div className="hyatt-gallery">
              {GALLERY.map((item) => (
                <figure className="hyatt-gallery__item" key={item.alt}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.src} alt={item.alt} />
                </figure>
              ))}
            </div>
          </PageContainer>
        </section>

        <DeferredGetInTouchSection
          description="Let's discuss how Virtual Building Studio can support your next hospitality or architecture documentation project."
        />
      </main>

      <DeferredSiteFooter />
    </div>
  );
}
