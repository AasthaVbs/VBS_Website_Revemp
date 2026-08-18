import type { Metadata } from "next";

import { SchematicDesignServicesPage } from "@/components/vbs/schematic-design-services-page";
import { schematicDesignFaqSchema } from "@/constants/schematic-design-services-content";

const PAGE_TITLE = "Architectural Schematic Design Services provider in USA";
const PAGE_DESCRIPTION =
  "Outsource Schematic Design Services to Virtual Building Studio. Our licenced architects use AI-assisted workflows to deliver fast, code-compliant concepts.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords:
    "Schematic Design Services, Architectural Schematic Design Services, Schematic Design Support Services, Outsource Schematic Design Services, Architectural Concept Design Services, Schematic Design Outsourcing Company, Schematic Design Services Company, Schematic Design Services Provider in the USA, Architectural SD Phase Services, Residential Schematic Design Services, Commercial Schematic Design Services",
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
          __html: JSON.stringify(schematicDesignFaqSchema),
        }}
      />
      <SchematicDesignServicesPage />
    </>
  );
}
