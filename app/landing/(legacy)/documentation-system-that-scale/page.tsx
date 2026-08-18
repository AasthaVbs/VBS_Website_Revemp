import type { Metadata } from "next";

import { DocumentationSystemThatScaleView } from "@/components/landing/documentation-system-that-scale-view";

export const metadata: Metadata = {
  title: "Scalable Documentation Systems for Architecture Firms",
  description:
    "Explore documentation systems that help architecture firms scale efficiently, reduce coordination issues, and improve project delivery speed.",
  keywords:
    "architecture documentation, documentation systems, growing architecture firms, AEC documentation, BIM documentation, design documentation, construction documentation, drawing review cycles, coordination workflows, architecture firm scaling, senior architect workload, documentation workflow, drawing standards, multidisciplinary coordination",
  robots: { index: false, follow: false },
};

export default function DocumentationSystemThatScalePage() {
  return <DocumentationSystemThatScaleView />;
}
