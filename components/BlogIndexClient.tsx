"use client";
import { useState, useCallback } from "react";
import type { Post } from "./PostList";
import BlogFilters from "./BlogFilters";
import PostList from "./PostList";

export default function BlogIndexClient({
  posts,
  tags,
}: {
  posts: (Post & { tags?: string[] })[];
  tags: string[];
}) {
  const [filtered, setFiltered] =
    useState<(Post & { tags?: string[] })[]>(posts);
  const [page, setPage] = useState(1);
  const pageSize = 5;
  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const start = (page - 1) * pageSize;
  const pageItems = filtered.slice(start, start + pageSize);

  // Memoize the callback to prevent unnecessary re-renders
  const handleFiltered = useCallback((p: (Post & { tags?: string[] })[]) => {
    setFiltered(p);
    setPage(1);
  }, []);

  return (
    <div className="space-y-4">
      <BlogFilters posts={posts} tags={tags} onFiltered={handleFiltered} />
      <PostList posts={pageItems} />
      {totalPages > 1 && (
        <div className="flex items-center justify-between gap-2">
          <button
            className="rounded border px-3 py-1 text-sm disabled:opacity-50 dark:border-slate-700 hover:bg-academic-teal/10 hover:border-academic-teal transition-colors duration-200"
            onClick={() => setPage((n) => Math.max(1, n - 1))}
            disabled={page === 1}
          >
            Previous
          </button>
          <span className="text-sm text-slate-600 dark:text-slate-400">
            Page {page} of {totalPages}
          </span>
          <button
            className="rounded border px-3 py-1 text-sm disabled:opacity-50 dark:border-slate-700 hover:bg-academic-teal/10 hover:border-academic-teal transition-colors duration-200"
            onClick={() => setPage((n) => Math.min(totalPages, n + 1))}
            disabled={page === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
