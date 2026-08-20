"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";

import { navLinkClass } from "@/components/layout/nav-link-styles";
import { VbsLink } from "@/components/ui/vbs-link";
import {
  ABOUT_DROPDOWN_LINKS,
  CAPABILITY_CATEGORIES,
  MAIN_NAV,
  RESOURCES_DROPDOWN_LINKS,
} from "@/constants/navigation";
import { cn } from "@/lib/utils";
import {
  capabilityLinkProps,
  getCapabilityCategoryIdFromPath,
  isAboutSectionPath,
  isCapabilitiesPage,
  isContactSectionPath,
  isEngagementSectionPath,
  isNavPathActive,
  isResourcesSectionPath,
  isServiceLinkActive,
  normalizePath,
} from "@/utils/nav-path";

function NavChevron() {
  return (
    <span className="relative inline-flex h-5 w-5 shrink-0 items-center justify-center overflow-hidden">
      <svg className="h-[10px] w-[10px]" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M6 9l6 6 6-6"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function NavMenuDivider({ id }: { id: string }) {
  return (
    <div className="nav-menu-divider shrink-0 self-stretch" aria-hidden>
      <svg viewBox="0 0 1 100" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id={id} x1="0.5" y1="0" x2="0.5" y2="100" gradientUnits="userSpaceOnUse">
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

function SimpleNavDropdown({ links }: { links: typeof ABOUT_DROPDOWN_LINKS }) {
  const pathname = usePathname();
  const path = normalizePath(pathname);

  return (
    <div className="vbs-nav-dropdown-menu vbs-nav-dropdown-menu--simple">
      <div className="vbs-nav-dropdown-links flex w-max flex-col gap-8">
        {links.map((link) => {
          const isActive = isNavPathActive(path, link.href);
          return (
            <VbsLink
              key={link.label}
              href={link.href}
              className={cn(
                "no-underline text-[16px] font-normal leading-none transition-colors hover:text-vbs-red",
                isActive ? "nav-sublink-active" : "text-[#111111]",
              )}
              {...capabilityLinkProps(link)}
            >
              <span className="nav-sublink-label">{link.label}</span>
            </VbsLink>
          );
        })}
      </div>
    </div>
  );
}

function CapabilitiesMegaMenu() {
  const pathname = usePathname();
  const path = normalizePath(pathname);
  const [activeCategoryId, setActiveCategoryId] = useState(() =>
    getCapabilityCategoryIdFromPath(path),
  );
  const activeCategory =
    CAPABILITY_CATEGORIES.find((c) => c.id === activeCategoryId) ?? CAPABILITY_CATEGORIES[0];

  useEffect(() => {
    setActiveCategoryId(getCapabilityCategoryIdFromPath(path));
  }, [path]);

  const selectCategory = (categoryId: string) => {
    setActiveCategoryId(categoryId);
  };

  const renderCategoryItem = (category: (typeof CAPABILITY_CATEGORIES)[number]) => {
    const isSelected = category.id === activeCategoryId;
    const isPageActive = category.href && isNavPathActive(path, category.href);
    const className = cn(
      "vbs-capabilities-mega-menu__category-item",
      isSelected && "is-selected",
      isPageActive && "nav-sublink-active",
    );
    const handlers = {
      onMouseEnter: () => selectCategory(category.id),
      onFocus: () => selectCategory(category.id),
      onClick: () => selectCategory(category.id),
    };

    if (category.href) {
      return (
        <VbsLink key={category.id} href={category.href} className={className} {...handlers}>
          <span className="nav-sublink-label">{category.label}</span>
        </VbsLink>
      );
    }

    return (
      <button key={category.id} type="button" className={className} {...handlers}>
        <span className="nav-sublink-label">{category.label}</span>
      </button>
    );
  };

  return (
    <div className="vbs-nav-dropdown-menu vbs-capabilities-mega-menu">
      <div className="vbs-capabilities-mega-menu__scroll">
        <div className="vbs-capabilities-mega-menu__intro">
          <div className="vbs-capabilities-mega-menu__intro-inner">
            <h3 className="vbs-capabilities-mega-menu__title">
              Core <span className="vbs-capabilities-mega-menu__title-accent">Offerings</span>
            </h3>
            <p className="vbs-capabilities-mega-menu__description">
              Scalable BIM and engineering solutions helping AEC teams deliver coordinated and
              construction-ready outcomes.
            </p>
          </div>
        </div>

        <NavMenuDivider id="capabilities-mega-divider-1" />

        <div className="vbs-capabilities-mega-menu__categories">
          {CAPABILITY_CATEGORIES.map((category) => renderCategoryItem(category))}
        </div>

        <NavMenuDivider id="capabilities-mega-divider-2" />

        <div className="vbs-capabilities-mega-menu__services">
          {activeCategory.services.map((column, colIndex) => (
            <div
              key={`${activeCategory.id}-col-${colIndex}`}
              className={cn(
                "vbs-capabilities-mega-menu__service-col",
                colIndex === 0 && "vbs-capabilities-mega-menu__service-col--wide",
              )}
            >
              {column.map((service) => {
                const isActive = isServiceLinkActive(path, service);
                return (
                  <VbsLink
                    key={service.label}
                    href={service.href}
                    className={cn(
                      "vbs-capabilities-mega-menu__service-link",
                      isActive && "nav-sublink-active",
                    )}
                    {...capabilityLinkProps(service)}
                  >
                    <span className="nav-sublink-label">{service.label}</span>
                  </VbsLink>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CapabilitiesNavDropdown({ label, active }: { label: string; active: boolean }) {
  const pathname = usePathname();
  const wrapRef = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [open, setOpen] = useState(false);
  const triggerClass = navLinkClass(active, true);

  const clearCloseTimer = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const handleOpen = () => {
    clearCloseTimer();
    setOpen(true);
  };

  const handleScheduleClose = () => {
    clearCloseTimer();
    closeTimerRef.current = setTimeout(() => setOpen(false), 120);
  };

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => () => clearCloseTimer(), []);

  useEffect(() => {
    if (!open) return undefined;

    const onPointerDown = (event: MouseEvent) => {
      if (!wrapRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div
      ref={wrapRef}
      className={cn("vbs-nav-dropdown-wrap vbs-nav-dropdown-wrap--capabilities", open && "is-open")}
      onMouseEnter={handleOpen}
      onMouseLeave={handleScheduleClose}
    >
      <button
        type="button"
        className={triggerClass}
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="nav-link-label">{label}</span>
        <NavChevron />
      </button>
      <div
        className="vbs-nav-dropdown-panel vbs-nav-dropdown-panel--mega"
        onMouseEnter={handleOpen}
        onMouseLeave={handleScheduleClose}
      >
        <div className="vbs-nav-dropdown-panel-inner">
          <CapabilitiesMegaMenu />
        </div>
      </div>
    </div>
  );
}

function NavDropdownTrigger({
  label,
  href,
  children,
  dropdownAlign = "start",
  active = false,
  toggleOnly = false,
}: {
  label: string;
  href: string;
  children: ReactNode;
  dropdownAlign?: "start" | "end" | "center" | "mega-menu";
  active?: boolean;
  toggleOnly?: boolean;
}) {
  const triggerClass = navLinkClass(active, true);

  return (
    <div className={cn("vbs-nav-dropdown-wrap", dropdownAlign !== "mega-menu" && "vbs-nav-dropdown-wrap--simple")}>
      {toggleOnly ? (
        <button type="button" className={triggerClass} aria-haspopup="true">
          <span className="nav-link-label">{label}</span>
          <NavChevron />
        </button>
      ) : (
        <VbsLink href={href} className={triggerClass}>
          <span className="nav-link-label">{label}</span>
          <NavChevron />
        </VbsLink>
      )}
      <div
        className={cn(
          "vbs-nav-dropdown-panel",
          dropdownAlign === "start" && "vbs-nav-dropdown-panel--start",
          dropdownAlign === "end" && "vbs-nav-dropdown-panel--end",
          dropdownAlign === "center" && "vbs-nav-dropdown-panel--center",
          dropdownAlign === "mega-menu" && "vbs-nav-dropdown-panel--mega",
        )}
      >
        <div className="vbs-nav-dropdown-panel-inner">{children}</div>
      </div>
    </div>
  );
}

export function SiteHeaderDesktopNav() {
  const pathname = usePathname();
  const path = normalizePath(pathname);

  const isCapabilitiesActive = isCapabilitiesPage(path);
  const isAbout = isAboutSectionPath(path);
  const isEngagementPage = isEngagementSectionPath(path);
  const isContactPage = isContactSectionPath(path);
  const isResourcesPage = isResourcesSectionPath(path);

  return (
    <nav className="vbs-header-nav-desktop" aria-label="Main">
      {MAIN_NAV.map((item) => {
        if ("hasDropdown" in item && item.hasDropdown === "capabilities") {
          return (
            <CapabilitiesNavDropdown key={item.label} label={item.label} active={isCapabilitiesActive} />
          );
        }

        if ("hasDropdown" in item && item.hasDropdown === "resources") {
          return (
            <NavDropdownTrigger
              key={item.label}
              label={item.label}
              href={item.href}
              dropdownAlign="center"
              active={isResourcesPage}
              toggleOnly
            >
              <SimpleNavDropdown links={RESOURCES_DROPDOWN_LINKS} />
            </NavDropdownTrigger>
          );
        }

        if ("hasDropdown" in item && item.hasDropdown === "about") {
          return (
            <NavDropdownTrigger
              key={item.label}
              label={item.label}
              href={item.href}
              dropdownAlign="center"
              active={isAbout}
            >
              <SimpleNavDropdown links={ABOUT_DROPDOWN_LINKS} />
            </NavDropdownTrigger>
          );
        }

        const isActiveEngagement = item.label === "Engagement Model" && isEngagementPage;
        const isActiveContact = item.label === "Contact Us" && isContactPage;

        return (
          <VbsLink
            key={item.label}
            href={item.href}
            className={navLinkClass(isActiveEngagement || isActiveContact)}
          >
            <span className="nav-link-label">{item.label}</span>
          </VbsLink>
        );
      })}
    </nav>
  );
}
