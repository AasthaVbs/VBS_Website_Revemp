import type { Metadata } from "next";

import { HiddenCostWhitepaperView } from "@/components/whitepaper/hidden-cost-whitepaper-view";
import { hiddenCostWhitepaperContent as content } from "@/constants/whitepaper-hidden-cost-content";

export const metadata: Metadata = {
  title: `${content.seoTitle} | Virtual Building Studio`,
  description: content.seoDescription,
  openGraph: {
    title: content.seoTitle,
    description: content.seoDescription,
    images: [{ url: content.ogImage }],
  },
};

export default function HiddenCostOfLateStageMepCoordinationFailuresPage() {
  return <HiddenCostWhitepaperView />;
}
