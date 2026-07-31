import type { Metadata } from "next";

import { BimModelingServicesPage } from "@/components/vbs/bim-modeling-services-page";

export const metadata: Metadata = {
  title: "BIM Modeling Services | Virtual Building Studio",
  description:
    "US-trained pre-vetted BIM modelers delivering Revit BIM modeling services for compliance, coordination, and constructability across AEC projects.",
};

export default function Page() {
  return <BimModelingServicesPage />;
}
