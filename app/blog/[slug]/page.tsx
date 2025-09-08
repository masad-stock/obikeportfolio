import { notFound } from 'next/navigation'
import { getAllPosts, getPostBySlug } from '../../../lib/posts'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import rehypePrettyCode from 'rehype-pretty-code'

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return notFound()
  return (
    <article className="prose dark:prose-invert">
      <h1>{post.title}</h1>
      <p className="text-sm">{new Date(post.date).toLocaleDateString()}</p>
      <MDXRemote
        source={post.content}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [[rehypePrettyCode, { theme: 'one-dark-pro' }]],
          },
        }}
      />
    </article>
  )
}

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }))
}


