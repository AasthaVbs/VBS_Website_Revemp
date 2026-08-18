import type { Metadata } from "next";

import { DesignDevelopmentServicesPage } from "@/components/vbs/design-development-services-page";
import { designDevelopmentFaqSchema } from "@/constants/design-development-services-content";

const PAGE_TITLE = "Architecture Design Development Services for AEC Firms USA";
const PAGE_DESCRIPTION =
  "Our US-trained architects and engineers use AI-assisted workflow to deliver code-compliant, coordinated Design Development Drawings for US AEC firms.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords:
    "Design Development Services, Architectural Design Development, Design Development in Architecture, Design Development Drawings, Design Development Consultants, Design Development Phase in Architecture, Design Development (DD) Architecture, Revit Design Development Services, Design Development Architecture Company, Architectural Design Development Services",
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
          __html: JSON.stringify(designDevelopmentFaqSchema),
        }}
      />
      <DesignDevelopmentServicesPage />
    </>
  );
}
