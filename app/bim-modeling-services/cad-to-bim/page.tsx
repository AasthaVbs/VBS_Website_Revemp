import type { Metadata } from "next";

import { CadToBimPage } from "@/components/vbs/cad-to-bim-page";

export const metadata: Metadata = {
  title: "CAD to BIM Conversion Services USA | PDF & AutoCAD to Revit",
  description:
    "Turn 2D drawings into intelligent 3D models with our CAD to BIM Services. Trusted by 100+ AEC firms across the USA for PDF to Revit and AutoCAD to Revit Modeling.",
};

export default function Page() {
  return <CadToBimPage />;
}
