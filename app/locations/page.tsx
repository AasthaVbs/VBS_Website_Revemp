import type { Metadata } from "next";

import { LocationsPage } from "@/components/vbs/locations-page";

export const metadata: Metadata = {
  title: "Locations | Virtual Building Studio Inc.",
  description:
    "Access US-trained licensed architects & engineers for CAD/BIM services. Get clash-free, code-compliant models on time -without hiring hassle.",
};

export default function Page() {
  return <LocationsPage />;
}
