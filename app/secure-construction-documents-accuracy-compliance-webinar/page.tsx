import type { Metadata } from "next";

import { SecureConstructionDocumentsWebinarView } from "@/components/sections/webinar/secure-construction-documents-webinar-view";

export const metadata: Metadata = {
  title:
    "Webinar - 3 Steps to Secure Construction Documents with Accuracy and Compliance",
  description:
    "Boost project success! Learn 3 key steps to ensure accuracy, minimize risks, and maintain compliance in your construction documents. Don’t miss this webinar!",
};

export default function SecureConstructionDocumentsWebinarPage() {
  return <SecureConstructionDocumentsWebinarView />;
}
