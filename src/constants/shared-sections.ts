export type StatItem = {
  value: string;
  color: string;
  label: string;
};

export const defaultStatsStrip: StatItem[] = [
  { value: "11+", color: "text-vbs-red", label: "Years Embedded Inside U.S. AEC Delivery" },
  { value: "2000+", color: "text-vbs-green", label: "Production professionals across delivery centers" },
  { value: "5+", color: "text-vbs-blue", label: "Years Average Engagement Length" },
  { value: "6+", color: "text-vbs-yellow", label: "Disciplines Covered" },
];

export const aboutStatsStrip: StatItem[] = [
  { value: "11+", color: "text-vbs-red", label: "Years Embedded Inside U.S. AEC Delivery" },
  { value: "2000+", color: "text-vbs-green", label: "Concurrent Project Environments" },
  { value: "5+", color: "text-vbs-blue", label: "Years Average Engagement Length" },
  { value: "6+", color: "text-vbs-yellow", label: "Disciplines Covered" },
];

export const testimonials = [
  {
    name: "Marvin McKinney",
    role: "CEO at Oceanmtech",
    avatar: "/images/figma/testimonial-1.png",
    cover: "/images/figma/resource-1.png",
  },
  {
    name: "Cody Fisher",
    role: "CEO at Oceanmtech",
    avatar: "/images/figma/testimonial-2.png",
    cover: "/images/figma/resource-2.png",
  },
  {
    name: "Darlene Robertson",
    role: "CEO at Oceanmtech",
    avatar: "/images/figma/testimonial-1.png",
    cover: "/images/figma/resource-3.png",
  },
  {
    name: "Savannah Nguyen",
    role: "CEO at Oceanmtech",
    avatar: "/images/figma/testimonial-2.png",
    cover: "/images/figma/resource-1.png",
  },
] as const;

export const testimonialQuote =
  "Whether you're launching a new product or entering a new segment, we design the GTM motion that lands and scales. Whether you're launching a new product or entering a new segment, we design the GTM motion that lands and scales.";
