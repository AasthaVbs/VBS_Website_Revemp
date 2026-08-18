import type { Metadata } from "next";

import { ConstructionDocumentationServicesPage } from "@/components/vbs/construction-documentation-services-page";
import { constructionDocumentationFaqSchema } from "@/constants/construction-documentation-services-content";

const PAGE_TITLE = "Construction Documentation Services | Architectural CD Set";
const PAGE_DESCRIPTION =
  "Get faster, code-compliant permit-ready Architectural Construction Drawings from a trusted Construction Documentation Company USA";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords:
    "Construction Documentation Services, Construction Drawing Services, Architectural Documentation Services, Architectural Construction Drawings, Construction Documentation Company, Construction Documentation Outsourcing Services, Permit Set Services, Architectural CD Set Services, CD Drawing Services, Construction Documentation Services USA",
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
          __html: JSON.stringify(constructionDocumentationFaqSchema),
        }}
      />
      <ConstructionDocumentationServicesPage />
    </>
  );
}
