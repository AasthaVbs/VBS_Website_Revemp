import type { MouseEvent, SyntheticEvent } from "react";

export const NIMBUS_BOOKING_SCRIPT_SRC = "https://bookings.nimbuspop.com/assets/embed.js";

export const HEADER_BOOK_MEETING_URL =
  "https://booknow.virtualbuildingstudio.com/portal-embed#/4689125000003492031";

export function ensureNimbusBookingScript() {
  return new Promise<boolean>((resolve, reject) => {
    if (typeof window === "undefined") {
      resolve(false);
      return;
    }

    if (window.Bookings && typeof window.Bookings.linkModal === "function") {
      resolve(true);
      return;
    }

    const existing = document.querySelector(`script[src="${NIMBUS_BOOKING_SCRIPT_SRC}"]`);
    if (existing) {
      if (window.Bookings && typeof window.Bookings.linkModal === "function") {
        resolve(true);
        return;
      }

      const scriptEl = existing as HTMLScriptElement & {
        complete?: boolean;
        readyState?: string;
      };
      const isLoaded =
        scriptEl.complete ||
        scriptEl.readyState === "complete" ||
        scriptEl.readyState === "loaded" ||
        scriptEl.getAttribute("data-loaded") === "true";

      if (isLoaded) {
        reject(new Error("Nimbus booking script loaded without Bookings API"));
        return;
      }

      existing.addEventListener("load", () => resolve(true), { once: true });
      existing.addEventListener(
        "error",
        () => reject(new Error("Failed to load Nimbus booking script")),
        { once: true },
      );
      return;
    }

    const script = document.createElement("script");
    script.src = NIMBUS_BOOKING_SCRIPT_SRC;
    script.async = true;
    script.onload = () => {
      script.setAttribute("data-loaded", "true");
      resolve(true);
    };
    script.onerror = () => reject(new Error("Failed to load Nimbus booking script"));
    document.body.appendChild(script);
  });
}

export function openBookMeetingModal(event?: MouseEvent | SyntheticEvent) {
  if (event?.preventDefault) {
    event.preventDefault();
  }

  return ensureNimbusBookingScript()
    .then(() => {
      if (!window.Bookings || typeof window.Bookings.linkModal !== "function") {
        return false;
      }

      const openModal = window.Bookings.linkModal({ url: HEADER_BOOK_MEETING_URL });
      openModal(event);
      return true;
    })
    .catch(() => false);
}
