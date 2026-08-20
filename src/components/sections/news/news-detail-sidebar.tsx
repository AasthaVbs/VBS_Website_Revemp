"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, Search } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

import { contactGetInTouchDetails } from "@/constants/contact-content";
import { ROUTES } from "@/constants/navigation";
import { thankYouSocialLinks } from "@/constants/thank-you-content";
import type { CatalogListingItem } from "@/lib/resource-catalog-types";

const HEADER_OFFSET = 112;
const BOTTOM_GAP = 24;

type NewsDetailSidebarProps = {
  searchableNews: CatalogListingItem[];
};

export function NewsDetailSidebar({ searchableNews }: NewsDetailSidebarProps) {
  const asideRef = useRef<HTMLElement>(null);
  const [query, setQuery] = useState("");

  const filteredNews = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return searchableNews.filter((item) => item.title.toLowerCase().includes(q)).slice(0, 6);
  }, [query, searchableNews]);

  useEffect(() => {
    const aside = asideRef.current;
    if (!aside) return;

    const updateStickyTop = () => {
      if (window.innerWidth < 1024) {
        aside.style.removeProperty("--vbs-news-aside-top");
        return;
      }

      const top = Math.min(HEADER_OFFSET, window.innerHeight - aside.offsetHeight - BOTTOM_GAP);
      aside.style.setProperty("--vbs-news-aside-top", `${top}px`);
    };

    updateStickyTop();
    const resizeObserver = new ResizeObserver(updateStickyTop);
    resizeObserver.observe(aside);
    window.addEventListener("resize", updateStickyTop);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateStickyTop);
    };
  }, [filteredNews.length]);

  return (
    <aside ref={asideRef} className="vbs-news-detail__aside">
      <div className="vbs-news-detail__sidebar-card">
        <div className="vbs-news-detail__sidebar-top">
          <Link href={ROUTES.news} className="vbs-news-detail__back-link">
            Go back To News & Updates
          </Link>

          <label className="vbs-news-detail__search">
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search Here ..."
              className="vbs-news-detail__search-input"
            />
            <Search className="vbs-news-detail__search-icon" strokeWidth={1.2} aria-hidden />
          </label>

          {filteredNews.length > 0 ? (
            <nav className="vbs-news-detail__search-results" aria-label="Matching news">
              {filteredNews.map((item) => (
                <Link key={item.id} href={item.href} className="vbs-news-detail__search-result">
                  {item.title}
                </Link>
              ))}
            </nav>
          ) : null}
        </div>

        <div className="vbs-news-detail__connect-card">
          <div className="vbs-news-detail__connect-copy">
            <h2 className="vbs-news-detail__connect-title">Stay Connected with Us</h2>
            <p className="vbs-news-detail__connect-desc">
              Learn more about our services and understand how our experts can help manage the
              business effectively
            </p>
          </div>
          <div className="vbs-news-detail__connect-links">
            <a href={contactGetInTouchDetails.phoneHref} className="vbs-news-detail__connect-link">
              <Phone className="vbs-news-detail__connect-icon" strokeWidth={1.2} aria-hidden />
              {contactGetInTouchDetails.phone}
            </a>
            <a href={contactGetInTouchDetails.emailHref} className="vbs-news-detail__connect-link">
              <Mail className="vbs-news-detail__connect-icon" strokeWidth={1.2} aria-hidden />
              {contactGetInTouchDetails.email}
            </a>
          </div>
        </div>

        <div className="vbs-news-detail__social-card">
          <div className="vbs-news-detail__connect-copy">
            <h2 className="vbs-news-detail__connect-title">Engage with us on</h2>
            <p className="vbs-news-detail__connect-desc">
              Follow our blog for industry trends and the latest updates.
            </p>
          </div>
          <div className="vbs-news-detail__socials">
            {thankYouSocialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="vbs-news-detail__social"
                aria-label={social.label}
              >
                <Image src={social.icon} alt="" width={20} height={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
