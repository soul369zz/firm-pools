"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { useInView } from "react-intersection-observer"

interface SocialProofItem {
  quote: string
  author: string
  location: string
  category?: string
  rating: number
}

const socialProofItems: SocialProofItem[] = [
  {
    quote: "Doubled home value",
    author: "Jennifer",
    location: "Oakville",
    category: "ROI",
    rating: 5,
  },
  {
    quote: "Zero headaches",
    author: "Mike",
    location: "Toronto",
    category: "Experience",
    rating: 5,
  },
  {
    quote: "Kids love it every day",
    author: "Sarah",
    location: "Mississauga",
    category: "Family",
    rating: 5,
  },
  {
    quote: "Best investment we made",
    author: "David",
    location: "Brampton",
    category: "Value",
    rating: 5,
  },
  {
    quote: "Neighbors are jealous",
    author: "Lisa",
    location: "Vaughan",
    category: "Design",
    rating: 5,
  },
  {
    quote: "Pool parties every weekend",
    author: "Mark",
    location: "Richmond Hill",
    category: "Entertainment",
    rating: 5,
  },
  {
    quote: "Stress-free maintenance",
    author: "Amanda",
    location: "Burlington",
    category: "Service",
    rating: 5,
  },
  {
    quote: "Exceeded expectations",
    author: "Robert",
    location: "Markham",
    category: "Quality",
    rating: 5,
  },
  {
    quote: "Dream backyard realized",
    author: "Emily",
    location: "Newmarket",
    category: "Vision",
    rating: 5,
  },
  {
    quote: "Professional from start to finish",
    author: "James",
    location: "Aurora",
    category: "Process",
    rating: 5,
  },
]

export function SocialProofRail() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const scrollRef = useRef<HTMLDivElement>(null)
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  })

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoPlaying || !inView) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % socialProofItems.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, inView])

  // Scroll to current item
  useEffect(() => {
    if (scrollRef.current) {
      // Responsive item width: mobile (288px + 16px gap) = 304px, desktop (320px + 24px gap) = 344px
      const isMobile = window.innerWidth < 640
      const itemWidth = isMobile ? 304 : 344 // Width of each item including gap
      const scrollPosition = currentIndex * itemWidth
      scrollRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      })
    }
  }, [currentIndex])

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + socialProofItems.length) % socialProofItems.length)
    setIsAutoPlaying(false)
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % socialProofItems.length)
    setIsAutoPlaying(false)
  }

  const handleItemClick = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  return (
    <section ref={sectionRef} className="py-16 bg-white border-y border-gray-100">
      <div className="relative w-full">
        {/* Header */}
        <div className="text-center mb-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-2">What Our Clients Say</h2>
          <p className="text-gray-600">Real feedback from real customers</p>
        </div>

        {/* Social Proof Rail - Full Width */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={handlePrevious}
            className="absolute left-1 sm:left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white transition-all duration-300 hover:scale-110"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-1 sm:right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white transition-all duration-300 hover:scale-110"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
          </button>

          {/* Scrolling Container */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto scrollbar-hide space-x-4 px-4 sm:px-8 md:px-12 py-4 max-h-[280px]"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {socialProofItems.map((item, index) => (
              <div
                key={index}
                onClick={() => handleItemClick(index)}
                className={`flex-shrink-0 w-72 sm:w-80 bg-gradient-to-br from-blue-50 to-gray-50 rounded-xl p-4 sm:p-6 cursor-pointer transition-all duration-500 hover:shadow-lg hover:scale-105 ${
                  index === currentIndex
                    ? "ring-2 ring-blue-500 shadow-xl scale-105"
                    : "hover:ring-1 hover:ring-gray-300"
                }`}
              >
                {/* Star Rating - Left Aligned */}
                <div className="flex items-center mb-4">
                  {[...Array(item.rating)].map((_, starIndex) => (
                    <Star key={starIndex} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <blockquote className="text-lg font-semibold mb-3">"{item.quote}"</blockquote>
                    <div className="flex items-center justify-between">
                      <div>
                        <cite className="text-sm font-medium text-gray-700 not-italic">{item.author}</cite>
                        <div className="text-sm text-gray-500">{item.location}</div>
                      </div>
                      {item.category && (
                        <div className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                          {item.category}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Visual indicator for active item */}
                <div className="flex justify-center">
                  <div
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex ? "bg-blue-500 scale-125" : "bg-gray-300"
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
