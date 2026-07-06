import type { Metadata } from "next";

import { MepEngineersPage } from "@/components/vbs/mep-engineers-page";
import { mepFaqSchema } from "@/constants/mep-engineers-content";

export const metadata: Metadata = {
  title: "MEP BIM Services | Virtual Building Studio",
  description:
    "MEP BIM modeling, coordination, and fabrication-ready deliverables for contractors and AEC firms across the United States.",
};

/** MEP BIM services hub — canonical route (legacy /mep-engineers redirects here). */
export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(mepFaqSchema) }}
      />
      <MepEngineersPage />
    </>
  );
}
