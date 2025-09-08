export default function Testimonial({ quote, author }: { quote: string; author: string }) {
  return (
    <figure className="rounded border p-4 italic dark:border-slate-700">
      <blockquote>“{quote}”</blockquote>
      <figcaption className="mt-2 text-sm not-italic text-slate-600 dark:text-slate-300">— {author}</figcaption>
    </figure>
  )
}


