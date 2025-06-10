import Image from "next/image"
import OptimizedImage from "@/components/optimized-image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { ServicesSection } from "@/components/services-section"

import { ArrowLeft, Phone, Clock, Shield, Droplets, PenToolIcon as Tool, Calendar, Sparkles, ArrowUpRight, MessageCircle, Instagram, Mail, MapPin } from 'lucide-react'
import { ScrollReveal } from "@/components/scroll-reveal"

export default function ServicesPage() {
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
            <a href="tel:+14167172750">
              <Button size="sm" className="btn-luxury">
                Request Emergency Service
              </Button>
            </a>
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
                From custom pool design to spa installation and maintenance, we offer comprehensive aquatic solutions
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Custom Pool Design",
                description: "Bespoke pool designs tailored to your space and lifestyle",
                image: "/services/custom-pool-design.jpg",
                features: ["3D Design Visualization", "Site Analysis", "Permit Assistance"],
              },
              {
                title: "Pool Construction",
                description: "Expert construction using premium materials and techniques",
                image: "/services/pool-construction.jpg",
                features: ["Gunite Construction", "Tile & Coping", "Equipment Installation"],
              },
              {
                title: "Pool Renovation",
                description: "Transform your existing pool with modern upgrades",
                image: "/services/pool-renovation.jpg",
                features: ["Surface Refinishing", "Equipment Upgrades", "Feature Additions"],
              },
              {
                title: "Maintenance Services",
                description: "Keep your pool pristine with our maintenance programs",
                image: "/services/maintenance-services.jpg",
                features: ["Weekly Cleaning", "Chemical Balancing", "Equipment Service"],
              },
              {
                title: "Landscape Integration",
                description: "Complete outdoor living space design and installation",
                image: "/services/landscape-integration.jpg",
                features: ["Hardscaping", "Outdoor Kitchens", "Fire Features"],
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
                    <a href="tel:+14167172750" className="w-full">
                      <Button className="btn-luxury w-full">
                        Learn More
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Services Section */}
      <ServicesSection />

      {/* Service Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fadeInUp">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Service Areas</h2>
              <p className="text-lg text-gray-600">We proudly serve the following areas</p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Toronto",
              "Mississauga",
              "Brampton",
              "Markham",
              "Vaughan",
              "Richmond Hill",
              "Oakville",
              "Burlington",
              "Milton",
              "Newmarket",
              "Aurora",
              "Whitby",
            ].map((area, index) => (
              <ScrollReveal key={index} animation="fadeInUp" delay={index * 50}>
                <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                  <h3 className="font-semibold">{area}</h3>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

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
                  <a href="tel:+14167172750" className="w-full block">
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white btn-luxury" size="lg">
                      Call Ruel
                    </Button>
                  </a>
                  <a href="tel:+14169061960" className="w-full block">
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white btn-luxury" size="lg">
                      Call Kevin
                    </Button>
                  </a>
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
                  <a href="sms:+14167172750" className="w-full block">
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white btn-luxury" size="lg">
                      Text Ruel
                    </Button>
                  </a>
                  <a href="sms:+14169061960" className="w-full block">
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white btn-luxury" size="lg">
                      Text Kevin
                    </Button>
                  </a>
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
                    <Link href="#" className="hover:text-white">
                      Pool Design
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white">
                      Pool Construction
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white">
                      Spa Installation
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white">
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
