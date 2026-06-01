import type { Metadata } from "next";

import { VbsContactPage } from "@/components/vbs/contact-page";

export const metadata: Metadata = {
  title: "Contact Us | Virtual Building Studio",
  description:
    "Contact Virtual Building Studio to discuss BIM delivery, team scale, and partnership for Architecture and Engineering firms.",
};

export default function ContactPage() {
  return <VbsContactPage />;
}
