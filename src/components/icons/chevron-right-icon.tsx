import { cn } from "@/lib/utils";

const CHEVRON_RIGHT_ICON_SRC = "/image/icon-park-outline_down.svg";

export function ChevronRightIcon({ className }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={CHEVRON_RIGHT_ICON_SRC}
      alt=""
      className={cn("h-5 w-5 shrink-0", className)}
      aria-hidden
      decoding="async"
    />
  );
}
