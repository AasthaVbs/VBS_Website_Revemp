"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { usePathname } from "next/navigation";

import { PageContainer } from "@/components/layout/page-container";
import { SiteHeaderDesktopNav } from "@/components/layout/site-header-desktop-nav";
import { SiteMobileNav } from "@/components/layout/site-mobile-nav";
import { BookMeetingButton } from "@/components/ui/book-meeting-button";
import { VbsLink } from "@/components/ui/vbs-link";
import { cn } from "@/lib/utils";

const SCROLL_THRESHOLD = 60;

function MailIcon() {
  return (
    <svg className="h-4 w-4 shrink-0 text-vbs-red" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 6h16v12H4V6zm0 0l8 6 8-6"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="h-4 w-4 shrink-0 text-vbs-red" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [headerOffset, setHeaderOffset] = useState("132px");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  useEffect(() => {
    const updateOffset = () => {
      const headerEl = headerRef.current;
      const mainEl = headerEl?.querySelector(".vbs-header-main");
      const isMobileLayout = window.matchMedia("(max-width: 1023px)").matches;

      const nextOffset = isMobileLayout ? "72px" : scrolled ? "92px" : "132px";

      setHeaderOffset(nextOffset);
      document.documentElement.style.setProperty("--vbs-header-offset", nextOffset);

      if (headerEl && mainEl) {
        const mainBottom = Math.round(mainEl.getBoundingClientRect().bottom);
        headerEl.style.setProperty("--vbs-mega-menu-top", `${mainBottom}px`);
        headerEl.style.setProperty("--vbs-mega-menu-lift", "13px");
      }
    };

    updateOffset();

    const rafId = window.requestAnimationFrame(updateOffset);
    const transitionTimer = window.setTimeout(updateOffset, 320);

    window.addEventListener("scroll", updateOffset, { passive: true });
    window.addEventListener("resize", updateOffset, { passive: true });

    const resizeObserver = new ResizeObserver(updateOffset);
    const mainEl = headerRef.current?.querySelector(".vbs-header-main");
    const stripEl = headerRef.current?.querySelector(".vbs-header-top-strip");
    if (mainEl) resizeObserver.observe(mainEl);
    if (stripEl) resizeObserver.observe(stripEl);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.clearTimeout(transitionTimer);
      window.removeEventListener("scroll", updateOffset);
      window.removeEventListener("resize", updateOffset);
      resizeObserver.disconnect();
      document.documentElement.style.removeProperty("--vbs-header-offset");
    };
  }, [scrolled]);

  return (
    <>
      <header
        ref={headerRef}
        className="vbs-site-header fixed left-0 right-0 top-0 z-50 bg-white"
        style={{ "--vbs-header-offset": headerOffset } as CSSProperties}
      >
        <div className="vbs-header-bar" aria-hidden>
          <span className="vbs-header-bar-red" />
          <span className="vbs-header-bar-green" />
          <span className="vbs-header-bar-yellow" />
          <span className="vbs-header-bar-blue" />
        </div>

        <div
          className={cn("vbs-header-top-strip", scrolled && "is-collapsed")}
          aria-hidden={scrolled}
        >
          <PageContainer>
            <div className="vbs-header-top-inner">
              <a href="mailto:contact@virtualbuildingstudio.com" className="vbs-header-contact-item">
                <MailIcon />
                contact@virtualbuildingstudio.com
              </a>
              <a href="tel:+14098006601" className="vbs-header-contact-item">
                <PhoneIcon />
                +1 (409) 800-6601
              </a>
            </div>
          </PageContainer>
        </div>

        <div className={cn("vbs-header-main", scrolled && "is-scrolled")}>
          <PageContainer>
            <div className="vbs-header-main-inner">
              <VbsLink href="/" className="vbs-header-logo shrink-0" aria-label="Virtual Building Studio">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/vbs-logo.svg" alt="Virtual Building Studio" width={261} height={50} />
              </VbsLink>

              <button
                type="button"
                className={cn("vbs-header-menu-btn", mobileOpen && "is-open")}
                aria-expanded={mobileOpen}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                onClick={() => setMobileOpen((value) => !value)}
              >
                <span />
                <span />
                <span />
              </button>

              <SiteHeaderDesktopNav />

              <div className="vbs-header-desktop-cta hidden shrink-0 lg:block">
                <BookMeetingButton
                  fullWidth={false}
                  className="vbs-header-book-cta primary-cta--highlighted"
                />
              </div>
            </div>
          </PageContainer>
        </div>

        <SiteMobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
      </header>

      <div className={cn("vbs-header-spacer", scrolled && "is-scrolled")} aria-hidden />
    </>
  );
}
