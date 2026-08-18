import type { Metadata } from "next";

import { MepCoordinationPage } from "@/components/vbs/mep-coordination-page";
import { mepCoordinationFaqSchema } from "@/constants/mep-coordination-content";

const PAGE_TITLE = "MEP BIM Coordination Service Provider USA | MEP Coordination";
const PAGE_DESCRIPTION =
  "Ensure seamless system integration with our MEP BIM Coordination Services. We resolve interdisciplinary clashes to speed up the project timeline and prevent rework.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords:
    "MEP Coordination Services, MEP BIM Coordination Services, BIM Coordination Services, MEPF Coordination Services, MEP Coordination Service Provider, MEP Coordination Services in USA",
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

export default function MepCoordinationServicesRoute() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(mepCoordinationFaqSchema),
        }}
      />
      <MepCoordinationPage />
    </>
  );
}
