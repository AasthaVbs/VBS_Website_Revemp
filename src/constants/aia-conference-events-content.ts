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
