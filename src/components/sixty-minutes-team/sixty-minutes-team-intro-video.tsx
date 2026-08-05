"use client";

import React, { useEffect, useMemo, useState } from "react";
import { SIXTY_MINUTES_INTRO_VIDEO_ID } from "@/constants/sixty-minutes-team-data";

function buildIntroEmbedUrl(videoId: string, { autoplay = true }: { autoplay?: boolean } = {}) {
  const params = new URLSearchParams({
    autoplay: autoplay ? "1" : "0",
    mute: "1",
    loop: "1",
    playlist: videoId,
    controls: "0",
    modestbranding: "1",
    rel: "0",
    playsinline: "1",
    disablekb: "1",
    fs: "0",
    iv_load_policy: "3",
    enablejsapi: "1",
  });

  if (typeof window !== "undefined" && window.location?.origin) {
    params.set("origin", window.location.origin);
  }

  return `https://www.youtube-nocookie.com/embed/${videoId}?${params.toString()}`;
}

export function SixtyMinutesTeamIntroVideo({
  videoId = SIXTY_MINUTES_INTRO_VIDEO_ID,
}: {
  videoId?: string;
}) {
  const [playing, setPlaying] = useState(false);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    setAutoplay(!prefersReduced);
    return undefined;
  }, []);

  const embedUrl = useMemo(
    () => buildIntroEmbedUrl(videoId, { autoplay }),
    [videoId, autoplay],
  );

  useEffect(() => {
    if (!embedUrl) return undefined;

    const fallbackTimer = window.setTimeout(() => {
      setPlaying(true);
    }, 2800);

    return () => {
      window.clearTimeout(fallbackTimer);
    };
  }, [embedUrl]);

  const handleIframeLoad = () => {
    window.setTimeout(() => {
      setPlaying(true);
    }, 900);
  };

  return (
    <div className="hero-video-stage">
      <div className="hero-video-frame">
        <div className={`hvf-screen${playing ? " playing" : ""}`}>
          <iframe
            className="hvf-iframe"
            src={embedUrl}
            title="Introduction video"
            allow="autoplay; encrypted-media; picture-in-picture"
            loading="eager"
            onLoad={handleIframeLoad}
          />
          <div className="hvf-shield" aria-hidden />
          <div className="hvf-overlay" aria-hidden />
        </div>
      </div>
    </div>
  );
}
