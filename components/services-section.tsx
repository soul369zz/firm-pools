"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
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

  const handleServiceClick = (serviceId: string) => {
    setActiveService(activeService === serviceId ? "" : serviceId)
  }

  const currentService = services.find((service) => service.id === activeService)

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal animation="fadeInUp">
          <div className="text-center mb-16">
            <div className="inline-block bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              Services
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">What We Do</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Find out which one of our services fits your needs.</p>
          </div>
        </ScrollReveal>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Image */}
          <ScrollReveal animation="fadeInLeft" delay={200}>
            <div className="order-2 lg:order-1">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-200 shadow-xl">
                {currentService && (
                  <Image
                    src={currentService.image}
                    alt={currentService.title}
                    fill
                    className="object-cover transition-opacity duration-500"
                    priority
                  />
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
                <div className="bg-white rounded-lg border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-gray-300">
                  <button
                    onClick={() => handleServiceClick(service.id)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset transition-all duration-200 hover:bg-gray-50"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0 text-gray-600">{service.icon}</div>
                      <h3 className="text-lg font-semibold">{service.title}</h3>
                    </div>
                    <div className="flex-shrink-0">
                      {activeService === service.id ? (
                        <X className="w-5 h-5 text-gray-400 transition-transform duration-200 rotate-0" />
                      ) : (
                        <Plus className="w-5 h-5 text-gray-400 transition-transform duration-200" />
                      )}
                    </div>
                  </button>

                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-300 ease-in-out",
                      activeService === service.id ? "max-h-40 opacity-100" : "max-h-0 opacity-0",
                    )}
                  >
                    <div className="px-6 pb-6">
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
          <div className="text-center mt-12">
            <a href="tel:+14167172750">
              <Button size="lg" className="btn-luxury transform hover:scale-105 transition-all duration-300">
                Get Started Today
              </Button>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
