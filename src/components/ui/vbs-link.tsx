import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type VbsLinkProps = {
  to?: string;
  href?: string;
  children: ReactNode;
  className?: string;
  onClick?: AnchorHTMLAttributes<HTMLAnchorElement>["onClick"];
  onMouseEnter?: AnchorHTMLAttributes<HTMLAnchorElement>["onMouseEnter"];
};

export function VbsLink({ to, href, children, className, onClick, onMouseEnter }: VbsLinkProps) {
  const target = to ?? href ?? "/";

  if (
    target.startsWith("mailto:") ||
    target.startsWith("tel:") ||
    target.startsWith("http://") ||
    target.startsWith("https://")
  ) {
    return (
      <a href={target} className={className} onClick={onClick} onMouseEnter={onMouseEnter}>
        {children}
      </a>
    );
  }

  if (target.includes("#")) {
    return (
      <a href={target} className={className} onClick={onClick} onMouseEnter={onMouseEnter}>
        {children}
      </a>
    );
  }

  return (
    <Link
      href={target}
      prefetch
      className={cn(className)}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
    >
      {children}
    </Link>
  );
}
