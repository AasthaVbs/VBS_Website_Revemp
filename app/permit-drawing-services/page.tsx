import type { Metadata } from "next";

import { PermitDrawingServicesPage } from "@/components/vbs/permit-drawing-services-page";
import { permitDrawingFaqSchema } from "@/constants/permit-drawing-services-content";

const PAGE_TITLE = "Permit Drawing Services in USA | Building Permit Drawing";
const PAGE_DESCRIPTION =
  "Speed up approvals with Permit Drawing Services. Our BIM experts prepare accurate commercial and residential permit drawings using AI-assisted workflows.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords:
    "Permit Drawing, Permit Drawing Services, Building Permit Drawing, Permit Drawing Services in USA, Commercial Permit drawings, Residential permit drawings, Permit Set Preparation Services",
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
          __html: JSON.stringify(permitDrawingFaqSchema),
        }}
      />
      <PermitDrawingServicesPage />
    </>
  );
}
