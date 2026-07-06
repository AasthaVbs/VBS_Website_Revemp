"use client";

import { useEffect, useMemo, useState } from "react";

import {
  getResourceFeedFallbackImage,
  getResourceImageFallbackCandidates,
  normalizeResourceImageSrc,
  RESOURCE_FEED_FALLBACK_IMAGE,
} from "@/lib/resource-image";

type ResourceFeedPhotoProps = {
  src: string;
  className?: string;
  loading?: "lazy" | "eager";
};

export function ResourceFeedPhoto({ src, className, loading = "lazy" }: ResourceFeedPhotoProps) {
  const candidates = useMemo(
    () => getResourceImageFallbackCandidates(normalizeResourceImageSrc(src)),
    [src],
  );
  const [candidateIndex, setCandidateIndex] = useState(0);
  const [figmaFallbackIndex, setFigmaFallbackIndex] = useState(0);

  useEffect(() => {
    setCandidateIndex(0);
    setFigmaFallbackIndex(0);
  }, [src, candidates]);

  const imageSrc =
    candidates[candidateIndex] ||
    getResourceFeedFallbackImage(figmaFallbackIndex) ||
    RESOURCE_FEED_FALLBACK_IMAGE;

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={imageSrc}
      alt=""
      className={className}
      loading={loading}
      decoding="async"
      onError={() => {
        if (candidateIndex + 1 < candidates.length) {
          setCandidateIndex((index) => index + 1);
          return;
        }

        const nextFallback = getResourceFeedFallbackImage(figmaFallbackIndex);
        setFigmaFallbackIndex((index) => index + 1);
        if (imageSrc !== nextFallback) {
          setCandidateIndex(candidates.length);
        }
      }}
    />
  );
}
