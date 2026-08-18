import type { Metadata } from "next";

import { BimModelingServicesUsaPage } from "@/components/vbs/bim-modeling-services-usa-page";

export const metadata: Metadata = {
  title: "BIM Modeling Services USA | Architectural , Structure, HVAC",
  description:
    "Expert BIM Modeling Services,: Architectural, Structural, and MEP/HVAC BIM Modeling, to enhance accuracy, coordination, and efficiency in your projects.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <BimModelingServicesUsaPage />;
}
