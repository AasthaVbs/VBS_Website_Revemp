import type { Metadata } from "next";

import { AsBuiltDraftingServicesPage } from "@/components/vbs/as-built-drafting-services-page";
import { asBuiltDraftingFaqSchema } from "@/constants/as-built-drafting-services-content";

const PAGE_TITLE =
  "As Built Drafting Services Provider in USA | Drawing & Documentation";
const PAGE_DESCRIPTION =
  "Get reliable As Built Drawing Services from US-trained BIM experts using AI-assisted workflows for faster, code-compliant records.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords:
    "As Built services, As Built Drafting Services, As Built Drawing Services, As Built Documentation, As Built Drafting Services Provider USA, As Built Services Company",
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
          __html: JSON.stringify(asBuiltDraftingFaqSchema),
        }}
      />
      <AsBuiltDraftingServicesPage />
    </>
  );
}
