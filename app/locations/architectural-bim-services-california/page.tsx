import type { Metadata } from "next";

import { LocationServicePage } from "@/components/vbs/location-service-page";
import { architecturalBimServicesCaliforniaPage } from "@/constants/architectural-bim-services-california-content";

export const metadata: Metadata = {
  title: "Architectural BIM Services in California",
  description:
    "Get the best BIM Architectural services in California from licensed architects. Minimize rework, meet tight deadlines, and scale with a no-risk 30-day trial.",
};

export default function Page() {
  return <LocationServicePage content={architecturalBimServicesCaliforniaPage} />;
}
