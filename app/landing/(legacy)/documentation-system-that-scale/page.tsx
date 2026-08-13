import type { Metadata } from "next";

import { DocumentationSystemThatScaleView } from "@/components/landing/documentation-system-that-scale-view";

export const metadata: Metadata = {
  title: "Scalable Documentation Systems for Architecture Firms",
  description:
    "Explore documentation systems that help architecture firms scale efficiently, reduce coordination issues, and improve project delivery speed.",
  keywords: [
    "architecture documentation",
    "documentation systems",
    "growing architecture firms",
    "AEC documentation",
    "BIM documentation",
  ],
  robots: { index: false, follow: true },
};

export default function DocumentationSystemThatScalePage() {
  return <DocumentationSystemThatScaleView />;
}
