import type { Metadata } from "next";

import { VbsAboutPage } from "@/components/vbs/about-page";

export const metadata: Metadata = {
  title: "About Virtual Building Studio (VBS) | BIM Company",
  description:
    "Virtual Building Studio delivers global BIM services for AEC firms, improving project coordination, efficiency, cost optimization across construction projects.",
};

export default function AboutPage() {
  return <VbsAboutPage />;
}
