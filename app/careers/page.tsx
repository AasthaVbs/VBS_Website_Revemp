import type { Metadata } from "next";

import { VbsCareersPage } from "@/components/vbs/careers-page";

export const metadata: Metadata = {
  title: "Join Our Team of BIM Experts, Explore Job Opportunities",
  description:
    "Join our innovative team of BIM professionals at Virtual Building Studio. Transform the construction industry through the power of BIM. Explore career opportunities and be part of shaping the future of construction.",
};

export default function CareersPage() {
  return <VbsCareersPage />;
}
