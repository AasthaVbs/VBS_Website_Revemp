import type { Metadata } from "next";

import { DeliveryInsideArchitectureFirmsView } from "@/components/landing/delivery-inside-architecture-firms-view";

export const metadata: Metadata = {
  title: "Awareness | Virtual Building Studio",
  description:
    "Awareness | Virtual Building Studio. Scale delivery without the strain. Explore our approach to growth-ready project delivery for AEC.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Awareness | Virtual Building Studio",
    description:
      "Awareness | Virtual Building Studio. Scale delivery without the strain. Explore our approach to growth-ready project delivery for AEC.",
    images: [{ url: "/image/main-img.png" }],
  },
  twitter: {
    title: "Awareness | Virtual Building Studio",
    description:
      "Awareness | Virtual Building Studio. Scale delivery without the strain. Explore our approach to growth-ready project delivery for AEC.",
    images: ["/image/main-img.png"],
  },
};

export default function DeliveryInsideArchitectureFirmsPage() {
  return <DeliveryInsideArchitectureFirmsView />;
}
