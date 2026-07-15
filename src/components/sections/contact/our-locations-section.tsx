import Image from "next/image";
import { ChevronRight, MapPin } from "lucide-react";

import { PageContainer } from "@/components/layout/page-container";
import { SectionTag } from "@/components/sections/section-primitives";
import {
  officeLocations,
  ourLocationsSectionCopy,
  type OfficeLocation,
} from "@/constants/contact-content";

function IndiaFlagIcon() {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      aria-hidden
      className="h-[30px] w-[30px] shrink-0 rounded-full"
    >
      <circle cx="15" cy="15" r="15" fill="#FFFFFF" />
      <rect x="0" y="0" width="30" height="10" fill="#FF9933" />
      <rect x="0" y="20" width="30" height="10" fill="#138808" />
      <circle cx="15" cy="15" r="4" fill="#000080" opacity="0.9" />
      <circle cx="15" cy="15" r="3.2" fill="none" stroke="#FFFFFF" strokeWidth="0.6" />
    </svg>
  );
}

function LocationFlag({ location }: { location: OfficeLocation }) {
  if (location.flagIcon === "india") {
    return <IndiaFlagIcon />;
  }

  if (location.flagIcon) {
    return (
      <Image
        src={location.flagIcon}
        alt=""
        width={30}
        height={30}
        className="h-[30px] w-[30px] shrink-0 rounded-full object-cover"
        aria-hidden
      />
    );
  }

  return null;
}

function LocationMap({ location }: { location: OfficeLocation }) {
  if (location.mapEmbedUrl) {
    return (
      <iframe
        title={`Map showing ${location.name} office`}
        src={location.mapEmbedUrl}
        className="vbs-our-locations__map-embed"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    );
  }

  return (
    <div
      className="absolute left-0 w-full"
      style={{ top: location.mapImageOffsetY, height: "144.89%" }}
    >
      <div className="relative h-full min-h-[580px] w-full">
        <Image
          src={location.mapImage || ""}
          alt={`Map showing ${location.name} office`}
          fill
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 427px"
        />
      </div>
    </div>
  );
}

function LocationCard({ location }: { location: OfficeLocation }) {
  return (
    <article className="vbs-our-locations__card w-full shrink-0 lg:min-w-0 lg:flex-1">
      <div className="vbs-our-locations__card-header">
        <div className="vbs-our-locations__card-title-row">
          <LocationFlag location={location} />
          <h3 className="vbs-our-locations__card-title">{location.name}</h3>
        </div>

        <div className="vbs-our-locations__address">
          <MapPin className="mt-0.5 h-6 w-6 shrink-0 stroke-[#111111]" strokeWidth={1.5} />
          <p>
            <span className="vbs-our-locations__address-line1">{location.addressLine1}</span>
            {location.addressLine2 ? (
              <span className="vbs-our-locations__address-line2">{location.addressLine2}</span>
            ) : null}
          </p>
        </div>
      </div>

      <div className="vbs-our-locations__map">
        <LocationMap location={location} />

        {location.mapLabel ? (
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
          className="vbs-our-locations__map-open"
        >
          Open In Maps
          <ChevronRight className="h-5 w-5 -rotate-90" strokeWidth={1.5} />
        </a>
      </div>
    </article>
  );
}

/** Figma node 1985:20498 — Our Locations */
export function OurLocationsSection() {
  const { tag, titleLead, titleAccent, description } = ourLocationsSectionCopy;

  return (
    <section className="vbs-our-locations-section overflow-hidden bg-white py-12 lg:py-[100px]">
      <PageContainer className="vbs-our-locations-section__inner">
        <div className="vbs-our-locations-section__header">
          <div className="vbs-our-locations-section__title-block">
            <SectionTag label={tag} />
            <h2 className="text-section max-w-[497px]">
              {titleLead}
              <span className="text-accent font-light">{titleAccent}</span>
            </h2>
          </div>
          <p className="vbs-our-locations-section__desc">{description}</p>
        </div>

        <div className="vbs-our-locations__cards flex w-full flex-col gap-4 lg:flex-row lg:gap-5">
          {officeLocations.map((location) => (
            <LocationCard key={location.id} location={location} />
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
