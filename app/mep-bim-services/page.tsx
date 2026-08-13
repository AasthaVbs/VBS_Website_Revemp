import type { Metadata } from "next";

import { MepEngineersPage } from "@/components/vbs/mep-engineers-page";
import { mepFaqSchema } from "@/constants/mep-engineers-content";

export const metadata: Metadata = {
  title: "MEP BIM Services | Mechanical, Electrical, Plumbing, Fire Protection",
  description:
    "We deliver US Construction code compliant MEP BIM Services, clash-free MEPF models, shop drawings, and as-built documentation.",
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
