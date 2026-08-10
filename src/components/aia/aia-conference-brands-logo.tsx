"use client";

import Link from "next/link";
import type { MouseEvent, SyntheticEvent } from "react";

const logoItems = [
  {
    href: "/projects",
    src: "/icon/tesla.png",
    alt: "Tesla",
  },
  {
    href: "/projects",
    src: "/icon/aecom.png",
    alt: "AECOM",
  },
  {
    href: "/projects/data-center-bim-mep-coordination-malaysia",
    src: "/icon/sunway.png",
    alt: "Sunway Construction",
  },
  {
    href: "/",
    src: "/icon/jacobs.png",
    alt: "Jacobs",
  },
];

const BTN_CLASS =
  "btn btn-lightblue text-white text-uppercase px-lg-4 py-2 rounded-pill fs-4 fw-semibold";

type AiaConferenceBrandsLogoProps = {
  onScheduleMeeting?: (event?: MouseEvent | SyntheticEvent) => void;
};

export function AiaConferenceBrandsLogo({ onScheduleMeeting }: AiaConferenceBrandsLogoProps) {
  const marqueeLogos = [...logoItems, ...logoItems];

  return (
    <section className="logo-marquee-section">
      <div className="aia-proof-shell pb-5">
        <div className="aia-proof-heading-wrap">
          <h2 className="aia-proof-topline mb-1 mt-6">
            Working With <span className="highlight-text">Architecture & Engineering Firms</span>{" "}
          </h2>
        </div>

        <div className="logo-marquee mx-auto py-4">
          <div className="logo-marquee-track">
            {marqueeLogos.map((logo, index) => (
              <div className="logo-item text-center" key={`${logo.alt}-${index}`}>
                <Link className="fs-5 fw-semibold logo-effect d-inline-block" href={logo.href}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    width={142}
                    height={50}
                    className="img-fluid logo-gray"
                    loading="lazy"
                    decoding="async"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="aia-proof-bottom-wrap mt-4">
          <p className="mb-0 aia-proof-bottomline">
            Architecture · MEP · Scan to BIM - delivered through a single Global Delivery Infrastructure
            for AEC firms.
          </p>
          <div className="text-center mt-6">
            <button type="button" className={BTN_CLASS} onClick={onScheduleMeeting}>
              Book a Slot - Schedule a Meeting
              <i className="icon ms-2 fa fa-lg fa-long-arrow-alt-right" aria-hidden="true" />
            </button>
          </div>
          <p
            className="text-center mt-2 mb-0"
            style={{
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#D70416",
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: "32px",
                height: "2px",
                background: "#D70416",
                marginRight: "12px",
                verticalAlign: "middle",
              }}
            />
            At AIA 2026
          </p>
        </div>
      </div>
    </section>
  );
}
