import { notFound } from 'next/navigation'
import { getAllPosts, getAllTags } from '../../../lib/posts'
import PostList from '../../../components/PostList'

export function generateStaticParams() {
  return getAllTags().map((t) => ({ tag: t }))
}

export default async function TagDetailPage({ params }: { params: Promise<{ tag: string }> }) {
  const { tag: tagParam } = await params
  const tag = decodeURIComponent(tagParam)
  const posts = getAllPosts().filter((p) => (p.tags ?? []).includes(tag))
  if (!posts.length) return notFound()
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Tag: {tag}</h1>
      <PostList posts={posts} />
    </div>
  )
}


