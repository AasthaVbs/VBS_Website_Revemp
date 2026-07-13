"use client";

import { useEffect, useMemo, useState } from "react";

import { buildMepResourcesFeedItems } from "@/lib/mep-resources-feed";
import type { ResourceFeedItem } from "@/lib/resource-listing";

/** Full dynamic feed for home + MEP resources sections (blogs, webinars, case studies, white papers). */
export function useHomeResourcesAllItems() {
  const [referenceDate] = useState(() => new Date());

  const snapshotItems = useMemo(
    () =>
      buildMepResourcesFeedItems({
        referenceDate,
      }),
    [referenceDate],
  );

  const [items, setItems] = useState<ResourceFeedItem[]>(snapshotItems);

  useEffect(() => {
    setItems(snapshotItems);
  }, [snapshotItems]);

  useEffect(() => {
    let cancelled = false;

    fetch("/api/resources-feed")
      .then((response) => (response.ok ? response.json() : null))
      .then((data: ResourceFeedItem[] | null) => {
        if (cancelled || !Array.isArray(data) || data.length === 0) return;
        setItems(data);
      })
      .catch(() => {
        /* Keep snapshot feed if live Sanity is unavailable. */
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return items;
}

/** @deprecated Use useHomeResourcesAllItems */
export const useMepResourcesAllItems = useHomeResourcesAllItems;
