"use client";
import { useMemo, useState, useEffect } from "react";
import type { Post } from "./PostList";

export default function BlogFilters({
  posts,
  tags,
  onFiltered,
}: {
  posts: Post[];
  tags: string[];
  onFiltered: (p: Post[]) => void;
}) {
  const [activeTag, setActiveTag] = useState<string>("");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return posts.filter((p) => {
      const matchesTag = !activeTag || (p as any).tags?.includes(activeTag);
      const q = query.trim().toLowerCase();
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.summary.toLowerCase().includes(q);
      return matchesTag && matchesQuery;
    });
  }, [posts, activeTag, query]);

  // Use useEffect to call onFiltered when filtered results change
  useEffect(() => {
    onFiltered(filtered);
  }, [filtered, onFiltered]);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        <button
          onClick={() => setActiveTag("")}
          className={`rounded border px-2 py-1 text-sm ${
            activeTag === ""
              ? "bg-academic-sage text-white border-academic-sage"
              : "dark:border-slate-700"
          }`}
        >
          All
        </button>
        {tags.map((t) => (
          <button
            key={t}
            onClick={() => setActiveTag(t)}
            className={`rounded border px-2 py-1 text-sm ${
              activeTag === t
                ? "bg-academic-sage text-white border-academic-sage"
                : "dark:border-slate-700"
            }`}
          >
            {t}
          </button>
        ))}
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search posts..."
          className="ml-auto w-full sm:w-64 rounded border px-2 py-1 text-sm dark:border-slate-700"
        />
      </div>
    </div>
  );
}
