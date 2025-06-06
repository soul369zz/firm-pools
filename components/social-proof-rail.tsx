"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { useInView } from "react-intersection-observer"

const socialProofItems = [
  {
    rating: 5,
    text: "Absolutely amazing work! The team transformed our backyard into a paradise. The attention to detail is incredible.",
    name: "Sarah & Mike Chen",
    location: "Toronto, ON",
    image: "/gallery/pools/pool-1.jpg",
    service: "Complete Pool Installation"
  },
  {
    rating: 5,
    text: "Professional service from start to finish. Our pool renovation exceeded all expectations. Highly recommend!",
    name: "David Rodriguez",
    location: "Mississauga, ON",
    image: "/gallery/pools/pool-2.jpg",
    service: "Pool Renovation"
  },
  {
    rating: 5,
    text: "The spa installation was flawless. The team was punctual, clean, and delivered exactly what was promised.",
    name: "Jennifer Walsh",
    location: "Markham, ON",
    image: "/gallery/pools/pool-3.jpg",
    service: "Spa Installation"
  },
  {
    rating: 5,
    text: "Outstanding customer service and craftsmanship. Our pool maintenance has never been better!",
    name: "Robert & Lisa Kim",
    location: "Vaughan, ON",
    image: "/gallery/pools/pool-4.jpg",
    service: "Pool Maintenance"
  },
  {
    rating: 5,
    text: "From design to completion, the entire process was smooth. The final result is breathtaking!",
    name: "Michael Thompson",
    location: "Richmond Hill, ON",
    image: "/gallery/pools/pool-5.jpg",
    service: "Custom Design & Build"
  },
  {
    rating: 5,
    text: "Incredible attention to detail and quality workmanship. Our dream pool became a reality!",
    name: "Amanda Foster",
    location: "Oakville, ON",
    image: "/gallery/pools/pool-6.jpg",
    service: "Luxury Pool Construction"
  }
]

export function SocialProofRail() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  })

  // Detect mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoPlaying || !inView) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % socialProofItems.length)
    }, 4000) // Slightly slower for better mobile UX

    return () => clearInterval(interval)
  }, [isAutoPlaying, inView])

  // Scroll to current item
  useEffect(() => {
    if (scrollRef.current) {
      // Responsive item width calculation
      const itemWidth = isMobile ? 288 : 320 // Adjusted for mobile
      const gap = isMobile ? 16 : 24
      const scrollPosition = currentIndex * (itemWidth + gap)
      
      scrollRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      })
    }
  }, [currentIndex, isMobile])

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + socialProofItems.length) % socialProofItems.length)
    setIsAutoPlaying(false)
    // Resume auto-play after 5 seconds
    setTimeout(() => setIsAutoPlaying(true), 5000)
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % socialProofItems.length)
    setIsAutoPlaying(false)
    // Resume auto-play after 5 seconds
    setTimeout(() => setIsAutoPlaying(true), 5000)
  }

  const handleItemClick = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
    // Resume auto-play after 5 seconds
    setTimeout(() => setIsAutoPlaying(true), 5000)
  }

  return (
    <section ref={sectionRef} className="py-16 bg-white border-y border-gray-100">
      <div className="relative w-full">
        {/* Header */}
        <div className="text-center mb-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">What Our Clients Say</h2>
          <p className="text-gray-600">Real feedback from real customers across the GTA</p>
        </div>

        {/* Social Proof Rail - Full Width */}
        <div className="relative">
          {/* Navigation Arrows - Improved mobile positioning */}
          <button
            onClick={handlePrevious}
            className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/95 backdrop-blur-sm rounded-full p-3 md:p-2 shadow-lg hover:bg-white transition-all duration-300 hover:scale-110 touch-target"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 md:w-5 md:h-5 text-gray-600" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/95 backdrop-blur-sm rounded-full p-3 md:p-2 shadow-lg hover:bg-white transition-all duration-300 hover:scale-110 touch-target"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 md:w-5 md:h-5 text-gray-600" />
          </button>

          {/* Scrolling Container */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto scrollbar-hide space-x-4 md:space-x-6 px-4 sm:px-8 md:px-16 py-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            onTouchStart={() => setIsAutoPlaying(false)}
            onTouchEnd={() => setTimeout(() => setIsAutoPlaying(true), 3000)}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {socialProofItems.map((item, index) => (
              <div
                key={index}
                onClick={() => handleItemClick(index)}
                className={`flex-shrink-0 w-72 md:w-80 bg-gradient-to-br from-blue-50 to-gray-50 rounded-xl p-4 sm:p-6 cursor-pointer transition-all duration-500 hover:shadow-lg touch-target ${
                  index === currentIndex
                    ? "ring-2 ring-blue-500 shadow-xl scale-105"
                    : "hover:ring-1 hover:ring-gray-300"
                }`}
                style={{ minHeight: isMobile ? '200px' : '220px' }}
              >
                {/* Star Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(item.rating)].map((_, starIndex) => (
                    <Star key={starIndex} className="w-4 h-4 md:w-5 md:h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Review Text */}
                <blockquote className="text-gray-700 mb-4 text-sm md:text-base leading-relaxed line-clamp-3">
                  "{item.text}"
                </blockquote>

                {/* Service Type */}
                <div className="mb-3">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium">
                    {item.service}
                  </span>
                </div>

                {/* Customer Info */}
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-200 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={`${item.name}'s project`}
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-gray-900 text-sm md:text-base truncate">{item.name}</p>
                    <p className="text-gray-500 text-xs md:text-sm truncate">{item.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Progress Indicators - Mobile optimized */}
          <div className="flex justify-center mt-6 space-x-2">
            {socialProofItems.map((_, index) => (
              <button
                key={index}
                onClick={() => handleItemClick(index)}
                className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-all duration-300 touch-target ${
                  index === currentIndex
                    ? "bg-blue-600 scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
