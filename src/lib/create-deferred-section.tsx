"use client";

import dynamic from "next/dynamic";
import { useEffect, useState, type ComponentType } from "react";

import { SectionSkeleton } from "@/components/ui/section-skeleton";
import { useInView } from "@/hooks/use-in-view";

type DeferredSectionOptions = {
  minHeight?: number;
  rootMargin?: string;
  ssr?: boolean;
};

function readAnchorId(props: object): string | undefined {
  const record = props as { sectionId?: unknown; id?: unknown };
  if (typeof record.sectionId === "string" && record.sectionId.trim()) {
    return record.sectionId;
  }
  if (typeof record.id === "string" && record.id.trim()) {
    return record.id;
  }
  return undefined;
}

function hashTargetsId(id: string) {
  if (typeof window === "undefined") return false;
  return window.location.hash.replace(/^#/, "") === id;
}

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
    const anchorId = readAnchorId(props);
    const [forceLoad, setForceLoad] = useState(false);
    const shouldRender = inView || forceLoad;

    useEffect(() => {
      if (!anchorId) return;

      if (hashTargetsId(anchorId)) {
        setForceLoad(true);
      }

      const onHashChange = () => {
        if (hashTargetsId(anchorId)) {
          setForceLoad(true);
        }
      };

      const onForceLoad = (event: Event) => {
        const detail = (event as CustomEvent<{ id?: string }>).detail;
        if (detail?.id === anchorId) {
          setForceLoad(true);
        }
      };

      window.addEventListener("hashchange", onHashChange);
      window.addEventListener("vbs:force-deferred-load", onForceLoad);
      return () => {
        window.removeEventListener("hashchange", onHashChange);
        window.removeEventListener("vbs:force-deferred-load", onForceLoad);
      };
    }, [anchorId]);

    // Warm the chunk as soon as the placeholder enters (or nears) the viewport.
    useEffect(() => {
      if (!shouldRender) return;
      void loader();
    }, [shouldRender]);

    return (
      <div
        ref={ref}
        className="deferred-section-host"
        // Keep an anchor before the lazy section mounts so in-page CTAs can scroll.
        id={!shouldRender ? anchorId : undefined}
        data-deferred-section-id={anchorId}
      >
        {shouldRender ? (
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
