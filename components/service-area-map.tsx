"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Check, MapPin, Search } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export function ServiceAreaMap() {
  const [postalCode, setPostalCode] = useState("")
  const [isChecking, setIsChecking] = useState(false)
  const [serviceResult, setServiceResult] = useState<string | null>(null)

  const handlePostalCodeCheck = async () => {
    if (!postalCode.trim()) return

    setIsChecking(true)
    // Simulate API call
    setTimeout(() => {
      setServiceResult("We service your area! Next-day response available.")
      setIsChecking(false)
    }, 1000)
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fadeInUp">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Service Area Map</h2>
            <p className="text-lg text-gray-600">Find out if we service your area and response times</p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map Section */}
          <ScrollReveal animation="fadeInLeft">
            <div className="relative">
              <div className="bg-gray-100 border-2 border-gray-300 rounded-lg p-8 min-h-[400px] flex flex-col justify-center">
                <div className="text-center mb-8">
                  <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold text-gray-700 mb-2">[INTERACTIVE MAP OF GTA]</h3>
                  <p className="text-gray-500">Service coverage visualization</p>
                </div>

                {/* Service Areas */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-lg font-medium">GTA: Next-day response</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-lg font-medium">Ontario: Weekly service available</span>
                  </div>
                </div>

                {/* Postal Code Checker */}
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <h4 className="font-semibold mb-4 text-center">POSTAL CODE CHECKER</h4>
                  <div className="flex space-x-2">
                    <Input
                      type="text"
                      placeholder="Enter postal code (e.g. M5V 3A8)"
                      value={postalCode}
                      onChange={(e) => setPostalCode(e.target.value.toUpperCase())}
                      className="flex-1 border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 px-4 py-3 text-lg font-medium placeholder:text-gray-500 placeholder:font-normal rounded-lg"
                      maxLength={7}
                    />
                    <Button
                      onClick={handlePostalCodeCheck}
                      disabled={isChecking || !postalCode.trim()}
                      className="bg-blue-600 hover:bg-blue-700 px-6 py-3"
                    >
                      {isChecking ? (
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <Search className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                  {serviceResult && (
                    <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                      <p className="text-green-800 text-sm font-medium">{serviceResult}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Service Areas List */}
          <ScrollReveal animation="fadeInRight">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Primary Service Areas</h3>
                <div className="grid sm:grid-cols-2 gap-4">
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
                  ].map((city, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-blue-600 rounded-full" />
                      <span className="font-medium">{city}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">Response Times</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full" />
                      <span className="font-semibold text-green-800">Next-Day Service</span>
                    </div>
                    <p className="text-green-700 text-sm">Greater Toronto Area (GTA)</p>
                  </div>
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full" />
                      <span className="font-semibold text-blue-800">Weekly Service</span>
                    </div>
                    <p className="text-blue-700 text-sm">Extended Ontario regions</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gray-50 rounded-lg">
                <h4 className="font-semibold mb-3">Don't see your area?</h4>
                <p className="text-gray-600 mb-4">
                  We're always expanding our service coverage. Contact us to discuss your project.
                </p>
                <a href="tel:+14167172750">
                  <Button variant="outline" className="btn-luxury">
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
