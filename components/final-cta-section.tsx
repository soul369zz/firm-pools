"use client"

import { Button } from "@/components/ui/button"
import { Phone, MessageCircle } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export function FinalCtaSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="scaleIn">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready for Your Backyard Paradise?</h2>
            <p className="text-xl text-gray-600 mb-8">Free consultation • No obligation</p>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fadeInUp" delay={200}>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {/* Call Now */}
            <div className="bg-white rounded-2xl p-8 shadow-lg luxury-hover text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">CALL NOW</h3>
              <p className="text-gray-600 mb-6">Speak directly with our pool experts</p>
              <a href="tel:+14167172750">
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white btn-luxury" size="lg">
                  (416) 717-2750
                </Button>
              </a>
            </div>

            {/* Text Us */}
            <div className="bg-white rounded-2xl p-8 shadow-lg luxury-hover text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">TEXT US</h3>
              <p className="text-gray-600 mb-6">Quick questions? Send us a message</p>
              <a href="sms:+14167172750">
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white btn-luxury" size="lg">
                  Start Chat
                </Button>
              </a>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fadeInUp" delay={400}>
          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span>Licensed & Insured</span>
              </div>
              <div className="w-1 h-1 bg-gray-300 rounded-full" />
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                <span>20+ Years Experience</span>
              </div>
              <div className="w-1 h-1 bg-gray-300 rounded-full" />
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full" />
                <span>500+ Happy Clients</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
