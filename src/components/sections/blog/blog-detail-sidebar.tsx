"use client";

import Link from "next/link";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";

import type { BlogTocItem } from "@/constants/blog-posts/types";
import { cn } from "@/lib/utils";

type BlogDetailSidebarProps = {
  tableOfContents: BlogTocItem[];
  activeId?: string;
};

export function BlogDetailSidebar({
  tableOfContents,
  activeId,
}: BlogDetailSidebarProps) {
  const [query, setQuery] = useState("");

  const filteredToc = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      return tableOfContents;
    }
    return tableOfContents.filter((item) =>
      item.label.toLowerCase().includes(q),
    );
  }, [query, tableOfContents]);

  return (
    <aside className="w-full shrink-0 xl:w-[344px]">
      <div className="flex flex-col gap-5 rounded-[10px] bg-white p-5 shadow-[0_4px_10px_rgba(0,0,0,0.15)] xl:sticky xl:top-28">
        <Link
          href="/blogs"
          className="text-[16px] font-medium capitalize text-[#D70416] transition-opacity hover:opacity-80"
        >
          Go back To Blogs
        </Link>

        <label className="flex h-[50px] items-center justify-between gap-2 rounded-[10px] border border-[#CBCCCD] bg-[#FAFAFA] px-5 py-3 backdrop-blur-[50px]">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Here ..."
            className="min-w-0 flex-1 bg-transparent text-[16px] capitalize text-[#111111] placeholder:text-[#808080] focus:outline-none"
          />
          <Search className="h-5 w-5 shrink-0 text-[#808080]" strokeWidth={1.2} />
        </label>

        <div className="flex flex-col gap-[15px]">
          <h2 className="text-[24px] font-normal leading-normal text-[#111111]">
            Table of Content
          </h2>
          <nav className="flex flex-col gap-4" aria-label="Table of contents">
            {filteredToc.map((item, index) => {
              const isFirst = index === 0 && !query;
              const isActive = activeId === item.id;
              const isIndented = !isFirst;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={cn(
                    "text-[16px] leading-snug transition-colors hover:text-[#111111]",
                    isIndented && "pl-2.5",
                    isFirst || isActive
                      ? "text-[#111111]"
                      : "text-[#808080]",
                  )}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
        </div>
      </div>
    </aside>
  );
}
