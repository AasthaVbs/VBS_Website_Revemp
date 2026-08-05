import type { Metadata } from "next";

import { RoiCalculatorPage } from "@/components/vbs/roi-calculator-page";

export const metadata: Metadata = {
  title: "DIY Calculator - Virtual Building Studio",
  description:
    "Compare ROI of conventional architects vs US-trained remote registered architects. Discover cost savings, faster delivery & high-quality outcomes with a smarter hiring model.",
};

export default function RoiCalculatorRoutePage() {
  return <RoiCalculatorPage />;
}
