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
  "Hear how architects and firm owners scaled production, reclaimed time, and grew revenue with dedicated BIM support.";

/** Figma 1982:24723 — Whitten Architects, Lexent Design, PMPC */
export const clientSuccessStories: ClientSuccessStory[] = [
  {
    id: "whitten",
    name: "Alec Whitten",
    role: "Founder of Whitten Architects",
    quote:
      "From absorbing full production workloads to building a true right-hand partner. A Los Angeles architecture firm streamlined production with one dedicated resource—cutting delivery time by 75% and improving operational efficiency.",
    avatar: "/icons/Alec Whitten  1.png",
    thumbnail: "/image/alex-whitten-youtube-1.jpg",
    thumbnailAlt: "Alec Whitten video testimonial for Virtual Building Studio",
    youtubeVideoId: "2NsLtpdtMto",
  },
  {
    id: "lexent",
    name: "Alexandra Culcier",
    role: "Founder of Lexent Design",
    quote:
      "From late-night deadlines and unreliable contractors to dependable 1–2-day turnarounds. This Columbus-based architect achieved 3–4X productivity, improved profitability, and gained the capacity to take on more projects without burnout.",
    avatar: "/icons/Lexent Design  1.png",
    thumbnail: "/image/lexent-desing-youtube-2.jpg",
    thumbnailAlt: "Alexandra Culcier video testimonial for Virtual Building Studio",
    youtubeVideoId: "uyaBPQrNhW0",
  },
  {
    id: "pmpc",
    name: "Prashanth Mahakali",
    role: "Principal Architect at PMPC",
    quote:
      "From constant production pressure to scalable growth—this Chicago-based firm improved turnaround times and supported $1M+ annual revenue with a more efficient delivery model.",
    avatar: "/icons/pmpc-logo.png",
    thumbnail: "/images/Image-2-yt-thumbnail.png",
    thumbnailAlt: "Prashanth Mahakali video testimonial for Virtual Building Studio",
    youtubeVideoId: "nHNRCMkaGAk",
  },
];
