import type { Metadata } from "next";

import { MepBimModellingPage } from "@/components/vbs/mep-bim-modelling-page";

export const metadata: Metadata = {
  title: "MEP BIM Modeling Services | Virtual Building Studio",
  description:
    "Code-compliant MEP BIM modeling services with LOD 200–450 Revit deliverables for clash-free, fabrication-ready building systems across the USA.",
};

export default function MepBimModelingServicesRoute() {
  return <MepBimModellingPage />;
}
