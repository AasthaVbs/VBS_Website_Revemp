import type { Metadata } from "next";

import { MepDataCenterPage } from "@/components/vbs/mep-data-center-page";

export const metadata: Metadata = {
  title: "MEP Data Center Services | Virtual Building Studio",
  description:
    "Fabrication-ready MEP BIM services for data centers with coordinated models, clash detection, prefabrication support, and mission-critical project delivery.",
};

export default function MepDataCenterServicesRoute() {
  return <MepDataCenterPage />;
}
