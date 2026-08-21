import type { Metadata } from "next";

import { VbsHomePage } from "@/components/vbs/home-page";
import { homeFaqSchema } from "@/constants/home-content";

const HOME_TITLE = "BIM Modeling Company | Scan to BIM & MEP BIM Services";
const HOME_DESCRIPTION =
  "Expand project capacity with BIM modeling, MEP BIM, and Scan to BIM services. Reduce overhead, improve efficiency, and deliver projects faster.";

export const revalidate = 60;

export const metadata: Metadata = {
  title: HOME_TITLE,
  description: HOME_DESCRIPTION,
  openGraph: {
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    type: "website",
  },
  twitter: {
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqSchema) }}
      />
      <VbsHomePage />
    </>
  );
}
