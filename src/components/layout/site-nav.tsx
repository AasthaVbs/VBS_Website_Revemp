"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navLinkClass } from "@/components/layout/nav-link-styles";
import { MAIN_NAV } from "@/constants/navigation";
import {
  AboutNavDropdown,
  CapabilitiesMegaMenu,
  NavDropdownTrigger,
  ResourcesNavDropdown,
} from "@/components/layout/nav-dropdowns";

export function SiteNav() {
  const pathname = usePathname();
  const isAbout = pathname === "/about" || pathname === "/leadership";
  const isMepPage = pathname === "/mep-engineers";
  const isEngagementPage = pathname === "/engagement-models";

  return (
    <nav className="hidden items-center gap-[10px] lg:flex">
      {MAIN_NAV.map((item) => {
        if ("hasDropdown" in item && item.hasDropdown === "capabilities") {
          return (
            <NavDropdownTrigger
              key={item.label}
              label={item.label}
              href={item.href}
              dropdownAlign="mega-menu"
              active={isMepPage}
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

        const isActiveEngagement = item.label === "Engagement Model" && isEngagementPage;

        return (
          <Link
            key={item.label}
            href={item.href}
            className={navLinkClass(isActiveEngagement)}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
