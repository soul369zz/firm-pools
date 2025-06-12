"use client"

import { useState } from "react"
import Image from "next/image"
import OptimizedImage from "@/components/optimized-image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { ServicesSection } from "@/components/services-section"
import { ServiceAreaMap } from "@/components/service-area-map"

import { ArrowLeft, Phone, Clock, Shield, Droplets, PenToolIcon as Tool, Calendar, Sparkles, ArrowUpRight, MessageCircle, Instagram, Mail, MapPin, Copy } from 'lucide-react'
import { ScrollReveal } from "@/components/scroll-reveal"

export default function ServicesPage() {
  // State for button expansions and copy feedback
  const [expandedButtons, setExpandedButtons] = useState<{[key: string]: boolean}>({})
  const [copiedText, setCopiedText] = useState("")

  const handleButtonClick = (buttonId: string) => {
    // Check if mobile device
    if (window.innerWidth <= 768) {
      // Mobile: direct call - use Ruel's number for Ruel buttons
      if (buttonId === 'call-ruel') {
        window.location.href = "tel:+14167172750"
      } else if (buttonId === 'text-ruel') {
        window.location.href = "sms:+14167172750"
      } else {
        window.location.href = "tel:+14169061960"
      }
    } else {
      // Desktop: expand button
      setExpandedButtons(prev => ({
        ...prev,
        [buttonId]: !prev[buttonId]
      }))
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

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 text-white">
        {/* Hero Image Background */}
        <div className="absolute inset-0">
          <Image
            src="/hero/homepage-hero.jpg"
            alt="Pool Services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <ScrollReveal animation="fadeInLeft" delay={300}>
              <Link
                href="/"
                className="inline-flex items-center space-x-2 text-white hover:text-white transition-colors mb-8 drop-shadow-xl"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="text-white">Back to Home</span>
              </Link>
            </ScrollReveal>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-2xl text-white">Our Services</h1>
            <p className="text-xl md:text-2xl opacity-100 max-w-3xl mx-auto drop-shadow-xl text-white">
              Professional pool and spa services designed to exceed your expectations
            </p>
          </div>
        </div>


      </section>

      {/* Emergency Services Banner */}
      <ScrollReveal animation="slideInDown">
        <div className="bg-red-600 text-white py-3 px-4">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center md:justify-between">
            <div className="flex items-center space-x-3 mb-2 md:mb-0">
              <Phone className="w-5 h-5 animate-pulse" />
              <span className="font-bold">POOL EMERGENCY? 24/7 Response</span>
            </div>
            <Button 
              size="sm" 
              className={`btn-luxury transition-all duration-300 relative overflow-hidden ${
                expandedButtons['emergency'] ? 'bg-luxury-gold text-white px-6' : ''
              }`}
              onClick={() => handleButtonClick('emergency')}
              style={{
                width: expandedButtons['emergency'] ? 'auto' : undefined,
                minWidth: expandedButtons['emergency'] ? '200px' : undefined
              }}
            >
              <div className={`transition-all duration-300 ${expandedButtons['emergency'] ? 'hidden' : 'block'}`}>
                Request Emergency Service
              </div>
              <div className={`transition-all duration-300 ${expandedButtons['emergency'] ? 'flex items-center gap-2' : 'hidden'}`}>
                <span className="text-sm">+1(416) 906-1960</span>
                <div
                  className="cursor-pointer hover:bg-white hover:text-luxury-gold rounded-full p-1 transition-colors duration-200"
                  onClick={(e) => {
                    e.stopPropagation()
                    copyToClipboard("+1(416) 906-1960")
                  }}
                  title="Copy number"
                >
                  <Copy size={16} />
                </div>
                {copiedText === "+1(416) 906-1960" && (
                  <span className="text-xs text-white/80 ml-1">Copied!</span>
                )}
              </div>
            </Button>
          </div>
        </div>
      </ScrollReveal>



      {/* What We Do Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fadeInUp">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">What we do</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                From regular maintenance to equipment repair, we offer comprehensive pool care solutions
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Pool Cleaning",
                description: "Professional pool cleaning services to keep your water crystal clear and inviting",
                image: "/services/pool-cleaning.jpg",
                features: ["Weekly/Bi-weekly Service", "Debris & Leaf Removal", "Surface Skimming & Vacuuming"],
              },
              {
                title: "Equipment Repair",
                description: "Expert repair and maintenance of pumps, filters, heaters, and automation systems",
                image: "/services/equipment-repair.jpg",
                features: ["Pump & Filter Repair", "Heater Diagnostics", "Automation System Service"],
              },
              {
                title: "Chemical Balancing",
                description: "Precise water chemistry management for safe, comfortable swimming conditions",
                image: "/services/maintenance-services.jpg",
                features: ["pH & Alkalinity Testing", "Chlorine Level Management", "Water Quality Analysis"],
              },
              {
                title: "Maintenance Services",
                description: "Keep your pool pristine with our maintenance programs",
                image: "/services/pool-maintenance.jpg",
                features: ["Weekly Cleaning", "Chemical Balancing", "Equipment Service"],
              },
              {
                title: "Landscape Integration",
                description: "Complete outdoor living space design and installation",
                image: "/services/landscape-integration.jpg",
                features: ["Hardscaping", "Outdoor Kitchens", "Fire Features"],
              },
              {
                title: "Pool Opening/Closing",
                description: "Seasonal pool opening and closing services to protect your investment year-round",
                image: "/services/pool-opening-closing.jpg",
                features: ["Spring Pool Opening", "Winterization Service", "Equipment Inspection"],
              },
            ].map((service, index) => (
              <ScrollReveal key={index} animation="fadeInUp" delay={index * 100}>
                <Card className="group hover:shadow-lg transition-shadow bg-white border border-gray-200">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <OptimizedImage
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      quality={80}
                      priority={index < 3}
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-1 mb-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-500 flex items-center">
                          <div className="w-1 h-1 bg-blue-600 rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className={`btn-luxury w-full transition-all duration-300 relative overflow-hidden ${
                        expandedButtons[`service-${index}`] ? 'bg-luxury-gold text-white px-6' : ''
                      }`}
                      onClick={() => handleButtonClick(`service-${index}`)}
                      style={{
                        width: expandedButtons[`service-${index}`] ? 'auto' : undefined,
                        minWidth: expandedButtons[`service-${index}`] ? '200px' : undefined
                      }}
                    >
                      <div className={`transition-all duration-300 ${expandedButtons[`service-${index}`] ? 'hidden' : 'block'}`}>
                        Learn More
                      </div>
                      <div className={`transition-all duration-300 ${expandedButtons[`service-${index}`] ? 'flex items-center gap-2' : 'hidden'}`}>
                        <span className="text-sm">+1(416) 906-1960</span>
                        <div
                          className="cursor-pointer hover:bg-white hover:text-luxury-gold rounded-full p-1 transition-colors duration-200"
                          onClick={(e) => {
                            e.stopPropagation()
                            copyToClipboard("+1(416) 906-1960")
                          }}
                          title="Copy number"
                        >
                          <Copy size={16} />
                        </div>
                        {copiedText === "+1(416) 906-1960" && (
                          <span className="text-xs text-white/80 ml-1">Copied!</span>
                        )}
                      </div>
                    </Button>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Services Section */}
      <ServicesSection />

      {/* Service Area Map Section */}
      <ServiceAreaMap />

      {/* Ready for Your Backyard Paradise Section */}
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
                <div className="space-y-3">
                  <Button 
                    className={`w-full bg-green-600 hover:bg-green-700 text-white btn-luxury transition-all duration-300 relative overflow-hidden ${
                      expandedButtons['call-ruel'] ? 'bg-luxury-gold' : ''
                    }`}
                    size="lg"
                    onClick={() => handleButtonClick('call-ruel')}
                    style={{
                      width: expandedButtons['call-ruel'] ? 'auto' : undefined,
                      minWidth: expandedButtons['call-ruel'] ? '200px' : undefined
                    }}
                  >
                    <div className={`transition-all duration-300 ${expandedButtons['call-ruel'] ? 'hidden' : 'block'}`}>
                      Call Ruel
                    </div>
                    <div className={`transition-all duration-300 ${expandedButtons['call-ruel'] ? 'flex items-center gap-2' : 'hidden'}`}>
                      <span className="text-sm">+1(416) 717-2750</span>
                      <div
                        className="cursor-pointer hover:bg-white hover:text-green-600 rounded-full p-1 transition-colors duration-200"
                        onClick={(e) => {
                          e.stopPropagation()
                          copyToClipboard("+1(416) 717-2750")
                        }}
                        title="Copy number"
                      >
                        <Copy size={16} />
                      </div>
                      {copiedText === "+1(416) 717-2750" && (
                        <span className="text-xs text-white/80 ml-1">Copied!</span>
                      )}
                    </div>
                  </Button>
                  <Button 
                    className={`w-full bg-green-600 hover:bg-green-700 text-white btn-luxury transition-all duration-300 relative overflow-hidden ${
                      expandedButtons['call-kevin'] ? 'bg-luxury-gold' : ''
                    }`}
                    size="lg"
                    onClick={() => handleButtonClick('call-kevin')}
                    style={{
                      width: expandedButtons['call-kevin'] ? 'auto' : undefined,
                      minWidth: expandedButtons['call-kevin'] ? '200px' : undefined
                    }}
                  >
                    <div className={`transition-all duration-300 ${expandedButtons['call-kevin'] ? 'hidden' : 'block'}`}>
                      Call Kevin
                    </div>
                    <div className={`transition-all duration-300 ${expandedButtons['call-kevin'] ? 'flex items-center gap-2' : 'hidden'}`}>
                      <span className="text-sm">+1(416) 906-1960</span>
                      <div
                        className="cursor-pointer hover:bg-white hover:text-green-600 rounded-full p-1 transition-colors duration-200"
                        onClick={(e) => {
                          e.stopPropagation()
                          copyToClipboard("+1(416) 906-1960")
                        }}
                        title="Copy number"
                      >
                        <Copy size={16} />
                      </div>
                      {copiedText === "+1(416) 906-1960" && (
                        <span className="text-xs text-white/80 ml-1">Copied!</span>
                      )}
                    </div>
                  </Button>
                </div>
              </div>

              {/* Text Us */}
              <div className="bg-white rounded-2xl p-8 shadow-lg luxury-hover text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">TEXT US</h3>
                <p className="text-gray-600 mb-6">Quick questions? Send us a message</p>
                <div className="space-y-3">
                  <Button 
                    className={`w-full bg-purple-600 hover:bg-purple-700 text-white btn-luxury transition-all duration-300 relative overflow-hidden ${
                      expandedButtons['text-ruel'] ? 'bg-luxury-gold' : ''
                    }`}
                    size="lg"
                    onClick={() => handleButtonClick('text-ruel')}
                    style={{
                      width: expandedButtons['text-ruel'] ? 'auto' : undefined,
                      minWidth: expandedButtons['text-ruel'] ? '200px' : undefined
                    }}
                  >
                    <div className={`transition-all duration-300 ${expandedButtons['text-ruel'] ? 'hidden' : 'block'}`}>
                      Text Ruel
                    </div>
                    <div className={`transition-all duration-300 ${expandedButtons['text-ruel'] ? 'flex items-center gap-2' : 'hidden'}`}>
                      <span className="text-sm">+1(416) 717-2750</span>
                      <div
                        className="cursor-pointer hover:bg-white hover:text-purple-600 rounded-full p-1 transition-colors duration-200"
                        onClick={(e) => {
                          e.stopPropagation()
                          copyToClipboard("+1(416) 717-2750")
                        }}
                        title="Copy number"
                      >
                        <Copy size={16} />
                      </div>
                      {copiedText === "+1(416) 717-2750" && (
                        <span className="text-xs text-white/80 ml-1">Copied!</span>
                      )}
                    </div>
                  </Button>
                  <Button 
                    className={`w-full bg-purple-600 hover:bg-purple-700 text-white btn-luxury transition-all duration-300 relative overflow-hidden ${
                      expandedButtons['text-kevin'] ? 'bg-luxury-gold' : ''
                    }`}
                    size="lg"
                    onClick={() => handleButtonClick('text-kevin')}
                    style={{
                      width: expandedButtons['text-kevin'] ? 'auto' : undefined,
                      minWidth: expandedButtons['text-kevin'] ? '200px' : undefined
                    }}
                  >
                    <div className={`transition-all duration-300 ${expandedButtons['text-kevin'] ? 'hidden' : 'block'}`}>
                      Text Kevin
                    </div>
                    <div className={`transition-all duration-300 ${expandedButtons['text-kevin'] ? 'flex items-center gap-2' : 'hidden'}`}>
                      <span className="text-sm">+1(416) 906-1960</span>
                      <div
                        className="cursor-pointer hover:bg-white hover:text-purple-600 rounded-full p-1 transition-colors duration-200"
                        onClick={(e) => {
                          e.stopPropagation()
                          copyToClipboard("+1(416) 906-1960")
                        }}
                        title="Copy number"
                      >
                        <Copy size={16} />
                      </div>
                      {copiedText === "+1(416) 906-1960" && (
                        <span className="text-xs text-white/80 ml-1">Copied!</span>
                      )}
                    </div>
                  </Button>
                </div>
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollReveal animation="fadeInUp" delay={100}>
              <div>
                <h3 className="text-xl font-bold mb-4">Firm Pools & Spa</h3>
                <p className="text-gray-400 mb-4">
                  Creating luxury aquatic environments for over 20 years. Your dream pool awaits.
                </p>
                <div className="flex space-x-4">
                  <a href="https://www.instagram.com/firmpoolsandspa/" target="_blank" rel="noopener noreferrer">
                    <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors duration-300" />
                  </a>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fadeInUp" delay={200}>
              <div>
                <h4 className="font-semibold mb-4">Services</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <Link href="/construction" className="hover:text-white">
                      Pool Design
                    </Link>
                  </li>
                  <li>
                    <Link href="/construction" className="hover:text-white">
                      Pool Construction
                    </Link>
                  </li>
                  <li>
                    <Link href="/construction" className="hover:text-white">
                      Pool Renovation
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white">
                      Maintenance
                    </Link>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fadeInUp" delay={300}>
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <Link href="/" className="hover:text-white">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/#reviews" className="hover:text-white">
                      Reviews
                    </Link>
                  </li>
                  <li>
                    <Link href="/#faq" className="hover:text-white">
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fadeInUp" delay={400}>
              <div>
                <h4 className="font-semibold mb-4">Contact Info</h4>
                <div className="space-y-3 text-gray-400">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4" />
                    <div>
                      <div>Ruel - (416) 717-2750</div>
                      <div>Kevin - (416) 906-1960</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4" />
                    <span>firmpoolsandspa@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-4 h-4" />
                    <span>4236 Chesswood Dr, North York, ON M3J 2B0</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal animation="fadeInUp" delay={500}>
            <div className="border-t border-gray-800 mt-12 pt-8 text-center">
              <p className="text-gray-400">&copy; 2025 Firm Pools & Spa. All rights reserved.</p>
            </div>
          </ScrollReveal>
        </div>
      </footer>
    </div>
  )
}
