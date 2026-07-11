import type { Metadata } from "next";

import { MepCoordinationPage } from "@/components/vbs/mep-coordination-page";

export const metadata: Metadata = {
  title: "MEP Coordination Services | Virtual Building Studio",
  description:
    "MEP coordination services for clash-free construction. Coordinate all disciplines ahead of build with Navisworks clash detection and LOD 200–400 BIM models.",
};

export default function MepCoordinationServicesRoute() {
  return <MepCoordinationPage />;
}
