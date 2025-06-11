"use client"

import Image from "next/image"
import OptimizedImage from "@/components/optimized-image"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { ServicesSection } from "@/components/services-section"
import { BeforeAfterSlider } from "@/components/before-after-slider"

import { AboutSection } from "@/components/about-section"
import { ServiceAreaMap } from "@/components/service-area-map"
import { FinalCtaSection } from "@/components/final-cta-section"
import { AnimatedCounter } from "@/components/animated-counter"
import { ScrollReveal } from "@/components/scroll-reveal"
import { FullGallery } from "@/components/full-gallery"

import { Star, Phone, Mail, MapPin, Instagram, ChevronDown } from "lucide-react"
import { SocialProofRail } from "@/components/social-proof-rail"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { LuxuryThemeSample } from "@/components/luxury-theme-sample"

export default function HomePage() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)
  
  // Uncomment the line below to see the luxury theme sample
  // return <LuxuryThemeSample />
  
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/hero/homepage-hero.jpg"
          alt="Firm Pools & Spa hero image"
          fill
          className="object-cover parallax"
          priority
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-light mb-6 animate-fade-in-up tracking-tight drop-shadow-2xl text-white">
            Firm Pools & Spa creates your
            <span className="block font-bold animate-fade-in-up animate-delay-200 text-white">dream oasis</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-100 animate-fade-in-up animate-delay-400 leading-relaxed drop-shadow-xl text-white">
            Transform your backyard into a luxury retreat with our custom pool and spa solutions
          </p>
          <div className="flex justify-center animate-fade-in-up animate-delay-600">
            <a href="tel:+14167172750">
              <Button size="lg" className="btn-luxury">
                Enquire Now
              </Button>
            </a>
          </div>
        </div>


      </section>

      {/* Stats Section with Before/After Slider */}
      <section className="mobile-section bg-white">
        <div className="mobile-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal animation="fadeInLeft">
              <div>
                <h2 className="text-4xl font-bold mb-6">We are aquatic transformation specialists.</h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  With over two decades of experience, Firm Pools & Spa has been creating stunning aquatic environments
                  that exceed expectations. Our team of certified professionals brings your vision to life with
                  precision and artistry.
                </p>
                <div className="grid grid-cols-3 gap-8">
                  <div className="text-center">
                    <AnimatedCounter
                      end={500}
                      suffix="+"
                      duration={2500}
                      className="text-3xl font-bold text-luxury-gold mb-2 block"
                    />
                    <div className="text-sm text-slate-600">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <AnimatedCounter
                      end={20}
                      suffix="+"
                      duration={2000}
                      className="text-3xl font-bold text-luxury-gold mb-2 block"
                    />
                    <div className="text-sm text-slate-600">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <AnimatedCounter
                      end={98}
                      suffix="%"
                      duration={2200}
                      className="text-3xl font-bold text-luxury-gold mb-2 block"
                    />
                    <div className="text-sm text-slate-600">Client Satisfaction</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="fadeInRight">
              <div className="relative h-96">
                <BeforeAfterSlider
                  beforeImage="/before-after/old-cracked-pool.jpg"
                  afterImage="/before-after/beautiful-modern-pool.jpg"
                  beforeAlt="Old pool before renovation"
                  afterAlt="Beautiful renovated pool"
                  className="h-full shadow-lg"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Social Proof Rail */}
      <SocialProofRail />

      {/* New Services Section */}
      <ServicesSection />

      {/* About Section */}
      <AboutSection />

      {/* Portfolio Section - Premium Single Column Layout */}
      <section className="mobile-section">
        <div className="mobile-container">
          <ScrollReveal animation="fadeInUp">
            <div className="text-center mb-12 sm:mb-14 md:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get inspired by our beautiful work</h2>
              <p className="text-lg text-slate-600 leading-relaxed">Explore our portfolio of stunning pool and spa projects</p>
            </div>
          </ScrollReveal>

          {/* Portfolio Cards - Single Column */}
          <div className="space-y-12 sm:space-y-16 md:space-y-20">
            {[
              {
                title: "Modern Infinity Pool",
                description:
                  "A stunning infinity pool with panoramic city views, featuring integrated lighting and a connected spa.",
                image: "/gallery/portfolio/portfolio-modern-infinity.jpeg",
                details: ["50ft Infinity Edge", "LED Lighting System", "Integrated Spa", "Natural Stone Decking"],
                category: "Luxury Residential",
                year: "2024"
              },
              {
                title: "Tropical Paradise Retreat",
                description:
                  "A resort-style pool with waterfalls, grottos, and lush landscaping creating a private oasis.",
                image: "/gallery/portfolio/portfolio-tropical-paradise.jpg",
                details: ["Natural Rock Waterfall", "Swim-up Bar", "Grotto Seating", "Tropical Landscaping"],
                category: "Resort Style",
                year: "2024"
              },
              {
                title: "Contemporary Geometric Design",
                description:
                  "Clean lines and modern materials create a sophisticated aquatic environment perfect for entertaining.",
                image: "/gallery/portfolio/portfolio-contemporary-geometric.jpg",
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
                        <OptimizedImage
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          width={800}
                          height={600}
                          className="image-hover rounded-xl w-full"
                          quality={80}
                          priority={index === 0}
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



      {/* Gallery Grid */}
      <section id="gallery" className="mobile-section">
        <div className="mobile-container">
          <ScrollReveal animation="fadeInUp">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Our Work Gallery</h2>
              <p className="text-lg text-gray-600">Browse our collection of completed projects</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "/gallery/view%20full/IMG_6904%20Medium.jpeg",
              "/gallery/view%20full/IMG_6772%20Medium.jpeg",
              "/gallery/view%20full/84cc49ef-95d8-4d86-af57-2045fb57499c%20Medium.jpeg",
              "/gallery/view%20full/bcfaf5d0-eb44-432e-b2f2-3de41fad68b0%20Medium.jpeg",
              "/gallery/view%20full/63367c72-6a50-43a2-9d70-be7137bb0756%20Medium.jpeg",
              "/gallery/view%20full/bde183fd-20fe-432b-ab30-5c3e9eff3851%20Medium.jpeg",
              "/gallery/view%20full/IMG_6832%20Medium.jpeg",
              "/gallery/view%20full/62ddd08f-3d55-45a4-848d-71eade0c7bb2.jpg",
              "/gallery/view%20full/982dc9bd-da2d-46f4-81f1-222f319a42fd.jpg",
              "/gallery/view%20full/IMG_0815.jpeg",
              "/gallery/view%20full/IMG_0820.jpeg",
              "/gallery/view%20full/IMG_8193.jpeg",
              "/gallery/view%20full/IMG_0282.jpeg",
              "/gallery/view%20full/IMG_0285.jpeg",
              "/gallery/view%20full/IMG_0299.jpeg",
              "/gallery/view%20full/IMG_0302.jpeg",
            ].map((src, index) => (
              <ScrollReveal key={index} animation="scaleIn" delay={index * 100}>
                <div className="relative group overflow-hidden rounded-lg aspect-square luxury-hover">
                  <OptimizedImage
                    src={src || "/placeholder.svg"}
                    alt={`Gallery image ${index + 1}`}
                    fill
                    className="object-cover image-hover"
                    quality={75}
                    priority={index < 4}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal animation="fadeInUp" delay={800}>
            <div className="text-center mt-12">
              <Button
                variant="outline"
                size="lg"
                className="btn-luxury border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white"
                onClick={() => setIsGalleryOpen(true)}
              >
                View Full Gallery
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials */}
      <section id="reviews" className="mobile-section bg-white">
        <div className="mobile-container">
          <ScrollReveal animation="fadeInUp">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Hear from our clients</h2>
              <p className="text-lg text-gray-600">What our customers say about their experience</p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Sarah Johnson",
                location: "Toronto, ON",
                rating: 5,
                text: "Firm Pools & Spa exceeded our expectations. The attention to detail and craftsmanship is outstanding.",
              },
              {
                name: "Michael Chen",
                location: "Mississauga, ON",
                rating: 5,
                text: "Professional team, beautiful results. Our backyard is now our favorite place to relax and entertain.",
              },
              {
                name: "Emily Rodriguez",
                location: "Markham, ON",
                rating: 5,
                text: "From design to completion, the process was seamless. Highly recommend for anyone considering a pool.",
              },
              {
                name: "David Thompson",
                location: "Vaughan, ON",
                rating: 5,
                text: "The spa integration is perfect. The whole family enjoys our new outdoor living space every day.",
              },
            ].map((testimonial, index) => (
              <ScrollReveal key={index} animation="fadeInUp" delay={index * 150}>
                <Card className="p-6 bg-white border border-gray-200 rounded-2xl shadow-lg">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-blue-400 text-blue-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section-luxury bg-white">
        <div className="container-luxury max-w-4xl">
          <ScrollReveal animation="fadeInUp">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Frequently asked questions</h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed px-4 sm:px-0">Get answers to common questions about our services</p>
            </div>
          </ScrollReveal>

          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Quick Answers Section */}
            <ScrollReveal animation="fadeInUp" delay={200}>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center text-primary">Quick Answers</h3>
                <Accordion type="single" collapsible className="space-y-3">
                  {[
                    {
                      question: "Do you build pools?",
                      answer: "Yes, we specialize in custom pool construction using premium materials and proven techniques.",
                    },
                    {
                      question: "Do you renovate pools?",
                      answer: "Yes, we transform existing pools with modern upgrades, new finishes, and enhanced features.",
                    },
                    {
                      question: "Do you do leak detection?",
                      answer: "Yes, we provide professional leak detection and repair services using advanced equipment and techniques.",
                    },
                    {
                      question: "Do you do weekly service and maintenance?",
                      answer: "Yes, we offer comprehensive weekly maintenance packages including cleaning, chemical balancing, and equipment checks.",
                    },
                  ].map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`quick-${index}`} 
                      className="bg-white border border-gray-200 rounded-2xl p-4 shadow-lg overflow-hidden"
                    >
                      <AccordionTrigger className="text-left font-semibold text-primary hover:text-blue-600 transition-colors duration-300 px-4 sm:px-6 py-4 sm:py-5 hover:no-underline [&[data-state=open]]:text-blue-600 text-base sm:text-lg min-h-[44px] touch-manipulation">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-slate-600 leading-relaxed px-4 sm:px-6 pb-4 sm:pb-5 text-sm sm:text-base">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </ScrollReveal>

            {/* Detailed Information Section */}
            <ScrollReveal animation="fadeInUp" delay={400}>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center text-primary">Detailed Information</h3>
                <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
                  {[
                    {
                      question: "How long does pool construction typically take?",
                      answer:
                        "Pool construction typically takes 6-12 weeks depending on the complexity of the design, weather conditions, and permit approval times. We provide detailed timelines during the consultation phase and keep you updated throughout the entire process.",
                    },
                    {
                      question: "Do you provide maintenance services?",
                      answer:
                        "Yes, we offer comprehensive maintenance packages including weekly cleaning, chemical balancing, equipment service, and seasonal opening/closing. Our maintenance team ensures your pool stays crystal clear and perfectly balanced year-round.",
                    },
                    {
                      question: "What warranty do you provide?",
                      answer:
                        "We provide a comprehensive warranty covering structural work for 10 years, equipment for 1-2 years, and surface finishes for 1-2 years depending on materials. This gives you peace of mind knowing your investment is protected.",
                    },
                    {
                      question: "Can you work with existing pools?",
                      answer:
                        "Absolutely! We specialize in pool renovations, equipment upgrades, surface refinishing, and adding new features to existing pools. Whether it's a complete makeover or specific improvements, we can transform your current pool.",
                    },
                    {
                      question: "Do you handle permits and inspections?",
                      answer:
                        "Yes, we handle all necessary permits, inspections, and ensure compliance with local building codes and safety regulations. Our team takes care of all the paperwork so you don't have to worry about it.",
                    },
                    {
                      question: "What financing options are available?",
                      answer:
                        "We offer flexible financing options to make your dream pool affordable. Our financing partners provide competitive rates and terms tailored to your budget. Contact us for a consultation to discuss your options.",
                    },
                  ].map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`detailed-${index}`} 
                      className="bg-white border border-gray-200 rounded-2xl p-4 shadow-lg overflow-hidden"
                    >
                      <AccordionTrigger className="text-left font-semibold text-primary hover:text-blue-600 transition-colors duration-300 px-4 sm:px-6 py-4 sm:py-5 hover:no-underline [&[data-state=open]]:text-blue-600 text-base sm:text-lg min-h-[44px] touch-manipulation">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-slate-600 leading-relaxed px-4 sm:px-6 pb-4 sm:pb-5 text-sm sm:text-base">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal animation="fadeInUp" delay={600}>
            <div className="text-center mt-12">
              <a href="tel:+14167172750">
                <Button className="btn-luxury">
                  Contact Us for More Info
                </Button>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Service Area Map Section */}
      <ServiceAreaMap />

      {/* Final CTA Section */}
      <FinalCtaSection />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fadeInUp">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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

              <div>
                <h4 className="font-semibold mb-4">Services</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <Link href="/services" className="hover:text-white transition-colors duration-300">
                      Pool Design
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="hover:text-white transition-colors duration-300">
                      Pool Construction
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
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fadeInUp" delay={200}>
            <div className="border-t border-gray-800 mt-12 pt-8 text-center">
              <p className="text-gray-400">&copy; 2025 Firm Pools & Spa. All rights reserved.</p>
            </div>
          </ScrollReveal>
        </div>
      </footer>

      {/* Full Gallery Modal */}
      <FullGallery isOpen={isGalleryOpen} onClose={() => setIsGalleryOpen(false)} />
    </div>
  )
}
