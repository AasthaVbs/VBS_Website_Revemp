import { cn } from "@/lib/utils";

/** Blue outline section pill — Figma tag style; width fits label text */
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
        "inline-flex w-fit items-center justify-center gap-[10px] rounded-[10px] border border-[#2299D6] bg-[rgba(34,153,214,0.10)] px-3 py-1.5 text-[13px] font-normal capitalize leading-[1.2] text-[#2299D6]",
        centered ? "self-center" : "self-start",
        className,
      )}
    >
      {label}
    </span>
  );
}
