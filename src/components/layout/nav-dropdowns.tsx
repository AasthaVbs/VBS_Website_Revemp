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
import { navLinkClass } from "@/components/layout/nav-link-styles";
import { cn } from "@/lib/utils";

function NavChevron() {
  return (
    <span className="relative inline-flex h-5 w-5 shrink-0 items-center justify-center overflow-hidden">
      <ChevronDown className="h-[10px] w-[10px] stroke-[1.3] text-current" aria-hidden />
    </span>
  );
}

function NavMenuDivider({ id }: { id: string }) {
  return (
    <div className="nav-menu-divider shrink-0 self-stretch" aria-hidden>
      <svg viewBox="0 0 1 100" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient
            id={id}
            x1="0.5"
            y1="0"
            x2="0.5"
            y2="100"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#CBCCCD" stopOpacity="0" />
            <stop offset="50%" stopColor="#CBCCCD" stopOpacity="1" />
            <stop offset="100%" stopColor="#CBCCCD" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect width="1" height="100" fill={`url(#${id})`} />
      </svg>
    </div>
  );
}

function NavDropdownAnchor({
  link,
  className = "text-[16px] font-normal leading-snug text-[#111111] transition-colors hover:text-vbs-red",
}: {
  link: NavDropdownLink;
  className?: string;
}) {
  if (link.external) {
    return (
      <a href={link.href} target="_blank" rel="noopener noreferrer" className={className}>
        {link.label}
      </a>
    );
  }
  return (
    <Link href={link.href} className={className}>
      {link.label}
    </Link>
  );
}

function SimpleNavDropdown({ links }: { links: NavDropdownLink[] }) {
  return (
    <div className="inline-flex rounded-[10px] bg-white px-4 py-3 shadow-[0_2px_10px_rgba(0,0,0,0.20)]">
      <div className="vbs-nav-dropdown-links flex w-[226px] flex-col gap-2">
        {links.map((link) => (
          <NavDropdownAnchor key={link.label} link={link} className="text-[16px] font-normal leading-none text-[#111111] transition-colors hover:text-vbs-red" />
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
    <div className="flex items-stretch rounded-[10px] bg-white p-10 shadow-[0_2px_14px_rgba(0,0,0,0.15)]">
      <div className="w-[300px] shrink-0 pr-[30px]">
        <h3 className="text-[24px] leading-tight text-[#111111]">
          Core <span className="text-accent">Offerings</span>
        </h3>
        <p className="mt-2.5 text-[16px] font-normal leading-6 text-[#808080]">
          Scalable BIM And Engineering Solutions Helping AEC Teams Deliver Coordinated And
          Construction-Ready Outcomes.
        </p>
      </div>

      <NavMenuDivider id="capabilities-mega-divider-1" />

      <div className="flex w-[min(360px,42vw)] shrink-0 flex-col gap-5 px-[30px]">
        {CAPABILITY_CATEGORIES.map((category) => {
          const isActive = category.id === activeCategoryId;
          const className = cn(
            "block w-full whitespace-nowrap border-b pb-1.5 text-left text-[16px] font-medium leading-snug transition-colors",
            isActive
              ? "border-vbs-red text-[#111111]"
              : "border-transparent text-[#808080] hover:text-[#111111]",
          );

          if (category.href) {
            return (
              <Link
                key={category.id}
                href={category.href}
                onMouseEnter={() => setActiveCategoryId(category.id)}
                className={className}
              >
                {category.label}
              </Link>
            );
          }

          return (
            <button
              key={category.id}
              type="button"
              onMouseEnter={() => setActiveCategoryId(category.id)}
              className={className}
            >
              {category.label}
            </button>
          );
        })}
      </div>

      <NavMenuDivider id="capabilities-mega-divider-2" />

      <div className="flex gap-[30px] pl-[30px]">
        {activeCategory.services.map((column, colIndex) => (
          <div key={colIndex} className="flex w-[211px] flex-col gap-5">
            {column.map((service) => (
              <NavDropdownAnchor key={service.label} link={service} />
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
  active = false,
}: {
  label: string;
  href: string;
  children: ReactNode;
  dropdownAlign?: "start" | "mega-menu";
  active?: boolean;
}) {
  return (
    <div className="group/nav-item relative flex items-stretch self-stretch">
      <Link href={href} className={navLinkClass(active, true)}>
        {label}
        <NavChevron />
      </Link>
      <div
        className={cn(
          "pointer-events-none absolute top-full z-[60] w-max max-w-[calc(100vw-2rem)] pt-3 opacity-0 transition-opacity duration-150 group-hover/nav-item:pointer-events-auto group-hover/nav-item:opacity-100",
          dropdownAlign === "start" && "left-0",
          dropdownAlign === "mega-menu" && "left-1/2 -translate-x-1/2",
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
