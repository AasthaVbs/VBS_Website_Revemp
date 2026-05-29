"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { MAIN_NAV } from "@/constants/navigation";
import {
  AboutNavDropdown,
  CapabilitiesMegaMenu,
  NavDropdownTrigger,
  ResourcesNavDropdown,
} from "@/components/layout/nav-dropdowns";
import { cn } from "@/lib/utils";

export function SiteNav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isAbout = pathname === "/about";

  return (
    <nav className="hidden items-center gap-2.5 lg:flex">
      {MAIN_NAV.map((item) => {
        if ("hasDropdown" in item && item.hasDropdown === "capabilities") {
          return (
            <NavDropdownTrigger
              key={item.label}
              label={item.label}
              href={item.href}
              dropdownAlign="mega-menu"
            >
              <CapabilitiesMegaMenu />
            </NavDropdownTrigger>
          );
        }

        if ("hasDropdown" in item && item.hasDropdown === "resources") {
          return (
            <NavDropdownTrigger key={item.label} label={item.label} href={item.href}>
              <ResourcesNavDropdown />
            </NavDropdownTrigger>
          );
        }

        if ("hasDropdown" in item && item.hasDropdown === "about") {
          return (
            <NavDropdownTrigger
              key={item.label}
              label={item.label}
              href={item.href}
              active={isAbout}
            >
              <AboutNavDropdown />
            </NavDropdownTrigger>
          );
        }

        const isActiveHome = item.label === "Home" && isHome;

        return (
          <Link
            key={item.label}
            href={item.href}
            className={cn(
              "inline-flex items-center self-stretch px-1.5 py-2 text-[16px] font-normal capitalize transition-colors",
              isActiveHome
                ? "border-b border-vbs-red text-vbs-red"
                : "text-[#111111] hover:text-vbs-red",
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
