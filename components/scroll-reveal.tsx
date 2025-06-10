"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  animation?: "fadeInUp" | "fadeInLeft" | "fadeInRight" | "fadeIn" | "scaleIn" | "slideInDown"
  delay?: number
}

export function ScrollReveal({ children, className = "", animation = "fadeInUp", delay = 0 }: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, delay)
      return () => clearTimeout(timer)
    }
  }, [inView, delay])

  return (
    <div
      ref={ref}
      className={`${className} ${
        isVisible ? `animate-${animation.replace(/([A-Z])/g, "-$1").toLowerCase().replace(/^-/, "")}` : "opacity-0"
      }`}
    >
      {children}
    </div>
  )
}
