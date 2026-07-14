"use client";

import { useEffect, useState } from "react";

import { buildMepResourcesFeedItems } from "@/lib/mep-resources-feed";
import type { ResourceFeedItem } from "@/lib/resource-listing";

/** Full dynamic feed for home + MEP resources sections (blogs, webinars, case studies, white papers). */
export function useHomeResourcesAllItems(initialItems?: ResourceFeedItem[]) {
  const [items, setItems] = useState<ResourceFeedItem[]>(
    () => initialItems ?? buildMepResourcesFeedItems({ posts: [], webinars: [] }),
  );

  useEffect(() => {
    if (initialItems?.length) {
      setItems(initialItems);
    }
  }, [initialItems]);

  useEffect(() => {
    let cancelled = false;

    fetch("/api/resources-feed")
      .then((response) => (response.ok ? response.json() : null))
      .then((data: ResourceFeedItem[] | null) => {
        if (cancelled || !Array.isArray(data) || data.length === 0) return;
        setItems(data);
      })
      .catch(() => {
        /* Keep server/static fallback if live feed is unavailable. */
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return items;
}

/** @deprecated Use useHomeResourcesAllItems */
export const useMepResourcesAllItems = useHomeResourcesAllItems;
