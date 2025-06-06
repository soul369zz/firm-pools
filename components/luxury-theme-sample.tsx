'use client'

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Star, Phone, Shield, Award, CheckCircle } from "lucide-react"

export function LuxuryThemeSample() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Sample Header */}
      <header className="py-6 px-8 bg-white/80 backdrop-blur-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">
            Firm Pools & Spa - Apple-Style Theme Sample
          </h1>
          <div className="flex gap-4">
            <Button variant="outline" size="sm">Contact</Button>
            <Button size="sm">Get Quote</Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-8 py-16 space-y-24">
        {/* Hero Section */}
        <section className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-7xl font-light tracking-tight">
              Aquatic Luxury
              <span className="block font-bold">Design System</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Apple-inspired typography and design system for premium pool & spa experiences.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="px-8 py-4 text-lg">
              View Portfolio
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 hover:bg-gray-800 hover:text-white px-8 py-4 text-lg font-semibold tracking-wide rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Free Consultation
            </Button>
          </div>
        </section>

        {/* Typography Showcase */}
        <section className="space-y-8">
          <h2 className="text-4xl font-bold text-center">
            Apple-Inspired Typography
          </h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            <div>
              <h1 className="text-6xl font-light mb-2">
                Display Heading
              </h1>
              <p className="text-sm text-slate-500">Apple System Font Light - 6xl</p>
            </div>
            <div>
              <h2 className="text-4xl font-semibold mb-2">
                Section Heading
              </h2>
              <p className="text-sm text-slate-500">Apple System Font Semibold - 4xl</p>
            </div>
            <div>
              <h3 className="text-2xl font-medium mb-2">
                Subsection Heading
              </h3>
              <p className="text-sm text-slate-500">Apple System Font Medium - 2xl</p>
            </div>
            <div>
              <p className="text-lg text-gray-600 mb-2">
                Body text with perfect readability and consistent spacing for luxury brand experiences.
              </p>
              <p className="text-sm text-slate-500">Apple System Font Regular - lg</p>
            </div>
            <div>
              <p className="text-base font-semibold tracking-wide mb-2">
                BUTTON TEXT STYLE
              </p>
              <p className="text-sm text-slate-500">Apple System Font Semibold - base with tracking</p>
            </div>
          </div>
        </section>

        {/* Component Showcase */}
        <section className="space-y-12">
          <h2 className="text-4xl font-bold text-center">
            Components in Action
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Service Card */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold">
                  Premium Construction
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Crafted with precision using the finest materials and innovative techniques for lasting luxury.
              </p>
              <Button className="w-full">Learn More</Button>
            </Card>

            {/* Testimonial Card */}
            <Card className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <h3 className="text-2xl font-semibold">
                "Exceeded every expectation"
              </h3>
              <p className="leading-relaxed mb-4">
                The attention to detail and craftsmanship is simply outstanding. Our backyard has become our personal paradise.
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                <div>
                  <p className="font-medium">Michael Johnson</p>
                  <p className="text-sm text-gray-500">Toronto, ON</p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gradient-to-r from-slate-800 to-slate-900 text-white rounded-2xl p-12">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Space?</h2>
          <p className="text-xl opacity-90 mb-8">Contact our experts for a personalized consultation</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-white text-slate-800 hover:bg-gray-100 px-8 py-4"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white transform hover:scale-105 transition-all duration-300"
            >
              Free Estimate
            </Button>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="space-y-8">
          <h2 className="text-4xl font-bold text-center">
            Why Choose Our Apple-Style System
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="w-8 h-8" />,
                title: "Consistent Typography",
                features: ["Apple system fonts", "Perfect hierarchy", "Readable at all sizes", "Professional appearance"]
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Cohesive Design",
                features: ["Unified color palette", "Consistent spacing", "Smooth animations", "Luxury aesthetic"]
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: "Performance",
                features: ["Fast loading", "System fonts", "Optimized animations", "Cross-platform consistency"]
              }
            ].map((feature, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <ul className="space-y-2 text-sm">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
} 