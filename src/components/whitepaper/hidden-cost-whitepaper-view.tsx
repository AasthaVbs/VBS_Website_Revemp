"use client";

import { WhitepaperLandingPage } from "@/components/whitepaper/whitepaper-landing-page";
import { hiddenCostWhitepaperContent as content } from "@/constants/whitepaper-hidden-cost-content";

export function HiddenCostWhitepaperView() {
  return <WhitepaperLandingPage {...content} pageClassName={content.pageClassName} />;
}
