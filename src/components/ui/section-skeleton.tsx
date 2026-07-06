import { cn } from "@/lib/utils";

type SectionSkeletonProps = {
  minHeight?: number;
  className?: string;
  ariaHidden?: boolean;
};

export function SectionSkeleton({
  minHeight = 240,
  className,
  ariaHidden = true,
}: SectionSkeletonProps) {
  return (
    <div
      aria-hidden={ariaHidden}
      className={cn("deferred-section-skeleton w-full", className)}
      style={{ minHeight }}
    />
  );
}
