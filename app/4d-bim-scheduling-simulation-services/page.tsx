import type { Metadata } from "next";

import { FourDBimSchedulingSimulationServicesPage } from "@/components/vbs/4d-bim-scheduling-simulation-services-page";

export const metadata: Metadata = {
  title: "4D BIM Scheduling Simulation Services | Construction Sequencing | USA",
  description:
    "4D BIM Scheduling Services that link design models to construction schedules. AI-powered sequencing, site logistics, clash detection, and progress monitoring for AEC firms.",
};

export default function Page() {
  return <FourDBimSchedulingSimulationServicesPage />;
}
