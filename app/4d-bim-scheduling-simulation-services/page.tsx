import type { Metadata } from "next";

import { FourDBimSchedulingSimulationServicesPage } from "@/components/vbs/4d-bim-scheduling-simulation-services-page";
import { fourDBimSchedulingFaqSchema } from "@/constants/4d-bim-scheduling-simulation-content";

const PAGE_TITLE = "4D BIM Scheduling Services | Construction Simulation in USA";
const PAGE_DESCRIPTION =
  "Scale your delivery team with dedicated BIM 4D Modeling Services from US-trained BIM experts, available in 3 days for architecture and structural projects.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    type: "website",
  },
  twitter: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(fourDBimSchedulingFaqSchema),
        }}
      />
      <FourDBimSchedulingSimulationServicesPage />
    </>
  );
}
