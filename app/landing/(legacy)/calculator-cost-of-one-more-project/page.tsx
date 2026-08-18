import type { Metadata } from "next";

import { CalculatorCostOfOneMoreProjectView } from "@/components/landing/calculator-cost-of-one-more-project-view";

export const metadata: Metadata = {
  title: "Architecture Capacity Tool | Cost of One Project Calculator",
  description:
    "Estimate the true cost of taking on one more project. Use our calculator to evaluate capacity, team load, and smarter growth decisions for architecture firms.",
  keywords: [
    "architecture ROI calculator",
    "architecture margin calculator",
    "project margin risk calculator",
    "architecture project profitability",
    "architecture firm capacity calculator",
    "AEC ROI calculator",
    "BIM project ROI",
    "rework cost calculator",
    "overtime impact on margins",
    "staffing cost calculator for architecture firms",
    "project cost risk assessment",
    "architecture delivery profitability",
  ],
  robots: { index: false, follow: false },
};

export default function CalculatorCostOfOneMoreProjectPage() {
  return <CalculatorCostOfOneMoreProjectView />;
}
