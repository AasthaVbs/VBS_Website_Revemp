import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type PageContainerProps = {
  children: ReactNode;
  className?: string;
};

/** Matches site header width: max 1440px, 24px / 40px horizontal padding */
export function PageContainer({ children, className }: PageContainerProps) {
  return (
    <div
      className={cn(
        "vbs-page-container mx-auto box-border w-full max-w-[1440px] px-6 md:px-10",
        className,
      )}
    >
      {children}
    </div>
  );
}
