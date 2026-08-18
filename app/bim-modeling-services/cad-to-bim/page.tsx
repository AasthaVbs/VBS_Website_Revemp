import type { Metadata } from "next";

import { CadToBimPage } from "@/components/vbs/cad-to-bim-page";
import { cadToBimFaqSchema } from "@/constants/cad-to-bim-content";

const PAGE_TITLE = "CAD to BIM Conversion Services USA | PDF & AutoCAD to Revit";
const PAGE_DESCRIPTION =
  "Turn 2D drawings into intelligent 3D models with our CAD to BIM Services. Trusted by 200+ AEC firms across the USA for PDF to Revit and AutoCAD to Revit Modeling.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords:
    "CAD to BIM Services, CAD to BIM Modeling Services, CAD to BIM Conversion, CAD to BIM Conversion Services, Autocad to BIM Services, CAD to BIM Company, Autocad to BIM Conversion, CAD to BIM Services in USA, CAD to BIM Service Provider, Outsourcing CAD to BIM Services, Outsourcing CAD to BIM Modeling Services",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cadToBimFaqSchema) }}
      />
      <CadToBimPage />
    </>
  );
}
