import { ChevronRight } from "lucide-react";
import Link from "next/link";

import { PageContainer } from "@/components/layout/page-container";

export type LocationServiceNearYouContent = {
  titleLead: string;
  titleAccent: string;
  titleMaxWidth?: number;
  locations: readonly { name: string; href: string }[];
};

export function LocationServiceNearYouSection({
  section,
}: {
  section: LocationServiceNearYouContent;
}) {
  const { titleLead, titleAccent, titleMaxWidth = 623, locations } = section;

  return (
    <section className="location-service-near-you bg-[#FAFAFA] py-12 sm:py-16 lg:py-[100px]">
      <PageContainer className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:gap-[60px]">
        <div className="w-full shrink-0 lg:w-[min(676px,48%)]">
          <h2
            className="m-0 w-full capitalize text-[32px] font-medium leading-[1.15] text-[#111111] sm:text-[40px] min-[1440px]:text-[48px]"
            style={{ maxWidth: titleMaxWidth }}
          >
            <span>{titleLead}</span>
            <span className="font-light text-[#D70416]">{titleAccent}</span>
          </h2>
        </div>

        <div className="flex w-full min-w-0 flex-1 flex-col items-stretch gap-5">
          {locations.map((location) => (
            <Link
              key={location.href}
              href={location.href}
              className="group flex w-full items-center justify-between gap-3 rounded-[10px] border border-[#CBCCCD] bg-white px-4 py-6 no-underline transition-shadow duration-200 hover:shadow-[0px_4px_10px_rgba(0,0,0,0.12)] sm:gap-4 sm:px-5 sm:py-8 lg:py-10"
            >
              <span className="text-[18px] font-medium leading-[1.2] text-[#111111] group-hover:!text-[#D70416] group-hover:!underline group-hover:underline-offset-[3px] sm:text-[20px] lg:text-[22px] lg:leading-[28px]">
                {location.name}
              </span>
              <span className="inline-flex shrink-0 items-center gap-1.5 text-[16px] font-normal leading-[30px] text-[#2299D6]">
                View More
                <ChevronRight className="size-6" strokeWidth={1.5} aria-hidden />
              </span>
            </Link>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
