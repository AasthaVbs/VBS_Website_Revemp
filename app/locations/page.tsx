import type { Metadata } from "next";

import { LocationsPage } from "@/components/vbs/locations-page";

export const metadata: Metadata = {
  title: "CAD Drafting and BIM Services Near You | Virtual Building Studio",
  description:
    "Find Virtual Building Studio CAD drafting and BIM services near you in New York, California, and Texas. Dedicated architects and engineers for code-compliant drawings and models.",
};

export default function Page() {
  return <LocationsPage />;
}
