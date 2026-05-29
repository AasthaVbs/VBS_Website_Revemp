import type { ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type PrimaryCtaButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  fullWidth?: boolean;
};

export function PrimaryCtaButton({
  children,
  className,
  fullWidth = true,
  type = "button",
  ...props
}: PrimaryCtaButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "primary-cta relative inline-flex h-[52px] shrink-0 items-center justify-center overflow-hidden rounded-[10px] border-[1.5px] border-[#D70416] bg-white/10 px-5 py-0 text-[16px] font-medium capitalize leading-none text-[#D70416] shadow-none backdrop-blur-[100px]",
        fullWidth ? "w-full" : "w-auto",
        className,
      )}
      {...props}
    >
      <span className="primary-cta-blobs" aria-hidden>
        <span className="primary-cta-blob primary-cta-blob--yellow" />
        <span className="primary-cta-blob primary-cta-blob--blue" />
        <span className="primary-cta-blob primary-cta-blob--green" />
        <span className="primary-cta-blob primary-cta-blob--red" />
      </span>
      <span className="primary-cta-label relative z-10 inline-flex items-center gap-1.5">{children}</span>
    </button>
  );
}
