export default function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-3">
      <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-100">{title}</h2>
      <div className="text-slate-700 dark:text-slate-300">
        {children}
      </div>
    </section>
  )
}


