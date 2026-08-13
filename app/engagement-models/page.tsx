import type { Metadata } from "next";

import { EngagementModelsPage } from "@/components/vbs/engagement-models-page";

export const metadata: Metadata = {
  title: "Scalable Delivery Infrastructure for AEC Firms | VBS",
  description:
    "Architectural, Structural, MEP and Scan to BIM services delivered through embedded production teams aligned to your standards.",
};

export default function EngagementModelsRoute() {
  return <EngagementModelsPage />;
}
