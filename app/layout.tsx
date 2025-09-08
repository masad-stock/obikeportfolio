import './globals.css'
import { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SEOProvider from '../components/SEOProvider'

export const metadata: Metadata = {
  title: {
    default: 'Obike Emmanuel — Computer Science & Mathematics Teacher',
    template: '%s | Obike Emmanuel',
  },
  description:
    'Portfolio website for Obike Emmanuel, a Computer Science & Mathematics teacher: philosophy, courses, projects, blog, and contact.',
  alternates: {
    types: {
      'application/rss+xml': [{ url: '/rss.xml', title: 'Obike Emmanuel — Blog RSS' }],
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-white text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-100">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SEOProvider />
          <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:bg-emerald-600 focus:text-white focus:px-3 focus:py-2 focus:rounded">
            Skip to content
          </a>
          <Navbar />
          <main id="main" className="mx-auto max-w-5xl px-4 py-8 sm:py-10">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}


