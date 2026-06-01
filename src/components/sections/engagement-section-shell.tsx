import type { ReactNode } from "react";

import { PageContainer } from "@/components/layout/page-container";
import { cn } from "@/lib/utils";

/** Shared layout shell for engagement-style 3-column sections (home + MEP). */
export function EngagementSectionShell({
  id,
  header,
  children,
  className,
}: {
  id?: string;
  header: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("bg-[#FAFAFA] py-12 sm:py-16 lg:py-[100px]", className)}>
      <PageContainer className="flex flex-col items-center gap-8 sm:gap-10 lg:gap-[60px]">
        {header}
        {children}
      </PageContainer>
    </section>
  );
}
