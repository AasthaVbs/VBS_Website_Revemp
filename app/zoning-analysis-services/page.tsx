import type { Metadata } from "next";

import { ZoningAnalysisServicesPage } from "@/components/vbs/zoning-analysis-services-page";

export const metadata: Metadata = {
  title: "Zoning Analysis Services | Code-Verified Zoning Reports | USA",
  description:
    "Zoning analysis services for architecture firms. County identification, FAR and coverage calculations, and code-verified zoning reports with AI-assisted BIM workflows.",
};

export default function Page() {
  return <ZoningAnalysisServicesPage />;
}
