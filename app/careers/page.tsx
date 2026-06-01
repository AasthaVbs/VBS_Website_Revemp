import type { Metadata } from "next";

import { VbsCareersPage } from "@/components/vbs/careers-page";

export const metadata: Metadata = {
  title: "Careers | Virtual Building Studio",
  description:
    "Join Virtual Building Studio. Explore current openings and discover why teams choose to build their careers at VBS.",
};

export default function CareersPage() {
  return <VbsCareersPage />;
}
