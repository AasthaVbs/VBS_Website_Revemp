"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { PageContainer } from "@/components/layout/page-container";
import type { ResourceListingItem } from "@/constants/resources-page-content";
import type { WebinarDetail } from "@/lib/sanity-webinar";

import {
  WebinarCalendarIcon,
  WebinarClockIcon,
  WebinarLocationIcon,
} from "./webinar-event-detail-icons";
import { WebinarDetailSidebar } from "./webinar-detail-sidebar";
import { WebinarPortableText } from "./webinar-portable-text";

type WebinarDetailViewProps = {
  webinar: WebinarDetail;
  searchableWebinars?: ResourceListingItem[];
};

function formatEventDateParts(eventDate?: string | null) {
  if (!eventDate) {
    return { date: "—", time: "—" };
  }

  const rawDate = new Date(eventDate);
  if (Number.isNaN(rawDate.getTime())) {
    return { date: "—", time: "—" };
  }

  return {
    date: new Intl.DateTimeFormat("en-US", {
      timeZone: "America/Chicago",
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(rawDate),
    time: new Intl.DateTimeFormat("en-US", {
      timeZone: "America/Chicago",
      hour: "numeric",
      minute: "numeric",
      timeZoneName: "short",
    }).format(rawDate),
  };
}

export function WebinarDetailView({
  webinar,
  searchableWebinars = [],
}: WebinarDetailViewProps) {
  const [eventParts, setEventParts] = useState({ date: "—", time: "—" });
  const heroImage =
    webinar.bannerImage || webinar.youtubeThumbnail || webinar.upcomingImage || "";

  useEffect(() => {
    setEventParts(formatEventDateParts(webinar.eventDate));
  }, [webinar.eventDate]);

  return (
    <section className="vbs-webinar-detail">
      <PageContainer>
        <div className="vbs-webinar-detail__stack">
          <h1
            className="vbs-webinar-detail__title !text-[38px] !leading-[46px] !font-medium max-md:!text-[28px] max-md:!leading-[36px]"
            style={{ fontSize: 38, lineHeight: "46px", fontWeight: 500 }}
          >
            <WebinarPortableText value={webinar.rawTitle} variant="title" />
          </h1>

          <div className="vbs-webinar-detail__layout">
            <article className="vbs-webinar-detail__main">
              {heroImage ? (
                <div className="vbs-webinar-detail__hero">
                  <Image
                    src={heroImage}
                    alt={webinar.metaTitle}
                    fill
                    className="object-contain object-center"
                    priority
                    sizes="(max-width: 1024px) 100vw, 920px"
                  />
                </div>
              ) : null}

              <div className="vbs-webinar-detail__body">
                <div className="vbs-webinar-detail__content">
                  <WebinarPortableText value={webinar.rawBody} />
                </div>

                {webinar.speaker ? (
                  <div className="vbs-webinar-detail__speaker">
                    <h2 className="vbs-webinar-detail__section-title">
                      Meet the Speaker: {webinar.speaker.name}
                    </h2>
                    {webinar.speaker.rawDescription?.length ? (
                      <div className="vbs-webinar-detail__content">
                        <WebinarPortableText value={webinar.speaker.rawDescription} />
                      </div>
                    ) : null}
                  </div>
                ) : null}

                <div className="vbs-webinar-detail__event">
                  <h2 className="vbs-webinar-detail__section-title">Event Details</h2>
                  <div className="vbs-webinar-detail__event-grid">
                    <div className="vbs-webinar-detail__event-card">
                      <span className="vbs-webinar-detail__event-icon-wrap">
                        <WebinarCalendarIcon />
                      </span>
                      <span className="vbs-webinar-detail__event-label">{eventParts.date}</span>
                    </div>
                    <div className="vbs-webinar-detail__event-card">
                      <span className="vbs-webinar-detail__event-icon-wrap">
                        <WebinarClockIcon />
                      </span>
                      <span className="vbs-webinar-detail__event-label">{eventParts.time}</span>
                    </div>
                    <div className="vbs-webinar-detail__event-card">
                      <span className="vbs-webinar-detail__event-icon-wrap">
                        <WebinarLocationIcon />
                      </span>
                      <span className="vbs-webinar-detail__event-label">
                        {webinar.location}
                        {webinar.eventNote ? ` · ${webinar.eventNote}` : ""}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            <WebinarDetailSidebar
              webinar={webinar}
              searchableWebinars={searchableWebinars}
            />
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
