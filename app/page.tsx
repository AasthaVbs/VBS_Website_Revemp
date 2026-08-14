import type { Metadata } from "next";

import { VbsHomePage } from "@/components/vbs/home-page";

export const metadata: Metadata = {
  title: "BIM Modeling Company | Scan to BIM & MEP BIM Services",
  description:
    "Expand project capacity with BIM modeling, MEP BIM, and Scan to BIM services. Reduce overhead, improve efficiency, and deliver projects faster.",
  openGraph: {
    title: "Virtual Building Studio",
    description: "Virtual Building Studio",
    type: "website",
  },
  twitter: {
    title: "Virtual Building Studio",
    description: "Virtual Building Studio",
  },
};

export default function Home() {
  return <VbsHomePage />;
}
