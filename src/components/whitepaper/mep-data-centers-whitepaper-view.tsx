"use client";

import { WhitepaperLandingPage } from "@/components/whitepaper/whitepaper-landing-page";
import { mepDataCentersWhitepaperContent as content } from "@/constants/whitepaper-mep-data-centers-content";

export function MepDataCentersWhitepaperView() {
  return <WhitepaperLandingPage {...content} pageClassName={content.pageClassName} />;
}
