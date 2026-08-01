import { testimonialQuote } from "@/constants/shared-sections";

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
    "Meet the visionaries and experts who guide Virtual Building Studio's mission to revolutionize the AEC industry through innovation and dedication.",
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
  cover: string;
};

const reviewCovers = [
  "/images/figma/resource-1.png",
  "/images/figma/resource-2.png",
  "/images/figma/resource-3.png",
  "/images/figma/industry-1.png",
  "/images/figma/industry-2.png",
  "/images/figma/industry-4.png",
  "/images/figma/industry-6.png",
  "/images/figma/industry-7.png",
  "/images/figma/evaluate-cta-1.png",
  "/images/figma/evaluate-cta-2.png",
] as const;

/** Figma 948:29976 — base client review cards (cycled across pages) */
const clientReviewTemplates: Omit<ClientReviewItem, "id">[] = [
  {
    name: "Marvin McKinney",
    role: "CEO at Oceanmtech",
    quote: testimonialQuote,
    avatar: "/images/figma/testimonial-1.png",
    cover: reviewCovers[0],
  },
  {
    name: "Ronald Richards",
    role: "Binford Ltd.",
    quote: testimonialQuote,
    avatar: "/images/figma/testimonial-2.png",
    cover: reviewCovers[1],
  },
  {
    name: "Jenny Wilson",
    role: "Binford Ltd.",
    quote: testimonialQuote,
    avatar: "/images/figma/testimonial-1.png",
    cover: reviewCovers[2],
  },
  {
    name: "Dianne Russell",
    role: "Biffco Enterprises Ltd.",
    quote: testimonialQuote,
    avatar: "/images/figma/testimonial-2.png",
    cover: reviewCovers[3],
  },
  {
    name: "Arlene McCoy",
    role: "Big Kahuna Burger Ltd.",
    quote: testimonialQuote,
    avatar: "/images/figma/testimonial-1.png",
    cover: reviewCovers[4],
  },
  {
    name: "Theresa Webb",
    role: "Barone LLC.",
    quote: testimonialQuote,
    avatar: "/images/figma/testimonial-2.png",
    cover: reviewCovers[5],
  },
  {
    name: "Marvin McKinney",
    role: "Abstergo Ltd.",
    quote: testimonialQuote,
    avatar: "/images/figma/testimonial-1.png",
    cover: reviewCovers[6],
  },
  {
    name: "Cameron Williamson",
    role: "Abstergo Ltd.",
    quote: testimonialQuote,
    avatar: "/images/figma/testimonial-2.png",
    cover: reviewCovers[7],
  },
  {
    name: "Cody Fisher",
    role: "Binford Ltd.",
    quote: testimonialQuote,
    avatar: "/images/figma/testimonial-1.png",
    cover: reviewCovers[8],
  },
  {
    name: "Albert Flores",
    role: "Acme Co.",
    quote: testimonialQuote,
    avatar: "/images/figma/testimonial-2.png",
    cover: reviewCovers[9],
  },
];

/** 10 reviews per page × 10 pages (Figma pagination 01…10) */
export const clientReviewsPerPage = 10;
export const clientReviewTotalPages = 10;

export const clientReviewItems: ClientReviewItem[] = Array.from(
  { length: clientReviewsPerPage * clientReviewTotalPages },
  (_, index) => {
    const template = clientReviewTemplates[index % clientReviewTemplates.length];
    return {
      ...template,
      id: `review-${index + 1}`,
      cover: reviewCovers[index % reviewCovers.length],
      avatar:
        index % 2 === 0
          ? "/images/figma/testimonial-1.png"
          : "/images/figma/testimonial-2.png",
    };
  },
);
