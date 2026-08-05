import type { Metadata } from "next";

import { VbsLeadershipPage } from "@/components/vbs/leadership-page";

export const metadata: Metadata = {
  title: "Leadership Team | Virtual Building Studio Inc.",
  description:
    "Meet our leadership team at Virtual Building Studio. Our experienced board of directors, operations team, and sales & marketing leaders driving innovation in BIM and AEC services.",
};

export default function LeadershipPage() {
  return <VbsLeadershipPage />;
}
