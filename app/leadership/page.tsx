import type { Metadata } from "next";

import { VbsLeadershipPage } from "@/components/vbs/leadership-page";

export const metadata: Metadata = {
  title: "Leadership Team | Virtual Building Studio Inc.",
  description:
    "Meet VBS leaders driving innovation in BIM and AEC services. Discover our experienced board, operations, sales, and marketing teams shaping the future.",
};

export default function LeadershipPage() {
  return <VbsLeadershipPage />;
}
