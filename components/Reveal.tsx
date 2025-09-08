"use client"
import { useEffect, useRef, useState } from 'react'

export default function Reveal({ children, as: Tag = 'div', delay = 0 }: { children: React.ReactNode; as?: any; delay?: number }) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTimeout(() => setVisible(true), delay)
            obs.disconnect()
          }
        })
      },
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [delay])

  return (
    <Tag
      ref={ref as any}
      className={`transition-all duration-700 will-change-transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
    >
      {children}
    </Tag>
  )
}


