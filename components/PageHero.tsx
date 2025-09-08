export default function PageHero({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <section className="relative isolate overflow-hidden rounded-xl border bg-gradient-to-tr from-blue-700 via-indigo-600 to-blue-500 px-6 py-12 text-white shadow-sm dark:from-blue-800 dark:via-indigo-700 dark:to-blue-600">
      <div className="pointer-events-none absolute inset-0 opacity-20 mix-blend-soft-light [background-image:radial-gradient(ellipse_at_top,white_10%,transparent_50%),radial-gradient(ellipse_at_bottom,white_10%,transparent_50%)]" />
      <h1 className="text-3xl font-bold sm:text-4xl">{title}</h1>
      {subtitle && <p className="mt-2 max-w-3xl text-blue-50/90">{subtitle}</p>}
    </section>
  )
}


