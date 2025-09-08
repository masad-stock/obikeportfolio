import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export type PostFrontmatter = {
  title: string
  date: string
  summary: string
  tags?: string[]
  coverImage?: string
}

export type PostItem = PostFrontmatter & { slug: string; content: string }

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')

export function getAllPosts(): PostItem[] {
  if (!fs.existsSync(BLOG_DIR)) return []
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.mdx'))
  const posts = files.map((file) => {
    const slug = file.replace(/\.mdx$/, '')
    const fullPath = path.join(BLOG_DIR, file)
    const source = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(source)
    const fm = data as PostFrontmatter
    return { slug, content, ...fm }
  })
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): PostItem | null {
  const fullPath = path.join(BLOG_DIR, `${slug}.mdx`)
  if (!fs.existsSync(fullPath)) return null
  const source = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(source)
  const fm = data as PostFrontmatter
  return { slug, content, ...fm }
}

export function getAllTags(posts?: PostItem[]): string[] {
  const list = posts ?? getAllPosts()
  const set = new Set<string>()
  for (const p of list) {
    if (Array.isArray(p.tags)) {
      for (const t of p.tags) set.add(t)
    }
  }
  return Array.from(set).sort((a, b) => a.localeCompare(b))
}


