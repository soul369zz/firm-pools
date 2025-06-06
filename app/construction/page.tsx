import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { TrustBadge } from "@/components/trust-badge"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ArrowRight, ArrowLeft, Phone, Pencil, Shovel, Hammer, Paintbrush, Award, Instagram, MessageCircle } from "lucide-react"

export default function ConstructionPage() {
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
            alt="Pool Construction"
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-2xl text-white">Pool Construction</h1>
            <p className="text-xl md:text-2xl opacity-100 max-w-3xl mx-auto drop-shadow-xl text-white">
              Premium pool construction with uncompromising quality and craftsmanship
            </p>
          </div>
        </div>

        {/* Trust Badge - Only in Hero Section */}
        <TrustBadge showOnlyInHero={true} />
      </section>

      {/* Emergency Services Banner */}
      <ScrollReveal animation="slideInDown">
        <div className="bg-red-600 text-white py-3 px-4">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center md:justify-between">
            <div className="flex items-center space-x-3 mb-2 md:mb-0">
              <Phone className="w-5 h-5 animate-pulse" />
              <span className="font-bold">POOL EMERGENCY? 24/7 Response • Call:</span>
              <a href="tel:+14167172750" className="text-white font-bold hover:underline">
                (416) 717-2750
              </a>
            </div>
            <a href="tel:+14167172750">
              <Button size="sm" className="btn-luxury">
                Request Emergency Service
              </Button>
            </a>
          </div>
        </div>
      </ScrollReveal>

      {/* Process Timeline Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fadeInUp">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Our Construction Process</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We've refined our process over 20 years to ensure a seamless experience from design to completion
              </p>
            </div>
          </ScrollReveal>

          {/* Timeline - Horizontal Scroll on Mobile */}
          <div className="overflow-x-auto pb-8 scrollbar-hide">
            <div className="flex min-w-max space-x-6 lg:space-x-12 px-4">
              {[
                {
                  step: 1,
                  title: "DESIGN",
                  icon: <Pencil className="w-8 h-8" />,
                  days: 3,
                  description: "Collaborative design process to create your perfect aquatic environment",
                },
                {
                  step: 2,
                  title: "EXCAVATE",
                  icon: <Shovel className="w-8 h-8" />,
                  days: 2,
                  description: "Precision excavation with state-of-the-art equipment",
                },
                {
                  step: 3,
                  title: "SHOTCRETE",
                  icon: <Hammer className="w-8 h-8" />,
                  days: 5,
                  description: "High-strength concrete application for structural integrity",
                },
                {
                  step: 4,
                  title: "TILE",
                  icon: <Paintbrush className="w-8 h-8" />,
                  days: 7,
                  description: "Expert installation of premium tiles and finishes",
                },
                {
                  step: 5,
                  title: "HANDOVER",
                  icon: <Award className="w-8 h-8" />,
                  days: 1,
                  description: "Final inspection and comprehensive training on pool operation",
                },
              ].map((step, index, array) => (
                <ScrollReveal key={index} animation="fadeInUp" delay={index * 150}>
                  <div className="flex flex-col items-center w-64">
                    <div className="flex items-center mb-6 w-full">
                      <div className="flex-shrink-0 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white">
                        {step.icon}
                      </div>

                      {index < array.length - 1 && (
                        <div className="h-1 bg-blue-600 flex-grow mx-2 hidden md:block">
                          <ArrowRight className="text-blue-600 ml-auto -mt-3" />
                        </div>
                      )}
                    </div>

                    <div className="text-center">
                      <h3 className="text-xl font-bold mb-2">
                        {step.step}. {step.title}
                      </h3>
                      <div className="text-3xl font-light text-blue-600 mb-2">
                        {step.days} {step.days === 1 ? "day" : "days"}
                      </div>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <ScrollReveal animation="fadeInUp" delay={300}>
            <div className="text-center mt-12">
              <a href="tel:+14167172750">
                <Button className="btn-luxury">Schedule Consultation</Button>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Construction Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fadeInUp">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Premium Construction Features</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our construction process incorporates the highest quality materials and techniques
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Structural Engineering",
                description:
                  "Every pool is designed with structural integrity as the foundation, ensuring longevity and durability.",
                image: "/construction/structural-engineering.jpg",
              },
              {
                title: "Premium Materials",
                description:
                  "We use only the highest quality materials that exceed industry standards for lasting beauty and performance.",
                image: "/construction/premium-materials.jpg",
              },
              {
                title: "Advanced Hydraulics",
                description:
                  "Efficient water circulation systems that reduce energy costs while maintaining perfect water quality.",
                image: "/construction/advanced-hydraulics.jpg",
              },
              {
                title: "Smart Technology",
                description:
                  "Integrated automation systems for effortless control of your pool's features from anywhere.",
                image: "/construction/smart-technology.jpg",
              },
              {
                title: "Energy Efficiency",
                description:
                  "Eco-friendly design elements that minimize environmental impact and reduce operating costs.",
                image: "/construction/energy-efficiency.jpg",
              },
              {
                title: "Custom Features",
                description:
                  "From infinity edges to integrated spas, we build custom features that elevate your pool experience.",
                image: "/construction/custom-features.jpg",
              },
            ].map((feature, index) => (
              <ScrollReveal key={index} animation="fadeInUp" delay={index * 100}>
                <div className="bg-gray-50 rounded-xl overflow-hidden luxury-hover">
                  <div className="relative h-48">
                    <Image
                      src={feature.image || "/placeholder.svg"}
                      alt={feature.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-gray-600 mb-4">{feature.description}</p>
                    <a href="tel:+14167172750" className="w-full">
                      <Button className="btn-luxury w-full">
                        Learn More
                      </Button>
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="section-luxury">
        <div className="container-luxury">
          <ScrollReveal animation="fadeInUp">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Recent Construction Projects</h2>
              <p className="text-lg text-slate-600 leading-relaxed">Explore our latest pool construction projects and get inspired</p>
            </div>
          </ScrollReveal>

          <div className="space-y-20">
            {[
              {
                title: "Modern Infinity Edge",
                description: "A stunning infinity pool with panoramic city views, featuring integrated lighting and a connected spa.",
                location: "Toronto",
                image: "/gallery/construction/modern-infinity-edge.jpg",
                details: ["50ft Infinity Edge", "LED Lighting System", "Integrated Spa", "Natural Stone Decking"],
                category: "Luxury Residential",
                year: "2024"
              },
              {
                title: "Mediterranean Retreat",
                description: "A resort-style pool with waterfalls, grottos, and lush landscaping creating a private oasis.",
                location: "Hamilton",
                image: "/gallery/construction/mediterranean-retreat.jpg",
                details: ["Natural Rock Waterfall", "Swim-up Bar", "Grotto Seating", "Tropical Landscaping"],
                category: "Resort Style",
                year: "2024"
              },
              {
                title: "Contemporary Geometric",
                description: "Clean lines and modern materials create a sophisticated aquatic environment perfect for entertaining.",
                location: "Oshawa",
                image: "/gallery/construction/contemporary-geometric.jpg",
                details: ["Geometric Design", "Glass Tile Finish", "Fire Features", "Outdoor Kitchen"],
                category: "Contemporary",
                year: "2023"
              }
            ].map((project, index) => (
              <ScrollReveal key={index} animation="fadeInUp" delay={index * 200}>
                <div className="max-w-6xl mx-auto">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className={`relative group ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <div className="relative overflow-hidden rounded-2xl shadow-2xl luxury-hover bg-white p-3">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          width={800}
                          height={600}
                          className="image-hover rounded-xl w-full"
                        />
                        <div className="absolute inset-3 bg-gradient-to-t from-black/60 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute top-6 left-6">
                          <div className="bg-black/80 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                            {project.category}
                          </div>
                        </div>
                        <div className="absolute bottom-6 right-6">
                          <div className="bg-white/95 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-full text-sm font-bold">
                            {project.year}
                          </div>
                        </div>
                        <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <span className="bg-white/25 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                            Schedule Consultation
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className={`space-y-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <div>
                        <h3 className="text-4xl font-bold mb-6">{project.title}</h3>
                        <p className="text-xl text-slate-600 mb-8 leading-relaxed">{project.description}</p>
                        <div className="mb-6">
                          <span className="text-lg font-semibold text-gray-700">Location: </span>
                          <span className="text-lg text-slate-600">{project.location}</span>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4 mb-8">
                          {project.details.map((detail, idx) => (
                            <div key={idx} className="flex items-center space-x-3">
                              <div className="w-2 h-2 bg-luxury-gold rounded-full flex-shrink-0" />
                              <span className="text-slate-600 font-medium">{detail}</span>
                            </div>
                          ))}
                        </div>
                        <a href="tel:+14167172750">
                          <Button size="lg" className="btn-luxury">
                            Schedule Consultation
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

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
                <a href="tel:+14167172750" className="w-full">
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
                <a href="tel:+14167172750" className="w-full">
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
                    <Link href="/services" className="hover:text-white transition-colors duration-300">
                      Pool Design
                    </Link>
                  </li>
                  <li>
                    <Link href="/construction" className="hover:text-white transition-colors duration-300">
                      Pool Construction
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="hover:text-white transition-colors duration-300">
                      Spa Installation
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="hover:text-white transition-colors duration-300">
                      Pool Renovation
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="hover:text-white transition-colors duration-300">
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
                    <Link href="/" className="hover:text-white transition-colors duration-300">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/#reviews" className="hover:text-white transition-colors duration-300">
                      Reviews
                    </Link>
                  </li>
                  <li>
                    <Link href="/#faq" className="hover:text-white transition-colors duration-300">
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
                    <span>(416) 717-2750</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span>firmpoolsandspa@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
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
