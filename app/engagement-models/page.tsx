import type { Metadata } from "next";

import { EngagementModelsPage } from "@/components/vbs/engagement-models-page";

export const metadata: Metadata = {
  title: "Engagement Models | Virtual Building Studio",
  description:
    "Compare project-based BIM support, dedicated resources, and global delivery center models to find the right partnership structure for your firm.",
};

export default function EngagementModelsRoute() {
  return <EngagementModelsPage />;
}
