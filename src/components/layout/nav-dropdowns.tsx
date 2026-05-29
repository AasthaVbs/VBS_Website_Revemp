"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";

import {
  ABOUT_DROPDOWN_LINKS,
  CAPABILITY_CATEGORIES,
  RESOURCES_DROPDOWN_LINKS,
  type NavDropdownLink,
} from "@/constants/navigation";
import { cn } from "@/lib/utils";

function NavChevron() {
  return <ChevronDown className="h-5 w-5 shrink-0 stroke-[1.3]" aria-hidden />;
}

function SimpleNavDropdown({ links }: { links: NavDropdownLink[] }) {
  return (
    <div className="inline-flex rounded-[10px] bg-white p-5 shadow-[0_2px_10px_rgba(0,0,0,0.20)]">
      <div className="flex w-[226px] flex-col gap-5">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="pb-1.5 text-[16px] font-normal capitalize leading-none text-[#111111] transition-colors hover:text-vbs-red"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function CapabilitiesMegaMenu() {
  const [activeCategoryId, setActiveCategoryId] = useState(CAPABILITY_CATEGORIES[0].id);
  const activeCategory =
    CAPABILITY_CATEGORIES.find((c) => c.id === activeCategoryId) ?? CAPABILITY_CATEGORIES[0];

  return (
    <div className="inline-flex items-start gap-[30px] rounded-[10px] bg-white p-5 shadow-[0_2px_14px_rgba(0,0,0,0.15)]">
        <div className="w-[300px] shrink-0">
          <div className="flex flex-col gap-2.5 rounded-l-[10px] p-2.5">
            <h3 className="text-[24px] capitalize leading-tight text-[#111111]">
              Core <span className="font-light text-vbs-red">Offerings</span>
            </h3>
            <p className="text-[16px] font-normal capitalize leading-6 text-[#808080]">
              Scalable BIM and engineering solutions helping AEC teams deliver coordinated and
              construction-ready outcomes.
            </p>
          </div>
        </div>

        <div className="flex w-[236px] shrink-0 flex-col gap-5">
          {CAPABILITY_CATEGORIES.map((category) => {
            const isActive = category.id === activeCategoryId;
            return (
              <button
                key={category.id}
                type="button"
                onMouseEnter={() => setActiveCategoryId(category.id)}
                className={cn(
                  "w-full rounded-l-[10px] p-2.5 text-left text-[16px] font-medium capitalize transition-colors",
                  isActive
                    ? "border-b border-vbs-red text-[#111111]"
                    : "text-[#808080] hover:text-[#111111]",
                )}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        <div className="flex gap-[30px] rounded-[10px] p-2.5">
          {activeCategory.services.map((column, colIndex) => (
            <div key={colIndex} className="flex w-[211px] flex-col gap-5">
              {column.map((service) => (
                <Link
                  key={service.label}
                  href={service.href}
                  className="pb-1.5 text-[16px] font-normal capitalize leading-none text-[#111111] transition-colors hover:text-vbs-red"
                >
                  {service.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
  );
}

export function NavDropdownTrigger({
  label,
  href,
  children,
  dropdownAlign = "start",
}: {
  label: string;
  href: string;
  children: ReactNode;
  dropdownAlign?: "start" | "mega-menu";
}) {
  return (
    <div className="group/nav-item relative flex self-stretch items-stretch">
      <Link
        href={href}
        className="inline-flex items-center gap-1.5 px-1.5 py-2 text-[16px] font-normal capitalize text-[#111111] transition-colors group-hover/nav-item:text-vbs-red"
      >
        {label}
        <NavChevron />
      </Link>
      <div
        className={cn(
          "pointer-events-none absolute top-full z-[60] w-max max-w-[calc(100vw-3rem)] pt-3 opacity-0 transition-opacity duration-150 group-hover/nav-item:pointer-events-auto group-hover/nav-item:opacity-100",
          dropdownAlign === "start" && "left-0",
          dropdownAlign === "mega-menu" && "left-0 -translate-x-[120px] xl:-translate-x-[80px]",
        )}
      >
        {children}
      </div>
    </div>
  );
}

export function AboutNavDropdown() {
  return <SimpleNavDropdown links={ABOUT_DROPDOWN_LINKS} />;
}

export function ResourcesNavDropdown() {
  return <SimpleNavDropdown links={RESOURCES_DROPDOWN_LINKS} />;
}
