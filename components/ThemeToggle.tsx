"use client"
import { useTheme } from 'next-themes'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const next = theme === 'dark' ? 'light' : 'dark'
  return (
    <button
      onClick={() => setTheme(next)}
      className="rounded border px-2 py-1 text-sm hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
      aria-label="Toggle dark mode"
    >
      {theme === 'dark' ? '🌙' : '☀️'}
    </button>
  )
}


