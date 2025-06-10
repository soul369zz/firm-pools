"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import OptimizedImage from "@/components/optimized-image"
import { Plus, X, Wrench, Hammer, Paintbrush, Settings, Calendar } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"

interface Service {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  image: string
}

const services: Service[] = [
  {
    id: "maintenance",
    title: "Pool Maintenance",
    description: "Routine cleaning, chemical balancing, seasonal service.",
    icon: <Settings className="w-6 h-6" />,
    image: "/services/maintenance-services.jpg",
  },
  {
    id: "construction",
    title: "Construction & Custom Pools",
    description: "Fully custom new builds designed to your space.",
    icon: <Hammer className="w-6 h-6" />,
    image: "/services/pool-construction.jpg",
  },
  {
    id: "renovation",
    title: "Renovation & Remodeling",
    description: "Modernize your pool with new finishes and features.",
    icon: <Paintbrush className="w-6 h-6" />,
    image: "/services/pool-renovation.jpg",
  },
  {
    id: "repairs",
    title: "Repairs & Equipment",
    description: "We fix plumbing, heaters, skimmers, lights, and more.",
    icon: <Wrench className="w-6 h-6" />,
    image: "/services/repairs-equipment.jpg",
  },
  {
    id: "seasonal",
    title: "Seasonal Openings & Closings",
    description: "Professional start-up and winterization service.",
    icon: <Calendar className="w-6 h-6" />,
    image: "/services/seasonal-service.jpg",
  },
]

export function ServicesSection() {
  const [activeService, setActiveService] = useState<string>("maintenance")
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [displayedImage, setDisplayedImage] = useState<string>("/services/maintenance-services.jpg")

  const handleServiceClick = (serviceId: string) => {
    if (serviceId === activeService) {
      setActiveService("")
      return
    }

    // Smooth image transition
    setIsTransitioning(true)
    
    setTimeout(() => {
      setActiveService(serviceId)
      const newService = services.find(s => s.id === serviceId)
      if (newService) {
        setDisplayedImage(newService.image)
      }
      setIsTransitioning(false)
    }, 150) // Half of transition duration for crossfade effect
  }

  // Set initial image
  useEffect(() => {
    const currentService = services.find((service) => service.id === activeService)
    if (currentService) {
      setDisplayedImage(currentService.image)
    }
  }, [])

  const currentService = services.find((service) => service.id === activeService)

  return (
    <section className="mobile-section bg-gray-50">
      <div className="mobile-container">
        {/* Header */}
        <ScrollReveal animation="fadeInUp">
          <div className="text-center mb-16">
            <div className="inline-block bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-medium mb-4 transform hover:scale-105 transition-all duration-300">
              Services
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">What We Do</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Find out which one of our services fits your needs.</p>
          </div>
        </ScrollReveal>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column - Image */}
          <ScrollReveal animation="fadeInLeft" delay={200}>
            <div className="order-2 lg:order-1">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-200 shadow-xl group">
                {/* Background overlay for smooth transitions */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Main image with crossfade effect */}
                <div className="relative w-full h-full">
                  <OptimizedImage
                    src={displayedImage}
                    alt={currentService?.title || "Service"}
                    fill
                    className={cn(
                      "object-cover transition-all duration-500 ease-out transform",
                      isTransitioning 
                        ? "scale-105 opacity-0 blur-sm" 
                        : "scale-100 opacity-100 blur-0 group-hover:scale-110"
                    )}
                    priority
                    quality={85}
                  />
                </div>

                {/* Elegant loading shimmer effect */}
                {isTransitioning && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                )}

                {/* Active service indicator */}
                {currentService && (
                  <div className="absolute bottom-6 left-6 z-20">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                      <div className="flex items-center space-x-2">
                        <div className="text-gray-700">{currentService.icon}</div>
                        <span className="text-sm font-medium text-gray-800">{currentService.title}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column - Accordion */}
          <div className="order-1 lg:order-2 space-y-4">
            {services.map((service, index) => (
              <ScrollReveal 
                key={service.id} 
                animation="fadeInRight" 
                delay={300 + (index * 100)}
              >
                <div className={cn(
                  "bg-white rounded-xl border overflow-hidden transition-all duration-500 ease-out transform hover:shadow-xl",
                  activeService === service.id 
                    ? "border-blue-200 shadow-lg scale-[1.02] bg-gradient-to-r from-blue-50 to-white" 
                    : "border-gray-200 hover:border-gray-300 hover:shadow-md hover:-translate-y-1"
                )}>
                  <button
                    onClick={() => handleServiceClick(service.id)}
                    className={cn(
                      "w-full flex items-center justify-between p-6 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset transition-all duration-300 group",
                      activeService === service.id 
                        ? "bg-gradient-to-r from-blue-50 to-transparent" 
                        : "hover:bg-gray-50"
                    )}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={cn(
                        "flex-shrink-0 transition-all duration-300 transform",
                        activeService === service.id 
                          ? "text-blue-600 scale-110" 
                          : "text-gray-600 group-hover:text-blue-500 group-hover:scale-105"
                      )}>
                        {service.icon}
                      </div>
                      <h3 className={cn(
                        "text-lg font-semibold transition-colors duration-300",
                        activeService === service.id 
                          ? "text-blue-800" 
                          : "text-gray-800 group-hover:text-blue-700"
                      )}>
                        {service.title}
                      </h3>
                    </div>
                    <div className="flex-shrink-0">
                      {activeService === service.id ? (
                        <X className="w-5 h-5 text-blue-500 transition-all duration-300 rotate-0 hover:rotate-90" />
                      ) : (
                        <Plus className="w-5 h-5 text-gray-400 transition-all duration-300 group-hover:text-blue-500 group-hover:rotate-90" />
                      )}
                    </div>
                  </button>

                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-500 ease-out",
                      activeService === service.id 
                        ? "max-h-40 opacity-100" 
                        : "max-h-0 opacity-0"
                    )}
                  >
                    <div className={cn(
                      "px-6 pb-6 transition-all duration-500 delay-100 transform",
                      activeService === service.id 
                        ? "translate-y-0 opacity-100" 
                        : "translate-y-4 opacity-0"
                    )}>
                      <div className="pl-10">
                        <p className="text-gray-600 leading-relaxed">{service.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
        
        {/* Call to Action Button */}
        <ScrollReveal animation="fadeInUp" delay={800}>
          <div className="text-center mt-8 sm:mt-10 md:mt-12">
            <a href="tel:+14167172750">
              <Button size="lg" className="btn-luxury transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                Get Started Today
              </Button>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
