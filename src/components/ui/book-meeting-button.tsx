"use client";

import { useEffect, type MouseEvent, type ReactNode } from "react";

import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";
import { ensureNimbusBookingScript } from "@/utils/nimbus-booking";

type BookMeetingButtonProps = {
  fullWidth?: boolean;
  className?: string;
  children?: ReactNode;
  onAfterClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};

export function BookMeetingButton({
  fullWidth = false,
  className,
  children = "Book a Meeting",
  onAfterClick,
}: BookMeetingButtonProps) {
  useEffect(() => {
    ensureNimbusBookingScript().catch(() => {});
  }, []);

  return (
    <PrimaryCtaButton
      fullWidth={fullWidth}
      className={className}
      href="#book-meeting"
      onClick={onAfterClick}
    >
      {children}
    </PrimaryCtaButton>
  );
}
