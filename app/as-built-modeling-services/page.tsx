import type { Metadata } from "next";

import { AsBuiltModelingServicesPage } from "@/components/vbs/as-built-modeling-services-page";
import { asBuiltModelingFaqSchema } from "@/constants/as-built-modeling-content";

const PAGE_TITLE = "As-Built BIM Modeling Services | Delivering 10,000 Sq. Ft. Per Day";
const PAGE_DESCRIPTION =
  "We convert laser scans into reliable as-built BIM models. Our BIM experts use AI-powered workflow to deliver as-built BIM models fast for global AEC industry.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords:
    "as built survey, as built plans, as built documents, construction as builts, architectural as built drawings, construction as built drawings, as built drafting services, BIM as-built model, laser scanning for as built drawings, as-built BIM model",
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
          __html: JSON.stringify(asBuiltModelingFaqSchema),
        }}
      />
      <AsBuiltModelingServicesPage />
    </>
  );
}
