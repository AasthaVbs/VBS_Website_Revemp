import type { Metadata } from "next";

import { TwoDDraftingServicesPage } from "@/components/vbs/2d-drafting-services-page";
import { twoDDraftingFaqSchema } from "@/constants/2d-drafting-services-content";

const PAGE_TITLE = "2D Drafting Services | Architectural 2D CAD Drafting Services";
const PAGE_DESCRIPTION =
  "Access US-trained licensed architects on-demand to get accurate 2D Architectural CAD Drawing Services to support your projects with speed and precision.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords:
    "2D Drafting Services, 2D CAD Drawing, 2D CAD Drafting Services, 2D CAD Conversion Services, Architectural 2D Drafting Services, Outsource 2D Drafting Services, 2D Drafting Services In USA, 2D Drafting Services Company, 2D CAD Drawing Services, 2D Drawing Services, 2D Architectural Drawing Services",
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
          __html: JSON.stringify(twoDDraftingFaqSchema),
        }}
      />
      <TwoDDraftingServicesPage />
    </>
  );
}
