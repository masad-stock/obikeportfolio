import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Page not found</h1>
      <p className="text-slate-600 dark:text-slate-300">The page you are looking for does not exist.</p>
      <Link href="/" className="text-emerald-700 hover:underline dark:text-emerald-400">Go home</Link>
    </div>
  )
}


