'use client'

import React from 'react'

interface MarqueeProps {
  children: React.ReactNode
  speed?: number // pixels per second
}

const Marquee: React.FC<MarqueeProps> = ({ children, speed = 50 }) => {
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div
        className="inline-block animate-marquee"
        style={{ animationDuration: `${100 / speed}s` }}
      >
        {children}
        {children}
      </div>
    </div>
  )
}

export default Marquee
