"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Check, MapPin, Search, ChevronDown } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { cn } from "@/lib/utils"

export function ServiceAreaMap() {
  const [postalCode, setPostalCode] = useState("")
  const [isChecking, setIsChecking] = useState(false)
  const [serviceResult, setServiceResult] = useState<string | null>(null)
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const handlePostalCodeCheck = async () => {
    if (!postalCode.trim()) return

    setIsChecking(true)
    // Simulate API call
    setTimeout(() => {
      setServiceResult("We service your area! Next-day response available.")
      setIsChecking(false)
    }, 1000)
  }

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId)
  }

  const serviceAreas = [
    {
      id: "gta",
      title: "GTA",
      subtitle: "",
      color: "emerald",
      bgColor: "from-emerald-50 to-green-50",
      borderColor: "border-emerald-200",
      textColor: "text-emerald-700",
      iconColor: "bg-emerald-500",
      cities: [
        "Toronto",
        "Mississauga", 
        "Brampton",
        "Markham",
        "Vaughan",
        "Richmond Hill",
        "Oakville",
        "Burlington",
        "Milton",
        "Uxbridge",
        "Keswick"
      ]
    },
    {
      id: "outside-gta",
      title: "Outside GTA",
      subtitle: "",
      color: "blue",
      bgColor: "from-blue-50 to-indigo-50",
      borderColor: "border-blue-200",
      textColor: "text-blue-700",
      iconColor: "bg-blue-500",
      cities: [
        "Newmarket",
        "Aurora",
        "Whitby",
        "Oshawa",
        "Ajax",
        "Pickering",
        "Lindsay",
        "Peterborough",
        "Kingston",
        "Niagara Region",
        "Hamilton",
        "London",
        "Muskoka",
        "Gravenhurst",
        "Collingwood",
        "Barrie",
        "Innisfil",
        "Bracebridge"
      ]
    }
  ]

  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fadeInUp">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Service Area Map</h2>
            <p className="text-base sm:text-lg text-gray-600">Find out if we service your area and response times</p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
          {/* Map Section */}
          <ScrollReveal animation="fadeInLeft">
            <div className="relative">
              <div className="bg-gray-100 border-2 border-gray-300 rounded-lg p-4 sm:p-8 min-h-[350px] sm:min-h-[400px] flex flex-col justify-center">
                <div className="text-center mb-6 sm:mb-8">
                  <div className="relative overflow-hidden rounded-lg shadow-md">
                    <img 
                      src="/gallery/MAP.jpg" 
                      alt="Service Coverage Map - Greater Toronto Area"
                      className="w-full h-auto max-w-md mx-auto object-cover"
                    />
                  </div>
                </div>

                {/* Service Areas */}
                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <span className="text-base sm:text-lg font-medium">Next-day service • Including weekends</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <span className="text-base sm:text-lg font-medium">Fast response • 7 days a week</span>
                  </div>
                </div>

                {/* Postal Code Checker */}
                <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200 shadow-sm">
                  <h4 className="font-semibold mb-3 sm:mb-4 text-center text-sm sm:text-base">POSTAL CODE CHECKER</h4>
                  <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                    <Input
                      type="text"
                      placeholder="Enter postal code (e.g. M5V 3A8)"
                      value={postalCode}
                      onChange={(e) => setPostalCode(e.target.value.toUpperCase())}
                      className="flex-1 border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 px-3 sm:px-4 py-2 sm:py-3 text-base sm:text-lg font-medium placeholder:text-gray-500 placeholder:font-normal rounded-lg"
                      maxLength={7}
                    />
                    <Button
                      onClick={handlePostalCodeCheck}
                      disabled={isChecking || !postalCode.trim()}
                      className="bg-blue-600 hover:bg-blue-700 px-4 sm:px-6 py-2 sm:py-3 w-full sm:w-auto"
                    >
                      {isChecking ? (
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <Search className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                  {serviceResult && (
                    <div className="mt-3 sm:mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                      <p className="text-green-800 text-sm font-medium">{serviceResult}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Mobile-Optimized Luxury Service Areas Accordion */}
          <ScrollReveal animation="fadeInRight">
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Primary Service Areas</h3>
                
                <div className="space-y-4 sm:space-y-4">
                  {serviceAreas.map((area, index) => (
                    <ScrollReveal key={area.id} animation="fadeInUp" delay={index * 100}>
                      <div className={cn(
                        "bg-white rounded-xl sm:rounded-2xl border-2 overflow-hidden transition-all duration-500 ease-out shadow-lg hover:shadow-xl",
                        expandedSection === area.id 
                          ? `${area.borderColor} shadow-xl scale-[1.01] sm:scale-[1.02]` 
                          : "border-gray-200 hover:border-gray-300"
                      )}>
                        <button
                          onClick={() => toggleSection(area.id)}
                          className={cn(
                            "w-full flex items-center justify-between p-4 sm:p-5 lg:p-6 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset transition-all duration-300 group touch-manipulation min-h-[68px] sm:min-h-[auto] active:scale-[0.98]",
                            expandedSection === area.id 
                              ? `bg-gradient-to-r ${area.bgColor}` 
                              : "hover:bg-gray-50 active:bg-gray-100"
                          )}
                        >
                          <div className="flex items-center space-x-3 sm:space-x-4 flex-1 min-w-0">
                            <div className={cn(
                              "w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0",
                              area.iconColor
                            )}>
                              <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <h4 className={cn(
                                "text-lg sm:text-xl font-bold transition-colors duration-300 truncate",
                                expandedSection === area.id ? area.textColor : "text-gray-900"
                              )}>
                                {area.title}
                              </h4>
                            </div>
                          </div>
                          <ChevronDown className={cn(
                            "w-5 h-5 sm:w-6 sm:h-6 transition-all duration-300 flex-shrink-0 ml-2",
                            expandedSection === area.id 
                              ? `${area.textColor} rotate-180` 
                              : "text-gray-400 group-hover:text-gray-600"
                          )} />
                        </button>

                        <div
                          className={cn(
                            "overflow-hidden transition-all duration-500 ease-out",
                            expandedSection === area.id 
                              ? "max-h-[2000px] opacity-100" 
                              : "max-h-0 opacity-0"
                          )}
                        >
                          <div className={cn(
                            "p-3 sm:p-4 lg:p-6 pt-0 transition-all duration-500 delay-100 transform",
                            expandedSection === area.id 
                              ? "translate-y-0 opacity-100" 
                              : "translate-y-4 opacity-0"
                          )}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-2 sm:gap-3 pb-2">
                              {area.cities.map((city, cityIndex) => (
                                <div
                                  key={city}
                                  className={cn(
                                    "flex items-center space-x-2 sm:space-x-3 p-3 sm:p-3 lg:p-3 rounded-lg border transition-all duration-300 hover:shadow-md group touch-manipulation min-h-[52px] sm:min-h-[48px]",
                                    expandedSection === area.id 
                                      ? `bg-white ${area.borderColor} hover:scale-[1.01] sm:hover:scale-[1.02] active:scale-[0.99]` 
                                      : "bg-gray-50 border-gray-200"
                                  )}
                                  style={{
                                    animationDelay: `${cityIndex * 30}ms`
                                  }}
                                >
                                  <div className={cn(
                                    "w-2.5 h-2.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 flex-shrink-0",
                                    area.iconColor
                                  )} />
                                  <span className={cn(
                                    "font-medium transition-colors duration-300 text-sm sm:text-sm lg:text-base leading-tight flex-1",
                                    expandedSection === area.id ? area.textColor : "text-gray-700"
                                  )}>
                                    {city}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>



              <div className="p-4 sm:p-6 bg-gray-50 rounded-lg">
                <h4 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Don't see your area?</h4>
                <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
                  We're always expanding our service coverage. Contact us to discuss your project.
                </p>
                <a href="tel:+14167172750">
                  <Button variant="outline" className="btn-luxury w-full sm:w-auto">
                    Contact Us
                  </Button>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
