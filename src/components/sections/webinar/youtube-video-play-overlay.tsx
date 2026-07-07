import { cn } from "@/lib/utils";

type YoutubeVideoPlayOverlayProps = {
  className?: string;
  iconClassName?: string;
};

export function YoutubeVideoPlayOverlay({ className, iconClassName }: YoutubeVideoPlayOverlayProps) {
  return (
    <span
      className={cn(
        "youtube-play-overlay pointer-events-none absolute inset-0 z-[1] flex items-center justify-center",
        className,
      )}
      aria-hidden
    >
      <svg
        className={cn("youtube-play-overlay__icon", iconClassName)}
        viewBox="0 0 24 24"
        aria-hidden
      >
        <path
          fill="currentColor"
          d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.7 15.5V8.5L15.8 12l-6.1 3.5Z"
        />
      </svg>
    </span>
  );
}
