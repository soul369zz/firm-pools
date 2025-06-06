"use client"

import { useState, useEffect } from "react"

type ScrollDirection = "up" | "down" | null

export function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>(null)
  const [isAtTop, setIsAtTop] = useState(true)
  const [prevScrollY, setPrevScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Determine if we're at the top of the page
      if (currentScrollY <= 10) {
        setIsAtTop(true)
        setScrollDirection("up")
        setPrevScrollY(currentScrollY)
        return
      } else {
        setIsAtTop(false)
      }

      // Determine scroll direction
      if (currentScrollY > prevScrollY) {
        // Scrolling down
        setScrollDirection("down")
      } else if (currentScrollY < prevScrollY) {
        // Scrolling up
        setScrollDirection("up")
      }

      setPrevScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [prevScrollY])

  return { scrollDirection, isAtTop }
}
