"use client";

import type { CSSProperties } from "react";

import ctaMobileBg from "@/assets/images/CTA Mobile BG.jpg";

/** Figma mosaic — desktop SVG / mobile uses CTA Mobile BG.jpg */
export function EvaluateDeliveryCtaMosaic() {
  return (
    <div
      className="evaluate-delivery-cta-mosaic"
      aria-hidden
      style={
        {
          "--cta-mosaic-mobile": `url(${ctaMobileBg.src})`,
        } as CSSProperties
      }
    />
  );
}
