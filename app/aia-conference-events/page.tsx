import type { Metadata } from "next";

import { AiaConferenceEventsPage } from "@/components/vbs/aia-conference-events-page";
import { aiaConferenceFaqSchema } from "@/constants/aia-conference-events-content";

export const metadata: Metadata = {
  title: "Meet Us at AIA 2026 Booth #4539 | June 11–12 2026",
  description:
    "Meet our team at AIA Booth #4539, June 11–12, 2026. See the industry-first 60-minute dedicated team build for architecture and engineering firms.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  alternates: {
    canonical: "/aia-conference-events",
  },
};

export default function AiaConferenceEventsRoutePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aiaConferenceFaqSchema) }}
      />
      <AiaConferenceEventsPage />
    </>
  );
}
