import { engagementModelCards } from "@/constants/home-content";

export { engagementModelCards };

export type EngagementModelCard = (typeof engagementModelCards)[number];

export const defaultEngagementModelsHeader = {
  tag: "Engagement Models",
  titleLine1: "Flexible Engagement Models Built Around",
  titleAccent: "Your Delivery Needs",
  description:
    "Whether you need project-based BIM support, a dedicated remote team, or a fully managed global delivery center, our engagement models are designed to scale with your business.",
} as const;
