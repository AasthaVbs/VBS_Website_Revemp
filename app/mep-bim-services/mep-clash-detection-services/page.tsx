import type { Metadata } from "next";

import { MepClashDetectionPage } from "@/components/vbs/mep-clash-detection-page";

export const metadata: Metadata = {
  title: "BIM Clash Detection and Coordination Services USA",
  description:
    "Avoid costly rework and delays with expert MEP BIM Clash Detection. Fast onboarding, US-trained top 1% BIM experts, working on your timezone.",
};

export default function MepClashDetectionServicesRoute() {
  return <MepClashDetectionPage />;
}
