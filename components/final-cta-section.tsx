"use client"

import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, Copy } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { useState } from "react"

export function FinalCtaSection() {
  const [expandedButtons, setExpandedButtons] = useState<{[key: string]: boolean}>({})
  const [copiedText, setCopiedText] = useState("")

  const handleButtonClick = (buttonId: string) => {
    // Check if mobile device
    if (window.innerWidth <= 768) {
      // Mobile: direct call/text - use Ruel's number for Ruel buttons
      if (buttonId.includes('call')) {
        if (buttonId.includes('Ruel')) {
          window.location.href = "tel:+14167172750"
        } else {
          window.location.href = "tel:+14169061960"
        }
      } else if (buttonId.includes('text')) {
        if (buttonId.includes('Ruel')) {
          window.location.href = "sms:+14167172750"
        } else {
          window.location.href = "sms:+14169061960"
        }
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
    <section className="mobile-section bg-gradient-to-br from-blue-50 to-gray-50">
      <div className="mobile-container max-w-4xl">
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
                  className={`w-full bg-green-600 hover:bg-green-700 text-white btn-luxury transition-all duration-300 ${
                    expandedButtons.callRuel ? 'bg-luxury-gold hover:bg-luxury-gold/90' : ''
                  }`} 
                  size="lg"
                  onClick={() => handleButtonClick('callRuel')}
                >
                  {expandedButtons.callRuel ? (
                    <div className="flex items-center justify-between w-full">
                      <span>+1(416) 717-2750</span>
                      <div
                        onClick={(e) => {
                          e.stopPropagation()
                          copyToClipboard("+1(416) 717-2750")
                        }}
                        className="flex items-center space-x-1 bg-white/20 px-2 py-1 rounded cursor-pointer hover:bg-white/30 transition-colors"
                      >
                        <Copy className="w-4 h-4" />
                        <span className="text-sm">
                          {copiedText === "+1(416) 717-2750" ? "Copied!" : "Copy"}
                        </span>
                      </div>
                    </div>
                  ) : (
                    "Call Ruel"
                  )}
                </Button>
                <Button 
                  className={`w-full bg-green-600 hover:bg-green-700 text-white btn-luxury transition-all duration-300 ${
                    expandedButtons.callKevin ? 'bg-luxury-gold hover:bg-luxury-gold/90' : ''
                  }`} 
                  size="lg"
                  onClick={() => handleButtonClick('callKevin')}
                >
                  {expandedButtons.callKevin ? (
                    <div className="flex items-center justify-between w-full">
                      <span>+1(416) 906-1960</span>
                      <div
                        onClick={(e) => {
                          e.stopPropagation()
                          copyToClipboard("+1(416) 906-1960")
                        }}
                        className="flex items-center space-x-1 bg-white/20 px-2 py-1 rounded cursor-pointer hover:bg-white/30 transition-colors"
                      >
                        <Copy className="w-4 h-4" />
                        <span className="text-sm">
                          {copiedText === "+1(416) 906-1960" ? "Copied!" : "Copy"}
                        </span>
                      </div>
                    </div>
                  ) : (
                    "Call Kevin"
                  )}
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
                  className={`w-full bg-purple-600 hover:bg-purple-700 text-white btn-luxury transition-all duration-300 ${
                    expandedButtons.textRuel ? 'bg-luxury-gold hover:bg-luxury-gold/90' : ''
                  }`} 
                  size="lg"
                  onClick={() => handleButtonClick('textRuel')}
                >
                  {expandedButtons.textRuel ? (
                    <div className="flex items-center justify-between w-full">
                      <span>+1(416) 717-2750</span>
                      <div
                        onClick={(e) => {
                          e.stopPropagation()
                          copyToClipboard("+1(416) 717-2750")
                        }}
                        className="flex items-center space-x-1 bg-white/20 px-2 py-1 rounded cursor-pointer hover:bg-white/30 transition-colors"
                      >
                        <Copy className="w-4 h-4" />
                        <span className="text-sm">
                          {copiedText === "+1(416) 717-2750" ? "Copied!" : "Copy"}
                        </span>
                      </div>
                    </div>
                  ) : (
                    "Text Ruel"
                  )}
                </Button>
                <Button 
                  className={`w-full bg-purple-600 hover:bg-purple-700 text-white btn-luxury transition-all duration-300 ${
                    expandedButtons.textKevin ? 'bg-luxury-gold hover:bg-luxury-gold/90' : ''
                  }`} 
                  size="lg"
                  onClick={() => handleButtonClick('textKevin')}
                >
                  {expandedButtons.textKevin ? (
                    <div className="flex items-center justify-between w-full">
                      <span>+1(416) 906-1960</span>
                      <div
                        onClick={(e) => {
                          e.stopPropagation()
                          copyToClipboard("+1(416) 906-1960")
                        }}
                        className="flex items-center space-x-1 bg-white/20 px-2 py-1 rounded cursor-pointer hover:bg-white/30 transition-colors"
                      >
                        <Copy className="w-4 h-4" />
                        <span className="text-sm">
                          {copiedText === "+1(416) 906-1960" ? "Copied!" : "Copy"}
                        </span>
                      </div>
                    </div>
                  ) : (
                    "Text Kevin"
                  )}
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
  )
}
