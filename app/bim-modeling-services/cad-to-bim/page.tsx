import type { Metadata } from "next";

import { CadToBimPage } from "@/components/vbs/cad-to-bim-page";

export const metadata: Metadata = {
  title: "CAD to BIM Conversion Services USA | PDF & AutoCAD to Revit",
  description:
    "US-trained BIM experts convert CAD and PDF drawings into precise Revit models for architecture, structure, and MEP — improving accuracy, coordination, and delivery.",
};

export default function Page() {
  return <CadToBimPage />;
}
