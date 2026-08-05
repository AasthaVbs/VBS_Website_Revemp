"use client";

import { useEffect, useRef } from "react";

import { SiteHeader } from "@/components/layout/site-header";
import { DeferredSiteFooter } from "@/lib/lazy-page-sections";
import { SixtyMinutesTeamImmersive } from "@/components/sixty-minutes-team/sixty-minutes-team-immersive";

import "@/styles/vbs-inter.css";
import "@/styles/vbs-build-your-team-supplement.scss";

function syncHeaderOffset(rootEl: HTMLElement) {
  const header = document.querySelector(".vbs-site-header");
  if (!header || !rootEl) return;

  const height = Math.max(56, Math.ceil(header.getBoundingClientRect().height) - 6);
  if (height > 0) {
    rootEl.style.setProperty("--byt-legacy-header-offset", `${height}px`);
  }
}

/**
 * 60-minutes-team wizard page (SiteHeader + immersive + SiteFooter).
 */
export function SixtyMinutesTeamPage({ hideQuickSubmit = false }: { hideQuickSubmit?: boolean }) {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const rootEl = rootRef.current;
    if (!rootEl) return undefined;

    const sync = () => syncHeaderOffset(rootEl);
    sync();

    const header = document.querySelector(".vbs-site-header");
    const observer =
      header && typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(sync)
        : null;
    if (header) observer?.observe(header);

    window.addEventListener("resize", sync);
    window.addEventListener("scroll", sync, { passive: true });
    return () => {
      observer?.disconnect();
      window.removeEventListener("resize", sync);
      window.removeEventListener("scroll", sync);
    };
  }, []);

  return (
    <div ref={rootRef} className="vbs-redesign-page sixty-minutes-team-page overflow-x-hidden bg-white">
      <SiteHeader />
      <main className="byt-v3-main">
        <SixtyMinutesTeamImmersive hideQuickSubmit={hideQuickSubmit} />
      </main>
      <DeferredSiteFooter />
    </div>
  );
}
