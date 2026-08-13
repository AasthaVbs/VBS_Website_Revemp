import type { Metadata } from "next";

import { LegalPage } from "@/components/vbs/legal-page";
import { termsOfUseContent } from "@/constants/legal-content";

export const metadata: Metadata = {
  title: "Terms of Use | Virtual Building Studio (VBS)",
  description:
    "Virtual Building Studio reserves the right to modify, change, or alter these Terms at any time without prior notice. It is your responsibility to review these..",
};

export default function TermsOfUsePage() {
  return <LegalPage document={termsOfUseContent} />;
}
