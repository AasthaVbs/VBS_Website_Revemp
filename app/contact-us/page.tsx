import type { Metadata } from "next";

import { VbsContactPage } from "@/components/vbs/contact-page";

export const metadata: Metadata = {
  title: "Contact Us | BIM Company USA | Virtual Building Studio (VBS)",
  description:
    "Get expert BIM advice from Virtual Building Studio (VBS), a global leader in BIM services delivering accurate, efficient, and high-quality solutions for projects.",
};

export default function ContactPage() {
  return <VbsContactPage />;
}
