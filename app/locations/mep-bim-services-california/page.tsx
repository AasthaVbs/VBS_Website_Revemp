import type { Metadata } from "next";

import { LocationServicePage } from "@/components/vbs/location-service-page";
import { mepBimServicesCaliforniaPage } from "@/constants/mep-bim-services-california-content";

export const metadata: Metadata = {
  title: "MEP BIM Services in California",
  description:
    "Get the best BIM MEP services in California from US-trained MEP modelers. Minimize rework, meet tight deadlines, and scale with a no-risk 30-day trial.",
};

export default function Page() {
  return <LocationServicePage content={mepBimServicesCaliforniaPage} />;
}
