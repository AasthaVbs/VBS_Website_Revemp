import type { Metadata } from "next";

import { BimForDataCenterPage } from "@/components/vbs/bim-for-data-center-page";
import { bimForDataCenterFaqSchema } from "@/constants/bim-for-data-center-content";

const PAGE_TITLE =
  "AI-powered Data Center BIM Services for Architecture Firms in USA";
const PAGE_DESCRIPTION =
  "Get dedicated data center design services from BIM experts using AI-assisted workflows. Faster construction documentation, fewer errors and stronger coordination.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords:
    "Data Center BIM Services, Data Center Construction Documentation, Healthcare Data Center BIM Services, Data Centre Architectural BIM Services, Data Center Design Services, Data Center Design and Construction, Data Center Revit Construction Documents, Hospital Data Center BIM Modeling, Medical Data Center Design Support, Data Center Drafting Services",
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

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(bimForDataCenterFaqSchema),
        }}
      />
      <BimForDataCenterPage />
    </>
  );
}
