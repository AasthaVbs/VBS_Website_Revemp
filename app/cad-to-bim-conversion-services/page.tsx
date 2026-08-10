import type { Metadata } from "next";

import { CadToBimConversionServicesPage } from "@/components/vbs/cad-to-bim-conversion-services-page";

export const metadata: Metadata = {
  title: "CAD to BIM Conversion Services | BIM Architects | Virtual Building Studio",
  description:
    "CAD to BIM conversion by US-trained BIM architects. Convert 2D/3D CAD and PDF drawings into accurate Revit models for coordination, clash detection, and delivery.",
};

export default function Page() {
  return <CadToBimConversionServicesPage />;
}
