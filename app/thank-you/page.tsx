import type { Metadata } from "next";

import { ThankYouPage } from "@/components/vbs/thank-you-page";

export const metadata: Metadata = {
  title: "Thank You - Virtual Building Studio (VBS)",
  description:
    "We highly value your interest in Virtual Building Studio. To ensure a seamless communication experience, we kindly recommend checking your email, including",
};

export default function ThankYouRoutePage() {
  return <ThankYouPage />;
}
