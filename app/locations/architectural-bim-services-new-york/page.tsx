import type { Metadata } from "next";

import { ArchitecturalBimServicesNewYorkPage } from "@/components/vbs/architectural-bim-services-new-york-page";

export const metadata: Metadata = {
  title: "Architectural BIM Services in New York",
  description:
    "Get the best BIM Architectural services in New York from licensed architects. Minimize rework, meet tight deadlines, and scale with a no-risk 30-day trial.",
};

export default function Page() {
  return <ArchitecturalBimServicesNewYorkPage />;
}
