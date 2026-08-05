import type { Metadata } from "next";

import { VbsLifeAtVbsPage } from "@/components/vbs/life-at-vbs-page";

export const metadata: Metadata = {
  title: "Life at Virtual Building Studio is full of opportunities, learning",
  description:
    "Discover life at Virtual Building Studio (VBS) — team culture, celebrations, retreats, and events that bring our people together.",
};

export default function LifeAtVbsPage() {
  return <VbsLifeAtVbsPage />;
}
