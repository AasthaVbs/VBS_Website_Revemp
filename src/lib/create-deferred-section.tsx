"use client";

import dynamic from "next/dynamic";
import { useEffect, type ComponentType } from "react";

import { SectionSkeleton } from "@/components/ui/section-skeleton";
import { useInView } from "@/hooks/use-in-view";

type DeferredSectionOptions = {
  minHeight?: number;
  rootMargin?: string;
  ssr?: boolean;
};

export function createDeferredSection<P extends object>(
  loader: () => Promise<Record<string, ComponentType<P>>>,
  exportName: string,
  options: DeferredSectionOptions = {},
) {
  const { minHeight = 240, rootMargin = "720px 0px", ssr = false } = options;

  const LazyComponent = dynamic(
    () => loader().then((mod) => mod[exportName] as ComponentType<P>),
    {
      ssr,
      loading: () => <SectionSkeleton minHeight={minHeight} />,
    },
  );

  function DeferredSection(props: P) {
    const { ref, inView } = useInView({ rootMargin, triggerOnce: true });

    // Warm the chunk as soon as the placeholder enters (or nears) the viewport.
    useEffect(() => {
      if (!inView) return;
      void loader();
    }, [inView]);

    return (
      <div ref={ref} className="deferred-section-host">
        {inView ? (
          <LazyComponent {...props} />
        ) : (
          <SectionSkeleton minHeight={minHeight} />
        )}
      </div>
    );
  }

  DeferredSection.displayName = `Deferred(${exportName})`;
  return DeferredSection;
}
