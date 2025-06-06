"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useInView } from "react-intersection-observer"

interface Project {
  title: string
  description: string
  image: string
  details: string[]
  category: string
  year: string
}

const projects: Project[] = [
  {
    title: "Modern Infinity Pool",
    description:
      "A stunning infinity pool with panoramic city views, featuring integrated lighting and a connected spa.",
    image: "/gallery/layered/layered-modern-infinity.jpg",
    details: ["50ft Infinity Edge", "LED Lighting System", "Integrated Spa", "Natural Stone Decking"],
    category: "Luxury Residential",
    year: "2024",
  },
  {
    title: "Tropical Paradise Retreat",
    description: "A resort-style pool with waterfalls, grottos, and lush landscaping creating a private oasis.",
    image: "/gallery/layered/layered-tropical-paradise.jpg",
    details: ["Natural Rock Waterfall", "Swim-up Bar", "Grotto Seating", "Tropical Landscaping"],
    category: "Resort Style",
    year: "2024",
  },
  {
    title: "Contemporary Geometric Design",
    description:
      "Clean lines and modern materials create a sophisticated aquatic environment perfect for entertaining.",
    image: "/gallery/layered/layered-geometric-design.jpg",
    details: ["Geometric Design", "Glass Tile Finish", "Fire Features", "Outdoor Kitchen"],
    category: "Contemporary",
    year: "2023",
  },
  {
    title: "Rooftop Urban Oasis",
    description:
      "A sophisticated rooftop pool design maximizing limited space while creating a luxurious urban retreat.",
    image: "/gallery/layered/layered-rooftop-oasis.jpg",
    details: ["Space Optimization", "Wind Barriers", "City Views", "Smart Automation"],
    category: "Urban Design",
    year: "2023",
  },
  {
    title: "Natural Swimming Pool",
    description: "An eco-friendly natural swimming pool that blends seamlessly with the surrounding landscape.",
    image: "/gallery/layered/layered-natural-swimming.jpg",
    details: ["Biological Filtration", "Native Plants", "Natural Stone", "Eco-Friendly"],
    category: "Eco Design",
    year: "2023",
  },
]

export function LayeredPortfolio() {
  const [scrollY, setScrollY] = useState(0)
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  })

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current && inView) {
        const rect = containerRef.current.getBoundingClientRect()
        const containerTop = rect.top
        const containerHeight = rect.height
        const windowHeight = window.innerHeight

        // Calculate scroll progress within the container
        const scrollProgress = Math.max(
          0,
          Math.min(1, (windowHeight - containerTop) / (windowHeight + containerHeight)),
        )
        setScrollY(scrollProgress)

        // Determine active card based on scroll progress
        const cardIndex = Math.floor(scrollProgress * projects.length)
        setActiveIndex(Math.min(cardIndex, projects.length - 1))
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Initial call

    return () => window.removeEventListener("scroll", handleScroll)
  }, [inView])

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get inspired by our beautiful work</h2>
          <p className="text-lg text-gray-600">Explore our portfolio of stunning pool and spa projects</p>
        </div>

        {/* Layered Cards Container */}
        <div
          ref={containerRef}
          className="relative min-h-[200vh]" // Extra height for scroll effect
        >
          <div className="sticky top-20 h-[80vh] flex items-center justify-center">
            <div className="relative w-full max-w-6xl">
              {projects.map((project, index) => {
                // Calculate transform values based on scroll progress
                const progress = Math.max(0, Math.min(1, scrollY * projects.length - index))
                const isActive = index <= activeIndex
                const isNext = index === activeIndex + 1

                // Transform calculations
                const translateY = isActive ? 0 : (1 - progress) * 100
                const scale = isActive ? 1 : 0.9 + progress * 0.1
                const opacity = isActive ? 1 : Math.max(0.3, progress)
                const rotateX = isActive ? 0 : (1 - progress) * 10
                const zIndex = projects.length - index

                return (
                  <div
                    key={index}
                    className="absolute inset-0 transition-all duration-300 ease-out"
                    style={{
                      transform: `
                        translateY(${translateY}px) 
                        scale(${scale}) 
                        rotateX(${rotateX}deg)
                      `,
                      opacity,
                      zIndex,
                      transformStyle: "preserve-3d",
                      perspective: "1000px",
                    }}
                  >
                    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden h-full">
                      <div className="grid lg:grid-cols-2 h-full">
                        {/* Image Side */}
                        <div className="relative overflow-hidden">
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-700 hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                          <div className="absolute top-6 left-6">
                            <div className="bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                              {project.category}
                            </div>
                          </div>
                          <div className="absolute bottom-6 left-6">
                            <div className="bg-white/90 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-full text-sm font-medium">
                              {project.year}
                            </div>
                          </div>
                        </div>

                        {/* Content Side */}
                        <div className="p-8 lg:p-12 flex flex-col justify-center">
                          <div className="space-y-6">
                            <div>
                              <h3 className="text-3xl lg:text-4xl font-bold mb-4">{project.title}</h3>
                              <p className="text-lg text-gray-600 leading-relaxed">{project.description}</p>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-4">
                              {project.details.map((detail, idx) => (
                                <div key={idx} className="flex items-center space-x-3">
                                  <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0" />
                                  <span className="text-gray-700 font-medium">{detail}</span>
                                </div>
                              ))}
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 btn-luxury">
                                View Project Details
                              </Button>
                              <Button
                                variant="outline"
                                className="border-gray-300 hover:border-blue-600 hover:text-blue-600 px-8 py-3 btn-luxury"
                              >
                                View Gallery
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50">
            <div className="flex flex-col space-y-3">
              {projects.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-8 rounded-full transition-all duration-300 ${
                    index <= activeIndex ? "bg-blue-600 shadow-lg" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Project Counter */}
          <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
            <div className="bg-black/70 backdrop-blur-sm text-white px-6 py-3 rounded-full">
              <span className="text-sm font-medium">
                {String(activeIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>

        {/* Navigation Hint */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 text-gray-500 text-sm">
            <div className="w-6 h-1 bg-gray-300 rounded-full" />
            <span>Scroll to explore projects</span>
            <div className="w-6 h-1 bg-gray-300 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  )
}
