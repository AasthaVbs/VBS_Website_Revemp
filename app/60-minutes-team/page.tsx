import type { Metadata } from "next";

import { SixtyMinutesTeamPage } from "@/components/vbs/sixty-minutes-team-page";

export const metadata: Metadata = {
  title: "60 Minutes Team | Virtual Building Studio",
  description:
    "Tell us about your architecture project and get matched with the right BIM specialist or integrated team in 60 minutes.",
  robots: { index: false, follow: false },
};

export default function SixtyMinutesTeamRoutePage() {
  return <SixtyMinutesTeamPage hideQuickSubmit />;
}
