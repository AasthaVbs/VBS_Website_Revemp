import type { Metadata } from "next";

import { GrowingArchitectureFirmsAddCapacityWithoutChaosView } from "@/components/landing/growing-architecture-firms-add-capacity-without-chaos-view";

export const metadata: Metadata = {
  title: "Architecture Firm Capacity Guide: Why Hiring Alone Isn't Enough",
  description:
    "Is hiring more staff not solving your capacity issues? Discover why architecture firms struggle to scale and learn smarter ways to manage workload, coordination, and delivery with this practical guide.",
  keywords:
    "architecture capacity planning, architecture firm scaling, hiring vs outsourcing architecture, architecture project capacity guide, architecture team expansion, BIM capacity strategy, architecture workflow optimization, project delivery bottlenecks, architecture staffing strategy, AEC capacity management, architecture operations guide, senior architect workload management",
  robots: { index: false, follow: false },
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
