import type { Metadata } from "next";

import { DeliveryCapacityInArchitectureFirmsView } from "@/components/landing/delivery-capacity-in-architecture-firms-view";

export const metadata: Metadata = {
  title: "Capacity Systems for Growing Architecture Firms | Virtual Building Studio",
  description:
    "Practical tools used by growing architecture firms to evaluate delivery capacity decisions before making the next hire.",
};

export default function DeliveryCapacityInArchitectureFirmsPage() {
  return <DeliveryCapacityInArchitectureFirmsView />;
}
