import type { Metadata } from "next";

import { VbsCareersDetailedPage } from "@/components/vbs/careers-detailed-page";

export const metadata: Metadata = {
  title: "Senior AI Engineer | Careers | Virtual Building Studio",
  description:
    "Explore the Senior AI Engineer opportunity at Virtual Building Studio and apply to join our team.",
};

export default function CareersDetailedPage() {
  return <VbsCareersDetailedPage />;
}
