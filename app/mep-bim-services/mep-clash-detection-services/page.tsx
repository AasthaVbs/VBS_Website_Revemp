import type { Metadata } from "next";

import { MepClashDetectionPage } from "@/components/vbs/mep-clash-detection-page";

export const metadata: Metadata = {
  title: "MEP Clash Detection Services | Virtual Building Studio",
  description:
    "MEP Clash Detection Services in the USA. US-trained BIM specialists identify hard and soft clashes across mechanical, electrical, plumbing, and fire protection systems before construction.",
};

export default function MepClashDetectionServicesRoute() {
  return <MepClashDetectionPage />;
}
