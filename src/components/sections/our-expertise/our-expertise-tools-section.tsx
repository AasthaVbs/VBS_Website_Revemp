import Image from "next/image";

import { PageContainer } from "@/components/layout/page-container";
import {
  ourExpertiseToolCategories,
  ourExpertiseToolsSection,
} from "@/constants/our-expertise-content";

const rowOne = ourExpertiseToolCategories.filter((category) => category.row === 1);
const rowTwo = ourExpertiseToolCategories.filter((category) => category.row === 2);

function ToolCard({
  title,
  canvas,
  canvasAlt,
}: (typeof ourExpertiseToolCategories)[number]) {
  return (
    <article className="flex min-w-0 flex-1 flex-col items-start gap-5 overflow-hidden rounded-[10px] border border-[#CBCCCD] bg-white p-5">
      <div className="relative h-[200px] w-full overflow-hidden rounded-[10px] border border-[#EAEAEA] sm:h-[240px] lg:h-[260px]">
        <Image
          src={canvas}
          alt={canvasAlt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 670px"
        />
      </div>
      <h3 className="w-full text-[20px] font-medium leading-normal text-[#111111] sm:text-[24px]">{title}</h3>
    </article>
  );
}

export function OurExpertiseToolsSection() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-[100px]">
      <PageContainer>
        <div className="flex flex-col items-center gap-10 lg:gap-[60px]">
          <h2 className="max-w-[1038px] px-1 text-center capitalize text-section">
            <span className="text-section font-medium text-[#111111]">
              {ourExpertiseToolsSection.titleLead}
            </span>
            <span className="text-section text-accent font-light">
              {ourExpertiseToolsSection.titleAccent}
            </span>
          </h2>

          <div className="flex w-full flex-col gap-5">
            <div className="flex flex-col items-stretch gap-5 lg:flex-row">
              {rowOne.map((card) => (
                <ToolCard key={card.title} {...card} />
              ))}
            </div>
            <div className="flex flex-col items-stretch gap-5 lg:flex-row">
              {rowTwo.map((card) => (
                <ToolCard key={card.title} {...card} />
              ))}
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
