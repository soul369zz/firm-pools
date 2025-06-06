"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface BeforeAfterSliderProps {
  beforeImage: string
  afterImage: string
  beforeAlt?: string
  afterAlt?: string
  className?: string
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeAlt = "Before",
  afterAlt = "After",
  className,
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const updatePosition = (clientX: number) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPosition(percentage)
  }

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
    if (isMobile) return // Disable mouse events on mobile
    setIsDragging(true)
    updatePosition(e.clientX)
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || isMobile) return
    updatePosition(e.clientX)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  // Touch events for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    const touch = e.touches[0]
    updatePosition(touch.clientX)
  }

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return
    e.preventDefault() // Prevent scrolling
    const touch = e.touches[0]
    updatePosition(touch.clientX)
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  // Global event listeners
  useEffect(() => {
    if (isDragging) {
      if (isMobile) {
        document.addEventListener("touchmove", handleTouchMove, { passive: false })
        document.addEventListener("touchend", handleTouchEnd)
        return () => {
          document.removeEventListener("touchmove", handleTouchMove)
          document.removeEventListener("touchend", handleTouchEnd)
        }
      } else {
        document.addEventListener("mousemove", handleMouseMove)
        document.addEventListener("mouseup", handleMouseUp)
        return () => {
          document.removeEventListener("mousemove", handleMouseMove)
          document.removeEventListener("mouseup", handleMouseUp)
        }
      }
    }
  }, [isDragging, isMobile])

  return (
    <div className={cn("relative w-full h-full overflow-hidden", className)}>
      <div
        ref={containerRef}
        className="relative w-full h-full cursor-ew-resize select-none"
        onMouseEnter={() => !isMobile && setIsHovered(true)}
        onMouseLeave={() => !isMobile && setIsHovered(false)}
      >
        {/* After Image (full width) */}
        <div className="absolute inset-0">
          <Image
            src={afterImage}
            alt={afterAlt}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* After Label */}
          <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold shadow-lg">
            {afterAlt}
          </div>
        </div>

        {/* Before Image (clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <Image
            src={beforeImage}
            alt={beforeAlt}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Before Label */}
          <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold shadow-lg">
            {beforeAlt}
          </div>
        </div>

        {/* Slider Line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 md:w-1 bg-white shadow-lg z-10 pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        />

        {/* Interactive Handle Area */}
        <div
          className="absolute top-0 bottom-0 z-20 cursor-ew-resize"
          style={{ 
            left: `${sliderPosition}%`, 
            transform: 'translateX(-50%)',
            width: isMobile ? '60px' : '44px' // Larger touch target on mobile
          }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          {/* Visible Handle */}
          <div
            className={cn(
              "absolute top-1/2 left-1/2 bg-white rounded-full shadow-xl flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 transition-all ease-out border-2 border-gray-200",
              isDragging 
                ? "w-14 h-14 md:w-12 md:h-12 scale-110 duration-100 border-blue-400" 
                : "w-12 h-12 md:w-10 md:h-10 duration-300",
              (isHovered || isDragging) ? "shadow-2xl" : "shadow-lg"
            )}
          >
            {/* Handle Icon */}
            <div className="flex items-center space-x-0.5 md:space-x-1">
              <div className={cn(
                "bg-gray-400 rounded-full transition-all ease-out",
                isDragging ? "w-1.5 h-6 md:w-1.5 md:h-5 duration-100" : "w-1 h-5 md:w-1 md:h-4 duration-300"
              )} />
              <div className={cn(
                "bg-gray-400 rounded-full transition-all ease-out",
                isDragging ? "w-1.5 h-6 md:w-1.5 md:h-5 duration-100" : "w-1 h-5 md:w-1 md:h-4 duration-300"
              )} />
            </div>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className={cn(
        "absolute bottom-4 left-1/2 transform -translate-x-1/2 transition-opacity duration-300 pointer-events-none",
        isDragging ? "opacity-0" : "opacity-100"
      )}>
        <div className="bg-black/70 backdrop-blur-sm text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium">
          {isMobile ? "Touch and drag" : "Drag to compare"}
        </div>
      </div>
    </div>
  )
}
