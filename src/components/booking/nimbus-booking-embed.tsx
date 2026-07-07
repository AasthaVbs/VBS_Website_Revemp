"use client";

import { HEADER_BOOK_MEETING_URL } from "@/utils/nimbus-booking";

type NimbusBookingEmbedProps = {
  className?: string;
  title?: string;
  loadPriority?: "auto" | "high";
};

/** Inline Nimbus booking portal — same URL as header Book a Meeting modal. */
export function NimbusBookingEmbed({
  className,
  title = "Book a meeting",
  loadPriority = "auto",
}: NimbusBookingEmbedProps) {
  const isHighPriority = loadPriority === "high";

  return (
    <div className={className}>
      <iframe
        title={title}
        src={HEADER_BOOK_MEETING_URL}
        className="vbs-nimbus-booking-embed__frame"
        loading={isHighPriority ? "eager" : "lazy"}
        fetchPriority={isHighPriority ? "high" : undefined}
        allow="fullscreen"
      />
    </div>
  );
}
