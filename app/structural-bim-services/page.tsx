import type { Metadata } from "next";

import { StructuralBimServicesPage } from "@/components/vbs/structural-bim-services-page";
import { structuralBimFaqSchema } from "@/constants/structural-bim-services-content";

const PAGE_TITLE = "Structural BIM Services | Revit Structural 3D Modelling USA";
const PAGE_DESCRIPTION =
  "Get reliable Structural BIM Modeling Services from US-trained engineers. Steel, rebar, and concrete detailing delivered faster through AI-assisted Revit workflows.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords:
    "Structural BIM Services, Structural Modeling Services, Structural BIM Modeling Services, Structural 3D BIM Modeling Services, BIM Structural Services, Structural BIM Modeling, Revit Structural Modeling, Structural BIM Outsourcing, BIM Structural Modeling, Structural 3D Modeling Services",
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
          __html: JSON.stringify(structuralBimFaqSchema),
        }}
      />
      <StructuralBimServicesPage />
    </>
  );
}
