import { MepPageHeroSection } from "@/components/sections/mep/mep-page-hero-section";

const mepEngineersHero = {
  tag: "MEP Engineering Firms",
  titleLead: "MEP BIM Services That Reduce Rework & ",
  titleAccent: "Improve Project Coordination",
  description:
    "From pre-bid estimation to clash-free coordination and as-built models we help contractors and AEC firms deliver projects faster and more efficiently.",
  ctaLabel: "View All Service",
  imageSrc: "/images/mep/mep-hero-bg-68e547.png",
} as const;

/** MEP Engineers hero — Figma node 265:59177 (Hero Main) */
export function MepHeroSection() {
  return <MepPageHeroSection {...mepEngineersHero} />;
}
