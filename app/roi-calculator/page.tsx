import type { Metadata } from "next";

import { RoiCalculatorPage } from "@/components/vbs/roi-calculator-page";

export const metadata: Metadata = {
  title: "DIY Calculator - Virtual Building Studio",
  description:
    "Compare ROI of conventional vs US-trained remote architects. Discover cost savings, faster delivery, and quality outcomes with a smarter hiring model.",
  robots: { index: false, follow: false },
};

export default function RoiCalculatorRoutePage() {
  return <RoiCalculatorPage />;
}
