import Link from "next/link";
import { ChevronLeft } from "lucide-react";

import { PageContainer } from "@/components/layout/page-container";
import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";
import { careersDetailedHeroCopy } from "@/constants/careers-content";

type DetailSection = (typeof careersDetailedHeroCopy.sections)[number];

/** Figma node 636:10655 — Career details hero */
export function CareersDetailedHeroSection() {
  const { backLabel, title, stats, sections, growthBlocks, card } = careersDetailedHeroCopy;
  const [introSection, ...fullWidthSections] = sections;

  return (
    <section className="bg-white py-12 lg:py-[100px]">
      <PageContainer className="flex flex-col gap-[30px]">
        <div className="relative grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_420px] lg:gap-[60px]">
          <div className="flex min-w-0 flex-col items-start gap-5 lg:gap-[30px]">
            <Link
              href="/careers"
              className="inline-flex items-center gap-1 text-[16px] font-medium capitalize text-[#D70416]"
            >
              <ChevronLeft className="h-4 w-4" />
              {backLabel}
            </Link>

            <h1 className="text-[34px] font-medium leading-tight text-[#111111] lg:text-[48px]">
              {title}
            </h1>

            <div className="flex w-full flex-wrap items-center gap-2.5">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="flex w-full max-w-[272px] flex-col items-start gap-2.5 px-2.5 sm:w-auto"
                >
                  <p className="text-[16px] font-medium capitalize leading-6 text-[#111111]">{item.label}</p>
                  <p className="text-[16px] font-normal capitalize leading-6 text-[#111111]">{item.value}</p>
                </div>
              ))}
            </div>

            {introSection ? <DetailBlock section={introSection} className="w-full max-w-[926px]" /> : null}
          </div>

          <aside className="relative top-0 w-full overflow-hidden rounded-[10px] border border-[#CBCCCD] bg-white p-5 shadow-[0_4px_10px_rgba(0,0,0,0.15)] lg:sticky lg:top-[150px]">
            <div className="flex flex-col gap-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2.5">
                  <p className="text-[16px] font-normal leading-6 text-[#808080]">Job Title:</p>
                  <p className="text-[16px] font-normal capitalize leading-6 text-[#111111]">{card.title}</p>
                </div>
                <div className="flex flex-col gap-2.5">
                  <p className="text-[16px] font-normal leading-6 text-[#808080]">Date:</p>
                  <p className="text-[16px] font-normal capitalize leading-6 text-[#111111]">{card.date}</p>
                </div>
              </div>

              <div className="flex flex-col gap-2.5">
                <p className="text-[16px] font-normal leading-6 text-[#808080]">Designation:</p>
                <p className="text-[16px] font-normal capitalize leading-6 text-[#111111]">
                  {card.designation}
                </p>
              </div>
            </div>

            <div className="mt-10">
              <PrimaryCtaButton fullWidth stripedLong className="w-full">
                {card.ctaLabel}
              </PrimaryCtaButton>
            </div>

            <div
              className="absolute bottom-0 left-0 flex h-1 w-full overflow-hidden"
              aria-hidden
            >
              <span className="h-full w-1/4 bg-[#D70416]" />
              <span className="h-full w-1/4 bg-[#42AA32]" />
              <span className="h-full w-1/4 bg-[#2299D6]" />
              <span className="h-full w-1/4 bg-[#F0B300]" />
            </div>
          </aside>
        </div>

        <div className="flex w-full flex-col items-stretch gap-[30px]">
          {fullWidthSections.map((section) => (
            <DetailBlock key={section.title} section={section} className="w-full" />
          ))}

          <article className="flex w-full flex-col items-start gap-2.5">
            <h2 className="w-full text-[16px] font-medium leading-6 text-[#111111]">
              How you&apos;ll grow
            </h2>
            <div className="flex w-full flex-col gap-4">
              {growthBlocks.map((block) => (
                <div key={block.title} className="flex w-full flex-col gap-1">
                  <h3 className="text-[16px] font-medium leading-6 text-[#808080]">
                    {block.title}
                  </h3>
                  <p className="text-[16px] font-normal leading-6 text-[#808080]">
                    {block.content}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </PageContainer>
    </section>
  );
}

function DetailBlock({ section, className }: { section: DetailSection; className?: string }) {
  const paragraphs = "paragraphs" in section ? section.paragraphs : undefined;
  const bullets = "bullets" in section ? section.bullets : undefined;

  return (
    <article className={`flex flex-col items-start gap-2.5 ${className ?? ""}`}>
      <h2 className="w-full text-[16px] font-medium leading-6 text-[#111111]">{section.title}</h2>
      {paragraphs?.map((paragraph) => (
        <p key={paragraph} className="w-full text-[16px] font-normal leading-6 text-[#808080]">
          {paragraph}
        </p>
      ))}
      {bullets ? (
        <div className="flex w-full flex-col gap-0">
          {bullets.map((item) => (
            <p key={item} className="w-full text-[16px] font-normal leading-6 text-[#808080]">
              {item}
            </p>
          ))}
        </div>
      ) : null}
    </article>
  );
}
