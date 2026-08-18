import type { Metadata } from "next";

import { WhyGrowingArchitectureFirmsHitDocumentationWallView } from "@/components/landing/why-growing-architecture-firms-hit-documentation-wall-view";

export const metadata: Metadata = {
  title: "Why Growing Architecture Firms Hit a Documentation Wall",
  description:
    "Drawings feel rushed. Reviews pile up. Senior architects become bottlenecks. Even with more staff, the workload feels heavier — not lighter.",
  robots: { index: false, follow: false },
};

export default function WhyGrowingArchitectureFirmsHitDocumentationWallPage() {
  return <WhyGrowingArchitectureFirmsHitDocumentationWallView />;
}
