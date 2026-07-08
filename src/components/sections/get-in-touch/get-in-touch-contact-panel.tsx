import { Mail, MapPin, Phone } from "lucide-react";

import { contactGetInTouchDetails } from "@/constants/contact-content";

const GET_IN_TOUCH_IMAGE = encodeURI("/image/Contact-Us 1 (1).jpg");

type GetInTouchContactPanelProps = {
  imageSrc?: string;
  imageAlt?: string;
};

export function GetInTouchContactPanel({
  imageSrc = GET_IN_TOUCH_IMAGE,
  imageAlt = "Contact support representative",
}: GetInTouchContactPanelProps) {
  const { phone, phoneHref, email, emailHref, addressLine1, addressLine2, mapsUrl } =
    contactGetInTouchDetails;

  return (
    <div className="vbs-get-in-touch__visual">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={imageSrc} alt={imageAlt} className="vbs-get-in-touch__visual-img" />
      <div className="vbs-get-in-touch__visual-gradient" aria-hidden />
      <div className="vbs-get-in-touch__visual-contacts">
        <a href={phoneHref} className="vbs-get-in-touch__visual-contact">
          <Phone className="h-5 w-5 shrink-0" aria-hidden />
          <span>{phone}</span>
        </a>
        <a href={emailHref} className="vbs-get-in-touch__visual-contact">
          <Mail className="h-5 w-5 shrink-0" aria-hidden />
          <span>{email}</span>
        </a>
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="vbs-get-in-touch__visual-contact"
        >
          <MapPin className="mt-0.5 h-5 w-5 shrink-0" aria-hidden />
          <span className="vbs-get-in-touch__address">
            <span className="vbs-get-in-touch__address-line1">{addressLine1}</span>
            <span className="vbs-get-in-touch__address-line2">{addressLine2}</span>
          </span>
        </a>
      </div>
    </div>
  );
}
