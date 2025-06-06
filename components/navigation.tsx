"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Navigation() {
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        // Don't hide nav when mobile menu is open
        if (!mobileMenuOpen) {
          if (window.scrollY > lastScrollY && window.scrollY > 100) {
            setVisible(false)
          } else {
            setVisible(true)
          }
        }
        setLastScrollY(window.scrollY)
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar)
      return () => window.removeEventListener('scroll', controlNavbar)
    }
  }, [lastScrollY, mobileMenuOpen])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      const nav = target.closest('nav')
      
      if (mobileMenuOpen && !nav) {
        setMobileMenuOpen(false)
      }
    }

    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [mobileMenuOpen])

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-sm",
        (visible || mobileMenuOpen) ? "translate-y-0 bg-black/40" : "-translate-y-full",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
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

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-4">
            <a href="tel:+14167172750">
              <Button className="bg-yellow-500 hover:bg-white hover:text-black text-black font-semibold border-2 border-yellow-500 hover:border-gray-300 text-sm px-4 py-2">
                Get Quote
              </Button>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-yellow-400 transition-colors"
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

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm border-t border-white/10">
            <div className="px-4 py-6 space-y-4">
              <Link
                href="/"
                className="block text-white hover:text-yellow-400 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>

              <Link
                href="/services"
                className="block text-white hover:text-yellow-400 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pool Maintenance
              </Link>

              <Link
                href="/construction"
                className="block text-white hover:text-yellow-400 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Construction & Renovation
              </Link>

              <Link
                href="/#reviews"
                className="block text-white hover:text-yellow-400 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Reviews
              </Link>
              <Link
                href="/#gallery"
                className="block text-white hover:text-yellow-400 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Our Work
              </Link>
              <Link
                href="/#faq"
                className="block text-white hover:text-yellow-400 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
