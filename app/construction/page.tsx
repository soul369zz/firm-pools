"use client"

import { useState } from "react"
import Image from "next/image"
import OptimizedImage from "@/components/optimized-image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { ServiceAreaMap } from "@/components/service-area-map"

import { ScrollReveal } from "@/components/scroll-reveal"
import { ArrowRight, ArrowLeft, Phone, Pencil, Shovel, Hammer, Paintbrush, Award, Instagram, MessageCircle, Mail, MapPin, Copy } from "lucide-react"

export default function ConstructionPage() {
  // State for button expansions and copy feedback
  const [expandedButtons, setExpandedButtons] = useState<{[key: string]: boolean}>({})
  const [copiedText, setCopiedText] = useState("")

  const handleButtonClick = (buttonId: string) => {
    // Check if mobile device
    if (window.innerWidth <= 768) {
      // Mobile: direct call - use Ruel's number for all construction page buttons except Kevin's individual buttons
      if (buttonId === 'call-kevin') {
        window.location.href = "tel:+14169061960"
      } else if (buttonId === 'text-kevin') {
        window.location.href = "sms:+14169061960"
      } else if (buttonId === 'text-ruel') {
        window.location.href = "sms:+14167172750"
      } else {
        // All other buttons use Ruel's number for calls
        window.location.href = "tel:+14167172750"
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
                <span className="text-sm">+1(416) 717-2750</span>
                <div
                  className="cursor-pointer hover:bg-white hover:text-luxury-gold rounded-full p-1 transition-colors duration-200"
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
          </div>
        </div>
      </ScrollReveal>

      {/* Construction Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fadeInUp">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Construction Services</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive construction services from design to completion
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
                        expandedButtons[`construction-service-${index}`] ? 'bg-luxury-gold text-white px-6' : ''
                      }`}
                      onClick={() => handleButtonClick(`construction-service-${index}`)}
                      style={{
                        width: expandedButtons[`construction-service-${index}`] ? 'auto' : undefined,
                        minWidth: expandedButtons[`construction-service-${index}`] ? '200px' : undefined
                      }}
                    >
                      <div className={`transition-all duration-300 ${expandedButtons[`construction-service-${index}`] ? 'hidden' : 'block'}`}>
                        Learn More
                      </div>
                      <div className={`transition-all duration-300 ${expandedButtons[`construction-service-${index}`] ? 'flex items-center gap-2' : 'hidden'}`}>
                        <span className="text-sm">+1(416) 717-2750</span>
                        <div
                          className="cursor-pointer hover:bg-white hover:text-luxury-gold rounded-full p-1 transition-colors duration-200"
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
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

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

          {/* Timeline - Progress Flow Visualization */}
          <div className="overflow-x-auto pb-8 scrollbar-hide">
            <div className="flex min-w-max space-x-6 lg:space-x-12 px-4 relative">
              {[
                {
                  step: 1,
                  title: "DESIGN",
                  icon: <Pencil className="w-8 h-8" />,
                  description: "Collaborative design process to create your perfect aquatic environment",
                },
                {
                  step: 2,
                  title: "EXCAVATE",
                  icon: <Shovel className="w-8 h-8" />,
                  description: "Precision excavation with state-of-the-art equipment",
                },
                {
                  step: 3,
                  title: "FORM & STEEL",
                  icon: <Hammer className="w-8 h-8" />,
                  description: "Steel reinforcement and forming for structural foundation",
                },
                {
                  step: 4,
                  title: "SHOTCRETE",
                  icon: <Hammer className="w-8 h-8" />,
                  description: "High-strength concrete application for structural integrity",
                },
                {
                  step: 5,
                  title: "TILE",
                  icon: <Paintbrush className="w-8 h-8" />,
                  description: "Expert installation of premium tiles and finishes",
                },
                {
                  step: 6,
                  title: "HANDOVER",
                  icon: <Award className="w-8 h-8" />,
                  description: "Final inspection and comprehensive training on pool operation",
                },
              ].map((step, index, array) => (
                <ScrollReveal key={index} animation="fadeInUp" delay={index * 150}>
                  <div className="flex flex-col items-center w-64 relative">
                    {/* Progress Connection Line */}
                    {index < array.length - 1 && (
                      <div className="absolute top-8 left-32 w-24 lg:w-36 h-1 bg-gray-200 rounded-full hidden md:block z-0">
                        <div className={`h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full progress-bar-${index + 1} w-0`}></div>
                        {/* Flowing Particles */}
                        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                          <div className={`w-2 h-1 bg-blue-400 rounded-full animate-flow-${index + 1} absolute top-0`}></div>
                          <div className={`w-1 h-1 bg-blue-300 rounded-full animate-flow-${index + 1} absolute top-0`} style={{animationDelay: `${0.3 + index * 0.1}s`}}></div>
                          <div className={`w-1 h-1 bg-blue-200 rounded-full animate-flow-${index + 1} absolute top-0`} style={{animationDelay: `${0.6 + index * 0.1}s`}}></div>
                        </div>
                      </div>
                    )}

                    {/* Step Circle with Enhanced Design */}
                    <div className="flex items-center mb-6 w-full relative z-10">
                      <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white shadow-lg relative overflow-hidden group">
                        {/* Shimmer Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                        {step.icon}
                        {/* Progress Ring */}
                        <div className="absolute inset-0 rounded-full border-2 border-blue-300/30">
                          <div className={`absolute inset-0 rounded-full border-2 border-blue-400 border-r-transparent animate-spin`} style={{animationDelay: `${index * 0.2}s`, animationDuration: '3s'}}></div>
                        </div>
                      </div>

                      {/* Connection Arrow with Flow Effect */}
                      {index < array.length - 1 && (
                        <div className="flex-grow mx-2 hidden md:flex items-center justify-end relative">
                          <ArrowRight className="text-blue-600 z-10 drop-shadow-sm" />
                        </div>
                      )}
                    </div>

                    {/* Step Content */}
                    <div className="text-center relative z-10">
                      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 shadow-sm border border-blue-100/50 mb-3">
                        <div className="w-8 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mx-auto mb-2"></div>
                        <h3 className="text-xl font-bold mb-2 text-blue-900">
                          {step.step}. {step.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                      
                      {/* Step Progress Indicator */}
                      <div className="mt-4 flex justify-center">
                        <div className="flex space-x-1">
                          {Array.from({ length: 6 }).map((_, i) => (
                            <div
                              key={i}
                              className={`w-2 h-2 rounded-full transition-all duration-500 ${
                                i <= index ? 'bg-blue-500 scale-110' : 'bg-gray-300'
                              }`}
                              style={{ animationDelay: `${i * 0.1}s` }}
                            ></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            
            {/* Overall Progress Bar */}
            <div className="mt-8 max-w-4xl mx-auto px-4">
              <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                <span>Construction Process</span>
                <span>100% Quality Assured</span>
              </div>
              <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden shadow-inner">
                <div className="h-full bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 rounded-full progress-bar-1 w-0 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                </div>
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Start</span>
                <span>Dream Pool Complete</span>
              </div>
            </div>
          </div>

          <ScrollReveal animation="fadeInUp" delay={300}>
            <div className="text-center mt-12">
              <Button 
                className={`btn-luxury transition-all duration-300 relative overflow-hidden ${
                  expandedButtons['schedule1'] ? 'bg-luxury-gold text-white px-6' : ''
                }`}
                onClick={() => handleButtonClick('schedule1')}
                style={{
                  width: expandedButtons['schedule1'] ? 'auto' : undefined,
                  minWidth: expandedButtons['schedule1'] ? '200px' : undefined
                }}
              >
                <div className={`transition-all duration-300 ${expandedButtons['schedule1'] ? 'hidden' : 'block'}`}>
                  Schedule Consultation
                </div>
                <div className={`transition-all duration-300 ${expandedButtons['schedule1'] ? 'flex items-center gap-2' : 'hidden'}`}>
                  <span className="text-sm">+1(416) 717-2750</span>
                  <div
                    className="cursor-pointer hover:bg-white hover:text-luxury-gold rounded-full p-1 transition-colors duration-200"
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
                    <OptimizedImage
                      src={feature.image || "/placeholder.svg"}
                      alt={feature.title}
                      fill
                      className="object-cover"
                      quality={80}
                      priority={index < 3}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-gray-600 mb-4">{feature.description}</p>
                    <Button 
                      className={`btn-luxury w-full transition-all duration-300 relative overflow-hidden ${
                        expandedButtons[`learn-${index}`] ? 'bg-luxury-gold text-white px-6' : ''
                      }`}
                      onClick={() => handleButtonClick(`learn-${index}`)}
                      style={{
                        width: expandedButtons[`learn-${index}`] ? 'auto' : undefined,
                        minWidth: expandedButtons[`learn-${index}`] ? '200px' : undefined
                      }}
                    >
                      <div className={`transition-all duration-300 ${expandedButtons[`learn-${index}`] ? 'hidden' : 'block'}`}>
                        Learn More
                      </div>
                      <div className={`transition-all duration-300 ${expandedButtons[`learn-${index}`] ? 'flex items-center gap-2' : 'hidden'}`}>
                        <span className="text-sm">+1(416) 717-2750</span>
                        <div
                          className="cursor-pointer hover:bg-white hover:text-luxury-gold rounded-full p-1 transition-colors duration-200"
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
                image: "/construction/Image_fx (5).jpg",
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
                        <Button 
                          size="lg" 
                          className={`btn-luxury transition-all duration-300 relative overflow-hidden ${
                            expandedButtons[`project-${index}`] ? 'bg-luxury-gold text-white px-6' : ''
                          }`}
                          onClick={() => handleButtonClick(`project-${index}`)}
                          style={{
                            width: expandedButtons[`project-${index}`] ? 'auto' : undefined,
                            minWidth: expandedButtons[`project-${index}`] ? '200px' : undefined
                          }}
                        >
                          <div className={`transition-all duration-300 ${expandedButtons[`project-${index}`] ? 'hidden' : 'block'}`}>
                            Schedule Consultation
                          </div>
                          <div className={`transition-all duration-300 ${expandedButtons[`project-${index}`] ? 'flex items-center gap-2' : 'hidden'}`}>
                            <span className="text-sm">+1(416) 717-2750</span>
                            <div
                              className="cursor-pointer hover:bg-white hover:text-luxury-gold rounded-full p-1 transition-colors duration-200"
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
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

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
                    <Link href="/construction" className="hover:text-white transition-colors duration-300">
                      Pool Design
                    </Link>
                  </li>
                  <li>
                    <Link href="/construction" className="hover:text-white transition-colors duration-300">
                      Pool Construction
                    </Link>
                  </li>
                  <li>
                    <Link href="/construction" className="hover:text-white transition-colors duration-300">
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
