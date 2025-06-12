"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import OptimizedImage from "@/components/optimized-image"
import { useInView } from "react-intersection-observer"
import { Play, Pause, ZoomIn, ChevronLeft, ChevronRight, X, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"

interface CounterProps {
  end: number
  duration?: number
  suffix?: string
  title: string
  description: string
}

function Counter({ end, duration = 2000, suffix = "", title, description }: CounterProps) {
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
        setCount(Math.floor(progress * end))

        if (progress < 1) {
          animationFrame = requestAnimationFrame(step)
        }
      }

      animationFrame = requestAnimationFrame(step)
    }

    return () => cancelAnimationFrame(animationFrame)
  }, [inView, end, duration])

  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl md:text-6xl font-light text-blue-600 mb-3 font-serif">
        {count}
        {suffix}
      </div>
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  )
}

const images = [
  {
    src: "/about/modern-pool-hallway.jpg",
    alt: "Modern pool house hallway with elegant lighting",
  },
  {
    src: "/about/contemporary-pool-house.jpg",
    alt: "Contemporary pool house with glass walls",
  },
  {
    src: "/about/luxury-pool-courtyard.jpg",
    alt: "Luxury pool courtyard with modern design",
  },
  {
    src: "/about/spa-bedroom-design.jpg",
    alt: "Spa-inspired bedroom overlooking pool area",
  },
  {
    src: "/about/wellness-pool-space.jpg",
    alt: "Wellness space with pool views",
  },
  {
    src: "/about/modern-pool-bathroom.jpg",
    alt: "Modern bathroom with pool access",
  },
  {
    src: "/about/elegant-pool-corridor.jpg",
    alt: "Elegant corridor leading to pool area",
  },
  {
    src: "/about/infinity-pool-view.jpg",
    alt: "Infinity pool with panoramic views",
  },
]

export function AboutSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [isButtonExpanded, setIsButtonExpanded] = useState(false)
  const [copiedText, setCopiedText] = useState("")
  const scrollRef = useRef<HTMLDivElement>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const handleButtonClick = () => {
    // Check if mobile device
    if (window.innerWidth <= 768) {
      // Mobile: direct call
      window.location.href = "tel:+14169061960"
    } else {
      // Desktop: expand button
      setIsButtonExpanded(!isButtonExpanded)
    }
  }

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedText(text)
      setTimeout(() => setCopiedText(""), 2000)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  // Auto-scroll functionality
  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
      }, 3000)
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isPlaying])

  // Scroll to current image
  useEffect(() => {
    if (scrollRef.current) {
      const imageWidth = 400 // Width of each image
      const scrollPosition = currentIndex * imageWidth
      scrollRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      })
    }
  }, [currentIndex])

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const handleImageClick = (index: number) => {
    setSelectedImage(index)
    setIsPlaying(false)
  }

  const closeModal = () => {
    setSelectedImage(null)
    setIsPlaying(true)
  }

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal animation="fadeInUp">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Us</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We transform outdoor spaces into luxury aquatic retreats with precision craftsmanship and innovative
              design.
            </p>
          </div>
        </ScrollReveal>

        {/* Full-width Image Gallery */}
        <div className="relative -mx-4 sm:-mx-6 lg:-mx-8 mb-16">
          {/* Gallery Controls */}
          <ScrollReveal animation="fadeInUp" delay={200}>
            <div className="flex justify-center items-center space-x-4 mb-6">
              <Button
                variant="outline"
                size="sm"
                onClick={handlePrevious}
                className="rounded-full w-10 h-10 p-0 border-gray-300 hover:border-gray-400 bg-white hover:bg-gray-50"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>

              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsPlaying(!isPlaying)}
                className="rounded-full w-10 h-10 p-0 border-gray-300 hover:border-gray-400 bg-white hover:bg-gray-50"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </Button>

              <Button
                variant="outline"
                size="sm"
                onClick={handleNext}
                className="rounded-full w-10 h-10 p-0 border-gray-300 hover:border-gray-400 bg-white hover:bg-gray-50"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </ScrollReveal>

          {/* Scrolling Gallery */}
          <ScrollReveal animation="fadeInUp" delay={400}>
            <div
              ref={scrollRef}
              className="flex overflow-x-auto scrollbar-hide space-x-4 px-4 sm:px-6 lg:px-8"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              onMouseEnter={() => setIsPlaying(false)}
              onMouseLeave={() => setIsPlaying(true)}
            >
              {images.map((image, index) => (
                <div
                  key={index}
                  className="relative flex-shrink-0 w-96 h-64 rounded-xl overflow-hidden cursor-pointer group luxury-hover"
                  onClick={() => handleImageClick(index)}
                >
                  <OptimizedImage
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover image-hover"
                    sizes="400px"
                    quality={75}
                    priority={index < 4}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                      <ZoomIn className="w-4 h-4 text-gray-800" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Image Indicators */}
          <ScrollReveal animation="fadeInUp" delay={600}>
            <div className="flex justify-center space-x-2 mt-6">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-500 ${
                    index === currentIndex ? "bg-blue-600 scale-125" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Call to Action Button */}
        <ScrollReveal animation="fadeInUp" delay={800}>
          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className={`btn-luxury transition-all duration-300 ${
                isButtonExpanded ? 'bg-luxury-gold text-white' : ''
              }`}
              onClick={handleButtonClick}
            >
              {isButtonExpanded ? (
                <div className="flex items-center space-x-3">
                  <span>+1(416) 906-1960</span>
                  <div
                    onClick={(e) => {
                      e.stopPropagation()
                      copyToClipboard("+1(416) 906-1960")
                    }}
                    className="flex items-center space-x-1 bg-white/20 px-2 py-1 rounded cursor-pointer hover:bg-white/30 transition-colors"
                  >
                    <Copy className="w-4 h-4" />
                    <span className="text-sm">
                      {copiedText === "+1(416) 906-1960" ? "Copied!" : "Copy"}
                    </span>
                  </div>
                </div>
              ) : (
                "Book Service"
              )}
            </Button>
          </div>
        </ScrollReveal>

      </div>

      {/* Image Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="relative max-w-6xl max-h-full animate-scale-in">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-white/10 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/20 transition-all duration-300 btn-luxury"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="relative w-full h-[80vh]">
              <OptimizedImage
                src={images[selectedImage].src || "/placeholder.svg"}
                alt={images[selectedImage].alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 80vw"
                quality={85}
                priority={true}
              />
            </div>
            <div className="text-center mt-4">
              <p className="text-white text-lg">{images[selectedImage].alt}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
