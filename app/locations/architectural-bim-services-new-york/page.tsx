import type { Metadata } from "next";

import { ArchitecturalBimServicesNewYorkPage } from "@/components/vbs/architectural-bim-services-new-york-page";

export const metadata: Metadata = {
  title: "Architectural BIM Services in New York | Virtual Building Studio",
  description:
    "Hire US-trained licensed architects for Architectural BIM services in New York. Deliver accurate, clash-free, code-compliant BIM models and close staffing, rework, and deadline gaps.",
};

export default function Page() {
  return <ArchitecturalBimServicesNewYorkPage />;
}
