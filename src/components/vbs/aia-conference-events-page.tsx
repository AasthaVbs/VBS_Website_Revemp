"use client";

import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import { Modal } from "react-bootstrap";

import { SiteHeader } from "@/components/layout/site-header";
import { AiaClientsSection } from "@/components/sections/aia/aia-clients-section";
import { AiaEngageSection } from "@/components/sections/aia/aia-engage-section";
import { AiaHeroSection } from "@/components/sections/aia/aia-hero-section";
import { AiaPressureSection } from "@/components/sections/aia/aia-pressure-section";
import { AiaTeamSection } from "@/components/sections/aia/aia-team-section";
import { AiaWalkthroughSection } from "@/components/sections/aia/aia-walkthrough-section";
import { EvaluateDeliveryCtaSection } from "@/components/sections/evaluate-delivery-cta-section";
import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";
import {
  AIA_FAQ_ITEMS,
  aiaCtaCopy,
  aiaFaqCopy,
  aiaTestimonialsCopy,
} from "@/constants/aia-conference-events-content";
import {
  DeferredClientSuccessStoriesSection,
  DeferredFaqSection,
  DeferredGetInTouchSection,
  DeferredSiteFooter,
} from "@/lib/lazy-page-sections";
import {
  ensureNimbusBookingScript,
  NIMBUS_BOOKING_SCRIPT_SRC,
} from "@/utils/nimbus-booking";

const NIMBUS_AVAILABLE_SLOTS_URL =
  "https://booknow.virtualbuildingstudio.com/portal-embed#/4689125000003287142";
const NIMBUS_SCRIPT_SRC = NIMBUS_BOOKING_SCRIPT_SRC;

export function AiaConferenceEventsPage() {
  const [showSlotsModal, setShowSlotsModal] = useState(false);

  useEffect(() => {
    ensureNimbusBookingScript().catch(() => {});
  }, []);

  useEffect(() => {
    if (!showSlotsModal || typeof window === "undefined") return undefined;
    let cancelled = false;
    let pollTimer: number | null = null;

    const mountEmbed = () => {
      if (cancelled) return true;
      const container = document.getElementById("aia-inline-slots-container");
      if (!container) return false;
      if (!window.Bookings || typeof window.Bookings.inlineEmbed !== "function") return false;
      container.innerHTML = "";
      window.Bookings.inlineEmbed({
        url: NIMBUS_AVAILABLE_SLOTS_URL,
        parent: "#aia-inline-slots-container",
        height: "600px",
      });
      return true;
    };

    const existing = document.querySelector(`script[src="${NIMBUS_SCRIPT_SRC}"]`);
    const onReady = () => {
      if (mountEmbed()) return;
      pollTimer = window.setInterval(() => {
        if (mountEmbed() && pollTimer) window.clearInterval(pollTimer);
      }, 120);
    };

    if (existing) {
      if (window.Bookings && typeof window.Bookings.inlineEmbed === "function") onReady();
      else existing.addEventListener("load", onReady, { once: true });
    } else {
      const script = document.createElement("script");
      script.src = NIMBUS_SCRIPT_SRC;
      script.async = true;
      script.onload = onReady;
      document.body.appendChild(script);
    }

    return () => {
      cancelled = true;
      if (pollTimer) window.clearInterval(pollTimer);
    };
  }, [showSlotsModal]);

  const openSlotsModal = () => setShowSlotsModal(true);

  return (
    <div className="vbs-redesign-page aia-conference-events-page min-h-screen overflow-x-hidden bg-white">
      <SiteHeader />
      <main>
        <AiaHeroSection onReserveSlot={openSlotsModal} />
        <AiaClientsSection />
        <AiaTeamSection />
        <AiaPressureSection />
        <DeferredClientSuccessStoriesSection
          tag={aiaTestimonialsCopy.tag}
          titleLead={aiaTestimonialsCopy.titleLead}
          titleAccent={aiaTestimonialsCopy.titleAccent}
          description={aiaTestimonialsCopy.description}
          showViewAll={false}
        />
        <AiaEngageSection onReserveSlot={openSlotsModal} />
        <AiaWalkthroughSection />
        <EvaluateDeliveryCtaSection
          title={aiaCtaCopy.title}
          titleClassName="capitalize"
          description={aiaCtaCopy.description}
          ctaElement={
            <div className="flex flex-col items-center gap-2">
              <PrimaryCtaButton fullWidth={false} onClick={openSlotsModal}>
                {aiaCtaCopy.ctaLabel}
                <ChevronRight className="h-2.5 w-2.5" strokeWidth={1.5} />
              </PrimaryCtaButton>
              <p className="aia-cta-booth">{aiaCtaCopy.boothNote}</p>
            </div>
          }
        />
        <DeferredFaqSection
          variant="home"
          tag={aiaFaqCopy.tag}
          titleLine1={aiaFaqCopy.titleLine1}
          titleLine2={aiaFaqCopy.titleLine2}
          description={aiaFaqCopy.description}
          items={AIA_FAQ_ITEMS}
        />
        <DeferredGetInTouchSection sectionId="aia-page-contact" />
      </main>
      <Modal
        show={showSlotsModal}
        onHide={() => setShowSlotsModal(false)}
        size="xl"
        centered
        className="aia-booking-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Reserve a Quick Slot at Booth #4539</Modal.Title>
        </Modal.Header>
        <Modal.Body className="aia-nimbus-modal-body">
          {showSlotsModal ? <div id="aia-inline-slots-container" className="aia-nimbus-embed-host" /> : null}
        </Modal.Body>
      </Modal>
      <DeferredSiteFooter />
    </div>
  );
}
