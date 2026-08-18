import type { Metadata } from "next";

import { ZoningAnalysisServicesPage } from "@/components/vbs/zoning-analysis-services-page";
import { zoningAnalysisFaqSchema } from "@/constants/zoning-analysis-services-content";

const PAGE_TITLE =
  "Zoning Analysis Services for Architects | Zoning Consulting & Planning";
const PAGE_DESCRIPTION =
  "Zoning research shouldn't slow down your design timeline. Get AI-assisted code-verified Zoning Report Services from US-trained pre-vetted BIM experts.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords:
    "Zoning Services, Zoning Analysis Services, Zoning Consulting Services, Zoning Analysis Services for Architect, zoning research services, Zoning Report Services, zoning planning services, Survey Data Analysis",
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    type: "website",
  },
  twitter: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(zoningAnalysisFaqSchema),
        }}
      />
      <ZoningAnalysisServicesPage />
    </>
  );
}
