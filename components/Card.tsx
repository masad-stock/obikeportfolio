export default function Card({ title, subtitle, children }: { title: string; subtitle?: string; children?: React.ReactNode }) {
  return (
    <div className="rounded border p-4 shadow-sm dark:border-slate-700">
      <h3 className="text-lg font-semibold">{title}</h3>
      {subtitle && <p className="text-sm text-slate-500 dark:text-slate-400">{subtitle}</p>}
      {children && <div className="mt-2 text-slate-700 dark:text-slate-300">{children}</div>}
    </div>
  )
}


