"use client";

import type { CSSProperties } from "react";

import evaluateCtaMosaic from "@/assets/images/evaluate-cta-mosaic.jpg";

/** Shared Evaluate CTA mosaic background (desktop + mobile). */
export function EvaluateDeliveryCtaMosaic() {
  const mosaicUrl = `url(${evaluateCtaMosaic.src})`;

  return (
    <div
      className="evaluate-delivery-cta-mosaic"
      aria-hidden
      style={
        {
          "--cta-mosaic-bg": mosaicUrl,
          "--cta-mosaic-mobile": mosaicUrl,
        } as CSSProperties
      }
    />
  );
}
