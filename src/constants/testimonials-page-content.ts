import { clientSuccessStories } from "@/constants/client-success-stories-content";

export const testimonialsPageHero = {
  tag: "Testimonials",
  titleLead: "What Our ",
  titleAccent: "Clients Say",
  description:
    "Real feedback from clients who rely on our BIM, Scan to BIM, MEP, and digital construction services to deliver successful projects with confidence.",
  ctaLabel: "Contact Us",
  imageAlt: "Client testimonials on Virtual Building Studio BIM services",
} as const;

export const testimonialsReviewsIntro = {
  tag: "Client Reviews",
  titleLead: "Our Success ",
  titleAccent: "Stories and Client Reviews",
  description:
    "Hear how architects and firm owners scaled production, reclaimed time, and grew revenue with dedicated BIM support.",
} as const;

export const testimonialsJoinTeamCta = {
  titleLine1: "Join ",
  titleAccent: "the Team",
  description:
    "Join 500+ BIM experts, architects, and engineers driving innovation for leading architecture, engineering, and construction firms worldwide. Grow your skills, work with cutting-edge technologies, and help deliver exceptional projects.",
  ctaLabel: "Contact Us",
  ctaHref: "/contact-us",
} as const;

export type ClientReviewItem = {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar: string;
};

/** Same three Client Success Stories — quote + avatar only (no video). */
export const clientReviewItems: ClientReviewItem[] = clientSuccessStories.map((story) => ({
  id: story.id,
  name: story.name,
  role: story.role,
  quote: story.quote,
  avatar: story.avatar,
}));
