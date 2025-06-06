"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Navigation() {
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setVisible(false)
        } else {
          setVisible(true)
        }
        setLastScrollY(window.scrollY)
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar)
      return () => window.removeEventListener('scroll', controlNavbar)
    }
  }, [lastScrollY])

  // Close mobile menu when clicking outside or on navigation
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }

    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden'
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
        document.body.style.overflow = 'unset'
      }
    }
  }, [mobileMenuOpen])

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-sm",
        visible ? "translate-y-0 bg-black/40" : "-translate-y-full",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-white font-bold text-xl">
              Firm Pools & Spa
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="text-white hover:text-yellow-400 transition-colors">
                Home
              </Link>
              <Link href="/services" className="text-white hover:text-yellow-400 transition-colors">
                Pool Maintenance
              </Link>
              <Link href="/construction" className="text-white hover:text-yellow-400 transition-colors">
                Construction & Renovation
              </Link>
              <Link href="/#reviews" className="text-white hover:text-yellow-400 transition-colors">
                Reviews
              </Link>
              <Link href="/#gallery" className="text-white hover:text-yellow-400 transition-colors">
                Our Work
              </Link>
              <Link href="/#faq" className="text-white hover:text-yellow-400 transition-colors">
                FAQ
              </Link>
            </div>
          </div>

          {/* Mobile menu button - Optimized for touch */}
          <div className="lg:hidden flex items-center space-x-2">
            {/* Mobile Call Button */}
            <a 
              href="tel:+14167172750" 
              className="p-2 bg-green-600 hover:bg-green-700 rounded-full transition-colors touch-target"
              aria-label="Call us"
            >
              <Phone className="w-5 h-5 text-white" />
            </a>
            
            {/* Hamburger Menu Button - Larger touch target */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:text-yellow-400 transition-colors touch-target"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Desktop Get Quote Button */}
          <div className="hidden lg:block">
            <a href="tel:+14167172750">
              <Button className="bg-yellow-500 hover:bg-white hover:text-black text-black font-semibold border-2 border-yellow-500 hover:border-gray-300">
                Get Quote
              </Button>
            </a>
          </div>
        </div>

        {/* Mobile Navigation Menu - Improved positioning and styling */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed top-16 left-0 right-0 bottom-0 bg-black/95 backdrop-blur-md z-50 animate-slide-in-down">
            <div className="flex flex-col h-full">
              {/* Navigation Links */}
              <div className="flex-1 px-6 py-8 space-y-6 overflow-y-auto">
                <Link
                  href="/"
                  className="block text-white hover:text-yellow-400 transition-colors py-3 text-lg font-medium border-b border-white/10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/services"
                  className="block text-white hover:text-yellow-400 transition-colors py-3 text-lg font-medium border-b border-white/10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Pool Maintenance
                </Link>
                <Link
                  href="/construction"
                  className="block text-white hover:text-yellow-400 transition-colors py-3 text-lg font-medium border-b border-white/10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Construction & Renovation
                </Link>
                <Link
                  href="/#reviews"
                  className="block text-white hover:text-yellow-400 transition-colors py-3 text-lg font-medium border-b border-white/10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Reviews
                </Link>
                <Link
                  href="/#gallery"
                  className="block text-white hover:text-yellow-400 transition-colors py-3 text-lg font-medium border-b border-white/10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Our Work
                </Link>
                <Link
                  href="/#faq"
                  className="block text-white hover:text-yellow-400 transition-colors py-3 text-lg font-medium border-b border-white/10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  FAQ
                </Link>
              </div>

              {/* Bottom CTA Section */}
              <div className="px-6 py-6 bg-black/80 border-t border-white/10">
                <div className="space-y-4">
                  <a 
                    href="tel:+14167172750" 
                    className="block w-full btn-luxury text-center py-4"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Call (416) 717-2750
                  </a>
                  <div className="text-center">
                    <p className="text-white/80 text-sm">Available 7 days a week</p>
                    <p className="text-yellow-400 text-sm font-medium">Free consultation & quotes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
