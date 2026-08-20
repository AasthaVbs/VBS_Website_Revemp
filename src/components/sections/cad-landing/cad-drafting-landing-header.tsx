"use client";

import React, { useEffect, useRef, useState } from "react";
import { BookMeetingButton } from "@/components/ui/book-meeting-button";
import { VbsLink } from "@/components/ui/vbs-link";
import { handleInPageHashClick, scrollToPageSection } from "@/hooks/scrollToPageSection";
import { cadDraftingLandingNavLinks } from "@/constants/cad-drafting-landing-content";

export function CadDraftingLandingHeader({
  navLinks = cadDraftingLandingNavLinks,
  navAriaLabel = "CAD drafting landing page",
}) {
  const headerRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState(navLinks[0]?.href ?? "#services");

  useEffect(() => {
    if (typeof window === "undefined" || !window.location.hash) return;

    const hash = window.location.hash;
    scrollToPageSection(hash, { behavior: "auto", updateHash: true });
    setActiveHref(hash);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const updateOffset = () => {
      const height = headerRef.current?.offsetHeight ?? 80;
      document.documentElement.style.setProperty("--cad-landing-header-offset", `${height}px`);
    };

    updateOffset();
    window.addEventListener("resize", updateOffset, { passive: true });

    const resizeObserver = new ResizeObserver(updateOffset);
    if (headerRef.current) {
      resizeObserver.observe(headerRef.current);
    }

    return () => {
      window.removeEventListener("resize", updateOffset);
      resizeObserver.disconnect();
      document.documentElement.style.removeProperty("--cad-landing-header-offset");
    };
  }, []);

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false);
    window.addEventListener("resize", closeMenu, { passive: true });
    return () => window.removeEventListener("resize", closeMenu);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks
      .map((link) => link.href.replace("#", ""))
      .filter(Boolean);
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);

    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target?.id) {
          setActiveHref(`#${visible[0].target.id}`);
        }
      },
      { rootMargin: "-140px 0px -45% 0px", threshold: [0.1, 0.35, 0.6] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [navLinks]);

  const handleNavClick = (event, href) => {
    handleInPageHashClick(
      event,
      href,
      () => {
        setActiveHref(href);
        setMenuOpen(false);
      },
      { updateHash: true },
    );
  };

  const handleBookMeetingAfterClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header
        ref={headerRef}
        className={[
          "cad-landing-header",
          scrolled ? "cad-landing-header--scrolled" : "",
          menuOpen ? "cad-landing-header--menu-open" : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <div className="cad-landing-header-bar" aria-hidden>
          <span className="cad-landing-header-bar-red" />
          <span className="cad-landing-header-bar-green" />
          <span className="cad-landing-header-bar-yellow" />
          <span className="cad-landing-header-bar-blue" />
        </div>

        <div className="cad-landing-header-inner">
          <VbsLink to="/" className="cad-landing-header-logo" aria-label="Virtual Building Studio home">
            <img src="/vbs-logo.svg" alt="Virtual Building Studio" width={261} height={50} decoding="async" />
          </VbsLink>

          <nav
            id="cad-landing-header-nav"
            className={`cad-landing-header-nav${menuOpen ? " cad-landing-header-nav--open" : ""}`}
            aria-label={navAriaLabel}
          >
            <div className="cad-landing-header-links">
              {navLinks.map((link) => {
                const isActive = activeHref === link.href;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`cad-landing-header-link${isActive ? " cad-landing-header-link--active" : ""}`}
                    onClick={(event) => handleNavClick(event, link.href)}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>
          </nav>

          <BookMeetingButton
            fullWidth={false}
            className="cad-landing-header-cta cad-landing-header-cta--bar"
            onAfterClick={handleBookMeetingAfterClick}
          />

          <button
            type="button"
            className="cad-landing-header-toggle"
            aria-expanded={menuOpen}
            aria-controls="cad-landing-header-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="sr-only">Toggle navigation</span>
            <span aria-hidden />
            <span aria-hidden />
            <span aria-hidden />
          </button>
        </div>
      </header>

      {menuOpen ? (
        <button
          type="button"
          className="cad-landing-header-backdrop"
          aria-label="Close navigation menu"
          onClick={() => setMenuOpen(false)}
        />
      ) : null}
    </>
  );
}
