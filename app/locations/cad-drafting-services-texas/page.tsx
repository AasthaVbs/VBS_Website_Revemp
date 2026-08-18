import type { Metadata } from "next";

import { LocationServicePage } from "@/components/vbs/location-service-page";
import { cadDraftingServicesTexasPage } from "@/constants/cad-drafting-services-texas-content";

export const metadata: Metadata = {
  title: "CAD Drafting Services Texas | US-trained CAD Drafters",
  description:
    "Get the best drafting solution in Texas from licensed, US-trained architects. Minimize redline updates, meet tight deadlines, and scale with a no-risk 30-day trial.",
};

export default function Page() {
  return <LocationServicePage content={cadDraftingServicesTexasPage} />;
}
