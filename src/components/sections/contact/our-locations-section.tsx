import { ChevronRight, Mail, MapPin, Phone } from "lucide-react";

import { PageContainer } from "@/components/layout/page-container";
import { SectionTag } from "@/components/sections/section-primitives";
import {
  officeLocations,
  ourLocationsSectionCopy,
  type OfficeLocation,
} from "@/constants/contact-content";

function LocationCard({ location }: { location: OfficeLocation }) {
  const phoneHref = `tel:${location.phone.replace(/[^\d+]/g, "")}`;

  return (
    <article className="vbs-our-locations__card w-full shrink-0 lg:min-w-0 lg:flex-1">
      <div className="vbs-our-locations__card-header">
        <h3 className="vbs-our-locations__card-title">{location.name}</h3>

        <div className="vbs-our-locations__meta-row">
          <a
            href={location.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="vbs-our-locations__address"
          >
            <MapPin className="mt-0.5 h-6 w-6 shrink-0 stroke-[#111111]" strokeWidth={1.5} />
            <p>
              <span className="vbs-our-locations__address-line1">{location.addressLine1}</span>
              {location.addressLine2 ? (
                <span className="vbs-our-locations__address-line2">{location.addressLine2}</span>
              ) : null}
            </p>
          </a>
          <div className="vbs-our-locations__phone">
            <Phone className="h-6 w-6 shrink-0 stroke-[#111111]" strokeWidth={1.5} />
            <a
              href={phoneHref}
              className="text-[16px] font-normal lowercase leading-6 text-[#111111] hover:underline"
            >
              {location.phone}
            </a>
          </div>
        </div>

        <div className="vbs-our-locations__email">
          <Mail className="h-6 w-6 shrink-0 stroke-[#111111]" strokeWidth={1.5} />
          <a
            href={`mailto:${location.email}`}
            className="text-[16px] font-normal lowercase leading-6 text-[#111111] hover:underline"
          >
            {location.email}
          </a>
        </div>
      </div>

      <div className="vbs-our-locations__map">
        <iframe
          title={`Google Maps — ${location.name} office`}
          src={location.mapEmbedUrl}
          className="vbs-our-locations__map-embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />

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
  const { tag, titleLead, titleAccent } = ourLocationsSectionCopy;

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
