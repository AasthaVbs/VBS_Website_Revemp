import type { Metadata } from "next";

import { MepEngineersPage } from "@/components/vbs/mep-engineers-page";
import { mepFaqSchema } from "@/constants/mep-engineers-content";

const PAGE_TITLE =
  "MEP BIM Services | Mechanical, Electrical, Plumbing, Fire Protection";
const PAGE_DESCRIPTION =
  "We deliver US construction code-compliant MEP BIM services, clash-free MEPF models, shop drawings, and as-built documentation.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
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
