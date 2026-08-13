import type { Metadata } from "next";

import { MepDataCenterPage } from "@/components/vbs/mep-data-center-page";

export const metadata: Metadata = {
  title: "MEP Data Center Services | MEP BIM Coordination | Virtual Building Studio",
  description:
    "Specialized MEP BIM coordination for data centers — fabrication-ready models, clash detection, and mission-critical facility workflows.",
};

export default function MepDataCenterServicesRoute() {
  return <MepDataCenterPage />;
}
