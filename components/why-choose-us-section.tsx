"use client"

import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Zap, Settings, X } from "lucide-react"

export function WhyChooseUsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fadeInUp">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-12">Why Choose Us for Your Pool?</h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Custom Designs */}
          <ScrollReveal animation="fadeInUp" delay={0}>
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <X className="w-8 h-8 text-blue-800 rotate-45" />
              </div>
              <h3 className="text-xl font-bold text-blue-800 mb-2">Custom designs</h3>
              <h4 className="text-xl font-bold text-blue-800 mb-4">built around you</h4>
              <p className="text-gray-600 leading-relaxed">We adapt each project to your space, needs, and style.</p>
            </div>
          </ScrollReveal>

          {/* Smart Features */}
          <ScrollReveal animation="fadeInUp" delay={200}>
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-blue-800" />
              </div>
              <h3 className="text-xl font-bold text-blue-800 mb-2">Smart features</h3>
              <h4 className="text-xl font-bold text-blue-800 mb-4">simple control</h4>
              <p className="text-gray-600 leading-relaxed">
                Lighting, heating, cleaning. All automated and easy to use.
              </p>
            </div>
          </ScrollReveal>

          {/* Trusted */}
          <ScrollReveal animation="fadeInUp" delay={400}>
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Settings className="w-8 h-8 text-blue-800" />
              </div>
              <h3 className="text-xl font-bold text-blue-800 mb-2">Trusted by</h3>
              <h4 className="text-xl font-bold text-blue-800 mb-4">homeowners and pros</h4>
              <p className="text-gray-600 leading-relaxed">Hotels and families choose us for quality that lasts.</p>
            </div>
          </ScrollReveal>
        </div>

        {/* CTA Buttons */}
        <ScrollReveal animation="fadeInUp" delay={600}>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Button size="lg" className="bg-blue-800 hover:bg-blue-900 text-white font-semibold px-8 py-4 text-lg">
              BOOK A CALL TODAY
            </Button>
            <Button
              variant="link"
              size="lg"
              className="text-blue-800 hover:text-blue-900 font-semibold text-lg underline decoration-2 underline-offset-4"
            >
              DISCOVER OUR SERVICES
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
