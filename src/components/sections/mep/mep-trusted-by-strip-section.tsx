import Image from "next/image";
import { Fragment } from "react";

import { PageContainer } from "@/components/layout/page-container";
import { mepBimModellingTrustedBy } from "@/constants/mep-bim-modelling-content";

function TrustedDivider() {
  return (
    <div
      className="h-[70px] w-px shrink-0 bg-gradient-to-b from-transparent via-[#CBCCCD] to-transparent"
      aria-hidden
    />
  );
}

/** Figma node 265:49905 — Trusted By strip */
export function MepTrustedByStripSection() {
  const { titleAccent, titleLead, items } = mepBimModellingTrustedBy;

  return (
    <section className="bg-white py-[50px]">
      <PageContainer>
        <div className="flex items-center gap-5 overflow-x-auto">
          <div className="flex min-w-[100px] flex-1 shrink-0 flex-col justify-center">
            <p className="text-[24px] capitalize leading-tight">
              <span className="font-light text-[#D70416]">{titleAccent}</span>
              <span className="font-medium text-[#111111]">{titleLead}</span>
            </p>
          </div>

          <TrustedDivider />

          {items.map((item, index) => (
            <Fragment key={item.label}>
              <div className="flex min-w-[160px] flex-1 items-center justify-center">
                <div className="flex items-center gap-2.5">
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
                      style={{ color: item.dashColor }}
                      aria-hidden
                    >
                      -
                    </span>
                  )}
                  <span className="whitespace-nowrap text-[16px] font-normal text-[#808080]">
                    {item.label}
                  </span>
                </div>
              </div>
              {index < items.length - 1 ? <TrustedDivider /> : null}
            </Fragment>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
