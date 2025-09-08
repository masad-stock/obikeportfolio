import BlogIndexClient from '../../components/BlogIndexClient'
import { getAllPosts, getAllTags } from '../../lib/posts'
import PageHero from '../../components/PageHero'

export const metadata = { title: 'Blog' }

export default function BlogIndexPage() {
  const posts = getAllPosts()
  const tags = getAllTags(posts)
  return (
    <div className="space-y-8">
      <PageHero title="Blog & Resources" subtitle="Articles, insights, and classroom resources." />
      <BlogIndexClient posts={posts} tags={tags} />
    </div>
  )
}


