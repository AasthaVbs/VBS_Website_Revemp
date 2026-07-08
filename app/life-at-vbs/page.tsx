import type { Metadata } from "next";

import { VbsLifeAtVbsPage } from "@/components/vbs/life-at-vbs-page";

export const metadata: Metadata = {
  title: "Life at VBS | Virtual Building Studio",
  description:
    "Discover life at Virtual Building Studio — a culture built on collaboration, growth, and celebrating team achievements.",
};

export default function LifeAtVbsPage() {
  return <VbsLifeAtVbsPage />;
}
