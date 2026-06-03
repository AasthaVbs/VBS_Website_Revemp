export type ClientSuccessStory = {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar: string;
  thumbnail: string;
  thumbnailAlt: string;
  youtubeVideoId: string;
};

export const clientSuccessStoriesDefaultDescription =
  "We offer two flexible engagement models that work best for our clients.";

export const clientSuccessStoryQuote =
  "Whether you're launching a new product or entering a new segment, we design the GTM motion that lands and scales. Whether you're launching a new product or entering a new segment, we design the GTM motion that lands and scales.";

/** Figma 1398:16053 — PMPC, Lexent Design, Whitten Architects video testimonials */
export const clientSuccessStories: ClientSuccessStory[] = [

  {
    id: "lexent",
    name: "Marvin McKinney",
    role: "CEO at Oceanmtech",
    quote: clientSuccessStoryQuote,
    avatar: "/icons/Alec Whitten  1.png",
    thumbnail: "/images/Image 1-thumbnial.png",
    thumbnailAlt: "Lexent Design founder video testimonial for Virtual Building Studio",
    youtubeVideoId: "uyaBPQrNhW0",
  },
  {
    id: "whitten",
    name: "Marvin McKinney",
    role: "CEO at Oceanmtech",
    quote: clientSuccessStoryQuote,
    avatar: "/icons/Lexent Design  1.png",
    
    thumbnail: "/images/Image-1-youtube-thumbnail.png",
    thumbnailAlt: "Alec Whitten video testimonial for Virtual Building Studio",
    youtubeVideoId: "2NsLtpdtMto",
  },
  {
    id: "pmpc",
    name: "Alec Whitten",
    role: "Founder, Whitten Architects",
    quote: clientSuccessStoryQuote,
    avatar: "/images/figma/testimonial-1.png",
    thumbnail: "/images/Image-2-yt-thumbnail.png",
    thumbnailAlt: "PMPC Architects video testimonial for Virtual Building Studio",
    youtubeVideoId: "nHNRCMkaGAk",
  },
];
