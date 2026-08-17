import { founderSectionCopy } from "@/constants/about-content";
import { homeOurClientsLogos } from "@/constants/home-content";
import { ROUTES } from "@/constants/navigation";

export const AIA_FAQ_ITEMS = [
  {
    q: "What will we actually discuss?",
    a: "Your delivery setup, where pressure is building, and how the 60-minute team build works for a live project in your pipeline. Focused, practical - not a brochure walk-through.",
  },
  {
    q: "Is this relevant for our firm?",
    a: "If you're a US architecture or engineering firm with more work coming in than your current bench can absorb - yes. We've worked with 100+ firms across SD, DD, CD, permit drawings, coordinated models, and as-built modeling.",
  },
  {
    q: "How is this different from outsourcing?",
    a: "We don't send freelancers. Dedicated production teams embed inside your workflow - aligned to your templates and review cycles. ISO 9001 and 27001 certified. Operationally closer to embedded staff than to traditional outsourcing.",
  },
  {
    q: "Do I need to prepare anything?",
    a: "Just a general sense of a project where you're feeling delivery pressure. We'll take it from there.",
  },
] as const;

export const aiaConferenceFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: AIA_FAQ_ITEMS.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: {
      "@type": "Answer",
      text: a,
    },
  })),
};

export const aiaHeroCopy = {
  tag: "AIA Conference Event",
  titleLead: "Meet Us At ",
  titleAccent: "AIA Conference On Architecture 2026",
  description:
    "Introducing an industry first - the 60-minute dedicated team build with AI powered workflows. A new way for architecture and engineering firms to scale delivery capacity. Beyond hiring. Beyond outsourcing.",
  ctaLabel: "Reserve a slot at booth #4539",
  ctaNote: "Takes less than 60 seconds",
  imageCaption:
    "AIA Conference on Architecture . Industry 1st - AI Powered Workflows . Focused Project Conversations",
} as const;

export const aiaHeroCarouselImages = [
  {
    src: "/image/aia-banner-bg-image-2026.png",
    alt: "AIA conference - team at booth",
  },
  {
    src: "/image/aia-banner-2nd.jpg",
    alt: "AIA conference banner",
  },
  {
    src: "/image/header-%20banner-image-3.webp",
    alt: "Architecture delivery at AIA",
  },
] as const;

export const aiaClientsCopy = {
  tag: "At AIA 2026",
  titleLead: "Working With ",
  titleAccent: "Architecture & Engineering Firms",
  description:
    "Architecture · MEP · Scan to BIM - delivered through a single Global Delivery Infrastructure for AEC firms.",
  ctaLabel: "Schedule a meeting",
} as const;

export const aiaClientsLogos = homeOurClientsLogos;

export const aiaTeamCopy = {
  tag: "At AIA 2026",
  titleLead: "Who You'll ",
  titleAccent: "Meet At AIA",
  description:
    "Meet the leadership team behind the industry-first 60-minute team build using AI workflows - on-site at Booth #4539, June 11–12.",
  note: "Available across both days for live project conversations, partnership discussions, and media. Focused, practical discussion. No sales pitch.",
} as const;

export const aiaTeamMembers = [
  {
    name: "AK - Ar. Ankit Kansara",
    role: "Founder & CEO",
    image: "/image/Ar.Ankit-kansara.png",
    featured: true,
    viewMoreHref: `${ROUTES.about}#founder`,
    linkedinHref: founderSectionCopy.linkedinHref,
  },
  {
    name: "Sounak Banerjee",
    role: "EVP - Sales",
    image: "/image/Sounak-Banarjee.jpg",
    featured: false,
    viewMoreHref: ROUTES.leadership,
    linkedinHref: "https://linkedin.com/company/virtual-building-studio-inc/",
  },
  {
    name: "Manish Dey",
    role: "Sales Head - Architecture",
    image: "/image/manish-dey.png",
    featured: false,
    viewMoreHref: ROUTES.leadership,
    linkedinHref: "https://linkedin.com/company/virtual-building-studio-inc/",
  },
] as const;

export const aiaPressureCopy = {
  tag: "The Pressure",
  titleLead: "Where Architecture And ",
  titleAccent: "Engineering Firms Feel Pressure",
  description:
    "The conventional answers - hiring and outsourcing - are failing the pace of the work.",
  image: "/image/where-the-firm-feel-pressure.png",
  imageAlt: "Architecture and engineering teams under delivery pressure",
  callout:
    "Firms get stuck between under-hiring (delivery risk) and over-hiring (cost trap). The 60-minute team build is the third option.",
} as const;

export const aiaPressurePoints = [
  "Firms are leaving work on the table - not because they don't want it, but because they can't staff fast enough to take it on",
  "Hiring takes 90+ days - by the time the seat is filled, the project window has closed",
  "Traditional outsourcing breaks the standards - freelancers don't hold your templates, your review cycles, or your QA discipline",
  "Scaling permanent headcount is a cost trap - fixed overhead in a project pipeline that moves in waves",
] as const;

export const aiaTestimonialsCopy = {
  tag: "Testimonials",
  titleLead: "Trusted By The ",
  titleAccent: "Firms Scaling Delivery Today",
  description:
    "100+ US architecture firms · 4,000+ projects delivered · 450+ A&E professionals · 11+ years · ISO 9001 & 27001 certified · Top 1% architecture team",
} as const;

export const aiaEngageCopy = {
  tag: "How To Engage",
  titleLead: "Connect With Us At ",
  titleAccent: "AIA",
  description: "Two ways to start the conversation. Both lead to the same place.",
} as const;

export const aiaEngageCards = [
  {
    id: "reserve",
    label: "1. Reserve a slot",
    title: "Skip the wait",
    ctaLabel: "Schedule A Meeting",
    action: "meeting" as const,
  },
  {
    id: "walk-in",
    label: "2. Walk in at Booth #4539 (June 11–12)",
    title: "Short and relevant",
    ctaLabel: "Book A Slot",
    action: "slots" as const,
  },
] as const;

export const aiaWalkthroughCopy = {
  tag: "What We Cover",
  titleLead: "What We'll ",
  titleAccent: "Walk You Through",
  description:
    "How the industry-first 60-minute team build works - and what it unlocks for your firm.",
  image: "/image/whatwewillwalkyouthrough.png",
  imageAlt: "AIA walkthrough of the 60-minute team build",
} as const;

export const aiaWalkthroughPoints = [
  {
    title: "The conversation. ",
    text: "Tell us about a live project, where pressure is building, and what your delivery setup looks like today.",
  },
  {
    title: "How the build works. ",
    text: "A dedicated production team - yours alone - assembled in sixty minutes through our AI-augmented delivery infrastructure. Not freelancers. Not outsourcing. A third option.",
  },
  {
    title: "What it unlocks. ",
    text: "Production starts in three days. Aligned to your templates, your standards, your review cycles. Same pace as your in-house bench, without the hiring overhead.",
  },
] as const;

export const aiaCtaCopy = {
  title: "See How A Team Gets Built In Sixty Minutes",
  description:
    "An industry first in AEC delivery - only at Booth #4539. Pre-book your conversation in under a minute.",
  ctaLabel: "View Available slots",
  boothNote: "Booth #4539 · June 11–12",
} as const;

export const aiaFaqCopy = {
  tag: "FAQs",
  titleLine1: "Quick ",
  titleLine2: "Questions",
  description: "Have more questions?",
} as const;
