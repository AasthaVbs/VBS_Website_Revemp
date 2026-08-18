import type { Metadata } from "next";

import { ArchitecturalBimServicesPage } from "@/components/vbs/architectural-bim-services-page";
import { architecturalBimFaqSchema } from "@/constants/architectural-bim-services-content";

const PAGE_TITLE = "Architectural BIM Services | 3D Architectural Modeling USA";
const PAGE_DESCRIPTION =
  "Leverage US-trained licensed BIM architects from the trusted Architectural BIM Services Company to resolve design clashes, reduce rework, and speed project delivery.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords:
    "Architectural BIM Services Company, Architectural BIM Modeling Services, Architectural Outsourcing Services, BIM Architectural Modeling Services, Architectural Modeling Services, Architecture Outsourcing Services, BIM Architectural Services, Architectural CAD to BIM Services, Revit Architecture Services, Architectural BIM Company, Architectural BIM Outsourcing Services, Architectural BIM Services Company, Architectural 3D BIM Modeling, Architectural BIM Services in USA",
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
          __html: JSON.stringify(architecturalBimFaqSchema),
        }}
      />
      <ArchitecturalBimServicesPage />
    </>
  );
}
