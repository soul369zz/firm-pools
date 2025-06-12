"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Menu, X, Phone, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Navigation() {
  const pathname = usePathname()
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [expandedButtons, setExpandedButtons] = useState<{[key: string]: boolean}>({})
  const [copiedText, setCopiedText] = useState("")

  const handleButtonClick = (buttonId: string) => {
    // Check if mobile device
    if (window.innerWidth <= 768) {
      // Mobile: direct call - use Ruel's number for construction page, Kevin's for others
      if (pathname === '/construction') {
        window.location.href = "tel:+14167172750"
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

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
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

          <div className="lg:hidden flex items-center space-x-4">
            <Button 
              className={`bg-yellow-500 hover:bg-white hover:text-black text-black font-semibold border-2 border-yellow-500 hover:border-gray-300 text-sm px-4 py-3 min-h-[44px] transition-all duration-300 relative overflow-hidden ${
                expandedButtons['mobile-quote'] ? 'bg-luxury-gold border-luxury-gold text-white' : ''
              }`}
              onClick={() => handleButtonClick('mobile-quote')}
              style={{
                width: expandedButtons['mobile-quote'] ? 'auto' : undefined,
                minWidth: expandedButtons['mobile-quote'] ? '200px' : undefined
              }}
            >
              <div className={`transition-all duration-300 ${expandedButtons['mobile-quote'] ? 'hidden' : 'block'}`}>
                Get Quote
              </div>
              <div className={`transition-all duration-300 ${expandedButtons['mobile-quote'] ? 'flex items-center gap-2' : 'hidden'}`}>
                <span className="text-sm">{pathname === '/construction' ? '+1(416) 717-2750' : '+1(416) 906-1960'}</span>
                <div
                  className="cursor-pointer hover:bg-white hover:text-luxury-gold rounded-full p-1 transition-colors duration-200"
                  onClick={(e) => {
                    e.stopPropagation()
                    const phoneNumber = pathname === '/construction' ? '+1(416) 717-2750' : '+1(416) 906-1960'
                    copyToClipboard(phoneNumber)
                  }}
                  title="Copy number"
                >
                  <Copy size={16} />
                </div>
                {copiedText === (pathname === '/construction' ? '+1(416) 717-2750' : '+1(416) 906-1960') && (
                  <span className="text-xs text-white/80 ml-1">Copied!</span>
                )}
              </div>
            </Button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-yellow-400 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          <div className="hidden lg:block">
            <Button 
              className={`bg-yellow-500 hover:bg-white hover:text-black text-black font-semibold border-2 border-yellow-500 hover:border-gray-300 transition-all duration-300 relative overflow-hidden ${
                expandedButtons['desktop-quote'] ? 'bg-luxury-gold border-luxury-gold text-white' : ''
              }`}
              onClick={() => handleButtonClick('desktop-quote')}
              style={{
                width: expandedButtons['desktop-quote'] ? 'auto' : undefined,
                minWidth: expandedButtons['desktop-quote'] ? '200px' : undefined
              }}
            >
              <div className={`transition-all duration-300 ${expandedButtons['desktop-quote'] ? 'hidden' : 'block'}`}>
                Get Quote
              </div>
              <div className={`transition-all duration-300 ${expandedButtons['desktop-quote'] ? 'flex items-center gap-2' : 'hidden'}`}>
                <span className="text-sm">{pathname === '/construction' ? '+1(416) 717-2750' : '+1(416) 906-1960'}</span>
                <div
                  className="cursor-pointer hover:bg-white hover:text-luxury-gold rounded-full p-1 transition-colors duration-200"
                  onClick={(e) => {
                    e.stopPropagation()
                    const phoneNumber = pathname === '/construction' ? '+1(416) 717-2750' : '+1(416) 906-1960'
                    copyToClipboard(phoneNumber)
                  }}
                  title="Copy number"
                >
                  <Copy size={16} />
                </div>
                {copiedText === (pathname === '/construction' ? '+1(416) 717-2750' : '+1(416) 906-1960') && (
                  <span className="text-xs text-white/80 ml-1">Copied!</span>
                )}
              </div>
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm border-t border-white/10">
            <div className="px-4 py-6 space-y-4">
              <Link
                href="/"
                className="block text-white hover:text-yellow-400 transition-colors py-4 text-lg min-h-[44px] flex items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/services"
                className="block text-white hover:text-yellow-400 transition-colors py-4 text-lg min-h-[44px] flex items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pool Maintenance
              </Link>
              <Link
                href="/construction"
                className="block text-white hover:text-yellow-400 transition-colors py-4 text-lg min-h-[44px] flex items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Construction & Renovation
              </Link>
              <Link
                href="/#reviews"
                className="block text-white hover:text-yellow-400 transition-colors py-4 text-lg min-h-[44px] flex items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Reviews
              </Link>
              <Link
                href="/#gallery"
                className="block text-white hover:text-yellow-400 transition-colors py-4 text-lg min-h-[44px] flex items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Our Work
              </Link>
              <Link
                href="/#faq"
                className="block text-white hover:text-yellow-400 transition-colors py-4 text-lg min-h-[44px] flex items-center"
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
