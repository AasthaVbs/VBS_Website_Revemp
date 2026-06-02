import type { Metadata } from "next";

import { VbsLeadershipPage } from "@/components/vbs/leadership-page";

export const metadata: Metadata = {
  title: "Leadership | Virtual Building Studio",
  description:
    "Meet the leadership team at Virtual Building Studio and learn how we drive excellence across AEC delivery.",
};

export default function LeadershipPage() {
  return <VbsLeadershipPage />;
}
