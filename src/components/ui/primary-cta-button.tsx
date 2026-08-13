"use client";

import Link from "next/link";
import {
  Children,
  isValidElement,
  type ButtonHTMLAttributes,
  type MouseEvent,
  type ReactNode,
} from "react";

import {
  handleInPageHashClick,
  isBookMeetingCtaHref,
  isBookMeetingCtaLabel,
  isSamePageHashLink,
} from "@/hooks/scrollToPageSection";
import { cn } from "@/lib/utils";
import { openBookMeetingModal } from "@/utils/nimbus-booking";

type PrimaryCtaButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  fullWidth?: boolean;
  /** Full-width Submit Now / Apply Now — white + red text; hover solid red + white text */
  stripedLong?: boolean;
  href?: string;
};

function PrimaryCtaBlobs() {
  return (
    <span className="primary-cta-blobs" aria-hidden>
      <span className="primary-cta-blob primary-cta-blob--yellow" />
      <span className="primary-cta-blob primary-cta-blob--blue" />
      <span className="primary-cta-blob primary-cta-blob--green" />
      <span className="primary-cta-blob primary-cta-blob--red" />
    </span>
  );
}

function flattenLabel(node: ReactNode): string {
  return Children.toArray(node)
    .map((child) => {
      if (typeof child === "string" || typeof child === "number") {
        return String(child);
      }
      if (isValidElement<{ children?: ReactNode }>(child)) {
        return flattenLabel(child.props.children);
      }
      return "";
    })
    .join("")
    .trim();
}

export function PrimaryCtaButton({
  children,
  className,
  fullWidth = true,
  stripedLong = false,
  href,
  type = "button",
  onClick,
  ...props
}: PrimaryCtaButtonProps) {
  const classes = cn(
    "primary-cta no-underline relative inline-flex h-[52px] shrink-0 items-center justify-center overflow-hidden rounded-[10px] border-[1.5px] border-[#D70416] px-5 py-0 text-[16px] font-medium leading-none shadow-none",
    stripedLong
      ? "primary-cta--striped-long text-[#D70416]"
      : "bg-white/10 text-[#D70416] backdrop-blur-[100px]",
    fullWidth && "primary-cta--wide w-full",
    !fullWidth && "w-auto",
    className,
  );

  const content = (
    <>
      {!stripedLong ? <PrimaryCtaBlobs /> : null}
      <span className="primary-cta-label relative z-10 inline-flex items-center gap-1.5 capitalize">
        {children}
      </span>
    </>
  );

  const label = flattenLabel(children);
  const opensMeeting = isBookMeetingCtaLabel(label) || isBookMeetingCtaHref(href);

  const handleMeetingClick = (event: MouseEvent<HTMLElement>) => {
    void openBookMeetingModal(event);
    onClick?.(event as MouseEvent<HTMLButtonElement>);
  };

  const handleHashClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!href) return;
    handleInPageHashClick(event, href, onClick as ((e: { preventDefault: () => void }) => void) | undefined, {
      updateHash: false,
    });
  };

  if (opensMeeting) {
    return (
      <button type={type} className={classes} onClick={handleMeetingClick} {...props}>
        {content}
      </button>
    );
  }

  if (href) {
    if (href.startsWith("#") || isSamePageHashLink(href)) {
      return (
        <a href={href} className={classes} onClick={handleHashClick}>
          {content}
        </a>
      );
    }

    if (href.startsWith("mailto:") || href.startsWith("tel:")) {
      return (
        <a href={href} className={classes}>
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} {...props}>
      {content}
    </button>
  );
}
