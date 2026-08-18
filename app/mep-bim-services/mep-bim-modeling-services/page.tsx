import type { Metadata } from "next";

import { MepBimModellingPage } from "@/components/vbs/mep-bim-modelling-page";
import { mepBimModellingFaqSchema } from "@/constants/mep-bim-modelling-content";

const PAGE_TITLE = "MEP BIM Modeling Services | Revit MEP Model USA";
const PAGE_DESCRIPTION =
  "Scale your capacity with dedicated MEP BIM modelers, providing LOD 200-450 support for Revit modeling for US-based engineering and construction firms.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords:
    "MEP BIM Modeling Services, Revit MEP Modeling Services, MEP Modeling Services, MEP BIM Modeling Company, MEP 3D Modeling Services, Revit MEP 3D Modeling Services, MEP BIM Modeling Services USA, MEP BIM Modeling Service Provider",
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

export default function MepBimModelingServicesRoute() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(mepBimModellingFaqSchema),
        }}
      />
      <MepBimModellingPage />
    </>
  );
}
