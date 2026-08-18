import type { Metadata } from "next";

import { MepClashDetectionPage } from "@/components/vbs/mep-clash-detection-page";

const PAGE_TITLE = "MEP Clash Detection Services | BIM Clash Detection USA";
const PAGE_DESCRIPTION =
  "Optimize construction with expert MEP Clash Detection Services in USA. We resolve hard and soft clashes using BIM to reduce rework and ensure code compliance.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords:
    "MEP Clash Detection Services, BIM Clash Detection Services, Clash Detection Services, MEPF Clash Detection Services, MEP BIM Clash Detection Services, MEP Clash Detection Services Provider, MEP Clash Detection Services in the USA, Mechanical Clash Detection, Electrical Clash Detection, Hard and Soft Clash Detection, Plumbing Clash Detection, Outsourcing MEP clash detection services",
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    type: "website",
  },
  twitter: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
};

export default function MepClashDetectionServicesRoute() {
  return <MepClashDetectionPage />;
}
