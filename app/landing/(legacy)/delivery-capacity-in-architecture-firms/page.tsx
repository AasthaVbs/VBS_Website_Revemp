import type { Metadata } from "next";

import { DeliveryCapacityInArchitectureFirmsView } from "@/components/landing/delivery-capacity-in-architecture-firms-view";

export const metadata: Metadata = {
  title: "Where Delivery Capacity Actually Breaks in Growing Architecture Firms | Virtual Building Studio",
  description:
    "If drawing sets are moving through more hands but still requiring more revisions, the issue is not just staffing — it's how delivery is structured.",
};

export default function DeliveryCapacityInArchitectureFirmsPage() {
  return <DeliveryCapacityInArchitectureFirmsView />;
}
