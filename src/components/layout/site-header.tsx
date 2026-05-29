"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Mail, Phone } from "lucide-react";

import { PageContainer } from "@/components/layout/page-container";
import { SiteNav } from "@/components/layout/site-nav";
import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";
import { cn } from "@/lib/utils";

const SCROLL_THRESHOLD = 60;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 bg-white">
        <div className="flex h-[10px] w-full">
          <div className="w-1/4 bg-vbs-red" />
          <div className="w-1/4 bg-vbs-green" />
          <div className="w-1/4 bg-vbs-blue" />
          <div className="w-1/4 bg-vbs-yellow" />
        </div>

        <div
          className={cn(
            "overflow-hidden border-b border-[#eee] transition-all duration-300 ease-out",
            scrolled ? "max-h-0 opacity-0" : "max-h-14 opacity-100",
          )}
          aria-hidden={scrolled}
        >
          <PageContainer className="flex justify-end gap-8 py-2 text-[16px] text-[#111111]">
            <span className="inline-flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-vbs-red" />
              contact@virtualbuildingstudio.com
            </span>
            <span className="inline-flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-vbs-red" />
              +1 (409) 800-6601
            </span>
          </PageContainer>
        </div>

        <div
          className={cn(
            "border-b border-[#eee] bg-white transition-shadow duration-300",
            scrolled && "shadow-[0_4px_20px_rgba(0,0,0,0.08)]",
          )}
        >
          <PageContainer className="flex items-center justify-between overflow-visible py-3">
            <Image src="/logos/logo.svg" alt="Virtual Building Studio" width={261} height={50} priority />
            <SiteNav />
            <PrimaryCtaButton fullWidth={false}>Inquire Now</PrimaryCtaButton>
          </PageContainer>
        </div>
      </header>

      {/* Spacer so page content is not hidden under fixed header */}
      <div
        className={cn(
          "pointer-events-none transition-[height] duration-300 ease-out",
          scrolled ? "h-[92px]" : "h-[132px]",
        )}
        aria-hidden
      />
    </>
  );
}
