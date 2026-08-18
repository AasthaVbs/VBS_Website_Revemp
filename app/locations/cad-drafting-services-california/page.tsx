import type { Metadata } from "next";

import { LocationServicePage } from "@/components/vbs/location-service-page";
import { cadDraftingServicesCaliforniaPage } from "@/constants/cad-drafting-services-california-content";

export const metadata: Metadata = {
  title: "CAD Drafting Services California | US-trained CAD Drafters",
  description:
    "Get drafting solutions in California from licensed, US-trained architects. Reduce redlines, meet deadlines, and scale with a no-risk 30-day trial.",
};

export default function Page() {
  return <LocationServicePage content={cadDraftingServicesCaliforniaPage} />;
}
