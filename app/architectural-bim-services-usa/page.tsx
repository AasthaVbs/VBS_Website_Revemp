import type { Metadata } from "next";

import { ArchitecturalBimServicesUsaPage } from "@/components/vbs/architectural-bim-services-usa-page";

export const metadata: Metadata = {
  title: "Architectural BIM Services Company | US-based Revit Experts",
  description:
    "Trusted Architectural BIM Services provider offering complete BIM Services from top 1% US-trained architects. Scale on your terms, try risk-free.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <ArchitecturalBimServicesUsaPage />;
}
