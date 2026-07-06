const ICON_MAP: Record<string, string> = {
  "project-based": "/icons/Layer_1.svg",
  "dedicated-resource": "/icons/layer2.svg",
  "global-delivery": "/icons/layer3.svg",
};

export function EngagementModelIcon({ name }: { name: string }) {
  const src = ICON_MAP[name];
  if (!src) return null;

  return (
    <span className="vbs-engagement-models-section__icon-frame" aria-hidden>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt="" className="vbs-engagement-models-section__icon-img" />
    </span>
  );
}
