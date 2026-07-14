import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function SectionTag({ label, className }: { label: string; className?: string }) {
  return (
    <span
      className={cn(
        "text-tag inline-flex w-fit items-center justify-center gap-2.5 self-start rounded-[10px] border border-[#2299D6] bg-[rgba(34,153,214,0.10)] px-3 py-1.5 text-[13px] font-normal capitalize leading-[1.2] text-[#2299D6] max-lg:rounded-[8px] max-lg:px-2 max-lg:py-1 max-lg:text-[10px]",
        className,
      )}
    >
      {label}
    </span>
  );
}

export function SectionHeader({
  tag,
  title,
  description,
  align = "center",
  className,
}: {
  tag: string;
  title: ReactNode;
  description?: string;
  align?: "center" | "start";
  className?: string;
}) {
  const alignClass = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`flex max-w-3xl flex-col gap-3 ${alignClass} ${className ?? ""}`}>
      <SectionTag label={tag} />
      <h2 className="h2">{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}

export function SectionIntro({
  tag,
  title,
  description,
  titleClassName = "text-section",
  descriptionClassName = "max-w-[536px] text-body",
  className,
}: {
  tag: string;
  title: ReactNode;
  description?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  className?: string;
}) {
  return (
    <div className={cn("flex w-full flex-col items-start gap-5", className)}>
      <div className="flex flex-col items-start gap-3">
        <SectionTag label={tag} />
        <h2 className={titleClassName}>{title}</h2>
      </div>
      {description ? (
        <p className={descriptionClassName}>{description}</p>
      ) : null}
    </div>
  );
}
