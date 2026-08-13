import type { Metadata } from "next";

import { BimModelingServicesPage } from "@/components/vbs/bim-modeling-services-page";

export const metadata: Metadata = {
  title: "BIM Modeling Services | Revit 3D BIM Modeling for AEC | USA",
  description:
    "Explore expert BIM Modeling Services with our top 1% US-trained BIM team. We deliver Revit 3D BIM Modeling for enhanced project visualization & efficiency.",
};

export default function Page() {
  return <BimModelingServicesPage />;
}
