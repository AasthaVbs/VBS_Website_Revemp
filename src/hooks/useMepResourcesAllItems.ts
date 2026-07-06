"use client";

import { useMemo, useState } from "react";

import { buildMepResourcesFeedItems } from "@/lib/mep-resources-feed";

/** Full dynamic feed for home + MEP resources sections (blogs, webinars, case studies, white papers). */
export function useHomeResourcesAllItems() {
  const [referenceDate] = useState(() => new Date());

  return useMemo(
    () =>
      buildMepResourcesFeedItems({
        referenceDate,
      }),
    [referenceDate],
  );
}

/** @deprecated Use useHomeResourcesAllItems */
export const useMepResourcesAllItems = useHomeResourcesAllItems;
