"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

import { NimbusBookingEmbed } from "@/components/booking/nimbus-booking-embed";
import { SectionSkeleton } from "@/components/ui/section-skeleton";
import { cn } from "@/lib/utils";
import {
  GET_IN_TOUCH_EMBED_HEIGHT_DESKTOP_PX,
  GET_IN_TOUCH_EMBED_HEIGHT_MOBILE_PX,
  GET_IN_TOUCH_ZOHO_VISIBLE_HEIGHT_CAP_PX,
} from "@/utils/zoho-contact-form-embed";
import { prefetchGetInTouchEmbeds } from "@/utils/prefetch-get-in-touch-embeds";

function GetInTouchZohoSkeleton() {
  const [minHeight, setMinHeight] = useState(GET_IN_TOUCH_EMBED_HEIGHT_DESKTOP_PX);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const sync = () => {
      setMinHeight(
        mediaQuery.matches
          ? GET_IN_TOUCH_EMBED_HEIGHT_MOBILE_PX
          : GET_IN_TOUCH_EMBED_HEIGHT_DESKTOP_PX,
      );
    };
    sync();
    mediaQuery.addEventListener("change", sync);
    return () => mediaQuery.removeEventListener("change", sync);
  }, []);

  return <SectionSkeleton minHeight={minHeight} />;
}

const ClientOnlyZohoContactForm = dynamic(
  () =>
    import("@/components/zoho/client-only-zoho-contact-form").then(
      (mod) => mod.ClientOnlyZohoContactForm,
    ),
  {
    ssr: false,
    loading: () => <GetInTouchZohoSkeleton />,
  },
);

type GetInTouchTab = "contact" | "meeting";

type GetInTouchFormPanelProps = {
  zohoVisibleHeightCap?: number | null;
};

export function GetInTouchFormPanel({
  zohoVisibleHeightCap,
}: GetInTouchFormPanelProps) {
  const [resolvedZohoCap, setResolvedZohoCap] = useState<number | null>(
    zohoVisibleHeightCap ?? GET_IN_TOUCH_ZOHO_VISIBLE_HEIGHT_CAP_PX,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    const syncViewport = () => {
      const isMobile = mediaQuery.matches;
      setResolvedZohoCap(
        zohoVisibleHeightCap ??
          (isMobile ? null : GET_IN_TOUCH_ZOHO_VISIBLE_HEIGHT_CAP_PX),
      );
    };

    syncViewport();
    mediaQuery.addEventListener("change", syncViewport);
    return () => mediaQuery.removeEventListener("change", syncViewport);
  }, [zohoVisibleHeightCap]);

  const [activeTab, setActiveTab] = useState<GetInTouchTab>("contact");

  useEffect(() => {
    prefetchGetInTouchEmbeds();
    void import("@/components/zoho/zoho-contact-us-iframe-form");
  }, []);

  return (
    <div className="vbs-get-in-touch__panel">
      <div className="vbs-get-in-touch__tabs" role="tablist" aria-label="Contact options">
        <button
          type="button"
          role="tab"
          id="get-in-touch-tab-contact"
          aria-selected={activeTab === "contact"}
          aria-controls="get-in-touch-panel-contact"
          className={cn(
            "vbs-get-in-touch__tab",
            activeTab === "contact" && "vbs-get-in-touch__tab--active",
          )}
          onClick={() => setActiveTab("contact")}
        >
          Contact Now
        </button>
        <button
          type="button"
          role="tab"
          id="get-in-touch-tab-meeting"
          aria-selected={activeTab === "meeting"}
          aria-controls="get-in-touch-panel-meeting"
          className={cn(
            "vbs-get-in-touch__tab",
            activeTab === "meeting" && "vbs-get-in-touch__tab--active",
          )}
          onClick={() => setActiveTab("meeting")}
        >
          Book a meeting
        </button>
      </div>

      <div className="vbs-get-in-touch__tab-panels">
        <div
          role="tabpanel"
          id="get-in-touch-panel-contact"
          aria-labelledby="get-in-touch-tab-contact"
          hidden={activeTab !== "contact"}
          className="vbs-get-in-touch__tab-panel"
        >
          <div className="vbs-contact-zoho-wrap vbs-get-in-touch__embed-slot w-full">
            <ClientOnlyZohoContactForm
              eager
              loadPriority="high"
              visibleHeightCap={resolvedZohoCap}
              headerCropPreset="get-in-touch"
            />
          </div>
        </div>

        <div
          role="tabpanel"
          id="get-in-touch-panel-meeting"
          aria-labelledby="get-in-touch-tab-meeting"
          hidden={activeTab !== "meeting"}
          className="vbs-get-in-touch__tab-panel"
        >
          <NimbusBookingEmbed
            className="vbs-nimbus-booking-embed vbs-get-in-touch__embed-slot"
            loadPriority="high"
          />
        </div>
      </div>
    </div>
  );
}
