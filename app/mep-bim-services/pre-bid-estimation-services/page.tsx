import type { Metadata } from "next";

import { MepPreBidEstimationPage } from "@/components/vbs/mep-pre-bid-estimation-page";

export const metadata: Metadata = {
  title: "Pre-Bid Estimation Services | Virtual Building Studio",
  description:
    "Pre-Bid Estimation Services for MEP and HVAC systems. Bid-ready cost estimates, quantity takeoffs, and BOQs from US-trained estimators using BIM-supported workflows.",
};

export default function MepPreBidEstimationServicesRoute() {
  return <MepPreBidEstimationPage />;
}
