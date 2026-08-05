import type { Metadata } from "next";

import { VbsAboutPage } from "@/components/vbs/about-page";

export const metadata: Metadata = {
  title: "About Virtual Building Studio (VBS) | Leading BIM Company in USA",
  description:
    "Virtual Building Studio delivers BIM services for AEC firms worldwide, improving project coordination, accuracy, and cost efficiency across construction projects.",
};

export default function AboutPage() {
  return <VbsAboutPage />;
}
