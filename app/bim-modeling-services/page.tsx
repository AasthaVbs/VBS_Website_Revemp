import type { Metadata } from "next";

import { BimModelingServicesPage } from "@/components/vbs/bim-modeling-services-page";
import { bimModelingFaqSchema } from "@/constants/bim-modeling-services-content";

const PAGE_TITLE = "BIM Modeling Services | Revit 3D BIM Modeling for AEC | USA";
const PAGE_DESCRIPTION =
  "Partner with a trusted BIM Modeling Company in the USA delivering accurate BIM models, clash-free coordination, and streamlined project execution.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords:
    "BIM Modeling Services, Revit BIM Modeling Services, BIM Outsourcing Services, Revit Modeling Services, 3D BIM Modeling Services, BIM Company, Revit BIM Services, BIM Services USA, 3D BIM Services, 3D BIM Modeling, Revit Modelling Services, BIM Modeling Outsourcing, BIM Modeling Company",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bimModelingFaqSchema) }}
      />
      <BimModelingServicesPage />
    </>
  );
}
