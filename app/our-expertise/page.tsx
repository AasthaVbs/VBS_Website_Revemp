import type { Metadata } from "next";

import { OurExpertisePage } from "@/components/vbs/our-expertise-page";
import { ourExpertiseFaqSchema } from "@/constants/our-expertise-content";

const PAGE_TITLE = "Our Expertise in the AEC Industry - Virtual Building Studio";
const PAGE_DESCRIPTION =
  "Find the top 1% architects and engineers for your next project. Hire professionals expert quickly, ensuring high-quality, efficient solutions that meet your needs without exceeding your budget";

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

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(ourExpertiseFaqSchema),
        }}
      />
      <OurExpertisePage />
    </>
  );
}
