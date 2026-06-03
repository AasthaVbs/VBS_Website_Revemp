"use client";

import { useEffect } from "react";
import { X } from "lucide-react";

type TestimonialVideoModalProps = {
  youtubeVideoId: string;
  title: string;
  onClose: () => void;
};

export function TestimonialVideoModal({
  youtubeVideoId,
  title,
  onClose,
}: TestimonialVideoModalProps) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-4 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close video"
          className="absolute -top-12 right-0 inline-flex h-10 w-10 items-center justify-center rounded-[10px] border border-white/30 text-white transition hover:bg-white/10 md:-right-12 md:top-0"
        >
          <X className="h-5 w-5" aria-hidden />
        </button>
        <div className="relative aspect-video w-full overflow-hidden rounded-[10px] bg-black">
          <iframe
            title={title}
            src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&rel=0`}
            className="absolute inset-0 h-full w-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
