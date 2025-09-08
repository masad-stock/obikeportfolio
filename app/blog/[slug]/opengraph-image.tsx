import { ImageResponse } from 'next/og'
import { getPostBySlug } from '../../../lib/posts'

export const runtime = 'edge'
export const alt = 'Blog Post Open Graph Image'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  const title = post?.title ?? 'Obike Emmanuel — Blog'
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          background: '#0f172a',
          color: 'white',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 64,
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ fontSize: 44, color: '#34d399' }}>Obike Emmanuel</div>
          <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.2, maxWidth: 1000 }}>{title}</div>
        </div>
      </div>
    ),
    { ...size }
  )
}


