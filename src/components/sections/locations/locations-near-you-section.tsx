import Link from "next/link";

import { PageContainer } from "@/components/layout/page-container";
import { locationsNearYouSection } from "@/constants/locations-content";

export function LocationsNearYouSection() {
  const { titleLead, titleAccent, description, titleMaxWidth, descriptionMaxWidth, cards } =
    locationsNearYouSection;

  return (
    <section className="locations-near-you bg-white py-12 sm:py-16 lg:py-[100px]">
      <PageContainer className="flex flex-col items-center gap-10 lg:gap-[60px]">
        <div className="flex w-full flex-col items-start gap-5 max-lg:items-center max-lg:text-center">
          <h2
            className="m-0 w-full text-[32px] font-medium leading-[1.15] text-[#111111] sm:text-[40px] min-[1440px]:text-[48px]"
            style={{ maxWidth: titleMaxWidth }}
          >
            <span>{titleLead}</span>
            <span className="font-light text-[#D70416]">{titleAccent}</span>
          </h2>
          <p
            className="m-0 w-full text-[14px] font-normal leading-5 text-[#808080]"
            style={{ maxWidth: descriptionMaxWidth }}
          >
            {description}
          </p>
        </div>

        <div className="flex w-full flex-col items-stretch gap-5 lg:flex-row lg:items-start lg:gap-[30px]">
          {cards.map((card) => (
            <article
              key={card.name}
              className="flex min-w-0 flex-1 flex-col gap-5 overflow-hidden rounded-[10px] border border-[#CBCCCD] bg-white p-5 transition-shadow duration-200 hover:shadow-[0px_4px_10px_rgba(0,0,0,0.15)]"
            >
              <div className="flex w-full flex-col items-start gap-5">
                <h3 className="m-0 w-full text-[20px] font-normal leading-normal text-[#111111] min-[1440px]:text-[24px]">
                  {card.name}
                </h3>
                <ul className="m-0 flex w-full list-none flex-col items-start gap-4 p-0">
                  {card.services.map((service) => (
                    <li key={service.href} className="w-full">
                      <Link
                        href={service.href}
                        className="block w-full text-[16px] font-normal leading-6 text-[#808080] no-underline transition-colors hover:text-[#111111] hover:underline"
                      >
                        {service.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
