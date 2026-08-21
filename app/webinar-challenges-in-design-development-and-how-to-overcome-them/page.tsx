import type { Metadata } from "next";

import { WebinarChallengesInDesignDevelopmentView } from "@/components/sections/webinar/webinar-challenges-design-development-view";
import { NOINDEX_NOFOLLOW_ROBOTS } from "@/constants/site-robots";

export const metadata: Metadata = {
  title:
    "Webinar - Top 5 Challenges in Design Development (DD) and How to Overcome Them",
  description:
    'Join our webinar, "Top 5 Challenges in Design Development (DD) and How to Overcome Them," to discover expert strategies for tackling common design hurdles and enhancing project success.',
  robots: NOINDEX_NOFOLLOW_ROBOTS,
};

export default function WebinarChallengesInDesignDevelopmentPage() {
  return <WebinarChallengesInDesignDevelopmentView />;
}
