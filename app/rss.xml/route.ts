import { NextResponse } from 'next/server'
import { getAllPosts } from '../../lib/posts'

function generateRss() {
  const site = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'
  const posts = getAllPosts()
  const items = posts
    .map((p) => {
      const url = `${site}/blog/${p.slug}`
      return `<item>
  <title><![CDATA[${p.title}]]></title>
  <link>${url}</link>
  <guid>${url}</guid>
  <pubDate>${new Date(p.date).toUTCString()}</pubDate>
  <description><![CDATA[${p.summary}]]></description>
</item>`
    })
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Obike Emmanuel — Blog</title>
    <link>${site}</link>
    <description>Educational insights and resources</description>
    ${items}
  </channel>
</rss>`
}

export function GET() {
  const xml = generateRss()
  return new NextResponse(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } })
}


