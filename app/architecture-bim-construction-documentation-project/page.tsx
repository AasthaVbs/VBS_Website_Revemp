import type { Metadata } from "next";

import { HospitalityCaseStudyPage } from "@/components/vbs/hospitality-case-study-page";

export const metadata: Metadata = {
  title: "Architecture BIM Documentation  - Hyatt Place Hotel Project",
  description:
    "Explore how we delivered Architecture BIM modeling and construction documentation for the Hyatt Place Hotel project with accurate, coordinated Revit models.",
  robots: { index: false, follow: true },
  openGraph: {
    title: "Architecture BIM Documentation  - Hyatt Place Hotel Project",
    description:
      "Explore how we delivered Architecture BIM modeling and construction documentation for the Hyatt Place Hotel project with accurate, coordinated Revit models.",
    images: ["/images/hospitality-banner.jpg"],
  },
};

export default function Page() {
  return <HospitalityCaseStudyPage />;
}
