import ctaMobileBg from "@/assets/images/CTA Mobile BG.jpg";

/** Figma mosaic — desktop SVG; mobile uses CTA Mobile BG.jpg */
export function EvaluateDeliveryCtaMosaic() {
  return (
    <div className="evaluate-delivery-cta-mosaic" aria-hidden>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="evaluate-delivery-cta-mosaic__desktop"
        src="/images/figma/evaluate-cta-mosaic.svg"
        alt=""
        width={1440}
        height={1467}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="evaluate-delivery-cta-mosaic__mobile"
        src={ctaMobileBg.src}
        alt=""
        width={ctaMobileBg.width}
        height={ctaMobileBg.height}
      />
    </div>
  );
}
