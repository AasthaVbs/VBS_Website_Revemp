import type { Metadata } from "next";

import { GrowingArchitectureFirmsAddCapacityWithoutChaosView } from "@/components/landing/growing-architecture-firms-add-capacity-without-chaos-view";

export const metadata: Metadata = {
  title: "When Hiring Stops Working, What Comes Next? | Virtual Building Studio",
  description:
    "As architecture firms grow, hiring more staff alone can't alleviate capacity pressures. This guide breaks down why and what leaders must look at before making the next capacity decision.",
  openGraph: {
    title: "When Hiring Stops Working, What Comes Next? | Virtual Building Studio",
    description:
      "As architecture firms grow, hiring more staff alone can't alleviate capacity pressures. This guide breaks down why and what leaders must look at before making the next capacity decision.",
    images: [{ url: "/image/When-Hiring-Normal.jpg" }],
  },
};

export default function GrowingArchitectureFirmsAddCapacityWithoutChaosPage() {
  return <GrowingArchitectureFirmsAddCapacityWithoutChaosView />;
}
