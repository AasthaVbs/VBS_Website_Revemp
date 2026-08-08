import type { Metadata } from "next";

import { TalentVsTechWebinarView } from "@/components/sections/webinar/talent-vs-tech-webinar-view";

export const metadata: Metadata = {
  title:
    "Webinar - Talent vs. Tech—What’s the Secret to Boosting Your Architecture Practice | Virtual Building Studio",
  description:
    "Discover how top talent and tech like VBS’s Virtual Studio & BidLight’s BIM automation can boost your architecture firm. Join the exclusive webinar now!",
};

export default function TalentVsTechWebinarPage() {
  return <TalentVsTechWebinarView />;
}
