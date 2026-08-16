import type { Metadata } from "next";

import { OurExpertisePage } from "@/components/vbs/our-expertise-page";

export const metadata: Metadata = {
  title: "Our Expertise | Top 1% Architects & Engineers | Virtual Building Studio",
  description:
    "Hire top 1% US-trained architects and engineers across architecture, structure, MEP, and scan-to-BIM. Flexible engagement models and a 3-day expert match.",
};

export default function Page() {
  return <OurExpertisePage />;
}
