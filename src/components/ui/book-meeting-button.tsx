"use client";

import { useEffect, type MouseEvent, type ReactNode } from "react";

import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";
import { ensureNimbusBookingScript, openBookMeetingModal } from "@/utils/nimbus-booking";

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

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    void openBookMeetingModal(event);
    onAfterClick?.(event);
  };

  return (
    <PrimaryCtaButton fullWidth={fullWidth} className={className} onClick={handleClick}>
      Book a Meeting
    </PrimaryCtaButton>
  );
}
