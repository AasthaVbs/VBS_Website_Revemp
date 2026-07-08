import { Mail, MapPin, Phone } from "lucide-react";

import { contactGetInTouchDetails } from "@/constants/contact-content";

export function GetInTouchInfoContacts() {
  const { phone, phoneHref, email, emailHref, addressLine1, addressLine2, mapsUrl } =
    contactGetInTouchDetails;

  return (
    <div className="vbs-get-in-touch__info-contacts">
      <a href={phoneHref} className="vbs-get-in-touch__info-contact">
        <Phone className="h-5 w-5 shrink-0" aria-hidden />
        <span>{phone}</span>
      </a>
      <a href={emailHref} className="vbs-get-in-touch__info-contact">
        <Mail className="h-5 w-5 shrink-0" aria-hidden />
        <span>{email}</span>
      </a>
      <a
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="vbs-get-in-touch__info-contact vbs-get-in-touch__info-contact--address"
      >
        <MapPin className="mt-0.5 h-5 w-5 shrink-0" aria-hidden />
        <span className="vbs-get-in-touch__address">
          <span className="vbs-get-in-touch__address-line1">{addressLine1}</span>
          <span className="vbs-get-in-touch__address-line2">{addressLine2}</span>
        </span>
      </a>
    </div>
  );
}
