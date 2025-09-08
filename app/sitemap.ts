import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'
  const routes = ['', '/about', '/philosophy', '/courses', '/projects', '/testimonials', '/blog', '/contact']
  return routes.map((r) => ({ url: `${baseUrl}${r}`, lastModified: new Date() }))
}


