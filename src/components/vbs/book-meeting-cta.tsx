"use client";

import { useEffect } from "react";
import { Button } from "react-bootstrap";

import { ensureNimbusBookingScript, openBookMeetingModal } from "@/utils/nimbus-booking";

type BookMeetingCtaProps = {
  buttonText?: string;
  buttonClass?: string;
  fullButtonClass?: string;
};

export default function BookMeetingCta({
  buttonText,
  buttonClass,
  fullButtonClass,
}: BookMeetingCtaProps) {
  useEffect(() => {
    ensureNimbusBookingScript().catch(() => {});
  }, []);

  const resolvedClass = fullButtonClass
    ? `btn ${fullButtonClass}`
    : `btn ${buttonClass || "btn-lightblue text-white py-2"} text-primary text-uppercase px-lg-4 py-1 rounded-pill fs-4 fw-semibold`;

  return (
    <Button className={resolvedClass} onClick={openBookMeetingModal}>
      {buttonText || "Ready to uncover the secrets?"}
      <i className="icon ms-2 fa fa-lg fa-long-arrow-alt-right"></i>
    </Button>
  );
}
