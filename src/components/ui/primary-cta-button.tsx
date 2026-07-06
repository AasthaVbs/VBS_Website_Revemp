"use client";

import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

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

export function PrimaryCtaButton({
  children,
  className,
  fullWidth = true,
  stripedLong = false,
  href,
  type = "button",
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
      {!stripedLong && !fullWidth ? <PrimaryCtaBlobs /> : null}
      <span className="primary-cta-label relative z-10 inline-flex items-center gap-1.5 capitalize">
        {children}
      </span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      {...props}
    >
      {content}
    </button>
  );
}
