import type { Metadata } from "next";

import { WebinarCommonMistakesView } from "@/components/sections/webinar/webinar-common-mistakes-view";

export const metadata: Metadata = {
  title: "Webinar - 5 Common Mistakes to Avoid When Creating Permit Sets",
  description:
    "Join our webinar on 5 Common Permit Set Mistakes. Learn to streamline workflows, avoid costly errors, improve accuracy, and ensure smoother project approvals.",
};

export default function WebinarCommonMistakesPage() {
  return <WebinarCommonMistakesView />;
}
