import type { Metadata } from "next";

import { LegalPage } from "@/components/vbs/legal-page";
import { privacyPolicyContent } from "@/constants/legal-content";

export const metadata: Metadata = {
  title: "Privacy Policy | Virtual Building Studio (VBS)",
  description:
    "This Privacy Policy explains how we collect, use, and protect your personal information when you interact with us through our website…",
};

export default function PrivacyPolicyPage() {
  return <LegalPage document={privacyPolicyContent} />;
}
