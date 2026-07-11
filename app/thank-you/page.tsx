import type { Metadata } from "next";

import { ThankYouPage } from "@/components/vbs/thank-you-page";

export const metadata: Metadata = {
  title: "Thank You | Virtual Building Studio",
  description: "Thank you for contacting Virtual Building Studio.",
};

export default function ThankYouRoutePage() {
  return <ThankYouPage />;
}
