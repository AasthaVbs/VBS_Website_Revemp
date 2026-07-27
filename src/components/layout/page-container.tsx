import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type PageContainerProps = {
  children: ReactNode;
  className?: string;
};

/** Site content shell: responsive max width via --vbs-page-max, no horizontal padding */
export function PageContainer({ children, className }: PageContainerProps) {
  return (
    <div
      className={cn(
        "vbs-page-container mx-auto box-border w-full max-w-[var(--vbs-page-max,1330px)] px-0",
        className,
      )}
    >
      {children}
    </div>
  );
}
