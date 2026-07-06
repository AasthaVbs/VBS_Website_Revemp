"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { BookMeetingButton } from "@/components/ui/book-meeting-button";
import { VbsLink } from "@/components/ui/vbs-link";
import {
  ABOUT_DROPDOWN_LINKS,
  CAPABILITY_CATEGORIES,
  MAIN_NAV,
  RESOURCES_DROPDOWN_LINKS,
  ROUTES,
  type NavDropdownLink,
} from "@/constants/navigation";
import { cn } from "@/lib/utils";
import {
  capabilityLinkProps,
  getCanonicalActiveServiceLabel,
  getCapabilityCategoryIdFromPath,
  isAboutSectionPath,
  isCapabilitiesPage,
  isContactSectionPath,
  isEngagementSectionPath,
  isNavPathActive,
  isNavPathExact,
  isResourcesSectionPath,
  normalizePath,
} from "@/utils/nav-path";

function MobileNavChevron({ expanded }: { expanded: boolean }) {
  return (
    <svg
      className={cn("vbs-mobile-nav-chevron", expanded && "is-expanded")}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MobileNavItemRow({
  label,
  href,
  hasSubmenu,
  expanded,
  onToggle,
  onNavigate,
  active,
  nested = false,
  toggleOnly = false,
  children,
}: {
  label: string;
  href: string;
  hasSubmenu: boolean;
  expanded: boolean;
  onToggle: () => void;
  onNavigate: () => void;
  active: boolean;
  nested?: boolean;
  toggleOnly?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <div className={cn("vbs-mobile-nav-item", expanded && "is-expanded", nested && "is-nested")}>
      <div className="vbs-mobile-nav-item-row">
        {toggleOnly ? (
          <button
            type="button"
            className={cn("vbs-mobile-nav-link", active && "is-active")}
            onClick={onToggle}
          >
            {label}
          </button>
        ) : (
          <VbsLink
            href={href}
            className={cn("vbs-mobile-nav-link", active && "is-active")}
            onClick={onNavigate}
          >
            {label}
          </VbsLink>
        )}
        {hasSubmenu ? (
          <button
            type="button"
            className="vbs-mobile-nav-expand-btn"
            aria-expanded={expanded}
            aria-label={`${expanded ? "Collapse" : "Expand"} ${label} submenu`}
            onClick={onToggle}
          >
            <MobileNavChevron expanded={expanded} />
          </button>
        ) : null}
      </div>
      {hasSubmenu && expanded ? <div className="vbs-mobile-nav-submenu">{children}</div> : null}
    </div>
  );
}

function MobileCapabilitiesNav({
  path,
  expandedSections,
  toggleSection,
  onNavigate,
}: {
  path: string;
  expandedSections: Record<string, boolean>;
  toggleSection: (key: string) => void;
  onNavigate: () => void;
}) {
  const activeServiceLabel = getCanonicalActiveServiceLabel(path);
  const mobileCapabilitySublinkClass = (service: NavDropdownLink) =>
    cn("vbs-mobile-nav-sublink", service.label === activeServiceLabel && "nav-sublink-active");

  return (
    <>
      {CAPABILITY_CATEGORIES.map((cat) => {
        const categoryKey = `cat-${cat.id}`;
        const services = cat.services.flat();
        const categoryActive =
          (cat.href && isNavPathExact(path, cat.href)) ||
          services.some((service) => isNavPathExact(path, service.href));

        return (
          <MobileNavItemRow
            key={cat.id}
            label={cat.label}
            href={cat.href || ROUTES.capabilities}
            hasSubmenu={services.length > 0}
            expanded={Boolean(expandedSections[categoryKey])}
            onToggle={() => toggleSection(categoryKey)}
            onNavigate={onNavigate}
            active={Boolean(categoryActive)}
            nested
          >
            {services.map((service) => (
              <VbsLink
                key={service.label}
                href={service.href}
                className={mobileCapabilitySublinkClass(service)}
                onClick={onNavigate}
                {...capabilityLinkProps(service)}
              >
                <span className="nav-sublink-label">{service.label}</span>
              </VbsLink>
            ))}
          </MobileNavItemRow>
        );
      })}
    </>
  );
}

type SiteMobileNavProps = {
  open: boolean;
  onClose: () => void;
};

export function SiteMobileNav({ open, onClose }: SiteMobileNavProps) {
  const pathname = usePathname();
  const path = normalizePath(pathname);
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (!open) {
      setExpandedSections({});
      return;
    }

    if (isCapabilitiesPage(path)) {
      const activeCategoryId = getCapabilityCategoryIdFromPath(path);
      setExpandedSections({
        capabilities: true,
        [`cat-${activeCategoryId}`]: true,
      });
    }
  }, [open, path]);

  if (!open) return null;

  const toggleSection = (key: string) => {
    setExpandedSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const mobileSublinkClass = (href: string) =>
    cn("vbs-mobile-nav-sublink", isNavPathActive(path, href) && "nav-sublink-active");

  const isCapabilitiesActive = isCapabilitiesPage(path);
  const isAbout = isAboutSectionPath(path);
  const isEngagementPage = isEngagementSectionPath(path);
  const isContactPage = isContactSectionPath(path);
  const isResourcesPage = isResourcesSectionPath(path);

  const handleNavigate = () => onClose();

  return (
    <div className="vbs-header-mobile-panel is-open" role="dialog" aria-label="Mobile menu">
      <nav className="vbs-mobile-nav-list" aria-label="Mobile">
        {MAIN_NAV.map((item) => {
          if ("hasDropdown" in item && item.hasDropdown === "capabilities") {
            return (
              <MobileNavItemRow
                key={item.label}
                label={item.label}
                href={item.href}
                hasSubmenu
                expanded={Boolean(expandedSections.capabilities)}
                onToggle={() => toggleSection("capabilities")}
                onNavigate={handleNavigate}
                active={isCapabilitiesActive}
                toggleOnly
              >
                <MobileCapabilitiesNav
                  path={path}
                  expandedSections={expandedSections}
                  toggleSection={toggleSection}
                  onNavigate={handleNavigate}
                />
              </MobileNavItemRow>
            );
          }

          if ("hasDropdown" in item && item.hasDropdown === "resources") {
            return (
              <MobileNavItemRow
                key={item.label}
                label={item.label}
                href={item.href}
                hasSubmenu
                expanded={Boolean(expandedSections.resources)}
                onToggle={() => toggleSection("resources")}
                onNavigate={handleNavigate}
                active={isResourcesPage}
                toggleOnly
              >
                {RESOURCES_DROPDOWN_LINKS.map((link) => (
                  <VbsLink
                    key={link.label}
                    href={link.href}
                    className={mobileSublinkClass(link.href)}
                    onClick={handleNavigate}
                    {...capabilityLinkProps(link)}
                  >
                    <span className="nav-sublink-label">{link.label}</span>
                  </VbsLink>
                ))}
              </MobileNavItemRow>
            );
          }

          if ("hasDropdown" in item && item.hasDropdown === "about") {
            return (
              <MobileNavItemRow
                key={item.label}
                label={item.label}
                href={item.href}
                hasSubmenu
                expanded={Boolean(expandedSections.about)}
                onToggle={() => toggleSection("about")}
                onNavigate={handleNavigate}
                active={isAbout}
              >
                {ABOUT_DROPDOWN_LINKS.map((link) => (
                  <VbsLink
                    key={link.label}
                    href={link.href}
                    className={mobileSublinkClass(link.href)}
                    onClick={handleNavigate}
                  >
                    <span className="nav-sublink-label">{link.label}</span>
                  </VbsLink>
                ))}
              </MobileNavItemRow>
            );
          }

          const isActiveEngagement = item.label === "Engagement Model" && isEngagementPage;
          const isActiveContact = item.label === "Contact Us" && isContactPage;

          return (
            <MobileNavItemRow
              key={item.label}
              label={item.label}
              href={item.href}
              hasSubmenu={false}
              expanded={false}
              onToggle={() => {}}
              onNavigate={handleNavigate}
              active={isActiveEngagement || isActiveContact}
            />
          );
        })}
      </nav>
      <div className="vbs-mobile-nav-cta">
        <BookMeetingButton
          fullWidth
          onAfterClick={handleNavigate}
          className="vbs-header-book-cta primary-cta--highlighted"
        />
      </div>
    </div>
  );
}
