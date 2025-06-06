"use client"

import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"

interface AnimatedCounterProps {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
  className?: string
}

export function AnimatedCounter({
  end,
  duration = 2000,
  suffix = "",
  prefix = "",
  className = "",
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    if (inView) {
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / duration, 1)

        // Use easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        setCount(Math.floor(easeOutQuart * end))

        if (progress < 1) {
          animationFrame = requestAnimationFrame(step)
        }
      }

      animationFrame = requestAnimationFrame(step)
    }

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [inView, end, duration])

  return (
    <div ref={ref} className={className}>
      <span className="tabular-nums">
        {prefix}
        {count}
        {suffix}
      </span>
    </div>
  )
}
