import type { ImgHTMLAttributes } from "react";

type LazyImgProps = ImgHTMLAttributes<HTMLImageElement> & {
  priority?: boolean;
};

/** Native img with lazy-loading defaults for below-fold media. */
export function LazyImg({ priority = false, loading, decoding = "async", fetchPriority, ...props }: LazyImgProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      {...props}
      loading={loading ?? (priority ? "eager" : "lazy")}
      decoding={decoding}
      fetchPriority={fetchPriority ?? (priority ? "high" : "low")}
    />
  );
}
