import { notFound } from 'next/navigation'
import { getAllPosts, getAllTags } from '../../../lib/posts'
import PostList from '../../../components/PostList'

export function generateStaticParams() {
  return getAllTags().map((t) => ({ tag: t }))
}

export default function TagDetailPage({ params }: { params: { tag: string } }) {
  const tag = decodeURIComponent(params.tag)
  const posts = getAllPosts().filter((p) => (p.tags ?? []).includes(tag))
  if (!posts.length) return notFound()
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Tag: {tag}</h1>
      <PostList posts={posts} />
    </div>
  )
}


