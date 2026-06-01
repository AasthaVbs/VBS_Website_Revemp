/** Figma fade divider — same as home stats strip (Vector 2) */
export function GradientVerticalDivider({ id }: { id: string }) {
  return (
    <div className="stats-strip-divider" aria-hidden>
      <svg viewBox="0 0 1 100" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient
            id={id}
            x1="0.5"
            y1="0"
            x2="0.5"
            y2="100"
            gradientUnits="userSpaceOnUse"
          >
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
