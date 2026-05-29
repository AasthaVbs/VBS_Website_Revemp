import { cn } from "@/lib/utils";

export function navLinkClass(active = false, withDropdown = false) {
  return cn(
    "nav-link transition-colors",
    withDropdown && "nav-link-dropdown",
    active && "nav-link-active",
  );
}
