import Link from 'next/link'
import { getAllPosts, getAllTags } from '../../lib/posts'

export const metadata = { title: 'Tags' }

export default function TagsIndexPage() {
  const posts = getAllPosts()
  const tags = getAllTags(posts)
  const counts: Record<string, number> = {}
  for (const p of posts) {
    for (const t of p.tags ?? []) counts[t] = (counts[t] || 0) + 1
  }
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Tags</h1>
      <ul className="flex flex-wrap gap-2">
        {tags.map((t) => (
          <li key={t}>
            <Link href={`/tags/${encodeURIComponent(t)}`} className="rounded border px-2 py-1 text-sm dark:border-slate-700">
              {t} <span className="text-slate-500">({counts[t] || 0})</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}


