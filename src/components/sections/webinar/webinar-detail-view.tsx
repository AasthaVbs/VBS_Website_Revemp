"use client";

import { useEffect, useState } from "react";

import type { WebinarDetail } from "@/lib/sanity-webinar";

import { WebinarPortableText } from "./webinar-portable-text";
import { WebinarSidebarMedia } from "./webinar-sidebar-media";

type WebinarDetailViewProps = {
  webinar: WebinarDetail;
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

export function WebinarDetailView({ webinar }: WebinarDetailViewProps) {
  const [eventParts, setEventParts] = useState({ date: "—", time: "—" });

  useEffect(() => {
    setEventParts(formatEventDateParts(webinar.eventDate));
  }, [webinar.eventDate]);

  return (
    <main className="webinar-section webinar-detail-page">
      <section className="mt-lg-10">
        {webinar.bannerImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={webinar.bannerImage} alt={webinar.metaTitle} className="w-100 img-fluid banner-img" />
        ) : null}
      </section>

      <section className="webinar-detail-layout">
        <div className="container">
          <div className="row webinar-detail-row">
            <div className="col-lg-8 col-md-8 col-12 webinar-detail-main">
              <section className="webinar-detail-block">
                <div className="container">
                  <div className="col">
                    <h1>
                      <WebinarPortableText value={webinar.rawTitle} variant="title" />
                    </h1>
                    <div className="webinar-detail-content">
                      <WebinarPortableText value={webinar.rawBody} />
                    </div>
                  </div>
                </div>
              </section>

              {webinar.speaker ? (
                <section className="webinar-detail-block">
                  <div className="container">
                    <h2>Meet the Speaker: {webinar.speaker.name}</h2>
                    {webinar.speaker.rawDescription?.length ? (
                      <div className="webinar-detail-content">
                        <WebinarPortableText value={webinar.speaker.rawDescription} />
                      </div>
                    ) : null}
                  </div>
                </section>
              ) : null}

              <section className="webinar-detail-block webinar-detail-block--muted bg-light">
                <div className="container">
                  <h2>Event Details</h2>
                  <div className="row g-3 webinar-detail-event-grid">
                    <div className="col">
                      <div className="bg-white p-3 h-100">
                        <p className="mb-lg-1">🗓️ Date</p>
                        <h6 className="mb-0">{eventParts.date}</h6>
                      </div>
                    </div>
                    <div className="col">
                      <div className="bg-white p-3 h-100">
                        <p className="mb-lg-1">⏳ Time</p>
                        <h6 className="mb-0">{eventParts.time}</h6>
                      </div>
                    </div>
                    <div className="col">
                      <div className="bg-white p-3 h-100">
                        <p className="mb-lg-1">📍 Location</p>
                        <h6 className="mb-0">{webinar.location}</h6>
                        {webinar.eventNote ? (
                          <p className="small text-muted mb-0 mt-1">{webinar.eventNote}</p>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {webinar.ctaButton ? (
                <section className="webinar-detail-block">
                  <div className="container">
                    <div>
                      <a
                        className="btn btn-lightblue text-white text-uppercase px-lg-4 py-2 rounded-pill fs-4 fw-semibold"
                        href={webinar.ctaButton.buttonUrl}
                        target={webinar.ctaButton.openInNewTab ? "_blank" : "_self"}
                        rel={webinar.ctaButton.openInNewTab ? "noopener noreferrer" : undefined}
                      >
                        {webinar.ctaButton.buttonText}
                      </a>
                    </div>
                  </div>
                </section>
              ) : null}
            </div>

            <div className="col-lg-4 col-md-4 col-12">
              <div className="rounded-3 bg-light sticky-section p-2">
                <WebinarSidebarMedia webinar={webinar} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
