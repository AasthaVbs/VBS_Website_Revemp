import type { Metadata } from "next";

import { PracticePage } from "@/components/vbs/practice-page";

export const metadata: Metadata = {
  title: "Building Better Architecture Practices | Virtual Building Studio",
  description:
    "Explore ideas on building better architecture practices through stronger design, delivery, visualization, technology and sustainable growth.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Building Better Architecture Practices | Virtual Building Studio",
    description:
      "Explore ideas on building better architecture practices through stronger design, delivery, visualization, technology and sustainable growth.",
    images: ["/images/practise-banner.jpg"],
  },
  twitter: {
    title: "Building Better Architecture Practices | Virtual Building Studio",
    description:
      "Explore ideas on building better architecture practices through stronger design, delivery, visualization, technology and sustainable growth.",
    images: ["/images/practise-banner.jpg"],
  },
};

export default function Page() {
  return <PracticePage />;
}
