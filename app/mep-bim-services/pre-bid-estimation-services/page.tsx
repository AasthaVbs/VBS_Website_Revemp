import type { Metadata } from "next";

import { MepPreBidEstimationPage } from "@/components/vbs/mep-pre-bid-estimation-page";
import { mepPreBidFaqSchema } from "@/constants/mep-pre-bid-estimation-content";

const PAGE_TITLE = "Pre-Bid Estimation Services in the USA | MEP Estimating Services";
const PAGE_DESCRIPTION =
  "Providing pre-bid estimation services with accurate quantity takeoffs, MEP estimating, and cost planning to improve bid accuracy and win rates.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords:
    "Pre-Bid Estimation Services, Pre-Construction Estimating Services, MEP Estimating Services, MEP Estimating Services in USA, Pre-Bid Quantity Takeoff, Construction Pre-Bid Cost Estimation, Pre-bid Estimation Services Provider, Top Pre-bid Estimation Company, Pre-bid Estimation Services Company USA, Pre-bid estimation for MEP and HVAC systems, Cost Estimation for Contractors",
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    type: "website",
  },
  twitter: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
};

export default function MepPreBidEstimationServicesRoute() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(mepPreBidFaqSchema),
        }}
      />
      <MepPreBidEstimationPage />
    </>
  );
}
