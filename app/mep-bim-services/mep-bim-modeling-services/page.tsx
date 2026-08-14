import type { Metadata } from "next";

import { MepBimModellingPage } from "@/components/vbs/mep-bim-modelling-page";

export const metadata: Metadata = {
  title: "MEP BIM Modeling Services | Revit 3D MEP Modeling USA",
  description:
    "Scale your capacity with dedicated MEP BIM modelers, providing LOD 200-450 support for Revit modeling for US-based engineering and construction firms.",
  keywords:
    "MEP BIM Modeling Services, Revit MEP Modeling Services, MEP Modeling Services, MEP BIM Modeling Company, MEP 3D Modeling Services, Revit MEP 3D Modeling Services, MEP BIM Modeling Services USA, MEP BIM Modeling Service Provider",
};

export default function MepBimModelingServicesRoute() {
  return <MepBimModellingPage />;
}
