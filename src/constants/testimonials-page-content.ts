import { aboutHeroImages } from "@/constants/about-content";
import { testimonialQuote } from "@/constants/shared-sections";

export const testimonialsPageHero = {
  tag: "Testimonials",
  titleLead: "Testimonials ",
  titleAccent: "@VBS",
  description:
    "As a specialized MEP BIM modeling service provider in the USA, we ensure your building systems are clash-free and fabrication-ready.",
  ctaLabel: "Contact Us",
  images: aboutHeroImages,
  mainImageAlt: "Virtual Building Studio team",
  overlayImageAlt: "Virtual Building Studio workplace",
} as const;

export const testimonialsReviewsIntro = {
  tag: "Client Reviews",
  titleLead: "Our Success ",
  titleAccent: "Stories and Client Reviews",
  description:
    "Meet the visionaries and experts who guide Virtual Building Studio's mission to revolutionize the AEC industry through innovation and dedication.",
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

/** Figma 948:29976 — client review cards */
export const clientReviewItems: ClientReviewItem[] = [
  {
    id: "review-1",
    name: "Marvin McKinney",
    role: "CEO at Oceanmtech",
    quote: testimonialQuote,
    avatar: "/images/figma/testimonial-1.png",
    cover: reviewCovers[0],
  },
  {
    id: "review-2",
    name: "Ronald Richards",
    role: "Binford Ltd.",
    quote: testimonialQuote,
    avatar: "/images/figma/testimonial-2.png",
    cover: reviewCovers[1],
  },
  {
    id: "review-3",
    name: "Jenny Wilson",
    role: "Binford Ltd.",
    quote: testimonialQuote,
    avatar: "/images/figma/testimonial-1.png",
    cover: reviewCovers[2],
  },
  {
    id: "review-4",
    name: "Dianne Russell",
    role: "Biffco Enterprises Ltd.",
    quote: testimonialQuote,
    avatar: "/images/figma/testimonial-2.png",
    cover: reviewCovers[3],
  },
  {
    id: "review-5",
    name: "Arlene McCoy",
    role: "Big Kahuna Burger Ltd.",
    quote: testimonialQuote,
    avatar: "/images/figma/testimonial-1.png",
    cover: reviewCovers[4],
  },
  {
    id: "review-6",
    name: "Theresa Webb",
    role: "Barone LLC.",
    quote: testimonialQuote,
    avatar: "/images/figma/testimonial-2.png",
    cover: reviewCovers[5],
  },
  {
    id: "review-7",
    name: "Marvin McKinney",
    role: "Abstergo Ltd.",
    quote: testimonialQuote,
    avatar: "/images/figma/testimonial-1.png",
    cover: reviewCovers[6],
  },
  {
    id: "review-8",
    name: "Cameron Williamson",
    role: "Abstergo Ltd.",
    quote: testimonialQuote,
    avatar: "/images/figma/testimonial-2.png",
    cover: reviewCovers[7],
  },
  {
    id: "review-9",
    name: "Cody Fisher",
    role: "Binford Ltd.",
    quote: testimonialQuote,
    avatar: "/images/figma/testimonial-1.png",
    cover: reviewCovers[8],
  },
  {
    id: "review-10",
    name: "Albert Flores",
    role: "Acme Co.",
    quote: testimonialQuote,
    avatar: "/images/figma/testimonial-2.png",
    cover: reviewCovers[9],
  },
];

/** All 10 reviews on page 01 (single slide) */
export const clientReviewsPerPage = 10;

export const clientReviewPaginationPages = ["01", "02", "03", "...", "09", "10"] as const;
