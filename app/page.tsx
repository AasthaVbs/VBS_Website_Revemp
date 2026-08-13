import type { Metadata } from "next";

import { VbsHomePage } from "@/components/vbs/home-page";

export const metadata: Metadata = {
  title: "BIM Modeling Company | Scan to BIM & MEP BIM Services",
  description:
    "Expand project capacity with BIM modeling, MEP BIM, and Scan to BIM services. Reduce overhead, improve efficiency, and deliver projects faster.",
};

export default function Home() {
  return <VbsHomePage />;
}
