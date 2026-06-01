import type { ReactNode } from "react";

export function SectionTag({ label }: { label: string }) {
  return (
    <span className="text-tag inline-flex w-fit self-start rounded-[10px] border border-vbs-blue bg-vbs-blue/10 px-3 py-1.5 text-vbs-blue">
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
}: {
  tag: string;
  title: ReactNode;
  description?: string;
  titleClassName?: string;
}) {
  return (
    <div className="flex w-full flex-col items-start gap-5">
      <div className="flex flex-col items-start gap-3">
        <SectionTag label={tag} />
        <h2 className={titleClassName}>{title}</h2>
      </div>
      {description ? (
        <p className="max-w-[536px] text-body">{description}</p>
      ) : null}
    </div>
  );
}
