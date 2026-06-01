import Image from "next/image";
import { ChevronRight, Mail, MapPin, Phone } from "lucide-react";

import { PageContainer } from "@/components/layout/page-container";
import { SectionTag } from "@/components/sections/section-primitives";
import {
  officeLocations,
  ourLocationsSectionCopy,
  type OfficeLocation,
} from "@/constants/contact-content";
import { cn } from "@/lib/utils";

function LocationCard({ location }: { location: OfficeLocation }) {
  return (
    <article
      className={cn(
        "flex w-full min-w-0 max-w-[710px] flex-col items-stretch gap-5 rounded-[10px] bg-white p-5 xl:shrink-0",
        location.showCardBorder && "border border-[#CBCCCD] shadow-[0_4px_10px_rgba(0,0,0,0.15)]",
      )}
    >
      <div className="flex flex-col gap-5">
        <h3 className="text-[24px] font-medium text-[#111111]">{location.name}</h3>

        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between lg:gap-4">
          <div className="flex min-w-0 gap-2.5 lg:max-w-[303px]">
            <MapPin className="mt-0.5 h-6 w-6 shrink-0 stroke-[#111111]" strokeWidth={1.5} />
            <p className="text-[16px] font-normal lowercase leading-6 text-[#111111]">
              {location.address}
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-2.5">
            <Phone className="h-6 w-6 shrink-0 stroke-[#111111]" strokeWidth={1.5} />
            <a
              href={`tel:${location.phone.replace(/\D/g, "")}`}
              className="text-[16px] font-normal lowercase leading-6 text-[#111111] hover:underline"
            >
              {location.phone}
            </a>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <Mail className="h-6 w-6 shrink-0 stroke-[#111111]" strokeWidth={1.5} />
          <a
            href={`mailto:${location.email}`}
            className="text-[16px] font-normal lowercase leading-6 text-[#111111] hover:underline"
          >
            {location.email}
          </a>
        </div>
      </div>

      <div className="relative h-[min(400px,60vw)] min-h-[240px] w-full overflow-hidden rounded-[10px] bg-[#E8E8E8] sm:h-[400px]">
        <div
          className="absolute left-0 w-full"
          style={{ top: location.mapImageOffsetY, height: "144.89%" }}
        >
          <div className="relative h-full w-full min-h-[580px]">
            <Image
              src={location.mapImage}
              alt={`Map showing ${location.name} office`}
              fill
              className="object-cover object-center"
              sizes="710px"
            />
          </div>
        </div>

        {location.id === "new-jersey" ? (
          <div className="pointer-events-none absolute left-[19.5%] top-[47.9%] z-10 flex flex-col items-center">
            <div className="rounded-[9px] bg-[rgba(15,15,20,0.88)] px-3 py-1.5">
              <p className="max-w-[280px] text-center text-[12px] font-medium leading-snug text-white">
                {location.mapLabel}
              </p>
            </div>
            <div
              className="h-[7px] w-[13px] bg-[rgba(15,15,20,0.88)]"
              style={{ clipPath: "polygon(50% 100%, 0 0, 100% 0)" }}
              aria-hidden
            />
          </div>
        ) : null}

        <a
          href={location.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-4 right-4 z-20 inline-flex items-center gap-1.5 rounded-[10px] bg-white px-3 py-2.5 text-[16px] font-normal text-[#2299D6] shadow-[0_4px_10px_rgba(0,0,0,0.2)] transition-colors hover:text-[#1a7aad]"
        >
          Open In Maps
          <ChevronRight className="h-5 w-5 -rotate-90" strokeWidth={1.5} />
        </a>
      </div>
    </article>
  );
}

/** Figma node 372:69005 — Our Locations */
export function OurLocationsSection() {
  const { tag, titleLead, titleAccent } = ourLocationsSectionCopy;

  return (
    <section className="overflow-hidden bg-white py-12 lg:py-[100px]">
      <PageContainer className="flex flex-col gap-10 lg:gap-[60px]">
        <div className="flex max-w-[522px] flex-col gap-5">
          <div className="flex flex-col gap-3">
            <SectionTag label={tag} />
            <h2 className="text-section max-w-[497px] capitalize">
              {titleLead}
              <span className="text-accent font-light">{titleAccent}</span>
            </h2>
          </div>
        </div>

        <div className="flex w-full flex-col gap-5 xl:flex-row xl:items-start xl:gap-5">
          {officeLocations.map((location) => (
            <LocationCard key={location.id} location={location} />
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
