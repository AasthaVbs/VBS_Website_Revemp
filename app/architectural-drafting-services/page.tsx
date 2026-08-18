import type { Metadata } from "next";

import { ArchitecturalDraftingServicesPage } from "@/components/vbs/architectural-drafting-services-page";
import { architecturalDraftingFaqSchema } from "@/constants/architectural-drafting-services-content";

const PAGE_TITLE = "Architecture Drafting Service Using AutoCAD & Revit | USA";
const PAGE_DESCRIPTION =
  "Get precise, scalable, and efficient CAD Architectural Drafting and Drawing Services for seamless project execution tailored to your needs.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords:
    "Architectural Drafting Services, Revit Drafting Services, Architectural Drawing Services, Architectural CAD Services, Architect Drafting Services, Architectural Drafting Company, Construction Drafting Services, Architectural Drafting Outsourcing, Architectural Drawings Services, Architectural Drafting Services USA, CAD Architectural Drafting, Architectural Drafting Company USA, AutoCAD Architectural Drafting Services",
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
          __html: JSON.stringify(architecturalDraftingFaqSchema),
        }}
      />
      <ArchitecturalDraftingServicesPage />
    </>
  );
}
