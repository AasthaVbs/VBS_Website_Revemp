"use client";

import { useEffect, useRef, useState } from "react";

type UseInViewOptions = {
  rootMargin?: string;
  threshold?: number | number[];
  triggerOnce?: boolean;
};

export function useInView({
  rootMargin = "720px 0px",
  threshold = 0,
  triggerOnce = true,
}: UseInViewOptions = {}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);
  const triggeredRef = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || (triggerOnce && triggeredRef.current)) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setInView(true);
          if (triggerOnce) {
            triggeredRef.current = true;
            observer.disconnect();
          }
        } else if (!triggerOnce) {
          setInView(false);
        }
      },
      { rootMargin, threshold },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin, threshold, triggerOnce]);

  return { ref, inView };
}
