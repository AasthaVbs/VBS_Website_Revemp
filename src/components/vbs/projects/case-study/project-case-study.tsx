"use client";
// @ts-nocheck

import React, { Fragment, useEffect, useMemo, useState } from "react";
import Image from "next/image";

import { PageContainer } from "@/components/layout/page-container";
import { MepSectionTag } from "@/components/sections/mep/mep-section-tag";
import { MepWorkflowSection } from "@/components/sections/mep/figma/mep-workflow-figma-section";
import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";
import { ensureNimbusBookingScript, openBookMeetingModal } from "@/utils/nimbus-booking";
import { benefitIconColored, benefitIconMuted } from "@/constants/benefit-icons";

import type { CaseImage, ProjectCaseStudyContent } from "./types";

const PAIN_COLORS = ["#D70416", "#42AA32", "#2299D6", "#F0B300"];

function resolveIconSrc(icon) {
  if (!icon) return "";
  return typeof icon === "string" ? icon : icon.src;
}

function chunkRows(items, size) {
  const rows = [];
  for (let i = 0; i < items.length; i += size) {
    rows.push(items.slice(i, i + size));
  }
  return rows;
}

/** Row sizes by item count: 3→1×3, 4→2×2, 5→3+2, 6+→rows of 3 */
function getSplitGridRowSizes(count) {
  if (count <= 0) return [];
  if (count === 1) return [1];
  if (count === 2) return [2];
  if (count === 3) return [3];
  if (count === 4) return [2, 2];
  if (count === 5) return [3, 2];

  const sizes = [];
  let remaining = count;
  while (remaining > 0) {
    const size = Math.min(3, remaining);
    sizes.push(size);
    remaining -= size;
  }
  return sizes;
}

function chunkRowsBySizes(items, sizes) {
  const rows = [];
  let offset = 0;
  for (const size of sizes) {
    rows.push(items.slice(offset, offset + size));
    offset += size;
  }
  return rows;
}

const ChevronIcon = ({ left = false }) => (
  <svg viewBox="0 0 24 24" aria-hidden>
    {left ? <polyline points="15 18 9 12 15 6" /> : <polyline points="9 18 15 12 9 6" />}
  </svg>
);

function IoGallery({
  images,
  activeIndex,
  onSelect,
  onOpen,
}: {
  images: CaseImage[];
  activeIndex: number;
  onSelect: (index: number) => void;
  onOpen: () => void;
}) {
  const prev = () => onSelect((activeIndex - 1 + images.length) % images.length);
  const next = () => onSelect((activeIndex + 1) % images.length);
  const active = images[activeIndex] ?? images[0];

  return (
    <div className="lv-case-io__gallery">
      <div
        className="lv-case-io__main"
        onClick={onOpen}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") onOpen();
        }}
        role="button"
        tabIndex={0}
      >
        <img src={active.src} alt={active.label} />
        <div className="lv-case-io__nav">
          <button
            type="button"
            className="lv-case-io__nav-btn"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
          >
            <ChevronIcon left />
          </button>
          <button
            type="button"
            className="lv-case-io__nav-btn"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
          >
            <ChevronIcon />
          </button>
        </div>
      </div>
      <div
        className={`lv-case-io__thumbs${images.length === 1 ? " lv-case-io__thumbs--single" : ""}`}
      >
        {images.map((img, idx) => (
          <button
            key={img.label}
            type="button"
            className={`lv-case-io__thumb${idx === activeIndex ? " is-active" : ""}`}
            onClick={() => onSelect(idx)}
            aria-label={img.label}
          >
            <img src={img.src} alt={img.label} />
          </button>
        ))}
      </div>
    </div>
  );
}

function BenefitCard({ title, text }: { title: string; text: string }) {
  return (
    <article className="lv-case-approach__card">
      <div className="lv-case-approach__card-top">
        <span className="lv-case-approach__icon-wrap">
          <img
            className="lv-case-approach__icon lv-case-approach__icon--muted"
            src={resolveIconSrc(benefitIconMuted)}
            alt=""
            decoding="async"
          />
          <img
            className="lv-case-approach__icon lv-case-approach__icon--colored"
            src={resolveIconSrc(benefitIconColored)}
            alt=""
            decoding="async"
            aria-hidden
          />
        </span>
        <h3 className="lv-case-approach__card-title">{title}</h3>
      </div>
      <p className="lv-case__body">{text}</p>
    </article>
  );
}

function SplitGrid({
  items,
  renderCard,
}: {
  items: { title: string }[];
  renderCard: (item: any, index: number) => React.ReactNode;
}) {
  const rowSizes = getSplitGridRowSizes(items.length);
  const rows = chunkRowsBySizes(items, rowSizes);
  const maxCols = Math.max(0, ...rowSizes);
  const gridMod =
    maxCols >= 3
      ? " lv-case-split-grid--three"
      : maxCols === 2
        ? " lv-case-split-grid--two"
        : "";

  return (
    <div className={`lv-case-split-grid${gridMod}`}>
      {rows.map((row, rowIndex) => {
        const start = rowSizes.slice(0, rowIndex).reduce((sum, n) => sum + n, 0);
        return (
          <div key={start}>
            {rowIndex > 0 ? <div className="lv-case-split-grid__hline" aria-hidden /> : null}
            <div
              className={`lv-case-split-grid__row lv-case-split-grid__row--cols-${row.length}`}
            >
              {row.map((item, idx) => (
                <Fragment key={item.title}>
                  {idx > 0 ? <div className="lv-case-split-grid__vline" aria-hidden /> : null}
                  {renderCard(item, start + idx)}
                </Fragment>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function ProjectCaseStudy({ content }: { content: ProjectCaseStudyContent }) {
  const {
    hero,
    overview,
    tools,
    io,
    pain,
    approach,
    execution,
    outcomes,
  } = content;

  const [inputIndex, setInputIndex] = useState(0);
  const [outputIndex, setOutputIndex] = useState(0);
  const [modalType, setModalType] = useState(null);
  const [modalIndex, setModalIndex] = useState(0);

  const modalImages = useMemo(
    () => (modalType === "input" ? io.inputImages : io.outputImages),
    [modalType, io.inputImages, io.outputImages],
  );

  useEffect(() => {
    ensureNimbusBookingScript().catch(() => {});
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (!modalType) return;
      if (e.key === "Escape") setModalType(null);
      if (e.key === "ArrowRight") setModalIndex((prev) => (prev + 1) % modalImages.length);
      if (e.key === "ArrowLeft") {
        setModalIndex((prev) => (prev - 1 + modalImages.length) % modalImages.length);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [modalType, modalImages.length]);

  const openModal = (type, index = 0) => {
    setModalType(type);
    setModalIndex(index);
  };

  const renderQuoteCta = () => (
    <PrimaryCtaButton fullWidth={false} onClick={openBookMeetingModal}>
      Get A Free Quote
    </PrimaryCtaButton>
  );

  return (
    <main className="lv-case">
      <section className="lv-case-hero">
        <PageContainer>
          <div className="lv-case-hero__row">
            <div className="lv-case-hero__copy">
              <div className="lv-case-hero__text">
                <div className="lv-case-hero__heading">
                  <MepSectionTag label={hero.tag} />
                  <h1 className="lv-case__title lv-case-hero__title">
                    <span className="lv-case__title-lead">{hero.titleLead}</span>
                    <span className="lv-case__title-accent">{hero.titleAccent}</span>
                  </h1>
                </div>
                <p className="lv-case__body lv-case-hero__desc">{hero.description}</p>
              </div>
              {renderQuoteCta()}
            </div>
            <div className="lv-case-hero__media">
              <img src={hero.image} alt={hero.imageAlt} />
            </div>
          </div>
        </PageContainer>
      </section>

      <section className="lv-case-overview">
        <PageContainer>
          <div className="lv-case-overview__row">
            <div className="lv-case-overview__media">
              <img src={overview.image} alt={overview.imageAlt} />
            </div>
            <div className="lv-case-overview__content">
              <div className="lv-case-overview__heading">
                <MepSectionTag label="Overview" />
                <h2 className="lv-case__title">
                  <span className="lv-case__title-lead">Project </span>
                  <span className="lv-case__title-accent">Overview</span>
                </h2>
              </div>
              {overview.paragraphs.map((paragraph) => (
                <p className="lv-case__body" key={paragraph.slice(0, 48)}>
                  {paragraph}
                </p>
              ))}
              <div className="lv-case-overview__chips">
                {overview.chips.map((chip) => (
                  <div className="lv-case-chip" key={chip.label}>
                    <span className="lv-case-chip__icon">
                      <Image src={chip.icon} alt="" width={22} height={22} />
                    </span>
                    <span className="lv-case-chip__label">{chip.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

      {tools.items.length > 0 ? (
        <section className="lv-case-tools">
          <PageContainer>
            <div className="lv-case-tools__row">
              <div className="lv-case-tools__copy">
                <div className="lv-case-tools__heading">
                  <MepSectionTag label="Tools We Use" />
                  <h2 className="lv-case__title">
                    <span className="lv-case__title-lead">Inside </span>
                    <span className="lv-case__title-accent">the Tools</span>
                    <span className="lv-case__title-lead"> You Already Use</span>
                  </h2>
                </div>
                <p className="lv-case__body">{tools.description}</p>
              </div>
              <div className="lv-case-tools__marquee" aria-label="Tools used">
                <div className="lv-case-tools__track">
                  {[0, 1].map((setIndex) => (
                    <div
                      className="lv-case-tools__set"
                      key={setIndex}
                      aria-hidden={setIndex === 1}
                    >
                      {tools.items.map((tool) => (
                        <div
                          className={`lv-case-tools__item ${tool.className ?? ""}`.trim()}
                          key={`${tool.name}-${setIndex}`}
                        >
                          <img src={tool.icon} alt={setIndex === 0 ? tool.name : ""} />
                          <span className="lv-case-tools__name">{tool.name}</span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </PageContainer>
        </section>
      ) : null}

      <section className="lv-case-io">
        <PageContainer>
          <div className="lv-case-io__inner">
            <div className="lv-case-io__header">
              <div className="lv-case-io__heading">
                <MepSectionTag label="Project Deliverables" />
                <h2 className="lv-case__title">
                  <span className="lv-case__title-lead">Input vs </span>
                  <span className="lv-case__title-accent">Output</span>
                </h2>
              </div>
              <p className="lv-case__body lv-case-io__desc">{io.description}</p>
            </div>

            <div className="lv-case-io__grid">
              <div className="lv-case-io__col">
                <h3 className="lv-case__h3">What We Received</h3>
                <IoGallery
                  images={io.inputImages}
                  activeIndex={inputIndex}
                  onSelect={setInputIndex}
                  onOpen={() => openModal("input", inputIndex)}
                />
                <ul className="lv-case-io__list">
                  {io.inputPoints.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>

              <div className="lv-case-io__col">
                <h3 className="lv-case__h3">What We Delivered</h3>
                <IoGallery
                  images={io.outputImages}
                  activeIndex={outputIndex}
                  onSelect={setOutputIndex}
                  onOpen={() => openModal("output", outputIndex)}
                />
                <ul className="lv-case-io__list">
                  {io.outputPoints.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>

            {renderQuoteCta()}
          </div>
        </PageContainer>
      </section>

      {pain.items.length > 0 ? (
        <section className="lv-case-pain">
          <PageContainer>
            <div className="lv-case-pain__header">
              <div className="lv-case-pain__heading">
                <MepSectionTag label="Client Challenges" />
                <h2 className="lv-case__title">
                  <span className="lv-case__title-lead">Pain Points of </span>
                  <span className="lv-case__title-accent">the Client</span>
                </h2>
              </div>
              <p className="lv-case__body">{pain.description}</p>
            </div>

            <SplitGrid
              items={pain.items}
              renderCard={(item, index) => (
                <div
                  className="lv-case-pain__card"
                  style={{ ["--pain-zero"]: item.zeroColor ?? PAIN_COLORS[index % PAIN_COLORS.length] }}
                >
                  <div className="lv-case-pain__card-top">
                    <div className="lv-case-pain__num">
                      <span className="lv-case-pain__num-zero">0</span>
                      <span className="lv-case-pain__num-digit">{index + 1}</span>
                    </div>
                    <h3 className="lv-case-pain__card-title">{item.title}</h3>
                  </div>
                  <p className="lv-case__body">{item.text}</p>
                </div>
              )}
            />
          </PageContainer>
        </section>
      ) : null}

      {approach.items.length > 0 ? (
        <section className="lv-case-approach">
          <PageContainer>
            <div className="lv-case-approach__header">
              <div className="lv-case-approach__heading">
                <MepSectionTag label="Our Approach" />
                <h2 className="lv-case__title">
                  <span className="lv-case__title-lead">How We </span>
                  <span className="lv-case__title-accent">Solved It</span>
                </h2>
              </div>
              <p className="lv-case__body">{approach.description}</p>
            </div>

            <SplitGrid
              items={approach.items}
              renderCard={(item) => <BenefitCard title={item.title} text={item.text} />}
            />
          </PageContainer>
        </section>
      ) : null}

      {execution.steps.length > 0 ? (
        <MepWorkflowSection
          id="execution-strategy"
          section={{
            tag: execution.tag,
            titleLine1: execution.titleLine1,
            titleLine2: execution.titleLine2,
            description: execution.description,
          }}
          steps={execution.steps}
        />
      ) : null}

      {outcomes.items.length > 0 ? (
        <section className="lv-case-outcomes">
          <PageContainer>
            <div className="lv-case-outcomes__header">
              <div className="lv-case-outcomes__heading">
                <MepSectionTag label="Project Outcomes" />
                <h2 className="lv-case__title">
                  <span className="lv-case__title-lead">Coordinated. Approved. </span>
                  <span className="lv-case__title-accent">Delivered.</span>
                </h2>
              </div>
              <p className="lv-case__body lv-case-outcomes__desc">{outcomes.description}</p>
            </div>

            <SplitGrid
              items={outcomes.items}
              renderCard={(item) => <BenefitCard title={item.title} text={item.text} />}
            />
          </PageContainer>
        </section>
      ) : null}

      {modalType && (
        <div className="lv-case-modal" onClick={() => setModalType(null)}>
          <div className="lv-case-modal__box" onClick={(e) => e.stopPropagation()}>
            <div className="lv-case-modal__head">
              <button
                type="button"
                className="lv-case-modal__close"
                onClick={() => setModalType(null)}
                aria-label="Close"
              >
                ×
              </button>
            </div>
            <div className="lv-case-modal__main">
              <button
                type="button"
                className="lv-case-modal__arrow lv-case-modal__arrow--left"
                onClick={() =>
                  setModalIndex((prev) => (prev - 1 + modalImages.length) % modalImages.length)
                }
                aria-label="Previous"
              >
                ‹
              </button>
              <img src={modalImages[modalIndex]?.src} alt="Preview" />
              <button
                type="button"
                className="lv-case-modal__arrow lv-case-modal__arrow--right"
                onClick={() => setModalIndex((prev) => (prev + 1) % modalImages.length)}
                aria-label="Next"
              >
                ›
              </button>
            </div>
            <div className="lv-case-modal__thumbs">
              {modalImages.map((img, idx) => (
                <button
                  key={img.label}
                  type="button"
                  className={`lv-case-modal__thumb${idx === modalIndex ? " is-active" : ""}`}
                  onClick={() => setModalIndex(idx)}
                >
                  <img src={img.src} alt={img.label} />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export { resolveIconSrc };
