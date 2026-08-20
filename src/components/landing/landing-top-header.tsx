"use client";

import Link from "next/link";
import { Image } from "react-bootstrap";

import { PageContainer } from "@/components/layout/page-container";
import { cn } from "@/lib/utils";

import "@/styles/landing-top-header.scss";

type LandingTopHeaderProps = {
  /** Override content max-width (px). Defaults to global --vbs-page-max. */
  maxWidth?: number;
  /** Pin header to top of viewport (same behavior as global SiteHeader). */
  fixed?: boolean;
};

export function LandingTopHeader({ maxWidth, fixed = false }: LandingTopHeaderProps = {}) {
  return (
    <>
      <header className={cn("landing-top-header", fixed && "landing-top-header--fixed")}>
        <PageContainer
          className="landing-top-header-inner"
          style={maxWidth ? { maxWidth } : undefined}
        >
          <Link href="/" className="landing-top-header-logo" aria-label="Virtual Building Studio home">
            <Image src="/vbs-logo.svg" width={260} height={50} alt="Virtual Building Studio" />
          </Link>
          <div className="landing-top-header-contact">
            <a className="landing-top-header-link" href="mailto:contact@virtualbuildingstudio.com">
              <svg
                className="landing-top-header-icon"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                focusable="false"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
              contact@virtualbuildingstudio.com
            </a>
            <a className="landing-top-header-link" href="tel:+14098006601">
              <svg
                className="landing-top-header-icon"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.84 19.84 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.84 19.84 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.34 1.78.64 2.62a2 2 0 0 1-.45 2.11L8.1 9.65a16 16 0 0 0 6.25 6.25l1.2-1.2a2 2 0 0 1 2.11-.45c.84.3 1.72.52 2.62.64A2 2 0 0 1 22 16.92z" />
              </svg>
              +1 (409) 800-6601
            </a>
          </div>
        </PageContainer>
      </header>
      {fixed ? <div className="landing-top-header-spacer" aria-hidden="true" /> : null}
    </>
  );
}

export default LandingTopHeader;
