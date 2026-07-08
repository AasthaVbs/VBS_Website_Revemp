"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navLinkClass } from "@/components/layout/nav-link-styles";
import { MAIN_NAV, ROUTES } from "@/constants/navigation";
import {
  AboutNavDropdown,
  CapabilitiesMegaMenu,
  NavDropdownTrigger,
  ResourcesNavDropdown,
} from "@/components/layout/nav-dropdowns";
import { isNavPathActive, normalizePath } from "@/utils/nav-path";

export function SiteNav() {
  const pathname = usePathname();
  const path = normalizePath(pathname);
  const isAbout =
    pathname === "/about" ||
    pathname === "/leadership" ||
    pathname === "/careers" ||
    pathname === "/life-at-vbs" ||
    pathname.startsWith("/life-at-vbs");
  const isMepPage = isNavPathActive(path, ROUTES.mepServices);
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
