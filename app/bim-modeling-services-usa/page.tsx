import type { Metadata } from "next";

import { BimModelingServicesUsaPage } from "@/components/vbs/bim-modeling-services-usa-page";

export const metadata: Metadata = {
  title: "BIM Modeling Services USA | BIM Architects & Engineers | Virtual Building Studio",
  description:
    "BIM modeling services by US-trained BIM architects and engineers. Architectural, structural, and MEP/HVAC Revit models for coordination, documentation, and delivery.",
};

export default function Page() {
  return <BimModelingServicesUsaPage />;
}
