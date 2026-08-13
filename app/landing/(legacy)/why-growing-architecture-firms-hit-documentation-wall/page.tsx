import type { Metadata } from "next";

import { WhyGrowingArchitectureFirmsHitDocumentationWallView } from "@/components/landing/why-growing-architecture-firms-hit-documentation-wall-view";

export const metadata: Metadata = {
  title: "Why Growing Architecture Firms Hit a Documentation Wall | Virtual Building Studio",
  description:
    "A structural breakdown for architecture firm leaders whose growth is beginning to strain their delivery system.",
};

export default function WhyGrowingArchitectureFirmsHitDocumentationWallPage() {
  return <WhyGrowingArchitectureFirmsHitDocumentationWallView />;
}
