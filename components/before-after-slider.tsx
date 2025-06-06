"use client"

import type React from "react"

import { useState, useRef, useEffect, useCallback } from "react"
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
  const containerRef = useRef<HTMLDivElement>(null)

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPosition(percentage)
  }, [])

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    setIsDragging(true)
    updatePosition(e.clientX)
  }, [updatePosition])

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    e.preventDefault()
    setIsDragging(true)
    updatePosition(e.touches[0].clientX)
  }, [updatePosition])

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return
    e.preventDefault()
    updatePosition(e.clientX)
  }, [isDragging, updatePosition])

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging) return
    e.preventDefault()
    updatePosition(e.touches[0].clientX)
  }, [isDragging, updatePosition])

  const handleEnd = useCallback(() => {
    setIsDragging(false)
  }, [])

  const handleClick = useCallback((e: React.MouseEvent) => {
    // Only handle click if not dragging
    if (!isDragging) {
      updatePosition(e.clientX)
    }
  }, [isDragging, updatePosition])

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove, { passive: false })
      document.addEventListener("mouseup", handleEnd)
      document.addEventListener("touchmove", handleTouchMove, { passive: false })
      document.addEventListener("touchend", handleEnd)
      document.addEventListener("touchcancel", handleEnd)
      
      // Prevent text selection while dragging
      document.body.style.userSelect = "none"
    } else {
      document.body.style.userSelect = ""
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleEnd)
      document.removeEventListener("touchmove", handleTouchMove)
      document.removeEventListener("touchend", handleEnd)
      document.removeEventListener("touchcancel", handleEnd)
      document.body.style.userSelect = ""
    }
  }, [isDragging, handleMouseMove, handleTouchMove, handleEnd])

  return (
    <div
      ref={containerRef}
      className={cn("relative w-full h-full overflow-hidden rounded-lg select-none touch-none", className)}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Before Image */}
      <div className="absolute inset-0">
        <Image 
          src={beforeImage || "/placeholder.svg"} 
          alt={beforeAlt} 
          fill 
          className="object-cover" 
          priority 
        />
        <div className="absolute top-4 left-4 bg-black/80 text-white px-3 py-2 rounded-full text-sm font-medium backdrop-blur-sm transition-all duration-300 ease-out">
          Before
        </div>
      </div>

      {/* After Image */}
      <div 
        className="absolute inset-0 overflow-hidden" 
        style={{ 
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
          transition: isDragging ? 'none' : 'clip-path 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      >
        <Image 
          src={afterImage || "/placeholder.svg"} 
          alt={afterAlt} 
          fill 
          className="object-cover" 
          priority 
        />
        <div className="absolute top-4 right-4 bg-black/80 text-white px-3 py-2 rounded-full text-sm font-medium backdrop-blur-sm transition-all duration-300 ease-out">
          After
        </div>
      </div>

      {/* Slider Line */}
      <div 
        className={cn(
          "absolute top-0 bottom-0 bg-white shadow-lg z-10 transition-all ease-out",
          isDragging || isHovered ? "w-1" : "w-0.5",
          isDragging ? "duration-75" : "duration-300"
        )} 
        style={{ 
          left: `${sliderPosition}%`, 
          transform: 'translateX(-50%)',
          transition: isDragging ? 'width 75ms ease-out' : 'width 300ms ease-out'
        }} 
      />

      {/* Expanded Handle Area for Easier Interaction */}
      <div
        className="absolute top-0 bottom-0 z-20 cursor-ew-resize"
        style={{ 
          left: `${sliderPosition}%`, 
          transform: 'translateX(-50%)',
          width: '44px' // Large touch target
        }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        {/* Visible Handle */}
        <div
          className={cn(
            "absolute top-1/2 left-1/2 bg-white rounded-full shadow-xl flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 transition-all ease-out",
            isDragging ? "w-12 h-12 scale-110 duration-100" : "w-10 h-10 duration-300",
            isHovered || isDragging ? "shadow-2xl" : "shadow-lg"
          )}
          style={{
            transition: isDragging 
              ? 'width 100ms ease-out, height 100ms ease-out, transform 100ms ease-out, box-shadow 100ms ease-out' 
              : 'width 300ms cubic-bezier(0.4, 0, 0.2, 1), height 300ms cubic-bezier(0.4, 0, 0.2, 1), transform 300ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 300ms ease-out'
          }}
        >
          {/* Handle Icon */}
          <div className="flex items-center space-x-0.5">
            <div className={cn(
              "bg-gray-400 rounded-full transition-all ease-out",
              isDragging ? "w-1.5 h-5 duration-100" : "w-1 h-4 duration-300"
            )} />
            <div className={cn(
              "bg-gray-400 rounded-full transition-all ease-out",
              isDragging ? "w-1.5 h-5 duration-100" : "w-1 h-4 duration-300"
            )} />
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div 
        className={cn(
          "absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm transition-all duration-300 ease-out",
          isDragging ? "opacity-0 scale-95" : "opacity-100 scale-100"
        )}
      >
        {isHovered ? "Click or drag to compare" : "Drag to compare"}
      </div>
    </div>
  )
}
