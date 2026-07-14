import { cn } from "@/lib/utils";

/** Blue outline section pill — Figma: 13px / pad 12×6 / radius 10 */
export function MepSectionTag({
  label,
  centered = false,
  className,
}: {
  label: string;
  centered?: boolean;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "text-tag inline-flex w-fit items-center justify-center gap-2.5 rounded-[10px] border border-[#2299D6] bg-[rgba(34,153,214,0.10)] px-3 py-1.5 text-[13px] font-normal capitalize leading-[1.2] text-[#2299D6] max-lg:rounded-[8px] max-lg:px-2 max-lg:py-1 max-lg:text-[10px]",
        centered ? "self-center" : "self-start",
        className,
      )}
    >
      {label}
    </span>
  );
}
