import type { Metadata } from "next";

import { MepBimModellingPage } from "@/components/vbs/mep-bim-modelling-page";

export const metadata: Metadata = {
  title: "MEP BIM Modeling Services | Revit 3D MEP Modeling USA",
  description:
    "Scale your capacity with dedicated MEP BIM modelers, providing LOD 200-450 support for Revit modeling for US-based engineering and construction firms.",
};

export default function MepBimModelingServicesRoute() {
  return <MepBimModellingPage />;
}
