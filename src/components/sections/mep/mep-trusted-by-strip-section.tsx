import Image from "next/image";
import { Fragment } from "react";

import { PageContainer } from "@/components/layout/page-container";
import {
  mepBimModellingTrustedBy,
  type MepTrustedByContent,
} from "@/constants/mep-bim-modelling-content";
import { cn } from "@/lib/utils";

function TrustedDivider({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "h-[70px] w-px shrink-0 bg-gradient-to-b from-transparent via-[#CBCCCD] to-transparent",
        className,
      )}
      aria-hidden
    />
  );
}

function TrustedItem({
  item,
  className,
}: {
  item: MepTrustedByContent["items"][number];
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      {"icon" in item && item.icon ? (
        <Image
          src={item.icon}
          alt=""
          width={28}
          height={28}
          className="h-7 w-7 shrink-0"
          aria-hidden
        />
      ) : (
        <span
          className="shrink-0 text-[24px] font-medium leading-none"
          style={{ color: "dashColor" in item ? item.dashColor : undefined }}
          aria-hidden
        >
          -
        </span>
      )}
      <span className="text-[14px] font-normal text-[#111111] sm:whitespace-nowrap sm:text-[16px]">
        {item.label}
      </span>
    </div>
  );
}

/** Figma node 265:49905 — Trusted By strip */
export function MepTrustedByStripSection({
  trustedBy = mepBimModellingTrustedBy,
  className,
}: {
  trustedBy?: MepTrustedByContent;
  className?: string;
} = {}) {
  const { titleAccent, titleLead, items } = trustedBy;

  return (
    <section className={cn("mep-trusted-by-strip bg-white py-8 lg:py-[50px]", className)}>
      <PageContainer>
        {/* Mobile: centered title + 2×2 grid */}
        <div className="flex flex-col items-center gap-6 lg:hidden">
          <p className="text-center text-[22px] capitalize leading-tight">
            <span className="font-light text-[#D70416]">{titleAccent}</span>
            <span className="font-medium text-[#111111]">{titleLead}</span>
          </p>

          <div className="grid w-full grid-cols-2 gap-x-4 gap-y-5">
            {items.map((item) => (
              <div key={item.label} className="flex items-center justify-center">
                <TrustedItem item={item} />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: horizontal strip with dividers — Figma 2058:23595 */}
        <div className="hidden items-center gap-5 lg:flex">
          <div className="flex w-[178px] shrink-0 flex-col justify-center overflow-hidden">
            <p className="text-[24px] capitalize leading-tight">
              <span className="font-light text-[#D70416]">{titleAccent}</span>
              <span className="font-medium text-[#111111]">{titleLead}</span>
            </p>
          </div>

          <TrustedDivider />

          {items.map((item, index) => (
            <Fragment key={item.label}>
              <div className="flex min-w-0 flex-1 items-center justify-center overflow-hidden">
                <TrustedItem item={item} />
              </div>
              {index < items.length - 1 ? <TrustedDivider /> : null}
            </Fragment>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
