import { DefaultSeoProps } from 'next-seo'

const config: DefaultSeoProps = {
  titleTemplate: '%s | Obike Emmanuel',
  defaultTitle: 'Obike Emmanuel — Computer Science & Mathematics Teacher',
  description:
    'Portfolio for Obike Emmanuel, showcasing teaching philosophy, courses, projects, blog, and contact information.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://example.com',
    siteName: 'Obike Emmanuel',
    images: [
      {
        url: '/images/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Obike Emmanuel Portfolio',
      },
    ],
  },
  twitter: {
    cardType: 'summary_large_image',
  },
}

export default config


