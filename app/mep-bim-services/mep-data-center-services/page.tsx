import type { Metadata } from "next";

import { MepDataCenterPage } from "@/components/vbs/mep-data-center-page";
import { mepDataCenterFaqSchema } from "@/constants/mep-data-center-content";

const PAGE_TITLE = "MEP BIM Services for Data Centers | BIM Coordination";
const PAGE_DESCRIPTION =
  "Data Center MEP BIM Services for mission-critical facilities, helping contractors and developers deliver clash-free LOD 400 models and spool drawings.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords:
    "Data Center MEP, MEP Data Center Services, Data Center MEP BIM Services, Data Center MEP Engineering Services, MEP BIM Services for Data Centers, BIM for Data Canter Construction, Data Center BIM Coordination, Data Center MEP Coordination, BIM Modeling for Data Centers, Data Center HVAC BIM modeling, Electrical BIM Modeling Data Center",
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

export default function MepDataCenterServicesRoute() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(mepDataCenterFaqSchema),
        }}
      />
      <MepDataCenterPage />
    </>
  );
}
