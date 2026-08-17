import type { CSSProperties, ReactNode } from "react";

import { cn } from "@/lib/utils";

type PageContainerProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

/** Site content shell: responsive max width via --vbs-page-max, 16px side gutters */
export function PageContainer({ children, className, style }: PageContainerProps) {
  return (
    <div
      className={cn(
        "vbs-page-container mx-auto box-border w-full max-w-[var(--vbs-page-max,1330px)] px-4",
        className,
      )}
      style={style}
    >
      {children}
    </div>
  );
}
