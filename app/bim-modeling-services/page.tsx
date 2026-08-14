import type { Metadata } from "next";

import { BimModelingServicesPage } from "@/components/vbs/bim-modeling-services-page";

export const metadata: Metadata = {
  title: "BIM Modeling Services | Revit 3D BIM Modeling for AEC | USA",
  description:
    "Explore expert BIM Modeling Services with our top 1% US-trained BIM team. We deliver Revit 3D BIM Modeling for enhanced project visualization & efficiency.",
  keywords:
    "BIM Modeling Services, Revit BIM Modeling Services, BIM Outsourcing Services, Revit Modeling Services, 3D BIM Modeling Services, BIM Company, Revit BIM Services, BIM Services USA, 3D BIM Services, 3D BIM Modeling, Revit Modelling Services, BIM Modeling Outsourcing, BIM Modeling Company",
};

export default function Page() {
  return <BimModelingServicesPage />;
}
