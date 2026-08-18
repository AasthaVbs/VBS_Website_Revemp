import type { Metadata } from "next";

import { HiringVsDedicatedRemoteArchitectView } from "@/components/landing/hiring-vs-dedicated-remote-architect-view";

export const metadata: Metadata = {
  title: "Hiring vs Dedicated Remote Architect: What Happens Next?",
  description:
    "Explore what changes in architecture firms during the first 90 days after adding capacity. Understand workload, coordination, and delivery before hiring.",
  robots: { index: false, follow: false },
};

export default function HiringVsDedicatedRemoteArchitectPage() {
  return <HiringVsDedicatedRemoteArchitectView />;
}
