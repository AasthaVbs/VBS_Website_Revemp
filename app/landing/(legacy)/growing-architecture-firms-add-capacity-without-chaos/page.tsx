import type { Metadata } from "next";

import { GrowingArchitectureFirmsAddCapacityWithoutChaosView } from "@/components/landing/growing-architecture-firms-add-capacity-without-chaos-view";

export const metadata: Metadata = {
  title: "Architecture Firm Capacity Guide: Why Hiring Alone Isn't Enough",
  description:
    "Is hiring more staff not solving your capacity issues? Discover why architecture firms struggle to scale and learn smarter ways to manage workload, coordination, and delivery with this practical guide.",
  openGraph: {
    title: "Architecture Firm Capacity Guide: Why Hiring Alone Isn't Enough",
    description:
      "Is hiring more staff not solving your capacity issues? Discover why architecture firms struggle to scale and learn smarter ways to manage workload, coordination, and delivery with this practical guide.",
    images: [{ url: "/image/When-Hiring-Normal.jpg" }],
  },
};

export default function GrowingArchitectureFirmsAddCapacityWithoutChaosPage() {
  return <GrowingArchitectureFirmsAddCapacityWithoutChaosView />;
}
