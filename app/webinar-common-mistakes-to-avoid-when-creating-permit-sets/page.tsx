import type { Metadata } from "next";

import { WebinarCommonMistakesView } from "@/components/sections/webinar/webinar-common-mistakes-view";

export const metadata: Metadata = {
  title: "Webinar - 5 Common Mistakes to Avoid When Creating Permit Sets | Virtual Building Studio",
  description:
    'Join our webinar on "5 Common Mistakes to Avoid When Creating Permit Sets" and learn how to streamline your workflow, avoid costly errors, and ensure smooth approvals.',
};

export default function WebinarCommonMistakesPage() {
  return <WebinarCommonMistakesView />;
}
