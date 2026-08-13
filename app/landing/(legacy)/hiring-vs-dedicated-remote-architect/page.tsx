import type { Metadata } from "next";

import { HiringVsDedicatedRemoteArchitectView } from "@/components/landing/hiring-vs-dedicated-remote-architect-view";

export const metadata: Metadata = {
  title: "Hiring vs Dedicated Remote Architect: What Happens After You Hire",
  description:
    "A structural look at what actually changes inside architecture firms during the first 90 days after adding capacity. Before you add headcount, understand the mechanics.",
};

export default function HiringVsDedicatedRemoteArchitectPage() {
  return <HiringVsDedicatedRemoteArchitectView />;
}
