import Link from "next/link";

export type Post = {
  slug: string;
  title: string;
  date: string;
  summary: string;
};

export default function PostList({ posts }: { posts: Post[] }) {
  return (
    <ul className="space-y-4">
      {posts.map((p) => (
        <li
          key={p.slug}
          className="group rounded-xl border border-slate-200 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02] dark:border-slate-700"
        >
          <h2 className="text-xl font-semibold group-hover:text-academic-teal transition-colors duration-300">
            <Link href={`/blog/${p.slug}`}>{p.title}</Link>
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            {new Date(p.date).toLocaleDateString("en-US")}
          </p>
          <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed">
            {p.summary}
          </p>
        </li>
      ))}
    </ul>
  );
}
