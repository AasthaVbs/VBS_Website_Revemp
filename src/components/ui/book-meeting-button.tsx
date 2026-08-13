"use client";

import { useEffect, type MouseEvent } from "react";

import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";
import { ensureNimbusBookingScript } from "@/utils/nimbus-booking";

type BookMeetingButtonProps = {
  fullWidth?: boolean;
  className?: string;
  onAfterClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};

export function BookMeetingButton({
  fullWidth = false,
  className,
  onAfterClick,
}: BookMeetingButtonProps) {
  useEffect(() => {
    ensureNimbusBookingScript().catch(() => {});
  }, []);

  return (
    <PrimaryCtaButton fullWidth={fullWidth} className={className} onClick={onAfterClick}>
      Book a Meeting
    </PrimaryCtaButton>
  );
}
