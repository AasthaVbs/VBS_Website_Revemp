import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type PageContainerProps = {
  children: ReactNode;
  className?: string;
};

/** Matches site header width: max 1400px, 28px / 37px horizontal padding */
export function PageContainer({ children, className }: PageContainerProps) {
  return (
    <div
      className={cn(
        "vbs-page-container mx-auto box-border w-full max-w-[1400px] px-7 md:px-[37px]",
        className,
      )}
    >
      {children}
    </div>
  );
}
