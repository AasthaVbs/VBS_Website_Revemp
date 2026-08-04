export function WebinarCalendarIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect x="3.75" y="6.25" width="22.5" height="20" rx="2" stroke="#111111" strokeWidth="1.5" />
      <path d="M10 3.75V8.75" stroke="#D70416" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M20 3.75V8.75" stroke="#D70416" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M3.75 12.5H26.25" stroke="#111111" strokeWidth="1.5" />
    </svg>
  );
}

export function WebinarClockIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <circle cx="15" cy="15" r="11.25" stroke="#111111" strokeWidth="1.5" />
      <path
        d="M15 7.5V15L20.625 18.75"
        stroke="#D70416"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function WebinarLocationIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M15 27.5C15 27.5 5 19.5 5 12.5C5 7.253 9.253 3 15 3C20.747 3 25 7.253 25 12.5C25 19.5 15 27.5 15 27.5Z"
        stroke="#111111"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="15" cy="12.5" r="3.75" stroke="#D70416" strokeWidth="1.5" />
    </svg>
  );
}
