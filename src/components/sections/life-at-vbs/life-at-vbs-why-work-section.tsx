import Link from "next/link";

import { PageContainer } from "@/components/layout/page-container";
import { SectionTag } from "@/components/sections/section-primitives";
import {
  lifeAtVbsGalleryTiles,
  lifeAtVbsWhyWorkCopy,
  type LifeAtVbsGalleryTile,
} from "@/constants/life-at-vbs-content";

function GalleryTile({ tile }: { tile: LifeAtVbsGalleryTile }) {
  return (
    <div
      className={[
        "vbs-life-at-vbs-gallery__tile",
        tile.size === "wide" ? "vbs-life-at-vbs-gallery__tile--wide" : "",
        tile.size === "tall" ? "vbs-life-at-vbs-gallery__tile--tall" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={tile.src}
        alt={tile.alt}
        loading="lazy"
        decoding="async"
        style={tile.objectPosition ? { objectPosition: tile.objectPosition } : undefined}
      />
    </div>
  );
}

function GalleryStrip({
  tiles,
  className,
  ariaHidden,
}: {
  tiles: LifeAtVbsGalleryTile[];
  className: string;
  ariaHidden?: boolean;
}) {
  return (
    <div className={className} aria-hidden={ariaHidden || undefined}>
      {tiles.map((tile, index) => (
        <GalleryTile key={`${tile.id}-${index}`} tile={tile} />
      ))}
    </div>
  );
}

export function LifeAtVbsWhyWorkSection() {
  const { tag, titleLead, titleAccent, description, ctaLabel, ctaHref } = lifeAtVbsWhyWorkCopy;

  return (
    <section className="vbs-life-at-vbs-section vbs-life-at-vbs-section--why bg-white">
      <PageContainer className="vbs-life-at-vbs-section__inner">
        <div className="vbs-life-at-vbs-section__header">
          <div className="vbs-life-at-vbs-section__title-block">
            <SectionTag label={tag} className="self-center" />
            <h2 className="vbs-life-at-vbs-section__title">
              {titleLead}
              <span className="vbs-life-at-vbs-section__title-accent">{titleAccent}</span>
            </h2>
          </div>
          <p className="vbs-life-at-vbs-section__desc">{description}</p>
        </div>
      </PageContainer>

      <div className="vbs-life-at-vbs-gallery__bleed" aria-label="Team photo gallery">
        <div className="vbs-life-at-vbs-gallery__viewport">
          <div className="vbs-life-at-vbs-gallery__marquee">
            <GalleryStrip tiles={lifeAtVbsGalleryTiles} className="vbs-life-at-vbs-gallery" />
            <GalleryStrip
              tiles={lifeAtVbsGalleryTiles}
              className="vbs-life-at-vbs-gallery"
              ariaHidden
            />
          </div>
        </div>
      </div>

      <PageContainer className="vbs-life-at-vbs-section__cta-wrap">
        <Link
          href={ctaHref}
          className="primary-cta relative inline-flex h-[52px] w-auto shrink-0 items-center justify-center overflow-hidden rounded-[10px] border-[1.5px] border-[#D70416] bg-white/10 px-5 py-0 text-[16px] font-medium capitalize leading-none text-[#D70416] no-underline shadow-none backdrop-blur-[100px] transition-colors"
        >
          <span className="primary-cta-blobs" aria-hidden>
            <span className="primary-cta-blob primary-cta-blob--yellow" />
            <span className="primary-cta-blob primary-cta-blob--blue" />
            <span className="primary-cta-blob primary-cta-blob--green" />
            <span className="primary-cta-blob primary-cta-blob--red" />
          </span>
          <span className="primary-cta-label relative z-10">{ctaLabel}</span>
        </Link>
      </PageContainer>
    </section>
  );
}
