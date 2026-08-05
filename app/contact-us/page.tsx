import type { Metadata } from "next";

import { VbsContactPage } from "@/components/vbs/contact-page";

export const metadata: Metadata = {
  title: "Fill Up the Form & Tell Us Your Requirements",
  description:
    "Need expert BIM support? Virtual Building Studio delivers reliable BIM solutions for architecture, engineering, and construction firms.",
};

export default function ContactPage() {
  return <VbsContactPage />;
}
